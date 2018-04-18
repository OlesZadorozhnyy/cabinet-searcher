'use strict';

const builder = require('botbuilder');

const luisAppId = process.env.LuisAppId;
const luisAPIKey = process.env.LuisAPIKey;
const luisAPIHostName = process.env.LuisAPIHostName;

module.exports = function(bot) {
	const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey;
	const recognizer = new builder.LuisRecognizer(LuisModelUrl);

	bot.recognizer(recognizer);

	return bot;
};