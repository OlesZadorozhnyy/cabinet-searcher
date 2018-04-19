'use strict';

module.exports = function(session) {
	const answers = [
		'Я лише вмію шукати аудиторії в університеті.'
	];

	session.send(answers);
	session.endDialog();
};