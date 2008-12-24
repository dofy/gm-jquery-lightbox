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
    var scs = head.getElementsByTagName('script');
    var hasJQ = false, hasLB = false;
    for(var ind in scs)
    {
        if(/jquery\-1\.2\.6/i.test(scs[ind].src)) hasJQ = true;
        if(/lightbox/i.test(scs[ind].src)) hasLB = true;
    }
    if(hasLB) return false;
    if(!hasJQ)
    {
        var s1=document.createElement("script");
        s1.type="text/javascript";
        s1.src="http://t2.phpz.org/jlb/jquery-1.2.6.pack.js";
        head.appendChild(s1);
    }
	var s2=document.createElement("script");
	s2.type="text/javascript";
	s2.src="http://t2.phpz.org/jlb/jquery.lightbox-0.5.pack.js";
	head.appendChild(s2);
	var s3=document.createElement("script");
	s3.type="text/javascript";
	s3.src="http://t2.phpz.org/jlb/ActiveLightbox.js";
	head.appendChild(s3);
	var l1=document.createElement("link");
	l1.rel="stylesheet";
	l1.href="http://t2.phpz.org/jlb/jquery.lightbox-0.5.css";
	head.appendChild(l1);
}
