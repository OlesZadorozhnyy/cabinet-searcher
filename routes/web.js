'use strict';

const server = require('../server');
const connector = require('../connector');

server.post('/api/messages', connector.listen());

module.exports = server;