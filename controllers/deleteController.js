'use strict';

const cabinetsModel = require('../models/cabinetsModel');

module.exports = function(req, res) {
	const number = req.params.number;

	cabinetsModel.deleteByNumber(number, (err, response) => res.redirect('/'));
};