'use strict';

const api = require('../api');
const departments = require('../constants/departments');

module.exports = function(session, data) {
	const entities = data.intent.entities;

	const cabinetNumbers = entities.map((entity) => {
		return entity.resolution.value;
	});

	api.getCabinetsByNumbers(cabinetNumbers).then((response) => {
		const cabinets = response.cabinets;

		if (!cabinets.length) {
			const answers = [
				'Аудиторію не знайдено.',
				'Нічого не знайдено.',
				'Не можу нічого знайти.',
				'Я ще незнаю такої аудиторії.'
			];

			session.send(answers);
		} else {
			let message = '';

			cabinets.map((cabinet) => {
				if (message != '') message += "\n";

				const departmentWord = departments[cabinet.department_id].local_name;

				message += `Аудиторія № ${cabinet.number} знаходиться на ${departmentWord} на ${cabinet.floor} поверсі. `;
				message += `Назва аудиторії: ${cabinet.target}. Деталі: ${cabinet.details}.`;
			});

			session.send(message);
		}

		session.endDialog();
	}).catch((error) => {
		session.send('Ой, щось пішло не так:(');
		session.endDialog();
	});
};