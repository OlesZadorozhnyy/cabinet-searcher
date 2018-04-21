'use strict';

const cabinetsModel = require('../models/cabinetsModel');

module.exports = function(req, res) {
	const number = req.params.number;

	const data = {
		number: req.body.number,
		floor: req.body.floor,
		department_id: req.body.department_id,
		target: req.body.target,
		details: req.body.details
	};

	cabinetsModel.updateByNumber(number, data, (err, response) => res.redirect('/'));
};