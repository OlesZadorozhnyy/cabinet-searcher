'use strict';

module.exports = function(server, connector) {
	server.post('/api/messages', connector.listen());

	return server;
};