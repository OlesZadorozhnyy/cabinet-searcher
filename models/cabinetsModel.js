'use strict';

const dbClient = require('../db');

const collectionName = 'cabinets';

module.exports = {
	getAll(cb) {
		dbClient.run((db) => {
			db.collection(collectionName).find({}).toArray((err, cabinets) => {
				cb(cabinets);
			});
		});
	},

	getByNumber(number, cb) {
		dbClient.run((db) => {
			db.collection(collectionName).findOne({ number: number }, (err, cabinet) => {
				cb(cabinet);
			});
		});
	},

	getByNumbers(numbers, cb) {
		dbClient.run((db) => {
			const query = { number: { $in: numbers } };

			db.collection(collectionName).find(query).toArray((err, cabinets) => {
				cb(cabinets);
			});
		});
	},

	insert(data, cb) {
		dbClient.run((db) => {
			db.collection(collectionName).insert(data, cb);
		})
	},

	updateByNumber(number, data, cb) {
		dbClient.run((db) => {
			const query = { number: number };
			const newValues = { $set: data };

			db.collection(collectionName).updateOne(query, newValues, cb);
		});
	},

	deleteByNumber(number, cb) {
		dbClient.run((db) => {
			const query = { number: number };

			db.collection(collectionName).deleteOne(query, cb);
		})
	}
};