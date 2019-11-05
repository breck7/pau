/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

"use strict"
class Timer {
  constructor() {
    this._tickTime = Date.now() - (this.isNodeJs() ? 1000 * process.uptime() : 0)
    this._firstTickTime = this._tickTime
  }
  isNodeJs() {
    return typeof exports !== "undefined"
  }
  tick(msg) {
    const elapsed = Date.now() - this._tickTime
    if (msg) console.log(`${elapsed}ms ${msg}`)
    this._tickTime = Date.now()
    return elapsed
  }
  getTotalElapsedTime() {
    return Date.now() - this._firstTickTime
  }
}
class TreeUtils {
  static getFileExtension(filepath = "") {
    const match = filepath.match(/\.([^\.]+)$/)
    return (match && match[1]) || ""
  }
  static findProjectRoot(dirName, projectName) {
    const fs = require("fs")
    const getProjectName = dirName => {
      if (!dirName) throw new Error(`dirName undefined when attempting to findProjectRoot for project "${projectName}"`)
      const parts = dirName.split("/")
      const filename = parts.join("/") + "/" + "package.json"
      if (fs.existsSync(filename) && JSON.parse(fs.readFileSync(filename, "utf8")).name === projectName) return parts.join("/") + "/"
      parts.pop()
      return parts
    }
    let result = getProjectName(dirName)
    while (typeof result !== "string" && result.length > 0) {
      result = getProjectName(result.join("/"))
    }
    if (result.length === 0) throw new Error(`Project root "${projectName}" in folder ${dirName} not found.`)
    return result
  }
  static escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }
  static removeNonAscii(str) {
    // https://stackoverflow.com/questions/20856197/remove-non-ascii-character-in-string
    return str.replace(/[^\x00-\x7F]/g, "")
  }
  static getMethodFromDotPath(context, str) {
    const methodParts = str.split(".")
    while (methodParts.length > 1) {
      const methodName = methodParts.shift()
      if (!context[methodName]) throw new Error(`${methodName} is not a method on ${context}`)
      context = context[methodName]()
    }
    const final = methodParts.shift()
    return [context, final]
  }
  static requireAbsOrRelative(filePath, contextFilePath) {
    if (!filePath.startsWith(".")) return require(filePath)
    const path = require("path")
    const folder = this.getPathWithoutFileName(contextFilePath)
    const file = path.resolve(folder + "/" + filePath)
    return require(file)
  }
  // Removes last ".*" from this string
  static removeFileExtension(filename) {
    return filename ? filename.replace(/\.[^\.]+$/, "") : ""
  }
  static getFileName(path) {
    const parts = path.split("/") // todo: change for windows?
    return parts.pop()
  }
  static getPathWithoutFileName(path) {
    const parts = path.split("/") // todo: change for windows?
    parts.pop()
    return parts.join("/")
  }
  static shuffleInPlace(arr) {
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    for (let index = arr.length - 1; index > 0; index--) {
      const tempIndex = Math.floor(Math.random() * (index + 1))
      ;[arr[index], arr[tempIndex]] = [arr[tempIndex], arr[index]]
    }
    return arr
  }
  // Only allows a-zA-Z0-9-_  (And optionally .)
  static _permalink(str, reg) {
    return str.length
      ? str
          .toLowerCase()
          .replace(reg, "")
          .replace(/ /g, "-")
      : ""
  }
  static stringToPermalink(str) {
    return this._permalink(str, /[^a-z0-9- _\.]/gi)
  }
  static getAvailablePermalink(permalink, doesFileExistSyncFn) {
    const extension = this.getFileExtension(permalink)
    permalink = this.removeFileExtension(permalink)
    const originalPermalink = permalink
    let num = 2
    let suffix = ""
    let filename = `${originalPermalink}${suffix}.${extension}`
    while (doesFileExistSyncFn(filename)) {
      filename = `${originalPermalink}${suffix}.${extension}`
      suffix = "-" + num
      num++
    }
    return filename
  }
  static toggle(currentValue, values) {
    const index = values.indexOf(currentValue)
    return index === -1 || index + 1 === values.length ? values[0] : values[index + 1]
  }
  static getClassNameFromFilePath(filepath) {
    return this.removeFileExtension(this.getFileName(filepath))
  }
  static joinArraysOn(joinOn, arrays, columns) {
    const rows = {}
    let index = 0
    if (!columns) columns = arrays.map(arr => Object.keys(arr[0]))
    arrays.forEach((arr, index) => {
      const cols = columns[index]
      arr.forEach(row => {
        const key = joinOn ? row[joinOn] : index++
        if (!rows[key]) rows[key] = {}
        const obj = rows[key]
        cols.forEach(col => (obj[col] = row[col]))
      })
    })
    return Object.values(rows)
  }
  static getParentFolder(path) {
    if (path.endsWith("/")) path = this._removeLastSlash(path)
    return path.replace(/\/[^\/]*$/, "") + "/"
  }
  static _removeLastSlash(path) {
    return path.replace(/\/$/, "")
  }
  static _listToEnglishText(list, limit = 5) {
    const len = list.length
    if (!len) return ""
    if (len === 1) return `'${list[0]}'`
    const clone = list.slice(0, limit).map(item => `'${item}'`)
    const last = clone.pop()
    if (len <= limit) return clone.join(", ") + ` and ${last}`
    return clone.join(", ") + ` and ${len - limit} more`
  }
  // todo: refactor so instead of str input takes an array of cells(strings) and scans each indepndently.
  static _chooseDelimiter(str) {
    const del = " ,|\t;^%$!#@~*&+-=_:?.{}[]()<>/".split("").find(idea => !str.includes(idea))
    if (!del) throw new Error("Could not find a delimiter")
    return del
  }
  static flatten(arr) {
    if (arr.flat) return arr.flat()
    return arr.reduce((acc, val) => acc.concat(val), [])
  }
  static escapeBackTicks(str) {
    return str.replace(/\`/g, "\\`").replace(/\$\{/g, "\\${")
  }
  static ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  // Adapted from: https://github.com/dcporter/didyoumean.js/blob/master/didYouMean-1.2.1.js
  static didYouMean(str = "", options = [], caseSensitive = false, threshold = 0.4, thresholdAbsolute = 20) {
    if (!caseSensitive) str = str.toLowerCase()
    // Calculate the initial value (the threshold) if present.
    const thresholdRelative = threshold * str.length
    let maximumEditDistanceToBeBestMatch
    if (thresholdRelative !== null && thresholdAbsolute !== null) maximumEditDistanceToBeBestMatch = Math.min(thresholdRelative, thresholdAbsolute)
    else if (thresholdRelative !== null) maximumEditDistanceToBeBestMatch = thresholdRelative
    else if (thresholdAbsolute !== null) maximumEditDistanceToBeBestMatch = thresholdAbsolute
    // Get the edit distance to each option. If the closest one is less than 40% (by default) of str's length, then return it.
    let closestMatch
    const len = options.length
    for (let optionIndex = 0; optionIndex < len; optionIndex++) {
      const candidate = options[optionIndex]
      if (!candidate) continue
      const editDistance = TreeUtils._getEditDistance(str, caseSensitive ? candidate : candidate.toLowerCase(), maximumEditDistanceToBeBestMatch)
      if (editDistance < maximumEditDistanceToBeBestMatch) {
        maximumEditDistanceToBeBestMatch = editDistance
        closestMatch = candidate
      }
    }
    return closestMatch
  }
  // Adapted from: https://github.com/dcporter/didyoumean.js/blob/master/didYouMean-1.2.1.js
  static _getEditDistance(stringA, stringB, maxInt) {
    // Handle null or undefined max.
    maxInt = maxInt || maxInt === 0 ? maxInt : TreeUtils.MAX_INT
    const aLength = stringA.length
    const bLength = stringB.length
    // Fast path - no A or B.
    if (aLength === 0) return Math.min(maxInt + 1, bLength)
    if (bLength === 0) return Math.min(maxInt + 1, aLength)
    // Fast path - length diff larger than max.
    if (Math.abs(aLength - bLength) > maxInt) return maxInt + 1
    // Slow path.
    const matrix = []
    // Set up the first row ([0, 1, 2, 3, etc]).
    for (let bIndex = 0; bIndex <= bLength; bIndex++) {
      matrix[bIndex] = [bIndex]
    }
    // Set up the first column (same).
    for (let aIndex = 0; aIndex <= aLength; aIndex++) {
      matrix[0][aIndex] = aIndex
    }
    let colMin
    let minJ
    let maxJ
    // Loop over the rest of the columns.
    for (let bIndex = 1; bIndex <= bLength; bIndex++) {
      colMin = TreeUtils.MAX_INT
      minJ = 1
      if (bIndex > maxInt) minJ = bIndex - maxInt
      maxJ = bLength + 1
      if (maxJ > maxInt + bIndex) maxJ = maxInt + bIndex
      // Loop over the rest of the rows.
      for (let aIndex = 1; aIndex <= aLength; aIndex++) {
        // If j is out of bounds, just put a large value in the slot.
        if (aIndex < minJ || aIndex > maxJ) matrix[bIndex][aIndex] = maxInt + 1
        // Otherwise do the normal Levenshtein thing.
        else {
          // If the characters are the same, there's no change in edit distance.
          if (stringB.charAt(bIndex - 1) === stringA.charAt(aIndex - 1)) matrix[bIndex][aIndex] = matrix[bIndex - 1][aIndex - 1]
          // Otherwise, see if we're substituting, inserting or deleting.
          else
            matrix[bIndex][aIndex] = Math.min(
              matrix[bIndex - 1][aIndex - 1] + 1, // Substitute
              Math.min(
                matrix[bIndex][aIndex - 1] + 1, // Insert
                matrix[bIndex - 1][aIndex] + 1
              )
            ) // Delete
        }
        // Either way, update colMin.
        if (matrix[bIndex][aIndex] < colMin) colMin = matrix[bIndex][aIndex]
      }
      // If this column's minimum is greater than the allowed maximum, there's no point
      // in going on with life.
      if (colMin > maxInt) return maxInt + 1
    }
    // If we made it this far without running into the max, then return the final matrix value.
    return matrix[bLength][aLength]
  }
  static getLineIndexAtCharacterPosition(str, index) {
    const lines = str.split("\n")
    const len = lines.length
    let position = 0
    for (let lineNumber = 0; lineNumber < len; lineNumber++) {
      position += lines[lineNumber].length
      if (position >= index) return lineNumber
    }
  }
  static resolvePath(filePath, programFilepath) {
    // For use in Node.js only
    if (!filePath.startsWith(".")) return filePath
    const path = require("path")
    const folder = this.getPathWithoutFileName(programFilepath)
    return path.resolve(folder + "/" + filePath)
  }
  static resolveProperty(obj, path, separator = ".") {
    const properties = Array.isArray(path) ? path : path.split(separator)
    return properties.reduce((prev, curr) => prev && prev[curr], obj)
  }
  static formatStr(str, catchAllCellDelimiter = " ", parameterMap) {
    return str.replace(/{([^\}]+)}/g, (match, path) => {
      const val = parameterMap[path]
      if (!val) return ""
      return Array.isArray(val) ? val.join(catchAllCellDelimiter) : val
    })
  }
  static stripHtml(text) {
    return text && text.replace ? text.replace(/<(?:.|\n)*?>/gm, "") : text
  }
  static getUniqueWordsArray(allWords) {
    const words = allWords.replace(/\n/g, " ").split(" ")
    const index = {}
    words.forEach(word => {
      if (!index[word]) index[word] = 0
      index[word]++
    })
    return Object.keys(index).map(key => {
      return {
        word: key,
        count: index[key]
      }
    })
  }
  // todo: add seed!
  static getRandomString(length = 30, letters = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")) {
    let str = ""
    while (length) {
      str += letters[Math.round(Math.min(Math.random() * letters.length, letters.length - 1))]
      length--
    }
    return str
  }
  // todo: add seed!
  static makeRandomTree(lines = 1000) {
    let str = ""
    let letters = " 123abc".split("")
    while (lines) {
      let indent = " ".repeat(Math.round(Math.random() * 6))
      let bit = indent
      let rand = Math.floor(Math.random() * 30)
      while (rand) {
        bit += letters[Math.round(Math.min(Math.random() * letters.length, letters.length - 1))]
        rand--
      }
      bit += "\n"
      str += bit
      lines--
    }
    return str
  }
  // adapted from https://gist.github.com/blixt/f17b47c62508be59987b
  // 1993 Park-Miller LCG
  static _getPRNG(seed) {
    return function() {
      seed = Math.imul(48271, seed) | 0 % 2147483647
      return (seed & 2147483647) / 2147483648
    }
  }
  static sampleWithoutReplacement(population = [], quantity, seed) {
    const prng = this._getPRNG(seed)
    const sampled = {}
    const populationSize = population.length
    const picked = []
    if (quantity >= populationSize) quantity = populationSize
    while (picked.length < quantity) {
      const index = Math.floor(prng() * populationSize)
      if (sampled[index]) continue
      sampled[index] = true
      picked.push(population[index])
    }
    return picked
  }
  static arrayToMap(arr) {
    const map = {}
    arr.forEach(val => (map[val] = true))
    return map
  }
  static _replaceNonAlphaNumericCharactersWithCharCodes(str) {
    return str
      .replace(/[^a-zA-Z0-9]/g, sub => {
        return "_" + sub.charCodeAt(0).toString()
      })
      .replace(/^([0-9])/, "number$1")
  }
  static mapValues(object, fn) {
    const result = {}
    Object.keys(object).forEach(key => {
      result[key] = fn(key)
    })
    return result
  }
  static javascriptTableWithHeaderRowToObjects(dataTable) {
    dataTable = dataTable.slice()
    const header = dataTable.shift()
    return dataTable.map(row => {
      const obj = {}
      header.forEach((colName, index) => (obj[colName] = row[index]))
      return obj
    })
  }
  static interweave(arrayOfArrays) {
    const lineCount = Math.max(...arrayOfArrays.map(arr => arr.length))
    const totalArrays = arrayOfArrays.length
    const result = []
    arrayOfArrays.forEach((lineArray, arrayIndex) => {
      for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
        result[lineIndex * totalArrays + arrayIndex] = lineArray[lineIndex]
      }
    })
    return result
  }
  static makeSortByFn(accessorOrAccessors) {
    const arrayOfFns = Array.isArray(accessorOrAccessors) ? accessorOrAccessors : [accessorOrAccessors]
    return (objectA, objectB) => {
      const nodeAFirst = -1
      const nodeBFirst = 1
      const accessor = arrayOfFns[0] // todo: handle accessors
      const av = accessor(objectA)
      const bv = accessor(objectB)
      let result = av < bv ? nodeAFirst : av > bv ? nodeBFirst : 0
      if (av === undefined && bv !== undefined) result = nodeAFirst
      else if (bv === undefined && av !== undefined) result = nodeBFirst
      return result
    }
  }
  static _makeGraphSortFunctionFromGraph(idAccessor, graph) {
    return (nodeA, nodeB) => {
      const nodeAFirst = -1
      const nodeBFirst = 1
      const nodeAUniqueId = idAccessor(nodeA)
      const nodeBUniqueId = idAccessor(nodeB)
      const nodeAExtendsNodeB = graph[nodeAUniqueId].has(nodeBUniqueId)
      const nodeBExtendsNodeA = graph[nodeBUniqueId].has(nodeAUniqueId)
      if (nodeAExtendsNodeB) return nodeBFirst
      else if (nodeBExtendsNodeA) return nodeAFirst
      const nodeAExtendsSomething = graph[nodeAUniqueId].size > 1
      const nodeBExtendsSomething = graph[nodeBUniqueId].size > 1
      if (!nodeAExtendsSomething && nodeBExtendsSomething) return nodeAFirst
      else if (!nodeBExtendsSomething && nodeAExtendsSomething) return nodeBFirst
      if (nodeAUniqueId > nodeBUniqueId) return nodeBFirst
      else if (nodeAUniqueId < nodeBUniqueId) return nodeAFirst
      return 0
    }
  }
  static removeAll(str, needle) {
    return str.split(needle).join("")
  }
  static _makeGraphSortFunction(idAccessor, extendsIdAccessor) {
    return (nodeA, nodeB) => {
      // -1 === a before b
      const nodeAUniqueId = idAccessor(nodeA)
      const nodeAExtends = extendsIdAccessor(nodeA)
      const nodeBUniqueId = idAccessor(nodeB)
      const nodeBExtends = extendsIdAccessor(nodeB)
      const nodeAExtendsNodeB = nodeAExtends === nodeBUniqueId
      const nodeBExtendsNodeA = nodeBExtends === nodeAUniqueId
      const nodeAFirst = -1
      const nodeBFirst = 1
      if (!nodeAExtends && !nodeBExtends) {
        // If neither extends, sort by firstWord
        if (nodeAUniqueId > nodeBUniqueId) return nodeBFirst
        else if (nodeAUniqueId < nodeBUniqueId) return nodeAFirst
        return 0
      }
      // If only one extends, the other comes first
      else if (!nodeAExtends) return nodeAFirst
      else if (!nodeBExtends) return nodeBFirst
      // If A extends B, B should come first
      if (nodeAExtendsNodeB) return nodeBFirst
      else if (nodeBExtendsNodeA) return nodeAFirst
      // Sort by what they extend
      if (nodeAExtends > nodeBExtends) return nodeBFirst
      else if (nodeAExtends < nodeBExtends) return nodeAFirst
      // Finally sort by firstWord
      if (nodeAUniqueId > nodeBUniqueId) return nodeBFirst
      else if (nodeAUniqueId < nodeBUniqueId) return nodeAFirst
      // Should never hit this, unless we have a duplicate line.
      return 0
    }
  }
}
TreeUtils.Timer = Timer
//http://stackoverflow.com/questions/37684/how-to-replace-plain-urls-with-links#21925491
TreeUtils.linkify = text => {
  let replacedText
  let replacePattern1
  let replacePattern2
  let replacePattern3
  //URLs starting with http://, https://, or ftp://
  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim
  replacedText = text.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>')
  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim
  replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>')
  //Change email addresses to mailto:: links.
  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim
  replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>')
  return replacedText
}
// todo: switch algo to: http://indiegamr.com/generate-repeatable-random-numbers-in-js/?
TreeUtils.makeSemiRandomFn = (seed = 1) => {
  return () => {
    const semiRand = Math.sin(seed++) * 10000
    return semiRand - Math.floor(semiRand)
  }
}
TreeUtils.randomUniformInt = (min, max, seed = 1) => {
  return Math.round(TreeUtils.randomUniformFloat(min, max, seed))
}
TreeUtils.randomUniformFloat = (min, max, seed = 1) => {
  const rand = TreeUtils.makeSemiRandomFn(seed)
  return min + (max - min) * rand()
}
TreeUtils.getRange = (startIndex, endIndexExclusive, increment = 1) => {
  const range = []
  for (let index = startIndex; index < endIndexExclusive; index = index + increment) {
    range.push(index)
  }
  return range
}
TreeUtils.MAX_INT = Math.pow(2, 32) - 1
window.TreeUtils = TreeUtils
class TestRacerTestBlock {
  constructor(testFile, testName, fn) {
    this._parentFile = testFile
    this._testName = testName
    this._testFn = fn
  }
  _emitMessage(message) {
    this._parentFile.getRunner()._emitMessage(message)
  }
  async execute() {
    let passes = []
    let failures = []
    const assertEqual = (actual, expected, message) => {
      if (expected === actual) {
        passes.push(message)
      } else {
        failures.push([actual, expected, message])
      }
    }
    try {
      await this._testFn(assertEqual)
    } catch (err) {
      failures.push([
        "1",
        "0",
        `Should not have uncaught errors but in ${this._testName} got error:
 toString:
  ${new TreeNode(err.toString()).toString(2)}
 stack:
  ${new TreeNode(err.stack).toString(2)}`
      ])
    }
    failures.length ? this._emitBlockFailedMessage(failures) : this._emitBlockPassedMessage(passes)
    return {
      passes,
      failures
    }
  }
  _emitBlockPassedMessage(passes) {
    this._emitMessage(`ok block ${this._testName} - ${passes.length} passed`)
  }
  _emitBlockFailedMessage(failures) {
    // todo: should replace not replace last newline?
    // todo: do side by side.
    // todo: add diff.
    this._emitMessage(`failed block ${this._testName}`)
    this._emitMessage(
      failures
        .map(failure => {
          const actualVal = failure[0] === undefined ? "undefined" : failure[0].toString()
          const actual = new jtree.TreeNode(`actual\n${new jtree.TreeNode(actualVal).toString(1)}`)
          const expected = new jtree.TreeNode(`expected\n${new jtree.TreeNode(failure[1].toString()).toString(1)}`)
          const comparison = actual.toComparison(expected)
          return new jtree.TreeNode(` assertion ${failure[2]}\n${comparison.toSideBySide([actual, expected]).toString(2)}`)
        })
        .join("\n")
    )
  }
}
class TestRacerFile {
  constructor(runner, testTree, fileName) {
    this._runner = runner
    this._testTree = {}
    this._fileName = fileName
    Object.keys(testTree).forEach(key => {
      this._testTree[key] = new TestRacerTestBlock(this, key, testTree[key])
    })
  }
  getRunner() {
    return this._runner
  }
  getFileName() {
    return this._fileName
  }
  get length() {
    return Object.values(this._testTree).length
  }
  get skippedLength() {
    return this.length - this._filterSkippedTests().length
  }
  _emitMessage(message) {
    this.getRunner()._emitMessage(message)
  }
  _filterSkippedTests() {
    const runOnlyTheseTestBlocks = Object.keys(this._testTree).filter(key => key.startsWith("_"))
    return runOnlyTheseTestBlocks.length ? runOnlyTheseTestBlocks : Object.keys(this._testTree)
  }
  async execute() {
    const tests = this._filterSkippedTests()
    this._emitStartFileMessage(tests.length)
    const fileTimer = new TreeUtils.Timer()
    const blockResults = {}
    const blockPromises = tests.map(async testName => {
      const results = await this._testTree[testName].execute()
      blockResults[testName] = results
    })
    await Promise.all(blockPromises)
    const fileStats = this._aggregateBlockResultsIntoFileResults(blockResults)
    const fileTimeElapsed = fileTimer.tick()
    fileStats.blocksFailed ? this._emitFileFailedMessage(fileStats, fileTimeElapsed, tests.length) : this._emitFilePassedMessage(fileStats, fileTimeElapsed, tests.length)
    return fileStats
  }
  _aggregateBlockResultsIntoFileResults(fileBlockResults) {
    const fileStats = {
      assertionsPassed: 0,
      assertionsFailed: 0,
      blocksPassed: 0,
      blocksFailed: 0,
      failedBlocks: []
    }
    Object.keys(fileBlockResults).forEach(blockName => {
      const results = fileBlockResults[blockName]
      fileStats.assertionsPassed += results.passes.length
      fileStats.assertionsFailed += results.failures.length
      if (results.failures.length) {
        fileStats.blocksFailed++
        fileStats.failedBlocks.push(blockName)
      } else fileStats.blocksPassed++
    })
    return fileStats
  }
  _emitStartFileMessage(blockCount) {
    this._emitMessage(`start file ${blockCount} test blocks in file ${this._fileName}`)
  }
  _emitFilePassedMessage(fileStats, fileTimeElapsed, blockCount) {
    this._emitMessage(`ok file ${this._fileName} in ${fileTimeElapsed}ms. ${blockCount} blocks and ${fileStats.assertionsPassed} assertions passed.`)
  }
  _emitFileFailedMessage(fileStats, fileTimeElapsed, blockCount) {
    this._emitMessage(
      `failed file ${this._fileName} over ${fileTimeElapsed}ms. ${fileStats.blocksFailed} blocks and ${fileStats.assertionsFailed} failed. ${blockCount - fileStats.blocksFailed} blocks and ${fileStats.assertionsPassed} assertions passed`
    )
  }
}
class TestRacer {
  constructor(fileTestTree) {
    this._logFunction = console.log
    this._timer = new TreeUtils.Timer()
    this._sessionFilesPassed = 0
    this._sessionFilesFailed = {}
    this._sessionBlocksFailed = 0
    this._sessionBlocksPassed = 0
    this._sessionAssertionsFailed = 0
    this._sessionAssertionsPassed = 0
    this._fileTestTree = {}
    Object.keys(fileTestTree).forEach(fileName => {
      this._fileTestTree[fileName] = new TestRacerFile(this, fileTestTree[fileName], fileName)
    })
  }
  setLogFunction(logFunction) {
    this._logFunction = logFunction
    return this
  }
  _addFileResultsToSessionResults(fileStats, fileName) {
    this._sessionAssertionsPassed += fileStats.assertionsPassed
    this._sessionAssertionsFailed += fileStats.assertionsFailed
    this._sessionBlocksPassed += fileStats.blocksPassed
    this._sessionBlocksFailed += fileStats.blocksFailed
    if (!fileStats.blocksFailed) this._sessionFilesPassed++
    else {
      this._sessionFilesFailed[fileName] = fileStats.failedBlocks
    }
  }
  async execute() {
    this._emitSessionPlanMessage()
    const proms = Object.values(this._fileTestTree).map(async testFile => {
      const results = await testFile.execute()
      this._addFileResultsToSessionResults(results, testFile.getFileName())
    })
    await Promise.all(proms)
    return this
  }
  finish() {
    this._emitSessionFinishMessage()
  }
  _emitMessage(message) {
    this._logFunction(message)
  }
  get length() {
    return Object.values(this._fileTestTree).length
  }
  _emitSessionPlanMessage() {
    let blocks = 0
    let skippedLength = 0
    Object.values(this._fileTestTree).forEach(value => (blocks += value.length))
    Object.values(this._fileTestTree).forEach(value => (skippedLength += value.skippedLength))
    this._emitMessage(`${this.length} files and ${blocks} blocks to run. ${skippedLength} skipped blocks.`)
  }
  _getFailures() {
    if (!Object.keys(this._sessionFilesFailed).length) return ""
    return `
 failures
${new TreeNode(this._sessionFilesFailed).forEach(row => row.forEach(line => line.deleteWordAt(0))).toString(2)}`
  }
  _emitSessionFinishMessage() {
    this._emitMessage(`finished in ${this._timer.getTotalElapsedTime()}ms
 passed
  ${this._sessionFilesPassed} files
  ${this._sessionBlocksPassed} blocks
  ${this._sessionAssertionsPassed} assertions
 failed
  ${Object.keys(this._sessionFilesFailed).length} files
  ${this._sessionBlocksFailed} blocks
  ${this._sessionAssertionsFailed} assertions${this._getFailures()}`)
  }
  static async testSingleFile(fileName, testTree) {
    const obj = {}
    obj[fileName] = testTree
    const session = new TestRacer(obj)
    await session.execute()
    session.finish()
  }
}
window.TestRacer = TestRacer
let _jtreeLatestTime = 0
let _jtreeMinTimeIncrement = 0.000000000001
class AbstractNode {
  _getProcessTimeInMilliseconds() {
    // We add this loop to restore monotonically increasing .now():
    // https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
    let time = performance.now()
    while (time <= _jtreeLatestTime) {
      if (time === time + _jtreeMinTimeIncrement)
        // Some browsers have different return values for perf.now()
        _jtreeMinTimeIncrement = 10 * _jtreeMinTimeIncrement
      time += _jtreeMinTimeIncrement
    }
    _jtreeLatestTime = time
    return time
  }
}
var FileFormat
;(function(FileFormat) {
  FileFormat["csv"] = "csv"
  FileFormat["tsv"] = "tsv"
  FileFormat["tree"] = "tree"
})(FileFormat || (FileFormat = {}))
class AbstractTreeEvent {
  constructor(targetNode) {
    this.targetNode = targetNode
  }
}
class ChildAddedTreeEvent extends AbstractTreeEvent {}
class ChildRemovedTreeEvent extends AbstractTreeEvent {}
class DescendantChangedTreeEvent extends AbstractTreeEvent {}
class LineChangedTreeEvent extends AbstractTreeEvent {}
const TreeEvents = { ChildAddedTreeEvent, ChildRemovedTreeEvent, DescendantChangedTreeEvent, LineChangedTreeEvent }
var WhereOperators
;(function(WhereOperators) {
  WhereOperators["equal"] = "="
  WhereOperators["notEqual"] = "!="
  WhereOperators["lessThan"] = "<"
  WhereOperators["lessThanOrEqual"] = "<="
  WhereOperators["greaterThan"] = ">"
  WhereOperators["greaterThanOrEqual"] = ">="
  WhereOperators["includes"] = "includes"
  WhereOperators["doesNotInclude"] = "doesNotInclude"
  WhereOperators["in"] = "in"
  WhereOperators["notIn"] = "notIn"
  WhereOperators["empty"] = "empty"
  WhereOperators["notEmpty"] = "notEmpty"
})(WhereOperators || (WhereOperators = {}))
var TreeNotationConstants
;(function(TreeNotationConstants) {
  TreeNotationConstants["extends"] = "extends"
})(TreeNotationConstants || (TreeNotationConstants = {}))
class Parser {
  constructor(catchAllNodeConstructor, firstWordMap = {}, regexTests = undefined) {
    this._catchAllNodeConstructor = catchAllNodeConstructor
    this._firstWordMap = firstWordMap
    this._regexTests = regexTests
  }
  getFirstWordOptions() {
    return Object.keys(this._firstWordMap)
  }
  // todo: remove
  _getFirstWordMap() {
    return this._firstWordMap
  }
  _getNodeConstructor(line, contextNode, wordBreakSymbol = " ") {
    return this._firstWordMap[this._getFirstWord(line, wordBreakSymbol)] || this._getConstructorFromRegexTests(line) || this._getCatchAllNodeConstructor(contextNode)
  }
  _getCatchAllNodeConstructor(contextNode) {
    if (this._catchAllNodeConstructor) return this._catchAllNodeConstructor
    const parent = contextNode.getParent()
    if (parent) return parent._getParser()._getCatchAllNodeConstructor(parent)
    return contextNode.constructor
  }
  _getConstructorFromRegexTests(line) {
    if (!this._regexTests) return undefined
    const hit = this._regexTests.find(test => test.regex.test(line))
    if (hit) return hit.nodeConstructor
    return undefined
  }
  _getFirstWord(line, wordBreakSymbol) {
    const firstBreak = line.indexOf(wordBreakSymbol)
    return line.substr(0, firstBreak > -1 ? firstBreak : undefined)
  }
}
class TreeNode extends AbstractNode {
  constructor(children, line, parent) {
    super()
    // BEGIN MUTABLE METHODS BELOw
    this._nodeCreationTime = this._getProcessTimeInMilliseconds()
    this._parent = parent
    this._setLine(line)
    this._setChildren(children)
  }
  execute(context) {
    return Promise.all(this.map(child => child.execute(context)))
  }
  async loadRequirements(context) {
    await Promise.all(this.map(node => node.loadRequirements(context)))
  }
  getErrors() {
    return []
  }
  getLineCellTypes() {
    // todo: make this any a constant
    return "undefinedCellType ".repeat(this.getWords().length).trim()
  }
  executeSync(context) {
    return this.map(child => child.executeSync(context))
  }
  isNodeJs() {
    return typeof exports !== "undefined"
  }
  isBrowser() {
    return !this.isNodeJs()
  }
  getOlderSiblings() {
    if (this.isRoot()) return []
    return this.getParent().slice(0, this.getIndex())
  }
  _getClosestOlderSibling() {
    const olderSiblings = this.getOlderSiblings()
    return olderSiblings[olderSiblings.length - 1]
  }
  getYoungerSiblings() {
    if (this.isRoot()) return []
    return this.getParent().slice(this.getIndex() + 1)
  }
  getSiblings() {
    if (this.isRoot()) return []
    return this.getParent().filter(node => node !== this)
  }
  _getUid() {
    if (!this._uid) this._uid = TreeNode._makeUniqueId()
    return this._uid
  }
  // todo: rename getMother? grandMother et cetera?
  getParent() {
    return this._parent
  }
  getPoint() {
    return this._getPoint()
  }
  _getPoint(relativeTo) {
    return {
      x: this._getXCoordinate(relativeTo),
      y: this._getYCoordinate(relativeTo)
    }
  }
  getPointRelativeTo(relativeTo) {
    return this._getPoint(relativeTo)
  }
  getIndentLevel(relativeTo) {
    return this._getXCoordinate(relativeTo) - 1
  }
  getIndentation(relativeTo) {
    return this.getEdgeSymbol().repeat(this._getXCoordinate(relativeTo) - 1)
  }
  _getTopDownArray(arr) {
    this.forEach(child => {
      arr.push(child)
      child._getTopDownArray(arr)
    })
  }
  getTopDownArray() {
    const arr = []
    this._getTopDownArray(arr)
    return arr
  }
  *getTopDownArrayIterator() {
    for (let child of this.getChildren()) {
      yield child
      yield* child.getTopDownArrayIterator()
    }
  }
  nodeAtLine(lineNumber) {
    let index = 0
    for (let node of this.getTopDownArrayIterator()) {
      if (lineNumber === index) return node
      index++
    }
  }
  getNumberOfLines() {
    let lineCount = 0
    for (let node of this.getTopDownArrayIterator()) {
      lineCount++
    }
    return lineCount
  }
  getNumberOfWords() {
    let wordCount = 0
    for (let node of this.getTopDownArrayIterator()) {
      wordCount += node.getWords().length
    }
    return wordCount
  }
  _getLineNumber(target = this) {
    if (this._cachedLineNumber) return this._cachedLineNumber
    let lineNumber = 1
    for (let node of this.getRootNode().getTopDownArrayIterator()) {
      if (node === target) return lineNumber
      lineNumber++
    }
    return lineNumber
  }
  isBlankLine() {
    return !this.length && !this.getLine()
  }
  hasDuplicateFirstWords() {
    return this.length ? new Set(this.getFirstWords()).size !== this.length : false
  }
  isEmpty() {
    return !this.length && !this.getContent()
  }
  _getYCoordinate(relativeTo) {
    if (this.isRoot(relativeTo)) return 0
    const start = relativeTo || this.getRootNode()
    return start._getLineNumber(this)
  }
  isRoot(relativeTo) {
    return relativeTo === this || !this.getParent()
  }
  getRootNode() {
    return this._getRootNode()
  }
  _getRootNode(relativeTo) {
    if (this.isRoot(relativeTo)) return this
    return this.getParent()._getRootNode(relativeTo)
  }
  toString(indentCount = 0, language = this) {
    if (this.isRoot()) return this._childrenToString(indentCount, language)
    return language.getEdgeSymbol().repeat(indentCount) + this.getLine(language) + (this.length ? language.getNodeBreakSymbol() + this._childrenToString(indentCount + 1, language) : "")
  }
  printLinesFrom(start, quantity) {
    return this._printLinesFrom(start, quantity, false)
  }
  printLinesWithLineNumbersFrom(start, quantity) {
    return this._printLinesFrom(start, quantity, true)
  }
  _printLinesFrom(start, quantity, printLineNumbers) {
    // todo: use iterator for better perf?
    const end = start + quantity
    this.toString()
      .split("\n")
      .slice(start, end)
      .forEach((line, index) => {
        if (printLineNumbers) console.log(`${start + index} ${line}`)
        else console.log(line)
      })
    return this
  }
  getWord(index) {
    const words = this._getLine().split(this.getWordBreakSymbol())
    if (index < 0) index = words.length + index
    return words[index]
  }
  _toHtml(indentCount) {
    const path = this.getPathVector().join(" ")
    const classes = {
      nodeLine: "nodeLine",
      edgeSymbol: "edgeSymbol",
      nodeBreakSymbol: "nodeBreakSymbol",
      nodeChildren: "nodeChildren"
    }
    const edge = this.getEdgeSymbol().repeat(indentCount)
    // Set up the firstWord part of the node
    const edgeHtml = `<span class="${classes.nodeLine}" data-pathVector="${path}"><span class="${classes.edgeSymbol}">${edge}</span>`
    const lineHtml = this._getLineHtml()
    const childrenHtml = this.length ? `<span class="${classes.nodeBreakSymbol}">${this.getNodeBreakSymbol()}</span>` + `<span class="${classes.nodeChildren}">${this._childrenToHtml(indentCount + 1)}</span>` : ""
    return `${edgeHtml}${lineHtml}${childrenHtml}</span>`
  }
  _getWords(startFrom) {
    if (!this._words) this._words = this._getLine().split(this.getWordBreakSymbol())
    return startFrom ? this._words.slice(startFrom) : this._words
  }
  getWords() {
    return this._getWords(0)
  }
  doesExtend(nodeTypeId) {
    return false
  }
  require(moduleName, filePath) {
    if (!this.isNodeJs()) return window[moduleName]
    return require(filePath || moduleName)
  }
  getWordsFrom(startFrom) {
    return this._getWords(startFrom)
  }
  getFirstAncestor() {
    const parent = this.getParent()
    return parent.isRoot() ? this : parent.getFirstAncestor()
  }
  isLoaded() {
    return true
  }
  getRunTimePhaseErrors() {
    if (!this._runTimePhaseErrors) this._runTimePhaseErrors = {}
    return this._runTimePhaseErrors
  }
  setRunTimePhaseError(phase, errorObject) {
    if (errorObject === undefined) delete this.getRunTimePhaseErrors()[phase]
    else this.getRunTimePhaseErrors()[phase] = errorObject
    return this
  }
  _getJavascriptPrototypeChainUpTo(stopAtClassName = "TreeNode") {
    // todo: cross browser test this
    let constructor = this.constructor
    const chain = []
    while (constructor.name !== stopAtClassName) {
      chain.unshift(constructor.name)
      constructor = constructor.__proto__
    }
    chain.unshift(stopAtClassName)
    return chain
  }
  _getProjectRootDir() {
    return this.isRoot() ? "" : this.getRootNode()._getProjectRootDir()
  }
  getSparsity() {
    const nodes = this.getChildren()
    const fields = this._getUnionNames()
    let count = 0
    this.getChildren().forEach(node => {
      fields.forEach(field => {
        if (node.has(field)) count++
      })
    })
    return 1 - count / (nodes.length * fields.length)
  }
  // todo: rename. what is the proper term from set/cat theory?
  getBiDirectionalMaps(propertyNameOrFn, propertyNameOrFn2 = node => node.getWord(0)) {
    const oneToTwo = {}
    const twoToOne = {}
    const is1Str = typeof propertyNameOrFn === "string"
    const is2Str = typeof propertyNameOrFn2 === "string"
    const children = this.getChildren()
    this.forEach((node, index) => {
      const value1 = is1Str ? node.get(propertyNameOrFn) : propertyNameOrFn(node, index, children)
      const value2 = is2Str ? node.get(propertyNameOrFn2) : propertyNameOrFn2(node, index, children)
      if (value1 !== undefined) {
        if (!oneToTwo[value1]) oneToTwo[value1] = []
        oneToTwo[value1].push(value2)
      }
      if (value2 !== undefined) {
        if (!twoToOne[value2]) twoToOne[value2] = []
        twoToOne[value2].push(value1)
      }
    })
    return [oneToTwo, twoToOne]
  }
  _getWordIndexCharacterStartPosition(wordIndex) {
    const xiLength = this.getEdgeSymbol().length
    const numIndents = this._getXCoordinate(undefined) - 1
    const indentPosition = xiLength * numIndents
    if (wordIndex < 1) return xiLength * (numIndents + wordIndex)
    return (
      indentPosition +
      this.getWords()
        .slice(0, wordIndex)
        .join(this.getWordBreakSymbol()).length +
      this.getWordBreakSymbol().length
    )
  }
  getNodeInScopeAtCharIndex(charIndex) {
    if (this.isRoot()) return this
    let wordIndex = this.getWordIndexAtCharacterIndex(charIndex)
    if (wordIndex > 0) return this
    let node = this
    while (wordIndex < 1) {
      node = node.getParent()
      wordIndex++
    }
    return node
  }
  getWordProperties(wordIndex) {
    const start = this._getWordIndexCharacterStartPosition(wordIndex)
    const word = wordIndex < 0 ? "" : this.getWord(wordIndex)
    return {
      startCharIndex: start,
      endCharIndex: start + word.length,
      word: word
    }
  }
  getAllWordBoundaryCoordinates() {
    const coordinates = []
    let line = 0
    for (let node of this.getTopDownArrayIterator()) {
      node.getWordBoundaryIndices().forEach(index => {
        coordinates.push({
          y: line,
          x: index
        })
      })
      line++
    }
    return coordinates
  }
  getWordBoundaryIndices() {
    const boundaries = [0]
    let numberOfIndents = this._getXCoordinate(undefined) - 1
    let start = numberOfIndents
    // Add indents
    while (numberOfIndents) {
      boundaries.push(boundaries.length)
      numberOfIndents--
    }
    // Add columns
    const ziIncrement = this.getWordBreakSymbol().length
    this.getWords().forEach(word => {
      if (boundaries[boundaries.length - 1] !== start) boundaries.push(start)
      start += word.length
      if (boundaries[boundaries.length - 1] !== start) boundaries.push(start)
      start += ziIncrement
    })
    return boundaries
  }
  getWordIndexAtCharacterIndex(charIndex) {
    // todo: is this correct thinking for handling root?
    if (this.isRoot()) return 0
    const numberOfIndents = this._getXCoordinate(undefined) - 1
    // todo: probably want to rewrite this in a performant way.
    const spots = []
    while (spots.length < numberOfIndents) {
      spots.push(-(numberOfIndents - spots.length))
    }
    this.getWords().forEach((word, wordIndex) => {
      word.split("").forEach(letter => {
        spots.push(wordIndex)
      })
      spots.push(wordIndex)
    })
    return spots[charIndex]
  }
  getAllErrors(lineStartsAt = 1) {
    const errors = []
    for (let node of this.getTopDownArray()) {
      node._cachedLineNumber = lineStartsAt // todo: cleanup
      const errs = node.getErrors()
      errs.forEach(err => errors.push(err))
      // delete node._cachedLineNumber
      lineStartsAt++
    }
    return errors
  }
  *getAllErrorsIterator() {
    let line = 1
    for (let node of this.getTopDownArrayIterator()) {
      node._cachedLineNumber = line
      const errs = node.getErrors()
      // delete node._cachedLineNumber
      if (errs.length) yield errs
      line++
    }
  }
  getFirstWord() {
    return this.getWords()[0]
  }
  getContent() {
    const words = this.getWordsFrom(1)
    return words.length ? words.join(this.getWordBreakSymbol()) : undefined
  }
  getContentWithChildren() {
    // todo: deprecate
    const content = this.getContent()
    return (content ? content : "") + (this.length ? this.getNodeBreakSymbol() + this._childrenToString() : "")
  }
  getFirstNode() {
    return this.nodeAt(0)
  }
  getStack() {
    return this._getStack()
  }
  _getStack(relativeTo) {
    if (this.isRoot(relativeTo)) return []
    const parent = this.getParent()
    if (parent.isRoot(relativeTo)) return [this]
    else return parent._getStack(relativeTo).concat([this])
  }
  getStackString() {
    return this._getStack()
      .map((node, index) => this.getEdgeSymbol().repeat(index) + node.getLine())
      .join(this.getNodeBreakSymbol())
  }
  getLine(language) {
    if (!this._words && !language) return this._getLine() // todo: how does this interact with "language" param?
    return this.getWords().join((language || this).getWordBreakSymbol())
  }
  getColumnNames() {
    return this._getUnionNames()
  }
  getOneHot(column) {
    const clone = this.clone()
    const cols = Array.from(new Set(clone.getColumn(column)))
    clone.forEach(node => {
      const val = node.get(column)
      node.delete(column)
      cols.forEach(col => {
        node.set(column + "_" + col, val === col ? "1" : "0")
      })
    })
    return clone
  }
  // todo: return array? getPathArray?
  _getFirstWordPath(relativeTo) {
    if (this.isRoot(relativeTo)) return ""
    else if (this.getParent().isRoot(relativeTo)) return this.getFirstWord()
    return this.getParent()._getFirstWordPath(relativeTo) + this.getEdgeSymbol() + this.getFirstWord()
  }
  getFirstWordPathRelativeTo(relativeTo) {
    return this._getFirstWordPath(relativeTo)
  }
  getFirstWordPath() {
    return this._getFirstWordPath()
  }
  getPathVector() {
    return this._getPathVector()
  }
  getPathVectorRelativeTo(relativeTo) {
    return this._getPathVector(relativeTo)
  }
  _getPathVector(relativeTo) {
    if (this.isRoot(relativeTo)) return []
    const path = this.getParent()._getPathVector(relativeTo)
    path.push(this.getIndex())
    return path
  }
  getIndex() {
    return this.getParent()._indexOfNode(this)
  }
  isTerminal() {
    return !this.length
  }
  _getLineHtml() {
    return this.getWords()
      .map((word, index) => `<span class="word${index}">${TreeUtils.stripHtml(word)}</span>`)
      .join(`<span class="zIncrement">${this.getWordBreakSymbol()}</span>`)
  }
  _getXmlContent(indentCount) {
    if (this.getContent() !== undefined) return this.getContentWithChildren()
    return this.length ? `${indentCount === -1 ? "" : "\n"}${this._childrenToXml(indentCount > -1 ? indentCount + 2 : -1)}${" ".repeat(indentCount)}` : ""
  }
  _toXml(indentCount) {
    const indent = " ".repeat(indentCount)
    const tag = this.getFirstWord()
    return `${indent}<${tag}>${this._getXmlContent(indentCount)}</${tag}>${indentCount === -1 ? "" : "\n"}`
  }
  _toObjectTuple() {
    const content = this.getContent()
    const length = this.length
    const hasChildrenNoContent = content === undefined && length
    const hasContentAndHasChildren = content !== undefined && length
    // If the node has a content and a subtree return it as a string, as
    // Javascript object values can't be both a leaf and a tree.
    const tupleValue = hasChildrenNoContent ? this.toObject() : hasContentAndHasChildren ? this.getContentWithChildren() : content
    return [this.getFirstWord(), tupleValue]
  }
  _indexOfNode(needleNode) {
    let result = -1
    this.find((node, index) => {
      if (node === needleNode) {
        result = index
        return true
      }
    })
    return result
  }
  getMaxLineWidth() {
    let maxWidth = 0
    for (let node of this.getTopDownArrayIterator()) {
      const lineWidth = node.getLine().length
      if (lineWidth > maxWidth) maxWidth = lineWidth
    }
    return maxWidth
  }
  toTreeNode() {
    return new TreeNode(this.toString())
  }
  _rightPad(newWidth, padCharacter) {
    const line = this.getLine()
    this.setLine(line + padCharacter.repeat(newWidth - line.length))
    return this
  }
  rightPad(padCharacter = " ") {
    const newWidth = this.getMaxLineWidth()
    this.getTopDownArray().forEach(node => node._rightPad(newWidth, padCharacter))
    return this
  }
  toSideBySide(treesOrStrings, delimiter = " ") {
    const clone = this.toTreeNode()
    let next
    while ((next = treesOrStrings.shift())) {
      clone.rightPad()
      next
        .toString()
        .split("\n")
        .forEach((line, index) => {
          const node = clone.nodeAtLine(index)
          node.setLine(node.getLine() + delimiter + line)
        })
    }
    return clone
  }
  toComparison(treeNode) {
    const nodeBreakSymbol = "\n"
    const lines = treeNode.toString().split(nodeBreakSymbol)
    return new TreeNode(
      this.toString()
        .split(nodeBreakSymbol)
        .map((line, index) => (lines[index] === line ? "" : "x"))
        .join(nodeBreakSymbol)
    )
  }
  toBraid(treesOrStrings) {
    treesOrStrings.unshift(this)
    const nodeDelimiter = this.getNodeBreakSymbol()
    return new TreeNode(
      TreeUtils.interweave(treesOrStrings.map(tree => tree.toString().split(nodeDelimiter)))
        .map(line => (line === undefined ? "" : line))
        .join(nodeDelimiter)
    )
  }
  getSlice(startIndexInclusive, stopIndexExclusive) {
    return new TreeNode(
      this.slice(startIndexInclusive, stopIndexExclusive)
        .map(child => child.toString())
        .join("\n")
    )
  }
  _hasColumns(columns) {
    const words = this.getWords()
    return columns.every((searchTerm, index) => searchTerm === words[index])
  }
  hasWord(index, word) {
    return this.getWord(index) === word
  }
  getNodeByColumns(...columns) {
    return this.getTopDownArray().find(node => node._hasColumns(columns))
  }
  getNodeByColumn(index, name) {
    return this.find(node => node.getWord(index) === name)
  }
  _getNodesByColumn(index, name) {
    return this.filter(node => node.getWord(index) === name)
  }
  // todo: preserve subclasses!
  select(columnNames) {
    columnNames = Array.isArray(columnNames) ? columnNames : [columnNames]
    const result = new TreeNode()
    this.forEach(node => {
      const tree = result.appendLine(node.getLine())
      columnNames.forEach(name => {
        const valueNode = node.getNode(name)
        if (valueNode) tree.appendNode(valueNode)
      })
    })
    return result
  }
  selectionToString() {
    return this.getSelectedNodes()
      .map(node => node.toString())
      .join("\n")
  }
  getSelectedNodes() {
    return this.getTopDownArray().filter(node => node.isSelected())
  }
  clearSelection() {
    this.getSelectedNodes().forEach(node => node.unselectNode())
  }
  // Note: this is for debugging select chains
  print(message = "") {
    if (message) console.log(message)
    console.log(this.toString())
    return this
  }
  // todo: preserve subclasses!
  // todo: preserve links back to parent so you could edit as normal?
  where(columnName, operator, fixedValue) {
    const isArray = Array.isArray(fixedValue)
    const valueType = isArray ? typeof fixedValue[0] : typeof fixedValue
    let parser
    if (valueType === "number") parser = parseFloat
    const fn = node => {
      const cell = node.get(columnName)
      const typedCell = parser ? parser(cell) : cell
      if (operator === WhereOperators.equal) return fixedValue === typedCell
      else if (operator === WhereOperators.notEqual) return fixedValue !== typedCell
      else if (operator === WhereOperators.includes) return typedCell !== undefined && typedCell.includes(fixedValue)
      else if (operator === WhereOperators.doesNotInclude) return typedCell === undefined || !typedCell.includes(fixedValue)
      else if (operator === WhereOperators.greaterThan) return typedCell > fixedValue
      else if (operator === WhereOperators.lessThan) return typedCell < fixedValue
      else if (operator === WhereOperators.greaterThanOrEqual) return typedCell >= fixedValue
      else if (operator === WhereOperators.lessThanOrEqual) return typedCell <= fixedValue
      else if (operator === WhereOperators.empty) return !node.has(columnName)
      else if (operator === WhereOperators.notEmpty) return node.has(columnName)
      else if (operator === WhereOperators.in && isArray) return fixedValue.includes(typedCell)
      else if (operator === WhereOperators.notIn && isArray) return !fixedValue.includes(typedCell)
    }
    const result = new TreeNode()
    this.filter(fn).forEach(node => {
      result.appendNode(node)
    })
    return result
  }
  with(firstWord) {
    return this.filter(node => node.has(firstWord))
  }
  without(firstWord) {
    return this.filter(node => !node.has(firstWord))
  }
  first(quantity = 1) {
    return this.limit(quantity, 0)
  }
  last(quantity = 1) {
    return this.limit(quantity, this.length - quantity)
  }
  // todo: preserve subclasses!
  limit(quantity, offset = 0) {
    const result = new TreeNode()
    this.getChildren()
      .slice(offset, quantity + offset)
      .forEach(node => {
        result.appendNode(node)
      })
    return result
  }
  getChildrenFirstArray() {
    const arr = []
    this._getChildrenFirstArray(arr)
    return arr
  }
  _getChildrenFirstArray(arr) {
    this.forEach(child => {
      child._getChildrenFirstArray(arr)
      arr.push(child)
    })
  }
  _getXCoordinate(relativeTo) {
    return this._getStack(relativeTo).length
  }
  getParentFirstArray() {
    const levels = this._getLevels()
    const arr = []
    Object.values(levels).forEach(level => {
      level.forEach(item => arr.push(item))
    })
    return arr
  }
  _getLevels() {
    const levels = {}
    this.getTopDownArray().forEach(node => {
      const level = node._getXCoordinate()
      if (!levels[level]) levels[level] = []
      levels[level].push(node)
    })
    return levels
  }
  _getChildrenArray() {
    if (!this._children) this._children = []
    return this._children
  }
  getLines() {
    return this.map(node => node.getLine())
  }
  getChildren() {
    return this._getChildrenArray().slice(0)
  }
  get length() {
    return this._getChildrenArray().length
  }
  _nodeAt(index) {
    if (index < 0) index = this.length + index
    return this._getChildrenArray()[index]
  }
  nodeAt(indexOrIndexArray) {
    if (typeof indexOrIndexArray === "number") return this._nodeAt(indexOrIndexArray)
    if (indexOrIndexArray.length === 1) return this._nodeAt(indexOrIndexArray[0])
    const first = indexOrIndexArray[0]
    const node = this._nodeAt(first)
    if (!node) return undefined
    return node.nodeAt(indexOrIndexArray.slice(1))
  }
  _toObject() {
    const obj = {}
    this.forEach(node => {
      const tuple = node._toObjectTuple()
      obj[tuple[0]] = tuple[1]
    })
    return obj
  }
  toHtml() {
    return this._childrenToHtml(0)
  }
  _getHtmlJoinByCharacter() {
    return `<span class="nodeBreakSymbol">${this.getNodeBreakSymbol()}</span>`
  }
  _childrenToHtml(indentCount) {
    const joinBy = this._getHtmlJoinByCharacter()
    return this.map(node => node._toHtml(indentCount)).join(joinBy)
  }
  _childrenToString(indentCount, language = this) {
    return this.map(node => node.toString(indentCount, language)).join(language.getNodeBreakSymbol())
  }
  childrenToString(indentCount = 0) {
    return this._childrenToString(indentCount)
  }
  // todo: implement
  _getChildJoinCharacter() {
    return "\n"
  }
  format() {
    this.forEach(child => child.format())
    return this
  }
  compile() {
    return this.map(child => child.compile()).join(this._getChildJoinCharacter())
  }
  toXml() {
    return this._childrenToXml(0)
  }
  toDisk(path) {
    if (!this.isNodeJs()) throw new Error("This method only works in Node.js")
    const format = TreeNode._getFileFormat(path)
    const formats = {
      tree: tree => tree.toString(),
      csv: tree => tree.toCsv(),
      tsv: tree => tree.toTsv()
    }
    this.require("fs").writeFileSync(path, formats[format](this), "utf8")
    return this
  }
  _lineToYaml(indentLevel, listTag = "") {
    let prefix = " ".repeat(indentLevel)
    if (listTag && indentLevel > 1) prefix = " ".repeat(indentLevel - 2) + listTag + " "
    return prefix + `${this.getFirstWord()}:` + (this.getContent() ? " " + this.getContent() : "")
  }
  _isYamlList() {
    return this.hasDuplicateFirstWords()
  }
  toYaml() {
    return `%YAML 1.2
---\n${this._childrenToYaml(0).join("\n")}`
  }
  _childrenToYaml(indentLevel) {
    if (this._isYamlList()) return this._childrenToYamlList(indentLevel)
    else return this._childrenToYamlAssociativeArray(indentLevel)
  }
  // if your code-to-be-yaml has a list of associative arrays of type N and you don't
  // want the type N to print
  _collapseYamlLine() {
    return false
  }
  _toYamlListElement(indentLevel) {
    const children = this._childrenToYaml(indentLevel + 1)
    if (this._collapseYamlLine()) {
      if (indentLevel > 1) return children.join("\n").replace(" ".repeat(indentLevel), " ".repeat(indentLevel - 2) + "- ")
      return children.join("\n")
    } else {
      children.unshift(this._lineToYaml(indentLevel, "-"))
      return children.join("\n")
    }
  }
  _childrenToYamlList(indentLevel) {
    return this.map(node => node._toYamlListElement(indentLevel + 2))
  }
  _toYamlAssociativeArrayElement(indentLevel) {
    const children = this._childrenToYaml(indentLevel + 1)
    children.unshift(this._lineToYaml(indentLevel))
    return children.join("\n")
  }
  _childrenToYamlAssociativeArray(indentLevel) {
    return this.map(node => node._toYamlAssociativeArrayElement(indentLevel))
  }
  toJsonSubset() {
    return JSON.stringify(this.toObject(), null, " ")
  }
  findNodes(firstWordPath) {
    // todo: can easily speed this up
    const map = {}
    if (!Array.isArray(firstWordPath)) firstWordPath = [firstWordPath]
    firstWordPath.forEach(path => (map[path] = true))
    return this.getTopDownArray().filter(node => {
      if (map[node._getFirstWordPath(this)]) return true
      return false
    })
  }
  evalTemplateString(str) {
    const that = this
    return str.replace(/{([^\}]+)}/g, (match, path) => that.get(path) || "")
  }
  emitLogMessage(message) {
    console.log(message)
  }
  getColumn(path) {
    return this.map(node => node.get(path))
  }
  getFiltered(fn) {
    const clone = this.clone()
    clone
      .filter((node, index) => !fn(node, index))
      .forEach(node => {
        node.destroy()
      })
    return clone
  }
  getNode(firstWordPath) {
    return this._getNodeByPath(firstWordPath)
  }
  get(firstWordPath) {
    const node = this._getNodeByPath(firstWordPath)
    return node === undefined ? undefined : node.getContent()
  }
  getNodesByGlobPath(query) {
    return this._getNodesByGlobPath(query)
  }
  _getNodesByGlobPath(globPath) {
    const edgeSymbol = this.getEdgeSymbol()
    if (!globPath.includes(edgeSymbol)) {
      if (globPath === "*") return this.getChildren()
      return this.filter(node => node.getFirstWord() === globPath)
    }
    const parts = globPath.split(edgeSymbol)
    const current = parts.shift()
    const rest = parts.join(edgeSymbol)
    const matchingNodes = current === "*" ? this.getChildren() : this.filter(child => child.getFirstWord() === current)
    return [].concat.apply([], matchingNodes.map(node => node._getNodesByGlobPath(rest)))
  }
  _getNodeByPath(firstWordPath) {
    const edgeSymbol = this.getEdgeSymbol()
    if (!firstWordPath.includes(edgeSymbol)) {
      const index = this.indexOfLast(firstWordPath)
      return index === -1 ? undefined : this._nodeAt(index)
    }
    const parts = firstWordPath.split(edgeSymbol)
    const current = parts.shift()
    const currentNode = this._getChildrenArray()[this._getIndex()[current]]
    return currentNode ? currentNode._getNodeByPath(parts.join(edgeSymbol)) : undefined
  }
  getNext() {
    if (this.isRoot()) return this
    const index = this.getIndex()
    const parent = this.getParent()
    const length = parent.length
    const next = index + 1
    return next === length ? parent._getChildrenArray()[0] : parent._getChildrenArray()[next]
  }
  getPrevious() {
    if (this.isRoot()) return this
    const index = this.getIndex()
    const parent = this.getParent()
    const length = parent.length
    const prev = index - 1
    return prev === -1 ? parent._getChildrenArray()[length - 1] : parent._getChildrenArray()[prev]
  }
  _getUnionNames() {
    if (!this.length) return []
    const obj = {}
    this.forEach(node => {
      if (!node.length) return undefined
      node.forEach(node => {
        obj[node.getFirstWord()] = 1
      })
    })
    return Object.keys(obj)
  }
  getAncestorNodesByInheritanceViaExtendsKeyword(key) {
    const ancestorNodes = this._getAncestorNodes((node, id) => node._getNodesByColumn(0, id), node => node.get(key), this)
    ancestorNodes.push(this)
    return ancestorNodes
  }
  // Note: as you can probably tell by the name of this method, I don't recommend using this as it will likely be replaced by something better.
  getAncestorNodesByInheritanceViaColumnIndices(thisColumnNumber, extendsColumnNumber) {
    const ancestorNodes = this._getAncestorNodes((node, id) => node._getNodesByColumn(thisColumnNumber, id), node => node.getWord(extendsColumnNumber), this)
    ancestorNodes.push(this)
    return ancestorNodes
  }
  _getAncestorNodes(getPotentialParentNodesByIdFn, getParentIdFn, cannotContainNode) {
    const parentId = getParentIdFn(this)
    if (!parentId) return []
    const potentialParentNodes = getPotentialParentNodesByIdFn(this.getParent(), parentId)
    if (!potentialParentNodes.length) throw new Error(`"${this.getLine()} tried to extend "${parentId}" but "${parentId}" not found.`)
    if (potentialParentNodes.length > 1) throw new Error(`Invalid inheritance family tree. Multiple unique ids found for "${parentId}"`)
    const parentNode = potentialParentNodes[0]
    // todo: detect loops
    if (parentNode === cannotContainNode) throw new Error(`Loop detected between '${this.getLine()}' and '${parentNode.getLine()}'`)
    const ancestorNodes = parentNode._getAncestorNodes(getPotentialParentNodesByIdFn, getParentIdFn, cannotContainNode)
    ancestorNodes.push(parentNode)
    return ancestorNodes
  }
  pathVectorToFirstWordPath(pathVector) {
    const path = pathVector.slice() // copy array
    const names = []
    let node = this
    while (path.length) {
      if (!node) return names
      names.push(node.nodeAt(path[0]).getFirstWord())
      node = node.nodeAt(path.shift())
    }
    return names
  }
  toStringWithLineNumbers() {
    return this.toString()
      .split("\n")
      .map((line, index) => `${index + 1} ${line}`)
      .join("\n")
  }
  toCsv() {
    return this.toDelimited(",")
  }
  _getTypes(header) {
    const matrix = this._getMatrix(header)
    const types = header.map(i => "int")
    matrix.forEach(row => {
      row.forEach((value, index) => {
        const type = types[index]
        if (type === "string") return 1
        if (value === undefined || value === "") return 1
        if (type === "float") {
          if (value.match(/^\-?[0-9]*\.?[0-9]*$/)) return 1
          types[index] = "string"
        }
        if (value.match(/^\-?[0-9]+$/)) return 1
        types[index] = "string"
      })
    })
    return types
  }
  toDataTable(header = this._getUnionNames()) {
    const types = this._getTypes(header)
    const parsers = {
      string: str => str,
      float: parseFloat,
      int: parseInt
    }
    const cellFn = (cellValue, rowIndex, columnIndex) => (rowIndex ? parsers[types[columnIndex]](cellValue) : cellValue)
    const arrays = this._toArrays(header, cellFn)
    arrays.rows.unshift(arrays.header)
    return arrays.rows
  }
  toDelimited(delimiter, header = this._getUnionNames()) {
    const regex = new RegExp(`(\\n|\\"|\\${delimiter})`)
    const cellFn = (str, row, column) => (!str.toString().match(regex) ? str : `"` + str.replace(/\"/g, `""`) + `"`)
    return this._toDelimited(delimiter, header, cellFn)
  }
  _getMatrix(columns) {
    const matrix = []
    this.forEach(child => {
      const row = []
      columns.forEach(col => {
        row.push(child.get(col))
      })
      matrix.push(row)
    })
    return matrix
  }
  _toArrays(header, cellFn) {
    const skipHeaderRow = 1
    const headerArray = header.map((columnName, index) => cellFn(columnName, 0, index))
    const rows = this.map((node, rowNumber) =>
      header.map((columnName, columnIndex) => {
        const childNode = node.getNode(columnName)
        const content = childNode ? childNode.getContentWithChildren() : ""
        return cellFn(content, rowNumber + skipHeaderRow, columnIndex)
      })
    )
    return {
      rows: rows,
      header: headerArray
    }
  }
  _toDelimited(delimiter, header, cellFn) {
    const data = this._toArrays(header, cellFn)
    return data.header.join(delimiter) + "\n" + data.rows.map(row => row.join(delimiter)).join("\n")
  }
  toTable() {
    // Output a table for printing
    return this._toTable(100, false)
  }
  toFormattedTable(maxCharactersPerColumn, alignRight = false) {
    return this._toTable(maxCharactersPerColumn, alignRight)
  }
  _toTable(maxCharactersPerColumn, alignRight = false) {
    const header = this._getUnionNames()
    // Set initial column widths
    const widths = header.map(col => (col.length > maxCharactersPerColumn ? maxCharactersPerColumn : col.length))
    // Expand column widths if needed
    this.forEach(node => {
      if (!node.length) return true
      header.forEach((col, index) => {
        const cellValue = node.get(col)
        if (!cellValue) return true
        const length = cellValue.toString().length
        if (length > widths[index]) widths[index] = length > maxCharactersPerColumn ? maxCharactersPerColumn : length
      })
    })
    const cellFn = (cellText, row, col) => {
      const width = widths[col]
      // Strip newlines in fixedWidth output
      const cellValue = cellText.toString().replace(/\n/g, "\\n")
      const cellLength = cellValue.length
      if (cellLength > width) return cellValue.substr(0, width) + "..."
      const padding = " ".repeat(width - cellLength)
      return alignRight ? padding + cellValue : cellValue + padding
    }
    return this._toDelimited(" ", header, cellFn)
  }
  toSsv() {
    return this.toDelimited(" ")
  }
  toOutline() {
    return this._toOutline(node => node.getLine())
  }
  toMappedOutline(nodeFn) {
    return this._toOutline(nodeFn)
  }
  // Adapted from: https://github.com/notatestuser/treeify.js
  _toOutline(nodeFn) {
    const growBranch = (outlineTreeNode, last, lastStates, nodeFn, callback) => {
      let lastStatesCopy = lastStates.slice(0)
      const node = outlineTreeNode.node
      if (lastStatesCopy.push([outlineTreeNode, last]) && lastStates.length > 0) {
        let line = ""
        // firstWordd on the "was last element" states of whatever we're nested within,
        // we need to append either blankness or a branch to our line
        lastStates.forEach((lastState, idx) => {
          if (idx > 0) line += lastState[1] ? " " : "│"
        })
        // the prefix varies firstWordd on whether the key contains something to show and
        // whether we're dealing with the last element in this collection
        // the extra "-" just makes things stand out more.
        line += (last ? "└" : "├") + nodeFn(node)
        callback(line)
      }
      if (!node) return
      const length = node.length
      let index = 0
      node.forEach(node => {
        let lastKey = ++index === length
        growBranch({ node: node }, lastKey, lastStatesCopy, nodeFn, callback)
      })
    }
    let output = ""
    growBranch({ node: this }, false, [], nodeFn, line => (output += line + "\n"))
    return output
  }
  copyTo(node, index) {
    return node._insertLineAndChildren(this.getLine(), this.childrenToString(), index)
  }
  // Note: Splits using a positive lookahead
  // this.split("foo").join("\n") === this.toString()
  split(firstWord) {
    const constructor = this.constructor
    const NodeBreakSymbol = this.getNodeBreakSymbol()
    const WordBreakSymbol = this.getWordBreakSymbol()
    // todo: cleanup. the escaping is wierd.
    return this.toString()
      .split(new RegExp(`\\${NodeBreakSymbol}(?=${firstWord}(?:${WordBreakSymbol}|\\${NodeBreakSymbol}))`, "g"))
      .map(str => new constructor(str))
  }
  toMarkdownTable() {
    return this.toMarkdownTableAdvanced(this._getUnionNames(), val => val)
  }
  toMarkdownTableAdvanced(columns, formatFn) {
    const matrix = this._getMatrix(columns)
    const empty = columns.map(col => "-")
    matrix.unshift(empty)
    matrix.unshift(columns)
    const lines = matrix.map((row, rowIndex) => {
      const formattedValues = row.map((val, colIndex) => formatFn(val, rowIndex, colIndex))
      return `|${formattedValues.join("|")}|`
    })
    return lines.join("\n")
  }
  toTsv() {
    return this.toDelimited("\t")
  }
  getNodeBreakSymbol() {
    return "\n"
  }
  getWordBreakSymbol() {
    return " "
  }
  getNodeBreakSymbolRegex() {
    return new RegExp(this.getNodeBreakSymbol(), "g")
  }
  getEdgeSymbol() {
    return " "
  }
  _textToContentAndChildrenTuple(text) {
    const lines = text.split(this.getNodeBreakSymbolRegex())
    const firstLine = lines.shift()
    const children = !lines.length
      ? undefined
      : lines
          .map(line => (line.substr(0, 1) === this.getEdgeSymbol() ? line : this.getEdgeSymbol() + line))
          .map(line => line.substr(1))
          .join(this.getNodeBreakSymbol())
    return [firstLine, children]
  }
  _getLine() {
    return this._line
  }
  _setLine(line = "") {
    this._line = line
    if (this._words) delete this._words
    return this
  }
  _clearChildren() {
    this._deleteByIndexes(TreeUtils.getRange(0, this.length))
    delete this._children
    return this
  }
  _setChildren(content, circularCheckArray) {
    this._clearChildren()
    if (!content) return this
    // set from string
    if (typeof content === "string") {
      this._appendChildrenFromString(content)
      return this
    }
    // set from tree object
    if (content instanceof TreeNode) {
      content.forEach(node => this._insertLineAndChildren(node.getLine(), node.childrenToString()))
      return this
    }
    // If we set from object, create an array of inserted objects to avoid circular loops
    if (!circularCheckArray) circularCheckArray = [content]
    return this._setFromObject(content, circularCheckArray)
  }
  _setFromObject(content, circularCheckArray) {
    for (let firstWord in content) {
      if (!content.hasOwnProperty(firstWord)) continue
      // Branch the circularCheckArray, as we only have same branch circular arrays
      this._appendFromJavascriptObjectTuple(firstWord, content[firstWord], circularCheckArray.slice(0))
    }
    return this
  }
  // todo: refactor the below.
  _appendFromJavascriptObjectTuple(firstWord, content, circularCheckArray) {
    const type = typeof content
    let line
    let children
    if (content === null) line = firstWord + " " + null
    else if (content === undefined) line = firstWord
    else if (type === "string") {
      const tuple = this._textToContentAndChildrenTuple(content)
      line = firstWord + " " + tuple[0]
      children = tuple[1]
    } else if (type === "function") line = firstWord + " " + content.toString()
    else if (type !== "object") line = firstWord + " " + content
    else if (content instanceof Date) line = firstWord + " " + content.getTime().toString()
    else if (content instanceof TreeNode) {
      line = firstWord
      children = new TreeNode(content.childrenToString(), content.getLine())
    } else if (circularCheckArray.indexOf(content) === -1) {
      circularCheckArray.push(content)
      line = firstWord
      const length = content instanceof Array ? content.length : Object.keys(content).length
      if (length) children = new TreeNode()._setChildren(content, circularCheckArray)
    } else {
      // iirc this is return early from circular
      return
    }
    this._insertLineAndChildren(line, children)
  }
  _insertLineAndChildren(line, children, index = this.length) {
    const nodeConstructor = this._getParser()._getNodeConstructor(line, this)
    const newNode = new nodeConstructor(children, line, this)
    const adjustedIndex = index < 0 ? this.length + index : index
    this._getChildrenArray().splice(adjustedIndex, 0, newNode)
    if (this._index) this._makeIndex(adjustedIndex)
    return newNode
  }
  _appendChildrenFromString(str) {
    const lines = str.split(this.getNodeBreakSymbolRegex())
    const parentStack = []
    let currentIndentCount = -1
    let lastNode = this
    lines.forEach(line => {
      const indentCount = this._getIndentCount(line)
      if (indentCount > currentIndentCount) {
        currentIndentCount++
        parentStack.push(lastNode)
      } else if (indentCount < currentIndentCount) {
        // pop things off stack
        while (indentCount < currentIndentCount) {
          parentStack.pop()
          currentIndentCount--
        }
      }
      const lineContent = line.substr(currentIndentCount)
      const parent = parentStack[parentStack.length - 1]
      const nodeConstructor = parent._getParser()._getNodeConstructor(lineContent, parent)
      lastNode = new nodeConstructor(undefined, lineContent, parent)
      parent._getChildrenArray().push(lastNode)
    })
  }
  _getIndex() {
    // StringMap<int> {firstWord: index}
    // When there are multiple tails with the same firstWord, _index stores the last content.
    // todo: change the above behavior: when a collision occurs, create an array.
    return this._index || this._makeIndex()
  }
  getContentsArray() {
    return this.map(node => node.getContent())
  }
  // todo: rename to getChildrenByConstructor(?)
  getChildrenByNodeConstructor(constructor) {
    return this.filter(child => child instanceof constructor)
  }
  getAncestorByNodeConstructor(constructor) {
    if (this instanceof constructor) return this
    if (this.isRoot()) return undefined
    const parent = this.getParent()
    return parent instanceof constructor ? parent : parent.getAncestorByNodeConstructor(constructor)
  }
  // todo: rename to getNodeByConstructor(?)
  getNodeByType(constructor) {
    return this.find(child => child instanceof constructor)
  }
  indexOfLast(firstWord) {
    const result = this._getIndex()[firstWord]
    return result === undefined ? -1 : result
  }
  // todo: renmae to indexOfFirst?
  indexOf(firstWord) {
    if (!this.has(firstWord)) return -1
    const length = this.length
    const nodes = this._getChildrenArray()
    for (let index = 0; index < length; index++) {
      if (nodes[index].getFirstWord() === firstWord) return index
    }
  }
  toObject() {
    return this._toObject()
  }
  getFirstWords() {
    return this.map(node => node.getFirstWord())
  }
  _makeIndex(startAt = 0) {
    if (!this._index || !startAt) this._index = {}
    const nodes = this._getChildrenArray()
    const newIndex = this._index
    const length = nodes.length
    for (let index = startAt; index < length; index++) {
      newIndex[nodes[index].getFirstWord()] = index
    }
    return newIndex
  }
  _childrenToXml(indentCount) {
    return this.map(node => node._toXml(indentCount)).join("")
  }
  _getIndentCount(str) {
    let level = 0
    const edgeChar = this.getEdgeSymbol()
    while (str[level] === edgeChar) {
      level++
    }
    return level
  }
  clone() {
    return new this.constructor(this.childrenToString(), this.getLine())
  }
  // todo: rename to hasFirstWord
  has(firstWord) {
    return this._hasFirstWord(firstWord)
  }
  _hasFirstWord(firstWord) {
    return this._getIndex()[firstWord] !== undefined
  }
  map(fn) {
    return this.getChildren().map(fn)
  }
  filter(fn) {
    return this.getChildren().filter(fn)
  }
  find(fn) {
    return this.getChildren().find(fn)
  }
  every(fn) {
    let index = 0
    for (let node of this.getTopDownArrayIterator()) {
      if (!fn(node, index)) return false
      index++
    }
    return true
  }
  forEach(fn) {
    this.getChildren().forEach(fn)
    return this
  }
  // todo: protected?
  _clearIndex() {
    delete this._index
  }
  slice(start, end) {
    return this.getChildren().slice(start, end)
  }
  // todo: make 0 and 1 a param
  getInheritanceTree() {
    const paths = {}
    const result = new TreeNode()
    this.forEach(node => {
      const key = node.getWord(0)
      const parentKey = node.getWord(1)
      const parentPath = paths[parentKey]
      paths[key] = parentPath ? [parentPath, key].join(" ") : key
      result.touchNode(paths[key])
    })
    return result
  }
  _getGrandParent() {
    return this.isRoot() || this.getParent().isRoot() ? undefined : this.getParent().getParent()
  }
  _getParser() {
    if (!this._parser) this._parser = this.createParser()
    return this._parser
  }
  createParser() {
    return new Parser(this.constructor)
  }
  static _makeUniqueId() {
    if (this._uniqueId === undefined) this._uniqueId = 0
    this._uniqueId++
    return this._uniqueId
  }
  static _getFileFormat(path) {
    const format = path.split(".").pop()
    return FileFormat[format] ? format : FileFormat.tree
  }
  getLineModifiedTime() {
    return this._lineModifiedTime || this._nodeCreationTime
  }
  getChildArrayModifiedTime() {
    return this._childArrayModifiedTime || this._nodeCreationTime
  }
  _setChildArrayMofifiedTime(value) {
    this._childArrayModifiedTime = value
    return this
  }
  getLineOrChildrenModifiedTime() {
    return Math.max(this.getLineModifiedTime(), this.getChildArrayModifiedTime(), Math.max.apply(null, this.map(child => child.getLineOrChildrenModifiedTime())))
  }
  _setVirtualParentTree(tree) {
    this._virtualParentTree = tree
    return this
  }
  _getVirtualParentTreeNode() {
    return this._virtualParentTree
  }
  _setVirtualAncestorNodesByInheritanceViaColumnIndicesAndThenExpand(nodes, thisIdColumnNumber, extendsIdColumnNumber) {
    const map = {}
    for (let node of nodes) {
      const nodeId = node.getWord(thisIdColumnNumber)
      if (map[nodeId]) throw new Error(`Tried to define a node with id "${nodeId}" but one is already defined.`)
      map[nodeId] = {
        nodeId: nodeId,
        node: node,
        parentId: node.getWord(extendsIdColumnNumber)
      }
    }
    // Add parent Nodes
    Object.values(map).forEach(nodeInfo => {
      const parentId = nodeInfo.parentId
      const parentNode = map[parentId]
      if (parentId && !parentNode) throw new Error(`Node "${nodeInfo.nodeId}" tried to extend "${parentId}" but "${parentId}" not found.`)
      if (parentId) nodeInfo.node._setVirtualParentTree(parentNode.node)
    })
    nodes.forEach(node => node._expandFromVirtualParentTree())
    return this
  }
  _expandFromVirtualParentTree() {
    if (this._isVirtualExpanded) return this
    this._isExpanding = true
    let parentNode = this._getVirtualParentTreeNode()
    if (parentNode) {
      if (parentNode._isExpanding) throw new Error(`Loop detected: '${this.getLine()}' is the ancestor of one of its ancestors.`)
      parentNode._expandFromVirtualParentTree()
      const clone = this.clone()
      this._setChildren(parentNode.childrenToString())
      this.extend(clone)
    }
    this._isExpanding = false
    this._isVirtualExpanded = true
  }
  // todo: solve issue related to whether extend should overwrite or append.
  _expandChildren(thisIdColumnNumber, extendsIdColumnNumber, childrenThatNeedExpanding = this.getChildren()) {
    return this._setVirtualAncestorNodesByInheritanceViaColumnIndicesAndThenExpand(childrenThatNeedExpanding, thisIdColumnNumber, extendsIdColumnNumber)
  }
  // todo: add more testing.
  // todo: solve issue with where extend should overwrite or append
  // todo: should take a grammar? to decide whether to overwrite or append.
  // todo: this is slow.
  extend(nodeOrStr) {
    const node = nodeOrStr instanceof TreeNode ? nodeOrStr : new TreeNode(nodeOrStr)
    const usedFirstWords = new Set()
    node.forEach(sourceNode => {
      const firstWord = sourceNode.getFirstWord()
      let targetNode
      const isAnArrayNotMap = usedFirstWords.has(firstWord)
      if (!this.has(firstWord)) {
        usedFirstWords.add(firstWord)
        this.appendLineAndChildren(sourceNode.getLine(), sourceNode.childrenToString())
        return true
      }
      if (isAnArrayNotMap) targetNode = this.appendLine(sourceNode.getLine())
      else {
        targetNode = this.touchNode(firstWord).setContent(sourceNode.getContent())
        usedFirstWords.add(firstWord)
      }
      if (sourceNode.length) targetNode.extend(sourceNode)
    })
    return this
  }
  macroExpand(macroDefinitionWord, macroUsageWord) {
    const clone = this.clone()
    const defs = clone.findNodes(macroDefinitionWord)
    const allUses = clone.findNodes(macroUsageWord)
    const wordBreakSymbol = clone.getWordBreakSymbol()
    defs.forEach(def => {
      const macroName = def.getWord(1)
      const uses = allUses.filter(node => node.hasWord(1, macroName))
      const params = def.getWordsFrom(2)
      const replaceFn = str => {
        const paramValues = str.split(wordBreakSymbol).slice(2)
        let newTree = def.childrenToString()
        params.forEach((param, index) => {
          newTree = newTree.replace(new RegExp(param, "g"), paramValues[index])
        })
        return newTree
      }
      uses.forEach(node => {
        node.replaceNode(replaceFn)
      })
      def.destroy()
    })
    return clone
  }
  setChildren(children) {
    return this._setChildren(children)
  }
  _updateLineModifiedTimeAndTriggerEvent() {
    this._lineModifiedTime = this._getProcessTimeInMilliseconds()
  }
  insertWord(index, word) {
    const wi = this.getWordBreakSymbol()
    const words = this._getLine().split(wi)
    words.splice(index, 0, word)
    this.setLine(words.join(wi))
    return this
  }
  deleteDuplicates() {
    const set = new Set()
    this.getTopDownArray().forEach(node => {
      const str = node.toString()
      if (set.has(str)) node.destroy()
      else set.add(str)
    })
    return this
  }
  setWord(index, word) {
    const wi = this.getWordBreakSymbol()
    const words = this._getLine().split(wi)
    words[index] = word
    this.setLine(words.join(wi))
    return this
  }
  deleteChildren() {
    return this._clearChildren()
  }
  setContent(content) {
    if (content === this.getContent()) return this
    const newArray = [this.getFirstWord()]
    if (content !== undefined) {
      content = content.toString()
      if (content.match(this.getNodeBreakSymbol())) return this.setContentWithChildren(content)
      newArray.push(content)
    }
    this._setLine(newArray.join(this.getWordBreakSymbol()))
    this._updateLineModifiedTimeAndTriggerEvent()
    return this
  }
  prependSibling(line, children) {
    return this.getParent().insertLineAndChildren(line, children, this.getIndex())
  }
  appendSibling(line, children) {
    return this.getParent().insertLineAndChildren(line, children, this.getIndex() + 1)
  }
  setContentWithChildren(text) {
    // todo: deprecate
    if (!text.includes(this.getNodeBreakSymbol())) {
      this._clearChildren()
      return this.setContent(text)
    }
    const lines = text.split(this.getNodeBreakSymbolRegex())
    const firstLine = lines.shift()
    this.setContent(firstLine)
    // tood: cleanup.
    const remainingString = lines.join(this.getNodeBreakSymbol())
    const children = new TreeNode(remainingString)
    if (!remainingString) children.appendLine("")
    this.setChildren(children)
    return this
  }
  setFirstWord(firstWord) {
    return this.setWord(0, firstWord)
  }
  setLine(line) {
    if (line === this.getLine()) return this
    // todo: clear parent TMTimes
    this.getParent()._clearIndex()
    this._setLine(line)
    this._updateLineModifiedTimeAndTriggerEvent()
    return this
  }
  duplicate() {
    return this.getParent()._insertLineAndChildren(this.getLine(), this.childrenToString(), this.getIndex() + 1)
  }
  trim() {
    // todo: could do this so only the trimmed rows are deleted.
    this.setChildren(this.childrenToString().trim())
    return this
  }
  destroy() {
    this.getParent()._deleteNode(this)
  }
  set(firstWordPath, text) {
    return this.touchNode(firstWordPath).setContentWithChildren(text)
  }
  setFromText(text) {
    if (this.toString() === text) return this
    const tuple = this._textToContentAndChildrenTuple(text)
    this.setLine(tuple[0])
    return this._setChildren(tuple[1])
  }
  // todo: throw error if line contains a \n
  appendLine(line) {
    return this._insertLineAndChildren(line)
  }
  appendLineAndChildren(line, children) {
    return this._insertLineAndChildren(line, children)
  }
  getNodesByRegex(regex) {
    const matches = []
    regex = regex instanceof RegExp ? [regex] : regex
    this._getNodesByLineRegex(matches, regex)
    return matches
  }
  getNodesByLinePrefixes(columns) {
    const matches = []
    this._getNodesByLineRegex(matches, columns.map(str => new RegExp("^" + str)))
    return matches
  }
  _getNodesByLineRegex(matches, regs) {
    const rgs = regs.slice(0)
    const reg = rgs.shift()
    const candidates = this.filter(child => child.getLine().match(reg))
    if (!rgs.length) return candidates.forEach(cand => matches.push(cand))
    candidates.forEach(cand => cand._getNodesByLineRegex(matches, rgs))
  }
  concat(node) {
    if (typeof node === "string") node = new TreeNode(node)
    return node.map(node => this._insertLineAndChildren(node.getLine(), node.childrenToString()))
  }
  _deleteByIndexes(indexesToDelete) {
    if (!indexesToDelete.length) return this
    this._clearIndex()
    // note: assumes indexesToDelete is in ascending order
    const deletedNodes = indexesToDelete.reverse().map(index => this._getChildrenArray().splice(index, 1)[0])
    this._setChildArrayMofifiedTime(this._getProcessTimeInMilliseconds())
    return this
  }
  _deleteNode(node) {
    const index = this._indexOfNode(node)
    return index > -1 ? this._deleteByIndexes([index]) : 0
  }
  reverse() {
    this._clearIndex()
    this._getChildrenArray().reverse()
    return this
  }
  shift() {
    if (!this.length) return null
    const node = this._getChildrenArray().shift()
    return node.copyTo(new this.constructor(), 0)
  }
  sort(fn) {
    this._getChildrenArray().sort(fn)
    this._clearIndex()
    return this
  }
  invert() {
    this.forEach(node => node.getWords().reverse())
    return this
  }
  _rename(oldFirstWord, newFirstWord) {
    const index = this.indexOf(oldFirstWord)
    if (index === -1) return this
    const node = this._getChildrenArray()[index]
    node.setFirstWord(newFirstWord)
    this._clearIndex()
    return this
  }
  // Does not recurse.
  remap(map) {
    this.forEach(node => {
      const firstWord = node.getFirstWord()
      if (map[firstWord] !== undefined) node.setFirstWord(map[firstWord])
    })
    return this
  }
  rename(oldFirstWord, newFirstWord) {
    this._rename(oldFirstWord, newFirstWord)
    return this
  }
  renameAll(oldName, newName) {
    this.findNodes(oldName).forEach(node => node.setFirstWord(newName))
    return this
  }
  _deleteAllChildNodesWithFirstWord(firstWord) {
    if (!this.has(firstWord)) return this
    const allNodes = this._getChildrenArray()
    const indexesToDelete = []
    allNodes.forEach((node, index) => {
      if (node.getFirstWord() === firstWord) indexesToDelete.push(index)
    })
    return this._deleteByIndexes(indexesToDelete)
  }
  delete(path = "") {
    const edgeSymbol = this.getEdgeSymbol()
    if (!path.includes(edgeSymbol)) return this._deleteAllChildNodesWithFirstWord(path)
    const parts = path.split(edgeSymbol)
    const nextFirstWord = parts.pop()
    const targetNode = this.getNode(parts.join(edgeSymbol))
    return targetNode ? targetNode._deleteAllChildNodesWithFirstWord(nextFirstWord) : 0
  }
  deleteColumn(firstWord = "") {
    this.forEach(node => node.delete(firstWord))
    return this
  }
  _getNonMaps() {
    const results = this.getTopDownArray().filter(node => node.hasDuplicateFirstWords())
    if (this.hasDuplicateFirstWords()) results.unshift(this)
    return results
  }
  replaceNode(fn) {
    const parent = this.getParent()
    const index = this.getIndex()
    const newNodes = new TreeNode(fn(this.toString()))
    const returnedNodes = []
    newNodes.forEach((child, childIndex) => {
      const newNode = parent.insertLineAndChildren(child.getLine(), child.childrenToString(), index + childIndex)
      returnedNodes.push(newNode)
    })
    this.destroy()
    return returnedNodes
  }
  insertLineAndChildren(line, children, index) {
    return this._insertLineAndChildren(line, children, index)
  }
  insertLine(line, index) {
    return this._insertLineAndChildren(line, undefined, index)
  }
  prependLine(line) {
    return this.insertLine(line, 0)
  }
  pushContentAndChildren(content, children) {
    let index = this.length
    while (this.has(index.toString())) {
      index++
    }
    const line = index.toString() + (content === undefined ? "" : this.getWordBreakSymbol() + content)
    return this.appendLineAndChildren(line, children)
  }
  deleteBlanks() {
    this.getChildren()
      .filter(node => node.isBlankLine())
      .forEach(node => node.destroy())
    return this
  }
  // todo: add "globalReplace" method? Which runs a global regex or string replace on the Tree doc as a string?
  firstWordSort(firstWordOrder) {
    return this._firstWordSort(firstWordOrder)
  }
  deleteWordAt(wordIndex) {
    const words = this.getWords()
    words.splice(wordIndex, 1)
    return this.setWords(words)
  }
  trigger(event) {
    if (this._listeners && this._listeners.has(event.constructor)) {
      const listeners = this._listeners.get(event.constructor)
      const listenersToRemove = []
      for (let index = 0; index < listeners.length; index++) {
        const listener = listeners[index]
        if (listener(event) === true) listenersToRemove.push(index)
      }
      listenersToRemove.reverse().forEach(index => listenersToRemove.splice(index, 1))
    }
  }
  triggerAncestors(event) {
    if (this.isRoot()) return
    const parent = this.getParent()
    parent.trigger(event)
    parent.triggerAncestors(event)
  }
  onLineChanged(eventHandler) {
    return this._addEventListener(LineChangedTreeEvent, eventHandler)
  }
  onDescendantChanged(eventHandler) {
    return this._addEventListener(DescendantChangedTreeEvent, eventHandler)
  }
  onChildAdded(eventHandler) {
    return this._addEventListener(ChildAddedTreeEvent, eventHandler)
  }
  onChildRemoved(eventHandler) {
    return this._addEventListener(ChildRemovedTreeEvent, eventHandler)
  }
  _addEventListener(eventClass, eventHandler) {
    if (!this._listeners) this._listeners = new Map()
    if (!this._listeners.has(eventClass)) this._listeners.set(eventClass, [])
    this._listeners.get(eventClass).push(eventHandler)
    return this
  }
  setWords(words) {
    return this.setLine(words.join(this.getWordBreakSymbol()))
  }
  setWordsFrom(index, words) {
    this.setWords(
      this.getWords()
        .slice(0, index)
        .concat(words)
    )
    return this
  }
  appendWord(word) {
    const words = this.getWords()
    words.push(word)
    return this.setWords(words)
  }
  _firstWordSort(firstWordOrder, secondarySortFn) {
    const nodeAFirst = -1
    const nodeBFirst = 1
    const map = {}
    firstWordOrder.forEach((word, index) => {
      map[word] = index
    })
    this.sort((nodeA, nodeB) => {
      const valA = map[nodeA.getFirstWord()]
      const valB = map[nodeB.getFirstWord()]
      if (valA > valB) return nodeBFirst
      if (valA < valB) return nodeAFirst
      return secondarySortFn ? secondarySortFn(nodeA, nodeB) : 0
    })
    return this
  }
  _touchNode(firstWordPathArray) {
    let contextNode = this
    firstWordPathArray.forEach(firstWord => {
      contextNode = contextNode.getNode(firstWord) || contextNode.appendLine(firstWord)
    })
    return contextNode
  }
  _touchNodeByString(str) {
    str = str.replace(this.getNodeBreakSymbolRegex(), "") // todo: do we want to do this sanitization?
    return this._touchNode(str.split(this.getWordBreakSymbol()))
  }
  touchNode(str) {
    return this._touchNodeByString(str)
  }
  appendNode(node) {
    return this.appendLineAndChildren(node.getLine(), node.childrenToString())
  }
  hasLine(line) {
    return this.getChildren().some(node => node.getLine() === line)
  }
  getNodesByLine(line) {
    return this.filter(node => node.getLine() === line)
  }
  toggleLine(line) {
    const lines = this.getNodesByLine(line)
    if (lines.length) {
      lines.map(line => line.destroy())
      return this
    }
    return this.appendLine(line)
  }
  // todo: remove?
  sortByColumns(indexOrIndices) {
    const indices = indexOrIndices instanceof Array ? indexOrIndices : [indexOrIndices]
    const length = indices.length
    this.sort((nodeA, nodeB) => {
      const wordsA = nodeA.getWords()
      const wordsB = nodeB.getWords()
      for (let index = 0; index < length; index++) {
        const col = indices[index]
        const av = wordsA[col]
        const bv = wordsB[col]
        if (av === undefined) return -1
        if (bv === undefined) return 1
        if (av > bv) return 1
        else if (av < bv) return -1
      }
      return 0
    })
    return this
  }
  getWordsAsSet() {
    return new Set(this.getWordsFrom(1))
  }
  appendWordIfMissing(word) {
    if (this.getWordsAsSet().has(word)) return this
    return this.appendWord(word)
  }
  // todo: check to ensure identical objects
  addObjectsAsDelimited(arrayOfObjects, delimiter = TreeUtils._chooseDelimiter(new TreeNode(arrayOfObjects).toString())) {
    const header = Object.keys(arrayOfObjects[0])
      .join(delimiter)
      .replace(/[\n\r]/g, "")
    const rows = arrayOfObjects.map(item =>
      Object.values(item)
        .join(delimiter)
        .replace(/[\n\r]/g, "")
    )
    return this.addUniqueRowsToNestedDelimited(header, rows)
  }
  setChildrenAsDelimited(tree, delimiter = TreeUtils._chooseDelimiter(tree.toString())) {
    tree = tree instanceof TreeNode ? tree : new TreeNode(tree)
    return this.setChildren(tree.toDelimited(delimiter))
  }
  convertChildrenToDelimited(delimiter = TreeUtils._chooseDelimiter(this.childrenToString())) {
    // todo: handle newlines!!!
    return this.setChildren(this.toDelimited(delimiter))
  }
  addUniqueRowsToNestedDelimited(header, rowsAsStrings) {
    if (!this.length) this.appendLine(header)
    // todo: this looks brittle
    rowsAsStrings.forEach(row => {
      if (!this.toString().includes(row)) this.appendLine(row)
    })
    return this
  }
  shiftLeft() {
    const grandParent = this._getGrandParent()
    if (!grandParent) return this
    const parentIndex = this.getParent().getIndex()
    const newNode = grandParent.insertLineAndChildren(this.getLine(), this.length ? this.childrenToString() : undefined, parentIndex + 1)
    this.destroy()
    return newNode
  }
  shiftRight() {
    const olderSibling = this._getClosestOlderSibling()
    if (!olderSibling) return this
    const newNode = olderSibling.appendLineAndChildren(this.getLine(), this.length ? this.childrenToString() : undefined)
    this.destroy()
    return newNode
  }
  shiftYoungerSibsRight() {
    const nodes = this.getYoungerSiblings()
    nodes.forEach(node => node.shiftRight())
    return this
  }
  sortBy(nameOrNames) {
    const names = nameOrNames instanceof Array ? nameOrNames : [nameOrNames]
    const length = names.length
    this.sort((nodeA, nodeB) => {
      if (!nodeB.length && !nodeA.length) return 0
      else if (!nodeA.length) return -1
      else if (!nodeB.length) return 1
      for (let index = 0; index < length; index++) {
        const firstWord = names[index]
        const av = nodeA.get(firstWord)
        const bv = nodeB.get(firstWord)
        if (av > bv) return 1
        else if (av < bv) return -1
      }
      return 0
    })
    return this
  }
  selectNode() {
    this._selected = true
  }
  unselectNode() {
    delete this._selected
  }
  isSelected() {
    return !!this._selected
  }
  async saveVersion() {
    const newVersion = this.toString()
    const topUndoVersion = this._getTopUndoVersion()
    if (newVersion === topUndoVersion) return undefined
    this._recordChange(newVersion)
    this._setSavedVersion(this.toString())
    return this
  }
  hasUnsavedChanges() {
    return this.toString() !== this._getSavedVersion()
  }
  async redo() {
    const undoStack = this._getUndoStack()
    const redoStack = this._getRedoStack()
    if (!redoStack.length) return undefined
    undoStack.push(redoStack.pop())
    return this._reloadFromUndoTop()
  }
  async undo() {
    const undoStack = this._getUndoStack()
    const redoStack = this._getRedoStack()
    if (undoStack.length === 1) return undefined
    redoStack.push(undoStack.pop())
    return this._reloadFromUndoTop()
  }
  _getSavedVersion() {
    return this._savedVersion
  }
  _setSavedVersion(str) {
    this._savedVersion = str
    return this
  }
  _clearRedoStack() {
    const redoStack = this._getRedoStack()
    redoStack.splice(0, redoStack.length)
  }
  getChangeHistory() {
    return this._getUndoStack().slice(0)
  }
  _getUndoStack() {
    if (!this._undoStack) this._undoStack = []
    return this._undoStack
  }
  _getRedoStack() {
    if (!this._redoStack) this._redoStack = []
    return this._redoStack
  }
  _getTopUndoVersion() {
    const undoStack = this._getUndoStack()
    return undoStack[undoStack.length - 1]
  }
  async _reloadFromUndoTop() {
    this.setChildren(this._getTopUndoVersion())
  }
  _recordChange(newVersion) {
    this._clearRedoStack()
    this._getUndoStack().push(newVersion) // todo: use diffs?
  }
  static fromCsv(str) {
    return this.fromDelimited(str, ",", '"')
  }
  static fromJsonSubset(str) {
    return new TreeNode(JSON.parse(str))
  }
  static fromSsv(str) {
    return this.fromDelimited(str, " ", '"')
  }
  static fromTsv(str) {
    return this.fromDelimited(str, "\t", '"')
  }
  static fromDelimited(str, delimiter, quoteChar = '"') {
    const rows = this._getEscapedRows(str, delimiter, quoteChar)
    return this._rowsToTreeNode(rows, delimiter, true)
  }
  static _getEscapedRows(str, delimiter, quoteChar) {
    return str.includes(quoteChar) ? this._strToRows(str, delimiter, quoteChar) : str.split("\n").map(line => line.split(delimiter))
  }
  static fromDelimitedNoHeaders(str, delimiter, quoteChar) {
    const rows = this._getEscapedRows(str, delimiter, quoteChar)
    return this._rowsToTreeNode(rows, delimiter, false)
  }
  static _strToRows(str, delimiter, quoteChar, newLineChar = "\n") {
    const rows = [[]]
    const newLine = "\n"
    const length = str.length
    let currentCell = ""
    let inQuote = str.substr(0, 1) === quoteChar
    let currentPosition = inQuote ? 1 : 0
    let nextChar
    let isLastChar
    let currentRow = 0
    let char
    let isNextCharAQuote
    while (currentPosition < length) {
      char = str[currentPosition]
      isLastChar = currentPosition + 1 === length
      nextChar = str[currentPosition + 1]
      isNextCharAQuote = nextChar === quoteChar
      if (inQuote) {
        if (char !== quoteChar) currentCell += char
        else if (isNextCharAQuote) {
          // Both the current and next char are ", so the " is escaped
          currentCell += nextChar
          currentPosition++ // Jump 2
        } else {
          // If the current char is a " and the next char is not, it's the end of the quotes
          inQuote = false
          if (isLastChar) rows[currentRow].push(currentCell)
        }
      } else {
        if (char === delimiter) {
          rows[currentRow].push(currentCell)
          currentCell = ""
          if (isNextCharAQuote) {
            inQuote = true
            currentPosition++ // Jump 2
          }
        } else if (char === newLine) {
          rows[currentRow].push(currentCell)
          currentCell = ""
          currentRow++
          if (nextChar) rows[currentRow] = []
          if (isNextCharAQuote) {
            inQuote = true
            currentPosition++ // Jump 2
          }
        } else if (isLastChar) rows[currentRow].push(currentCell + char)
        else currentCell += char
      }
      currentPosition++
    }
    return rows
  }
  static multiply(nodeA, nodeB) {
    const productNode = nodeA.clone()
    productNode.forEach((node, index) => {
      node.setChildren(node.length ? this.multiply(node, nodeB) : nodeB.clone())
    })
    return productNode
  }
  // Given an array return a tree
  static _rowsToTreeNode(rows, delimiter, hasHeaders) {
    const numberOfColumns = rows[0].length
    const treeNode = new TreeNode()
    const names = this._getHeader(rows, hasHeaders)
    const rowCount = rows.length
    for (let rowIndex = hasHeaders ? 1 : 0; rowIndex < rowCount; rowIndex++) {
      let row = rows[rowIndex]
      // If the row contains too many columns, shift the extra columns onto the last one.
      // This allows you to not have to escape delimiter characters in the final column.
      if (row.length > numberOfColumns) {
        row[numberOfColumns - 1] = row.slice(numberOfColumns - 1).join(delimiter)
        row = row.slice(0, numberOfColumns)
      } else if (row.length < numberOfColumns) {
        // If the row is missing columns add empty columns until it is full.
        // This allows you to make including delimiters for empty ending columns in each row optional.
        while (row.length < numberOfColumns) {
          row.push("")
        }
      }
      const obj = {}
      row.forEach((cellValue, index) => {
        obj[names[index]] = cellValue
      })
      treeNode.pushContentAndChildren(undefined, obj)
    }
    return treeNode
  }
  static _initializeXmlParser() {
    if (this._xmlParser) return
    const windowObj = window
    if (typeof windowObj.DOMParser !== "undefined") this._xmlParser = xmlStr => new windowObj.DOMParser().parseFromString(xmlStr, "text/xml")
    else if (typeof windowObj.ActiveXObject !== "undefined" && new windowObj.ActiveXObject("Microsoft.XMLDOM")) {
      this._xmlParser = xmlStr => {
        const xmlDoc = new windowObj.ActiveXObject("Microsoft.XMLDOM")
        xmlDoc.async = "false"
        xmlDoc.loadXML(xmlStr)
        return xmlDoc
      }
    } else throw new Error("No XML parser found")
  }
  static fromXml(str) {
    this._initializeXmlParser()
    const xml = this._xmlParser(str)
    try {
      return this._treeNodeFromXml(xml).getNode("children")
    } catch (err) {
      return this._treeNodeFromXml(this._parseXml2(str)).getNode("children")
    }
  }
  static _zipObject(keys, values) {
    const obj = {}
    keys.forEach((key, index) => (obj[key] = values[index]))
    return obj
  }
  static fromShape(shapeArr, rootNode = new TreeNode()) {
    const part = shapeArr.shift()
    if (part !== undefined) {
      for (let index = 0; index < part; index++) {
        rootNode.appendLine(index.toString())
      }
    }
    if (shapeArr.length) rootNode.forEach(node => TreeNode.fromShape(shapeArr.slice(0), node))
    return rootNode
  }
  static fromDataTable(table) {
    const header = table.shift()
    return new TreeNode(table.map(row => this._zipObject(header, row)))
  }
  static _parseXml2(str) {
    const el = document.createElement("div")
    el.innerHTML = str
    return el
  }
  // todo: cleanup typings
  static _treeNodeFromXml(xml) {
    const result = new TreeNode()
    const children = new TreeNode()
    // Set attributes
    if (xml.attributes) {
      for (let index = 0; index < xml.attributes.length; index++) {
        result.set(xml.attributes[index].name, xml.attributes[index].value)
      }
    }
    if (xml.data) children.pushContentAndChildren(xml.data)
    // Set content
    if (xml.childNodes && xml.childNodes.length > 0) {
      for (let index = 0; index < xml.childNodes.length; index++) {
        const child = xml.childNodes[index]
        if (child.tagName && child.tagName.match(/parsererror/i)) throw new Error("Parse Error")
        if (child.childNodes.length > 0 && child.tagName) children.appendLineAndChildren(child.tagName, this._treeNodeFromXml(child))
        else if (child.tagName) children.appendLine(child.tagName)
        else if (child.data) {
          const data = child.data.trim()
          if (data) children.pushContentAndChildren(data)
        }
      }
    }
    if (children.length > 0) result.touchNode("children").setChildren(children)
    return result
  }
  static _getHeader(rows, hasHeaders) {
    const numberOfColumns = rows[0].length
    const headerRow = hasHeaders ? rows[0] : []
    const WordBreakSymbol = " "
    const ziRegex = new RegExp(WordBreakSymbol, "g")
    if (hasHeaders) {
      // Strip any WordBreakSymbols from column names in the header row.
      // This makes the mapping not quite 1 to 1 if there are any WordBreakSymbols in names.
      for (let index = 0; index < numberOfColumns; index++) {
        headerRow[index] = headerRow[index].replace(ziRegex, "")
      }
    } else {
      // If str has no headers, create them as 0,1,2,3
      for (let index = 0; index < numberOfColumns; index++) {
        headerRow.push(index.toString())
      }
    }
    return headerRow
  }
  static nest(str, xValue) {
    const NodeBreakSymbol = "\n"
    const WordBreakSymbol = " "
    const indent = NodeBreakSymbol + WordBreakSymbol.repeat(xValue)
    return str ? indent + str.replace(/\n/g, indent) : ""
  }
  static fromDisk(path) {
    const format = this._getFileFormat(path)
    const content = require("fs").readFileSync(path, "utf8")
    const methods = {
      tree: content => new TreeNode(content),
      csv: content => this.fromCsv(content),
      tsv: content => this.fromTsv(content)
    }
    return methods[format](content)
  }
}
TreeNode.Parser = Parser
TreeNode.iris = `sepal_length,sepal_width,petal_length,petal_width,species
6.1,3,4.9,1.8,virginica
5.6,2.7,4.2,1.3,versicolor
5.6,2.8,4.9,2,virginica
6.2,2.8,4.8,1.8,virginica
7.7,3.8,6.7,2.2,virginica
5.3,3.7,1.5,0.2,setosa
6.2,3.4,5.4,2.3,virginica
4.9,2.5,4.5,1.7,virginica
5.1,3.5,1.4,0.2,setosa
5,3.4,1.5,0.2,setosa`
TreeNode.getVersion = () => "44.0.3"
class AbstractExtendibleTreeNode extends TreeNode {
  _getFromExtended(firstWordPath) {
    const hit = this._getNodeFromExtended(firstWordPath)
    return hit ? hit.get(firstWordPath) : undefined
  }
  _getFamilyTree() {
    const tree = new TreeNode()
    this.forEach(node => {
      const path = node._getAncestorsArray().map(node => node._getId())
      path.reverse()
      tree.touchNode(path.join(" "))
    })
    return tree
  }
  // todo: be more specific with the param
  _getChildrenByNodeConstructorInExtended(constructor) {
    return TreeUtils.flatten(this._getAncestorsArray().map(node => node.getChildrenByNodeConstructor(constructor)))
  }
  _getExtendedParent() {
    return this._getAncestorsArray()[1]
  }
  _hasFromExtended(firstWordPath) {
    return !!this._getNodeFromExtended(firstWordPath)
  }
  _getNodeFromExtended(firstWordPath) {
    return this._getAncestorsArray().find(node => node.has(firstWordPath))
  }
  _getConcatBlockStringFromExtended(firstWordPath) {
    return this._getAncestorsArray()
      .filter(node => node.has(firstWordPath))
      .map(node => node.getNode(firstWordPath).childrenToString())
      .reverse()
      .join("\n")
  }
  _doesExtend(nodeTypeId) {
    return this._getAncestorSet().has(nodeTypeId)
  }
  _getAncestorSet() {
    if (!this._cache_ancestorSet) this._cache_ancestorSet = new Set(this._getAncestorsArray().map(def => def._getId()))
    return this._cache_ancestorSet
  }
  // Note: the order is: [this, parent, grandParent, ...]
  _getAncestorsArray(cannotContainNodes) {
    this._initAncestorsArrayCache(cannotContainNodes)
    return this._cache_ancestorsArray
  }
  _getIdThatThisExtends() {
    return this.get(TreeNotationConstants.extends)
  }
  _initAncestorsArrayCache(cannotContainNodes) {
    if (this._cache_ancestorsArray) return undefined
    if (cannotContainNodes && cannotContainNodes.includes(this)) throw new Error(`Loop detected: '${this.getLine()}' is the ancestor of one of its ancestors.`)
    cannotContainNodes = cannotContainNodes || [this]
    let ancestors = [this]
    const extendedId = this._getIdThatThisExtends()
    if (extendedId) {
      const parentNode = this._getIdToNodeMap()[extendedId]
      if (!parentNode) throw new Error(`${extendedId} not found`)
      ancestors = ancestors.concat(parentNode._getAncestorsArray(cannotContainNodes))
    }
    this._cache_ancestorsArray = ancestors
  }
}
class ExtendibleTreeNode extends AbstractExtendibleTreeNode {
  _getIdToNodeMap() {
    if (!this.isRoot()) return this.getRootNode()._getIdToNodeMap()
    if (!this._nodeMapCache) {
      this._nodeMapCache = {}
      this.forEach(child => {
        this._nodeMapCache[child._getId()] = child
      })
    }
    return this._nodeMapCache
  }
  _getId() {
    return this.getWord(0)
  }
}
window.TreeNode = TreeNode
window.ExtendibleTreeNode = ExtendibleTreeNode
window.AbstractExtendibleTreeNode = AbstractExtendibleTreeNode
window.TreeEvents = TreeEvents
var GrammarConstantsCompiler
;(function(GrammarConstantsCompiler) {
  GrammarConstantsCompiler["stringTemplate"] = "stringTemplate"
  GrammarConstantsCompiler["indentCharacter"] = "indentCharacter"
  GrammarConstantsCompiler["catchAllCellDelimiter"] = "catchAllCellDelimiter"
  GrammarConstantsCompiler["openChildren"] = "openChildren"
  GrammarConstantsCompiler["joinChildrenWith"] = "joinChildrenWith"
  GrammarConstantsCompiler["closeChildren"] = "closeChildren"
})(GrammarConstantsCompiler || (GrammarConstantsCompiler = {}))
var PreludeCellTypeIds
;(function(PreludeCellTypeIds) {
  PreludeCellTypeIds["anyCell"] = "anyCell"
  PreludeCellTypeIds["keywordCell"] = "keywordCell"
  PreludeCellTypeIds["extraWordCell"] = "extraWordCell"
  PreludeCellTypeIds["floatCell"] = "floatCell"
  PreludeCellTypeIds["numberCell"] = "numberCell"
  PreludeCellTypeIds["bitCell"] = "bitCell"
  PreludeCellTypeIds["boolCell"] = "boolCell"
  PreludeCellTypeIds["intCell"] = "intCell"
})(PreludeCellTypeIds || (PreludeCellTypeIds = {}))
var GrammarConstantsConstantTypes
;(function(GrammarConstantsConstantTypes) {
  GrammarConstantsConstantTypes["boolean"] = "boolean"
  GrammarConstantsConstantTypes["string"] = "string"
  GrammarConstantsConstantTypes["int"] = "int"
  GrammarConstantsConstantTypes["float"] = "float"
})(GrammarConstantsConstantTypes || (GrammarConstantsConstantTypes = {}))
var GrammarBundleFiles
;(function(GrammarBundleFiles) {
  GrammarBundleFiles["package"] = "package.json"
  GrammarBundleFiles["readme"] = "readme.md"
  GrammarBundleFiles["indexHtml"] = "index.html"
  GrammarBundleFiles["indexJs"] = "index.js"
  GrammarBundleFiles["testJs"] = "test.js"
})(GrammarBundleFiles || (GrammarBundleFiles = {}))
var GrammarCellParser
;(function(GrammarCellParser) {
  GrammarCellParser["prefix"] = "prefix"
  GrammarCellParser["postfix"] = "postfix"
  GrammarCellParser["omnifix"] = "omnifix"
})(GrammarCellParser || (GrammarCellParser = {}))
var GrammarConstants
;(function(GrammarConstants) {
  // node types
  GrammarConstants["extensions"] = "extensions"
  GrammarConstants["toolingDirective"] = "tooling"
  GrammarConstants["todoComment"] = "todo"
  GrammarConstants["version"] = "version"
  GrammarConstants["nodeType"] = "nodeType"
  GrammarConstants["cellType"] = "cellType"
  GrammarConstants["grammarFileExtension"] = "grammar"
  GrammarConstants["nodeTypeSuffix"] = "Node"
  GrammarConstants["cellTypeSuffix"] = "Cell"
  // error check time
  GrammarConstants["regex"] = "regex"
  GrammarConstants["reservedWords"] = "reservedWords"
  GrammarConstants["enumFromCellTypes"] = "enumFromCellTypes"
  GrammarConstants["enum"] = "enum"
  GrammarConstants["examples"] = "examples"
  // baseNodeTypes
  GrammarConstants["baseNodeType"] = "baseNodeType"
  GrammarConstants["blobNode"] = "blobNode"
  GrammarConstants["errorNode"] = "errorNode"
  // parse time
  GrammarConstants["extends"] = "extends"
  GrammarConstants["abstract"] = "abstract"
  GrammarConstants["root"] = "root"
  GrammarConstants["crux"] = "crux"
  GrammarConstants["pattern"] = "pattern"
  GrammarConstants["inScope"] = "inScope"
  GrammarConstants["cells"] = "cells"
  GrammarConstants["catchAllCellType"] = "catchAllCellType"
  GrammarConstants["cellParser"] = "cellParser"
  GrammarConstants["catchAllNodeType"] = "catchAllNodeType"
  GrammarConstants["constants"] = "constants"
  GrammarConstants["required"] = "required"
  GrammarConstants["single"] = "single"
  GrammarConstants["tags"] = "tags"
  GrammarConstants["_extendsJsClass"] = "_extendsJsClass"
  GrammarConstants["_rootNodeJsHeader"] = "_rootNodeJsHeader"
  // default catchAll nodeType
  GrammarConstants["BlobNode"] = "BlobNode"
  GrammarConstants["defaultRootNode"] = "defaultRootNode"
  // code
  GrammarConstants["javascript"] = "javascript"
  // compile time
  GrammarConstants["compilerNodeType"] = "compiler"
  GrammarConstants["compilesTo"] = "compilesTo"
  // develop time
  GrammarConstants["description"] = "description"
  GrammarConstants["example"] = "example"
  GrammarConstants["frequency"] = "frequency"
  GrammarConstants["highlightScope"] = "highlightScope"
})(GrammarConstants || (GrammarConstants = {}))
// todo: can we merge these methods into base TreeNode and ditch this class?
class GrammarBackedNode extends TreeNode {
  getDefinition() {
    const grammarProgram = this.getGrammarProgram()
    return this.isRoot() ? grammarProgram : grammarProgram.getNodeTypeDefinitionByNodeTypeId(this.constructor.name)
  }
  getAutocompleteResults(partialWord, cellIndex) {
    return cellIndex === 0 ? this._getAutocompleteResultsForFirstWord(partialWord) : this._getAutocompleteResultsForCell(partialWord, cellIndex)
  }
  getChildInstancesOfNodeTypeId(nodeTypeId) {
    return this.filter(node => node.doesExtend(nodeTypeId))
  }
  doesExtend(nodeTypeId) {
    return this.getDefinition()._doesExtend(nodeTypeId)
  }
  _getErrorNodeErrors() {
    return [this.getFirstWord() ? new UnknownNodeTypeError(this) : new BlankLineError(this)]
  }
  _getBlobNodeCatchAllNodeType() {
    return BlobNode
  }
  _getAutocompleteResultsForFirstWord(partialWord) {
    const keywordMap = this.getDefinition().getFirstWordMapWithDefinitions()
    let keywords = Object.keys(keywordMap)
    if (partialWord) keywords = keywords.filter(keyword => keyword.includes(partialWord))
    return keywords.map(keyword => {
      const def = keywordMap[keyword]
      const description = def.getDescription()
      return {
        text: keyword,
        displayText: keyword + (description ? " " + description : "")
      }
    })
  }
  _getAutocompleteResultsForCell(partialWord, cellIndex) {
    // todo: root should be [] correct?
    const cell = this._getParsedCells()[cellIndex]
    return cell ? cell.getAutoCompleteWords(partialWord) : []
  }
  // note: this is overwritten by the root node of a runtime grammar program.
  // some of the magic that makes this all work. but maybe there's a better way.
  getGrammarProgram() {
    if (this.isRoot()) throw new Error(`Root node without getGrammarProgram defined.`)
    return this.getRootNode().getGrammarProgram()
  }
  getRunTimeEnumOptions(cell) {
    return undefined
  }
  _sortNodesByInScopeOrder() {
    const nodeTypeOrder = this.getDefinition()._getMyInScopeNodeTypeIds()
    if (!nodeTypeOrder.length) return this
    const orderMap = {}
    nodeTypeOrder.forEach((word, index) => {
      orderMap[word] = index
    })
    this.sort(
      TreeUtils.makeSortByFn(runtimeNode => {
        return orderMap[runtimeNode.getDefinition().getNodeTypeIdFromDefinition()]
      })
    )
    return this
  }
  _getRequiredNodeErrors(errors = []) {
    Object.values(this.getDefinition().getFirstWordMapWithDefinitions()).forEach(def => {
      if (def.isRequired()) {
        if (!this.getChildren().some(node => node.getDefinition() === def)) errors.push(new MissingRequiredNodeTypeError(this, def.getNodeTypeIdFromDefinition()))
      }
    })
    return errors
  }
  getProgramAsCells() {
    return this.getTopDownArray().map(node => {
      const cells = node._getParsedCells()
      let indents = node.getIndentLevel()
      while (indents) {
        cells.unshift(undefined)
        indents--
      }
      return cells
    })
  }
  getProgramWidth() {
    return Math.max(...this.getProgramAsCells().map(line => line.length))
  }
  getAllTypedWords() {
    const words = []
    this.getTopDownArray().forEach(node => {
      node.getWordTypes().forEach((cell, index) => {
        words.push(new TypedWord(node, index, cell.getCellTypeId()))
      })
    })
    return words
  }
  findAllWordsWithCellType(cellTypeId) {
    return this.getAllTypedWords().filter(typedWord => typedWord.type === cellTypeId)
  }
  findAllNodesWithNodeType(nodeTypeId) {
    return this.getTopDownArray().filter(node => node.getDefinition().getNodeTypeIdFromDefinition() === nodeTypeId)
  }
  getInPlaceCellTypeTree() {
    return this.getTopDownArray()
      .map(child => child.getIndentation() + child.getLineCellTypes())
      .join("\n")
  }
  getParseTable(maxColumnWidth = 40) {
    const tree = new TreeNode(this.getInPlaceCellTypeTree())
    return new TreeNode(
      tree.getTopDownArray().map((node, lineNumber) => {
        const sourceNode = this.nodeAtLine(lineNumber)
        const errs = sourceNode.getErrors()
        const errorCount = errs.length
        const obj = {
          lineNumber: lineNumber,
          source: sourceNode.getIndentation() + sourceNode.getLine(),
          nodeType: sourceNode.constructor.name,
          cellTypes: node.getContent(),
          errorCount: errorCount
        }
        if (errorCount) obj.errorMessages = errs.map(err => err.getMessage()).join(";")
        return obj
      })
    ).toFormattedTable(maxColumnWidth)
  }
  // Helper method for selecting potential nodeTypes needed to update grammar file.
  getInvalidNodeTypes() {
    return Array.from(
      new Set(
        this.getAllErrors()
          .filter(err => err instanceof UnknownNodeTypeError)
          .map(err => err.getNode().getFirstWord())
      )
    )
  }
  getAllSuggestions() {
    return new TreeNode(
      this.getAllWordBoundaryCoordinates().map(coordinate => {
        const results = this.getAutocompleteResultsAt(coordinate.y, coordinate.x)
        return {
          line: coordinate.y,
          char: coordinate.x,
          word: results.word,
          suggestions: results.matches.map(node => node.text).join(" ")
        }
      })
    ).toTable()
  }
  getAutocompleteResultsAt(lineIndex, charIndex) {
    const lineNode = this.nodeAtLine(lineIndex) || this
    const nodeInScope = lineNode.getNodeInScopeAtCharIndex(charIndex)
    // todo: add more tests
    // todo: second param this.childrenToString()
    // todo: change to getAutocomplete definitions
    const wordIndex = lineNode.getWordIndexAtCharacterIndex(charIndex)
    const wordProperties = lineNode.getWordProperties(wordIndex)
    return {
      startCharIndex: wordProperties.startCharIndex,
      endCharIndex: wordProperties.endCharIndex,
      word: wordProperties.word,
      matches: nodeInScope.getAutocompleteResults(wordProperties.word, wordIndex)
    }
  }
  _sortWithParentNodeTypesUpTop() {
    const familyTree = new GrammarProgram(this.toString()).getNodeTypeFamilyTree()
    const rank = {}
    familyTree.getTopDownArray().forEach((node, index) => {
      rank[node.getWord(0)] = index
    })
    const nodeAFirst = -1
    const nodeBFirst = 1
    this.sort((nodeA, nodeB) => {
      const nodeARank = rank[nodeA.getWord(0)]
      const nodeBRank = rank[nodeB.getWord(0)]
      return nodeARank < nodeBRank ? nodeAFirst : nodeBFirst
    })
    return this
  }
  format() {
    if (this.isRoot()) {
      this._sortNodesByInScopeOrder()
      try {
        this._sortWithParentNodeTypesUpTop()
      } catch (err) {
        console.log(`Warning: ${err}`)
      }
    }
    this.getTopDownArray().forEach(child => {
      child.format()
    })
    return this
  }
  getNodeTypeUsage(filepath = "") {
    // returns a report on what nodeTypes from its language the program uses
    const usage = new TreeNode()
    const grammarProgram = this.getGrammarProgram()
    grammarProgram.getValidConcreteAndAbstractNodeTypeDefinitions().forEach(def => {
      const requiredCellTypeIds = def.getCellParser().getRequiredCellTypeIds()
      usage.appendLine([def.getNodeTypeIdFromDefinition(), "line-id", "nodeType", requiredCellTypeIds.join(" ")].join(" "))
    })
    this.getTopDownArray().forEach((node, lineNumber) => {
      const stats = usage.getNode(node.getNodeTypeId())
      stats.appendLine([filepath + "-" + lineNumber, node.getWords().join(" ")].join(" "))
    })
    return usage
  }
  getInPlaceHighlightScopeTree() {
    return this.getTopDownArray()
      .map(child => child.getIndentation() + child.getLineHighlightScopes())
      .join("\n")
  }
  getInPlaceCellTypeTreeWithNodeConstructorNames() {
    return this.getTopDownArray()
      .map(child => child.constructor.name + this.getWordBreakSymbol() + child.getIndentation() + child.getLineCellTypes())
      .join("\n")
  }
  getInPlacePreludeCellTypeTreeWithNodeConstructorNames() {
    return this.getTopDownArray()
      .map(child => child.constructor.name + this.getWordBreakSymbol() + child.getIndentation() + child.getLineCellPreludeTypes())
      .join("\n")
  }
  getTreeWithNodeTypes() {
    return this.getTopDownArray()
      .map(child => child.constructor.name + this.getWordBreakSymbol() + child.getIndentation() + child.getLine())
      .join("\n")
  }
  getCellHighlightScopeAtPosition(lineIndex, wordIndex) {
    this._initCellTypeCache()
    const typeNode = this._cache_highlightScopeTree.getTopDownArray()[lineIndex - 1]
    return typeNode ? typeNode.getWord(wordIndex - 1) : undefined
  }
  _initCellTypeCache() {
    const treeMTime = this.getLineOrChildrenModifiedTime()
    if (this._cache_programCellTypeStringMTime === treeMTime) return undefined
    this._cache_typeTree = new TreeNode(this.getInPlaceCellTypeTree())
    this._cache_highlightScopeTree = new TreeNode(this.getInPlaceHighlightScopeTree())
    this._cache_programCellTypeStringMTime = treeMTime
  }
  createParser() {
    return this.isRoot()
      ? new TreeNode.Parser(BlobNode)
      : new TreeNode.Parser(
          this.getParent()
            ._getParser()
            ._getCatchAllNodeConstructor(this.getParent()),
          {}
        )
  }
  getNodeTypeId() {
    return this.getDefinition().getNodeTypeIdFromDefinition()
  }
  getWordTypes() {
    return this._getParsedCells().filter(cell => cell.getWord() !== undefined)
  }
  getErrors() {
    const errors = this._getParsedCells()
      .map(check => check.getErrorIfAny())
      .filter(i => i)
    const firstWord = this.getFirstWord()
    if (this.getDefinition().has(GrammarConstants.single))
      this.getParent()
        .findNodes(firstWord)
        .forEach((node, index) => {
          if (index) errors.push(new NodeTypeUsedMultipleTimesError(node))
        })
    return this._getRequiredNodeErrors(errors)
  }
  _getParsedCells() {
    return this.getDefinition()
      .getCellParser()
      .getCellArray(this)
  }
  // todo: just make a fn that computes proper spacing and then is given a node to print
  getLineCellTypes() {
    return this._getParsedCells()
      .map(slot => slot.getCellTypeId())
      .join(" ")
  }
  getLineCellPreludeTypes() {
    return this._getParsedCells()
      .map(slot => {
        const def = slot._getCellTypeDefinition()
        //todo: cleanup
        return def ? def._getPreludeKindId() : PreludeCellTypeIds.anyCell
      })
      .join(" ")
  }
  getLineHighlightScopes(defaultScope = "source") {
    return this._getParsedCells()
      .map(slot => slot.getHighlightScope() || defaultScope)
      .join(" ")
  }
  _getCompiledIndentation() {
    const indentCharacter = this.getDefinition()._getCompilerObject()[GrammarConstantsCompiler.indentCharacter]
    const indent = this.getIndentation()
    return indentCharacter !== undefined ? indentCharacter.repeat(indent.length) : indent
  }
  _getFields() {
    // fields are like cells
    const fields = {}
    this.forEach(node => {
      const def = node.getDefinition()
      if (def.isRequired() || def.has(GrammarConstants.single)) fields[node.getWord(0)] = node.getContent()
    })
    return fields
  }
  _getCompiledLine() {
    const compiler = this.getDefinition()._getCompilerObject()
    const catchAllCellDelimiter = compiler[GrammarConstantsCompiler.catchAllCellDelimiter]
    const str = compiler[GrammarConstantsCompiler.stringTemplate]
    return str !== undefined ? TreeUtils.formatStr(str, catchAllCellDelimiter, Object.assign(this._getFields(), this.cells)) : this.getLine()
  }
  compile() {
    if (this.isRoot()) return super.compile()
    const def = this.getDefinition()
    if (def.isTerminalNodeType()) return this._getCompiledIndentation() + this._getCompiledLine()
    const compiler = def._getCompilerObject()
    const openChildrenString = compiler[GrammarConstantsCompiler.openChildren] || ""
    const closeChildrenString = compiler[GrammarConstantsCompiler.closeChildren] || ""
    const childJoinCharacter = compiler[GrammarConstantsCompiler.joinChildrenWith] || "\n"
    const compiledLine = this._getCompiledLine()
    const indent = this._getCompiledIndentation()
    const compiledChildren = this.map(child => child.compile()).join(childJoinCharacter)
    return `${indent}${compiledLine}${openChildrenString}
${compiledChildren}
${indent}${closeChildrenString}`
  }
  // todo: remove
  get cells() {
    const cells = {}
    this._getParsedCells().forEach(cell => {
      const cellTypeId = cell.getCellTypeId()
      if (!cell.isCatchAll()) cells[cellTypeId] = cell.getParsed()
      else {
        if (!cells[cellTypeId]) cells[cellTypeId] = []
        cells[cellTypeId].push(cell.getParsed())
      }
    })
    return cells
  }
}
class TypedWord {
  constructor(node, cellIndex, type) {
    this._node = node
    this._cellIndex = cellIndex
    this._type = type
  }
  replace(newWord) {
    this._node.setWord(this._cellIndex, newWord)
  }
  get word() {
    return this._node.getWord(this._cellIndex)
  }
  get type() {
    return this._type
  }
  toString() {
    return this.word + ":" + this.type
  }
}
class BlobNode extends GrammarBackedNode {
  createParser() {
    return new TreeNode.Parser(BlobNode, {})
  }
  getErrors() {
    return []
  }
}
// todo: can we remove this? hard to extend.
class UnknownNodeTypeNode extends GrammarBackedNode {
  createParser() {
    return new TreeNode.Parser(UnknownNodeTypeNode, {})
  }
  getErrors() {
    return [new UnknownNodeTypeError(this)]
  }
}
/*
A cell contains a word but also the type information for that word.
*/
class AbstractGrammarBackedCell {
  constructor(node, index, typeDef, cellTypeId, isCatchAll, nodeTypeDef) {
    this._typeDef = typeDef
    this._node = node
    this._isCatchAll = isCatchAll
    this._index = index
    this._cellTypeId = cellTypeId
    this._nodeTypeDefinition = nodeTypeDef
  }
  getWord() {
    return this._node.getWord(this._index)
  }
  getCellTypeId() {
    return this._cellTypeId
  }
  getNode() {
    return this._node
  }
  getCellIndex() {
    return this._index
  }
  isCatchAll() {
    return this._isCatchAll
  }
  getHighlightScope() {
    const definition = this._getCellTypeDefinition()
    if (definition) return definition.getHighlightScope() // todo: why the undefined?
  }
  getAutoCompleteWords(partialWord = "") {
    const cellDef = this._getCellTypeDefinition()
    let words = cellDef ? cellDef._getAutocompleteWordOptions(this.getNode().getRootNode()) : []
    const runTimeOptions = this.getNode().getRunTimeEnumOptions(this)
    if (runTimeOptions) words = runTimeOptions.concat(words)
    if (partialWord) words = words.filter(word => word.includes(partialWord))
    return words.map(word => {
      return {
        text: word,
        displayText: word
      }
    })
  }
  synthesizeCell() {
    // todo: cleanup
    const cellDef = this._getCellTypeDefinition()
    const enumOptions = cellDef._getFromExtended(GrammarConstants.enum)
    return enumOptions ? TreeUtils.getRandomString(1, enumOptions.split(" ")) : this._synthesizeCell()
  }
  _getCellTypeDefinition() {
    return this._typeDef
  }
  _getFullLine() {
    return this.getNode().getLine()
  }
  _getErrorContext() {
    return this._getFullLine().split(" ")[0] // todo: WordBreakSymbol
  }
  isValid() {
    const runTimeOptions = this.getNode().getRunTimeEnumOptions(this)
    const word = this.getWord()
    if (runTimeOptions) return runTimeOptions.includes(word)
    return this._getCellTypeDefinition().isValid(word, this.getNode().getRootNode()) && this._isValid()
  }
  getErrorIfAny() {
    const word = this.getWord()
    if (word !== undefined && this.isValid()) return undefined
    // todo: refactor invalidwordError. We want better error messages.
    return word === undefined || word === "" ? new MissingWordError(this) : new InvalidWordError(this)
  }
}
AbstractGrammarBackedCell.parserFunctionName = ""
class GrammarIntCell extends AbstractGrammarBackedCell {
  _isValid() {
    const word = this.getWord()
    const num = parseInt(word)
    if (isNaN(num)) return false
    return num.toString() === word
  }
  _synthesizeCell() {
    return TreeUtils.getRandomString(2, "123456789".split(""))
  }
  getRegexString() {
    return "-?[0-9]+"
  }
  getParsed() {
    const word = this.getWord()
    return parseInt(word)
  }
}
GrammarIntCell.defaultHighlightScope = "constant.numeric.integer"
GrammarIntCell.parserFunctionName = "parseInt"
class GrammarBitCell extends AbstractGrammarBackedCell {
  _isValid() {
    const word = this.getWord()
    return word === "0" || word === "1"
  }
  _synthesizeCell() {
    return TreeUtils.getRandomString(1, "01".split(""))
  }
  getRegexString() {
    return "[01]"
  }
  getParsed() {
    const word = this.getWord()
    return !!parseInt(word)
  }
}
GrammarBitCell.defaultHighlightScope = "constant.numeric"
class GrammarFloatCell extends AbstractGrammarBackedCell {
  _isValid() {
    const word = this.getWord()
    const num = parseFloat(word)
    return !isNaN(num) && /^-?\d*(\.\d+)?$/.test(word)
  }
  _synthesizeCell() {
    return TreeUtils.getRandomString(2, "123456789".split("")) + "." + TreeUtils.getRandomString(2, "0123456789".split(""))
  }
  getRegexString() {
    return "-?d*(.d+)?"
  }
  getParsed() {
    const word = this.getWord()
    return parseFloat(word)
  }
}
GrammarFloatCell.defaultHighlightScope = "constant.numeric.float"
GrammarFloatCell.parserFunctionName = "parseFloat"
// ErrorCellType => grammar asks for a '' cell type here but the grammar does not specify a '' cell type. (todo: bring in didyoumean?)
class GrammarBoolCell extends AbstractGrammarBackedCell {
  constructor() {
    super(...arguments)
    this._trues = new Set(["1", "true", "t", "yes"])
    this._falses = new Set(["0", "false", "f", "no"])
  }
  _isValid() {
    const word = this.getWord()
    const str = word.toLowerCase()
    return this._trues.has(str) || this._falses.has(str)
  }
  _synthesizeCell() {
    return TreeUtils.getRandomString(1, ["1", "true", "t", "yes", "0", "false", "f", "no"])
  }
  _getOptions() {
    return Array.from(this._trues).concat(Array.from(this._falses))
  }
  getRegexString() {
    return "(?:" + this._getOptions().join("|") + ")"
  }
  getParsed() {
    const word = this.getWord()
    return this._trues.has(word.toLowerCase())
  }
}
GrammarBoolCell.defaultHighlightScope = "constant.numeric"
class GrammarAnyCell extends AbstractGrammarBackedCell {
  _isValid() {
    return true
  }
  _synthesizeCell() {
    const examples = this._getCellTypeDefinition()._getFromExtended(GrammarConstants.examples)
    if (examples) return TreeUtils.getRandomString(1, examples.split(" "))
    return this._nodeTypeDefinition.getNodeTypeIdFromDefinition() + "-" + this.constructor.name
  }
  getRegexString() {
    return "[^ ]+"
  }
  getParsed() {
    return this.getWord()
  }
}
class GrammarKeywordCell extends GrammarAnyCell {
  _synthesizeCell() {
    return this._nodeTypeDefinition._getCruxIfAny()
  }
}
GrammarKeywordCell.defaultHighlightScope = "keyword"
class GrammarExtraWordCellTypeCell extends AbstractGrammarBackedCell {
  _isValid() {
    return false
  }
  synthesizeCell() {
    throw new Error(`Trying to synthesize a GrammarExtraWordCellTypeCell`)
    return this._synthesizeCell()
  }
  _synthesizeCell() {
    return "extraWord" // should never occur?
  }
  getParsed() {
    return this.getWord()
  }
  getErrorIfAny() {
    return new ExtraWordError(this)
  }
}
class GrammarUnknownCellTypeCell extends AbstractGrammarBackedCell {
  _isValid() {
    return false
  }
  synthesizeCell() {
    throw new Error(`Trying to synthesize an GrammarUnknownCellTypeCell`)
    return this._synthesizeCell()
  }
  _synthesizeCell() {
    return "extraWord" // should never occur?
  }
  getParsed() {
    return this.getWord()
  }
  getErrorIfAny() {
    return new UnknownCellTypeError(this)
  }
}
class AbstractTreeError {
  constructor(node) {
    this._node = node
  }
  getLineIndex() {
    return this.getLineNumber() - 1
  }
  getLineNumber() {
    return this.getNode()._getLineNumber() // todo: handle sourcemaps
  }
  isCursorOnWord(lineIndex, characterIndex) {
    return lineIndex === this.getLineIndex() && this._doesCharacterIndexFallOnWord(characterIndex)
  }
  _doesCharacterIndexFallOnWord(characterIndex) {
    return this.getCellIndex() === this.getNode().getWordIndexAtCharacterIndex(characterIndex)
  }
  // convenience method. may be removed.
  isBlankLineError() {
    return false
  }
  // convenience method. may be removed.
  isMissingWordError() {
    return false
  }
  getIndent() {
    return this.getNode().getIndentation()
  }
  getCodeMirrorLineWidgetElement(onApplySuggestionCallBack = () => {}) {
    const suggestion = this.getSuggestionMessage()
    if (this.isMissingWordError()) return this._getCodeMirrorLineWidgetElementCellTypeHints()
    if (suggestion) return this._getCodeMirrorLineWidgetElementWithSuggestion(onApplySuggestionCallBack, suggestion)
    return this._getCodeMirrorLineWidgetElementWithoutSuggestion()
  }
  getNodeTypeId() {
    return this.getNode()
      .getDefinition()
      .getNodeTypeIdFromDefinition()
  }
  _getCodeMirrorLineWidgetElementCellTypeHints() {
    const el = document.createElement("div")
    el.appendChild(
      document.createTextNode(
        this.getIndent() +
          this.getNode()
            .getDefinition()
            .getLineHints()
      )
    )
    el.className = "LintCellTypeHints"
    return el
  }
  _getCodeMirrorLineWidgetElementWithoutSuggestion() {
    const el = document.createElement("div")
    el.appendChild(document.createTextNode(this.getIndent() + this.getMessage()))
    el.className = "LintError"
    return el
  }
  _getCodeMirrorLineWidgetElementWithSuggestion(onApplySuggestionCallBack, suggestion) {
    const el = document.createElement("div")
    el.appendChild(document.createTextNode(this.getIndent() + `${this.getErrorTypeName()}. Suggestion: ${suggestion}`))
    el.className = "LintErrorWithSuggestion"
    el.onclick = () => {
      this.applySuggestion()
      onApplySuggestionCallBack()
    }
    return el
  }
  getLine() {
    return this.getNode().getLine()
  }
  getExtension() {
    return this.getNode()
      .getGrammarProgram()
      .getExtensionName()
  }
  getNode() {
    return this._node
  }
  getErrorTypeName() {
    return this.constructor.name.replace("Error", "")
  }
  getCellIndex() {
    return 0
  }
  toObject() {
    return {
      type: this.getErrorTypeName(),
      line: this.getLineNumber(),
      cell: this.getCellIndex(),
      suggestion: this.getSuggestionMessage(),
      path: this.getNode().getFirstWordPath(),
      message: this.getMessage()
    }
  }
  hasSuggestion() {
    return this.getSuggestionMessage() !== ""
  }
  getSuggestionMessage() {
    return ""
  }
  toString() {
    return this.getMessage()
  }
  applySuggestion() {}
  getMessage() {
    return `${this.getErrorTypeName()} at line ${this.getLineNumber()} cell ${this.getCellIndex()}.`
  }
}
class AbstractCellError extends AbstractTreeError {
  constructor(cell) {
    super(cell.getNode())
    this._cell = cell
  }
  getCell() {
    return this._cell
  }
  getCellIndex() {
    return this._cell.getCellIndex()
  }
  _getWordSuggestion() {
    return TreeUtils.didYouMean(
      this.getCell().getWord(),
      this.getCell()
        .getAutoCompleteWords()
        .map(option => option.text)
    )
  }
}
class UnknownNodeTypeError extends AbstractTreeError {
  getMessage() {
    const node = this.getNode()
    const parentNode = node.getParent()
    const options = parentNode._getParser().getFirstWordOptions()
    return super.getMessage() + ` Invalid nodeType "${node.getFirstWord()}". Valid nodeTypes are: ${TreeUtils._listToEnglishText(options, 7)}.`
  }
  _getWordSuggestion() {
    const node = this.getNode()
    const parentNode = node.getParent()
    return TreeUtils.didYouMean(node.getFirstWord(), parentNode.getAutocompleteResults("", 0).map(option => option.text))
  }
  getSuggestionMessage() {
    const suggestion = this._getWordSuggestion()
    const node = this.getNode()
    if (suggestion) return `Change "${node.getFirstWord()}" to "${suggestion}"`
    return ""
  }
  applySuggestion() {
    const suggestion = this._getWordSuggestion()
    if (suggestion) this.getNode().setWord(this.getCellIndex(), suggestion)
    return this
  }
}
class BlankLineError extends UnknownNodeTypeError {
  getMessage() {
    return super.getMessage() + ` Line: "${this.getNode().getLine()}". Blank lines are errors.`
  }
  // convenience method
  isBlankLineError() {
    return true
  }
  getSuggestionMessage() {
    return `Delete line ${this.getLineNumber()}`
  }
  applySuggestion() {
    this.getNode().destroy()
    return this
  }
}
class MissingRequiredNodeTypeError extends AbstractTreeError {
  constructor(node, missingNodeTypeId) {
    super(node)
    this._missingNodeTypeId = missingNodeTypeId
  }
  getMessage() {
    return super.getMessage() + ` A "${this._missingNodeTypeId}" is required.`
  }
}
class NodeTypeUsedMultipleTimesError extends AbstractTreeError {
  getMessage() {
    return super.getMessage() + ` Multiple "${this.getNode().getFirstWord()}" found.`
  }
  getSuggestionMessage() {
    return `Delete line ${this.getLineNumber()}`
  }
  applySuggestion() {
    return this.getNode().destroy()
  }
}
class UnknownCellTypeError extends AbstractCellError {
  getMessage() {
    return super.getMessage() + ` No cellType "${this.getCell().getCellTypeId()}" found. Language grammar for "${this.getExtension()}" may need to be fixed.`
  }
}
class InvalidWordError extends AbstractCellError {
  getMessage() {
    return super.getMessage() + ` "${this.getCell().getWord()}" does not fit in cellType "${this.getCell().getCellTypeId()}".`
  }
  getSuggestionMessage() {
    const suggestion = this._getWordSuggestion()
    if (suggestion) return `Change "${this.getCell().getWord()}" to "${suggestion}"`
    return ""
  }
  applySuggestion() {
    const suggestion = this._getWordSuggestion()
    if (suggestion) this.getNode().setWord(this.getCellIndex(), suggestion)
    return this
  }
}
class ExtraWordError extends AbstractCellError {
  getMessage() {
    return super.getMessage() + ` Extra word "${this.getCell().getWord()}" in ${this.getNodeTypeId()}.`
  }
  getSuggestionMessage() {
    return `Delete word "${this.getCell().getWord()}" at cell ${this.getCellIndex()}`
  }
  applySuggestion() {
    return this.getNode().deleteWordAt(this.getCellIndex())
  }
}
class MissingWordError extends AbstractCellError {
  // todo: autocomplete suggestion
  getMessage() {
    return super.getMessage() + ` Missing word for cell "${this.getCell().getCellTypeId()}".`
  }
  isMissingWordError() {
    return true
  }
}
// todo: add standard types, enum types, from disk types
class AbstractGrammarWordTestNode extends TreeNode {}
class GrammarRegexTestNode extends AbstractGrammarWordTestNode {
  isValid(str) {
    if (!this._regex) this._regex = new RegExp("^" + this.getContent() + "$")
    return !!str.match(this._regex)
  }
}
class GrammarReservedWordsTestNode extends AbstractGrammarWordTestNode {
  isValid(str) {
    if (!this._set) this._set = new Set(this.getContent().split(" "))
    return !this._set.has(str)
  }
}
// todo: remove in favor of custom word type constructors
class EnumFromCellTypesTestNode extends AbstractGrammarWordTestNode {
  _getEnumFromCellTypes(programRootNode) {
    const cellTypeIds = this.getWordsFrom(1)
    const enumGroup = cellTypeIds.join(" ")
    // note: hack where we store it on the program. otherwise has global effects.
    if (!programRootNode._enumMaps) programRootNode._enumMaps = {}
    if (programRootNode._enumMaps[enumGroup]) return programRootNode._enumMaps[enumGroup]
    const wordIndex = 1
    const map = {}
    const cellTypeMap = {}
    cellTypeIds.forEach(typeId => (cellTypeMap[typeId] = true))
    programRootNode
      .getAllTypedWords()
      .filter(typedWord => cellTypeMap[typedWord.type])
      .forEach(typedWord => {
        map[typedWord.word] = true
      })
    programRootNode._enumMaps[enumGroup] = map
    return map
  }
  // todo: remove
  isValid(str, programRootNode) {
    return this._getEnumFromCellTypes(programRootNode)[str] === true
  }
}
class GrammarEnumTestNode extends AbstractGrammarWordTestNode {
  isValid(str) {
    // enum c c++ java
    return !!this.getOptions()[str]
  }
  getOptions() {
    if (!this._map) this._map = TreeUtils.arrayToMap(this.getWordsFrom(1))
    return this._map
  }
}
class cellTypeDefinitionNode extends AbstractExtendibleTreeNode {
  createParser() {
    const types = {}
    types[GrammarConstants.regex] = GrammarRegexTestNode
    types[GrammarConstants.reservedWords] = GrammarReservedWordsTestNode
    types[GrammarConstants.enumFromCellTypes] = EnumFromCellTypesTestNode
    types[GrammarConstants.enum] = GrammarEnumTestNode
    types[GrammarConstants.highlightScope] = TreeNode
    types[GrammarConstants.todoComment] = TreeNode
    types[GrammarConstants.examples] = TreeNode
    types[GrammarConstants.description] = TreeNode
    types[GrammarConstants.extends] = TreeNode
    return new TreeNode.Parser(undefined, types)
  }
  _getId() {
    return this.getWord(0)
  }
  _getIdToNodeMap() {
    return this.getParent().getCellTypeDefinitions()
  }
  getGetter(wordIndex) {
    const wordToNativeJavascriptTypeParser = this.getCellConstructor().parserFunctionName
    return `get ${this.getCellTypeId()}() {
      return ${wordToNativeJavascriptTypeParser ? wordToNativeJavascriptTypeParser + `(this.getWord(${wordIndex}))` : `this.getWord(${wordIndex})`}
    }`
  }
  getCatchAllGetter(wordIndex) {
    const wordToNativeJavascriptTypeParser = this.getCellConstructor().parserFunctionName
    return `get ${this.getCellTypeId()}() {
      return ${wordToNativeJavascriptTypeParser ? `this.getWordsFrom(${wordIndex}).map(val => ${wordToNativeJavascriptTypeParser}(val))` : `this.getWordsFrom(${wordIndex})`}
    }`
  }
  // `this.getWordsFrom(${requireds.length + 1})`
  // todo: cleanup typings. todo: remove this hidden logic. have a "baseType" property?
  getCellConstructor() {
    return this._getPreludeKind() || GrammarAnyCell
  }
  _getPreludeKind() {
    return PreludeKinds[this.getWord(0)] || PreludeKinds[this._getExtendedCellTypeId()]
  }
  _getPreludeKindId() {
    if (PreludeKinds[this.getWord(0)]) return this.getWord(0)
    else if (PreludeKinds[this._getExtendedCellTypeId()]) return this._getExtendedCellTypeId()
    return PreludeCellTypeIds.anyCell
  }
  _getExtendedCellTypeId() {
    const arr = this._getAncestorsArray()
    return arr[arr.length - 1]._getId()
  }
  getHighlightScope() {
    const hs = this._getFromExtended(GrammarConstants.highlightScope)
    if (hs) return hs
    const preludeKind = this._getPreludeKind()
    if (preludeKind) return preludeKind.defaultHighlightScope
  }
  _getEnumOptions() {
    const enumNode = this._getNodeFromExtended(GrammarConstants.enum)
    if (!enumNode) return undefined
    // we sort by longest first to capture longest match first. todo: add test
    const options = Object.keys(enumNode.getNode(GrammarConstants.enum).getOptions())
    options.sort((a, b) => b.length - a.length)
    return options
  }
  _getEnumFromCellTypeOptions(program) {
    const node = this._getNodeFromExtended(GrammarConstants.enumFromCellTypes)
    return node ? Object.keys(node.getNode(GrammarConstants.enumFromCellTypes)._getEnumFromCellTypes(program)) : undefined
  }
  _getAutocompleteWordOptions(program) {
    return this._getEnumOptions() || this._getEnumFromCellTypeOptions(program) || []
  }
  getRegexString() {
    // todo: enum
    const enumOptions = this._getEnumOptions()
    return this._getFromExtended(GrammarConstants.regex) || (enumOptions ? "(?:" + enumOptions.join("|") + ")" : "[^ ]*")
  }
  isValid(str, programRootNode) {
    return this._getChildrenByNodeConstructorInExtended(AbstractGrammarWordTestNode).every(node => node.isValid(str, programRootNode))
  }
  getCellTypeId() {
    return this.getWord(0)
  }
}
class AbstractCellParser {
  constructor(definition) {
    this._definition = definition
  }
  getCatchAllCellTypeId() {
    return this._definition._getFromExtended(GrammarConstants.catchAllCellType)
  }
  // todo: improve layout (use bold?)
  getLineHints() {
    const catchAllCellTypeId = this.getCatchAllCellTypeId()
    const nodeTypeId = this._definition.get(GrammarConstants.crux) || this._definition._getId() // todo: cleanup
    return `${nodeTypeId}: ${this.getRequiredCellTypeIds().join(" ")}${catchAllCellTypeId ? ` ${catchAllCellTypeId}...` : ""}`
  }
  getRequiredCellTypeIds() {
    const parameters = this._definition._getFromExtended(GrammarConstants.cells)
    return parameters ? parameters.split(" ") : []
  }
  _getCellTypeId(cellIndex, requiredCellTypeIds, totalWordCount) {
    return requiredCellTypeIds[cellIndex]
  }
  _isCatchAllCell(cellIndex, numberOfRequiredCells, totalWordCount) {
    return cellIndex >= numberOfRequiredCells
  }
  getCellArray(node = undefined) {
    const wordCount = node ? node.getWords().length : 0
    const def = this._definition
    const grammarProgram = def.getLanguageDefinitionProgram()
    const requiredCellTypeIds = this.getRequiredCellTypeIds()
    const numberOfRequiredCells = requiredCellTypeIds.length
    const actualWordCountOrRequiredCellCount = Math.max(wordCount, numberOfRequiredCells)
    const cells = []
    // A for loop instead of map because "numberOfCellsToFill" can be longer than words.length
    for (let cellIndex = 0; cellIndex < actualWordCountOrRequiredCellCount; cellIndex++) {
      const isCatchAll = this._isCatchAllCell(cellIndex, numberOfRequiredCells, wordCount)
      let cellTypeId = isCatchAll ? this.getCatchAllCellTypeId() : this._getCellTypeId(cellIndex, requiredCellTypeIds, wordCount)
      let cellTypeDefinition = grammarProgram.getCellTypeDefinitionById(cellTypeId)
      let cellConstructor
      if (cellTypeDefinition) cellConstructor = cellTypeDefinition.getCellConstructor()
      else if (cellTypeId) cellConstructor = GrammarUnknownCellTypeCell
      else {
        cellConstructor = GrammarExtraWordCellTypeCell
        cellTypeId = PreludeCellTypeIds.extraWordCell
        cellTypeDefinition = grammarProgram.getCellTypeDefinitionById(cellTypeId)
      }
      cells[cellIndex] = new cellConstructor(node, cellIndex, cellTypeDefinition, cellTypeId, isCatchAll, def)
    }
    return cells
  }
}
class PrefixCellParser extends AbstractCellParser {}
class PostfixCellParser extends AbstractCellParser {
  _isCatchAllCell(cellIndex, numberOfRequiredCells, totalWordCount) {
    return cellIndex < totalWordCount - numberOfRequiredCells
  }
  _getCellTypeId(cellIndex, requiredCellTypeIds, totalWordCount) {
    const catchAllWordCount = Math.max(totalWordCount - requiredCellTypeIds.length, 0)
    return requiredCellTypeIds[cellIndex - catchAllWordCount]
  }
}
class OmnifixCellParser extends AbstractCellParser {
  getCellArray(node = undefined) {
    const cells = []
    const def = this._definition
    const program = node ? node.getRootNode() : undefined
    const grammarProgram = def.getLanguageDefinitionProgram()
    const words = node ? node.getWords() : []
    const requiredCellTypeDefs = this.getRequiredCellTypeIds().map(cellTypeId => grammarProgram.getCellTypeDefinitionById(cellTypeId))
    const catchAllCellTypeId = this.getCatchAllCellTypeId()
    const catchAllCellTypeDef = catchAllCellTypeId && grammarProgram.getCellTypeDefinitionById(catchAllCellTypeId)
    words.forEach((word, wordIndex) => {
      let cellConstructor
      for (let index = 0; index < requiredCellTypeDefs.length; index++) {
        const cellTypeDefinition = requiredCellTypeDefs[index]
        if (cellTypeDefinition.isValid(word, program)) {
          // todo: cleanup cellIndex/wordIndex stuff
          cellConstructor = cellTypeDefinition.getCellConstructor()
          cells.push(new cellConstructor(node, wordIndex, cellTypeDefinition, cellTypeDefinition._getId(), false, def))
          requiredCellTypeDefs.splice(index, 1)
          return true
        }
      }
      if (catchAllCellTypeDef && catchAllCellTypeDef.isValid(word, program)) {
        cellConstructor = catchAllCellTypeDef.getCellConstructor()
        cells.push(new cellConstructor(node, wordIndex, catchAllCellTypeDef, catchAllCellTypeId, true, def))
        return true
      }
      cells.push(new GrammarUnknownCellTypeCell(node, wordIndex, undefined, undefined, false, def))
    })
    const wordCount = words.length
    requiredCellTypeDefs.forEach((cellTypeDef, index) => {
      let cellConstructor = cellTypeDef.getCellConstructor()
      cells.push(new cellConstructor(node, wordCount + index, cellTypeDef, cellTypeDef._getId(), false, def))
    })
    return cells
  }
}
class GrammarExampleNode extends TreeNode {}
class GrammarCompilerNode extends TreeNode {
  createParser() {
    const types = [
      GrammarConstantsCompiler.stringTemplate,
      GrammarConstantsCompiler.indentCharacter,
      GrammarConstantsCompiler.catchAllCellDelimiter,
      GrammarConstantsCompiler.joinChildrenWith,
      GrammarConstantsCompiler.openChildren,
      GrammarConstantsCompiler.closeChildren
    ]
    const map = {}
    types.forEach(type => {
      map[type] = TreeNode
    })
    return new TreeNode.Parser(undefined, map)
  }
}
class GrammarNodeTypeConstant extends TreeNode {
  getGetter() {
    return `get ${this.getIdentifier()}() { return ${this.getConstantValueAsJsText()} }`
  }
  getIdentifier() {
    return this.getWord(1)
  }
  getConstantValueAsJsText() {
    const words = this.getWordsFrom(2)
    return words.length > 1 ? `[${words.join(",")}]` : words[0]
  }
  getConstantValue() {
    return JSON.parse(this.getConstantValueAsJsText())
  }
}
class GrammarNodeTypeConstantInt extends GrammarNodeTypeConstant {}
class GrammarNodeTypeConstantString extends GrammarNodeTypeConstant {
  getConstantValueAsJsText() {
    return "`" + TreeUtils.escapeBackTicks(this.getConstantValue()) + "`"
  }
  getConstantValue() {
    return this.length ? this.childrenToString() : this.getWordsFrom(2).join(" ")
  }
}
class GrammarNodeTypeConstantFloat extends GrammarNodeTypeConstant {}
class GrammarNodeTypeConstantBoolean extends GrammarNodeTypeConstant {}
class AbstractGrammarDefinitionNode extends AbstractExtendibleTreeNode {
  createParser() {
    // todo: some of these should just be on nonRootNodes
    const types = [
      GrammarConstants.frequency,
      GrammarConstants.inScope,
      GrammarConstants.cells,
      GrammarConstants.extends,
      GrammarConstants.description,
      GrammarConstants.catchAllNodeType,
      GrammarConstants.catchAllCellType,
      GrammarConstants.cellParser,
      GrammarConstants.extensions,
      GrammarConstants.version,
      GrammarConstants.tags,
      GrammarConstants.crux,
      GrammarConstants.pattern,
      GrammarConstants.baseNodeType,
      GrammarConstants.required,
      GrammarConstants.root,
      GrammarConstants._extendsJsClass,
      GrammarConstants._rootNodeJsHeader,
      GrammarConstants.javascript,
      GrammarConstants.compilesTo,
      GrammarConstants.abstract,
      GrammarConstants.javascript,
      GrammarConstants.single,
      GrammarConstants.todoComment
    ]
    const map = {}
    types.forEach(type => {
      map[type] = TreeNode
    })
    map[GrammarConstantsConstantTypes.boolean] = GrammarNodeTypeConstantBoolean
    map[GrammarConstantsConstantTypes.int] = GrammarNodeTypeConstantInt
    map[GrammarConstantsConstantTypes.string] = GrammarNodeTypeConstantString
    map[GrammarConstantsConstantTypes.float] = GrammarNodeTypeConstantFloat
    map[GrammarConstants.compilerNodeType] = GrammarCompilerNode
    map[GrammarConstants.example] = GrammarExampleNode
    return new TreeNode.Parser(undefined, map)
  }
  _getId() {
    return this.getWord(0)
  }
  getConstantsObject() {
    const obj = this._getUniqueConstantNodes()
    Object.keys(obj).forEach(key => {
      obj[key] = obj[key].getConstantValue()
    })
    return obj
  }
  _getUniqueConstantNodes(extended = true) {
    const obj = {}
    const items = extended ? this._getChildrenByNodeConstructorInExtended(GrammarNodeTypeConstant) : this.getChildrenByNodeConstructor(GrammarNodeTypeConstant)
    items.reverse() // Last definition wins.
    items.forEach(node => {
      obj[node.getIdentifier()] = node
    })
    return obj
  }
  getExamples() {
    return this._getChildrenByNodeConstructorInExtended(GrammarExampleNode)
  }
  getNodeTypeIdFromDefinition() {
    return this.getWord(0)
  }
  // todo: remove? just reused nodeTypeId
  _getGeneratedClassName() {
    return this.getNodeTypeIdFromDefinition()
  }
  _hasValidNodeTypeId() {
    return !!this._getGeneratedClassName()
  }
  _isAbstract() {
    return this.has(GrammarConstants.abstract)
  }
  _getConcreteDescendantDefinitions() {
    const defs = this._getProgramNodeTypeDefinitionCache()
    const id = this._getId()
    return Object.values(defs).filter(def => {
      return def._doesExtend(id) && !def._isAbstract()
    })
  }
  _getConstructorDefinedInGrammar() {
    if (!this._cache_definedNodeConstructor) this._cache_definedNodeConstructor = this.getLanguageDefinitionProgram()._getCompiledLoadedNodeTypes()[this.getNodeTypeIdFromDefinition()]
    return this._cache_definedNodeConstructor
  }
  _getCruxIfAny() {
    return this.get(GrammarConstants.crux)
  }
  _getRegexMatch() {
    return this.get(GrammarConstants.pattern)
  }
  _getFirstCellEnumOptions() {
    const firstCellDef = this._getCellTypeDefs()[0]
    return firstCellDef ? firstCellDef._getEnumOptions() : undefined
  }
  getLanguageDefinitionProgram() {
    return this.getParent()
  }
  _getCustomJavascriptMethods() {
    const hasJsCode = this.has(GrammarConstants.javascript)
    return hasJsCode ? this.getNode(GrammarConstants.javascript).childrenToString() : ""
  }
  getFirstWordMapWithDefinitions() {
    if (!this._cache_firstWordToNodeDefMap) this._cache_firstWordToNodeDefMap = this._createParserInfo(this._getInScopeNodeTypeIds()).firstWordMap
    return this._cache_firstWordToNodeDefMap
  }
  // todo: remove
  getRunTimeFirstWordsInScope() {
    return this._getParser().getFirstWordOptions()
  }
  _getCellTypeDefs() {
    const grammarProgram = this.getLanguageDefinitionProgram()
    const requiredCells = this.get(GrammarConstants.cells)
    if (!requiredCells) return []
    return requiredCells.split(" ").map(cellTypeId => {
      const cellTypeDef = grammarProgram.getCellTypeDefinitionById(cellTypeId)
      if (!cellTypeDef) throw new Error(`No cellType "${cellTypeId}" found`)
      return cellTypeDef
    })
  }
  // todo: what happens when you have a cell getter and constant with same name?
  _getCellGettersAndNodeTypeConstants() {
    // todo: add cellType parsings
    const grammarProgram = this.getLanguageDefinitionProgram()
    const getters = this._getCellTypeDefs().map((cellTypeDef, index) => cellTypeDef.getGetter(index))
    const catchAllCellTypeId = this.get(GrammarConstants.catchAllCellType)
    if (catchAllCellTypeId) getters.push(grammarProgram.getCellTypeDefinitionById(catchAllCellTypeId).getCatchAllGetter(getters.length))
    // Constants
    Object.values(this._getUniqueConstantNodes(false)).forEach(node => {
      getters.push(node.getGetter())
    })
    return getters.join("\n")
  }
  _createParserInfo(nodeTypeIdsInScope) {
    const result = {
      firstWordMap: {},
      regexTests: []
    }
    if (!nodeTypeIdsInScope.length) return result
    const allProgramNodeTypeDefinitionsMap = this._getProgramNodeTypeDefinitionCache()
    Object.keys(allProgramNodeTypeDefinitionsMap)
      .filter(nodeTypeId => allProgramNodeTypeDefinitionsMap[nodeTypeId].isOrExtendsANodeTypeInScope(nodeTypeIdsInScope))
      .filter(nodeTypeId => !allProgramNodeTypeDefinitionsMap[nodeTypeId]._isAbstract())
      .forEach(nodeTypeId => {
        const def = allProgramNodeTypeDefinitionsMap[nodeTypeId]
        const regex = def._getRegexMatch()
        const crux = def._getCruxIfAny()
        const enumOptions = def._getFirstCellEnumOptions()
        if (regex) result.regexTests.push({ regex: regex, nodeConstructor: def.getNodeTypeIdFromDefinition() })
        else if (crux) result.firstWordMap[crux] = def
        else if (enumOptions) {
          enumOptions.forEach(option => {
            result.firstWordMap[option] = def
          })
        }
      })
    return result
  }
  getTopNodeTypeDefinitions() {
    const arr = Object.values(this.getFirstWordMapWithDefinitions())
    arr.sort(TreeUtils.makeSortByFn(definition => definition.getFrequency()))
    arr.reverse()
    return arr
  }
  _getMyInScopeNodeTypeIds() {
    const nodeTypesNode = this.getNode(GrammarConstants.inScope)
    return nodeTypesNode ? nodeTypesNode.getWordsFrom(1) : []
  }
  _getInScopeNodeTypeIds() {
    // todo: allow multiple of these if we allow mixins?
    const ids = this._getMyInScopeNodeTypeIds()
    const parentDef = this._getExtendedParent()
    return parentDef ? ids.concat(parentDef._getInScopeNodeTypeIds()) : ids
  }
  isRequired() {
    return this._hasFromExtended(GrammarConstants.required)
  }
  getNodeTypeDefinitionByNodeTypeId(nodeTypeId) {
    // todo: return catch all?
    const def = this._getProgramNodeTypeDefinitionCache()[nodeTypeId]
    if (def) return def
    // todo: cleanup
    this.getLanguageDefinitionProgram()._addDefaultCatchAllBlobNode()
    return this._getProgramNodeTypeDefinitionCache()[nodeTypeId]
  }
  isDefined(nodeTypeId) {
    return !!this._getProgramNodeTypeDefinitionCache()[nodeTypeId]
  }
  _getIdToNodeMap() {
    return this._getProgramNodeTypeDefinitionCache()
  }
  _amIRoot() {
    if (this._cache_isRoot === undefined) this._cache_isRoot = this._getLanguageRootNode() === this
    return this._cache_isRoot
  }
  _getLanguageRootNode() {
    return this.getParent()._getRootNodeTypeDefinitionNode()
  }
  _isErrorNodeType() {
    return this.get(GrammarConstants.baseNodeType) === GrammarConstants.errorNode
  }
  _isBlobNodeType() {
    // Do not check extended classes. Only do once.
    return this.get(GrammarConstants.baseNodeType) === GrammarConstants.blobNode
  }
  _getErrorMethodToJavascript() {
    if (this._isBlobNodeType()) return "getErrors() { return [] }" // Skips parsing child nodes for perf gains.
    if (this._isErrorNodeType()) return "getErrors() { return this._getErrorNodeErrors() }"
    return ""
  }
  _getParserToJavascript() {
    if (this._isBlobNodeType())
      // todo: do we need this?
      return "createParser() { return new jtree.TreeNode.Parser(this._getBlobNodeCatchAllNodeType())}"
    const parserInfo = this._createParserInfo(this._getMyInScopeNodeTypeIds())
    const myFirstWordMap = parserInfo.firstWordMap
    const regexRules = parserInfo.regexTests
    // todo: use constants in first word maps?
    // todo: cache the super extending?
    const firstWords = Object.keys(myFirstWordMap)
    const hasFirstWords = firstWords.length
    const catchAllConstructor = this._getCatchAllNodeConstructorToJavascript()
    if (!hasFirstWords && !catchAllConstructor && !regexRules.length) return ""
    const firstWordsStr = hasFirstWords
      ? `Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {` + firstWords.map(firstWord => `"${firstWord}" : ${myFirstWordMap[firstWord].getNodeTypeIdFromDefinition()}`).join(",\n") + "})"
      : "undefined"
    const regexStr = regexRules.length
      ? `[${regexRules
          .map(rule => {
            return `{regex: /${rule.regex}/, nodeConstructor: ${rule.nodeConstructor}}`
          })
          .join(",")}]`
      : "undefined"
    const catchAllStr = catchAllConstructor ? catchAllConstructor : this._amIRoot() ? `this._getBlobNodeCatchAllNodeType()` : "undefined"
    return `createParser() {
  return new jtree.TreeNode.Parser(${catchAllStr}, ${firstWordsStr}, ${regexStr})
  }`
  }
  _getCatchAllNodeConstructorToJavascript() {
    if (this._isBlobNodeType()) return "this._getBlobNodeCatchAllNodeType()"
    const nodeTypeId = this.get(GrammarConstants.catchAllNodeType)
    if (!nodeTypeId) return ""
    const nodeDef = this.getNodeTypeDefinitionByNodeTypeId(nodeTypeId)
    if (!nodeDef) throw new Error(`No definition found for nodeType id "${nodeTypeId}"`)
    return nodeDef._getGeneratedClassName()
  }
  _nodeDefToJavascriptClass() {
    const components = [this._getParserToJavascript(), this._getErrorMethodToJavascript(), this._getCellGettersAndNodeTypeConstants(), this._getCustomJavascriptMethods()].filter(code => code)
    if (this._amIRoot()) {
      components.push(`getGrammarProgram() {
        if (!this._cachedGrammarProgramRoot)
          this._cachedGrammarProgramRoot = new jtree.GrammarProgram(\`${TreeUtils.escapeBackTicks(
            this.getParent()
              .toString()
              .replace(/\\/g, "\\\\")
          )}\`)
        return this._cachedGrammarProgramRoot
      }`)
      const nodeTypeMap = this.getLanguageDefinitionProgram()
        .getValidConcreteAndAbstractNodeTypeDefinitions()
        .map(def => {
          const id = def.getNodeTypeIdFromDefinition()
          return `"${id}": ${id}`
        })
        .join(",\n")
      components.push(`static getNodeTypeMap() { return {${nodeTypeMap} }}`)
    }
    return `class ${this._getGeneratedClassName()} extends ${this._getExtendsClassName()} {
      ${components.join("\n")}
    }`
  }
  _getExtendsClassName() {
    // todo: this is hopefully a temporary line in place for now for the case where you want your base class to extend something other than another treeclass
    const hardCodedExtend = this.get(GrammarConstants._extendsJsClass)
    if (hardCodedExtend) return hardCodedExtend
    const extendedDef = this._getExtendedParent()
    return extendedDef ? extendedDef._getGeneratedClassName() : "jtree.GrammarBackedNode"
  }
  _getCompilerObject() {
    let obj = {}
    const items = this._getChildrenByNodeConstructorInExtended(GrammarCompilerNode)
    items.reverse() // Last definition wins.
    items.forEach(node => {
      obj = Object.assign(obj, node.toObject()) // todo: what about multiline strings?
    })
    return obj
  }
  // todo: improve layout (use bold?)
  getLineHints() {
    return this.getCellParser().getLineHints()
  }
  isOrExtendsANodeTypeInScope(firstWordsInScope) {
    const chain = this._getNodeTypeInheritanceSet()
    return firstWordsInScope.some(firstWord => chain.has(firstWord))
  }
  isTerminalNodeType() {
    return !this._getFromExtended(GrammarConstants.inScope) && !this._getFromExtended(GrammarConstants.catchAllNodeType)
  }
  _getSublimeMatchLine() {
    const regexMatch = this._getRegexMatch()
    if (regexMatch) return `'${regexMatch}'`
    const cruxMatch = this._getCruxIfAny()
    if (cruxMatch) return `'^ *${TreeUtils.escapeRegExp(cruxMatch)}(?: |$)'`
    const enumOptions = this._getFirstCellEnumOptions()
    if (enumOptions) return `'^ *(${TreeUtils.escapeRegExp(enumOptions.join("|"))})(?: |$)'`
  }
  // todo: refactor. move some parts to cellParser?
  _toSublimeMatchBlock() {
    const defaultHighlightScope = "source"
    const program = this.getLanguageDefinitionProgram()
    const cellParser = this.getCellParser()
    const requiredCellTypeIds = cellParser.getRequiredCellTypeIds()
    const catchAllCellTypeId = cellParser.getCatchAllCellTypeId()
    const firstCellTypeDef = program.getCellTypeDefinitionById(requiredCellTypeIds[0])
    const firstWordHighlightScope = (firstCellTypeDef ? firstCellTypeDef.getHighlightScope() : defaultHighlightScope) + "." + this.getNodeTypeIdFromDefinition()
    const topHalf = ` '${this.getNodeTypeIdFromDefinition()}':
  - match: ${this._getSublimeMatchLine()}
    scope: ${firstWordHighlightScope}`
    if (catchAllCellTypeId) requiredCellTypeIds.push(catchAllCellTypeId)
    if (!requiredCellTypeIds.length) return topHalf
    const captures = requiredCellTypeIds
      .map((cellTypeId, index) => {
        const cellTypeDefinition = program.getCellTypeDefinitionById(cellTypeId) // todo: cleanup
        if (!cellTypeDefinition) throw new Error(`No ${GrammarConstants.cellType} ${cellTypeId} found`) // todo: standardize error/capture error at grammar time
        return `        ${index + 1}: ${(cellTypeDefinition.getHighlightScope() || defaultHighlightScope) + "." + cellTypeDefinition.getCellTypeId()}`
      })
      .join("\n")
    const cellTypesToRegex = cellTypeIds => cellTypeIds.map(cellTypeId => `({{${cellTypeId}}})?`).join(" ?")
    return `${topHalf}
    push:
     - match: ${cellTypesToRegex(requiredCellTypeIds)}
       captures:
${captures}
     - match: $
       pop: true`
  }
  _getNodeTypeInheritanceSet() {
    if (!this._cache_nodeTypeInheritanceSet) this._cache_nodeTypeInheritanceSet = new Set(this.getAncestorNodeTypeIdsArray())
    return this._cache_nodeTypeInheritanceSet
  }
  getAncestorNodeTypeIdsArray() {
    if (!this._cache_ancestorNodeTypeIdsArray) {
      this._cache_ancestorNodeTypeIdsArray = this._getAncestorsArray().map(def => def.getNodeTypeIdFromDefinition())
      this._cache_ancestorNodeTypeIdsArray.reverse()
    }
    return this._cache_ancestorNodeTypeIdsArray
  }
  _getProgramNodeTypeDefinitionCache() {
    return this.getLanguageDefinitionProgram()._getProgramNodeTypeDefinitionCache()
  }
  getDescription() {
    return this._getFromExtended(GrammarConstants.description) || ""
  }
  getFrequency() {
    const val = this._getFromExtended(GrammarConstants.frequency)
    return val ? parseFloat(val) : 0
  }
  _getExtendedNodeTypeId() {
    const ancestorIds = this.getAncestorNodeTypeIdsArray()
    if (ancestorIds.length > 1) return ancestorIds[ancestorIds.length - 2]
  }
  _generateSimulatedLine() {
    // todo: generate simulated data from catch all
    const crux = this._getCruxIfAny()
    return this.getCellParser()
      .getCellArray()
      .map((cell, index) => (!index && crux ? crux : cell.synthesizeCell()))
      .join(" ")
  }
  _shouldSynthesize(def, nodeTypeChain) {
    if (def._isErrorNodeType() || def._isAbstract()) return false
    if (nodeTypeChain.includes(def._getId())) return false
    const tags = def.get(GrammarConstants.tags)
    if (tags && tags.includes("doNotSynthesize")) return false
    return true
  }
  // todo: refactor
  synthesizeNode(nodeCount = 1, indentCount = -1, nodeTypesAlreadySynthesized = []) {
    let inScopeNodeTypeIds = this._getInScopeNodeTypeIds()
    const catchAllNodeTypeId = this._getFromExtended(GrammarConstants.catchAllNodeType)
    if (catchAllNodeTypeId) inScopeNodeTypeIds.push(catchAllNodeTypeId)
    const thisId = this._getId()
    if (!nodeTypesAlreadySynthesized.includes(thisId)) nodeTypesAlreadySynthesized.push(thisId)
    const lines = []
    while (nodeCount) {
      const line = this._generateSimulatedLine()
      if (line) lines.push(" ".repeat(indentCount >= 0 ? indentCount : 0) + line)
      const concreteNodeTypeDefsToSynthesize = []
      inScopeNodeTypeIds
        .filter(nodeTypeId => {
          if (nodeTypesAlreadySynthesized.includes(nodeTypeId)) return false
          return true
        })
        .forEach(nodeTypeId => {
          const def = this.getNodeTypeDefinitionByNodeTypeId(nodeTypeId)
          if (def._isErrorNodeType()) return true
          else if (def._isAbstract()) {
            def._getConcreteDescendantDefinitions().forEach(def => concreteNodeTypeDefsToSynthesize.push(def))
          } else {
            concreteNodeTypeDefsToSynthesize.push(def)
          }
        })
      concreteNodeTypeDefsToSynthesize
        .filter(def => this._shouldSynthesize(def, nodeTypesAlreadySynthesized))
        .forEach(def => {
          const chain = nodeTypesAlreadySynthesized // .slice(0)
          chain.push(def._getId())
          def.synthesizeNode(1, indentCount + 1, chain).forEach(line => {
            lines.push(line)
          })
        })
      nodeCount--
    }
    return lines
  }
  getCellParser() {
    if (!this._cellParser) {
      const cellParsingStrategy = this._getFromExtended(GrammarConstants.cellParser)
      if (cellParsingStrategy === GrammarCellParser.postfix) this._cellParser = new PostfixCellParser(this)
      else if (cellParsingStrategy === GrammarCellParser.omnifix) this._cellParser = new OmnifixCellParser(this)
      else this._cellParser = new PrefixCellParser(this)
    }
    return this._cellParser
  }
}
// todo: remove?
class nodeTypeDefinitionNode extends AbstractGrammarDefinitionNode {}
// GrammarProgram is a constructor that takes a grammar file, and builds a new
// constructor for new language that takes files in that language to execute, compile, etc.
class GrammarProgram extends AbstractGrammarDefinitionNode {
  createParser() {
    const map = {}
    map[GrammarConstants.toolingDirective] = TreeNode
    map[GrammarConstants.todoComment] = TreeNode
    return new TreeNode.Parser(UnknownNodeTypeNode, map, [{ regex: GrammarProgram.nodeTypeFullRegex, nodeConstructor: nodeTypeDefinitionNode }, { regex: GrammarProgram.cellTypeFullRegex, nodeConstructor: cellTypeDefinitionNode }])
  }
  _getCompiledLoadedNodeTypes() {
    if (!this._cache_compiledLoadedNodeTypes) {
      if (this.isNodeJs()) {
        const code = this.toNodeJsJavascript(__dirname + "/../index.js")
        try {
          const rootNode = this._importNodeJsRootNodeTypeConstructor(code)
          this._cache_compiledLoadedNodeTypes = rootNode.getNodeTypeMap()
          if (!this._cache_compiledLoadedNodeTypes) throw new Error(`Failed to getNodeTypeMap`)
        } catch (err) {
          // todo: figure out best error pattern here for debugging
          console.log(err)
          // console.log(`Error in code: `)
          // console.log(new TreeNode(code).toStringWithLineNumbers())
        }
      } else this._cache_compiledLoadedNodeTypes = this._importBrowserRootNodeTypeConstructor(this.toBrowserJavascript(), this.getRootNodeTypeId()).getNodeTypeMap()
    }
    return this._cache_compiledLoadedNodeTypes
  }
  _setDirName(name) {
    this._dirName = name
    return this
  }
  _importNodeJsRootNodeTypeConstructor(code) {
    const vm = require("vm")
    // todo: cleanup up
    try {
      global.jtree = require(__dirname + "/../index.js")
      global.require = require
      global.__dirname = this._dirName
      global.module = {}
      return vm.runInThisContext(code)
    } catch (err) {
      // todo: figure out best error pattern here for debugging
      console.log(`Error in compiled grammar code for language "${this.getGrammarName()}"`)
      // console.log(new TreeNode(code).toStringWithLineNumbers())
      console.log(err)
      throw err
    }
  }
  _importBrowserRootNodeTypeConstructor(code, name) {
    const script = document.createElement("script")
    script.innerHTML = code
    document.head.appendChild(script)
    return window[name]
  }
  // todo: better formalize the source maps pattern somewhat used here by getAllErrors
  // todo: move this to Grammar.grammar (or just get the bootstrapping done.)
  getErrorsInGrammarExamples() {
    const programConstructor = this.getRootConstructor()
    const errors = []
    this.getValidConcreteAndAbstractNodeTypeDefinitions().forEach(def =>
      def.getExamples().forEach(example => {
        const exampleProgram = new programConstructor(example.childrenToString())
        exampleProgram.getAllErrors(example._getLineNumber() + 1).forEach(err => {
          errors.push(err)
        })
      })
    )
    return errors
  }
  toReadMe() {
    const languageName = this.getExtensionName()
    const rootNodeDef = this._getRootNodeTypeDefinitionNode()
    const cellTypes = this.getCellTypeDefinitions()
    const nodeTypeFamilyTree = this.getNodeTypeFamilyTree()
    const exampleNode = rootNodeDef.getExamples()[0]
    return `title ${languageName} Readme

paragraph ${rootNodeDef.getDescription()}

subtitle Quick Example

code
${exampleNode ? exampleNode.childrenToString(1) : ""}

subtitle Quick facts about ${languageName}

list
 - ${languageName} has ${nodeTypeFamilyTree.getTopDownArray().length} node types.
 - ${languageName} has ${Object.keys(cellTypes).length} cell types
 - The source code for ${languageName} is ${this.getTopDownArray().length} lines long.

subtitle Installing

code
 npm install .

subtitle Testing

code
 node test.js

subtitle Node Types

code
${nodeTypeFamilyTree.toString(1)}

subtitle Cell Types

code
${new TreeNode(Object.keys(cellTypes).join("\n")).toString(1)}

subtitle Road Map

paragraph Here are the "todos" present in the source code for ${languageName}:

list
${this.getTopDownArray()
  .filter(node => node.getWord(0) === "todo")
  .map(node => ` - ${node.getLine()}`)
  .join("\n")}

paragraph This readme was auto-generated using the
 link https://github.com/treenotation/jtree JTree library.`
  }
  toBundle() {
    const files = {}
    const rootNodeDef = this._getRootNodeTypeDefinitionNode()
    const languageName = this.getExtensionName()
    const example = rootNodeDef.getExamples()[0]
    const sampleCode = example ? example.childrenToString() : ""
    files[GrammarBundleFiles.package] = JSON.stringify(
      {
        name: languageName,
        private: true,
        dependencies: {
          jtree: TreeNode.getVersion()
        }
      },
      null,
      2
    )
    files[GrammarBundleFiles.readme] = this.toReadMe()
    const testCode = `const program = new ${languageName}(sampleCode)
const errors = program.getAllErrors()
console.log("Sample program compiled with " + errors.length + " errors.")
if (errors.length)
 console.log(errors.map(error => error.getMessage()))`
    const nodePath = `${languageName}.node.js`
    files[nodePath] = this.toNodeJsJavascript()
    files[GrammarBundleFiles.indexJs] = `module.exports = require("./${nodePath}")`
    const browserPath = `${languageName}.browser.js`
    files[browserPath] = this.toBrowserJavascript()
    files[GrammarBundleFiles.indexHtml] = `<script src="node_modules/jtree/products/jtree.browser.js"></script>
<script src="${browserPath}"></script>
<script>
const sampleCode = \`${sampleCode.toString()}\`
${testCode}
</script>`
    const samplePath = "sample." + this.getExtensionName()
    files[samplePath] = sampleCode.toString()
    files[GrammarBundleFiles.testJs] = `const ${languageName} = require("./index.js")
/*keep-line*/ const sampleCode = require("fs").readFileSync("${samplePath}", "utf8")
${testCode}`
    return files
  }
  getTargetExtension() {
    return this._getRootNodeTypeDefinitionNode().get(GrammarConstants.compilesTo)
  }
  getCellTypeDefinitions() {
    if (!this._cache_cellTypes) this._cache_cellTypes = this._getCellTypeDefinitions()
    return this._cache_cellTypes
  }
  getCellTypeDefinitionById(cellTypeId) {
    // todo: return unknownCellTypeDefinition? or is that handled somewhere else?
    return this.getCellTypeDefinitions()[cellTypeId]
  }
  getNodeTypeFamilyTree() {
    const tree = new TreeNode()
    Object.values(this.getValidConcreteAndAbstractNodeTypeDefinitions()).forEach(node => {
      const path = node.getAncestorNodeTypeIdsArray().join(" ")
      tree.touchNode(path)
    })
    return tree
  }
  _getCellTypeDefinitions() {
    const types = {}
    // todo: add built in word types?
    this.getChildrenByNodeConstructor(cellTypeDefinitionNode).forEach(type => (types[type.getCellTypeId()] = type))
    return types
  }
  getLanguageDefinitionProgram() {
    return this
  }
  getValidConcreteAndAbstractNodeTypeDefinitions() {
    return this.getChildrenByNodeConstructor(nodeTypeDefinitionNode).filter(node => node._hasValidNodeTypeId())
  }
  _getRootNodeTypeDefinitionNode() {
    if (!this._cache_rootNodeTypeNode) {
      this.forEach(def => {
        if (def instanceof AbstractGrammarDefinitionNode && def.has(GrammarConstants.root) && def._hasValidNodeTypeId()) this._cache_rootNodeTypeNode = def
      })
    }
    // By default, have a very permissive basic root node.
    // todo: whats the best design pattern to use for this sort of thing?
    if (!this._cache_rootNodeTypeNode) {
      this._cache_rootNodeTypeNode = this.concat(`${GrammarConstants.defaultRootNode}
 ${GrammarConstants.root}
 ${GrammarConstants.catchAllNodeType} ${GrammarConstants.BlobNode}`)[0]
      this._addDefaultCatchAllBlobNode()
    }
    return this._cache_rootNodeTypeNode
  }
  // todo: whats the best design pattern to use for this sort of thing?
  _addDefaultCatchAllBlobNode() {
    delete this._cache_nodeTypeDefinitions
    this.concat(`${GrammarConstants.BlobNode}
 ${GrammarConstants.baseNodeType} ${GrammarConstants.blobNode}`)
  }
  getExtensionName() {
    return this.getGrammarName()
  }
  getRootNodeTypeId() {
    return this._getRootNodeTypeDefinitionNode().getNodeTypeIdFromDefinition()
  }
  getGrammarName() {
    return this.getRootNodeTypeId().replace(GrammarProgram.nodeTypeSuffixRegex, "")
  }
  _getMyInScopeNodeTypeIds() {
    const nodeTypesNode = this._getRootNodeTypeDefinitionNode().getNode(GrammarConstants.inScope)
    return nodeTypesNode ? nodeTypesNode.getWordsFrom(1) : []
  }
  _getInScopeNodeTypeIds() {
    const nodeTypesNode = this._getRootNodeTypeDefinitionNode().getNode(GrammarConstants.inScope)
    return nodeTypesNode ? nodeTypesNode.getWordsFrom(1) : []
  }
  _initProgramNodeTypeDefinitionCache() {
    if (this._cache_nodeTypeDefinitions) return undefined
    this._cache_nodeTypeDefinitions = {}
    this.getChildrenByNodeConstructor(nodeTypeDefinitionNode).forEach(nodeTypeDefinitionNode => {
      this._cache_nodeTypeDefinitions[nodeTypeDefinitionNode.getNodeTypeIdFromDefinition()] = nodeTypeDefinitionNode
    })
  }
  _getProgramNodeTypeDefinitionCache() {
    this._initProgramNodeTypeDefinitionCache()
    return this._cache_nodeTypeDefinitions
  }
  _getRootConstructor() {
    const def = this._getRootNodeTypeDefinitionNode()
    return def._getConstructorDefinedInGrammar()
  }
  getRootConstructor() {
    if (!this._cache_rootConstructorClass) this._cache_rootConstructorClass = this._getRootConstructor()
    return this._cache_rootConstructorClass
  }
  _getFileExtensions() {
    return this._getRootNodeTypeDefinitionNode().get(GrammarConstants.extensions)
      ? this._getRootNodeTypeDefinitionNode()
          .get(GrammarConstants.extensions)
          .split(" ")
          .join(",")
      : this.getExtensionName()
  }
  toNodeJsJavascript(jtreePath = "jtree") {
    return this._rootNodeDefToJavascriptClass(jtreePath, true).trim()
  }
  toBrowserJavascript() {
    return this._rootNodeDefToJavascriptClass("", false).trim()
  }
  _getProperName() {
    return TreeUtils.ucfirst(this.getExtensionName())
  }
  _rootNodeDefToJavascriptClass(jtreePath, forNodeJs = true) {
    const defs = this.getValidConcreteAndAbstractNodeTypeDefinitions()
    // todo: throw if there is no root node defined
    const nodeTypeClasses = defs.map(def => def._nodeDefToJavascriptClass()).join("\n\n")
    const rootDef = this._getRootNodeTypeDefinitionNode()
    const rootNodeJsHeader = forNodeJs && rootDef._getConcatBlockStringFromExtended(GrammarConstants._rootNodeJsHeader)
    const rootName = rootDef._getGeneratedClassName()
    if (!rootName) throw new Error(`Root Node Type Has No Name`)
    let exportScript = ""
    if (forNodeJs) {
      exportScript = `module.exports = ${rootName};
${rootName}`
    } else {
      exportScript = `window.${rootName} = ${rootName}`
    }
    // todo: we can expose the previous "constants" export, if needed, via the grammar, which we preserve.
    return `{
${forNodeJs ? `const {jtree} = require("${jtreePath}")` : ""}
${rootNodeJsHeader ? rootNodeJsHeader : ""}
${nodeTypeClasses}

${exportScript}
}
`
  }
  toSublimeSyntaxFile() {
    const cellTypeDefs = this.getCellTypeDefinitions()
    const variables = Object.keys(cellTypeDefs)
      .map(name => ` ${name}: '${cellTypeDefs[name].getRegexString()}'`)
      .join("\n")
    const defs = this.getValidConcreteAndAbstractNodeTypeDefinitions().filter(kw => !kw._isAbstract())
    const nodeTypeContexts = defs.map(def => def._toSublimeMatchBlock()).join("\n\n")
    const includes = defs.map(nodeTypeDef => `  - include: '${nodeTypeDef.getNodeTypeIdFromDefinition()}'`).join("\n")
    return `%YAML 1.2
---
name: ${this.getExtensionName()}
file_extensions: [${this._getFileExtensions()}]
scope: source.${this.getExtensionName()}

variables:
${variables}

contexts:
 main:
${includes}

${nodeTypeContexts}`
  }
}
GrammarProgram.makeNodeTypeId = str => TreeUtils._replaceNonAlphaNumericCharactersWithCharCodes(str).replace(GrammarProgram.nodeTypeSuffixRegex, "") + GrammarConstants.nodeTypeSuffix
GrammarProgram.makeCellTypeId = str => TreeUtils._replaceNonAlphaNumericCharactersWithCharCodes(str).replace(GrammarProgram.cellTypeSuffixRegex, "") + GrammarConstants.cellTypeSuffix
GrammarProgram.nodeTypeSuffixRegex = new RegExp(GrammarConstants.nodeTypeSuffix + "$")
GrammarProgram.nodeTypeFullRegex = new RegExp("^[a-zA-Z0-9_]+" + GrammarConstants.nodeTypeSuffix + "$")
GrammarProgram.cellTypeSuffixRegex = new RegExp(GrammarConstants.cellTypeSuffix + "$")
GrammarProgram.cellTypeFullRegex = new RegExp("^[a-zA-Z0-9_]+" + GrammarConstants.cellTypeSuffix + "$")
GrammarProgram._languages = {}
GrammarProgram._nodeTypes = {}
const PreludeKinds = {}
PreludeKinds[PreludeCellTypeIds.anyCell] = GrammarAnyCell
PreludeKinds[PreludeCellTypeIds.keywordCell] = GrammarKeywordCell
PreludeKinds[PreludeCellTypeIds.floatCell] = GrammarFloatCell
PreludeKinds[PreludeCellTypeIds.numberCell] = GrammarFloatCell
PreludeKinds[PreludeCellTypeIds.bitCell] = GrammarBitCell
PreludeKinds[PreludeCellTypeIds.boolCell] = GrammarBoolCell
PreludeKinds[PreludeCellTypeIds.intCell] = GrammarIntCell
window.GrammarConstants = GrammarConstants
window.PreludeCellTypeIds = PreludeCellTypeIds
window.GrammarProgram = GrammarProgram
window.GrammarBackedNode = GrammarBackedNode
window.UnknownNodeTypeError = UnknownNodeTypeError
class Upgrader extends TreeNode {
  upgradeManyInPlace(globPatterns, fromVersion, toVersion) {
    this._upgradeMany(globPatterns, fromVersion, toVersion).forEach(file => file.tree.toDisk(file.path))
    return this
  }
  upgradeManyPreview(globPatterns, fromVersion, toVersion) {
    return this._upgradeMany(globPatterns, fromVersion, toVersion)
  }
  _upgradeMany(globPatterns, fromVersion, toVersion) {
    const glob = this.require("glob")
    const files = TreeUtils.flatten(globPatterns.map(pattern => glob.sync(pattern)))
    console.log(`${files.length} files to upgrade`)
    return files.map(path => {
      console.log("Upgrading " + path)
      return {
        tree: this.upgrade(TreeNode.fromDisk(path), fromVersion, toVersion),
        path: path
      }
    })
  }
  upgrade(code, fromVersion, toVersion) {
    const updateFromMap = this.getUpgradeFromMap()
    const semver = this.require("semver")
    let fromMap
    while ((fromMap = updateFromMap[fromVersion])) {
      const toNextVersion = Object.keys(fromMap)[0] // todo: currently we just assume 1 step at a time
      if (semver.lt(toVersion, toNextVersion)) break
      const fn = Object.values(fromMap)[0]
      code = fn(code)
      fromVersion = toNextVersion
    }
    return code
  }
}
window.Upgrader = Upgrader
class UnknownGrammarProgram extends TreeNode {
  _inferRootNodeForAPrefixLanguage(grammarName) {
    grammarName = GrammarProgram.makeNodeTypeId(grammarName)
    const rootNode = new TreeNode(`${grammarName}
 ${GrammarConstants.root}`)
    // note: right now we assume 1 global cellTypeMap and nodeTypeMap per grammar. But we may have scopes in the future?
    const rootNodeNames = this.getFirstWords()
      .filter(word => word)
      .map(word => GrammarProgram.makeNodeTypeId(word))
    rootNode
      .nodeAt(0)
      .touchNode(GrammarConstants.inScope)
      .setWordsFrom(1, Array.from(new Set(rootNodeNames)))
    return rootNode
  }
  _renameIntegerKeywords(clone) {
    // todo: why are we doing this?
    for (let node of clone.getTopDownArrayIterator()) {
      const firstWordIsAnInteger = !!node.getFirstWord().match(/^\d+$/)
      const parentFirstWord = node.getParent().getFirstWord()
      if (firstWordIsAnInteger && parentFirstWord) node.setFirstWord(GrammarProgram.makeNodeTypeId(parentFirstWord + UnknownGrammarProgram._childSuffix))
    }
  }
  _getKeywordMaps(clone) {
    const keywordsToChildKeywords = {}
    const keywordsToNodeInstances = {}
    for (let node of clone.getTopDownArrayIterator()) {
      const firstWord = node.getFirstWord()
      if (!keywordsToChildKeywords[firstWord]) keywordsToChildKeywords[firstWord] = {}
      if (!keywordsToNodeInstances[firstWord]) keywordsToNodeInstances[firstWord] = []
      keywordsToNodeInstances[firstWord].push(node)
      node.forEach(child => {
        keywordsToChildKeywords[firstWord][child.getFirstWord()] = true
      })
    }
    return { keywordsToChildKeywords: keywordsToChildKeywords, keywordsToNodeInstances: keywordsToNodeInstances }
  }
  _inferNodeTypeDef(firstWord, globalCellTypeMap, childFirstWords, instances) {
    const edgeSymbol = this.getEdgeSymbol()
    const nodeTypeId = GrammarProgram.makeNodeTypeId(firstWord)
    const nodeDefNode = new TreeNode(nodeTypeId).nodeAt(0)
    const childNodeTypeIds = childFirstWords.map(word => GrammarProgram.makeNodeTypeId(word))
    if (childNodeTypeIds.length) nodeDefNode.touchNode(GrammarConstants.inScope).setWordsFrom(1, childNodeTypeIds)
    const cellsForAllInstances = instances
      .map(line => line.getContent())
      .filter(line => line)
      .map(line => line.split(edgeSymbol))
    const instanceCellCounts = new Set(cellsForAllInstances.map(cells => cells.length))
    const maxCellsOnLine = Math.max(...Array.from(instanceCellCounts))
    const minCellsOnLine = Math.min(...Array.from(instanceCellCounts))
    let catchAllCellType
    let cellTypeIds = []
    for (let cellIndex = 0; cellIndex < maxCellsOnLine; cellIndex++) {
      const cellType = this._getBestCellType(firstWord, instances.length, maxCellsOnLine, cellsForAllInstances.map(cells => cells[cellIndex]))
      if (!globalCellTypeMap.has(cellType.cellTypeId)) globalCellTypeMap.set(cellType.cellTypeId, cellType.cellTypeDefinition)
      cellTypeIds.push(cellType.cellTypeId)
    }
    if (maxCellsOnLine > minCellsOnLine) {
      //columns = columns.slice(0, min)
      catchAllCellType = cellTypeIds.pop()
      while (cellTypeIds[cellTypeIds.length - 1] === catchAllCellType) {
        cellTypeIds.pop()
      }
    }
    const needsCruxProperty = !firstWord.endsWith(UnknownGrammarProgram._childSuffix + "Node") // todo: cleanup
    if (needsCruxProperty) nodeDefNode.set(GrammarConstants.crux, firstWord)
    if (catchAllCellType) nodeDefNode.set(GrammarConstants.catchAllCellType, catchAllCellType)
    const cellLine = cellTypeIds.slice()
    cellLine.unshift(PreludeCellTypeIds.keywordCell)
    if (cellLine.length > 0) nodeDefNode.set(GrammarConstants.cells, cellLine.join(edgeSymbol))
    //if (!catchAllCellType && cellTypeIds.length === 1) nodeDefNode.set(GrammarConstants.cells, cellTypeIds[0])
    // Todo: add conditional frequencies
    return nodeDefNode.getParent().toString()
  }
  //  inferGrammarFileForAnSSVLanguage(grammarName: string): string {
  //     grammarName = GrammarProgram.makeNodeTypeId(grammarName)
  //    const rootNode = new TreeNode(`${grammarName}
  // ${GrammarConstants.root}`)
  //    // note: right now we assume 1 global cellTypeMap and nodeTypeMap per grammar. But we may have scopes in the future?
  //    const rootNodeNames = this.getFirstWords().map(word => GrammarProgram.makeNodeTypeId(word))
  //    rootNode
  //      .nodeAt(0)
  //      .touchNode(GrammarConstants.inScope)
  //      .setWordsFrom(1, Array.from(new Set(rootNodeNames)))
  //    return rootNode
  //  }
  inferGrammarFileForAKeywordLanguage(grammarName) {
    const clone = this.clone()
    this._renameIntegerKeywords(clone)
    const { keywordsToChildKeywords, keywordsToNodeInstances } = this._getKeywordMaps(clone)
    const globalCellTypeMap = new Map()
    globalCellTypeMap.set(PreludeCellTypeIds.keywordCell, undefined)
    const nodeTypeDefs = Object.keys(keywordsToChildKeywords)
      .filter(word => word)
      .map(firstWord => this._inferNodeTypeDef(firstWord, globalCellTypeMap, Object.keys(keywordsToChildKeywords[firstWord]), keywordsToNodeInstances[firstWord]))
    const cellTypeDefs = []
    globalCellTypeMap.forEach((def, id) => cellTypeDefs.push(def ? def : id))
    const nodeBreakSymbol = this.getNodeBreakSymbol()
    return this._formatCode([this._inferRootNodeForAPrefixLanguage(grammarName).toString(), cellTypeDefs.join(nodeBreakSymbol), nodeTypeDefs.join(nodeBreakSymbol)].filter(def => def).join("\n"))
  }
  _formatCode(code) {
    // todo: make this run in browser too
    if (!this.isNodeJs()) return code
    const grammarProgram = new GrammarProgram(TreeNode.fromDisk(__dirname + "/../langs/grammar/grammar.grammar"))
    const programConstructor = grammarProgram.getRootConstructor()
    const program = new programConstructor(code)
    return program.format().toString()
  }
  _getBestCellType(firstWord, instanceCount, maxCellsOnLine, allValues) {
    const asSet = new Set(allValues)
    const edgeSymbol = this.getEdgeSymbol()
    const values = Array.from(asSet).filter(c => c)
    const every = fn => {
      for (let index = 0; index < values.length; index++) {
        if (!fn(values[index])) return false
      }
      return true
    }
    if (every(str => str === "0" || str === "1")) return { cellTypeId: PreludeCellTypeIds.bitCell }
    if (
      every(str => {
        const num = parseInt(str)
        if (isNaN(num)) return false
        return num.toString() === str
      })
    ) {
      return { cellTypeId: PreludeCellTypeIds.intCell }
    }
    if (every(str => str.match(/^-?\d*.?\d+$/))) return { cellTypeId: PreludeCellTypeIds.floatCell }
    const bools = new Set(["1", "0", "true", "false", "t", "f", "yes", "no"])
    if (every(str => bools.has(str.toLowerCase()))) return { cellTypeId: PreludeCellTypeIds.boolCell }
    // todo: cleanup
    const enumLimit = 30
    if (instanceCount > 1 && maxCellsOnLine === 1 && allValues.length > asSet.size && asSet.size < enumLimit)
      return {
        cellTypeId: GrammarProgram.makeCellTypeId(firstWord),
        cellTypeDefinition: `${GrammarProgram.makeCellTypeId(firstWord)}
 enum ${values.join(edgeSymbol)}`
      }
    return { cellTypeId: PreludeCellTypeIds.anyCell }
  }
}
UnknownGrammarProgram._childSuffix = "Child"
window.UnknownGrammarProgram = UnknownGrammarProgram
// Adapted from https://github.com/NeekSandhu/codemirror-textmate/blob/master/src/tmToCm.ts
var CmToken
;(function(CmToken) {
  CmToken["Atom"] = "atom"
  CmToken["Attribute"] = "attribute"
  CmToken["Bracket"] = "bracket"
  CmToken["Builtin"] = "builtin"
  CmToken["Comment"] = "comment"
  CmToken["Def"] = "def"
  CmToken["Error"] = "error"
  CmToken["Header"] = "header"
  CmToken["HR"] = "hr"
  CmToken["Keyword"] = "keyword"
  CmToken["Link"] = "link"
  CmToken["Meta"] = "meta"
  CmToken["Number"] = "number"
  CmToken["Operator"] = "operator"
  CmToken["Property"] = "property"
  CmToken["Qualifier"] = "qualifier"
  CmToken["Quote"] = "quote"
  CmToken["String"] = "string"
  CmToken["String2"] = "string-2"
  CmToken["Tag"] = "tag"
  CmToken["Type"] = "type"
  CmToken["Variable"] = "variable"
  CmToken["Variable2"] = "variable-2"
  CmToken["Variable3"] = "variable-3"
})(CmToken || (CmToken = {}))
const tmToCm = {
  comment: {
    $: CmToken.Comment
  },
  constant: {
    // TODO: Revision
    $: CmToken.Def,
    character: {
      escape: {
        $: CmToken.String2
      }
    },
    language: {
      $: CmToken.Atom
    },
    numeric: {
      $: CmToken.Number
    },
    other: {
      email: {
        link: {
          $: CmToken.Link
        }
      },
      symbol: {
        // TODO: Revision
        $: CmToken.Def
      }
    }
  },
  entity: {
    name: {
      class: {
        $: CmToken.Def
      },
      function: {
        $: CmToken.Def
      },
      tag: {
        $: CmToken.Tag
      },
      type: {
        $: CmToken.Type,
        class: {
          $: CmToken.Variable
        }
      }
    },
    other: {
      "attribute-name": {
        $: CmToken.Attribute
      },
      "inherited-class": {
        // TODO: Revision
        $: CmToken.Def
      }
    },
    support: {
      function: {
        // TODO: Revision
        $: CmToken.Def
      }
    }
  },
  invalid: {
    $: CmToken.Error,
    illegal: { $: CmToken.Error },
    deprecated: {
      $: CmToken.Error
    }
  },
  keyword: {
    $: CmToken.Keyword,
    operator: {
      $: CmToken.Operator
    },
    other: {
      "special-method": CmToken.Def
    }
  },
  punctuation: {
    $: CmToken.Operator,
    definition: {
      comment: {
        $: CmToken.Comment
      },
      tag: {
        $: CmToken.Bracket
      }
      // 'template-expression': {
      //     $: CodeMirrorToken.Operator,
      // },
    }
    // terminator: {
    //     $: CodeMirrorToken.Operator,
    // },
  },
  storage: {
    $: CmToken.Keyword
  },
  string: {
    $: CmToken.String,
    regexp: {
      $: CmToken.String2
    }
  },
  support: {
    class: {
      $: CmToken.Def
    },
    constant: {
      $: CmToken.Variable2
    },
    function: {
      $: CmToken.Def
    },
    type: {
      $: CmToken.Type
    },
    variable: {
      $: CmToken.Variable2,
      property: {
        $: CmToken.Property
      }
    }
  },
  variable: {
    $: CmToken.Def,
    language: {
      // TODO: Revision
      $: CmToken.Variable3
    },
    other: {
      object: {
        $: CmToken.Variable,
        property: {
          $: CmToken.Property
        }
      },
      property: {
        $: CmToken.Property
      }
    },
    parameter: {
      $: CmToken.Def
    }
  }
}
const textMateScopeToCodeMirrorStyle = (scopeSegments, styleTree = tmToCm) => {
  const matchingBranch = styleTree[scopeSegments.shift()]
  return matchingBranch ? textMateScopeToCodeMirrorStyle(scopeSegments, matchingBranch) || matchingBranch.$ || null : null
}
class TreeNotationCodeMirrorMode {
  constructor(name, getProgramConstructorMethod, getProgramCodeMethod, codeMirrorLib = undefined) {
    this._name = name
    this._getProgramConstructorMethod = getProgramConstructorMethod
    this._getProgramCodeMethod = getProgramCodeMethod || (instance => (instance ? instance.getValue() : this._originalValue))
    this._codeMirrorLib = codeMirrorLib
  }
  _getParsedProgram() {
    const source = this._getProgramCodeMethod(this._cmInstance) || ""
    if (!this._cachedProgram || this._cachedSource !== source) {
      this._cachedSource = source
      this._cachedProgram = new (this._getProgramConstructorMethod())(source)
    }
    return this._cachedProgram
  }
  _getExcludedIntelliSenseTriggerKeys() {
    return {
      "8": "backspace",
      "9": "tab",
      "13": "enter",
      "16": "shift",
      "17": "ctrl",
      "18": "alt",
      "19": "pause",
      "20": "capslock",
      "27": "escape",
      "33": "pageup",
      "34": "pagedown",
      "35": "end",
      "36": "home",
      "37": "left",
      "38": "up",
      "39": "right",
      "40": "down",
      "45": "insert",
      "46": "delete",
      "91": "left window key",
      "92": "right window key",
      "93": "select",
      "112": "f1",
      "113": "f2",
      "114": "f3",
      "115": "f4",
      "116": "f5",
      "117": "f6",
      "118": "f7",
      "119": "f8",
      "120": "f9",
      "121": "f10",
      "122": "f11",
      "123": "f12",
      "144": "numlock",
      "145": "scrolllock"
    }
  }
  token(stream, state) {
    return this._advanceStreamAndReturnTokenType(stream, state)
  }
  fromTextAreaWithAutocomplete(area, options) {
    this._originalValue = area.value
    const defaultOptions = {
      lineNumbers: true,
      mode: this._name,
      tabSize: 1,
      indentUnit: 1,
      hintOptions: {
        hint: (cmInstance, options) => this.codeMirrorAutocomplete(cmInstance, options)
      }
    }
    Object.assign(defaultOptions, options)
    this._cmInstance = this._getCodeMirrorLib().fromTextArea(area, defaultOptions)
    this._enableAutoComplete(this._cmInstance)
    return this._cmInstance
  }
  _enableAutoComplete(cmInstance) {
    const excludedKeys = this._getExcludedIntelliSenseTriggerKeys()
    const codeMirrorLib = this._getCodeMirrorLib()
    cmInstance.on("keyup", (cm, event) => {
      // https://stackoverflow.com/questions/13744176/codemirror-autocomplete-after-any-keyup
      if (!cm.state.completionActive && !excludedKeys[event.keyCode.toString()])
        // Todo: get typings for CM autocomplete
        codeMirrorLib.commands.autocomplete(cm, null, { completeSingle: false })
    })
  }
  _getCodeMirrorLib() {
    return this._codeMirrorLib
  }
  async codeMirrorAutocomplete(cmInstance, options) {
    const cursor = cmInstance.getDoc().getCursor()
    const codeMirrorLib = this._getCodeMirrorLib()
    const result = await this._getParsedProgram().getAutocompleteResultsAt(cursor.line, cursor.ch)
    // It seems to be better UX if there's only 1 result, and its the word the user entered, to close autocomplete
    if (result.matches.length === 1 && result.matches[0].text === result.word) return null
    return result.matches.length
      ? {
          list: result.matches,
          from: codeMirrorLib.Pos(cursor.line, result.startCharIndex),
          to: codeMirrorLib.Pos(cursor.line, result.endCharIndex)
        }
      : null
  }
  register() {
    const codeMirrorLib = this._getCodeMirrorLib()
    codeMirrorLib.defineMode(this._name, () => this)
    codeMirrorLib.defineMIME("text/" + this._name, this._name)
    return this
  }
  _advanceStreamAndReturnTokenType(stream, state) {
    let nextCharacter = stream.next()
    const lineNumber = stream.lineOracle.line + 1 // state.lineIndex
    const WordBreakSymbol = " "
    const NodeBreakSymbol = "\n"
    while (typeof nextCharacter === "string") {
      const peek = stream.peek()
      if (nextCharacter === WordBreakSymbol) {
        if (peek === undefined || peek === NodeBreakSymbol) {
          stream.skipToEnd() // advance string to end
          this._incrementLine(state)
        }
        if (peek === WordBreakSymbol && state.cellIndex) {
          // If we are missing a cell.
          // TODO: this is broken for a blank 1st cell. We need to track WordBreakSymbol level.
          state.cellIndex++
        }
        return "bracket"
      }
      if (peek === WordBreakSymbol) {
        state.cellIndex++
        return this._getCellStyle(lineNumber, state.cellIndex)
      }
      nextCharacter = stream.next()
    }
    state.cellIndex++
    const style = this._getCellStyle(lineNumber, state.cellIndex)
    this._incrementLine(state)
    return style
  }
  _getCellStyle(lineIndex, cellIndex) {
    const program = this._getParsedProgram()
    // todo: if the current word is an error, don't show red?
    if (!program.getCellHighlightScopeAtPosition) console.log(program)
    const highlightScope = program.getCellHighlightScopeAtPosition(lineIndex, cellIndex)
    const style = highlightScope ? textMateScopeToCodeMirrorStyle(highlightScope.split(".")) : undefined
    return style || "noHighlightScopeDefinedInGrammar"
  }
  // todo: remove.
  startState() {
    return {
      cellIndex: 0
    }
  }
  _incrementLine(state) {
    state.cellIndex = 0
  }
}
window.TreeNotationCodeMirrorMode = TreeNotationCodeMirrorMode
class jtree {}
jtree.GrammarBackedNode = GrammarBackedNode
jtree.GrammarConstants = GrammarConstants
jtree.Utils = TreeUtils
jtree.UnknownNodeTypeError = UnknownNodeTypeError
jtree.TestRacer = TestRacer
jtree.TreeEvents = TreeEvents
jtree.TreeNode = TreeNode
jtree.ExtendibleTreeNode = ExtendibleTreeNode
jtree.GrammarProgram = GrammarProgram
jtree.UnknownGrammarProgram = UnknownGrammarProgram
jtree.TreeNotationCodeMirrorMode = TreeNotationCodeMirrorMode
jtree.getVersion = () => TreeNode.getVersion()
window.jtree = jtree

{
  class stumpNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        errorNode,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {
          blockquote: htmlTagNode,
          colgroup: htmlTagNode,
          datalist: htmlTagNode,
          fieldset: htmlTagNode,
          menuitem: htmlTagNode,
          noscript: htmlTagNode,
          optgroup: htmlTagNode,
          progress: htmlTagNode,
          styleTag: htmlTagNode,
          template: htmlTagNode,
          textarea: htmlTagNode,
          titleTag: htmlTagNode,
          address: htmlTagNode,
          article: htmlTagNode,
          caption: htmlTagNode,
          details: htmlTagNode,
          section: htmlTagNode,
          summary: htmlTagNode,
          button: htmlTagNode,
          canvas: htmlTagNode,
          dialog: htmlTagNode,
          figure: htmlTagNode,
          footer: htmlTagNode,
          header: htmlTagNode,
          hgroup: htmlTagNode,
          iframe: htmlTagNode,
          keygen: htmlTagNode,
          legend: htmlTagNode,
          object: htmlTagNode,
          option: htmlTagNode,
          output: htmlTagNode,
          script: htmlTagNode,
          select: htmlTagNode,
          source: htmlTagNode,
          strong: htmlTagNode,
          aside: htmlTagNode,
          embed: htmlTagNode,
          input: htmlTagNode,
          label: htmlTagNode,
          meter: htmlTagNode,
          param: htmlTagNode,
          small: htmlTagNode,
          table: htmlTagNode,
          tbody: htmlTagNode,
          tfoot: htmlTagNode,
          thead: htmlTagNode,
          track: htmlTagNode,
          video: htmlTagNode,
          abbr: htmlTagNode,
          area: htmlTagNode,
          base: htmlTagNode,
          body: htmlTagNode,
          code: htmlTagNode,
          form: htmlTagNode,
          head: htmlTagNode,
          html: htmlTagNode,
          link: htmlTagNode,
          main: htmlTagNode,
          mark: htmlTagNode,
          menu: htmlTagNode,
          meta: htmlTagNode,
          ruby: htmlTagNode,
          samp: htmlTagNode,
          span: htmlTagNode,
          time: htmlTagNode,
          bdi: htmlTagNode,
          bdo: htmlTagNode,
          col: htmlTagNode,
          del: htmlTagNode,
          dfn: htmlTagNode,
          div: htmlTagNode,
          img: htmlTagNode,
          ins: htmlTagNode,
          kbd: htmlTagNode,
          map: htmlTagNode,
          nav: htmlTagNode,
          pre: htmlTagNode,
          rtc: htmlTagNode,
          sub: htmlTagNode,
          sup: htmlTagNode,
          var: htmlTagNode,
          wbr: htmlTagNode,
          br: htmlTagNode,
          dd: htmlTagNode,
          dl: htmlTagNode,
          dt: htmlTagNode,
          em: htmlTagNode,
          h1: htmlTagNode,
          h2: htmlTagNode,
          h3: htmlTagNode,
          h4: htmlTagNode,
          h5: htmlTagNode,
          h6: htmlTagNode,
          hr: htmlTagNode,
          li: htmlTagNode,
          ol: htmlTagNode,
          rb: htmlTagNode,
          rp: htmlTagNode,
          rt: htmlTagNode,
          td: htmlTagNode,
          th: htmlTagNode,
          tr: htmlTagNode,
          ul: htmlTagNode,
          a: htmlTagNode,
          b: htmlTagNode,
          i: htmlTagNode,
          p: htmlTagNode,
          q: htmlTagNode,
          s: htmlTagNode,
          u: htmlTagNode
        }),
        undefined
      )
    }
    compile() {
      return this.toHtml()
    }
    getGrammarProgram() {
      if (!this._cachedGrammarProgramRoot)
        this._cachedGrammarProgramRoot = new jtree.GrammarProgram(`anyCell
keywordCell
extraCell
 highlightScope invalid
anyHtmlContentCell
 highlightScope string
attributeValueCell
 highlightScope constant.language
htmlTagNameCell
 highlightScope variable.function
 extends keywordCell
 enum a abbr address area article aside b base bdi bdo blockquote body br button canvas caption code col colgroup datalist dd del details dfn dialog div dl dt em embed fieldset figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param pre progress q rb rp rt rtc ruby s samp script section select small source span strong styleTag sub summary sup table tbody td template textarea tfoot th thead time titleTag tr track u ul var video wbr
htmlAttributeNameCell
 highlightScope entity.name.type
 extends keywordCell
 enum accept accept-charset accesskey action align alt async autocomplete autofocus autoplay bgcolor border charset checked class color cols colspan content contenteditable controls coords datetime default defer dir dirname disabled download draggable dropzone enctype for formaction headers height hidden high href hreflang http-equiv id ismap kind lang list loop low max maxlength media method min multiple muted name novalidate onabort onafterprint onbeforeprint onbeforeunload onblur oncanplay oncanplaythrough onchange onclick oncontextmenu oncopy oncuechange oncut ondblclick ondrag ondragend ondragenter ondragleave ondragover ondragstart ondrop ondurationchange onemptied onended onerror onfocus onhashchange oninput oninvalid onkeydown onkeypress onkeyup onload onloadeddata onloadedmetadata onloadstart onmousedown onmousemove onmouseout onmouseover onmouseup onmousewheel onoffline ononline onpagehide onpageshow onpaste onpause onplay onplaying onpopstate onprogress onratechange onreset onresize onscroll onsearch onseeked onseeking onselect onstalled onstorage onsubmit onsuspend ontimeupdate ontoggle onunload onvolumechange onwaiting onwheel open optimum pattern placeholder poster preload readonly rel required reversed rows rowspan sandbox scope selected shape size sizes spellcheck src srcdoc srclang srcset start step style tabindex target title translate type usemap value width wrap
bernKeywordCell
 enum bern
 extends keywordCell
stumpNode
 root
 description A prefix Tree Language that compiles to HTML.
 catchAllNodeType errorNode
 inScope htmlTagNode
 example
  div
   h1 hello world
 compilesTo html
 javascript
  compile() {
   return this.toHtml()
  }
htmlTagNode
 inScope bernNode htmlTagNode htmlAttributeNode
 catchAllCellType anyHtmlContentCell
 cells htmlTagNameCell
 javascript
  getTag() {
   // we need to remove the "Tag" bit to handle the style and title attribute/tag conflict.
   const firstWord = this.getFirstWord()
   const map = {
    titleTag: "title",
    styleTag: "style"
   }
   return map[firstWord] || firstWord
  }
  _getHtmlJoinByCharacter() {
   return \`\`
  }
  toHtmlWithSuids() {
   return this._toHtml(undefined, true)
  }
  _getOneLiner() {
   const oneLinerWords = this.getWordsFrom(1)
   return oneLinerWords.length ? oneLinerWords.join(" ") : ""
  }
  shouldCollapse() {
   return this.has("stumpCollapse")
  }
  _toHtml(indentCount, withSuid) {
   const tag = this.getTag()
   const children = this.map(child => child._toHtml(indentCount + 1, withSuid)).join("")
   const attributesStr = this.filter(node => node.isAttributeNode)
    .map(child => child.getAttribute())
    .join("")
   const indent = " ".repeat(indentCount)
   const collapse = this.shouldCollapse()
   const indentForChildNodes = !collapse && this.getChildInstancesOfNodeTypeId("htmlTagNode").length > 0
   const suid = withSuid ? \` stumpUid="\${this._getUid()}"\` : ""
   const oneLiner = this._getOneLiner()
   return \`\${!collapse ? indent : ""}<\${tag}\${attributesStr}\${suid}>\${oneLiner}\${indentForChildNodes ? "\\n" : ""}\${children}</\${tag}>\${collapse ? "" : "\\n"}\`
  }
  removeCssStumpNode() {
   return this.removeStumpNode()
  }
  removeStumpNode() {
   this.getShadow().removeShadow()
   return this.destroy()
  }
  getNodeByGuid(guid) {
   return this.getTopDownArray().find(node => node._getUid() === guid)
  }
  addClassToStumpNode(className) {
   const classNode = this.touchNode("class")
   const words = classNode.getWordsFrom(1)
   // note: we call add on shadow regardless, because at the moment stump may have gotten out of
   // sync with shadow, if things modified the dom. todo: cleanup.
   this.getShadow().addClassToShadow(className)
   if (words.includes(className)) return this
   words.push(className)
   classNode.setContent(words.join(this.getWordBreakSymbol()))
   return this
  }
  removeClassFromStumpNode(className) {
   const classNode = this.getNode("class")
   if (!classNode) return this
   const newClasses = classNode.getWords().filter(word => word !== className)
   if (!newClasses.length) classNode.destroy()
   else classNode.setContent(newClasses.join(" "))
   this.getShadow().removeClassFromShadow(className)
   return this
  }
  stumpNodeHasClass(className) {
   const classNode = this.getNode("class")
   return classNode && classNode.getWords().includes(className) ? true : false
  }
  isStumpNodeCheckbox() {
   return this.get("type") === "checkbox"
  }
  getShadow() {
   if (!this._shadow) {
    const shadowClass = this.getShadowClass()
    this._shadow = new shadowClass(this)
   }
   return this._shadow
  }
  insertCssChildNode(text, index) {
   return this.insertChildNode(text, index)
  }
  insertChildNode(text, index) {
   const singleNode = new jtree.TreeNode(text).getChildren()[0]
   const newNode = this.insertLineAndChildren(singleNode.getLine(), singleNode.childrenToString(), index)
   const stumpNodeIndex = this.getChildInstancesOfNodeTypeId("htmlTagNode").indexOf(newNode)
   this.getShadow().insertHtmlNode(newNode, stumpNodeIndex)
   return newNode
  }
  isInputType() {
   return ["input", "textarea"].includes(this.getTag()) || this.get("contenteditable") === "true"
  }
  findStumpNodeByChild(line) {
   return this.findStumpNodesByChild(line)[0]
  }
  findStumpNodeByChildString(line) {
   return this.getTopDownArray().find(node =>
    node
     .map(child => child.getLine())
     .join("\\n")
     .includes(line)
   )
  }
  findStumpNodeByFirstWord(firstWord) {
   return this._findStumpNodesByBase(firstWord)[0]
  }
  _findStumpNodesByBase(firstWord) {
   return this.getTopDownArray().filter(node => node.doesExtend("htmlTagNode") && node.getFirstWord() === firstWord)
  }
  hasLine(line) {
   return this.getChildren().some(node => node.getLine() === line)
  }
  findStumpNodesByChild(line) {
   return this.getTopDownArray().filter(node => node.doesExtend("htmlTagNode") && node.hasLine(line))
  }
  findStumpNodesWithClass(className) {
   return this.getTopDownArray().filter(
    node =>
     node.doesExtend("htmlTagNode") &&
     node.has("class") &&
     node
      .getNode("class")
      .getWords()
      .includes(className)
   )
  }
  getShadowClass() {
   return this.getParent().getShadowClass()
  }
  // todo: whats this? move to base?
  getLines(start = 0, end) {
   return this.toString()
    .split("\\n")
    .slice(start, end)
    .join("\\n")
  }
  // todo: should not be here
  getStumpNodeTreeComponent() {
   return this._treeComponent || this.getParent().getStumpNodeTreeComponent()
  }
  // todo: should not be here
  setStumpNodeTreeComponent(treeComponent) {
   this._treeComponent = treeComponent
   return this
  }
  setStumpNodeCss(css) {
   this.getShadow().setShadowCss(css)
   return this
  }
  getStumpNodeCss(prop) {
   return this.getShadow().getShadowCss(prop)
  }
  getStumpNodeAttr(key) {
   return this.get(key)
  }
  setStumpNodeAttr(key, value) {
   // todo
   return this
  }
  toHtml() {
   return this._toHtml()
  }
errorNode
 baseNodeType errorNode
htmlAttributeNode
 javascript
  _toHtml() {
   return ""
  }
  getAttribute() {
   return \` \${this.getFirstWord()}="\${this.getContent()}"\`
  }
 boolean isAttributeNode true
 boolean isTileAttribute true
 catchAllNodeType errorNode
 catchAllCellType attributeValueCell
 cells htmlAttributeNameCell
stumpExtendedAttributeNameCell
 extends htmlAttributeNameCell
 enum stumpCollapse stumpNoOp stumpOnBlurCommand stumpOnChangeCommand stumpOnClickCommand stumpOnContextMenuCommand stumpOnDblClickCommand stumpOnLineClick stumpOnLineShiftClick stumpOnShiftClickCommand stumpStyleFor
stumpExtendedAttributeNode
 description Node types not present in HTML but included in stump.
 extends htmlAttributeNode
 cells stumpExtendedAttributeNameCell
lineOfHtmlContentNode
 boolean isTileAttribute true
 catchAllNodeType lineOfHtmlContentNode
 catchAllCellType anyHtmlContentCell
bernNode
 boolean isTileAttribute true
 todo Rename this node type
 description This is a node where you can put any HTML content. It is called "bern" until someone comes up with a better name.
 catchAllNodeType lineOfHtmlContentNode
 javascript
  _toHtml() {
   return this.childrenToString()
  }
 cells bernKeywordCell`)
      return this._cachedGrammarProgramRoot
    }
    static getNodeTypeMap() {
      return {
        stumpNode: stumpNode,
        htmlTagNode: htmlTagNode,
        errorNode: errorNode,
        htmlAttributeNode: htmlAttributeNode,
        stumpExtendedAttributeNode: stumpExtendedAttributeNode,
        lineOfHtmlContentNode: lineOfHtmlContentNode,
        bernNode: bernNode
      }
    }
  }

  class htmlTagNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        undefined,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {
          blockquote: htmlTagNode,
          colgroup: htmlTagNode,
          datalist: htmlTagNode,
          fieldset: htmlTagNode,
          menuitem: htmlTagNode,
          noscript: htmlTagNode,
          optgroup: htmlTagNode,
          progress: htmlTagNode,
          styleTag: htmlTagNode,
          template: htmlTagNode,
          textarea: htmlTagNode,
          titleTag: htmlTagNode,
          address: htmlTagNode,
          article: htmlTagNode,
          caption: htmlTagNode,
          details: htmlTagNode,
          section: htmlTagNode,
          summary: htmlTagNode,
          button: htmlTagNode,
          canvas: htmlTagNode,
          dialog: htmlTagNode,
          figure: htmlTagNode,
          footer: htmlTagNode,
          header: htmlTagNode,
          hgroup: htmlTagNode,
          iframe: htmlTagNode,
          keygen: htmlTagNode,
          legend: htmlTagNode,
          object: htmlTagNode,
          option: htmlTagNode,
          output: htmlTagNode,
          script: htmlTagNode,
          select: htmlTagNode,
          source: htmlTagNode,
          strong: htmlTagNode,
          aside: htmlTagNode,
          embed: htmlTagNode,
          input: htmlTagNode,
          label: htmlTagNode,
          meter: htmlTagNode,
          param: htmlTagNode,
          small: htmlTagNode,
          table: htmlTagNode,
          tbody: htmlTagNode,
          tfoot: htmlTagNode,
          thead: htmlTagNode,
          track: htmlTagNode,
          video: htmlTagNode,
          abbr: htmlTagNode,
          area: htmlTagNode,
          base: htmlTagNode,
          body: htmlTagNode,
          code: htmlTagNode,
          form: htmlTagNode,
          head: htmlTagNode,
          html: htmlTagNode,
          link: htmlTagNode,
          main: htmlTagNode,
          mark: htmlTagNode,
          menu: htmlTagNode,
          meta: htmlTagNode,
          ruby: htmlTagNode,
          samp: htmlTagNode,
          span: htmlTagNode,
          time: htmlTagNode,
          bdi: htmlTagNode,
          bdo: htmlTagNode,
          col: htmlTagNode,
          del: htmlTagNode,
          dfn: htmlTagNode,
          div: htmlTagNode,
          img: htmlTagNode,
          ins: htmlTagNode,
          kbd: htmlTagNode,
          map: htmlTagNode,
          nav: htmlTagNode,
          pre: htmlTagNode,
          rtc: htmlTagNode,
          sub: htmlTagNode,
          sup: htmlTagNode,
          var: htmlTagNode,
          wbr: htmlTagNode,
          br: htmlTagNode,
          dd: htmlTagNode,
          dl: htmlTagNode,
          dt: htmlTagNode,
          em: htmlTagNode,
          h1: htmlTagNode,
          h2: htmlTagNode,
          h3: htmlTagNode,
          h4: htmlTagNode,
          h5: htmlTagNode,
          h6: htmlTagNode,
          hr: htmlTagNode,
          li: htmlTagNode,
          ol: htmlTagNode,
          rb: htmlTagNode,
          rp: htmlTagNode,
          rt: htmlTagNode,
          td: htmlTagNode,
          th: htmlTagNode,
          tr: htmlTagNode,
          ul: htmlTagNode,
          a: htmlTagNode,
          b: htmlTagNode,
          i: htmlTagNode,
          p: htmlTagNode,
          q: htmlTagNode,
          s: htmlTagNode,
          u: htmlTagNode,
          oncanplaythrough: htmlAttributeNode,
          ondurationchange: htmlAttributeNode,
          onloadedmetadata: htmlAttributeNode,
          contenteditable: htmlAttributeNode,
          "accept-charset": htmlAttributeNode,
          onbeforeunload: htmlAttributeNode,
          onvolumechange: htmlAttributeNode,
          onbeforeprint: htmlAttributeNode,
          oncontextmenu: htmlAttributeNode,
          autocomplete: htmlAttributeNode,
          onafterprint: htmlAttributeNode,
          onhashchange: htmlAttributeNode,
          onloadeddata: htmlAttributeNode,
          onmousewheel: htmlAttributeNode,
          onratechange: htmlAttributeNode,
          ontimeupdate: htmlAttributeNode,
          oncuechange: htmlAttributeNode,
          ondragenter: htmlAttributeNode,
          ondragleave: htmlAttributeNode,
          ondragstart: htmlAttributeNode,
          onloadstart: htmlAttributeNode,
          onmousedown: htmlAttributeNode,
          onmousemove: htmlAttributeNode,
          onmouseover: htmlAttributeNode,
          placeholder: htmlAttributeNode,
          formaction: htmlAttributeNode,
          "http-equiv": htmlAttributeNode,
          novalidate: htmlAttributeNode,
          ondblclick: htmlAttributeNode,
          ondragover: htmlAttributeNode,
          onkeypress: htmlAttributeNode,
          onmouseout: htmlAttributeNode,
          onpagehide: htmlAttributeNode,
          onpageshow: htmlAttributeNode,
          onpopstate: htmlAttributeNode,
          onprogress: htmlAttributeNode,
          spellcheck: htmlAttributeNode,
          accesskey: htmlAttributeNode,
          autofocus: htmlAttributeNode,
          draggable: htmlAttributeNode,
          maxlength: htmlAttributeNode,
          oncanplay: htmlAttributeNode,
          ondragend: htmlAttributeNode,
          onemptied: htmlAttributeNode,
          oninvalid: htmlAttributeNode,
          onkeydown: htmlAttributeNode,
          onmouseup: htmlAttributeNode,
          onoffline: htmlAttributeNode,
          onplaying: htmlAttributeNode,
          onseeking: htmlAttributeNode,
          onstalled: htmlAttributeNode,
          onstorage: htmlAttributeNode,
          onsuspend: htmlAttributeNode,
          onwaiting: htmlAttributeNode,
          translate: htmlAttributeNode,
          autoplay: htmlAttributeNode,
          controls: htmlAttributeNode,
          datetime: htmlAttributeNode,
          disabled: htmlAttributeNode,
          download: htmlAttributeNode,
          dropzone: htmlAttributeNode,
          hreflang: htmlAttributeNode,
          multiple: htmlAttributeNode,
          onchange: htmlAttributeNode,
          ononline: htmlAttributeNode,
          onresize: htmlAttributeNode,
          onscroll: htmlAttributeNode,
          onsearch: htmlAttributeNode,
          onseeked: htmlAttributeNode,
          onselect: htmlAttributeNode,
          onsubmit: htmlAttributeNode,
          ontoggle: htmlAttributeNode,
          onunload: htmlAttributeNode,
          readonly: htmlAttributeNode,
          required: htmlAttributeNode,
          reversed: htmlAttributeNode,
          selected: htmlAttributeNode,
          tabindex: htmlAttributeNode,
          bgcolor: htmlAttributeNode,
          charset: htmlAttributeNode,
          checked: htmlAttributeNode,
          colspan: htmlAttributeNode,
          content: htmlAttributeNode,
          default: htmlAttributeNode,
          dirname: htmlAttributeNode,
          enctype: htmlAttributeNode,
          headers: htmlAttributeNode,
          onabort: htmlAttributeNode,
          onclick: htmlAttributeNode,
          onended: htmlAttributeNode,
          onerror: htmlAttributeNode,
          onfocus: htmlAttributeNode,
          oninput: htmlAttributeNode,
          onkeyup: htmlAttributeNode,
          onpaste: htmlAttributeNode,
          onpause: htmlAttributeNode,
          onreset: htmlAttributeNode,
          onwheel: htmlAttributeNode,
          optimum: htmlAttributeNode,
          pattern: htmlAttributeNode,
          preload: htmlAttributeNode,
          rowspan: htmlAttributeNode,
          sandbox: htmlAttributeNode,
          srclang: htmlAttributeNode,
          accept: htmlAttributeNode,
          action: htmlAttributeNode,
          border: htmlAttributeNode,
          coords: htmlAttributeNode,
          height: htmlAttributeNode,
          hidden: htmlAttributeNode,
          method: htmlAttributeNode,
          onblur: htmlAttributeNode,
          oncopy: htmlAttributeNode,
          ondrag: htmlAttributeNode,
          ondrop: htmlAttributeNode,
          onload: htmlAttributeNode,
          onplay: htmlAttributeNode,
          poster: htmlAttributeNode,
          srcdoc: htmlAttributeNode,
          srcset: htmlAttributeNode,
          target: htmlAttributeNode,
          usemap: htmlAttributeNode,
          align: htmlAttributeNode,
          async: htmlAttributeNode,
          class: htmlAttributeNode,
          color: htmlAttributeNode,
          defer: htmlAttributeNode,
          ismap: htmlAttributeNode,
          media: htmlAttributeNode,
          muted: htmlAttributeNode,
          oncut: htmlAttributeNode,
          scope: htmlAttributeNode,
          shape: htmlAttributeNode,
          sizes: htmlAttributeNode,
          start: htmlAttributeNode,
          style: htmlAttributeNode,
          title: htmlAttributeNode,
          value: htmlAttributeNode,
          width: htmlAttributeNode,
          cols: htmlAttributeNode,
          high: htmlAttributeNode,
          href: htmlAttributeNode,
          kind: htmlAttributeNode,
          lang: htmlAttributeNode,
          list: htmlAttributeNode,
          loop: htmlAttributeNode,
          name: htmlAttributeNode,
          open: htmlAttributeNode,
          rows: htmlAttributeNode,
          size: htmlAttributeNode,
          step: htmlAttributeNode,
          type: htmlAttributeNode,
          wrap: htmlAttributeNode,
          alt: htmlAttributeNode,
          dir: htmlAttributeNode,
          for: htmlAttributeNode,
          low: htmlAttributeNode,
          max: htmlAttributeNode,
          min: htmlAttributeNode,
          rel: htmlAttributeNode,
          src: htmlAttributeNode,
          id: htmlAttributeNode,
          stumpOnContextMenuCommand: stumpExtendedAttributeNode,
          stumpOnShiftClickCommand: stumpExtendedAttributeNode,
          stumpOnDblClickCommand: stumpExtendedAttributeNode,
          stumpOnLineShiftClick: stumpExtendedAttributeNode,
          stumpOnChangeCommand: stumpExtendedAttributeNode,
          stumpOnClickCommand: stumpExtendedAttributeNode,
          stumpOnBlurCommand: stumpExtendedAttributeNode,
          stumpOnLineClick: stumpExtendedAttributeNode,
          stumpCollapse: stumpExtendedAttributeNode,
          stumpStyleFor: stumpExtendedAttributeNode,
          stumpNoOp: stumpExtendedAttributeNode,
          bern: bernNode
        }),
        undefined
      )
    }
    get htmlTagNameCell() {
      return this.getWord(0)
    }
    get anyHtmlContentCell() {
      return this.getWordsFrom(1)
    }
    getTag() {
      // we need to remove the "Tag" bit to handle the style and title attribute/tag conflict.
      const firstWord = this.getFirstWord()
      const map = {
        titleTag: "title",
        styleTag: "style"
      }
      return map[firstWord] || firstWord
    }
    _getHtmlJoinByCharacter() {
      return ``
    }
    toHtmlWithSuids() {
      return this._toHtml(undefined, true)
    }
    _getOneLiner() {
      const oneLinerWords = this.getWordsFrom(1)
      return oneLinerWords.length ? oneLinerWords.join(" ") : ""
    }
    shouldCollapse() {
      return this.has("stumpCollapse")
    }
    _toHtml(indentCount, withSuid) {
      const tag = this.getTag()
      const children = this.map(child => child._toHtml(indentCount + 1, withSuid)).join("")
      const attributesStr = this.filter(node => node.isAttributeNode)
        .map(child => child.getAttribute())
        .join("")
      const indent = " ".repeat(indentCount)
      const collapse = this.shouldCollapse()
      const indentForChildNodes = !collapse && this.getChildInstancesOfNodeTypeId("htmlTagNode").length > 0
      const suid = withSuid ? ` stumpUid="${this._getUid()}"` : ""
      const oneLiner = this._getOneLiner()
      return `${!collapse ? indent : ""}<${tag}${attributesStr}${suid}>${oneLiner}${indentForChildNodes ? "\n" : ""}${children}</${tag}>${collapse ? "" : "\n"}`
    }
    removeCssStumpNode() {
      return this.removeStumpNode()
    }
    removeStumpNode() {
      this.getShadow().removeShadow()
      return this.destroy()
    }
    getNodeByGuid(guid) {
      return this.getTopDownArray().find(node => node._getUid() === guid)
    }
    addClassToStumpNode(className) {
      const classNode = this.touchNode("class")
      const words = classNode.getWordsFrom(1)
      // note: we call add on shadow regardless, because at the moment stump may have gotten out of
      // sync with shadow, if things modified the dom. todo: cleanup.
      this.getShadow().addClassToShadow(className)
      if (words.includes(className)) return this
      words.push(className)
      classNode.setContent(words.join(this.getWordBreakSymbol()))
      return this
    }
    removeClassFromStumpNode(className) {
      const classNode = this.getNode("class")
      if (!classNode) return this
      const newClasses = classNode.getWords().filter(word => word !== className)
      if (!newClasses.length) classNode.destroy()
      else classNode.setContent(newClasses.join(" "))
      this.getShadow().removeClassFromShadow(className)
      return this
    }
    stumpNodeHasClass(className) {
      const classNode = this.getNode("class")
      return classNode && classNode.getWords().includes(className) ? true : false
    }
    isStumpNodeCheckbox() {
      return this.get("type") === "checkbox"
    }
    getShadow() {
      if (!this._shadow) {
        const shadowClass = this.getShadowClass()
        this._shadow = new shadowClass(this)
      }
      return this._shadow
    }
    insertCssChildNode(text, index) {
      return this.insertChildNode(text, index)
    }
    insertChildNode(text, index) {
      const singleNode = new jtree.TreeNode(text).getChildren()[0]
      const newNode = this.insertLineAndChildren(singleNode.getLine(), singleNode.childrenToString(), index)
      const stumpNodeIndex = this.getChildInstancesOfNodeTypeId("htmlTagNode").indexOf(newNode)
      this.getShadow().insertHtmlNode(newNode, stumpNodeIndex)
      return newNode
    }
    isInputType() {
      return ["input", "textarea"].includes(this.getTag()) || this.get("contenteditable") === "true"
    }
    findStumpNodeByChild(line) {
      return this.findStumpNodesByChild(line)[0]
    }
    findStumpNodeByChildString(line) {
      return this.getTopDownArray().find(node =>
        node
          .map(child => child.getLine())
          .join("\n")
          .includes(line)
      )
    }
    findStumpNodeByFirstWord(firstWord) {
      return this._findStumpNodesByBase(firstWord)[0]
    }
    _findStumpNodesByBase(firstWord) {
      return this.getTopDownArray().filter(node => node.doesExtend("htmlTagNode") && node.getFirstWord() === firstWord)
    }
    hasLine(line) {
      return this.getChildren().some(node => node.getLine() === line)
    }
    findStumpNodesByChild(line) {
      return this.getTopDownArray().filter(node => node.doesExtend("htmlTagNode") && node.hasLine(line))
    }
    findStumpNodesWithClass(className) {
      return this.getTopDownArray().filter(
        node =>
          node.doesExtend("htmlTagNode") &&
          node.has("class") &&
          node
            .getNode("class")
            .getWords()
            .includes(className)
      )
    }
    getShadowClass() {
      return this.getParent().getShadowClass()
    }
    // todo: whats this? move to base?
    getLines(start = 0, end) {
      return this.toString()
        .split("\n")
        .slice(start, end)
        .join("\n")
    }
    // todo: should not be here
    getStumpNodeTreeComponent() {
      return this._treeComponent || this.getParent().getStumpNodeTreeComponent()
    }
    // todo: should not be here
    setStumpNodeTreeComponent(treeComponent) {
      this._treeComponent = treeComponent
      return this
    }
    setStumpNodeCss(css) {
      this.getShadow().setShadowCss(css)
      return this
    }
    getStumpNodeCss(prop) {
      return this.getShadow().getShadowCss(prop)
    }
    getStumpNodeAttr(key) {
      return this.get(key)
    }
    setStumpNodeAttr(key, value) {
      // todo
      return this
    }
    toHtml() {
      return this._toHtml()
    }
  }

  class errorNode extends jtree.GrammarBackedNode {
    getErrors() {
      return this._getErrorNodeErrors()
    }
  }

  class htmlAttributeNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(errorNode, undefined, undefined)
    }
    get htmlAttributeNameCell() {
      return this.getWord(0)
    }
    get attributeValueCell() {
      return this.getWordsFrom(1)
    }
    get isTileAttribute() {
      return true
    }
    get isAttributeNode() {
      return true
    }
    _toHtml() {
      return ""
    }
    getAttribute() {
      return ` ${this.getFirstWord()}="${this.getContent()}"`
    }
  }

  class stumpExtendedAttributeNode extends htmlAttributeNode {
    get stumpExtendedAttributeNameCell() {
      return this.getWord(0)
    }
  }

  class lineOfHtmlContentNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(lineOfHtmlContentNode, undefined, undefined)
    }
    get anyHtmlContentCell() {
      return this.getWordsFrom(0)
    }
    get isTileAttribute() {
      return true
    }
  }

  class bernNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(lineOfHtmlContentNode, undefined, undefined)
    }
    get bernKeywordCell() {
      return this.getWord(0)
    }
    get isTileAttribute() {
      return true
    }
    _toHtml() {
      return this.childrenToString()
    }
  }

  window.stumpNode = stumpNode
}

{
  class hakonNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        selectorNode,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), { comment: commentNode }),
        undefined
      )
    }
    getSelector() {
      return ""
    }
    compile() {
      return this.getTopDownArray()
        .filter(node => node.isSelectorNode)
        .map(child => child.compile())
        .join("")
    }
    getGrammarProgram() {
      if (!this._cachedGrammarProgramRoot)
        this._cachedGrammarProgramRoot = new jtree.GrammarProgram(`anyCell
keywordCell
commentKeywordCell
 extends keywordCell
 highlightScope comment
 enum comment
extraCell
 highlightScope invalid
cssValueCell
 highlightScope constant.numeric
selectorCell
 highlightScope keyword.control
 examples body h1
 todo add html tags, css and ids selector regexes, etc
propertyKeywordCell
 highlightScope variable.function
 extends keywordCell
 enum align-content align-items align-self all animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-repeat background-size border border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side clear clip color column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns content counter-increment counter-reset cursor direction display empty-cells fill filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float font @font-face font-family font-size font-size-adjust font-stretch font-style font-variant font-weight hanging-punctuation height justify-content @keyframes left letter-spacing line-height list-style list-style-image list-style-position list-style-type margin margin-bottom margin-left margin-right margin-top max-height max-width @media min-height min-width nav-down nav-index nav-left nav-right nav-up opacity order outline outline-color outline-offset outline-style outline-width overflow overflow-x overflow-y padding padding-bottom padding-left padding-right padding-top page-break-after page-break-before page-break-inside perspective perspective-origin position quotes resize right tab-size table-layout text-align text-align-last text-decoration text-decoration-color text-decoration-line text-decoration-style text-indent text-justify text-overflow text-shadow text-transform top transform transform-origin transform-style transition transition-delay transition-duration transition-property transition-timing-function unicode-bidi vertical-align visibility white-space width word-break word-spacing word-wrap z-index overscroll-behavior-x user-select -ms-touch-action -webkit-user-select -webkit-touch-callout -moz-user-select touch-action -ms-user-select -khtml-user-select
errorCell
 highlightScope invalid
commentCell
 highlightScope comment
hakonNode
 root
 todo Add variables?
 description A prefix Tree Language that compiles to CSS
 compilesTo css
 inScope commentNode
 catchAllNodeType selectorNode
 javascript
  getSelector() {
   return ""
  }
  compile() {
   return this.getTopDownArray()
    .filter(node => node.isSelectorNode)
    .map(child => child.compile())
    .join("")
  }
 example A basic example
  body
   font-size 12px
   h1,h2
    color red
  a
   &:hover
    color blue
    font-size 17px
propertyNode
 catchAllCellType cssValueCell
 catchAllNodeType errorNode
 javascript
  compile(spaces) {
   return \`\${spaces}\${this.getFirstWord()}: \${this.getContent()};\`
  }
 cells propertyKeywordCell
errorNode
 catchAllNodeType errorNode
 catchAllCellType errorCell
 baseNodeType errorNode
commentNode
 cells commentKeywordCell
 catchAllCellType commentCell
 catchAllNodeType commentNode
selectorNode
 inScope propertyNode commentNode
 catchAllNodeType selectorNode
 boolean isSelectorNode true
 javascript
  getSelector() {
   const parentSelector = this.getParent().getSelector()
   return this.getFirstWord()
    .split(",")
    .map(part => {
     if (part.startsWith("&")) return parentSelector + part.substr(1)
     return parentSelector ? parentSelector + " " + part : part
    })
    .join(",")
  }
  compile() {
   const propertyNodes = this.getChildren().filter(node => node.doesExtend("propertyNode"))
   if (!propertyNodes.length) return ""
   const spaces = "  "
   return \`\${this.getSelector()} {
  \${propertyNodes.map(child => child.compile(spaces)).join("\\n")}
  }\\n\`
  }
 cells selectorCell`)
      return this._cachedGrammarProgramRoot
    }
    static getNodeTypeMap() {
      return { hakonNode: hakonNode, propertyNode: propertyNode, errorNode: errorNode, commentNode: commentNode, selectorNode: selectorNode }
    }
  }

  class propertyNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(errorNode, undefined, undefined)
    }
    get propertyKeywordCell() {
      return this.getWord(0)
    }
    get cssValueCell() {
      return this.getWordsFrom(1)
    }
    compile(spaces) {
      return `${spaces}${this.getFirstWord()}: ${this.getContent()};`
    }
  }

  class errorNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(errorNode, undefined, undefined)
    }
    getErrors() {
      return this._getErrorNodeErrors()
    }
    get errorCell() {
      return this.getWordsFrom(0)
    }
  }

  class commentNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(commentNode, undefined, undefined)
    }
    get commentKeywordCell() {
      return this.getWord(0)
    }
    get commentCell() {
      return this.getWordsFrom(1)
    }
  }

  class selectorNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        selectorNode,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {
          "border-bottom-right-radius": propertyNode,
          "transition-timing-function": propertyNode,
          "animation-iteration-count": propertyNode,
          "animation-timing-function": propertyNode,
          "border-bottom-left-radius": propertyNode,
          "border-top-right-radius": propertyNode,
          "border-top-left-radius": propertyNode,
          "background-attachment": propertyNode,
          "background-blend-mode": propertyNode,
          "text-decoration-color": propertyNode,
          "text-decoration-style": propertyNode,
          "overscroll-behavior-x": propertyNode,
          "-webkit-touch-callout": propertyNode,
          "animation-play-state": propertyNode,
          "text-decoration-line": propertyNode,
          "animation-direction": propertyNode,
          "animation-fill-mode": propertyNode,
          "backface-visibility": propertyNode,
          "background-position": propertyNode,
          "border-bottom-color": propertyNode,
          "border-bottom-style": propertyNode,
          "border-bottom-width": propertyNode,
          "border-image-outset": propertyNode,
          "border-image-repeat": propertyNode,
          "border-image-source": propertyNode,
          "hanging-punctuation": propertyNode,
          "list-style-position": propertyNode,
          "transition-duration": propertyNode,
          "transition-property": propertyNode,
          "-webkit-user-select": propertyNode,
          "animation-duration": propertyNode,
          "border-image-slice": propertyNode,
          "border-image-width": propertyNode,
          "border-right-color": propertyNode,
          "border-right-style": propertyNode,
          "border-right-width": propertyNode,
          "perspective-origin": propertyNode,
          "-khtml-user-select": propertyNode,
          "background-origin": propertyNode,
          "background-repeat": propertyNode,
          "border-left-color": propertyNode,
          "border-left-style": propertyNode,
          "border-left-width": propertyNode,
          "column-rule-color": propertyNode,
          "column-rule-style": propertyNode,
          "column-rule-width": propertyNode,
          "counter-increment": propertyNode,
          "page-break-before": propertyNode,
          "page-break-inside": propertyNode,
          "background-color": propertyNode,
          "background-image": propertyNode,
          "border-top-color": propertyNode,
          "border-top-style": propertyNode,
          "border-top-width": propertyNode,
          "font-size-adjust": propertyNode,
          "list-style-image": propertyNode,
          "page-break-after": propertyNode,
          "transform-origin": propertyNode,
          "transition-delay": propertyNode,
          "-ms-touch-action": propertyNode,
          "-moz-user-select": propertyNode,
          "animation-delay": propertyNode,
          "background-clip": propertyNode,
          "background-size": propertyNode,
          "border-collapse": propertyNode,
          "justify-content": propertyNode,
          "list-style-type": propertyNode,
          "text-align-last": propertyNode,
          "text-decoration": propertyNode,
          "transform-style": propertyNode,
          "-ms-user-select": propertyNode,
          "animation-name": propertyNode,
          "border-spacing": propertyNode,
          "flex-direction": propertyNode,
          "letter-spacing": propertyNode,
          "outline-offset": propertyNode,
          "padding-bottom": propertyNode,
          "text-transform": propertyNode,
          "vertical-align": propertyNode,
          "align-content": propertyNode,
          "border-bottom": propertyNode,
          "border-radius": propertyNode,
          "counter-reset": propertyNode,
          "margin-bottom": propertyNode,
          "outline-color": propertyNode,
          "outline-style": propertyNode,
          "outline-width": propertyNode,
          "padding-right": propertyNode,
          "text-overflow": propertyNode,
          "border-color": propertyNode,
          "border-image": propertyNode,
          "border-right": propertyNode,
          "border-style": propertyNode,
          "border-width": propertyNode,
          "caption-side": propertyNode,
          "column-count": propertyNode,
          "column-width": propertyNode,
          "font-stretch": propertyNode,
          "font-variant": propertyNode,
          "margin-right": propertyNode,
          "padding-left": propertyNode,
          "table-layout": propertyNode,
          "text-justify": propertyNode,
          "unicode-bidi": propertyNode,
          "word-spacing": propertyNode,
          "touch-action": propertyNode,
          "align-items": propertyNode,
          "border-left": propertyNode,
          "column-fill": propertyNode,
          "column-rule": propertyNode,
          "column-span": propertyNode,
          "empty-cells": propertyNode,
          "flex-shrink": propertyNode,
          "font-family": propertyNode,
          "font-weight": propertyNode,
          "line-height": propertyNode,
          "margin-left": propertyNode,
          "padding-top": propertyNode,
          perspective: propertyNode,
          "text-indent": propertyNode,
          "text-shadow": propertyNode,
          "white-space": propertyNode,
          "user-select": propertyNode,
          "align-self": propertyNode,
          background: propertyNode,
          "border-top": propertyNode,
          "box-shadow": propertyNode,
          "box-sizing": propertyNode,
          "column-gap": propertyNode,
          "flex-basis": propertyNode,
          "@font-face": propertyNode,
          "font-style": propertyNode,
          "@keyframes": propertyNode,
          "list-style": propertyNode,
          "margin-top": propertyNode,
          "max-height": propertyNode,
          "min-height": propertyNode,
          "overflow-x": propertyNode,
          "overflow-y": propertyNode,
          "text-align": propertyNode,
          transition: propertyNode,
          visibility: propertyNode,
          "word-break": propertyNode,
          animation: propertyNode,
          direction: propertyNode,
          "flex-flow": propertyNode,
          "flex-grow": propertyNode,
          "flex-wrap": propertyNode,
          "font-size": propertyNode,
          "max-width": propertyNode,
          "min-width": propertyNode,
          "nav-index": propertyNode,
          "nav-right": propertyNode,
          transform: propertyNode,
          "word-wrap": propertyNode,
          "nav-down": propertyNode,
          "nav-left": propertyNode,
          overflow: propertyNode,
          position: propertyNode,
          "tab-size": propertyNode,
          columns: propertyNode,
          content: propertyNode,
          display: propertyNode,
          opacity: propertyNode,
          outline: propertyNode,
          padding: propertyNode,
          "z-index": propertyNode,
          border: propertyNode,
          bottom: propertyNode,
          cursor: propertyNode,
          filter: propertyNode,
          height: propertyNode,
          margin: propertyNode,
          "@media": propertyNode,
          "nav-up": propertyNode,
          quotes: propertyNode,
          resize: propertyNode,
          clear: propertyNode,
          color: propertyNode,
          float: propertyNode,
          order: propertyNode,
          right: propertyNode,
          width: propertyNode,
          clip: propertyNode,
          fill: propertyNode,
          flex: propertyNode,
          font: propertyNode,
          left: propertyNode,
          all: propertyNode,
          top: propertyNode,
          comment: commentNode
        }),
        undefined
      )
    }
    get selectorCell() {
      return this.getWord(0)
    }
    get isSelectorNode() {
      return true
    }
    getSelector() {
      const parentSelector = this.getParent().getSelector()
      return this.getFirstWord()
        .split(",")
        .map(part => {
          if (part.startsWith("&")) return parentSelector + part.substr(1)
          return parentSelector ? parentSelector + " " + part : part
        })
        .join(",")
    }
    compile() {
      const propertyNodes = this.getChildren().filter(node => node.doesExtend("propertyNode"))
      if (!propertyNodes.length) return ""
      const spaces = "  "
      return `${this.getSelector()} {
${propertyNodes.map(child => child.compile(spaces)).join("\n")}
}\n`
    }
  }

  window.hakonNode = hakonNode
}

const WillowConstants = {}
WillowConstants.ShadowEvents = {}
WillowConstants.ShadowEvents.click = "click"
WillowConstants.ShadowEvents.change = "change"
WillowConstants.ShadowEvents.mouseover = "mouseover"
WillowConstants.ShadowEvents.mouseout = "mouseout"
WillowConstants.ShadowEvents.mousedown = "mousedown"
WillowConstants.ShadowEvents.contextmenu = "contextmenu"
WillowConstants.ShadowEvents.keypress = "keypress"
WillowConstants.ShadowEvents.keyup = "keyup"
WillowConstants.ShadowEvents.focus = "focus"
WillowConstants.ShadowEvents.mousemove = "mousemove"
WillowConstants.ShadowEvents.dblclick = "dblclick"
WillowConstants.ShadowEvents.submit = "submit"
WillowConstants.ShadowEvents.blur = "blur"
WillowConstants.ShadowEvents.paste = "paste"
WillowConstants.ShadowEvents.copy = "copy"
WillowConstants.ShadowEvents.resize = "resize"
WillowConstants.ShadowEvents.cut = "cut"
WillowConstants.ShadowEvents.drop = "drop"
WillowConstants.ShadowEvents.dragover = "dragover"
WillowConstants.ShadowEvents.dragenter = "dragenter"
WillowConstants.ShadowEvents.dragleave = "dragleave"
WillowConstants.ShadowEvents.ready = "ready"
// todo: cleanup
WillowConstants.DataShadowEvents = {}
WillowConstants.DataShadowEvents.onClickCommand = "stumpOnClickCommand"
WillowConstants.DataShadowEvents.onShiftClickCommand = "stumpOnShiftClickCommand"
WillowConstants.DataShadowEvents.onBlurCommand = "stumpOnBlurCommand"
WillowConstants.DataShadowEvents.onContextMenuCommand = "stumpOnContextMenuCommand"
WillowConstants.DataShadowEvents.onChangeCommand = "stumpOnChangeCommand"
WillowConstants.DataShadowEvents.onDblClickCommand = "stumpOnDblClickCommand"
// todo: cleanup
WillowConstants.titleTag = "titleTag"
WillowConstants.styleTag = "styleTag"
WillowConstants.tagMap = {}
WillowConstants.tagMap[WillowConstants.styleTag] = "style"
WillowConstants.tagMap[WillowConstants.titleTag] = "title"
WillowConstants.tags = {}
WillowConstants.tags.html = "html"
WillowConstants.tags.head = "head"
WillowConstants.tags.body = "body"
WillowConstants.stumpCollapse = "stumpCollapse"
WillowConstants.uidAttribute = "stumpUid"
WillowConstants.class = "class"
WillowConstants.type = "type"
WillowConstants.value = "value"
WillowConstants.name = "name"
WillowConstants.checkbox = "checkbox"
WillowConstants.checkedSelector = ":checked"
WillowConstants.contenteditable = "contenteditable"
WillowConstants.inputTypes = ["input", "textarea"]
var CacheType
;(function(CacheType) {
  CacheType["inBrowserMemory"] = "inBrowserMemory"
})(CacheType || (CacheType = {}))
class WillowHTTPResponse {
  constructor(superAgentResponse) {
    this._cacheType = CacheType.inBrowserMemory
    this._fromCache = false
    this._cacheTime = Date.now()
    this._superAgentResponse = superAgentResponse
    this._mimeType = superAgentResponse && superAgentResponse.type
  }
  // todo: ServerMemoryCacheTime and ServerMemoryDiskCacheTime
  get cacheTime() {
    return this._cacheTime
  }
  get cacheType() {
    return this._cacheType
  }
  get body() {
    return this._superAgentResponse && this._superAgentResponse.body
  }
  get text() {
    if (this._text === undefined) this._text = this._superAgentResponse && this._superAgentResponse.text ? this._superAgentResponse.text : this.body ? JSON.stringify(this.body, null, 2) : ""
    return this._text
  }
  get asJson() {
    return this.body ? this.body : JSON.parse(this.text)
  }
  get fromCache() {
    return this._fromCache
  }
  setFromCache(val) {
    this._fromCache = val
    return this
  }
  getParsedDataOrText() {
    if (this._mimeType === "text/csv") return this.text
    return this.body || this.text
  }
}
class WillowHTTPProxyCacheResponse extends WillowHTTPResponse {
  constructor(proxyServerResponse) {
    super()
    this._proxyServerResponse = proxyServerResponse
    this._cacheType = proxyServerResponse.body.cacheType
    this._cacheTime = proxyServerResponse.body.cacheTime
    this._text = proxyServerResponse.body.text
  }
}
class AbstractWillowShadow {
  constructor(stumpNode) {
    this._stumpNode = stumpNode
  }
  getShadowStumpNode() {
    return this._stumpNode
  }
  getShadowValue() {
    return this._val
  }
  removeShadow() {
    return this
  }
  setInputOrTextAreaValue(value) {
    this._val = value
    return this
  }
  getShadowParent() {
    return this.getShadowStumpNode()
      .getParent()
      .getShadow()
  }
  getPositionAndDimensions(gridSize = 1) {
    const offset = this.getShadowOffset()
    const parentOffset = this.getShadowParent().getShadowOffset()
    return {
      left: Math.floor((offset.left - parentOffset.left) / gridSize),
      top: Math.floor((offset.top - parentOffset.top) / gridSize),
      width: Math.floor(this.getShadowWidth() / gridSize),
      height: Math.floor(this.getShadowHeight() / gridSize)
    }
  }
  shadowHasClass(name) {
    return false
  }
  getShadowAttr(name) {
    return ""
  }
  makeResizable(options) {
    return this
  }
  makeDraggable(options) {
    return this
  }
  makeSelectable(options) {
    return this
  }
  isShadowChecked() {
    return false
  }
  getShadowHtml() {
    return ""
  }
  getShadowOffset() {
    return { left: 111, top: 111 }
  }
  getShadowWidth() {
    return 111
  }
  getShadowHeight() {
    return 111
  }
  isShadowResizable() {
    return false
  }
  setShadowAttr(name, value) {
    return this
  }
  isShadowDraggable() {
    return this.shadowHasClass("draggable")
  }
  toggleShadow() {}
  addClassToShadow(className) {}
  removeClassFromShadow(className) {
    return this
  }
  onShadowEvent(event, selector, fn) {
    // todo:
    return this
  }
  offShadowEvent(event, fn) {
    // todo:
    return this
  }
  triggerShadowEvent(name) {
    return this
  }
  getShadowPosition() {
    return {
      left: 111,
      top: 111
    }
  }
  getShadowOuterHeight() {
    return 11
  }
  getShadowOuterWidth() {
    return 11
  }
  getShadowCss(property) {
    return ""
  }
  setShadowCss(css) {
    return this
  }
  insertHtmlNode(childNode, index) {}
  getShadowElement() {}
}
class WillowShadow extends AbstractWillowShadow {}
class WillowStore {
  constructor() {
    this._values = {}
  }
  get(key) {
    return this._values[key]
  }
  set(key, value) {
    this._values[key] = value
    return this
  }
  remove(key) {
    delete this._values[key]
  }
  each(fn) {
    Object.keys(this._values).forEach(key => {
      fn(this._values[key], key)
    })
  }
  clearAll() {
    this._values = {}
  }
}
class WillowMousetrap {
  constructor() {
    this.prototype = {}
  }
  bind() {}
}
// this one should have no document, window, $, et cetera.
class AbstractWillowProgram extends stumpNode {
  constructor(fullHtmlPageUrlIncludingProtocolAndFileName) {
    super(`${WillowConstants.tags.html}
 ${WillowConstants.tags.head}
 ${WillowConstants.tags.body}`)
    this._offlineMode = false
    this._httpGetResponseCache = {}
    this.location = {}
    this._htmlStumpNode = this.nodeAt(0)
    this._headStumpNode = this.nodeAt(0).nodeAt(0)
    this._bodyStumpNode = this.nodeAt(0).nodeAt(1)
    this.addSuidsToHtmlHeadAndBodyShadows()
    this._fullHtmlPageUrlIncludingProtocolAndFileName = fullHtmlPageUrlIncludingProtocolAndFileName
    const url = new URL(fullHtmlPageUrlIncludingProtocolAndFileName)
    this.location.port = url.port
    this.location.protocol = url.protocol
    this.location.hostname = url.hostname
    this.location.host = url.host
  }
  _getPort() {
    return this.location.port ? ":" + this.location.port : ""
  }
  queryObjectToQueryString(obj) {
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(obj)) {
      params.set(key, String(value))
    }
    return params.toString()
  }
  toPrettyDeepLink(treeCode, queryObject) {
    // todo: move things to a constant.
    const nodeBreakSymbol = "~"
    const edgeSymbol = "_"
    const obj = Object.assign({}, queryObject)
    if (!treeCode.includes(nodeBreakSymbol) && !treeCode.includes(edgeSymbol)) {
      obj.nodeBreakSymbol = nodeBreakSymbol
      obj.edgeSymbol = edgeSymbol
      obj.data = encodeURIComponent(treeCode.replace(/ /g, edgeSymbol).replace(/\n/g, nodeBreakSymbol))
    } else obj.data = encodeURIComponent(treeCode)
    return this.getAppWebPageUrl() + "?" + this.queryObjectToQueryString(obj)
  }
  getHost() {
    return this.location.host
  }
  reload() {}
  toggleOfflineMode() {
    this._offlineMode = !this._offlineMode
  }
  addSuidsToHtmlHeadAndBodyShadows() {}
  getShadowClass() {
    return WillowShadow
  }
  getMockMouseEvent() {
    return {
      clientX: 0,
      clientY: 0,
      offsetX: 0,
      offsetY: 0
    }
  }
  toggleFullScreen() {}
  getMousetrap() {
    if (!this._mousetrap) this._mousetrap = new WillowMousetrap()
    return this._mousetrap
  }
  _getFocusedShadow() {
    return this._focusedShadow || this.getBodyStumpNode().getShadow()
  }
  getHeadStumpNode() {
    return this._headStumpNode
  }
  getBodyStumpNode() {
    return this._bodyStumpNode
  }
  getHtmlStumpNode() {
    return this._htmlStumpNode
  }
  getStore() {
    if (!this._store) this._store = new WillowStore()
    return this._store
  }
  someInputHasFocus() {
    const focusedShadow = this._getFocusedShadow()
    if (!focusedShadow) return false
    const stumpNode = focusedShadow.getShadowStumpNode()
    return stumpNode && stumpNode.isInputType()
  }
  copyTextToClipboard(text) {}
  setCopyData(evt, str) {}
  getAppWebPageUrl() {
    return this._fullHtmlPageUrlIncludingProtocolAndFileName
  }
  getAppWebPageParentFolderWithoutTrailingSlash() {
    return jtree.Utils.getPathWithoutFileName(this._fullHtmlPageUrlIncludingProtocolAndFileName)
  }
  _makeRelativeUrlAbsolute(url) {
    if (url.startsWith("http://") || url.startsWith("https://")) return url
    return this.getAppWebPageParentFolderWithoutTrailingSlash() + "/" + url.replace(/^\//, "")
  }
  async makeUrlAbsoluteAndHttpGetUrl(url, queryStringObject, responseClass = WillowHTTPResponse) {
    return this.httpGetUrl(this._makeRelativeUrlAbsolute(url), queryStringObject, responseClass)
  }
  async httpGetUrl(url, queryStringObject, responseClass = WillowHTTPResponse) {
    if (this._offlineMode) return new WillowHTTPResponse()
    const superAgentResponse = await superagent
      .get(url)
      .query(queryStringObject)
      .set(this._headers || {})
    return new responseClass(superAgentResponse)
  }
  _getFromResponseCache(cacheKey) {
    const hit = this._httpGetResponseCache[cacheKey]
    if (hit) hit.setFromCache(true)
    return hit
  }
  _setInResponseCache(url, res) {
    this._httpGetResponseCache[url] = res
    return this
  }
  async httpGetUrlFromCache(url, queryStringMap = {}, responseClass = WillowHTTPResponse) {
    const cacheKey = url + JSON.stringify(queryStringMap)
    const cacheHit = this._getFromResponseCache(cacheKey)
    if (!cacheHit) {
      const res = await this.httpGetUrl(url, queryStringMap, responseClass)
      this._setInResponseCache(cacheKey, res)
      return res
    }
    return cacheHit
  }
  async httpGetUrlFromProxyCache(url) {
    const queryStringMap = {}
    queryStringMap.url = url
    queryStringMap.cacheOnServer = "true"
    return await this.httpGetUrlFromCache("/proxy", queryStringMap, WillowHTTPProxyCacheResponse)
  }
  async httpPostUrl(url, data) {
    if (this._offlineMode) return new WillowHTTPResponse()
    const superAgentResponse = await superagent
      .post(this._makeRelativeUrlAbsolute(url))
      .set(this._headers || {})
      .send(data)
    return new WillowHTTPResponse(superAgentResponse)
  }
  encodeURIComponent(str) {
    return encodeURIComponent(str)
  }
  downloadFile(data, filename, filetype) {
    // noop
  }
  async appendScript(url) {}
  getWindowTitle() {
    // todo: deep getNodeByBase/withBase/type/word or something?
    const nodes = this.getTopDownArray()
    const titleNode = nodes.find(node => node.getFirstWord() === WillowConstants.titleTag)
    return titleNode ? titleNode.getContent() : ""
  }
  setWindowTitle(value) {
    const nodes = this.getTopDownArray()
    const headNode = nodes.find(node => node.getFirstWord() === WillowConstants.tags.head)
    headNode.touchNode(WillowConstants.titleTag).setContent(value)
    return this
  }
  _getHostname() {
    return this.location.hostname || ""
  }
  openUrl(link) {
    // noop in willow
  }
  getPageHtml() {
    return this.getHtmlStumpNode().toHtmlWithSuids()
  }
  getStumpNodeFromElement(el) {}
  setPasteHandler(fn) {
    return this
  }
  setErrorHandler(fn) {
    return this
  }
  setCopyHandler(fn) {
    return this
  }
  setCutHandler(fn) {
    return this
  }
  setResizeEndHandler(fn) {
    return this
  }
  async confirmThen(message) {
    return true
  }
  async promptThen(message, value) {
    return value
  }
  setLoadedDroppedFileHandler(callback, helpText = "") {}
  getWindowSize() {
    return {
      width: 1111,
      height: 1111
    }
  }
  getDocumentSize() {
    return this.getWindowSize()
  }
  isExternalLink(link) {
    if (link && link.substr(0, 1) === "/") return false
    if (!link.includes("//")) return false
    const hostname = this._getHostname()
    const url = new URL(link)
    return url.hostname && hostname !== url.hostname
  }
  forceRepaint() {}
  blurFocusedInput() {}
}
class WillowProgram extends AbstractWillowProgram {
  constructor(fullHtmlPageUrlIncludingProtocolAndFileName) {
    super(fullHtmlPageUrlIncludingProtocolAndFileName)
    this._offlineMode = true
  }
}
WillowProgram._stumpsOnPage = 0
class WillowBrowserShadow extends AbstractWillowShadow {
  _getJQElement() {
    // todo: speedup?
    if (!this._cachedEl) this._cachedEl = jQuery(`[${WillowConstants.uidAttribute}="${this.getShadowStumpNode()._getUid()}"]`)
    return this._cachedEl
  }
  getShadowElement() {
    return this._getJQElement()[0]
  }
  getShadowPosition() {
    return this._getJQElement().position()
  }
  shadowHasClass(name) {
    return this._getJQElement().hasClass(name)
  }
  getShadowHtml() {
    return this._getJQElement().html()
  }
  getShadowValue() {
    // todo: cleanup, add tests
    if (this.getShadowStumpNode().isInputType()) return this._getJQElement().val()
    return this._getJQElement().val() || this.getShadowValueFromAttr()
  }
  getShadowValueFromAttr() {
    return this._getJQElement().attr(WillowConstants.value)
  }
  getShadowOuterHeight() {
    return this._getJQElement().outerHeight()
  }
  getShadowOuterWidth() {
    return this._getJQElement().outerWidth()
  }
  isShadowChecked() {
    return this._getJQElement().is(WillowConstants.checkedSelector)
  }
  getShadowWidth() {
    return this._getJQElement().width()
  }
  getShadowHeight() {
    return this._getJQElement().height()
  }
  getShadowOffset() {
    return this._getJQElement().offset()
  }
  getShadowAttr(name) {
    return this._getJQElement().attr(name)
  }
  _logMessage(type) {
    if (true) return true
    WillowBrowserShadow._shadowUpdateNumber++
    console.log(`DOM Update ${WillowBrowserShadow._shadowUpdateNumber}: ${type}`)
  }
  getShadowCss(prop) {
    return this._getJQElement().css(prop)
  }
  isShadowResizable() {
    return this._getJQElement().find(".ui-resizable-handle").length > 0
  }
  triggerShadowEvent(event) {
    this._getJQElement().trigger(event)
    this._logMessage("trigger")
    return this
  }
  // BEGIN MUTABLE METHODS:
  // todo: add tests
  // todo: idea, don't "paint" wall (dont append it to parent, until done.)
  insertHtmlNode(childStumpNode, index) {
    const newChildJqElement = jQuery(childStumpNode.toHtmlWithSuids())
    newChildJqElement.data("stumpNode", childStumpNode) // todo: what do we use this for?
    const jqEl = this._getJQElement()
    // todo: can we virtualize this?
    // would it be a "virtual shadow?"
    if (index === undefined) jqEl.append(newChildJqElement)
    else if (index === 0) jqEl.prepend(newChildJqElement)
    else jQuery(jqEl.children().get(index - 1)).after(newChildJqElement)
    WillowProgram._stumpsOnPage++
    this._logMessage("insert")
  }
  addClassToShadow(className) {
    this._getJQElement().addClass(className)
    this._logMessage("addClass")
    return this
  }
  removeClassFromShadow(className) {
    this._getJQElement().removeClass(className)
    this._logMessage("removeClass")
    return this
  }
  onShadowEvent(event, two, three) {
    this._getJQElement().on(event, two, three)
    this._logMessage("bind on")
    return this
  }
  offShadowEvent(event, fn) {
    this._getJQElement().off(event, fn)
    this._logMessage("bind off")
    return this
  }
  toggleShadow() {
    this._getJQElement().toggle()
    this._logMessage("toggle")
    return this
  }
  makeResizable(options) {
    this._getJQElement().resizable(options)
    this._logMessage("resizable")
    return this
  }
  removeShadow() {
    this._getJQElement().remove()
    WillowProgram._stumpsOnPage--
    this._logMessage("remove")
    return this
  }
  setInputOrTextAreaValue(value) {
    this._getJQElement().val(value)
    this._logMessage("val")
    return this
  }
  setShadowAttr(name, value) {
    this._getJQElement().attr(name, value)
    this._logMessage("attr")
    return this
  }
  makeDraggable(options) {
    this._logMessage("draggable")
    this._getJQElement().draggable(options)
    return this
  }
  setShadowCss(css) {
    this._getJQElement().css(css)
    this._logMessage("css")
    return this
  }
  makeSelectable(options) {
    this._getJQElement().selectable(options)
    this._logMessage("selectable")
    return this
  }
}
WillowBrowserShadow._shadowUpdateNumber = 0 // todo: what is this for, debugging perf?
// same thing, except with side effects.
class WillowBrowserProgram extends AbstractWillowProgram {
  findStumpNodesByShadowClass(className) {
    const stumpNodes = []
    const that = this
    jQuery("." + className).each(function() {
      stumpNodes.push(that.getStumpNodeFromElement(this))
    })
    return stumpNodes
  }
  addSuidsToHtmlHeadAndBodyShadows() {
    jQuery(WillowConstants.tags.html).attr(WillowConstants.uidAttribute, this.getHtmlStumpNode()._getUid())
    jQuery(WillowConstants.tags.head).attr(WillowConstants.uidAttribute, this.getHeadStumpNode()._getUid())
    jQuery(WillowConstants.tags.body).attr(WillowConstants.uidAttribute, this.getBodyStumpNode()._getUid())
  }
  getShadowClass() {
    return WillowBrowserShadow
  }
  setCopyHandler(fn) {
    jQuery(document).on(WillowConstants.ShadowEvents.copy, fn)
    return this
  }
  setCutHandler(fn) {
    jQuery(document).on(WillowConstants.ShadowEvents.cut, fn)
    return this
  }
  setPasteHandler(fn) {
    window.addEventListener(WillowConstants.ShadowEvents.paste, fn, false)
    return this
  }
  setErrorHandler(fn) {
    window.addEventListener("error", fn)
    window.addEventListener("unhandledrejection", fn)
    return this
  }
  toggleFullScreen() {
    const doc = document
    if ((doc.fullScreenElement && doc.fullScreenElement !== null) || (!doc.mozFullScreen && !doc.webkitIsFullScreen)) {
      if (doc.documentElement.requestFullScreen) doc.documentElement.requestFullScreen()
      else if (doc.documentElement.mozRequestFullScreen) doc.documentElement.mozRequestFullScreen()
      else if (doc.documentElement.webkitRequestFullScreen) doc.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
    } else {
      if (doc.cancelFullScreen) doc.cancelFullScreen()
      else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen()
      else if (doc.webkitCancelFullScreen) doc.webkitCancelFullScreen()
    }
  }
  setCopyData(evt, str) {
    const originalEvent = evt.originalEvent
    originalEvent.preventDefault()
    originalEvent.clipboardData.setData("text/plain", str)
    originalEvent.clipboardData.setData("text/html", str)
  }
  getMousetrap() {
    return window.Mousetrap
  }
  copyTextToClipboard(text) {
    // http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    const textArea = document.createElement("textarea")
    textArea.style.position = "fixed"
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.width = "2em"
    textArea.style.height = "2em"
    textArea.style.padding = "0"
    textArea.style.border = "none"
    textArea.style.outline = "none"
    textArea.style.boxShadow = "none"
    textArea.style.background = "transparent"
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    try {
      const successful = document.execCommand("copy")
    } catch (err) {}
    document.body.removeChild(textArea)
  }
  getStore() {
    return window.store
  }
  getHost() {
    return location.host
  }
  _getHostname() {
    return location.hostname
  }
  async appendScript(url) {
    if (!url) return undefined
    if (!this._loadingPromises) this._loadingPromises = {}
    if (this._loadingPromises[url]) return this._loadingPromises[url]
    if (this.isNodeJs()) return undefined
    this._loadingPromises[url] = this._appendScript(url)
    return this._loadingPromises[url]
  }
  _appendScript(url) {
    //https://bradb.net/blog/promise-based-js-script-loader/
    return new Promise(function(resolve, reject) {
      let resolved = false
      const scriptEl = document.createElement("script")
      scriptEl.type = "text/javascript"
      scriptEl.src = url
      scriptEl.async = true
      scriptEl.onload = scriptEl.onreadystatechange = function() {
        if (!resolved && (!this.readyState || this.readyState == "complete")) {
          resolved = true
          resolve(this)
        }
      }
      scriptEl.onerror = scriptEl.onabort = reject
      document.head.appendChild(scriptEl)
    })
  }
  downloadFile(data, filename, filetype) {
    const downloadLink = document.createElement("a")
    downloadLink.setAttribute("href", `data:${filetype},` + encodeURIComponent(data))
    downloadLink.setAttribute("download", filename)
    downloadLink.click()
  }
  reload() {
    window.location.reload()
  }
  openUrl(link) {
    window.open(link)
  }
  setResizeEndHandler(fn) {
    let resizeTimer
    jQuery(window).on(WillowConstants.ShadowEvents.resize, evt => {
      const target = jQuery(evt.target)
      if (target.is("div")) return // dont resize on div resizes
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        fn({ width: target.width(), height: target.height() })
      }, 100)
    })
    return this
  }
  getStumpNodeFromElement(el) {
    const jqEl = jQuery(el)
    return this.getHtmlStumpNode().getNodeByGuid(parseInt(jqEl.attr(WillowConstants.uidAttribute)))
  }
  forceRepaint() {
    jQuery(window).width()
  }
  getBrowserHtml() {
    return document.documentElement.outerHTML
  }
  async confirmThen(message) {
    return confirm(message)
  }
  async promptThen(message, value) {
    return prompt(message, value)
  }
  getWindowSize() {
    const windowStumpNode = jQuery(window)
    return {
      width: windowStumpNode.width(),
      height: windowStumpNode.height()
    }
  }
  getDocumentSize() {
    const documentStumpNode = jQuery(document)
    return {
      width: documentStumpNode.width(),
      height: documentStumpNode.height()
    }
  }
  // todo: denote the side effect
  blurFocusedInput() {
    // todo: test against browser.
    document.activeElement.blur()
  }
  setLoadedDroppedFileHandler(callback, helpText = "") {
    const bodyStumpNode = this.getBodyStumpNode()
    const bodyShadow = bodyStumpNode.getShadow()
    // Added the below to ensure dragging from the chrome downloads bar works
    // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
    const handleChromeBug = event => {
      const originalEvent = event.originalEvent
      const effect = originalEvent.dataTransfer.effectAllowed
      originalEvent.dataTransfer.dropEffect = effect === "move" || effect === "linkMove" ? "move" : "copy"
    }
    const dragoverHandler = event => {
      handleChromeBug(event)
      event.preventDefault()
      event.stopPropagation()
      if (!bodyStumpNode.stumpNodeHasClass("dragOver")) {
        bodyStumpNode.insertChildNode(`div ${helpText}
 id dragOverHelp`)
        bodyStumpNode.addClassToStumpNode("dragOver")
        // Add the help, and then hopefull we'll get a dragover event on the dragOverHelp, then
        // 50ms later, add the dragleave handler, and from now on drag leave will only happen on the help
        // div
        setTimeout(function() {
          bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.dragleave, dragleaveHandler)
        }, 50)
      }
    }
    const dragleaveHandler = event => {
      event.preventDefault()
      event.stopPropagation()
      bodyStumpNode.removeClassFromStumpNode("dragOver")
      bodyStumpNode.findStumpNodeByChild("id dragOverHelp").removeStumpNode()
      bodyShadow.offShadowEvent(WillowConstants.ShadowEvents.dragleave, dragleaveHandler)
    }
    const dropHandler = async event => {
      event.preventDefault()
      event.stopPropagation()
      bodyStumpNode.removeClassFromStumpNode("dragOver")
      bodyStumpNode.findStumpNodeByChild("id dragOverHelp").removeStumpNode()
      const droppedItems = event.originalEvent.dataTransfer.items
      // NOTE: YOU NEED TO STAY IN THE "DROP" EVENT, OTHERWISE THE DATATRANSFERITEMS MUTATE
      // (BY DESIGN) https://bugs.chromium.org/p/chromium/issues/detail?id=137231
      // DO NOT ADD AN AWAIT IN THIS LOOP. IT WILL BREAK.
      const items = []
      for (let droppedItem of droppedItems) {
        const entry = droppedItem.webkitGetAsEntry()
        items.push(this._handleDroppedEntry(entry))
      }
      const results = await Promise.all(items)
      callback(results)
    }
    bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.dragover, dragoverHandler)
    bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.drop, dropHandler)
    // todo: why do we do this?
    bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.dragenter, function(event) {
      event.preventDefault()
      event.stopPropagation()
    })
  }
  _handleDroppedEntry(item, path = "") {
    // http://stackoverflow.com/questions/3590058/does-html5-allow-drag-drop-upload-of-folders-or-a-folder-tree
    // http://stackoverflow.com/questions/6756583/prevent-browser-from-loading-a-drag-and-dropped-file
    return item.isFile ? this._handleDroppedFile(item) : this._handleDroppedDirectory(item, path)
  }
  _handleDroppedDirectory(item, path) {
    return new Promise((resolve, reject) => {
      item.createReader().readEntries(async entries => {
        const promises = []
        for (let i = 0; i < entries.length; i++) {
          promises.push(this._handleDroppedEntry(entries[i], path + item.name + "/"))
        }
        const res = await Promise.all(promises)
        resolve(res)
      })
    })
  }
  _handleDroppedFile(file) {
    // https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
    // http://www.sitepoint.com/html5-javascript-open-dropped-files/
    return new Promise((resolve, reject) => {
      file.file(data => {
        const reader = new FileReader()
        reader.onload = evt => {
          resolve({ data: evt.target.result, filename: data.name })
        }
        reader.onerror = err => reject(err)
        reader.readAsText(data)
      })
    })
  }
  _getFocusedShadow() {
    const stumpNode = this.getStumpNodeFromElement(document.activeElement)
    return stumpNode && stumpNode.getShadow()
  }
}
class AbstractCommander {
  constructor(target) {
    this._target = target
  }
  getTarget() {
    return this._target
  }
  toggleTreeComponentFrameworkDebuggerCommand() {
    // todo: cleanup
    const app = this._target.getRootNode()
    const node = app.getNode("TreeComponentFrameworkDebuggerComponent")
    if (node) {
      node.unmountAndDestroy()
    } else {
      app.appendLine("TreeComponentFrameworkDebuggerComponent")
      app.renderAndGetRenderReport()
    }
  }
}
class AbstractTheme {
  hakonToCss(str) {
    const hakonProgram = new hakonNode(str)
    // console.log(hakonProgram.getAllErrors())
    return hakonProgram.compile()
  }
}
class DefaultTheme extends AbstractTheme {}
class TreeComponentCommander extends AbstractCommander {
  stopPropagationCommand() {
    // intentional noop
  }
  async clearMessageBufferCommand() {
    const treeComponent = this.getTarget()
    delete treeComponent._messageBuffer
  }
  async unmountAndDestroyCommand() {
    const treeComponent = this.getTarget()
    treeComponent.unmountAndDestroy()
  }
}
class AbstractTreeComponent extends jtree.GrammarBackedNode {
  constructor() {
    super(...arguments)
    this._commander = new TreeComponentCommander(this)
  }
  getWillowProgram() {
    if (!this._willowProgram) {
      if (this.isNodeJs()) {
        this._willowProgram = new WillowProgram("http://localhost:8000/index.html")
      } else {
        this._willowProgram = new WillowBrowserProgram(window.location.href)
      }
    }
    return this._willowProgram
  }
  // todo: remove?
  async appWillFirstRender() {}
  // todo: remove?
  async appDidFirstRender() {}
  onCommandError(err) {
    throw err
  }
  _setMouseEvent(evt) {
    this._mouseEvent = evt
    return this
  }
  getMouseEvent() {
    return this._mouseEvent || this.getWillowProgram().getMockMouseEvent()
  }
  _onCommandWillRun() {
    // todo: remove. currently used by ohayo
  }
  _getCommandArguments(stumpNode, commandMethod) {
    if (commandMethod.includes(" ")) {
      // todo: cleanup and document
      // It seems the command arguments can from the method string or from form values.
      const parts = commandMethod.split(" ")
      return {
        uno: parts[1],
        dos: parts[2]
      }
    }
    const shadow = stumpNode.getShadow()
    let valueParam
    if (stumpNode.isStumpNodeCheckbox()) valueParam = shadow.isShadowChecked() ? true : false
    // todo: fix bug if nothing is entered.
    else if (shadow.getShadowValue() !== undefined) valueParam = shadow.getShadowValue()
    else valueParam = stumpNode.getStumpNodeAttr("value")
    const nameParam = stumpNode.getStumpNodeAttr("name")
    return {
      uno: valueParam,
      dos: nameParam
    }
  }
  getStumpNodeString() {
    return this.getWillowProgram()
      .getHtmlStumpNode()
      .toString()
  }
  getStumpNodeStringWithoutCssAndSvg() {
    const clone = new jtree.TreeNode(
      this.getWillowProgram()
        .getHtmlStumpNode()
        .toString()
    )
    clone.getTopDownArray().forEach(node => {
      if (node.getFirstWord() === "styleTag" || (node.getContent() || "").startsWith("<svg ")) node.destroy()
    })
    return clone.toString()
  }
  async _executeStumpNodeCommand(stumpNode, commandMethod) {
    const params = this._getCommandArguments(stumpNode, commandMethod)
    if (commandMethod.includes(" "))
      // todo: cleanup
      commandMethod = commandMethod.split(" ")[0]
    this.addToCommandLog([commandMethod, params.uno, params.dos].filter(item => item).join(" "))
    this._onCommandWillRun() // todo: remove. currently used by ohayo
    let treeComponent = stumpNode.getStumpNodeTreeComponent()
    let commander = treeComponent.getCommander()
    while (!commander[commandMethod]) {
      const parent = treeComponent.getParent()
      if (parent === treeComponent) throw new Error(`Unknown command "${commandMethod}"`)
      if (!parent) debugger
      treeComponent = parent
      commander = treeComponent.getCommander()
    }
    try {
      await commander[commandMethod](params.uno, params.dos)
    } catch (err) {
      this.onCommandError(err)
    }
  }
  _setTreeComponentFrameworkEventListeners() {
    const willowBrowser = this.getWillowProgram()
    const bodyShadow = willowBrowser.getBodyStumpNode().getShadow()
    const commander = this.getCommander()
    const app = this
    const checkAndExecute = (el, attr, evt) => {
      const stumpNode = willowBrowser.getStumpNodeFromElement(el)
      evt.preventDefault()
      evt.stopImmediatePropagation()
      this._executeStumpNodeCommand(stumpNode, stumpNode.getStumpNodeAttr(attr))
      return false
    }
    const DataShadowEvents = WillowConstants.DataShadowEvents
    bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.contextmenu, `[${DataShadowEvents.onContextMenuCommand}]`, function(evt) {
      if (evt.ctrlKey) return true
      app._setMouseEvent(evt) // todo: remove?
      return checkAndExecute(this, DataShadowEvents.onContextMenuCommand, evt)
    })
    bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.click, `[${DataShadowEvents.onClickCommand}]`, function(evt) {
      if (evt.shiftKey) return checkAndExecute(this, DataShadowEvents.onShiftClickCommand, evt)
      return checkAndExecute(this, DataShadowEvents.onClickCommand, evt)
    })
    bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.dblclick, `[${DataShadowEvents.onDblClickCommand}]`, function(evt) {
      if (evt.target !== evt.currentTarget) return true // direct dblclicks only
      app._setMouseEvent(evt) // todo: remove?
      return checkAndExecute(this, DataShadowEvents.onDblClickCommand, evt)
    })
    bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.blur, `[${DataShadowEvents.onBlurCommand}]`, function(evt) {
      return checkAndExecute(this, DataShadowEvents.onBlurCommand, evt)
    })
    bodyShadow.onShadowEvent(WillowConstants.ShadowEvents.change, `[${DataShadowEvents.onChangeCommand}]`, function(evt) {
      return checkAndExecute(this, DataShadowEvents.onChangeCommand, evt)
    })
  }
  getDefaultStartState() {
    return ""
  }
  static async startApp(appClass) {
    document.addEventListener(
      "DOMContentLoaded",
      async () => {
        const win = window
        if (!win.app) {
          const startState = appClass.getDefaultStartState()
          const anyAppClass = appClass // todo: cleanup
          win.app = new anyAppClass(startState)
          win.app._setTreeComponentFrameworkEventListeners()
          await win.app.appWillFirstRender()
          win.app.renderAndGetRenderReport(win.app.getWillowProgram().getBodyStumpNode())
          win.app.appDidFirstRender()
        }
      },
      false
    )
  }
  getCommander() {
    return this._commander
  }
  getStumpNode() {
    return this._htmlStumpNode
  }
  toHakonCode() {
    return ""
  }
  getTheme() {
    if (!this.isRoot()) return this.getRootNode().getTheme()
    if (!this._theme) this._theme = new DefaultTheme()
    return this._theme
  }
  getCommandsBuffer() {
    if (!this._commandsBuffer) this._commandsBuffer = []
    return this._commandsBuffer
  }
  addToCommandLog(command) {
    this.getCommandsBuffer().push({
      command: command,
      time: this._getProcessTimeInMilliseconds()
    })
  }
  getMessageBuffer() {
    if (!this._messageBuffer) this._messageBuffer = new jtree.TreeNode()
    return this._messageBuffer
  }
  // todo: move this to tree class? or other higher level class?
  addStumpCodeMessageToLog(message) {
    // note: we have 1 parameter, and are going to do type inference first.
    // Todo: add actions that can be taken from a message?
    // todo: add tests
    this.getMessageBuffer().appendLineAndChildren("message", message)
  }
  addStumpErrorMessageToLog(errorMessage) {
    return this.addStumpCodeMessageToLog(`div
 class OhayoError
 bern${jtree.TreeNode.nest(errorMessage, 2)}`)
  }
  logMessageText(message = "") {
    const pre = `pre
 bern${jtree.TreeNode.nest(message, 2)}`
    return this.addStumpCodeMessageToLog(pre)
  }
  unmount() {
    if (
      !this.isMounted() // todo: why do we need this check?
    )
      return undefined
    this._getChildTreeComponents().forEach(child => child.unmount())
    this.treeComponentWillUnmount()
    this._removeCss()
    this._removeHtml()
    delete this._lastRenderedTime
    this.treeComponentDidUnmount()
  }
  _removeHtml() {
    this._htmlStumpNode.removeStumpNode()
    delete this._htmlStumpNode
  }
  toStumpCode() {
    return `div
 class ${this.getCssClassNames().join(" ")}`
  }
  getCssClassNames() {
    return this._getJavascriptPrototypeChainUpTo("AbstractTreeComponent")
  }
  treeComponentWillMount() {}
  treeComponentDidMount() {
    AbstractTreeComponent._mountedTreeComponents++
  }
  treeComponentDidUnmount() {
    AbstractTreeComponent._mountedTreeComponents--
  }
  treeComponentWillUnmount() {}
  forceUpdate() {}
  getNewestTimeToRender() {
    return this._lastTimeToRender
  }
  _setLastRenderedTime(time) {
    this._lastRenderedTime = time
    return this
  }
  // todo: can this be async?
  treeComponentDidUpdate() {}
  _getChildTreeComponents() {
    return this.getChildrenByNodeConstructor(AbstractTreeComponent)
  }
  _hasChildrenTreeComponents() {
    return this._getChildTreeComponents().length > 0
  }
  // todo: this is hacky. we do it so we can just mount all tiles to wall.
  getStumpNodeForChildren() {
    return this.getStumpNode()
  }
  _getLastRenderedTime() {
    return this._lastRenderedTime
  }
  _getCss() {
    return this.getTheme().hakonToCss(this.toHakonCode())
  }
  toPlainHtml(containerId) {
    return `<div id="${containerId}">
 <style>${this.getTheme().hakonToCss(this.toHakonCode())}</style>
${new stumpNode(this.toStumpCode()).compile()}
</div>`
  }
  _getCssStumpCode() {
    return `styleTag
 stumpStyleFor ${this.constructor.name}
 bern${jtree.TreeNode.nest(this._getCss(), 2)}`
  }
  _updateAndGetUpdateReport() {
    const reasonForUpdatingOrNot = this.getWhetherToUpdateAndReason()
    if (!reasonForUpdatingOrNot.shouldUpdate) return reasonForUpdatingOrNot
    this._setLastRenderedTime(this._getProcessTimeInMilliseconds())
    this._removeCss()
    this._mountCss()
    // todo: fucking switch to react? looks like we don't update parent because we dont want to nuke children.
    // okay. i see why we might do that for non tile treeComponents. but for Tile treeComponents, seems like we arent nesting, so why not?
    // for now
    if (this._hasChildrenTreeComponents()) return { shouldUpdate: false, reason: "did not update because is a parent" }
    this._updateHtml()
    this._lastTimeToRender = this._getProcessTimeInMilliseconds() - this._getLastRenderedTime()
    return reasonForUpdatingOrNot
  }
  _updateHtml() {
    const stumpNodeToMountOn = this._htmlStumpNode.getParent()
    const currentIndex = this._htmlStumpNode.getIndex()
    this._removeHtml()
    this._mountHtml(stumpNodeToMountOn, this._toLoadedOrLoadingStumpCode(), currentIndex)
  }
  unmountAndDestroy() {
    this.unmount()
    return this.destroy()
  }
  // todo: move to keyword node class?
  toggle(firstWord, contentOptions) {
    const currentNode = this.getNode(firstWord)
    if (!contentOptions) return currentNode ? currentNode.unmountAndDestroy() : this.appendLine(firstWord)
    const currentContent = currentNode === undefined ? undefined : currentNode.getContent()
    const index = contentOptions.indexOf(currentContent)
    const newContent = index === -1 || index + 1 === contentOptions.length ? contentOptions[0] : contentOptions[index + 1]
    this.delete(firstWord)
    if (newContent) this.touchNode(firstWord).setContent(newContent)
    return newContent
  }
  isMounted() {
    return !!this._htmlStumpNode
  }
  // todo: move to base TreeNode?
  getNextOrPrevious(arr) {
    const length = arr.length
    const index = arr.indexOf(this)
    if (length === 1) return undefined
    if (index === length - 1) return arr[index - 1]
    return arr[index + 1]
  }
  toggleAndRender(firstWord, contentOptions) {
    this.toggle(firstWord, contentOptions)
    this.getRootNode().renderAndGetRenderReport()
  }
  _getFirstOutdatedDependency(lastRenderedTime = this._getLastRenderedTime() || 0) {
    return this.getDependencies().find(dep => dep.getLineModifiedTime() > lastRenderedTime)
  }
  getWhetherToUpdateAndReason() {
    const mTime = this.getLineModifiedTime()
    const lastRenderedTime = this._getLastRenderedTime() || 0
    const staleTime = mTime - lastRenderedTime
    if (lastRenderedTime === 0)
      return {
        shouldUpdate: true,
        reason: "shouldUpdate because this TreeComponent hasn't been rendered yet",
        staleTime: staleTime
      }
    if (staleTime > 0)
      return {
        shouldUpdate: true,
        reason: "shouldUpdate because this TreeComponent changed",
        staleTime: staleTime
      }
    const outdatedDependency = this._getFirstOutdatedDependency(lastRenderedTime)
    if (outdatedDependency)
      return {
        shouldUpdate: true,
        reason: "Should update because a dependency updated",
        dependency: outdatedDependency,
        staleTime: outdatedDependency.getLineModifiedTime() - lastRenderedTime
      }
    return {
      shouldUpdate: false,
      reason: "Should NOT update because no dependency changed",
      lastRenderedTime: lastRenderedTime,
      mTime: mTime
    }
  }
  getDependencies() {
    return []
  }
  getChildrenThatNeedRendering() {
    const all = []
    this._getTreeComponentsThatNeedRendering(all)
    return all
  }
  _getTreeComponentsThatNeedRendering(arr) {
    this._getChildTreeComponents().forEach(child => {
      const reasonForUpdatingOrNot = child.getWhetherToUpdateAndReason()
      if (!child.isMounted() || reasonForUpdatingOrNot.shouldUpdate) arr.push({ child: child, childUpdateBecause: reasonForUpdatingOrNot })
      child._getTreeComponentsThatNeedRendering(arr)
    })
  }
  toStumpLoadingCode() {
    return `div Loading ${this.getFirstWord()}...
 class ${this.getCssClassNames().join(" ")}
 id ${this.getTreeComponentId()}`
  }
  getTreeComponentId() {
    // html ids can't begin with a number
    return "treeComponent" + this._getUid()
  }
  _toLoadedOrLoadingStumpCode() {
    if (!this.isLoaded()) return this.toStumpLoadingCode()
    this.setRunTimePhaseError("renderPhase")
    try {
      return this.toStumpCode()
    } catch (err) {
      console.error(err)
      this.setRunTimePhaseError("renderPhase", err)
      return this.toStumpErrorStateCode(err)
    }
  }
  toStumpErrorStateCode(err) {
    return `div ${err}
 class ${this.getCssClassNames().join(" ")}
 id ${this.getTreeComponentId()}`
  }
  _mount(stumpNodeToMountOn, index) {
    this._setLastRenderedTime(this._getProcessTimeInMilliseconds())
    this.treeComponentWillMount()
    this._mountCss()
    this._mountHtml(stumpNodeToMountOn, this._toLoadedOrLoadingStumpCode(), index) // todo: add index back?
    this._lastTimeToRender = this._getProcessTimeInMilliseconds() - this._getLastRenderedTime()
    return this
  }
  // todo: we might be able to squeeze virtual dom in here on the mountCss and mountHtml methods.
  _mountCss() {
    // todo: only insert css once per class? have a set?
    this._cssStumpNode = this._getPageHeadStump().insertCssChildNode(this._getCssStumpCode())
  }
  _getPageHeadStump() {
    return this.getRootNode()
      .getWillowProgram()
      .getHeadStumpNode()
  }
  _removeCss() {
    this._cssStumpNode.removeCssStumpNode()
    delete this._cssStumpNode
  }
  _mountHtml(stumpNodeToMountOn, htmlCode, index) {
    this._htmlStumpNode = stumpNodeToMountOn.insertChildNode(htmlCode, index)
    this._htmlStumpNode.setStumpNodeTreeComponent(this)
  }
  _treeComponentDidUpdate() {
    this.treeComponentDidUpdate()
  }
  _treeComponentDidMount() {
    this.treeComponentDidMount()
  }
  renderAndGetRenderReport(stumpNode, index) {
    const isUpdateOp = this.isMounted()
    let treeComponentUpdateReport = {
      shouldUpdate: false,
      reason: ""
    }
    if (isUpdateOp) treeComponentUpdateReport = this._updateAndGetUpdateReport()
    else this._mount(stumpNode, index)
    const stumpNodeForChildren = this.getStumpNodeForChildren()
    // Todo: insert delayed rendering?
    const childResults = this._getChildTreeComponents().map((child, index) => child.renderAndGetRenderReport(stumpNodeForChildren, index))
    if (isUpdateOp) {
      if (treeComponentUpdateReport.shouldUpdate) {
        try {
          this._treeComponentDidUpdate()
        } catch (err) {
          console.error(err)
        }
      }
    } else {
      try {
        this._treeComponentDidMount()
      } catch (err) {
        console.error(err)
      }
    }
    let str = `${this.getWord(0) || this.constructor.name} ${isUpdateOp ? "update" : "mount"} ${treeComponentUpdateReport.shouldUpdate} ${treeComponentUpdateReport.reason}`
    childResults.forEach(child => (str += "\n" + child.toString(1)))
    return new jtree.TreeNode(str)
  }
}
AbstractTreeComponent._mountedTreeComponents = 0
class TreeComponentFrameworkDebuggerComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `.TreeComponentFrameworkDebuggerComponent
 position fixed
 top 5px
 left 5px
 z-index 1000
 background rgba(254,255,156, .95)
 box-shadow 1px 1px 1px rgba(0,0,0,.5)
 padding 12px
 overflow scroll
 max-height 500px
.TreeComponentFrameworkDebuggerComponentCloseButton
 position absolute
 cursor pointer
 opacity .9
 top 2px
 right 2px
 &:hover
  opacity 1`
  }
  toStumpCode() {
    const app = this.getRootNode()
    return `div
 class TreeComponentFrameworkDebuggerComponent
 div x
  class TreeComponentFrameworkDebuggerComponentCloseButton
  stumpOnClickCommand toggleTreeComponentFrameworkDebuggerCommand
 div
  span This app is powered by the
  a Tree Component Framework
   href https://github.com/treenotation/jtree/tree/master/treeComponentFramework
 p ${app.getNumberOfLines()} components loaded. ${WillowProgram._stumpsOnPage} stumps on page.
 pre
  bern
${app.toString(3)}`
  }
}
class AbstractGithubTriangleComponent extends AbstractTreeComponent {
  constructor() {
    super(...arguments)
    this.githubLink = `https://github.com/treenotation/jtree`
  }
  toHakonCode() {
    return `.AbstractGithubTriangleComponent
 display block
 position absolute
 top 0
 right 0`
  }
  toStumpCode() {
    return `a
 class AbstractGithubTriangleComponent
 href ${this.githubLink}
 img
  src /github-fork.svg`
  }
}
window.AbstractGithubTriangleComponent = AbstractGithubTriangleComponent
window.AbstractTreeComponent = AbstractTreeComponent
window.AbstractCommander = AbstractCommander
window.WillowConstants = WillowConstants
window.WillowProgram = WillowProgram
window.TreeComponentFrameworkDebuggerComponent = TreeComponentFrameworkDebuggerComponent
