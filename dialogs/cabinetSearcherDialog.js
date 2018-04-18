'use strict';

module.exports = function(session) {
	const cabinetNumber = session.message.text;

	session.send('Cabinet number: ' + cabinetNumber);
	session.endDialog();
};