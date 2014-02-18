"use strict";

// calculator
// 2014-02-10 [M]
// Cho_Eun

// Chrome Application
// HTML
// - index.html
// js
// calc.js
// JSON
// - manifest.json

// (function(w,d,c) { })(window, document, chrome)
// for chrome application
// (function(w,d) { })(window, document)
// for common application

(function(w,d) {
	var app = chrome ? chrome.app : {};
	app.runtime.onLaunched.addListener(function() {
		var aw = app.window;
		aw.create("index.html", {
			'bounds' : {
				'width' : 400,
				'height' : 500
			}
		});
	});
})(window, document);
