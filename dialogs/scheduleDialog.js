'use strict';

module.exports = function(session) {
	const schedule = getSchedule();

	session.send(schedule);
	session.endDialog();
};

function getSchedule() {
	let text = '';

	text += 'I пара (8:00 – 9:20)';
	text += 'II пара (9:35 – 10:55)';
	text += 'III пара (11:10 – 12:30)';
	text += 'IV пара (12:45 – 14:05)';
	text += 'V пара (14:20 – 15:40)';
	text += 'VI пара (15:55 – 17:15)';
	text += 'VII пара (17:30 – 19:00)';

	return text;
}