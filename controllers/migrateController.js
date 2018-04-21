'use strict';

const cabinets = require('../data.json').cabinets;
const cabinetsModel = require('../models/cabinetsModel');

module.exports = function(req, res) {
	cabinets.map((cabinet) => {
		cabinetsModel.getByNumber(cabinet.number, (item) => {
			if (item) {
				cabinetsModel.updateByNumber(cabinet.number, cabinet, (err, response) => {
					if (err) throw err;
				});
			} else {
				cabinetsModel.insert(cabinet, (err, response) => {
					if (err) throw err;
				});
			}
		});
	});

	res.redirect('/');
}