'use strict';

module.exports = function(session, data) {
	// TODO:
	// Send api request to get info about cabinet
	// Send response

	const entity = data.intent.entities[0];

	const cabinetNumber = entity.resolution.value;

	session.send('Cabinet number: ' + cabinetNumber);
	session.endDialog();
};