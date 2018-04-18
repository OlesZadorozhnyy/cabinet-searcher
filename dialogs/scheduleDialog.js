'use strict';

module.exports = function(session) {
	session.send('Графік пар');
	session.endDialog();
};