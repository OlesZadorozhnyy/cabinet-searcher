'use strict';

module.exports = function(session) {
	session.send('You said ' + session.message.text);
};