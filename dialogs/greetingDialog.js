'use strict';

module.exports = function(session) {
	const answers = [
		'Привіт!',
		'Вітаю!',
		'Хай!'
	];

	session.send(answers);
	session.endDialog();
};