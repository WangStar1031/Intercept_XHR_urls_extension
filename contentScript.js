
var strScript = 'var func = (function(XHR) {';
strScript += '"use strict";';

strScript += 'var open = XHR.prototype.open;';

strScript += 'XHR.prototype.open = function(method, url, async, user, pass) {';
strScript += 'this._url = url;';
strScript += 'open.call(this, method, url, async, user, pass);';
strScript += 'console.log( "open url : " + url);';
strScript += 'console.log( "open url method : " + method);';
strScript += '};';
strScript += '})(XMLHttpRequest);';

var timer = setInterval(function(){
	var head = document.getElementsByTagName("head");
	if( head.length ){
		clearInterval(timer);
		console.log( "Script Injected");
		var s = document.createElement('script');
		s.type="text/javascript";
		s.innerHTML = strScript;
		document.head.appendChild(s);
	}
});
