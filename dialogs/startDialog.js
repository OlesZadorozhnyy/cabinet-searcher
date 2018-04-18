'use strict';

module.exports = function(session) {
	const answers = [
		'Вітаю! Я допоможу знайти потрібну Вам аудиторію в університеті!',
		'Привіт! Я чатбот, який підкаже де конкретно знаходиться потрібна аудиторія!'
	];

	session.send(answers);
	session.end()
};