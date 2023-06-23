(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{269:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(5),i=r(8);function u(t,e,r,n,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d,l,v={data:function(){return{orders:[]}},computed:c(c({},Object(i.c)("setting",["formatPrice"])),Object(i.c)("user",["getUser"])),created:(d=o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/web/customer-orders/"+this.getUser.email);case 2:e=t.sent,this.orders=e.data.orders;case 4:case"end":return t.stop()}}),t,this)})),l=function(){var t=this,e=arguments;return new Promise((function(r,n){var o=d.apply(t,e);function a(t){u(o,r,n,a,i,"next",t)}function i(t){u(o,r,n,a,i,"throw",t)}a(void 0)}))},function(){return l.apply(this,arguments)}),methods:{fullDate:function(t){return Object(a.a)(t,"MMMM DD, YYYY")}}},y=r(2),p=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"order-table-container"},[r("table",{staticClass:"table table-order"},[t._m(0),t._v(" "),r("tbody",[t.orders.length?t._l(t.orders,(function(e,n){return r("tr",{key:n},[r("td",{staticClass:"order-id"},[r("router-link",{staticClass:"btn-link",attrs:{to:"/pages/account/orders/"+e.id}},[t._v("#"+t._s(e.id))])],1),t._v(" "),r("td",{staticClass:"order-date"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.fullDate(e.created_at))+"\n\t\t\t\t\t\t")]),t._v(" "),r("td",{staticClass:"order-status"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.status)+"\n\t\t\t\t\t\t")]),t._v(" "),r("td",{staticClass:"order-price"},[r("span",{staticClass:"total-price"},[e.order_refunded_price<0?[r("span",{staticClass:"order-old-price",domProps:{innerHTML:t._s(t.formatPrice(e.order_total_price))}}),t._v(" "),r("span",{staticClass:"order-new-price",domProps:{innerHTML:t._s(t.formatPrice(1*e.order_total_price+1*e.order_refunded_price))}})]:[r("span",{domProps:{innerHTML:t._s(t.formatPrice(e.order_total_price))}})]],2),t._v("\n\t\t\t\t\t\t\tfor\n\t\t\t\t\t\t\t"),r("span",{staticClass:"total-items"},[t._v(t._s(e.order_total_qty)+" item"+t._s(e.order_total_qty>1?"s":""))])]),t._v(" "),r("td",{staticClass:"order-action"},[r("router-link",{staticClass:"btn btn-primary",attrs:{to:"/pages/account/orders/"+e.id}},[t._v("\n\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t")])],1)])})):r("tr",[r("td",{staticClass:"text-center",attrs:{colspan:"5"}},[t._v("\n\t\t\t\t\t\tNo Order has been made yet.\n\t\t\t\t\t")])])],2)]),t._v(" "),0===t.orders.length?r("router-link",{staticClass:"btn btn-primary text-transform-none mb-2",attrs:{to:"/shop/default"}},[t._v("Go Shop")]):t._e()],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"order-id"},[t._v("Order")]),t._v(" "),r("th",{staticClass:"order-date"},[t._v("Date")]),t._v(" "),r("th",{staticClass:"order-status"},[t._v("Status")]),t._v(" "),r("th",{staticClass:"order-price"},[t._v("Total")]),t._v(" "),r("th",{staticClass:"order-action"},[t._v("Actions")])])])}],!1,null,null,null);e.default=p.exports},5:function(t,e,r){"use strict";function n(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function o(t){return n(t)?new Date(t.getTime()):null==t?new Date(NaN):new Date(t)}function a(t){return n(t)&&!isNaN(t.getTime())}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!(e>=0&&e<=6))throw new RangeError("weekStartsOn must be between 0 and 6");var r=o(t),n=r.getDay(),a=(n+7-e)%7;return r.setDate(r.getDate()-a),r.setHours(0,0,0,0),r}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.firstDayOfWeek,n=void 0===r?0:r,a=e.firstWeekContainsDate,u=void 0===a?1:a;if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7");for(var s=o(t),c=s.getFullYear(),f=new Date(0),d=c+1;d>=c-1&&(f.setFullYear(d,0,u),f.setHours(0,0,0,0),f=i(f,n),!(s.getTime()>=f.getTime()));d--);return f}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.firstDayOfWeek,n=void 0===r?0:r,a=e.firstWeekContainsDate,s=void 0===a?1:a,c=o(t),f=i(c,n),d=u(c,{firstDayOfWeek:n,firstWeekContainsDate:s}),l=f.getTime()-d.getTime();return Math.round(l/6048e5)+1}r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return x})),r.d(e,"b",(function(){return s}));var c={months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],firstDayOfWeek:0,firstWeekContainsDate:1},f=/\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;function d(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r="".concat(Math.abs(t)),n=t<0?"-":"";r.length<e;)r="0".concat(r);return n+r}function l(t){return 15*Math.round(t.getTimezoneOffset()/15)}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=t>0?"-":"+",n=Math.abs(t),o=Math.floor(n/60),a=n%60;return r+d(o,2)+e+d(a,2)}var y=function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLocaleLowerCase():n},p={Y:function(t){var e=t.getFullYear();return e<=9999?"".concat(e):"+".concat(e)},YY:function(t){return d(t.getFullYear(),4).substr(2)},YYYY:function(t){return d(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return d(t.getMonth()+1,2)},MMM:function(t,e){return e.monthsShort[t.getMonth()]},MMMM:function(t,e){return e.months[t.getMonth()]},D:function(t){return t.getDate()},DD:function(t){return d(t.getDate(),2)},H:function(t){return t.getHours()},HH:function(t){return d(t.getHours(),2)},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(){var t=p.h.apply(p,arguments);return d(t,2)},m:function(t){return t.getMinutes()},mm:function(t){return d(t.getMinutes(),2)},s:function(t){return t.getSeconds()},ss:function(t){return d(t.getSeconds(),2)},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return d(Math.floor(t.getMilliseconds()/10),2)},SSS:function(t){return d(t.getMilliseconds(),3)},d:function(t){return t.getDay()},dd:function(t,e){return e.weekdaysMin[t.getDay()]},ddd:function(t,e){return e.weekdaysShort[t.getDay()]},dddd:function(t,e){return e.weekdays[t.getDay()]},A:function(t,e){return(e.meridiem||y)(t.getHours(),t.getMinutes(),!1)},a:function(t,e){return(e.meridiem||y)(t.getHours(),t.getMinutes(),!0)},Z:function(t){return v(l(t),":")},ZZ:function(t){return v(l(t))},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()},w:function(t,e){return s(t,{firstDayOfWeek:e.firstDayOfWeek,firstWeekContainsDate:e.firstWeekContainsDate})},ww:function(t,e){return d(p.w(t,e),2)}};function h(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e?String(e):"YYYY-MM-DDTHH:mm:ss.SSSZ",i=o(t);if(!a(i))return"Invalid Date";var u=r.locale||c;return n.replace(f,(function(t,e){return e||("function"==typeof p[t]?"".concat(p[t](i,u)):t)}))}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(r,!0).forEach((function(e){D(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function D(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var M=/(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g,O=/\d/,_=/\d\d/,S=/\d\d?/,k=/[+-]?\d+/,Y={},j=function(t,e,r){var n,o=Array.isArray(t)?t:[t];n="string"==typeof r?function(t){var e=parseInt(t,10);return D({},r,e)}:r,o.forEach((function(t){Y[t]=[e,n]}))},C=function(t){return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},P=function(t){return function(e){var r=e[t];if(!Array.isArray(r))throw new Error("Locale[".concat(t,"] need an array"));return new RegExp(r.map(C).join("|"))}},T=function(t,e){return function(r,n){var o=n[t];if(!Array.isArray(o))throw new Error("Locale[".concat(t,"] need an array"));var a=o.indexOf(r);if(a<0)throw new Error("Invalid Word");return D({},e,a)}};function A(t,e){if(void 0!==t&&void 0!==e)if(e){if(t<12)return t+12}else if(12===t)return 0;return t}function H(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,r=[0,0,1,0,0,0,0],n=[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()],o=!0,a=0;a<7;a++)void 0===t[a]?r[a]=o?n[a]:r[a]:(r[a]=t[a],o=!1);return r}function W(t,e,r,n,o,a,i){var u;return t<100&&t>=0?(u=new Date(t+400,e,r,n,o,a,i),isFinite(u.getFullYear())&&u.setFullYear(t)):u=new Date(t,e,r,n,o,a,i),u}function F(){for(var t,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=r[0];return o<100&&o>=0?(r[0]+=400,t=new Date(Date.UTC.apply(Date,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(o)):t=new Date(Date.UTC.apply(Date,r)),t}function E(t,e,r){var n=e.match(M);if(!n)throw new Error;for(var o=n.length,a={},i=0;i<o;i+=1){var u=n[i],s=Y[u];if(s){var c="function"==typeof s[0]?s[0](r):s[0],f=s[1],d=(c.exec(t)||[])[0];a=m({},a,{},f(d,r)),t=t.replace(d,"")}else{var l=u.replace(/^\[|\]$/g,"");if(0!==t.indexOf(l))throw new Error("not match");t=t.substr(l.length)}}return a}function x(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{var n=r.locale,o=void 0===n?c:n,a=r.backupDate,i=void 0===a?new Date:a,s=E(t,e,o),f=s.year,d=s.month,l=s.day,v=s.hour,y=s.minute,p=s.second,h=s.millisecond,w=s.isPM,m=s.date,b=s.offset,D=s.weekday,M=s.week;if(m)return m;var O,_=[f,d,l,v,y,p,h];if(_[3]=A(_[3],w),void 0!==M&&void 0===d&&void 0===l){var S=u(void 0===f?i:new Date(f,3),{firstDayOfWeek:o.firstDayOfWeek,firstWeekContainsDate:o.firstWeekContainsDate});return new Date(S.getTime()+7*(M-1)*24*3600*1e3)}var k=H(_,i);return void 0!==b?(k[6]+=60*b*1e3,O=F.apply(void 0,g(k))):O=W.apply(void 0,g(k)),void 0!==D&&O.getDay()!==D?new Date(NaN):O}catch(t){return new Date(NaN)}}j("Y",k,"year"),j("YY",_,(function(t){var e=(new Date).getFullYear(),r=Math.floor(e/100),n=parseInt(t,10);return D({},"year",n=100*(n>68?r-1:r)+n)})),j("YYYY",/\d{4}/,"year"),j("M",S,(function(t){return D({},"month",parseInt(t,10)-1)})),j("MM",_,(function(t){return D({},"month",parseInt(t,10)-1)})),j("MMM",P("monthsShort"),T("monthsShort","month")),j("MMMM",P("months"),T("months","month")),j("D",S,"day"),j("DD",_,"day"),j(["H","h"],S,"hour"),j(["HH","hh"],_,"hour"),j("m",S,"minute"),j("mm",_,"minute"),j("s",S,"second"),j("ss",_,"second"),j("S",O,(function(t){return D({},"millisecond",100*parseInt(t,10))})),j("SS",_,(function(t){return D({},"millisecond",10*parseInt(t,10))})),j("SSS",/\d{3}/,"millisecond"),j(["A","a"],(function(t){return t.meridiemParse||/[ap]\.?m?\.?/i}),(function(t,e){return{isPM:"function"==typeof e.isPM?e.isPM(t):function(t){return"p"==="".concat(t).toLowerCase().charAt(0)}(t)}})),j(["Z","ZZ"],/[+-]\d\d:?\d\d/,(function(t){return{offset:(e=t,r=b(e.match(/([+-]|\d\d)/g)||["-","0","0"],3),n=r[0],o=r[1],a=r[2],i=60*parseInt(o,10)+parseInt(a,10),0===i?0:"+"===n?-i:+i)};var e,r,n,o,a,i})),j("x",k,(function(t){return{date:new Date(parseInt(t,10))}})),j("X",/[+-]?\d+(\.\d{1,3})?/,(function(t){return{date:new Date(1e3*parseFloat(t))}})),j("d",O,"weekday"),j("dd",P("weekdaysMin"),T("weekdaysMin","weekday")),j("ddd",P("weekdaysShort"),T("weekdaysShort","weekday")),j("dddd",P("weekdays"),T("weekdays","weekday")),j("w",S,"week"),j("ww",_,"week")}}]);