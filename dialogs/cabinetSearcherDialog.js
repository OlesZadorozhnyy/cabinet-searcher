'use strict';

module.exports = function(session, data) {
	// TODO:
	// Send api request to get info about cabinet
	// Send response

	const entities = data.intent.entities;

	const cabinetNumbers = entities.map((entity) => {
		return entity.resolution.value;
	});

	session.send('Cabinet number: ' + cabinetNumber);
	session.endDialog();
};