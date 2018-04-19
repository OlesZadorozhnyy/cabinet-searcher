'use strict';

const rootController = require('../controllers/rootController');

module.exports = function(server, connector) {
	server.get('/', rootController);

	server.post('/api/messages', connector.listen());

	return server;
};