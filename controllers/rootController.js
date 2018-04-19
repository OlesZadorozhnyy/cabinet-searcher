'use strict';

const view = require('../views/index.html');

module.exports = function(req, res) {
	res.send(view);
};