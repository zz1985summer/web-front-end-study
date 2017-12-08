var sheet=document.styleSheets[1];
var sFrames=sheet.cssRules[4];
var mFrames=sheet.cssRules[5];
var hFrames=sheet.cssRules[6];

var sStart=sFrames.cssRules[0];
var mStart=mFrames.cssRules[0];
var hStart=hFrames.cssRules[0];

var sEnd=sFrames.cssRules[1];
var mEnd=mFrames.cssRules[1];
var hEnd=hFrames.cssRules[1];

var now=new Date();
var s=now.getSeconds();
var m=now.getMinutes();
var h=now.getHours();

var sd=s/60*360;
sStart.style.transform="rotate("+sd+"deg)";
sEnd.style.transform="rotate("+(sd+360)+"deg)";

var md=(m*60+s)/3600*360;
mStart.style.transform="rotate("+md+"deg)";
mEnd.style.transform="rotate("+(md+360)+"deg)";

var hd=(h*3600+m*60+s)/(3600*12)*360;
hStart.style.transform="rotate("+hd+"deg)";
hEnd.style.transform="rotate("+(hd+360)+"deg)";

