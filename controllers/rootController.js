'use strict';

const departments = require('../constants/departments');
const cabinetsModel = require('../models/cabinetsModel');

module.exports = function(req, res) {
	cabinetsModel.getAll((cabinets) => {
		res.render('index', { departments, cabinets });
	});
};