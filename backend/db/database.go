package db

import (
	"encoding/json"
	"fmt"

	badger "github.com/dgraph-io/badger/v4"
)

type DB struct {
	Db *badger.DB
}

func NewDatabase() (*DB, error) {
	opts := badger.DefaultOptions("data")
	db, err := badger.Open(opts)
	if err != nil {
		return nil, err
	}
	return &DB{
		Db: db,
	}, nil
}

func (d *DB) Close() {
	d.Db.Close()
}

func roomKey(id string) []byte {
	return []byte(id)
}

func contains(s []string, e string) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}

func (d *DB) RoomUpdate(data RoomInfo) error {
	return d.Db.Update(func(txn *badger.Txn) error {
		bytes, err := json.Marshal(data)
		if err != nil {
			return err
		}
		return txn.Set(roomKey(data.Id), bytes)
	})
}

func (d *DB) RoomGet(id string) (RoomInfo, error) {
	var data RoomInfo
	err := d.Db.View(func(txn *badger.Txn) error {
		item, err := txn.Get(roomKey(id))
		if err != nil {
			return err
		}

		var val []byte
		val, err = item.ValueCopy(val)
		if err != nil {
			return err
		}
		err = json.Unmarshal(val, &data)
		if err != nil {
			return err
		}
		return nil
	})
	return data, err
}

func (d *DB) RoomDelete(id string) error {
	return d.Db.Update(func(txn *badger.Txn) error {
		return txn.Delete(roomKey(id))
	})
}

func (d *DB) RoomList(ids []string) ([]RoomInfo, error) {
	data := []RoomInfo{}
	err := d.Db.View(func(txn *badger.Txn) error {
		opts := badger.DefaultIteratorOptions
		opts.PrefetchSize = 10
		it := txn.NewIterator(opts)
		defer it.Close()
		for it.Rewind(); it.Valid(); it.Next() {
			item := it.Item()
			err := item.Value(func(v []byte) error {
				var room RoomInfo
				err := json.Unmarshal(v, &room)
				if err != nil {
					return err
				}

				if contains(ids, room.Id) {
					data = append(data, room)
				}
				return nil
			})
			if err != nil {
				return err
			}
		}
		return nil
	})
	return data, err
}

func (d *DB) ItemDelete(itemPrefix string, containerId string, item Item) error {
	return d.Db.Update(func(txn *badger.Txn) error {
		key := fmt.Sprintf("%s-%s-%s", itemPrefix, containerId, item.GetId())
		return txn.Delete([]byte(key))
	})
}

func (d *DB) ItemUpdate(itemPrefix string, containerId string, item Item) error {
	return d.Db.Update(func(txn *badger.Txn) error {
		bytes, err := json.Marshal(item)
		if err != nil {
			return err
		}
		key := fmt.Sprintf("%s-%s-%s", itemPrefix, containerId, item.GetId())
		return txn.Set([]byte(key), bytes)
	})
}
func (d *DB) ItemList(itemPrefix string, containerId string, ids []string, item Item) ([]Item, error) {
	data := []Item{}
	err := d.Db.View(func(txn *badger.Txn) error {
		it := txn.NewIterator(badger.DefaultIteratorOptions)
		defer it.Close()
		prefix := []byte(fmt.Sprintf("%s-%s-", itemPrefix, containerId))
		for it.Seek(prefix); it.ValidForPrefix(prefix); it.Next() {
			it := it.Item()
			err := it.Value(func(v []byte) error {
				result, err := item.Unmarshal(v)
				if err != nil {
					return err
				}
				if len(ids) == 0 || contains(ids, result.GetId()) {
					data = append(data, result)
				}
				return nil
			})
			if err != nil {
				return err
			}
		}
		return nil
	})
	return data, err
}

func (d *DB) ItemClear(itemPrefix string, containerId string) error {
	err := d.Db.Update(func(txn *badger.Txn) error {
		it := txn.NewIterator(badger.DefaultIteratorOptions)
		defer it.Close()
		prefix := []byte(fmt.Sprintf("%s-%s-", itemPrefix, containerId))
		for it.Seek(prefix); it.ValidForPrefix(prefix); it.Next() {
			key := it.Item().Key()
			err := txn.Delete(key)
			if err != nil {
				return err
			}
		}
		return nil
	})
	return err
}
