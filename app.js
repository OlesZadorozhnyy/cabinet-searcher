'use strict';

require('dotenv').config();

const restify = require('restify');
const builder = require('botbuilder');
const connector = require('./connector');

const server = restify.createServer();
const bot = new builder.UniversalBot(connector);

require('./routes/bot')(bot);
require('./routes/web')(server, connector);

server.listen(3978, () => {
	console.log('%s listening to %s', server.name, server.url); 
});