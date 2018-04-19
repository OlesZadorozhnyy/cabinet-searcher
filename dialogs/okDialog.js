'use strict';

module.exports = function(session) {
	const answers = [
		'Дякую!',
		'Супер!',
		'Спасибі!'
	];

	session.send(answers);
	session.endDialog();
};