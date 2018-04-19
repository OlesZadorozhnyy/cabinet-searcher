'use strict';

const request = require('request');

const url = '';

module.exports = {
	getCabinetsByNumbers(numbers) {
		return new Promise((resolve, reject) => {
			const cabinets = require('./data.json').cabinets;

			// TODO: PARSE FROM DB
			const filteredCabinets = cabinets.filter((cabinet) => numbers.indexOf(cabinet.number));

			return resolve(filteredCabinets);
		});
	}
};