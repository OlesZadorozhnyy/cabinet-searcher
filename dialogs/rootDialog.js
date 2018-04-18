'use strict';

module.exports = function(session) {
	// TODO:
	// if initial message
	// say hi:)

	const answers = [
		'На жаль, я не розумію вашого повідомлення:(',
		'Я вмію лише знаходити інформацію про місцеположення аудиторій:(',
		'Це надто складно для мене:(',
		'Спробуйте написати щось інше:(',
		'Я ще не настільки розумний:('
	];

	session.send(answers);
};