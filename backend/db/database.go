package db

import (
	"encoding/json"
	"fmt"
	"log"

	badger "github.com/dgraph-io/badger/v4"
)

func InitDatabase() (*badger.DB, error) {
	opts := badger.DefaultOptions("data")
	db, err := badger.Open(opts)
	if err != nil {
		return nil, err
	}
	return db, nil
}

func CloseDatabase(db *badger.DB) {
	log.Println("Closing database")
	db.Close()
}

func RoomUpdate(db *badger.DB, id string, data RoomInfo) error {
	return db.Update(func(txn *badger.Txn) error {
		bytes, err := json.Marshal(data)
		if err != nil {
			return err
		}
		return txn.Set([]byte(id), bytes)
	})
}

func RoomGet(db *badger.DB, id string) (RoomInfo, error) {
	var data RoomInfo
	err := db.View(func(txn *badger.Txn) error {
		item, err := txn.Get([]byte(id))
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

func RoomDelete(db *badger.DB, id string) error {
	return db.Update(func(txn *badger.Txn) error {
		return txn.Delete([]byte(id))
	})
}

func contains(s []string, e string) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}

func RoomList(db *badger.DB, ids []string) ([]RoomInfo, error) {
	data := []RoomInfo{}
	err := db.View(func(txn *badger.Txn) error {
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

func RoomItemDelete[T Identifable](db *badger.DB, roomId string, item T) error {
	return db.Update(func(txn *badger.Txn) error {
		key := fmt.Sprintf("%s-%s-%s", fmt.Sprintf("%T", item), roomId, item.GetId())
		return txn.Delete([]byte(key))
	})
}

func RoomItemUpdate[T Identifable](db *badger.DB, roomId string, item T) error {
	return db.Update(func(txn *badger.Txn) error {
		bytes, err := json.Marshal(item)
		if err != nil {
			return err
		}
		key := fmt.Sprintf("%s-%s-%s", fmt.Sprintf("%T", item), roomId, item.GetId())
		return txn.Set([]byte(key), bytes)
	})
}

func RoomItemList[T Identifable](db *badger.DB, roomId string, ids []string) ([]T, error) {
	data := []T{}
	err := db.View(func(txn *badger.Txn) error {
		it := txn.NewIterator(badger.DefaultIteratorOptions)
		defer it.Close()
		var x T
		prefix := []byte(fmt.Sprintf("%s-%s-", fmt.Sprintf("%T", x), roomId))
		for it.Seek(prefix); it.ValidForPrefix(prefix); it.Next() {
			item := it.Item()
			err := item.Value(func(v []byte) error {
				var it T
				err := json.Unmarshal(v, &it)
				if err != nil {
					return err
				}
				if len(ids) == 0 || contains(ids, it.GetId()) {
					data = append(data, it)
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

func RoomItemClear[T Identifable](db *badger.DB, roomId string) error {
	err := db.Update(func(txn *badger.Txn) error {
		it := txn.NewIterator(badger.DefaultIteratorOptions)
		defer it.Close()
		var x T
		prefix := []byte(fmt.Sprintf("%s-%s-", fmt.Sprintf("%T", x), roomId))
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
