'use strict';

module.exports = function(session) {
	// TODO:
	// Parse cabinet number
	// Send api request to get info about cabinet
	// Send response

	const cabinetNumber = session.message.text;

	session.send('Cabinet number: ' + cabinetNumber);
	session.endDialog();
};