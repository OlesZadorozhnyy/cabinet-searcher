'use strict';

module.exports = function(session) {
	const answers = [
		'Будь ласка!',
		'Прошу!'
	];

	session.send(answers);
	session.endDialog();
};