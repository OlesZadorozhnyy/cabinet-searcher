'use strict';

const rootController = require('../controllers/rootController');

module.exports = function(router, connector) {
	router.get('/', rootController);

	router.post('/api/messages', connector.listen());

	return router;
};