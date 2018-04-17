'use strict';

module.exports = function(session) {
	session.send(session.message.text);
};