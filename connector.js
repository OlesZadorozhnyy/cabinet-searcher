'use strict';

const builder = require('botbuilder');

module.exports = new builder.ChatConnector({
	appId: process.env.APP_ID,
	appPassword: process.env.APP_PASSWORD
});