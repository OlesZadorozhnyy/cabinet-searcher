'use strict';

const startDialog = require('../dialogs/startDialog');
const greetingDialog = require('../dialogs/greetingDialog');
const cabinetSearcherDialog = require('../dialogs/cabinetSearcherDialog');
const scheduleDialog = require('../dialogs/scheduleDialog');
const okDialog = require('../dialogs/okDialog');
const whyDialog = require('../dialogs/whyDialog');
const helpDialog = require('../dialogs/helpDialog');
const thanksDialog = require('../dialogs/thanksDialog');

module.exports = function(bot) {
	bot.dialog('StartDialog', startDialog).triggerAction({ matches: /^\/start$/i });
	bot.dialog('GreetingDialog', greetingDialog).triggerAction({ matches: 'Greeting' });
	bot.dialog('CabinetSearcherDialog', cabinetSearcherDialog).triggerAction({ matches: 'CabinetSearcher' });
	bot.dialog('ScheduleDialog', scheduleDialog).triggerAction({ matches: 'Schedule' });
	bot.dialog('OkDialog', okDialog).triggerAction({ matches: /^ок|добре|супер$/i });
	bot.dialog('WhyDialog', whyDialog).triggerAction({ matches: /^чому/i });
	bot.dialog('HelpDialog', helpDialog).triggerAction({ matches: /^\/help$/i });
	bot.dialog('ThanksDialog', thanksDialog).triggerAction({ matches: /^дяк|дякую|спасибі/i })

	return bot;
};