'use strict';

const builder = require('botbuilder');
const connector = require('./connector');

module.exports = new builder.UniversalBot(connector);