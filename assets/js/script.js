/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.1.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeningTo;if(!r)return this;var s=!e&&!i;if(!i&&typeof e==="object")i=this;if(t)(r={})[t._listenId]=t;for(var n in r){t=r[n];t.off(e,i,this);if(s||h.isEmpty(t._events))delete this._listeningTo[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeningTo||(this._listeningTo={});var n=e._listenId||(e._listenId=h.uniqueId("l"));s[n]=e;if(!r&&typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};i=h.defaults({},i,h.result(this,"defaults"));this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};M(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=h.extend({validate:true},i);if(r&&!i.wait){if(!this.set(r,i))return false}else{if(!this._validate(r,i))return false}if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};M(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}M(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e,{validationError:i}));return false}});var p=["keys","values","pairs","invert","pick","omit"];h.each(p,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var v=a.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var g={add:true,remove:true,merge:true};var m={add:true,remove:false};h.extend(v.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.extend({merge:false},e,m))},remove:function(t,e){var i=!h.isArray(t);t=i?[t]:h.clone(t);e||(e={});var r,s,n,a;for(r=0,s=t.length;r<s;r++){a=t[r]=this.get(t[r]);if(!a)continue;delete this._byId[a.id];delete this._byId[a.cid];n=this.indexOf(a);this.models.splice(n,1);this.length--;if(!e.silent){e.index=n;a.trigger("remove",a,this,e)}this._removeReference(a)}return i?t[0]:t},set:function(t,e){e=h.defaults({},e,g);if(e.parse)t=this.parse(t,e);var i=!h.isArray(t);t=i?t?[t]:[]:h.clone(t);var r,s,n,a,o,u,l;var c=e.at;var f=this.model;var p=this.comparator&&c==null&&e.sort!==false;var v=h.isString(this.comparator)?this.comparator:null;var m=[],y=[],_={};var w=e.add,b=e.merge,x=e.remove;var E=!p&&w&&x?[]:false;for(r=0,s=t.length;r<s;r++){o=t[r];if(o instanceof d){n=a=o}else{n=o[f.prototype.idAttribute]}if(u=this.get(n)){if(x)_[u.cid]=true;if(b){o=o===a?a.attributes:o;if(e.parse)o=u.parse(o,e);u.set(o,e);if(p&&!l&&u.hasChanged(v))l=true}t[r]=u}else if(w){a=t[r]=this._prepareModel(o,e);if(!a)continue;m.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}if(E)E.push(u||a)}if(x){for(r=0,s=this.length;r<s;++r){if(!_[(a=this.models[r]).cid])y.push(a)}if(y.length)this.remove(y,e)}if(m.length||E&&E.length){if(p)l=true;this.length+=m.length;if(c!=null){for(r=0,s=m.length;r<s;r++){this.models.splice(c+r,0,m[r])}}else{if(E)this.models.length=0;var T=E||m;for(r=0,s=T.length;r<s;r++){this.models.push(T[r])}}}if(l)this.sort({silent:true});if(!e.silent){for(r=0,s=m.length;r<s;r++){(a=m[r]).trigger("add",a,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return i?t[0]:t},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();t=this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,h.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,h.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t.id]||this._byId[t.cid]||this._byId[t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};M(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(t,e,s){if(s.wait)i.add(t,s);if(r)r(t,e,s)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e=e?h.clone(e):{};e.collection=this;var i=new this.model(t,e);if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(y,function(t){v.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var _=["groupBy","countBy","sortBy"];h.each(_,function(t){v.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var w=a.View=function(t){this.cid=h.uniqueId("view");t||(t={});h.extend(this,h.pick(t,x));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var b=/^(\S+)\s*(.*)$/;var x=["model","collection","el","id","attributes","className","tagName","events"];h.extend(w.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(b);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=T[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&E){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var E=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var k=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var $=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(k.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace(S,"(?:$1)?").replace($,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/[?#].*$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=P.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(O,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return h.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var R=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=v.extend=k.extend=w.extend=I.extend=R;var U=function(){throw new Error('A "url" property or function must be specified')};var M=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
//# sourceMappingURL=backbone-min.map
var emmet=(function(global){var defaultSyntax='html';var defaultProfile='plain';if(typeof _=='undefined'){try{_=global[['require'][0]]('underscore')}catch(e){}}if(typeof _=='undefined'){throw'Cannot access to Underscore.js lib'}var modules={_:_};var ctor=function(){};function inherits(parent,protoProps,staticProps){var child;if(protoProps&&protoProps.hasOwnProperty('constructor')){child=protoProps.constructor}else{child=function(){parent.apply(this,arguments)}}_.extend(child,parent);ctor.prototype=parent.prototype;child.prototype=new ctor();if(protoProps)_.extend(child.prototype,protoProps);if(staticProps)_.extend(child,staticProps);child.prototype.constructor=child;child.__super__=parent.prototype;return child};var moduleLoader=null;function r(name){if(!(name in modules)&&moduleLoader)moduleLoader(name);return modules[name]}return{define:function(name,factory){if(!(name in modules)){modules[name]=_.isFunction(factory)?this.exec(factory):factory}},require:r,exec:function(fn,context){return fn.call(context||global,_.bind(r,this),_,this)},extend:function(protoProps,classProps){var child=inherits(this,protoProps,classProps);child.extend=this.extend;if(protoProps.hasOwnProperty('toString'))child.prototype.toString=protoProps.toString;return child},expandAbbreviation:function(abbr,syntax,profile,contextNode){if(!abbr)return'';syntax=syntax||defaultSyntax;var filters=r('filters');var parser=r('abbreviationParser');profile=r('profile').get(profile,syntax);r('tabStops').resetTabstopIndex();var data=filters.extractFromAbbreviation(abbr);var outputTree=parser.parse(data[0],{syntax:syntax,contextNode:contextNode});var filtersList=filters.composeList(syntax,profile,data[1]);filters.apply(outputTree,filtersList,profile);return outputTree.toString()},defaultSyntax:function(){return defaultSyntax},defaultProfile:function(){return defaultProfile},log:function(){if(global.console&&global.console.log)global.console.log.apply(global.console,arguments)},setModuleLoader:function(fn){moduleLoader=fn}}})(this);if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=emmet}exports.emmet=emmet}if(typeof define!=='undefined'){define('emmet',[],emmet)}emmet.define('abbreviationParser',function(require,_){var reValidName=/^[\w\-\$\:@\!%]+\+?$/i;var reWord=/[\w\-:\$@]/;var pairs={'[':']','(':')','{':'}'};var spliceFn=Array.prototype.splice;var preprocessors=[];var postprocessors=[];var outputProcessors=[];function AbbreviationNode(parent){this.parent=null;this.children=[];this._attributes=[];this.abbreviation='';this.counter=1;this._name=null;this._text='';this.repeatCount=1;this.hasImplicitRepeat=false;this._data={};this.start='';this.end='';this.content='';this.padding=''}AbbreviationNode.prototype={addChild:function(child,position){child=child||new AbbreviationNode;child.parent=this;if(_.isUndefined(position)){this.children.push(child)}else{this.children.splice(position,0,child)}return child},clone:function(){var node=new AbbreviationNode();var attrs=['abbreviation','counter','_name','_text','repeatCount','hasImplicitRepeat','start','end','content','padding'];_.each(attrs,function(a){node[a]=this[a]},this);node._attributes=_.map(this._attributes,function(attr){return _.clone(attr)});node._data=_.clone(this._data);node.children=_.map(this.children,function(child){child=child.clone();child.parent=node;return child});return node},remove:function(){if(this.parent){this.parent.children=_.without(this.parent.children,this)}return this},replace:function(){var parent=this.parent;var ix=_.indexOf(parent.children,this);var items=_.flatten(arguments);spliceFn.apply(parent.children,[ix,1].concat(items));_.each(items,function(item){item.parent=parent})},updateProperty:function(name,value){this[name]=value;_.each(this.children,function(child){child.updateProperty(name,value)});return this},find:function(fn){return this.findAll(fn)[0]},findAll:function(fn){if(!_.isFunction(fn)){var elemName=fn.toLowerCase();fn=function(item){return item.name().toLowerCase()==elemName}}var result=[];_.each(this.children,function(child){if(fn(child))result.push(child);result=result.concat(child.findAll(fn))});return _.compact(result)},data:function(name,value){if(arguments.length==2){this._data[name]=value;if(name=='resource'&&require('elements').is(value,'snippet')){this.content=value.data;if(this._text){this.content=require('abbreviationUtils').insertChildContent(value.data,this._text)}}}return this._data[name]},name:function(){var res=this.matchedResource();if(require('elements').is(res,'element')){return res.name}return this._name},attributeList:function(){var attrs=[];var res=this.matchedResource();if(require('elements').is(res,'element')&&_.isArray(res.attributes)){attrs=attrs.concat(res.attributes)}return optimizeAttributes(attrs.concat(this._attributes))},attribute:function(name,value){if(arguments.length==2){var ix=_.indexOf(_.pluck(this._attributes,'name'),name.toLowerCase());if(~ix){this._attributes[ix].value=value}else{this._attributes.push({name:name,value:value})}}return(_.find(this.attributeList(),function(attr){return attr.name==name})||{}).value},matchedResource:function(){return this.data('resource')},index:function(){return this.parent?_.indexOf(this.parent.children,this):-1},_setRepeat:function(count){if(count){this.repeatCount=parseInt(count,10)||1}else{this.hasImplicitRepeat=true}},setAbbreviation:function(abbr){abbr=abbr||'';var that=this;abbr=abbr.replace(/\*(\d+)?$/,function(str,repeatCount){that._setRepeat(repeatCount);return''});this.abbreviation=abbr;var abbrText=extractText(abbr);if(abbrText){abbr=abbrText.element;this.content=this._text=abbrText.text}var abbrAttrs=parseAttributes(abbr);if(abbrAttrs){abbr=abbrAttrs.element;this._attributes=abbrAttrs.attributes}this._name=abbr;if(this._name&&!reValidName.test(this._name)){throw'Invalid abbreviation'}},toString:function(){var utils=require('utils');var start=this.start;var end=this.end;var content=this.content;var node=this;_.each(outputProcessors,function(fn){start=fn(start,node,'start');content=fn(content,node,'content');end=fn(end,node,'end')});var innerContent=_.map(this.children,function(child){return child.toString()}).join('');content=require('abbreviationUtils').insertChildContent(content,innerContent,{keepVariable:false});return start+utils.padString(content,this.padding)+end},hasEmptyChildren:function(){return!!_.find(this.children,function(child){return child.isEmpty()})},hasImplicitName:function(){return!this._name&&!this.isTextNode()},isGroup:function(){return!this.abbreviation},isEmpty:function(){return!this.abbreviation&&!this.children.length},isRepeating:function(){return this.repeatCount>1||this.hasImplicitRepeat},isTextNode:function(){return!this.name()&&!this.attributeList().length},isElement:function(){return!this.isEmpty()&&!this.isTextNode()},deepestChild:function(){if(!this.children.length)return null;var deepestChild=this;while(deepestChild.children.length){deepestChild=_.last(deepestChild.children)}return deepestChild}};function stripped(str){return str.substring(1,str.length-1)}function consumeQuotedValue(stream,quote){var ch;while(ch=stream.next()){if(ch===quote)return true;if(ch=='\\')continue}return false}function parseAbbreviation(abbr){abbr=require('utils').trim(abbr);var root=new AbbreviationNode;var context=root.addChild(),ch;var stream=require('stringStream').create(abbr);var loopProtector=1000,multiplier;while(!stream.eol()&&--loopProtector>0){ch=stream.peek();switch(ch){case'(':stream.start=stream.pos;if(stream.skipToPair('(',')')){var inner=parseAbbreviation(stripped(stream.current()));if(multiplier=stream.match(/^\*(\d+)?/,true)){context._setRepeat(multiplier[1])}_.each(inner.children,function(child){context.addChild(child)})}else{throw'Invalid abbreviation: mo matching ")" found for character at '+stream.pos}break;case'>':context=context.addChild();stream.next();break;case'+':context=context.parent.addChild();stream.next();break;case'^':var parent=context.parent||context;context=(parent.parent||parent).addChild();stream.next();break;default:stream.start=stream.pos;stream.eatWhile(function(c){if(c=='['||c=='{'){if(stream.skipToPair(c,pairs[c])){stream.backUp(1);return true}throw'Invalid abbreviation: mo matching "'+pairs[c]+'" found for character at '+stream.pos}if(c=='+'){stream.next();var isMarker=stream.eol()||~'+>^*'.indexOf(stream.peek());stream.backUp(1);return isMarker}return c!='('&&isAllowedChar(c)});context.setAbbreviation(stream.current());stream.start=stream.pos}}if(loopProtector<1)throw'Endless loop detected';return root}function extractAttributes(attrSet,attrs){attrSet=require('utils').trim(attrSet);var result=[];var stream=require('stringStream').create(attrSet);stream.eatSpace();while(!stream.eol()){stream.start=stream.pos;if(stream.eatWhile(reWord)){var attrName=stream.current();var attrValue='';if(stream.peek()=='='){stream.next();stream.start=stream.pos;var quote=stream.peek();if(quote=='"'||quote=="'"){stream.next();if(consumeQuotedValue(stream,quote)){attrValue=stream.current();attrValue=attrValue.substring(1,attrValue.length-1)}else{throw'Invalid attribute value'}}else if(stream.eatWhile(/[^\s\]]/)){attrValue=stream.current()}else{throw'Invalid attribute value'}}result.push({name:attrName,value:attrValue});stream.eatSpace()}else{break}}return result}function parseAttributes(abbr){var result=[];var attrMap={'#':'id','.':'class'};var nameEnd=null;var stream=require('stringStream').create(abbr);while(!stream.eol()){switch(stream.peek()){case'#':case'.':if(nameEnd===null)nameEnd=stream.pos;var attrName=attrMap[stream.peek()];stream.next();stream.start=stream.pos;stream.eatWhile(reWord);result.push({name:attrName,value:stream.current()});break;case'[':if(nameEnd===null)nameEnd=stream.pos;stream.start=stream.pos;if(!stream.skipToPair('[',']'))throw'Invalid attribute set definition';result=result.concat(extractAttributes(stripped(stream.current())));break;default:stream.next()}}if(!result.length)return null;return{element:abbr.substring(0,nameEnd),attributes:optimizeAttributes(result)}}function optimizeAttributes(attrs){attrs=_.map(attrs,function(attr){return _.clone(attr)});var lookup={};return _.filter(attrs,function(attr){if(!(attr.name in lookup)){return lookup[attr.name]=attr}var la=lookup[attr.name];if(attr.name.toLowerCase()=='class'){la.value+=(la.value.length?' ':'')+attr.value}else{la.value=attr.value}return false})}function extractText(abbr){if(!~abbr.indexOf('{'))return null;var stream=require('stringStream').create(abbr);while(!stream.eol()){switch(stream.peek()){case'[':case'(':stream.skipToPair(stream.peek(),pairs[stream.peek()]);break;case'{':stream.start=stream.pos;stream.skipToPair('{','}');return{element:abbr.substring(0,stream.start),text:stripped(stream.current())};default:stream.next()}}}function unroll(node){for(var i=node.children.length-1,j,child,maxCount;i>=0;i--){child=node.children[i];if(child.isRepeating()){maxCount=j=child.repeatCount;child.repeatCount=1;child.updateProperty('counter',1);child.updateProperty('maxCount',maxCount);while(--j>0){child.parent.addChild(child.clone(),i+1).updateProperty('counter',j+1).updateProperty('maxCount',maxCount)}}}_.each(node.children,unroll);return node}function squash(node){for(var i=node.children.length-1;i>=0;i--){var n=node.children[i];if(n.isGroup()){n.replace(squash(n).children)}else if(n.isEmpty()){n.remove()}}_.each(node.children,squash);return node}function isAllowedChar(ch){var charCode=ch.charCodeAt(0);var specialChars='#.*:$-_!@|%';return(charCode>64&&charCode<91)||(charCode>96&&charCode<123)||(charCode>47&&charCode<58)||specialChars.indexOf(ch)!=-1}outputProcessors.push(function(text,node){return require('utils').replaceCounter(text,node.counter,node.maxCount)});return{parse:function(abbr,options){options=options||{};var tree=parseAbbreviation(abbr);if(options.contextNode){tree._name=options.contextNode.name;var attrLookup={};_.each(tree._attributes,function(attr){attrLookup[attr.name]=attr});_.each(options.contextNode.attributes,function(attr){if(attr.name in attrLookup){attrLookup[attr.name].value=attr.value}else{attr=_.clone(attr);tree._attributes.push(attr);attrLookup[attr.name]=attr}})}_.each(preprocessors,function(fn){fn(tree,options)});tree=squash(unroll(tree));_.each(postprocessors,function(fn){fn(tree,options)});return tree},AbbreviationNode:AbbreviationNode,addPreprocessor:function(fn){if(!_.include(preprocessors,fn))preprocessors.push(fn)},removeFilter:function(fn){preprocessor=_.without(preprocessors,fn)},addPostprocessor:function(fn){if(!_.include(postprocessors,fn))postprocessors.push(fn)},removePostprocessor:function(fn){postprocessors=_.without(postprocessors,fn)},addOutputProcessor:function(fn){if(!_.include(outputProcessors,fn))outputProcessors.push(fn)},removeOutputProcessor:function(fn){outputProcessors=_.without(outputProcessors,fn)},isAllowedChar:function(ch){ch=String(ch);return isAllowedChar(ch)||~'>+^[](){}'.indexOf(ch)}}});emmet.exec(function(require,_){function matchResources(node,syntax){var resources=require('resources');var elements=require('elements');var parser=require('abbreviationParser');_.each(_.clone(node.children),function(child){var r=resources.getMatchedResource(child,syntax);if(_.isString(r)){child.data('resource',elements.create('snippet',r))}else if(elements.is(r,'reference')){var subtree=parser.parse(r.data,{syntax:syntax});if(child.repeatCount>1){var repeatedChildren=subtree.findAll(function(node){return node.hasImplicitRepeat});_.each(repeatedChildren,function(node){node.repeatCount=child.repeatCount;node.hasImplicitRepeat=false})}var deepestChild=subtree.deepestChild();if(deepestChild){_.each(child.children,function(c){deepestChild.addChild(c)})}_.each(subtree.children,function(node){_.each(child.attributeList(),function(attr){node.attribute(attr.name,attr.value)})});child.replace(subtree.children)}else{child.data('resource',r)}matchResources(child,syntax)})}require('abbreviationParser').addPreprocessor(function(tree,options){var syntax=options.syntax||emmet.defaultSyntax();matchResources(tree,syntax)})});emmet.exec(function(require,_){var parser=require('abbreviationParser');var outputPlaceholder='$#';function locateOutputPlaceholder(text){var range=require('range');var result=[];var stream=require('stringStream').create(text);while(!stream.eol()){if(stream.peek()=='\\'){stream.next()}else{stream.start=stream.pos;if(stream.match(outputPlaceholder,true)){result.push(range.create(stream.start,outputPlaceholder));continue}}stream.next()}return result}function replaceOutputPlaceholders(source,value){var utils=require('utils');var ranges=locateOutputPlaceholder(source);ranges.reverse();_.each(ranges,function(r){source=utils.replaceSubstring(source,value,r)});return source}function hasOutputPlaceholder(node){if(locateOutputPlaceholder(node.content).length)return true;return!!_.find(node.attributeList(),function(attr){return!!locateOutputPlaceholder(attr.value).length})}function insertPastedContent(node,content,overwrite){var nodesWithPlaceholders=node.findAll(function(item){return hasOutputPlaceholder(item)});if(hasOutputPlaceholder(node))nodesWithPlaceholders.unshift(node);if(nodesWithPlaceholders.length){_.each(nodesWithPlaceholders,function(item){item.content=replaceOutputPlaceholders(item.content,content);_.each(item._attributes,function(attr){attr.value=replaceOutputPlaceholders(attr.value,content)})})}else{var deepest=node.deepestChild()||node;if(overwrite){deepest.content=content}else{deepest.content=require('abbreviationUtils').insertChildContent(deepest.content,content)}}}parser.addPreprocessor(function(tree,options){if(options.pastedContent){var utils=require('utils');var lines=_.map(utils.splitByLines(options.pastedContent,true),utils.trim);tree.findAll(function(item){if(item.hasImplicitRepeat){item.data('paste',lines);return item.repeatCount=lines.length}})}});parser.addPostprocessor(function(tree,options){var targets=tree.findAll(function(item){var pastedContentObj=item.data('paste');var pastedContent='';if(_.isArray(pastedContentObj)){pastedContent=pastedContentObj[item.counter-1]}else if(_.isFunction(pastedContentObj)){pastedContent=pastedContentObj(item.counter-1,item.content)}else if(pastedContentObj){pastedContent=pastedContentObj}if(pastedContent){insertPastedContent(item,pastedContent,!!item.data('pasteOverwrites'))}item.data('paste',null);return!!pastedContentObj});if(!targets.length&&options.pastedContent){insertPastedContent(tree,options.pastedContent)}})});emmet.exec(function(require,_){function resolveNodeNames(tree){var tagName=require('tagName');_.each(tree.children,function(node){if(node.hasImplicitName()||node.data('forceNameResolving')){node._name=tagName.resolve(node.parent.name())}resolveNodeNames(node)});return tree}require('abbreviationParser').addPostprocessor(resolveNodeNames)});emmet.define('cssParser',function(require,_){var walker,tokens=[],isOp,isNameChar,isDigit;walker={lines:null,total_lines:0,linenum:-1,line:'',ch:'',chnum:-1,init:function(source){var me=walker;me.lines=source.replace(/\r\n/g,'\n').replace(/\r/g,'\n').split('\n');me.total_lines=me.lines.length;me.chnum=-1;me.linenum=-1;me.ch='';me.line='';me.nextLine();me.nextChar()},nextLine:function(){var me=this;me.linenum+=1;if(me.total_lines<=me.linenum){me.line=false}else{me.line=me.lines[me.linenum]}if(me.chnum!==-1){me.chnum=0}return me.line},nextChar:function(){var me=this;me.chnum+=1;while(me.line.charAt(me.chnum)===''){if(this.nextLine()===false){me.ch=false;return false}me.chnum=-1;me.ch='\n';return'\n'}me.ch=me.line.charAt(me.chnum);return me.ch},peek:function(){return this.line.charAt(this.chnum+1)}};isNameChar=function(c){return(c=='&'||c==='_'||c==='-'||(c>='a'&&c<='z')||(c>='A'&&c<='Z'))};isDigit=function(ch){return(ch!==false&&ch>='0'&&ch<='9')};isOp=(function(){var opsa="{}[]()+*=.,;:>~|\\%$#@^!".split(''),opsmatcha="*^|$~".split(''),ops={},opsmatch={},i=0;for(;i<opsa.length;i+=1){ops[opsa[i]]=true}for(i=0;i<opsmatcha.length;i+=1){opsmatch[opsmatcha[i]]=true}return function(ch,matchattr){if(matchattr){return!!opsmatch[ch]}return!!ops[ch]}}());function isset(v){return typeof v!=='undefined'}function getConf(){return{'char':walker.chnum,line:walker.linenum}}function tokener(value,type,conf){var w=walker,c=conf||{};tokens.push({charstart:isset(c['char'])?c['char']:w.chnum,charend:isset(c.charend)?c.charend:w.chnum,linestart:isset(c.line)?c.line:w.linenum,lineend:isset(c.lineend)?c.lineend:w.linenum,value:value,type:type||value})}function error(m,config){var w=walker,conf=config||{},c=isset(conf['char'])?conf['char']:w.chnum,l=isset(conf.line)?conf.line:w.linenum;return{name:"ParseError",message:m+" at line "+(l+1)+' char '+(c+1),walker:w,tokens:tokens}}function white(){var c=walker.ch,token='',conf=getConf();while(c===" "||c==="\t"){token+=c;c=walker.nextChar()}tokener(token,'white',conf)}function comment(){var w=walker,c=w.ch,token=c,cnext,conf=getConf();cnext=w.nextChar();if(cnext==='/'){token+=cnext;var pk=w.peek();while(pk&&pk!=='\n'){token+=cnext;cnext=w.nextChar();pk=w.peek()}}else if(cnext==='*'){while(!(c==="*"&&cnext==="/")){token+=cnext;c=cnext;cnext=w.nextChar()}}else{conf.charend=conf['char'];conf.lineend=conf.line;return tokener(token,token,conf)}token+=cnext;w.nextChar();tokener(token,'comment',conf)}function str(){var w=walker,c=w.ch,q=c,token=c,cnext,conf=getConf();c=w.nextChar();while(c!==q){if(c==='\n'){cnext=w.nextChar();if(cnext==="\\"){token+=c+cnext}else{throw error("Unterminated string",conf)}}else{if(c==="\\"){token+=c+w.nextChar()}else{token+=c}}c=w.nextChar()}token+=c;w.nextChar();tokener(token,'string',conf)}function brace(){var w=walker,c=w.ch,depth=0,token=c,conf=getConf();c=w.nextChar();while(c!==')'&&!depth){if(c==='('){depth++}else if(c===')'){depth--}else if(c===false){throw error("Unterminated brace",conf)}token+=c;c=w.nextChar()}token+=c;w.nextChar();tokener(token,'brace',conf)}function identifier(pre){var w=walker,c=w.ch,conf=getConf(),token=(pre)?pre+c:c;c=w.nextChar();if(pre){conf['char']-=pre.length}while(isNameChar(c)||isDigit(c)){token+=c;c=w.nextChar()}tokener(token,'identifier',conf)}function num(){var w=walker,c=w.ch,conf=getConf(),token=c,point=token==='.',nondigit;c=w.nextChar();nondigit=!isDigit(c);if(point&&nondigit){conf.charend=conf['char'];conf.lineend=conf.line;return tokener(token,'.',conf)}if(token==='-'&&nondigit){return identifier('-')}while(c!==false&&(isDigit(c)||(!point&&c==='.'))){if(c==='.'){point=true}token+=c;c=w.nextChar()}tokener(token,'number',conf)}function op(){var w=walker,c=w.ch,conf=getConf(),token=c,next=w.nextChar();if(next==="="&&isOp(token,true)){token+=next;tokener(token,'match',conf);w.nextChar();return}conf.charend=conf['char']+1;conf.lineend=conf.line;tokener(token,token,conf)}function tokenize(){var ch=walker.ch;if(ch===" "||ch==="\t"){return white()}if(ch==='/'){return comment()}if(ch==='"'||ch==="'"){return str()}if(ch==='('){return brace()}if(ch==='-'||ch==='.'||isDigit(ch)){return num()}if(isNameChar(ch)){return identifier()}if(isOp(ch)){return op()}if(ch==="\n"){tokener("line");walker.nextChar();return}throw error("Unrecognized character")}function getNewline(content,pos){return content.charAt(pos)=='\r'&&content.charAt(pos+1)=='\n'?'\r\n':content.charAt(pos)}return{lex:function(source){walker.init(source);tokens=[];while(walker.ch!==false){tokenize()}return tokens},parse:function(source){var pos=0;return _.map(this.lex(source),function(token){if(token.type=='line'){token.value=getNewline(source,pos)}return{type:token.type,start:pos,end:(pos+=token.value.length)}})},toSource:function(toks){var i=0,max=toks.length,t,src='';for(;i<max;i+=1){t=toks[i];if(t.type==='line'){src+='\n'}else{src+=t.value}}return src}}});emmet.define('xmlParser',function(require,_){var Kludges={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:true,allowMissing:true};var tagName=null,type=null;function inText(stream,state){function chain(parser){state.tokenize=parser;return parser(stream,state)}var ch=stream.next();if(ch=="<"){if(stream.eat("!")){if(stream.eat("[")){if(stream.match("CDATA["))return chain(inBlock("atom","]]>"));else return null}else if(stream.match("--"))return chain(inBlock("comment","-->"));else if(stream.match("DOCTYPE",true,true)){stream.eatWhile(/[\w\._\-]/);return chain(doctype(1))}else return null}else if(stream.eat("?")){stream.eatWhile(/[\w\._\-]/);state.tokenize=inBlock("meta","?>");return"meta"}else{type=stream.eat("/")?"closeTag":"openTag";stream.eatSpace();tagName="";var c;while((c=stream.eat(/[^\s\u00a0=<>\"\'\/?]/)))tagName+=c;state.tokenize=inTag;return"tag"}}else if(ch=="&"){var ok;if(stream.eat("#")){if(stream.eat("x")){ok=stream.eatWhile(/[a-fA-F\d]/)&&stream.eat(";")}else{ok=stream.eatWhile(/[\d]/)&&stream.eat(";")}}else{ok=stream.eatWhile(/[\w\.\-:]/)&&stream.eat(";")}return ok?"atom":"error"}else{stream.eatWhile(/[^&<]/);return"text"}}function inTag(stream,state){var ch=stream.next();if(ch==">"||(ch=="/"&&stream.eat(">"))){state.tokenize=inText;type=ch==">"?"endTag":"selfcloseTag";return"tag"}else if(ch=="="){type="equals";return null}else if(/[\'\"]/.test(ch)){state.tokenize=inAttribute(ch);return state.tokenize(stream,state)}else{stream.eatWhile(/[^\s\u00a0=<>\"\'\/?]/);return"word"}}function inAttribute(quote){return function(stream,state){while(!stream.eol()){if(stream.next()==quote){state.tokenize=inTag;break}}return"string"}}function inBlock(style,terminator){return function(stream,state){while(!stream.eol()){if(stream.match(terminator)){state.tokenize=inText;break}stream.next()}return style}}function doctype(depth){return function(stream,state){var ch;while((ch=stream.next())!=null){if(ch=="<"){state.tokenize=doctype(depth+1);return state.tokenize(stream,state)}else if(ch==">"){if(depth==1){state.tokenize=inText;break}else{state.tokenize=doctype(depth-1);return state.tokenize(stream,state)}}}return"meta"}}var curState=null,setStyle;function pass(){for(var i=arguments.length-1;i>=0;i--)curState.cc.push(arguments[i])}function cont(){pass.apply(null,arguments);return true}function pushContext(tagName,startOfLine){var noIndent=Kludges.doNotIndent.hasOwnProperty(tagName)||(curState.context&&curState.context.noIndent);curState.context={prev:curState.context,tagName:tagName,indent:curState.indented,startOfLine:startOfLine,noIndent:noIndent}}function popContext(){if(curState.context)curState.context=curState.context.prev}function element(type){if(type=="openTag"){curState.tagName=tagName;return cont(attributes,endtag(curState.startOfLine))}else if(type=="closeTag"){var err=false;if(curState.context){if(curState.context.tagName!=tagName){if(Kludges.implicitlyClosed.hasOwnProperty(curState.context.tagName.toLowerCase())){popContext()}err=!curState.context||curState.context.tagName!=tagName}}else{err=true}if(err)setStyle="error";return cont(endclosetag(err))}return cont()}function endtag(startOfLine){return function(type){if(type=="selfcloseTag"||(type=="endTag"&&Kludges.autoSelfClosers.hasOwnProperty(curState.tagName.toLowerCase()))){maybePopContext(curState.tagName.toLowerCase());return cont()}if(type=="endTag"){maybePopContext(curState.tagName.toLowerCase());pushContext(curState.tagName,startOfLine);return cont()}return cont()}}function endclosetag(err){return function(type){if(err)setStyle="error";if(type=="endTag"){popContext();return cont()}setStyle="error";return cont(arguments.callee)}}function maybePopContext(nextTagName){var parentTagName;while(true){if(!curState.context){return}parentTagName=curState.context.tagName.toLowerCase();if(!Kludges.contextGrabbers.hasOwnProperty(parentTagName)||!Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)){return}popContext()}}function attributes(type){if(type=="word"){setStyle="attribute";return cont(attribute,attributes)}if(type=="endTag"||type=="selfcloseTag")return pass();setStyle="error";return cont(attributes)}function attribute(type){if(type=="equals")return cont(attvalue,attributes);if(!Kludges.allowMissing)setStyle="error";return(type=="endTag"||type=="selfcloseTag")?pass():cont()}function attvalue(type){if(type=="string")return cont(attvaluemaybe);if(type=="word"&&Kludges.allowUnquoted){setStyle="string";return cont()}setStyle="error";return(type=="endTag"||type=="selfCloseTag")?pass():cont()}function attvaluemaybe(type){if(type=="string")return cont(attvaluemaybe);else return pass()}function startState(){return{tokenize:inText,cc:[],indented:0,startOfLine:true,tagName:null,context:null}}function token(stream,state){if(stream.sol()){state.startOfLine=true;state.indented=0}if(stream.eatSpace())return null;setStyle=type=tagName=null;var style=state.tokenize(stream,state);state.type=type;if((style||type)&&style!="comment"){curState=state;while(true){var comb=state.cc.pop()||element;if(comb(type||style))break}}state.startOfLine=false;return setStyle||style}return{parse:function(data,offset){offset=offset||0;var state=startState();var stream=require('stringStream').create(data);var tokens=[];while(!stream.eol()){tokens.push({type:token(stream,state),start:stream.start+offset,end:stream.pos+offset});stream.start=stream.pos}return tokens}}});emmet.define('string-score',function(require,_){return{score:function(string,abbreviation,fuzziness){if(string==abbreviation){return 1}if(abbreviation==""){return 0}var total_character_score=0,abbreviation_length=abbreviation.length,string_length=string.length,start_of_string_bonus,abbreviation_score,fuzzies=1,final_score;for(var i=0,character_score,index_in_string,c,index_c_lowercase,index_c_uppercase,min_index;i<abbreviation_length;++i){c=abbreviation.charAt(i);index_c_lowercase=string.indexOf(c.toLowerCase());index_c_uppercase=string.indexOf(c.toUpperCase());min_index=Math.min(index_c_lowercase,index_c_uppercase);index_in_string=(min_index>-1)?min_index:Math.max(index_c_lowercase,index_c_uppercase);if(index_in_string===-1){if(fuzziness){fuzzies+=1-fuzziness;continue}else{return 0}}else{character_score=0.1}if(string[index_in_string]===c){character_score+=0.1}if(index_in_string===0){character_score+=0.6;if(i===0){start_of_string_bonus=1}}else{if(string.charAt(index_in_string-1)===' '){character_score+=0.8}}string=string.substring(index_in_string+1,string_length);total_character_score+=character_score}abbreviation_score=total_character_score/abbreviation_length;final_score=((abbreviation_score*(abbreviation_length/string_length))+abbreviation_score)/2;final_score=final_score/fuzzies;if(start_of_string_bonus&&(final_score+0.15<1)){final_score+=0.15}return final_score}}});emmet.define('utils',function(require,_){var caretPlaceholder='${0}';function StringBuilder(value){this._data=[];this.length=0;if(value)this.append(value)}StringBuilder.prototype={append:function(text){this._data.push(text);this.length+=text.length},toString:function(){return this._data.join('')},valueOf:function(){return this.toString()}};return{reTag:/<\/?[\w:\-]+(?:\s+[\w\-:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*\s*(\/?)>$/,endsWithTag:function(str){return this.reTag.test(str)},isNumeric:function(ch){if(typeof(ch)=='string')ch=ch.charCodeAt(0);return(ch&&ch>47&&ch<58)},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"")},getNewline:function(){var res=require('resources');if(!res){return'\n'}var nl=res.getVariable('newline');return _.isString(nl)?nl:'\n'},setNewline:function(str){var res=require('resources');res.setVariable('newline',str);res.setVariable('nl',str)},splitByLines:function(text,removeEmpty){var nl=this.getNewline();var lines=(text||'').replace(/\r\n/g,'\n').replace(/\n\r/g,'\n').replace(/\r/g,'\n').replace(/\n/g,nl).split(nl);if(removeEmpty){lines=_.filter(lines,function(line){return line.length&&!!this.trim(line)},this)}return lines},normalizeNewline:function(text){return this.splitByLines(text).join(this.getNewline())},repeatString:function(str,howMany){var result=[];for(var i=0;i<howMany;i++)result.push(str);return result.join('')},getStringsPads:function(strings){var lengths=_.map(strings,function(s){return _.isString(s)?s.length:+s});var max=_.max(lengths);return _.map(lengths,function(l){var pad=max-l;return pad?this.repeatString(' ',pad):''},this)},padString:function(text,pad){var padStr=(_.isNumber(pad))?this.repeatString(require('resources').getVariable('indentation')||'\t',pad):pad;var result=[];var lines=this.splitByLines(text);var nl=this.getNewline();result.push(lines[0]);for(var j=1;j<lines.length;j++)result.push(nl+padStr+lines[j]);return result.join('')},zeroPadString:function(str,pad){var padding='';var il=str.length;while(pad>il++)padding+='0';return padding+str},unindentString:function(text,pad){var lines=this.splitByLines(text);for(var i=0;i<lines.length;i++){if(lines[i].search(pad)==0)lines[i]=lines[i].substr(pad.length)}return lines.join(this.getNewline())},replaceUnescapedSymbol:function(str,symbol,replace){var i=0;var il=str.length;var sl=symbol.length;var matchCount=0;while(i<il){if(str.charAt(i)=='\\'){i+=sl+1}else if(str.substr(i,sl)==symbol){var curSl=sl;matchCount++;var newValue=replace;if(_.isFunction(replace)){var replaceData=replace(str,symbol,i,matchCount);if(replaceData){curSl=replaceData[0].length;newValue=replaceData[1]}else{newValue=false}}if(newValue===false){i++;continue}str=str.substring(0,i)+newValue+str.substring(i+curSl);il=str.length;i+=newValue.length}else{i++}}return str},replaceVariables:function(str,vars){vars=vars||{};var resolver=_.isFunction(vars)?vars:function(str,p1){return p1 in vars?vars[p1]:null};var res=require('resources');return require('tabStops').processText(str,{variable:function(data){var newValue=resolver(data.token,data.name,data);if(newValue===null){newValue=res.getVariable(data.name)}if(newValue===null||_.isUndefined(newValue))newValue=data.token;return newValue}})},replaceCounter:function(str,value,total){var symbol='$';str=String(str);value=String(value);if(/^\-?\d+$/.test(value)){value=+value}var that=this;return this.replaceUnescapedSymbol(str,symbol,function(str,symbol,pos,matchNum){if(str.charAt(pos+1)=='{'||that.isNumeric(str.charAt(pos+1))){return false}var j=pos+1;while(str.charAt(j)=='$'&&str.charAt(j+1)!='{')j++;var pad=j-pos;var base=0,decrement=false,m;if(m=str.substr(j).match(/^@(\-?)(\d*)/)){j+=m[0].length;if(m[1]){decrement=true}base=parseInt(m[2]||1)-1}if(decrement&&total&&_.isNumber(value)){value=total-value+1}value+=base;return[str.substring(pos,j),that.zeroPadString(value+'',pad)]})},matchesTag:function(str){return this.reTag.test(str||'')},escapeText:function(text){return text.replace(/([\$\\])/g,'\\$1')},unescapeText:function(text){return text.replace(/\\(.)/g,'$1')},getCaretPlaceholder:function(){return _.isFunction(caretPlaceholder)?caretPlaceholder.apply(this,arguments):caretPlaceholder},setCaretPlaceholder:function(value){caretPlaceholder=value},getLinePadding:function(line){return(line.match(/^(\s+)/)||[''])[0]},getLinePaddingFromPosition:function(content,pos){var lineRange=this.findNewlineBounds(content,pos);return this.getLinePadding(lineRange.substring(content))},escapeForRegexp:function(str){var specials=new RegExp("[.*+?|()\\[\\]{}\\\\]","g");return str.replace(specials,"\\$&")},prettifyNumber:function(num,fraction){return num.toFixed(typeof fraction=='undefined'?2:fraction).replace(/\.?0+$/,'')},stringBuilder:function(value){return new StringBuilder(value)},replaceSubstring:function(str,value,start,end){if(_.isObject(start)&&'end'in start){end=start.end;start=start.start}if(_.isString(end))end=start+end.length;if(_.isUndefined(end))end=start;if(start<0||start>str.length)return str;return str.substring(0,start)+value+str.substring(end)},narrowToNonSpace:function(text,start,end){var range=require('range').create(start,end);var reSpace=/[\s\n\r\u00a0]/;while(range.start<range.end){if(!reSpace.test(text.charAt(range.start)))break;range.start++}while(range.end>range.start){range.end--;if(!reSpace.test(text.charAt(range.end))){range.end++;break}}return range},findNewlineBounds:function(text,from){var len=text.length,start=0,end=len-1;for(var i=from-1;i>0;i--){var ch=text.charAt(i);if(ch=='\n'||ch=='\r'){start=i+1;break}}for(var j=from;j<len;j++){var ch=text.charAt(j);if(ch=='\n'||ch=='\r'){end=j;break}}return require('range').create(start,end-start)},deepMerge:function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length;if(!_.isObject(target)&&!_.isFunction(target)){target={}}for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue}if(copy&&(_.isObject(copy)||(copyIsArray=_.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&_.isArray(src)?src:[]}else{clone=src&&_.isObject(src)?src:{}}target[name]=this.deepMerge(clone,copy)}else if(copy!==undefined){target[name]=copy}}}}return target}}});emmet.define('range',function(require,_){function cmp(a,b,op){switch(op){case'eq':case'==':return a===b;case'lt':case'<':return a<b;case'lte':case'<=':return a<=b;case'gt':case'>':return a>b;case'gte':case'>=':return a>=b}}function Range(start,len){if(_.isObject(start)&&'start'in start){this.start=Math.min(start.start,start.end);this.end=Math.max(start.start,start.end)}else if(_.isArray(start)){this.start=start[0];this.end=start[1]}else{len=_.isString(len)?len.length:+len;this.start=start;this.end=start+len}}Range.prototype={length:function(){return Math.abs(this.end-this.start)},equal:function(range){return this.cmp(range,'eq','eq')},shift:function(delta){this.start+=delta;this.end+=delta;return this},overlap:function(range){return range.start<=this.end&&range.end>=this.start},intersection:function(range){if(this.overlap(range)){var start=Math.max(range.start,this.start);var end=Math.min(range.end,this.end);return new Range(start,end-start)}return null},union:function(range){if(this.overlap(range)){var start=Math.min(range.start,this.start);var end=Math.max(range.end,this.end);return new Range(start,end-start)}return null},inside:function(loc){return this.cmp(loc,'lte','gt')},contains:function(loc){return this.cmp(loc,'lt','gt')},include:function(r){return this.cmp(loc,'lte','gte')},cmp:function(loc,left,right){var a,b;if(loc instanceof Range){a=loc.start;b=loc.end}else{a=b=loc}return cmp(this.start,a,left||'<=')&&cmp(this.end,b,right||'>')},substring:function(str){return this.length()>0?str.substring(this.start,this.end):''},clone:function(){return new Range(this.start,this.length())},toArray:function(){return[this.start,this.end]},toString:function(){return'{'+this.start+', '+this.length()+'}'}};return{create:function(start,len){if(_.isUndefined(start)||start===null)return null;if(start instanceof Range)return start;if(_.isObject(start)&&'start'in start&&'end'in start){len=start.end-start.start;start=start.start}return new Range(start,len)},create2:function(start,end){if(_.isNumber(start)&&_.isNumber(end)){end-=start}return this.create(start,end)}}});emmet.define('handlerList',function(require,_){function HandlerList(){this._list=[]}HandlerList.prototype={add:function(fn,options){this._list.push(_.extend({order:0},options||{},{fn:fn}))},remove:function(fn){this._list=_.without(this._list,_.find(this._list,function(item){return item.fn===fn}))},list:function(){return _.sortBy(this._list,'order').reverse()},listFn:function(){return _.pluck(this.list(),'fn')},exec:function(skipValue,args){args=args||[];var result=null;_.find(this.list(),function(h){result=h.fn.apply(h,args);if(result!==skipValue)return true});return result}};return{create:function(){return new HandlerList()}}});emmet.define('tokenIterator',function(require,_){function TokenIterator(tokens){this.tokens=tokens;this._position=0;this.reset()}TokenIterator.prototype={next:function(){if(this.hasNext()){var token=this.tokens[++this._i];this._position=token.start;return token}return null},current:function(){return this.tokens[this._i]},position:function(){return this._position},hasNext:function(){return this._i<this._il-1},reset:function(){this._i=-1;this._il=this.tokens.length},item:function(){return this.tokens[this._i]},itemNext:function(){return this.tokens[this._i+1]},itemPrev:function(){return this.tokens[this._i-1]},nextUntil:function(type,callback){var token;var test=_.isString(type)?function(t){return t.type==type}:type;while(token=this.next()){if(callback)callback.call(this,token);if(test.call(this,token))break}}};return{create:function(tokens){return new TokenIterator(tokens)}}});emmet.define('stringStream',function(require,_){function StringStream(string){this.pos=this.start=0;this.string=string}StringStream.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==0},peek:function(){return this.string.charAt(this.pos)},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(match){var ch=this.string.charAt(this.pos),ok;if(typeof match=="string")ok=ch==match;else ok=ch&&(match.test?match.test(ch):match(ch));if(ok){++this.pos;return ch}},eatWhile:function(match){var start=this.pos;while(this.eat(match)){}return this.pos>start},eatSpace:function(){var start=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;return this.pos>start},skipToEnd:function(){this.pos=this.string.length},skipTo:function(ch){var found=this.string.indexOf(ch,this.pos);if(found>-1){this.pos=found;return true}},skipToPair:function(open,close){var braceCount=0,ch;var pos=this.pos,len=this.string.length;while(pos<len){ch=this.string.charAt(pos++);if(ch==open){braceCount++}else if(ch==close){braceCount--;if(braceCount<1){this.pos=pos;return true}}}return false},backUp:function(n){this.pos-=n},match:function(pattern,consume,caseInsensitive){if(typeof pattern=="string"){var cased=caseInsensitive?function(str){return str.toLowerCase()}:function(str){return str};if(cased(this.string).indexOf(cased(pattern),this.pos)==this.pos){if(consume!==false)this.pos+=pattern.length;return true}}else{var match=this.string.slice(this.pos).match(pattern);if(match&&consume!==false)this.pos+=match[0].length;return match}},current:function(){return this.string.slice(this.start,this.pos)}};return{create:function(string){return new StringStream(string)}}});emmet.define('resources',function(require,_){var VOC_SYSTEM='system';var VOC_USER='user';var cache={};var reTag=/^<(\w+\:?[\w\-]*)((?:\s+[\w\:\-]+\s*=\s*(['"]).*?\3)*)\s*(\/?)>/;var systemSettings={};var userSettings={};var resolvers=require('handlerList').create();function normalizeCaretPlaceholder(text){var utils=require('utils');return utils.replaceUnescapedSymbol(text,'|',utils.getCaretPlaceholder())}function parseItem(name,value,type){value=normalizeCaretPlaceholder(value);if(type=='snippets'){return require('elements').create('snippet',value)}if(type=='abbreviations'){return parseAbbreviation(name,value)}}function parseAbbreviation(key,value){key=require('utils').trim(key);var elements=require('elements');var m;if(m=reTag.exec(value)){return elements.create('element',m[1],m[2],m[4]=='/')}else{return elements.create('reference',value)}}function normalizeName(str){return str.replace(/:$/,'').replace(/:/g,'-')}return{setVocabulary:function(data,type){cache={};if(type==VOC_SYSTEM)systemSettings=data;else userSettings=data},getVocabulary:function(name){return name==VOC_SYSTEM?systemSettings:userSettings},getMatchedResource:function(node,syntax){return resolvers.exec(null,_.toArray(arguments))||this.findSnippet(syntax,node.name())},getVariable:function(name){return(this.getSection('variables')||{})[name]},setVariable:function(name,value){var voc=this.getVocabulary('user')||{};if(!('variables'in voc))voc.variables={};voc.variables[name]=value;this.setVocabulary(voc,'user')},hasSyntax:function(syntax){return syntax in this.getVocabulary(VOC_USER)||syntax in this.getVocabulary(VOC_SYSTEM)},addResolver:function(fn,options){resolvers.add(fn,options)},removeResolver:function(fn){resolvers.remove(fn)},getSection:function(name){if(!name)return null;if(!(name in cache)){cache[name]=require('utils').deepMerge({},systemSettings[name],userSettings[name])}var data=cache[name],subsections=_.rest(arguments),key;while(data&&(key=subsections.shift())){if(key in data){data=data[key]}else{return null}}return data},findItem:function(topSection,subsection){var data=this.getSection(topSection);while(data){if(subsection in data)return data[subsection];data=this.getSection(data['extends'])}},findSnippet:function(syntax,name,memo){if(!syntax||!name)return null;memo=memo||[];var names=[name];if(~name.indexOf('-'))names.push(name.replace(/\-/g,':'));var data=this.getSection(syntax),matchedItem=null;_.find(['snippets','abbreviations'],function(sectionName){var data=this.getSection(syntax,sectionName);if(data){return _.find(names,function(n){if(data[n])return matchedItem=parseItem(n,data[n],sectionName)})}},this);memo.push(syntax);if(!matchedItem&&data['extends']&&!_.include(memo,data['extends'])){return this.findSnippet(data['extends'],name,memo)}return matchedItem},fuzzyFindSnippet:function(syntax,name,minScore){minScore=minScore||0.3;var payload=this.getAllSnippets(syntax);var sc=require('string-score');name=normalizeName(name);var scores=_.map(payload,function(value,key){return{key:key,score:sc.score(value.nk,name,0.1)}});var result=_.last(_.sortBy(scores,'score'));if(result&&result.score>=minScore){var k=result.key;return payload[k].parsedValue}},getAllSnippets:function(syntax){var cacheKey='all-'+syntax;if(!cache[cacheKey]){var stack=[],sectionKey=syntax;var memo=[];do{var section=this.getSection(sectionKey);if(!section)break;_.each(['snippets','abbreviations'],function(sectionName){var stackItem={};_.each(section[sectionName]||null,function(v,k){stackItem[k]={nk:normalizeName(k),value:v,parsedValue:parseItem(k,v,sectionName),type:sectionName}});stack.push(stackItem)});memo.push(sectionKey);sectionKey=section['extends']}while(sectionKey&&!_.include(memo,sectionKey));cache[cacheKey]=_.extend.apply(_,stack.reverse())}return cache[cacheKey]}}});emmet.define('actions',function(require,_,zc){var actions={};function humanizeActionName(name){return require('utils').trim(name.charAt(0).toUpperCase()+name.substring(1).replace(/_[a-z]/g,function(str){return' '+str.charAt(1).toUpperCase()}))}return{add:function(name,fn,options){name=name.toLowerCase();options=options||{};if(!options.label){options.label=humanizeActionName(name)}actions[name]={name:name,fn:fn,options:options}},get:function(name){return actions[name.toLowerCase()]},run:function(name,args){if(!_.isArray(args)){args=_.rest(arguments)}var action=this.get(name);if(action){return action.fn.apply(emmet,args)}else{emmet.log('Action "%s" is not defined',name);return false}},getAll:function(){return actions},getList:function(){return _.values(this.getAll())},getMenu:function(skipActions){var result=[];skipActions=skipActions||[];_.each(this.getList(),function(action){if(action.options.hidden||_.include(skipActions,action.name))return;var actionName=humanizeActionName(action.name);var ctx=result;if(action.options.label){var parts=action.options.label.split('/');actionName=parts.pop();var menuName,submenu;while(menuName=parts.shift()){submenu=_.find(ctx,function(item){return item.type=='submenu'&&item.name==menuName});if(!submenu){submenu={name:menuName,type:'submenu',items:[]};ctx.push(submenu)}ctx=submenu.items}}ctx.push({type:'action',name:action.name,label:actionName})});return result},getActionNameForMenuTitle:function(title,menu){var item=null;_.find(menu||this.getMenu(),function(val){if(val.type=='action'){if(val.label==title||val.name==title){return item=val.name}}else{return item=this.getActionNameForMenuTitle(title,val.items)}},this);return item||null}}});emmet.define('profile',function(require,_){var profiles={};var defaultProfile={tag_case:'asis',attr_case:'asis',attr_quotes:'double',tag_nl:'decide',tag_nl_leaf:false,place_cursor:true,indent:true,inline_break:3,self_closing_tag:'xhtml',filters:'',extraFilters:''};function OutputProfile(options){_.extend(this,defaultProfile,options)}OutputProfile.prototype={tagName:function(name){return stringCase(name,this.tag_case)},attributeName:function(name){return stringCase(name,this.attr_case)},attributeQuote:function(){return this.attr_quotes=='single'?"'":'"'},selfClosing:function(param){if(this.self_closing_tag=='xhtml')return' /';if(this.self_closing_tag===true)return'/';return''},cursor:function(){return this.place_cursor?require('utils').getCaretPlaceholder():''}};function stringCase(str,caseValue){switch(String(caseValue||'').toLowerCase()){case'lower':return str.toLowerCase();case'upper':return str.toUpperCase()}return str}function createProfile(name,options){return profiles[name.toLowerCase()]=new OutputProfile(options)}function createDefaultProfiles(){createProfile('xhtml');createProfile('html',{self_closing_tag:false});createProfile('xml',{self_closing_tag:true,tag_nl:true});createProfile('plain',{tag_nl:false,indent:false,place_cursor:false});createProfile('line',{tag_nl:false,indent:false,extraFilters:'s'})}createDefaultProfiles();return{create:function(name,options){if(arguments.length==2)return createProfile(name,options);else return new OutputProfile(_.defaults(name||{},defaultProfile))},get:function(name,syntax){if(!name&&syntax){var profile=require('resources').findItem(syntax,'profile');if(profile){name=profile}}if(!name){return profiles.plain}if(name instanceof OutputProfile){return name}if(_.isString(name)&&name.toLowerCase()in profiles){return profiles[name.toLowerCase()]}return this.create(name)},remove:function(name){name=(name||'').toLowerCase();if(name in profiles)delete profiles[name]},reset:function(){profiles={};createDefaultProfiles()},stringCase:stringCase}});emmet.define('editorUtils',function(require,_){return{isInsideTag:function(html,caretPos){var reTag=/^<\/?\w[\w\:\-]*.*?>/;var pos=caretPos;while(pos>-1){if(html.charAt(pos)=='<')break;pos--}if(pos!=-1){var m=reTag.exec(html.substring(pos));if(m&&caretPos>pos&&caretPos<pos+m[0].length)return true}return false},outputInfo:function(editor,syntax,profile){profile=profile||editor.getProfileName();return{syntax:String(syntax||editor.getSyntax()),profile:profile||null,content:String(editor.getContent())}},unindent:function(editor,text){return require('utils').unindentString(text,this.getCurrentLinePadding(editor))},getCurrentLinePadding:function(editor){return require('utils').getLinePadding(editor.getCurrentLine())}}});emmet.define('actionUtils',function(require,_){return{mimeTypes:{'gif':'image/gif','png':'image/png','jpg':'image/jpeg','jpeg':'image/jpeg','svg':'image/svg+xml','html':'text/html','htm':'text/html'},extractAbbreviation:function(str){var curOffset=str.length;var startIndex=-1;var groupCount=0;var braceCount=0;var textCount=0;var utils=require('utils');var parser=require('abbreviationParser');while(true){curOffset--;if(curOffset<0){startIndex=0;break}var ch=str.charAt(curOffset);if(ch==']'){braceCount++}else if(ch=='['){if(!braceCount){startIndex=curOffset+1;break}braceCount--}else if(ch=='}'){textCount++}else if(ch=='{'){if(!textCount){startIndex=curOffset+1;break}textCount--}else if(ch==')'){groupCount++}else if(ch=='('){if(!groupCount){startIndex=curOffset+1;break}groupCount--}else{if(braceCount||textCount)continue;else if(!parser.isAllowedChar(ch)||(ch=='>'&&utils.endsWithTag(str.substring(0,curOffset+1)))){startIndex=curOffset+1;break}}}if(startIndex!=-1&&!textCount&&!braceCount&&!groupCount)return str.substring(startIndex).replace(/^[\*\+\>\^]+/,'');else return''},getImageSize:function(stream){var pngMagicNum="\211PNG\r\n\032\n",jpgMagicNum="\377\330",gifMagicNum="GIF8",nextByte=function(){return stream.charCodeAt(pos++)};if(stream.substr(0,8)===pngMagicNum){var pos=stream.indexOf('IHDR')+4;return{width:(nextByte()<<24)|(nextByte()<<16)|(nextByte()<<8)|nextByte(),height:(nextByte()<<24)|(nextByte()<<16)|(nextByte()<<8)|nextByte()}}else if(stream.substr(0,4)===gifMagicNum){pos=6;return{width:nextByte()|(nextByte()<<8),height:nextByte()|(nextByte()<<8)}}else if(stream.substr(0,2)===jpgMagicNum){pos=2;var l=stream.length;while(pos<l){if(nextByte()!=0xFF)return;var marker=nextByte();if(marker==0xDA)break;var size=(nextByte()<<8)|nextByte();if(marker>=0xC0&&marker<=0xCF&&!(marker&0x4)&&!(marker&0x8)){pos+=1;return{height:(nextByte()<<8)|nextByte(),width:(nextByte()<<8)|nextByte()}}else{pos+=size-2}}}},captureContext:function(editor){var allowedSyntaxes={'html':1,'xml':1,'xsl':1};var syntax=String(editor.getSyntax());if(syntax in allowedSyntaxes){var content=String(editor.getContent());var tag=require('htmlMatcher').find(content,editor.getCaretPos());if(tag&&tag.type=='tag'){var startTag=tag.open;var contextNode={name:startTag.name,attributes:[]};var tagTree=require('xmlEditTree').parse(startTag.range.substring(content));if(tagTree){contextNode.attributes=_.map(tagTree.getAll(),function(item){return{name:item.name(),value:item.value()}})}return contextNode}}return null},findExpressionBounds:function(editor,fn){var content=String(editor.getContent());var il=content.length;var exprStart=editor.getCaretPos()-1;var exprEnd=exprStart+1;while(exprStart>=0&&fn(content.charAt(exprStart),exprStart,content))exprStart--;while(exprEnd<il&&fn(content.charAt(exprEnd),exprEnd,content))exprEnd++;if(exprEnd>exprStart){return require('range').create([++exprStart,exprEnd])}},compoundUpdate:function(editor,data){if(data){var sel=editor.getSelectionRange();editor.replaceContent(data.data,data.start,data.end,true);editor.createSelection(data.caret,data.caret+sel.end-sel.start);return true}return false},detectSyntax:function(editor,hint){var syntax=hint||'html';if(!require('resources').hasSyntax(syntax)){syntax='html'}if(syntax=='html'&&(this.isStyle(editor)||this.isInlineCSS(editor))){syntax='css'}return syntax},detectProfile:function(editor){var syntax=editor.getSyntax();var profile=require('resources').findItem(syntax,'profile');if(profile){return profile}switch(syntax){case'xml':case'xsl':return'xml';case'css':if(this.isInlineCSS(editor)){return'line'}break;case'html':var profile=require('resources').getVariable('profile');if(!profile){profile=this.isXHTML(editor)?'xhtml':'html'}return profile}return'xhtml'},isXHTML:function(editor){return editor.getContent().search(/<!DOCTYPE[^>]+XHTML/i)!=-1},isStyle:function(editor){var content=String(editor.getContent());var caretPos=editor.getCaretPos();var tag=require('htmlMatcher').tag(content,caretPos);return tag&&tag.open.name.toLowerCase()=='style'&&tag.innerRange.cmp(caretPos,'lte','gte')},isInlineCSS:function(editor){var content=String(editor.getContent());var caretPos=editor.getCaretPos();var tree=require('xmlEditTree').parseFromPosition(content,caretPos,true);if(tree){var attr=tree.itemFromPosition(caretPos,true);return attr&&attr.name().toLowerCase()=='style'&&attr.valueRange(true).cmp(caretPos,'lte','gte')}return false}}});emmet.define('abbreviationUtils',function(require,_){return{isSnippet:function(node){return require('elements').is(node.matchedResource(),'snippet')},isUnary:function(node){if(node.children.length||node._text||this.isSnippet(node)){return false}var r=node.matchedResource();return r&&r.is_empty},isInline:function(node){return node.isTextNode()||!node.name()||require('tagName').isInlineLevel(node.name())},isBlock:function(node){return this.isSnippet(node)||!this.isInline(node)},isSnippet:function(node){return require('elements').is(node.matchedResource(),'snippet')},hasTagsInContent:function(node){return require('utils').matchesTag(node.content)},hasBlockChildren:function(node){return(this.hasTagsInContent(node)&&this.isBlock(node))||_.any(node.children,function(child){return this.isBlock(child)},this)},insertChildContent:function(text,childContent,options){options=_.extend({keepVariable:true,appendIfNoChild:true},options||{});var childVariableReplaced=false;var utils=require('utils');text=utils.replaceVariables(text,function(variable,name,data){var output=variable;if(name=='child'){output=utils.padString(childContent,utils.getLinePaddingFromPosition(text,data.start));childVariableReplaced=true;if(options.keepVariable)output+=variable}return output});if(!childVariableReplaced&&options.appendIfNoChild){text+=childContent}return text}}});emmet.define('base64',function(require,_){var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';return{encode:function(input){var output=[];var chr1,chr2,chr3,enc1,enc2,enc3,enc4,cdp1,cdp2,cdp3;var i=0,il=input.length,b64=chars;while(i<il){cdp1=input.charCodeAt(i++);cdp2=input.charCodeAt(i++);cdp3=input.charCodeAt(i++);chr1=cdp1&0xff;chr2=cdp2&0xff;chr3=cdp3&0xff;enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(cdp2)){enc3=enc4=64}else if(isNaN(cdp3)){enc4=64}output.push(b64.charAt(enc1)+b64.charAt(enc2)+b64.charAt(enc3)+b64.charAt(enc4))}return output.join('')},decode:function(data){var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,tmpArr=[];var b64=chars,il=data.length;if(!data){return data}data+='';do{h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmpArr[ac++]=String.fromCharCode(o1)}else if(h4==64){tmpArr[ac++]=String.fromCharCode(o1,o2)}else{tmpArr[ac++]=String.fromCharCode(o1,o2,o3)}}while(i<il);return tmpArr.join('')}}});emmet.define('htmlMatcher',function(require,_){var reOpenTag=/^<([\w\:\-]+)((?:\s+[\w\-:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;var reCloseTag=/^<\/([\w\:\-]+)[^>]*>/;function openTag(i,match){return{name:match[1],selfClose:!!match[3],range:require('range').create(i,match[0]),type:'open'}}function closeTag(i,match){return{name:match[1],range:require('range').create(i,match[0]),type:'close'}}function comment(i,match){return{range:require('range').create(i,_.isNumber(match)?match-i:match[0]),type:'comment'}}function createMatcher(text){var memo={},m;return{open:function(i){var m=this.matches(i);return m&&m.type=='open'?m:null},close:function(i){var m=this.matches(i);return m&&m.type=='close'?m:null},matches:function(i){var key='p'+i;if(!(key in memo)){if(text.charAt(i)=='<'){var substr=text.slice(i);if(m=substr.match(reOpenTag)){memo[key]=openTag(i,m)}else if(m=substr.match(reCloseTag)){memo[key]=closeTag(i,m)}else{memo[key]=false}}}return memo[key]},text:function(){return text}}}function matches(text,pos,pattern){return text.substring(pos,pos+pattern.length)==pattern}function findClosingPair(open,matcher){var stack=[],tag=null;var text=matcher.text();for(var pos=open.range.end,len=text.length;pos<len;pos++){if(matches(text,pos,'<!--')){for(var j=pos;j<len;j++){if(matches(text,j,'-->')){pos=j+3;break}}}if(tag=matcher.matches(pos)){if(tag.type=='open'&&!tag.selfClose){stack.push(tag.name)}else if(tag.type=='close'){if(!stack.length){return tag.name==open.name?tag:null}if(_.last(stack)==tag.name){stack.pop()}else{var found=false;while(stack.length&&!found){var last=stack.pop();if(last==tag.name){found=true}}if(!stack.length&&!found){return tag.name==open.name?tag:null}}}}}}return{find:function(text,pos){var range=require('range');var matcher=createMatcher(text);var open=null,close=null;for(var i=pos;i>=0;i--){if(open=matcher.open(i)){if(open.selfClose){if(open.range.cmp(pos,'lt','gt')){break}continue}close=findClosingPair(open,matcher);if(close){var r=range.create2(open.range.start,close.range.end);if(r.contains(pos)){break}}else if(open.range.contains(pos)){break}open=null}else if(matches(text,i,'-->')){for(var j=i-1;j>=0;j--){if(matches(text,j,'-->')){break}else if(matches(text,j,'<!--')){i=j;break}}}else if(matches(text,i,'<!--')){var j=i+4,jl=text.length;for(;j<jl;j++){if(matches(text,j,'-->')){j+=3;break}}open=comment(i,j);break}}if(open){var outerRange=null;var innerRange=null;if(close){outerRange=range.create2(open.range.start,close.range.end);innerRange=range.create2(open.range.end,close.range.start)}else{outerRange=innerRange=range.create2(open.range.start,open.range.end)}if(open.type=='comment'){var _c=outerRange.substring(text);innerRange.start+=_c.length-_c.replace(/^<\!--\s*/,'').length;innerRange.end-=_c.length-_c.replace(/\s*-->$/,'').length}return{open:open,close:close,type:open.type=='comment'?'comment':'tag',innerRange:innerRange,innerContent:function(){return this.innerRange.substring(text)},outerRange:outerRange,outerContent:function(){return this.outerRange.substring(text)},range:!innerRange.length()||!innerRange.cmp(pos,'lte','gte')?outerRange:innerRange,content:function(){return this.range.substring(text)},source:text}}},tag:function(text,pos){var result=this.find(text,pos);if(result&&result.type=='tag'){return result}}}});emmet.define('tabStops',function(require,_){var startPlaceholderNum=100;var tabstopIndex=0;var defaultOptions={replaceCarets:false,escape:function(ch){return'\\'+ch},tabstop:function(data){return data.token},variable:function(data){return data.token}};require('abbreviationParser').addOutputProcessor(function(text,node,type){var maxNum=0;var tabstops=require('tabStops');var utils=require('utils');var tsOptions={tabstop:function(data){var group=parseInt(data.group);if(group==0)return'${0}';if(group>maxNum)maxNum=group;if(data.placeholder){var ix=group+tabstopIndex;var placeholder=tabstops.processText(data.placeholder,tsOptions);return'${'+ix+':'+placeholder+'}'}else{return'${'+(group+tabstopIndex)+'}'}}};text=tabstops.processText(text,tsOptions);text=utils.replaceVariables(text,tabstops.variablesResolver(node));tabstopIndex+=maxNum+1;return text});return{extract:function(text,options){var utils=require('utils');var placeholders={carets:''};var marks=[];options=_.extend({},defaultOptions,options,{tabstop:function(data){var token=data.token;var ret='';if(data.placeholder=='cursor'){marks.push({start:data.start,end:data.start+token.length,group:'carets',value:''})}else{if('placeholder'in data)placeholders[data.group]=data.placeholder;if(data.group in placeholders)ret=placeholders[data.group];marks.push({start:data.start,end:data.start+token.length,group:data.group,value:ret})}return token}});if(options.replaceCarets){text=text.replace(new RegExp(utils.escapeForRegexp(utils.getCaretPlaceholder()),'g'),'${0:cursor}')}text=this.processText(text,options);var buf=utils.stringBuilder(),lastIx=0;var tabStops=_.map(marks,function(mark){buf.append(text.substring(lastIx,mark.start));var pos=buf.length;var ph=placeholders[mark.group]||'';buf.append(ph);lastIx=mark.end;return{group:mark.group,start:pos,end:pos+ph.length}});buf.append(text.substring(lastIx));return{text:buf.toString(),tabstops:_.sortBy(tabStops,'start')}},processText:function(text,options){options=_.extend({},defaultOptions,options);var buf=require('utils').stringBuilder();var stream=require('stringStream').create(text);var ch,m,a;while(ch=stream.next()){if(ch=='\\'&&!stream.eol()){buf.append(options.escape(stream.next()));continue}a=ch;if(ch=='$'){stream.start=stream.pos-1;if(m=stream.match(/^[0-9]+/)){a=options.tabstop({start:buf.length,group:stream.current().substr(1),token:stream.current()})}else if(m=stream.match(/^\{([a-z_\-][\w\-]*)\}/)){a=options.variable({start:buf.length,name:m[1],token:stream.current()})}else if(m=stream.match(/^\{([0-9]+)(:.+?)?\}/,false)){stream.skipToPair('{','}');var obj={start:buf.length,group:m[1],token:stream.current()};var placeholder=obj.token.substring(obj.group.length+2,obj.token.length-1);if(placeholder){obj.placeholder=placeholder.substr(1)}a=options.tabstop(obj)}}buf.append(a)}return buf.toString()},upgrade:function(node,offset){var maxNum=0;var options={tabstop:function(data){var group=parseInt(data.group);if(group>maxNum)maxNum=group;if(data.placeholder)return'${'+(group+offset)+':'+data.placeholder+'}';else return'${'+(group+offset)+'}'}};_.each(['start','end','content'],function(p){node[p]=this.processText(node[p],options)},this);return maxNum},variablesResolver:function(node){var placeholderMemo={};var res=require('resources');return function(str,varName){if(varName=='child')return str;if(varName=='cursor')return require('utils').getCaretPlaceholder();var attr=node.attribute(varName);if(!_.isUndefined(attr)&&attr!==str){return attr}var varValue=res.getVariable(varName);if(varValue)return varValue;if(!placeholderMemo[varName])placeholderMemo[varName]=startPlaceholderNum++;return'${'+placeholderMemo[varName]+':'+varName+'}'}},resetTabstopIndex:function(){tabstopIndex=0;startPlaceholderNum=100}}});emmet.define('preferences',function(require,_){var preferences={};var defaults={};var _dbgDefaults=null;var _dbgPreferences=null;function toBoolean(val){if(_.isString(val)){val=val.toLowerCase();return val=='yes'||val=='true'||val=='1'}return!!val}function isValueObj(obj){return _.isObject(obj)&&'value'in obj&&_.keys(obj).length<3}return{define:function(name,value,description){var prefs=name;if(_.isString(name)){prefs={};prefs[name]={value:value,description:description}}_.each(prefs,function(v,k){defaults[k]=isValueObj(v)?v:{value:v}})},set:function(name,value){var prefs=name;if(_.isString(name)){prefs={};prefs[name]=value}_.each(prefs,function(v,k){if(!(k in defaults)){throw'Property "'+k+'" is not defined. You should define it first with `define` method of current module'}if(v!==defaults[k].value){switch(typeof defaults[k].value){case'boolean':v=toBoolean(v);break;case'number':v=parseInt(v+'',10)||0;break;default:if(v!==null){v+=''}}preferences[k]=v}else if(k in preferences){delete preferences[k]}})},get:function(name){if(name in preferences)return preferences[name];if(name in defaults)return defaults[name].value;return void 0},getArray:function(name){var val=this.get(name);if(_.isUndefined(val)||val===null||val===''){return null}val=_.map(val.split(','),require('utils').trim);if(!val.length){return null}return val},getDict:function(name){var result={};_.each(this.getArray(name),function(val){var parts=val.split(':');result[parts[0]]=parts[1]});return result},description:function(name){return name in defaults?defaults[name].description:void 0},remove:function(name){if(!_.isArray(name))name=[name];_.each(name,function(key){if(key in preferences)delete preferences[key];if(key in defaults)delete defaults[key]})},list:function(){return _.map(_.keys(defaults).sort(),function(key){return{name:key,value:this.get(key),type:typeof defaults[key].value,description:defaults[key].description}},this)},load:function(json){_.each(json,function(value,key){this.set(key,value)},this)},exportModified:function(){return _.clone(preferences)},reset:function(){preferences={}},_startTest:function(){_dbgDefaults=defaults;_dbgPreferences=preferences;defaults={};preferences={}},_stopTest:function(){defaults=_dbgDefaults;preferences=_dbgPreferences}}});emmet.define('filters',function(require,_){var registeredFilters={};var basicFilters='html';function list(filters){if(!filters)return[];if(_.isString(filters))return filters.split(/[\|,]/g);return filters}return{add:function(name,fn){registeredFilters[name]=fn},apply:function(tree,filters,profile){var utils=require('utils');profile=require('profile').get(profile);_.each(list(filters),function(filter){var name=utils.trim(filter.toLowerCase());if(name&&name in registeredFilters){tree=registeredFilters[name](tree,profile)}});return tree},composeList:function(syntax,profile,additionalFilters){profile=require('profile').get(profile);var filters=list(profile.filters||require('resources').findItem(syntax,'filters')||basicFilters);if(profile.extraFilters){filters=filters.concat(list(profile.extraFilters))}if(additionalFilters){filters=filters.concat(list(additionalFilters))}if(!filters||!filters.length){filters=list(basicFilters)}return filters},extractFromAbbreviation:function(abbr){var filters='';abbr=abbr.replace(/\|([\w\|\-]+)$/,function(str,p1){filters=p1;return''});return[abbr,list(filters)]}}});emmet.define('elements',function(require,_){var factories={};var reAttrs=/([\w\-:]+)\s*=\s*(['"])(.*?)\2/g;var result={add:function(name,factory){var that=this;factories[name]=function(){var elem=factory.apply(that,arguments);if(elem)elem.type=name;return elem}},get:function(name){return factories[name]},create:function(name){var args=[].slice.call(arguments,1);var factory=this.get(name);return factory?factory.apply(this,args):null},is:function(elem,type){return elem&&elem.type===type}};function commonFactory(value){return{data:value}}result.add('element',function(elementName,attrs,isEmpty){var ret={name:elementName,is_empty:!!isEmpty};if(attrs){ret.attributes=[];if(_.isArray(attrs)){ret.attributes=attrs}else if(_.isString(attrs)){var m;while(m=reAttrs.exec(attrs)){ret.attributes.push({name:m[1],value:m[3]})}}else{_.each(attrs,function(value,name){ret.attributes.push({name:name,value:value})})}}return ret});result.add('snippet',commonFactory);result.add('reference',commonFactory);result.add('empty',function(){return{}});return result});emmet.define('editTree',function(require,_,core){var range=require('range').create;function EditContainer(source,options){this.options=_.extend({offset:0},options);this.source=source;this._children=[];this._positions={name:0};this.initialize.apply(this,arguments)}EditContainer.extend=core.extend;EditContainer.prototype={initialize:function(){},_updateSource:function(value,start,end){var r=range(start,_.isUndefined(end)?0:end-start);var delta=value.length-r.length();var update=function(obj){_.each(obj,function(v,k){if(v>=r.end)obj[k]+=delta})};update(this._positions);_.each(this.list(),function(item){update(item._positions)});this.source=require('utils').replaceSubstring(this.source,value,r)},add:function(name,value,pos){var item=new EditElement(name,value);this._children.push(item);return item},get:function(name){if(_.isNumber(name))return this.list()[name];if(_.isString(name))return _.find(this.list(),function(prop){return prop.name()===name});return name},getAll:function(name){if(!_.isArray(name))name=[name];var names=[],indexes=[];_.each(name,function(item){if(_.isString(item))names.push(item);else if(_.isNumber(item))indexes.push(item)});return _.filter(this.list(),function(attribute,i){return _.include(indexes,i)||_.include(names,attribute.name())})},value:function(name,value,pos){var element=this.get(name);if(element)return element.value(value);if(!_.isUndefined(value)){return this.add(name,value,pos)}},values:function(name){return _.map(this.getAll(name),function(element){return element.value()})},remove:function(name){var element=this.get(name);if(element){this._updateSource('',element.fullRange());this._children=_.without(this._children,element)}},list:function(){return this._children},indexOf:function(item){return _.indexOf(this.list(),this.get(item))},name:function(val){if(!_.isUndefined(val)&&this._name!==(val=String(val))){this._updateSource(val,this._positions.name,this._positions.name+this._name.length);this._name=val}return this._name},nameRange:function(isAbsolute){return range(this._positions.name+(isAbsolute?this.options.offset:0),this.name())},range:function(isAbsolute){return range(isAbsolute?this.options.offset:0,this.toString())},itemFromPosition:function(pos,isAbsolute){return _.find(this.list(),function(elem){return elem.range(isAbsolute).inside(pos)})},toString:function(){return this.source}};function EditElement(parent,nameToken,valueToken){this.parent=parent;this._name=nameToken.value;this._value=valueToken?valueToken.value:'';this._positions={name:nameToken.start,value:valueToken?valueToken.start:-1};this.initialize.apply(this,arguments)}EditElement.extend=core.extend;EditElement.prototype={initialize:function(){},_pos:function(num,isAbsolute){return num+(isAbsolute?this.parent.options.offset:0)},value:function(val){if(!_.isUndefined(val)&&this._value!==(val=String(val))){this.parent._updateSource(val,this.valueRange());this._value=val}return this._value},name:function(val){if(!_.isUndefined(val)&&this._name!==(val=String(val))){this.parent._updateSource(val,this.nameRange());this._name=val}return this._name},namePosition:function(isAbsolute){return this._pos(this._positions.name,isAbsolute)},valuePosition:function(isAbsolute){return this._pos(this._positions.value,isAbsolute)},range:function(isAbsolute){return range(this.namePosition(isAbsolute),this.toString())},fullRange:function(isAbsolute){return this.range(isAbsolute)},nameRange:function(isAbsolute){return range(this.namePosition(isAbsolute),this.name())},valueRange:function(isAbsolute){return range(this.valuePosition(isAbsolute),this.value())},toString:function(){return this.name()+this.value()},valueOf:function(){return this.toString()}};return{EditContainer:EditContainer,EditElement:EditElement,createToken:function(start,value,type){var obj={start:start||0,value:value||'',type:type};obj.end=obj.start+obj.value.length;return obj}}});emmet.define('cssEditTree',function(require,_){var defaultOptions={styleBefore:'\n\t',styleSeparator:': ',offset:0};var WHITESPACE_REMOVE_FROM_START=1;var WHITESPACE_REMOVE_FROM_END=2;function range(start,len){return require('range').create(start,len)}function trimWhitespaceTokens(tokens,mask){mask=mask||(WHITESPACE_REMOVE_FROM_START|WHITESPACE_REMOVE_FROM_END);var whitespace=['white','line'];if((mask&WHITESPACE_REMOVE_FROM_END)==WHITESPACE_REMOVE_FROM_END)while(tokens.length&&_.include(whitespace,_.last(tokens).type)){tokens.pop()}if((mask&WHITESPACE_REMOVE_FROM_START)==WHITESPACE_REMOVE_FROM_START)while(tokens.length&&_.include(whitespace,tokens[0].type)){tokens.shift()}return tokens}function findSelectorRange(it){var tokens=[],token;var start=it.position(),end;while(token=it.next()){if(token.type=='{')break;tokens.push(token)}trimWhitespaceTokens(tokens);if(tokens.length){start=tokens[0].start;end=_.last(tokens).end}else{end=start}return range(start,end-start)}function findValueRange(it){var skipTokens=['white','line',':'];var tokens=[],token,start,end;it.nextUntil(function(tok){return!_.include(skipTokens,this.itemNext().type)});start=it.current().end;while(token=it.next()){if(token.type=='}'||token.type==';'){trimWhitespaceTokens(tokens,WHITESPACE_REMOVE_FROM_START|(token.type=='}'?WHITESPACE_REMOVE_FROM_END:0));if(tokens.length){start=tokens[0].start;end=_.last(tokens).end}else{end=start}return range(start,end-start)}tokens.push(token)}if(tokens.length){return range(tokens[0].start,_.last(tokens).end-tokens[0].start)}}function findParts(str){var stream=require('stringStream').create(str);var ch;var result=[];var sep=/[\s\u00a0,]/;var add=function(){stream.next();result.push(range(stream.start,stream.current()));stream.start=stream.pos};stream.eatSpace();stream.start=stream.pos;while(ch=stream.next()){if(ch=='"'||ch=="'"){stream.next();if(!stream.skipTo(ch))break;add()}else if(ch=='('){stream.backUp(1);if(!stream.skipToPair('(',')'))break;stream.backUp(1);add()}else{if(sep.test(ch)){result.push(range(stream.start,stream.current().length-1));stream.eatWhile(sep);stream.start=stream.pos}}}add();return _.chain(result).filter(function(item){return!!item.length()}).uniq(false,function(item){return item.toString()}).value()}function isValidIdentifier(it){var tokens=it.tokens;for(var i=it._i+1,il=tokens.length;i<il;i++){if(tokens[i].type==':')return true;if(tokens[i].type=='identifier'||tokens[i].type=='line')return false}return false}var CSSEditContainer=require('editTree').EditContainer.extend({initialize:function(source,options){_.defaults(this.options,defaultOptions);var editTree=require('editTree');var it=require('tokenIterator').create(require('cssParser').parse(source));var selectorRange=findSelectorRange(it);this._positions.name=selectorRange.start;this._name=selectorRange.substring(source);if(!it.current()||it.current().type!='{')throw'Invalid CSS rule';this._positions.contentStart=it.position()+1;var propertyRange,valueRange,token;while(token=it.next()){if(token.type=='identifier'&&isValidIdentifier(it)){propertyRange=range(token);valueRange=findValueRange(it);var end=(it.current()&&it.current().type==';')?range(it.current()):range(valueRange.end,0);this._children.push(new CSSEditElement(this,editTree.createToken(propertyRange.start,propertyRange.substring(source)),editTree.createToken(valueRange.start,valueRange.substring(source)),editTree.createToken(end.start,end.substring(source))))}}this._saveStyle()},_saveStyle:function(){var start=this._positions.contentStart;var source=this.source;var utils=require('utils');_.each(this.list(),function(p){p.styleBefore=source.substring(start,p.namePosition());var lines=utils.splitByLines(p.styleBefore);if(lines.length>1){p.styleBefore='\n'+_.last(lines)}p.styleSeparator=source.substring(p.nameRange().end,p.valuePosition());p.styleBefore=_.last(p.styleBefore.split('*/'));p.styleSeparator=p.styleSeparator.replace(/\/\*.*?\*\//g,'');start=p.range().end})},add:function(name,value,pos){var list=this.list();var start=this._positions.contentStart;var styles=_.pick(this.options,'styleBefore','styleSeparator');var editTree=require('editTree');if(_.isUndefined(pos))pos=list.length;var donor=list[pos];if(donor){start=donor.fullRange().start}else if(donor=list[pos-1]){donor.end(';');start=donor.range().end}if(donor){styles=_.pick(donor,'styleBefore','styleSeparator')}var nameToken=editTree.createToken(start+styles.styleBefore.length,name);var valueToken=editTree.createToken(nameToken.end+styles.styleSeparator.length,value);var property=new CSSEditElement(this,nameToken,valueToken,editTree.createToken(valueToken.end,';'));_.extend(property,styles);this._updateSource(property.styleBefore+property.toString(),start);this._children.splice(pos,0,property);return property}});var CSSEditElement=require('editTree').EditElement.extend({initialize:function(rule,name,value,end){this.styleBefore=rule.options.styleBefore;this.styleSeparator=rule.options.styleSeparator;this._end=end.value;this._positions.end=end.start},valueParts:function(isAbsolute){var parts=findParts(this.value());if(isAbsolute){var offset=this.valuePosition(true);_.each(parts,function(p){p.shift(offset)})}return parts},end:function(val){if(!_.isUndefined(val)&&this._end!==val){this.parent._updateSource(val,this._positions.end,this._positions.end+this._end.length);this._end=val}return this._end},fullRange:function(isAbsolute){var r=this.range(isAbsolute);r.start-=this.styleBefore.length;return r},toString:function(){return this.name()+this.styleSeparator+this.value()+this.end()}});return{parse:function(source,options){return new CSSEditContainer(source,options)},parseFromPosition:function(content,pos,isBackward){var bounds=this.extractRule(content,pos,isBackward);if(!bounds||!bounds.inside(pos))return null;return this.parse(bounds.substring(content),{offset:bounds.start})},extractRule:function(content,pos,isBackward){var result='';var len=content.length;var offset=pos;var stopChars='{}/\\<>\n\r';var bracePos=-1,ch;while(offset>=0){ch=content.charAt(offset);if(ch=='{'){bracePos=offset;break}else if(ch=='}'&&!isBackward){offset++;break}offset--}while(offset<len){ch=content.charAt(offset);if(ch=='{'){bracePos=offset}else if(ch=='}'){if(bracePos!=-1)result=content.substring(bracePos,offset+1);break}offset++}if(result){offset=bracePos-1;var selector='';while(offset>=0){ch=content.charAt(offset);if(stopChars.indexOf(ch)!=-1)break;offset--}selector=content.substring(offset+1,bracePos).replace(/^[\s\n\r]+/m,'');return require('range').create(bracePos-selector.length,result.length+selector.length)}return null},baseName:function(name){return name.replace(/^\s*\-\w+\-/,'')},findParts:findParts}});emmet.define('xmlEditTree',function(require,_){var defaultOptions={styleBefore:' ',styleSeparator:'=',styleQuote:'"',offset:0};var startTag=/^<([\w\:\-]+)((?:\s+[\w\-:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/m;var XMLEditContainer=require('editTree').EditContainer.extend({initialize:function(source,options){_.defaults(this.options,defaultOptions);this._positions.name=1;var attrToken=null;var tokens=require('xmlParser').parse(source);var range=require('range');_.each(tokens,function(token){token.value=range.create(token).substring(source);switch(token.type){case'tag':if(/^<[^\/]+/.test(token.value)){this._name=token.value.substring(1)}break;case'attribute':if(attrToken){this._children.push(new XMLEditElement(this,attrToken))}attrToken=token;break;case'string':this._children.push(new XMLEditElement(this,attrToken,token));attrToken=null;break}},this);if(attrToken){this._children.push(new XMLEditElement(this,attrToken))}this._saveStyle()},_saveStyle:function(){var start=this.nameRange().end;var source=this.source;_.each(this.list(),function(p){p.styleBefore=source.substring(start,p.namePosition());if(p.valuePosition()!==-1){p.styleSeparator=source.substring(p.namePosition()+p.name().length,p.valuePosition()-p.styleQuote.length)}start=p.range().end})},add:function(name,value,pos){var list=this.list();var start=this.nameRange().end;var editTree=require('editTree');var styles=_.pick(this.options,'styleBefore','styleSeparator','styleQuote');if(_.isUndefined(pos))pos=list.length;var donor=list[pos];if(donor){start=donor.fullRange().start}else if(donor=list[pos-1]){start=donor.range().end}if(donor){styles=_.pick(donor,'styleBefore','styleSeparator','styleQuote')}value=styles.styleQuote+value+styles.styleQuote;var attribute=new XMLEditElement(this,editTree.createToken(start+styles.styleBefore.length,name),editTree.createToken(start+styles.styleBefore.length+name.length+styles.styleSeparator.length,value));_.extend(attribute,styles);this._updateSource(attribute.styleBefore+attribute.toString(),start);this._children.splice(pos,0,attribute);return attribute}});var XMLEditElement=require('editTree').EditElement.extend({initialize:function(parent,nameToken,valueToken){this.styleBefore=parent.options.styleBefore;this.styleSeparator=parent.options.styleSeparator;var value='',quote=parent.options.styleQuote;if(valueToken){value=valueToken.value;quote=value.charAt(0);if(quote=='"'||quote=="'"){value=value.substring(1)}else{quote=''}if(quote&&value.charAt(value.length-1)==quote){value=value.substring(0,value.length-1)}}this.styleQuote=quote;this._value=value;this._positions.value=valueToken?valueToken.start+quote.length:-1},fullRange:function(isAbsolute){var r=this.range(isAbsolute);r.start-=this.styleBefore.length;return r},toString:function(){return this.name()+this.styleSeparator+this.styleQuote+this.value()+this.styleQuote}});return{parse:function(source,options){return new XMLEditContainer(source,options)},parseFromPosition:function(content,pos,isBackward){var bounds=this.extractTag(content,pos,isBackward);if(!bounds||!bounds.inside(pos))return null;return this.parse(bounds.substring(content),{offset:bounds.start})},extractTag:function(content,pos,isBackward){var len=content.length,i;var range=require('range');var maxLen=Math.min(2000,len);var r=null;var match=function(pos){var m;if(content.charAt(pos)=='<'&&(m=content.substr(pos,maxLen).match(startTag)))return range.create(pos,m[0])};for(i=pos;i>=0;i--){if(r=match(i))break}if(r&&(r.inside(pos)||isBackward))return r;if(!r&&isBackward)return null;for(i=pos;i<len;i++){if(r=match(i))return r}}}});emmet.define('expandAbbreviation',function(require,_){var handlers=require('handlerList').create();var module=null;var actions=require('actions');actions.add('expand_abbreviation',function(editor,syntax,profile){var args=_.toArray(arguments);var info=require('editorUtils').outputInfo(editor,syntax,profile);args[1]=info.syntax;args[2]=info.profile;return handlers.exec(false,args)});actions.add('expand_abbreviation_with_tab',function(editor,syntax,profile){var sel=editor.getSelection();var indent=require('resources').getVariable('indentation');if(sel){var utils=require('utils');var selRange=require('range').create(editor.getSelectionRange());var content=utils.padString(sel,indent);editor.replaceContent(indent+'${0}',editor.getCaretPos());var replaceRange=require('range').create(editor.getCaretPos(),selRange.length());editor.replaceContent(content,replaceRange.start,replaceRange.end,true);editor.createSelection(replaceRange.start,replaceRange.start+content.length);return true}if(!actions.run('expand_abbreviation',editor,syntax,profile)){editor.replaceContent(indent,editor.getCaretPos())}return true},{hidden:true});handlers.add(function(editor,syntax,profile){var caretPos=editor.getSelectionRange().end;var abbr=module.findAbbreviation(editor);if(abbr){var content=emmet.expandAbbreviation(abbr,syntax,profile,require('actionUtils').captureContext(editor));if(content){editor.replaceContent(content,caretPos-abbr.length,caretPos);return true}}return false},{order:-1});return module={addHandler:function(fn,options){handlers.add(fn,options)},removeHandler:function(fn){handlers.remove(fn,options)},findAbbreviation:function(editor){var range=require('range').create(editor.getSelectionRange());var content=String(editor.getContent());if(range.length()){return range.substring(content)}var curLine=editor.getCurrentLineRange();return require('actionUtils').extractAbbreviation(content.substring(curLine.start,range.start))}}});emmet.define('wrapWithAbbreviation',function(require,_){var module=null;require('actions').add('wrap_with_abbreviation',function(editor,abbr,syntax,profile){var info=require('editorUtils').outputInfo(editor,syntax,profile);var utils=require('utils');var editorUtils=require('editorUtils');abbr=abbr||editor.prompt("Enter abbreviation");if(!abbr)return null;abbr=String(abbr);var range=require('range').create(editor.getSelectionRange());if(!range.length()){var match=require('htmlMatcher').tag(info.content,range.start);if(!match){return false}range=utils.narrowToNonSpace(info.content,match.range)}var newContent=utils.escapeText(range.substring(info.content));var result=module.wrap(abbr,editorUtils.unindent(editor,newContent),info.syntax,info.profile,require('actionUtils').captureContext(editor));if(result){editor.replaceContent(result,range.start,range.end);return true}return false});return module={wrap:function(abbr,text,syntax,profile,contextNode){var filters=require('filters');var utils=require('utils');syntax=syntax||emmet.defaultSyntax();profile=require('profile').get(profile,syntax);require('tabStops').resetTabstopIndex();var data=filters.extractFromAbbreviation(abbr);var parsedTree=require('abbreviationParser').parse(data[0],{syntax:syntax,pastedContent:text,contextNode:contextNode});if(parsedTree){var filtersList=filters.composeList(syntax,profile,data[1]);filters.apply(parsedTree,filtersList,profile);return utils.replaceVariables(parsedTree.toString())}return null}}});emmet.exec(function(require,_){function toggleHTMLComment(editor){var range=require('range').create(editor.getSelectionRange());var info=require('editorUtils').outputInfo(editor);if(!range.length()){var tag=require('htmlMatcher').tag(info.content,editor.getCaretPos());if(tag){range=tag.outerRange}}return genericCommentToggle(editor,'<!--','-->',range)}function toggleCSSComment(editor){var range=require('range').create(editor.getSelectionRange());var info=require('editorUtils').outputInfo(editor);if(!range.length()){var rule=require('cssEditTree').parseFromPosition(info.content,editor.getCaretPos());if(rule){var property=cssItemFromPosition(rule,editor.getCaretPos());range=property?property.range(true):require('range').create(rule.nameRange(true).start,rule.source)}}if(!range.length()){range=require('range').create(editor.getCurrentLineRange());require('utils').narrowToNonSpace(info.content,range)}return genericCommentToggle(editor,'/*','*/',range)}function cssItemFromPosition(rule,absPos){var relPos=absPos-(rule.options.offset||0);var reSafeChar=/^[\s\n\r]/;return _.find(rule.list(),function(item){if(item.range().end===relPos){return reSafeChar.test(rule.source.charAt(relPos))}return item.range().inside(relPos)})}function searchComment(text,from,startToken,endToken){var commentStart=-1;var commentEnd=-1;var hasMatch=function(str,start){return text.substr(start,str.length)==str};while(from--){if(hasMatch(startToken,from)){commentStart=from;break}}if(commentStart!=-1){from=commentStart;var contentLen=text.length;while(contentLen>=from++){if(hasMatch(endToken,from)){commentEnd=from+endToken.length;break}}}return(commentStart!=-1&&commentEnd!=-1)?require('range').create(commentStart,commentEnd-commentStart):null}function genericCommentToggle(editor,commentStart,commentEnd,range){var editorUtils=require('editorUtils');var content=editorUtils.outputInfo(editor).content;var caretPos=editor.getCaretPos();var newContent=null;var utils=require('utils');function removeComment(str){return str.replace(new RegExp('^'+utils.escapeForRegexp(commentStart)+'\\s*'),function(str){caretPos-=str.length;return''}).replace(new RegExp('\\s*'+utils.escapeForRegexp(commentEnd)+'$'),'')}var commentRange=searchComment(content,caretPos,commentStart,commentEnd);if(commentRange&&commentRange.overlap(range)){range=commentRange;newContent=removeComment(range.substring(content))}else{newContent=commentStart+' '+range.substring(content).replace(new RegExp(utils.escapeForRegexp(commentStart)+'\\s*|\\s*'+utils.escapeForRegexp(commentEnd),'g'),'')+' '+commentEnd;caretPos+=commentStart.length+1}if(newContent!==null){newContent=utils.escapeText(newContent);editor.setCaretPos(range.start);editor.replaceContent(editorUtils.unindent(editor,newContent),range.start,range.end);editor.setCaretPos(caretPos);return true}return false}require('actions').add('toggle_comment',function(editor){var info=require('editorUtils').outputInfo(editor);if(info.syntax=='css'){var caretPos=editor.getCaretPos();var tag=require('htmlMatcher').tag(info.content,caretPos);if(tag&&tag.open.range.inside(caretPos)){info.syntax='html'}}if(info.syntax=='css')return toggleCSSComment(editor);return toggleHTMLComment(editor)})});emmet.exec(function(require,_){function findNewEditPoint(editor,inc,offset){inc=inc||1;offset=offset||0;var curPoint=editor.getCaretPos()+offset;var content=String(editor.getContent());var maxLen=content.length;var nextPoint=-1;var reEmptyLine=/^\s+$/;function getLine(ix){var start=ix;while(start>=0){var c=content.charAt(start);if(c=='\n'||c=='\r')break;start--}return content.substring(start,ix)}while(curPoint<=maxLen&&curPoint>=0){curPoint+=inc;var curChar=content.charAt(curPoint);var nextChar=content.charAt(curPoint+1);var prevChar=content.charAt(curPoint-1);switch(curChar){case'"':case'\'':if(nextChar==curChar&&prevChar=='='){nextPoint=curPoint+1}break;case'>':if(nextChar=='<'){nextPoint=curPoint+1}break;case'\n':case'\r':if(reEmptyLine.test(getLine(curPoint-1))){nextPoint=curPoint}break}if(nextPoint!=-1)break}return nextPoint}var actions=require('actions');actions.add('prev_edit_point',function(editor){var curPos=editor.getCaretPos();var newPoint=findNewEditPoint(editor,-1);if(newPoint==curPos)newPoint=findNewEditPoint(editor,-1,-2);if(newPoint!=-1){editor.setCaretPos(newPoint);return true}return false},{label:'Previous Edit Point'});actions.add('next_edit_point',function(editor){var newPoint=findNewEditPoint(editor,1);if(newPoint!=-1){editor.setCaretPos(newPoint);return true}return false})});emmet.exec(function(require,_){var startTag=/^<([\w\:\-]+)((?:\s+[\w\-:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;function findItem(editor,isBackward,extractFn,rangeFn){var range=require('range');var content=require('editorUtils').outputInfo(editor).content;var contentLength=content.length;var itemRange,rng;var prevRange=range.create(-1,0);var sel=range.create(editor.getSelectionRange());var searchPos=sel.start,loop=100000;while(searchPos>=0&&searchPos<contentLength&&--loop>0){if((itemRange=extractFn(content,searchPos,isBackward))){if(prevRange.equal(itemRange)){break}prevRange=itemRange.clone();rng=rangeFn(itemRange.substring(content),itemRange.start,sel.clone());if(rng){editor.createSelection(rng.start,rng.end);return true}else{searchPos=isBackward?itemRange.start:itemRange.end-1}}searchPos+=isBackward?-1:1}return false}function findNextHTMLItem(editor){var isFirst=true;return findItem(editor,false,function(content,searchPos){if(isFirst){isFirst=false;return findOpeningTagFromPosition(content,searchPos)}else{return getOpeningTagFromPosition(content,searchPos)}},function(tag,offset,selRange){return getRangeForHTMLItem(tag,offset,selRange,false)})}function findPrevHTMLItem(editor){return findItem(editor,true,getOpeningTagFromPosition,function(tag,offset,selRange){return getRangeForHTMLItem(tag,offset,selRange,true)})}function makePossibleRangesHTML(source,tokens,offset){offset=offset||0;var range=require('range');var result=[];var attrStart=-1,attrName='',attrValue='',attrValueRange,tagName;_.each(tokens,function(tok){switch(tok.type){case'tag':tagName=source.substring(tok.start,tok.end);if(/^<[\w\:\-]/.test(tagName)){result.push(range.create({start:tok.start+1,end:tok.end}))}break;case'attribute':attrStart=tok.start;attrName=source.substring(tok.start,tok.end);break;case'string':result.push(range.create(attrStart,tok.end-attrStart));attrValueRange=range.create(tok);attrValue=attrValueRange.substring(source);if(isQuote(attrValue.charAt(0)))attrValueRange.start++;if(isQuote(attrValue.charAt(attrValue.length-1)))attrValueRange.end--;result.push(attrValueRange);if(attrName=='class'){result=result.concat(classNameRanges(attrValueRange.substring(source),attrValueRange.start))}break}});_.each(result,function(r){r.shift(offset)});return _.chain(result).filter(function(item){return!!item.length()}).uniq(false,function(item){return item.toString()}).value()}function classNameRanges(className,offset){offset=offset||0;var result=[];var stream=require('stringStream').create(className);var range=require('range');stream.eatSpace();stream.start=stream.pos;var ch;while(ch=stream.next()){if(/[\s\u00a0]/.test(ch)){result.push(range.create(stream.start+offset,stream.pos-stream.start-1));stream.eatSpace();stream.start=stream.pos}}result.push(range.create(stream.start+offset,stream.pos-stream.start));return result}function getRangeForHTMLItem(tag,offset,selRange,isBackward){var ranges=makePossibleRangesHTML(tag,require('xmlParser').parse(tag),offset);if(isBackward)ranges.reverse();var curRange=_.find(ranges,function(r){return r.equal(selRange)});if(curRange){var ix=_.indexOf(ranges,curRange);if(ix<ranges.length-1)return ranges[ix+1];return null}if(isBackward)return _.find(ranges,function(r){return r.start<selRange.start});if(!curRange){var matchedRanges=_.filter(ranges,function(r){return r.inside(selRange.end)});if(matchedRanges.length>1)return matchedRanges[1]}return _.find(ranges,function(r){return r.end>selRange.end})}function findOpeningTagFromPosition(html,pos){var tag;while(pos>=0){if(tag=getOpeningTagFromPosition(html,pos))return tag;pos--}return null}function getOpeningTagFromPosition(html,pos){var m;if(html.charAt(pos)=='<'&&(m=html.substring(pos,html.length).match(startTag))){return require('range').create(pos,m[0])}}function isQuote(ch){return ch=='"'||ch=="'"}function makePossibleRangesCSS(property){var valueRange=property.valueRange(true);var result=[property.range(true),valueRange];var stringStream=require('stringStream');var cssEditTree=require('cssEditTree');var range=require('range');var value=property.value();_.each(property.valueParts(),function(r){var clone=r.clone();result.push(clone.shift(valueRange.start));var stream=stringStream.create(r.substring(value));if(stream.match(/^[\w\-]+\(/,true)){stream.start=stream.pos;stream.skipToPair('(',')');var fnBody=stream.current();result.push(range.create(clone.start+stream.start,fnBody));_.each(cssEditTree.findParts(fnBody),function(part){result.push(range.create(clone.start+stream.start+part.start,part.substring(fnBody)))})}});return _.chain(result).filter(function(item){return!!item.length()}).uniq(false,function(item){return item.toString()}).value()}function matchedRangeForCSSProperty(rule,selRange,isBackward){var property=null;var possibleRanges,curRange=null,ix;var list=rule.list();var searchFn,nearestItemFn;if(isBackward){list.reverse();searchFn=function(p){return p.range(true).start<=selRange.start};nearestItemFn=function(r){return r.start<selRange.start}}else{searchFn=function(p){return p.range(true).end>=selRange.end};nearestItemFn=function(r){return r.end>selRange.start}}while(property=_.find(list,searchFn)){possibleRanges=makePossibleRangesCSS(property);if(isBackward)possibleRanges.reverse();curRange=_.find(possibleRanges,function(r){return r.equal(selRange)});if(!curRange){var matchedRanges=_.filter(possibleRanges,function(r){return r.inside(selRange.end)});if(matchedRanges.length>1){curRange=matchedRanges[1];break}if(curRange=_.find(possibleRanges,nearestItemFn))break}else{ix=_.indexOf(possibleRanges,curRange);if(ix!=possibleRanges.length-1){curRange=possibleRanges[ix+1];break}}curRange=null;selRange.start=selRange.end=isBackward?property.range(true).start-1:property.range(true).end+1}return curRange}function findNextCSSItem(editor){return findItem(editor,false,require('cssEditTree').extractRule,getRangeForNextItemInCSS)}function findPrevCSSItem(editor){return findItem(editor,true,require('cssEditTree').extractRule,getRangeForPrevItemInCSS)}function getRangeForNextItemInCSS(rule,offset,selRange){var tree=require('cssEditTree').parse(rule,{offset:offset});var range=tree.nameRange(true);if(selRange.end<range.end){return range}return matchedRangeForCSSProperty(tree,selRange,false)}function getRangeForPrevItemInCSS(rule,offset,selRange){var tree=require('cssEditTree').parse(rule,{offset:offset});var curRange=matchedRangeForCSSProperty(tree,selRange,true);if(!curRange){var range=tree.nameRange(true);if(selRange.start>range.start){return range}}return curRange}var actions=require('actions');actions.add('select_next_item',function(editor){if(editor.getSyntax()=='css')return findNextCSSItem(editor);else return findNextHTMLItem(editor)});actions.add('select_previous_item',function(editor){if(editor.getSyntax()=='css')return findPrevCSSItem(editor);else return findPrevHTMLItem(editor)})});emmet.exec(function(require,_){var actions=require('actions');var matcher=require('htmlMatcher');var lastMatch=null;function matchPair(editor,direction){direction=String((direction||'out').toLowerCase());var info=require('editorUtils').outputInfo(editor);var range=require('range');var sel=range.create(editor.getSelectionRange());var content=info.content;if(lastMatch&&!lastMatch.range.equal(sel)){lastMatch=null}if(lastMatch&&sel.length()){if(direction=='in'){if(lastMatch.type=='tag'&&!lastMatch.close){return false}else{if(lastMatch.range.equal(lastMatch.outerRange)){lastMatch.range=lastMatch.innerRange}else{var narrowed=require('utils').narrowToNonSpace(content,lastMatch.innerRange);lastMatch=matcher.find(content,narrowed.start+1);if(lastMatch&&lastMatch.range.equal(sel)&&lastMatch.outerRange.equal(sel)){lastMatch.range=lastMatch.innerRange}}}}else{if(!lastMatch.innerRange.equal(lastMatch.outerRange)&&lastMatch.range.equal(lastMatch.innerRange)&&sel.equal(lastMatch.range)){lastMatch.range=lastMatch.outerRange}else{lastMatch=matcher.find(content,sel.start);if(lastMatch&&lastMatch.range.equal(sel)&&lastMatch.innerRange.equal(sel)){lastMatch.range=lastMatch.outerRange}}}}else{lastMatch=matcher.find(content,sel.start)}if(lastMatch&&!lastMatch.range.equal(sel)){editor.createSelection(lastMatch.range.start,lastMatch.range.end);return true}lastMatch=null;return false}actions.add('match_pair',matchPair,{hidden:true});actions.add('match_pair_inward',function(editor){return matchPair(editor,'in')},{label:'HTML/Match Pair Tag (inward)'});actions.add('match_pair_outward',function(editor){return matchPair(editor,'out')},{label:'HTML/Match Pair Tag (outward)'});actions.add('matching_pair',function(editor){var content=String(editor.getContent());var caretPos=editor.getCaretPos();if(content.charAt(caretPos)=='<')caretPos++;var tag=matcher.tag(content,caretPos);if(tag&&tag.close){if(tag.open.range.inside(caretPos)){editor.setCaretPos(tag.close.range.start)}else{editor.setCaretPos(tag.open.range.start)}return true}return false},{label:'HTML/Go To Matching Tag Pair'})});emmet.exec(function(require,_){require('actions').add('remove_tag',function(editor){var utils=require('utils');var info=require('editorUtils').outputInfo(editor);var tag=require('htmlMatcher').tag(info.content,editor.getCaretPos());if(tag){if(!tag.close){editor.replaceContent(utils.getCaretPlaceholder(),tag.range.start,tag.range.end)}else{var tagContentRange=utils.narrowToNonSpace(info.content,tag.innerRange);var startLineBounds=utils.findNewlineBounds(info.content,tagContentRange.start);var startLinePad=utils.getLinePadding(startLineBounds.substring(info.content));var tagContent=tagContentRange.substring(info.content);tagContent=utils.unindentString(tagContent,startLinePad);editor.replaceContent(utils.getCaretPlaceholder()+utils.escapeText(tagContent),tag.outerRange.start,tag.outerRange.end)}return true}return false},{label:'HTML/Remove Tag'})});emmet.exec(function(require,_){function joinTag(editor,profile,tag){var utils=require('utils');var slash=profile.selfClosing()||' /';var content=tag.open.range.substring(tag.source).replace(/\s*>$/,slash+'>');var caretPos=editor.getCaretPos();if(content.length+tag.outerRange.start<caretPos){caretPos=content.length+tag.outerRange.start}content=utils.escapeText(content);editor.replaceContent(content,tag.outerRange.start,tag.outerRange.end);editor.setCaretPos(caretPos);return true}function splitTag(editor,profile,tag){var utils=require('utils');var nl=utils.getNewline();var pad=require('resources').getVariable('indentation');var caretPos=editor.getCaretPos();var tagContent=(profile.tag_nl===true)?nl+pad+nl:'';var content=tag.outerContent().replace(/\s*\/>$/,'>');caretPos=tag.outerRange.start+content.length;content+=tagContent+'</'+tag.open.name+'>';content=utils.escapeText(content);editor.replaceContent(content,tag.outerRange.start,tag.outerRange.end);editor.setCaretPos(caretPos);return true}require('actions').add('split_join_tag',function(editor,profileName){var matcher=require('htmlMatcher');var info=require('editorUtils').outputInfo(editor,null,profileName);var profile=require('profile').get(info.profile);var tag=matcher.tag(info.content,editor.getCaretPos());if(tag){return tag.close?joinTag(editor,profile,tag):splitTag(editor,profile,tag)}return false},{label:'HTML/Split\\Join Tag Declaration'})});emmet.define('reflectCSSValue',function(require,_){var handlers=require('handlerList').create();require('actions').add('reflect_css_value',function(editor){if(editor.getSyntax()!='css')return false;return require('actionUtils').compoundUpdate(editor,doCSSReflection(editor))},{label:'CSS/Reflect Value'});function doCSSReflection(editor){var cssEditTree=require('cssEditTree');var outputInfo=require('editorUtils').outputInfo(editor);var caretPos=editor.getCaretPos();var cssRule=cssEditTree.parseFromPosition(outputInfo.content,caretPos);if(!cssRule)return;var property=cssRule.itemFromPosition(caretPos,true);if(!property)return;var oldRule=cssRule.source;var offset=cssRule.options.offset;var caretDelta=caretPos-offset-property.range().start;handlers.exec(false,[property]);if(oldRule!==cssRule.source){return{data:cssRule.source,start:offset,end:offset+oldRule.length,caret:offset+property.range().start+caretDelta}}}function getReflectedCSSName(name){name=require('cssEditTree').baseName(name);var vendorPrefix='^(?:\\-\\w+\\-)?',m;if(name=='opacity'||name=='filter'){return new RegExp(vendorPrefix+'(?:opacity|filter)$')}else if(m=name.match(/^border-radius-(top|bottom)(left|right)/)){return new RegExp(vendorPrefix+'(?:'+name+'|border-'+m[1]+'-'+m[2]+'-radius)$')}else if(m=name.match(/^border-(top|bottom)-(left|right)-radius/)){return new RegExp(vendorPrefix+'(?:'+name+'|border-radius-'+m[1]+m[2]+')$')}return new RegExp(vendorPrefix+name+'$')}function reflectValue(donor,receiver){var value=getReflectedValue(donor.name(),donor.value(),receiver.name(),receiver.value());receiver.value(value)}function getReflectedValue(curName,curValue,refName,refValue){var cssEditTree=require('cssEditTree');var utils=require('utils');curName=cssEditTree.baseName(curName);refName=cssEditTree.baseName(refName);if(curName=='opacity'&&refName=='filter'){return refValue.replace(/opacity=[^)]*/i,'opacity='+Math.floor(parseFloat(curValue)*100))}else if(curName=='filter'&&refName=='opacity'){var m=curValue.match(/opacity=([^)]*)/i);return m?utils.prettifyNumber(parseInt(m[1])/100):refValue}return curValue}handlers.add(function(property){var reName=getReflectedCSSName(property.name());_.each(property.parent.list(),function(p){if(reName.test(p.name())){reflectValue(property,p)}})},{order:-1});return{addHandler:function(fn,options){handlers.add(fn,options)},removeHandler:function(fn){handlers.remove(fn,options)}}});emmet.exec(function(require,_){require('actions').add('evaluate_math_expression',function(editor){var actionUtils=require('actionUtils');var utils=require('utils');var content=String(editor.getContent());var chars='.+-*/\\';var sel=require('range').create(editor.getSelectionRange());if(!sel.length()){sel=actionUtils.findExpressionBounds(editor,function(ch){return utils.isNumeric(ch)||chars.indexOf(ch)!=-1})}if(sel&&sel.length()){var expr=sel.substring(content);expr=expr.replace(/([\d\.\-]+)\\([\d\.\-]+)/g,'Math.round($1/$2)');try{var result=utils.prettifyNumber(new Function('return '+expr)());editor.replaceContent(result,sel.start,sel.end);editor.setCaretPos(sel.start+result.length);return true}catch(e){}}return false},{label:'Numbers/Evaluate Math Expression'})});emmet.exec(function(require,_){function incrementNumber(editor,step){var utils=require('utils');var actionUtils=require('actionUtils');var hasSign=false;var hasDecimal=false;var r=actionUtils.findExpressionBounds(editor,function(ch,pos,content){if(utils.isNumeric(ch))return true;if(ch=='.'){if(!utils.isNumeric(content.charAt(pos+1)))return false;return hasDecimal?false:hasDecimal=true}if(ch=='-')return hasSign?false:hasSign=true;return false});if(r&&r.length()){var strNum=r.substring(String(editor.getContent()));var num=parseFloat(strNum);if(!_.isNaN(num)){num=utils.prettifyNumber(num+step);if(/^(\-?)0+[1-9]/.test(strNum)){var minus='';if(RegExp.$1){minus='-';num=num.substring(1)}var parts=num.split('.');parts[0]=utils.zeroPadString(parts[0],intLength(strNum));num=minus+parts.join('.')}editor.replaceContent(num,r.start,r.end);editor.createSelection(r.start,r.start+num.length);return true}}return false}function intLength(num){num=num.replace(/^\-/,'');if(~num.indexOf('.')){return num.split('.')[0].length}return num.length}var actions=require('actions');_.each([1,-1,10,-10,0.1,-0.1],function(num){var prefix=num>0?'increment':'decrement';actions.add(prefix+'_number_by_'+String(Math.abs(num)).replace('.','').substring(0,2),function(editor){return incrementNumber(editor,num)},{label:'Numbers/'+prefix.charAt(0).toUpperCase()+prefix.substring(1)+' number by '+Math.abs(num)})})});emmet.exec(function(require,_){var actions=require('actions');var prefs=require('preferences');prefs.define('css.closeBraceIndentation','\n','Indentation before closing brace of CSS rule. Some users prefere '+'indented closing brace of CSS rule for better readability. '+'This preference’s value will be automatically inserted before '+'closing brace when user adds newline in newly created CSS rule '+'(e.g. when “Insert formatted linebreak” action will be performed '+'in CSS file). If you’re such user, you may want to write put a value '+'like <code>\\n\\t</code> in this preference.');actions.add('insert_formatted_line_break_only',function(editor){var utils=require('utils');var res=require('resources');var info=require('editorUtils').outputInfo(editor);var caretPos=editor.getCaretPos();var nl=utils.getNewline();if(_.include(['html','xml','xsl'],info.syntax)){var pad=res.getVariable('indentation');var tag=require('htmlMatcher').tag(info.content,caretPos);if(tag&&!tag.innerRange.length()){editor.replaceContent(nl+pad+utils.getCaretPlaceholder()+nl,caretPos);return true}}else if(info.syntax=='css'){var content=info.content;if(caretPos&&content.charAt(caretPos-1)=='{'){var append=prefs.get('css.closeBraceIndentation');var pad=res.getVariable('indentation');var hasCloseBrace=content.charAt(caretPos)=='}';if(!hasCloseBrace){for(var i=caretPos,il=content.length,ch;i<il;i++){ch=content.charAt(i);if(ch=='{'){break}if(ch=='}'){append='';hasCloseBrace=true;break}}}if(!hasCloseBrace){append+='}'}var insValue=nl+pad+utils.getCaretPlaceholder()+append;editor.replaceContent(insValue,caretPos);return true}}return false},{hidden:true});actions.add('insert_formatted_line_break',function(editor){if(!actions.run('insert_formatted_line_break_only',editor)){var utils=require('utils');var curPadding=require('editorUtils').getCurrentLinePadding(editor);var content=String(editor.getContent());var caretPos=editor.getCaretPos();var len=content.length;var nl=utils.getNewline();var lineRange=editor.getCurrentLineRange();var nextPadding='';for(var i=lineRange.end+1,ch;i<len;i++){ch=content.charAt(i);if(ch==' '||ch=='\t')nextPadding+=ch;else break}if(nextPadding.length>curPadding.length)editor.replaceContent(nl+nextPadding,caretPos,caretPos,true);else editor.replaceContent(nl,caretPos)}return true},{hidden:true})});emmet.exec(function(require,_){require('actions').add('merge_lines',function(editor){var matcher=require('htmlMatcher');var utils=require('utils');var editorUtils=require('editorUtils');var info=editorUtils.outputInfo(editor);var selection=require('range').create(editor.getSelectionRange());if(!selection.length()){var pair=matcher.find(info.content,editor.getCaretPos());if(pair){selection=pair.outerRange}}if(selection.length()){var text=selection.substring(info.content);var lines=utils.splitByLines(text);for(var i=1;i<lines.length;i++){lines[i]=lines[i].replace(/^\s+/,'')}text=lines.join('').replace(/\s{2,}/,' ');var textLen=text.length;text=utils.escapeText(text);editor.replaceContent(text,selection.start,selection.end);editor.createSelection(selection.start,selection.start+textLen);return true}return false})});emmet.exec(function(require,_){require('actions').add('encode_decode_data_url',function(editor){var data=String(editor.getSelection());var caretPos=editor.getCaretPos();if(!data){var text=String(editor.getContent()),m;while(caretPos-->=0){if(startsWith('src=',text,caretPos)){if(m=text.substr(caretPos).match(/^(src=(["'])?)([^'"<>\s]+)\1?/)){data=m[3];caretPos+=m[1].length}break}else if(startsWith('url(',text,caretPos)){if(m=text.substr(caretPos).match(/^(url\((['"])?)([^'"\)\s]+)\1?/)){data=m[3];caretPos+=m[1].length}break}}}if(data){if(startsWith('data:',data))return decodeFromBase64(editor,data,caretPos);else return encodeToBase64(editor,data,caretPos)}return false},{label:'Encode\\Decode data:URL image'});function startsWith(token,text,pos){pos=pos||0;return text.charAt(pos)==token.charAt(0)&&text.substr(pos,token.length)==token}function encodeToBase64(editor,imgPath,pos){var file=require('file');var actionUtils=require('actionUtils');var editorFile=editor.getFilePath();var defaultMimeType='application/octet-stream';if(editorFile===null){throw"You should save your file before using this action"}var realImgPath=file.locateFile(editorFile,imgPath);if(realImgPath===null){throw"Can't find "+imgPath+' file'}file.read(realImgPath,function(err,content){if(err){throw'Unable to read '+realImgPath+': '+err}var b64=require('base64').encode(String(content));if(!b64){throw"Can't encode file content to base64"}b64='data:'+(actionUtils.mimeTypes[String(file.getExt(realImgPath))]||defaultMimeType)+';base64,'+b64;editor.replaceContent('$0'+b64,pos,pos+imgPath.length)});return true}function decodeFromBase64(editor,data,pos){var filePath=String(editor.prompt('Enter path to file (absolute or relative)'));if(!filePath)return false;var file=require('file');var absPath=file.createPath(editor.getFilePath(),filePath);if(!absPath){throw"Can't save file"}file.save(absPath,require('base64').decode(data.replace(/^data\:.+?;.+?,/,'')));editor.replaceContent('$0'+filePath,pos,pos+data.length);return true}});emmet.exec(function(require,_){function updateImageSizeHTML(editor){var offset=editor.getCaretPos();var info=require('editorUtils').outputInfo(editor);var xmlElem=require('xmlEditTree').parseFromPosition(info.content,offset,true);if(xmlElem&&(xmlElem.name()||'').toLowerCase()=='img'){getImageSizeForSource(editor,xmlElem.value('src'),function(size){if(size){var compoundData=xmlElem.range(true);xmlElem.value('width',size.width);xmlElem.value('height',size.height,xmlElem.indexOf('width')+1);require('actionUtils').compoundUpdate(editor,_.extend(compoundData,{data:xmlElem.toString(),caret:offset}))}})}}function updateImageSizeCSS(editor){var offset=editor.getCaretPos();var info=require('editorUtils').outputInfo(editor);var cssRule=require('cssEditTree').parseFromPosition(info.content,offset,true);if(cssRule){var prop=cssRule.itemFromPosition(offset,true),m;if(prop&&(m=/url\((["']?)(.+?)\1\)/i.exec(prop.value()||''))){getImageSizeForSource(editor,m[2],function(size){if(size){var compoundData=cssRule.range(true);cssRule.value('width',size.width+'px');cssRule.value('height',size.height+'px',cssRule.indexOf('width')+1);require('actionUtils').compoundUpdate(editor,_.extend(compoundData,{data:cssRule.toString(),caret:offset}))}})}}}function getImageSizeForSource(editor,src,callback){var fileContent;var au=require('actionUtils');if(src){if(/^data:/.test(src)){fileContent=require('base64').decode(src.replace(/^data\:.+?;.+?,/,''));return callback(au.getImageSize(fileContent))}var file=require('file');var absPath=file.locateFile(editor.getFilePath(),src);if(absPath===null){throw"Can't find "+src+' file'}file.read(absPath,function(err,content){if(err){throw'Unable to read '+absPath+': '+err}content=String(content);callback(au.getImageSize(content))})}}require('actions').add('update_image_size',function(editor){if(_.include(['css','less','scss'],String(editor.getSyntax()))){updateImageSizeCSS(editor)}else{updateImageSizeHTML(editor)}return true})});emmet.define('cssResolver',function(require,_){var module=null;var prefixObj={prefix:'emmet',obsolete:false,transformName:function(name){return'-'+this.prefix+'-'+name},properties:function(){return getProperties('css.'+this.prefix+'Properties')||[]},supports:function(name){return _.include(this.properties(),name)}};var vendorPrefixes={};var defaultValue='${1};';var prefs=require('preferences');prefs.define('css.valueSeparator',': ','Defines a symbol that should be placed between CSS property and '+'value when expanding CSS abbreviations.');prefs.define('css.propertyEnd',';','Defines a symbol that should be placed at the end of CSS property  '+'when expanding CSS abbreviations.');prefs.define('stylus.valueSeparator',' ','Defines a symbol that should be placed between CSS property and '+'value when expanding CSS abbreviations in Stylus dialect.');prefs.define('stylus.propertyEnd','','Defines a symbol that should be placed at the end of CSS property  '+'when expanding CSS abbreviations in Stylus dialect.');prefs.define('sass.propertyEnd','','Defines a symbol that should be placed at the end of CSS property  '+'when expanding CSS abbreviations in SASS dialect.');prefs.define('css.autoInsertVendorPrefixes',true,'Automatically generate vendor-prefixed copies of expanded CSS '+'property. By default, Emmet will generate vendor-prefixed '+'properties only when you put dash before abbreviation '+'(e.g. <code>-bxsh</code>). With this option enabled, you don’t '+'need dashes before abbreviations: Emmet will produce '+'vendor-prefixed properties for you.');var descTemplate=_.template('A comma-separated list of CSS properties that may have '+'<code><%= vendor %></code> vendor prefix. This list is used to generate '+'a list of prefixed properties when expanding <code>-property</code> '+'abbreviations. Empty list means that all possible CSS values may '+'have <code><%= vendor %></code> prefix.');var descAddonTemplate=_.template('A comma-separated list of <em>additional</em> CSS properties '+'for <code>css.<%= vendor %>Preperties</code> preference. '+'You should use this list if you want to add or remove a few CSS '+'properties to original set. To add a new property, simply write its name, '+'to remove it, precede property with hyphen.<br>'+'For example, to add <em>foo</em> property and remove <em>border-radius</em> one, '+'the preference value will look like this: <code>foo, -border-radius</code>.');var props={'webkit':'animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, appearance, backface-visibility, background-clip, background-composite, background-origin, background-size, border-fit, border-horizontal-spacing, border-image, border-vertical-spacing, box-align, box-direction, box-flex, box-flex-group, box-lines, box-ordinal-group, box-orient, box-pack, box-reflect, box-shadow, color-correction, column-break-after, column-break-before, column-break-inside, column-count, column-gap, column-rule-color, column-rule-style, column-rule-width, column-span, column-width, dashboard-region, font-smoothing, highlight, hyphenate-character, hyphenate-limit-after, hyphenate-limit-before, hyphens, line-box-contain, line-break, line-clamp, locale, margin-before-collapse, margin-after-collapse, marquee-direction, marquee-increment, marquee-repetition, marquee-style, mask-attachment, mask-box-image, mask-box-image-outset, mask-box-image-repeat, mask-box-image-slice, mask-box-image-source, mask-box-image-width, mask-clip, mask-composite, mask-image, mask-origin, mask-position, mask-repeat, mask-size, nbsp-mode, perspective, perspective-origin, rtl-ordering, text-combine, text-decorations-in-effect, text-emphasis-color, text-emphasis-position, text-emphasis-style, text-fill-color, text-orientation, text-security, text-stroke-color, text-stroke-width, transform, transition, transform-origin, transform-style, transition-delay, transition-duration, transition-property, transition-timing-function, user-drag, user-modify, user-select, writing-mode, svg-shadow, box-sizing, border-radius','moz':'animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, appearance, backface-visibility, background-inline-policy, binding, border-bottom-colors, border-image, border-left-colors, border-right-colors, border-top-colors, box-align, box-direction, box-flex, box-ordinal-group, box-orient, box-pack, box-shadow, box-sizing, column-count, column-gap, column-rule-color, column-rule-style, column-rule-width, column-width, float-edge, font-feature-settings, font-language-override, force-broken-image-icon, hyphens, image-region, orient, outline-radius-bottomleft, outline-radius-bottomright, outline-radius-topleft, outline-radius-topright, perspective, perspective-origin, stack-sizing, tab-size, text-blink, text-decoration-color, text-decoration-line, text-decoration-style, text-size-adjust, transform, transform-origin, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, user-focus, user-input, user-modify, user-select, window-shadow, background-clip, border-radius','ms':'accelerator, backface-visibility, background-position-x, background-position-y, behavior, block-progression, box-align, box-direction, box-flex, box-line-progression, box-lines, box-ordinal-group, box-orient, box-pack, content-zoom-boundary, content-zoom-boundary-max, content-zoom-boundary-min, content-zoom-chaining, content-zoom-snap, content-zoom-snap-points, content-zoom-snap-type, content-zooming, filter, flow-from, flow-into, font-feature-settings, grid-column, grid-column-align, grid-column-span, grid-columns, grid-layer, grid-row, grid-row-align, grid-row-span, grid-rows, high-contrast-adjust, hyphenate-limit-chars, hyphenate-limit-lines, hyphenate-limit-zone, hyphens, ime-mode, interpolation-mode, layout-flow, layout-grid, layout-grid-char, layout-grid-line, layout-grid-mode, layout-grid-type, line-break, overflow-style, perspective, perspective-origin, perspective-origin-x, perspective-origin-y, scroll-boundary, scroll-boundary-bottom, scroll-boundary-left, scroll-boundary-right, scroll-boundary-top, scroll-chaining, scroll-rails, scroll-snap-points-x, scroll-snap-points-y, scroll-snap-type, scroll-snap-x, scroll-snap-y, scrollbar-arrow-color, scrollbar-base-color, scrollbar-darkshadow-color, scrollbar-face-color, scrollbar-highlight-color, scrollbar-shadow-color, scrollbar-track-color, text-align-last, text-autospace, text-justify, text-kashida-space, text-overflow, text-size-adjust, text-underline-position, touch-action, transform, transform-origin, transform-origin-x, transform-origin-y, transform-origin-z, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, user-select, word-break, word-wrap, wrap-flow, wrap-margin, wrap-through, writing-mode','o':'dashboard-region, animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, border-image, link, link-source, object-fit, object-position, tab-size, table-baseline, transform, transform-origin, transition, transition-delay, transition-duration, transition-property, transition-timing-function, accesskey, input-format, input-required, marquee-dir, marquee-loop, marquee-speed, marquee-style'};_.each(props,function(v,k){prefs.define('css.'+k+'Properties',v,descTemplate({vendor:k}));prefs.define('css.'+k+'PropertiesAddon','',descAddonTemplate({vendor:k}))});prefs.define('css.unitlessProperties','z-index, line-height, opacity, font-weight, zoom','The list of properties whose values ​​must not contain units.');prefs.define('css.intUnit','px','Default unit for integer values');prefs.define('css.floatUnit','em','Default unit for float values');prefs.define('css.keywords','auto, inherit','A comma-separated list of valid keywords that can be used in CSS abbreviations.');prefs.define('css.keywordAliases','a:auto, i:inherit, s:solid, da:dashed, do:dotted, t:transparent','A comma-separated list of keyword aliases, used in CSS abbreviation. '+'Each alias should be defined as <code>alias:keyword_name</code>.');prefs.define('css.unitAliases','e:em, p:%, x:ex, r:rem','A comma-separated list of unit aliases, used in CSS abbreviation. '+'Each alias should be defined as <code>alias:unit_value</code>.');prefs.define('css.color.short',true,'Should color values like <code>#ffffff</code> be shortened to '+'<code>#fff</code> after abbreviation with color was expanded.');prefs.define('css.color.case','keep','Letter case of color values generated by abbreviations with color '+'(like <code>c#0</code>). Possible values are <code>upper</code>, '+'<code>lower</code> and <code>keep</code>.');prefs.define('css.fuzzySearch',true,'Enable fuzzy search among CSS snippet names. When enabled, every '+'<em>unknown</em> snippet will be scored against available snippet '+'names (not values or CSS properties!). The match with best score '+'will be used to resolve snippet value. For example, with this '+'preference enabled, the following abbreviations are equal: '+'<code>ov:h</code> == <code>ov-h</code> == <code>o-h</code> == '+'<code>oh</code>');prefs.define('css.fuzzySearchMinScore',0.3,'The minium score (from 0 to 1) that fuzzy-matched abbreviation should '+'achive. Lower values may produce many false-positive matches, '+'higher values may reduce possible matches.');prefs.define('css.alignVendor',false,'If set to <code>true</code>, all generated vendor-prefixed properties '+'will be aligned by real property name.');function isNumeric(ch){var code=ch&&ch.charCodeAt(0);return(ch&&ch=='.'||(code>47&&code<58))}function isSingleProperty(snippet){var utils=require('utils');snippet=utils.trim(snippet);if(~snippet.indexOf('/*')||/[\n\r]/.test(snippet)){return false}if(!/^[a-z0-9\-]+\s*\:/i.test(snippet)){return false}snippet=require('tabStops').processText(snippet,{replaceCarets:true,tabstop:function(){return'value'}});return snippet.split(':').length==2}function normalizeValue(value){if(value.charAt(0)=='-'&&!/^\-[\.\d]/.test(value)){value=value.replace(/^\-+/,'')}if(value.charAt(0)=='#'){return normalizeHexColor(value)}return getKeyword(value)}function normalizeHexColor(value){var hex=value.replace(/^#+/,'')||'0';if(hex.toLowerCase()=='t'){return'transparent'}var repeat=require('utils').repeatString;var color=null;switch(hex.length){case 1:color=repeat(hex,6);break;case 2:color=repeat(hex,3);break;case 3:color=hex.charAt(0)+hex.charAt(0)+hex.charAt(1)+hex.charAt(1)+hex.charAt(2)+hex.charAt(2);break;case 4:color=hex+hex.substr(0,2);break;case 5:color=hex+hex.charAt(0);break;default:color=hex.substr(0,6)}if(prefs.get('css.color.short')){var p=color.split('');if(p[0]==p[1]&&p[2]==p[3]&&p[4]==p[5]){color=p[0]+p[2]+p[4]}}switch(prefs.get('css.color.case')){case'upper':color=color.toUpperCase();break;case'lower':color=color.toLowerCase();break}return'#'+color}function getKeyword(name){var aliases=prefs.getDict('css.keywordAliases');return name in aliases?aliases[name]:name}function getUnit(name){var aliases=prefs.getDict('css.unitAliases');return name in aliases?aliases[name]:name}function isValidKeyword(keyword){return _.include(prefs.getArray('css.keywords'),getKeyword(keyword))}function hasPrefix(property,prefix){var info=vendorPrefixes[prefix];if(!info)info=_.find(vendorPrefixes,function(data){return data.prefix==prefix});return info&&info.supports(property)}function findPrefixes(property,noAutofill){var result=[];_.each(vendorPrefixes,function(obj,prefix){if(hasPrefix(property,prefix)){result.push(prefix)}});if(!result.length&&!noAutofill){_.each(vendorPrefixes,function(obj,prefix){if(!obj.obsolete)result.push(prefix)})}return result}function addPrefix(name,obj){if(_.isString(obj))obj={prefix:obj};vendorPrefixes[name]=_.extend({},prefixObj,obj)}function getSyntaxPreference(name,syntax){if(syntax){var val=prefs.get(syntax+'.'+name);if(!_.isUndefined(val))return val}return prefs.get('css.'+name)}function formatProperty(property,syntax){var ix=property.indexOf(':');property=property.substring(0,ix).replace(/\s+$/,'')+getSyntaxPreference('valueSeparator',syntax)+require('utils').trim(property.substring(ix+1));return property.replace(/\s*;\s*$/,getSyntaxPreference('propertyEnd',syntax))}function transformSnippet(snippet,isImportant,syntax){if(!_.isString(snippet))snippet=snippet.data;if(!isSingleProperty(snippet))return snippet;if(isImportant){if(~snippet.indexOf(';')){snippet=snippet.split(';').join(' !important;')}else{snippet+=' !important'}}return formatProperty(snippet,syntax)}function parseList(list){var result=_.map((list||'').split(','),require('utils').trim);return result.length?result:null}function getProperties(key){var list=prefs.getArray(key);_.each(prefs.getArray(key+'Addon'),function(prop){if(prop.charAt(0)=='-'){list=_.without(list,prop.substr(1))}else{if(prop.charAt(0)=='+')prop=prop.substr(1);list.push(prop)}});return list}addPrefix('w',{prefix:'webkit'});addPrefix('m',{prefix:'moz'});addPrefix('s',{prefix:'ms'});addPrefix('o',{prefix:'o'});var cssSyntaxes=['css','less','sass','scss','stylus'];require('resources').addResolver(function(node,syntax){if(_.include(cssSyntaxes,syntax)&&node.isElement()){return module.expandToSnippet(node.abbreviation,syntax)}return null});var ea=require('expandAbbreviation');ea.addHandler(function(editor,syntax,profile){if(!_.include(cssSyntaxes,syntax)){return false}var caretPos=editor.getSelectionRange().end;var abbr=ea.findAbbreviation(editor);if(abbr){var content=emmet.expandAbbreviation(abbr,syntax,profile);if(content){var replaceFrom=caretPos-abbr.length;var replaceTo=caretPos;if(editor.getContent().charAt(caretPos)==';'&&content.charAt(content.length-1)==';'){replaceTo++}editor.replaceContent(content,replaceFrom,replaceTo);return true}}return false});return module={addPrefix:addPrefix,supportsPrefix:hasPrefix,prefixed:function(property,prefix){return hasPrefix(property,prefix)?'-'+prefix+'-'+property:property},listPrefixes:function(){return _.map(vendorPrefixes,function(obj){return obj.prefix})},getPrefix:function(name){return vendorPrefixes[name]},removePrefix:function(name){if(name in vendorPrefixes)delete vendorPrefixes[name]},extractPrefixes:function(abbr){if(abbr.charAt(0)!='-'){return{property:abbr,prefixes:null}}var i=1,il=abbr.length,ch;var prefixes=[];while(i<il){ch=abbr.charAt(i);if(ch=='-'){i++;break}if(ch in vendorPrefixes){prefixes.push(ch)}else{prefixes.length=0;i=1;break}i++}if(i==il-1){i=1;prefixes.length=1}return{property:abbr.substring(i),prefixes:prefixes.length?prefixes:'all'}},findValuesInAbbreviation:function(abbr,syntax){syntax=syntax||'css';var i=0,il=abbr.length,value='',ch;while(i<il){ch=abbr.charAt(i);if(isNumeric(ch)||ch=='#'||(ch=='-'&&isNumeric(abbr.charAt(i+1)))){value=abbr.substring(i);break}i++}var property=abbr.substring(0,abbr.length-value.length);var res=require('resources');var keywords=[];while(~property.indexOf('-')&&!res.findSnippet(syntax,property)){var parts=property.split('-');var lastPart=parts.pop();if(!isValidKeyword(lastPart)){break}keywords.unshift(lastPart);property=parts.join('-')}return keywords.join('-')+value},parseValues:function(str){var stream=require('stringStream').create(str);var values=[];var ch=null;while(ch=stream.next()){if(ch=='#'){stream.match(/^t|[0-9a-f]+/i,true);values.push(stream.current())}else if(ch=='-'){if(isValidKeyword(_.last(values))||(stream.start&&isNumeric(str.charAt(stream.start-1)))){stream.start=stream.pos}stream.match(/^\-?[0-9]*(\.[0-9]+)?[a-z%\.]*/,true);values.push(stream.current())}else{stream.match(/^[0-9]*(\.[0-9]*)?[a-z%]*/,true);values.push(stream.current())}stream.start=stream.pos}return _.map(_.compact(values),normalizeValue)},extractValues:function(abbr){var abbrValues=this.findValuesInAbbreviation(abbr);if(!abbrValues){return{property:abbr,values:null}}return{property:abbr.substring(0,abbr.length-abbrValues.length).replace(/-$/,''),values:this.parseValues(abbrValues)}},normalizeValue:function(value,property){property=(property||'').toLowerCase();var unitlessProps=prefs.getArray('css.unitlessProperties');return value.replace(/^(\-?[0-9\.]+)([a-z]*)$/,function(str,val,unit){if(!unit&&(val=='0'||_.include(unitlessProps,property)))return val;if(!unit)return val.replace(/\.$/,'')+prefs.get(~val.indexOf('.')?'css.floatUnit':'css.intUnit');return val+getUnit(unit)})},expand:function(abbr,value,syntax){syntax=syntax||'css';var resources=require('resources');var autoInsertPrefixes=prefs.get('css.autoInsertVendorPrefixes');var isImportant;if(isImportant=/^(.+)\!$/.test(abbr)){abbr=RegExp.$1}var snippet=resources.findSnippet(syntax,abbr);if(snippet&&!autoInsertPrefixes){return transformSnippet(snippet,isImportant,syntax)}var prefixData=this.extractPrefixes(abbr);var valuesData=this.extractValues(prefixData.property);var abbrData=_.extend(prefixData,valuesData);if(!snippet){snippet=resources.findSnippet(syntax,abbrData.property)}else{abbrData.values=null}if(!snippet&&prefs.get('css.fuzzySearch')){snippet=resources.fuzzyFindSnippet(syntax,abbrData.property,parseFloat(prefs.get('css.fuzzySearchMinScore')))}if(!snippet){snippet=abbrData.property+':'+defaultValue}else if(!_.isString(snippet)){snippet=snippet.data}if(!isSingleProperty(snippet)){return snippet}var snippetObj=this.splitSnippet(snippet);var result=[];if(!value&&abbrData.values){value=_.map(abbrData.values,function(val){return this.normalizeValue(val,snippetObj.name)},this).join(' ')+';'}snippetObj.value=value||snippetObj.value;var prefixes=abbrData.prefixes=='all'||(!abbrData.prefixes&&autoInsertPrefixes)?findPrefixes(snippetObj.name,autoInsertPrefixes&&abbrData.prefixes!='all'):abbrData.prefixes;var names=[],propName;_.each(prefixes,function(p){if(p in vendorPrefixes){propName=vendorPrefixes[p].transformName(snippetObj.name);names.push(propName);result.push(transformSnippet(propName+':'+snippetObj.value,isImportant,syntax))}});result.push(transformSnippet(snippetObj.name+':'+snippetObj.value,isImportant,syntax));names.push(snippetObj.name);if(prefs.get('css.alignVendor')){var pads=require('utils').getStringsPads(names);result=_.map(result,function(prop,i){return pads[i]+prop})}return result},expandToSnippet:function(abbr,syntax){var snippet=this.expand(abbr,null,syntax);if(_.isArray(snippet)){return snippet.join('\n')}if(!_.isString(snippet))return snippet.data;return String(snippet)},splitSnippet:function(snippet){var utils=require('utils');snippet=utils.trim(snippet);if(snippet.indexOf(':')==-1){return{name:snippet,value:defaultValue}}var pair=snippet.split(':');return{name:utils.trim(pair.shift()),value:utils.trim(pair.join(':')).replace(/^(\$\{0\}|\$0)(\s*;?)$/,'${1}$2')}},getSyntaxPreference:getSyntaxPreference,transformSnippet:transformSnippet}});emmet.define('cssGradient',function(require,_){var defaultLinearDirections=['top','to bottom','0deg'];var module=null;var cssSyntaxes=['css','less','sass','scss','stylus','styl'];var reDeg=/\d+deg/i;var reKeyword=/top|bottom|left|right/i;var prefs=require('preferences');prefs.define('css.gradient.prefixes','webkit, moz, o','A comma-separated list of vendor-prefixes for which values should '+'be generated.');prefs.define('css.gradient.oldWebkit',true,'Generate gradient definition for old Webkit implementations');prefs.define('css.gradient.omitDefaultDirection',true,'Do not output default direction definition in generated gradients.');prefs.define('css.gradient.defaultProperty','background-image','When gradient expanded outside CSS value context, it will produce '+'properties with this name.');prefs.define('css.gradient.fallback',false,'With this option enabled, CSS gradient generator will produce '+'<code>background-color</code> property with gradient first color '+'as fallback for old browsers.');function normalizeSpace(str){return require('utils').trim(str).replace(/\s+/g,' ')}function parseLinearGradient(gradient){var direction=defaultLinearDirections[0];var stream=require('stringStream').create(require('utils').trim(gradient));var colorStops=[],ch;while(ch=stream.next()){if(stream.peek()==','){colorStops.push(stream.current());stream.next();stream.eatSpace();stream.start=stream.pos}else if(ch=='('){stream.skipTo(')')}}colorStops.push(stream.current());colorStops=_.compact(_.map(colorStops,normalizeSpace));if(!colorStops.length)return null;if(reDeg.test(colorStops[0])||reKeyword.test(colorStops[0])){direction=colorStops.shift()}return{type:'linear',direction:direction,colorStops:_.map(colorStops,parseColorStop)}}function parseColorStop(colorStop){colorStop=normalizeSpace(colorStop);var color=null;colorStop=colorStop.replace(/^(\w+\(.+?\))\s*/,function(str,c){color=c;return''});if(!color){var parts=colorStop.split(' ');color=parts[0];colorStop=parts[1]||''}var result={color:color};if(colorStop){colorStop.replace(/^(\-?[\d\.]+)([a-z%]+)?$/,function(str,pos,unit){result.position=pos;if(~pos.indexOf('.')){unit=''}else if(!unit){unit='%'}if(unit)result.unit=unit})}return result}function resolvePropertyName(name,syntax){var res=require('resources');var prefs=require('preferences');var snippet=res.findSnippet(syntax,name);if(!snippet&&prefs.get('css.fuzzySearch')){snippet=res.fuzzyFindSnippet(syntax,name,parseFloat(prefs.get('css.fuzzySearchMinScore')))}if(snippet){if(!_.isString(snippet)){snippet=snippet.data}return require('cssResolver').splitSnippet(snippet).name}}function fillImpliedPositions(colorStops){var from=0;_.each(colorStops,function(cs,i){if(!i)return cs.position=cs.position||0;if(i==colorStops.length-1&&!('position'in cs))cs.position=1;if('position'in cs){var start=colorStops[from].position||0;var step=(cs.position-start)/(i-from);_.each(colorStops.slice(from,i),function(cs2,j){cs2.position=start+step*j});from=i}})}function textualDirection(direction){var angle=parseFloat(direction);if(!_.isNaN(angle)){switch(angle%360){case 0:return'left';case 90:return'bottom';case 180:return'right';case 240:return'top'}}return direction}function oldWebkitDirection(direction){direction=textualDirection(direction);if(reDeg.test(direction))throw"The direction is an angle that can’t be converted.";var v=function(pos){return~direction.indexOf(pos)?'100%':'0'};return v('right')+' '+v('bottom')+', '+v('left')+' '+v('top')}function getPrefixedNames(name){var prefixes=prefs.getArray('css.gradient.prefixes');var names=prefixes?_.map(prefixes,function(p){return'-'+p+'-'+name}):[];names.push(name);return names}function getPropertiesForGradient(gradient,propertyName){var props=[];var css=require('cssResolver');if(prefs.get('css.gradient.fallback')&&~propertyName.toLowerCase().indexOf('background')){props.push({name:'background-color',value:'${1:'+gradient.colorStops[0].color+'}'})}_.each(prefs.getArray('css.gradient.prefixes'),function(prefix){var name=css.prefixed(propertyName,prefix);if(prefix=='webkit'&&prefs.get('css.gradient.oldWebkit')){try{props.push({name:name,value:module.oldWebkitLinearGradient(gradient)})}catch(e){}}props.push({name:name,value:module.toString(gradient,prefix)})});return props.sort(function(a,b){return b.name.length-a.name.length})}function pasteGradient(property,gradient,valueRange){var rule=property.parent;var utils=require('utils');var alignVendor=require('preferences').get('css.alignVendor');var sep=property.styleSeparator;var before=property.styleBefore;_.each(rule.getAll(getPrefixedNames(property.name())),function(item){if(item!=property&&/gradient/i.test(item.value())){if(item.styleSeparator.length<sep.length){sep=item.styleSeparator}if(item.styleBefore.length<before.length){before=item.styleBefore}rule.remove(item)}});if(alignVendor){if(before!=property.styleBefore){var fullRange=property.fullRange();rule._updateSource(before,fullRange.start,fullRange.start+property.styleBefore.length);property.styleBefore=before}if(sep!=property.styleSeparator){rule._updateSource(sep,property.nameRange().end,property.valueRange().start);property.styleSeparator=sep}}var value=property.value();if(!valueRange)valueRange=require('range').create(0,property.value());var val=function(v){return utils.replaceSubstring(value,v,valueRange)};property.value(val(module.toString(gradient))+'${2}');var propsToInsert=getPropertiesForGradient(gradient,property.name());if(alignVendor){var values=_.pluck(propsToInsert,'value');var names=_.pluck(propsToInsert,'name');values.push(property.value());names.push(property.name());var valuePads=utils.getStringsPads(_.map(values,function(v){return v.substring(0,v.indexOf('('))}));var namePads=utils.getStringsPads(names);property.name(_.last(namePads)+property.name());_.each(propsToInsert,function(prop,i){prop.name=namePads[i]+prop.name;prop.value=valuePads[i]+prop.value});property.value(_.last(valuePads)+property.value())}_.each(propsToInsert,function(prop){rule.add(prop.name,prop.value,rule.indexOf(property))})}function findGradient(cssProp){var value=cssProp.value();var gradient=null;var matchedPart=_.find(cssProp.valueParts(),function(part){return gradient=module.parse(part.substring(value))});if(matchedPart&&gradient){return{gradient:gradient,valueRange:matchedPart}}return null}function expandGradientOutsideValue(editor,syntax){var propertyName=prefs.get('css.gradient.defaultProperty');if(!propertyName)return false;var content=String(editor.getContent());var lineRange=require('range').create(editor.getCurrentLineRange());var line=lineRange.substring(content).replace(/^\s+/,function(pad){lineRange.start+=pad.length;return''}).replace(/\s+$/,function(pad){lineRange.end-=pad.length;return''});var css=require('cssResolver');var gradient=module.parse(line);if(gradient){var props=getPropertiesForGradient(gradient,propertyName);props.push({name:propertyName,value:module.toString(gradient)+'${2}'});var sep=css.getSyntaxPreference('valueSeparator',syntax);var end=css.getSyntaxPreference('propertyEnd',syntax);if(require('preferences').get('css.alignVendor')){var pads=require('utils').getStringsPads(_.map(props,function(prop){return prop.value.substring(0,prop.value.indexOf('('))}));_.each(props,function(prop,i){prop.value=pads[i]+prop.value})}props=_.map(props,function(item){return item.name+sep+item.value+end});editor.replaceContent(props.join('\n'),lineRange.start,lineRange.end);return true}return false}function findGradientFromPosition(content,pos){var cssProp=null;var cssRule=require('cssEditTree').parseFromPosition(content,pos,true);if(cssRule){cssProp=cssRule.itemFromPosition(pos,true);if(!cssProp){cssProp=_.find(cssRule.list(),function(elem){return elem.range(true).end==pos})}}return{rule:cssRule,property:cssProp}}require('expandAbbreviation').addHandler(function(editor,syntax,profile){var info=require('editorUtils').outputInfo(editor,syntax,profile);if(!_.include(cssSyntaxes,info.syntax))return false;var caret=editor.getCaretPos();var content=info.content;var css=findGradientFromPosition(content,caret);if(css.property){var g=findGradient(css.property);if(g){var ruleStart=css.rule.options.offset||0;var ruleEnd=ruleStart+css.rule.toString().length;if(/[\n\r]/.test(css.property.value())){var insertPos=css.property.valueRange(true).start+g.valueRange.end;content=require('utils').replaceSubstring(content,';',insertPos);var newCss=findGradientFromPosition(content,caret);if(newCss.property){g=findGradient(newCss.property);css=newCss}}css.property.end(';');var resolvedName=resolvePropertyName(css.property.name(),syntax);if(resolvedName){css.property.name(resolvedName)}pasteGradient(css.property,g.gradient,g.valueRange);editor.replaceContent(css.rule.toString(),ruleStart,ruleEnd,true);return true}}return expandGradientOutsideValue(editor,syntax)});require('reflectCSSValue').addHandler(function(property){var utils=require('utils');var g=findGradient(property);if(!g)return false;var value=property.value();var val=function(v){return utils.replaceSubstring(value,v,g.valueRange)};_.each(property.parent.getAll(getPrefixedNames(property.name())),function(prop){if(prop===property)return;var m=prop.value().match(/^\s*(\-([a-z]+)\-)?linear\-gradient/);if(m){prop.value(val(module.toString(g.gradient,m[2]||'')))}else if(m=prop.value().match(/\s*\-webkit\-gradient/)){prop.value(val(module.oldWebkitLinearGradient(g.gradient)))}});return true});return module={parse:function(gradient){var result=null;require('utils').trim(gradient).replace(/^([\w\-]+)\((.+?)\)$/,function(str,type,definition){type=type.toLowerCase().replace(/^\-[a-z]+\-/,'');if(type=='linear-gradient'||type=='lg'){result=parseLinearGradient(definition);return''}return str});return result},oldWebkitLinearGradient:function(gradient){if(_.isString(gradient))gradient=this.parse(gradient);if(!gradient)return null;var colorStops=_.map(gradient.colorStops,_.clone);_.each(colorStops,function(cs){if(!('position'in cs))return;if(~cs.position.indexOf('.')||cs.unit=='%'){cs.position=parseFloat(cs.position)/(cs.unit=='%'?100:1)}else{throw"Can't convert color stop '"+(cs.position+(cs.unit||''))+"'"}});fillImpliedPositions(colorStops);colorStops=_.map(colorStops,function(cs,i){if(!cs.position&&!i)return'from('+cs.color+')';if(cs.position==1&&i==colorStops.length-1)return'to('+cs.color+')';return'color-stop('+(cs.position.toFixed(2).replace(/\.?0+$/,''))+', '+cs.color+')'});return'-webkit-gradient(linear, '+oldWebkitDirection(gradient.direction)+', '+colorStops.join(', ')+')'},toString:function(gradient,prefix){if(gradient.type=='linear'){var fn=(prefix?'-'+prefix+'-':'')+'linear-gradient';var colorStops=_.map(gradient.colorStops,function(cs){return cs.color+('position'in cs?' '+cs.position+(cs.unit||''):'')});if(gradient.direction&&(!prefs.get('css.gradient.omitDefaultDirection')||!_.include(defaultLinearDirections,gradient.direction))){colorStops.unshift(gradient.direction)}return fn+'('+colorStops.join(', ')+')'}}}});emmet.exec(function(require,_){var generators=require('handlerList').create();var resources=require('resources');_.extend(resources,{addGenerator:function(regexp,fn,options){if(_.isString(regexp))regexp=new RegExp(regexp);generators.add(function(node,syntax){var m;if((m=regexp.exec(node.name()))){return fn(m,node,syntax)}return null},options)}});resources.addResolver(function(node,syntax){return generators.exec(null,_.toArray(arguments))})});emmet.define('tagName',function(require,_){var elementTypes={empty:[],blockLevel:'address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,link,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul,h1,h2,h3,h4,h5,h6'.split(','),inlineLevel:'a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'.split(',')};var elementMap={'p':'span','ul':'li','ol':'li','table':'tr','tr':'td','tbody':'tr','thead':'tr','tfoot':'tr','colgroup':'col','select':'option','optgroup':'option','audio':'source','video':'source','object':'param','map':'area'};return{resolve:function(name){name=(name||'').toLowerCase();if(name in elementMap)return this.getMapping(name);if(this.isInlineLevel(name))return'span';return'div'},getMapping:function(name){return elementMap[name.toLowerCase()]},isInlineLevel:function(name){return this.isTypeOf(name,'inlineLevel')},isBlockLevel:function(name){return this.isTypeOf(name,'blockLevel')},isEmptyElement:function(name){return this.isTypeOf(name,'empty')},isTypeOf:function(name,type){return _.include(elementTypes[type],name)},addMapping:function(parent,child){elementMap[parent]=child},removeMapping:function(parent){if(parent in elementMap)delete elementMap[parent]},addElementToCollection:function(name,collection){if(!elementTypes[collection])elementTypes[collection]=[];var col=this.getCollection(collection);if(!_.include(col,name))col.push(name)},removeElementFromCollection:function(name,collection){if(collection in elementTypes){elementTypes[collection]=_.without(this.getCollection(collection),name)}},getCollection:function(name){return elementTypes[name]}}});emmet.exec(function(require,_){var prefs=require('preferences');prefs.define('bem.elementSeparator','__','Class name’s element separator.');prefs.define('bem.modifierSeparator','_','Class name’s modifier separator.');prefs.define('bem.shortElementPrefix','-','Symbol for describing short “block-element” notation. Class names '+'prefixed with this symbol will be treated as element name for parent‘s '+'block name. Each symbol instance traverses one level up in parsed '+'tree for block name lookup. Empty value will disable short notation.');var shouldRunHtmlFilter=false;function getSeparators(){return{element:prefs.get('bem.elementSeparator'),modifier:prefs.get('bem.modifierSeparator')}}function bemParse(item){if(require('abbreviationUtils').isSnippet(item))return item;item.__bem={block:'',element:'',modifier:''};var classNames=normalizeClassName(item.attribute('class')).split(' ');var reBlockName=/^[a-z]\-/i;item.__bem.block=_.find(classNames,function(name){return reBlockName.test(name)});if(!item.__bem.block){reBlockName=/^[a-z]/i;item.__bem.block=_.find(classNames,function(name){return reBlockName.test(name)})||''}classNames=_.chain(classNames).map(function(name){return processClassName(name,item)}).flatten().uniq().value().join(' ');if(classNames)item.attribute('class',classNames);return item}function normalizeClassName(className){var utils=require('utils');className=(' '+(className||'')+' ').replace(/\s+/g,' ');var shortSymbol=prefs.get('bem.shortElementPrefix');if(shortSymbol){var re=new RegExp('\\s('+utils.escapeForRegexp(shortSymbol)+'+)','g');className=className.replace(re,function(str,p1){return' '+utils.repeatString(getSeparators().element,p1.length)})}return utils.trim(className)}function processClassName(name,item){name=transformClassName(name,item,'element');name=transformClassName(name,item,'modifier');var block='',element='',modifier='';var separators=getSeparators();if(~name.indexOf(separators.element)){var blockElem=name.split(separators.element);var elemModifiers=blockElem[1].split(separators.modifier);block=blockElem[0];element=elemModifiers.shift();modifier=elemModifiers.join(separators.modifier)}else if(~name.indexOf(separators.modifier)){var blockModifiers=name.split(separators.modifier);block=blockModifiers.shift();modifier=blockModifiers.join(separators.modifier)}if(block||element||modifier){if(!block){block=item.__bem.block}var prefix=block;var result=[];if(element){prefix+=separators.element+element;result.push(prefix)}else{result.push(prefix)}if(modifier){result.push(prefix+separators.modifier+modifier)}item.__bem.block=block;item.__bem.element=element;item.__bem.modifier=modifier;return result}return name}function transformClassName(name,item,entityType){var separators=getSeparators();var reSep=new RegExp('^('+separators[entityType]+')+','g');if(reSep.test(name)){var depth=0;var cleanName=name.replace(reSep,function(str,p1){depth=str.length/separators[entityType].length;return''});var donor=item;while(donor.parent&&depth--){donor=donor.parent}if(!donor||!donor.__bem)donor=item;if(donor&&donor.__bem){var prefix=donor.__bem.block;if(entityType=='modifier'&&donor.__bem.element)prefix+=separators.element+donor.__bem.element;return prefix+separators[entityType]+cleanName}}return name}function process(tree,profile){if(tree.name)bemParse(tree,profile);var abbrUtils=require('abbreviationUtils');_.each(tree.children,function(item){process(item,profile);if(!abbrUtils.isSnippet(item)&&item.start)shouldRunHtmlFilter=true});return tree};require('filters').add('bem',function(tree,profile){shouldRunHtmlFilter=false;tree=process(tree,profile);if(shouldRunHtmlFilter){tree=require('filters').apply(tree,'html',profile)}return tree})});emmet.exec(function(require,_){var prefs=require('preferences');prefs.define('filter.commentAfter','\n<!-- /<%= attr("id", "#") %><%= attr("class", ".") %> -->','A definition of comment that should be placed <i>after</i> matched '+'element when <code>comment</code> filter is applied. This definition '+'is an ERB-style template passed to <code>_.template()</code> '+'function (see Underscore.js docs for details). In template context, '+'the following properties and functions are availabe:\n'+'<ul>'+'<li><code>attr(name, before, after)</code> – a function that outputs'+'specified attribute value concatenated with <code>before</code> '+'and <code>after</code> strings. If attribute doesn\'t exists, the '+'empty string will be returned.</li>'+'<li><code>node</code> – current node (instance of <code>AbbreviationNode</code>)</li>'+'<li><code>name</code> – name of current tag</li>'+'<li><code>padding</code> – current string padding, can be used '+'for formatting</li>'+'</ul>');prefs.define('filter.commentBefore','','A definition of comment that should be placed <i>before</i> matched '+'element when <code>comment</code> filter is applied. '+'For more info, read description of <code>filter.commentAfter</code> '+'property');prefs.define('filter.commentTrigger','id, class','A comma-separated list of attribute names that should exist in abbreviatoin '+'where comment should be added. If you wish to add comment for '+'every element, set this option to <code>*</code>');function addComments(node,templateBefore,templateAfter){var utils=require('utils');var trigger=prefs.get('filter.commentTrigger');if(trigger!='*'){var shouldAdd=_.find(trigger.split(','),function(name){return!!node.attribute(utils.trim(name))});if(!shouldAdd)return}var ctx={node:node,name:node.name(),padding:node.parent?node.parent.padding:'',attr:function(name,before,after){var attr=node.attribute(name);if(attr){return(before||'')+attr+(after||'')}return''}};var nodeBefore=utils.normalizeNewline(templateBefore?templateBefore(ctx):'');var nodeAfter=utils.normalizeNewline(templateAfter?templateAfter(ctx):'');node.start=node.start.replace(/</,nodeBefore+'<');node.end=node.end.replace(/>/,'>'+nodeAfter)}function process(tree,before,after){var abbrUtils=require('abbreviationUtils');_.each(tree.children,function(item){if(abbrUtils.isBlock(item))addComments(item,before,after);process(item,before,after)});return tree}require('filters').add('c',function(tree){var templateBefore=_.template(prefs.get('filter.commentBefore'));var templateAfter=_.template(prefs.get('filter.commentAfter'));return process(tree,templateBefore,templateAfter)})});emmet.exec(function(require,_){var charMap={'<':'&lt;','>':'&gt;','&':'&amp;'};function escapeChars(str){return str.replace(/([<>&])/g,function(str,p1){return charMap[p1]})}require('filters').add('e',function process(tree){_.each(tree.children,function(item){item.start=escapeChars(item.start);item.end=escapeChars(item.end);item.content=escapeChars(item.content);process(item)});return tree})});emmet.exec(function(require,_){var placeholder='%s';var prefs=require('preferences');prefs.define('format.noIndentTags','html','A comma-separated list of tag names that should not get inner indentation.');prefs.define('format.forceIndentationForTags','body','A comma-separated list of tag names that should <em>always</em> get inner indentation.');function getIndentation(node){if(_.include(prefs.getArray('format.noIndentTags')||[],node.name())){return''}return require('resources').getVariable('indentation')}function hasBlockSibling(item){return item.parent&&require('abbreviationUtils').hasBlockChildren(item.parent)}function isVeryFirstChild(item){return item.parent&&!item.parent.parent&&!item.index()}function shouldAddLineBreak(node,profile){var abbrUtils=require('abbreviationUtils');if(profile.tag_nl===true||abbrUtils.isBlock(node))return true;if(!node.parent||!profile.inline_break)return false;return shouldFormatInline(node.parent,profile)}function shouldBreakChild(node,profile){return node.children.length&&shouldAddLineBreak(node.children[0],profile)}function shouldFormatInline(node,profile){var nodeCount=0;var abbrUtils=require('abbreviationUtils');return!!_.find(node.children,function(child){if(child.isTextNode()||!abbrUtils.isInline(child))nodeCount=0;else if(abbrUtils.isInline(child))nodeCount++;if(nodeCount>=profile.inline_break)return true})}function isRoot(item){return!item.parent}function processSnippet(item,profile,level){item.start=item.end='';if(!isVeryFirstChild(item)&&profile.tag_nl!==false&&shouldAddLineBreak(item,profile)){if(isRoot(item.parent)||!require('abbreviationUtils').isInline(item.parent)){item.start=require('utils').getNewline()+item.start}}return item}function shouldBreakInsideInline(node,profile){var abbrUtils=require('abbreviationUtils');var hasBlockElems=_.any(node.children,function(child){if(abbrUtils.isSnippet(child))return false;return!abbrUtils.isInline(child)});if(!hasBlockElems){return shouldFormatInline(node,profile)}return true}function processTag(item,profile,level){item.start=item.end=placeholder;var utils=require('utils');var abbrUtils=require('abbreviationUtils');var isUnary=abbrUtils.isUnary(item);var nl=utils.getNewline();var indent=getIndentation(item);if(profile.tag_nl!==false){var forceNl=profile.tag_nl===true&&(profile.tag_nl_leaf||item.children.length);if(!forceNl){forceNl=_.include(prefs.getArray('format.forceIndentationForTags')||[],item.name())}if(!item.isTextNode()){if(shouldAddLineBreak(item,profile)){if(!isVeryFirstChild(item)&&(!abbrUtils.isSnippet(item.parent)||item.index()))item.start=nl+item.start;if(abbrUtils.hasBlockChildren(item)||shouldBreakChild(item,profile)||(forceNl&&!isUnary))item.end=nl+item.end;if(abbrUtils.hasTagsInContent(item)||(forceNl&&!item.children.length&&!isUnary))item.start+=nl+indent}else if(abbrUtils.isInline(item)&&hasBlockSibling(item)&&!isVeryFirstChild(item)){item.start=nl+item.start}else if(abbrUtils.isInline(item)&&shouldBreakInsideInline(item,profile)){item.end=nl+item.end}item.padding=indent}}return item}require('filters').add('_format',function process(tree,profile,level){level=level||0;var abbrUtils=require('abbreviationUtils');_.each(tree.children,function(item){if(abbrUtils.isSnippet(item))processSnippet(item,profile,level);else processTag(item,profile,level);process(item,profile,level+1)});return tree})});emmet.exec(function(require,_){var childToken='${child}';function transformClassName(className){return require('utils').trim(className).replace(/\s+/g,'.')}function makeAttributesString(tag,profile){var attrs='';var otherAttrs=[];var attrQuote=profile.attributeQuote();var cursor=profile.cursor();_.each(tag.attributeList(),function(a){var attrName=profile.attributeName(a.name);switch(attrName.toLowerCase()){case'id':attrs+='#'+(a.value||cursor);break;case'class':attrs+='.'+transformClassName(a.value||cursor);break;default:otherAttrs.push(':'+attrName+' => '+attrQuote+(a.value||cursor)+attrQuote)}});if(otherAttrs.length)attrs+='{'+otherAttrs.join(', ')+'}';return attrs}function hasBlockSibling(item){return item.parent&&item.parent.hasBlockChildren()}function processTag(item,profile,level){if(!item.parent)return item;var abbrUtils=require('abbreviationUtils');var utils=require('utils');var attrs=makeAttributesString(item,profile);var cursor=profile.cursor();var isUnary=abbrUtils.isUnary(item);var selfClosing=profile.self_closing_tag&&isUnary?'/':'';var start='';var tagName='%'+profile.tagName(item.name());if(tagName.toLowerCase()=='%div'&&attrs&&attrs.indexOf('{')==-1)tagName='';item.end='';start=tagName+attrs+selfClosing+' ';var placeholder='%s';item.start=utils.replaceSubstring(item.start,start,item.start.indexOf(placeholder),placeholder);if(!item.children.length&&!isUnary)item.start+=cursor;return item}require('filters').add('haml',function process(tree,profile,level){level=level||0;var abbrUtils=require('abbreviationUtils');if(!level){tree=require('filters').apply(tree,'_format',profile)}_.each(tree.children,function(item){if(!abbrUtils.isSnippet(item))processTag(item,profile,level);process(item,profile,level+1)});return tree})});emmet.exec(function(require,_){function makeAttributesString(node,profile){var attrQuote=profile.attributeQuote();var cursor=profile.cursor();return _.map(node.attributeList(),function(a){var attrName=profile.attributeName(a.name);return' '+attrName+'='+attrQuote+(a.value||cursor)+attrQuote}).join('')}function processTag(item,profile,level){if(!item.parent)return item;var abbrUtils=require('abbreviationUtils');var utils=require('utils');var attrs=makeAttributesString(item,profile);var cursor=profile.cursor();var isUnary=abbrUtils.isUnary(item);var start='';var end='';if(!item.isTextNode()){var tagName=profile.tagName(item.name());if(isUnary){start='<'+tagName+attrs+profile.selfClosing()+'>';item.end=''}else{start='<'+tagName+attrs+'>';end='</'+tagName+'>'}}var placeholder='%s';item.start=utils.replaceSubstring(item.start,start,item.start.indexOf(placeholder),placeholder);item.end=utils.replaceSubstring(item.end,end,item.end.indexOf(placeholder),placeholder);if(!item.children.length&&!isUnary&&!~item.content.indexOf(cursor)&&!require('tabStops').extract(item.content).tabstops.length){item.start+=cursor}return item}require('filters').add('html',function process(tree,profile,level){level=level||0;var abbrUtils=require('abbreviationUtils');if(!level){tree=require('filters').apply(tree,'_format',profile)}_.each(tree.children,function(item){if(!abbrUtils.isSnippet(item))processTag(item,profile,level);process(item,profile,level+1)});return tree})});emmet.exec(function(require,_){var rePad=/^\s+/;var reNl=/[\n\r]/g;require('filters').add('s',function process(tree,profile,level){var abbrUtils=require('abbreviationUtils');_.each(tree.children,function(item){if(!abbrUtils.isSnippet(item)){item.start=item.start.replace(rePad,'');item.end=item.end.replace(rePad,'')}item.start=item.start.replace(reNl,'');item.end=item.end.replace(reNl,'');item.content=item.content.replace(reNl,'');process(item)});return tree})});emmet.exec(function(require,_){require('preferences').define('filter.trimRegexp','[\\s|\\u00a0]*[\\d|#|\\-|\*|\\u2022]+\\.?\\s*','Regular expression used to remove list markers (numbers, dashes, '+'bullets, etc.) in <code>t</code> (trim) filter. The trim filter '+'is useful for wrapping with abbreviation lists, pased from other '+'documents (for example, Word documents).');function process(tree,re){_.each(tree.children,function(item){if(item.content)item.content=item.content.replace(re,'');process(item,re)});return tree}require('filters').add('t',function(tree){var re=new RegExp(require('preferences').get('filter.trimRegexp'));return process(tree,re)})});emmet.exec(function(require,_){var tags={'xsl:variable':1,'xsl:with-param':1};function trimAttribute(node){node.start=node.start.replace(/\s+select\s*=\s*(['"]).*?\1/,'')}require('filters').add('xsl',function process(tree){var abbrUtils=require('abbreviationUtils');_.each(tree.children,function(item){if(!abbrUtils.isSnippet(item)&&(item.name()||'').toLowerCase()in tags&&item.children.length)trimAttribute(item);process(item)});return tree})});emmet.define('lorem',function(require,_){var langs={en:{common:['lorem','ipsum','dolor','sit','amet','consectetur','adipisicing','elit'],words:['exercitationem','perferendis','perspiciatis','laborum','eveniet','sunt','iure','nam','nobis','eum','cum','officiis','excepturi','odio','consectetur','quasi','aut','quisquam','vel','eligendi','itaque','non','odit','tempore','quaerat','dignissimos','facilis','neque','nihil','expedita','vitae','vero','ipsum','nisi','animi','cumque','pariatur','velit','modi','natus','iusto','eaque','sequi','illo','sed','ex','et','voluptatibus','tempora','veritatis','ratione','assumenda','incidunt','nostrum','placeat','aliquid','fuga','provident','praesentium','rem','necessitatibus','suscipit','adipisci','quidem','possimus','voluptas','debitis','sint','accusantium','unde','sapiente','voluptate','qui','aspernatur','laudantium','soluta','amet','quo','aliquam','saepe','culpa','libero','ipsa','dicta','reiciendis','nesciunt','doloribus','autem','impedit','minima','maiores','repudiandae','ipsam','obcaecati','ullam','enim','totam','delectus','ducimus','quis','voluptates','dolores','molestiae','harum','dolorem','quia','voluptatem','molestias','magni','distinctio','omnis','illum','dolorum','voluptatum','ea','quas','quam','corporis','quae','blanditiis','atque','deserunt','laboriosam','earum','consequuntur','hic','cupiditate','quibusdam','accusamus','ut','rerum','error','minus','eius','ab','ad','nemo','fugit','officia','at','in','id','quos','reprehenderit','numquam','iste','fugiat','sit','inventore','beatae','repellendus','magnam','recusandae','quod','explicabo','doloremque','aperiam','consequatur','asperiores','commodi','optio','dolor','labore','temporibus','repellat','veniam','architecto','est','esse','mollitia','nulla','a','similique','eos','alias','dolore','tenetur','deleniti','porro','facere','maxime','corrupti']},ru:{common:['далеко-далеко','за','словесными','горами','в стране','гласных','и согласных','живут','рыбные','тексты'],words:['вдали','от всех','они','буквенных','домах','на берегу','семантика','большого','языкового','океана','маленький','ручеек','даль','журчит','по всей','обеспечивает','ее','всеми','необходимыми','правилами','эта','парадигматическая','страна','которой','жаренные','предложения','залетают','прямо','рот','даже','всемогущая','пунктуация','не','имеет','власти','над','рыбными','текстами','ведущими','безорфографичный','образ','жизни','однажды','одна','маленькая','строчка','рыбного','текста','имени','lorem','ipsum','решила','выйти','большой','мир','грамматики','великий','оксмокс','предупреждал','о','злых','запятых','диких','знаках','вопроса','коварных','точках','запятой','но','текст','дал','сбить','себя','толку','он','собрал','семь','своих','заглавных','букв','подпоясал','инициал','за','пояс','пустился','дорогу','взобравшись','первую','вершину','курсивных','гор','бросил','последний','взгляд','назад','силуэт','своего','родного','города','буквоград','заголовок','деревни','алфавит','подзаголовок','своего','переулка','грустный','реторический','вопрос','скатился','его','щеке','продолжил','свой','путь','дороге','встретил','рукопись','она','предупредила','моей','все','переписывается','несколько','раз','единственное','что','меня','осталось','это','приставка','возвращайся','ты','лучше','свою','безопасную','страну','послушавшись','рукописи','наш','продолжил','свой','путь','вскоре','ему','повстречался','коварный','составитель','рекламных','текстов','напоивший','языком','речью','заманивший','свое','агенство','которое','использовало','снова','снова','своих','проектах','если','переписали','то','живет','там','до','сих','пор']}};var prefs=require('preferences');prefs.define('lorem.defaultLang','en');require('abbreviationParser').addPreprocessor(function(tree,options){var re=/^(?:lorem|lipsum)([a-z]{2})?(\d*)$/i,match;tree.findAll(function(node){if(node._name&&(match=node._name.match(re))){var wordCound=match[2]||30;var lang=match[1]||prefs.get('lorem.defaultLang')||'en';node._name='';node.data('forceNameResolving',node.isRepeating()||node.attributeList().length);node.data('pasteOverwrites',true);node.data('paste',function(i,content){return paragraph(lang,wordCound,!i)})}})});function randint(from,to){return Math.round(Math.random()*(to-from)+from)}function sample(arr,count){var len=arr.length;var iterations=Math.min(len,count);var result=[];while(result.length<iterations){var randIx=randint(0,len-1);if(!_.include(result,randIx))result.push(randIx)}return _.map(result,function(ix){return arr[ix]})}function choice(val){if(_.isString(val))return val.charAt(randint(0,val.length-1));return val[randint(0,val.length-1)]}function sentence(words,end){if(words.length){words[0]=words[0].charAt(0).toUpperCase()+words[0].substring(1)}return words.join(' ')+(end||choice('?!...'))}function insertCommas(words){var len=words.length;var totalCommas=0;if(len>3&&len<=6){totalCommas=randint(0,1)}else if(len>6&&len<=12){totalCommas=randint(0,2)}else{totalCommas=randint(1,4)}_.each(_.range(totalCommas),function(ix){if(ix<words.length-1){words[ix]+=','}})}function paragraph(lang,wordCount,startWithCommon){var data=langs[lang];if(!data){return''}var result=[];var totalWords=0;var words;wordCount=parseInt(wordCount,10);if(startWithCommon&&data.common){words=data.common.slice(0,wordCount);if(words.length>5)words[4]+=',';totalWords+=words.length;result.push(sentence(words,'.'))}while(totalWords<wordCount){words=sample(data.words,Math.min(randint(3,12)*randint(1,5),wordCount-totalWords));totalWords+=words.length;insertCommas(words);result.push(sentence(words))}return result.join(' ')}return{addLang:function(lang,data){if(_.isString(data)){data={words:_.compact(data.split(' '))}}else if(_.isArray(data)){data={words:data}}langs[lang]=data}}});emmet.define('bootstrap',function(require,_){var snippets={"variables":{"lang":"en","locale":"en-US","charset":"UTF-8","indentation":"\t","newline":"\n"},"css":{"filters":"html","snippets":{"@i":"@import url(|);","@import":"@import url(|);","@m":"@media ${1:screen} {\n\t|\n}","@media":"@media ${1:screen} {\n\t|\n}","@f":"@font-face {\n\tfont-family:|;\n\tsrc:url(|);\n}","@f+":"@font-face {\n\tfont-family: '${1:FontName}';\n\tsrc: url('${2:FileName}.eot');\n\tsrc: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n\t\t url('${2:FileName}.woff') format('woff'),\n\t\t url('${2:FileName}.ttf') format('truetype'),\n\t\t url('${2:FileName}.svg#${1:FontName}') format('svg');\n\tfont-style: ${3:normal};\n\tfont-weight: ${4:normal};\n}","@kf":"@-webkit-keyframes ${1:identifier} {\n\t${2:from} { ${3} }${6}\n\t${4:to} { ${5} }\n}\n@-o-keyframes ${1:identifier} {\n\t${2:from} { ${3} }${6}\n\t${4:to} { ${5} }\n}\n@-moz-keyframes ${1:identifier} {\n\t${2:from} { ${3} }${6}\n\t${4:to} { ${5} }\n}\n@keyframes ${1:identifier} {\n\t${2:from} { ${3} }${6}\n\t${4:to} { ${5} }\n}","anim":"animation:|;","anim-":"animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode};","animdel":"animation-delay:${1:time};","animdir":"animation-direction:${1:normal};","animdir:n":"animation-direction:normal;","animdir:r":"animation-direction:reverse;","animdir:a":"animation-direction:alternate;","animdir:ar":"animation-direction:alternate-reverse;","animdur":"animation-duration:${1:0}s;","animfm":"animation-fill-mode:${1:both};","animfm:f":"animation-fill-mode:forwards;","animfm:b":"animation-fill-mode:backwards;","animfm:bt":"animation-fill-mode:both;","animfm:bh":"animation-fill-mode:both;","animic":"animation-iteration-count:${1:1};","animic:i":"animation-iteration-count:infinite;","animn":"animation-name:${1:none};","animps":"animation-play-state:${1:running};","animps:p":"animation-play-state:paused;","animps:r":"animation-play-state:running;","animtf":"animation-timing-function:${1:linear};","animtf:e":"animation-timing-function:ease;","animtf:ei":"animation-timing-function:ease-in;","animtf:eo":"animation-timing-function:ease-out;","animtf:eio":"animation-timing-function:ease-in-out;","animtf:l":"animation-timing-function:linear;","animtf:cb":"animation-timing-function:cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1});","ap":"appearance:${none};","!":"!important","pos":"position:${1:relative};","pos:s":"position:static;","pos:a":"position:absolute;","pos:r":"position:relative;","pos:f":"position:fixed;","t":"top:|;","t:a":"top:auto;","r":"right:|;","r:a":"right:auto;","b":"bottom:|;","b:a":"bottom:auto;","l":"left:|;","l:a":"left:auto;","z":"z-index:|;","z:a":"z-index:auto;","fl":"float:${1:left};","fl:n":"float:none;","fl:l":"float:left;","fl:r":"float:right;","cl":"clear:${1:both};","cl:n":"clear:none;","cl:l":"clear:left;","cl:r":"clear:right;","cl:b":"clear:both;","colm":"columns:|;","colmc":"column-count:|;","colmf":"column-fill:|;","colmg":"column-gap:|;","colmr":"column-rule:|;","colmrc":"column-rule-color:|;","colmrs":"column-rule-style:|;","colmrw":"column-rule-width:|;","colms":"column-span:|;","colmw":"column-width:|;","d":"display:${1:block};","d:n":"display:none;","d:b":"display:block;","d:i":"display:inline;","d:ib":"display:inline-block;","d:ib+":"display: inline-block;\n*display: inline;\n*zoom: 1;","d:li":"display:list-item;","d:ri":"display:run-in;","d:cp":"display:compact;","d:tb":"display:table;","d:itb":"display:inline-table;","d:tbcp":"display:table-caption;","d:tbcl":"display:table-column;","d:tbclg":"display:table-column-group;","d:tbhg":"display:table-header-group;","d:tbfg":"display:table-footer-group;","d:tbr":"display:table-row;","d:tbrg":"display:table-row-group;","d:tbc":"display:table-cell;","d:rb":"display:ruby;","d:rbb":"display:ruby-base;","d:rbbg":"display:ruby-base-group;","d:rbt":"display:ruby-text;","d:rbtg":"display:ruby-text-group;","v":"visibility:${1:hidden};","v:v":"visibility:visible;","v:h":"visibility:hidden;","v:c":"visibility:collapse;","ov":"overflow:${1:hidden};","ov:v":"overflow:visible;","ov:h":"overflow:hidden;","ov:s":"overflow:scroll;","ov:a":"overflow:auto;","ovx":"overflow-x:${1:hidden};","ovx:v":"overflow-x:visible;","ovx:h":"overflow-x:hidden;","ovx:s":"overflow-x:scroll;","ovx:a":"overflow-x:auto;","ovy":"overflow-y:${1:hidden};","ovy:v":"overflow-y:visible;","ovy:h":"overflow-y:hidden;","ovy:s":"overflow-y:scroll;","ovy:a":"overflow-y:auto;","ovs":"overflow-style:${1:scrollbar};","ovs:a":"overflow-style:auto;","ovs:s":"overflow-style:scrollbar;","ovs:p":"overflow-style:panner;","ovs:m":"overflow-style:move;","ovs:mq":"overflow-style:marquee;","zoo":"zoom:1;","zm":"zoom:1;","cp":"clip:|;","cp:a":"clip:auto;","cp:r":"clip:rect(${1:top} ${2:right} ${3:bottom} ${4:left});","bxz":"box-sizing:${1:border-box};","bxz:cb":"box-sizing:content-box;","bxz:bb":"box-sizing:border-box;","bxsh":"box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:color};","bxsh:r":"box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:spread }rgb(${6:0}, ${7:0}, ${8:0});","bxsh:ra":"box-shadow:${1:inset }${2:h} ${3:v} ${4:blur} ${5:spread }rgba(${6:0}, ${7:0}, ${8:0}, .${9:5});","bxsh:n":"box-shadow:none;","m":"margin:|;","m:a":"margin:auto;","mt":"margin-top:|;","mt:a":"margin-top:auto;","mr":"margin-right:|;","mr:a":"margin-right:auto;","mb":"margin-bottom:|;","mb:a":"margin-bottom:auto;","ml":"margin-left:|;","ml:a":"margin-left:auto;","p":"padding:|;","pt":"padding-top:|;","pr":"padding-right:|;","pb":"padding-bottom:|;","pl":"padding-left:|;","w":"width:|;","w:a":"width:auto;","h":"height:|;","h:a":"height:auto;","maw":"max-width:|;","maw:n":"max-width:none;","mah":"max-height:|;","mah:n":"max-height:none;","miw":"min-width:|;","mih":"min-height:|;","mar":"max-resolution:${1:res};","mir":"min-resolution:${1:res};","ori":"orientation:|;","ori:l":"orientation:landscape;","ori:p":"orientation:portrait;","ol":"outline:|;","ol:n":"outline:none;","olo":"outline-offset:|;","olw":"outline-width:|;","olw:tn":"outline-width:thin;","olw:m":"outline-width:medium;","olw:tc":"outline-width:thick;","ols":"outline-style:|;","ols:n":"outline-style:none;","ols:dt":"outline-style:dotted;","ols:ds":"outline-style:dashed;","ols:s":"outline-style:solid;","ols:db":"outline-style:double;","ols:g":"outline-style:groove;","ols:r":"outline-style:ridge;","ols:i":"outline-style:inset;","ols:o":"outline-style:outset;","olc":"outline-color:#${1:000};","olc:i":"outline-color:invert;","bd":"border:|;","bd+":"border:${1:1px} ${2:solid} ${3:#000};","bd:n":"border:none;","bdbk":"border-break:${1:close};","bdbk:c":"border-break:close;","bdcl":"border-collapse:|;","bdcl:c":"border-collapse:collapse;","bdcl:s":"border-collapse:separate;","bdc":"border-color:#${1:000};","bdc:t":"border-color:transparent;","bdi":"border-image:url(|);","bdi:n":"border-image:none;","bdti":"border-top-image:url(|);","bdti:n":"border-top-image:none;","bdri":"border-right-image:url(|);","bdri:n":"border-right-image:none;","bdbi":"border-bottom-image:url(|);","bdbi:n":"border-bottom-image:none;","bdli":"border-left-image:url(|);","bdli:n":"border-left-image:none;","bdci":"border-corner-image:url(|);","bdci:n":"border-corner-image:none;","bdci:c":"border-corner-image:continue;","bdtli":"border-top-left-image:url(|);","bdtli:n":"border-top-left-image:none;","bdtli:c":"border-top-left-image:continue;","bdtri":"border-top-right-image:url(|);","bdtri:n":"border-top-right-image:none;","bdtri:c":"border-top-right-image:continue;","bdbri":"border-bottom-right-image:url(|);","bdbri:n":"border-bottom-right-image:none;","bdbri:c":"border-bottom-right-image:continue;","bdbli":"border-bottom-left-image:url(|);","bdbli:n":"border-bottom-left-image:none;","bdbli:c":"border-bottom-left-image:continue;","bdf":"border-fit:${1:repeat};","bdf:c":"border-fit:clip;","bdf:r":"border-fit:repeat;","bdf:sc":"border-fit:scale;","bdf:st":"border-fit:stretch;","bdf:ow":"border-fit:overwrite;","bdf:of":"border-fit:overflow;","bdf:sp":"border-fit:space;","bdlen":"border-length:|;","bdlen:a":"border-length:auto;","bdsp":"border-spacing:|;","bds":"border-style:|;","bds:n":"border-style:none;","bds:h":"border-style:hidden;","bds:dt":"border-style:dotted;","bds:ds":"border-style:dashed;","bds:s":"border-style:solid;","bds:db":"border-style:double;","bds:dtds":"border-style:dot-dash;","bds:dtdtds":"border-style:dot-dot-dash;","bds:w":"border-style:wave;","bds:g":"border-style:groove;","bds:r":"border-style:ridge;","bds:i":"border-style:inset;","bds:o":"border-style:outset;","bdw":"border-width:|;","bdtw":"border-top-width:|;","bdrw":"border-right-width:|;","bdbw":"border-bottom-width:|;","bdlw":"border-left-width:|;","bdt":"border-top:|;","bt":"border-top:|;","bdt+":"border-top:${1:1px} ${2:solid} ${3:#000};","bdt:n":"border-top:none;","bdts":"border-top-style:|;","bdts:n":"border-top-style:none;","bdtc":"border-top-color:#${1:000};","bdtc:t":"border-top-color:transparent;","bdr":"border-right:|;","br":"border-right:|;","bdr+":"border-right:${1:1px} ${2:solid} ${3:#000};","bdr:n":"border-right:none;","bdrst":"border-right-style:|;","bdrst:n":"border-right-style:none;","bdrc":"border-right-color:#${1:000};","bdrc:t":"border-right-color:transparent;","bdb":"border-bottom:|;","bb":"border-bottom:|;","bdb+":"border-bottom:${1:1px} ${2:solid} ${3:#000};","bdb:n":"border-bottom:none;","bdbs":"border-bottom-style:|;","bdbs:n":"border-bottom-style:none;","bdbc":"border-bottom-color:#${1:000};","bdbc:t":"border-bottom-color:transparent;","bdl":"border-left:|;","bl":"border-left:|;","bdl+":"border-left:${1:1px} ${2:solid} ${3:#000};","bdl:n":"border-left:none;","bdls":"border-left-style:|;","bdls:n":"border-left-style:none;","bdlc":"border-left-color:#${1:000};","bdlc:t":"border-left-color:transparent;","bdrs":"border-radius:|;","bdtrrs":"border-top-right-radius:|;","bdtlrs":"border-top-left-radius:|;","bdbrrs":"border-bottom-right-radius:|;","bdblrs":"border-bottom-left-radius:|;","bg":"background:#${1:000};","bg+":"background:${1:#fff} url(${2}) ${3:0} ${4:0} ${5:no-repeat};","bg:n":"background:none;","bg:ie":"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${1:x}.png',sizingMethod='${2:crop}');","bgc":"background-color:#${1:fff};","bgc:t":"background-color:transparent;","bgi":"background-image:url(|);","bgi:n":"background-image:none;","bgr":"background-repeat:|;","bgr:n":"background-repeat:no-repeat;","bgr:x":"background-repeat:repeat-x;","bgr:y":"background-repeat:repeat-y;","bgr:sp":"background-repeat:space;","bgr:rd":"background-repeat:round;","bga":"background-attachment:|;","bga:f":"background-attachment:fixed;","bga:s":"background-attachment:scroll;","bgp":"background-position:${1:0} ${2:0};","bgpx":"background-position-x:|;","bgpy":"background-position-y:|;","bgbk":"background-break:|;","bgbk:bb":"background-break:bounding-box;","bgbk:eb":"background-break:each-box;","bgbk:c":"background-break:continuous;","bgcp":"background-clip:${1:padding-box};","bgcp:bb":"background-clip:border-box;","bgcp:pb":"background-clip:padding-box;","bgcp:cb":"background-clip:content-box;","bgcp:nc":"background-clip:no-clip;","bgo":"background-origin:|;","bgo:pb":"background-origin:padding-box;","bgo:bb":"background-origin:border-box;","bgo:cb":"background-origin:content-box;","bgsz":"background-size:|;","bgsz:a":"background-size:auto;","bgsz:ct":"background-size:contain;","bgsz:cv":"background-size:cover;","c":"color:#${1:000};","c:r":"color:rgb(${1:0}, ${2:0}, ${3:0});","c:ra":"color:rgba(${1:0}, ${2:0}, ${3:0}, .${4:5});","cm":"/* |${child} */","cnt":"content:'|';","cnt:n":"content:normal;","cnt:oq":"content:open-quote;","cnt:noq":"content:no-open-quote;","cnt:cq":"content:close-quote;","cnt:ncq":"content:no-close-quote;","cnt:a":"content:attr(|);","cnt:c":"content:counter(|);","cnt:cs":"content:counters(|);","tbl":"table-layout:|;","tbl:a":"table-layout:auto;","tbl:f":"table-layout:fixed;","cps":"caption-side:|;","cps:t":"caption-side:top;","cps:b":"caption-side:bottom;","ec":"empty-cells:|;","ec:s":"empty-cells:show;","ec:h":"empty-cells:hide;","lis":"list-style:|;","lis:n":"list-style:none;","lisp":"list-style-position:|;","lisp:i":"list-style-position:inside;","lisp:o":"list-style-position:outside;","list":"list-style-type:|;","list:n":"list-style-type:none;","list:d":"list-style-type:disc;","list:c":"list-style-type:circle;","list:s":"list-style-type:square;","list:dc":"list-style-type:decimal;","list:dclz":"list-style-type:decimal-leading-zero;","list:lr":"list-style-type:lower-roman;","list:ur":"list-style-type:upper-roman;","lisi":"list-style-image:|;","lisi:n":"list-style-image:none;","q":"quotes:|;","q:n":"quotes:none;","q:ru":"quotes:'\\00AB' '\\00BB' '\\201E' '\\201C';","q:en":"quotes:'\\201C' '\\201D' '\\2018' '\\2019';","ct":"content:|;","ct:n":"content:normal;","ct:oq":"content:open-quote;","ct:noq":"content:no-open-quote;","ct:cq":"content:close-quote;","ct:ncq":"content:no-close-quote;","ct:a":"content:attr(|);","ct:c":"content:counter(|);","ct:cs":"content:counters(|);","coi":"counter-increment:|;","cor":"counter-reset:|;","va":"vertical-align:${1:top};","va:sup":"vertical-align:super;","va:t":"vertical-align:top;","va:tt":"vertical-align:text-top;","va:m":"vertical-align:middle;","va:bl":"vertical-align:baseline;","va:b":"vertical-align:bottom;","va:tb":"vertical-align:text-bottom;","va:sub":"vertical-align:sub;","ta":"text-align:${1:left};","ta:l":"text-align:left;","ta:c":"text-align:center;","ta:r":"text-align:right;","ta:j":"text-align:justify;","ta-lst":"text-align-last:|;","tal:a":"text-align-last:auto;","tal:l":"text-align-last:left;","tal:c":"text-align-last:center;","tal:r":"text-align-last:right;","td":"text-decoration:${1:none};","td:n":"text-decoration:none;","td:u":"text-decoration:underline;","td:o":"text-decoration:overline;","td:l":"text-decoration:line-through;","te":"text-emphasis:|;","te:n":"text-emphasis:none;","te:ac":"text-emphasis:accent;","te:dt":"text-emphasis:dot;","te:c":"text-emphasis:circle;","te:ds":"text-emphasis:disc;","te:b":"text-emphasis:before;","te:a":"text-emphasis:after;","th":"text-height:|;","th:a":"text-height:auto;","th:f":"text-height:font-size;","th:t":"text-height:text-size;","th:m":"text-height:max-size;","ti":"text-indent:|;","ti:-":"text-indent:-9999px;","tj":"text-justify:|;","tj:a":"text-justify:auto;","tj:iw":"text-justify:inter-word;","tj:ii":"text-justify:inter-ideograph;","tj:ic":"text-justify:inter-cluster;","tj:d":"text-justify:distribute;","tj:k":"text-justify:kashida;","tj:t":"text-justify:tibetan;","tov":"text-overflow:${ellipsis};","tov:e":"text-overflow:ellipsis;","tov:c":"text-overflow:clip;","to":"text-outline:|;","to+":"text-outline:${1:0} ${2:0} ${3:#000};","to:n":"text-outline:none;","tr":"text-replace:|;","tr:n":"text-replace:none;","tt":"text-transform:${1:uppercase};","tt:n":"text-transform:none;","tt:c":"text-transform:capitalize;","tt:u":"text-transform:uppercase;","tt:l":"text-transform:lowercase;","tw":"text-wrap:|;","tw:n":"text-wrap:normal;","tw:no":"text-wrap:none;","tw:u":"text-wrap:unrestricted;","tw:s":"text-wrap:suppress;","tsh":"text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000};","tsh:r":"text-shadow:${1:h} ${2:v} ${3:blur} rgb(${4:0}, ${5:0}, ${6:0});","tsh:ra":"text-shadow:${1:h} ${2:v} ${3:blur} rgba(${4:0}, ${5:0}, ${6:0}, .${7:5});","tsh+":"text-shadow:${1:0} ${2:0} ${3:0} ${4:#000};","tsh:n":"text-shadow:none;","trf":"transform:|;","trf:skx":"transform: skewX(${1:angle});","trf:sky":"transform: skewY(${1:angle});","trf:sc":"transform: scale(${1:x}, ${2:y});","trf:scx":"transform: scaleX(${1:x});","trf:scy":"transform: scaleY(${1:y});","trf:r":"transform: rotate(${1:angle});","trf:t":"transform: translate(${1:x}, ${2:y});","trf:tx":"transform: translateX(${1:x});","trf:ty":"transform: translateY(${1:y});","trfo":"transform-origin:|;","trfs":"transform-style:${1:preserve-3d};","trs":"transition:${1:prop} ${2:time};","trsde":"transition-delay:${1:time};","trsdu":"transition-duration:${1:time};","trsp":"transition-property:${1:prop};","trstf":"transition-timing-function:${1:tfunc};","lh":"line-height:|;","whs":"white-space:|;","whs:n":"white-space:normal;","whs:p":"white-space:pre;","whs:nw":"white-space:nowrap;","whs:pw":"white-space:pre-wrap;","whs:pl":"white-space:pre-line;","whsc":"white-space-collapse:|;","whsc:n":"white-space-collapse:normal;","whsc:k":"white-space-collapse:keep-all;","whsc:l":"white-space-collapse:loose;","whsc:bs":"white-space-collapse:break-strict;","whsc:ba":"white-space-collapse:break-all;","wob":"word-break:|;","wob:n":"word-break:normal;","wob:k":"word-break:keep-all;","wob:ba":"word-break:break-all;","wos":"word-spacing:|;","wow":"word-wrap:|;","wow:nm":"word-wrap:normal;","wow:n":"word-wrap:none;","wow:u":"word-wrap:unrestricted;","wow:s":"word-wrap:suppress;","wow:b":"word-wrap:break-word;","wm":"writing-mode:${1:lr-tb};","wm:lrt":"writing-mode:lr-tb;","wm:lrb":"writing-mode:lr-bt;","wm:rlt":"writing-mode:rl-tb;","wm:rlb":"writing-mode:rl-bt;","wm:tbr":"writing-mode:tb-rl;","wm:tbl":"writing-mode:tb-lr;","wm:btl":"writing-mode:bt-lr;","wm:btr":"writing-mode:bt-rl;","lts":"letter-spacing:|;","lts-n":"letter-spacing:normal;","f":"font:|;","f+":"font:${1:1em} ${2:Arial,sans-serif};","fw":"font-weight:|;","fw:n":"font-weight:normal;","fw:b":"font-weight:bold;","fw:br":"font-weight:bolder;","fw:lr":"font-weight:lighter;","fs":"font-style:${italic};","fs:n":"font-style:normal;","fs:i":"font-style:italic;","fs:o":"font-style:oblique;","fv":"font-variant:|;","fv:n":"font-variant:normal;","fv:sc":"font-variant:small-caps;","fz":"font-size:|;","fza":"font-size-adjust:|;","fza:n":"font-size-adjust:none;","ff":"font-family:|;","ff:s":"font-family:serif;","ff:ss":"font-family:sans-serif;","ff:c":"font-family:cursive;","ff:f":"font-family:fantasy;","ff:m":"font-family:monospace;","ff:a":"font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;","ff:t":"font-family: \"Times New Roman\", Times, Baskerville, Georgia, serif;","ff:v":"font-family: Verdana, Geneva, sans-serif;","fef":"font-effect:|;","fef:n":"font-effect:none;","fef:eg":"font-effect:engrave;","fef:eb":"font-effect:emboss;","fef:o":"font-effect:outline;","fem":"font-emphasize:|;","femp":"font-emphasize-position:|;","femp:b":"font-emphasize-position:before;","femp:a":"font-emphasize-position:after;","fems":"font-emphasize-style:|;","fems:n":"font-emphasize-style:none;","fems:ac":"font-emphasize-style:accent;","fems:dt":"font-emphasize-style:dot;","fems:c":"font-emphasize-style:circle;","fems:ds":"font-emphasize-style:disc;","fsm":"font-smooth:|;","fsm:a":"font-smooth:auto;","fsm:n":"font-smooth:never;","fsm:aw":"font-smooth:always;","fst":"font-stretch:|;","fst:n":"font-stretch:normal;","fst:uc":"font-stretch:ultra-condensed;","fst:ec":"font-stretch:extra-condensed;","fst:c":"font-stretch:condensed;","fst:sc":"font-stretch:semi-condensed;","fst:se":"font-stretch:semi-expanded;","fst:e":"font-stretch:expanded;","fst:ee":"font-stretch:extra-expanded;","fst:ue":"font-stretch:ultra-expanded;","op":"opacity:|;","op+":"opacity: $1;\nfilter: alpha(opacity=$2);","op:ie":"filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);","op:ms":"-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';","rsz":"resize:|;","rsz:n":"resize:none;","rsz:b":"resize:both;","rsz:h":"resize:horizontal;","rsz:v":"resize:vertical;","cur":"cursor:${pointer};","cur:a":"cursor:auto;","cur:d":"cursor:default;","cur:c":"cursor:crosshair;","cur:ha":"cursor:hand;","cur:he":"cursor:help;","cur:m":"cursor:move;","cur:p":"cursor:pointer;","cur:t":"cursor:text;","pgbb":"page-break-before:|;","pgbb:au":"page-break-before:auto;","pgbb:al":"page-break-before:always;","pgbb:l":"page-break-before:left;","pgbb:r":"page-break-before:right;","pgbi":"page-break-inside:|;","pgbi:au":"page-break-inside:auto;","pgbi:av":"page-break-inside:avoid;","pgba":"page-break-after:|;","pgba:au":"page-break-after:auto;","pgba:al":"page-break-after:always;","pgba:l":"page-break-after:left;","pgba:r":"page-break-after:right;","orp":"orphans:|;","us":"user-select:${none};","wid":"widows:|;","wfsm":"-webkit-font-smoothing:${antialiased};","wfsm:a":"-webkit-font-smoothing:antialiased;","wfsm:s":"-webkit-font-smoothing:subpixel-antialiased;","wfsm:sa":"-webkit-font-smoothing:subpixel-antialiased;","wfsm:n":"-webkit-font-smoothing:none;"}},"html":{"filters":"html","profile":"html","snippets":{"!!!":"<!doctype html>","!!!4t":"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">","!!!4s":"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">","!!!xt":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">","!!!xs":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">","!!!xxs":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\" \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\">","c":"<!-- |${child} -->","cc:ie6":"<!--[if lte IE 6]>\n\t${child}|\n<![endif]-->","cc:ie":"<!--[if IE]>\n\t${child}|\n<![endif]-->","cc:noie":"<!--[if !IE]><!-->\n\t${child}|\n<!--<![endif]-->"},"abbreviations":{"!":"html:5","a":"<a href=\"\">","a:link":"<a href=\"http://|\">","a:mail":"<a href=\"mailto:|\">","abbr":"<abbr title=\"\">","acronym":"<acronym title=\"\">","base":"<base href=\"\" />","basefont":"<basefont/>","br":"<br/>","frame":"<frame/>","hr":"<hr/>","bdo":"<bdo dir=\"\">","bdo:r":"<bdo dir=\"rtl\">","bdo:l":"<bdo dir=\"ltr\">","col":"<col/>","link":"<link rel=\"stylesheet\" href=\"\" />","link:css":"<link rel=\"stylesheet\" href=\"${1:style}.css\" />","link:print":"<link rel=\"stylesheet\" href=\"${1:print}.css\" media=\"print\" />","link:favicon":"<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"${1:favicon.ico}\" />","link:touch":"<link rel=\"apple-touch-icon\" href=\"${1:favicon.png}\" />","link:rss":"<link rel=\"alternate\" type=\"application/rss+xml\" title=\"RSS\" href=\"${1:rss.xml}\" />","link:atom":"<link rel=\"alternate\" type=\"application/atom+xml\" title=\"Atom\" href=\"${1:atom.xml}\" />","meta":"<meta/>","meta:utf":"<meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\" />","meta:win":"<meta http-equiv=\"Content-Type\" content=\"text/html;charset=windows-1251\" />","meta:vp":"<meta name=\"viewport\" content=\"width=${1:device-width}, user-scalable=${2:no}, initial-scale=${3:1.0}, maximum-scale=${4:1.0}, minimum-scale=${5:1.0}\" />","meta:compat":"<meta http-equiv=\"X-UA-Compatible\" content=\"${1:IE=7}\" />","style":"<style>","script":"<script>","script:src":"<script src=\"\">","img":"<img src=\"\" alt=\"\" />","iframe":"<iframe src=\"\" frameborder=\"0\">","embed":"<embed src=\"\" type=\"\" />","object":"<object data=\"\" type=\"\">","param":"<param name=\"\" value=\"\" />","map":"<map name=\"\">","area":"<area shape=\"\" coords=\"\" href=\"\" alt=\"\" />","area:d":"<area shape=\"default\" href=\"\" alt=\"\" />","area:c":"<area shape=\"circle\" coords=\"\" href=\"\" alt=\"\" />","area:r":"<area shape=\"rect\" coords=\"\" href=\"\" alt=\"\" />","area:p":"<area shape=\"poly\" coords=\"\" href=\"\" alt=\"\" />","form":"<form action=\"\">","form:get":"<form action=\"\" method=\"get\">","form:post":"<form action=\"\" method=\"post\">","label":"<label for=\"\">","input":"<input type=\"${1:text}\" />","inp":"<input type=\"${1:text}\" name=\"\" id=\"\" />","input:hidden":"input[type=hidden name]","input:h":"input:hidden","input:text":"inp","input:t":"inp","input:search":"inp[type=search]","input:email":"inp[type=email]","input:url":"inp[type=url]","input:password":"inp[type=password]","input:p":"input:password","input:datetime":"inp[type=datetime]","input:date":"inp[type=date]","input:datetime-local":"inp[type=datetime-local]","input:month":"inp[type=month]","input:week":"inp[type=week]","input:time":"inp[type=time]","input:number":"inp[type=number]","input:color":"inp[type=color]","input:checkbox":"inp[type=checkbox]","input:c":"input:checkbox","input:radio":"inp[type=radio]","input:r":"input:radio","input:range":"inp[type=range]","input:file":"inp[type=file]","input:f":"input:file","input:submit":"<input type=\"submit\" value=\"\" />","input:s":"input:submit","input:image":"<input type=\"image\" src=\"\" alt=\"\" />","input:i":"input:image","input:button":"<input type=\"button\" value=\"\" />","input:b":"input:button","isindex":"<isindex/>","input:reset":"input:button[type=reset]","select":"<select name=\"\" id=\"\">","select:disabled":"select[disabled]","select:d":"select[disabled]","option":"<option value=\"\">","textarea":"<textarea name=\"\" id=\"\" cols=\"${1:30}\" rows=\"${2:10}\">","marquee":"<marquee behavior=\"\" direction=\"\">","menu:context":"menu[type=context]>","menu:c":"menu:context","menu:toolbar":"menu[type=toolbar]>","menu:t":"menu:toolbar","video":"<video src=\"\">","audio":"<audio src=\"\">","html:xml":"<html xmlns=\"http://www.w3.org/1999/xhtml\">","keygen":"<keygen/>","command":"<command/>","button:submit":"button[type=submit]","button:s":"button[type=submit]","button:reset":"button[type=reset]","button:r":"button[type=reset]","button:disabled":"button[disabled]","button:d":"button[disabled]","fieldset:disabled":"fieldset[disabled]","fieldset:d":"fieldset[disabled]","bq":"blockquote","acr":"acronym","fig":"figure","figc":"figcaption","ifr":"iframe","emb":"embed","obj":"object","src":"source","cap":"caption","colg":"colgroup","fst":"fieldset","fst:d":"fieldset[disabled]","btn":"button","btn:b":"button[type=button]","btn:r":"button[type=reset]","btn:s":"button[type=submit]","btn:d":"button[disabled]","optg":"optgroup","opt":"option","tarea":"textarea","leg":"legend","sect":"section","art":"article","hdr":"header","ftr":"footer","adr":"address","dlg":"dialog","str":"strong","prog":"progress","fset":"fieldset","fset:d":"fieldset[disabled]","datag":"datagrid","datal":"datalist","kg":"keygen","out":"output","det":"details","cmd":"command","doc":"html>(head>meta[charset=UTF-8]+title{${1:Document}})+body","doc4":"html>(head>meta[http-equiv=\"Content-Type\" content=\"text/html;charset=${charset}\"]+title{${1:Document}})+body","html:4t":"!!!4t+doc4[lang=${lang}]","html:4s":"!!!4s+doc4[lang=${lang}]","html:xt":"!!!xt+doc4[xmlns=http://www.w3.org/1999/xhtml xml:lang=${lang}]","html:xs":"!!!xs+doc4[xmlns=http://www.w3.org/1999/xhtml xml:lang=${lang}]","html:xxs":"!!!xxs+doc4[xmlns=http://www.w3.org/1999/xhtml xml:lang=${lang}]","html:5":"!!!+doc[lang=${lang}]","ol+":"ol>li","ul+":"ul>li","dl+":"dl>dt+dd","map+":"map>area","table+":"table>tr>td","colgroup+":"colgroup>col","colg+":"colgroup>col","tr+":"tr>td","select+":"select>option","optgroup+":"optgroup>option","optg+":"optgroup>option"}},"xml":{"extends":"html","profile":"xml","filters":"html"},"xsl":{"extends":"html","profile":"xml","filters":"html, xsl","abbreviations":{"tm":"<xsl:template match=\"\" mode=\"\">","tmatch":"tm","tn":"<xsl:template name=\"\">","tname":"tn","call":"<xsl:call-template name=\"\"/>","ap":"<xsl:apply-templates select=\"\" mode=\"\"/>","api":"<xsl:apply-imports/>","imp":"<xsl:import href=\"\"/>","inc":"<xsl:include href=\"\"/>","ch":"<xsl:choose>","xsl:when":"<xsl:when test=\"\">","wh":"xsl:when","ot":"<xsl:otherwise>","if":"<xsl:if test=\"\">","par":"<xsl:param name=\"\">","pare":"<xsl:param name=\"\" select=\"\"/>","var":"<xsl:variable name=\"\">","vare":"<xsl:variable name=\"\" select=\"\"/>","wp":"<xsl:with-param name=\"\" select=\"\"/>","key":"<xsl:key name=\"\" match=\"\" use=\"\"/>","elem":"<xsl:element name=\"\">","attr":"<xsl:attribute name=\"\">","attrs":"<xsl:attribute-set name=\"\">","cp":"<xsl:copy select=\"\"/>","co":"<xsl:copy-of select=\"\"/>","val":"<xsl:value-of select=\"\"/>","each":"<xsl:for-each select=\"\">","for":"each","tex":"<xsl:text></xsl:text>","com":"<xsl:comment>","msg":"<xsl:message terminate=\"no\">","fall":"<xsl:fallback>","num":"<xsl:number value=\"\"/>","nam":"<namespace-alias stylesheet-prefix=\"\" result-prefix=\"\"/>","pres":"<xsl:preserve-space elements=\"\"/>","strip":"<xsl:strip-space elements=\"\"/>","proc":"<xsl:processing-instruction name=\"\">","sort":"<xsl:sort select=\"\" order=\"\"/>","choose+":"xsl:choose>xsl:when+xsl:otherwise","xsl":"!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{\n|}"},"snippets":{"!!!":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>"}},"haml":{"filters":"haml","extends":"html","profile":"xml"},"scss":{"extends":"css"},"sass":{"extends":"css"},"less":{"extends":"css"},"stylus":{"extends":"css"},"styl":{"extends":"stylus"}};var res=require('resources');var userData=res.getVocabulary('user')||{};res.setVocabulary(require('utils').deepMerge(userData,snippets),'user')});

/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 JS Beautifier
---------------


  Written by Einar Lielmanis, <einar@jsbeautifier.org>
      http://jsbeautifier.org/

  Originally converted to javascript by Vital, <vital76@gmail.com>
  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@gmail.com>


  Usage:
    js_beautify(js_source_text);
    js_beautify(js_source_text, options);

  The options are:
    indent_size (default 4)          - indentation size,
    indent_char (default space)      - character to indent with,
    preserve_newlines (default true) - whether existing line breaks should be preserved,
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

            jslint_happy   !jslint_happy
            ---------------------------------
             function ()      function()

    brace_style (default "collapse") - "collapse" | "expand" | "end-expand"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line.

    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
                be preserved if it were present.

    e.g

    js_beautify(js_source_text, {
      'indent_size': 1,
      'indent_char': '\t'
    });

*/


(function() {
    function js_beautify(js_source_text, options) {
        "use strict";
        var beautifier = new Beautifier(js_source_text, options);
        return beautifier.beautify();
    }

    function Beautifier(js_source_text, options) {
        "use strict";
        var input, output_lines;
        var token_text, token_type, last_type, last_last_text, indent_string;
        var flags, previous_flags, flag_store;
        var whitespace, wordchar, punct, parser_pos, line_starters, digits;
        var prefix;
        var input_wanted_newline;
        var output_wrapped, output_space_before_token;
        var input_length, n_newlines, whitespace_before_token;
        var handlers, MODE, opt;
        var preindent_string = '';

        whitespace = "\n\r\t ".split('');
        wordchar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$'.split('');
        digits = '0123456789'.split('');

        punct = '+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |= ::';
        punct += ' <%= <% %> <?= <? ?>'; // try to be a good boy and try not to break the markup language identifiers
        punct = punct.split(' ');

        // words which should always start on new line.
        line_starters = 'continue,try,throw,return,var,if,switch,case,default,for,while,break,function'.split(',');

        MODE = {
            BlockStatement: 'BlockStatement', // 'BLOCK'
            Statement: 'Statement', // 'STATEMENT'
            ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
            ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
            ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
            Conditional: 'Conditional', //'(COND-EXPRESSION)',
            Expression: 'Expression' //'(EXPRESSION)'
        };

        handlers = {
            'TK_START_EXPR': handle_start_expr,
            'TK_END_EXPR': handle_end_expr,
            'TK_START_BLOCK': handle_start_block,
            'TK_END_BLOCK': handle_end_block,
            'TK_WORD': handle_word,
            'TK_SEMICOLON': handle_semicolon,
            'TK_STRING': handle_string,
            'TK_EQUALS': handle_equals,
            'TK_OPERATOR': handle_operator,
            'TK_COMMA': handle_comma,
            'TK_BLOCK_COMMENT': handle_block_comment,
            'TK_INLINE_COMMENT': handle_inline_comment,
            'TK_COMMENT': handle_comment,
            'TK_DOT': handle_dot,
            'TK_UNKNOWN': handle_unknown
        };

        function create_flags(flags_base, mode) {
            var next_indent_level = 0;
            if (flags_base) {
                next_indent_level = flags_base.indentation_level;
                next_indent_level += (flags_base.var_line && flags_base.var_line_reindented) ? 1 : 0;
                if (!just_added_newline() &&
                    flags_base.line_indent_level > next_indent_level) {
                    next_indent_level = flags_base.line_indent_level;
                }
            }

            var next_flags = {
                mode: mode,
                parent: flags_base,
                last_text: flags_base ? flags_base.last_text : '', // last token text
                last_word: flags_base ? flags_base.last_word : '', // last 'TK_WORD' passed
                var_line: false,
                var_line_tainted: false,
                var_line_reindented: false,
                in_html_comment: false,
                multiline_frame: false,
                if_block: false,
                do_block: false,
                do_while: false,
                in_case_statement: false, // switch(..){ INSIDE HERE }
                in_case: false, // we're on the exact line with "case 0:"
                case_body: false, // the indented case-action block
                indentation_level: next_indent_level,
                line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
                start_line_index: output_lines.length,
                had_comment: false,
                ternary_depth: 0
            }
            return next_flags;
        }

        // Using object instead of string to allow for later expansion of info about each line

        function create_output_line() {
            return {
                text: []
            };
        }

        // Some interpreters have unexpected results with foo = baz || bar;
        options = options ? options : {};
        opt = {};

        // compatibility
        if (options.space_after_anon_function !== undefined && options.jslint_happy === undefined) {
            options.jslint_happy = options.space_after_anon_function;
        }
        if (options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
            opt.brace_style = options.braces_on_own_line ? "expand" : "collapse";
        }
        opt.brace_style = options.brace_style ? options.brace_style : (opt.brace_style ? opt.brace_style : "collapse");

        // graceful handling of deprecated option
        if (opt.brace_style === "expand-strict") {
            opt.brace_style = "expand";
        }


        opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
        opt.indent_char = options.indent_char ? options.indent_char : ' ';
        opt.preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
        opt.break_chained_methods = (options.break_chained_methods === undefined) ? false : options.break_chained_methods;
        opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
        opt.space_in_paren = (options.space_in_paren === undefined) ? false : options.space_in_paren;
        opt.jslint_happy = (options.jslint_happy === undefined) ? false : options.jslint_happy;
        opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? false : options.keep_array_indentation;
        opt.space_before_conditional = (options.space_before_conditional === undefined) ? true : options.space_before_conditional;
        opt.unescape_strings = (options.unescape_strings === undefined) ? false : options.unescape_strings;
        opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
        opt.e4x = (options.e4x === undefined) ? false : options.e4x;

        if(options.indent_with_tabs){
            opt.indent_char = '\t';
            opt.indent_size = 1;
        }

        //----------------------------------
        indent_string = '';
        while (opt.indent_size > 0) {
            indent_string += opt.indent_char;
            opt.indent_size -= 1;
        }

        while (js_source_text && (js_source_text.charAt(0) === ' ' || js_source_text.charAt(0) === '\t')) {
            preindent_string += js_source_text.charAt(0);
            js_source_text = js_source_text.substring(1);
        }
        input = js_source_text;
        // cache the source's length.
        input_length = js_source_text.length;

        last_type = 'TK_START_BLOCK'; // last token type
        last_last_text = ''; // pre-last token text
        output_lines = [create_output_line()];
        output_wrapped = false;
        output_space_before_token = false;
        whitespace_before_token = [];

        // Stack of parsing/formatting states, including MODE.
        // We tokenize, parse, and output in an almost purely a forward-only stream of token input
        // and formatted output.  This makes the beautifier less accurate than full parsers
        // but also far more tolerant of syntax errors.
        //
        // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
        // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
        // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
        // most full parsers would die, but the beautifier gracefully falls back to
        // MODE.BlockStatement and continues on.
        flag_store = [];
        set_mode(MODE.BlockStatement);

        parser_pos = 0;

        this.beautify = function() {
            /*jshint onevar:true */
            var t, i, keep_whitespace, sweet_code;

            while (true) {
                t = get_next_token();
                token_text = t[0];
                token_type = t[1];

                if (token_type === 'TK_EOF') {
                    break;
                }

                keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);
                input_wanted_newline = n_newlines > 0;

                if (keep_whitespace) {
                    for (i = 0; i < n_newlines; i += 1) {
                        print_newline(i > 0);
                    }
                } else {
                    if (opt.max_preserve_newlines && n_newlines > opt.max_preserve_newlines) {
                        n_newlines = opt.max_preserve_newlines;
                    }

                    if (opt.preserve_newlines) {
                        if (n_newlines > 1) {
                            print_newline();
                            for (i = 1; i < n_newlines; i += 1) {
                                print_newline(true);
                            }
                        }
                    }
                }

                handlers[token_type]();

                // The cleanest handling of inline comments is to treat them as though they aren't there.
                // Just continue formatting and the behavior should be logical.
                // Also ignore unknown tokens.  Again, this should result in better behavior.
                if (token_type !== 'TK_INLINE_COMMENT' && token_type !== 'TK_COMMENT' &&
                    token_type !== 'TK_BLOCK_COMMENT' && token_type !== 'TK_UNKNOWN') {
                    last_last_text = flags.last_text;
                    last_type = token_type;
                    flags.last_text = token_text;
                }
                flags.had_comment = (token_type === 'TK_INLINE_COMMENT' || token_type === 'TK_COMMENT'
                    || token_type === 'TK_BLOCK_COMMENT');
            }


            sweet_code = output_lines[0].text.join('');
            for (var line_index = 1; line_index < output_lines.length; line_index++) {
                sweet_code += '\n' + output_lines[line_index].text.join('');
            }
            sweet_code = sweet_code.replace(/[\r\n ]+$/, '');
            return sweet_code;
        };

        function trim_output(eat_newlines) {
            eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

            if (output_lines.length) {
                trim_output_line(output_lines[output_lines.length - 1], eat_newlines);

                while (eat_newlines && output_lines.length > 1 &&
                    output_lines[output_lines.length - 1].text.length === 0) {
                    output_lines.pop();
                    trim_output_line(output_lines[output_lines.length - 1], eat_newlines);
                }
            }
        }

        function trim_output_line(line) {
            while (line.text.length &&
                (line.text[line.text.length - 1] === ' ' ||
                    line.text[line.text.length - 1] === indent_string ||
                    line.text[line.text.length - 1] === preindent_string)) {
                line.text.pop();
            }
        }

        function trim(s) {
            return s.replace(/^\s+|\s+$/g, '');
        }

        // we could use just string.split, but
        // IE doesn't like returning empty strings

        function split_newlines(s) {
            //return s.split(/\x0d\x0a|\x0a/);

            s = s.replace(/\x0d/g, '');
            var out = [],
                idx = s.indexOf("\n");
            while (idx !== -1) {
                out.push(s.substring(0, idx));
                s = s.substring(idx + 1);
                idx = s.indexOf("\n");
            }
            if (s.length) {
                out.push(s);
            }
            return out;
        }

        function just_added_newline() {
            var line = output_lines[output_lines.length - 1];
            return line.text.length === 0;
        }

        function just_added_blankline() {
            if (just_added_newline()) {
                if (output_lines.length === 1) {
                    return true; // start of the file and newline = blank
                }

                var line = output_lines[output_lines.length - 2];
                return line.text.length === 0;
            }
            return false;
        }

        function allow_wrap_or_preserved_newline(force_linewrap) {
            force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;
            if (opt.wrap_line_length && !force_linewrap) {
                var line = output_lines[output_lines.length - 1];
                var proposed_line_length = 0;
                // never wrap the first token of a line.
                if (line.text.length > 0) {
                    proposed_line_length = line.text.join('').length + token_text.length +
                        (output_space_before_token ? 1 : 0);
                    if (proposed_line_length >= opt.wrap_line_length) {
                        force_linewrap = true;
                    }
                }
            }
            if (((opt.preserve_newlines && input_wanted_newline) || force_linewrap) && !just_added_newline()) {
                print_newline(false, true);

                // Expressions and array literals already indent their contents.
                if (!(is_array(flags.mode) || is_expression(flags.mode))) {
                    output_wrapped = true;
                }
            }
        }

        function print_newline(force_newline, preserve_statement_flags) {
            output_wrapped = false;
            output_space_before_token = false;

            if (!preserve_statement_flags) {
                if (flags.last_text !== ';') {
                    while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
                        restore_mode();
                    }
                }
            }

            if (output_lines.length === 1 && just_added_newline()) {
                return; // no newline on start of file
            }

            if (force_newline || !just_added_newline()) {
                flags.multiline_frame = true;
                output_lines.push(create_output_line());
            }
        }

        function print_token_line_indentation() {
            if (just_added_newline()) {
                var line = output_lines[output_lines.length - 1];
                if (opt.keep_array_indentation && is_array(flags.mode) && input_wanted_newline) {
                    // prevent removing of this whitespace as redundant
                    line.text.push('');
                    for (var i = 0; i < whitespace_before_token.length; i += 1) {
                        line.text.push(whitespace_before_token[i]);
                    }
                } else {
                    if (preindent_string) {
                        line.text.push(preindent_string);
                    }

                    print_indent_string(flags.indentation_level +
                        (flags.var_line && flags.var_line_reindented ? 1 : 0) +
                        (output_wrapped ? 1 : 0));
                }
            }
        }

        function print_indent_string(level) {
            // Never indent your first output indent at the start of the file
            if (output_lines.length > 1) {
                var line = output_lines[output_lines.length - 1];

                flags.line_indent_level = level;
                for (var i = 0; i < level; i += 1) {
                    line.text.push(indent_string);
                }
            }
        }

        function print_token_space_before() {
            var line = output_lines[output_lines.length - 1];
            if (output_space_before_token && line.text.length) {
                var last_output = line.text[line.text.length - 1];
                if (last_output !== ' ' && last_output !== indent_string) { // prevent occassional duplicate space
                    line.text.push(' ');
                }
            }
        }

        function print_token(printable_token) {
            printable_token = printable_token || token_text;
            print_token_line_indentation();
            output_wrapped = false;
            print_token_space_before();
            output_space_before_token = false;
            output_lines[output_lines.length - 1].text.push(printable_token);
        }

        function indent() {
            flags.indentation_level += 1;
        }

        function deindent() {
            if (flags.indentation_level > 0 &&
                ((!flags.parent) || flags.indentation_level > flags.parent.indentation_level))
                flags.indentation_level -= 1;
        }

        function remove_redundant_indentation(frame) {
            // This implementation is effective but has some issues:
            //     - less than great performance due to array splicing
            //     - can cause line wrap to happen too soon due to indent removal
            //           after wrap points are calculated
            // These issues are minor compared to ugly indentation.

            if (frame.multiline_frame) return;

            // remove one indent from each line inside this section
            var index = frame.start_line_index;
            var splice_index = 0;
            var line;

            while (index < output_lines.length) {
                line = output_lines[index];
                index++;

                // skip empty lines
                if (line.text.length === 0) {
                    continue;
                }

                // skip the preindent string if present
                if (preindent_string && line.text[0] === preindent_string) {
                    splice_index = 1;
                } else {
                    splice_index = 0;
                }

                // remove one indent, if present
                if (line.text[splice_index] === indent_string) {
                    line.text.splice(splice_index, 1);
                }
            }
        }

        function set_mode(mode) {
            if (flags) {
                flag_store.push(flags);
                previous_flags = flags;
            } else {
                previous_flags = create_flags(null, mode);
            }

            flags = create_flags(previous_flags, mode);
        }

        function is_array(mode) {
            return mode === MODE.ArrayLiteral;
        }

        function is_expression(mode) {
            return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
        }

        function restore_mode() {
            if (flag_store.length > 0) {
                previous_flags = flags;
                flags = flag_store.pop();
            }
        }

        function start_of_object_property() {
            return flags.mode === MODE.ObjectLiteral && flags.last_text === ':' &&
                flags.ternary_depth === 0;
        }

        function start_of_statement() {
            if (
                (flags.last_text === 'do' ||
                    (flags.last_text === 'else' && token_text !== 'if') ||
                    (last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)))) {
                // Issue #276:
                // If starting a new statement with [if, for, while, do], push to a new line.
                // if (a) if (b) if(c) d(); else e(); else f();
                allow_wrap_or_preserved_newline(
                    in_array(token_text, ['do', 'for', 'if', 'while']));

                set_mode(MODE.Statement);
                // Issue #275:
                // If starting on a newline, all of a statement should be indented.
                // if not, use line wrapping logic for indent.
                if (just_added_newline()) {
                    indent();
                    output_wrapped = false;
                }
                return true;
            }
            return false;
        }

        function all_lines_start_with(lines, c) {
            for (var i = 0; i < lines.length; i++) {
                var line = trim(lines[i]);
                if (line.charAt(0) !== c) {
                    return false;
                }
            }
            return true;
        }

        function is_special_word(word) {
            return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
        }

        function in_array(what, arr) {
            for (var i = 0; i < arr.length; i += 1) {
                if (arr[i] === what) {
                    return true;
                }
            }
            return false;
        }

        function unescape_string(s) {
            var esc = false,
                out = '',
                pos = 0,
                s_hex = '',
                escaped = 0,
                c;

            while (esc || pos < s.length) {

                c = s.charAt(pos);
                pos++;

                if (esc) {
                    esc = false;
                    if (c === 'x') {
                        // simple hex-escape \x24
                        s_hex = s.substr(pos, 2);
                        pos += 2;
                    } else if (c === 'u') {
                        // unicode-escape, \u2134
                        s_hex = s.substr(pos, 4);
                        pos += 4;
                    } else {
                        // some common escape, e.g \n
                        out += '\\' + c;
                        continue;
                    }
                    if (!s_hex.match(/^[0123456789abcdefABCDEF]+$/)) {
                        // some weird escaping, bail out,
                        // leaving whole string intact
                        return s;
                    }

                    escaped = parseInt(s_hex, 16);

                    if (escaped >= 0x00 && escaped < 0x20) {
                        // leave 0x00...0x1f escaped
                        if (c === 'x') {
                            out += '\\x' + s_hex;
                        } else {
                            out += '\\u' + s_hex;
                        }
                        continue;
                    } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
                        // single-quote, apostrophe, backslash - escape these
                        out += '\\' + String.fromCharCode(escaped);
                    } else if (c === 'x' && escaped > 0x7e && escaped <= 0xff) {
                        // we bail out on \x7f..\xff,
                        // leaving whole string escaped,
                        // as it's probably completely binary
                        return s;
                    } else {
                        out += String.fromCharCode(escaped);
                    }
                } else if (c === '\\') {
                    esc = true;
                } else {
                    out += c;
                }
            }
            return out;
        }

        function is_next(find) {
            var local_pos = parser_pos;
            var c = input.charAt(local_pos);
            while (in_array(c, whitespace) && c !== find) {
                local_pos++;
                if (local_pos >= input_length) {
                    return false;
                }
                c = input.charAt(local_pos);
            }
            return c === find;
        }

        function get_next_token() {
            var i, resulting_string;

            n_newlines = 0;

            if (parser_pos >= input_length) {
                return ['', 'TK_EOF'];
            }

            input_wanted_newline = false;
            whitespace_before_token = [];

            var c = input.charAt(parser_pos);
            parser_pos += 1;

            while (in_array(c, whitespace)) {

                if (c === '\n') {
                    n_newlines += 1;
                    whitespace_before_token = [];
                } else if (n_newlines) {
                    if (c === indent_string) {
                        whitespace_before_token.push(indent_string);
                    } else if (c !== '\r') {
                        whitespace_before_token.push(' ');
                    }
                }

                if (parser_pos >= input_length) {
                    return ['', 'TK_EOF'];
                }

                c = input.charAt(parser_pos);
                parser_pos += 1;
            }

            if (in_array(c, wordchar)) {
                if (parser_pos < input_length) {
                    while (in_array(input.charAt(parser_pos), wordchar)) {
                        c += input.charAt(parser_pos);
                        parser_pos += 1;
                        if (parser_pos === input_length) {
                            break;
                        }
                    }
                }

                // small and surprisingly unugly hack for 1E-10 representation
                if (parser_pos !== input_length && c.match(/^[0-9]+[Ee]$/) && (input.charAt(parser_pos) === '-' || input.charAt(parser_pos) === '+')) {

                    var sign = input.charAt(parser_pos);
                    parser_pos += 1;

                    var t = get_next_token();
                    c += sign + t[0];
                    return [c, 'TK_WORD'];
                }

                if (c === 'in') { // hack for 'in' operator
                    return [c, 'TK_OPERATOR'];
                }
                return [c, 'TK_WORD'];
            }

            if (c === '(' || c === '[') {
                return [c, 'TK_START_EXPR'];
            }

            if (c === ')' || c === ']') {
                return [c, 'TK_END_EXPR'];
            }

            if (c === '{') {
                return [c, 'TK_START_BLOCK'];
            }

            if (c === '}') {
                return [c, 'TK_END_BLOCK'];
            }

            if (c === ';') {
                return [c, 'TK_SEMICOLON'];
            }

            if (c === '/') {
                var comment = '';
                // peek for comment /* ... */
                var inline_comment = true;
                if (input.charAt(parser_pos) === '*') {
                    parser_pos += 1;
                    if (parser_pos < input_length) {
                        while (parser_pos < input_length && !(input.charAt(parser_pos) === '*' && input.charAt(parser_pos + 1) && input.charAt(parser_pos + 1) === '/')) {
                            c = input.charAt(parser_pos);
                            comment += c;
                            if (c === "\n" || c === "\r") {
                                inline_comment = false;
                            }
                            parser_pos += 1;
                            if (parser_pos >= input_length) {
                                break;
                            }
                        }
                    }
                    parser_pos += 2;
                    if (inline_comment && n_newlines === 0) {
                        return ['/*' + comment + '*/', 'TK_INLINE_COMMENT'];
                    } else {
                        return ['/*' + comment + '*/', 'TK_BLOCK_COMMENT'];
                    }
                }
                // peek for comment // ...
                if (input.charAt(parser_pos) === '/') {
                    comment = c;
                    while (input.charAt(parser_pos) !== '\r' && input.charAt(parser_pos) !== '\n') {
                        comment += input.charAt(parser_pos);
                        parser_pos += 1;
                        if (parser_pos >= input_length) {
                            break;
                        }
                    }
                    return [comment, 'TK_COMMENT'];
                }

            }


            if (c === "'" || c === '"' || // string
                (
                    (c === '/') || // regexp
                    (opt.e4x && c === "<" && input.slice(parser_pos - 1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])\s*([-a-zA-Z:0-9_.]+=('[^']*'|"[^"]*"|{[^{}]*})\s*)*\/?\s*>/)) // xml
                ) && ( // regex and xml can only appear in specific locations during parsing
                    (last_type === 'TK_WORD' && is_special_word(flags.last_text)) ||
                    (last_type === 'TK_END_EXPR' && in_array(previous_flags.mode, [MODE.Conditional, MODE.ForInitializer])) ||
                    (in_array(last_type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK',
                        'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'
                    ]))
                )) {

                var sep = c,
                    esc = false,
                    has_char_escapes = false;

                resulting_string = c;

                if (parser_pos < input_length) {
                    if (sep === '/') {
                        //
                        // handle regexp
                        //
                        var in_char_class = false;
                        while (esc || in_char_class || input.charAt(parser_pos) !== sep) {
                            resulting_string += input.charAt(parser_pos);
                            if (!esc) {
                                esc = input.charAt(parser_pos) === '\\';
                                if (input.charAt(parser_pos) === '[') {
                                    in_char_class = true;
                                } else if (input.charAt(parser_pos) === ']') {
                                    in_char_class = false;
                                }
                            } else {
                                esc = false;
                            }
                            parser_pos += 1;
                            if (parser_pos >= input_length) {
                                // incomplete string/rexp when end-of-file reached.
                                // bail out with what had been received so far.
                                return [resulting_string, 'TK_STRING'];
                            }
                        }
                    } else if (opt.e4x && sep === '<') {
                        //
                        // handle e4x xml literals
                        //
                        var xmlRegExp = /<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])\s*([-a-zA-Z:0-9_.]+=('[^']*'|"[^"]*"|{[^{}]*})\s*)*(\/?)\s*>/g;
                        var xmlStr = input.slice(parser_pos - 1);
                        var match = xmlRegExp.exec(xmlStr);
                        if (match && match.index === 0) {
                            var rootTag = match[2];
                            var depth = 0;
                            while (match) {
                                var isEndTag = !! match[1];
                                var tagName = match[2];
                                var isSingletonTag = ( !! match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
                                if (tagName === rootTag && !isSingletonTag) {
                                    if (isEndTag) {
                                        --depth;
                                    } else {
                                        ++depth;
                                    }
                                }
                                if (depth <= 0) {
                                    break;
                                }
                                match = xmlRegExp.exec(xmlStr);
                            }
                            var xmlLength = match ? match.index + match[0].length : xmlStr.length;
                            parser_pos += xmlLength - 1;
                            return [xmlStr.slice(0, xmlLength), "TK_STRING"];
                        }
                    } else {
                        //
                        // handle string
                        //
                        while (esc || input.charAt(parser_pos) !== sep) {
                            resulting_string += input.charAt(parser_pos);
                            if (esc) {
                                if (input.charAt(parser_pos) === 'x' || input.charAt(parser_pos) === 'u') {
                                    has_char_escapes = true;
                                }
                                esc = false;
                            } else {
                                esc = input.charAt(parser_pos) === '\\';
                            }
                            parser_pos += 1;
                            if (parser_pos >= input_length) {
                                // incomplete string/rexp when end-of-file reached.
                                // bail out with what had been received so far.
                                return [resulting_string, 'TK_STRING'];
                            }
                        }

                    }
                }

                parser_pos += 1;
                resulting_string += sep;

                if (has_char_escapes && opt.unescape_strings) {
                    resulting_string = unescape_string(resulting_string);
                }

                if (sep === '/') {
                    // regexps may have modifiers /regexp/MOD , so fetch those, too
                    while (parser_pos < input_length && in_array(input.charAt(parser_pos), wordchar)) {
                        resulting_string += input.charAt(parser_pos);
                        parser_pos += 1;
                    }
                }
                return [resulting_string, 'TK_STRING'];
            }

            if (c === '#') {


                if (output_lines.length === 1 && output_lines[0].text.length === 0 &&
                    input.charAt(parser_pos) === '!') {
                    // shebang
                    resulting_string = c;
                    while (parser_pos < input_length && c !== '\n') {
                        c = input.charAt(parser_pos);
                        resulting_string += c;
                        parser_pos += 1;
                    }
                    return [trim(resulting_string) + '\n', 'TK_UNKNOWN'];
                }



                // Spidermonkey-specific sharp variables for circular references
                // https://developer.mozilla.org/En/Sharp_variables_in_JavaScript
                // http://mxr.mozilla.org/mozilla-central/source/js/src/jsscan.cpp around line 1935
                var sharp = '#';
                if (parser_pos < input_length && in_array(input.charAt(parser_pos), digits)) {
                    do {
                        c = input.charAt(parser_pos);
                        sharp += c;
                        parser_pos += 1;
                    } while (parser_pos < input_length && c !== '#' && c !== '=');
                    if (c === '#') {
                        //
                    } else if (input.charAt(parser_pos) === '[' && input.charAt(parser_pos + 1) === ']') {
                        sharp += '[]';
                        parser_pos += 2;
                    } else if (input.charAt(parser_pos) === '{' && input.charAt(parser_pos + 1) === '}') {
                        sharp += '{}';
                        parser_pos += 2;
                    }
                    return [sharp, 'TK_WORD'];
                }
            }

            if (c === '<' && input.substring(parser_pos - 1, parser_pos + 3) === '<!--') {
                parser_pos += 3;
                c = '<!--';
                while (input.charAt(parser_pos) !== '\n' && parser_pos < input_length) {
                    c += input.charAt(parser_pos);
                    parser_pos++;
                }
                flags.in_html_comment = true;
                return [c, 'TK_COMMENT'];
            }

            if (c === '-' && flags.in_html_comment && input.substring(parser_pos - 1, parser_pos + 2) === '-->') {
                flags.in_html_comment = false;
                parser_pos += 2;
                return ['-->', 'TK_COMMENT'];
            }

            if (c === '.') {
                return [c, 'TK_DOT'];
            }

            if (in_array(c, punct)) {
                while (parser_pos < input_length && in_array(c + input.charAt(parser_pos), punct)) {
                    c += input.charAt(parser_pos);
                    parser_pos += 1;
                    if (parser_pos >= input_length) {
                        break;
                    }
                }

                if (c === ',') {
                    return [c, 'TK_COMMA'];
                } else if (c === '=') {
                    return [c, 'TK_EQUALS'];
                } else {
                    return [c, 'TK_OPERATOR'];
                }
            }

            return [c, 'TK_UNKNOWN'];
        }

        function handle_start_expr() {
            if (start_of_statement()) {
                // The conditional starts the statement if appropriate.
            }

            var next_mode = MODE.Expression;
            if (token_text === '[') {

                if (last_type === 'TK_WORD' || flags.last_text === ')') {
                    // this is array index specifier, break immediately
                    // a[x], fn()[x]
                    if (in_array(flags.last_text, line_starters)) {
                        output_space_before_token = true;
                    }
                    set_mode(next_mode);
                    print_token();
                    indent();
                    if (opt.space_in_paren) {
                        output_space_before_token = true;
                    }
                    return;
                }

                next_mode = MODE.ArrayLiteral;
                if (is_array(flags.mode)) {
                    if (flags.last_text === '[' ||
                        (flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {
                        // ], [ goes to new line
                        // }, [ goes to new line
                        if (!opt.keep_array_indentation) {
                            print_newline();
                        }
                    }
                }

            } else {
                if (flags.last_text === 'for') {
                    next_mode = MODE.ForInitializer;
                } else if (in_array(flags.last_text, ['if', 'while'])) {
                    next_mode = MODE.Conditional;
                } else {
                    // next_mode = MODE.Expression;
                }
            }

            if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
                print_newline();
            } else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
                // TODO: Consider whether forcing this is required.  Review failing tests when removed.
                allow_wrap_or_preserved_newline(input_wanted_newline);
                output_wrapped = false;
                // do nothing on (( and )( and ][ and ]( and .(
            } else if (last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
                output_space_before_token = true;
            } else if (flags.last_word === 'function' || flags.last_word === 'typeof') {
                // function() vs function ()
                if (opt.jslint_happy) {
                    output_space_before_token = true;
                }
            } else if (in_array(flags.last_text, line_starters) || flags.last_text === 'catch') {
                if (opt.space_before_conditional) {
                    output_space_before_token = true;
                }
            }

            // Support of this kind of newline preservation.
            // a = (b &&
            //     (c || d));
            if (token_text === '(') {
                if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                    if (!start_of_object_property()) {
                        allow_wrap_or_preserved_newline();
                    }
                }
            }

            set_mode(next_mode);
            print_token();
            if (opt.space_in_paren) {
                output_space_before_token = true;
            }

            // In all cases, if we newline while inside an expression it should be indented.
            indent();
        }

        function handle_end_expr() {
            // statements inside expressions are not valid syntax, but...
            // statements must all be closed when their container closes
            while (flags.mode === MODE.Statement) {
                restore_mode();
            }

            if (token_text === ']' && is_array(flags.mode) && flags.multiline_frame && !opt.keep_array_indentation) {
                print_newline();
            }

            if (flags.multiline_frame) {
                allow_wrap_or_preserved_newline();
            }
            if (opt.space_in_paren) {
                if (last_type === 'TK_START_EXPR') {
                    // () [] no inner space in empty parens like these, ever, ref #320
                    trim_output();
                    output_space_before_token = false;
                } else {
                    output_space_before_token = true;
                }
            }
            if (token_text === ']' && opt.keep_array_indentation) {
                print_token();
                restore_mode();
            } else {
                restore_mode();
                print_token();
            }
            remove_redundant_indentation(previous_flags);

            // do {} while () // no statement required after
            if (flags.do_while && previous_flags.mode === MODE.Conditional) {
                previous_flags.mode = MODE.Expression;
                flags.do_block = false;
                flags.do_while = false;

            }
        }

        function handle_start_block() {
            set_mode(MODE.BlockStatement);

            var empty_braces = is_next('}');
            var empty_anonymous_function = empty_braces && flags.last_word === 'function' &&
                last_type === 'TK_END_EXPR';

            if (opt.brace_style === "expand") {
                if (last_type !== 'TK_OPERATOR' &&
                    (empty_anonymous_function ||
                        last_type === 'TK_EQUALS' ||
                        (is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
                    output_space_before_token = true;
                } else {
                    print_newline();
                }
            } else { // collapse
                if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
                    if (last_type === 'TK_START_BLOCK') {
                        print_newline();
                    } else {
                        output_space_before_token = true;
                    }
                } else {
                    // if TK_OPERATOR or TK_START_EXPR
                    if (is_array(previous_flags.mode) && flags.last_text === ',') {
                        if (last_last_text === '}') {
                            // }, { in array context
                            output_space_before_token = true;
                        } else {
                            print_newline(); // [a, b, c, {
                        }
                    }
                }
            }
            print_token();
            indent();
        }

        function handle_end_block() {
            // statements must all be closed when their container closes
            while (flags.mode === MODE.Statement) {
                restore_mode();
            }
            var empty_braces = last_type === 'TK_START_BLOCK';

            if (opt.brace_style === "expand") {
                if (!empty_braces) {
                    print_newline();
                }
            } else {
                // skip {}
                if (!empty_braces) {
                    if (is_array(flags.mode) && opt.keep_array_indentation) {
                        // we REALLY need a newline here, but newliner would skip that
                        opt.keep_array_indentation = false;
                        print_newline();
                        opt.keep_array_indentation = true;

                    } else {
                        print_newline();
                    }
                }
            }
            restore_mode();
            print_token();
        }

        function handle_word() {
            if (start_of_statement()) {
                // The conditional starts the statement if appropriate.
            } else if (input_wanted_newline && !is_expression(flags.mode) &&
                (last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) &&
                last_type !== 'TK_EQUALS' &&
                (opt.preserve_newlines || flags.last_text !== 'var')) {

                print_newline();
            }

            if (flags.do_block && !flags.do_while) {
                if (token_text === 'while') {
                    // do {} ## while ()
                    output_space_before_token = true;
                    print_token();
                    output_space_before_token = true;
                    flags.do_while = true;
                    return;
                } else {
                    // do {} should always have while as the next word.
                    // if we don't see the expected while, recover
                    print_newline();
                    flags.do_block = false;
                }
            }

            // if may be followed by else, or not
            // Bare/inline ifs are tricky
            // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
            if (flags.if_block) {
                if (token_text !== 'else') {
                    while (flags.mode === MODE.Statement) {
                        restore_mode();
                    }
                    flags.if_block = false;
                }
            }

            if (token_text === 'case' || (token_text === 'default' && flags.in_case_statement)) {
                print_newline();
                if (flags.case_body || opt.jslint_happy) {
                    // switch cases following one another
                    deindent();
                    flags.case_body = false;
                }
                print_token();
                flags.in_case = true;
                flags.in_case_statement = true;
                return;
            }

            if (token_text === 'function') {
                if (flags.var_line && last_type !== 'TK_EQUALS') {
                    flags.var_line_reindented = true;
                }
                if (in_array(flags.last_text, ['}', ';']) || (just_added_newline() && ! in_array(flags.last_text, ['{', ':', '=', ',']))) {
                    // make sure there is a nice clean space of at least one blank line
                    // before a new function definition
                    if ( ! just_added_blankline() && ! flags.had_comment) {
                        print_newline();
                        print_newline(true);
                    }
                }
                if (last_type === 'TK_WORD') {
                    if (flags.last_text === 'get' || flags.last_text === 'set' || flags.last_text === 'new' || flags.last_text === 'return') {
                        output_space_before_token = true;
                    } else {
                        print_newline();
                    }
                } else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
                    // foo = function
                    output_space_before_token = true;
                } else if (is_expression(flags.mode)) {
                    // (function
                } else {
                    print_newline();
                }
            }

            if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                if (!start_of_object_property()) {
                    allow_wrap_or_preserved_newline();
                }
            }

            if (token_text === 'function') {
                print_token();
                flags.last_word = token_text;
                return;
            }

            prefix = 'NONE';

            if (last_type === 'TK_END_BLOCK') {
                if (!in_array(token_text, ['else', 'catch', 'finally'])) {
                    prefix = 'NEWLINE';
                } else {
                    if (opt.brace_style === "expand" || opt.brace_style === "end-expand") {
                        prefix = 'NEWLINE';
                    } else {
                        prefix = 'SPACE';
                        output_space_before_token = true;
                    }
                }
            } else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
                // TODO: Should this be for STATEMENT as well?
                prefix = 'NEWLINE';
            } else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
                prefix = 'SPACE';
            } else if (last_type === 'TK_STRING') {
                prefix = 'NEWLINE';
            } else if (last_type === 'TK_WORD') {
                prefix = 'SPACE';
            } else if (last_type === 'TK_START_BLOCK') {
                prefix = 'NEWLINE';
            } else if (last_type === 'TK_END_EXPR') {
                output_space_before_token = true;
                prefix = 'NEWLINE';
            }

            if (in_array(token_text, line_starters) && flags.last_text !== ')') {
                if (flags.last_text === 'else') {
                    prefix = 'SPACE';
                } else {
                    prefix = 'NEWLINE';
                }

            }

            if (in_array(token_text, ['else', 'catch', 'finally'])) {
                if (last_type !== 'TK_END_BLOCK' || opt.brace_style === "expand" || opt.brace_style === "end-expand") {
                    print_newline();
                } else {
                    trim_output(true);
                    var line = output_lines[output_lines.length - 1];
                    // If we trimmed and there's something other than a close block before us
                    // put a newline back in.  Handles '} // comment' scenario.
                    if (line.text[line.text.length - 1] !== '}') {
                        print_newline();
                    }
                    output_space_before_token = true;
                }
            } else if (prefix === 'NEWLINE') {
                if (is_special_word(flags.last_text)) {
                    // no newline between 'return nnn'
                    output_space_before_token = true;
                } else if (last_type !== 'TK_END_EXPR') {
                    if ((last_type !== 'TK_START_EXPR' || token_text !== 'var') && flags.last_text !== ':') {
                        // no need to force newline on 'var': for (var x = 0...)
                        if (token_text === 'if' && flags.last_word === 'else' && flags.last_text !== '{') {
                            // no newline for } else if {
                            output_space_before_token = true;
                        } else {
                            flags.var_line = false;
                            flags.var_line_reindented = false;
                            print_newline();
                        }
                    }
                } else if (in_array(token_text, line_starters) && flags.last_text !== ')') {
                    flags.var_line = false;
                    flags.var_line_reindented = false;
                    print_newline();
                }
            } else if (is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
                print_newline(); // }, in lists get a newline treatment
            } else if (prefix === 'SPACE') {
                output_space_before_token = true;
            }
            print_token();
            flags.last_word = token_text;

            if (token_text === 'var') {
                flags.var_line = true;
                flags.var_line_reindented = false;
                flags.var_line_tainted = false;
            }

            if (token_text === 'do') {
                flags.do_block = true;
            }

            if (token_text === 'if') {
                flags.if_block = true;
            }
        }

        function handle_semicolon() {
            if (start_of_statement()) {
                // The conditional starts the statement if appropriate.
                // Semicolon can be the start (and end) of a statement
                output_space_before_token = false;
            }
            while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
                restore_mode();
            }
            print_token();
            flags.var_line = false;
            flags.var_line_reindented = false;
            if (flags.mode === MODE.ObjectLiteral) {
                // if we're in OBJECT mode and see a semicolon, its invalid syntax
                // recover back to treating this as a BLOCK
                flags.mode = MODE.BlockStatement;
            }
        }

        function handle_string() {
            if (start_of_statement()) {
                // The conditional starts the statement if appropriate.
                // One difference - strings want at least a space before
                output_space_before_token = true;
            } else if (last_type === 'TK_WORD') {
                output_space_before_token = true;
            } else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                if (!start_of_object_property()) {
                    allow_wrap_or_preserved_newline();
                }
            } else {
                print_newline();
            }
            print_token();
        }

        function handle_equals() {
            if (flags.var_line) {
                // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
                flags.var_line_tainted = true;
            }
            output_space_before_token = true;
            print_token();
            output_space_before_token = true;
        }

        function handle_comma() {
            if (flags.var_line) {
                if (is_expression(flags.mode) || last_type === 'TK_END_BLOCK') {
                    // do not break on comma, for(var a = 1, b = 2)
                    flags.var_line_tainted = false;
                }

                if (flags.var_line) {
                    flags.var_line_reindented = true;
                }

                print_token();

                if (flags.var_line_tainted) {
                    flags.var_line_tainted = false;
                    print_newline();
                } else {
                    output_space_before_token = true;
                }
                return;
            }

            if (last_type === 'TK_END_BLOCK' && flags.mode !== MODE.Expression) {
                print_token();
                if (flags.mode === MODE.ObjectLiteral && flags.last_text === '}') {
                    print_newline();
                } else {
                    output_space_before_token = true;
                }
            } else {
                if (flags.mode === MODE.ObjectLiteral) {
                    print_token();
                    print_newline();
                } else {
                    // EXPR or DO_BLOCK
                    print_token();
                    output_space_before_token = true;
                }
            }
        }

        function handle_operator() {
            var space_before = true;
            var space_after = true;
            if (is_special_word(flags.last_text)) {
                // "return" had a special handling in TK_WORD. Now we need to return the favor
                output_space_before_token = true;
                print_token();
                return;
            }

            // hack for actionscript's import .*;
            if (token_text === '*' && last_type === 'TK_DOT' && !last_last_text.match(/^\d+$/)) {
                print_token();
                return;
            }

            if (token_text === ':' && flags.in_case) {
                flags.case_body = true;
                indent();
                print_token();
                print_newline();
                flags.in_case = false;
                return;
            }

            if (token_text === '::') {
                // no spaces around exotic namespacing syntax operator
                print_token();
                return;
            }

            // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
            // if there is a newline between -- or ++ and anything else we should preserve it.
            if (input_wanted_newline && (token_text === '--' || token_text === '++')) {
                print_newline();
            }

            if (in_array(token_text, ['--', '++', '!']) || (in_array(token_text, ['-', '+']) && (in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) || in_array(flags.last_text, line_starters) || flags.last_text === ','))) {
                // unary operators (and binary +/- pretending to be unary) special cases

                space_before = false;
                space_after = false;

                if (flags.last_text === ';' && is_expression(flags.mode)) {
                    // for (;; ++i)
                    //        ^^^
                    space_before = true;
                }

                if (last_type === 'TK_WORD' && in_array(flags.last_text, line_starters)) {
                    space_before = true;
                }

                if ((flags.mode === MODE.BlockStatement || flags.mode === MODE.Statement) && (flags.last_text === '{' || flags.last_text === ';')) {
                    // { foo; --i }
                    // foo(); --bar;
                    print_newline();
                }
            } else if (token_text === ':') {
                if (flags.ternary_depth === 0) {
                    if (flags.mode === MODE.BlockStatement) {
                        flags.mode = MODE.ObjectLiteral;
                    }
                    space_before = false;
                } else {
                    flags.ternary_depth -= 1;
                }
            } else if (token_text === '?') {
                flags.ternary_depth += 1;
            }
            output_space_before_token = output_space_before_token || space_before;
            print_token();
            output_space_before_token = space_after;
        }

        function handle_block_comment() {
            var lines = split_newlines(token_text);
            var j; // iterator for this case
            var javadoc = false;

            // block comment starts with a new line
            print_newline(false, true);
            if (lines.length > 1) {
                if (all_lines_start_with(lines.slice(1), '*')) {
                    javadoc = true;
                }
            }

            // first line always indented
            print_token(lines[0]);
            for (j = 1; j < lines.length; j++) {
                print_newline(false, true);
                if (javadoc) {
                    // javadoc: reformat and re-indent
                    print_token(' ' + trim(lines[j]));
                } else {
                    // normal comments output raw
                    output_lines[output_lines.length - 1].text.push(lines[j]);
                }
            }

            // for comments of more than one line, make sure there's a new line after
            print_newline(false, true);
        }

        function handle_inline_comment() {
            output_space_before_token = true;
            print_token();
            output_space_before_token = true;
        }

        function handle_comment() {
            if (input_wanted_newline) {
                print_newline(false, true);
            } else {
                trim_output(true);
            }

            output_space_before_token = true;
            print_token();
            print_newline(false, true);
        }

        function handle_dot() {
            if (is_special_word(flags.last_text)) {
                output_space_before_token = true;
            } else {
                // allow preserved newlines before dots in general
                // force newlines on dots after close paren when break_chained - for bar().baz()
                allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
            }

            print_token();
        }

        function handle_unknown() {
            print_token();

            if (token_text[token_text.length - 1] === '\n') {
                print_newline();
            }
        }
    }


    if (typeof define === "function") {
        // Add support for require.js
        if (typeof define.amd === "undefined") {
            define(function(require, exports, module) {
                exports.js_beautify = js_beautify;
            });
        } else {
            // if is AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
            define([], function() {
                return js_beautify;
            });
        }

    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var js_beautify = require("beautify").js_beautify`.
        exports.js_beautify = js_beautify;
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.js_beautify = js_beautify;
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.js_beautify = js_beautify;
    }

}());

/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 Style HTML
---------------

  Written by Nochum Sossonko, (nsossonko@hotmail.com)

  Based on code initially developed by: Einar Lielmanis, <elfz@laacz.lv>
    http://jsbeautifier.org/

  Usage:
    style_html(html_source);

    style_html(html_source, options);

  The options are:
    indent_inner_html (default false)  — indent <head> and <body> sections,
    indent_size (default 4)          — indentation size,
    indent_char (default space)      — character to indent with,
    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
    brace_style (default "collapse") - "collapse" | "expand" | "end-expand"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line.
    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
    indent_scripts (default normal)  - "keep"|"separate"|"normal"
    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
                                        Only works before elements, not inside tags or for text.
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}

    e.g.

    style_html(html_source, {
      'indent_inner_html': false,
      'indent_size': 2,
      'indent_char': ' ',
      'wrap_line_length': 78,
      'brace_style': 'expand',
      'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u'],
      'preserve_newlines': true,
      'max_preserve_newlines': 5,
      'indent_handlebars': false
    });
*/

(function() {

    function trim(s) {
        return s.replace(/^\s+|\s+$/g, '');
    }

    function ltrim(s) {
        return s.replace(/^\s+/g, '');
    }

    function style_html(html_source, options, js_beautify, css_beautify) {
        //Wrapper function to invoke all the necessary constructors and deal with the output.

        var multi_parser,
            indent_inner_html,
            indent_size,
            indent_character,
            wrap_line_length,
            brace_style,
            unformatted,
            preserve_newlines,
            max_preserve_newlines;

        options = options || {};

        // backwards compatibility to 1.3.4
        if ((options.wrap_line_length === undefined || parseInt(options.wrap_line_length, 10) === 0) &&
                (options.max_char === undefined || parseInt(options.max_char, 10) === 0)) {
            options.wrap_line_length = options.max_char;
        }

        indent_inner_html = options.indent_inner_html || false;
        indent_size = parseInt(options.indent_size || 4, 10);
        indent_character = options.indent_char || ' ';
        brace_style = options.brace_style || 'collapse';
        wrap_line_length =  parseInt(options.wrap_line_length, 10) === 0 ? 32786 : parseInt(options.wrap_line_length || 250, 10);
        unformatted = options.unformatted || ['a', 'span', 'bdo', 'em', 'strong', 'dfn', 'code', 'samp', 'kbd', 'var', 'cite', 'abbr', 'acronym', 'q', 'sub', 'sup', 'tt', 'i', 'b', 'big', 'small', 'u', 's', 'strike', 'font', 'ins', 'del', 'pre', 'address', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        preserve_newlines = options.preserve_newlines || true;
        max_preserve_newlines = preserve_newlines ? parseInt(options.max_preserve_newlines || 32786, 10) : 0;
        indent_handlebars = options.indent_handlebars || false;

        function Parser() {

            this.pos = 0; //Parser position
            this.token = '';
            this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
            this.tags = { //An object to hold tags, their position, and their parent-tags, initiated with default values
                parent: 'parent1',
                parentcount: 1,
                parent1: ''
            };
            this.tag_type = '';
            this.token_text = this.last_token = this.last_text = this.token_type = '';
            this.newlines = 0;
            this.indent_content = indent_inner_html;

            this.Utils = { //Uilities made available to the various functions
                whitespace: "\n\r\t ".split(''),
                single_token: 'br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?='.split(','), //all the single tags for HTML
                extra_liners: 'head,body,/html'.split(','), //for tags that need a line of whitespace before them
                in_array: function(what, arr) {
                    for (var i = 0; i < arr.length; i++) {
                        if (what === arr[i]) {
                            return true;
                        }
                    }
                    return false;
                }
            };

            this.traverse_whitespace = function() {
                var input_char = '';

                input_char = this.input.charAt(this.pos);
                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                    this.newlines = 0;
                    while (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                        if (preserve_newlines && input_char === '\n' && this.newlines <= max_preserve_newlines) {
                            this.newlines += 1;
                        }

                        this.pos++;
                        input_char = this.input.charAt(this.pos);
                    }
                    return true;
                }
                return false;
            };

            this.get_content = function() { //function to capture regular content between tags

                var input_char = '',
                    content = [],
                    space = false; //if a space is needed

                while (this.input.charAt(this.pos) !== '<') {
                    if (this.pos >= this.input.length) {
                        return content.length ? content.join('') : ['', 'TK_EOF'];
                    }

                    if (this.traverse_whitespace()) {
                        if (content.length) {
                            space = true;
                        }
                        continue; //don't want to insert unnecessary space
                    }

                    if (indent_handlebars) {
                        // Handlebars parsing is complicated.
                        // {{#foo}} and {{/foo}} are formatted tags.
                        // {{something}} should get treated as content, except:
                        // {{else}} specifically behaves like {{#if}} and {{/if}}
                        var peek3 = this.input.substr(this.pos, 3);
                        if (peek3 === '{{#' || peek3 === '{{/') {
                            // These are tags and not content.
                            break;
                        } else if (this.input.substr(this.pos, 2) === '{{') {
                            if (this.get_tag(true) === '{{else}}') {
                                break;
                            }
                        }
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;

                    if (space) {
                        if (this.line_char_count >= this.wrap_line_length) { //insert a line when the wrap_line_length is reached
                            this.print_newline(false, content);
                            this.print_indentation(content);
                        } else {
                            this.line_char_count++;
                            content.push(' ');
                        }
                        space = false;
                    }
                    this.line_char_count++;
                    content.push(input_char); //letter at-a-time (or string) inserted to an array
                }
                return content.length ? content.join('') : '';
            };

            this.get_contents_to = function(name) { //get the full content of a script or style to pass to js_beautify
                if (this.pos === this.input.length) {
                    return ['', 'TK_EOF'];
                }
                var input_char = '';
                var content = '';
                var reg_match = new RegExp('</' + name + '\\s*>', 'igm');
                reg_match.lastIndex = this.pos;
                var reg_array = reg_match.exec(this.input);
                var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script
                if (this.pos < end_script) { //get everything in between the script tags
                    content = this.input.substring(this.pos, end_script);
                    this.pos = end_script;
                }
                return content;
            };

            this.record_tag = function(tag) { //function to record a tag and its parent in this.tags Object
                if (this.tags[tag + 'count']) { //check for the existence of this tag type
                    this.tags[tag + 'count']++;
                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
                } else { //otherwise initialize this tag type
                    this.tags[tag + 'count'] = 1;
                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
                }
                this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
                this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
            };

            this.retrieve_tag = function(tag) { //function to retrieve the opening tag to the corresponding closer
                if (this.tags[tag + 'count']) { //if the openener is not in the Object we ignore it
                    var temp_parent = this.tags.parent; //check to see if it's a closable tag.
                    while (temp_parent) { //till we reach '' (the initial value);
                        if (tag + this.tags[tag + 'count'] === temp_parent) { //if this is it use it
                            break;
                        }
                        temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
                    }
                    if (temp_parent) { //if we caught something
                        this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
                        this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
                    }
                    delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
                    delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
                    if (this.tags[tag + 'count'] === 1) {
                        delete this.tags[tag + 'count'];
                    } else {
                        this.tags[tag + 'count']--;
                    }
                }
            };

            this.indent_to_tag = function(tag) {
                // Match the indentation level to the last use of this tag, but don't remove it.
                if (!this.tags[tag + 'count']) {
                    return;
                }
                var temp_parent = this.tags.parent;
                while (temp_parent) {
                    if (tag + this.tags[tag + 'count'] === temp_parent) {
                        break;
                    }
                    temp_parent = this.tags[temp_parent + 'parent'];
                }
                if (temp_parent) {
                    this.indent_level = this.tags[tag + this.tags[tag + 'count']];
                }
            };

            this.get_tag = function(peek) { //function to get a full tag and parse its type
                var input_char = '',
                    content = [],
                    comment = '',
                    space = false,
                    tag_start, tag_end,
                    tag_start_char,
                    orig_pos = this.pos,
                    orig_line_char_count = this.line_char_count;

                peek = peek !== undefined ? peek : false;

                do {
                    if (this.pos >= this.input.length) {
                        if (peek) {
                            this.pos = orig_pos;
                            this.line_char_count = orig_line_char_count;
                        }
                        return content.length ? content.join('') : ['', 'TK_EOF'];
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;

                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) { //don't want to insert unnecessary space
                        space = true;
                        continue;
                    }

                    if (input_char === "'" || input_char === '"') {
                        input_char += this.get_unformatted(input_char);
                        space = true;

                    }

                    if (input_char === '=') { //no space before =
                        space = false;
                    }

                    if (content.length && content[content.length - 1] !== '=' && input_char !== '>' && space) {
                        //no space after = or before >
                        if (this.line_char_count >= this.wrap_line_length) {
                            this.print_newline(false, content);
                            this.print_indentation(content);
                        } else {
                            content.push(' ');
                            this.line_char_count++;
                        }
                        space = false;
                    }

                    if (indent_handlebars && tag_start_char === '<') {
                        // When inside an angle-bracket tag, put spaces around
                        // handlebars not inside of strings.
                        if ((input_char + this.input.charAt(this.pos)) === '{{') {
                            input_char += this.get_unformatted('}}');
                            if (content.length && content[content.length - 1] !== ' ' && content[content.length - 1] !== '<') {
                                input_char = ' ' + input_char;
                            }
                            space = true;
                        }
                    }

                    if (input_char === '<' && !tag_start_char) {
                        tag_start = this.pos - 1;
                        tag_start_char = '<';
                    }

                    if (indent_handlebars && !tag_start_char) {
                        if (content.length >= 2 && content[content.length - 1] === '{' && content[content.length - 2] == '{') {
                            if (input_char === '#' || input_char === '/') {
                                tag_start = this.pos - 3;
                            } else {
                                tag_start = this.pos - 2;
                            }
                            tag_start_char = '{';
                        }
                    }

                    this.line_char_count++;
                    content.push(input_char); //inserts character at-a-time (or string)

                    if (content[1] && content[1] === '!') { //if we're in a comment, do something special
                        // We treat all comments as literals, even more than preformatted tags
                        // we just look for the appropriate close tag
                        content = [this.get_comment(tag_start)];
                        break;
                    }

                    if (indent_handlebars && tag_start_char === '{' && content.length > 2 && content[content.length - 2] === '}' && content[content.length - 1] === '}') {
                        break;
                    }
                } while (input_char !== '>');

                var tag_complete = content.join('');
                var tag_index;
                var tag_offset;

                if (tag_complete.indexOf(' ') !== -1) { //if there's whitespace, thats where the tag name ends
                    tag_index = tag_complete.indexOf(' ');
                } else if (tag_complete[0] === '{') {
                    tag_index = tag_complete.indexOf('}');
                } else { //otherwise go with the tag ending
                    tag_index = tag_complete.indexOf('>');
                }
                if (tag_complete[0] === '<' || !indent_handlebars) {
                    tag_offset = 1;
                } else {
                    tag_offset = tag_complete[2] === '#' ? 3 : 2;
                }
                var tag_check = tag_complete.substring(tag_offset, tag_index).toLowerCase();
                if (tag_complete.charAt(tag_complete.length - 2) === '/' ||
                    this.Utils.in_array(tag_check, this.Utils.single_token)) { //if this tag name is a single tag type (either in the list or has a closing /)
                    if (!peek) {
                        this.tag_type = 'SINGLE';
                    }
                } else if (indent_handlebars && tag_complete[0] === '{' && tag_check === 'else') {
                    if (!peek) {
                        this.indent_to_tag('if');
                        this.tag_type = 'HANDLEBARS_ELSE';
                        this.indent_content = true;
                        this.traverse_whitespace();
                    }
                } else if (tag_check === 'script') { //for later script handling
                    if (!peek) {
                        this.record_tag(tag_check);
                        this.tag_type = 'SCRIPT';
                    }
                } else if (tag_check === 'style') { //for future style handling (for now it justs uses get_content)
                    if (!peek) {
                        this.record_tag(tag_check);
                        this.tag_type = 'STYLE';
                    }
                } else if (this.is_unformatted(tag_check, unformatted)) { // do not reformat the "unformatted" tags
                    comment = this.get_unformatted('</' + tag_check + '>', tag_complete); //...delegate to get_unformatted function
                    content.push(comment);
                    // Preserve collapsed whitespace either before or after this tag.
                    if (tag_start > 0 && this.Utils.in_array(this.input.charAt(tag_start - 1), this.Utils.whitespace)) {
                        content.splice(0, 0, this.input.charAt(tag_start - 1));
                    }
                    tag_end = this.pos - 1;
                    if (this.Utils.in_array(this.input.charAt(tag_end + 1), this.Utils.whitespace)) {
                        content.push(this.input.charAt(tag_end + 1));
                    }
                    this.tag_type = 'SINGLE';
                } else if (tag_check.charAt(0) === '!') { //peek for <! comment
                    // for comments content is already correct.
                    if (!peek) {
                        this.tag_type = 'SINGLE';
                        this.traverse_whitespace();
                    }
                } else if (!peek) {
                    if (tag_check.charAt(0) === '/') { //this tag is a double tag so check for tag-ending
                        this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
                        this.tag_type = 'END';
                        this.traverse_whitespace();
                    } else { //otherwise it's a start-tag
                        this.record_tag(tag_check); //push it on the tag stack
                        if (tag_check.toLowerCase() !== 'html') {
                            this.indent_content = true;
                        }
                        this.tag_type = 'START';

                        // Allow preserving of newlines after a start tag
                        this.traverse_whitespace();
                    }
                    if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) { //check if this double needs an extra line
                        this.print_newline(false, this.output);
                        if (this.output.length && this.output[this.output.length - 2] !== '\n') {
                            this.print_newline(true, this.output);
                        }
                    }
                }

                if (peek) {
                    this.pos = orig_pos;
                    this.line_char_count = orig_line_char_count;
                }

                return content.join(''); //returns fully formatted tag
            };

            this.get_comment = function(start_pos) { //function to return comment content in its entirety
                // this is will have very poor perf, but will work for now.
                var comment = '',
                    delimiter = '>',
                    matched = false;

                this.pos = start_pos;
                input_char = this.input.charAt(this.pos);
                this.pos++;

                while (this.pos <= this.input.length) {
                    comment += input_char;

                    // only need to check for the delimiter if the last chars match
                    if (comment[comment.length - 1] === delimiter[delimiter.length - 1] &&
                        comment.indexOf(delimiter) !== -1) {
                        break;
                    }

                    // only need to search for custom delimiter for the first few characters
                    if (!matched && comment.length < 10) {
                        if (comment.indexOf('<![if') === 0) { //peek for <![if conditional comment
                            delimiter = '<![endif]>';
                            matched = true;
                        } else if (comment.indexOf('<![cdata[') === 0) { //if it's a <[cdata[ comment...
                            delimiter = ']]>';
                            matched = true;
                        } else if (comment.indexOf('<![') === 0) { // some other ![ comment? ...
                            delimiter = ']>';
                            matched = true;
                        } else if (comment.indexOf('<!--') === 0) { // <!-- comment ...
                            delimiter = '-->';
                            matched = true;
                        }
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;
                }

                return comment;
            };

            this.get_unformatted = function(delimiter, orig_tag) { //function to return unformatted content in its entirety

                if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) !== -1) {
                    return '';
                }
                var input_char = '';
                var content = '';
                var min_index = 0;
                var space = true;
                do {

                    if (this.pos >= this.input.length) {
                        return content;
                    }

                    input_char = this.input.charAt(this.pos);
                    this.pos++;

                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
                        if (!space) {
                            this.line_char_count--;
                            continue;
                        }
                        if (input_char === '\n' || input_char === '\r') {
                            content += '\n';
                            /*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
                for (var i=0; i<this.indent_level; i++) {
                  content += this.indent_string;
                }
                space = false; //...and make sure other indentation is erased
                */
                            this.line_char_count = 0;
                            continue;
                        }
                    }
                    content += input_char;
                    this.line_char_count++;
                    space = true;

                    if (indent_handlebars && input_char === '{' && content.length && content[content.length - 2] === '{') {
                        // Handlebars expressions in strings should also be unformatted.
                        content += this.get_unformatted('}}');
                        // These expressions are opaque.  Ignore delimiters found in them.
                        min_index = content.length;
                    }
                } while (content.toLowerCase().indexOf(delimiter, min_index) === -1);
                return content;
            };

            this.get_token = function() { //initial handler for token-retrieval
                var token;

                if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') { //check if we need to format javascript
                    var type = this.last_token.substr(7);
                    token = this.get_contents_to(type);
                    if (typeof token !== 'string') {
                        return token;
                    }
                    return [token, 'TK_' + type];
                }
                if (this.current_mode === 'CONTENT') {
                    token = this.get_content();
                    if (typeof token !== 'string') {
                        return token;
                    } else {
                        return [token, 'TK_CONTENT'];
                    }
                }

                if (this.current_mode === 'TAG') {
                    token = this.get_tag();
                    if (typeof token !== 'string') {
                        return token;
                    } else {
                        var tag_name_type = 'TK_TAG_' + this.tag_type;
                        return [token, tag_name_type];
                    }
                }
            };

            this.get_full_indent = function(level) {
                level = this.indent_level + level || 0;
                if (level < 1) {
                    return '';
                }

                return Array(level + 1).join(this.indent_string);
            };

            this.is_unformatted = function(tag_check, unformatted) {
                //is this an HTML5 block-level link?
                if (!this.Utils.in_array(tag_check, unformatted)) {
                    return false;
                }

                if (tag_check.toLowerCase() !== 'a' || !this.Utils.in_array('a', unformatted)) {
                    return true;
                }

                //at this point we have an  tag; is its first child something we want to remain
                //unformatted?
                var next_tag = this.get_tag(true /* peek. */ );

                // tets next_tag to see if it is just html tag (no external content)
                var tag = (next_tag || "").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);

                // if next_tag comes back but is not an isolated tag, then
                // let's treat the 'a' tag as having content
                // and respect the unformatted option
                if (!tag || this.Utils.in_array(tag, unformatted)) {
                    return true;
                } else {
                    return false;
                }
            };

            this.printer = function(js_source, indent_character, indent_size, wrap_line_length, brace_style) { //handles input/output and some other printing functions

                this.input = js_source || ''; //gets the input for the Parser
                this.output = [];
                this.indent_character = indent_character;
                this.indent_string = '';
                this.indent_size = indent_size;
                this.brace_style = brace_style;
                this.indent_level = 0;
                this.wrap_line_length = wrap_line_length;
                this.line_char_count = 0; //count to see if wrap_line_length was exceeded

                for (var i = 0; i < this.indent_size; i++) {
                    this.indent_string += this.indent_character;
                }

                this.print_newline = function(force, arr) {
                    this.line_char_count = 0;
                    if (!arr || !arr.length) {
                        return;
                    }
                    if (force || (arr[arr.length - 1] !== '\n')) { //we might want the extra line
                        arr.push('\n');
                    }
                };

                this.print_indentation = function(arr) {
                    for (var i = 0; i < this.indent_level; i++) {
                        arr.push(this.indent_string);
                        this.line_char_count += this.indent_string.length;
                    }
                };

                this.print_token = function(text) {
                    if (text || text !== '') {
                        if (this.output.length && this.output[this.output.length - 1] === '\n') {
                            this.print_indentation(this.output);
                            text = ltrim(text);
                        }
                    }
                    this.print_token_raw(text);
                };

                this.print_token_raw = function(text) {
                    if (text && text !== '') {
                        if (text.length > 1 && text[text.length - 1] === '\n') {
                            // unformatted tags can grab newlines as their last character
                            this.output.push(text.slice(0, -1));
                            this.print_newline(false, this.output);
                        } else {
                            this.output.push(text);
                        }
                    }

                    for (var n = 0; n < this.newlines; n++) {
                        this.print_newline(n > 0, this.output);
                    }
                    this.newlines = 0;
                };

                this.indent = function() {
                    this.indent_level++;
                };

                this.unindent = function() {
                    if (this.indent_level > 0) {
                        this.indent_level--;
                    }
                };
            };
            return this;
        }

        /*_____________________--------------------_____________________*/

        multi_parser = new Parser(); //wrapping functions Parser
        multi_parser.printer(html_source, indent_character, indent_size, wrap_line_length, brace_style); //initialize starting values

        while (true) {
            var t = multi_parser.get_token();
            multi_parser.token_text = t[0];
            multi_parser.token_type = t[1];

            if (multi_parser.token_type === 'TK_EOF') {
                break;
            }

            switch (multi_parser.token_type) {
                case 'TK_TAG_START':
                    multi_parser.print_newline(false, multi_parser.output);
                    multi_parser.print_token(multi_parser.token_text);
                    if (multi_parser.indent_content) {
                        multi_parser.indent();
                        multi_parser.indent_content = false;
                    }
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_STYLE':
                case 'TK_TAG_SCRIPT':
                    multi_parser.print_newline(false, multi_parser.output);
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_END':
                    //Print new line only if the tag has no content and has child
                    if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
                        var tag_name = multi_parser.token_text.match(/\w+/)[0];
                        var tag_extracted_from_last_output = null;
                        if (multi_parser.output.length) {
                            tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/(?:<|{{#)\s*(\w+)/);
                        }
                        if (tag_extracted_from_last_output === null ||
                            tag_extracted_from_last_output[1] !== tag_name) {
                            multi_parser.print_newline(false, multi_parser.output);
                        }
                    }
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_SINGLE':
                    // Don't add a newline before elements that should remain unformatted.
                    var tag_check = multi_parser.token_text.match(/^\s*<([a-z]+)/i);
                    if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
                        multi_parser.print_newline(false, multi_parser.output);
                    }
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_TAG_HANDLEBARS_ELSE':
                    multi_parser.print_token(multi_parser.token_text);
                    if (multi_parser.indent_content) {
                        multi_parser.indent();
                        multi_parser.indent_content = false;
                    }
                    multi_parser.current_mode = 'CONTENT';
                    break;
                case 'TK_CONTENT':
                    multi_parser.print_token(multi_parser.token_text);
                    multi_parser.current_mode = 'TAG';
                    break;
                case 'TK_STYLE':
                case 'TK_SCRIPT':
                    if (multi_parser.token_text !== '') {
                        multi_parser.print_newline(false, multi_parser.output);
                        var text = multi_parser.token_text,
                            _beautifier,
                            script_indent_level = 1;
                        if (multi_parser.token_type === 'TK_SCRIPT') {
                            _beautifier = typeof js_beautify === 'function' && js_beautify;
                        } else if (multi_parser.token_type === 'TK_STYLE') {
                            _beautifier = typeof css_beautify === 'function' && css_beautify;
                        }

                        if (options.indent_scripts === "keep") {
                            script_indent_level = 0;
                        } else if (options.indent_scripts === "separate") {
                            script_indent_level = -multi_parser.indent_level;
                        }

                        var indentation = multi_parser.get_full_indent(script_indent_level);
                        if (_beautifier) {
                            // call the Beautifier if avaliable
                            text = _beautifier(text.replace(/^\s*/, indentation), options);
                        } else {
                            // simply indent the string otherwise
                            var white = text.match(/^\s*/)[0];
                            var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
                            var reindent = multi_parser.get_full_indent(script_indent_level - _level);
                            text = text.replace(/^\s*/, indentation)
                                .replace(/\r\n|\r|\n/g, '\n' + reindent)
                                .replace(/\s+$/, '');
                        }
                        if (text) {
                            multi_parser.print_token_raw(indentation + trim(text));
                            multi_parser.print_newline(false, multi_parser.output);
                        }
                    }
                    multi_parser.current_mode = 'TAG';
                    break;
            }
            multi_parser.last_token = multi_parser.token_type;
            multi_parser.last_text = multi_parser.token_text;
        }
        return multi_parser.output.join('');
    }

    if (typeof define === "function") {
        // Add support for require.js
        define(["./beautify.js", "./beautify-css.js"], function(js_beautify, css_beautify) {
            return {
              html_beautify: function(html_source, options) {
                return style_html(html_source, options, js_beautify, css_beautify);
              }
            };
        });
    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
        var js_beautify = require('./beautify.js').js_beautify;
        var css_beautify = require('./beautify-css.js').css_beautify;

        exports.html_beautify = function(html_source, options) {
            return style_html(html_source, options, js_beautify, css_beautify);
        };
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.html_beautify = function(html_source, options) {
            return style_html(html_source, options, window.js_beautify, window.css_beautify);
        };
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.html_beautify = function(html_source, options) {
            return style_html(html_source, options, global.js_beautify, global.css_beautify);
        };
    }

}());

/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


 CSS Beautifier
---------------

    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

    Based on code initially developed by: Einar Lielmanis, <elfz@laacz.lv>
        http://jsbeautifier.org/

    Usage:
        css_beautify(source_text);
        css_beautify(source_text, options);

    The options are (default in brackets):
        indent_size (4)                   — indentation size,
        indent_char (space)               — character to indent with,
        selector_separator_newline (true) - separate selectors with newline or
                                            not (e.g. "a,\nbr" or "a, br")
        end_with_newline (false)          - end with a newline

    e.g

    css_beautify(css_source_text, {
      'indent_size': 1,
      'indent_char': '\t',
      'selector_separator': ' ',
      'end_with_newline': false,
    });
*/

// http://www.w3.org/TR/CSS21/syndata.html#tokenization
// http://www.w3.org/TR/css3-syntax/

(function () {
    function css_beautify(source_text, options) {
        options = options || {};
        var indentSize = options.indent_size || 4;
        var indentCharacter = options.indent_char || ' ';
        var selectorSeparatorNewline = true;
        if (options.selector_separator_newline != undefined)
            selectorSeparatorNewline = options.selector_separator_newline;
        var endWithNewline = options.end_with_newline || false;

        // compatibility
        if (typeof indentSize === "string") {
            indentSize = parseInt(indentSize, 10);
        }


        // tokenizer
        var whiteRe = /^\s+$/;
        var wordRe = /[\w$\-_]/;

        var pos = -1,
            ch;

        function next() {
            ch = source_text.charAt(++pos);
            return ch;
        }

        function peek() {
            return source_text.charAt(pos + 1);
        }

        function eatString(endChar) {
            var start = pos;
            while (next()) {
                if (ch === "\\") {
                    next();
                    next();
                } else if (ch === endChar) {
                    break;
                } else if (ch === "\n") {
                    break;
                }
            }
            return source_text.substring(start, pos + 1);
        }

        function eatWhitespace() {
            var start = pos;
            while (whiteRe.test(peek())) {
                pos++;
            }
            return pos !== start;
        }

        function skipWhitespace() {
            var start = pos;
            do {} while (whiteRe.test(next()));
            return pos !== start + 1;
        }

        function eatComment() {
            var start = pos;
            next();
            while (next()) {
                if (ch === "*" && peek() === "/") {
                    pos++;
                    break;
                }
            }

            return source_text.substring(start, pos + 1);
        }


        function lookBack(str) {
            return source_text.substring(pos - str.length, pos).toLowerCase() ===
                str;
        }

        // printer
        var indentString = source_text.match(/^[\r\n]*[\t ]*/)[0];
        var singleIndent = Array(indentSize + 1).join(indentCharacter);
        var indentLevel = 0;

        function indent() {
            indentLevel++;
            indentString += singleIndent;
        }

        function outdent() {
            indentLevel--;
            indentString = indentString.slice(0, -indentSize);
        }

        var print = {};
        print["{"] = function (ch) {
            print.singleSpace();
            output.push(ch);
            print.newLine();
        };
        print["}"] = function (ch) {
            print.newLine();
            output.push(ch);
            print.newLine();
        };

        print._lastCharWhitespace = function () {
            return whiteRe.test(output[output.length - 1]);
        }

        print.newLine = function (keepWhitespace) {
            if (!keepWhitespace) {
                while (print._lastCharWhitespace()) {
                    output.pop();
                }
            }

            if (output.length) {
                output.push('\n');
            }
            if (indentString) {
                output.push(indentString);
            }
        };
        print.singleSpace = function () {
            if (output.length && !print._lastCharWhitespace()) {
                output.push(' ');
            }
        };
        var output = [];
        if (indentString) {
            output.push(indentString);
        }
        /*_____________________--------------------_____________________*/

        var insideRule = false;
        while (true) {
            var isAfterSpace = skipWhitespace();

            if (!ch) {
                break;
            } else if (ch === '/' && peek() === '*') { // comment
                print.newLine();
                output.push(eatComment(), "\n", indentString);
                var header = lookBack("")
                if (header) {
                    print.newLine();
                }
            } else if (ch === '{') {
                eatWhitespace();
                if (peek() == '}') {
                    next();
                    output.push(" {}");
                } else {
                    indent();
                    print["{"](ch);
                }
            } else if (ch === '}') {
                outdent();
                print["}"](ch);
                insideRule = false;
            } else if (ch === ":") {
                eatWhitespace();
                output.push(ch, " ");
                insideRule = true;
            } else if (ch === '"' || ch === '\'') {
                output.push(eatString(ch));
            } else if (ch === ';') {
                output.push(ch, '\n', indentString);
            } else if (ch === '(') { // may be a url
                if (lookBack("url")) {
                    output.push(ch);
                    eatWhitespace();
                    if (next()) {
                        if (ch !== ')' && ch !== '"' && ch !== '\'') {
                            output.push(eatString(')'));
                        } else {
                            pos--;
                        }
                    }
                } else {
                    if (isAfterSpace) {
                        print.singleSpace();
                    }
                    output.push(ch);
                    eatWhitespace();
                }
            } else if (ch === ')') {
                output.push(ch);
            } else if (ch === ',') {
                eatWhitespace();
                output.push(ch);
                if (!insideRule && selectorSeparatorNewline) {
                    print.newLine();
                } else {
                    print.singleSpace();
                }
            } else if (ch === ']') {
                output.push(ch);
            } else if (ch === '[' || ch === '=') { // no whitespace before or after
                eatWhitespace();
                output.push(ch);
            } else {
                if (isAfterSpace) {
                    print.singleSpace();
                }

                output.push(ch);
            }
        }


        var sweetCode = output.join('').replace(/[\n ]+$/, '');

        // establish end_with_newline
        var should = endWithNewline;
        var actually = /\n$/.test(sweetCode)
        if (should && !actually)
            sweetCode += "\n";
        else if (!should && actually)
            sweetCode = sweetCode.slice(0, -1);

        return sweetCode;
    }

    if (typeof define === "function") {
        // Add support for require.js
        define(function (require, exports, module) {
            exports.css_beautify = css_beautify;
        });
    } else if (typeof exports !== "undefined") {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
        exports.css_beautify = css_beautify;
    } else if (typeof window !== "undefined") {
        // If we're running a web page and don't have either of the above, add our one global
        window.css_beautify = css_beautify;
    } else if (typeof global !== "undefined") {
        // If we don't even have window, try global.
        global.css_beautify = css_beautify;
    }

}());
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2013, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,
  blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i+1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item[item.length-1] === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: cap[1] === 'pre' || cap[1] === 'script',
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1][cap[1].length-1] === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1][6] === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // url (gfm)
    if (cap = this.rules.url.exec(src)) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0][0];
        src = cap[0].substring(1) + src;
        continue;
      }
      out += this.outputLink(cap, link);
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<strong>'
        + this.output(cap[2] || cap[1])
        + '</strong>';
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<em>'
        + this.output(cap[2] || cap[1])
        + '</em>';
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<code>'
        + escape(cap[2], true)
        + '</code>';
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<br>';
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<del>'
        + this.output(cap[1])
        + '</del>';
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(this.smartypants(cap[0]));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  if (cap[0][0] !== '!') {
    return '<a href="'
      + escape(link.href)
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>'
      + this.output(cap[1])
      + '</a>';
  } else {
    return '<img src="'
      + escape(link.href)
      + '" alt="'
      + escape(cap[1])
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>';
  }
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    .replace(/--/g, '\u2014')
    .replace(/'([^']*)'/g, '\u2018$1\u2019')
    .replace(/"([^"]*)"/g, '\u201C$1\u201D')
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length-1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return '<hr>\n';
    }
    case 'heading': {
      return '<h'
        + this.token.depth
        + '>'
        + this.inline.output(this.token.text)
        + '</h'
        + this.token.depth
        + '>\n';
    }
    case 'code': {
      if (this.options.highlight) {
        var code = this.options.highlight(this.token.text, this.token.lang);
        if (code != null && code !== this.token.text) {
          this.token.escaped = true;
          this.token.text = code;
        }
      }

      if (!this.token.escaped) {
        this.token.text = escape(this.token.text, true);
      }

      return '<pre><code'
        + (this.token.lang
        ? ' class="'
        + this.options.langPrefix
        + this.token.lang
        + '"'
        : '')
        + '>'
        + this.token.text
        + '</code></pre>\n';
    }
    case 'table': {
      var body = ''
        , heading
        , i
        , row
        , cell
        , j;

      // header
      body += '<thead>\n<tr>\n';
      for (i = 0; i < this.token.header.length; i++) {
        heading = this.inline.output(this.token.header[i]);
        body += this.token.align[i]
          ? '<th align="' + this.token.align[i] + '">' + heading + '</th>\n'
          : '<th>' + heading + '</th>\n';
      }
      body += '</tr>\n</thead>\n';

      // body
      body += '<tbody>\n'
      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];
        body += '<tr>\n';
        for (j = 0; j < row.length; j++) {
          cell = this.inline.output(row[j]);
          body += this.token.align[j]
            ? '<td align="' + this.token.align[j] + '">' + cell + '</td>\n'
            : '<td>' + cell + '</td>\n';
        }
        body += '</tr>\n';
      }
      body += '</tbody>\n';

      return '<table>\n'
        + body
        + '</table>\n';
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return '<blockquote>\n'
        + body
        + '</blockquote>\n';
    }
    case 'list_start': {
      var type = this.token.ordered ? 'ol' : 'ul'
        , body = '';

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return '<'
        + type
        + '>\n'
        + body
        + '</'
        + type
        + '>\n';
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'html': {
      return !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
    }
    case 'paragraph': {
      return '<p>'
        + this.inline.output(this.token.text)
        + '</p>\n';
    }
    case 'text': {
      return '<p>'
        + this.parseText()
        + '</p>\n';
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    if (opt) opt = merge({}, marked.defaults, opt);

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(hi) {
      var out, err;

      if (hi !== true) {
        delete opt.highlight;
      }

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done(true);
    }

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/*! 
 * LESS - Leaner CSS v1.5.0 
 * http://lesscss.org 
 * 
 * Copyright (c) 2009-2013, Alexis Sellier <self@cloudhead.net> 
 * Licensed under the Apache v2 License. 
 * 
 * @licence 
 */ 



(function (window, undefined) {//
// Stub out `require` in the browser
//
function require(arg) {
    return window.less[arg.split('/')[1]];
};


if (typeof(window.less) === 'undefined' || typeof(window.less.nodeType) !== 'undefined') { window.less = {}; }
less = window.less;
tree = window.less.tree = {};
less.mode = 'browser';

var less, tree;

// Node.js does not have a header file added which defines less
if (less === undefined) {
    less = exports;
    tree = require('./tree');
    less.mode = 'node';
}
//
// less.js - parser
//
//    A relatively straight-forward predictive parser.
//    There is no tokenization/lexing stage, the input is parsed
//    in one sweep.
//
//    To make the parser fast enough to run in the browser, several
//    optimization had to be made:
//
//    - Matching and slicing on a huge input is often cause of slowdowns.
//      The solution is to chunkify the input into smaller strings.
//      The chunks are stored in the `chunks` var,
//      `j` holds the current chunk index, and `current` holds
//      the index of the current chunk in relation to `input`.
//      This gives us an almost 4x speed-up.
//
//    - In many cases, we don't need to match individual tokens;
//      for example, if a value doesn't hold any variables, operations
//      or dynamic references, the parser can effectively 'skip' it,
//      treating it as a literal.
//      An example would be '1px solid #000' - which evaluates to itself,
//      we don't need to know what the individual components are.
//      The drawback, of course is that you don't get the benefits of
//      syntax-checking on the CSS. This gives us a 50% speed-up in the parser,
//      and a smaller speed-up in the code-gen.
//
//
//    Token matching is done with the `$` function, which either takes
//    a terminal string or regexp, or a non-terminal function to call.
//    It also takes care of moving all the indices forwards.
//
//
less.Parser = function Parser(env) {
    var input,       // LeSS input string
        i,           // current index in `input`
        j,           // current chunk
        temp,        // temporarily holds a chunk's state, for backtracking
        memo,        // temporarily holds `i`, when backtracking
        furthest,    // furthest index the parser has gone to
        chunks,      // chunkified input
        current,     // index of current chunk, in `input`
        parser,
        rootFilename = env && env.filename;

    // Top parser on an import tree must be sure there is one "env"
    // which will then be passed around by reference.
    if (!(env instanceof tree.parseEnv)) {
        env = new tree.parseEnv(env);
    }

    var imports = this.imports = {
        paths: env.paths || [],  // Search paths, when importing
        queue: [],               // Files which haven't been imported yet
        files: env.files,        // Holds the imported parse trees
        contents: env.contents,  // Holds the imported file contents
        mime:  env.mime,         // MIME type of .less files
        error: null,             // Error in parsing/evaluating an import
        push: function (path, currentFileInfo, importOptions, callback) {
            var parserImports = this;
            this.queue.push(path);

            var fileParsedFunc = function (e, root, fullPath) {
                parserImports.queue.splice(parserImports.queue.indexOf(path), 1); // Remove the path from the queue

                var importedPreviously = fullPath in parserImports.files || fullPath === rootFilename;

                parserImports.files[fullPath] = root;                        // Store the root

                if (e && !parserImports.error) { parserImports.error = e; }

                callback(e, root, importedPreviously, fullPath);
            };

            if (less.Parser.importer) {
                less.Parser.importer(path, currentFileInfo, fileParsedFunc, env);
            } else {
                less.Parser.fileLoader(path, currentFileInfo, function(e, contents, fullPath, newFileInfo) {
                    if (e) {fileParsedFunc(e); return;}

                    var newEnv = new tree.parseEnv(env);

                    newEnv.currentFileInfo = newFileInfo;
                    newEnv.processImports = false;
                    newEnv.contents[fullPath] = contents;

                    if (currentFileInfo.reference || importOptions.reference) {
                        newFileInfo.reference = true;
                    }

                    if (importOptions.inline) {
                        fileParsedFunc(null, contents, fullPath);
                    } else {
                        new(less.Parser)(newEnv).parse(contents, function (e, root) {
                            fileParsedFunc(e, root, fullPath);
                        });
                    }
                }, env);
            }
        }
    };

    function save()    { temp = chunks[j], memo = i, current = i; }
    function restore() { chunks[j] = temp, i = memo, current = i; }

    function sync() {
        if (i > current) {
            chunks[j] = chunks[j].slice(i - current);
            current = i;
        }
    }
    function isWhitespace(c) {
        // Could change to \s?
        var code = c.charCodeAt(0);
        return code === 32 || code === 10 || code === 9;
    }
    //
    // Parse from a token, regexp or string, and move forward if match
    //
    function $(tok) {
        var match, length;

        //
        // Non-terminal
        //
        if (tok instanceof Function) {
            return tok.call(parser.parsers);
        //
        // Terminal
        //
        //     Either match a single character in the input,
        //     or match a regexp in the current chunk (chunk[j]).
        //
        } else if (typeof(tok) === 'string') {
            match = input.charAt(i) === tok ? tok : null;
            length = 1;
            sync ();
        } else {
            sync ();

            if (match = tok.exec(chunks[j])) {
                length = match[0].length;
            } else {
                return null;
            }
        }

        // The match is confirmed, add the match length to `i`,
        // and consume any extra white-space characters (' ' || '\n')
        // which come after that. The reason for this is that LeSS's
        // grammar is mostly white-space insensitive.
        //
        if (match) {
            skipWhitespace(length);

            if(typeof(match) === 'string') {
                return match;
            } else {
                return match.length === 1 ? match[0] : match;
            }
        }
    }

    function skipWhitespace(length) {
        var oldi = i, oldj = j,
            endIndex = i + chunks[j].length,
            mem = i += length;

        while (i < endIndex) {
            if (! isWhitespace(input.charAt(i))) { break; }
            i++;
        }
        chunks[j] = chunks[j].slice(length + (i - mem));
        current = i;

        if (chunks[j].length === 0 && j < chunks.length - 1) { j++; }

        return oldi !== i || oldj !== j;
    }

    function expect(arg, msg) {
        var result = $(arg);
        if (! result) {
            error(msg || (typeof(arg) === 'string' ? "expected '" + arg + "' got '" + input.charAt(i) + "'"
                                                   : "unexpected token"));
        } else {
            return result;
        }
    }

    function error(msg, type) {
        var e = new Error(msg);
        e.index = i;
        e.type = type || 'Syntax';
        throw e;
    }

    // Same as $(), but don't change the state of the parser,
    // just return the match.
    function peek(tok) {
        if (typeof(tok) === 'string') {
            return input.charAt(i) === tok;
        } else {
            return tok.test(chunks[j]);
        }
    }

    function getInput(e, env) {
        if (e.filename && env.currentFileInfo.filename && (e.filename !== env.currentFileInfo.filename)) {
            return parser.imports.contents[e.filename];
        } else {
            return input;
        }
    }

    function getLocation(index, inputStream) {
        var n = index + 1,
            line = null,
            column = -1;

        while (--n >= 0 && inputStream.charAt(n) !== '\n') {
            column++;
        }

        if (typeof index === 'number') {
            line = (inputStream.slice(0, index).match(/\n/g) || "").length;
        }

        return {
            line: line,
            column: column
        };
    }

    function getDebugInfo(index, inputStream, env) {
        var filename = env.currentFileInfo.filename;
        if(less.mode !== 'browser' && less.mode !== 'rhino') {
            filename = require('path').resolve(filename);
        }

        return {
            lineNumber: getLocation(index, inputStream).line + 1,
            fileName: filename
        };
    }

    function LessError(e, env) {
        var input = getInput(e, env),
            loc = getLocation(e.index, input),
            line = loc.line,
            col  = loc.column,
            callLine = e.call && getLocation(e.call, input).line,
            lines = input.split('\n');

        this.type = e.type || 'Syntax';
        this.message = e.message;
        this.filename = e.filename || env.currentFileInfo.filename;
        this.index = e.index;
        this.line = typeof(line) === 'number' ? line + 1 : null;
        this.callLine = callLine + 1;
        this.callExtract = lines[callLine];
        this.stack = e.stack;
        this.column = col;
        this.extract = [
            lines[line - 1],
            lines[line],
            lines[line + 1]
        ];
    }

    LessError.prototype = new Error();
    LessError.prototype.constructor = LessError;

    this.env = env = env || {};

    // The optimization level dictates the thoroughness of the parser,
    // the lower the number, the less nodes it will create in the tree.
    // This could matter for debugging, or if you want to access
    // the individual nodes in the tree.
    this.optimization = ('optimization' in this.env) ? this.env.optimization : 1;

    //
    // The Parser
    //
    return parser = {

        imports: imports,
        //
        // Parse an input string into an abstract syntax tree,
        // call `callback` when done.
        //
        parse: function (str, callback) {
            var root, line, lines, error = null;

            i = j = current = furthest = 0;
            input = str.replace(/\r\n/g, '\n');

            // Remove potential UTF Byte Order Mark
            input = input.replace(/^\uFEFF/, '');

            parser.imports.contents[env.currentFileInfo.filename] = input;

            // Split the input into chunks.
            chunks = (function (chunks) {
                var j = 0,
                    skip = /(?:@\{[\w-]+\}|[^"'`\{\}\/\(\)\\])+/g,
                    comment = /\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g,
                    string = /"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'|`((?:[^`]|\\.)*)`/g,
                    level = 0,
                    match,
                    chunk = chunks[0],
                    inParam;

                for (var i = 0, c, cc; i < input.length;) {
                    skip.lastIndex = i;
                    if (match = skip.exec(input)) {
                        if (match.index === i) {
                            i += match[0].length;
                            chunk.push(match[0]);
                        }
                    }
                    c = input.charAt(i);
                    comment.lastIndex = string.lastIndex = i;

                    if (match = string.exec(input)) {
                        if (match.index === i) {
                            i += match[0].length;
                            chunk.push(match[0]);
                            continue;
                        }
                    }

                    if (!inParam && c === '/') {
                        cc = input.charAt(i + 1);
                        if (cc === '/' || cc === '*') {
                            if (match = comment.exec(input)) {
                                if (match.index === i) {
                                    i += match[0].length;
                                    chunk.push(match[0]);
                                    continue;
                                }
                            }
                        }
                    }
                    
                    switch (c) {
                        case '{':
                            if (!inParam) {
                                level++;
                                chunk.push(c);
                                break;
                            }
                            /* falls through */
                        case '}':
                            if (!inParam) {
                                level--;
                                chunk.push(c);
                                chunks[++j] = chunk = [];
                                break;
                            }
                            /* falls through */
                        case '(':
                            if (!inParam) {
                                inParam = true;
                                chunk.push(c);
                                break;
                            }
                            /* falls through */
                        case ')':
                            if (inParam) {
                                inParam = false;
                                chunk.push(c);
                                break;
                            }
                            /* falls through */
                        default:
                            chunk.push(c);
                    }
                    
                    i++;
                }
                if (level !== 0) {
                    error = new(LessError)({
                        index: i-1,
                        type: 'Parse',
                        message: (level > 0) ? "missing closing `}`" : "missing opening `{`",
                        filename: env.currentFileInfo.filename
                    }, env);
                }

                return chunks.map(function (c) { return c.join(''); });
            })([[]]);

            if (error) {
                return callback(new(LessError)(error, env));
            }

            // Start with the primary rule.
            // The whole syntax tree is held under a Ruleset node,
            // with the `root` property set to true, so no `{}` are
            // output. The callback is called when the input is parsed.
            try {
                root = new(tree.Ruleset)([], $(this.parsers.primary));
                root.root = true;
                root.firstRoot = true;
            } catch (e) {
                return callback(new(LessError)(e, env));
            }

            root.toCSS = (function (evaluate) {
                return function (options, variables) {
                    options = options || {};
                    var evaldRoot,
                        css,
                        evalEnv = new tree.evalEnv(options);
                        
                    //
                    // Allows setting variables with a hash, so:
                    //
                    //   `{ color: new(tree.Color)('#f01') }` will become:
                    //
                    //   new(tree.Rule)('@color',
                    //     new(tree.Value)([
                    //       new(tree.Expression)([
                    //         new(tree.Color)('#f01')
                    //       ])
                    //     ])
                    //   )
                    //
                    if (typeof(variables) === 'object' && !Array.isArray(variables)) {
                        variables = Object.keys(variables).map(function (k) {
                            var value = variables[k];

                            if (! (value instanceof tree.Value)) {
                                if (! (value instanceof tree.Expression)) {
                                    value = new(tree.Expression)([value]);
                                }
                                value = new(tree.Value)([value]);
                            }
                            return new(tree.Rule)('@' + k, value, false, null, 0);
                        });
                        evalEnv.frames = [new(tree.Ruleset)(null, variables)];
                    }

                    try {
                        evaldRoot = evaluate.call(this, evalEnv);

                        new(tree.joinSelectorVisitor)()
                            .run(evaldRoot);

                        new(tree.processExtendsVisitor)()
                            .run(evaldRoot);

                        new(tree.toCSSVisitor)({compress: Boolean(options.compress)})
                            .run(evaldRoot);

                        if (options.sourceMap) {
                            evaldRoot = new tree.sourceMapOutput(
                                {
                                    writeSourceMap: options.writeSourceMap,
                                    rootNode: evaldRoot,
                                    contentsMap: parser.imports.contents,
                                    sourceMapFilename: options.sourceMapFilename,
                                    outputFilename: options.sourceMapOutputFilename,
                                    sourceMapBasepath: options.sourceMapBasepath,
                                    sourceMapRootpath: options.sourceMapRootpath,
                                    outputSourceFiles: options.outputSourceFiles,
                                    sourceMapGenerator: options.sourceMapGenerator
                                });
                        }

                        css = evaldRoot.toCSS({
                                compress: Boolean(options.compress),
                                dumpLineNumbers: env.dumpLineNumbers,
                                strictUnits: Boolean(options.strictUnits)});
                    } catch (e) {
                        throw new(LessError)(e, env);
                    }

                    if (options.cleancss && less.mode === 'node') {
                        return require('clean-css').process(css);
                    } else if (options.compress) {
                        return css.replace(/(^(\s)+)|((\s)+$)/g, "");
                    } else {
                        return css;
                    }
                };
            })(root.eval);

            // If `i` is smaller than the `input.length - 1`,
            // it means the parser wasn't able to parse the whole
            // string, so we've got a parsing error.
            //
            // We try to extract a \n delimited string,
            // showing the line where the parse error occured.
            // We split it up into two parts (the part which parsed,
            // and the part which didn't), so we can color them differently.
            if (i < input.length - 1) {
                i = furthest;
                var loc = getLocation(i, input);
                lines = input.split('\n');
                line = loc.line + 1;

                error = {
                    type: "Parse",
                    message: "Unrecognised input",
                    index: i,
                    filename: env.currentFileInfo.filename,
                    line: line,
                    column: loc.column,
                    extract: [
                        lines[line - 2],
                        lines[line - 1],
                        lines[line]
                    ]
                };
            }

            var finish = function (e) {
                e = error || e || parser.imports.error;

                if (e) {
                    if (!(e instanceof LessError)) {
                        e = new(LessError)(e, env);
                    }

                    return callback(e);
                }
                else {
                    return callback(null, root);
                }
            };

            if (env.processImports !== false) {
                new tree.importVisitor(this.imports, finish)
                    .run(root);
            } else {
                return finish();
            }
        },

        //
        // Here in, the parsing rules/functions
        //
        // The basic structure of the syntax tree generated is as follows:
        //
        //   Ruleset ->  Rule -> Value -> Expression -> Entity
        //
        // Here's some LESS code:
        //
        //    .class {
        //      color: #fff;
        //      border: 1px solid #000;
        //      width: @w + 4px;
        //      > .child {...}
        //    }
        //
        // And here's what the parse tree might look like:
        //
        //     Ruleset (Selector '.class', [
        //         Rule ("color",  Value ([Expression [Color #fff]]))
        //         Rule ("border", Value ([Expression [Dimension 1px][Keyword "solid"][Color #000]]))
        //         Rule ("width",  Value ([Expression [Operation "+" [Variable "@w"][Dimension 4px]]]))
        //         Ruleset (Selector [Element '>', '.child'], [...])
        //     ])
        //
        //  In general, most rules will try to parse a token with the `$()` function, and if the return
        //  value is truly, will return a new node, of the relevant type. Sometimes, we need to check
        //  first, before parsing, that's when we use `peek()`.
        //
        parsers: {
            //
            // The `primary` rule is the *entry* and *exit* point of the parser.
            // The rules here can appear at any level of the parse tree.
            //
            // The recursive nature of the grammar is an interplay between the `block`
            // rule, which represents `{ ... }`, the `ruleset` rule, and this `primary` rule,
            // as represented by this simplified grammar:
            //
            //     primary  →  (ruleset | rule)+
            //     ruleset  →  selector+ block
            //     block    →  '{' primary '}'
            //
            // Only at one point is the primary rule not called from the
            // block rule: at the root level.
            //
            primary: function () {
                var node, root = [];

                while ((node = $(this.extendRule) || $(this.mixin.definition) || $(this.rule)    ||  $(this.ruleset) ||
                               $(this.mixin.call)       || $(this.comment) ||  $(this.directive))
                               || $(/^[\s\n]+/) || $(/^;+/)) {
                    node && root.push(node);
                }
                return root;
            },

            // We create a Comment node for CSS comments `/* */`,
            // but keep the LeSS comments `//` silent, by just skipping
            // over them.
            comment: function () {
                var comment;

                if (input.charAt(i) !== '/') { return; }

                if (input.charAt(i + 1) === '/') {
                    return new(tree.Comment)($(/^\/\/.*/), true, i, env.currentFileInfo);
                } else if (comment = $(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/)) {
                    return new(tree.Comment)(comment, false, i, env.currentFileInfo);
                }
            },

            comments: function () {
                var comment, comments = [];

                while(comment = $(this.comment)) {
                    comments.push(comment);
                }

                return comments;
            },

            //
            // Entities are tokens which can be found inside an Expression
            //
            entities: {
                //
                // A string, which supports escaping " and '
                //
                //     "milky way" 'he\'s the one!'
                //
                quoted: function () {
                    var str, j = i, e, index = i;

                    if (input.charAt(j) === '~') { j++, e = true; } // Escaped strings
                    if (input.charAt(j) !== '"' && input.charAt(j) !== "'") { return; }

                    e && $('~');

                    if (str = $(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/)) {
                        return new(tree.Quoted)(str[0], str[1] || str[2], e, index, env.currentFileInfo);
                    }
                },

                //
                // A catch-all word, such as:
                //
                //     black border-collapse
                //
                keyword: function () {
                    var k;

                    if (k = $(/^[_A-Za-z-][_A-Za-z0-9-]*/)) {
                        var color = tree.Color.fromKeyword(k);
                        if (color) {
                            return color;
                        }
                        return new(tree.Keyword)(k);
                    }
                },

                //
                // A function call
                //
                //     rgb(255, 0, 255)
                //
                // We also try to catch IE's `alpha()`, but let the `alpha` parser
                // deal with the details.
                //
                // The arguments are parsed with the `entities.arguments` parser.
                //
                call: function () {
                    var name, nameLC, args, alpha_ret, index = i;

                    if (! (name = /^([\w-]+|%|progid:[\w\.]+)\(/.exec(chunks[j]))) { return; }

                    name = name[1];
                    nameLC = name.toLowerCase();

                    if (nameLC === 'url') { return null; }
                    else                  { i += name.length; }

                    if (nameLC === 'alpha') {
                        alpha_ret = $(this.alpha);
                        if(typeof alpha_ret !== 'undefined') {
                            return alpha_ret;
                        }
                    }

                    $('('); // Parse the '(' and consume whitespace.

                    args = $(this.entities.arguments);

                    if (! $(')')) {
                        return;
                    }

                    if (name) { return new(tree.Call)(name, args, index, env.currentFileInfo); }
                },
                arguments: function () {
                    var args = [], arg;

                    while (arg = $(this.entities.assignment) || $(this.expression)) {
                        args.push(arg);
                        if (! $(',')) {
                            break;
                        }
                    }
                    return args;
                },
                literal: function () {
                    return $(this.entities.dimension) ||
                           $(this.entities.color) ||
                           $(this.entities.quoted) ||
                           $(this.entities.unicodeDescriptor);
                },

                // Assignments are argument entities for calls.
                // They are present in ie filter properties as shown below.
                //
                //     filter: progid:DXImageTransform.Microsoft.Alpha( *opacity=50* )
                //

                assignment: function () {
                    var key, value;
                    if ((key = $(/^\w+(?=\s?=)/i)) && $('=') && (value = $(this.entity))) {
                        return new(tree.Assignment)(key, value);
                    }
                },

                //
                // Parse url() tokens
                //
                // We use a specific rule for urls, because they don't really behave like
                // standard function calls. The difference is that the argument doesn't have
                // to be enclosed within a string, so it can't be parsed as an Expression.
                //
                url: function () {
                    var value;

                    if (input.charAt(i) !== 'u' || !$(/^url\(/)) {
                        return;
                    }

                    value = $(this.entities.quoted)  || $(this.entities.variable) ||
                            $(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || "";

                    expect(')');

                    /*jshint eqnull:true */
                    return new(tree.URL)((value.value != null || value instanceof tree.Variable)
                                        ? value : new(tree.Anonymous)(value), env.currentFileInfo);
                },

                //
                // A Variable entity, such as `@fink`, in
                //
                //     width: @fink + 2px
                //
                // We use a different parser for variable definitions,
                // see `parsers.variable`.
                //
                variable: function () {
                    var name, index = i;

                    if (input.charAt(i) === '@' && (name = $(/^@@?[\w-]+/))) {
                        return new(tree.Variable)(name, index, env.currentFileInfo);
                    }
                },

                // A variable entity useing the protective {} e.g. @{var}
                variableCurly: function () {
                    var curly, index = i;

                    if (input.charAt(i) === '@' && (curly = $(/^@\{([\w-]+)\}/))) {
                        return new(tree.Variable)("@" + curly[1], index, env.currentFileInfo);
                    }
                },

                //
                // A Hexadecimal color
                //
                //     #4F3C2F
                //
                // `rgb` and `hsl` colors are parsed through the `entities.call` parser.
                //
                color: function () {
                    var rgb;

                    if (input.charAt(i) === '#' && (rgb = $(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/))) {
                        return new(tree.Color)(rgb[1]);
                    }
                },

                //
                // A Dimension, that is, a number and a unit
                //
                //     0.5em 95%
                //
                dimension: function () {
                    var value, c = input.charCodeAt(i);
                    //Is the first char of the dimension 0-9, '.', '+' or '-'
                    if ((c > 57 || c < 43) || c === 47 || c == 44) {
                        return;
                    }

                    if (value = $(/^([+-]?\d*\.?\d+)(%|[a-z]+)?/)) {
                        return new(tree.Dimension)(value[1], value[2]);
                    }
                },

                //
                // A unicode descriptor, as is used in unicode-range
                //
                // U+0??  or U+00A1-00A9
                //
                unicodeDescriptor: function () {
                    var ud;
                    
                    if (ud = $(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/)) {
                        return new(tree.UnicodeDescriptor)(ud[0]);
                    }
                },

                //
                // JavaScript code to be evaluated
                //
                //     `window.location.href`
                //
                javascript: function () {
                    var str, j = i, e;

                    if (input.charAt(j) === '~') { j++; e = true; } // Escaped strings
                    if (input.charAt(j) !== '`') { return; }
                    if (env.javascriptEnabled !== undefined && !env.javascriptEnabled) {
                        error("You are using JavaScript, which has been disabled.");
                    }

                    if (e) { $('~'); }

                    if (str = $(/^`([^`]*)`/)) {
                        return new(tree.JavaScript)(str[1], i, e);
                    }
                }
            },

            //
            // The variable part of a variable definition. Used in the `rule` parser
            //
            //     @fink:
            //
            variable: function () {
                var name;

                if (input.charAt(i) === '@' && (name = $(/^(@[\w-]+)\s*:/))) { return name[1]; }
            },

            //
            // extend syntax - used to extend selectors
            //
            extend: function(isRule) {
                var elements, e, index = i, option, extendList = [];

                if (!$(isRule ? /^&:extend\(/ : /^:extend\(/)) { return; }

                do {
                    option = null;
                    elements = [];
                    while (true) {
                        option = $(/^(all)(?=\s*(\)|,))/);
                        if (option) { break; }
                        e = $(this.element);
                        if (!e) { break; }
                        elements.push(e);
                    }

                    option = option && option[1];

                    extendList.push(new(tree.Extend)(new(tree.Selector)(elements), option, index));

                } while($(","));
                
                expect(/^\)/);

                if (isRule) {
                    expect(/^;/);
                }

                return extendList;
            },

            //
            // extendRule - used in a rule to extend all the parent selectors
            //
            extendRule: function() {
                return this.extend(true);
            },
            
            //
            // Mixins
            //
            mixin: {
                //
                // A Mixin call, with an optional argument list
                //
                //     #mixins > .square(#fff);
                //     .rounded(4px, black);
                //     .button;
                //
                // The `while` loop is there because mixins can be
                // namespaced, but we only support the child and descendant
                // selector for now.
                //
                call: function () {
                    var elements = [], e, c, args, index = i, s = input.charAt(i), important = false;

                    if (s !== '.' && s !== '#') { return; }

                    save(); // stop us absorbing part of an invalid selector

                    while (e = $(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)) {
                        elements.push(new(tree.Element)(c, e, i, env.currentFileInfo));
                        c = $('>');
                    }
                    if ($('(')) {
                        args = this.mixin.args.call(this, true).args;
                        expect(')');
                    }

                    args = args || [];

                    if ($(this.important)) {
                        important = true;
                    }

                    if (elements.length > 0 && ($(';') || peek('}'))) {
                        return new(tree.mixin.Call)(elements, args, index, env.currentFileInfo, important);
                    }

                    restore();
                },
                args: function (isCall) {
                    var expressions = [], argsSemiColon = [], isSemiColonSeperated, argsComma = [], expressionContainsNamed, name, nameLoop, value, arg,
                        returner = {args:null, variadic: false};
                    while (true) {
                        if (isCall) {
                            arg = $(this.expression);
                        } else {
                            $(this.comments);
                            if (input.charAt(i) === '.' && $(/^\.{3}/)) {
                                returner.variadic = true;
                                if ($(";") && !isSemiColonSeperated) {
                                    isSemiColonSeperated = true;
                                }
                                (isSemiColonSeperated ? argsSemiColon : argsComma)
                                    .push({ variadic: true });
                                break;
                            }
                            arg = $(this.entities.variable) || $(this.entities.literal)
                                || $(this.entities.keyword);
                        }

                        if (!arg) {
                            break;
                        }

                        nameLoop = null;
                        if (arg.throwAwayComments) {
                            arg.throwAwayComments();
                        }
                        value = arg;
                        var val = null;

                        if (isCall) {
                            // Variable
                            if (arg.value.length == 1) {
                                val = arg.value[0];
                            }
                        } else {
                            val = arg;
                        }

                        if (val && val instanceof tree.Variable) {
                            if ($(':')) {
                                if (expressions.length > 0) {
                                    if (isSemiColonSeperated) {
                                        error("Cannot mix ; and , as delimiter types");
                                    }
                                    expressionContainsNamed = true;
                                }
                                value = expect(this.expression);
                                nameLoop = (name = val.name);
                            } else if (!isCall && $(/^\.{3}/)) {
                                returner.variadic = true;
                                if ($(";") && !isSemiColonSeperated) {
                                    isSemiColonSeperated = true;
                                }
                                (isSemiColonSeperated ? argsSemiColon : argsComma)
                                    .push({ name: arg.name, variadic: true });
                                break;
                            } else if (!isCall) {
                                name = nameLoop = val.name;
                                value = null;
                            }
                        }

                        if (value) {
                            expressions.push(value);
                        }

                        argsComma.push({ name:nameLoop, value:value });

                        if ($(',')) {
                            continue;
                        }

                        if ($(';') || isSemiColonSeperated) {

                            if (expressionContainsNamed) {
                                error("Cannot mix ; and , as delimiter types");
                            }

                            isSemiColonSeperated = true;

                            if (expressions.length > 1) {
                                value = new(tree.Value)(expressions);
                            }
                            argsSemiColon.push({ name:name, value:value });

                            name = null;
                            expressions = [];
                            expressionContainsNamed = false;
                        }
                    }

                    returner.args = isSemiColonSeperated ? argsSemiColon : argsComma;
                    return returner;
                },
                //
                // A Mixin definition, with a list of parameters
                //
                //     .rounded (@radius: 2px, @color) {
                //        ...
                //     }
                //
                // Until we have a finer grained state-machine, we have to
                // do a look-ahead, to make sure we don't have a mixin call.
                // See the `rule` function for more information.
                //
                // We start by matching `.rounded (`, and then proceed on to
                // the argument list, which has optional default values.
                // We store the parameters in `params`, with a `value` key,
                // if there is a value, such as in the case of `@radius`.
                //
                // Once we've got our params list, and a closing `)`, we parse
                // the `{...}` block.
                //
                definition: function () {
                    var name, params = [], match, ruleset, cond, variadic = false;
                    if ((input.charAt(i) !== '.' && input.charAt(i) !== '#') ||
                        peek(/^[^{]*\}/)) {
                        return;
                    }

                    save();

                    if (match = $(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)) {
                        name = match[1];

                        var argInfo = this.mixin.args.call(this, false);
                        params = argInfo.args;
                        variadic = argInfo.variadic;

                        // .mixincall("@{a}");
                        // looks a bit like a mixin definition.. so we have to be nice and restore
                        if (!$(')')) {
                            furthest = i;
                            restore();
                        }
                        
                        $(this.comments);

                        if ($(/^when/)) { // Guard
                            cond = expect(this.conditions, 'expected condition');
                        }

                        ruleset = $(this.block);

                        if (ruleset) {
                            return new(tree.mixin.Definition)(name, params, ruleset, cond, variadic);
                        } else {
                            restore();
                        }
                    }
                }
            },

            //
            // Entities are the smallest recognized token,
            // and can be found inside a rule's value.
            //
            entity: function () {
                return $(this.entities.literal) || $(this.entities.variable) || $(this.entities.url) ||
                       $(this.entities.call)    || $(this.entities.keyword)  ||$(this.entities.javascript) ||
                       $(this.comment);
            },

            //
            // A Rule terminator. Note that we use `peek()` to check for '}',
            // because the `block` rule will be expecting it, but we still need to make sure
            // it's there, if ';' was ommitted.
            //
            end: function () {
                return $(';') || peek('}');
            },

            //
            // IE's alpha function
            //
            //     alpha(opacity=88)
            //
            alpha: function () {
                var value;

                if (! $(/^\(opacity=/i)) { return; }
                if (value = $(/^\d+/) || $(this.entities.variable)) {
                    expect(')');
                    return new(tree.Alpha)(value);
                }
            },

            //
            // A Selector Element
            //
            //     div
            //     + h1
            //     #socks
            //     input[type="text"]
            //
            // Elements are the building blocks for Selectors,
            // they are made out of a `Combinator` (see combinator rule),
            // and an element name, such as a tag a class, or `*`.
            //
            element: function () {
                var e, c, v;

                c = $(this.combinator);

                e = $(/^(?:\d+\.\d+|\d+)%/) || $(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) ||
                    $('*') || $('&') || $(this.attribute) || $(/^\([^()@]+\)/) || $(/^[\.#](?=@)/) || $(this.entities.variableCurly);

                if (! e) {
                    if ($('(')) {
                        if ((v = ($(this.selector))) &&
                                $(')')) {
                            e = new(tree.Paren)(v);
                        }
                    }
                }

                if (e) { return new(tree.Element)(c, e, i, env.currentFileInfo); }
            },

            //
            // Combinators combine elements together, in a Selector.
            //
            // Because our parser isn't white-space sensitive, special care
            // has to be taken, when parsing the descendant combinator, ` `,
            // as it's an empty space. We have to check the previous character
            // in the input, to see if it's a ` ` character. More info on how
            // we deal with this in *combinator.js*.
            //
            combinator: function () {
                var c = input.charAt(i);

                if (c === '>' || c === '+' || c === '~' || c === '|') {
                    i++;
                    while (input.charAt(i).match(/\s/)) { i++; }
                    return new(tree.Combinator)(c);
                } else if (input.charAt(i - 1).match(/\s/)) {
                    return new(tree.Combinator)(" ");
                } else {
                    return new(tree.Combinator)(null);
                }
            },
            //
            // A CSS selector (see selector below)
            // with less extensions e.g. the ability to extend and guard
            //
            lessSelector: function () {
                return this.selector(true);
            },
            //
            // A CSS Selector
            //
            //     .class > div + h1
            //     li a:hover
            //
            // Selectors are made out of one or more Elements, see above.
            //
            selector: function (isLess) {
                var e, elements = [], c, extend, extendList = [], when, condition;

                while ((isLess && (extend = $(this.extend))) || (isLess && (when = $(/^when/))) || (e = $(this.element))) {
                    if (when) {
                        condition = expect(this.conditions, 'expected condition');
                    } else if (condition) {
                        error("CSS guard can only be used at the end of selector");
                    } else if (extend) {
                        extendList.push.apply(extendList, extend);
                    } else {
                        if (extendList.length) {
                            error("Extend can only be used at the end of selector");
                        }
                        c = input.charAt(i);
                        elements.push(e);
                        e = null;
                    }
                    if (c === '{' || c === '}' || c === ';' || c === ',' || c === ')') {
                        break;
                    }
                }

                if (elements.length > 0) { return new(tree.Selector)(elements, extendList, condition, i, env.currentFileInfo); }
                if (extendList.length) { error("Extend must be used to extend a selector, it cannot be used on its own"); }
            },
            attribute: function () {
                var key, val, op;

                if (! $('[')) { return; }

                if (!(key = $(this.entities.variableCurly))) {
                    key = expect(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/);
                }

                if ((op = $(/^[|~*$^]?=/))) {
                    val = $(this.entities.quoted) || $(/^[0-9]+%/) || $(/^[\w-]+/) || $(this.entities.variableCurly);
                }

                expect(']');

                return new(tree.Attribute)(key, op, val);
            },

            //
            // The `block` rule is used by `ruleset` and `mixin.definition`.
            // It's a wrapper around the `primary` rule, with added `{}`.
            //
            block: function () {
                var content;
                if ($('{') && (content = $(this.primary)) && $('}')) {
                    return content;
                }
            },

            //
            // div, .class, body > p {...}
            //
            ruleset: function () {
                var selectors = [], s, rules, debugInfo;
                
                save();

                if (env.dumpLineNumbers) {
                    debugInfo = getDebugInfo(i, input, env);
                }

                while (s = $(this.lessSelector)) {
                    selectors.push(s);
                    $(this.comments);
                    if (! $(',')) { break; }
                    if (s.condition) {
                        error("Guards are only currently allowed on a single selector.");
                    }
                    $(this.comments);
                }

                if (selectors.length > 0 && (rules = $(this.block))) {
                    var ruleset = new(tree.Ruleset)(selectors, rules, env.strictImports);
                    if (env.dumpLineNumbers) {
                        ruleset.debugInfo = debugInfo;
                    }
                    return ruleset;
                } else {
                    // Backtrack
                    furthest = i;
                    restore();
                }
            },
            rule: function (tryAnonymous) {
                var name, value, c = input.charAt(i), important, merge = false;
                save();

                if (c === '.' || c === '#' || c === '&') { return; }

                if (name = $(this.variable) || $(this.ruleProperty)) {
                    // prefer to try to parse first if its a variable or we are compressing
                    // but always fallback on the other one
                    value = !tryAnonymous && (env.compress || (name.charAt(0) === '@')) ?
                        ($(this.value) || $(this.anonymousValue)) :
                        ($(this.anonymousValue) || $(this.value));


                    important = $(this.important);
                    if (name[name.length-1] === "+") {
                        merge = true;
                        name = name.substr(0, name.length - 1);
                    }

                    if (value && $(this.end)) {
                        return new (tree.Rule)(name, value, important, merge, memo, env.currentFileInfo);
                    } else {
                        furthest = i;
                        restore();
                        if (value && !tryAnonymous) {
                            return this.rule(true);
                        }
                    }
                }
            },
            anonymousValue: function () {
                var match;
                if (match = /^([^@+\/'"*`(;{}-]*);/.exec(chunks[j])) {
                    i += match[0].length - 1;
                    return new(tree.Anonymous)(match[1]);
                }
            },

            //
            // An @import directive
            //
            //     @import "lib";
            //
            // Depending on our environemnt, importing is done differently:
            // In the browser, it's an XHR request, in Node, it would be a
            // file-system operation. The function used for importing is
            // stored in `import`, which we pass to the Import constructor.
            //
            "import": function () {
                var path, features, index = i;

                save();

                var dir = $(/^@import?\s+/);

                var options = (dir ? $(this.importOptions) : null) || {};

                if (dir && (path = $(this.entities.quoted) || $(this.entities.url))) {
                    features = $(this.mediaFeatures);
                    if ($(';')) {
                        features = features && new(tree.Value)(features);
                        return new(tree.Import)(path, features, options, index, env.currentFileInfo);
                    }
                }

                restore();
            },

            importOptions: function() {
                var o, options = {}, optionName, value;

                // list of options, surrounded by parens
                if (! $('(')) { return null; }
                do {
                    if (o = $(this.importOption)) {
                        optionName = o;
                        value = true;
                        switch(optionName) {
                            case "css":
                                optionName = "less";
                                value = false;
                            break;
                            case "once":
                                optionName = "multiple";
                                value = false;
                            break;
                        }
                        options[optionName] = value;
                        if (! $(',')) { break; }
                    }
                } while (o);
                expect(')');
                return options;
            },

            importOption: function() {
                var opt = $(/^(less|css|multiple|once|inline|reference)/);
                if (opt) {
                    return opt[1];
                }
            },

            mediaFeature: function () {
                var e, p, nodes = [];

                do {
                    if (e = ($(this.entities.keyword) || $(this.entities.variable))) {
                        nodes.push(e);
                    } else if ($('(')) {
                        p = $(this.property);
                        e = $(this.value);
                        if ($(')')) {
                            if (p && e) {
                                nodes.push(new(tree.Paren)(new(tree.Rule)(p, e, null, null, i, env.currentFileInfo, true)));
                            } else if (e) {
                                nodes.push(new(tree.Paren)(e));
                            } else {
                                return null;
                            }
                        } else { return null; }
                    }
                } while (e);

                if (nodes.length > 0) {
                    return new(tree.Expression)(nodes);
                }
            },

            mediaFeatures: function () {
                var e, features = [];

                do {
                  if (e = $(this.mediaFeature)) {
                      features.push(e);
                      if (! $(',')) { break; }
                  } else if (e = $(this.entities.variable)) {
                      features.push(e);
                      if (! $(',')) { break; }
                  }
                } while (e);

                return features.length > 0 ? features : null;
            },

            media: function () {
                var features, rules, media, debugInfo;

                if (env.dumpLineNumbers) {
                    debugInfo = getDebugInfo(i, input, env);
                }

                if ($(/^@media/)) {
                    features = $(this.mediaFeatures);

                    if (rules = $(this.block)) {
                        media = new(tree.Media)(rules, features, i, env.currentFileInfo);
                        if (env.dumpLineNumbers) {
                            media.debugInfo = debugInfo;
                        }
                        return media;
                    }
                }
            },

            //
            // A CSS Directive
            //
            //     @charset "utf-8";
            //
            directive: function () {
                var name, value, rules, nonVendorSpecificName,
                    hasBlock, hasIdentifier, hasExpression, identifier;

                if (input.charAt(i) !== '@') { return; }

                if (value = $(this['import']) || $(this.media)) {
                    return value;
                }

                save();

                name = $(/^@[a-z-]+/);
                
                if (!name) { return; }

                nonVendorSpecificName = name;
                if (name.charAt(1) == '-' && name.indexOf('-', 2) > 0) {
                    nonVendorSpecificName = "@" + name.slice(name.indexOf('-', 2) + 1);
                }

                switch(nonVendorSpecificName) {
                    case "@font-face":
                        hasBlock = true;
                        break;
                    case "@viewport":
                    case "@top-left":
                    case "@top-left-corner":
                    case "@top-center":
                    case "@top-right":
                    case "@top-right-corner":
                    case "@bottom-left":
                    case "@bottom-left-corner":
                    case "@bottom-center":
                    case "@bottom-right":
                    case "@bottom-right-corner":
                    case "@left-top":
                    case "@left-middle":
                    case "@left-bottom":
                    case "@right-top":
                    case "@right-middle":
                    case "@right-bottom":
                        hasBlock = true;
                        break;
                    case "@host":
                    case "@page":
                    case "@document":
                    case "@supports":
                    case "@keyframes":
                        hasBlock = true;
                        hasIdentifier = true;
                        break;
                    case "@namespace":
                        hasExpression = true;
                        break;
                }

                if (hasIdentifier) {
                    identifier = ($(/^[^{]+/) || '').trim();
                    if (identifier) {
                        name += " " + identifier;
                    }
                }

                if (hasBlock)
                {
                    if (rules = $(this.block)) {
                        return new(tree.Directive)(name, rules, i, env.currentFileInfo);
                    }
                } else {
                    if ((value = hasExpression ? $(this.expression) : $(this.entity)) && $(';')) {
                        var directive = new(tree.Directive)(name, value, i, env.currentFileInfo);
                        if (env.dumpLineNumbers) {
                            directive.debugInfo = getDebugInfo(i, input, env);
                        }
                        return directive;
                    }
                }

                restore();
            },

            //
            // A Value is a comma-delimited list of Expressions
            //
            //     font-family: Baskerville, Georgia, serif;
            //
            // In a Rule, a Value represents everything after the `:`,
            // and before the `;`.
            //
            value: function () {
                var e, expressions = [];

                while (e = $(this.expression)) {
                    expressions.push(e);
                    if (! $(',')) { break; }
                }

                if (expressions.length > 0) {
                    return new(tree.Value)(expressions);
                }
            },
            important: function () {
                if (input.charAt(i) === '!') {
                    return $(/^! *important/);
                }
            },
            sub: function () {
                var a, e;

                if ($('(')) {
                    if (a = $(this.addition)) {
                        e = new(tree.Expression)([a]);
                        expect(')');
                        e.parens = true;
                        return e;
                    }
                }
            },
            multiplication: function () {
                var m, a, op, operation, isSpaced;
                if (m = $(this.operand)) {
                    isSpaced = isWhitespace(input.charAt(i - 1));
                    while (!peek(/^\/[*\/]/) && (op = ($('/') || $('*')))) {
                        if (a = $(this.operand)) {
                            m.parensInOp = true;
                            a.parensInOp = true;
                            operation = new(tree.Operation)(op, [operation || m, a], isSpaced);
                            isSpaced = isWhitespace(input.charAt(i - 1));
                        } else {
                            break;
                        }
                    }
                    return operation || m;
                }
            },
            addition: function () {
                var m, a, op, operation, isSpaced;
                if (m = $(this.multiplication)) {
                    isSpaced = isWhitespace(input.charAt(i - 1));
                    while ((op = $(/^[-+]\s+/) || (!isSpaced && ($('+') || $('-')))) &&
                           (a = $(this.multiplication))) {
                        m.parensInOp = true;
                        a.parensInOp = true;
                        operation = new(tree.Operation)(op, [operation || m, a], isSpaced);
                        isSpaced = isWhitespace(input.charAt(i - 1));
                    }
                    return operation || m;
                }
            },
            conditions: function () {
                var a, b, index = i, condition;

                if (a = $(this.condition)) {
                    while (peek(/^,\s*(not\s*)?\(/) && $(',') && (b = $(this.condition))) {
                        condition = new(tree.Condition)('or', condition || a, b, index);
                    }
                    return condition || a;
                }
            },
            condition: function () {
                var a, b, c, op, index = i, negate = false;

                if ($(/^not/)) { negate = true; }
                expect('(');
                if (a = $(this.addition) || $(this.entities.keyword) || $(this.entities.quoted)) {
                    if (op = $(/^(?:>=|<=|=<|[<=>])/)) {
                        if (b = $(this.addition) || $(this.entities.keyword) || $(this.entities.quoted)) {
                            c = new(tree.Condition)(op, a, b, index, negate);
                        } else {
                            error('expected expression');
                        }
                    } else {
                        c = new(tree.Condition)('=', a, new(tree.Keyword)('true'), index, negate);
                    }
                    expect(')');
                    return $(/^and/) ? new(tree.Condition)('and', c, $(this.condition)) : c;
                }
            },

            //
            // An operand is anything that can be part of an operation,
            // such as a Color, or a Variable
            //
            operand: function () {
                var negate, p = input.charAt(i + 1);

                if (input.charAt(i) === '-' && (p === '@' || p === '(')) { negate = $('-'); }
                var o = $(this.sub) || $(this.entities.dimension) ||
                        $(this.entities.color) || $(this.entities.variable) ||
                        $(this.entities.call);

                if (negate) {
                    o.parensInOp = true;
                    o = new(tree.Negative)(o);
                }

                return o;
            },

            //
            // Expressions either represent mathematical operations,
            // or white-space delimited Entities.
            //
            //     1px solid black
            //     @var * 2
            //
            expression: function () {
                var e, delim, entities = [];

                while (e = $(this.addition) || $(this.entity)) {
                    entities.push(e);
                    // operations do not allow keyword "/" dimension (e.g. small/20px) so we support that here
                    if (!peek(/^\/[\/*]/) && (delim = $('/'))) {
                        entities.push(new(tree.Anonymous)(delim));
                    }
                }
                if (entities.length > 0) {
                    return new(tree.Expression)(entities);
                }
            },
            property: function () {
                var name;

                if (name = $(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/)) {
                    return name[1];
                }
            },
            ruleProperty: function () {
                var name;

                if (name = $(/^(\*?-?[_a-zA-Z0-9-]+)\s*(\+?)\s*:/)) {
                    return name[1] + (name[2] || "");
                }
            }
        }
    };
};


(function (tree) {

tree.functions = {
    rgb: function (r, g, b) {
        return this.rgba(r, g, b, 1.0);
    },
    rgba: function (r, g, b, a) {
        var rgb = [r, g, b].map(function (c) { return scaled(c, 256); });
        a = number(a);
        return new(tree.Color)(rgb, a);
    },
    hsl: function (h, s, l) {
        return this.hsla(h, s, l, 1.0);
    },
    hsla: function (h, s, l, a) {
        function hue(h) {
            h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
            if      (h * 6 < 1) { return m1 + (m2 - m1) * h * 6; }
            else if (h * 2 < 1) { return m2; }
            else if (h * 3 < 2) { return m1 + (m2 - m1) * (2/3 - h) * 6; }
            else                { return m1; }
        }

        h = (number(h) % 360) / 360;
        s = clamp(number(s)); l = clamp(number(l)); a = clamp(number(a));

        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;

        return this.rgba(hue(h + 1/3) * 255,
                         hue(h)       * 255,
                         hue(h - 1/3) * 255,
                         a);
    },

    hsv: function(h, s, v) {
        return this.hsva(h, s, v, 1.0);
    },

    hsva: function(h, s, v, a) {
        h = ((number(h) % 360) / 360) * 360;
        s = number(s); v = number(v); a = number(a);

        var i, f;
        i = Math.floor((h / 60) % 6);
        f = (h / 60) - i;

        var vs = [v,
                  v * (1 - s),
                  v * (1 - f * s),
                  v * (1 - (1 - f) * s)];
        var perm = [[0, 3, 1],
                    [2, 0, 1],
                    [1, 0, 3],
                    [1, 2, 0],
                    [3, 1, 0],
                    [0, 1, 2]];

        return this.rgba(vs[perm[i][0]] * 255,
                         vs[perm[i][1]] * 255,
                         vs[perm[i][2]] * 255,
                         a);
    },

    hue: function (color) {
        return new(tree.Dimension)(Math.round(color.toHSL().h));
    },
    saturation: function (color) {
        return new(tree.Dimension)(Math.round(color.toHSL().s * 100), '%');
    },
    lightness: function (color) {
        return new(tree.Dimension)(Math.round(color.toHSL().l * 100), '%');
    },
    hsvhue: function(color) {
        return new(tree.Dimension)(Math.round(color.toHSV().h));
    },
    hsvsaturation: function (color) {
        return new(tree.Dimension)(Math.round(color.toHSV().s * 100), '%');
    },
    hsvvalue: function (color) {
        return new(tree.Dimension)(Math.round(color.toHSV().v * 100), '%');
    },
    red: function (color) {
        return new(tree.Dimension)(color.rgb[0]);
    },
    green: function (color) {
        return new(tree.Dimension)(color.rgb[1]);
    },
    blue: function (color) {
        return new(tree.Dimension)(color.rgb[2]);
    },
    alpha: function (color) {
        return new(tree.Dimension)(color.toHSL().a);
    },
    luma: function (color) {
        return new(tree.Dimension)(Math.round(color.luma() * color.alpha * 100), '%');
    },
    saturate: function (color, amount) {
        // filter: saturate(3.2);
        // should be kept as is, so check for color
        if (!color.rgb) {
            return null;
        }
        var hsl = color.toHSL();

        hsl.s += amount.value / 100;
        hsl.s = clamp(hsl.s);
        return hsla(hsl);
    },
    desaturate: function (color, amount) {
        var hsl = color.toHSL();

        hsl.s -= amount.value / 100;
        hsl.s = clamp(hsl.s);
        return hsla(hsl);
    },
    lighten: function (color, amount) {
        var hsl = color.toHSL();

        hsl.l += amount.value / 100;
        hsl.l = clamp(hsl.l);
        return hsla(hsl);
    },
    darken: function (color, amount) {
        var hsl = color.toHSL();

        hsl.l -= amount.value / 100;
        hsl.l = clamp(hsl.l);
        return hsla(hsl);
    },
    fadein: function (color, amount) {
        var hsl = color.toHSL();

        hsl.a += amount.value / 100;
        hsl.a = clamp(hsl.a);
        return hsla(hsl);
    },
    fadeout: function (color, amount) {
        var hsl = color.toHSL();

        hsl.a -= amount.value / 100;
        hsl.a = clamp(hsl.a);
        return hsla(hsl);
    },
    fade: function (color, amount) {
        var hsl = color.toHSL();

        hsl.a = amount.value / 100;
        hsl.a = clamp(hsl.a);
        return hsla(hsl);
    },
    spin: function (color, amount) {
        var hsl = color.toHSL();
        var hue = (hsl.h + amount.value) % 360;

        hsl.h = hue < 0 ? 360 + hue : hue;

        return hsla(hsl);
    },
    //
    // Copyright (c) 2006-2009 Hampton Catlin, Nathan Weizenbaum, and Chris Eppstein
    // http://sass-lang.com
    //
    mix: function (color1, color2, weight) {
        if (!weight) {
            weight = new(tree.Dimension)(50);
        }
        var p = weight.value / 100.0;
        var w = p * 2 - 1;
        var a = color1.toHSL().a - color2.toHSL().a;

        var w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
        var w2 = 1 - w1;

        var rgb = [color1.rgb[0] * w1 + color2.rgb[0] * w2,
                   color1.rgb[1] * w1 + color2.rgb[1] * w2,
                   color1.rgb[2] * w1 + color2.rgb[2] * w2];

        var alpha = color1.alpha * p + color2.alpha * (1 - p);

        return new(tree.Color)(rgb, alpha);
    },
    greyscale: function (color) {
        return this.desaturate(color, new(tree.Dimension)(100));
    },
    contrast: function (color, dark, light, threshold) {
        // filter: contrast(3.2);
        // should be kept as is, so check for color
        if (!color.rgb) {
            return null;
        }
        if (typeof light === 'undefined') {
            light = this.rgba(255, 255, 255, 1.0);
        }
        if (typeof dark === 'undefined') {
            dark = this.rgba(0, 0, 0, 1.0);
        }
        //Figure out which is actually light and dark!
        if (dark.luma() > light.luma()) {
            var t = light;
            light = dark;
            dark = t;
        }
        if (typeof threshold === 'undefined') {
            threshold = 0.43;
        } else {
            threshold = number(threshold);
        }
        if ((color.luma() * color.alpha) < threshold) {
            return light;
        } else {
            return dark;
        }
    },
    e: function (str) {
        return new(tree.Anonymous)(str instanceof tree.JavaScript ? str.evaluated : str);
    },
    escape: function (str) {
        return new(tree.Anonymous)(encodeURI(str.value).replace(/=/g, "%3D").replace(/:/g, "%3A").replace(/#/g, "%23").replace(/;/g, "%3B").replace(/\(/g, "%28").replace(/\)/g, "%29"));
    },
    '%': function (quoted /* arg, arg, ...*/) {
        var args = Array.prototype.slice.call(arguments, 1),
            str = quoted.value;

        for (var i = 0; i < args.length; i++) {
            /*jshint loopfunc:true */
            str = str.replace(/%[sda]/i, function(token) {
                var value = token.match(/s/i) ? args[i].value : args[i].toCSS();
                return token.match(/[A-Z]$/) ? encodeURIComponent(value) : value;
            });
        }
        str = str.replace(/%%/g, '%');
        return new(tree.Quoted)('"' + str + '"', str);
    },
    unit: function (val, unit) {
        if(!(val instanceof tree.Dimension)) {
            throw { type: "Argument", message: "the first argument to unit must be a number" + (val instanceof tree.Operation ? ". Have you forgotten parenthesis?" : "") };
        }
        return new(tree.Dimension)(val.value, unit ? unit.toCSS() : "");
    },
    convert: function (val, unit) {
        return val.convertTo(unit.value);
    },
    round: function (n, f) {
        var fraction = typeof(f) === "undefined" ? 0 : f.value;
        return this._math(function(num) { return num.toFixed(fraction); }, null, n);
    },
    pi: function () {
        return new(tree.Dimension)(Math.PI);
    },
    mod: function(a, b) {
        return new(tree.Dimension)(a.value % b.value, a.unit);
    },
    pow: function(x, y) {
        if (typeof x === "number" && typeof y === "number") {
            x = new(tree.Dimension)(x);
            y = new(tree.Dimension)(y);
        } else if (!(x instanceof tree.Dimension) || !(y instanceof tree.Dimension)) {
            throw { type: "Argument", message: "arguments must be numbers" };
        }

        return new(tree.Dimension)(Math.pow(x.value, y.value), x.unit);
    },
    _math: function (fn, unit, n) {
        if (n instanceof tree.Dimension) {
            /*jshint eqnull:true */
            return new(tree.Dimension)(fn(parseFloat(n.value)), unit == null ? n.unit : unit);
        } else if (typeof(n) === 'number') {
            return fn(n);
        } else {
            throw { type: "Argument", message: "argument must be a number" };
        }
    },
    _minmax: function (isMin, args) {
        args = Array.prototype.slice.call(args);
        switch(args.length) {
        case 0: throw { type: "Argument", message: "one or more arguments required" };
        case 1: return args[0];
        }
        var i, j, current, currentUnified, referenceUnified, unit,
            order  = [], // elems only contains original argument values.
            values = {}; // key is the unit.toString() for unified tree.Dimension values,
                         // value is the index into the order array.
        for (i = 0; i < args.length; i++) {
            current = args[i];
            if (!(current instanceof tree.Dimension)) {
                order.push(current);
                continue;
            }
            currentUnified = current.unify();
            unit = currentUnified.unit.toString();
            j = values[unit];
            if (j === undefined) {
                values[unit] = order.length;
                order.push(current);
                continue;
            }
            referenceUnified = order[j].unify();
            if ( isMin && currentUnified.value < referenceUnified.value ||
                !isMin && currentUnified.value > referenceUnified.value) {
                order[j] = current;
            }
        }
        if (order.length == 1) {
            return order[0];
        }
        args = order.map(function (a) { return a.toCSS(this.env); })
                    .join(this.env.compress ? "," : ", ");
        return new(tree.Anonymous)((isMin ? "min" : "max") + "(" + args + ")");
    },
    min: function () {
        return this._minmax(true, arguments);
    },
    max: function () {
        return this._minmax(false, arguments);
    },
    argb: function (color) {
        return new(tree.Anonymous)(color.toARGB());

    },
    percentage: function (n) {
        return new(tree.Dimension)(n.value * 100, '%');
    },
    color: function (n) {
        if (n instanceof tree.Quoted) {
            var colorCandidate = n.value,
                returnColor;
            returnColor = tree.Color.fromKeyword(colorCandidate);
            if (returnColor) {
                return returnColor;
            }
            if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.test(colorCandidate)) {
                return new(tree.Color)(colorCandidate.slice(1));
            }
            throw { type: "Argument", message: "argument must be a color keyword or 3/6 digit hex e.g. #FFF" };
        } else {
            throw { type: "Argument", message: "argument must be a string" };
        }
    },
    iscolor: function (n) {
        return this._isa(n, tree.Color);
    },
    isnumber: function (n) {
        return this._isa(n, tree.Dimension);
    },
    isstring: function (n) {
        return this._isa(n, tree.Quoted);
    },
    iskeyword: function (n) {
        return this._isa(n, tree.Keyword);
    },
    isurl: function (n) {
        return this._isa(n, tree.URL);
    },
    ispixel: function (n) {
        return this.isunit(n, 'px');
    },
    ispercentage: function (n) {
        return this.isunit(n, '%');
    },
    isem: function (n) {
        return this.isunit(n, 'em');
    },
    isunit: function (n, unit) {
        return (n instanceof tree.Dimension) && n.unit.is(unit.value || unit) ? tree.True : tree.False;
    },
    _isa: function (n, Type) {
        return (n instanceof Type) ? tree.True : tree.False;
    },
    
    /* Blending modes */
    
    multiply: function(color1, color2) {
        var r = color1.rgb[0] * color2.rgb[0] / 255;
        var g = color1.rgb[1] * color2.rgb[1] / 255;
        var b = color1.rgb[2] * color2.rgb[2] / 255;
        return this.rgb(r, g, b);
    },
    screen: function(color1, color2) {
        var r = 255 - (255 - color1.rgb[0]) * (255 - color2.rgb[0]) / 255;
        var g = 255 - (255 - color1.rgb[1]) * (255 - color2.rgb[1]) / 255;
        var b = 255 - (255 - color1.rgb[2]) * (255 - color2.rgb[2]) / 255;
        return this.rgb(r, g, b);
    },
    overlay: function(color1, color2) {
        var r = color1.rgb[0] < 128 ? 2 * color1.rgb[0] * color2.rgb[0] / 255 : 255 - 2 * (255 - color1.rgb[0]) * (255 - color2.rgb[0]) / 255;
        var g = color1.rgb[1] < 128 ? 2 * color1.rgb[1] * color2.rgb[1] / 255 : 255 - 2 * (255 - color1.rgb[1]) * (255 - color2.rgb[1]) / 255;
        var b = color1.rgb[2] < 128 ? 2 * color1.rgb[2] * color2.rgb[2] / 255 : 255 - 2 * (255 - color1.rgb[2]) * (255 - color2.rgb[2]) / 255;
        return this.rgb(r, g, b);
    },
    softlight: function(color1, color2) {
        var t = color2.rgb[0] * color1.rgb[0] / 255;
        var r = t + color1.rgb[0] * (255 - (255 - color1.rgb[0]) * (255 - color2.rgb[0]) / 255 - t) / 255;
        t = color2.rgb[1] * color1.rgb[1] / 255;
        var g = t + color1.rgb[1] * (255 - (255 - color1.rgb[1]) * (255 - color2.rgb[1]) / 255 - t) / 255;
        t = color2.rgb[2] * color1.rgb[2] / 255;
        var b = t + color1.rgb[2] * (255 - (255 - color1.rgb[2]) * (255 - color2.rgb[2]) / 255 - t) / 255;
        return this.rgb(r, g, b);
    },
    hardlight: function(color1, color2) {
        var r = color2.rgb[0] < 128 ? 2 * color2.rgb[0] * color1.rgb[0] / 255 : 255 - 2 * (255 - color2.rgb[0]) * (255 - color1.rgb[0]) / 255;
        var g = color2.rgb[1] < 128 ? 2 * color2.rgb[1] * color1.rgb[1] / 255 : 255 - 2 * (255 - color2.rgb[1]) * (255 - color1.rgb[1]) / 255;
        var b = color2.rgb[2] < 128 ? 2 * color2.rgb[2] * color1.rgb[2] / 255 : 255 - 2 * (255 - color2.rgb[2]) * (255 - color1.rgb[2]) / 255;
        return this.rgb(r, g, b);
    },
    difference: function(color1, color2) {
        var r = Math.abs(color1.rgb[0] - color2.rgb[0]);
        var g = Math.abs(color1.rgb[1] - color2.rgb[1]);
        var b = Math.abs(color1.rgb[2] - color2.rgb[2]);
        return this.rgb(r, g, b);
    },
    exclusion: function(color1, color2) {
        var r = color1.rgb[0] + color2.rgb[0] * (255 - color1.rgb[0] - color1.rgb[0]) / 255;
        var g = color1.rgb[1] + color2.rgb[1] * (255 - color1.rgb[1] - color1.rgb[1]) / 255;
        var b = color1.rgb[2] + color2.rgb[2] * (255 - color1.rgb[2] - color1.rgb[2]) / 255;
        return this.rgb(r, g, b);
    },
    average: function(color1, color2) {
        var r = (color1.rgb[0] + color2.rgb[0]) / 2;
        var g = (color1.rgb[1] + color2.rgb[1]) / 2;
        var b = (color1.rgb[2] + color2.rgb[2]) / 2;
        return this.rgb(r, g, b);
    },
    negation: function(color1, color2) {
        var r = 255 - Math.abs(255 - color2.rgb[0] - color1.rgb[0]);
        var g = 255 - Math.abs(255 - color2.rgb[1] - color1.rgb[1]);
        var b = 255 - Math.abs(255 - color2.rgb[2] - color1.rgb[2]);
        return this.rgb(r, g, b);
    },
    tint: function(color, amount) {
        return this.mix(this.rgb(255,255,255), color, amount);
    },
    shade: function(color, amount) {
        return this.mix(this.rgb(0, 0, 0), color, amount);
    },   
    extract: function(values, index) {
        index = index.value - 1; // (1-based index)       
        // handle non-array values as an array of length 1
        // return 'undefined' if index is invalid
        return Array.isArray(values.value) 
            ? values.value[index] : Array(values)[index];
    },
    length: function(values) {
        var n = Array.isArray(values.value) ? values.value.length : 1;
        return new tree.Dimension(n);
    },

    "data-uri": function(mimetypeNode, filePathNode) {

        if (typeof window !== 'undefined') {
            return new tree.URL(filePathNode || mimetypeNode, this.currentFileInfo).eval(this.env);
        }

        var mimetype = mimetypeNode.value;
        var filePath = (filePathNode && filePathNode.value);

        var fs = require("fs"),
            path = require("path"),
            useBase64 = false;

        if (arguments.length < 2) {
            filePath = mimetype;
        }

        if (this.env.isPathRelative(filePath)) {
            if (this.currentFileInfo.relativeUrls) {
                filePath = path.join(this.currentFileInfo.currentDirectory, filePath);
            } else {
                filePath = path.join(this.currentFileInfo.entryPath, filePath);
            }
        }

        // detect the mimetype if not given
        if (arguments.length < 2) {
            var mime;
            try {
                mime = require('mime');
            } catch (ex) {
                mime = tree._mime;
            }

            mimetype = mime.lookup(filePath);

            // use base 64 unless it's an ASCII or UTF-8 format
            var charset = mime.charsets.lookup(mimetype);
            useBase64 = ['US-ASCII', 'UTF-8'].indexOf(charset) < 0;
            if (useBase64) { mimetype += ';base64'; }
        }
        else {
            useBase64 = /;base64$/.test(mimetype);
        }

        var buf = fs.readFileSync(filePath);

        // IE8 cannot handle a data-uri larger than 32KB. If this is exceeded
        // and the --ieCompat flag is enabled, return a normal url() instead.
        var DATA_URI_MAX_KB = 32,
            fileSizeInKB = parseInt((buf.length / 1024), 10);
        if (fileSizeInKB >= DATA_URI_MAX_KB) {

            if (this.env.ieCompat !== false) {
                if (!this.env.silent) {
                    console.warn("Skipped data-uri embedding of %s because its size (%dKB) exceeds IE8-safe %dKB!", filePath, fileSizeInKB, DATA_URI_MAX_KB);
                }

                return new tree.URL(filePathNode || mimetypeNode, this.currentFileInfo).eval(this.env);
            }
        }

        buf = useBase64 ? buf.toString('base64')
                        : encodeURIComponent(buf);

        var uri = "'data:" + mimetype + ',' + buf + "'";
        return new(tree.URL)(new(tree.Anonymous)(uri));
    },

    "svg-gradient": function(direction) {

        function throwArgumentDescriptor() {
            throw { type: "Argument", message: "svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position]" };
        }

        if (arguments.length < 3) {
            throwArgumentDescriptor();
        }
        var stops = Array.prototype.slice.call(arguments, 1),
            gradientDirectionSvg,
            gradientType = "linear",
            rectangleDimension = 'x="0" y="0" width="1" height="1"',
            useBase64 = true,
            renderEnv = {compress: false},
            returner,
            directionValue = direction.toCSS(renderEnv),
            i, color, position, positionValue, alpha;

        switch (directionValue) {
            case "to bottom":
                gradientDirectionSvg = 'x1="0%" y1="0%" x2="0%" y2="100%"';
                break;
            case "to right":
                gradientDirectionSvg = 'x1="0%" y1="0%" x2="100%" y2="0%"';
                break;
            case "to bottom right":
                gradientDirectionSvg = 'x1="0%" y1="0%" x2="100%" y2="100%"';
                break;
            case "to top right":
                gradientDirectionSvg = 'x1="0%" y1="100%" x2="100%" y2="0%"';
                break;
            case "ellipse":
            case "ellipse at center":
                gradientType = "radial";
                gradientDirectionSvg = 'cx="50%" cy="50%" r="75%"';
                rectangleDimension = 'x="-50" y="-50" width="101" height="101"';
                break;
            default:
                throw { type: "Argument", message: "svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'" };
        }
        returner = '<?xml version="1.0" ?>' +
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">' +
            '<' + gradientType + 'Gradient id="gradient" gradientUnits="userSpaceOnUse" ' + gradientDirectionSvg + '>';

        for (i = 0; i < stops.length; i+= 1) {
            if (stops[i].value) {
                color = stops[i].value[0];
                position = stops[i].value[1];
            } else {
                color = stops[i];
                position = undefined;
            }

            if (!(color instanceof tree.Color) || (!((i === 0 || i+1 === stops.length) && position === undefined) && !(position instanceof tree.Dimension))) {
                throwArgumentDescriptor();
            }
            positionValue = position ? position.toCSS(renderEnv) : i === 0 ? "0%" : "100%";
            alpha = color.alpha;
            returner += '<stop offset="' + positionValue + '" stop-color="' + color.toRGB() + '"' + (alpha < 1 ? ' stop-opacity="' + alpha + '"' : '') + '/>';
        }
        returner += '</' + gradientType + 'Gradient>' +
                    '<rect ' + rectangleDimension + ' fill="url(#gradient)" /></svg>';

        if (useBase64) {
            // only works in node, needs interface to what is supported in environment
            try {
                returner = new Buffer(returner).toString('base64');
            } catch(e) {
                useBase64 = false;
            }
        }

        returner = "'data:image/svg+xml" + (useBase64 ? ";base64" : "") + "," + returner + "'";
        return new(tree.URL)(new(tree.Anonymous)(returner));
    }
};

// these static methods are used as a fallback when the optional 'mime' dependency is missing
tree._mime = {
    // this map is intentionally incomplete
    // if you want more, install 'mime' dep
    _types: {
        '.htm' : 'text/html',
        '.html': 'text/html',
        '.gif' : 'image/gif',
        '.jpg' : 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png' : 'image/png'
    },
    lookup: function (filepath) {
        var ext = require('path').extname(filepath),
            type = tree._mime._types[ext];
        if (type === undefined) {
            throw new Error('Optional dependency "mime" is required for ' + ext);
        }
        return type;
    },
    charsets: {
        lookup: function (type) {
            // assumes all text types are UTF-8
            return type && (/^text\//).test(type) ? 'UTF-8' : '';
        }
    }
};

var mathFunctions = [{name:"ceil"}, {name:"floor"}, {name: "sqrt"}, {name:"abs"},
        {name:"tan", unit: ""}, {name:"sin", unit: ""}, {name:"cos", unit: ""},
        {name:"atan", unit: "rad"}, {name:"asin", unit: "rad"}, {name:"acos", unit: "rad"}],
    createMathFunction = function(name, unit) {
        return function(n) {
            /*jshint eqnull:true */
            if (unit != null) {
                n = n.unify();
            }
            return this._math(Math[name], unit, n);
        };
    };

for(var i = 0; i < mathFunctions.length; i++) {
    tree.functions[mathFunctions[i].name] = createMathFunction(mathFunctions[i].name, mathFunctions[i].unit);
}

function hsla(color) {
    return tree.functions.hsla(color.h, color.s, color.l, color.a);
}

function scaled(n, size) {
    if (n instanceof tree.Dimension && n.unit.is('%')) {
        return parseFloat(n.value * size / 100);
    } else {
        return number(n);
    }
}

function number(n) {
    if (n instanceof tree.Dimension) {
        return parseFloat(n.unit.is('%') ? n.value / 100 : n.value);
    } else if (typeof(n) === 'number') {
        return n;
    } else {
        throw {
            error: "RuntimeError",
            message: "color functions take numbers as parameters"
        };
    }
}

function clamp(val) {
    return Math.min(1, Math.max(0, val));
}

tree.functionCall = function(env, currentFileInfo) {
    this.env = env;
    this.currentFileInfo = currentFileInfo;
};

tree.functionCall.prototype = tree.functions;

})(require('./tree'));

(function (tree) {
    tree.colors = {
        'aliceblue':'#f0f8ff',
        'antiquewhite':'#faebd7',
        'aqua':'#00ffff',
        'aquamarine':'#7fffd4',
        'azure':'#f0ffff',
        'beige':'#f5f5dc',
        'bisque':'#ffe4c4',
        'black':'#000000',
        'blanchedalmond':'#ffebcd',
        'blue':'#0000ff',
        'blueviolet':'#8a2be2',
        'brown':'#a52a2a',
        'burlywood':'#deb887',
        'cadetblue':'#5f9ea0',
        'chartreuse':'#7fff00',
        'chocolate':'#d2691e',
        'coral':'#ff7f50',
        'cornflowerblue':'#6495ed',
        'cornsilk':'#fff8dc',
        'crimson':'#dc143c',
        'cyan':'#00ffff',
        'darkblue':'#00008b',
        'darkcyan':'#008b8b',
        'darkgoldenrod':'#b8860b',
        'darkgray':'#a9a9a9',
        'darkgrey':'#a9a9a9',
        'darkgreen':'#006400',
        'darkkhaki':'#bdb76b',
        'darkmagenta':'#8b008b',
        'darkolivegreen':'#556b2f',
        'darkorange':'#ff8c00',
        'darkorchid':'#9932cc',
        'darkred':'#8b0000',
        'darksalmon':'#e9967a',
        'darkseagreen':'#8fbc8f',
        'darkslateblue':'#483d8b',
        'darkslategray':'#2f4f4f',
        'darkslategrey':'#2f4f4f',
        'darkturquoise':'#00ced1',
        'darkviolet':'#9400d3',
        'deeppink':'#ff1493',
        'deepskyblue':'#00bfff',
        'dimgray':'#696969',
        'dimgrey':'#696969',
        'dodgerblue':'#1e90ff',
        'firebrick':'#b22222',
        'floralwhite':'#fffaf0',
        'forestgreen':'#228b22',
        'fuchsia':'#ff00ff',
        'gainsboro':'#dcdcdc',
        'ghostwhite':'#f8f8ff',
        'gold':'#ffd700',
        'goldenrod':'#daa520',
        'gray':'#808080',
        'grey':'#808080',
        'green':'#008000',
        'greenyellow':'#adff2f',
        'honeydew':'#f0fff0',
        'hotpink':'#ff69b4',
        'indianred':'#cd5c5c',
        'indigo':'#4b0082',
        'ivory':'#fffff0',
        'khaki':'#f0e68c',
        'lavender':'#e6e6fa',
        'lavenderblush':'#fff0f5',
        'lawngreen':'#7cfc00',
        'lemonchiffon':'#fffacd',
        'lightblue':'#add8e6',
        'lightcoral':'#f08080',
        'lightcyan':'#e0ffff',
        'lightgoldenrodyellow':'#fafad2',
        'lightgray':'#d3d3d3',
        'lightgrey':'#d3d3d3',
        'lightgreen':'#90ee90',
        'lightpink':'#ffb6c1',
        'lightsalmon':'#ffa07a',
        'lightseagreen':'#20b2aa',
        'lightskyblue':'#87cefa',
        'lightslategray':'#778899',
        'lightslategrey':'#778899',
        'lightsteelblue':'#b0c4de',
        'lightyellow':'#ffffe0',
        'lime':'#00ff00',
        'limegreen':'#32cd32',
        'linen':'#faf0e6',
        'magenta':'#ff00ff',
        'maroon':'#800000',
        'mediumaquamarine':'#66cdaa',
        'mediumblue':'#0000cd',
        'mediumorchid':'#ba55d3',
        'mediumpurple':'#9370d8',
        'mediumseagreen':'#3cb371',
        'mediumslateblue':'#7b68ee',
        'mediumspringgreen':'#00fa9a',
        'mediumturquoise':'#48d1cc',
        'mediumvioletred':'#c71585',
        'midnightblue':'#191970',
        'mintcream':'#f5fffa',
        'mistyrose':'#ffe4e1',
        'moccasin':'#ffe4b5',
        'navajowhite':'#ffdead',
        'navy':'#000080',
        'oldlace':'#fdf5e6',
        'olive':'#808000',
        'olivedrab':'#6b8e23',
        'orange':'#ffa500',
        'orangered':'#ff4500',
        'orchid':'#da70d6',
        'palegoldenrod':'#eee8aa',
        'palegreen':'#98fb98',
        'paleturquoise':'#afeeee',
        'palevioletred':'#d87093',
        'papayawhip':'#ffefd5',
        'peachpuff':'#ffdab9',
        'peru':'#cd853f',
        'pink':'#ffc0cb',
        'plum':'#dda0dd',
        'powderblue':'#b0e0e6',
        'purple':'#800080',
        'red':'#ff0000',
        'rosybrown':'#bc8f8f',
        'royalblue':'#4169e1',
        'saddlebrown':'#8b4513',
        'salmon':'#fa8072',
        'sandybrown':'#f4a460',
        'seagreen':'#2e8b57',
        'seashell':'#fff5ee',
        'sienna':'#a0522d',
        'silver':'#c0c0c0',
        'skyblue':'#87ceeb',
        'slateblue':'#6a5acd',
        'slategray':'#708090',
        'slategrey':'#708090',
        'snow':'#fffafa',
        'springgreen':'#00ff7f',
        'steelblue':'#4682b4',
        'tan':'#d2b48c',
        'teal':'#008080',
        'thistle':'#d8bfd8',
        'tomato':'#ff6347',
        'turquoise':'#40e0d0',
        'violet':'#ee82ee',
        'wheat':'#f5deb3',
        'white':'#ffffff',
        'whitesmoke':'#f5f5f5',
        'yellow':'#ffff00',
        'yellowgreen':'#9acd32'
    };
})(require('./tree'));

(function (tree) {

tree.debugInfo = function(env, ctx, lineSeperator) {
    var result="";
    if (env.dumpLineNumbers && !env.compress) {
        switch(env.dumpLineNumbers) {
            case 'comments':
                result = tree.debugInfo.asComment(ctx);
                break;
            case 'mediaquery':
                result = tree.debugInfo.asMediaQuery(ctx);
                break;
            case 'all':
                result = tree.debugInfo.asComment(ctx) + (lineSeperator || "") + tree.debugInfo.asMediaQuery(ctx);
                break;
        }
    }
    return result;
};

tree.debugInfo.asComment = function(ctx) {
    return '/* line ' + ctx.debugInfo.lineNumber + ', ' + ctx.debugInfo.fileName + ' */\n';
};

tree.debugInfo.asMediaQuery = function(ctx) {
    return '@media -sass-debug-info{filename{font-family:' +
        ('file://' + ctx.debugInfo.fileName).replace(/([.:/\\])/g, function (a) {
            if (a == '\\') {
                a = '\/';
            }
            return '\\' + a;
        }) +
        '}line{font-family:\\00003' + ctx.debugInfo.lineNumber + '}}\n';
};

tree.find = function (obj, fun) {
    for (var i = 0, r; i < obj.length; i++) {
        if (r = fun.call(obj, obj[i])) { return r; }
    }
    return null;
};

tree.jsify = function (obj) {
    if (Array.isArray(obj.value) && (obj.value.length > 1)) {
        return '[' + obj.value.map(function (v) { return v.toCSS(false); }).join(', ') + ']';
    } else {
        return obj.toCSS(false);
    }
};

tree.toCSS = function (env) {
    var strs = [];
    this.genCSS(env, {
        add: function(chunk, fileInfo, index) {
            strs.push(chunk);
        },
        isEmpty: function () {
            return strs.length === 0;
        }
    });
    return strs.join('');
};

tree.outputRuleset = function (env, output, rules) {
    output.add((env.compress ? '{' : ' {\n'));
    env.tabLevel = (env.tabLevel || 0) + 1;
    var tabRuleStr = env.compress ? '' : Array(env.tabLevel + 1).join("  "),
        tabSetStr = env.compress ? '' : Array(env.tabLevel).join("  ");
    for(var i = 0; i < rules.length; i++) {
        output.add(tabRuleStr);
        rules[i].genCSS(env, output);
        output.add(env.compress ? '' : '\n');
    }
    env.tabLevel--;
    output.add(tabSetStr + "}");
};

})(require('./tree'));

(function (tree) {

tree.Alpha = function (val) {
    this.value = val;
};
tree.Alpha.prototype = {
    type: "Alpha",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    eval: function (env) {
        if (this.value.eval) { return new tree.Alpha(this.value.eval(env)); }
        return this;
    },
    genCSS: function (env, output) {
        output.add("alpha(opacity=");

        if (this.value.genCSS) {
            this.value.genCSS(env, output);
        } else {
            output.add(this.value);
        }

        output.add(")");
    },
    toCSS: tree.toCSS
};

})(require('../tree'));

(function (tree) {

tree.Anonymous = function (string, index, currentFileInfo, mapLines) {
    this.value = string.value || string;
    this.index = index;
    this.mapLines = mapLines;
    this.currentFileInfo = currentFileInfo;
};
tree.Anonymous.prototype = {
    type: "Anonymous",
    eval: function () { return this; },
    compare: function (x) {
        if (!x.toCSS) {
            return -1;
        }
        
        var left = this.toCSS(),
            right = x.toCSS();
        
        if (left === right) {
            return 0;
        }
        
        return left < right ? -1 : 1;
    },
    genCSS: function (env, output) {
        output.add(this.value, this.currentFileInfo, this.index, this.mapLines);
    },
    toCSS: tree.toCSS
};

})(require('../tree'));

(function (tree) {

tree.Assignment = function (key, val) {
    this.key = key;
    this.value = val;
};
tree.Assignment.prototype = {
    type: "Assignment",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    eval: function (env) {
        if (this.value.eval) {
            return new(tree.Assignment)(this.key, this.value.eval(env));
        }
        return this;
    },
    genCSS: function (env, output) {
        output.add(this.key + '=');
        if (this.value.genCSS) {
            this.value.genCSS(env, output);
        } else {
            output.add(this.value);
        }
    },
    toCSS: tree.toCSS
};

})(require('../tree'));

(function (tree) {

//
// A function call node.
//
tree.Call = function (name, args, index, currentFileInfo) {
    this.name = name;
    this.args = args;
    this.index = index;
    this.currentFileInfo = currentFileInfo;
};
tree.Call.prototype = {
    type: "Call",
    accept: function (visitor) {
        this.args = visitor.visit(this.args);
    },
    //
    // When evaluating a function call,
    // we either find the function in `tree.functions` [1],
    // in which case we call it, passing the  evaluated arguments,
    // if this returns null or we cannot find the function, we 
    // simply print it out as it appeared originally [2].
    //
    // The *functions.js* file contains the built-in functions.
    //
    // The reason why we evaluate the arguments, is in the case where
    // we try to pass a variable to a function, like: `saturate(@color)`.
    // The function should receive the value, not the variable.
    //
    eval: function (env) {
        var args = this.args.map(function (a) { return a.eval(env); }),
            nameLC = this.name.toLowerCase(),
            result, func;

        if (nameLC in tree.functions) { // 1.
            try {
                func = new tree.functionCall(env, this.currentFileInfo);
                result = func[nameLC].apply(func, args);
                /*jshint eqnull:true */
                if (result != null) {
                    return result;
                }
            } catch (e) {
                throw { type: e.type || "Runtime",
                        message: "error evaluating function `" + this.name + "`" +
                                 (e.message ? ': ' + e.message : ''),
                        index: this.index, filename: this.currentFileInfo.filename };
            }
        }

        return new tree.Call(this.name, args, this.index, this.currentFileInfo);
    },

    genCSS: function (env, output) {
        output.add(this.name + "(", this.currentFileInfo, this.index);

        for(var i = 0; i < this.args.length; i++) {
            this.args[i].genCSS(env, output);
            if (i + 1 < this.args.length) {
                output.add(", ");
            }
        }

        output.add(")");
    },

    toCSS: tree.toCSS
};

})(require('../tree'));

(function (tree) {
//
// RGB Colors - #ff0014, #eee
//
tree.Color = function (rgb, a) {
    //
    // The end goal here, is to parse the arguments
    // into an integer triplet, such as `128, 255, 0`
    //
    // This facilitates operations and conversions.
    //
    if (Array.isArray(rgb)) {
        this.rgb = rgb;
    } else if (rgb.length == 6) {
        this.rgb = rgb.match(/.{2}/g).map(function (c) {
            return parseInt(c, 16);
        });
    } else {
        this.rgb = rgb.split('').map(function (c) {
            return parseInt(c + c, 16);
        });
    }
    this.alpha = typeof(a) === 'number' ? a : 1;
};

var transparentKeyword = "transparent";

tree.Color.prototype = {
    type: "Color",
    eval: function () { return this; },
    luma: function () { return (0.2126 * this.rgb[0] / 255) + (0.7152 * this.rgb[1] / 255) + (0.0722 * this.rgb[2] / 255); },

    genCSS: function (env, output) {
        output.add(this.toCSS(env));
    },
    toCSS: function (env, doNotCompress) {
        var compress = env && env.compress && !doNotCompress;

        // If we have some transparency, the only way to represent it
        // is via `rgba`. Otherwise, we use the hex representation,
        // which has better compatibility with older browsers.
        // Values are capped between `0` and `255`, rounded and zero-padded.
        if (this.alpha < 1.0) {
            if (this.alpha === 0 && this.isTransparentKeyword) {
                return transparentKeyword;
            }
            return "rgba(" + this.rgb.map(function (c) {
                return Math.round(c);
            }).concat(this.alpha).join(',' + (compress ? '' : ' ')) + ")";
        } else {
            var color = this.toRGB();

            if (compress) {
                var splitcolor = color.split('');

                // Convert color to short format
                if (splitcolor[1] === splitcolor[2] && splitcolor[3] === splitcolor[4] && splitcolor[5] === splitcolor[6]) {
                    color = '#' + splitcolor[1] + splitcolor[3] + splitcolor[5];
                }
            }

            return color;
        }
    },

    //
    // Operations have to be done per-channel, if not,
    // channels will spill onto each other. Once we have
    // our result, in the form of an integer triplet,
    // we create a new Color node to hold the result.
    //
    operate: function (env, op, other) {
        var result = [];

        if (! (other instanceof tree.Color)) {
            other = other.toColor();
        }

        for (var c = 0; c < 3; c++) {
            result[c] = tree.operate(env, op, this.rgb[c], other.rgb[c]);
        }
        return new(tree.Color)(result, this.alpha + other.alpha);
    },

    toRGB: function () {
        return '#' + this.rgb.map(function (i) {
            i = Math.round(i);
            i = (i > 255 ? 255 : (i < 0 ? 0 : i)).toString(16);
            return i.length === 1 ? '0' + i : i;
        }).join('');
    },

    toHSL: function () {
        var r = this.rgb[0] / 255,
            g = this.rgb[1] / 255,
            b = this.rgb[2] / 255,
            a = this.alpha;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2, d = max - min;

        if (max === min) {
            h = s = 0;
        } else {
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2;               break;
                case b: h = (r - g) / d + 4;               break;
            }
            h /= 6;
        }
        return { h: h * 360, s: s, l: l, a: a };
    },
    //Adapted from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    toHSV: function () {
        var r = this.rgb[0] / 255,
            g = this.rgb[1] / 255,
            b = this.rgb[2] / 255,
            a = this.alpha;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;

        var d = max - min;
        if (max === 0) {
            s = 0;
        } else {
            s = d / max;
        }

        if (max === min) {
            h = 0;
        } else {
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: h * 360, s: s, v: v, a: a };
    },
    toARGB: function () {
        var argb = [Math.round(this.alpha * 255)].concat(this.rgb);
        return '#' + argb.map(function (i) {
            i = Math.round(i);
            i = (i > 255 ? 255 : (i < 0 ? 0 : i)).toString(16);
            return i.length === 1 ? '0' + i : i;
        }).join('');
    },
    compare: function (x) {
        if (!x.rgb) {
            return -1;
        }
        
        return (x.rgb[0] === this.rgb[0] &&
            x.rgb[1] === this.rgb[1] &&
            x.rgb[2] === this.rgb[2] &&
            x.alpha === this.alpha) ? 0 : -1;
    }
};

tree.Color.fromKeyword = function(keyword) {
    if (tree.colors.hasOwnProperty(keyword)) {
        // detect named color
        return new(tree.Color)(tree.colors[keyword].slice(1));
    }
    if (keyword === transparentKeyword) {
        var transparent = new(tree.Color)([0, 0, 0], 0);
        transparent.isTransparentKeyword = true;
        return transparent;
    }
};


})(require('../tree'));

(function (tree) {

tree.Comment = function (value, silent, index, currentFileInfo) {
    this.value = value;
    this.silent = !!silent;
    this.currentFileInfo = currentFileInfo;
};
tree.Comment.prototype = {
    type: "Comment",
    genCSS: function (env, output) {
        if (this.debugInfo) {
            output.add(tree.debugInfo(env, this), this.currentFileInfo, this.index);
        }
        output.add(this.value.trim()); //TODO shouldn't need to trim, we shouldn't grab the \n
    },
    toCSS: tree.toCSS,
    isSilent: function(env) {
        var isReference = (this.currentFileInfo && this.currentFileInfo.reference && !this.isReferenced),
            isCompressed = env.compress && !this.value.match(/^\/\*!/);
        return this.silent || isReference || isCompressed;
    },
    eval: function () { return this; },
    markReferenced: function () {
        this.isReferenced = true;
    }
};

})(require('../tree'));

(function (tree) {

tree.Condition = function (op, l, r, i, negate) {
    this.op = op.trim();
    this.lvalue = l;
    this.rvalue = r;
    this.index = i;
    this.negate = negate;
};
tree.Condition.prototype = {
    type: "Condition",
    accept: function (visitor) {
        this.lvalue = visitor.visit(this.lvalue);
        this.rvalue = visitor.visit(this.rvalue);
    },
    eval: function (env) {
        var a = this.lvalue.eval(env),
            b = this.rvalue.eval(env);

        var i = this.index, result;

        result = (function (op) {
            switch (op) {
                case 'and':
                    return a && b;
                case 'or':
                    return a || b;
                default:
                    if (a.compare) {
                        result = a.compare(b);
                    } else if (b.compare) {
                        result = b.compare(a);
                    } else {
                        throw { type: "Type",
                                message: "Unable to perform comparison",
                                index: i };
                    }
                    switch (result) {
                        case -1: return op === '<' || op === '=<' || op === '<=';
                        case  0: return op === '=' || op === '>=' || op === '=<' || op === '<=';
                        case  1: return op === '>' || op === '>=';
                    }
            }
        })(this.op);
        return this.negate ? !result : result;
    }
};

})(require('../tree'));

(function (tree) {

//
// A number with a unit
//
tree.Dimension = function (value, unit) {
    this.value = parseFloat(value);
    this.unit = (unit && unit instanceof tree.Unit) ? unit :
      new(tree.Unit)(unit ? [unit] : undefined);
};

tree.Dimension.prototype = {
    type: "Dimension",
    accept: function (visitor) {
        this.unit = visitor.visit(this.unit);
    },
    eval: function (env) {
        return this;
    },
    toColor: function () {
        return new(tree.Color)([this.value, this.value, this.value]);
    },
    genCSS: function (env, output) {
        if ((env && env.strictUnits) && !this.unit.isSingular()) {
            throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: "+this.unit.toString());
        }

        var value = this.value,
            strValue = String(value);

        if (value !== 0 && value < 0.000001 && value > -0.000001) {
            // would be output 1e-6 etc.
            strValue = value.toFixed(20).replace(/0+$/, "");
        }

        if (env && env.compress) {
            // Zero values doesn't need a unit
            if (value === 0 && this.unit.isLength()) {
                output.add(strValue);
                return;
            }

            // Float values doesn't need a leading zero
            if (value > 0 && value < 1) {
                strValue = (strValue).substr(1);
            }
        }

        output.add(strValue);
        this.unit.genCSS(env, output);
    },
    toCSS: tree.toCSS,

    // In an operation between two Dimensions,
    // we default to the first Dimension's unit,
    // so `1px + 2` will yield `3px`.
    operate: function (env, op, other) {
        /*jshint noempty:false */
        var value = tree.operate(env, op, this.value, other.value),
            unit = this.unit.clone();

        if (op === '+' || op === '-') {
            if (unit.numerator.length === 0 && unit.denominator.length === 0) {
                unit.numerator = other.unit.numerator.slice(0);
                unit.denominator = other.unit.denominator.slice(0);
            } else if (other.unit.numerator.length === 0 && unit.denominator.length === 0) {
                // do nothing
            } else {
                other = other.convertTo(this.unit.usedUnits());

                if(env.strictUnits && other.unit.toString() !== unit.toString()) {
                  throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '" + unit.toString() +
                    "' and '" + other.unit.toString() + "'.");
                }

                value = tree.operate(env, op, this.value, other.value);
            }
        } else if (op === '*') {
            unit.numerator = unit.numerator.concat(other.unit.numerator).sort();
            unit.denominator = unit.denominator.concat(other.unit.denominator).sort();
            unit.cancel();
        } else if (op === '/') {
            unit.numerator = unit.numerator.concat(other.unit.denominator).sort();
            unit.denominator = unit.denominator.concat(other.unit.numerator).sort();
            unit.cancel();
        }
        return new(tree.Dimension)(value, unit);
    },

    compare: function (other) {
        if (other instanceof tree.Dimension) {
            var a = this.unify(), b = other.unify(),
                aValue = a.value, bValue = b.value;

            if (bValue > aValue) {
                return -1;
            } else if (bValue < aValue) {
                return 1;
            } else {
                if (!b.unit.isEmpty() && a.unit.compare(b.unit) !== 0) {
                    return -1;
                }
                return 0;
            }
        } else {
            return -1;
        }
    },

    unify: function () {
        return this.convertTo({ length: 'm', duration: 's', angle: 'rad' });
    },

    convertTo: function (conversions) {
        var value = this.value, unit = this.unit.clone(),
            i, groupName, group, targetUnit, derivedConversions = {}, applyUnit;

        if (typeof conversions === 'string') {
            for(i in tree.UnitConversions) {
                if (tree.UnitConversions[i].hasOwnProperty(conversions)) {
                    derivedConversions = {};
                    derivedConversions[i] = conversions;
                }
            }
            conversions = derivedConversions;
        }
        applyUnit = function (atomicUnit, denominator) {
          /*jshint loopfunc:true */
            if (group.hasOwnProperty(atomicUnit)) {
                if (denominator) {
                    value = value / (group[atomicUnit] / group[targetUnit]);
                } else {
                    value = value * (group[atomicUnit] / group[targetUnit]);
                }

                return targetUnit;
            }

            return atomicUnit;
        };

        for (groupName in conversions) {
            if (conversions.hasOwnProperty(groupName)) {
                targetUnit = conversions[groupName];
                group = tree.UnitConversions[groupName];

                unit.map(applyUnit);
            }
        }

        unit.cancel();

        return new(tree.Dimension)(value, unit);
    }
};

// http://www.w3.org/TR/css3-values/#absolute-lengths
tree.UnitConversions = {
    length: {
         'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'in': 0.0254,
        'pt': 0.0254 / 72,
        'pc': 0.0254 / 72 * 12
    },
    duration: {
        's': 1,
        'ms': 0.001
    },
    angle: {
        'rad': 1/(2*Math.PI),
        'deg': 1/360,
        'grad': 1/400,
        'turn': 1
    }
};

tree.Unit = function (numerator, denominator, backupUnit) {
    this.numerator = numerator ? numerator.slice(0).sort() : [];
    this.denominator = denominator ? denominator.slice(0).sort() : [];
    this.backupUnit = backupUnit;
};

tree.Unit.prototype = {
    type: "Unit",
    clone: function () {
        return new tree.Unit(this.numerator.slice(0), this.denominator.slice(0), this.backupUnit);
    },
    genCSS: function (env, output) {
        if (this.numerator.length >= 1) {
            output.add(this.numerator[0]);
        } else
        if (this.denominator.length >= 1) {
            output.add(this.denominator[0]);
        } else
        if ((!env || !env.strictUnits) && this.backupUnit) {
            output.add(this.backupUnit);
        }
    },
    toCSS: tree.toCSS,

    toString: function () {
      var i, returnStr = this.numerator.join("*");
      for (i = 0; i < this.denominator.length; i++) {
          returnStr += "/" + this.denominator[i];
      }
      return returnStr;
    },

    compare: function (other) {
        return this.is(other.toString()) ? 0 : -1;
    },

    is: function (unitString) {
        return this.toString() === unitString;
    },

    isLength: function () {
        return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/));
    },

    isEmpty: function () {
        return this.numerator.length === 0 && this.denominator.length === 0;
    },

    isSingular: function() {
        return this.numerator.length <= 1 && this.denominator.length === 0;
    },

    map: function(callback) {
        var i;

        for (i = 0; i < this.numerator.length; i++) {
            this.numerator[i] = callback(this.numerator[i], false);
        }

        for (i = 0; i < this.denominator.length; i++) {
            this.denominator[i] = callback(this.denominator[i], true);
        }
    },

    usedUnits: function() {
        var group, result = {}, mapUnit;

        mapUnit = function (atomicUnit) {
        /*jshint loopfunc:true */
            if (group.hasOwnProperty(atomicUnit) && !result[groupName]) {
                result[groupName] = atomicUnit;
            }

            return atomicUnit;
        };

        for (var groupName in tree.UnitConversions) {
            if (tree.UnitConversions.hasOwnProperty(groupName)) {
                group = tree.UnitConversions[groupName];

                this.map(mapUnit);
            }
        }

        return result;
    },

    cancel: function () {
        var counter = {}, atomicUnit, i, backup;

        for (i = 0; i < this.numerator.length; i++) {
            atomicUnit = this.numerator[i];
            if (!backup) {
                backup = atomicUnit;
            }
            counter[atomicUnit] = (counter[atomicUnit] || 0) + 1;
        }

        for (i = 0; i < this.denominator.length; i++) {
            atomicUnit = this.denominator[i];
            if (!backup) {
                backup = atomicUnit;
            }
            counter[atomicUnit] = (counter[atomicUnit] || 0) - 1;
        }

        this.numerator = [];
        this.denominator = [];

        for (atomicUnit in counter) {
            if (counter.hasOwnProperty(atomicUnit)) {
                var count = counter[atomicUnit];

                if (count > 0) {
                    for (i = 0; i < count; i++) {
                        this.numerator.push(atomicUnit);
                    }
                } else if (count < 0) {
                    for (i = 0; i < -count; i++) {
                        this.denominator.push(atomicUnit);
                    }
                }
            }
        }

        if (this.numerator.length === 0 && this.denominator.length === 0 && backup) {
            this.backupUnit = backup;
        }

        this.numerator.sort();
        this.denominator.sort();
    }
};

})(require('../tree'));

(function (tree) {

tree.Directive = function (name, value, index, currentFileInfo) {
    this.name = name;

    if (Array.isArray(value)) {
        this.rules = [new(tree.Ruleset)([], value)];
        this.rules[0].allowImports = true;
    } else {
        this.value = value;
    }
    this.currentFileInfo = currentFileInfo;

};
tree.Directive.prototype = {
    type: "Directive",
    accept: function (visitor) {
        this.rules = visitor.visit(this.rules);
        this.value = visitor.visit(this.value);
    },
    genCSS: function (env, output) {
        output.add(this.name, this.currentFileInfo, this.index);
        if (this.rules) {
            tree.outputRuleset(env, output, this.rules);
        } else {
            output.add(' ');
            this.value.genCSS(env, output);
            output.add(';');
        }
    },
    toCSS: tree.toCSS,
    eval: function (env) {
        var evaldDirective = this;
        if (this.rules) {
            env.frames.unshift(this);
            evaldDirective = new(tree.Directive)(this.name, null, this.index, this.currentFileInfo);
            evaldDirective.rules = [this.rules[0].eval(env)];
            evaldDirective.rules[0].root = true;
            env.frames.shift();
        }
        return evaldDirective;
    },
    variable: function (name) { return tree.Ruleset.prototype.variable.call(this.rules[0], name); },
    find: function () { return tree.Ruleset.prototype.find.apply(this.rules[0], arguments); },
    rulesets: function () { return tree.Ruleset.prototype.rulesets.apply(this.rules[0]); },
    markReferenced: function () {
        var i, rules;
        this.isReferenced = true;
        if (this.rules) {
            rules = this.rules[0].rules;
            for (i = 0; i < rules.length; i++) {
                if (rules[i].markReferenced) {
                    rules[i].markReferenced();
                }
            }
        }
    }
};

})(require('../tree'));

(function (tree) {

tree.Element = function (combinator, value, index, currentFileInfo) {
    this.combinator = combinator instanceof tree.Combinator ?
                      combinator : new(tree.Combinator)(combinator);

    if (typeof(value) === 'string') {
        this.value = value.trim();
    } else if (value) {
        this.value = value;
    } else {
        this.value = "";
    }
    this.index = index;
    this.currentFileInfo = currentFileInfo;
};
tree.Element.prototype = {
    type: "Element",
    accept: function (visitor) {
        this.combinator = visitor.visit(this.combinator);
        this.value = visitor.visit(this.value);
    },
    eval: function (env) {
        return new(tree.Element)(this.combinator,
                                 this.value.eval ? this.value.eval(env) : this.value,
                                 this.index,
                                 this.currentFileInfo);
    },
    genCSS: function (env, output) {
        output.add(this.toCSS(env), this.currentFileInfo, this.index);
    },
    toCSS: function (env) {
        var value = (this.value.toCSS ? this.value.toCSS(env) : this.value);
        if (value === '' && this.combinator.value.charAt(0) === '&') {
            return '';
        } else {
            return this.combinator.toCSS(env || {}) + value;
        }
    }
};

tree.Attribute = function (key, op, value) {
    this.key = key;
    this.op = op;
    this.value = value;
};
tree.Attribute.prototype = {
    type: "Attribute",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    eval: function (env) {
        return new(tree.Attribute)(this.key.eval ? this.key.eval(env) : this.key,
            this.op, (this.value && this.value.eval) ? this.value.eval(env) : this.value);
    },
    genCSS: function (env, output) {
        output.add(this.toCSS(env));
    },
    toCSS: function (env) {
        var value = this.key.toCSS ? this.key.toCSS(env) : this.key;

        if (this.op) {
            value += this.op;
            value += (this.value.toCSS ? this.value.toCSS(env) : this.value);
        }

        return '[' + value + ']';
    }
};

tree.Combinator = function (value) {
    if (value === ' ') {
        this.value = ' ';
    } else {
        this.value = value ? value.trim() : "";
    }
};
tree.Combinator.prototype = {
    type: "Combinator",
    _outputMap: {
        ''  : '',
        ' ' : ' ',
        ':' : ' :',
        '+' : ' + ',
        '~' : ' ~ ',
        '>' : ' > ',
        '|' : '|'
    },
    _outputMapCompressed: {
        ''  : '',
        ' ' : ' ',
        ':' : ' :',
        '+' : '+',
        '~' : '~',
        '>' : '>',
        '|' : '|'
    },
    genCSS: function (env, output) {
        output.add((env.compress ? this._outputMapCompressed : this._outputMap)[this.value]);
    },
    toCSS: tree.toCSS
};

})(require('../tree'));

(function (tree) {

tree.Expression = function (value) { this.value = value; };
tree.Expression.prototype = {
    type: "Expression",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    eval: function (env) {
        var returnValue,
            inParenthesis = this.parens && !this.parensInOp,
            doubleParen = false;
        if (inParenthesis) {
            env.inParenthesis();
        }
        if (this.value.length > 1) {
            returnValue = new(tree.Expression)(this.value.map(function (e) {
                return e.eval(env);
            }));
        } else if (this.value.length === 1) {
            if (this.value[0].parens && !this.value[0].parensInOp) {
                doubleParen = true;
            }
            returnValue = this.value[0].eval(env);
        } else {
            returnValue = this;
        }
        if (inParenthesis) {
            env.outOfParenthesis();
        }
        if (this.parens && this.parensInOp && !(env.isMathOn()) && !doubleParen) {
            returnValue = new(tree.Paren)(returnValue);
        }
        return returnValue;
    },
    genCSS: function (env, output) {
        for(var i = 0; i < this.value.length; i++) {
            this.value[i].genCSS(env, output);
            if (i + 1 < this.value.length) {
                output.add(" ");
            }
        }
    },
    toCSS: tree.toCSS,
    throwAwayComments: function () {
        this.value = this.value.filter(function(v) {
            return !(v instanceof tree.Comment);
        });
    }
};

})(require('../tree'));

(function (tree) {

tree.Extend = function Extend(selector, option, index) {
    this.selector = selector;
    this.option = option;
    this.index = index;

    switch(option) {
        case "all":
            this.allowBefore = true;
            this.allowAfter = true;
        break;
        default:
            this.allowBefore = false;
            this.allowAfter = false;
        break;
    }
};

tree.Extend.prototype = {
    type: "Extend",
    accept: function (visitor) {
        this.selector = visitor.visit(this.selector);
    },
    eval: function (env) {
        return new(tree.Extend)(this.selector.eval(env), this.option, this.index);
    },
    clone: function (env) {
        return new(tree.Extend)(this.selector, this.option, this.index);
    },
    findSelfSelectors: function (selectors) {
        var selfElements = [],
            i,
            selectorElements;

        for(i = 0; i < selectors.length; i++) {
            selectorElements = selectors[i].elements;
            // duplicate the logic in genCSS function inside the selector node.
            // future TODO - move both logics into the selector joiner visitor
            if (i > 0 && selectorElements.length && selectorElements[0].combinator.value === "") {
                selectorElements[0].combinator.value = ' ';
            }
            selfElements = selfElements.concat(selectors[i].elements);
        }

        this.selfSelectors = [{ elements: selfElements }];
    }
};

})(require('../tree'));

(function (tree) {
//
// CSS @import node
//
// The general strategy here is that we don't want to wait
// for the parsing to be completed, before we start importing
// the file. That's because in the context of a browser,
// most of the time will be spent waiting for the server to respond.
//
// On creation, we push the import path to our import queue, though
// `import,push`, we also pass it a callback, which it'll call once
// the file has been fetched, and parsed.
//
tree.Import = function (path, features, options, index, currentFileInfo) {
    this.options = options;
    this.index = index;
    this.path = path;
    this.features = features;
    this.currentFileInfo = currentFileInfo;

    if (this.options.less !== undefined || this.options.inline) {
        this.css = !this.options.less || this.options.inline;
    } else {
        var pathValue = this.getPath();
        if (pathValue && /css([\?;].*)?$/.test(pathValue)) {
            this.css = true;
        }
    }
};

//
// The actual import node doesn't return anything, when converted to CSS.
// The reason is that it's used at the evaluation stage, so that the rules
// it imports can be treated like any other rules.
//
// In `eval`, we make sure all Import nodes get evaluated, recursively, so
// we end up with a flat structure, which can easily be imported in the parent
// ruleset.
//
tree.Import.prototype = {
    type: "Import",
    accept: function (visitor) {
        this.features = visitor.visit(this.features);
        this.path = visitor.visit(this.path);
        if (!this.options.inline) {
            this.root = visitor.visit(this.root);
        }
    },
    genCSS: function (env, output) {
        if (this.css) {
            output.add("@import ", this.currentFileInfo, this.index);
            this.path.genCSS(env, output);
            if (this.features) {
                output.add(" ");
                this.features.genCSS(env, output);
            }
            output.add(';');
        }
    },
    toCSS: tree.toCSS,
    getPath: function () {
        if (this.path instanceof tree.Quoted) {
            var path = this.path.value;
            return (this.css !== undefined || /(\.[a-z]*$)|([\?;].*)$/.test(path)) ? path : path + '.less';
        } else if (this.path instanceof tree.URL) {
            return this.path.value.value;
        }
        return null;
    },
    evalForImport: function (env) {
        return new(tree.Import)(this.path.eval(env), this.features, this.options, this.index, this.currentFileInfo);
    },
    evalPath: function (env) {
        var path = this.path.eval(env);
        var rootpath = this.currentFileInfo && this.currentFileInfo.rootpath;

        if (!(path instanceof tree.URL)) {
            if (rootpath) {
                var pathValue = path.value;
                // Add the base path if the import is relative
                if (pathValue && env.isPathRelative(pathValue)) {
                    path.value = rootpath + pathValue;
                }
            }
            path.value = env.normalizePath(path.value);
        }

        return path;
    },
    eval: function (env) {
        var ruleset, features = this.features && this.features.eval(env);

        if (this.skip) { return []; }

        if (this.options.inline) {
            //todo needs to reference css file not import
            var contents = new(tree.Anonymous)(this.root, 0, {filename: this.importedFilename}, true);
            return this.features ? new(tree.Media)([contents], this.features.value) : [contents];
        } else if (this.css) {
            var newImport = new(tree.Import)(this.evalPath(env), features, this.options, this.index);
            if (!newImport.css && this.error) {
                throw this.error;
            }
            return newImport;
        } else {
            ruleset = new(tree.Ruleset)([], this.root.rules.slice(0));

            ruleset.evalImports(env);

            return this.features ? new(tree.Media)(ruleset.rules, this.features.value) : ruleset.rules;
        }
    }
};

})(require('../tree'));

(function (tree) {

tree.JavaScript = function (string, index, escaped) {
    this.escaped = escaped;
    this.expression = string;
    this.index = index;
};
tree.JavaScript.prototype = {
    type: "JavaScript",
    eval: function (env) {
        var result,
            that = this,
            context = {};

        var expression = this.expression.replace(/@\{([\w-]+)\}/g, function (_, name) {
            return tree.jsify(new(tree.Variable)('@' + name, that.index).eval(env));
        });

        try {
            expression = new(Function)('return (' + expression + ')');
        } catch (e) {
            throw { message: "JavaScript evaluation error: " + e.message + " from `" + expression + "`" ,
                    index: this.index };
        }

        for (var k in env.frames[0].variables()) {
            /*jshint loopfunc:true */
            context[k.slice(1)] = {
                value: env.frames[0].variables()[k].value,
                toJS: function () {
                    return this.value.eval(env).toCSS();
                }
            };
        }

        try {
            result = expression.call(context);
        } catch (e) {
            throw { message: "JavaScript evaluation error: '" + e.name + ': ' + e.message + "'" ,
                    index: this.index };
        }
        if (typeof(result) === 'string') {
            return new(tree.Quoted)('"' + result + '"', result, this.escaped, this.index);
        } else if (Array.isArray(result)) {
            return new(tree.Anonymous)(result.join(', '));
        } else {
            return new(tree.Anonymous)(result);
        }
    }
};

})(require('../tree'));


(function (tree) {

tree.Keyword = function (value) { this.value = value; };
tree.Keyword.prototype = {
    type: "Keyword",
    eval: function () { return this; },
    genCSS: function (env, output) {
        output.add(this.value);
    },
    toCSS: tree.toCSS,
    compare: function (other) {
        if (other instanceof tree.Keyword) {
            return other.value === this.value ? 0 : 1;
        } else {
            return -1;
        }
    }
};

tree.True = new(tree.Keyword)('true');
tree.False = new(tree.Keyword)('false');

})(require('../tree'));

(function (tree) {

tree.Media = function (value, features, index, currentFileInfo) {
    this.index = index;
    this.currentFileInfo = currentFileInfo;

    var selectors = this.emptySelectors();

    this.features = new(tree.Value)(features);
    this.rules = [new(tree.Ruleset)(selectors, value)];
    this.rules[0].allowImports = true;
};
tree.Media.prototype = {
    type: "Media",
    accept: function (visitor) {
        this.features = visitor.visit(this.features);
        this.rules = visitor.visit(this.rules);
    },
    genCSS: function (env, output) {
        output.add('@media ', this.currentFileInfo, this.index);
        this.features.genCSS(env, output);
        tree.outputRuleset(env, output, this.rules);
    },
    toCSS: tree.toCSS,
    eval: function (env) {
        if (!env.mediaBlocks) {
            env.mediaBlocks = [];
            env.mediaPath = [];
        }
        
        var media = new(tree.Media)([], [], this.index, this.currentFileInfo);
        if(this.debugInfo) {
            this.rules[0].debugInfo = this.debugInfo;
            media.debugInfo = this.debugInfo;
        }
        var strictMathBypass = false;
        if (!env.strictMath) {
            strictMathBypass = true;
            env.strictMath = true;
        }
        try {
            media.features = this.features.eval(env);
        }
        finally {
            if (strictMathBypass) {
                env.strictMath = false;
            }
        }
        
        env.mediaPath.push(media);
        env.mediaBlocks.push(media);
        
        env.frames.unshift(this.rules[0]);
        media.rules = [this.rules[0].eval(env)];
        env.frames.shift();
        
        env.mediaPath.pop();

        return env.mediaPath.length === 0 ? media.evalTop(env) :
                    media.evalNested(env);
    },
    variable: function (name) { return tree.Ruleset.prototype.variable.call(this.rules[0], name); },
    find: function () { return tree.Ruleset.prototype.find.apply(this.rules[0], arguments); },
    rulesets: function () { return tree.Ruleset.prototype.rulesets.apply(this.rules[0]); },
    emptySelectors: function() { 
        var el = new(tree.Element)('', '&', this.index, this.currentFileInfo);
        return [new(tree.Selector)([el], null, null, this.index, this.currentFileInfo)];
    },
    markReferenced: function () {
        var i, rules = this.rules[0].rules;
        this.isReferenced = true;
        for (i = 0; i < rules.length; i++) {
            if (rules[i].markReferenced) {
                rules[i].markReferenced();
            }
        }
    },

    evalTop: function (env) {
        var result = this;

        // Render all dependent Media blocks.
        if (env.mediaBlocks.length > 1) {
            var selectors = this.emptySelectors();
            result = new(tree.Ruleset)(selectors, env.mediaBlocks);
            result.multiMedia = true;
        }

        delete env.mediaBlocks;
        delete env.mediaPath;

        return result;
    },
    evalNested: function (env) {
        var i, value,
            path = env.mediaPath.concat([this]);

        // Extract the media-query conditions separated with `,` (OR).
        for (i = 0; i < path.length; i++) {
            value = path[i].features instanceof tree.Value ?
                        path[i].features.value : path[i].features;
            path[i] = Array.isArray(value) ? value : [value];
        }

        // Trace all permutations to generate the resulting media-query.
        //
        // (a, b and c) with nested (d, e) ->
        //    a and d
        //    a and e
        //    b and c and d
        //    b and c and e
        this.features = new(tree.Value)(this.permute(path).map(function (path) {
            path = path.map(function (fragment) {
                return fragment.toCSS ? fragment : new(tree.Anonymous)(fragment);
            });

            for(i = path.length - 1; i > 0; i--) {
                path.splice(i, 0, new(tree.Anonymous)("and"));
            }

            return new(tree.Expression)(path);
        }));

        // Fake a tree-node that doesn't output anything.
        return new(tree.Ruleset)([], []);
    },
    permute: function (arr) {
      if (arr.length === 0) {
          return [];
      } else if (arr.length === 1) {
          return arr[0];
      } else {
          var result = [];
          var rest = this.permute(arr.slice(1));
          for (var i = 0; i < rest.length; i++) {
              for (var j = 0; j < arr[0].length; j++) {
                  result.push([arr[0][j]].concat(rest[i]));
              }
          }
          return result;
      }
    },
    bubbleSelectors: function (selectors) {
      this.rules = [new(tree.Ruleset)(selectors.slice(0), [this.rules[0]])];
    }
};

})(require('../tree'));

(function (tree) {

tree.mixin = {};
tree.mixin.Call = function (elements, args, index, currentFileInfo, important) {
    this.selector = new(tree.Selector)(elements);
    this.arguments = args;
    this.index = index;
    this.currentFileInfo = currentFileInfo;
    this.important = important;
};
tree.mixin.Call.prototype = {
    type: "MixinCall",
    accept: function (visitor) {
        this.selector = visitor.visit(this.selector);
        this.arguments = visitor.visit(this.arguments);
    },
    eval: function (env) {
        var mixins, mixin, args, rules = [], match = false, i, m, f, isRecursive, isOneFound, rule;

        args = this.arguments && this.arguments.map(function (a) {
            return { name: a.name, value: a.value.eval(env) };
        });

        for (i = 0; i < env.frames.length; i++) {
            if ((mixins = env.frames[i].find(this.selector)).length > 0) {
                isOneFound = true;
                for (m = 0; m < mixins.length; m++) {
                    mixin = mixins[m];
                    isRecursive = false;
                    for(f = 0; f < env.frames.length; f++) {
                        if ((!(mixin instanceof tree.mixin.Definition)) && mixin === (env.frames[f].originalRuleset || env.frames[f])) {
                            isRecursive = true;
                            break;
                        }
                    }
                    if (isRecursive) {
                        continue;
                    }
                    if (mixin.matchArgs(args, env)) {
                        if (!mixin.matchCondition || mixin.matchCondition(args, env)) {
                            try {
                                if (!(mixin instanceof tree.mixin.Definition)) {
                                    mixin = new tree.mixin.Definition("", [], mixin.rules, null, false);
                                    mixin.originalRuleset = mixins[m].originalRuleset || mixins[m];
                                }
                                //if (this.important) {
                                //    isImportant = env.isImportant;
                                //    env.isImportant = true;
                                //}
                                Array.prototype.push.apply(
                                      rules, mixin.eval(env, args, this.important).rules);
                                //if (this.important) {
                                //    env.isImportant = isImportant;
                                //}
                            } catch (e) {
                                throw { message: e.message, index: this.index, filename: this.currentFileInfo.filename, stack: e.stack };
                            }
                        }
                        match = true;
                    }
                }
                if (match) {
                    if (!this.currentFileInfo || !this.currentFileInfo.reference) {
                        for (i = 0; i < rules.length; i++) {
                            rule = rules[i];
                            if (rule.markReferenced) {
                                rule.markReferenced();
                            }
                        }
                    }
                    return rules;
                }
            }
        }
        if (isOneFound) {
            throw { type:    'Runtime',
                    message: 'No matching definition was found for `' +
                              this.selector.toCSS().trim() + '('      +
                              (args ? args.map(function (a) {
                                  var argValue = "";
                                  if (a.name) {
                                      argValue += a.name + ":";
                                  }
                                  if (a.value.toCSS) {
                                      argValue += a.value.toCSS();
                                  } else {
                                      argValue += "???";
                                  }
                                  return argValue;
                              }).join(', ') : "") + ")`",
                    index:   this.index, filename: this.currentFileInfo.filename };
        } else {
            throw { type: 'Name',
                message: this.selector.toCSS().trim() + " is undefined",
                index: this.index, filename: this.currentFileInfo.filename };
        }
    }
};

tree.mixin.Definition = function (name, params, rules, condition, variadic) {
    this.name = name;
    this.selectors = [new(tree.Selector)([new(tree.Element)(null, name, this.index, this.currentFileInfo)])];
    this.params = params;
    this.condition = condition;
    this.variadic = variadic;
    this.arity = params.length;
    this.rules = rules;
    this._lookups = {};
    this.required = params.reduce(function (count, p) {
        if (!p.name || (p.name && !p.value)) { return count + 1; }
        else                                 { return count; }
    }, 0);
    this.parent = tree.Ruleset.prototype;
    this.frames = [];
};
tree.mixin.Definition.prototype = {
    type: "MixinDefinition",
    accept: function (visitor) {
        this.params = visitor.visit(this.params);
        this.rules = visitor.visit(this.rules);
        this.condition = visitor.visit(this.condition);
    },
    variable:  function (name) { return this.parent.variable.call(this, name); },
    variables: function ()     { return this.parent.variables.call(this); },
    find:      function ()     { return this.parent.find.apply(this, arguments); },
    rulesets:  function ()     { return this.parent.rulesets.apply(this); },

    evalParams: function (env, mixinEnv, args, evaldArguments) {
        /*jshint boss:true */
        var frame = new(tree.Ruleset)(null, []),
            varargs, arg,
            params = this.params.slice(0),
            i, j, val, name, isNamedFound, argIndex;

        mixinEnv = new tree.evalEnv(mixinEnv, [frame].concat(mixinEnv.frames));
        
        if (args) {
            args = args.slice(0);

            for(i = 0; i < args.length; i++) {
                arg = args[i];
                if (name = (arg && arg.name)) {
                    isNamedFound = false;
                    for(j = 0; j < params.length; j++) {
                        if (!evaldArguments[j] && name === params[j].name) {
                            evaldArguments[j] = arg.value.eval(env);
                            frame.rules.unshift(new(tree.Rule)(name, arg.value.eval(env)));
                            isNamedFound = true;
                            break;
                        }
                    }
                    if (isNamedFound) {
                        args.splice(i, 1);
                        i--;
                        continue;
                    } else {
                        throw { type: 'Runtime', message: "Named argument for " + this.name +
                            ' ' + args[i].name + ' not found' };
                    }
                }
            }
        }
        argIndex = 0;
        for (i = 0; i < params.length; i++) {
            if (evaldArguments[i]) { continue; }
            
            arg = args && args[argIndex];

            if (name = params[i].name) {
                if (params[i].variadic && args) {
                    varargs = [];
                    for (j = argIndex; j < args.length; j++) {
                        varargs.push(args[j].value.eval(env));
                    }
                    frame.rules.unshift(new(tree.Rule)(name, new(tree.Expression)(varargs).eval(env)));
                } else {
                    val = arg && arg.value;
                    if (val) {
                        val = val.eval(env);
                    } else if (params[i].value) {
                        val = params[i].value.eval(mixinEnv);
                        frame.resetCache();
                    } else {
                        throw { type: 'Runtime', message: "wrong number of arguments for " + this.name +
                            ' (' + args.length + ' for ' + this.arity + ')' };
                    }
                    
                    frame.rules.unshift(new(tree.Rule)(name, val));
                    evaldArguments[i] = val;
                }
            }
            
            if (params[i].variadic && args) {
                for (j = argIndex; j < args.length; j++) {
                    evaldArguments[j] = args[j].value.eval(env);
                }
            }
            argIndex++;
        }

        return frame;
    },
    eval: function (env, args, important) {
        var _arguments = [],
            mixinFrames = this.frames.concat(env.frames),
            frame = this.evalParams(env, new(tree.evalEnv)(env, mixinFrames), args, _arguments),
            rules, ruleset;

        frame.rules.unshift(new(tree.Rule)('@arguments', new(tree.Expression)(_arguments).eval(env)));

        rules = this.rules.slice(0);

        ruleset = new(tree.Ruleset)(null, rules);
        ruleset.originalRuleset = this;
        ruleset = ruleset.eval(new(tree.evalEnv)(env, [this, frame].concat(mixinFrames)));
        if (important) {
            ruleset = this.parent.makeImportant.apply(ruleset);
        }
        return ruleset;
    },
    matchCondition: function (args, env) {
        if (this.condition && !this.condition.eval(
            new(tree.evalEnv)(env,
                [this.evalParams(env, new(tree.evalEnv)(env, this.frames.concat(env.frames)), args, [])] // the parameter variables
                    .concat(this.frames) // the parent namespace/mixin frames
                    .concat(env.frames)))) { // the current environment frames
            return false;
        }
        return true;
    },
    matchArgs: function (args, env) {
        var argsLength = (args && args.length) || 0, len;

        if (! this.variadic) {
            if (argsLength < this.required)                               { return false; }
            if (argsLength > this.params.length)                          { return false; }
        } else {
            if (argsLength < (this.required - 1))                         { return false; }
        }

        len = Math.min(argsLength, this.arity);

        for (var i = 0; i < len; i++) {
            if (!this.params[i].name && !this.params[i].variadic) {
                if (args[i].value.eval(env).toCSS() != this.params[i].value.eval(env).toCSS()) {
                    return false;
                }
            }
        }
        return true;
    }
};

})(require('../tree'));

(function (tree) {

tree.Negative = function (node) {
    this.value = node;
};
tree.Negative.prototype = {
    type: "Negative",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    genCSS: function (env, output) {
        output.add('-');
        this.value.genCSS(env, output);
    },
    toCSS: tree.toCSS,
    eval: function (env) {
        if (env.isMathOn()) {
            return (new(tree.Operation)('*', [new(tree.Dimension)(-1), this.value])).eval(env);
        }
        return new(tree.Negative)(this.value.eval(env));
    }
};

})(require('../tree'));

(function (tree) {

tree.Operation = function (op, operands, isSpaced) {
    this.op = op.trim();
    this.operands = operands;
    this.isSpaced = isSpaced;
};
tree.Operation.prototype = {
    type: "Operation",
    accept: function (visitor) {
        this.operands = visitor.visit(this.operands);
    },
    eval: function (env) {
        var a = this.operands[0].eval(env),
            b = this.operands[1].eval(env),
            temp;

        if (env.isMathOn()) {
            if (a instanceof tree.Dimension && b instanceof tree.Color) {
                if (this.op === '*' || this.op === '+') {
                    temp = b, b = a, a = temp;
                } else {
                    throw { type: "Operation",
                            message: "Can't substract or divide a color from a number" };
                }
            }
            if (!a.operate) {
                throw { type: "Operation",
                        message: "Operation on an invalid type" };
            }

            return a.operate(env, this.op, b);
        } else {
            return new(tree.Operation)(this.op, [a, b], this.isSpaced);
        }
    },
    genCSS: function (env, output) {
        this.operands[0].genCSS(env, output);
        if (this.isSpaced) {
            output.add(" ");
        }
        output.add(this.op);
        if (this.isSpaced) {
            output.add(" ");
        }
        this.operands[1].genCSS(env, output);
    },
    toCSS: tree.toCSS
};

tree.operate = function (env, op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
};

})(require('../tree'));


(function (tree) {

tree.Paren = function (node) {
    this.value = node;
};
tree.Paren.prototype = {
    type: "Paren",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    genCSS: function (env, output) {
        output.add('(');
        this.value.genCSS(env, output);
        output.add(')');
    },
    toCSS: tree.toCSS,
    eval: function (env) {
        return new(tree.Paren)(this.value.eval(env));
    }
};

})(require('../tree'));

(function (tree) {

tree.Quoted = function (str, content, escaped, index, currentFileInfo) {
    this.escaped = escaped;
    this.value = content || '';
    this.quote = str.charAt(0);
    this.index = index;
    this.currentFileInfo = currentFileInfo;
};
tree.Quoted.prototype = {
    type: "Quoted",
    genCSS: function (env, output) {
        if (!this.escaped) {
            output.add(this.quote, this.currentFileInfo, this.index);
        }
        output.add(this.value);
        if (!this.escaped) {
            output.add(this.quote);
        }
    },
    toCSS: tree.toCSS,
    eval: function (env) {
        var that = this;
        var value = this.value.replace(/`([^`]+)`/g, function (_, exp) {
            return new(tree.JavaScript)(exp, that.index, true).eval(env).value;
        }).replace(/@\{([\w-]+)\}/g, function (_, name) {
            var v = new(tree.Variable)('@' + name, that.index, that.currentFileInfo).eval(env, true);
            return (v instanceof tree.Quoted) ? v.value : v.toCSS();
        });
        return new(tree.Quoted)(this.quote + value + this.quote, value, this.escaped, this.index, this.currentFileInfo);
    },
    compare: function (x) {
        if (!x.toCSS) {
            return -1;
        }
        
        var left = this.toCSS(),
            right = x.toCSS();
        
        if (left === right) {
            return 0;
        }
        
        return left < right ? -1 : 1;
    }
};

})(require('../tree'));

(function (tree) {

tree.Rule = function (name, value, important, merge, index, currentFileInfo, inline) {
    this.name = name;
    this.value = (value instanceof tree.Value) ? value : new(tree.Value)([value]);
    this.important = important ? ' ' + important.trim() : '';
    this.merge = merge;
    this.index = index;
    this.currentFileInfo = currentFileInfo;
    this.inline = inline || false;
    this.variable = (name.charAt(0) === '@');
};

tree.Rule.prototype = {
    type: "Rule",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    genCSS: function (env, output) {
        output.add(this.name + (env.compress ? ':' : ': '), this.currentFileInfo, this.index);
        try {
            this.value.genCSS(env, output);
        }
        catch(e) {
            e.index = this.index;
            e.filename = this.currentFileInfo.filename;
            throw e;
        }
        output.add(this.important + ((this.inline || (env.lastRule && env.compress)) ? "" : ";"), this.currentFileInfo, this.index);
    },
    toCSS: tree.toCSS,
    eval: function (env) {
        var strictMathBypass = false;
        if (this.name === "font" && !env.strictMath) {
            strictMathBypass = true;
            env.strictMath = true;
        }
        try {
            return new(tree.Rule)(this.name,
                              this.value.eval(env),
                              this.important,
                              this.merge,
                              this.index, this.currentFileInfo, this.inline);
        }
        finally {
            if (strictMathBypass) {
                env.strictMath = false;
            }
        }
    },
    makeImportant: function () {
        return new(tree.Rule)(this.name,
                              this.value,
                              "!important",
                              this.merge,
                              this.index, this.currentFileInfo, this.inline);
    }
};

})(require('../tree'));

(function (tree) {

tree.Ruleset = function (selectors, rules, strictImports) {
    this.selectors = selectors;
    this.rules = rules;
    this._lookups = {};
    this.strictImports = strictImports;
};
tree.Ruleset.prototype = {
    type: "Ruleset",
    accept: function (visitor) {
        if (this.paths) {
            for(var i = 0; i < this.paths.length; i++) {
                this.paths[i] = visitor.visit(this.paths[i]);
            }
        } else {
            this.selectors = visitor.visit(this.selectors);
        }
        this.rules = visitor.visit(this.rules);
    },
    eval: function (env) {
        var selectors = this.selectors && this.selectors.map(function (s) { return s.eval(env); });
        var ruleset = new(tree.Ruleset)(selectors, this.rules.slice(0), this.strictImports);
        var rules;
        var rule;
        var i;
        
        ruleset.originalRuleset = this;
        ruleset.root = this.root;
        ruleset.firstRoot = this.firstRoot;
        ruleset.allowImports = this.allowImports;

        if(this.debugInfo) {
            ruleset.debugInfo = this.debugInfo;
        }

        // push the current ruleset to the frames stack
        env.frames.unshift(ruleset);

        // currrent selectors
        if (!env.selectors) {
            env.selectors = [];
        }
        env.selectors.unshift(this.selectors);

        // Evaluate imports
        if (ruleset.root || ruleset.allowImports || !ruleset.strictImports) {
            ruleset.evalImports(env);
        }

        // Store the frames around mixin definitions,
        // so they can be evaluated like closures when the time comes.
        for (i = 0; i < ruleset.rules.length; i++) {
            if (ruleset.rules[i] instanceof tree.mixin.Definition) {
                ruleset.rules[i].frames = env.frames.slice(0);
            }
        }
        
        var mediaBlockCount = (env.mediaBlocks && env.mediaBlocks.length) || 0;

        // Evaluate mixin calls.
        for (i = 0; i < ruleset.rules.length; i++) {
            if (ruleset.rules[i] instanceof tree.mixin.Call) {
                /*jshint loopfunc:true */
                rules = ruleset.rules[i].eval(env).filter(function(r) {
                    if ((r instanceof tree.Rule) && r.variable) {
                        // do not pollute the scope if the variable is
                        // already there. consider returning false here
                        // but we need a way to "return" variable from mixins
                        return !(ruleset.variable(r.name));
                    }
                    return true;
                });
                ruleset.rules.splice.apply(ruleset.rules, [i, 1].concat(rules));
                i += rules.length-1;
                ruleset.resetCache();
            }
        }
        
        // Evaluate everything else
        for (i = 0; i < ruleset.rules.length; i++) {
            rule = ruleset.rules[i];

            if (! (rule instanceof tree.mixin.Definition)) {
                ruleset.rules[i] = rule.eval ? rule.eval(env) : rule;
            }
        }

        // Pop the stack
        env.frames.shift();
        env.selectors.shift();
        
        if (env.mediaBlocks) {
            for (i = mediaBlockCount; i < env.mediaBlocks.length; i++) {
                env.mediaBlocks[i].bubbleSelectors(selectors);
            }
        }

        return ruleset;
    },
    evalImports: function(env) {
        var i, rules;
        for (i = 0; i < this.rules.length; i++) {
            if (this.rules[i] instanceof tree.Import) {
                rules = this.rules[i].eval(env);
                if (typeof rules.length === "number") {
                    this.rules.splice.apply(this.rules, [i, 1].concat(rules));
                    i+= rules.length-1;
                } else {
                    this.rules.splice(i, 1, rules);
                }
                this.resetCache();
            }
        }
    },
    makeImportant: function() {
        return new tree.Ruleset(this.selectors, this.rules.map(function (r) {
                    if (r.makeImportant) {
                        return r.makeImportant();
                    } else {
                        return r;
                    }
                }), this.strictImports);
    },
    matchArgs: function (args) {
        return !args || args.length === 0;
    },
    matchCondition: function (args, env) {
        var lastSelector = this.selectors[this.selectors.length-1];
        if (lastSelector.condition &&
            !lastSelector.condition.eval(
                new(tree.evalEnv)(env,
                    env.frames))) {
            return false;
        }
        return true;
    },
    resetCache: function () {
        this._rulesets = null;
        this._variables = null;
        this._lookups = {};
    },
    variables: function () {
        if (this._variables) { return this._variables; }
        else {
            return this._variables = this.rules.reduce(function (hash, r) {
                if (r instanceof tree.Rule && r.variable === true) {
                    hash[r.name] = r;
                }
                return hash;
            }, {});
        }
    },
    variable: function (name) {
        return this.variables()[name];
    },
    rulesets: function () {
        return this.rules.filter(function (r) {
            return (r instanceof tree.Ruleset) || (r instanceof tree.mixin.Definition);
        });
    },
    find: function (selector, self) {
        self = self || this;
        var rules = [], match,
            key = selector.toCSS();

        if (key in this._lookups) { return this._lookups[key]; }

        this.rulesets().forEach(function (rule) {
            if (rule !== self) {
                for (var j = 0; j < rule.selectors.length; j++) {
                    if (match = selector.match(rule.selectors[j])) {
                        if (selector.elements.length > rule.selectors[j].elements.length) {
                            Array.prototype.push.apply(rules, rule.find(
                                new(tree.Selector)(selector.elements.slice(1)), self));
                        } else {
                            rules.push(rule);
                        }
                        break;
                    }
                }
            }
        });
        return this._lookups[key] = rules;
    },
    genCSS: function (env, output) {
        var i, j,
            ruleNodes = [],
            rulesetNodes = [],
            debugInfo,     // Line number debugging
            rule,
            firstRuleset = true,
            path;

        env.tabLevel = (env.tabLevel || 0);

        if (!this.root) {
            env.tabLevel++;
        }

        var tabRuleStr = env.compress ? '' : Array(env.tabLevel + 1).join("  "),
            tabSetStr = env.compress ? '' : Array(env.tabLevel).join("  ");

        for (i = 0; i < this.rules.length; i++) {
            rule = this.rules[i];
            if (rule.rules || (rule instanceof tree.Media) || rule instanceof tree.Directive || (this.root && rule instanceof tree.Comment)) {
                rulesetNodes.push(rule);
            } else {
                ruleNodes.push(rule);
            }
        }

        // If this is the root node, we don't render
        // a selector, or {}.
        if (!this.root) {
            debugInfo = tree.debugInfo(env, this, tabSetStr);

            if (debugInfo) {
                output.add(debugInfo);
                output.add(tabSetStr);
            }

            for(i = 0; i < this.paths.length; i++) {
                path = this.paths[i];
                env.firstSelector = true;
                for(j = 0; j < path.length; j++) {
                    path[j].genCSS(env, output);
                    env.firstSelector = false;
                }
                if (i + 1 < this.paths.length) {
                    output.add(env.compress ? ',' : (',\n' + tabSetStr));
                }
            }

            output.add((env.compress ? '{' : ' {\n') + tabRuleStr);
        }

        // Compile rules and rulesets
        for (i = 0; i < ruleNodes.length; i++) {
            rule = ruleNodes[i];

            // @page{ directive ends up with root elements inside it, a mix of rules and rulesets
            // In this instance we do not know whether it is the last property
            if (i + 1 === ruleNodes.length && (!this.root || rulesetNodes.length === 0 || this.firstRoot)) {
                env.lastRule = true;
            }

            if (rule.genCSS) {
                rule.genCSS(env, output);
            } else if (rule.value) {
                output.add(rule.value.toString());
            }

            if (!env.lastRule) {
                output.add(env.compress ? '' : ('\n' + tabRuleStr));
            } else {
                env.lastRule = false;
            }
        }

        if (!this.root) {
            output.add((env.compress ? '}' : '\n' + tabSetStr + '}'));
            env.tabLevel--;
        }

        for (i = 0; i < rulesetNodes.length; i++) {
            if (ruleNodes.length && firstRuleset) {
                output.add((env.compress ? "" : "\n") + (this.root ? tabRuleStr : tabSetStr));
            }
            if (!firstRuleset) {
                output.add((env.compress ? "" : "\n") + (this.root ? tabRuleStr : tabSetStr));
            }
            firstRuleset = false;
            rulesetNodes[i].genCSS(env, output);
        }

        if (!output.isEmpty() && !env.compress && this.firstRoot) {
            output.add('\n');
        }
    },

    toCSS: tree.toCSS,

    markReferenced: function () {
        for (var s = 0; s < this.selectors.length; s++) {
            this.selectors[s].markReferenced();
        }
    },

    joinSelectors: function (paths, context, selectors) {
        for (var s = 0; s < selectors.length; s++) {
            this.joinSelector(paths, context, selectors[s]);
        }
    },

    joinSelector: function (paths, context, selector) {

        var i, j, k, 
            hasParentSelector, newSelectors, el, sel, parentSel, 
            newSelectorPath, afterParentJoin, newJoinedSelector, 
            newJoinedSelectorEmpty, lastSelector, currentElements,
            selectorsMultiplied;
    
        for (i = 0; i < selector.elements.length; i++) {
            el = selector.elements[i];
            if (el.value === '&') {
                hasParentSelector = true;
            }
        }
    
        if (!hasParentSelector) {
            if (context.length > 0) {
                for (i = 0; i < context.length; i++) {
                    paths.push(context[i].concat(selector));
                }
            }
            else {
                paths.push([selector]);
            }
            return;
        }

        // The paths are [[Selector]]
        // The first list is a list of comma seperated selectors
        // The inner list is a list of inheritance seperated selectors
        // e.g.
        // .a, .b {
        //   .c {
        //   }
        // }
        // == [[.a] [.c]] [[.b] [.c]]
        //

        // the elements from the current selector so far
        currentElements = [];
        // the current list of new selectors to add to the path.
        // We will build it up. We initiate it with one empty selector as we "multiply" the new selectors
        // by the parents
        newSelectors = [[]];

        for (i = 0; i < selector.elements.length; i++) {
            el = selector.elements[i];
            // non parent reference elements just get added
            if (el.value !== "&") {
                currentElements.push(el);
            } else {
                // the new list of selectors to add
                selectorsMultiplied = [];

                // merge the current list of non parent selector elements
                // on to the current list of selectors to add
                if (currentElements.length > 0) {
                    this.mergeElementsOnToSelectors(currentElements, newSelectors);
                }

                // loop through our current selectors
                for (j = 0; j < newSelectors.length; j++) {
                    sel = newSelectors[j];
                    // if we don't have any parent paths, the & might be in a mixin so that it can be used
                    // whether there are parents or not
                    if (context.length === 0) {
                        // the combinator used on el should now be applied to the next element instead so that
                        // it is not lost
                        if (sel.length > 0) {
                            sel[0].elements = sel[0].elements.slice(0);
                            sel[0].elements.push(new(tree.Element)(el.combinator, '', 0, el.index, el.currentFileInfo));
                        }
                        selectorsMultiplied.push(sel);
                    }
                    else {
                        // and the parent selectors
                        for (k = 0; k < context.length; k++) {
                            parentSel = context[k];
                            // We need to put the current selectors
                            // then join the last selector's elements on to the parents selectors

                            // our new selector path
                            newSelectorPath = [];
                            // selectors from the parent after the join
                            afterParentJoin = [];
                            newJoinedSelectorEmpty = true;

                            //construct the joined selector - if & is the first thing this will be empty,
                            // if not newJoinedSelector will be the last set of elements in the selector
                            if (sel.length > 0) {
                                newSelectorPath = sel.slice(0);
                                lastSelector = newSelectorPath.pop();
                                newJoinedSelector = selector.createDerived(lastSelector.elements.slice(0));
                                newJoinedSelectorEmpty = false;
                            }
                            else {
                                newJoinedSelector = selector.createDerived([]);
                            }

                            //put together the parent selectors after the join
                            if (parentSel.length > 1) {
                                afterParentJoin = afterParentJoin.concat(parentSel.slice(1));
                            }

                            if (parentSel.length > 0) {
                                newJoinedSelectorEmpty = false;

                                // join the elements so far with the first part of the parent
                                newJoinedSelector.elements.push(new(tree.Element)(el.combinator, parentSel[0].elements[0].value, el.index, el.currentFileInfo));
                                newJoinedSelector.elements = newJoinedSelector.elements.concat(parentSel[0].elements.slice(1));
                            }

                            if (!newJoinedSelectorEmpty) {
                                // now add the joined selector
                                newSelectorPath.push(newJoinedSelector);
                            }

                            // and the rest of the parent
                            newSelectorPath = newSelectorPath.concat(afterParentJoin);

                            // add that to our new set of selectors
                            selectorsMultiplied.push(newSelectorPath);
                        }
                    }
                }

                // our new selectors has been multiplied, so reset the state
                newSelectors = selectorsMultiplied;
                currentElements = [];
            }
        }

        // if we have any elements left over (e.g. .a& .b == .b)
        // add them on to all the current selectors
        if (currentElements.length > 0) {
            this.mergeElementsOnToSelectors(currentElements, newSelectors);
        }

        for (i = 0; i < newSelectors.length; i++) {
            if (newSelectors[i].length > 0) {
                paths.push(newSelectors[i]);
            }
        }
    },
    
    mergeElementsOnToSelectors: function(elements, selectors) {
        var i, sel;

        if (selectors.length === 0) {
            selectors.push([ new(tree.Selector)(elements) ]);
            return;
        }

        for (i = 0; i < selectors.length; i++) {
            sel = selectors[i];

            // if the previous thing in sel is a parent this needs to join on to it
            if (sel.length > 0) {
                sel[sel.length - 1] = sel[sel.length - 1].createDerived(sel[sel.length - 1].elements.concat(elements));
            }
            else {
                sel.push(new(tree.Selector)(elements));
            }
        }
    }
};
})(require('../tree'));

(function (tree) {

tree.Selector = function (elements, extendList, condition, index, currentFileInfo, isReferenced) {
    this.elements = elements;
    this.extendList = extendList || [];
    this.condition = condition;
    this.currentFileInfo = currentFileInfo || {};
    this.isReferenced = isReferenced;
    if (!condition) {
        this.evaldCondition = true;
    }
};
tree.Selector.prototype = {
    type: "Selector",
    accept: function (visitor) {
        this.elements = visitor.visit(this.elements);
        this.extendList = visitor.visit(this.extendList);
        this.condition = visitor.visit(this.condition);
    },
    createDerived: function(elements, extendList, evaldCondition) {
        /*jshint eqnull:true */
        evaldCondition = evaldCondition != null ? evaldCondition : this.evaldCondition;
        var newSelector = new(tree.Selector)(elements, extendList || this.extendList, this.condition, this.index, this.currentFileInfo, this.isReferenced);
        newSelector.evaldCondition = evaldCondition;
        return newSelector;
    },
    match: function (other) {
        var elements = this.elements,
            len = elements.length,
            oelements, olen, max, i;

        oelements = other.elements.slice(
            (other.elements.length && other.elements[0].value === "&") ? 1 : 0);
        olen = oelements.length;
        max = Math.min(len, olen);

        if (olen === 0 || len < olen) {
            return false;
        } else {
            for (i = 0; i < max; i++) {
                if (elements[i].value !== oelements[i].value) {
                    return false;
                }
            }
        }
        return true;
    },
    eval: function (env) {
        var evaldCondition = this.condition && this.condition.eval(env);

        return this.createDerived(this.elements.map(function (e) {
            return e.eval(env);
        }), this.extendList.map(function(extend) {
            return extend.eval(env);
        }), evaldCondition);
    },
    genCSS: function (env, output) {
        var i, element;
        if ((!env || !env.firstSelector) && this.elements[0].combinator.value === "") {
            output.add(' ', this.currentFileInfo, this.index);
        }
        if (!this._css) {
            //TODO caching? speed comparison?
            for(i = 0; i < this.elements.length; i++) {
                element = this.elements[i];
                element.genCSS(env, output);
            }
        }
    },
    toCSS: tree.toCSS,
    markReferenced: function () {
        this.isReferenced = true;
    },
    getIsReferenced: function() {
        return !this.currentFileInfo.reference || this.isReferenced;
    },
    getIsOutput: function() {
        return this.evaldCondition;
    }
};

})(require('../tree'));

(function (tree) {

tree.UnicodeDescriptor = function (value) {
    this.value = value;
};
tree.UnicodeDescriptor.prototype = {
    type: "UnicodeDescriptor",
    genCSS: function (env, output) {
        output.add(this.value);
    },
    toCSS: tree.toCSS,
    eval: function () { return this; }
};

})(require('../tree'));

(function (tree) {

tree.URL = function (val, currentFileInfo) {
    this.value = val;
    this.currentFileInfo = currentFileInfo;
};
tree.URL.prototype = {
    type: "Url",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    genCSS: function (env, output) {
        output.add("url(");
        this.value.genCSS(env, output);
        output.add(")");
    },
    toCSS: tree.toCSS,
    eval: function (ctx) {
        var val = this.value.eval(ctx), rootpath;

        // Add the base path if the URL is relative
        rootpath = this.currentFileInfo && this.currentFileInfo.rootpath;
        if (rootpath && typeof val.value === "string" && ctx.isPathRelative(val.value)) {
            if (!val.quote) {
                rootpath = rootpath.replace(/[\(\)'"\s]/g, function(match) { return "\\"+match; });
            }
            val.value = rootpath + val.value;
        }

        val.value = ctx.normalizePath(val.value);

        return new(tree.URL)(val, null);
    }
};

})(require('../tree'));

(function (tree) {

tree.Value = function (value) {
    this.value = value;
};
tree.Value.prototype = {
    type: "Value",
    accept: function (visitor) {
        this.value = visitor.visit(this.value);
    },
    eval: function (env) {
        if (this.value.length === 1) {
            return this.value[0].eval(env);
        } else {
            return new(tree.Value)(this.value.map(function (v) {
                return v.eval(env);
            }));
        }
    },
    genCSS: function (env, output) {
        var i;
        for(i = 0; i < this.value.length; i++) {
            this.value[i].genCSS(env, output);
            if (i+1 < this.value.length) {
                output.add((env && env.compress) ? ',' : ', ');
            }
        }
    },
    toCSS: tree.toCSS
};

})(require('../tree'));

(function (tree) {

tree.Variable = function (name, index, currentFileInfo) {
    this.name = name;
    this.index = index;
    this.currentFileInfo = currentFileInfo;
};
tree.Variable.prototype = {
    type: "Variable",
    eval: function (env) {
        var variable, v, name = this.name;

        if (name.indexOf('@@') === 0) {
            name = '@' + new(tree.Variable)(name.slice(1)).eval(env).value;
        }
        
        if (this.evaluating) {
            throw { type: 'Name',
                    message: "Recursive variable definition for " + name,
                    filename: this.currentFileInfo.file,
                    index: this.index };
        }
        
        this.evaluating = true;

        if (variable = tree.find(env.frames, function (frame) {
            if (v = frame.variable(name)) {
                return v.value.eval(env);
            }
        })) { 
            this.evaluating = false;
            return variable;
        }
        else {
            throw { type: 'Name',
                    message: "variable " + name + " is undefined",
                    filename: this.currentFileInfo.filename,
                    index: this.index };
        }
    }
};

})(require('../tree'));

(function (tree) {

    var parseCopyProperties = [
        'paths',            // option - unmodified - paths to search for imports on
        'optimization',     // option - optimization level (for the chunker)
        'files',            // list of files that have been imported, used for import-once
        'contents',         // browser-only, contents of all the files
        'relativeUrls',     // option - whether to adjust URL's to be relative
        'rootpath',         // option - rootpath to append to URL's
        'strictImports',    // option -
        'insecure',         // option - whether to allow imports from insecure ssl hosts
        'dumpLineNumbers',  // option - whether to dump line numbers
        'compress',         // option - whether to compress
        'processImports',   // option - whether to process imports. if false then imports will not be imported
        'syncImport',       // option - whether to import synchronously
        'javascriptEnabled',// option - whether JavaScript is enabled. if undefined, defaults to true
        'mime',             // browser only - mime type for sheet import
        'useFileCache',     // browser only - whether to use the per file session cache
        'currentFileInfo'   // information about the current file - for error reporting and importing and making urls relative etc.
    ];

    //currentFileInfo = {
    //  'relativeUrls' - option - whether to adjust URL's to be relative
    //  'filename' - full resolved filename of current file
    //  'rootpath' - path to append to normal URLs for this node
    //  'currentDirectory' - path to the current file, absolute
    //  'rootFilename' - filename of the base file
    //  'entryPath' - absolute path to the entry file
    //  'reference' - whether the file should not be output and only output parts that are referenced

    tree.parseEnv = function(options) {
        copyFromOriginal(options, this, parseCopyProperties);

        if (!this.contents) { this.contents = {}; }
        if (!this.files) { this.files = {}; }

        if (!this.currentFileInfo) {
            var filename = (options && options.filename) || "input";
            var entryPath = filename.replace(/[^\/\\]*$/, "");
            if (options) {
                options.filename = null;
            }
            this.currentFileInfo = {
                filename: filename,
                relativeUrls: this.relativeUrls,
                rootpath: (options && options.rootpath) || "",
                currentDirectory: entryPath,
                entryPath: entryPath,
                rootFilename: filename
            };
        }
    };

    var evalCopyProperties = [
        'silent',      // whether to swallow errors and warnings
        'verbose',     // whether to log more activity
        'compress',    // whether to compress
        'yuicompress', // whether to compress with the outside tool yui compressor
        'ieCompat',    // whether to enforce IE compatibility (IE8 data-uri)
        'strictMath',  // whether math has to be within parenthesis
        'strictUnits', // whether units need to evaluate correctly
        'cleancss',    // whether to compress with clean-css
        'sourceMap',   // whether to output a source map
        'importMultiple'// whether we are currently importing multiple copies
        ];

    tree.evalEnv = function(options, frames) {
        copyFromOriginal(options, this, evalCopyProperties);

        this.frames = frames || [];
    };

    tree.evalEnv.prototype.inParenthesis = function () {
        if (!this.parensStack) {
            this.parensStack = [];
        }
        this.parensStack.push(true);
    };

    tree.evalEnv.prototype.outOfParenthesis = function () {
        this.parensStack.pop();
    };

    tree.evalEnv.prototype.isMathOn = function () {
        return this.strictMath ? (this.parensStack && this.parensStack.length) : true;
    };

    tree.evalEnv.prototype.isPathRelative = function (path) {
        return !/^(?:[a-z-]+:|\/)/.test(path);
    };

    tree.evalEnv.prototype.normalizePath = function( path ) {
        var
          segments = path.split("/").reverse(),
          segment;

        path = [];
        while (segments.length !== 0 ) {
            segment = segments.pop();
            switch( segment ) {
                case ".":
                    break;
                case "..":
                    if ((path.length === 0) || (path[path.length - 1] === "..")) {
                        path.push( segment );
                    } else {
                        path.pop();
                    }
                    break;
                default:
                    path.push( segment );
                    break;
            }
        }

        return path.join("/");
    };

    //todo - do the same for the toCSS env
    //tree.toCSSEnv = function (options) {
    //};

    var copyFromOriginal = function(original, destination, propertiesToCopy) {
        if (!original) { return; }

        for(var i = 0; i < propertiesToCopy.length; i++) {
            if (original.hasOwnProperty(propertiesToCopy[i])) {
                destination[propertiesToCopy[i]] = original[propertiesToCopy[i]];
            }
        }
    };

})(require('./tree'));

(function (tree) {

    tree.visitor = function(implementation) {
        this._implementation = implementation;
    };

    tree.visitor.prototype = {
        visit: function(node) {

            if (node instanceof Array) {
                return this.visitArray(node);
            }

            if (!node || !node.type) {
                return node;
            }

            var funcName = "visit" + node.type,
                func = this._implementation[funcName],
                visitArgs, newNode;
            if (func) {
                visitArgs = {visitDeeper: true};
                newNode = func.call(this._implementation, node, visitArgs);
                if (this._implementation.isReplacing) {
                    node = newNode;
                }
            }
            if ((!visitArgs || visitArgs.visitDeeper) && node && node.accept) {
                node.accept(this);
            }
            funcName = funcName + "Out";
            if (this._implementation[funcName]) {
                this._implementation[funcName](node);
            }
            return node;
        },
        visitArray: function(nodes) {
            var i, newNodes = [];
            for(i = 0; i < nodes.length; i++) {
                var evald = this.visit(nodes[i]);
                if (evald instanceof Array) {
                    evald = this.flatten(evald);
                    newNodes = newNodes.concat(evald);
                } else {
                    newNodes.push(evald);
                }
            }
            if (this._implementation.isReplacing) {
                return newNodes;
            }
            return nodes;
        },
        doAccept: function (node) {
            node.accept(this);
        },
        flatten: function(arr, master) {
            return arr.reduce(this.flattenReduce.bind(this), master || []);
        },
        flattenReduce: function(sum, element) {
            if (element instanceof Array) {
                sum = this.flatten(element, sum);
            } else {
                sum.push(element);
            }
            return sum;
        }
    };

})(require('./tree'));
(function (tree) {
    tree.importVisitor = function(importer, finish, evalEnv) {
        this._visitor = new tree.visitor(this);
        this._importer = importer;
        this._finish = finish;
        this.env = evalEnv || new tree.evalEnv();
        this.importCount = 0;
    };

    tree.importVisitor.prototype = {
        isReplacing: true,
        run: function (root) {
            var error;
            try {
                // process the contents
                this._visitor.visit(root);
            }
            catch(e) {
                error = e;
            }

            this.isFinished = true;

            if (this.importCount === 0) {
                this._finish(error);
            }
        },
        visitImport: function (importNode, visitArgs) {
            var importVisitor = this,
                evaldImportNode,
                inlineCSS = importNode.options.inline;

            if (!importNode.css || inlineCSS) {

                try {
                    evaldImportNode = importNode.evalForImport(this.env);
                } catch(e){
                    if (!e.filename) { e.index = importNode.index; e.filename = importNode.currentFileInfo.filename; }
                    // attempt to eval properly and treat as css
                    importNode.css = true;
                    // if that fails, this error will be thrown
                    importNode.error = e;
                }

                if (evaldImportNode && (!evaldImportNode.css || inlineCSS)) {
                    importNode = evaldImportNode;
                    this.importCount++;
                    var env = new tree.evalEnv(this.env, this.env.frames.slice(0));

                    if (importNode.options.multiple) {
                        env.importMultiple = true;
                    }

                    this._importer.push(importNode.getPath(), importNode.currentFileInfo, importNode.options, function (e, root, imported, fullPath) {
                        if (e && !e.filename) { e.index = importNode.index; e.filename = importNode.currentFileInfo.filename; }

                        if (imported && !env.importMultiple) { importNode.skip = imported; }

                        var subFinish = function(e) {
                            importVisitor.importCount--;

                            if (importVisitor.importCount === 0 && importVisitor.isFinished) {
                                importVisitor._finish(e);
                            }
                        };

                        if (root) {
                            importNode.root = root;
                            importNode.importedFilename = fullPath;
                            if (!inlineCSS && !importNode.skip) {
                                new(tree.importVisitor)(importVisitor._importer, subFinish, env)
                                    .run(root);
                                return;
                            }
                        }

                        subFinish();
                    });
                }
            }
            visitArgs.visitDeeper = false;
            return importNode;
        },
        visitRule: function (ruleNode, visitArgs) {
            visitArgs.visitDeeper = false;
            return ruleNode;
        },
        visitDirective: function (directiveNode, visitArgs) {
            this.env.frames.unshift(directiveNode);
            return directiveNode;
        },
        visitDirectiveOut: function (directiveNode) {
            this.env.frames.shift();
        },
        visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
            this.env.frames.unshift(mixinDefinitionNode);
            return mixinDefinitionNode;
        },
        visitMixinDefinitionOut: function (mixinDefinitionNode) {
            this.env.frames.shift();
        },
        visitRuleset: function (rulesetNode, visitArgs) {
            this.env.frames.unshift(rulesetNode);
            return rulesetNode;
        },
        visitRulesetOut: function (rulesetNode) {
            this.env.frames.shift();
        },
        visitMedia: function (mediaNode, visitArgs) {
            this.env.frames.unshift(mediaNode.ruleset);
            return mediaNode;
        },
        visitMediaOut: function (mediaNode) {
            this.env.frames.shift();
        }
    };

})(require('./tree'));
(function (tree) {
    tree.joinSelectorVisitor = function() {
        this.contexts = [[]];
        this._visitor = new tree.visitor(this);
    };

    tree.joinSelectorVisitor.prototype = {
        run: function (root) {
            return this._visitor.visit(root);
        },
        visitRule: function (ruleNode, visitArgs) {
            visitArgs.visitDeeper = false;
        },
        visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
            visitArgs.visitDeeper = false;
        },

        visitRuleset: function (rulesetNode, visitArgs) {
            var context = this.contexts[this.contexts.length - 1];
            var paths = [];
            this.contexts.push(paths);

            if (! rulesetNode.root) {
                rulesetNode.selectors = rulesetNode.selectors.filter(function(selector) { return selector.getIsOutput(); });
                if (rulesetNode.selectors.length === 0) {
                    rulesetNode.rules.length = 0;
                }
                rulesetNode.joinSelectors(paths, context, rulesetNode.selectors);
                rulesetNode.paths = paths;
            }
        },
        visitRulesetOut: function (rulesetNode) {
            this.contexts.length = this.contexts.length - 1;
        },
        visitMedia: function (mediaNode, visitArgs) {
            var context = this.contexts[this.contexts.length - 1];
            mediaNode.rules[0].root = (context.length === 0 || context[0].multiMedia);
        }
    };

})(require('./tree'));
(function (tree) {
    tree.toCSSVisitor = function(env) {
        this._visitor = new tree.visitor(this);
        this._env = env;
    };

    tree.toCSSVisitor.prototype = {
        isReplacing: true,
        run: function (root) {
            return this._visitor.visit(root);
        },

        visitRule: function (ruleNode, visitArgs) {
            if (ruleNode.variable) {
                return [];
            }
            return ruleNode;
        },

        visitMixinDefinition: function (mixinNode, visitArgs) {
            return [];
        },

        visitExtend: function (extendNode, visitArgs) {
            return [];
        },

        visitComment: function (commentNode, visitArgs) {
            if (commentNode.isSilent(this._env)) {
                return [];
            }
            return commentNode;
        },

        visitMedia: function(mediaNode, visitArgs) {
            mediaNode.accept(this._visitor);
            visitArgs.visitDeeper = false;

            if (!mediaNode.rules.length) {
                return [];
            }
            return mediaNode;
        },

        visitDirective: function(directiveNode, visitArgs) {
            if (directiveNode.currentFileInfo.reference && !directiveNode.isReferenced) {
                return [];
            }
            if (directiveNode.name === "@charset") {
                // Only output the debug info together with subsequent @charset definitions
                // a comment (or @media statement) before the actual @charset directive would
                // be considered illegal css as it has to be on the first line
                if (this.charset) {
                    if (directiveNode.debugInfo) {
                        var comment = new tree.Comment("/* " + directiveNode.toCSS(this._env).replace(/\n/g, "")+" */\n");
                        comment.debugInfo = directiveNode.debugInfo;
                        return this._visitor.visit(comment);
                    }
                    return [];
                }
                this.charset = true;
            }
            return directiveNode;
        },

        checkPropertiesInRoot: function(rules) {
            var ruleNode;
            for(var i = 0; i < rules.length; i++) {
                ruleNode = rules[i];
                if (ruleNode instanceof tree.Rule && !ruleNode.variable) {
                    throw { message: "properties must be inside selector blocks, they cannot be in the root.",
                        index: ruleNode.index, filename: ruleNode.currentFileInfo ? ruleNode.currentFileInfo.filename : null};
                }
            }
        },

        visitRuleset: function (rulesetNode, visitArgs) {
            var rule, rulesets = [];
            if (rulesetNode.firstRoot) {
                this.checkPropertiesInRoot(rulesetNode.rules);
            }
            if (! rulesetNode.root) {

                rulesetNode.paths = rulesetNode.paths
                    .filter(function(p) {
                        var i;
                        if (p[0].elements[0].combinator.value === ' ') {
                            p[0].elements[0].combinator = new(tree.Combinator)('');
                        }
                        for(i = 0; i < p.length; i++) {
                            if (p[i].getIsReferenced() && p[i].getIsOutput()) {
                                return true;
                            }
                            return false;
                        }
                    });

                // Compile rules and rulesets
                for (var i = 0; i < rulesetNode.rules.length; i++) {
                    rule = rulesetNode.rules[i];

                    if (rule.rules) {
                        // visit because we are moving them out from being a child
                        rulesets.push(this._visitor.visit(rule));
                        rulesetNode.rules.splice(i, 1);
                        i--;
                        continue;
                    }
                }
                // accept the visitor to remove rules and refactor itself
                // then we can decide now whether we want it or not
                if (rulesetNode.rules.length > 0) {
                    rulesetNode.accept(this._visitor);
                }
                visitArgs.visitDeeper = false;

                this._mergeRules(rulesetNode.rules);
                this._removeDuplicateRules(rulesetNode.rules);

                // now decide whether we keep the ruleset
                if (rulesetNode.rules.length > 0 && rulesetNode.paths.length > 0) {
                    rulesets.splice(0, 0, rulesetNode);
                }
            } else {
                rulesetNode.accept(this._visitor);
                visitArgs.visitDeeper = false;
                if (rulesetNode.firstRoot || rulesetNode.rules.length > 0) {
                    rulesets.splice(0, 0, rulesetNode);
                }
            }
            if (rulesets.length === 1) {
                return rulesets[0];
            }
            return rulesets;
        },

        _removeDuplicateRules: function(rules) {
            // remove duplicates
            var ruleCache = {},
                ruleList, rule, i;
            for(i = rules.length - 1; i >= 0 ; i--) {
                rule = rules[i];
                if (rule instanceof tree.Rule) {
                    if (!ruleCache[rule.name]) {
                        ruleCache[rule.name] = rule;
                    } else {
                        ruleList = ruleCache[rule.name];
                        if (ruleList instanceof tree.Rule) {
                            ruleList = ruleCache[rule.name] = [ruleCache[rule.name].toCSS(this._env)];
                        }
                        var ruleCSS = rule.toCSS(this._env);
                        if (ruleList.indexOf(ruleCSS) !== -1) {
                            rules.splice(i, 1);
                        } else {
                            ruleList.push(ruleCSS);
                        }
                    }
                }
            }
        },

        _mergeRules: function (rules) {
            var groups = {},
                parts,
                rule,
                key;

            for (var i = 0; i < rules.length; i++) {
                rule = rules[i];

                if ((rule instanceof tree.Rule) && rule.merge) {
                    key = [rule.name,
                        rule.important ? "!" : ""].join(",");

                    if (!groups[key]) {
                        parts = groups[key] = [];
                    } else {
                        rules.splice(i--, 1);
                    }

                    parts.push(rule);
                }
            }

            Object.keys(groups).map(function (k) {
                parts = groups[k];

                if (parts.length > 1) {
                    rule = parts[0];

                    rule.value = new (tree.Value)(parts.map(function (p) {
                        return p.value;
                    }));
                }
            });
        }
    };

})(require('./tree'));
(function (tree) {
    /*jshint loopfunc:true */

    tree.extendFinderVisitor = function() {
        this._visitor = new tree.visitor(this);
        this.contexts = [];
        this.allExtendsStack = [[]];
    };

    tree.extendFinderVisitor.prototype = {
        run: function (root) {
            root = this._visitor.visit(root);
            root.allExtends = this.allExtendsStack[0];
            return root;
        },
        visitRule: function (ruleNode, visitArgs) {
            visitArgs.visitDeeper = false;
        },
        visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
            visitArgs.visitDeeper = false;
        },
        visitRuleset: function (rulesetNode, visitArgs) {

            if (rulesetNode.root) {
                return;
            }

            var i, j, extend, allSelectorsExtendList = [], extendList;

            // get &:extend(.a); rules which apply to all selectors in this ruleset
            for(i = 0; i < rulesetNode.rules.length; i++) {
                if (rulesetNode.rules[i] instanceof tree.Extend) {
                    allSelectorsExtendList.push(rulesetNode.rules[i]);
                    rulesetNode.extendOnEveryPath = true;
                }
            }

            // now find every selector and apply the extends that apply to all extends
            // and the ones which apply to an individual extend
            for(i = 0; i < rulesetNode.paths.length; i++) {
                var selectorPath = rulesetNode.paths[i],
                    selector = selectorPath[selectorPath.length-1];
                extendList = selector.extendList.slice(0).concat(allSelectorsExtendList).map(function(allSelectorsExtend) {
                    return allSelectorsExtend.clone();
                });
                for(j = 0; j < extendList.length; j++) {
                    this.foundExtends = true;
                    extend = extendList[j];
                    extend.findSelfSelectors(selectorPath);
                    extend.ruleset = rulesetNode;
                    if (j === 0) { extend.firstExtendOnThisSelectorPath = true; }
                    this.allExtendsStack[this.allExtendsStack.length-1].push(extend);
                }
            }

            this.contexts.push(rulesetNode.selectors);
        },
        visitRulesetOut: function (rulesetNode) {
            if (!rulesetNode.root) {
                this.contexts.length = this.contexts.length - 1;
            }
        },
        visitMedia: function (mediaNode, visitArgs) {
            mediaNode.allExtends = [];
            this.allExtendsStack.push(mediaNode.allExtends);
        },
        visitMediaOut: function (mediaNode) {
            this.allExtendsStack.length = this.allExtendsStack.length - 1;
        },
        visitDirective: function (directiveNode, visitArgs) {
            directiveNode.allExtends = [];
            this.allExtendsStack.push(directiveNode.allExtends);
        },
        visitDirectiveOut: function (directiveNode) {
            this.allExtendsStack.length = this.allExtendsStack.length - 1;
        }
    };

    tree.processExtendsVisitor = function() {
        this._visitor = new tree.visitor(this);
    };

    tree.processExtendsVisitor.prototype = {
        run: function(root) {
            var extendFinder = new tree.extendFinderVisitor();
            extendFinder.run(root);
            if (!extendFinder.foundExtends) { return root; }
            root.allExtends = root.allExtends.concat(this.doExtendChaining(root.allExtends, root.allExtends));
            this.allExtendsStack = [root.allExtends];
            return this._visitor.visit(root);
        },
        doExtendChaining: function (extendsList, extendsListTarget, iterationCount) {
            //
            // chaining is different from normal extension.. if we extend an extend then we are not just copying, altering and pasting
            // the selector we would do normally, but we are also adding an extend with the same target selector
            // this means this new extend can then go and alter other extends
            //
            // this method deals with all the chaining work - without it, extend is flat and doesn't work on other extend selectors
            // this is also the most expensive.. and a match on one selector can cause an extension of a selector we had already processed if
            // we look at each selector at a time, as is done in visitRuleset

            var extendIndex, targetExtendIndex, matches, extendsToAdd = [], newSelector, extendVisitor = this, selectorPath, extend, targetExtend, newExtend;

            iterationCount = iterationCount || 0;

            //loop through comparing every extend with every target extend.
            // a target extend is the one on the ruleset we are looking at copy/edit/pasting in place
            // e.g.  .a:extend(.b) {}  and .b:extend(.c) {} then the first extend extends the second one
            // and the second is the target.
            // the seperation into two lists allows us to process a subset of chains with a bigger set, as is the
            // case when processing media queries
            for(extendIndex = 0; extendIndex < extendsList.length; extendIndex++){
                for(targetExtendIndex = 0; targetExtendIndex < extendsListTarget.length; targetExtendIndex++){

                    extend = extendsList[extendIndex];
                    targetExtend = extendsListTarget[targetExtendIndex];

                    // look for circular references
                    if (this.inInheritanceChain(targetExtend, extend)) { continue; }

                    // find a match in the target extends self selector (the bit before :extend)
                    selectorPath = [targetExtend.selfSelectors[0]];
                    matches = extendVisitor.findMatch(extend, selectorPath);

                    if (matches.length) {

                        // we found a match, so for each self selector..
                        extend.selfSelectors.forEach(function(selfSelector) {

                            // process the extend as usual
                            newSelector = extendVisitor.extendSelector(matches, selectorPath, selfSelector);

                            // but now we create a new extend from it
                            newExtend = new(tree.Extend)(targetExtend.selector, targetExtend.option, 0);
                            newExtend.selfSelectors = newSelector;

                            // add the extend onto the list of extends for that selector
                            newSelector[newSelector.length-1].extendList = [newExtend];

                            // record that we need to add it.
                            extendsToAdd.push(newExtend);
                            newExtend.ruleset = targetExtend.ruleset;

                            //remember its parents for circular references
                            newExtend.parents = [targetExtend, extend];

                            // only process the selector once.. if we have :extend(.a,.b) then multiple
                            // extends will look at the same selector path, so when extending
                            // we know that any others will be duplicates in terms of what is added to the css
                            if (targetExtend.firstExtendOnThisSelectorPath) {
                                newExtend.firstExtendOnThisSelectorPath = true;
                                targetExtend.ruleset.paths.push(newSelector);
                            }
                        });
                    }
                }
            }

            if (extendsToAdd.length) {
                // try to detect circular references to stop a stack overflow.
                // may no longer be needed.
                this.extendChainCount++;
                if (iterationCount > 100) {
                    var selectorOne = "{unable to calculate}";
                    var selectorTwo = "{unable to calculate}";
                    try
                    {
                        selectorOne = extendsToAdd[0].selfSelectors[0].toCSS();
                        selectorTwo = extendsToAdd[0].selector.toCSS();
                    }
                    catch(e) {}
                    throw {message: "extend circular reference detected. One of the circular extends is currently:"+selectorOne+":extend(" + selectorTwo+")"};
                }

                // now process the new extends on the existing rules so that we can handle a extending b extending c ectending d extending e...
                return extendsToAdd.concat(extendVisitor.doExtendChaining(extendsToAdd, extendsListTarget, iterationCount+1));
            } else {
                return extendsToAdd;
            }
        },
        inInheritanceChain: function (possibleParent, possibleChild) {
            if (possibleParent === possibleChild) {
                return true;
            }
            if (possibleChild.parents) {
                if (this.inInheritanceChain(possibleParent, possibleChild.parents[0])) {
                    return true;
                }
                if (this.inInheritanceChain(possibleParent, possibleChild.parents[1])) {
                    return true;
                }
            }
            return false;
        },
        visitRule: function (ruleNode, visitArgs) {
            visitArgs.visitDeeper = false;
        },
        visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
            visitArgs.visitDeeper = false;
        },
        visitSelector: function (selectorNode, visitArgs) {
            visitArgs.visitDeeper = false;
        },
        visitRuleset: function (rulesetNode, visitArgs) {
            if (rulesetNode.root) {
                return;
            }
            var matches, pathIndex, extendIndex, allExtends = this.allExtendsStack[this.allExtendsStack.length-1], selectorsToAdd = [], extendVisitor = this, selectorPath;

            // look at each selector path in the ruleset, find any extend matches and then copy, find and replace

            for(extendIndex = 0; extendIndex < allExtends.length; extendIndex++) {
                for(pathIndex = 0; pathIndex < rulesetNode.paths.length; pathIndex++) {

                    selectorPath = rulesetNode.paths[pathIndex];

                    // extending extends happens initially, before the main pass
                    if (rulesetNode.extendOnEveryPath || selectorPath[selectorPath.length-1].extendList.length) { continue; }

                    matches = this.findMatch(allExtends[extendIndex], selectorPath);

                    if (matches.length) {

                        allExtends[extendIndex].selfSelectors.forEach(function(selfSelector) {
                            selectorsToAdd.push(extendVisitor.extendSelector(matches, selectorPath, selfSelector));
                        });
                    }
                }
            }
            rulesetNode.paths = rulesetNode.paths.concat(selectorsToAdd);
        },
        findMatch: function (extend, haystackSelectorPath) {
            //
            // look through the haystack selector path to try and find the needle - extend.selector
            // returns an array of selector matches that can then be replaced
            //
            var haystackSelectorIndex, hackstackSelector, hackstackElementIndex, haystackElement,
                targetCombinator, i,
                extendVisitor = this,
                needleElements = extend.selector.elements,
                potentialMatches = [], potentialMatch, matches = [];

            // loop through the haystack elements
            for(haystackSelectorIndex = 0; haystackSelectorIndex < haystackSelectorPath.length; haystackSelectorIndex++) {
                hackstackSelector = haystackSelectorPath[haystackSelectorIndex];

                for(hackstackElementIndex = 0; hackstackElementIndex < hackstackSelector.elements.length; hackstackElementIndex++) {

                    haystackElement = hackstackSelector.elements[hackstackElementIndex];

                    // if we allow elements before our match we can add a potential match every time. otherwise only at the first element.
                    if (extend.allowBefore || (haystackSelectorIndex === 0 && hackstackElementIndex === 0)) {
                        potentialMatches.push({pathIndex: haystackSelectorIndex, index: hackstackElementIndex, matched: 0, initialCombinator: haystackElement.combinator});
                    }

                    for(i = 0; i < potentialMatches.length; i++) {
                        potentialMatch = potentialMatches[i];

                        // selectors add " " onto the first element. When we use & it joins the selectors together, but if we don't
                        // then each selector in haystackSelectorPath has a space before it added in the toCSS phase. so we need to work out
                        // what the resulting combinator will be
                        targetCombinator = haystackElement.combinator.value;
                        if (targetCombinator === '' && hackstackElementIndex === 0) {
                            targetCombinator = ' ';
                        }

                        // if we don't match, null our match to indicate failure
                        if (!extendVisitor.isElementValuesEqual(needleElements[potentialMatch.matched].value, haystackElement.value) ||
                            (potentialMatch.matched > 0 && needleElements[potentialMatch.matched].combinator.value !== targetCombinator)) {
                            potentialMatch = null;
                        } else {
                            potentialMatch.matched++;
                        }

                        // if we are still valid and have finished, test whether we have elements after and whether these are allowed
                        if (potentialMatch) {
                            potentialMatch.finished = potentialMatch.matched === needleElements.length;
                            if (potentialMatch.finished &&
                                (!extend.allowAfter && (hackstackElementIndex+1 < hackstackSelector.elements.length || haystackSelectorIndex+1 < haystackSelectorPath.length))) {
                                potentialMatch = null;
                            }
                        }
                        // if null we remove, if not, we are still valid, so either push as a valid match or continue
                        if (potentialMatch) {
                            if (potentialMatch.finished) {
                                potentialMatch.length = needleElements.length;
                                potentialMatch.endPathIndex = haystackSelectorIndex;
                                potentialMatch.endPathElementIndex = hackstackElementIndex + 1; // index after end of match
                                potentialMatches.length = 0; // we don't allow matches to overlap, so start matching again
                                matches.push(potentialMatch);
                            }
                        } else {
                            potentialMatches.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
            return matches;
        },
        isElementValuesEqual: function(elementValue1, elementValue2) {
            if (typeof elementValue1 === "string" || typeof elementValue2 === "string") {
                return elementValue1 === elementValue2;
            }
            if (elementValue1 instanceof tree.Attribute) {
                if (elementValue1.op !== elementValue2.op || elementValue1.key !== elementValue2.key) {
                    return false;
                }
                if (!elementValue1.value || !elementValue2.value) {
                    if (elementValue1.value || elementValue2.value) {
                        return false;
                    }
                    return true;
                }
                elementValue1 = elementValue1.value.value || elementValue1.value;
                elementValue2 = elementValue2.value.value || elementValue2.value;
                return elementValue1 === elementValue2;
            }
            elementValue1 = elementValue1.value;
            elementValue2 = elementValue2.value;
            if (elementValue1 instanceof tree.Selector) {
                if (!(elementValue2 instanceof tree.Selector) || elementValue1.elements.length !== elementValue2.elements.length) {
                    return false;
                }
                for(var i = 0; i <elementValue1.elements.length; i++) {
                    if (elementValue1.elements[i].combinator.value !== elementValue2.elements[i].combinator.value) {
                        if (i !== 0 || (elementValue1.elements[i].combinator.value || ' ') !== (elementValue2.elements[i].combinator.value || ' ')) {
                            return false;
                        }
                    }
                    if (!this.isElementValuesEqual(elementValue1.elements[i].value, elementValue2.elements[i].value)) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        },
        extendSelector:function (matches, selectorPath, replacementSelector) {

            //for a set of matches, replace each match with the replacement selector

            var currentSelectorPathIndex = 0,
                currentSelectorPathElementIndex = 0,
                path = [],
                matchIndex,
                selector,
                firstElement,
                match,
                newElements;

            for (matchIndex = 0; matchIndex < matches.length; matchIndex++) {
                match = matches[matchIndex];
                selector = selectorPath[match.pathIndex];
                firstElement = new tree.Element(
                    match.initialCombinator,
                    replacementSelector.elements[0].value,
                    replacementSelector.elements[0].index,
                    replacementSelector.elements[0].currentFileInfo
                );

                if (match.pathIndex > currentSelectorPathIndex && currentSelectorPathElementIndex > 0) {
                    path[path.length - 1].elements = path[path.length - 1].elements.concat(selectorPath[currentSelectorPathIndex].elements.slice(currentSelectorPathElementIndex));
                    currentSelectorPathElementIndex = 0;
                    currentSelectorPathIndex++;
                }

                newElements = selector.elements
                    .slice(currentSelectorPathElementIndex, match.index)
                    .concat([firstElement])
                    .concat(replacementSelector.elements.slice(1));

                if (currentSelectorPathIndex === match.pathIndex && matchIndex > 0) {
                    path[path.length - 1].elements =
                        path[path.length - 1].elements.concat(newElements);
                } else {
                    path = path.concat(selectorPath.slice(currentSelectorPathIndex, match.pathIndex));

                    path.push(new tree.Selector(
                        newElements
                    ));
                }
                currentSelectorPathIndex = match.endPathIndex;
                currentSelectorPathElementIndex = match.endPathElementIndex;
                if (currentSelectorPathElementIndex >= selectorPath[currentSelectorPathIndex].elements.length) {
                    currentSelectorPathElementIndex = 0;
                    currentSelectorPathIndex++;
                }
            }

            if (currentSelectorPathIndex < selectorPath.length && currentSelectorPathElementIndex > 0) {
                path[path.length - 1].elements = path[path.length - 1].elements.concat(selectorPath[currentSelectorPathIndex].elements.slice(currentSelectorPathElementIndex));
                currentSelectorPathIndex++;
            }

            path = path.concat(selectorPath.slice(currentSelectorPathIndex, selectorPath.length));

            return path;
        },
        visitRulesetOut: function (rulesetNode) {
        },
        visitMedia: function (mediaNode, visitArgs) {
            var newAllExtends = mediaNode.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);
            newAllExtends = newAllExtends.concat(this.doExtendChaining(newAllExtends, mediaNode.allExtends));
            this.allExtendsStack.push(newAllExtends);
        },
        visitMediaOut: function (mediaNode) {
            this.allExtendsStack.length = this.allExtendsStack.length - 1;
        },
        visitDirective: function (directiveNode, visitArgs) {
            var newAllExtends = directiveNode.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);
            newAllExtends = newAllExtends.concat(this.doExtendChaining(newAllExtends, directiveNode.allExtends));
            this.allExtendsStack.push(newAllExtends);
        },
        visitDirectiveOut: function (directiveNode) {
            this.allExtendsStack.length = this.allExtendsStack.length - 1;
        }
    };

})(require('./tree'));

(function (tree) {

    tree.sourceMapOutput = function (options) {
        this._css = [];
        this._rootNode = options.rootNode;
        this._writeSourceMap = options.writeSourceMap;
        this._contentsMap = options.contentsMap;
        this._sourceMapFilename = options.sourceMapFilename;
        this._outputFilename = options.outputFilename;
        this._sourceMapBasepath = options.sourceMapBasepath;
        this._sourceMapRootpath = options.sourceMapRootpath;
        this._outputSourceFiles = options.outputSourceFiles;
        this._sourceMapGeneratorConstructor = options.sourceMapGenerator || require("source-map").SourceMapGenerator;

        if (this._sourceMapRootpath && this._sourceMapRootpath.charAt(this._sourceMapRootpath.length-1) !== '/') {
            this._sourceMapRootpath += '/';
        }

        this._lineNumber = 0;
        this._column = 0;
    };

    tree.sourceMapOutput.prototype.normalizeFilename = function(filename) {
        if (this._sourceMapBasepath && filename.indexOf(this._sourceMapBasepath) === 0) {
             filename = filename.substring(this._sourceMapBasepath.length);
             if (filename.charAt(0) === '\\' || filename.charAt(0) === '/') {
                filename = filename.substring(1);
             }
        }
        return (this._sourceMapRootpath || "") + filename.replace(/\\/g, '/');
    };

    tree.sourceMapOutput.prototype.add = function(chunk, fileInfo, index, mapLines) {

        //ignore adding empty strings
        if (!chunk) {
            return;
        }

        var lines,
            sourceLines,
            columns,
            sourceColumns,
            i;

        if (fileInfo) {
            var inputSource = this._contentsMap[fileInfo.filename].substring(0, index);
            sourceLines = inputSource.split("\n");
            sourceColumns = sourceLines[sourceLines.length-1];
        }

        lines = chunk.split("\n");
        columns = lines[lines.length-1];

        if (fileInfo) {
            if (!mapLines) {
                this._sourceMapGenerator.addMapping({ generated: { line: this._lineNumber + 1, column: this._column},
                    original: { line: sourceLines.length, column: sourceColumns.length},
                    source: this.normalizeFilename(fileInfo.filename)});
            } else {
                for(i = 0; i < lines.length; i++) {
                    this._sourceMapGenerator.addMapping({ generated: { line: this._lineNumber + i + 1, column: i === 0 ? this._column : 0},
                        original: { line: sourceLines.length + i, column: i === 0 ? sourceColumns.length : 0},
                        source: this.normalizeFilename(fileInfo.filename)});
                }
            }
        }

        if (lines.length === 1) {
            this._column += columns.length;
        } else {
            this._lineNumber += lines.length - 1;
            this._column = columns.length;
        }

        this._css.push(chunk);
    };

    tree.sourceMapOutput.prototype.isEmpty = function() {
        return this._css.length === 0;
    };

    tree.sourceMapOutput.prototype.toCSS = function(env) {
        this._sourceMapGenerator = new this._sourceMapGeneratorConstructor({ file: this._outputFilename, sourceRoot: null });

        if (this._outputSourceFiles) {
            for(var filename in this._contentsMap) {
                this._sourceMapGenerator.setSourceContent(this.normalizeFilename(filename), this._contentsMap[filename]);
            }
        }

        this._rootNode.genCSS(env, this);

        if (this._css.length > 0) {
            var sourceMapFilename,
                sourceMapContent = JSON.stringify(this._sourceMapGenerator.toJSON());

            if (this._sourceMapFilename) {
                sourceMapFilename = this.normalizeFilename(this._sourceMapFilename);
            }

            if (this._writeSourceMap) {
                this._writeSourceMap(sourceMapContent);
            } else {
                sourceMapFilename = "data:application/json," + encodeURIComponent(sourceMapContent);
            }

            if (sourceMapFilename) {
                this._css.push("/*# sourceMappingURL=" + sourceMapFilename + " */");
            }
        }

        return this._css.join('');
    };

})(require('./tree'));

//
// browser.js - client-side engine
//
/*global less, window, document, XMLHttpRequest, location */

var isFileProtocol = /^(file|chrome(-extension)?|resource|qrc|app):/.test(location.protocol);

less.env = less.env || (location.hostname == '127.0.0.1' ||
                        location.hostname == '0.0.0.0'   ||
                        location.hostname == 'localhost' ||
                        location.port.length > 0         ||
                        isFileProtocol                   ? 'development'
                                                         : 'production');

var logLevel = {
    info: 2,
    errors: 1,
    none: 0
};

// The amount of logging in the javascript console.
// 2 - Information and errors
// 1 - Errors
// 0 - None
// Defaults to 2
less.logLevel = typeof(less.logLevel) != 'undefined' ? less.logLevel : logLevel.info;

// Load styles asynchronously (default: false)
//
// This is set to `false` by default, so that the body
// doesn't start loading before the stylesheets are parsed.
// Setting this to `true` can result in flickering.
//
less.async = less.async || false;
less.fileAsync = less.fileAsync || false;

// Interval between watch polls
less.poll = less.poll || (isFileProtocol ? 1000 : 1500);

//Setup user functions
if (less.functions) {
    for(var func in less.functions) {
        less.tree.functions[func] = less.functions[func];
   }
}

var dumpLineNumbers = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(location.hash);
if (dumpLineNumbers) {
    less.dumpLineNumbers = dumpLineNumbers[1];
}

var typePattern = /^text\/(x-)?less$/;
var cache = null;
var fileCache = {};

function log(str, level) {
    if (less.env == 'development' && typeof(console) !== 'undefined' && less.logLevel >= level) {
        console.log('less: ' + str);
    }
}

function extractId(href) {
    return href.replace(/^[a-z-]+:\/+?[^\/]+/, '' )  // Remove protocol & domain
        .replace(/^\//,                 '' )  // Remove root /
        .replace(/\.[a-zA-Z]+$/,        '' )  // Remove simple extension
        .replace(/[^\.\w-]+/g,          '-')  // Replace illegal characters
        .replace(/\./g,                 ':'); // Replace dots with colons(for valid id)
}

function errorConsole(e, rootHref) {
    var template = '{line} {content}';
    var filename = e.filename || rootHref;
    var errors = [];
    var content = (e.type || "Syntax") + "Error: " + (e.message || 'There is an error in your .less file') +
        " in " + filename + " ";

    var errorline = function (e, i, classname) {
        if (e.extract[i] !== undefined) {
            errors.push(template.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (i - 1))
                .replace(/\{class\}/, classname)
                .replace(/\{content\}/, e.extract[i]));
        }
    };

    if (e.extract) {
        errorline(e, 0, '');
        errorline(e, 1, 'line');
        errorline(e, 2, '');
        content += 'on line ' + e.line + ', column ' + (e.column + 1) + ':\n' +
            errors.join('\n');
    } else if (e.stack) {
        content += e.stack;
    }
    log(content, logLevel.errors);
}

function createCSS(styles, sheet, lastModified) {
    // Strip the query-string
    var href = sheet.href || '';

    // If there is no title set, use the filename, minus the extension
    var id = 'less:' + (sheet.title || extractId(href));

    // If this has already been inserted into the DOM, we may need to replace it
    var oldCss = document.getElementById(id);
    var keepOldCss = false;

    // Create a new stylesheet node for insertion or (if necessary) replacement
    var css = document.createElement('style');
    css.setAttribute('type', 'text/css');
    if (sheet.media) {
        css.setAttribute('media', sheet.media);
    }
    css.id = id;

    if (css.styleSheet) { // IE
        try {
            css.styleSheet.cssText = styles;
        } catch (e) {
            throw new(Error)("Couldn't reassign styleSheet.cssText.");
        }
    } else {
        css.appendChild(document.createTextNode(styles));

        // If new contents match contents of oldCss, don't replace oldCss
        keepOldCss = (oldCss !== null && oldCss.childNodes.length > 0 && css.childNodes.length > 0 &&
            oldCss.firstChild.nodeValue === css.firstChild.nodeValue);
    }

    var head = document.getElementsByTagName('head')[0];

    // If there is no oldCss, just append; otherwise, only append if we need
    // to replace oldCss with an updated stylesheet
    if (oldCss === null || keepOldCss === false) {
        var nextEl = sheet && sheet.nextSibling || null;
        if (nextEl) {
            nextEl.parentNode.insertBefore(css, nextEl);
        } else {
            head.appendChild(css);
        }
    }
    if (oldCss && keepOldCss === false) {
        oldCss.parentNode.removeChild(oldCss);
    }

    // Don't update the local store if the file wasn't modified
    if (lastModified && cache) {
        log('saving ' + href + ' to cache.', logLevel.info);
        try {
            cache.setItem(href, styles);
            cache.setItem(href + ':timestamp', lastModified);
        } catch(e) {
            //TODO - could do with adding more robust error handling
            log('failed to save', logLevel.errors);
        }
    }
}

function errorHTML(e, rootHref) {
    var id = 'less-error-message:' + extractId(rootHref || "");
    var template = '<li><label>{line}</label><pre class="{class}">{content}</pre></li>';
    var elem = document.createElement('div'), timer, content, errors = [];
    var filename = e.filename || rootHref;
    var filenameNoPath = filename.match(/([^\/]+(\?.*)?)$/)[1];

    elem.id        = id;
    elem.className = "less-error-message";

    content = '<h3>'  + (e.type || "Syntax") + "Error: " + (e.message || 'There is an error in your .less file') +
        '</h3>' + '<p>in <a href="' + filename   + '">' + filenameNoPath + "</a> ";

    var errorline = function (e, i, classname) {
        if (e.extract[i] !== undefined) {
            errors.push(template.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (i - 1))
                .replace(/\{class\}/, classname)
                .replace(/\{content\}/, e.extract[i]));
        }
    };

    if (e.extract) {
        errorline(e, 0, '');
        errorline(e, 1, 'line');
        errorline(e, 2, '');
        content += 'on line ' + e.line + ', column ' + (e.column + 1) + ':</p>' +
            '<ul>' + errors.join('') + '</ul>';
    } else if (e.stack) {
        content += '<br/>' + e.stack.split('\n').slice(1).join('<br/>');
    }
    elem.innerHTML = content;

    // CSS for error messages
    createCSS([
        '.less-error-message ul, .less-error-message li {',
        'list-style-type: none;',
        'margin-right: 15px;',
        'padding: 4px 0;',
        'margin: 0;',
        '}',
        '.less-error-message label {',
        'font-size: 12px;',
        'margin-right: 15px;',
        'padding: 4px 0;',
        'color: #cc7777;',
        '}',
        '.less-error-message pre {',
        'color: #dd6666;',
        'padding: 4px 0;',
        'margin: 0;',
        'display: inline-block;',
        '}',
        '.less-error-message pre.line {',
        'color: #ff0000;',
        '}',
        '.less-error-message h3 {',
        'font-size: 20px;',
        'font-weight: bold;',
        'padding: 15px 0 5px 0;',
        'margin: 0;',
        '}',
        '.less-error-message a {',
        'color: #10a',
        '}',
        '.less-error-message .error {',
        'color: red;',
        'font-weight: bold;',
        'padding-bottom: 2px;',
        'border-bottom: 1px dashed red;',
        '}'
    ].join('\n'), { title: 'error-message' });

    elem.style.cssText = [
        "font-family: Arial, sans-serif",
        "border: 1px solid #e00",
        "background-color: #eee",
        "border-radius: 5px",
        "-webkit-border-radius: 5px",
        "-moz-border-radius: 5px",
        "color: #e00",
        "padding: 15px",
        "margin-bottom: 15px"
    ].join(';');

    if (less.env == 'development') {
        timer = setInterval(function () {
            if (document.body) {
                if (document.getElementById(id)) {
                    document.body.replaceChild(elem, document.getElementById(id));
                } else {
                    document.body.insertBefore(elem, document.body.firstChild);
                }
                clearInterval(timer);
            }
        }, 10);
    }
}

function error(e, rootHref) {
    if (!less.errorReporting || less.errorReporting === "html") {
        errorHTML(e, rootHref);
    } else if (less.errorReporting === "console") {
        errorConsole(e, rootHref);
    } else if (typeof less.errorReporting === 'function') {
        less.errorReporting("add", e, rootHref);
    }
}

function removeErrorHTML(path) {
    var node = document.getElementById('less-error-message:' + extractId(path));
    if (node) {
        node.parentNode.removeChild(node);
    }
}

function removeErrorConsole(path) {
    //no action
}

function removeError(path) {
    if (!less.errorReporting || less.errorReporting === "html") {
        removeErrorHTML(path);
    } else if (less.errorReporting === "console") {
        removeErrorConsole(path);
    } else if (typeof less.errorReporting === 'function') {
        less.errorReporting("remove", path);
    }
}

function loadStyles(newVars) {
    var styles = document.getElementsByTagName('style'),
        style;
    for (var i = 0; i < styles.length; i++) {
        style = styles[i];
        if (style.type.match(typePattern)) {
            var env = new less.tree.parseEnv(less),
                lessText = style.innerHTML || '';
            env.filename = document.location.href.replace(/#.*$/, '');
            if (newVars) {
                env.useFileCache = true;
                lessText += "\n" + newVars;
            }

            /*jshint loopfunc:true */
            // use closure to store current value of i
            var callback = (function(style) {
                return function (e, cssAST) {
                    if (e) {
                        return error(e, "inline");
                    }
                    var css = cssAST.toCSS(less);
                    style.type = 'text/css';
                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        style.innerHTML = css;
                    }
                };
            })(style);
            new(less.Parser)(env).parse(lessText, callback);
        }
    }
}

function extractUrlParts(url, baseUrl) {
    // urlParts[1] = protocol&hostname || /
    // urlParts[2] = / if path relative to host base
    // urlParts[3] = directories
    // urlParts[4] = filename
    // urlParts[5] = parameters

    var urlPartsRegex = /^((?:[a-z-]+:)?\/+?(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,
        urlParts = url.match(urlPartsRegex),
        returner = {}, directories = [], i, baseUrlParts;

    if (!urlParts) {
        throw new Error("Could not parse sheet href - '"+url+"'");
    }

    // Stylesheets in IE don't always return the full path
    if (!urlParts[1] || urlParts[2]) {
        baseUrlParts = baseUrl.match(urlPartsRegex);
        if (!baseUrlParts) {
            throw new Error("Could not parse page url - '"+baseUrl+"'");
        }
        urlParts[1] = urlParts[1] || baseUrlParts[1] || "";
        if (!urlParts[2]) {
            urlParts[3] = baseUrlParts[3] + urlParts[3];
        }
    }

    if (urlParts[3]) {
        directories = urlParts[3].replace(/\\/g, "/").split("/");

        // extract out . before .. so .. doesn't absorb a non-directory
        for(i = 0; i < directories.length; i++) {
            if (directories[i] === ".") {
                directories.splice(i, 1);
                i -= 1;
            }
        }

        for(i = 0; i < directories.length; i++) {
            if (directories[i] === ".." && i > 0) {
                directories.splice(i-1, 2);
                i -= 2;
            }
        }
    }

    returner.hostPart = urlParts[1];
    returner.directories = directories;
    returner.path = urlParts[1] + directories.join("/");
    returner.fileUrl = returner.path + (urlParts[4] || "");
    returner.url = returner.fileUrl + (urlParts[5] || "");
    return returner;
}

function pathDiff(url, baseUrl) {
    // diff between two paths to create a relative path

    var urlParts = extractUrlParts(url),
        baseUrlParts = extractUrlParts(baseUrl),
        i, max, urlDirectories, baseUrlDirectories, diff = "";
    if (urlParts.hostPart !== baseUrlParts.hostPart) {
        return "";
    }
    max = Math.max(baseUrlParts.directories.length, urlParts.directories.length);
    for(i = 0; i < max; i++) {
        if (baseUrlParts.directories[i] !== urlParts.directories[i]) { break; }
    }
    baseUrlDirectories = baseUrlParts.directories.slice(i);
    urlDirectories = urlParts.directories.slice(i);
    for(i = 0; i < baseUrlDirectories.length-1; i++) {
        diff += "../";
    }
    for(i = 0; i < urlDirectories.length-1; i++) {
        diff += urlDirectories[i] + "/";
    }
    return diff;
}

function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        try {
            /*global ActiveXObject */
            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
        } catch (e) {
            log("browser doesn't support AJAX.", logLevel.errors);
            return null;
        }
    }
}

function doXHR(url, type, callback, errback) {
    var xhr = getXMLHttpRequest();
    var async = isFileProtocol ? less.fileAsync : less.async;

    if (typeof(xhr.overrideMimeType) === 'function') {
        xhr.overrideMimeType('text/css');
    }
    log("XHR: Getting '" + url + "'", logLevel.info);
    xhr.open('GET', url, async);
    xhr.setRequestHeader('Accept', type || 'text/x-less, text/css; q=0.9, */*; q=0.5');
    xhr.send(null);

    function handleResponse(xhr, callback, errback) {
        if (xhr.status >= 200 && xhr.status < 300) {
            callback(xhr.responseText,
                xhr.getResponseHeader("Last-Modified"));
        } else if (typeof(errback) === 'function') {
            errback(xhr.status, url);
        }
    }

    if (isFileProtocol && !less.fileAsync) {
        if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300)) {
            callback(xhr.responseText);
        } else {
            errback(xhr.status, url);
        }
    } else if (async) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                handleResponse(xhr, callback, errback);
            }
        };
    } else {
        handleResponse(xhr, callback, errback);
    }
}

function loadFile(originalHref, currentFileInfo, callback, env, newVars) {

    if (currentFileInfo && currentFileInfo.currentDirectory && !/^([a-z-]+:)?\//.test(originalHref)) {
        originalHref = currentFileInfo.currentDirectory + originalHref;
    }

    // sheet may be set to the stylesheet for the initial load or a collection of properties including
    // some env variables for imports
    var hrefParts = extractUrlParts(originalHref, window.location.href);
    var href      = hrefParts.url;
    var newFileInfo = {
        currentDirectory: hrefParts.path,
        filename: href
    };

    if (currentFileInfo) {
        newFileInfo.entryPath = currentFileInfo.entryPath;
        newFileInfo.rootpath = currentFileInfo.rootpath;
        newFileInfo.rootFilename = currentFileInfo.rootFilename;
        newFileInfo.relativeUrls = currentFileInfo.relativeUrls;
    } else {
        newFileInfo.entryPath = hrefParts.path;
        newFileInfo.rootpath = less.rootpath || hrefParts.path;
        newFileInfo.rootFilename = href;
        newFileInfo.relativeUrls = env.relativeUrls;
    }

    if (newFileInfo.relativeUrls) {
        if (env.rootpath) {
            newFileInfo.rootpath = extractUrlParts(env.rootpath + pathDiff(hrefParts.path, newFileInfo.entryPath)).path;
        } else {
            newFileInfo.rootpath = hrefParts.path;
        }
    }

    if (env.useFileCache && fileCache[href]) {
        try {
            var lessText = fileCache[href];
            if (newVars) {
                lessText += "\n" + newVars;
            }
            callback(null, lessText, href, newFileInfo, { lastModified: new Date() });
        } catch (e) {
            callback(e, null, href);
        }
        return;
    }

    doXHR(href, env.mime, function (data, lastModified) {
        // per file cache
        fileCache[href] = data;

        // Use remote copy (re-parse)
        try {
            callback(null, data, href, newFileInfo, { lastModified: lastModified });
        } catch (e) {
            callback(e, null, href);
        }
    }, function (status, url) {
        callback({ type: 'File', message: "'" + url + "' wasn't found (" + status + ")" }, null, href);
    });
}

function loadStyleSheet(sheet, callback, reload, remaining, newVars) {

    var env = new less.tree.parseEnv(less);
    env.mime = sheet.type;

    if (newVars) {
        env.useFileCache = true;
    }

    loadFile(sheet.href, null, function(e, data, path, newFileInfo, webInfo) {

        if (webInfo) {
            webInfo.remaining = remaining;

            var css       = cache && cache.getItem(path),
                timestamp = cache && cache.getItem(path + ':timestamp');

            if (!reload && timestamp && webInfo.lastModified &&
                (new(Date)(webInfo.lastModified).valueOf() ===
                    new(Date)(timestamp).valueOf())) {
                // Use local copy
                createCSS(css, sheet);
                webInfo.local = true;
                callback(null, null, data, sheet, webInfo, path);
                return;
            }
        }

        //TODO add tests around how this behaves when reloading
        removeError(path);

        if (data) {
            env.currentFileInfo = newFileInfo;
            new(less.Parser)(env).parse(data, function (e, root) {
                if (e) { return callback(e, null, null, sheet); }
                try {
                    callback(e, root, data, sheet, webInfo, path);
                } catch (e) {
                    callback(e, null, null, sheet);
                }
            });
        } else {
            callback(e, null, null, sheet, webInfo, path);
        }
    }, env, newVars);
}

function loadStyleSheets(callback, reload, newVars) {
    for (var i = 0; i < less.sheets.length; i++) {
        loadStyleSheet(less.sheets[i], callback, reload, less.sheets.length - (i + 1), newVars);
    }
}

function initRunningMode(){
    if (less.env === 'development') {
        less.optimization = 0;
        less.watchTimer = setInterval(function () {
            if (less.watchMode) {
                loadStyleSheets(function (e, root, _, sheet, env) {
                    if (e) {
                        error(e, sheet.href);
                    } else if (root) {
                        createCSS(root.toCSS(less), sheet, env.lastModified);
                    }
                });
            }
        }, less.poll);
    } else {
        less.optimization = 3;
    }
}

//
// Watch mode
//
less.watch   = function () {
    if (!less.watchMode ){
        less.env = 'development';
         initRunningMode();
    }
    return this.watchMode = true;
};

less.unwatch = function () {clearInterval(less.watchTimer); return this.watchMode = false; };

if (/!watch/.test(location.hash)) {
    less.watch();
}

if (less.env != 'development') {
    try {
        cache = (typeof(window.localStorage) === 'undefined') ? null : window.localStorage;
    } catch (_) {}
}

//
// Get all <link> tags with the 'rel' attribute set to "stylesheet/less"
//
var links = document.getElementsByTagName('link');

less.sheets = [];

for (var i = 0; i < links.length; i++) {
    if (links[i].rel === 'stylesheet/less' || (links[i].rel.match(/stylesheet/) &&
       (links[i].type.match(typePattern)))) {
        less.sheets.push(links[i]);
    }
}

//
// With this function, it's possible to alter variables and re-render
// CSS without reloading less-files
//
less.modifyVars = function(record) {
    var newVars = "";
    for (var name in record) {
        newVars += ((name.slice(0,1) === '@')? '' : '@') + name +': '+
                ((record[name].slice(-1) === ';')? record[name] : record[name] +';');
    }
    less.refresh(false, newVars);
};

less.refresh = function (reload, newVars) {
    var startTime, endTime;
    startTime = endTime = new Date();

    loadStyleSheets(function (e, root, _, sheet, env) {
        if (e) {
            return error(e, sheet.href);
        }
        if (env.local) {
            log("loading " + sheet.href + " from cache.", logLevel.info);
        } else {
            log("parsed " + sheet.href + " successfully.", logLevel.info);
            createCSS(root.toCSS(less), sheet, env.lastModified);
        }
        log("css for " + sheet.href + " generated in " + (new Date() - endTime) + 'ms', logLevel.info);
        if (env.remaining === 0) {
            log("css generated in " + (new Date() - startTime) + 'ms', logLevel.info);
        }
        endTime = new Date();
    }, reload, newVars);

    loadStyles(newVars);
};

less.refreshStyles = loadStyles;

less.Parser.fileLoader = loadFile;

less.refresh(less.env === 'development');

// amd.js
//
// Define Less as an AMD module.
if (typeof define === "function" && define.amd) {
    define(function () { return less; } );
}

})(window);
var app = app || {};

$(function () {
	app.utils = {};

	app.utils.isTrue = function (x, callback) {
		if(typeof x !== 'boolean'){
			return x === 'true';
		}else{
			return x;
		}

		if (typeof callback == 'function') {
			callback();
		}
	};

	app.utils.setSettings = function (target, val, callback) {
		target = 'codemagic.settings.' + target;

		localStorage.setItem(target, val);

		if (typeof callback == 'function') {
			callback();
		}
	};

	app.utils.getSettings = function (target) {
		target = 'codemagic.settings.' + target;
		var value = localStorage.getItem(target);

		if(value === 'true'){
			return true;
		}
		if(value === 'false'){
			return false;
		}
		if(value === 'undefined'){
			return undefined;
		}
		if(value === 'null'){
			return null;
		}
		if(value === 'NaN'){
			return NaN;
		}
		if(!isNaN(value)){
			return parseInt(value, 10);
		}
		return value;
	};

	app.utils.resizeEditors = function (editors, callback) {
		editors.html.resize();
		editors.css.resize();
		editors.js.resize();

		if (typeof callback == 'function') {
			callback();
		}
	};

	app.utils.consoleLog = function (log, callback) {
		$('#console .editor-module').addClass('enabled');
		$('#console-editor').append('<code class="js-error">&gt; ' + log + '</code>');

		if (typeof callback == 'function') {
			callback();
		}
	};

	app.utils.getZippedProject = function (editors, callback) {

		if (typeof callback == 'function') {
			callback();
		}
	};

	app.utils.updateLayout = function (editors, callback) {
		app.utils.resizeEditors(editors);

		if (typeof callback == 'function') {
			callback();
		}
	};

	app.utils.setTheme = function (editors, theme, callback) {
		editors.html.setTheme('ace/theme/' + theme);
		editors.css.setTheme('ace/theme/' + theme);
		editors.js.setTheme('ace/theme/' + theme);

		app.session.settings.theme = theme;
		app.utils.setSettings('editor.theme', theme);

		if (typeof callback == 'function') {
			callback();
		}
	};

	app.utils.setEditorMode = function (target, mode, callback) {
		app.session.settings[target].mode = mode;

		app.utils.setSettings(target + '.mode', mode);

		if(mode === 'coffeescript'){
			mode = 'coffee';
		}

		app.editors[target + 'Session'].setMode('ace/mode/' + mode);

		if (typeof callback == 'function') {
			callback();
		}
	};

	app.utils.toggleEditorState = function (target, callback) {
		var state = false;
		if($('#' + target + '-editor-toggle').hasClass('enabled')){
			state = true;
		}
		app.session.settings[target].state = state;

		if (typeof callback == 'function') {
			callback();
		}
	};
});

var app = app || {};

$(function () {
	app.AppRouter = Backbone.Router.extend({
		routes: {
			'': 'new',
			'new/': 'new',
			'about/': 'about'
		},
		new: function (){
			app.newView = new app.NewView();
		},
		about: function (){
			app.aboutView = new app.AboutView();
		}
	});
});

var app = app || {};

$(function () {
	'use strict';

	app.CodemagicView = Backbone.View.extend({
		that: this,
		el: '#container',
		events : {
			'click #update': 'updateResults',
			'click #prettify': 'prettify',
			'click #fullscreen': 'toggleFullscreen',
			'click .editor-fullscreen-toggle': 'editorFullscreen',
			'mousedown .resizer': 'resizeInitialize',
			'mouseup': 'resizeFinalize',
			'mousemove': 'resizeRefresh',
			'click .editor-options-toggle': 'toggleTargetedEditorOptions',
			'change .codeChoice': 'toggleSelectedEditorOptions',
			'click .editor-toggle': 'toggleEditorState'
		},
		prettify: function () {
			// parameterize these depending on the editor's settings
			// https://github.com/einars/js-beautify#options
			if ($('#markupChoice').val() === 'HTML') {
				app.editors.htmlSession.setValue(html_beautify(app.editors.htmlSession.getValue(), {
					'brace_style': 'collapse',
					'indent_size': 1,
					'indent_char': '\t',
					'preserve-newlines': true,
					'max-preserve-newlines': 1,
					'wrap-line-length': 0,
					'unformatted': [],
					'indent-inner-html': true
				}));

				app.editors.htmlSession.selection.moveCursorFileStart();
			}

			if ($('#styleChoice').val() === 'CSS') {
				app.editors.cssSession.setValue(css_beautify(app.editors.cssSession.getValue(), {
					'brace_style': 'collapse',
					'indent_size': 1,
					'indent_char': '\t',
					'preserve-newlines': true,
					'max-preserve-newlines': 1,
					'wrap-line-length': 0,
					'unformatted': []
				}));

				app.editors.cssSession.selection.moveCursorFileStart();
			}

			if ($('#scriptChoice').val() === 'JavaScript') {
				app.editors.jsSession.setValue(js_beautify(app.editors.jsSession.getValue(), {
					'indent_size': 1,
					'indent_char': '\t',
					'preserve_newlines': true,
					'jslint_happy': true,
					'brace_style': 'collapse',
					'keep_array_indentation': false,
					'keep_function_indentation': false,
					'eval_code': false,
					'unescape_strings': false,
					'break_chained_methods': false
				}));

				app.editors.jsSession.selection.moveCursorFileStart();
			}
		},
		toggleEditorState: function (selector) {
			var target;
			if(selector instanceof Array){
				for (var i = 0; i < selector.length; i++) {
					$(selector[i]).toggleClass('enabled');
					$('#' + selector[i] + '-editor').closest('.editor-module').toggleClass('enabled');
					$('#' + selector[i] + '-editor-toggle').toggleClass('enabled');
				}
				target = false;
			}else if(typeof selector === 'object'){
				target = $(selector.currentTarget).prop('id').replace('-editor-toggle', '');
			} else {
				target = selector;
			}

			if(target !== false){
				$('#' + target + '-editor-toggle').toggleClass('enabled');
				$('#' + target + '-editor').closest('.editor-module').toggleClass('enabled');
				app.utils.toggleEditorState(target);
			}
		},
		toggleSelectedEditorOptions: function (e) {
			var value = $(e.currentTarget).val();
			var editorTarget = $(e.currentTarget).parent();
			var target = editorTarget.parent().find('.editor-option-title');
			$(target).html(value);
			this.toggleTargetedEditorOptions(e);
			app.utils.setEditorMode(editorTarget.prop('id').replace('-editor-options', ''), value.toLowerCase());
		},
		toggleTargetedEditorOptions: function (e) {
			if($(e.currentTarget).prop('tagName') === 'SELECT'){
				this.toggleEditorOptions($(e.currentTarget).parent());
			} else if(e.container !== undefined){
				var temp = $(e.container).prop('id').replace('-editor', '');
				this.toggleEditorOptions($('#' + temp + '-editor-options'));
			} else {
				this.toggleEditorOptions($(e.currentTarget).next());
			}
		},
		toggleEditorOptions: function (target) {
			$(target).toggleClass('enabled');
		},
		resizeInitialize: function (e) {
			app.session.resize = e.pageY;
			app.session.resizeTarget = app.session.resizeTarget || {};
			app.session.resizeTarget.id = $(e.currentTarget).prev().find('.editor');
			app.session.resizeTarget.id = app.session.resizeTarget.id.prop('id');
			app.session.resizeTarget.height = $('#' + app.session.resizeTarget.id).parent().height();
		},
		resizeRefresh: function (e) {
			if (app.session.resize) {
				$('#editors').css('padding-bottom', '30%');
				$('#' + app.session.resizeTarget.id).parent().height(app.session.resizeTarget.height + e.pageY - app.session.resize);
				app.utils.updateLayout(app.editors);
			}
		},
		resizeFinalize: function () {
			app.session.resize = false;
			if(typeof app.session.resizeTarget !== 'undefined'){
				if(typeof app.session.resizeTarget.height !== 'undefined'){
					app.session.resizeTarget.height = $('#' + app.session.resizeTarget.id).height();
				}
			}
			app.utils.updateLayout(app.editors);
			$('#editors').css('padding-bottom', '0');
		},
		toggleFullscreen: function () {
			if ($('#fullscreen').hasClass('enabled')) {
				$('#fullscreen').removeClass('enabled');
				$('#editors').show();
				$('#result').removeClass('fullscreen');
			} else {
				$('#fullscreen').addClass('enabled');
				$('#editors').hide();
				$('#result').addClass('fullscreen');
			}
		},
		editorFullscreen: function (e) {
			var target;
			if(e.container !== undefined){
				target = $(e.container).prop('id');
			}else{
				target = $(e.currentTarget).prop('id');
				target = target.replace('-editor-fullscreen-toggle', '') + '-editor';
			}
			target = document.getElementById(target);

			if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
				if (target.requestFullscreen) {
					target.requestFullscreen();
				} else
				if (target.mozRequestFullScreen) {
					target.mozRequestFullScreen();
				} else
				if (target.webkitRequestFullscreen) {
					target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
			}
			else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				}
				else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				}
				else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}
		},
		updateResults: function () {
			$('#console-editor').html('');

			var content = '';
			var style= '';
			var script= '';

			if ($('#markupChoice').val() === 'Markdown') {
				content = marked(app.editors.html.getValue());
			} else if ($('#markupChoice').val() === 'HAML') {
				app.utils.consoleLog('HAML support is not ready yet');
			} else if ($('#markupChoice').val() === 'Jade') {
				app.utils.consoleLog('Jade support is not ready yet');
			} else {
				content = app.editors.html.getValue();
			}

			if ($('#styleChoice').val() === 'Less') {
				var parser = new(less.Parser)();

				parser.parse(app.editors.css.getValue(), function (e, tree) {
					if (e) {
						// TODO: error handling in console
						$('#console-editor').append('<code>> ' + e.message + '</code><br>');
						console.log(e);
					}
					style = tree.toCSS();
				});
			} else if ($('#styleChoice').val() === 'SASS' || $('#styleChoice').val() === 'SCSS') {
				app.utils.consoleLog('SASS/SCSS support is not ready yet');
			} else if ($('#styleChoice').val() === 'Stylus') {
				app.utils.consoleLog('Stylus support is not ready yet');
			} else {
				style = app.editors.css.getValue();
			}

			if ($('#styleChoice').val() === 'CoffeeScript') {
			} else {
				script = app.editors.js.getValue();
			}

			// WHY: breaking down logger into many pieces to prevent proxies from chocking by passing the 500 character limit
			var logger = '<script>var console={};window.onerror=function(msg,url,line){parent.document.querySelector("#console .editor-module").classList.add("enabled");parent.document.querySelector("#console-editor-toggle").classList.add("enabled");parent.document.getElementById("console-editor").insertAdjacentHTML("beforeend","<code class=\'js-error\'>> "+msg+" </code>")};';
			logger += 'console.log=function(){var str="",count=0;for(var i=0;i<arguments.length;i++){if(typeof arguments[i]=="object"){str="Object {<br>";for(var item in arguments[i])if(arguments[i].hasOwnProperty(item))';
			logger += '{count++;str+="\t"+item+" : "+arguments[i][item]+",<br>"}str=str.substring(0,str.length-5)+"<br>}";if(count===0){str="Object {}";count=0}}else str=arguments[i];parent.document.getElementById("console-editor").insertAdjacentHTML("beforeend","<code>> "+str+"</code><br>")}};</script>';

			var head = '<!doctype html><html><head>' + logger + '<meta charset="utf-8"><title>Title</title><meta name="description" content="Description"><meta name="author" content="Author"><style>' + style + '</style></head>';
			var body = '<body>' + content + '<script>' + script + '</script></body></html>';

			var result = head + body;


			var iframeContainer = document.getElementById('result');

			$('#result iframe').remove();

			// TODO: write the lines below in JQuery (if performance and stability allow it)
			var iframe = document.createElement('iframe');

			iframeContainer.appendChild(iframe);

			var iDoc = iframe.contentDocument;
			iDoc.open();
			iDoc.write(result);
			iDoc.close();

			$('iframe').height(Math.max($('#editors').height(), $('iframe').height()));
		},
		initialize: function () {
			this.template = _.template($('#codemagic-template').html());
			this.render();

			// populate editors with example content
			app.editors.htmlSession.setValue('<h1>Hello World</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nobis, inventore, cupiditate, itaque quae quas commodi reprehenderit expedita aliquid nulla vero voluptatem esse modi quasi similique atque sequi tempore dolore ut nesciunt aliquam quidem dolorum ipsa totam eaque accusamus odit maiores fugiat incidunt iste. Itaque necessitatibus cupiditate consequatur vitae maxime.</p>');
			app.editors.cssSession.setValue('body{ margin: 0; padding: 1rem; }\n\nh1{\n	margin-top: 0;\n	color: #666;\n}\n\np{\n	color: #999;\n}');
			app.editors.jsSession.setValue('var x = document.querySelector("p");\nx.style.textAlign = "justify";\nx.style.textIndent= "1rem";');
			this.updateResults();
		},
		render: function () {
			this.$el.append(this.template());

			/* *******************************************************
				Editors
			******************************************************* */

			app.session = {
				settings : {
					title : 'codeMagic',
					description : '',
					author : '',
					html : {
						state : true,
						mode : 'html',
						content : ''
					},
					css : {
						state : true,
						mode : 'css',
						content : ''
					},
					js : {
						state : true,
						content : ''
					},
					console : {
						state : false,
						content : ''
					},
					theme : app.utils.getSettings('editor.theme') || 'tomorrow',
					tabSize : parseInt(app.utils.getSettings('editor.tabSize'), 10) || 4,
					showPrintMargin : app.utils.getSettings('editor.showPrintMargin') || false,
					useWrapMode : app.utils.getSettings('editor.useWrapMode') || true,
					useWorker : true,
					fontSize : parseInt(app.utils.getSettings('editor.fontSize'), 10) || 12,
					showInvisibles : app.utils.getSettings('editor.showInvisibles') || false,
					behavioursEnabled : app.utils.getSettings('editor.behavioursEnabled') || true
				}
			};

			app.utils.setSettings('editor.theme', app.session.settings.theme);
			app.utils.setSettings('editor.tabSize', app.session.settings.tabSize);
			app.utils.setSettings('editor.showPrintMargin', app.session.settings.showPrintMargin);
			app.utils.setSettings('editor.useWrapMode', app.session.settings.useWrapMode);
			app.utils.setSettings('editor.useWorker', app.session.settings.useWorker);
			app.utils.setSettings('editor.fontSize', app.session.settings.fontSize);
			app.utils.setSettings('editor.showInvisibles', app.session.settings.showInvisibles);
			app.utils.setSettings('editor.behavioursEnabled', app.session.settings.behavioursEnabled);

			app.editors = {};
			app.editors.html = ace.edit('html-editor');
			app.editors.css = ace.edit('css-editor');
			app.editors.js = ace.edit('js-editor');
			app.editors.htmlSession = app.editors.html.getSession();
			app.editors.cssSession = app.editors.css.getSession();
			app.editors.jsSession = app.editors.js.getSession();

			app.emmet = ace.require('ace/ext/emmet');
			app.language_tools = ace.require('ace/ext/language_tools');

			_.each([app.editors.html, app.editors.css, app.editors.js], function(editor) {
				editor.commands.removeCommand('showSettingsMenu');
				editor.commands.addCommand({
					name: 'fullscreen',
					bindKey: {
						win: 'Ctrl-Shift-F',
						mac: 'Command-Shift-F'
					},
					exec: function (e) {
						app.codemagicView.editorFullscreen(e);
					},
					readOnly: true
				});
				editor.commands.addCommand({
					name: 'updateResults',
					bindKey: {
						win: 'Ctrl-Enter',
						mac: 'Command-Enter'
					},
					exec: function (e) {
						app.codemagicView.updateResults();
					},
					readOnly: true
				});
				editor.commands.addCommand({
					name: 'toggleEditorOptions',
					bindKey: {
						win: 'Ctrl-Alt-O',
						mac: 'Command-Alt-O'
					},
					exec: function (e) {
						app.codemagicView.toggleTargetedEditorOptions(e);
					},
					readOnly: true
				});
				editor.setOptions({
					enableSnippets: true,
					enableLiveAutoComplete: true,
					enableBasicAutocompletion: true,
					showPrintMargin: app.session.settings.showPrintMargin,
					useSoftTabs: false,
					fontSize: app.session.settings.fontSize,
					showInvisibles: app.session.settings.showInvisibles,
					behavioursEnabled: app.session.settings.behavioursEnabled,
					tabSize: app.session.settings.tabSize,
					wrap: app.session.settings.useWrapMode,
					useWorker: app.session.settings.useWorker,
					highlightActiveLine: false,
					enableEmmet: true
				});
			});

			// editor syntax highlighting modes
			app.editors.htmlSession.setMode('ace/mode/' + app.session.settings.html.mode);
			app.editors.cssSession.setMode('ace/mode/' + app.session.settings.css.mode);
			app.editors.jsSession.setMode('ace/mode/javascript');

			// set the Default theme
			app.utils.setTheme(app.editors, app.session.settings.theme);

			this.toggleEditorState(['html', 'css', 'js']);

			return this;
		}
	});
});

var app = app || {};

$(function () {
	'use strict';

	app.NewView = Backbone.View.extend({
		el: 'body',
		events : {
		},
		initialize: function () {
			this.render();
		},
		render: function () {
			this.$el.find('#container').empty();
			app.codemagicView = new app.CodemagicView();
			return this;
		}
	});
});

var app = app || {};

$(function () {
	'use strict';

	app.title = 'Hello Warl';

	app.router = new app.AppRouter();
	Backbone.history.start();
});
