package db

import (
	"encoding/json"
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
