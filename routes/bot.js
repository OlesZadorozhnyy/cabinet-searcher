'use strict';

const bot = require('../bot');
const rootDialog = require('../dialogs/rootDialog');

bot.dialog('/', rootDialog);

module.exports = bot;