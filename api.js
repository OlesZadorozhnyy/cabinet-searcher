'use strict';

const cabinetsModel = require('./models/cabinetsModel');

module.exports = {
	getCabinetsByNumbers(numbers) {
		return new Promise((resolve, reject) => {
			cabinetsModel.getByNumbers(numbers, (cabinets) => {
				return resolve(cabinets);
			});
		});
	}
};