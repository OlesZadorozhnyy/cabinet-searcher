'use strict';

require('dotenv').config();

const server = require('./server');
const connector = require('./connector');
const bot = require('./bot');

require('./routes/bot');
require('./routes/web');

server.listen(process.env.PORT, () => {
	console.log('%s listening to %s', server.name, server.url); 
});