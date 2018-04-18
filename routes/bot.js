'use strict';

const startDialog = require('../dialogs/startDialog');
const greetingDialog = require('../dialogs/greetingDialog');
const cabinetSearcherDialog = require('../dialogs/cabinetSearcherDialog');
const scheduleDialog = require('../dialogs/scheduleDialog');

module.exports = function(bot) {
	bot.dialog('StartDialog', startDialog).triggerAction({ matches: /^/start$/i });
	bot.dialog('GreetingDialog', greetingDialog).triggerAction({ matches: 'Greeting' });
	bot.dialog('CabinetSearcherDialog', cabinetSearcherDialog).triggerAction({ matches: 'CabinetSearcher' });
	bot.dialog('ScheduleDialog', scheduleDialog).triggerAction({ matches: 'Schedule' });

	return bot;
};