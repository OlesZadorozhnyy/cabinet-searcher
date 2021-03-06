'use strict';

const rootController = require('../controllers/rootController');
const chatController = require('../controllers/chatController');

const createController = require('../controllers/createController');
const updateController = require('../controllers/updateController');
const deleteController = require('../controllers/deleteController');

const migrateController = require('../controllers/migrateController');

module.exports = function(router, connector) {
	router.get('/', rootController);
	router.get('/chat', chatController);

	router.post('/create', createController);
	router.put('/:number', updateController);
	router.delete('/:number', deleteController);

	router.get('/migrate', migrateController);

	router.post('/api/messages', connector.listen());

	return router;
};