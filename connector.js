'use strict';

const builder = require('botbuilder');

module.exports = new builder.ChatConnector({
	appId: process.env.MicrosoftAppId,
	appPassword: process.env.MicrosoftAppPassword
});

// module.exports = new builder.ConsoleConnector().listen();