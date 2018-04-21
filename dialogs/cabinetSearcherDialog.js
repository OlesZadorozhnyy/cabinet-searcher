'use strict';

const api = require('../api');
const departments = require('../constants/departments');

module.exports = function(session, data) {
	const entities = data.intent.entities;

	const cabinetNumbers = entities.map((entity) => {
		return entity.resolution.value;
	});

	api.getCabinetsByNumbers(cabinetNumbers).then((cabinets) => {
		if (!cabinets.length) {
			const answers = [
				'Аудиторію не знайдено.',
				'Нічого не знайдено.',
				'Не можу нічого знайти.',
				'Я ще незнаю такої аудиторії.'
			];

			session.send(answers);
		} else {
			cabinets.map((cabinet) => {
				const departmentWord = departments[cabinet.department_id].local_name;
				const departmentPavilion = departments[cabinet.department_id].pavilion;

				let message = '';
				message += `Аудиторія № ${cabinet.number} знаходиться на ${departmentWord} (${departmentPavilion}) на ${cabinet.floor} поверсі. `;
				message += `Назва аудиторії: ${cabinet.target}. Деталі: ${cabinet.details}.`;

				session.send(message);
			});
		}

		session.endDialog();
	}).catch((error) => {
		console.error(error);

		session.send('Ой, щось пішло не так:(');
		session.endDialog();
	});
};