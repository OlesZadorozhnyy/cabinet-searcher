'use strict';

const express = require('express');
const app = express();
const router = express.Router();

const builder = require('botbuilder');
const connector = require('./connector');
const rootDialog = require('./dialogs/rootDialog');

const bot = new builder.UniversalBot(connector, rootDialog);
require('./recognizer')(bot);

// routes
require('./routes/bot')(bot);
require('./routes/web')(router, connector);

app.use('/', router);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

app.listen(process.env.port || process.env.PORT || 3978, () => {
	console.log('%s listening to %s', app.name, app.url); 
});