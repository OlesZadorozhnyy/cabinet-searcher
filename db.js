'use strict';

const mongoClient = require('mongodb').MongoClient;

const dbName = 'cabinet_searcher';

module.exports.run = function(cb) {
	mongoClient.connect(process.env.MONGO_URL, (err, client) => {
		if (err) throw err;

		const db = client.db(dbName);

		cb(db);
	});
}