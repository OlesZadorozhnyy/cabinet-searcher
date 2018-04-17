'use strict';

const rootDialog = require('../dialogs/rootDialog');

module.exports = function(bot) {
	bot.dialog('/', rootDialog);

	return bot;
};