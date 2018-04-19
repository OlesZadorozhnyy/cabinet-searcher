'use strict';

module.exports = function(session) {
	const answers = [
		'Я чатбот, який вміє шукати потрібну вам аудиторію. Введіть номер аудиторії, а я спробую розповісти, де вона знаходиться.'
	];

	session.send(answers);
	session.endDialog();
};