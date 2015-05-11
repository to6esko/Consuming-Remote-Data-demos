(function () {
	// It does not work on the old browsers.
	'use strict';
	var httpRequest,
		resourceUrl = 'http://localhost:3000/students';
	httpRequest = new XMLHttpRequest();

	httpRequest.open('GET', resourceUrl, true);

	httpRequest.send(null);
}());