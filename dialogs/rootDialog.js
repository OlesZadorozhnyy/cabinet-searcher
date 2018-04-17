'use strict';

module.exports = function(session) {
	const text = session.message.text;

	session.send(text);
};