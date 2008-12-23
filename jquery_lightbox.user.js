// This is a greasemonkey script, for use with the Firefox extension Greasemonkey.
// More info: http://greasemonkey.mozdev.org/
// ==UserScript==
// @name         JQuery Lightbox
// @author       sfufoet
// @blog       	 http://blog.loland.net/
// @description  Add lightbox for every pages!
// @include      *
// @namespace    http://blog.loland.net/2008/12/23/118.et
// ==/UserScript==

addScriptAndCSS();

function addScriptAndCSS() {
	var head=document.getElementsByTagName("head")[0];
	var script1=document.createElement("script");
	script1.type="text/javascript";
	script1.src="http://gm-jquery-lightbox.googlecode.com/files/jquery-1.2.6.pack.js";
	head.appendChild(script1);
	var script2=document.createElement("script");
	script2.type="text/javascript";
	script2.src="http://gm-jquery-lightbox.googlecode.com/files/jquery.lightbox-0.5.pack.js";
	head.appendChild(script2);
	var script3=document.createElement("script");
	script3.type="text/javascript";
	script3.src="http://gm-jquery-lightbox.googlecode.com/files/ActiveLightbox.js";
	head.appendChild(script3);
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.type="text/css";
	link.href="http://gm-jquery-lightbox.googlecode.com/files/jquery.lightbox-0.5.css";
	head.appendChild(link);
}
