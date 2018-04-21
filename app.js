'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const builder = require('botbuilder');
const connector = require('./connector');
const rootDialog = require('./dialogs/rootDialog');

const bot = new builder.UniversalBot(connector, rootDialog);
require('./recognizer')(bot);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(methodRewriter));
app.use('/', router);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

// routes
require('./routes/bot')(bot);
require('./routes/web')(router, connector);

app.listen(process.env.port || process.env.PORT || 3978, () => {
	console.log('App listening!'); 
});


function methodRewriter(req, res) {
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
		const method = req.body._method;

		delete req.body._method;

		return method;
	}
}