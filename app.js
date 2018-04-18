'use strict';

require('dotenv').config();

const restify = require('restify');
const builder = require('botbuilder');
const connector = require('./connector');
const rootDialog = require('./dialogs/rootDialog');

const server = restify.createServer();
const bot = new builder.UniversalBot(connector, rootDialog);

require('./routes/bot')(bot);
require('./routes/web')(server, connector);
require('./recognizer')(bot);

server.listen(process.env.port || process.env.PORT || 3978, () => {
	console.log('%s listening to %s', server.name, server.url); 
});