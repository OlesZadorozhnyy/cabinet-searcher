'use strict';

const cabinetsModel = require('./models/cabinetsModel');

module.exports = {
	getCabinetsByNumbers(numbers) {
		return new Promise((resolve, reject) => {
			cabinetsModel.getByNumbers(numbers, (err, cabinets) => {
				if (err) return reject(err);

				return resolve({ cabinets: cabinets });
			});
		});
	}
};