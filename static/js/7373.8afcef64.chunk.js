"use strict";(self.webpackChunk_decode_crm_client=self.webpackChunk_decode_crm_client||[]).push([[7373],{67373:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(2211),o=r(12130),i=r(14448),a=r(12015),c=r(38263),u=r(74866),s=r(68461),l=r(40860);function f(){var t=(0,u.p)(),e=(0,s.useSearchParams)(),r=(0,o.Z)(e,1)[0].get("id");return(0,l.jsx)(c.Z,{alignItems:"center",justifyContent:"center",mt:3,direction:"row",children:(0,l.jsx)(c.Z,{spacing:1,sx:{width:600,minHeight:800},children:(0,l.jsx)(i.Z,(0,n.Z)((0,n.Z)({},t),{},{params:{id:r},children:(0,l.jsx)(a.Z,{})}))})})}},12015:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e.Z=void 0;var o,i=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!==typeof t)return{default:t};var r=y(e);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var c=i?Object.getOwnPropertyDescriptor(t,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=t[a]}o.default=t,r&&r.set(t,o);return o}(r(77317)),a=(o=r(76573))&&o.__esModule?o:{default:o},c=r(81967),u=r(68861),s=r(80662),l=r(20949),f=r(90669),h=r(54131),p=(r(40165),r(70225)),d=r(40860);function y(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(y=function(t){return t?r:e})(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var y={};u(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(_([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=d.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,u(w,"constructor",d),u(d,"constructor",p),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function m(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var x=function(t){var e,r=(0,u.useNavigation)(),n=(0,u.useRoute)(),o=(0,s.useTranslation)("app").t,y=g((0,i.useState)(""),2),w=y[0],x=y[1],b=g((0,i.useState)(""),2),j=b[0],L=b[1],S=g((0,i.useState)(!1),2),E=S[0],_=S[1],P=g((0,i.useState)(!1),2),O=P[0],k=P[1],T=g((0,i.useState)(!1),2),C=T[0],I=T[1],F=g((0,i.useState)(null),2),N=F[0],Z=F[1],A=(0,h.useForexList)({type:null===(e=n.params)||void 0===e?void 0:e.currentTab}).mutate,G=""!=w&&w===j&&f.forexPasswordSchema.validate(w),M=function(){var t,e=(t=v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,I(!0),Z(null),t.next=5,(0,h.changeForexPassword)(null===(e=n.params)||void 0===e?void 0:e.id,{password:w});case 5:A(),null===r||void 0===r||r.goBack(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z((0,p.getErrorMessage)(t.t0));case 12:return t.prev=12,I(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,c,"next",t)}function c(t){m(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,d.jsx)(a.default,{children:(0,d.jsx)(c.ScrollView,{children:(0,d.jsxs)(c.VStack,{px:3,children:[(0,d.jsx)(c.Heading,{py:3,size:"xl",children:o("changePassword")}),(0,d.jsxs)(c.VStack,{mt:3,space:2,children:[(0,d.jsxs)(c.FormControl,{children:[(0,d.jsx)(c.FormControl.Label,{children:o("password")}),(0,d.jsx)(c.Input,{onChangeText:x,size:"2xl",value:w,variant:"filled",type:E?"text":"password",textContentType:"oneTimeCode",InputRightElement:(0,d.jsx)(c.Icon,{as:(0,d.jsx)(l.Ionicons,{name:E?"eye":"eye-off"}),size:5,mr:"2",color:"muted.400",onPress:function(){return _((function(t){return!t}))}})}),(0,d.jsx)(c.FormControl.HelperText,{children:o("forexPasswordSchema")})]}),(0,d.jsxs)(c.FormControl,{children:[(0,d.jsx)(c.FormControl.Label,{children:o("confirmPassword")}),(0,d.jsx)(c.Input,{onChangeText:L,size:"2xl",value:j,variant:"filled",type:O?"text":"password",textContentType:"oneTimeCode",InputRightElement:(0,d.jsx)(c.Icon,{as:(0,d.jsx)(l.Ionicons,{name:O?"eye":"eye-off"}),size:5,mr:"2",color:"muted.400",onPress:function(){return k((function(t){return!t}))}})})]}),(0,d.jsxs)(c.Box,{mt:4,children:[N&&(0,d.jsx)(c.Text,{color:"rose.500",children:o(N)}),(0,d.jsx)(c.Button,{mt:2,isDisabled:!G,onPress:M,isLoading:C,children:o("changePassword")})]})]})]})})})};e.Z=x}}]);