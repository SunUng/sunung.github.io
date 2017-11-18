/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function($){function e(e){return c.raw?e:encodeURIComponent(e)}function n(e){return c.raw?e:decodeURIComponent(e)}function o(n){return e(c.json?JSON.stringify(n):String(n))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(r," ")),c.json?JSON.parse(e):e}catch(e){}}function t(e,n){var o=c.raw?e:i(e);return $.isFunction(n)?n(o):o}var r=/\+/g,c=$.cookie=function(i,r,u){if(arguments.length>1&&!$.isFunction(r)){if(u=$.extend({},c.defaults,u),"number"==typeof u.expires){var s=u.expires,d=u.expires=new Date;d.setMilliseconds(d.getMilliseconds()+864e5*s)}return document.cookie=[e(i),"=",o(r),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var f=i?void 0:{},a=document.cookie?document.cookie.split("; "):[],p=0,l=a.length;p<l;p++){var m=a[p].split("="),x=n(m.shift()),g=m.join("=");if(i===x){f=t(g,r);break}i||void 0===(g=t(g))||(f[x]=g)}return f};c.defaults={},$.removeCookie=function(e,n){return $.cookie(e,"",$.extend({},n,{expires:-1})),!$.cookie(e)}});
