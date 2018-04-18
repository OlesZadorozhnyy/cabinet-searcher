'use strict';

const cabinetSearcherDialog = require('../dialogs/cabinetSearcherDialog');
const scheduleDialog = require('../dialogs/scheduleDialog');

module.exports = function(bot) {
	bot.dialog('CabinetSearcherDialog', cabinetSearcherDialog).triggerAction({ matches: 'CabinetSearcher' });
	bot.dialog('ScheduleDialog', scheduleDialog).triggerAction({ matches: 'Schedule' });

	return bot;
};