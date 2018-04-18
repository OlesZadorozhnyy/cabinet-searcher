'use strict';

const cabinetSearcherDialog = require('../dialogs/cabinetSearcherDialog');
const scheduleDialog = require('../dialogs/scheduleDialog');

module.exports = function(bot) {
	bot.dialog('CabinetSearcherDialog', cabinetSearcherDialog).triggerAction({ matches: /^\d+$/ });
	bot.dialog('ScheduleDialog', scheduleDialog).triggerAction({ matches: /графік|графік пар/gi });

	return bot;
};