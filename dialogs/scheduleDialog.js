'use strict';

module.exports = function(session) {
	const schedule = getSchedule();

	session.send(schedule);
	session.endDialog();
};

function getSchedule() {
	let text = '';

	text += 'I пара (8:00 – 9:20)\n' ;
	text += 'II пара (9:35 – 10:55)\n';
	text += 'III пара (11:10 – 12:30)\n';
	text += 'IV пара (12:45 – 14:05)\n';
	text += 'V пара (14:20 – 15:40)\n';
	text += 'VI пара (15:55 – 17:15)\n';
	text += 'VII пара (17:30 – 19:00)';

	return text;
}