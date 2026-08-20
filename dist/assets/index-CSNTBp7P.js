var b_=Object.defineProperty;var T_=(t,e,n)=>e in t?b_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var xm=(t,e,n)=>T_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function w_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $0={exports:{}},Jc={},K0={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),A_=Symbol.for("react.portal"),C_=Symbol.for("react.fragment"),R_=Symbol.for("react.strict_mode"),P_=Symbol.for("react.profiler"),D_=Symbol.for("react.provider"),F_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),N_=Symbol.for("react.memo"),U_=Symbol.for("react.lazy"),vm=Symbol.iterator;function k_(t){return t===null||typeof t!="object"?null:(t=vm&&t[vm]||t["@@iterator"],typeof t=="function"?t:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q0=Object.assign,J0={};function Po(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||Z0}Po.prototype.isReactComponent={};Po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ex(){}ex.prototype=Po.prototype;function Bh(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||Z0}var zh=Bh.prototype=new ex;zh.constructor=Bh;Q0(zh,Po.prototype);zh.isPureReactComponent=!0;var ym=Array.isArray,tx=Object.prototype.hasOwnProperty,Vh={current:null},nx={key:!0,ref:!0,__self:!0,__source:!0};function ix(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tx.call(e,i)&&!nx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ga,type:t,key:s,ref:o,props:r,_owner:Vh.current}}function O_(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function B_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _m=/\/+/g;function wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B_(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ga:case A_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wu(o,0):i,ym(r)?(n="",t!=null&&(n=t.replace(_m,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(Hh(r)&&(r=O_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_m,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ym(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wu(s,a);o+=Zl(s,e,n,l,r)}else if(l=k_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wu(s,a++),o+=Zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function z_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},Ql={transition:null},V_={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:Vh};function rx(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};lt.Component=Po;lt.Fragment=C_;lt.Profiler=P_;lt.PureComponent=Bh;lt.StrictMode=R_;lt.Suspense=L_;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_;lt.act=rx;lt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Q0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tx.call(e,l)&&!nx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ga,type:t.type,key:r,ref:s,props:i,_owner:o}};lt.createContext=function(t){return t={$$typeof:F_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:D_,_context:t},t.Consumer=t};lt.createElement=ix;lt.createFactory=function(t){var e=ix.bind(null,t);return e.type=t,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(t){return{$$typeof:I_,render:t}};lt.isValidElement=Hh;lt.lazy=function(t){return{$$typeof:U_,_payload:{_status:-1,_result:t},_init:z_}};lt.memo=function(t,e){return{$$typeof:N_,type:t,compare:e===void 0?null:e}};lt.startTransition=function(t){var e=Ql.transition;Ql.transition={};try{t()}finally{Ql.transition=e}};lt.unstable_act=rx;lt.useCallback=function(t,e){return yn.current.useCallback(t,e)};lt.useContext=function(t){return yn.current.useContext(t)};lt.useDebugValue=function(){};lt.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};lt.useEffect=function(t,e){return yn.current.useEffect(t,e)};lt.useId=function(){return yn.current.useId()};lt.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};lt.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};lt.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};lt.useMemo=function(t,e){return yn.current.useMemo(t,e)};lt.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};lt.useRef=function(t){return yn.current.useRef(t)};lt.useState=function(t){return yn.current.useState(t)};lt.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};lt.useTransition=function(){return yn.current.useTransition()};lt.version="18.3.1";K0.exports=lt;var Pe=K0.exports;const H_=w_(Pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_=Pe,W_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),X_=Object.prototype.hasOwnProperty,q_=G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y_={key:!0,ref:!0,__self:!0,__source:!0};function sx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)X_.call(e,i)&&!Y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:W_,type:t,key:s,ref:o,props:r,_owner:q_.current}}Jc.Fragment=j_;Jc.jsx=sx;Jc.jsxs=sx;$0.exports=Jc;var u=$0.exports,Wd={},ox={exports:{}},Vn={},ax={exports:{}},lx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,I){var X=L.length;L.push(I);e:for(;0<X;){var te=X-1>>>1,re=L[te];if(0<r(re,I))L[te]=I,L[X]=re,X=te;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var I=L[0],X=L.pop();if(X!==I){L[0]=X;e:for(var te=0,re=L.length,Xe=re>>>1;te<Xe;){var Ze=2*(te+1)-1,ze=L[Ze],G=Ze+1,se=L[G];if(0>r(ze,X))G<re&&0>r(se,ze)?(L[te]=se,L[G]=X,te=G):(L[te]=ze,L[Ze]=X,te=Ze);else if(G<re&&0>r(se,X))L[te]=se,L[G]=X,te=G;else break e}}return I}function r(L,I){var X=L.sortIndex-I.sortIndex;return X!==0?X:L.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,d=3,m=!1,g=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(L){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=L)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function S(L){if(E=!1,M(L),!g)if(n(l)!==null)g=!0,q(T);else{var I=n(c);I!==null&&H(S,I.startTime-L)}}function T(L,I){g=!1,E&&(E=!1,f(y),y=-1),m=!0;var X=d;try{for(M(I),p=n(l);p!==null&&(!(p.expirationTime>I)||L&&!D());){var te=p.callback;if(typeof te=="function"){p.callback=null,d=p.priorityLevel;var re=te(p.expirationTime<=I);I=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&i(l),M(I)}else i(l);p=n(l)}if(p!==null)var Xe=!0;else{var Ze=n(c);Ze!==null&&H(S,Ze.startTime-I),Xe=!1}return Xe}finally{p=null,d=X,m=!1}}var b=!1,A=null,y=-1,C=5,P=-1;function D(){return!(t.unstable_now()-P<C)}function k(){if(A!==null){var L=t.unstable_now();P=L;var I=!0;try{I=A(!0,L)}finally{I?$():(b=!1,A=null)}}else b=!1}var $;if(typeof v=="function")$=function(){v(k)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,O=Q.port2;Q.port1.onmessage=k,$=function(){O.postMessage(null)}}else $=function(){x(k,0)};function q(L){A=L,b||(b=!0,$())}function H(L,I){y=x(function(){L(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,q(T))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var X=d;d=I;try{return L()}finally{d=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=d;d=L;try{return I()}finally{d=X}},t.unstable_scheduleCallback=function(L,I,X){var te=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?te+X:te):X=te,L){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=X+re,L={id:h++,callback:I,priorityLevel:L,startTime:X,expirationTime:re,sortIndex:-1},X>te?(L.sortIndex=X,e(c,L),n(l)===null&&L===n(c)&&(E?(f(y),y=-1):E=!0,H(S,X-te))):(L.sortIndex=re,e(l,L),g||m||(g=!0,q(T))),L},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(L){var I=d;return function(){var X=d;d=I;try{return L.apply(this,arguments)}finally{d=X}}}})(lx);ax.exports=lx;var $_=ax.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=Pe,zn=$_;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cx=new Set,_a={};function vs(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(_a[t]=e,t=0;t<e.length;t++)cx.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=Object.prototype.hasOwnProperty,Z_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sm={},Mm={};function Q_(t){return jd.call(Mm,t)?!0:jd.call(Sm,t)?!1:Z_.test(t)?Mm[t]=!0:(Sm[t]=!0,!1)}function J_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function e1(t,e,n,i){if(e===null||typeof e>"u"||J_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new _n(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new _n(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new _n(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new _n(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new _n(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new _n(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new _n(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new _n(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new _n(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gh=/[\-:]([a-z])/g;function Wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gh,Wh);tn[e]=new _n(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gh,Wh);tn[e]=new _n(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gh,Wh);tn[e]=new _n(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new _n(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new _n(t,1,!1,t.toLowerCase(),null,!0,!0)});function jh(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e1(e,n,r,i)&&(n=null),i||r===null?Q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ar=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Ws=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),Xd=Symbol.for("react.profiler"),ux=Symbol.for("react.provider"),dx=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),qd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),fx=Symbol.for("react.offscreen"),Em=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var It=Object.assign,Au;function ea(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Cu=!1;function Ru(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function t1(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=Ru(t.type,!1),t;case 11:return t=Ru(t.type.render,!1),t;case 1:return t=Ru(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ws:return"Fragment";case Gs:return"Portal";case Xd:return"Profiler";case Xh:return"StrictMode";case qd:return"Suspense";case Yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dx:return(t.displayName||"Context")+".Consumer";case ux:return(t._context.displayName||"Context")+".Provider";case qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yh:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function n1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i1(t){var e=hx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=i1(t))}function px(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=hx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kd(t,e){var n=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mx(t,e){e=e.checked,e!=null&&jh(t,"checked",e,!1)}function Zd(t,e){mx(t,e);var n=Ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qd(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qd(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function io(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ta(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function gx(t,e){var n=Ur(e.value),i=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Am(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,vx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r1=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){r1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function yx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function _x(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=yx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var s1=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tf(t,e){if(e){if(s1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sf=null,ro=null,so=null;function Cm(t){if(t=Xa(t)){if(typeof sf!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=ru(e),sf(t.stateNode,t.type,e))}}function Sx(t){ro?so?so.push(t):so=[t]:ro=t}function Mx(){if(ro){var t=ro,e=so;if(so=ro=null,Cm(t),e)for(t=0;t<e.length;t++)Cm(e[t])}}function Ex(t,e){return t(e)}function bx(){}var Pu=!1;function Tx(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return Ex(t,e,n)}finally{Pu=!1,(ro!==null||so!==null)&&(bx(),Mx())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var of=!1;if(tr)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){of=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{of=!1}function o1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ua=!1,Sc=null,Mc=!1,af=null,a1={onError:function(t){ua=!0,Sc=t}};function l1(t,e,n,i,r,s,o,a,l){ua=!1,Sc=null,o1.apply(a1,arguments)}function c1(t,e,n,i,r,s,o,a,l){if(l1.apply(this,arguments),ua){if(ua){var c=Sc;ua=!1,Sc=null}else throw Error(ae(198));Mc||(Mc=!0,af=c)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if(ys(t)!==t)throw Error(ae(188))}function u1(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rm(r),t;if(s===i)return Rm(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Ax(t){return t=u1(t),t!==null?Cx(t):null}function Cx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cx(t);if(e!==null)return e;t=t.sibling}return null}var Rx=zn.unstable_scheduleCallback,Pm=zn.unstable_cancelCallback,d1=zn.unstable_shouldYield,f1=zn.unstable_requestPaint,Ot=zn.unstable_now,h1=zn.unstable_getCurrentPriorityLevel,Kh=zn.unstable_ImmediatePriority,Px=zn.unstable_UserBlockingPriority,Ec=zn.unstable_NormalPriority,p1=zn.unstable_LowPriority,Dx=zn.unstable_IdlePriority,eu=null,Ri=null;function m1(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:v1,g1=Math.log,x1=Math.LN2;function v1(t){return t>>>=0,t===0?32:31-(g1(t)/x1|0)|0}var sl=64,ol=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=na(a):(s&=o,s!==0&&(i=na(s)))}else o=n&~r,o!==0?i=na(o):s!==0&&(i=na(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),r=1<<n,i|=t[n],e&=~r;return i}function y1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=y1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fx(){var t=sl;return sl<<=1,!(sl&4194240)&&(sl=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function S1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var xt=0;function Ix(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lx,Qh,Nx,Ux,kx,cf=!1,al=[],Ar=null,Cr=null,Rr=null,Ea=new Map,ba=new Map,Sr=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dm(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&Qh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function E1(t,e,n,i,r){switch(e){case"focusin":return Ar=Oo(Ar,t,e,n,i,r),!0;case"dragenter":return Cr=Oo(Cr,t,e,n,i,r),!0;case"mouseover":return Rr=Oo(Rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Oo(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,Oo(ba.get(s)||null,t,e,n,i,r)),!0}return!1}function Ox(t){var e=ts(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=wx(n),e!==null){t.blockedOn=e,kx(t.priority,function(){Nx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rf=i,n.target.dispatchEvent(i),rf=null}else return e=Xa(n),e!==null&&Qh(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){Jl(t)&&n.delete(e)}function b1(){cf=!1,Ar!==null&&Jl(Ar)&&(Ar=null),Cr!==null&&Jl(Cr)&&(Cr=null),Rr!==null&&Jl(Rr)&&(Rr=null),Ea.forEach(Fm),ba.forEach(Fm)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,b1)))}function Ta(t){function e(r){return Bo(r,t)}if(0<al.length){Bo(al[0],t);for(var n=1;n<al.length;n++){var i=al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ar!==null&&Bo(Ar,t),Cr!==null&&Bo(Cr,t),Rr!==null&&Bo(Rr,t),Ea.forEach(e),ba.forEach(e),n=0;n<Sr.length;n++)i=Sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)Ox(n),n.blockedOn===null&&Sr.shift()}var oo=ar.ReactCurrentBatchConfig,Tc=!0;function T1(t,e,n,i){var r=xt,s=oo.transition;oo.transition=null;try{xt=1,Jh(t,e,n,i)}finally{xt=r,oo.transition=s}}function w1(t,e,n,i){var r=xt,s=oo.transition;oo.transition=null;try{xt=4,Jh(t,e,n,i)}finally{xt=r,oo.transition=s}}function Jh(t,e,n,i){if(Tc){var r=uf(t,e,n,i);if(r===null)Vu(t,e,i,wc,n),Dm(t,i);else if(E1(r,t,e,n,i))i.stopPropagation();else if(Dm(t,i),e&4&&-1<M1.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&Lx(s),s=uf(t,e,n,i),s===null&&Vu(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vu(t,e,i,null,n)}}var wc=null;function uf(t,e,n,i){if(wc=null,t=$h(i),t=ts(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function Bx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h1()){case Kh:return 1;case Px:return 4;case Ec:case p1:return 16;case Dx:return 536870912;default:return 16}default:return 16}}var br=null,ep=null,ec=null;function zx(){if(ec)return ec;var t,e=ep,n=e.length,i,r="value"in br?br.value:br.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ec=r.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function Im(){return!1}function Hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:Im,this.isPropagationStopped=Im,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=Hn(Do),ja=It({},Do,{view:0,detail:0}),A1=Hn(ja),Fu,Iu,zo,tu=It({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Fu=t.screenX-zo.screenX,Iu=t.screenY-zo.screenY):Iu=Fu=0,zo=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),Lm=Hn(tu),C1=It({},tu,{dataTransfer:0}),R1=Hn(C1),P1=It({},ja,{relatedTarget:0}),Lu=Hn(P1),D1=It({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),F1=Hn(D1),I1=It({},Do,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L1=Hn(I1),N1=It({},Do,{data:0}),Nm=Hn(N1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O1[t])?!!e[t]:!1}function np(){return B1}var z1=It({},ja,{key:function(t){if(t.key){var e=U1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V1=Hn(z1),H1=It({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=Hn(H1),G1=It({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),W1=Hn(G1),j1=It({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),X1=Hn(j1),q1=It({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y1=Hn(q1),$1=[9,13,27,32],ip=tr&&"CompositionEvent"in window,da=null;tr&&"documentMode"in document&&(da=document.documentMode);var K1=tr&&"TextEvent"in window&&!da,Vx=tr&&(!ip||da&&8<da&&11>=da),km=" ",Om=!1;function Hx(t,e){switch(t){case"keyup":return $1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function Z1(t,e){switch(t){case"compositionend":return Gx(e);case"keypress":return e.which!==32?null:(Om=!0,km);case"textInput":return t=e.data,t===km&&Om?null:t;default:return null}}function Q1(t,e){if(js)return t==="compositionend"||!ip&&Hx(t,e)?(t=zx(),ec=ep=br=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vx&&e.locale!=="ko"?null:e.data;default:return null}}var J1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J1[t.type]:e==="textarea"}function Wx(t,e,n,i){Sx(i),e=Ac(e,"onChange"),0<e.length&&(n=new tp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,wa=null;function eS(t){tv(t,0)}function nu(t){var e=Ys(t);if(px(e))return t}function tS(t,e){if(t==="change")return e}var jx=!1;if(tr){var Nu;if(tr){var Uu="oninput"in document;if(!Uu){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),Uu=typeof zm.oninput=="function"}Nu=Uu}else Nu=!1;jx=Nu&&(!document.documentMode||9<document.documentMode)}function Vm(){fa&&(fa.detachEvent("onpropertychange",Xx),wa=fa=null)}function Xx(t){if(t.propertyName==="value"&&nu(wa)){var e=[];Wx(e,wa,t,$h(t)),Tx(eS,e)}}function nS(t,e,n){t==="focusin"?(Vm(),fa=e,wa=n,fa.attachEvent("onpropertychange",Xx)):t==="focusout"&&Vm()}function iS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(wa)}function rS(t,e){if(t==="click")return nu(e)}function sS(t,e){if(t==="input"||t==="change")return nu(e)}function oS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xi=typeof Object.is=="function"?Object.is:oS;function Aa(t,e){if(xi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!jd.call(e,r)||!xi(t[r],e[r]))return!1}return!0}function Hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Hm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hm(n)}}function qx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yx(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aS(t){var e=Yx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qx(n.ownerDocument.documentElement,n)){if(i!==null&&rp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gm(n,s);var o=Gm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lS=tr&&"documentMode"in document&&11>=document.documentMode,Xs=null,df=null,ha=null,ff=!1;function Wm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ff||Xs==null||Xs!==_c(i)||(i=Xs,"selectionStart"in i&&rp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Aa(ha,i)||(ha=i,i=Ac(df,"onSelect"),0<i.length&&(e=new tp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xs)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},ku={},$x={};tr&&($x=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function iu(t){if(ku[t])return ku[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $x)return ku[t]=e[n];return t}var Kx=iu("animationend"),Zx=iu("animationiteration"),Qx=iu("animationstart"),Jx=iu("transitionend"),ev=new Map,jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){ev.set(t,e),vs(e,[t])}for(var Ou=0;Ou<jm.length;Ou++){var Bu=jm[Ou],cS=Bu.toLowerCase(),uS=Bu[0].toUpperCase()+Bu.slice(1);Vr(cS,"on"+uS)}Vr(Kx,"onAnimationEnd");Vr(Zx,"onAnimationIteration");Vr(Qx,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(Jx,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Xm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,c1(i,e,void 0,t),t.currentTarget=null}function tv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xm(r,a,c),s=l}}}if(Mc)throw t=af,Mc=!1,af=null,t}function Tt(t,e){var n=e[xf];n===void 0&&(n=e[xf]=new Set);var i=t+"__bubble";n.has(i)||(nv(e,t,2,!1),n.add(i))}function zu(t,e,n){var i=0;e&&(i|=4),nv(n,t,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[ul]){t[ul]=!0,cx.forEach(function(n){n!=="selectionchange"&&(dS.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,zu("selectionchange",!1,e))}}function nv(t,e,n,i){switch(Bx(e)){case 1:var r=T1;break;case 4:r=w1;break;default:r=Jh}n=r.bind(null,e,n,t),r=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Tx(function(){var c=s,h=$h(n),p=[];e:{var d=ev.get(t);if(d!==void 0){var m=tp,g=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":m=V1;break;case"focusin":g="focus",m=Lu;break;case"focusout":g="blur",m=Lu;break;case"beforeblur":case"afterblur":m=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=R1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=W1;break;case Kx:case Zx:case Qx:m=F1;break;case Jx:m=X1;break;case"scroll":m=A1;break;case"wheel":m=Y1;break;case"copy":case"cut":case"paste":m=L1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Um}var E=(e&4)!==0,x=!E&&t==="scroll",f=E?d!==null?d+"Capture":null:d;E=[];for(var v=c,M;v!==null;){M=v;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,f!==null&&(S=Ma(v,f),S!=null&&E.push(Ra(v,S,M)))),x)break;v=v.return}0<E.length&&(d=new m(d,g,null,n,h),p.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==rf&&(g=n.relatedTarget||n.fromElement)&&(ts(g)||g[nr]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?ts(g):null,g!==null&&(x=ys(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(E=Lm,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=Um,S="onPointerLeave",f="onPointerEnter",v="pointer"),x=m==null?d:Ys(m),M=g==null?d:Ys(g),d=new E(S,v+"leave",m,n,h),d.target=x,d.relatedTarget=M,S=null,ts(h)===c&&(E=new E(f,v+"enter",g,n,h),E.target=M,E.relatedTarget=x,S=E),x=S,m&&g)t:{for(E=m,f=g,v=0,M=E;M;M=Es(M))v++;for(M=0,S=f;S;S=Es(S))M++;for(;0<v-M;)E=Es(E),v--;for(;0<M-v;)f=Es(f),M--;for(;v--;){if(E===f||f!==null&&E===f.alternate)break t;E=Es(E),f=Es(f)}E=null}else E=null;m!==null&&qm(p,d,m,E,!1),g!==null&&x!==null&&qm(p,x,g,E,!0)}}e:{if(d=c?Ys(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=tS;else if(Bm(d))if(jx)T=sS;else{T=iS;var b=nS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=rS);if(T&&(T=T(t,c))){Wx(p,T,n,h);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Qd(d,"number",d.value)}switch(b=c?Ys(c):window,t){case"focusin":(Bm(b)||b.contentEditable==="true")&&(Xs=b,df=c,ha=null);break;case"focusout":ha=df=Xs=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,Wm(p,n,h);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":Wm(p,n,h)}var A;if(ip)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else js?Hx(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Vx&&n.locale!=="ko"&&(js||y!=="onCompositionStart"?y==="onCompositionEnd"&&js&&(A=zx()):(br=h,ep="value"in br?br.value:br.textContent,js=!0)),b=Ac(c,y),0<b.length&&(y=new Nm(y,t,null,n,h),p.push({event:y,listeners:b}),A?y.data=A:(A=Gx(n),A!==null&&(y.data=A)))),(A=K1?Z1(t,n):Q1(t,n))&&(c=Ac(c,"onBeforeInput"),0<c.length&&(h=new Nm("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=A))}tv(p,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ac(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Ma(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ma(n,s),l!=null&&o.unshift(Ra(n,l,a))):r||(l=Ma(n,s),l!=null&&o.push(Ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(fS,`
`).replace(hS,"")}function dl(t,e,n){if(e=Ym(e),Ym(t)!==e&&n)throw Error(ae(425))}function Cc(){}var hf=null,pf=null;function mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(gS)}:gf;function gS(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function Pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Fo,Pa="__reactProps$"+Fo,nr="__reactContainer$"+Fo,xf="__reactEvents$"+Fo,xS="__reactListeners$"+Fo,vS="__reactHandles$"+Fo;function ts(t){var e=t[Ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Km(t);t!==null;){if(n=t[Ti])return n;t=Km(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[Ti]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function ru(t){return t[Pa]||null}var vf=[],$s=-1;function Hr(t){return{current:t}}function wt(t){0>$s||(t.current=vf[$s],vf[$s]=null,$s--)}function bt(t,e){$s++,vf[$s]=t.current,t.current=e}var kr={},fn=Hr(kr),bn=Hr(!1),ls=kr;function go(t,e){var n=t.type.contextTypes;if(!n)return kr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(t){return t=t.childContextTypes,t!=null}function Rc(){wt(bn),wt(fn)}function Zm(t,e,n){if(fn.current!==kr)throw Error(ae(168));bt(fn,e),bt(bn,n)}function iv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,n1(t)||"Unknown",r));return It({},n,i)}function Pc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,ls=fn.current,bt(fn,t),bt(bn,bn.current),!0}function Qm(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=iv(t,e,ls),i.__reactInternalMemoizedMergedChildContext=t,wt(bn),wt(fn),bt(fn,t)):wt(bn),bt(bn,n)}var Wi=null,su=!1,Gu=!1;function rv(t){Wi===null?Wi=[t]:Wi.push(t)}function yS(t){su=!0,rv(t)}function Gr(){if(!Gu&&Wi!==null){Gu=!0;var t=0,e=xt;try{var n=Wi;for(xt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Wi=null,su=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(t+1)),Rx(Kh,Gr),r}finally{xt=e,Gu=!1}}return null}var Ks=[],Zs=0,Dc=null,Fc=0,Yn=[],$n=0,cs=null,qi=1,Yi="";function Kr(t,e){Ks[Zs++]=Fc,Ks[Zs++]=Dc,Dc=t,Fc=e}function sv(t,e,n){Yn[$n++]=qi,Yn[$n++]=Yi,Yn[$n++]=cs,cs=t;var i=qi;t=Yi;var r=32-mi(i)-1;i&=~(1<<r),n+=1;var s=32-mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,qi=1<<32-mi(e)+r|n<<r|i,Yi=s+t}else qi=1<<s|n<<r|i,Yi=t}function sp(t){t.return!==null&&(Kr(t,1),sv(t,1,0))}function op(t){for(;t===Dc;)Dc=Ks[--Zs],Ks[Zs]=null,Fc=Ks[--Zs],Ks[Zs]=null;for(;t===cs;)cs=Yn[--$n],Yn[$n]=null,Yi=Yn[--$n],Yn[$n]=null,qi=Yn[--$n],Yn[$n]=null}var Bn=null,kn=null,At=!1,di=null;function ov(t,e){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bn=t,kn=Pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bn=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:qi,overflow:Yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bn=t,kn=null,!0):!1;default:return!1}}function yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(At){var e=kn;if(e){var n=e;if(!Jm(t,e)){if(yf(t))throw Error(ae(418));e=Pr(n.nextSibling);var i=Bn;e&&Jm(t,e)?ov(i,n):(t.flags=t.flags&-4097|2,At=!1,Bn=t)}}else{if(yf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,At=!1,Bn=t}}}function eg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function fl(t){if(t!==Bn)return!1;if(!At)return eg(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mf(t.type,t.memoizedProps)),e&&(e=kn)){if(yf(t))throw av(),Error(ae(418));for(;e;)ov(t,e),e=Pr(e.nextSibling)}if(eg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=Pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=Bn?Pr(t.stateNode.nextSibling):null;return!0}function av(){for(var t=kn;t;)t=Pr(t.nextSibling)}function xo(){kn=Bn=null,At=!1}function ap(t){di===null?di=[t]:di.push(t)}var _S=ar.ReactCurrentBatchConfig;function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tg(t){var e=t._init;return e(t._payload)}function lv(t){function e(f,v){if(t){var M=f.deletions;M===null?(f.deletions=[v],f.flags|=16):M.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Lr(f,v),f.index=0,f.sibling=null,f}function s(f,v,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<v?(f.flags|=2,v):M):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,M,S){return v===null||v.tag!==6?(v=Ku(M,f.mode,S),v.return=f,v):(v=r(v,M),v.return=f,v)}function l(f,v,M,S){var T=M.type;return T===Ws?h(f,v,M.props.children,S,M.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===yr&&tg(T)===v.type)?(S=r(v,M.props),S.ref=Vo(f,v,M),S.return=f,S):(S=lc(M.type,M.key,M.props,null,f.mode,S),S.ref=Vo(f,v,M),S.return=f,S)}function c(f,v,M,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=Zu(M,f.mode,S),v.return=f,v):(v=r(v,M.children||[]),v.return=f,v)}function h(f,v,M,S,T){return v===null||v.tag!==7?(v=as(M,f.mode,S,T),v.return=f,v):(v=r(v,M),v.return=f,v)}function p(f,v,M){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ku(""+v,f.mode,M),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nl:return M=lc(v.type,v.key,v.props,null,f.mode,M),M.ref=Vo(f,null,v),M.return=f,M;case Gs:return v=Zu(v,f.mode,M),v.return=f,v;case yr:var S=v._init;return p(f,S(v._payload),M)}if(ta(v)||Uo(v))return v=as(v,f.mode,M,null),v.return=f,v;hl(f,v)}return null}function d(f,v,M,S){var T=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return T!==null?null:a(f,v,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case nl:return M.key===T?l(f,v,M,S):null;case Gs:return M.key===T?c(f,v,M,S):null;case yr:return T=M._init,d(f,v,T(M._payload),S)}if(ta(M)||Uo(M))return T!==null?null:h(f,v,M,S,null);hl(f,M)}return null}function m(f,v,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(M)||null,a(v,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nl:return f=f.get(S.key===null?M:S.key)||null,l(v,f,S,T);case Gs:return f=f.get(S.key===null?M:S.key)||null,c(v,f,S,T);case yr:var b=S._init;return m(f,v,M,b(S._payload),T)}if(ta(S)||Uo(S))return f=f.get(M)||null,h(v,f,S,T,null);hl(v,S)}return null}function g(f,v,M,S){for(var T=null,b=null,A=v,y=v=0,C=null;A!==null&&y<M.length;y++){A.index>y?(C=A,A=null):C=A.sibling;var P=d(f,A,M[y],S);if(P===null){A===null&&(A=C);break}t&&A&&P.alternate===null&&e(f,A),v=s(P,v,y),b===null?T=P:b.sibling=P,b=P,A=C}if(y===M.length)return n(f,A),At&&Kr(f,y),T;if(A===null){for(;y<M.length;y++)A=p(f,M[y],S),A!==null&&(v=s(A,v,y),b===null?T=A:b.sibling=A,b=A);return At&&Kr(f,y),T}for(A=i(f,A);y<M.length;y++)C=m(A,f,y,M[y],S),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?y:C.key),v=s(C,v,y),b===null?T=C:b.sibling=C,b=C);return t&&A.forEach(function(D){return e(f,D)}),At&&Kr(f,y),T}function E(f,v,M,S){var T=Uo(M);if(typeof T!="function")throw Error(ae(150));if(M=T.call(M),M==null)throw Error(ae(151));for(var b=T=null,A=v,y=v=0,C=null,P=M.next();A!==null&&!P.done;y++,P=M.next()){A.index>y?(C=A,A=null):C=A.sibling;var D=d(f,A,P.value,S);if(D===null){A===null&&(A=C);break}t&&A&&D.alternate===null&&e(f,A),v=s(D,v,y),b===null?T=D:b.sibling=D,b=D,A=C}if(P.done)return n(f,A),At&&Kr(f,y),T;if(A===null){for(;!P.done;y++,P=M.next())P=p(f,P.value,S),P!==null&&(v=s(P,v,y),b===null?T=P:b.sibling=P,b=P);return At&&Kr(f,y),T}for(A=i(f,A);!P.done;y++,P=M.next())P=m(A,f,y,P.value,S),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?y:P.key),v=s(P,v,y),b===null?T=P:b.sibling=P,b=P);return t&&A.forEach(function(k){return e(f,k)}),At&&Kr(f,y),T}function x(f,v,M,S){if(typeof M=="object"&&M!==null&&M.type===Ws&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case nl:e:{for(var T=M.key,b=v;b!==null;){if(b.key===T){if(T=M.type,T===Ws){if(b.tag===7){n(f,b.sibling),v=r(b,M.props.children),v.return=f,f=v;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===yr&&tg(T)===b.type){n(f,b.sibling),v=r(b,M.props),v.ref=Vo(f,b,M),v.return=f,f=v;break e}n(f,b);break}else e(f,b);b=b.sibling}M.type===Ws?(v=as(M.props.children,f.mode,S,M.key),v.return=f,f=v):(S=lc(M.type,M.key,M.props,null,f.mode,S),S.ref=Vo(f,v,M),S.return=f,f=S)}return o(f);case Gs:e:{for(b=M.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(f,v.sibling),v=r(v,M.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Zu(M,f.mode,S),v.return=f,f=v}return o(f);case yr:return b=M._init,x(f,v,b(M._payload),S)}if(ta(M))return g(f,v,M,S);if(Uo(M))return E(f,v,M,S);hl(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,M),v.return=f,f=v):(n(f,v),v=Ku(M,f.mode,S),v.return=f,f=v),o(f)):n(f,v)}return x}var vo=lv(!0),cv=lv(!1),Ic=Hr(null),Lc=null,Qs=null,lp=null;function cp(){lp=Qs=Lc=null}function up(t){var e=Ic.current;wt(Ic),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ao(t,e){Lc=t,lp=Qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(lp!==t)if(t={context:t,memoizedValue:e,next:null},Qs===null){if(Lc===null)throw Error(ae(308));Qs=t,Lc.dependencies={lanes:0,firstContext:t}}else Qs=Qs.next=t;return e}var ns=null;function dp(t){ns===null?ns=[t]:ns.push(t)}function uv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,dp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ir(t,i)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ir(t,n)}return r=i.interleaved,r===null?(e.next=e,dp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ir(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zh(t,n)}}function ng(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,E=a;switch(d=e,m=n,E.tag){case 1:if(g=E.payload,typeof g=="function"){p=g.call(m,p,d);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=E.payload,d=typeof g=="function"?g.call(m,p,d):g,d==null)break e;p=It({},p,d);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ds|=o,t.lanes=o,t.memoizedState=p}}function ig(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var qa={},Pi=Hr(qa),Da=Hr(qa),Fa=Hr(qa);function is(t){if(t===qa)throw Error(ae(174));return t}function hp(t,e){switch(bt(Fa,e),bt(Da,t),bt(Pi,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ef(e,t)}wt(Pi),bt(Pi,e)}function yo(){wt(Pi),wt(Da),wt(Fa)}function fv(t){is(Fa.current);var e=is(Pi.current),n=ef(e,t.type);e!==n&&(bt(Da,t),bt(Pi,n))}function pp(t){Da.current===t&&(wt(Pi),wt(Da))}var Ct=Hr(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wu=[];function mp(){for(var t=0;t<Wu.length;t++)Wu[t]._workInProgressVersionPrimary=null;Wu.length=0}var ic=ar.ReactCurrentDispatcher,ju=ar.ReactCurrentBatchConfig,us=0,Dt=null,Vt=null,qt=null,kc=!1,pa=!1,Ia=0,SS=0;function rn(){throw Error(ae(321))}function gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xi(t[n],e[n]))return!1;return!0}function xp(t,e,n,i,r,s){if(us=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?TS:wS,t=n(i,r),pa){s=0;do{if(pa=!1,Ia=0,25<=s)throw Error(ae(301));s+=1,qt=Vt=null,e.updateQueue=null,ic.current=AS,t=n(i,r)}while(pa)}if(ic.current=Oc,e=Vt!==null&&Vt.next!==null,us=0,qt=Vt=Dt=null,kc=!1,e)throw Error(ae(300));return t}function vp(){var t=Ia!==0;return Ia=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Dt.memoizedState=qt=t:qt=qt.next=t,qt}function ti(){if(Vt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=qt===null?Dt.memoizedState:qt.next;if(e!==null)qt=e,Vt=t;else{if(t===null)throw Error(ae(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},qt===null?Dt.memoizedState=qt=t:qt=qt.next=t}return qt}function La(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=ti(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((us&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,Dt.lanes|=h,ds|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,xi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Dt.lanes|=s,ds|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qu(t){var e=ti(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);xi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function hv(){}function pv(t,e){var n=Dt,i=ti(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,yp(xv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,Na(9,gv.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(ae(349));us&30||mv(n,e,r)}return r}function mv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gv(t,e,n,i){e.value=n,e.getSnapshot=i,vv(e)&&yv(t)}function xv(t,e,n){return n(function(){vv(e)&&yv(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xi(t,n)}catch{return!0}}function yv(t){var e=ir(t,1);e!==null&&gi(e,t,1,-1)}function rg(t){var e=Ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=bS.bind(null,Dt,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _v(){return ti().memoizedState}function rc(t,e,n,i){var r=Ei();Dt.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function ou(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&gp(i,o.deps)){r.memoizedState=Na(e,n,s,i);return}}Dt.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function sg(t,e){return rc(8390656,8,t,e)}function yp(t,e){return ou(2048,8,t,e)}function Sv(t,e){return ou(4,2,t,e)}function Mv(t,e){return ou(4,4,t,e)}function Ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,Ev.bind(null,e,t),n)}function _p(){}function Tv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Av(t,e,n){return us&21?(xi(n,e)||(n=Fx(),Dt.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function MS(t,e){var n=xt;xt=n!==0&&4>n?n:4,t(!0);var i=ju.transition;ju.transition={};try{t(!1),e()}finally{xt=n,ju.transition=i}}function Cv(){return ti().memoizedState}function ES(t,e,n){var i=Ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rv(t))Pv(e,n);else if(n=uv(t,e,n,i),n!==null){var r=gn();gi(n,t,i,r),Dv(n,e,i)}}function bS(t,e,n){var i=Ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rv(t))Pv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,xi(a,o)){var l=e.interleaved;l===null?(r.next=r,dp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=uv(t,e,r,i),n!==null&&(r=gn(),gi(n,t,i,r),Dv(n,e,i))}}function Rv(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function Pv(t,e){pa=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zh(t,n)}}var Oc={readContext:ei,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},TS={readContext:ei,useCallback:function(t,e){return Ei().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:sg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,Ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=Ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ES.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=Ei();return t={current:t},e.memoizedState=t},useState:rg,useDebugValue:_p,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=rg(!1),e=t[0];return t=MS.bind(null,t[1]),Ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,r=Ei();if(At){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Yt===null)throw Error(ae(349));us&30||mv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sg(xv.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,gv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ei(),e=Yt.identifierPrefix;if(At){var n=Yi,i=qi;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wS={readContext:ei,useCallback:Tv,useContext:ei,useEffect:yp,useImperativeHandle:bv,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:wv,useReducer:Xu,useRef:_v,useState:function(){return Xu(La)},useDebugValue:_p,useDeferredValue:function(t){var e=ti();return Av(e,Vt.memoizedState,t)},useTransition:function(){var t=Xu(La)[0],e=ti().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:pv,useId:Cv,unstable_isNewReconciler:!1},AS={readContext:ei,useCallback:Tv,useContext:ei,useEffect:yp,useImperativeHandle:bv,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:wv,useReducer:qu,useRef:_v,useState:function(){return qu(La)},useDebugValue:_p,useDeferredValue:function(t){var e=ti();return Vt===null?e.memoizedState=t:Av(e,Vt.memoizedState,t)},useTransition:function(){var t=qu(La)[0],e=ti().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:pv,useId:Cv,unstable_isNewReconciler:!1};function li(t,e){if(t&&t.defaultProps){e=It({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:It({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Ir(t),s=Ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(gi(e,t,r,i),nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Ir(t),s=Ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(gi(e,t,r,i),nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=Ir(t),r=Ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=Dr(t,r,i),e!==null&&(gi(e,t,i,n),nc(e,t,i))}};function og(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function Fv(t,e,n){var i=!1,r=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=Tn(e)?ls:fn.current,i=e.contextTypes,s=(i=i!=null)?go(t,r):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ag(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function Ef(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},fp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=Tn(e)?ls:fn.current,r.context=go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&au.enqueueReplaceState(r,r.state,null),Nc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",i=e;do n+=t1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CS=typeof WeakMap=="function"?WeakMap:Map;function Iv(t,e,n){n=Ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zc||(zc=!0,Lf=i),bf(t,e)},n}function Lv(t,e,n){n=Ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof i!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new CS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=HS.bind(null,t,e,n),e.then(t,t))}function cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ug(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ki(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var RS=ar.ReactCurrentOwner,En=!1;function pn(t,e,n,i){e.child=t===null?cv(e,null,n,i):vo(e,t.child,n,i)}function dg(t,e,n,i,r){n=n.render;var s=e.ref;return ao(e,r),i=xp(t,e,n,i,s,r),n=vp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(At&&n&&sp(e),e.flags|=1,pn(t,e,i,r),e.child)}function fg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Nv(t,e,s,i,r)):(t=lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,i)&&t.ref===e.ref)return rr(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Nv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,rr(t,e,r)}return Tf(t,e,n,i,r)}function Uv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(eo,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,bt(eo,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,bt(eo,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,bt(eo,Ln),Ln|=i;return pn(t,e,r,n),e.child}function kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tf(t,e,n,i,r){var s=Tn(n)?ls:fn.current;return s=go(e,s),ao(e,r),n=xp(t,e,n,i,s,r),i=vp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(At&&i&&sp(e),e.flags|=1,pn(t,e,n,r),e.child)}function hg(t,e,n,i,r){if(Tn(n)){var s=!0;Pc(e)}else s=!1;if(ao(e,r),e.stateNode===null)sc(t,e),Fv(e,n,i),Ef(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=Tn(n)?ls:fn.current,c=go(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ag(e,o,i,c),_r=!1;var d=e.memoizedState;o.state=d,Nc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||bn.current||_r?(typeof h=="function"&&(Mf(e,n,h,i),l=e.memoizedState),(a=_r||og(e,n,a,i,d,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,dv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:li(e.type,a),o.props=c,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=Tn(n)?ls:fn.current,l=go(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&ag(e,o,i,l),_r=!1,d=e.memoizedState,o.state=d,Nc(e,i,o,r);var g=e.memoizedState;a!==p||d!==g||bn.current||_r?(typeof m=="function"&&(Mf(e,n,m,i),g=e.memoizedState),(c=_r||og(e,n,c,i,d,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return wf(t,e,n,i,s,r)}function wf(t,e,n,i,r,s){kv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qm(e,n,!1),rr(t,e,s);i=e.stateNode,RS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=vo(e,t.child,null,s),e.child=vo(e,null,a,s)):pn(t,e,a,s),e.memoizedState=i.state,r&&Qm(e,n,!0),e.child}function Ov(t){var e=t.stateNode;e.pendingContext?Zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zm(t,e.context,!1),hp(t,e.containerInfo)}function pg(t,e,n,i,r){return xo(),ap(r),e.flags|=256,pn(t,e,n,i),e.child}var Af={dehydrated:null,treeContext:null,retryLane:0};function Cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bv(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),bt(Ct,r&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uu(o,i,0,null),t=as(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cf(n),e.memoizedState=Af,t):Sp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return PS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=as(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Af,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sp(t,e){return e=uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,i){return i!==null&&ap(i),vo(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Yu(Error(ae(422))),pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uu({mode:"visible",children:i.children},r,0,null),s=as(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vo(e,t.child,null,o),e.child.memoizedState=Cf(o),e.memoizedState=Af,s);if(!(e.mode&1))return pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Yu(s,i,void 0),pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ir(t,r),gi(i,t,r,-1))}return Ap(),i=Yu(Error(ae(421))),pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=GS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,kn=Pr(r.nextSibling),Bn=e,At=!0,di=null,t!==null&&(Yn[$n++]=qi,Yn[$n++]=Yi,Yn[$n++]=cs,qi=t.id,Yi=t.overflow,cs=e),e=Sp(e,i.children),e.flags|=4096,e)}function mg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Sf(t.return,e,n)}function $u(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mg(t,n,e);else if(t.tag===19)mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(bt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$u(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$u(e,!0,n,null,s);break;case"together":$u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DS(t,e,n){switch(e.tag){case 3:Ov(e),xo();break;case 5:fv(e);break;case 1:Tn(e.type)&&Pc(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;bt(Ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?Bv(t,e,n):(bt(Ct,Ct.current&1),t=rr(t,e,n),t!==null?t.sibling:null);bt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),bt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Uv(t,e,n)}return rr(t,e,n)}var Vv,Rf,Hv,Gv;Vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};Hv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,is(Pi.current);var s=null;switch(n){case"input":r=Kd(t,r),i=Kd(t,i),s=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),s=[];break;case"textarea":r=Jd(t,r),i=Jd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cc)}tf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_a.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_a.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ho(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function FS(t,e,n){var i=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return Tn(e.type)&&Rc(),sn(e),null;case 3:return i=e.stateNode,yo(),wt(bn),wt(fn),mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(kf(di),di=null))),Rf(t,e),sn(e),null;case 5:pp(e);var r=is(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)Hv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return sn(e),null}if(t=is(Pi.current),fl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(r=0;r<ia.length;r++)Tt(ia[r],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":bm(i,s),Tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Tt("invalid",i);break;case"textarea":wm(i,s),Tt("invalid",i)}tf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&dl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dl(i.textContent,a,t),r=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Tt("scroll",i)}switch(n){case"input":il(i),Tm(i,s,!0);break;case"textarea":il(i),Am(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ti]=e,t[Pa]=i,Vv(t,e,!1,!1),e.stateNode=t;e:{switch(o=nf(n,i),n){case"dialog":Tt("cancel",t),Tt("close",t),r=i;break;case"iframe":case"object":case"embed":Tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ia.length;r++)Tt(ia[r],t);r=i;break;case"source":Tt("error",t),r=i;break;case"img":case"image":case"link":Tt("error",t),Tt("load",t),r=i;break;case"details":Tt("toggle",t),r=i;break;case"input":bm(t,i),r=Kd(t,i),Tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),Tt("invalid",t);break;case"textarea":wm(t,i),r=Jd(t,i),Tt("invalid",t);break;default:r=i}tf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_x(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Tt("scroll",t):l!=null&&jh(t,s,l,o))}switch(n){case"input":il(t),Tm(t,i,!1);break;case"textarea":il(t),Am(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?io(t,!!i.multiple,s,!1):i.defaultValue!=null&&io(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)Gv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=is(Fa.current),is(Pi.current),fl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==n)&&(t=Bn,t!==null))switch(t.tag){case 3:dl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return sn(e),null;case 13:if(wt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&kn!==null&&e.mode&1&&!(e.flags&128))av(),xo(),e.flags|=98560,s=!1;else if(s=fl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Ti]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else di!==null&&(kf(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Gt===0&&(Gt=3):Ap())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return yo(),Rf(t,e),t===null&&Ca(e.stateNode.containerInfo),sn(e),null;case 10:return up(e.type._context),sn(e),null;case 17:return Tn(e.type)&&Rc(),sn(e),null;case 19:if(wt(Ct),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ho(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,Ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return bt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ot()>So&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return sn(e),null}else 2*Ot()-s.renderingStartTime>So&&n!==1073741824&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,n=Ct.current,bt(Ct,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return wp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function IS(t,e){switch(op(e),e.tag){case 1:return Tn(e.type)&&Rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yo(),wt(bn),wt(fn),mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(wt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(Ct),null;case 4:return yo(),null;case 10:return up(e.type._context),null;case 22:case 23:return wp(),null;case 24:return null;default:return null}}var ml=!1,un=!1,LS=typeof WeakSet=="function"?WeakSet:Set,be=null;function Js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function Pf(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var gg=!1;function NS(t,e){if(hf=Tc,t=Yx(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pf={focusedElem:t,selectionRange:n},Tc=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var E=g.memoizedProps,x=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:li(e.type,E),x);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Nt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return g=gg,gg=!1,g}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pf(e,n,s)}r=r.next}while(r!==i)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ti],delete e[Pa],delete e[xf],delete e[xS],delete e[vS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(i!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}function If(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}var Kt=null,ci=!1;function dr(t,e,n){for(n=n.child;n!==null;)Xv(t,e,n),n=n.sibling}function Xv(t,e,n){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:un||Js(n,e);case 6:var i=Kt,r=ci;Kt=null,dr(t,e,n),Kt=i,ci=r,Kt!==null&&(ci?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(ci?(t=Kt,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),Ta(t)):Hu(Kt,n.stateNode));break;case 4:i=Kt,r=ci,Kt=n.stateNode.containerInfo,ci=!0,dr(t,e,n),Kt=i,ci=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pf(n,e,o),r=r.next}while(r!==i)}dr(t,e,n);break;case 1:if(!un&&(Js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,dr(t,e,n),un=i):dr(t,e,n);break;default:dr(t,e,n)}}function vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(i){var r=WS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,ci=!1;break e;case 3:Kt=a.stateNode.containerInfo,ci=!0;break e;case 4:Kt=a.stateNode.containerInfo,ci=!0;break e}a=a.return}if(Kt===null)throw Error(ae(160));Xv(s,o,r),Kt=null,ci=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qv(e,t),e=e.sibling}function qv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),yi(t),i&4){try{ma(3,t,t.return),lu(3,t)}catch(E){Nt(t,t.return,E)}try{ma(5,t,t.return)}catch(E){Nt(t,t.return,E)}}break;case 1:ii(e,t),yi(t),i&512&&n!==null&&Js(n,n.return);break;case 5:if(ii(e,t),yi(t),i&512&&n!==null&&Js(n,n.return),t.flags&32){var r=t.stateNode;try{Sa(r,"")}catch(E){Nt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mx(r,s),nf(a,o);var c=nf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?_x(r,p):h==="dangerouslySetInnerHTML"?vx(r,p):h==="children"?Sa(r,p):jh(r,h,p,c)}switch(a){case"input":Zd(r,s);break;case"textarea":gx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?io(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?io(r,!!s.multiple,s.defaultValue,!0):io(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(E){Nt(t,t.return,E)}}break;case 6:if(ii(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Nt(t,t.return,E)}}break;case 3:if(ii(e,t),yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(E){Nt(t,t.return,E)}break;case 4:ii(e,t),yi(t);break;case 13:ii(e,t),yi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bp=Ot())),i&4&&vg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(un=(c=un)||h,ii(e,t),un=c):ii(e,t),yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(be=t,h=t.child;h!==null;){for(p=be=h;be!==null;){switch(d=be,m=d.child,d.tag){case 0:case 11:case 14:case 15:ma(4,d,d.return);break;case 1:Js(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(E){Nt(i,n,E)}}break;case 5:Js(d,d.return);break;case 22:if(d.memoizedState!==null){_g(p);continue}}m!==null?(m.return=d,be=m):_g(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yx("display",o))}catch(E){Nt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){Nt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ii(e,t),yi(t),i&4&&vg(t);break;case 21:break;default:ii(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Sa(r,""),i.flags&=-33);var s=xg(t);If(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xg(t);Ff(t,a,o);break;default:throw Error(ae(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function US(t,e,n){be=t,Yv(t)}function Yv(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=ml;var c=un;if(ml=o,(un=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?Sg(r):l!==null?(l.return=o,be=l):Sg(r);for(;s!==null;)be=s,Yv(s),s=s.sibling;be=r,ml=a,un=c}yg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):yg(t)}}function yg(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:li(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ig(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ig(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}un||e.flags&512&&Df(e)}catch(d){Nt(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function _g(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Sg(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{Df(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{Df(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var kS=Math.ceil,Bc=ar.ReactCurrentDispatcher,Mp=ar.ReactCurrentOwner,Qn=ar.ReactCurrentBatchConfig,mt=0,Yt=null,zt=null,en=0,Ln=0,eo=Hr(0),Gt=0,Ua=null,ds=0,cu=0,Ep=0,ga=null,Mn=null,bp=0,So=1/0,Hi=null,zc=!1,Lf=null,Fr=null,gl=!1,Tr=null,Vc=0,xa=0,Nf=null,oc=-1,ac=0;function gn(){return mt&6?Ot():oc!==-1?oc:oc=Ot()}function Ir(t){return t.mode&1?mt&2&&en!==0?en&-en:_S.transition!==null?(ac===0&&(ac=Fx()),ac):(t=xt,t!==0||(t=window.event,t=t===void 0?16:Bx(t.type)),t):1}function gi(t,e,n,i){if(50<xa)throw xa=0,Nf=null,Error(ae(185));Wa(t,n,i),(!(mt&2)||t!==Yt)&&(t===Yt&&(!(mt&2)&&(cu|=n),Gt===4&&Mr(t,en)),wn(t,i),n===1&&mt===0&&!(e.mode&1)&&(So=Ot()+500,su&&Gr()))}function wn(t,e){var n=t.callbackNode;_1(t,e);var i=bc(t,t===Yt?en:0);if(i===0)n!==null&&Pm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Pm(n),e===1)t.tag===0?yS(Mg.bind(null,t)):rv(Mg.bind(null,t)),mS(function(){!(mt&6)&&Gr()}),n=null;else{switch(Ix(i)){case 1:n=Kh;break;case 4:n=Px;break;case 16:n=Ec;break;case 536870912:n=Dx;break;default:n=Ec}n=ny(n,$v.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $v(t,e){if(oc=-1,ac=0,mt&6)throw Error(ae(327));var n=t.callbackNode;if(lo()&&t.callbackNode!==n)return null;var i=bc(t,t===Yt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Hc(t,i);else{e=i;var r=mt;mt|=2;var s=Zv();(Yt!==t||en!==e)&&(Hi=null,So=Ot()+500,os(t,e));do try{zS();break}catch(a){Kv(t,a)}while(!0);cp(),Bc.current=s,mt=r,zt!==null?e=0:(Yt=null,en=0,e=Gt)}if(e!==0){if(e===2&&(r=lf(t),r!==0&&(i=r,e=Uf(t,r))),e===1)throw n=Ua,os(t,0),Mr(t,i),wn(t,Ot()),n;if(e===6)Mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!OS(r)&&(e=Hc(t,i),e===2&&(s=lf(t),s!==0&&(i=s,e=Uf(t,s))),e===1))throw n=Ua,os(t,0),Mr(t,i),wn(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Zr(t,Mn,Hi);break;case 3:if(Mr(t,i),(i&130023424)===i&&(e=bp+500-Ot(),10<e)){if(bc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gf(Zr.bind(null,t,Mn,Hi),e);break}Zr(t,Mn,Hi);break;case 4:if(Mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kS(i/1960))-i,10<i){t.timeoutHandle=gf(Zr.bind(null,t,Mn,Hi),i);break}Zr(t,Mn,Hi);break;case 5:Zr(t,Mn,Hi);break;default:throw Error(ae(329))}}}return wn(t,Ot()),t.callbackNode===n?$v.bind(null,t):null}function Uf(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(os(t,e).flags|=256),t=Hc(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&kf(e)),t}function kf(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function OS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mr(t,e){for(e&=~Ep,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function Mg(t){if(mt&6)throw Error(ae(327));lo();var e=bc(t,0);if(!(e&1))return wn(t,Ot()),null;var n=Hc(t,e);if(t.tag!==0&&n===2){var i=lf(t);i!==0&&(e=i,n=Uf(t,i))}if(n===1)throw n=Ua,os(t,0),Mr(t,e),wn(t,Ot()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,Mn,Hi),wn(t,Ot()),null}function Tp(t,e){var n=mt;mt|=1;try{return t(e)}finally{mt=n,mt===0&&(So=Ot()+500,su&&Gr())}}function fs(t){Tr!==null&&Tr.tag===0&&!(mt&6)&&lo();var e=mt;mt|=1;var n=Qn.transition,i=xt;try{if(Qn.transition=null,xt=1,t)return t()}finally{xt=i,Qn.transition=n,mt=e,!(mt&6)&&Gr()}}function wp(){Ln=eo.current,wt(eo)}function os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pS(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(op(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rc();break;case 3:yo(),wt(bn),wt(fn),mp();break;case 5:pp(i);break;case 4:yo();break;case 13:wt(Ct);break;case 19:wt(Ct);break;case 10:up(i.type._context);break;case 22:case 23:wp()}n=n.return}if(Yt=t,zt=t=Lr(t.current,null),en=Ln=e,Gt=0,Ua=null,Ep=cu=ds=0,Mn=ga=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ns=null}return t}function Kv(t,e){do{var n=zt;try{if(cp(),ic.current=Oc,kc){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kc=!1}if(us=0,qt=Vt=Dt=null,pa=!1,Ia=0,Mp.current=null,n===null||n.return===null){Gt=1,Ua=e,zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=en,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=cg(o);if(m!==null){m.flags&=-257,ug(m,o,a,s,e),m.mode&1&&lg(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var E=new Set;E.add(l),e.updateQueue=E}else g.add(l);break e}else{if(!(e&1)){lg(s,c,e),Ap();break e}l=Error(ae(426))}}else if(At&&a.mode&1){var x=cg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ug(x,o,a,s,e),ap(_o(l,a));break e}}s=l=_o(l,a),Gt!==4&&(Gt=2),ga===null?ga=[s]:ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Iv(s,l,e);ng(s,f);break e;case 1:a=l;var v=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Fr===null||!Fr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Lv(s,a,e);ng(s,S);break e}}s=s.return}while(s!==null)}Jv(n)}catch(T){e=T,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function Zv(){var t=Bc.current;return Bc.current=Oc,t===null?Oc:t}function Ap(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Yt===null||!(ds&268435455)&&!(cu&268435455)||Mr(Yt,en)}function Hc(t,e){var n=mt;mt|=2;var i=Zv();(Yt!==t||en!==e)&&(Hi=null,os(t,e));do try{BS();break}catch(r){Kv(t,r)}while(!0);if(cp(),mt=n,Bc.current=i,zt!==null)throw Error(ae(261));return Yt=null,en=0,Gt}function BS(){for(;zt!==null;)Qv(zt)}function zS(){for(;zt!==null&&!d1();)Qv(zt)}function Qv(t){var e=ty(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?Jv(t):zt=e,Mp.current=null}function Jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IS(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,zt=null;return}}else if(n=FS(n,e,Ln),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Zr(t,e,n){var i=xt,r=Qn.transition;try{Qn.transition=null,xt=1,VS(t,e,n,i)}finally{Qn.transition=r,xt=i}return null}function VS(t,e,n,i){do lo();while(Tr!==null);if(mt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(S1(t,s),t===Yt&&(zt=Yt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,ny(Ec,function(){return lo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=xt;xt=1;var a=mt;mt|=4,Mp.current=null,NS(t,n),qv(n,t),aS(pf),Tc=!!hf,pf=hf=null,t.current=n,US(n),f1(),mt=a,xt=o,Qn.transition=s}else t.current=n;if(gl&&(gl=!1,Tr=t,Vc=r),s=t.pendingLanes,s===0&&(Fr=null),m1(n.stateNode),wn(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zc)throw zc=!1,t=Lf,Lf=null,t;return Vc&1&&t.tag!==0&&lo(),s=t.pendingLanes,s&1?t===Nf?xa++:(xa=0,Nf=t):xa=0,Gr(),null}function lo(){if(Tr!==null){var t=Ix(Vc),e=Qn.transition,n=xt;try{if(Qn.transition=null,xt=16>t?16:t,Tr===null)var i=!1;else{if(t=Tr,Tr=null,Vc=0,mt&6)throw Error(ae(331));var r=mt;for(mt|=4,be=t.current;be!==null;){var s=be,o=s.child;if(be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var p=h.child;if(p!==null)p.return=h,be=p;else for(;be!==null;){h=be;var d=h.sibling,m=h.return;if(Wv(h),h===c){be=null;break}if(d!==null){d.return=m,be=d;break}be=m}}}var g=s.alternate;if(g!==null){var E=g.child;if(E!==null){g.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,be=f;break e}be=s.return}}var v=t.current;for(be=v;be!==null;){o=be;var M=o.child;if(o.subtreeFlags&2064&&M!==null)M.return=o,be=M;else e:for(o=v;be!==null;){if(a=be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(T){Nt(a,a.return,T)}if(a===o){be=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,be=S;break e}be=a.return}}if(mt=r,Gr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(eu,t)}catch{}i=!0}return i}finally{xt=n,Qn.transition=e}}return!1}function Eg(t,e,n){e=_o(n,e),e=Iv(t,e,1),t=Dr(t,e,1),e=gn(),t!==null&&(Wa(t,1,e),wn(t,e))}function Nt(t,e,n){if(t.tag===3)Eg(t,t,n);else for(;e!==null;){if(e.tag===3){Eg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fr===null||!Fr.has(i))){t=_o(n,t),t=Lv(e,t,1),e=Dr(e,t,1),t=gn(),e!==null&&(Wa(e,1,t),wn(e,t));break}}e=e.return}}function HS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(en&n)===n&&(Gt===4||Gt===3&&(en&130023424)===en&&500>Ot()-bp?os(t,0):Ep|=n),wn(t,e)}function ey(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=gn();t=ir(t,e),t!==null&&(Wa(t,e,n),wn(t,n))}function GS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ey(t,n)}function WS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),ey(t,n)}var ty;ty=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,DS(t,e,n);En=!!(t.flags&131072)}else En=!1,At&&e.flags&1048576&&sv(e,Fc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=go(e,fn.current);ao(e,n),r=xp(null,e,i,t,r,n);var s=vp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,Pc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fp(e),r.updater=au,e.stateNode=r,r._reactInternals=e,Ef(e,i,t,n),e=wf(null,e,i,!0,s,n)):(e.tag=0,At&&s&&sp(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=XS(i),t=li(i,t),r){case 0:e=Tf(null,e,i,t,n);break e;case 1:e=hg(null,e,i,t,n);break e;case 11:e=dg(null,e,i,t,n);break e;case 14:e=fg(null,e,i,li(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),hg(t,e,i,r,n);case 3:e:{if(Ov(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dv(t,e),Nc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_o(Error(ae(423)),e),e=pg(t,e,i,n,r);break e}else if(i!==r){r=_o(Error(ae(424)),e),e=pg(t,e,i,n,r);break e}else for(kn=Pr(e.stateNode.containerInfo.firstChild),Bn=e,At=!0,di=null,n=cv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=rr(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return fv(e),t===null&&_f(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mf(i,r)?o=null:s!==null&&mf(i,s)&&(e.flags|=32),kv(t,e),pn(t,e,o,n),e.child;case 6:return t===null&&_f(e),null;case 13:return Bv(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vo(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),dg(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,bt(Ic,i._currentValue),i._currentValue=o,s!==null)if(xi(s.value,o)){if(s.children===r.children&&!bn.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ao(e,n),r=ei(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),fg(t,e,i,r,n);case 15:return Nv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),sc(t,e),e.tag=1,Tn(i)?(t=!0,Pc(e)):t=!1,ao(e,n),Fv(e,i,r),Ef(e,i,r,n),wf(null,e,i,!0,t,n);case 19:return zv(t,e,n);case 22:return Uv(t,e,n)}throw Error(ae(156,e.tag))};function ny(t,e){return Rx(t,e)}function jS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,e,n,i){return new jS(t,e,n,i)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XS(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qh)return 11;if(t===Yh)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ws:return as(n.children,r,s,e);case Xh:o=8,r|=8;break;case Xd:return t=Zn(12,n,e,r|2),t.elementType=Xd,t.lanes=s,t;case qd:return t=Zn(13,n,e,r),t.elementType=qd,t.lanes=s,t;case Yd:return t=Zn(19,n,e,r),t.elementType=Yd,t.lanes=s,t;case fx:return uu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ux:o=10;break e;case dx:o=9;break e;case qh:o=11;break e;case Yh:o=14;break e;case yr:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function as(t,e,n,i){return t=Zn(7,t,i,e),t.lanes=n,t}function uu(t,e,n,i){return t=Zn(22,t,i,e),t.elementType=fx,t.lanes=n,t.stateNode={isHidden:!1},t}function Ku(t,e,n){return t=Zn(6,t,null,e),t.lanes=n,t}function Zu(t,e,n){return e=Zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rp(t,e,n,i,r,s,o,a,l){return t=new qS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(s),t}function YS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function iy(t){if(!t)return kr;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(Tn(n))return iv(t,n,e)}return e}function ry(t,e,n,i,r,s,o,a,l){return t=Rp(n,i,!0,t,r,s,o,a,l),t.context=iy(null),n=t.current,i=gn(),r=Ir(n),s=Ki(i,r),s.callback=e??null,Dr(n,s,r),t.current.lanes=r,Wa(t,r,i),wn(t,i),t}function du(t,e,n,i){var r=e.current,s=gn(),o=Ir(r);return n=iy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Dr(r,e,o),t!==null&&(gi(t,r,o,s),nc(t,r,o)),o}function Gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pp(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function $S(){return null}var sy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dp(t){this._internalRoot=t}fu.prototype.render=Dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));du(t,e,null,null)};fu.prototype.unmount=Dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){du(null,t,null,null)}),e[nr]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ux();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&Ox(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tg(){}function KS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gc(o);s.call(c)}}var o=ry(e,i,t,0,null,!1,!1,"",Tg);return t._reactRootContainer=o,t[nr]=o.current,Ca(t.nodeType===8?t.parentNode:t),fs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Gc(l);a.call(c)}}var l=Rp(t,0,!1,null,null,!1,!1,"",Tg);return t._reactRootContainer=l,t[nr]=l.current,Ca(t.nodeType===8?t.parentNode:t),fs(function(){du(e,l,n,i)}),l}function pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gc(o);a.call(l)}}du(e,o,t,r)}else o=KS(n,e,t,r,i);return Gc(o)}Lx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(Zh(e,n|1),wn(e,Ot()),!(mt&6)&&(So=Ot()+500,Gr()))}break;case 13:fs(function(){var i=ir(t,1);if(i!==null){var r=gn();gi(i,t,1,r)}}),Pp(t,1)}};Qh=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=gn();gi(e,t,134217728,n)}Pp(t,134217728)}};Nx=function(t){if(t.tag===13){var e=Ir(t),n=ir(t,e);if(n!==null){var i=gn();gi(n,t,e,i)}Pp(t,e)}};Ux=function(){return xt};kx=function(t,e){var n=xt;try{return xt=t,e()}finally{xt=n}};sf=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ru(i);if(!r)throw Error(ae(90));px(i),Zd(i,r)}}}break;case"textarea":gx(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};Ex=Tp;bx=fs;var ZS={usingClientEntryPoint:!1,Events:[Xa,Ys,ru,Sx,Mx,Tp]},Go={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QS={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ax(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||$S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{eu=xl.inject(QS),Ri=xl}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(ae(200));return YS(t,e,null,n)};Vn.createRoot=function(t,e){if(!Fp(t))throw Error(ae(299));var n=!1,i="",r=sy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rp(t,1,!1,null,null,n,!1,i,r),t[nr]=e.current,Ca(t.nodeType===8?t.parentNode:t),new Dp(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Ax(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return fs(t)};Vn.hydrate=function(t,e,n){if(!hu(e))throw Error(ae(200));return pu(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=sy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ry(e,null,t,1,n??null,r,!1,s,o),t[nr]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new fu(e)};Vn.render=function(t,e,n){if(!hu(e))throw Error(ae(200));return pu(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!hu(t))throw Error(ae(40));return t._reactRootContainer?(fs(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Vn.unstable_batchedUpdates=Tp;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hu(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return pu(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy)}catch(t){console.error(t)}}oy(),ox.exports=Vn;var JS=ox.exports,wg=JS;Wd.createRoot=wg.createRoot,Wd.hydrateRoot=wg.hydrateRoot;const eM=()=>{const t=Pe.useRef(null);return Pe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight,o=0,a=0,l=0,c=0,h=0,p=window.scrollY;const d=Math.min(260,Math.floor(r*s/5500)),m=[],g=["#00f0ff","#7000ff","#ffffff","#ff00aa","#00ff88"],E=T=>{T.x=(Math.random()-.5)*r*2,T.y=(Math.random()-.5)*s*2,T.z=r,T.pz=r,T.size=.5+Math.random()*1.8,T.color=g[Math.floor(Math.random()*g.length)]};for(let T=0;T<d;T++){const b={x:0,y:0,z:0,pz:0,size:1,color:"#ffffff"};E(b),b.z=Math.random()*r,b.pz=b.z,m.push(b)}const x=()=>{e&&(r=e.width=window.innerWidth,s=e.height=window.innerHeight)},f=T=>{l=(T.clientX-r/2)*.2,c=(T.clientY-s/2)*.2},v=()=>{const T=window.scrollY,b=Math.abs(T-p);h=Math.min(35,h+b*.6),p=T};window.addEventListener("resize",x),window.addEventListener("mousemove",f),window.addEventListener("scroll",v,{passive:!0});const M=2.5,S=()=>{o+=(l-o)*.05,a+=(c-a)*.05,h*=.92;const T=M+h;n.fillStyle="#05070e",n.fillRect(0,0,r,s);const b=r/2+o,A=s/2+a;for(let y=0;y<m.length;y++){const C=m[y];if(C.pz=C.z,C.z-=T,C.z<=0){E(C);continue}const P=250/C.z,D=C.x*P+b,k=C.y*P+A,$=250/C.pz,Q=C.x*$+b,O=C.y*$+A;if(D>=0&&D<=r&&k>=0&&k<=s){const q=Math.min(1,(1-C.z/r)*1.2);n.strokeStyle=C.color,n.lineWidth=C.size*P*(1+h*.05),n.globalAlpha=q,n.beginPath(),n.moveTo(D,k),n.lineTo(Q,O),n.stroke(),n.fillStyle=C.color,n.beginPath(),n.arc(D,k,C.size*P*.5,0,Math.PI*2),n.fill()}}n.globalAlpha=1,i=requestAnimationFrame(S)};return S(),()=>{window.removeEventListener("resize",x),window.removeEventListener("mousemove",f),window.removeEventListener("scroll",v),cancelAnimationFrame(i)}},[]),u.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),je=(t,e)=>{const n=Pe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},h)=>Pe.createElement("svg",{ref:h,...tM,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${nM(t)}`,a].join(" "),...c},[...e.map(([p,d])=>Pe.createElement(p,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=je("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=je("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=je("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=je("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=je("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=je("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=je("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=je("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=je("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=je("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=je("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=je("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=je("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=je("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=je("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=je("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=je("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=je("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=je("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=je("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=je("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=je("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=je("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=je("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=je("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=je("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=je("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=je("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=je("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=je("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=je("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=je("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=je("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=je("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=je("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=je("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=je("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=je("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=je("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=je("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=je("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=je("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=je("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=je("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=je("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=je("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=je("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),fy={Windows:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",macOS:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",Linux:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",default:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"},Ni={version:"0.4.0",tagName:"v0.4.0",downloadUrlExe:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64-setup.exe",downloadUrlMsi:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64_en-US.msi",downloadUrlDmg:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_aarch64.dmg",downloadUrlDeb:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_amd64.deb",downloadUrlAppImage:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_amd64.AppImage",releaseNotesUrl:"https://github.com/Aryan4132/Meridian-X/releases/latest",publishedAt:new Date().toISOString(),isLive:!1,isLoading:!0,checksums:fy};let vl=null;function gu(){const[t,e]=Pe.useState(vl||Ni);return Pe.useEffect(()=>{if(vl){e(vl);return}let n=!0;return(async()=>{try{const r=await fetch("https://api.github.com/repos/Aryan4132/Meridian-X/releases/latest",{headers:{Accept:"application/vnd.github.v3+json"}});if(r.ok){const s=await r.json(),o=s.tag_name||"v0.4.0",a=o.replace(/^v/,"");let l=Ni.downloadUrlExe,c=Ni.downloadUrlMsi,h=Ni.downloadUrlDmg,p=Ni.downloadUrlDeb,d=Ni.downloadUrlAppImage;const m={...fy};if(Array.isArray(s.assets)){const E=s.assets.find(S=>{var T;return(T=S.name)==null?void 0:T.endsWith(".exe")}),x=s.assets.find(S=>{var T;return(T=S.name)==null?void 0:T.endsWith(".msi")}),f=s.assets.find(S=>{var T;return(T=S.name)==null?void 0:T.endsWith(".dmg")}),v=s.assets.find(S=>{var T;return(T=S.name)==null?void 0:T.endsWith(".deb")}),M=s.assets.find(S=>{var T;return(T=S.name)==null?void 0:T.endsWith(".AppImage")});E!=null&&E.browser_download_url&&(l=E.browser_download_url),x!=null&&x.browser_download_url&&(c=x.browser_download_url),f!=null&&f.browser_download_url&&(h=f.browser_download_url),v!=null&&v.browser_download_url&&(p=v.browser_download_url),M!=null&&M.browser_download_url&&(d=M.browser_download_url)}typeof s.body=="string"&&s.body.split(`
`).forEach(x=>{const f=x.match(/([a-fA-F0-9]{64})/);if(f){const v=f[1].toLowerCase();x.toLowerCase().includes(".exe")||x.toLowerCase().includes("windows")?m.Windows=v:x.toLowerCase().includes(".dmg")||x.toLowerCase().includes("mac")?m.macOS=v:x.toLowerCase().includes(".deb")||x.toLowerCase().includes("linux")?m.Linux=v:m.default=v}});const g={version:a,tagName:o,downloadUrlExe:l,downloadUrlMsi:c,downloadUrlDmg:h,downloadUrlDeb:p,downloadUrlAppImage:d,releaseNotesUrl:s.html_url||Ni.releaseNotesUrl,publishedAt:s.published_at||Ni.publishedAt,isLive:!0,isLoading:!1,checksums:m};vl=g,n&&e(g);return}}catch{}n&&e({...Ni,isLoading:!1})})(),()=>{n=!1}},[]),t}const RM=({onDownloadClick:t,detectedOS:e})=>{const[n,i]=Pe.useState(!1),[r,s]=Pe.useState(!1),o=gu();return Pe.useEffect(()=>{const a=()=>{i(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),u.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",background:n?"rgba(3, 3, 3, 0.92)":"rgba(3, 3, 3, 0.5)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:n?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 255, 255, 0.04)",boxShadow:n?"0 12px 36px rgba(0, 0, 0, 0.9)":"none",padding:n?"12px 0":"18px 0"},children:[u.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("a",{href:"/",onClick:a=>{a.preventDefault(),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[u.jsx("img",{src:"/logo.png",alt:"Meridian-X Sovereign AI Workspace Logo",style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover",border:"1px solid rgba(255, 255, 255, 0.25)",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 255, 255, 0.15)"}}),u.jsx("div",{children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.3rem",letterSpacing:"-0.03em",color:"#FFFFFF"},children:["Meridian",u.jsx("span",{style:{color:"#A1A1AA",fontWeight:600},children:"-X"})]}),u.jsx("span",{className:"glass-pill",style:{fontSize:"0.68rem",padding:"2px 8px",color:"#FAFAFA",borderColor:"rgba(255, 255, 255, 0.2)",fontFamily:"var(--font-code)"},children:o.tagName})]})})]}),u.jsxs("nav",{className:"desktop-nav",style:{display:"flex",alignItems:"center",gap:"24px",background:"rgba(18, 18, 22, 0.8)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"9999px",padding:"6px 20px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)"},children:[u.jsx("a",{href:"#simulator",className:"nav-item-link",children:"Terminal Demo"}),u.jsx("a",{href:"#features",className:"nav-item-link",children:"Features"}),u.jsx("a",{href:"#architecture",className:"nav-item-link",children:"Architecture"}),u.jsx("a",{href:"#mcp",className:"nav-item-link",children:"MCP Marketplace"}),u.jsx("a",{href:"/docs",className:"nav-item-link",onClick:a=>{a.preventDefault(),window.history.pushState({},"","/docs"),window.dispatchEvent(new Event("popstate"))},children:"Docs"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsxs("button",{onClick:t,className:"btn-primary",style:{padding:"9px 18px",fontSize:"0.86rem",borderRadius:"10px"},children:[u.jsx(Xi,{size:15}),u.jsx("span",{children:"Download"})]}),u.jsx("button",{onClick:()=>s(!r),className:"mobile-toggle",style:{background:"rgba(18, 18, 22, 0.8)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#FFFFFF",cursor:"pointer",padding:"8px",display:"none"},"aria-label":"Toggle menu",children:r?u.jsx(Mo,{size:20}):u.jsx(uy,{size:20})})]})]}),r&&u.jsxs("div",{style:{background:"rgba(8, 8, 10, 0.98)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",padding:"24px",display:"flex",flexDirection:"column",gap:"16px",marginTop:"12px"},children:[u.jsx("a",{href:"#simulator",onClick:()=>s(!1),style:Wo,children:"Terminal Demo"}),u.jsx("a",{href:"#features",onClick:()=>s(!1),style:Wo,children:"Core Pillars"}),u.jsx("a",{href:"#architecture",onClick:()=>s(!1),style:Wo,children:"Architecture"}),u.jsx("a",{href:"#mcp",onClick:()=>s(!1),style:Wo,children:"MCP Marketplace"}),u.jsx("a",{href:"/docs",onClick:a=>{a.preventDefault(),s(!1),window.history.pushState({},"","/docs"),window.dispatchEvent(new Event("popstate"))},style:Wo,children:"Documentation"})]}),u.jsx("style",{children:`
        .nav-item-link {
          color: #A1A1AA;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.25s ease;
          padding: 4px 8px;
          border-radius: 6px;
        }
        .nav-item-link:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.08);
        }
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `})]})},Wo={color:"#FAFAFA",textDecoration:"none",fontSize:"1.05rem",fontWeight:600};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Wr=typeof window<"u",Ju=Wr?window:null,Ba=Wr?document:null,Rt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},ct={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Kn={NONE:0,AUTO:1,FORCE:2},mn={replace:0,none:1,blend:2},Cg=Symbol(),Eo=Symbol(),hy=Symbol(),xu=Symbol(),PM=Symbol(),yt=1e-11,Bf=1e12,bo=1e3,zf=240,hs="",DM="var(",yl=[],py=(()=>{const t=new Map;return t.set("x","translateX"),t.set("y","translateY"),t.set("z","translateZ"),t})(),Wc=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],FM=Wc.reduce((t,e)=>({...t,[e]:e+"("}),{}),Xn=()=>{},IM=t=>t,LM=/\)\s*[-.\d]/,NM=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,UM=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,kM=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,OM=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,BM=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Rg=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,my=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,zM=/([a-z])([A-Z])/g,VM=/(\*=|\+=|-=)/,HM=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const jc={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:zf,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:bo,delay:0,loopDelay:0,ease:"out(2)",composition:mn.replace,modifier:IM,onBegin:Xn,onBeforeUpdate:Xn,onUpdate:Xn,onLoop:Xn,onPause:Xn,onComplete:Xn,onRender:Xn},GM={root:Ba},Zt={defaults:jc,precision:4,timeScale:1,tickThreshold:200},gy={version:"4.5.0",engine:null};Wr&&(Ju.AnimeJS||(Ju.AnimeJS=[]),Ju.AnimeJS.push(gy));/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const xy=t=>t.replace(zM,"$1-$2").toLowerCase(),Zi=(t,e)=>t.indexOf(e)===0,To=Date.now,Qi=Array.isArray,ed=t=>t&&t.constructor===Object,Gi=t=>typeof t=="number"&&!isNaN(t),ps=t=>typeof t=="string",ms=t=>typeof t=="function",ft=t=>typeof t>"u",co=t=>ft(t)||t===null,vy=t=>Wr&&t instanceof SVGElement,yy=t=>NM.test(t),_y=t=>Zi(t,"rgb"),Sy=t=>Zi(t,"hsl"),WM=t=>yy(t)||(_y(t)||Sy(t))&&(t[t.length-1]===")"||!LM.test(t)),cc=t=>!Zt.defaults.hasOwnProperty(t),jM=["opacity","rotate","overflow","color"],XM=(t,e)=>{if(jM.includes(e))return!1;if(t.getAttribute(e)||e in t){if(e==="scale"){const n=t.parentNode;return n&&n.tagName==="filter"}return!0}},td=t=>ps(t)?parseFloat(t):t,zs=Math.pow,Vf=Math.sqrt,qM=Math.sin,YM=Math.cos,_l=Math.abs,ra=Math.floor,$M=Math.asin,kp=Math.PI,Pg=Math.round,fi=(t,e,n)=>t<e?e:t>n?n:t,Et=(t,e)=>{if(e<0)return t;if(!e)return Pg(t);const n=10**e;return Pg(t*n)/n},uc=(t,e,n)=>n===1?e:n===0?t:t+(e-t)*n,Op=t=>t===1/0?Bf:t===-1/0?-Bf:t,va=t=>t<=yt?yt:Op(Et(t,11)),ln=t=>Qi(t)?[...t]:t,KM=(t,e)=>{const n={...t};for(let i in e){const r=t[i];n[i]=ft(r)?e[i]:r}return n},Ht=(t,e,n,i="_prev",r="_next")=>{let s=t._head,o=r;for(n&&(s=t._tail,o=i);s;){const a=s[o];e(s),s=a}},sa=(t,e,n="_prev",i="_next")=>{const r=e[n],s=e[i];r?r[i]=s:t._head=s,s?s[n]=r:t._tail=r,e[n]=null,e[i]=null},no=(t,e,n,i="_prev",r="_next")=>{let s=t._tail;for(;s&&n&&n(s,e);)s=s[i];const o=s?s[r]:t._head;s?s[r]=e:t._head=e,o?o[i]=e:t._tail=e,e[i]=s,e[r]=o};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const ZM=(t,e,n)=>{const i=t.style.transform;if(i){const r=t[xu];let s=0;const o=i.length;let a;for(;s<o;){for(;s<o&&i.charCodeAt(s)===32;)s++;if(s>=o)break;const c=s;for(;s<o&&i.charCodeAt(s)!==40;)s++;if(s>=o)break;const h=i.substring(c,s);let p=1;const d=s+1;let m=-1,g=-1;for(s++;s<o&&p>0;){const x=i.charCodeAt(s);x===40?p++:x===41?p--:x===44&&p===1&&(m===-1?m=s:g===-1&&(g=s)),s++}const E=s-1;h==="translate"||h==="translate3d"?(m===-1?r.translateX=i.substring(d,E).trim():(r.translateX=i.substring(d,m).trim(),g===-1?r.translateY=i.substring(m+1,E).trim():(r.translateY=i.substring(m+1,g).trim(),r.translateZ=i.substring(g+1,E).trim())),a=i.substring(d,E)):h==="scale"||h==="scale3d"?m===-1?r.scale=i.substring(d,E).trim():(r.scaleX=i.substring(d,m).trim(),g===-1?r.scaleY=i.substring(m+1,E).trim():(r.scaleY=i.substring(m+1,g).trim(),r.scaleZ=i.substring(g+1,E).trim())):r[h]=i.substring(d,E)}if(e==="translate3d"&&a)return n&&(n[e]=a),a;const l=r[e];if(!ft(l))return n&&(n[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":Zi(e,"scale")?"1":Zi(e,"rotate")||Zi(e,"skew")?"0deg":"0px"},My=t=>{let e=hs;for(let n=0,i=Wc.length;n<i;n++){const r=Wc[n],s=t[r];if(s!==void 0){if(r==="translateX"){const o=t.translateY;if(o!==void 0){const a=t.translateZ;a!==void 0?(e+=`translate3d(${s},${o},${a}) `,n+=2):(e+=`translate(${s},${o}) `,n+=1);continue}}if(r==="scaleX"&&t.scale===void 0){const o=t.scaleY;if(o!==void 0){const a=t.scaleZ;a!==void 0?(e+=`scale3d(${s},${o},${a}) `,n+=2):(e+=`scale(${s},${o}) `,n+=1);continue}}e+=`${FM[r]}${s}) `}r==="rotateZ"&&t.rotate3d!==void 0&&(e+=`rotate3d(${t.rotate3d}) `)}return t.matrix!==void 0&&(e+=`matrix(${t.matrix}) `),t.matrix3d!==void 0&&(e+=`matrix3d(${t.matrix3d}) `),e};/**
 * Anime.js - adapters - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const nd=[];function Ey(t,e){if(!t)return null;const n=nd.length;e:for(let i=0;i<n;i++){const r=nd[i];if(r.detect&&!r.detect(t))continue;const s=r.targetAdapters;for(let o=0,a=s.length;o<a;o++){const l=s[o];if(l.detect(t)){const c=l.props[e];if(c&&(!c.gate||c.gate(t)))return c;break e}}}for(let i=0;i<n;i++){const r=nd[i];if(r.detect&&!r.detect(t))continue;const s=r.propertyResolvers;for(let o=0,a=s.length;o<a;o++){const l=s[o](t,e);if(l)return l}}return null}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const QM=t=>{const e=UM.exec(t)||kM.exec(t),n=ft(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],n]},JM=t=>{const e=t.length,n=e===4||e===5;return[+("0x"+t[1]+t[n?1:2]),+("0x"+t[n?2:3]+t[n?2:4]),+("0x"+t[n?3:5]+t[n?3:6]),e===5||e===9?+(+("0x"+t[n?4:7]+t[n?4:8])/255).toFixed(3):1]},id=(t,e,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t),eE=t=>{const e=OM.exec(t)||BM.exec(t),n=+e[1]/360,i=+e[2]/100,r=+e[3]/100,s=ft(e[4])?1:+e[4];let o,a,l;if(i===0)o=a=l=r;else{const c=r<.5?r*(1+i):r+i-r*i,h=2*r-c;o=Et(id(h,c,n+1/3)*255,0),a=Et(id(h,c,n)*255,0),l=Et(id(h,c,n-1/3)*255,0)}return[o,a,l,s]},tE=t=>_y(t)?QM(t):yy(t)?JM(t):Sy(t)?eE(t):[0,0,0,1];/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Qt=(t,e)=>ft(t)?e:t,Dg=(t,e)=>{var s;const n=t.match(HM),i=e[Eo]?e:document.documentElement;let r=(s=getComputedStyle(i))==null?void 0:s.getPropertyValue(n[1]);return(!r||r.trim()===hs)&&n[2]&&(r=n[2].trim()),r||0},Ui=(t,e,n,i,r,s)=>{if(ms(t)){if(!r){const a=t(e,n,i,s);return isNaN(+a)?a||0:+a}const o=()=>{const a=t(e,n,i,s);return isNaN(+a)?a||0:+a};return r.func=o,o()}if(ps(t)&&Zi(t,DM)){if(!r)return Dg(t,e);const o=()=>Dg(t,e);return r.func=o,o()}return t},by=(t,e)=>t[Eo]?t[hy]&&XM(t,e)?Rt.ATTRIBUTE:Wc.includes(e)||py.get(e)?Rt.TRANSFORM:Zi(e,"--")?Rt.CSS_VAR:e in t.style?Rt.CSS:e in t?Rt.OBJECT:Rt.ATTRIBUTE:Rt.OBJECT,Fg=(t,e,n)=>{const i=t.style[e];i&&n&&(n[e]=i);const r=i||getComputedStyle(t[PM]||t).getPropertyValue(e);return r==="auto"?"0":r},Vs=(t,e,n,i)=>{const r=ft(n)?by(t,e):n,s=Ey(t,e);if(s){const o=s.get(t);return o&&i&&(i[e]=o),o??0}if(r===Rt.OBJECT){const o=t[e];return o&&i&&(i[e]=o),o||0}if(r===Rt.ATTRIBUTE){const o=t.getAttribute(e);return o&&i&&(i[e]=o),o}return r===Rt.TRANSFORM?ZM(t,e,i):r===Rt.CSS_VAR?Fg(t,e,i).trimStart():Fg(t,e,i)},dc=(t,e,n)=>n==="-"?t-e:n==="+"?t+e:t*e,Bp=()=>({t:ct.NUMBER,n:0,u:null,o:null,d:null,s:null}),jn=(t,e)=>{if(e.t=ct.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!t)return e;const n=+t;if(!isNaN(n))return e.n=n,e;let i=t;i[1]==="="&&(e.o=i[0],i=i.slice(2));const r=i.includes(" ")?!1:my.exec(i);if(r)return e.t=ct.UNIT,e.n=+r[1],e.u=r[2],e;if(e.o)return e.n=+i,e;if(WM(i))return e.t=ct.COLOR,e.d=tE(i),e;{const s=i.match(Rg);return e.t=ct.COMPLEX,e.d=s?s.map(Number):[],e.s=i.split(Rg)||[],e}},Ig=(t,e)=>(e.t=t._valueType,e.n=t._toNumber,e.u=t._unit,e.o=null,e.d=ln(t._toNumbers),e.s=ln(t._strings),e),ui=Bp(),Ty=(t,e,n)=>{const i=t._modifier,r=t._fromNumbers,s=t._toNumbers,o=t._strings;let a=o[0];for(let l=0,c=s.length;l<c;l++){const h=i(Et(uc(r[l],s[l],e),n)),p=o[l+1];a+=`${p?h+p:h}`,t._numbers[l]=h}return a};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const fc=(t,e,n,i,r)=>{const s=t.parent,o=t.duration,a=t.completed,l=t.iterationDuration,c=t.iterationCount,h=t._currentIteration,p=t._loopDelay,d=t._reversed,m=t._alternate,g=t._hasChildren,E=t._delay,x=t._currentTime,f=E+l,v=e-E,M=fi(x,-E,o),S=fi(v,-E,o),T=v-x,b=S>0,A=S>=o,y=o<=yt,C=r===Kn.FORCE;let P=0,D=v,k=0;if(c>1){const H=l+(A?0:p),L=~~(S/H);t._currentIteration=fi(L,0,c),A&&t._currentIteration--,P=t._currentIteration%2,D=S-L*H||0}const $=d^(m&&P),Q=t._ease;let O=A?$?0:o:$?l-D:D;Q&&(O=l*Q(O/l)||0);const q=(s?s.backwards:v<x)?!$:!!$;if(t._currentTime=v,t._iterationTime=O,t.backwards=q,b&&!t.began?(t.began=!0,!n&&!(s&&(q||!s.began))&&t.onBegin(t)):v<=0&&(t.began=!1),!n&&!g&&b&&t._currentIteration!==h&&t.onLoop(t),C||r===Kn.AUTO&&(e>=(s&&E>0?0:E)&&e<=f||e<=E&&M>E||e>=f&&M!==o)||O>=f&&M!==o||O<=E&&M>0&&!A||e<=M&&M===o&&a||A&&!a&&y){if(b&&(t.computeDeltaTime(M),n||t.onBeforeUpdate(t)),!g){const H=C||(q?T*-1:T)>=Zt.tickThreshold,L=Et(t._offset+(s?s._offset:0)+E+O,12);let I=t._head,X,te,re,Xe,Ze=0;for(;I;){const ze=I._composition,G=I._currentTime,se=I._changeDuration,ne=I._absoluteStartTime+I._changeDuration,ce=I._nextRep,Re=I._prevRep,_e=ze!==mn.none,Ae=Re?Re._absoluteStartTime+Re._changeDuration:0,Se=Re&&Re.parent!==I.parent,Ge=!ce||ce._isOverridden?ne:ce.parent===I.parent?ne+ce._delay:ce._absoluteStartTime<ce._absoluteUpdateStartTime?ce._absoluteStartTime:ce._absoluteUpdateStartTime;if((H||(G!==se||L<=Ge||Re&&!Se&&(!ce||ce.parent!==I.parent))&&(G!==0||L>=I._absoluteStartTime||Se&&!I._hasFromValue&&!Re._isOverridden&&L>=Ae||ce&&!ce._isOverridden&&ce.parent===I.parent&&ce._currentTime!==0&&O<ce._startTime))&&(!Re||Se||O>=I._startTime)&&(!_e||!I._isOverridden&&(!I._isOverlapped||L<=ne)&&(!ce||ce._isOverridden||L<=Ge)&&(!Re||Re._isOverridden||(Se?L>=I._absoluteStartTime||!I._hasFromValue&&L>=Ae:L>=Ae+I._delay)))){const Ve=I._currentTime=fi(O-I._startTime,0,se),Ce=I._ease(Ve/I._updateDuration),qe=I._modifier,nt=I._valueType,Je=I._tweenType,Ue=Je===Rt.OBJECT,Fe=nt===ct.NUMBER,Ye=Fe&&Ue||Ce===0||Ce===1?-1:Zt.precision;let F,$e;if(Fe)F=$e=qe(Et(uc(I._fromNumber,I._toNumber,Ce),Ye));else if(nt===ct.UNIT)$e=qe(Et(uc(I._fromNumber,I._toNumber,Ce),Ye)),F=`${$e}${I._unit}`;else if(nt===ct.COLOR){const Te=I._numbers,R=I._fromNumbers,_=I._toNumbers,U=1-Ce,V=R[0],K=R[1],oe=R[2],le=_[0],Z=_[1],J=_[2];Te[0]=qe(Math.sqrt(V*V*U+le*le*Ce)),Te[1]=qe(Math.sqrt(K*K*U+Z*Z*Ce)),Te[2]=qe(Math.sqrt(oe*oe*U+J*J*Ce)),Te[3]=qe(uc(R[3],_[3],Ce)),(!I._setter||i)&&(F=`rgba(${Et(Te[0],0)},${Et(Te[1],0)},${Et(Te[2],0)},${Te[3]})`)}else nt===ct.COMPLEX&&(F=Ty(I,Ce,Ye));if(_e&&(I._number=$e),!i&&ze!==mn.blend){const Te=I.property;X=I.target,I._setter?I._setter(X,$e,I):Ue?X[Te]=F:Je===Rt.ATTRIBUTE?X.setAttribute(Te,F):(te=X.style,Je===Rt.TRANSFORM?(X!==re&&(re=X,Xe=X[xu]),Xe[Te]=F,Ze=1):Je===Rt.CSS?te[Te]=F:Je===Rt.CSS_VAR&&te.setProperty(Te,F)),b&&(k=1)}else I._value=F}else G&&Re&&!Se&&O<I._startTime&&(I._currentTime=0);Ze&&I._renderTransforms&&(te.transform=My(Xe),Ze=0),I=I._next}!n&&k&&t.onRender(t)}!n&&b&&t.onUpdate(t)}return s&&y?!n&&(s.began&&!q&&v>0&&!a||q&&v<=yt&&a)&&(t.onComplete(t),t.completed=!q):b&&A?c===1/0?t._startTime+=t.duration:t._currentIteration>=c-1&&(t.paused=!0,!a&&!g&&(t.completed=!0,!n&&!(s&&(q||!s.began))&&(t.onComplete(t),t._resolve(t)))):t.completed=!1,k},Hs=(t,e,n,i,r)=>{const s=t._currentIteration;if(fc(t,e,n,i,r),t._hasChildren){const o=t,a=o.backwards,l=i?e:o._iterationTime,c=To();let h=0,p=!0;if(!i&&o._currentIteration!==s){const d=o.iterationDuration;Ht(o,m=>{if(!a)!m.completed&&!m.backwards&&m._currentTime<m.iterationDuration&&fc(m,d,n,1,Kn.FORCE),m.began=!1,m.completed=!1;else{const g=m.duration,E=m._offset+m._delay,x=E+g;!n&&g<=yt&&(!E||x===d)&&m.onComplete(m)}}),n||o.onLoop(o)}Ht(o,d=>{const m=Et((l-d._offset)*d._speed,12);if(a&&m>d._delay+d.duration)return;const g=d._fps<o._fps?d.requestTick(c):r;h+=fc(d,m,n,i,g),!d.completed&&p&&(p=!1)},a),!n&&h&&o.onRender(o),(p||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,n||(o.onComplete(o),o._resolve(o))))}};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Lg={},nE=(t,e,n)=>{if(n===Rt.TRANSFORM){const i=py.get(t);return i||t}else if(n===Rt.CSS||n===Rt.ATTRIBUTE&&vy(e)&&t in e.style){const i=Lg[t];if(i)return i;{const r=t&&xy(t);return Lg[t]=r,r}}else return t},wy=(t,e=!1)=>{if(t._hasChildren)Ht(t,n=>wy(n,e),!0);else{const n=t;n.pause(),Ht(n,i=>{const r=i.property,s=i.target,o=i._tweenType,a=i._inlineValue,l=co(a)||a===hs;if(i._setter){if(!e&&!l){if(jn(a,ui),ui.d){const c=ui.d,h=i._numbers;for(let p=0,d=c.length;p<d;p++)h[p]=c[p]}else i._number=ui.n;i._setter(i.target,i._number,i)}}else if(o===Rt.OBJECT)!e&&!l&&(s[r]=a);else if(s[Eo])if(o===Rt.ATTRIBUTE)e||(l?s.removeAttribute(r):s.setAttribute(r,a));else{const c=s.style;if(o===Rt.TRANSFORM){const h=s[xu];l?delete h[r]:h[r]=a,i._renderTransforms&&(Object.keys(h).length?c.transform=My(h):c.removeProperty("transform"))}else l?c.removeProperty(xy(r)):c[r]=a}s[Eo]&&n._tail===i&&n.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===hs&&c.removeAttribute("style")})})}return t};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */let Ay=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=bo/zf,this._fps=zf,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const n=+e,i=n<yt?yt:n,r=bo/i;i>jc.frameRate&&(jc.frameRate=i),this._fps=i,this._frameDuration=r}get speed(){return this._speed}set speed(e){const n=+e;this._speed=n<yt?yt:n}requestTick(e){const n=this._frameDuration,i=e-this._lastTickTime,r=n*.25,s=r<4?r:4;return i+s<n?Kn.NONE:(this._lastTickTime=i>=n?e-i%n:e,Kn.AUTO)}computeDeltaTime(e){const n=e-this._lastTime;return this.deltaTime=n,this._lastTime=e,n}};/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const uo={animation:null,update:Xn},iE=t=>{let e=uo.animation;return e||(e={duration:yt,computeDeltaTime:Xn,_offset:0,_delay:0,_head:null,_tail:null},uo.animation=e,uo.update=()=>{t.forEach(n=>{for(let i in n){const r=n[i],s=r._head;if(s){const o=s._valueType,a=o===ct.COMPLEX||o===ct.COLOR?ln(s._fromNumbers):null;let l=s._fromNumber,c=r._tail;for(;c&&c!==s;){if(a)for(let h=0,p=c._numbers.length;h<p;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}s._toNumber=l,s._toNumbers=a}}}),fc(e,1,1,0,Kn.FORCE)}),e};/**
 * Anime.js - engine - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Cy=Wr?requestAnimationFrame:setImmediate,rE=Wr?cancelAnimationFrame:clearImmediate;class sE extends Ay{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=jc,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=To();if(this.requestTick(e)){this.computeDeltaTime(e);const n=this._speed,i=this._fps;let r=this._head;for(;r;){const s=r._next;r.paused?(sa(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):Hs(r,(e-r._startTime)*r._speed*n,0,0,r._fps<i?r.requestTick(e):Kn.AUTO),r=s}uo.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(To()),this.reqId=Cy(Ry)),this}pause(){if(this.reqId)return this.paused=!0,oE()}resume(){if(this.paused)return this.paused=!1,Ht(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Zt.timeScale===1?1:bo)}set speed(e){const n=e*Zt.timeScale;this._speed!==n&&(this._speed=n,Ht(this,i=>i.speed=i._speed))}get timeUnit(){return Zt.timeScale===1?"ms":"s"}set timeUnit(e){const i=e==="s",r=i?.001:1;if(Zt.timeScale!==r){Zt.timeScale=r,Zt.tickThreshold=200*r;const s=i?.001:bo;this.defaults.duration*=s,this._speed*=s}}get precision(){return Zt.precision}set precision(e){Zt.precision=e}}const cn=(()=>{const t=new sE(To());return Wr&&(gy.engine=t,Ba.addEventListener("visibilitychange",()=>{t.pauseOnDocumentHidden&&(Ba.hidden?t.pause():t.resume())})),t})(),Ry=()=>{cn._head?(cn.reqId=Cy(Ry),cn.update()):cn.reqId=0},oE=()=>(rE(cn.reqId),cn.reqId=0,cn);/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Xc={_rep:new WeakMap,_add:new Map},zp=(t,e,n="_rep")=>{const i=Xc[n];let r=i.get(t);return r||(r={},i.set(t,r)),r[e]?r[e]:r[e]={_head:null,_tail:null}},aE=(t,e)=>t._isOverridden||t._absoluteStartTime>e._absoluteStartTime,hc=t=>{t._isOverlapped=1,t._isOverridden=1,t._changeDuration=yt,t._currentTime=yt},Py=(t,e)=>{const n=t._composition;if(n===mn.replace){const i=t._absoluteStartTime;no(e,t,aE,"_prevRep","_nextRep");const r=t._prevRep;if(r){const s=r.parent,o=r._absoluteEndTime;if(t.parent.id!==s.id&&s.iterationCount>1&&o+(s.duration-s.iterationDuration)>i){hc(r);let c=r._prevRep;for(;c&&c.parent.id===s.id;)hc(c),c=c._prevRep}const a=t._absoluteUpdateStartTime;if(o>a){const c=r._startTime,h=o-(c+r._updateDuration),p=Et(a-h-c,12);r._changeDuration=p,r._currentTime=p,r._isOverlapped=1,p<yt&&hc(r)}const l=t.parent.parent;if(!l||l!==s.parent){let c=!0;if(Ht(s,h=>{h._isOverlapped||(c=!1)}),c){const h=s.parent;if(h){let p=!0;Ht(h,d=>{d!==s&&Ht(d,m=>{m._isOverlapped||(p=!1)})}),p&&h.cancel()}else s.cancel()}}}}else if(n===mn.blend){const i=zp(t.target,t.property,"_add"),r=iE(Xc._add);let s=i._head;s||(s={...t},s._composition=mn.replace,s._updateDuration=yt,s._startTime=0,s._numbers=ln(t._fromNumbers),s._number=0,s._next=null,s._prev=null,no(i,s),no(r,s));const o=t._toNumber;if(t._fromNumber=s._fromNumber-o,t._toNumber=0,t._numbers=ln(t._fromNumbers),t._number=0,s._fromNumber=o,t._toNumbers.length){const a=ln(t._toNumbers);a.forEach((l,c)=>{t._fromNumbers[c]=s._fromNumbers[c]-l,t._toNumbers[c]=0}),s._fromNumbers=a}no(i,t,null,"_prevAdd","_nextAdd")}return t},lE=t=>{const e=t._composition;if(e!==mn.none){const n=t.target,i=t.property,o=Xc._rep.get(n)[i];if(sa(o,t,"_prevRep","_nextRep"),e===mn.blend){const a=Xc._add,l=a.get(n);if(!l)return;const c=l[i],h=uo.animation;sa(c,t,"_prevAdd","_nextAdd");const p=c._head;if(p&&p===c._tail){sa(c,p,"_prevAdd","_nextAdd"),sa(h,p);let d=!0;for(let m in l)if(l[m]._head){d=!1;break}d&&a.delete(n)}}}return t};/**
 * Anime.js - timer - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Ng=t=>(t.paused=!0,t.began=!1,t.completed=!1,t),Hf=t=>(t._cancelled&&(t._hasChildren?Ht(t,Hf):Ht(t,e=>{e._composition!==mn.none&&Py(e,zp(e.target,e.property))}),t._cancelled=0),t);let Ug=0;const cE=(t,e)=>t._priority>e._priority;class uE extends Ay{constructor(e={},n=null,i=0){super(0),++Ug;const{id:r,delay:s,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:p,frameRate:d,playbackRate:m,priority:g,onComplete:E,onLoop:x,onPause:f,onBegin:v,onBeforeUpdate:M,onUpdate:S}=e,T=n?0:cn._lastTickTime,b=n?n.defaults:Zt.defaults,A=ms(s)||ft(s)?b.delay:+s,y=ms(o)||ft(o)?1/0:+o,C=Qt(c,b.loop),P=Qt(h,b.loopDelay);let D=C===!0||C===1/0||C<0?1/0:C+1,k=0;n?k=i:(cn.reqId||cn.requestTick(To()),k=(cn._lastTickTime-cn._startTime)*Zt.timeScale),this.id=ft(r)?Ug:r,this.parent=n,this.duration=Op((y+P)*D-P)||yt,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=v||b.onBegin,this.onBeforeUpdate=M||b.onBeforeUpdate,this.onUpdate=S||b.onUpdate,this.onLoop=x||b.onLoop,this.onPause=f||b.onPause,this.onComplete=E||b.onComplete,this.iterationDuration=y,this.iterationCount=D,this._autoplay=n?!1:Qt(p,b.autoplay),this._offset=k,this._delay=A,this._loopDelay=P,this._iterationTime=0,this._currentIteration=0,this._resolve=Xn,this._running=!1,this._reversed=+Qt(a,b.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Qt(l,b.alternate),this._prev=null,this._next=null,this._lastTickTime=T,this._startTime=T,this._lastTime=T,this._fps=Qt(d,b.frameRate),this._speed=Qt(m,b.playbackRate),this._priority=+Qt(g,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return fi(Et(this._currentTime,Zt.precision),-this._delay,this.duration)}set currentTime(e){const n=this.paused;this.pause().seek(+e),n||this.resume()}get iterationCurrentTime(){return fi(Et(this._iterationTime,Zt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return fi(Et(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return fi(Et(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const n=this.iterationDuration;this.currentTime=n*this._currentIteration+n*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*fi(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return Hf(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Hs(this,0,1,~~e,Kn.FORCE),Ng(this),this._hasChildren&&Ht(this,Ng),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Hs(this,this.duration,1,~~e,Kn.FORCE),this.reset(e);const n=this._autoplay;return n===!0?this.resume():n&&!ft(n.linked)&&n.link(this),this}resetTime(){const e=1/(this._speed*cn._speed);return this._startTime=To()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=yt&&!this._hasChildren?Hs(this,yt,0,0,Kn.FORCE):(this._running||(no(cn,this,cE),cn._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,cn.wake()),this):this}restart(){return this.reset().resume()}seek(e,n=0,i=0){Hf(this),this.completed=!1;const r=this.paused;return this.paused=!0,Hs(this,e+this._delay,~~n,~~i,Kn.AUTO),r?this:this.resume()}alternate(){const e=this._reversed,n=this.iterationCount,i=this.iterationDuration,r=n===1/0?ra(Bf/i):n;return this._reversed=+(this._alternate&&!(r%2)?e:!e),n===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Ht(this,e=>e.cancel(),!0):Ht(this,lE),this._cancelled=1,this.pause()}stretch(e){const n=this.duration,i=va(e);if(n===i)return this;const r=e/n,s=e<=yt;return this.duration=s?yt:i,this.iterationDuration=s?yt:va(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){Hs(this,0,1,0,Kn.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=Xn){const n=this.then,i=()=>{this.then=null,e(this),this.then=n,this._resolve=Xn};return new Promise(r=>(this._resolve=()=>r(i()),this.completed&&this._resolve(),this))}}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */function kg(t){const e=ps(t)?GM.root.querySelectorAll(t):t;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function dE(t){if(co(t))return[];if(!Wr)return Qi(t)&&t.flat(1/0)||[t];if(Qi(t)){const n=t.flat(1/0),i=[];for(let r=0,s=n.length;r<s;r++){const o=n[r];if(!co(o)){const a=kg(o);if(a)for(let l=0,c=a.length;l<c;l++){const h=a[l];if(!co(h)){let p=!1;for(let d=0,m=i.length;d<m;d++)if(i[d]===h){p=!0;break}p||i.push(h)}}else{let l=!1;for(let c=0,h=i.length;c<h;c++)if(i[c]===o){l=!0;break}l||i.push(o)}}}return i}const e=kg(t);return e?Array.from(e):[t]}function Dy(t){const e=dE(t),n=e.length;for(let i=0;i<n;i++){const r=e[i];if(!r[Cg]){r[Cg]=!0;const s=vy(r);(r.nodeType||s)&&(r[Eo]=!0,r[hy]=s,r[xu]={})}}return e}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const rd={deg:1,rad:180/kp,turn:360},Og={},Bg=(t,e,n,i=!1)=>{const r=e.u,s=e.n;if(e.t===ct.UNIT&&r===n)return e;const o=s+r+n,a=Og[o];if(!ft(a)&&!i)e.n=a;else{let l;if(r in rd)l=s*rd[r]/rd[n];else{const h=t.cloneNode(),p=t.parentNode,d=p&&p!==Ba?p:Ba.body;d.appendChild(h);const m=h.style;m.width=100+r;const g=h.offsetWidth||100;m.width=100+n;const E=h.offsetWidth||100,x=g/E;d.removeChild(h),l=x*s}e.n=l,Og[o]=l}return e.t,ct.UNIT,e.u=n,e};/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Or=t=>t;/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const jo=(t=1.68)=>e=>zs(e,+t),Gf={in:t=>e=>t(e),out:t=>e=>1-t(1-e),inOut:t=>e=>e<.5?t(e*2)/2:1-t(e*-2+2)/2,outIn:t=>e=>e<.5?(1-t(1-e*2))/2:(t(e*2-1)+1)/2},fE=kp/2,zg=kp*2,Vg={[hs]:jo,Quad:jo(2),Cubic:jo(3),Quart:jo(4),Quint:jo(5),Sine:t=>1-YM(t*fE),Circ:t=>1-Vf(1-t*t),Expo:t=>t?zs(2,10*t-10):0,Bounce:t=>{let e,n=4;for(;t<((e=zs(2,--n))-1)/11;);return 1/zs(4,3-n)-7.5625*zs((e*3-2)/22-t,2)},Back:(t=1.7)=>e=>(+t+1)*e*e*e-+t*e*e,Elastic:(t=1,e=.3)=>{const n=fi(+t,1,10),i=fi(+e,yt,2),r=i/zg*$M(1/n),s=zg/i;return o=>o===0||o===1?o:-n*zs(2,-10*(1-o))*qM((1-o-r)*s)}},sd=(()=>{const t={linear:Or,none:Or};for(let e in Gf)for(let n in Vg){const i=Vg[n],r=Gf[e];t[e+n]=n===hs||n==="Back"||n==="Elastic"?(s,o)=>r(i(s,o)):r(i)}return t})(),Sl={linear:Or,none:Or},hE=t=>{if(Sl[t])return Sl[t];if(t.indexOf("(")<=-1){const n=Gf[t]||t.includes("Back")||t.includes("Elastic")?sd[t]():sd[t];return n?Sl[t]=n:Or}else{const e=t.slice(0,-1).split("("),n=sd[e[0]];return n?Sl[t]=n(...e[1].split(",")):Or}},Hg=["steps(","irregular(","linear(","cubicBezier("],Wf=t=>{if(ps(t)){for(let n=0,i=Hg.length;n<i;n++)if(Zi(t,Hg[n]))return console.warn(`String syntax for \`ease: "${t}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${t}\``),Or}return ms(t)?t:ps(t)?hE(t):Or};/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Ke=Bp(),it=Bp(),bs={},Ml={func:null},El={func:null},bl=[null],Ts=[null,null],Tl={to:null};let pE=0,Gg=0,fr,_i;const mE=(t,e)=>{const n={};if(Qi(t)){const i=[].concat(...t.map(r=>Object.keys(r))).filter(cc);for(let r=0,s=i.length;r<s;r++){const o=i[r],a=t.map(l=>{const c={};for(let h in l){const p=l[h];cc(h)?h===o&&(c.to=p):c[h]=p}return c});n[o]=a}}else{const i=Qt(e.duration,Zt.defaults.duration);Object.keys(t).map(s=>({o:parseFloat(s)/100,p:t[s]})).sort((s,o)=>s.o-o.o).forEach(s=>{const o=s.o,a=s.p;for(let l in a)if(cc(l)){let c=n[l];c||(c=n[l]=[]);const h=o*i;let p=c.length,d=c[p-1];const m={to:a[l]};let g=0;for(let E=0;E<p;E++)g+=c[E].duration;p===1&&(m.from=d.to),a.ease&&(m.ease=a.ease),m.duration=h-(p?g:0),c.push(m)}return s});for(let s in n){const o=n[s];let a;for(let l=0,c=o.length;l<c;l++){const h=o[l],p=h.ease;h.ease=a||void 0,a=p}o[0].duration||o.shift()}}return n};class gE extends uE{constructor(e,n,i,r,s=!1,o=0,a){super(n,i,r),this._head,this._tail,++Gg;const l=Dy(e),c=l.length,h=n.keyframes,p=h?KM(mE(h,n),n):n,{id:d,delay:m,duration:g,ease:E,playbackEase:x,modifier:f,composition:v,onRender:M}=p,S=i?i.defaults:Zt.defaults,T=Qt(E,S.ease),b=Qt(x,S.playbackEase),A=b?Wf(b):null,y=!ft(T.ease),C=y?T.ease:Qt(E,A?"linear":S.ease),P=y?T.settlingDuration:Qt(g,S.duration),D=Qt(m,S.delay),k=f||S.modifier,$=ft(v)&&c>=bo?mn.none:ft(v)?S.composition:v,Q=this._offset+(i?i._offset:0);y&&(T.parent=this);let O=NaN,q=NaN,H=0,L=0;for(let I=0;I<c;I++){const X=l[I],te=o||I,re=a||l;let Xe=NaN,Ze=NaN;for(let ze in p)if(cc(ze)){const G=by(X,ze),se=Ey(X,ze),ne=nE(ze,X,G);let ce=p[ze];const Re=Qi(ce);if(s&&!Re&&(Ts[0]=ce,Ts[1]=ce,ce=Ts),Re){const Ce=ce.length,qe=!ed(ce[0]);Ce===2&&qe?(Tl.to=ce,bl[0]=Tl,fr=bl):Ce>2&&qe?(fr=[],ce.forEach((nt,Je)=>{Je?Je===1?(Ts[1]=nt,fr.push(Ts)):fr.push(nt):Ts[0]=nt})):fr=ce}else bl[0]=ce,fr=bl;let _e=null,Ae=null,Se=NaN,Ge=0,Ve=0;for(let Ce=fr.length;Ve<Ce;Ve++){const qe=fr[Ve];ed(qe)?_i=qe:(Tl.to=qe,_i=Tl),Ml.func=null,El.func=null;const nt=Ui(Qt(_i.composition,$),X,te,re,null,null),Je=Gi(nt)?nt:mn[nt];!_e&&Je!==mn.none&&(_e=zp(X,ne));const Ue=_e?_e._tail:null,Fe=i&&Ue&&Ue.parent.parent===i?Ue:Ae,Ye=Ui(_i.to,X,te,re,Ml,Fe);let F;ed(Ye)&&!ft(Ye.to)?(_i=Ye,F=Ye.to):F=Ye;const $e=Ui(_i.from,X,te,re,El,Fe),Te=_i.ease||C,R=Ui(Te,X,te,re,null,Fe),_=ms(R)||ps(R)?R:Te,U=!ft(_)&&!ft(_.ease),V=U?_.ease:_,K=U?_.settlingDuration:Ui(Qt(_i.duration,Ce>1?Ui(P,X,te,re,null,Fe)/Ce:P),X,te,re,null,Fe),oe=Ui(Qt(_i.delay,Ve?0:D),X,te,re,null,Fe),le=_i.modifier||k,Z=!ft($e),J=!ft(F),ue=Qi(F),Ie=ue||Z&&J,pe=Ae?Ge:0,he=Ae?Ge+oe:oe,Le=Et(Q+he,12),He=Et(Q+pe,12);!L&&(Z||ue)&&(L=1);let Be=Ae;if(Je!==mn.none){let ke=_e._head;for(;ke&&ke._absoluteStartTime<=Le;)if(ke._isOverridden||(Be=ke),ke=ke._nextRep,ke&&ke._absoluteStartTime>=Le)for(;ke;)hc(ke),ke=ke._nextRep}if(Ie){jn(ue?Ui(F[0],X,te,re,El,Fe):$e,Ke),jn(ue?Ui(F[1],X,te,re,Ml,Fe):F,it);const ke=Vs(X,ne,G,bs);Ke.t===ct.NUMBER&&(Be?Be._valueType===ct.UNIT&&(Ke.t=ct.UNIT,Ke.u=Be._unit):(jn(ke,ui),ui.t===ct.UNIT&&(Ke.t=ct.UNIT,Ke.u=ui.u)))}else J?jn(F,it):Ae?Ig(Ae,it):jn(i&&Be&&Be.parent.parent===i?Be._value:Vs(X,ne,G,bs),it),Z?jn($e,Ke):Ae?Ig(Ae,Ke):jn(i&&Be&&Be.parent.parent===i?Be._value:Vs(X,ne,G,bs),Ke);if(Ke.o&&(Ke.n=dc(Be?Be._toNumber:jn(Vs(X,ne,G,bs),ui).n,Ke.n,Ke.o)),it.o&&(it.n=dc(Ke.n,it.n,it.o)),Ke.t!==it.t){if(Ke.t===ct.COMPLEX||it.t===ct.COMPLEX){const ke=Ke.t===ct.COMPLEX?Ke:it,et=Ke.t===ct.COMPLEX?it:Ke;et.t=ct.COMPLEX,et.s=ln(ke.s),et.d=ke.d.map(()=>et.n)}else if(Ke.t===ct.UNIT||it.t===ct.UNIT){const ke=Ke.t===ct.UNIT?Ke:it,et=Ke.t===ct.UNIT?it:Ke;et.t=ct.UNIT,et.u=ke.u}else if(Ke.t===ct.COLOR||it.t===ct.COLOR){const ke=Ke.t===ct.COLOR?Ke:it,et=Ke.t===ct.COLOR?it:Ke;et.t=ct.COLOR,et.d=ke.d.map(()=>0)}}if(Ke.u!==it.u){let ke=it.u?Ke:it;ke=Bg(X,ke,it.u?it.u:Ke.u,!1)}if(it.d&&Ke.d&&it.d.length!==Ke.d.length){const ke=Ke.d.length>it.d.length?Ke:it,et=ke===Ke?it:Ke;et.d=ke.d.map((ni,Rn)=>ft(et.d[Rn])?0:et.d[Rn]),et.s=ln(ke.s)}const N=Et(+K||yt,12);let de=bs[ne];co(de)||(bs[ne]=null);const ee=se?se.set:null;Ge=Et(he+N,12);const fe=Ke.d,me=it.d,ie=it.s,ye={parent:this,id:pE++,property:ne,target:X,_value:null,_toFunc:Ml.func,_fromFunc:El.func,_ease:Wf(V),_fromNumbers:fe?ln(fe):yl,_toNumbers:me?ln(me):yl,_strings:ie?ln(ie):yl,_fromNumber:Ke.n,_toNumber:it.n,_numbers:fe?ln(fe):yl,_number:Ke.n,_unit:it.u,_modifier:le,_currentTime:0,_startTime:he,_delay:+oe,_updateDuration:N,_changeDuration:N,_absoluteStartTime:Le,_absoluteUpdateStartTime:He,_absoluteEndTime:Et(Q+Ge,12),_hasFromValue:Z||ue?1:0,_tweenType:G,_setter:ee,_valueType:it.t,_composition:Je,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:de,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};Je!==mn.none&&Py(ye,_e);const we=ye._valueType;if(we===ct.COMPLEX)ye._value=Ty(ye,1,-1);else if(we===ct.UNIT)ye._value=`${le(ye._toNumber)}${ye._unit}`;else if(we===ct.COLOR){const ke=it.d;ye._value=`rgba(${Et(ke[0],0)},${Et(ke[1],0)},${Et(ke[2],0)},${ke[3]})`}else ye._value=le(ye._toNumber);isNaN(Se)&&(Se=ye._startTime),Ae=ye,H++,no(this,ye)}(isNaN(q)||Se<q)&&(q=Se),(isNaN(O)||Ge>O)&&(O=Ge),G===Rt.TRANSFORM&&(Xe=H-Ve,Ze=H)}if(!isNaN(Xe)){let ze=0;Ht(this,G=>{ze>=Xe&&ze<Ze&&(G._renderTransforms=1,G._composition===mn.blend&&Ht(uo.animation,se=>{se.id===G.id&&(se._renderTransforms=1)})),ze++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),q?(Ht(this,I=>{I._startTime-I._delay||(I._delay-=q),I._startTime-=q}),O-=q):q=0,O||(O=yt,this.iterationCount=0),this.targets=l,this.id=ft(d)?Gg:d,this.duration=O===yt?yt:Op((O+this._loopDelay)*this.iterationCount-this._loopDelay)||yt,this.onRender=M||S.onRender,this._ease=A,this._delay=q,this.iterationDuration=O,!this._autoplay&&L&&this.onRender(this)}stretch(e){const n=this.duration;if(n===va(e))return this;const i=e/n;return Ht(this,r=>{r._updateDuration=va(r._updateDuration*i),r._changeDuration=va(r._changeDuration*i),r._currentTime*=i,r._delay*=i,r._startTime*=i,r._absoluteStartTime*=i,r._absoluteUpdateStartTime*=i,r._absoluteEndTime*=i}),super.stretch(e)}refresh(){return Ht(this,e=>{const n=e._toFunc,i=e._fromFunc;(n||i)&&(i?(jn(i(),Ke),Ke.u!==e._unit&&e.target[Eo]&&Bg(e.target,Ke,e._unit,!0),e._fromNumbers=ln(Ke.d),e._fromNumber=Ke.n):n&&(jn(Vs(e.target,e.property,e._tweenType),ui),e._fromNumbers=ln(ui.d),e._fromNumber=ui.n),n&&(jn(n(),it),e._toNumbers=ln(it.d),e._strings=ln(it.s),e._toNumber=it.o?dc(e._fromNumber,it.n,it.o):it.n))}),this.duration===yt&&this.restart(),this}revert(){return super.revert(),wy(this)}then(e){return super.then(e)}}const jf=(t,e)=>new gE(t,e,null,0,!1).init();/**
 * Anime.js - timeline - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const xE=(t,e)=>{if(Zi(e,"<")){const n=e[1]==="<",i=t._tail,r=i?i._offset+i._delay:0;return n?r:r+i.duration}},vE=(t,e)=>{let n=t.iterationDuration;if(n===yt&&(n=0),ft(e))return n;if(Gi(+e))return+e;const i=e,r=t?t.labels:null,s=!co(r),o=xE(t,i),a=!ft(o),l=VM.exec(i);if(l){const c=l[0],h=i.split(c),p=s&&h[0]?r[h[0]]:n,d=a?o:s?p:n,m=+h[1];return dc(d,m,c[0])}else return a?o:s?ft(r[i])?n:r[i]:n};/**
 * Anime.js - utils - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Fy=(t=0,e=1,n=0)=>{const i=10**n;return Math.floor((Math.random()*(e-t+1/i)+t)*i)/i};let yE=0;const _E=(t,e=0,n=1,i=0)=>{let r=t===void 0?yE++:t;return(s=e,o=n,a=i)=>{r+=1831565813,r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61);const l=10**a;return Math.floor((((r^r>>>14)>>>0)/4294967296*(o-s+1/l)+s)*l)/l}},SE=(t,e=Fy)=>{let n=t.length,i,r;for(;n;)r=e(0,--n),i=t[n],t[n]=t[r],t[r]=i;return t};/**
 * Anime.js - utils - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const ME=(t,e={})=>{let n=[],i=0,r,s=null;const o=e.from,a=e.reversed,l=e.ease,c=!ft(l),p=c&&!ft(l.ease)?l.ease:c?Wf(l):null,d=e.grid,m=d===!0,g=e.axis,E=e.total,x=ft(o)||o===0||o==="first",f=o==="center",v=o==="last",M=o==="random",S=Qi(o),T=Qi(t),b=e.use,A=td(T?t[0]:t),y=T?td(t[1]):0,C=my.exec((T?t[1]:t)+hs),P=e.start||0+(T?A:0),D=e.seed,$=!ft(D)&&D!==!1?_E(D===!0?0:D):Fy,Q=e.jitter,O=!ft(Q),q=Qi(Q),H=q?Q[0]:Q||0,L=q?Q[1]:Q||0;let I=x?0:Gi(o)?o:0;return(X,te,re,Xe,Ze)=>{const[ze]=Dy(X),G=ft(E)?re.length:E,se=ft(b)?!1:ms(b)?b(ze,te,G):Vs(ze,b),ne=Gi(se)||ps(se)&&Gi(+se)?+se:te,ce=ne>=0&&ne<G?ne:te;if(f&&(I=(G-1)/2),v&&(I=G-1),!n.length){if(m){let Ae=!0,Se=!1,Ge=1/0,Ve=1/0,Ce=1/0,qe=-1/0,nt=-1/0,Je=-1/0;const Ue=[],Fe=[],Ye=[];for(let F=0;F<G;F++){const $e=re[F];let Te=0,R=0,_=0,U=!1;if($e&&ms($e.getBoundingClientRect)){const V=$e.getBoundingClientRect();Te=V.left+V.width/2,R=V.top+V.height/2,U=!0}else{const V=$e;V&&Gi(V.x)&&Gi(V.y)&&(Te=V.x,R=V.y,Gi(V.z)&&(_=V.z,Se=!0),U=!0)}if(!U){Ae=!1;break}Ue.push(Te),Fe.push(R),Ye.push(_),Te<Ge&&(Ge=Te),R<Ve&&(Ve=R),_<Ce&&(Ce=_),Te>qe&&(qe=Te),R>nt&&(nt=R),_>Je&&(Je=_)}if(Ae){let F=Ue[0],$e=Fe[0],Te=Ye[0];S?(F=Ge+o[0]*(qe-Ge),$e=Ve+o[1]*(nt-Ve),Te=Se?Ce+(o.length>=3?o[2]:.5)*(Je-Ce):0):f?(F=(Ge+qe)/2,$e=(Ve+nt)/2,Te=(Ce+Je)/2):v?(F=Ue[G-1],$e=Fe[G-1],Te=Ye[G-1]):Gi(o)&&(F=Ue[o],$e=Fe[o],Te=Ye[o]);for(let _=0;_<G;_++){const U=F-Ue[_],V=$e-Fe[_],K=Te-Ye[_];let oe=Vf(U*U+V*V+(Se?K*K:0));g==="x"&&(oe=-U),g==="y"&&(oe=-V),g==="z"&&(oe=-K),n.push(oe)}let R=1/0;for(let _=0;_<G;_++){const U=_l(n[_]);U>0&&U<R&&(R=U)}if(R>0&&R<1/0)for(let _=0;_<G;_++)n[_]=n[_]/R}else for(let F=0;F<G;F++)n.push(_l(I-F))}else for(let Ae=0;Ae<G;Ae++)if(!d)n.push(_l(I-Ae));else{const Se=d.length,Ge=d[0]*d[1];let Ve,Ce,qe;S?(Ve=o[0]*(d[0]-1),Ce=o[1]*(d[1]-1),qe=Se===3?(o.length>=3?o[2]:.5)*(d[2]-1):0):f?(Ve=(d[0]-1)/2,Ce=(d[1]-1)/2,qe=Se===3?(d[2]-1)/2:0):(Ve=I%d[0],Ce=ra(I/d[0])%d[1],qe=Se===3?ra(I/Ge):0);const nt=Ae%d[0],Je=ra(Ae/d[0])%d[1],Ue=Se===3?ra(Ae/Ge):0,Fe=Ve-nt,Ye=Ce-Je,F=qe-Ue;let $e=Vf(Fe*Fe+Ye*Ye+(Se===3?F*F:0));g==="x"&&($e=-Fe),g==="y"&&($e=-Ye),g==="z"&&($e=-F),n.push($e)}i=n[0];for(let Ae=1;Ae<G;Ae++)n[Ae]>i&&(i=n[Ae]);if(p||a)for(let Ae=0;Ae<G;Ae++){let Se=n[Ae];p&&(Se=p(Se/i)*i),a&&(Se=g?-Se:_l(i-Se)),n[Ae]=Se}if(O){s=new Array(G);for(let Ae=0;Ae<G;Ae++)s[Ae]=$(-1,1,4)}M&&(n=SE(n,$))}const Re=T?(y-A)/i:A;ft(r)&&(r=Ze?vE(Ze,ft(e.start)?Ze.iterationDuration:P):P);let _e=r+(Re*Et(n[ce],2)||0);if(O){const Ae=i?n[ce]/i:0,Se=H+(L-H)*Ae;_e=_e+s[ce]*Se}return e.modifier&&(_e=e.modifier(_e)),C&&(_e=`${_e}${C[2]}`),_e}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="185",EE=0,Wg=1,bE=2,pc=1,TE=2,oa=3,Br=0,An=1,wi=2,Ji=0,fo=1,Xf=2,jg=3,Xg=4,wE=5,Jr=100,AE=101,CE=102,RE=103,PE=104,DE=200,FE=201,IE=202,LE=203,qf=204,Yf=205,NE=206,UE=207,kE=208,OE=209,BE=210,zE=211,VE=212,HE=213,GE=214,$f=0,Kf=1,Zf=2,wo=3,Qf=4,Jf=5,eh=6,th=7,Iy=0,WE=1,jE=2,Di=0,Ly=1,Ny=2,Uy=3,ky=4,Oy=5,By=6,zy=7,Vy=300,gs=301,Ao=302,od=303,ad=304,vu=306,nh=1e3,$i=1001,ih=1002,Jt=1003,XE=1004,wl=1005,dn=1006,ld=1007,rs=1008,Un=1009,Hy=1010,Gy=1011,za=1012,Hp=1013,Ii=1014,Ai=1015,sr=1016,Gp=1017,Wp=1018,Va=1020,Wy=35902,jy=35899,Xy=1021,qy=1022,pi=1023,or=1026,ss=1027,Yy=1028,jp=1029,xs=1030,Xp=1031,qp=1033,mc=33776,gc=33777,xc=33778,vc=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,dh=37488,fh=37489,qc=37490,hh=37491,ph=37808,mh=37809,gh=37810,xh=37811,vh=37812,yh=37813,_h=37814,Sh=37815,Mh=37816,Eh=37817,bh=37818,Th=37819,wh=37820,Ah=37821,Ch=36492,Rh=36494,Ph=36495,Dh=36283,Fh=36284,Yc=36285,Ih=36286,qE=3200,Lh=0,YE=1,Er="",qn="srgb",$c="srgb-linear",Kc="linear",gt="srgb",ws=7680,qg=519,$E=512,KE=513,ZE=514,Yp=515,QE=516,JE=517,$p=518,eb=519,Yg=35044,$g="300 es",Ci=2e3,Ha=2001;function tb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nb(){const t=Zc("canvas");return t.style.display="block",t}const Kg={};function Zg(...t){const e="THREE."+t.shift();console.log(e,...t)}function $y(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function We(...t){t=$y(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function pt(...t){t=$y(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ho(...t){const e=t.join(" ");e in Kg||(Kg[e]=!0,We(...t))}function ib(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const rb={[$f]:Kf,[Zf]:eh,[Qf]:th,[wo]:Jf,[Kf]:$f,[eh]:Zf,[th]:Qf,[Jf]:wo};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Nh=180/Math.PI;function Ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function dt(t,e,n){return Math.max(e,Math.min(n,t))}function sb(t,e){return(t%e+e)%e}function ud(t,e,n){return(1-n)*t+n*e}function Xo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const im=class im{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};im.prototype.isVector2=!0;let at=im;class Io{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],d=s[o+0],m=s[o+1],g=s[o+2],E=s[o+3];if(p!==E||l!==d||c!==m||h!==g){let x=l*d+c*m+h*g+p*E;x<0&&(d=-d,m=-m,g=-g,E=-E,x=-x);let f=1-a;if(x<.9995){const v=Math.acos(x),M=Math.sin(v);f=Math.sin(f*v)/M,a=Math.sin(a*v)/M,l=l*f+d*a,c=c*f+m*a,h=h*f+g*a,p=p*f+E*a}else{l=l*f+d*a,c=c*f+m*a,h=h*f+g*a,p=p*f+E*a;const v=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=v,c*=v,h*=v,p*=v}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+h*p+l*m-c*d,e[n+1]=l*g+h*d+c*p-a*m,e[n+2]=c*g+h*m+a*d-l*p,e[n+3]=h*g-a*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*p+c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p-d*m*g;break;case"YXZ":this._x=d*h*p+c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p+d*m*g;break;case"ZXY":this._x=d*h*p-c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p-d*m*g;break;case"ZYX":this._x=d*h*p-c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p+d*m*g;break;case"YZX":this._x=d*h*p+c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p-d*m*g;break;case"XZY":this._x=d*h*p-c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p+d*m*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],p=n[10],d=i+a+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rm=class rm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*h,this.y=i+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rm.prototype.isVector3=!0;let z=rm;const dd=new z,Qg=new Io,sm=class sm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],d=i[2],m=i[5],g=i[8],E=r[0],x=r[3],f=r[6],v=r[1],M=r[4],S=r[7],T=r[2],b=r[5],A=r[8];return s[0]=o*E+a*v+l*T,s[3]=o*x+a*M+l*b,s[6]=o*f+a*S+l*A,s[1]=c*E+h*v+p*T,s[4]=c*x+h*M+p*b,s[7]=c*f+h*S+p*A,s[2]=d*E+m*v+g*T,s[5]=d*x+m*M+g*b,s[8]=d*f+m*S+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,d=a*l-h*s,m=c*s-o*l,g=n*p+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(a*i-r*o)*E,e[3]=d*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fd.makeScale(e,n)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fd.makeRotation(-e)),this}translate(e,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sm.prototype.isMatrix3=!0;let Qe=sm;const fd=new Qe,Jg=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e0=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ob(){const t={enabled:!0,workingColorSpace:$c,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=po(r.r),r.g=po(r.g),r.b=po(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?Kc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[$c]:{primaries:e,whitePoint:i,transfer:Kc,toXYZ:Jg,fromXYZ:e0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Jg,fromXYZ:e0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),t}const ut=ob();function er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function po(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let As;class ab{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=Zc("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(er(n[i]/255)*255):n[i]=er(n[i]);return{data:n,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lb=0;class Kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hd(r[o].image)):s.push(hd(r[o]))}else s=hd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ab.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let cb=0;const pd=new z;class xn extends _s{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=$i,r=$i,s=dn,o=rs,a=pi,l=Un,c=xn.DEFAULT_ANISOTROPY,h=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=Ka(),this.name="",this.source=new Kp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){We(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Vy;xn.DEFAULT_ANISOTROPY=1;const om=class om{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],m=l[5],g=l[9],E=l[2],x=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-E)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+E)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(m+1)/2,T=(f+1)/2,b=(h+d)/4,A=(p+E)/4,y=(g+x)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=b/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((x-g)*(x-g)+(p-E)*(p-E)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(p-E)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this.w=dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this.w=dt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;let Pt=om;class ub extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new xn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Kp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends ub{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ky extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class db extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qc=class Qc{constructor(e,n,i,r,s,o,a,l,c,h,p,d,m,g,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,p,d,m,g,E,x)}set(e,n,i,r,s,o,a,l,c,h,p,d,m,g,E,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=d,f[3]=m,f[7]=g,f[11]=E,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*p,g=a*h,E=a*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+g*c,n[5]=d-E*c,n[9]=-a*l,n[2]=E-d*c,n[6]=g+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,g=c*h,E=c*p;n[0]=d+E*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=m*a-g,n[6]=E+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,g=c*h,E=c*p;n[0]=d-E*a,n[4]=-o*p,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*h,n[9]=E-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*p,g=a*h,E=a*p;n[0]=l*h,n[4]=g*c-m,n[8]=d*c+E,n[1]=l*p,n[5]=E*c+d,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,E=a*c;n[0]=l*h,n[4]=E-d*p,n[8]=g*p+m,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=m*p+g,n[10]=d-E*p}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,E=a*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=d*p+E,n[5]=o*h,n[9]=m*p-g,n[2]=g*p-m,n[6]=a*h,n[10]=E*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fb,e,hb)}lookAt(e,n,i){const r=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),hr.crossVectors(i,Dn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),hr.crossVectors(i,Dn)),hr.normalize(),Al.crossVectors(Dn,hr),r[0]=hr.x,r[4]=Al.x,r[8]=Dn.x,r[1]=hr.y,r[5]=Al.y,r[9]=Dn.y,r[2]=hr.z,r[6]=Al.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],d=i[9],m=i[13],g=i[2],E=i[6],x=i[10],f=i[14],v=i[3],M=i[7],S=i[11],T=i[15],b=r[0],A=r[4],y=r[8],C=r[12],P=r[1],D=r[5],k=r[9],$=r[13],Q=r[2],O=r[6],q=r[10],H=r[14],L=r[3],I=r[7],X=r[11],te=r[15];return s[0]=o*b+a*P+l*Q+c*L,s[4]=o*A+a*D+l*O+c*I,s[8]=o*y+a*k+l*q+c*X,s[12]=o*C+a*$+l*H+c*te,s[1]=h*b+p*P+d*Q+m*L,s[5]=h*A+p*D+d*O+m*I,s[9]=h*y+p*k+d*q+m*X,s[13]=h*C+p*$+d*H+m*te,s[2]=g*b+E*P+x*Q+f*L,s[6]=g*A+E*D+x*O+f*I,s[10]=g*y+E*k+x*q+f*X,s[14]=g*C+E*$+x*H+f*te,s[3]=v*b+M*P+S*Q+T*L,s[7]=v*A+M*D+S*O+T*I,s[11]=v*y+M*k+S*q+T*X,s[15]=v*C+M*$+S*H+T*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],m=e[14],g=e[3],E=e[7],x=e[11],f=e[15],v=l*m-c*d,M=a*m-c*p,S=a*d-l*p,T=o*m-c*h,b=o*d-l*h,A=o*p-a*h;return n*(E*v-x*M+f*S)-i*(g*v-x*T+f*b)+r*(g*M-E*T+f*A)-s*(g*S-E*b+x*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return n*(o*h-a*c)-i*(s*h-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],m=e[11],g=e[12],E=e[13],x=e[14],f=e[15],v=n*a-i*o,M=n*l-r*o,S=n*c-s*o,T=i*l-r*a,b=i*c-s*a,A=r*c-s*l,y=h*E-p*g,C=h*x-d*g,P=h*f-m*g,D=p*x-d*E,k=p*f-m*E,$=d*f-m*x,Q=v*$-M*k+S*D+T*P-b*C+A*y;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Q;return e[0]=(a*$-l*k+c*D)*O,e[1]=(r*k-i*$-s*D)*O,e[2]=(E*A-x*b+f*T)*O,e[3]=(d*b-p*A-m*T)*O,e[4]=(l*P-o*$-c*C)*O,e[5]=(n*$-r*P+s*C)*O,e[6]=(x*S-g*A-f*M)*O,e[7]=(h*A-d*S+m*M)*O,e[8]=(o*k-a*P+c*y)*O,e[9]=(i*P-n*k-s*y)*O,e[10]=(g*b-E*S+f*v)*O,e[11]=(p*S-h*b-m*v)*O,e[12]=(a*C-o*D-l*y)*O,e[13]=(n*D-i*C+r*y)*O,e[14]=(E*M-g*T-x*v)*O,e[15]=(h*T-p*M+d*v)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,p=a+a,d=s*c,m=s*h,g=s*p,E=o*h,x=o*p,f=a*p,v=l*c,M=l*h,S=l*p,T=i.x,b=i.y,A=i.z;return r[0]=(1-(E+f))*T,r[1]=(m+S)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(d+f))*b,r[6]=(x+v)*b,r[7]=0,r[8]=(g+M)*A,r[9]=(x-v)*A,r[10]=(1-(d+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Cs.set(r[0],r[1],r[2]).length();const a=Cs.set(r[4],r[5],r[6]).length(),l=Cs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ri.copy(this);const c=1/o,h=1/a,p=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=p,ri.elements[9]*=p,ri.elements[10]*=p,n.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ci,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let g,E;if(l)g=s/(o-s),E=o*s/(o-s);else if(a===Ci)g=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Ha)g=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let g,E;if(l)g=1/(o-s),E=o/(o-s);else if(a===Ci)g=-2/(o-s),E=-(o+s)/(o-s);else if(a===Ha)g=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Qc.prototype.isMatrix4=!0;let Ft=Qc;const Cs=new z,ri=new Ft,fb=new z(0,0,0),hb=new z(1,1,1),hr=new z,Al=new z,Dn=new z,t0=new Ft,n0=new Io;class zr{constructor(e=0,n=0,i=0,r=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return t0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return n0.setFromEuler(this),this.setFromQuaternion(n0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class Zy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pb=0;const i0=new z,Rs=new Io,ki=new Ft,Cl=new z,qo=new z,mb=new z,gb=new Io,r0=new z(1,0,0),s0=new z(0,1,0),o0=new z(0,0,1),a0={type:"added"},xb={type:"removed"},Ps={type:"childadded",child:null},md={type:"childremoved",child:null};class vn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new z,n=new zr,i=new Io,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Qe}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(r0,e)}rotateY(e){return this.rotateOnAxis(s0,e)}rotateZ(e){return this.rotateOnAxis(o0,e)}translateOnAxis(e,n){return i0.copy(e).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(r0,e)}translateY(e){return this.translateOnAxis(s0,e)}translateZ(e){return this.translateOnAxis(o0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Cl.copy(e):Cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(qo,Cl,this.up):ki.lookAt(Cl,qo,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(ki),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a0),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xb),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a0),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,mb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,gb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new z(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class aa extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vb={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,i),f=this._getHandJoint(c,E);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Qy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function xd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=sb(e,1),n=dt(n,0,1),i=dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xd(o,s,e+1/3),this.g=xd(o,s,e),this.b=xd(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=Qy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return ut.workingToColorSpace(an.copy(this),e),Math.round(dt(an.r*255,0,255))*65536+Math.round(dt(an.g*255,0,255))*256+Math.round(dt(an.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ut.workingColorSpace){return ut.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=qn){ut.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(Rl);const i=ud(pr.h,Rl.h,n),r=ud(pr.s,Rl.s,n),s=ud(pr.l,Rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ot;ot.NAMES=Qy;class yb extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new z,Oi=new z,vd=new z,Bi=new z,Ds=new z,Fs=new z,l0=new z,yd=new z,_d=new z,Sd=new z,Md=new Pt,Ed=new Pt,bd=new Pt;class hi{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),Oi.subVectors(i,n),vd.subVectors(e,n);const o=si.dot(si),a=si.dot(Oi),l=si.dot(vd),c=Oi.dot(Oi),h=Oi.dot(vd),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Md.setScalar(0),Ed.setScalar(0),bd.setScalar(0),Md.fromBufferAttribute(e,n),Ed.fromBufferAttribute(e,i),bd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Md,s.x),o.addScaledVector(Ed,s.y),o.addScaledVector(bd,s.z),o}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Oi.subVectors(e,n),si.cross(Oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),si.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Fs.subVectors(s,i),yd.subVectors(e,i);const l=Ds.dot(yd),c=Fs.dot(yd);if(l<=0&&c<=0)return n.copy(i);_d.subVectors(e,r);const h=Ds.dot(_d),p=Fs.dot(_d);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Ds,o);Sd.subVectors(e,s);const m=Ds.dot(Sd),g=Fs.dot(Sd);if(g>=0&&m<=g)return n.copy(s);const E=m*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Fs,a);const x=h*g-m*p;if(x<=0&&p-h>=0&&m-g>=0)return l0.subVectors(s,r),a=(p-h)/(p-h+(m-g)),n.copy(r).addScaledVector(l0,a);const f=1/(x+E+d);return o=E*f,a=d*f,n.copy(i).addScaledVector(Ds,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Za{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Dl.subVectors(this.max,Yo),Is.subVectors(e.a,Yo),Ls.subVectors(e.b,Yo),Ns.subVectors(e.c,Yo),mr.subVectors(Ls,Is),gr.subVectors(Ns,Ls),Xr.subVectors(Is,Ns);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Xr.z,Xr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Xr.z,0,-Xr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Xr.y,Xr.x,0];return!Td(n,Is,Ls,Ns,Dl)||(n=[1,0,0,0,1,0,0,0,1],!Td(n,Is,Ls,Ns,Dl))?!1:(Fl.crossVectors(mr,gr),n=[Fl.x,Fl.y,Fl.z],Td(n,Is,Ls,Ns,Dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new z,new z,new z,new z,new z,new z,new z,new z],oi=new z,Pl=new Za,Is=new z,Ls=new z,Ns=new z,mr=new z,gr=new z,Xr=new z,Yo=new z,Dl=new z,Fl=new z,qr=new z;function Td(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){qr.fromArray(t,s);const a=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=e.dot(qr),c=n.dot(qr),h=i.dot(qr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bt=new z,Il=new at;let _b=0;class Jn extends _s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yg,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Il.fromBufferAttribute(this,n),Il.applyMatrix3(e),this.setXY(n,Il.x,Il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Jy extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class e_ extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Sb=new Za,$o=new z,wd=new z;class yu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(wd)),this.expandByPoint($o.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mb=0;const Wn=new Ft,Ad=new vn,Us=new z,Fn=new Za,Ko=new Za,Xt=new z;class Cn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tb(e)?e_:Jy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,i){return Wn.makeTranslation(e,n,i),this.applyMatrix4(Wn),this}scale(e,n,i){return Wn.makeScale(e,n,i),this.applyMatrix4(Wn),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Fn.min,Ko.min),Fn.expandByPoint(Xt),Xt.addVectors(Fn.max,Ko.max),Fn.expandByPoint(Xt)):(Fn.expandByPoint(Ko.min),Fn.expandByPoint(Ko.max))}Fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xt.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),Xt.add(Us)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new z,l[y]=new z;const c=new z,h=new z,p=new z,d=new at,m=new at,g=new at,E=new z,x=new z;function f(y,C,P){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,C),p.fromBufferAttribute(i,P),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,C),g.fromBufferAttribute(s,P),h.sub(c),p.sub(c),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(D),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),a[y].add(E),a[C].add(E),a[P].add(E),l[y].add(x),l[C].add(x),l[P].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,C=v.length;y<C;++y){const P=v[y],D=P.start,k=P.count;for(let $=D,Q=D+k;$<Q;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const M=new z,S=new z,T=new z,b=new z;function A(y){T.fromBufferAttribute(r,y),b.copy(T);const C=a[y];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),S.crossVectors(b,C);const D=S.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,D)}for(let y=0,C=v.length;y<C;++y){const P=v[y],D=P.start,k=P.count;for(let $=D,Q=D+k;$<Q;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,p=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),E=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,x),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let E=0,x=l.length;E<x;E++){a.isInterleavedBufferAttribute?m=l[E]*a.data.stride+a.offset:m=l[E]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Jn(d,h,p)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Eb=0;class Lo extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=fo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=Yf,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){We(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qf&&(i.blendSrc=this.blendSrc),this.blendDst!==Yf&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vi=new z,Cd=new z,Ll=new z,xr=new z,Rd=new z,Nl=new z,Pd=new z;class t_{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,n),Vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cd.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(Cd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ll),a=xr.dot(this.direction),l=-xr.dot(Ll),c=xr.lengthSq(),h=Math.abs(1-o*o);let p,d,m,g;if(h>0)if(p=o*l-a,d=o*a-l,g=s*h,p>=0)if(d>=-g)if(d<=g){const E=1/h;p*=E,d*=E,m=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Cd).addScaledVector(Ll,d),m}intersectSphere(e,n){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,n,i,r,s){Rd.subVectors(n,e),Nl.subVectors(i,e),Pd.crossVectors(Rd,Nl);let o=this.direction.dot(Pd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,e);const l=a*this.direction.dot(Nl.crossVectors(xr,Nl));if(l<0)return null;const c=a*this.direction.dot(Rd.cross(xr));if(c<0||l+c>o)return null;const h=-a*xr.dot(Pd);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zp extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=Iy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const c0=new Ft,Yr=new t_,Ul=new yu,u0=new z,kl=new z,Ol=new z,Bl=new z,Dd=new z,zl=new z,d0=new z,Vl=new z;class On extends vn{constructor(e=new Cn,n=new Zp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(Dd.fromBufferAttribute(p,e),o?zl.addScaledVector(Dd,h):zl.addScaledVector(Dd.sub(n),h))}n.add(zl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(Ul.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Ul,u0)===null||Yr.origin.distanceToSquared(u0)>(e.far-e.near)**2))&&(c0.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(c0),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=d.length;g<E;g++){const x=d[g],f=o[x.materialIndex],v=Math.max(x.start,m.start),M=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let S=v,T=M;S<T;S+=3){const b=a.getX(S),A=a.getX(S+1),y=a.getX(S+2);r=Hl(this,f,e,i,c,h,p,b,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let x=g,f=E;x<f;x+=3){const v=a.getX(x),M=a.getX(x+1),S=a.getX(x+2);r=Hl(this,o,e,i,c,h,p,v,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=d.length;g<E;g++){const x=d[g],f=o[x.materialIndex],v=Math.max(x.start,m.start),M=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=v,T=M;S<T;S+=3){const b=S,A=S+1,y=S+2;r=Hl(this,f,e,i,c,h,p,b,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let x=g,f=E;x<f;x+=3){const v=x,M=x+1,S=x+2;r=Hl(this,o,e,i,c,h,p,v,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function bb(t,e,n,i,r,s,o,a){let l;if(e.side===An?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Vl);return c<n.near||c>n.far?null:{distance:c,point:Vl.clone(),object:t}}function Hl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,kl),t.getVertexPosition(l,Ol),t.getVertexPosition(c,Bl);const h=bb(t,e,n,i,kl,Ol,Bl,d0);if(h){const p=new z;hi.getBarycoord(d0,kl,Ol,Bl,p),r&&(h.uv=hi.getInterpolatedAttribute(r,a,l,c,p,new at)),s&&(h.uv1=hi.getInterpolatedAttribute(s,a,l,c,p,new at)),o&&(h.normal=hi.getInterpolatedAttribute(o,a,l,c,p,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};hi.getNormal(kl,Ol,Bl,d.normal),h.face=d,h.barycoord=p}return h}class Tb extends xn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Jt,h=Jt,p,d){super(null,o,a,l,c,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fd=new z,wb=new z,Ab=new Qe;class Qr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fd.subVectors(i,n).cross(wb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Fd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ab.getNormalMatrix(e),r=this.coplanarPoint(Fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new yu,Cb=new at(.5,.5),Gl=new z;class Qp{constructor(e=new Qr,n=new Qr,i=new Qr,r=new Qr,s=new Qr,o=new Qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],p=s[5],d=s[6],m=s[7],g=s[8],E=s[9],x=s[10],f=s[11],v=s[12],M=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-o,m-h,f-g,T-v).normalize(),r[1].setComponents(c+o,m+h,f+g,T+v).normalize(),r[2].setComponents(c+a,m+p,f+E,T+M).normalize(),r[3].setComponents(c-a,m-p,f-E,T-M).normalize(),i)r[4].setComponents(l,d,x,S).normalize(),r[5].setComponents(c-l,m-d,f-x,T-S).normalize();else if(r[4].setComponents(c-l,m-d,f-x,T-S).normalize(),n===Ci)r[5].setComponents(c+l,m+d,f+x,T+S).normalize();else if(n===Ha)r[5].setComponents(l,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const n=Cb.distanceTo(e.center);return $r.radius=.7071067811865476+n,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Gl.x=r.normal.x>0?e.max.x:e.min.x,Gl.y=r.normal.y>0?e.max.y:e.min.y,Gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class n_ extends Lo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f0=new Ft,Uh=new t_,Wl=new yu,jl=new z;class Rb extends vn{constructor(e=new Cn,n=new n_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(r),Wl.radius+=s,e.ray.intersectsSphere(Wl)===!1)return;f0.copy(r).invert(),Uh.copy(e.ray).applyMatrix4(f0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,E=m;g<E;g++){const x=c.getX(g);jl.fromBufferAttribute(p,x),h0(jl,x,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let g=d,E=m;g<E;g++)jl.fromBufferAttribute(p,g),h0(jl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function h0(t,e,n,i,r,s,o){const a=Uh.distanceSqToPoint(t);if(a<n){const l=new z;Uh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class i_ extends xn{constructor(e=[],n=gs,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Co extends xn{constructor(e,n,i=Ii,r,s,o,a=Jt,l=Jt,c,h=or,p=1){if(h!==or&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Pb extends Co{constructor(e,n=Ii,i=gs,r,s,o=Jt,a=Jt,l,c=or){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class r_ extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(p,2));function g(E,x,f,v,M,S,T,b,A,y,C){const P=S/A,D=T/y,k=S/2,$=T/2,Q=b/2,O=A+1,q=y+1;let H=0,L=0;const I=new z;for(let X=0;X<q;X++){const te=X*D-$;for(let re=0;re<O;re++){const Xe=re*P-k;I[E]=Xe*v,I[x]=te*M,I[f]=Q,c.push(I.x,I.y,I.z),I[E]=0,I[x]=0,I[f]=b>0?1:-1,h.push(I.x,I.y,I.z),p.push(re/A),p.push(1-X/y),H+=1}}for(let X=0;X<y;X++)for(let te=0;te<A;te++){const re=d+te+O*X,Xe=d+te+O*(X+1),Ze=d+(te+1)+O*(X+1),ze=d+(te+1)+O*X;l.push(re,Xe,ze),l.push(Xe,Ze,ze),L+=6}a.addGroup(m,L,C),m+=L,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _u extends Cn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new z,S=new z,T=new z;for(let b=0;b<n.length;b+=3)m(n[b+0],M),m(n[b+1],S),m(n[b+2],T),l(M,S,T,v)}function l(v,M,S,T){const b=T+1,A=[];for(let y=0;y<=b;y++){A[y]=[];const C=v.clone().lerp(S,y/b),P=M.clone().lerp(S,y/b),D=b-y;for(let k=0;k<=D;k++)k===0&&y===b?A[y][k]=C:A[y][k]=C.clone().lerp(P,k/D)}for(let y=0;y<b;y++)for(let C=0;C<2*(b-y)-1;C++){const P=Math.floor(C/2);C%2===0?(d(A[y][P+1]),d(A[y+1][P]),d(A[y][P])):(d(A[y][P+1]),d(A[y+1][P+1]),d(A[y+1][P]))}}function c(v){const M=new z;for(let S=0;S<s.length;S+=3)M.x=s[S+0],M.y=s[S+1],M.z=s[S+2],M.normalize().multiplyScalar(v),s[S+0]=M.x,s[S+1]=M.y,s[S+2]=M.z}function h(){const v=new z;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const S=x(v)/2/Math.PI+.5,T=f(v)/Math.PI+.5;o.push(S,1-T)}g(),p()}function p(){for(let v=0;v<o.length;v+=6){const M=o[v+0],S=o[v+2],T=o[v+4],b=Math.max(M,S,T),A=Math.min(M,S,T);b>.9&&A<.1&&(M<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function m(v,M){const S=v*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function g(){const v=new z,M=new z,S=new z,T=new z,b=new at,A=new at,y=new at;for(let C=0,P=0;C<s.length;C+=9,P+=6){v.set(s[C+0],s[C+1],s[C+2]),M.set(s[C+3],s[C+4],s[C+5]),S.set(s[C+6],s[C+7],s[C+8]),b.set(o[P+0],o[P+1]),A.set(o[P+2],o[P+3]),y.set(o[P+4],o[P+5]),T.copy(v).add(M).add(S).divideScalar(3);const D=x(T);E(b,P+0,v,D),E(A,P+2,M,D),E(y,P+4,S,D)}}function E(v,M,S,T){T<0&&v.x===1&&(o[M]=v.x-1),S.x===0&&S.z===0&&(o[M]=T/2/Math.PI+.5)}function x(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.vertices,e.indices,e.radius,e.detail)}}class Jp extends _u{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Jp(e.radius,e.detail)}}class em extends _u{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new em(e.radius,e.detail)}}class Su extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,d=n/l,m=[],g=[],E=[],x=[];for(let f=0;f<h;f++){const v=f*d-o;for(let M=0;M<c;M++){const S=M*p-s;g.push(S,-v,0),E.push(0,0,1),x.push(M/a),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const M=v+c*f,S=v+c*(f+1),T=v+1+c*(f+1),b=v+1+c*f;m.push(M,S,b),m.push(S,T,b)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(E,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}class tm extends Cn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let p=e;const d=(n-e)/r,m=new z,g=new at;for(let E=0;E<=r;E++){for(let x=0;x<=i;x++){const f=s+x/i*o;m.x=p*Math.cos(f),m.y=p*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/n+1)/2,g.y=(m.y/n+1)/2,h.push(g.x,g.y)}p+=d}for(let E=0;E<r;E++){const x=E*(i+1);for(let f=0;f<i;f++){const v=f+x,M=v,S=v+i+1,T=v+i+2,b=v+1;a.push(M,S,b),a.push(S,T,b)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nm extends Cn{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],h=[],p=new z,d=new z,m=new z,g=new z,E=new z,x=new z,f=new z;for(let M=0;M<=i;++M){const S=M/i*s*Math.PI*2;v(S,s,o,e,m),v(S+.01,s,o,e,g),x.subVectors(g,m),f.addVectors(g,m),E.crossVectors(x,f),f.crossVectors(E,x),E.normalize(),f.normalize();for(let T=0;T<=r;++T){const b=T/r*Math.PI*2,A=-n*Math.cos(b),y=n*Math.sin(b);p.x=m.x+(A*f.x+y*E.x),p.y=m.y+(A*f.y+y*E.y),p.z=m.z+(A*f.z+y*E.z),l.push(p.x,p.y,p.z),d.subVectors(p,m).normalize(),c.push(d.x,d.y,d.z),h.push(M/i),h.push(T/r)}}for(let M=1;M<=i;M++)for(let S=1;S<=r;S++){const T=(r+1)*(M-1)+(S-1),b=(r+1)*M+(S-1),A=(r+1)*M+S,y=(r+1)*(M-1)+S;a.push(T,b,y),a.push(b,A,y)}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2));function v(M,S,T,b,A){const y=Math.cos(M),C=Math.sin(M),P=T/S*M,D=Math.cos(P);A.x=b*(2+D)*.5*y,A.y=b*(2+D)*C*.5,A.z=b*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nm(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(p0(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(p0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=Ro(t[n]);for(const r in i)e[r]=i[r]}return e}function p0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Db(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function s_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Fb={clone:Ro,merge:hn};var Ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ib,this.fragmentShader=Lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=Db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(r.value);break;case"v2":this.uniforms[i].value=new at().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ft().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Nb extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Id extends Lo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ub extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class o_ extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ld=new Ft,m0=new z,g0=new z;class Ob{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qp,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;m0.setFromMatrixPosition(e.matrixWorld),n.position.copy(m0),g0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(g0),n.updateMatrixWorld(),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ha||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xl=new z,ql=new Io,Si=new z;class a_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,ql,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Xl,ql,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vr=new z,x0=new at,v0=new at;class Nn extends a_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,x0,v0),n.subVectors(v0,x0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Bb extends Ob{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0}}class y0 extends o_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class l_ extends a_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class zb extends o_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ks=-90,Os=1;class Vb extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(ks,Os,e,n);r.layers=this.layers,this.add(r);const s=new Nn(ks,Os,e,n);s.layers=this.layers,this.add(s);const o=new Nn(ks,Os,e,n);o.layers=this.layers,this.add(o);const a=new Nn(ks,Os,e,n);a.layers=this.layers,this.add(a);const l=new Nn(ks,Os,e,n);l.layers=this.layers,this.add(l);const c=new Nn(ks,Os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hb extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,We("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const am=class am{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};am.prototype.isMatrix2=!0;let _0=am;function S0(t,e,n,i){const r=Wb(i);switch(n){case Xy:return t*e;case Yy:return t*e/r.components*r.byteLength;case jp:return t*e/r.components*r.byteLength;case xs:return t*e*2/r.components*r.byteLength;case Xp:return t*e*2/r.components*r.byteLength;case qy:return t*e*3/r.components*r.byteLength;case pi:return t*e*4/r.components*r.byteLength;case qp:return t*e*4/r.components*r.byteLength;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xc:case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(t,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(t,8)*Math.max(e,8)/2;case lh:case ch:case dh:case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uh:case qc:case hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Rh:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Dh:case Fh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yc:case Ih:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Wb(t){switch(t){case Un:case Hy:return{byteLength:1,components:1};case za:case Gy:case sr:return{byteLength:2,components:1};case Gp:case Wp:return{byteLength:2,components:4};case Ii:case Hp:case Ai:return{byteLength:4,components:1};case Wy:case jy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function c_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jb(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,p=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,h);else{p.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<p.length;m++){const g=p[d],E=p[m];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++d,p[d]=E)}p.length=d+1;for(let m=0,g=p.length;m<g;m++){const E=p[m];t.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,t2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,m2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,v2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M2="gl_FragColor = linearToOutputTexel( gl_FragColor );",E2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,O2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_T=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ew=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ow=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Xb,alphahash_pars_fragment:qb,alphamap_fragment:Yb,alphamap_pars_fragment:$b,alphatest_fragment:Kb,alphatest_pars_fragment:Zb,aomap_fragment:Qb,aomap_pars_fragment:Jb,batching_pars_vertex:e2,batching_vertex:t2,begin_vertex:n2,beginnormal_vertex:i2,bsdfs:r2,iridescence_fragment:s2,bumpmap_pars_fragment:o2,clipping_planes_fragment:a2,clipping_planes_pars_fragment:l2,clipping_planes_pars_vertex:c2,clipping_planes_vertex:u2,color_fragment:d2,color_pars_fragment:f2,color_pars_vertex:h2,color_vertex:p2,common:m2,cube_uv_reflection_fragment:g2,defaultnormal_vertex:x2,displacementmap_pars_vertex:v2,displacementmap_vertex:y2,emissivemap_fragment:_2,emissivemap_pars_fragment:S2,colorspace_fragment:M2,colorspace_pars_fragment:E2,envmap_fragment:b2,envmap_common_pars_fragment:T2,envmap_pars_fragment:w2,envmap_pars_vertex:A2,envmap_physical_pars_fragment:O2,envmap_vertex:C2,fog_vertex:R2,fog_pars_vertex:P2,fog_fragment:D2,fog_pars_fragment:F2,gradientmap_pars_fragment:I2,lightmap_pars_fragment:L2,lights_lambert_fragment:N2,lights_lambert_pars_fragment:U2,lights_pars_begin:k2,lights_toon_fragment:B2,lights_toon_pars_fragment:z2,lights_phong_fragment:V2,lights_phong_pars_fragment:H2,lights_physical_fragment:G2,lights_physical_pars_fragment:W2,lights_fragment_begin:j2,lights_fragment_maps:X2,lights_fragment_end:q2,lightprobes_pars_fragment:Y2,logdepthbuf_fragment:$2,logdepthbuf_pars_fragment:K2,logdepthbuf_pars_vertex:Z2,logdepthbuf_vertex:Q2,map_fragment:J2,map_pars_fragment:eT,map_particle_fragment:tT,map_particle_pars_fragment:nT,metalnessmap_fragment:iT,metalnessmap_pars_fragment:rT,morphinstance_vertex:sT,morphcolor_vertex:oT,morphnormal_vertex:aT,morphtarget_pars_vertex:lT,morphtarget_vertex:cT,normal_fragment_begin:uT,normal_fragment_maps:dT,normal_pars_fragment:fT,normal_pars_vertex:hT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:xT,clearcoat_pars_fragment:vT,iridescence_pars_fragment:yT,opaque_fragment:_T,packing:ST,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:bT,dithering_pars_fragment:TT,roughnessmap_fragment:wT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:RT,shadowmap_vertex:PT,shadowmask_pars_fragment:DT,skinbase_vertex:FT,skinning_pars_vertex:IT,skinning_vertex:LT,skinnormal_vertex:NT,specularmap_fragment:UT,specularmap_pars_fragment:kT,tonemapping_fragment:OT,tonemapping_pars_fragment:BT,transmission_fragment:zT,transmission_pars_fragment:VT,uv_pars_fragment:HT,uv_pars_vertex:GT,uv_vertex:WT,worldpos_vertex:jT,background_vert:XT,background_frag:qT,backgroundCube_vert:YT,backgroundCube_frag:$T,cube_vert:KT,cube_frag:ZT,depth_vert:QT,depth_frag:JT,distance_vert:ew,distance_frag:tw,equirect_vert:nw,equirect_frag:iw,linedashed_vert:rw,linedashed_frag:sw,meshbasic_vert:ow,meshbasic_frag:aw,meshlambert_vert:lw,meshlambert_frag:cw,meshmatcap_vert:uw,meshmatcap_frag:dw,meshnormal_vert:fw,meshnormal_frag:hw,meshphong_vert:pw,meshphong_frag:mw,meshphysical_vert:gw,meshphysical_frag:xw,meshtoon_vert:vw,meshtoon_frag:yw,points_vert:_w,points_frag:Sw,shadow_vert:Mw,shadow_frag:Ew,sprite_vert:bw,sprite_frag:Tw},ge={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},bi={basic:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:hn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:hn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ot(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:hn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:hn([ge.points,ge.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:hn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:hn([ge.common,ge.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:hn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:hn([ge.sprite,ge.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:hn([ge.common,ge.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:hn([ge.lights,ge.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bi.physical={uniforms:hn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Yl={r:0,b:0,g:0},ww=new Ft,u_=new Qe;u_.set(-1,0,0,0,1,0,0,0,1);function Aw(t,e,n,i,r,s){const o=new ot(0);let a=r===!0?0:1,l,c,h=null,p=0,d=null;function m(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const S=v.backgroundBlurriness>0;M=e.get(M,S)}return M}function g(v){let M=!1;const S=m(v);S===null?x(o,a):S&&S.isColor&&(x(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===vu)?(c===void 0&&(c=new On(new Qa(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ro(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ww.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(u_),c.material.toneMapped=ut.getTransfer(S.colorSpace)!==gt,(h!==S||p!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new On(new Su(2,2),new Li({name:"BackgroundMaterial",uniforms:Ro(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function x(v,M){v.getRGB(Yl,s_(t)),n.buffers.color.setClear(Yl.r,Yl.g,Yl.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,x(o,a)},render:g,addToRenderList:E,dispose:f}}function Cw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(D,k,$,Q,O){let q=!1;const H=p(D,Q,$,k);s!==H&&(s=H,c(s.object)),q=m(D,Q,$,O),q&&g(D,Q,$,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(D,k,$,Q),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function p(D,k,$,Q){const O=Q.wireframe===!0;let q=i[k.id];q===void 0&&(q={},i[k.id]=q);const H=D.isInstancedMesh===!0?D.id:0;let L=q[H];L===void 0&&(L={},q[H]=L);let I=L[$.id];I===void 0&&(I={},L[$.id]=I);let X=I[O];return X===void 0&&(X=d(l()),I[O]=X),X}function d(D){const k=[],$=[],Q=[];for(let O=0;O<n;O++)k[O]=0,$[O]=0,Q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:Q,object:D,attributes:{},index:null}}function m(D,k,$,Q){const O=s.attributes,q=k.attributes;let H=0;const L=$.getAttributes();for(const I in L)if(L[I].location>=0){const te=O[I];let re=q[I];if(re===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==Q}function g(D,k,$,Q){const O={},q=k.attributes;let H=0;const L=$.getAttributes();for(const I in L)if(L[I].location>=0){let te=q[I];te===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),O[I]=re,H++}s.attributes=O,s.attributesNum=H,s.index=Q}function E(){const D=s.newAttributes;for(let k=0,$=D.length;k<$;k++)D[k]=0}function x(D){f(D,0)}function f(D,k){const $=s.newAttributes,Q=s.enabledAttributes,O=s.attributeDivisors;$[D]=1,Q[D]===0&&(t.enableVertexAttribArray(D),Q[D]=1),O[D]!==k&&(t.vertexAttribDivisor(D,k),O[D]=k)}function v(){const D=s.newAttributes,k=s.enabledAttributes;for(let $=0,Q=k.length;$<Q;$++)k[$]!==D[$]&&(t.disableVertexAttribArray($),k[$]=0)}function M(D,k,$,Q,O,q,H){H===!0?t.vertexAttribIPointer(D,k,$,O,q):t.vertexAttribPointer(D,k,$,Q,O,q)}function S(D,k,$,Q){E();const O=Q.attributes,q=$.getAttributes(),H=k.defaultAttributeValues;for(const L in q){const I=q[L];if(I.location>=0){let X=O[L];if(X===void 0&&(L==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),L==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const te=X.normalized,re=X.itemSize,Xe=e.get(X);if(Xe===void 0)continue;const Ze=Xe.buffer,ze=Xe.type,G=Xe.bytesPerElement,se=ze===t.INT||ze===t.UNSIGNED_INT||X.gpuType===Hp;if(X.isInterleavedBufferAttribute){const ne=X.data,ce=ne.stride,Re=X.offset;if(ne.isInstancedInterleavedBuffer){for(let _e=0;_e<I.locationSize;_e++)f(I.location+_e,ne.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<I.locationSize;_e++)x(I.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let _e=0;_e<I.locationSize;_e++)M(I.location+_e,re/I.locationSize,ze,te,ce*G,(Re+re/I.locationSize*_e)*G,se)}else{if(X.isInstancedBufferAttribute){for(let ne=0;ne<I.locationSize;ne++)f(I.location+ne,X.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ne=0;ne<I.locationSize;ne++)x(I.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let ne=0;ne<I.locationSize;ne++)M(I.location+ne,re/I.locationSize,ze,te,re*G,re/I.locationSize*ne*G,se)}}else if(H!==void 0){const te=H[L];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(I.location,te);break;case 3:t.vertexAttrib3fv(I.location,te);break;case 4:t.vertexAttrib4fv(I.location,te);break;default:t.vertexAttrib1fv(I.location,te)}}}}v()}function T(){C();for(const D in i){const k=i[D];for(const $ in k){const Q=k[$];for(const O in Q){const q=Q[O];for(const H in q)h(q[H].object),delete q[H];delete Q[O]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const k=i[D.id];for(const $ in k){const Q=k[$];for(const O in Q){const q=Q[O];for(const H in q)h(q[H].object),delete q[H];delete Q[O]}}delete i[D.id]}function A(D){for(const k in i){const $=i[k];for(const Q in $){const O=$[Q];if(O[D.id]===void 0)continue;const q=O[D.id];for(const H in q)h(q[H].object),delete q[H];delete O[D.id]}}}function y(D){for(const k in i){const $=i[k],Q=D.isInstancedMesh===!0?D.id:0,O=$[Q];if(O!==void 0){for(const q in O){const H=O[q];for(const L in H)h(H[L].object),delete H[L];delete O[q]}delete $[Q],Object.keys($).length===0&&delete i[k]}}}function C(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:x,disableUnusedAttributes:v}}function Rw(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Pw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==pi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const y=A===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Un&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ai&&!y)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:b}}function Dw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qr,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,f=t.get(p);if(!r||g===null||g.length===0||s&&!x)s?h(null):c();else{const v=s?0:i,M=v*4;let S=f.clippingState||null;l.value=S,S=h(g,d,M,m);for(let T=0;T!==M;++T)S[T]=n[T];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,g){const E=p!==null?p.length:0;let x=null;if(E!==0){if(x=l.value,g!==!0||x===null){const f=m+E*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<f)&&(x=new Float32Array(f));for(let M=0,S=m;M!==E;++M,S+=4)o.copy(p[M]).applyMatrix4(v,a),o.normal.toArray(x,S),x[S+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const wr=4,M0=[.125,.215,.35,.446,.526,.582],es=20,Fw=256,Zo=new l_,E0=new ot;let Nd=null,Ud=0,kd=0,Od=!1;const Iw=new z;class b0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Iw}=s;Nd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Ud,kd),this._renderer.xr.enabled=Od,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===gs||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:sr,format:pi,colorSpace:$c,depthBuffer:!1},r=T0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lw(s)),this._blurMaterial=Uw(s,e,n),this._ggxMaterial=Nw(s,e,n)}return r}_compileMaterial(e){const n=new On(new Cn,e);this._renderer.compile(n,Zo)}_sceneToCubeUV(e,n,i,r,s){const l=new Nn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(E0),p.toneMapping=Di,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new Qa,new Zp({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let f=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,f=!0):(x.color.copy(E0),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;Bs(r,S*T,M>2?T:0,T,T),p.setRenderTarget(r),f&&p.render(E,l),p.render(e,l)}p.toneMapping=m,p.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===gs||e.mapping===Ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=A0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),d=0+c*1.25,m=p*d,{_lodMax:g}=this,E=this._sizeLods[i],x=3*E*(i>g-wr?i-g+wr:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-n,Bs(s,x,f,3*E,2*E),r.setRenderTarget(s),r.render(a,Zo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Bs(e,x,f,3*E,2*E),r.setRenderTarget(e),r.render(a,Zo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*es-1),E=s/g,x=isFinite(s)?1+Math.floor(h*E):es;x>es&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${es}`);const f=[];let v=0;for(let A=0;A<es;++A){const y=A/E,C=Math.exp(-y*y/2);f.push(C),A===0?v+=C:A<x&&(v+=2*C)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const S=this._sizeLods[r],T=3*S*(r>M-wr?r-M+wr:0),b=4*(this._cubeSize-S);Bs(n,T,b,3*S,2*S),l.setRenderTarget(n),l.render(p,Zo)}}function Lw(t){const e=[],n=[],i=[];let r=t;const s=t-wr+1+M0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-wr?l=M0[o-t+wr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,g=6,E=3,x=2,f=1,v=new Float32Array(E*g*m),M=new Float32Array(x*g*m),S=new Float32Array(f*g*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,y=b>2?0:-1,C=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];v.set(C,E*g*b),M.set(d,x*g*b);const P=[b,b,b,b,b,b];S.set(P,f*g*b)}const T=new Cn;T.setAttribute("position",new Jn(v,E)),T.setAttribute("uv",new Jn(M,x)),T.setAttribute("faceIndex",new Jn(S,f)),i.push(new On(T,null)),r>wr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function T0(t,e,n){const i=new Fi(t,e,n);return i.texture.mapping=vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Nw(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Uw(t,e,n){const i=new Float32Array(es),r=new z(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function w0(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function A0(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class d_ extends Fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new i_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qa(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Ji});s.uniforms.tEquirect.value=n;const o=new On(r,s),a=n.minFilter;return n.minFilter===rs&&(n.minFilter=dn),new Vb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function kw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?o(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===od||m===ad)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const E=new d_(g.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",c),a(E.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,g=m===od||m===ad,E=m===gs||m===Ao;if(g||E){let x=n.get(d);const f=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new b0(t)),x=g?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const v=d.image;return g&&v&&v.height>0||E&&v&&l(v)?(i===null&&(i=new b0(t)),x=g?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function a(d,m){return m===od?d.mapping=gs:m===ad&&(d.mapping=Ao),d}function l(d){let m=0;const g=6;for(let E=0;E<g;E++)d[E]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Ow(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ho("WebGLRenderer: "+i+" extension not supported."),r}}}function Bw(t,e,n,i){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(p){const d=[],m=p.index,g=p.attributes.position;let E=0;if(g===void 0)return;if(m!==null){const v=m.array;E=m.version;for(let M=0,S=v.length;M<S;M+=3){const T=v[M+0],b=v[M+1],A=v[M+2];d.push(T,b,b,A,A,T)}}else{const v=g.array;E=g.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const T=M+0,b=M+1,A=M+2;d.push(T,b,b,A,A,T)}}const x=new(g.count>=65535?e_:Jy)(d,1);x.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,x)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function zw(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){t.drawElements(i,d,s,p*o),n.update(d,i,1)}function c(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,p*o,m),n.update(d,i,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let E=0;for(let x=0;x<m;x++)E+=d[x];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Hw(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==p){let P=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),E===!0&&(S=2),x===!0&&(S=3);let T=a.attributes.position.count*S,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*b*4*p),y=new Ky(A,T,b,p);y.type=Ai,y.needsUpdate=!0;const C=S*4;for(let D=0;D<p;D++){const k=f[D],$=v[D],Q=M[D],O=T*b*4*D;for(let q=0;q<k.count;q++){const H=q*C;g===!0&&(r.fromBufferAttribute(k,q),A[O+H+0]=r.x,A[O+H+1]=r.y,A[O+H+2]=r.z,A[O+H+3]=0),E===!0&&(r.fromBufferAttribute($,q),A[O+H+4]=r.x,A[O+H+5]=r.y,A[O+H+6]=r.z,A[O+H+7]=0),x===!0&&(r.fromBufferAttribute(Q,q),A[O+H+8]=r.x,A[O+H+9]=r.y,A[O+H+10]=r.z,A[O+H+11]=Q.itemSize===4?r.w:1)}}d={count:p,texture:y,size:new at(T,b)},i.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const E=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Gw(t,e,n,i,r){let s=new WeakMap;function o(c){const h=r.render.frame,p=c.geometry,d=e.get(c,p);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const Ww={[Ly]:"LINEAR_TONE_MAPPING",[Ny]:"REINHARD_TONE_MAPPING",[Uy]:"CINEON_TONE_MAPPING",[ky]:"ACES_FILMIC_TONE_MAPPING",[By]:"AGX_TONE_MAPPING",[zy]:"NEUTRAL_TONE_MAPPING",[Oy]:"CUSTOM_TONE_MAPPING"};function jw(t,e,n,i,r,s){const o=new Fi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Co(e,n):void 0}),a=new Fi(e,n,{type:sr,depthBuffer:!1,stencilBuffer:!1}),l=new Cn;l.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new Nb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new On(l,c),p=new l_(-1,1,1,-1,0,1);let d=null,m=null,g=!1,E,x=null,f=[],v=!1;this.setSize=function(M,S){o.setSize(M,S),a.setSize(M,S);for(let T=0;T<f.length;T++){const b=f[T];b.setSize&&b.setSize(M,S)}},this.setEffects=function(M){f=M,v=f.length>0&&f[0].isRenderPass===!0;const S=o.width,T=o.height;for(let b=0;b<f.length;b++){const A=f[b];A.setSize&&A.setSize(S,T)}},this.begin=function(M,S){if(g||M.toneMapping===Di&&f.length===0)return!1;if(x=S,S!==null){const T=S.width,b=S.height;(o.width!==T||o.height!==b)&&this.setSize(T,b)}return v===!1&&M.setRenderTarget(o),E=M.toneMapping,M.toneMapping=Di,!0},this.hasRenderPass=function(){return v},this.end=function(M,S){M.toneMapping=E,g=!0;let T=o,b=a;for(let A=0;A<f.length;A++){const y=f[A];if(y.enabled!==!1&&(y.render(M,b,T,S),y.needsSwap!==!1)){const C=T;T=b,b=C}}if(d!==M.outputColorSpace||m!==M.toneMapping){d=M.outputColorSpace,m=M.toneMapping,c.defines={},ut.getTransfer(d)===gt&&(c.defines.SRGB_TRANSFER="");const A=Ww[m];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(x),M.render(h,p),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const f_=new xn,kh=new Co(1,1),h_=new Ky,p_=new db,m_=new i_,C0=[],R0=[],P0=new Float32Array(16),D0=new Float32Array(9),F0=new Float32Array(4);function No(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=C0[r];if(s===void 0&&(s=new Float32Array(r),C0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Eu(t,e){let n=R0[e];n===void 0&&(n=new Int32Array(e),R0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function Kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;F0.set(i),t.uniformMatrix2fv(this.addr,!1,F0),jt(n,i)}}function Zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;D0.set(i),t.uniformMatrix3fv(this.addr,!1,D0),jt(n,i)}}function Qw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;P0.set(i),t.uniformMatrix4fv(this.addr,!1,P0),jt(n,i)}}function Jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function iA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(kh.compareFunction=n.isReversedDepthBuffer()?$p:Yp,s=kh):s=f_,n.setTexture2D(e||s,r)}function lA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||p_,r)}function cA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||m_,r)}function uA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||h_,r)}function dA(t){switch(t){case 5126:return Xw;case 35664:return qw;case 35665:return Yw;case 35666:return $w;case 35674:return Kw;case 35675:return Zw;case 35676:return Qw;case 5124:case 35670:return Jw;case 35667:case 35671:return eA;case 35668:case 35672:return tA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return rA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}function fA(t,e){t.uniform1fv(this.addr,e)}function hA(t,e){const n=No(e,this.size,2);t.uniform2fv(this.addr,n)}function pA(t,e){const n=No(e,this.size,3);t.uniform3fv(this.addr,n)}function mA(t,e){const n=No(e,this.size,4);t.uniform4fv(this.addr,n)}function gA(t,e){const n=No(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xA(t,e){const n=No(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vA(t,e){const n=No(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yA(t,e){t.uniform1iv(this.addr,e)}function _A(t,e){t.uniform2iv(this.addr,e)}function SA(t,e){t.uniform3iv(this.addr,e)}function MA(t,e){t.uniform4iv(this.addr,e)}function EA(t,e){t.uniform1uiv(this.addr,e)}function bA(t,e){t.uniform2uiv(this.addr,e)}function TA(t,e){t.uniform3uiv(this.addr,e)}function wA(t,e){t.uniform4uiv(this.addr,e)}function AA(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=kh:o=f_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function CA(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||p_,s[o])}function RA(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||m_,s[o])}function PA(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||h_,s[o])}function DA(t){switch(t){case 5126:return fA;case 35664:return hA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return xA;case 35676:return vA;case 5124:case 35670:return yA;case 35667:case 35671:return _A;case 35668:case 35672:return SA;case 35669:case 35673:return MA;case 5125:return EA;case 36294:return bA;case 36295:return TA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return CA;case 35680:case 36300:case 36308:case 36293:return RA;case 36289:case 36303:case 36311:case 36292:return PA}}class FA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dA(n.type)}}class IA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DA(n.type)}}class LA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function I0(t,e){t.seq.push(e),t.map[e.id]=e}function NA(t,e,n){const i=t.name,r=i.length;for(Bd.lastIndex=0;;){const s=Bd.exec(i),o=Bd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){I0(n,c===void 0?new FA(a,t,e):new IA(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new LA(a),I0(n,p)),n=p}}}class yc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);NA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function L0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UA=37297;let kA=0;function OA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const N0=new Qe;function BA(t){ut._getMatrix(N0,ut.workingColorSpace,t);const e=`mat3( ${N0.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case Kc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function U0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+OA(t.getShaderSource(e),a)}else return s}function zA(t,e){const n=BA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const VA={[Ly]:"Linear",[Ny]:"Reinhard",[Uy]:"Cineon",[ky]:"ACESFilmic",[By]:"AgX",[zy]:"Neutral",[Oy]:"Custom"};function HA(t,e){const n=VA[e];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $l=new z;function GA(){ut.getLuminanceCoefficients($l);const t=$l.x.toFixed(4),e=$l.y.toFixed(4),n=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function jA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function la(t){return t!==""}function k0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(t){return t.replace(qA,$A)}const YA=new Map;function $A(t,e){let n=rt[e];if(n===void 0){const i=YA.get(e);if(i!==void 0)n=rt[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oh(n)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(t){return t.replace(KA,ZA)}function ZA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function z0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const QA={[pc]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function JA(t){return QA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eC={[gs]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function tC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":eC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const nC={[Ao]:"ENVMAP_MODE_REFRACTION"};function iC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rC={[Iy]:"ENVMAP_BLENDING_MULTIPLY",[WE]:"ENVMAP_BLENDING_MIX",[jE]:"ENVMAP_BLENDING_ADD"};function sC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rC[t.combine]||"ENVMAP_BLENDING_NONE"}function oC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=JA(n),c=tC(n),h=iC(n),p=sC(n),d=oC(n),m=WA(n),g=jA(s),E=r.createProgram();let x,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(la).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(la).join(`
`),f.length>0&&(f+=`
`)):(x=[z0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),f=[z0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?rt.tonemapping_pars_fragment:"",n.toneMapping!==Di?HA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,zA("linearToOutputTexel",n.outputColorSpace),GA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),o=Oh(o),o=k0(o,n),o=O0(o,n),a=Oh(a),a=k0(a,n),a=O0(a,n),o=B0(o),a=B0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+x+o,S=v+f+a,T=L0(r,r.VERTEX_SHADER,M),b=L0(r,r.FRAGMENT_SHADER,S);r.attachShader(E,T),r.attachShader(E,b),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(D){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",$=r.getShaderInfoLog(T)||"",Q=r.getShaderInfoLog(b)||"",O=k.trim(),q=$.trim(),H=Q.trim();let L=!0,I=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,b);else{const X=U0(r,T,"vertex"),te=U0(r,b,"fragment");pt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+X+`
`+te)}else O!==""?We("WebGLProgram: Program Info Log:",O):(q===""||H==="")&&(I=!1);I&&(D.diagnostics={runnable:L,programLog:O,vertexShader:{log:q,prefix:x},fragmentShader:{log:H,prefix:f}})}r.deleteShader(T),r.deleteShader(b),y=new yc(r,E),C=XA(r,E)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,UA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=b,this}let lC=0;class cC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uC(e),n.set(e,i)),i}}class uC{constructor(e){this.id=lC++,this.code=e,this.usedTimes=0}}function dC(t){return t===xs||t===qc||t===Yc}function fC(t,e,n,i,r,s){const o=new Zy,a=new cC,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function E(y,C,P,D,k,$){const Q=D.fog,O=k.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,L=e.get(y.envMap||q,H),I=L&&L.mapping===vu?L.image.height:null,X=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&We("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=te!==void 0?te.length:0;let Xe=0;O.morphAttributes.position!==void 0&&(Xe=1),O.morphAttributes.normal!==void 0&&(Xe=2),O.morphAttributes.color!==void 0&&(Xe=3);let Ze,ze,G,se;if(X){const we=bi[X];Ze=we.vertexShader,ze=we.fragmentShader}else{Ze=y.vertexShader,ze=y.fragmentShader;const we=a.getVertexShaderStage(y),ke=a.getFragmentShaderStage(y);a.update(y,we,ke),G=we.id,se=ke.id}const ne=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),Re=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,Ae=!!y.map,Se=!!y.matcap,Ge=!!L,Ve=!!y.aoMap,Ce=!!y.lightMap,qe=!!y.bumpMap&&y.wireframe===!1,nt=!!y.normalMap,Je=!!y.displacementMap,Ue=!!y.emissiveMap,Fe=!!y.metalnessMap,Ye=!!y.roughnessMap,F=y.anisotropy>0,$e=y.clearcoat>0,Te=y.dispersion>0,R=y.iridescence>0,_=y.sheen>0,U=y.transmission>0,V=F&&!!y.anisotropyMap,K=$e&&!!y.clearcoatMap,oe=$e&&!!y.clearcoatNormalMap,le=$e&&!!y.clearcoatRoughnessMap,Z=R&&!!y.iridescenceMap,J=R&&!!y.iridescenceThicknessMap,ue=_&&!!y.sheenColorMap,Ie=_&&!!y.sheenRoughnessMap,pe=!!y.specularMap,he=!!y.specularColorMap,Le=!!y.specularIntensityMap,He=U&&!!y.transmissionMap,Be=U&&!!y.thicknessMap,N=!!y.gradientMap,de=!!y.alphaMap,ee=y.alphaTest>0,fe=!!y.alphaHash,me=!!y.extensions;let ie=Di;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ie=t.toneMapping);const ye={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:ze,defines:y.defines,customVertexShaderID:G,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:Re,instancingColor:Re&&k.instanceColor!==null,instancingMorph:Re&&k.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ae,matcap:Se,envMap:Ge,envMapMode:Ge&&L.mapping,envMapCubeUVHeight:I,aoMap:Ve,lightMap:Ce,bumpMap:qe,normalMap:nt,displacementMap:Je,emissiveMap:Ue,normalMapObjectSpace:nt&&y.normalMapType===YE,normalMapTangentSpace:nt&&y.normalMapType===Lh,packedNormalMap:nt&&y.normalMapType===Lh&&dC(y.normalMap.format),metalnessMap:Fe,roughnessMap:Ye,anisotropy:F,anisotropyMap:V,clearcoat:$e,clearcoatMap:K,clearcoatNormalMap:oe,clearcoatRoughnessMap:le,dispersion:Te,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:J,sheen:_,sheenColorMap:ue,sheenRoughnessMap:Ie,specularMap:pe,specularColorMap:he,specularIntensityMap:Le,transmission:U,transmissionMap:He,thicknessMap:Be,gradientMap:N,opaque:y.transparent===!1&&y.blending===fo&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:ee,alphaHash:fe,combine:y.combine,mapUv:Ae&&g(y.map.channel),aoMapUv:Ve&&g(y.aoMap.channel),lightMapUv:Ce&&g(y.lightMap.channel),bumpMapUv:qe&&g(y.bumpMap.channel),normalMapUv:nt&&g(y.normalMap.channel),displacementMapUv:Je&&g(y.displacementMap.channel),emissiveMapUv:Ue&&g(y.emissiveMap.channel),metalnessMapUv:Fe&&g(y.metalnessMap.channel),roughnessMapUv:Ye&&g(y.roughnessMap.channel),anisotropyMapUv:V&&g(y.anisotropyMap.channel),clearcoatMapUv:K&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(y.sheenRoughnessMap.channel),specularMapUv:pe&&g(y.specularMap.channel),specularColorMapUv:he&&g(y.specularColorMap.channel),specularIntensityMapUv:Le&&g(y.specularIntensityMap.channel),transmissionMapUv:He&&g(y.transmissionMap.channel),thicknessMapUv:Be&&g(y.thicknessMap.channel),alphaMapUv:de&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(nt||F),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Ae||de),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&nt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ce,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:Ue&&y.emissiveMap.isVideoTexture===!0&&ut.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wi,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function x(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)C.push(P),C.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(f(C,y),v(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function f(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function v(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){const C=m[y.type];let P;if(C){const D=bi[C];P=Fb.clone(D.uniforms)}else P=y.uniforms;return P}function S(y,C){let P=h.get(C);return P!==void 0?++P.usedTimes:(P=new aC(t,C,y,r),c.push(P),h.set(C,P)),P}function T(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function A(){a.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:A}}function hC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function V0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function H0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,g,E,x,f){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:E,renderOrder:d.renderOrder,z:x,group:f},t[e]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=g,v.materialVariant=o(d),v.groupOrder=E,v.renderOrder=d.renderOrder,v.z=x,v.group=f),e++,v}function l(d,m,g,E,x,f){const v=a(d,m,g,E,x,f);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):n.push(v)}function c(d,m,g,E,x,f){const v=a(d,m,g,E,x,f);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function h(d,m,g){n.length>1&&n.sort(d||pC),i.length>1&&i.sort(m||V0),r.length>1&&r.sort(m||V0),g&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let d=e,m=t.length;d<m;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function mC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new H0,t.set(i,[o])):r>=s.length?(o=new H0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new ot};break;case"SpotLight":n={position:new z,direction:new z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function xC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vC=0;function yC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _C(t){const e=new gC,n=xC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Ft,o=new Ft;function a(c){let h=0,p=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,g=0,E=0,x=0,f=0,v=0,M=0,S=0,T=0,b=0,A=0;c.sort(yC);for(let C=0,P=c.length;C<P;C++){const D=c[C],k=D.color,$=D.intensity,Q=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*$,p+=k.g*$,d+=k.b*$;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],$);A++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,L=n.get(D);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=O,i.directionalShadowMatrix[m]=D.shadow.matrix,v++}i.directional[m]=q,m++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(k).multiplyScalar($),q.distance=Q,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[E]=q;const H=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,H.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[E]=H.matrix,D.castShadow){const L=n.get(D);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,i.spotShadow[E]=L,i.spotShadowMap[E]=O,S++}E++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(k).multiplyScalar($),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=q,x++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const H=D.shadow,L=n.get(D);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,L.shadowCameraNear=H.camera.near,L.shadowCameraFar=H.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=q,g++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar($),q.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[f]=q,f++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==m||y.pointLength!==g||y.spotLength!==E||y.rectAreaLength!==x||y.hemiLength!==f||y.numDirectionalShadows!==v||y.numPointShadows!==M||y.numSpotShadows!==S||y.numSpotMaps!==T||y.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=x,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,y.directionalLength=m,y.pointLength=g,y.spotLength=E,y.rectAreaLength=x,y.hemiLength=f,y.numDirectionalShadows=v,y.numPointShadows=M,y.numSpotShadows=S,y.numSpotMaps=T,y.numLightProbes=A,i.version=vC++)}function l(c,h){let p=0,d=0,m=0,g=0,E=0;const x=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const M=c[f];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),p++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),o.identity(),s.copy(M.matrixWorld),s.premultiply(x),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),d++}else if(M.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(x),E++}}}return{setup:a,setupView:l,state:i}}function G0(t){const e=new _C(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function h(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function SC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new G0(t),e.set(r,[a])):s>=o.length?(a=new G0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const MC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bC=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],TC=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],W0=new Ft,Qo=new z,zd=new z;function wC(t,e,n){let i=new Qp;const r=new at,s=new at,o=new Pt,a=new Ub,l=new kb,c={},h=n.maxTextureSize,p={[Br]:An,[An]:Br,[wi]:wi},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:MC,fragmentShader:EC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new On(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let f=this.type;this.render=function(b,A,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===TE&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pc);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ji),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=f!==this.type;$&&A.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(O=>O.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,O=b.length;Q<O;Q++){const q=b[Q],H=q.shadow;if(H===void 0){We("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const L=H.getFrameExtents();r.multiply(L),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/L.x),r.x=s.x*L.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/L.y),r.y=s.y*L.y,H.mapSize.y=s.y));const I=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=I,H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===oa){if(q.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Fi(r.x,r.y,{format:xs,type:sr,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new Co(r.x,r.y,Ai),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=or,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt}else q.isPointLight?(H.map=new d_(r.x),H.map.depthTexture=new Pb(r.x,Ii)):(H.map=new Fi(r.x,r.y),H.map.depthTexture=new Co(r.x,r.y,Ii)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=or,this.type===pc?(H.map.depthTexture.compareFunction=I?$p:Yp,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt);H.camera.updateProjectionMatrix()}const X=H.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<X;te++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,te),t.clear();else{te===0&&(t.setRenderTarget(H.map),t.clear());const re=H.getViewport(te);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(o)}if(q.isPointLight){const re=H.camera,Xe=H.matrix,Ze=q.distance||re.far;Ze!==re.far&&(re.far=Ze,re.updateProjectionMatrix()),Qo.setFromMatrixPosition(q.matrixWorld),re.position.copy(Qo),zd.copy(re.position),zd.add(bC[te]),re.up.copy(TC[te]),re.lookAt(zd),re.updateMatrixWorld(),Xe.makeTranslation(-Qo.x,-Qo.y,-Qo.z),W0.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),H._frustum.setFromProjectionMatrix(W0,re.coordinateSystem,re.reversedDepth)}else H.updateMatrices(q);i=H.getFrustum(),S(A,y,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===oa&&v(H,y),H.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(C,P,D)};function v(b,A){const y=e.update(E);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fi(r.x,r.y,{format:xs,type:sr})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,y,d,E,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,y,m,E,null)}function M(b,A,y,C){let P=null;const D=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=y.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=P.uuid,$=A.uuid;let Q=c[k];Q===void 0&&(Q={},c[k]=Q);let O=Q[$];O===void 0&&(O=P.clone(),Q[$]=O,A.addEventListener("dispose",T)),P=O}if(P.visible=A.visible,P.wireframe=A.wireframe,C===oa?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:p[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=t.properties.get(P);k.light=y}return P}function S(b,A,y,C,P){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===oa)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const $=e.update(b),Q=b.material;if(Array.isArray(Q)){const O=$.groups;for(let q=0,H=O.length;q<H;q++){const L=O[q],I=Q[L.materialIndex];if(I&&I.visible){const X=M(b,I,C,P);b.onBeforeShadow(t,b,A,y,$,X,L),t.renderBufferDirect(y,null,$,X,b,L),b.onAfterShadow(t,b,A,y,$,X,L)}}}else if(Q.visible){const O=M(b,Q,C,P);b.onBeforeShadow(t,b,A,y,$,O,null),t.renderBufferDirect(y,null,$,O,b,null),b.onAfterShadow(t,b,A,y,$,O,null)}}const k=b.children;for(let $=0,Q=k.length;$<Q;$++)S(k[$],A,y,C,P)}function T(b){b.target.removeEventListener("dispose",T);for(const y in c){const C=c[y],P=b.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function AC(t,e){function n(){let N=!1;const de=new Pt;let ee=null;const fe=new Pt(0,0,0,0);return{setMask:function(me){ee!==me&&!N&&(t.colorMask(me,me,me,me),ee=me)},setLocked:function(me){N=me},setClear:function(me,ie,ye,we,ke){ke===!0&&(me*=we,ie*=we,ye*=we),de.set(me,ie,ye,we),fe.equals(de)===!1&&(t.clearColor(me,ie,ye,we),fe.copy(de))},reset:function(){N=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,ee=null,fe=null,me=null;return{setReversed:function(ie){if(de!==ie){const ye=e.get("EXT_clip_control");ie?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),de=ie;const we=me;me=null,this.setClear(we)}},getReversed:function(){return de},setTest:function(ie){ie?ne(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!N&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(de&&(ie=rb[ie]),fe!==ie){switch(ie){case $f:t.depthFunc(t.NEVER);break;case Kf:t.depthFunc(t.ALWAYS);break;case Zf:t.depthFunc(t.LESS);break;case wo:t.depthFunc(t.LEQUAL);break;case Qf:t.depthFunc(t.EQUAL);break;case Jf:t.depthFunc(t.GEQUAL);break;case eh:t.depthFunc(t.GREATER);break;case th:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){me!==ie&&(me=ie,de&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,ee=null,fe=null,me=null,de=!1}}}function r(){let N=!1,de=null,ee=null,fe=null,me=null,ie=null,ye=null,we=null,ke=null;return{setTest:function(et){N||(et?ne(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(et){de!==et&&!N&&(t.stencilMask(et),de=et)},setFunc:function(et,ni,Rn){(ee!==et||fe!==ni||me!==Rn)&&(t.stencilFunc(et,ni,Rn),ee=et,fe=ni,me=Rn)},setOp:function(et,ni,Rn){(ie!==et||ye!==ni||we!==Rn)&&(t.stencilOp(et,ni,Rn),ie=et,ye=ni,we=Rn)},setLocked:function(et){N=et},setClear:function(et){ke!==et&&(t.clearStencil(et),ke=et)},reset:function(){N=!1,de=null,ee=null,fe=null,me=null,ie=null,ye=null,we=null,ke=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},p={},d={},m=new WeakMap,g=[],E=null,x=!1,f=null,v=null,M=null,S=null,T=null,b=null,A=null,y=new ot(0,0,0),C=0,P=!1,D=null,k=null,$=null,Q=null,O=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,L=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(I)[1]),H=L>=1):I.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),H=L>=2);let X=null,te={};const re=t.getParameter(t.SCISSOR_BOX),Xe=t.getParameter(t.VIEWPORT),Ze=new Pt().fromArray(re),ze=new Pt().fromArray(Xe);function G(N,de,ee,fe){const me=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<ee;ye++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(de+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ie}const se={};se[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(wo),qe(!1),nt(Wg),ne(t.CULL_FACE),Ve(Ji);function ne(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function ce(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Re(N,de){return d[N]!==de?(t.bindFramebuffer(N,de),d[N]=de,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=de),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=de),!0):!1}function _e(N,de){let ee=g,fe=!1;if(N){ee=m.get(de),ee===void 0&&(ee=[],m.set(de,ee));const me=N.textures;if(ee.length!==me.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,ye=me.length;ie<ye;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=me.length,fe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ee)}function Ae(N){return E!==N?(t.useProgram(N),E=N,!0):!1}const Se={[Jr]:t.FUNC_ADD,[AE]:t.FUNC_SUBTRACT,[CE]:t.FUNC_REVERSE_SUBTRACT};Se[RE]=t.MIN,Se[PE]=t.MAX;const Ge={[DE]:t.ZERO,[FE]:t.ONE,[IE]:t.SRC_COLOR,[qf]:t.SRC_ALPHA,[BE]:t.SRC_ALPHA_SATURATE,[kE]:t.DST_COLOR,[NE]:t.DST_ALPHA,[LE]:t.ONE_MINUS_SRC_COLOR,[Yf]:t.ONE_MINUS_SRC_ALPHA,[OE]:t.ONE_MINUS_DST_COLOR,[UE]:t.ONE_MINUS_DST_ALPHA,[zE]:t.CONSTANT_COLOR,[VE]:t.ONE_MINUS_CONSTANT_COLOR,[HE]:t.CONSTANT_ALPHA,[GE]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(N,de,ee,fe,me,ie,ye,we,ke,et){if(N===Ji){x===!0&&(ce(t.BLEND),x=!1);return}if(x===!1&&(ne(t.BLEND),x=!0),N!==wE){if(N!==f||et!==P){if((v!==Jr||T!==Jr)&&(t.blendEquation(t.FUNC_ADD),v=Jr,T=Jr),et)switch(N){case fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.ONE,t.ONE);break;case jg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:pt("WebGLState: Invalid blending: ",N);break}else switch(N){case fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case jg:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xg:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",N);break}M=null,S=null,b=null,A=null,y.set(0,0,0),C=0,f=N,P=et}return}me=me||de,ie=ie||ee,ye=ye||fe,(de!==v||me!==T)&&(t.blendEquationSeparate(Se[de],Se[me]),v=de,T=me),(ee!==M||fe!==S||ie!==b||ye!==A)&&(t.blendFuncSeparate(Ge[ee],Ge[fe],Ge[ie],Ge[ye]),M=ee,S=fe,b=ie,A=ye),(we.equals(y)===!1||ke!==C)&&(t.blendColor(we.r,we.g,we.b,ke),y.copy(we),C=ke),f=N,P=!1}function Ce(N,de){N.side===wi?ce(t.CULL_FACE):ne(t.CULL_FACE);let ee=N.side===An;de&&(ee=!ee),qe(ee),N.blending===fo&&N.transparent===!1?Ve(Ji):Ve(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const fe=N.stencilWrite;a.setTest(fe),fe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(N){D!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),D=N)}function nt(N){N!==EE?(ne(t.CULL_FACE),N!==k&&(N===Wg?t.cullFace(t.BACK):N===bE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),k=N}function Je(N){N!==$&&(H&&t.lineWidth(N),$=N)}function Ue(N,de,ee){N?(ne(t.POLYGON_OFFSET_FILL),(Q!==de||O!==ee)&&(Q=de,O=ee,o.getReversed()&&(de=-de),t.polygonOffset(de,ee))):ce(t.POLYGON_OFFSET_FILL)}function Fe(N){N?ne(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function Ye(N){N===void 0&&(N=t.TEXTURE0+q-1),X!==N&&(t.activeTexture(N),X=N)}function F(N,de,ee){ee===void 0&&(X===null?ee=t.TEXTURE0+q-1:ee=X);let fe=te[ee];fe===void 0&&(fe={type:void 0,texture:void 0},te[ee]=fe),(fe.type!==N||fe.texture!==de)&&(X!==ee&&(t.activeTexture(ee),X=ee),t.bindTexture(N,de||se[N]),fe.type=N,fe.texture=de)}function $e(){const N=te[X];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Te(){try{t.compressedTexImage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function _(){try{t.texSubImage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function U(){try{t.texSubImage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function oe(){try{t.texStorage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function le(){try{t.texStorage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function Z(){try{t.texImage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function J(){try{t.texImage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function ue(N){return p[N]!==void 0?p[N]:t.getParameter(N)}function Ie(N,de){p[N]!==de&&(t.pixelStorei(N,de),p[N]=de)}function pe(N){Ze.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ze.copy(N))}function he(N){ze.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ze.copy(N))}function Le(N,de){let ee=c.get(de);ee===void 0&&(ee=new WeakMap,c.set(de,ee));let fe=ee.get(N);fe===void 0&&(fe=t.getUniformBlockIndex(de,N.name),ee.set(N,fe))}function He(N,de){const fe=c.get(de).get(N);l.get(de)!==fe&&(t.uniformBlockBinding(de,fe,N.__bindingPointIndex),l.set(de,fe))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},X=null,te={},d={},m=new WeakMap,g=[],E=null,x=!1,f=null,v=null,M=null,S=null,T=null,b=null,A=null,y=new ot(0,0,0),C=0,P=!1,D=null,k=null,$=null,Q=null,O=null,Ze.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ce,bindFramebuffer:Re,drawBuffers:_e,useProgram:Ae,setBlending:Ve,setMaterial:Ce,setFlipSided:qe,setCullFace:nt,setLineWidth:Je,setPolygonOffset:Ue,setScissorTest:Fe,activeTexture:Ye,bindTexture:F,unbindTexture:$e,compressedTexImage2D:Te,compressedTexImage3D:R,texImage2D:Z,texImage3D:J,pixelStorei:Ie,getParameter:ue,updateUBOMapping:Le,uniformBlockBinding:He,texStorage2D:oe,texStorage3D:le,texSubImage2D:_,texSubImage3D:U,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:pe,viewport:he,reset:Be}}function CC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,p=new Set;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,_){return g?new OffscreenCanvas(R,_):Zc("canvas")}function x(R,_,U){let V=1;const K=Te(R);if((K.width>U||K.height>U)&&(V=U/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(V*K.width),le=Math.floor(V*K.height);d===void 0&&(d=E(oe,le));const Z=_?E(oe,le):d;return Z.width=oe,Z.height=le,Z.getContext("2d").drawImage(R,0,0,oe,le),We("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+oe+"x"+le+")."),Z}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,_,U,V,K,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;V&&(le=e.get("EXT_texture_norm16"),le||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===t.RED&&(U===t.FLOAT&&(Z=t.R32F),U===t.HALF_FLOAT&&(Z=t.R16F),U===t.UNSIGNED_BYTE&&(Z=t.R8),U===t.UNSIGNED_SHORT&&le&&(Z=le.R16_EXT),U===t.SHORT&&le&&(Z=le.R16_SNORM_EXT)),_===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.R8UI),U===t.UNSIGNED_SHORT&&(Z=t.R16UI),U===t.UNSIGNED_INT&&(Z=t.R32UI),U===t.BYTE&&(Z=t.R8I),U===t.SHORT&&(Z=t.R16I),U===t.INT&&(Z=t.R32I)),_===t.RG&&(U===t.FLOAT&&(Z=t.RG32F),U===t.HALF_FLOAT&&(Z=t.RG16F),U===t.UNSIGNED_BYTE&&(Z=t.RG8),U===t.UNSIGNED_SHORT&&le&&(Z=le.RG16_EXT),U===t.SHORT&&le&&(Z=le.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RG8UI),U===t.UNSIGNED_SHORT&&(Z=t.RG16UI),U===t.UNSIGNED_INT&&(Z=t.RG32UI),U===t.BYTE&&(Z=t.RG8I),U===t.SHORT&&(Z=t.RG16I),U===t.INT&&(Z=t.RG32I)),_===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),U===t.UNSIGNED_INT&&(Z=t.RGB32UI),U===t.BYTE&&(Z=t.RGB8I),U===t.SHORT&&(Z=t.RGB16I),U===t.INT&&(Z=t.RGB32I)),_===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),U===t.UNSIGNED_INT&&(Z=t.RGBA32UI),U===t.BYTE&&(Z=t.RGBA8I),U===t.SHORT&&(Z=t.RGBA16I),U===t.INT&&(Z=t.RGBA32I)),_===t.RGB&&(U===t.UNSIGNED_SHORT&&le&&(Z=le.RGB16_EXT),U===t.SHORT&&le&&(Z=le.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),_===t.RGBA){const J=oe?Kc:ut.getTransfer(K);U===t.FLOAT&&(Z=t.RGBA32F),U===t.HALF_FLOAT&&(Z=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Z=J===gt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&le&&(Z=le.RGBA16_EXT),U===t.SHORT&&le&&(Z=le.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(R,_){let U;return R?_===null||_===Ii||_===Va?U=t.DEPTH24_STENCIL8:_===Ai?U=t.DEPTH32F_STENCIL8:_===za&&(U=t.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ii||_===Va?U=t.DEPTH_COMPONENT24:_===Ai?U=t.DEPTH_COMPONENT32F:_===za&&(U=t.DEPTH_COMPONENT16),U}function b(R,_){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function A(R){const _=R.target;_.removeEventListener("dispose",A),C(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(R){const _=R.target;_.removeEventListener("dispose",y),D(_)}function C(R){const _=i.get(R);if(_.__webglInit===void 0)return;const U=R.source,V=m.get(U);if(V){const K=V[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(R),Object.keys(V).length===0&&m.delete(U)}i.remove(R)}function P(R){const _=i.get(R);t.deleteTexture(_.__webglTexture);const U=R.source,V=m.get(U);delete V[_.__cacheKey],o.memory.textures--}function D(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let K=0;K<_.__webglFramebuffer[V].length;K++)t.deleteFramebuffer(_.__webglFramebuffer[V][K]);else t.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)t.deleteFramebuffer(_.__webglFramebuffer[V]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=R.textures;for(let V=0,K=U.length;V<K;V++){const oe=i.get(U[V]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(U[V])}i.remove(R)}let k=0;function $(){k=0}function Q(){return k}function O(R){k=R}function q(){const R=k;return R>=r.maxTextures&&We("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function H(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function L(R,_){const U=i.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const V=R.image;if(V===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(U,R,_);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+_)}function I(R,_){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ce(U,R,_);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+_)}function X(R,_){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ce(U,R,_);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+_)}function te(R,_){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){Re(U,R,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+_)}const re={[nh]:t.REPEAT,[$i]:t.CLAMP_TO_EDGE,[ih]:t.MIRRORED_REPEAT},Xe={[Jt]:t.NEAREST,[XE]:t.NEAREST_MIPMAP_NEAREST,[wl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[ld]:t.LINEAR_MIPMAP_NEAREST,[rs]:t.LINEAR_MIPMAP_LINEAR},Ze={[$E]:t.NEVER,[eb]:t.ALWAYS,[KE]:t.LESS,[Yp]:t.LEQUAL,[ZE]:t.EQUAL,[$p]:t.GEQUAL,[QE]:t.GREATER,[JE]:t.NOTEQUAL};function ze(R,_){if(_.type===Ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===ld||_.magFilter===wl||_.magFilter===rs||_.minFilter===dn||_.minFilter===ld||_.minFilter===wl||_.minFilter===rs)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,re[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,re[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,re[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Xe[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Xe[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ze[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jt||_.minFilter!==wl&&_.minFilter!==rs||_.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function G(R,_){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",A));const V=_.source;let K=m.get(V);K===void 0&&(K={},m.set(V,K));const oe=H(_);if(oe!==R.__cacheKey){K[oe]===void 0&&(K[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[oe].usedTimes++;const le=K[R.__cacheKey];le!==void 0&&(K[R.__cacheKey].usedTimes--,le.usedTimes===0&&P(_)),R.__cacheKey=oe,R.__webglTexture=K[oe].texture}return U}function se(R,_,U){return Math.floor(Math.floor(R/U)/_)}function ne(R,_,U,V){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,U,V,_.data);else{oe.sort((Ie,pe)=>Ie.start-pe.start);let le=0;for(let Ie=1;Ie<oe.length;Ie++){const pe=oe[le],he=oe[Ie],Le=pe.start+pe.count,He=se(he.start,_.width,4),Be=se(pe.start,_.width,4);he.start<=Le+1&&He===Be&&se(he.start+he.count-1,_.width,4)===He?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++le,oe[le]=he)}oe.length=le+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ie=0,pe=oe.length;Ie<pe;Ie++){const he=oe[Ie],Le=Math.floor(he.start/4),He=Math.ceil(he.count/4),Be=Le%_.width,N=Math.floor(Le/_.width),de=He,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Be,N,de,ee,U,V,_.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function ce(R,_,U){let V=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=t.TEXTURE_3D);const K=G(R,_),oe=_.source;n.bindTexture(V,R.__webglTexture,t.TEXTURE0+U);const le=i.get(oe);if(oe.version!==le.__version||K===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ee=ut.getPrimaries(ut.workingColorSpace),fe=_.colorSpace===Er?null:ut.getPrimaries(_.colorSpace),me=_.colorSpace===Er||ee===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let J=x(_.image,!1,r.maxTextureSize);J=$e(_,J);const ue=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type);let pe=S(_.internalFormat,ue,Ie,_.normalized,_.colorSpace,_.isVideoTexture);ze(V,_);let he;const Le=_.mipmaps,He=_.isVideoTexture!==!0,Be=le.__version===void 0||K===!0,N=oe.dataReady,de=b(_,J);if(_.isDepthTexture)pe=T(_.format===ss,_.type),Be&&(He?n.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,ue,Ie,null));else if(_.isDataTexture)if(Le.length>0){He&&Be&&n.texStorage2D(t.TEXTURE_2D,de,pe,Le[0].width,Le[0].height);for(let ee=0,fe=Le.length;ee<fe;ee++)he=Le[ee],He?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ue,Ie,he.data):n.texImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,ue,Ie,he.data);_.generateMipmaps=!1}else He?(Be&&n.texStorage2D(t.TEXTURE_2D,de,pe,J.width,J.height),N&&ne(_,J,ue,Ie)):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,ue,Ie,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,pe,Le[0].width,Le[0].height,J.depth);for(let ee=0,fe=Le.length;ee<fe;ee++)if(he=Le[ee],_.format!==pi)if(ue!==null)if(He){if(N)if(_.layerUpdates.size>0){const me=S0(he.width,he.height,_.format,_.type);for(const ie of _.layerUpdates){const ye=he.data.subarray(ie*me/he.data.BYTES_PER_ELEMENT,(ie+1)*me/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,he.width,he.height,1,ue,ye)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ue,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,pe,he.width,he.height,J.depth,0,he.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ue,Ie,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,pe,he.width,he.height,J.depth,0,ue,Ie,he.data)}else{He&&Be&&n.texStorage2D(t.TEXTURE_2D,de,pe,Le[0].width,Le[0].height);for(let ee=0,fe=Le.length;ee<fe;ee++)he=Le[ee],_.format!==pi?ue!==null?He?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ue,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,he.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ue,Ie,he.data):n.texImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,ue,Ie,he.data)}else if(_.isDataArrayTexture)if(He){if(Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,pe,J.width,J.height,J.depth),N)if(_.layerUpdates.size>0){const ee=S0(J.width,J.height,_.format,_.type);for(const fe of _.layerUpdates){const me=J.data.subarray(fe*ee/J.data.BYTES_PER_ELEMENT,(fe+1)*ee/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,J.width,J.height,1,ue,Ie,me)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,Ie,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,ue,Ie,J.data);else if(_.isData3DTexture)He?(Be&&n.texStorage3D(t.TEXTURE_3D,de,pe,J.width,J.height,J.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,Ie,J.data)):n.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,ue,Ie,J.data);else if(_.isFramebufferTexture){if(Be)if(He)n.texStorage2D(t.TEXTURE_2D,de,pe,J.width,J.height);else{let ee=J.width,fe=J.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,pe,ee,fe,0,ue,Ie,null),ee>>=1,fe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),J.parentNode!==ee){ee.appendChild(J),p.add(_),ee.onpaint=fe=>{const me=fe.changedElements;for(const ie of p)me.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const me=t.RGBA,ie=t.RGBA,ye=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,me,ie,ye,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(He&&Be){const ee=Te(Le[0]);n.texStorage2D(t.TEXTURE_2D,de,pe,ee.width,ee.height)}for(let ee=0,fe=Le.length;ee<fe;ee++)he=Le[ee],He?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue,Ie,he):n.texImage2D(t.TEXTURE_2D,ee,pe,ue,Ie,he);_.generateMipmaps=!1}else if(He){if(Be){const ee=Te(J);n.texStorage2D(t.TEXTURE_2D,de,pe,ee.width,ee.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Ie,J)}else n.texImage2D(t.TEXTURE_2D,0,pe,ue,Ie,J);f(_)&&v(V),le.__version=oe.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Re(R,_,U){if(_.image.length!==6)return;const V=G(R,_),K=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+U);const oe=i.get(K);if(K.version!==oe.__version||V===!0){n.activeTexture(t.TEXTURE0+U);const le=ut.getPrimaries(ut.workingColorSpace),Z=_.colorSpace===Er?null:ut.getPrimaries(_.colorSpace),J=_.colorSpace===Er||le===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Ie=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!ue&&!Ie?pe[ie]=x(_.image[ie],!0,r.maxCubemapSize):pe[ie]=Ie?_.image[ie].image:_.image[ie],pe[ie]=$e(_,pe[ie]);const he=pe[0],Le=s.convert(_.format,_.colorSpace),He=s.convert(_.type),Be=S(_.internalFormat,Le,He,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,de=oe.__version===void 0||V===!0,ee=K.dataReady;let fe=b(_,he);ze(t.TEXTURE_CUBE_MAP,_);let me;if(ue){N&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Be,he.width,he.height);for(let ie=0;ie<6;ie++){me=pe[ie].mipmaps;for(let ye=0;ye<me.length;ye++){const we=me[ye];_.format!==pi?Le!==null?N?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,we.width,we.height,Le,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,Be,we.width,we.height,0,we.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,we.width,we.height,Le,He,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,Be,we.width,we.height,0,Le,He,we.data)}}}else{if(me=_.mipmaps,N&&de){me.length>0&&fe++;const ie=Te(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Be,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ie){N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Le,He,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,pe[ie].width,pe[ie].height,0,Le,He,pe[ie].data);for(let ye=0;ye<me.length;ye++){const ke=me[ye].image[ie].image;N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,ke.width,ke.height,Le,He,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,Be,ke.width,ke.height,0,Le,He,ke.data)}}else{N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,He,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,Le,He,pe[ie]);for(let ye=0;ye<me.length;ye++){const we=me[ye];N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,Le,He,we.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,Be,Le,He,we.image[ie])}}}f(_)&&v(t.TEXTURE_CUBE_MAP),oe.__version=K.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function _e(R,_,U,V,K,oe){const le=s.convert(U.format,U.colorSpace),Z=s.convert(U.type),J=S(U.internalFormat,le,Z,U.normalized,U.colorSpace),ue=i.get(_),Ie=i.get(U);if(Ie.__renderTarget=_,!ue.__hasExternalTextures){const pe=Math.max(1,_.width>>oe),he=Math.max(1,_.height>>oe);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,oe,J,pe,he,_.depth,0,le,Z,null):n.texImage2D(K,oe,J,pe,he,0,le,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ye(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,K,Ie.__webglTexture,0,Fe(_)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,K,Ie.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(R,_,U){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const V=_.depthTexture,K=V&&V.isDepthTexture?V.type:null,oe=T(_.stencilBuffer,K),le=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ye(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe(_),oe,_.width,_.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe(_),oe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,oe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,R)}else{const V=_.textures;for(let K=0;K<V.length;K++){const oe=V[K],le=s.convert(oe.format,oe.colorSpace),Z=s.convert(oe.type),J=S(oe.internalFormat,le,Z,oe.normalized,oe.colorSpace);Ye(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe(_),J,_.width,_.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe(_),J,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,J,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(R,_,U){const V=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ze(t.TEXTURE_CUBE_MAP,_.depthTexture);const ue=s.convert(_.depthTexture.format),Ie=s.convert(_.depthTexture.type);let pe;_.depthTexture.format===or?pe=t.DEPTH_COMPONENT24:_.depthTexture.format===ss&&(pe=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pe,_.width,_.height,0,ue,Ie,null)}}else L(_.depthTexture,0);const oe=K.__webglTexture,le=Fe(_),Z=V?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,J=_.depthTexture.format===ss?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===or)Ye(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Z,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,J,Z,oe,0);else if(_.depthTexture.format===ss)Ye(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Z,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,J,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(R){const _=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=V}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let V=0;V<6;V++)Se(_.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?Se(_.__webglFramebuffer[0],R,0):Se(_.__webglFramebuffer,R,0)}else if(U){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=t.createRenderbuffer(),Ae(_.__webglDepthbuffer[V],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ae(_.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(R,_,U){const V=i.get(R);_!==void 0&&_e(V.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ge(R)}function Ce(R){const _=R.texture,U=i.get(R),V=i.get(_);R.addEventListener("dispose",y);const K=R.textures,oe=R.isWebGLCubeRenderTarget===!0,le=K.length>1;if(le||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=_.version,o.memory.textures++),oe){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let J=0;J<_.mipmaps.length;J++)U.__webglFramebuffer[Z][J]=t.createFramebuffer()}else U.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)U.__webglFramebuffer[Z]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(le)for(let Z=0,J=K.length;Z<J;Z++){const ue=i.get(K[Z]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ye(R)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const J=K[Z];U.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);const ue=s.convert(J.format,J.colorSpace),Ie=s.convert(J.type),pe=S(J.internalFormat,ue,Ie,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),he=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(U.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),ze(t.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)_e(U.__webglFramebuffer[Z][J],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else _e(U.__webglFramebuffer[Z],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let Z=0,J=K.length;Z<J;Z++){const ue=K[Z],Ie=i.get(ue);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ie.__webglTexture),ze(pe,ue),_e(U.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+Z,pe,0),f(ue)&&v(pe)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,V.__webglTexture),ze(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)_e(U.__webglFramebuffer[J],R,_,t.COLOR_ATTACHMENT0,Z,J);else _e(U.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,Z,0);f(_)&&v(Z),n.unbindTexture()}R.depthBuffer&&Ge(R)}function qe(R){const _=R.textures;for(let U=0,V=_.length;U<V;U++){const K=_[U];if(f(K)){const oe=M(R),le=i.get(K).__webglTexture;n.bindTexture(oe,le),v(oe),n.unbindTexture()}}}const nt=[],Je=[];function Ue(R){if(R.samples>0){if(Ye(R)===!1){const _=R.textures,U=R.width,V=R.height;let K=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),Z=_.length>1;if(Z)for(let ue=0;ue<_.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Ie=i.get(_[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,U,V,0,0,U,V,K,t.NEAREST),l===!0&&(nt.length=0,Je.length=0,nt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(oe),Je.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ue=0;ue<_.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Ie=i.get(_[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Fe(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(R){const _=o.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function $e(R,_){const U=R.colorSpace,V=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==$c&&U!==Er&&(ut.getTransfer(U)===gt?(V!==pi||K!==Un)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",U)),_}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=O,this.setTexture2D=L,this.setTexture2DArray=I,this.setTexture3D=X,this.setTextureCube=te,this.rebindTextures=Ve,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RC(t,e){function n(i,r=Er){let s;const o=ut.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===Gp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hy)return t.BYTE;if(i===Gy)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===Hp)return t.INT;if(i===Ii)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===sr)return t.HALF_FLOAT;if(i===Xy)return t.ALPHA;if(i===qy)return t.RGB;if(i===pi)return t.RGBA;if(i===or)return t.DEPTH_COMPONENT;if(i===ss)return t.DEPTH_STENCIL;if(i===Yy)return t.RED;if(i===jp)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===Xp)return t.RG_INTEGER;if(i===qp)return t.RGBA_INTEGER;if(i===mc||i===gc||i===xc||i===vc)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===ch||i===uh||i===dh||i===fh||i===qc||i===hh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===ch)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===dh)return s.COMPRESSED_R11_EAC;if(i===fh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===qc)return s.COMPRESSED_RG11_EAC;if(i===hh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ph||i===mh||i===gh||i===xh||i===vh||i===yh||i===_h||i===Sh||i===Mh||i===Eh||i===bh||i===Th||i===wh||i===Ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ph)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_h)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Th)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ah)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ch||i===Rh||i===Ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ch)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dh||i===Fh||i===Yc||i===Ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const PC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new r_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:PC,fragmentShader:DC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new On(new Su(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IC extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,m=null,g=null;const E=typeof XRWebGLBinding<"u",x=new FC,f={},v=n.getContextAttributes();let M=null,S=null;const T=[],b=[],A=new at;let y=null;const C=new Nn;C.viewport=new Pt;const P=new Nn;P.viewport=new Pt;const D=[C,P],k=new Hb;let $=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let se=T[G];return se===void 0&&(se=new gd,T[G]=se),se.getTargetRaySpace()},this.getControllerGrip=function(G){let se=T[G];return se===void 0&&(se=new gd,T[G]=se),se.getGripSpace()},this.getHand=function(G){let se=T[G];return se===void 0&&(se=new gd,T[G]=se),se.getHandSpace()};function O(G){const se=b.indexOf(G.inputSource);if(se===-1)return;const ne=T[se];ne!==void 0&&(ne.update(G.inputSource,G.frame,c||o),ne.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",H);for(let G=0;G<T.length;G++){const se=b[G];se!==null&&(b[G]=null,T[G].disconnect(se))}$=null,Q=null,x.reset();for(const G in f)delete f[G];e.setRenderTarget(M),m=null,d=null,p=null,r=null,S=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ce=null,Re=null;v.depth&&(Re=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=v.stencil?ss:or,ce=v.stencil?Va:Ii);const _e={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Fi(d.textureWidth,d.textureHeight,{format:pi,type:Un,depthTexture:new Co(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Fi(m.framebufferWidth,m.framebufferHeight,{format:pi,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(G){for(let se=0;se<G.removed.length;se++){const ne=G.removed[se],ce=b.indexOf(ne);ce>=0&&(b[ce]=null,T[ce].disconnect(ne))}for(let se=0;se<G.added.length;se++){const ne=G.added[se];let ce=b.indexOf(ne);if(ce===-1){for(let _e=0;_e<T.length;_e++)if(_e>=b.length){b.push(ne),ce=_e;break}else if(b[_e]===null){b[_e]=ne,ce=_e;break}if(ce===-1)break}const Re=T[ce];Re&&Re.connect(ne)}}const L=new z,I=new z;function X(G,se,ne){L.setFromMatrixPosition(se.matrixWorld),I.setFromMatrixPosition(ne.matrixWorld);const ce=L.distanceTo(I),Re=se.projectionMatrix.elements,_e=ne.projectionMatrix.elements,Ae=Re[14]/(Re[10]-1),Se=Re[14]/(Re[10]+1),Ge=(Re[9]+1)/Re[5],Ve=(Re[9]-1)/Re[5],Ce=(Re[8]-1)/Re[0],qe=(_e[8]+1)/_e[0],nt=Ae*Ce,Je=Ae*qe,Ue=ce/(-Ce+qe),Fe=Ue*-Ce;if(se.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(Ue),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Re[10]===-1)G.projectionMatrix.copy(se.projectionMatrix),G.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ye=Ae+Ue,F=Se+Ue,$e=nt-Fe,Te=Je+(ce-Fe),R=Ge*Se/F*Ye,_=Ve*Se/F*Ye;G.projectionMatrix.makePerspective($e,Te,R,_,Ye,F),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function te(G,se){se===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(se.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let se=G.near,ne=G.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(ne=x.depthFar)),k.near=P.near=C.near=se,k.far=P.far=C.far=ne,($!==k.near||Q!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),$=k.near,Q=k.far),k.layers.mask=G.layers.mask|6,C.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;const ce=G.parent,Re=k.cameras;te(k,ce);for(let _e=0;_e<Re.length;_e++)te(Re[_e],ce);Re.length===2?X(k,C,P):k.projectionMatrix.copy(C.projectionMatrix),re(G,k,ce)};function re(G,se,ne){ne===null?G.matrix.copy(se.matrixWorld):(G.matrix.copy(ne.matrixWorld),G.matrix.invert(),G.matrix.multiply(se.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(se.projectionMatrix),G.projectionMatrixInverse.copy(se.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Nh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function(G){return f[G]};let Xe=null;function Ze(G,se){if(h=se.getViewerPose(c||o),g=se,h!==null){const ne=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ce=!1;ne.length!==k.cameras.length&&(k.cameras.length=0,ce=!0);for(let Se=0;Se<ne.length;Se++){const Ge=ne[Se];let Ve=null;if(m!==null)Ve=m.getViewport(Ge);else{const qe=p.getViewSubImage(d,Ge);Ve=qe.viewport,Se===0&&(e.setRenderTargetTextures(S,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(S))}let Ce=D[Se];Ce===void 0&&(Ce=new Nn,Ce.layers.enable(Se),Ce.viewport=new Pt,D[Se]=Ce),Ce.matrix.fromArray(Ge.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ge.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Se===0&&(k.matrix.copy(Ce.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ce===!0&&k.cameras.push(Ce)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Se=p.getDepthInformation(ne[0]);Se&&Se.isValid&&Se.texture&&x.init(Se,r.renderState)}if(Re&&Re.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let Se=0;Se<ne.length;Se++){const Ge=ne[Se].camera;if(Ge){let Ve=f[Ge];Ve||(Ve=new r_,f[Ge]=Ve);const Ce=p.getCameraImage(Ge);Ve.sourceTexture=Ce}}}}for(let ne=0;ne<T.length;ne++){const ce=b[ne],Re=T[ne];ce!==null&&Re!==void 0&&Re.update(ce,se,c||o)}Xe&&Xe(G,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const ze=new c_;ze.setAnimationLoop(Ze),this.setAnimationLoop=function(G){Xe=G},this.dispose=function(){}}}const LC=new Ft,g_=new Qe;g_.set(-1,0,0,0,1,0,0,0,1);function NC(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,s_(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,v,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),p(x,f)):f.isMeshPhongMaterial?(s(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),d(x,f),f.isMeshPhysicalMaterial&&m(x,f,S)):f.isMeshMatcapMaterial?(s(x,f),g(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),E(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?l(x,f,v,M):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===An&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===An&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,S=v.envMapRotation;M&&(x.envMap.value=M,x.envMapRotation.value.setFromMatrix4(LC.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(g_),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,v,M){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*v,x.scale.value=M*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,v){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function E(x,f){const v=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const b=T.program;i.uniformBlockBinding(S,b)}function c(S,T){let b=r[S.id];b===void 0&&(x(S),b=h(S),r[S.id]=b,S.addEventListener("dispose",v));const A=T.program;i.updateUBOMapping(S,A);const y=e.render.frame;s[S.id]!==y&&(d(S),s[S.id]=y)}function h(S){const T=p();S.__bindingPointIndex=T;const b=t.createBuffer(),A=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,A,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function p(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=r[S.id],b=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let y=0,C=b.length;y<C;y++){const P=b[y];if(Array.isArray(P))for(let D=0,k=P.length;D<k;D++)m(P[D],y,D,A);else m(P,y,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,T,b,A){if(E(S,T,b,A)===!0){const y=S.__offset,C=S.value;if(Array.isArray(C)){let P=0;for(let D=0;D<C.length;D++){const k=C[D],$=f(k);g(k,S.__data,P),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function g(S,T,b){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,b)}function E(S,T,b,A){const y=S.value,C=T+"_"+b;if(A[C]===void 0)return typeof y=="number"||typeof y=="boolean"?A[C]=y:ArrayBuffer.isView(y)?A[C]=y.slice():A[C]=y.clone(),!0;{const P=A[C];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return A[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function x(S){const T=S.uniforms;let b=0;const A=16;for(let C=0,P=T.length;C<P;C++){const D=Array.isArray(T[C])?T[C]:[T[C]];for(let k=0,$=D.length;k<$;k++){const Q=D[k],O=Array.isArray(Q.value)?Q.value:[Q.value];for(let q=0,H=O.length;q<H;q++){const L=O[q],I=f(L),X=b%A,te=X%I.boundary,re=X+te;b+=te,re!==0&&A-re<I.storage&&(b+=A-re),Q.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=I.storage}}}const y=b%A;return y>0&&(b+=A-y),S.__size=b,S.__cache={},this}function f(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):We("WebGLRenderer: Unsupported uniform value type.",S),T}function v(S){const T=S.target;T.removeEventListener("dispose",v);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}const kC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function OC(){return Mi===null&&(Mi=new Tb(kC,16,16,xs,sr),Mi.name="DFG_LUT",Mi.minFilter=dn,Mi.magFilter=dn,Mi.wrapS=$i,Mi.wrapT=$i,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class BC{constructor(e={}){const{canvas:n=nb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const E=m,x=new Set([qp,Xp,jp]),f=new Set([Un,Ii,za,Va,Gp,Wp]),v=new Uint32Array(4),M=new Int32Array(4),S=new z;let T=null,b=null;const A=[],y=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,k=null,$=null,Q=null,O=null;this._outputColorSpace=qn;let q=0,H=0,L=null,I=-1,X=null;const te=new Pt,re=new Pt;let Xe=null;const Ze=new ot(0);let ze=0,G=n.width,se=n.height,ne=1,ce=null,Re=null;const _e=new Pt(0,0,G,se),Ae=new Pt(0,0,G,se);let Se=!1;const Ge=new Qp;let Ve=!1,Ce=!1;const qe=new Ft,nt=new z,Je=new Pt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ye(){return L===null?ne:1}let F=i;function $e(w,B){return n.getContext(w,B)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vp}`),n.addEventListener("webglcontextlost",ke,!1),n.addEventListener("webglcontextrestored",et,!1),n.addEventListener("webglcontextcreationerror",ni,!1),F===null){const B="webgl2";if(F=$e(B,w),F===null)throw $e(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw pt("WebGLRenderer: "+w.message),w}let Te,R,_,U,V,K,oe,le,Z,J,ue,Ie,pe,he,Le,He,Be,N,de,ee,fe,me,ie;function ye(){Te=new Ow(F),Te.init(),fe=new RC(F,Te),R=new Pw(F,Te,e,fe),_=new AC(F,Te),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),$=F.createFramebuffer(),Q=F.createFramebuffer(),O=F.createFramebuffer(),U=new Vw(F),V=new hC,K=new CC(F,Te,_,V,R,fe,U),oe=new kw(P),le=new jb(F),me=new Cw(F,le),Z=new Bw(F,le,U,me),J=new Gw(F,Z,le,me,U),N=new Hw(F,R,K),Le=new Dw(V),ue=new fC(P,oe,Te,R,me,Le),Ie=new NC(P,V),pe=new mC,he=new SC(Te),Be=new Aw(P,oe,_,J,g,l),He=new wC(P,J,R),ie=new UC(F,U,R,_),de=new Rw(F,Te,U),ee=new zw(F,Te,U),U.programs=ue.programs,P.capabilities=R,P.extensions=Te,P.properties=V,P.renderLists=pe,P.shadowMap=He,P.state=_,P.info=U}ye(),E!==Un&&(C=new jw(E,n.width,n.height,a,r,s));const we=new IC(P,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(G,se,!1))},this.getSize=function(w){return w.set(G,se)},this.setSize=function(w,B,Y=!0){if(we.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,se=B,n.width=Math.floor(w*ne),n.height=Math.floor(B*ne),Y===!0&&(n.style.width=w+"px",n.style.height=B+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(G*ne,se*ne).floor()},this.setDrawingBufferSize=function(w,B,Y){G=w,se=B,ne=Y,n.width=Math.floor(w*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(E===Un){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(te)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,B,Y,W){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,B,Y,W),_.viewport(te.copy(_e).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(Ae)},this.setScissor=function(w,B,Y,W){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,B,Y,W),_.scissor(re.copy(Ae).multiplyScalar(ne).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){_.setScissorTest(Se=w)},this.setOpaqueSort=function(w){ce=w},this.setTransparentSort=function(w){Re=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,Y=!0){let W=0;if(w){let j=!1;if(L!==null){const ve=L.texture.format;j=x.has(ve)}if(j){const ve=L.texture.type,Ee=f.has(ve),xe=Be.getClearColor(),De=Be.getClearAlpha(),Ne=xe.r,tt=xe.g,st=xe.b;Ee?(v[0]=Ne,v[1]=tt,v[2]=st,v[3]=De,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=Ne,M[1]=tt,M[2]=st,M[3]=De,F.clearBufferiv(F.COLOR,0,M))}else W|=F.COLOR_BUFFER_BIT}B&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){n.removeEventListener("webglcontextlost",ke,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",ni,!1),Be.dispose(),pe.dispose(),he.dispose(),V.dispose(),oe.dispose(),J.dispose(),me.dispose(),ie.dispose(),ue.dispose(),we.dispose(),we.removeEventListener("sessionstart",cm),we.removeEventListener("sessionend",um),jr.stop()};function ke(w){w.preventDefault(),Zg("WebGLRenderer: Context Lost."),D=!0}function et(){Zg("WebGLRenderer: Context Restored."),D=!1;const w=U.autoReset,B=He.enabled,Y=He.autoUpdate,W=He.needsUpdate,j=He.type;ye(),U.autoReset=w,He.enabled=B,He.autoUpdate=Y,He.needsUpdate=W,He.type=j}function ni(w){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Rn(w){const B=w.target;B.removeEventListener("dispose",Rn),x_(B)}function x_(w){v_(w),V.remove(w)}function v_(w){const B=V.get(w).programs;B!==void 0&&(B.forEach(function(Y){ue.releaseProgram(Y)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Y,W,j,ve){B===null&&(B=Ue);const Ee=j.isMesh&&j.matrixWorld.determinantAffine()<0,xe=S_(w,B,Y,W,j);_.setMaterial(W,Ee);let De=Y.index,Ne=1;if(W.wireframe===!0){if(De=Z.getWireframeAttribute(Y),De===void 0)return;Ne=2}const tt=Y.drawRange,st=Y.attributes.position;let Oe=tt.start*Ne,vt=(tt.start+tt.count)*Ne;ve!==null&&(Oe=Math.max(Oe,ve.start*Ne),vt=Math.min(vt,(ve.start+ve.count)*Ne)),De!==null?(Oe=Math.max(Oe,0),vt=Math.min(vt,De.count)):st!=null&&(Oe=Math.max(Oe,0),vt=Math.min(vt,st.count));const Ut=vt-Oe;if(Ut<0||Ut===1/0)return;me.setup(j,W,xe,Y,De);let Lt,_t=de;if(De!==null&&(Lt=le.get(De),_t=ee,_t.setIndex(Lt)),j.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*Ye()),_t.setMode(F.LINES)):_t.setMode(F.TRIANGLES);else if(j.isLine){let nn=W.linewidth;nn===void 0&&(nn=1),_.setLineWidth(nn*Ye()),j.isLineSegments?_t.setMode(F.LINES):j.isLineLoop?_t.setMode(F.LINE_LOOP):_t.setMode(F.LINE_STRIP)}else j.isPoints?_t.setMode(F.POINTS):j.isSprite&&_t.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))_t.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nn=j._multiDrawStarts,Me=j._multiDrawCounts,Pn=j._multiDrawCount,ht=De?le.get(De).bytesPerElement:1,Gn=V.get(W).currentProgram.getUniforms();for(let vi=0;vi<Pn;vi++)Gn.setValue(F,"_gl_DrawID",vi),_t.render(nn[vi]/ht,Me[vi])}else if(j.isInstancedMesh)_t.renderInstances(Oe,Ut,j.count);else if(Y.isInstancedBufferGeometry){const nn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Me=Math.min(Y.instanceCount,nn);_t.renderInstances(Oe,Ut,Me)}else _t.render(Oe,Ut)};function lm(w,B,Y){w.transparent===!0&&w.side===wi&&w.forceSinglePass===!1?(w.side=An,w.needsUpdate=!0,el(w,B,Y),w.side=Br,w.needsUpdate=!0,el(w,B,Y),w.side=wi):el(w,B,Y)}this.compile=function(w,B,Y=null){Y===null&&(Y=w),b=he.get(Y),b.init(B),y.push(b),Y.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),w!==Y&&w.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights();const W=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const xe=ve[Ee];lm(xe,Y,j),W.add(xe)}else lm(ve,Y,j),W.add(ve)}),b=y.pop(),W},this.compileAsync=function(w,B,Y=null){const W=this.compile(w,B,Y);return new Promise(j=>{function ve(){if(W.forEach(function(Ee){V.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){j(w);return}setTimeout(ve,10)}Te.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let bu=null;function y_(w){bu&&bu(w)}function cm(){jr.stop()}function um(){jr.start()}const jr=new c_;jr.setAnimationLoop(y_),typeof self<"u"&&jr.setContext(self),this.setAnimationLoop=function(w){bu=w,we.setAnimationLoop(w),w===null?jr.stop():jr.start()},we.addEventListener("sessionstart",cm),we.addEventListener("sessionend",um),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(w,B);const Y=we.enabled===!0&&we.isPresenting===!0,W=C!==null&&(L===null||Y)&&C.begin(P,L);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(B),B=we.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,B,L),b=he.get(w,y.length),b.init(B),b.state.textureUnits=K.getTextureUnits(),y.push(b),qe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ge.setFromProjectionMatrix(qe,Ci,B.reversedDepth),Ce=this.localClippingEnabled,Ve=Le.init(this.clippingPlanes,Ce),T=pe.get(w,A.length),T.init(),A.push(T),we.enabled===!0&&we.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Tu(Ee,B,-1/0,P.sortObjects)}Tu(w,B,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(ce,Re,B.reversedDepth),Fe=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Fe&&Be.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Le.beginShadows();const j=b.state.shadowsArray;if(He.render(j,w,B),Ve===!0&&Le.endShadows(),(W&&C.hasRenderPass())===!1){const Ee=T.opaque,xe=T.transmissive;if(b.setupLights(),B.isArrayCamera){const De=B.cameras;if(xe.length>0)for(let Ne=0,tt=De.length;Ne<tt;Ne++){const st=De[Ne];fm(Ee,xe,w,st)}Fe&&Be.render(w);for(let Ne=0,tt=De.length;Ne<tt;Ne++){const st=De[Ne];dm(T,w,st,st.viewport)}}else xe.length>0&&fm(Ee,xe,w,B),Fe&&Be.render(w),dm(T,w,B)}L!==null&&H===0&&(K.updateMultisampleRenderTarget(L),K.updateRenderTargetMipmap(L)),W&&C.end(P),w.isScene===!0&&w.onAfterRender(P,w,B),me.resetDefaultState(),I=-1,X=null,y.pop(),y.length>0?(b=y[y.length-1],K.setTextureUnits(b.state.textureUnits),Ve===!0&&Le.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,k!==null&&k.renderEnd()};function Tu(w,B,Y,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ge.intersectsSprite(w)){W&&Je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qe);const Ee=J.update(w),xe=w.material;xe.visible&&T.push(w,Ee,xe,Y,Je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ge.intersectsObject(w))){const Ee=J.update(w),xe=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Je.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Je.copy(Ee.boundingSphere.center)),Je.applyMatrix4(w.matrixWorld).applyMatrix4(qe)),Array.isArray(xe)){const De=Ee.groups;for(let Ne=0,tt=De.length;Ne<tt;Ne++){const st=De[Ne],Oe=xe[st.materialIndex];Oe&&Oe.visible&&T.push(w,Ee,Oe,Y,Je.z,st)}}else xe.visible&&T.push(w,Ee,xe,Y,Je.z,null)}}const ve=w.children;for(let Ee=0,xe=ve.length;Ee<xe;Ee++)Tu(ve[Ee],B,Y,W)}function dm(w,B,Y,W){const{opaque:j,transmissive:ve,transparent:Ee}=w;b.setupLightsView(Y),Ve===!0&&Le.setGlobalState(P.clippingPlanes,Y),W&&_.viewport(te.copy(W)),j.length>0&&Ja(j,B,Y),ve.length>0&&Ja(ve,B,Y),Ee.length>0&&Ja(Ee,B,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function fm(w,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Oe=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Fi(1,1,{generateMipmaps:!0,type:Oe?sr:Un,minFilter:rs,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const ve=b.state.transmissionRenderTarget[W.id],Ee=W.viewport||te;ve.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const xe=P.getRenderTarget(),De=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(Ze),ze=P.getClearAlpha(),ze<1&&P.setClearColor(16777215,.5),P.clear(),Fe&&Be.render(Y);const tt=P.toneMapping;P.toneMapping=Di;const st=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Ve===!0&&Le.setGlobalState(P.clippingPlanes,W),Ja(w,Y,W),K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let vt=0,Ut=B.length;vt<Ut;vt++){const Lt=B[vt],{object:_t,geometry:nn,material:Me,group:Pn}=Lt;if(Me.side===wi&&_t.layers.test(W.layers)){const ht=Me.side;Me.side=An,Me.needsUpdate=!0,hm(_t,Y,W,nn,Me,Pn),Me.side=ht,Me.needsUpdate=!0,Oe=!0}}Oe===!0&&(K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve))}P.setRenderTarget(xe,De,Ne),P.setClearColor(Ze,ze),st!==void 0&&(W.viewport=st),P.toneMapping=tt}function Ja(w,B,Y){const W=B.isScene===!0?B.overrideMaterial:null;for(let j=0,ve=w.length;j<ve;j++){const Ee=w[j],{object:xe,geometry:De,group:Ne}=Ee;let tt=Ee.material;tt.allowOverride===!0&&W!==null&&(tt=W),xe.layers.test(Y.layers)&&hm(xe,B,Y,De,tt,Ne)}}function hm(w,B,Y,W,j,ve){w.onBeforeRender(P,B,Y,W,j,ve),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(P,B,Y,W,w,ve),j.transparent===!0&&j.side===wi&&j.forceSinglePass===!1?(j.side=An,j.needsUpdate=!0,P.renderBufferDirect(Y,B,W,j,w,ve),j.side=Br,j.needsUpdate=!0,P.renderBufferDirect(Y,B,W,j,w,ve),j.side=wi):P.renderBufferDirect(Y,B,W,j,w,ve),w.onAfterRender(P,B,Y,W,j,ve)}function el(w,B,Y){B.isScene!==!0&&(B=Ue);const W=V.get(w),j=b.state.lights,ve=b.state.shadowsArray,Ee=j.state.version,xe=ue.getParameters(w,j.state,ve,B,Y,b.state.lightProbeGridArray),De=ue.getProgramCacheKey(xe);let Ne=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const tt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=oe.get(w.envMap||W.environment,tt),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Rn),Ne=new Map,W.programs=Ne);let st=Ne.get(De);if(st!==void 0){if(W.currentProgram===st&&W.lightsStateVersion===Ee)return mm(w,xe),st}else xe.uniforms=ue.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,Y,xe),w.onBeforeCompile(xe,P),st=ue.acquireProgram(xe,De),Ne.set(De,st),W.uniforms=xe.uniforms;const Oe=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=Le.uniform),mm(w,xe),W.needsLights=E_(w),W.lightsStateVersion=Ee,W.needsLights&&(Oe.ambientLightColor.value=j.state.ambient,Oe.lightProbe.value=j.state.probe,Oe.directionalLights.value=j.state.directional,Oe.directionalLightShadows.value=j.state.directionalShadow,Oe.spotLights.value=j.state.spot,Oe.spotLightShadows.value=j.state.spotShadow,Oe.rectAreaLights.value=j.state.rectArea,Oe.ltc_1.value=j.state.rectAreaLTC1,Oe.ltc_2.value=j.state.rectAreaLTC2,Oe.pointLights.value=j.state.point,Oe.pointLightShadows.value=j.state.pointShadow,Oe.hemisphereLights.value=j.state.hemi,Oe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Oe.spotLightMatrix.value=j.state.spotLightMatrix,Oe.spotLightMap.value=j.state.spotLightMap,Oe.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=st,W.uniformsList=null,st}function pm(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=yc.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function mm(w,B){const Y=V.get(w);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function __(w,B){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let Y=0,W=w.length;Y<W;Y++){const j=w[Y];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function S_(w,B,Y,W,j){B.isScene!==!0&&(B=Ue),K.resetTextureUnits();const ve=B.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,xe=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ut.workingColorSpace,De=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=oe.get(W.envMap||Ee,De),tt=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,st=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Ut=!!Y.morphAttributes.color;let Lt=Di;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Lt=P.toneMapping);const _t=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nn=_t!==void 0?_t.length:0,Me=V.get(W),Pn=b.state.lights;if(Ve===!0&&(Ce===!0||w!==X)){const Mt=w===X&&W.id===I;Le.setState(W,w,Mt)}let ht=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Pn.state.version||Me.outputColorSpace!==xe||j.isBatchedMesh&&Me.batching===!1||!j.isBatchedMesh&&Me.batching===!0||j.isBatchedMesh&&Me.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Me.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Me.instancing===!1||!j.isInstancedMesh&&Me.instancing===!0||j.isSkinnedMesh&&Me.skinning===!1||!j.isSkinnedMesh&&Me.skinning===!0||j.isInstancedMesh&&Me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Me.instancingMorph===!1&&j.morphTexture!==null||Me.envMap!==Ne||W.fog===!0&&Me.fog!==ve||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Le.numPlanes||Me.numIntersection!==Le.numIntersection)||Me.vertexAlphas!==tt||Me.vertexTangents!==st||Me.morphTargets!==Oe||Me.morphNormals!==vt||Me.morphColors!==Ut||Me.toneMapping!==Lt||Me.morphTargetsCount!==nn||!!Me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Me.__version=W.version);let Gn=Me.currentProgram;ht===!0&&(Gn=el(W,B,j),k&&W.isNodeMaterial&&k.onUpdateProgram(W,Gn,Me));let vi=!1,lr=!1,Ss=!1;const St=Gn.getUniforms(),kt=Me.uniforms;if(_.useProgram(Gn.program)&&(vi=!0,lr=!0,Ss=!0),W.id!==I&&(I=W.id,lr=!0),Me.needsLights){const Mt=__(b.state.lightProbeGridArray,j);Me.lightProbeGrid!==Mt&&(Me.lightProbeGrid=Mt,lr=!0)}if(vi||X!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(F,"projectionMatrix",w.projectionMatrix),St.setValue(F,"viewMatrix",w.matrixWorldInverse);const ur=St.map.cameraPosition;ur!==void 0&&ur.setValue(F,nt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,lr=!0,Ss=!0)}if(Me.needsLights&&(Pn.state.directionalShadowMap.length>0&&St.setValue(F,"directionalShadowMap",Pn.state.directionalShadowMap,K),Pn.state.spotShadowMap.length>0&&St.setValue(F,"spotShadowMap",Pn.state.spotShadowMap,K),Pn.state.pointShadowMap.length>0&&St.setValue(F,"pointShadowMap",Pn.state.pointShadowMap,K)),j.isSkinnedMesh){St.setOptional(F,j,"bindMatrix"),St.setOptional(F,j,"bindMatrixInverse");const Mt=j.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),St.setValue(F,"boneTexture",Mt.boneTexture,K))}j.isBatchedMesh&&(St.setOptional(F,j,"batchingTexture"),St.setValue(F,"batchingTexture",j._matricesTexture,K),St.setOptional(F,j,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",j._indirectTexture,K),St.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",j._colorsTexture,K));const cr=Y.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&N.update(j,Y,Gn),(lr||Me.receiveShadow!==j.receiveShadow)&&(Me.receiveShadow=j.receiveShadow,St.setValue(F,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(kt.envMapIntensity.value=B.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=OC()),lr){if(St.setValue(F,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&M_(kt,Ss),ve&&W.fog===!0&&Ie.refreshFogUniforms(kt,ve),Ie.refreshMaterialUniforms(kt,W,ne,se,b.state.transmissionRenderTarget[w.id]),Me.needsLights&&Me.lightProbeGrid){const Mt=Me.lightProbeGrid;kt.probesSH.value=Mt.texture,kt.probesMin.value.copy(Mt.boundingBox.min),kt.probesMax.value.copy(Mt.boundingBox.max),kt.probesResolution.value.copy(Mt.resolution)}yc.upload(F,pm(Me),kt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(yc.upload(F,pm(Me),kt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(F,"center",j.center),St.setValue(F,"modelViewMatrix",j.modelViewMatrix),St.setValue(F,"normalMatrix",j.normalMatrix),St.setValue(F,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const Mt=W.uniformsGroups;for(let ur=0,Ms=Mt.length;ur<Ms;ur++){const gm=Mt[ur];ie.update(gm,Gn),ie.bind(gm,Gn)}}return Gn}function M_(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function E_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,B,Y){const W=V.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),V.get(w.texture).__webglTexture=B,V.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const Y=V.get(w);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,Y=0){L=w,q=B,H=Y;let W=null,j=!1,ve=!1;if(w){const xe=V.get(w);if(xe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,xe.__webglFramebuffer),te.copy(w.viewport),re.copy(w.scissor),Xe=w.scissorTest,_.viewport(te),_.scissor(re),_.setScissorTest(Xe),I=-1;return}else if(xe.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(xe.__hasExternalTextures)K.rebindTextures(w,V.get(w.texture).__webglTexture,V.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(xe.__boundDepthTexture!==tt){if(tt!==null&&V.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ve=!0);const Ne=V.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?W=Ne[B][Y]:W=Ne[B],j=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?W=V.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[Y]:W=Ne,te.copy(w.viewport),re.copy(w.scissor),Xe=w.scissorTest}else te.copy(_e).multiplyScalar(ne).floor(),re.copy(Ae).multiplyScalar(ne).floor(),Xe=Se;if(Y!==0&&(W=$),_.bindFramebuffer(F.FRAMEBUFFER,W)&&_.drawBuffers(w,W),_.viewport(te),_.scissor(re),_.setScissorTest(Xe),j){const xe=V.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,Y)}else if(ve){const xe=B;for(let De=0;De<w.textures.length;De++){const Ne=V.get(w.textures[De]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+De,Ne.__webglTexture,Y,xe)}}else if(w!==null&&Y!==0){const xe=V.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,Y)}I=-1},this.readRenderTargetPixels=function(w,B,Y,W,j,ve,Ee,xe=0){if(!(w&&w.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){_.bindFramebuffer(F.FRAMEBUFFER,De);try{const Ne=w.textures[xe],tt=Ne.format,st=Ne.type;if(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(tt)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(st)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&Y>=0&&Y<=w.height-j&&F.readPixels(B,Y,W,j,fe.convert(tt),fe.convert(st),ve)}finally{const Ne=L!==null?V.get(L).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,B,Y,W,j,ve,Ee,xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De)if(B>=0&&B<=w.width-W&&Y>=0&&Y<=w.height-j){_.bindFramebuffer(F.FRAMEBUFFER,De);const Ne=w.textures[xe],tt=Ne.format,st=Ne.type;if(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Oe),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(B,Y,W,j,fe.convert(tt),fe.convert(st),0);const vt=L!==null?V.get(L).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,vt);const Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ib(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Oe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.deleteBuffer(Oe),F.deleteSync(Ut),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,Y=0){const W=Math.pow(2,-Y),j=Math.floor(w.image.width*W),ve=Math.floor(w.image.height*W),Ee=B!==null?B.x:0,xe=B!==null?B.y:0;K.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Ee,xe,j,ve),_.unbindTexture()},this.copyTextureToTexture=function(w,B,Y=null,W=null,j=0,ve=0){let Ee,xe,De,Ne,tt,st,Oe,vt,Ut;const Lt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(Y!==null)Ee=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,tt=Y.min.y,st=Y.isBox3?Y.min.z:0;else{const kt=Math.pow(2,-j);Ee=Math.floor(Lt.width*kt),xe=Math.floor(Lt.height*kt),w.isDataArrayTexture?De=Lt.depth:w.isData3DTexture?De=Math.floor(Lt.depth*kt):De=1,Ne=0,tt=0,st=0}W!==null?(Oe=W.x,vt=W.y,Ut=W.z):(Oe=0,vt=0,Ut=0);const _t=fe.convert(B.format),nn=fe.convert(B.type);let Me;B.isData3DTexture?(K.setTexture3D(B,0),Me=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Me=F.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Me=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Pn=_.getParameter(F.UNPACK_ROW_LENGTH),ht=_.getParameter(F.UNPACK_IMAGE_HEIGHT),Gn=_.getParameter(F.UNPACK_SKIP_PIXELS),vi=_.getParameter(F.UNPACK_SKIP_ROWS),lr=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,Lt.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),_.pixelStorei(F.UNPACK_SKIP_ROWS,tt),_.pixelStorei(F.UNPACK_SKIP_IMAGES,st);const Ss=w.isDataArrayTexture||w.isData3DTexture,St=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const kt=V.get(w),cr=V.get(B),Mt=V.get(kt.__renderTarget),ur=V.get(cr.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,Mt.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,ur.__webglFramebuffer);for(let Ms=0;Ms<De;Ms++)Ss&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(w).__webglTexture,j,st+Ms),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(B).__webglTexture,ve,Ut+Ms)),F.blitFramebuffer(Ne,tt,Ee,xe,Oe,vt,Ee,xe,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||V.has(w)){const kt=V.get(w),cr=V.get(B);_.bindFramebuffer(F.READ_FRAMEBUFFER,Q),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let Mt=0;Mt<De;Mt++)Ss?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.__webglTexture,j,st+Mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,kt.__webglTexture,j),St?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,cr.__webglTexture,ve,Ut+Mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,cr.__webglTexture,ve),j!==0?F.blitFramebuffer(Ne,tt,Ee,xe,Oe,vt,Ee,xe,F.COLOR_BUFFER_BIT,F.NEAREST):St?F.copyTexSubImage3D(Me,ve,Oe,vt,Ut+Mt,Ne,tt,Ee,xe):F.copyTexSubImage2D(Me,ve,Oe,vt,Ne,tt,Ee,xe);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else St?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Me,ve,Oe,vt,Ut,Ee,xe,De,_t,nn,Lt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,ve,Oe,vt,Ut,Ee,xe,De,_t,Lt.data):F.texSubImage3D(Me,ve,Oe,vt,Ut,Ee,xe,De,_t,nn,Lt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,Oe,vt,Ee,xe,_t,nn,Lt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,Oe,vt,Lt.width,Lt.height,_t,Lt.data):F.texSubImage2D(F.TEXTURE_2D,ve,Oe,vt,Ee,xe,_t,nn,Lt);_.pixelStorei(F.UNPACK_ROW_LENGTH,Pn),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Gn),_.pixelStorei(F.UNPACK_SKIP_ROWS,vi),_.pixelStorei(F.UNPACK_SKIP_IMAGES,lr),ve===0&&B.generateMipmaps&&F.generateMipmap(Me),_.unbindTexture()},this.initRenderTarget=function(w){V.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){q=0,H=0,L=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}}const zC=({className:t="",height:e="320px",accentColor:n="#00f0ff",modelId:i="qwen3.5",vramText:r="6.6 GB",speedText:s="92 tok/s"})=>{const o=Pe.useRef(null),[a,l]=Pe.useState([{x:0,y:0,visible:!1},{x:0,y:0,visible:!1}]),c=Pe.useRef(n);c.current=n;const h=Pe.useRef(i);return h.current=i,Pe.useEffect(()=>{const p=o.current;if(!p)return;const d=p.clientWidth||400,m=p.clientHeight||320,g=new yb,E=new Nn(45,d/m,.1,1e3);E.position.z=6.5;const x=new BC({alpha:!0,antialias:!0});x.setSize(d,m),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.appendChild(x.domElement);const f=new aa;g.add(f);const v=new em(1.1,3),M=new Id({color:new ot(c.current),wireframe:!0,emissive:new ot(c.current),emissiveIntensity:.8,roughness:.2,metalness:.9}),S=new On(v,M);f.add(S);const T=new nm(1.6,.22,128,16,2,3),b=new Id({color:7340287,wireframe:!0,emissive:4718762,emissiveIntensity:.6,transparent:!0,opacity:.7}),A=new On(T,b);f.add(A);const y=new Jp(2.3,0),C=new Id({color:16711850,wireframe:!0,transparent:!0,opacity:.4}),P=new On(y,C);f.add(P);const D=300,k=new Cn,$=new Float32Array(D*3),Q=new Float32Array(D*3);for(let Ue=0;Ue<D;Ue++){const Fe=2.6+Math.random()*.9,Ye=Math.random()*Math.PI*2,F=(Math.random()-.5)*Math.PI*.6;$[Ue*3]=Fe*Math.cos(Ye)*Math.cos(F),$[Ue*3+1]=Fe*Math.sin(F),$[Ue*3+2]=Fe*Math.sin(Ye)*Math.cos(F);const $e=new ot(c.current);Q[Ue*3]=$e.r,Q[Ue*3+1]=$e.g,Q[Ue*3+2]=$e.b}k.setAttribute("position",new Jn($,3)),k.setAttribute("color",new Jn(Q,3));const O=new n_({size:.06,vertexColors:!0,transparent:!0,opacity:.85,blending:Xf}),q=new Rb(k,O);f.add(q);const H=new tm(.1,.15,64),L=new Zp({color:new ot(c.current),side:wi,transparent:!0,opacity:0}),I=new On(H,L);I.rotation.x=Math.PI/2,g.add(I);let X=!1,te=.1,re=1;const Xe=new zb(16777215,.4);g.add(Xe);const Ze=new y0(61695,3,20);Ze.position.set(4,4,5),g.add(Ze);const ze=new y0(16711850,3,20);ze.position.set(-4,-4,-3),g.add(ze);let G=0,se=0,ne=0,ce=0;const Re=Ue=>{const Fe=p.getBoundingClientRect(),Ye=(Ue.clientX-Fe.left)/p.clientWidth*2-1,F=-((Ue.clientY-Fe.top)/p.clientHeight*2-1);se=Ye*.9,G=F*.9},_e=()=>{X=!0,te=.1,re=1},Ae=x.domElement;window.addEventListener("mousemove",Re),Ae.addEventListener("click",_e);let Se;const Ge=new Gb,Ve=new z(1.8,1.2,0),Ce=new z(-1.8,-1.2,0),qe=()=>{Se=requestAnimationFrame(qe);const Ue=Ge.getElapsedTime(),Fe=new ot(c.current);M.color.lerp(Fe,.05),M.emissive.lerp(Fe,.05),Ze.color.lerp(Fe,.05),L.color.lerp(Fe,.05),ne+=(G-ne)*.06,ce+=(se-ce)*.06,f.rotation.x=ne+Math.sin(Ue*.5)*.1,f.rotation.y=ce+Ue*.25,S.rotation.y=-Ue*.6,A.rotation.x=Ue*.5,A.rotation.z=Ue*.3,P.rotation.y=Ue*.2,q.rotation.y=Ue*.12,f.position.y=Math.sin(Ue*1.5)*.15,X&&(te+=.18,re-=.04,I.scale.set(te,te,1),L.opacity=Math.max(0,re),re<=0&&(X=!1));const Ye=Ve.clone().applyMatrix4(f.matrixWorld).project(E),F=Ce.clone().applyMatrix4(f.matrixWorld).project(E),$e=Te=>({x:(Te.x+1)*d/2,y:(-Te.y+1)*m/2,visible:Te.z<1});l([$e(Ye),$e(F)]),x.render(g,E)};qe();const nt=()=>{if(!p)return;const Ue=p.clientWidth,Fe=p.clientHeight;E.aspect=Ue/Fe,E.updateProjectionMatrix(),x.setSize(Ue,Fe)},Je=new ResizeObserver(()=>nt());return Je.observe(p),()=>{window.removeEventListener("mousemove",Re),Ae.removeEventListener("click",_e),cancelAnimationFrame(Se),Je.disconnect(),p.contains(x.domElement)&&p.removeChild(x.domElement),v.dispose(),M.dispose(),T.dispose(),b.dispose(),y.dispose(),C.dispose(),k.dispose(),O.dispose(),H.dispose(),L.dispose(),x.dispose()}},[]),u.jsx("div",{ref:o,className:`cyber-core-3d-container ${t}`,style:{width:"100%",height:typeof e=="number"?`${e}px`:e,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",cursor:"pointer"}})},VC=[{id:"custom-ollama",name:"Any Local Agent (Your Choice via Ollama)",tag:"ollama pull <any-model>",vram:"Configurable",vramPct:35,speed:"120 tok/s",latency:"2.8 ms",purpose:"Choose Any Agent Model (DeepSeek, Llama 3, Qwen, Mistral, Gemma, Phi)",accent:"#3B82F6"},{id:"code-agent",name:"Code Synthesis Agent",tag:"qwen2.5-coder / deepseek-coder",vram:"4.7 GB",vramPct:39,speed:"118 tok/s",latency:"3.2 ms",purpose:"Full-Stack Code Synthesis & AST Verification",accent:"#10B981"},{id:"vision-agent",name:"GUI Perception Agent",tag:"llama3.2-vision / moondream",vram:"7.8 GB",vramPct:65,speed:"64 tok/s",latency:"6.1 ms",purpose:"Screen Bounding Box Detection & GUI Automation",accent:"#8B5CF6"},{id:"fast-auditor",name:"Fast Auditor Micro Agent",tag:"1.5B - 3B Lightweight Models",vram:"1.2 GB",vramPct:10,speed:"185 tok/s",latency:"1.5 ms",purpose:"Sub-second Syntax & Logic Self-Healer",accent:"#F59E0B"},{id:"cloud-vault",name:"Cloud Provider Vault (Optional)",tag:"OpenAI / Gemini / Groq / Anthropic",vram:"0 GB Local",vramPct:0,speed:"200 tok/s",latency:"1.2 ms",purpose:"Offload Inference to Cloud API Keys in Encrypted Vault",accent:"#EC4899"}],HC=({detectedOS:t,isMobile:e,onDownloadClick:n})=>{const[i,r]=Pe.useState(!1),[s,o]=Pe.useState("powershell"),[a,l]=Pe.useState(VC[0]);Pe.useEffect(()=>{const d=setTimeout(()=>{const m=document.querySelector(".hero-anim-logo"),g=document.querySelectorAll(".hero-anim-item");m&&jf(m,{scale:[.4,1],opacity:[0,1],duration:900,ease:"outExpo"}),g.length>0&&jf(g,{translateY:[24,0],opacity:[0,1],delay:ME(110),duration:800,ease:"outExpo"})},50);return()=>clearTimeout(d)},[]);const[c,h]=Pe.useState(!1),p=()=>{h(!0),n(),setTimeout(()=>h(!1),1e3)};return u.jsx("section",{style:{paddingTop:"130px",paddingBottom:"70px",position:"relative",zIndex:1,overflow:"hidden"},children:u.jsx("div",{className:"container",children:u.jsxs("div",{style:{textAlign:"center",maxWidth:"880px",margin:"0 auto"},children:[u.jsx("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:u.jsx(zC,{height:260,accentColor:a.accent,modelId:a.id,vramText:a.vram,speedText:a.speed})}),u.jsxs("div",{className:"hero-anim-item",style:{marginBottom:"16px",color:"var(--text-muted)",fontSize:"0.95rem",fontWeight:600,letterSpacing:"0.04em"},children:["Sovereign Offline AI Agent created by ",u.jsx("strong",{style:{color:"#FFF"},children:"Aryan"})]}),u.jsxs("h1",{className:"hero-anim-item",style:{fontSize:"clamp(2.3rem, 5vw, 4rem)",lineHeight:1.1,marginBottom:"18px",fontWeight:800},children:["A Cognitive Layer for ",u.jsx("br",{}),u.jsx("span",{className:"gradient-text-cyan",children:"Your Desktop OS."})]}),u.jsxs("p",{className:"hero-anim-item",style:{fontSize:"clamp(1rem, 2vw, 1.2rem)",color:"var(--text-muted)",marginBottom:"28px",maxWidth:"740px",margin:"0 auto 32px auto",lineHeight:1.6},children:[u.jsx("strong",{style:{color:"#FFF"},children:"Local execution. Total privacy. Absolute autonomy."}),u.jsx("br",{}),"Run continuous ReAct agentic loops locally with 100% data privacy. Powered by local LLMs via Ollama, vector RAG memory, and sub-10ms system overlay."]}),u.jsxs("div",{className:"hero-anim-item",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"16px",marginBottom:"28px"},children:[u.jsxs("button",{onClick:p,className:"btn-primary",disabled:c,style:{padding:"16px 32px",fontSize:"1.05rem",opacity:c?.8:1},children:[c?u.jsx("div",{className:"spinner",style:{width:20,height:20,border:"2px solid rgba(0,0,0,0.2)",borderTopColor:"#000",borderRadius:"50%",animation:"spin 0.6s linear infinite"}}):u.jsx(Xi,{size:20}),u.jsx("span",{children:c?"Preparing Build...":"Download Desktop App"})]}),u.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",style:{padding:"16px 28px",fontSize:"1.05rem"},children:[u.jsx(cy,{size:20}),u.jsx("span",{children:"Star on GitHub"})]})]}),e&&u.jsxs("div",{style:{background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",borderRadius:"12px",padding:"12px 20px",marginBottom:"28px",fontSize:"0.9rem",color:"var(--amber-accent)",display:"inline-block"},children:["💻 ",u.jsx("strong",{children:"Desktop OS Required:"})," Meridian-X runs exclusively on Windows, macOS, and Linux. Star on GitHub to setup on your computer!"]}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"24px",marginTop:"36px",fontSize:"0.82rem",color:"var(--text-muted)",fontFamily:"var(--font-code)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10B981"}}),u.jsx("span",{children:"0 KB Cloud Egress"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#FAFAFA"}}),u.jsx("span",{children:"< 6.8ms HUD Latency"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#FAFAFA"}}),u.jsx("span",{children:"84 tok/sec GPU Inference"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10B981"}}),u.jsx("span",{children:"AES-256 Keychain Vault"})]})]})]})})})},In=[{stage:"THINK",title:"Analyze Goal & Assemble Unified Context",detail:"Inspecting workspace context. Assembling prompt context in parallel from Turbovec Vector RAG, Code Graph (code_graph.py), SQLite WAL, and 50-slot clipboard buffer.",codeSnippet:`// Hardware & Context Assembly (hardware_detector.py & code_graph.py)
const spec = await hardwareDetector.getSpec(); // Tier: MID (16GB RAM)
const [vectorContext, kgNodes, codeSymbols] = await Promise.all([
  turbovec.query(queryEmbedding, { top_k: 5 }),
  graphRAG.findEntities(topic),
  codeGraph.searchSymbols("loop.py")
]);`,color:"#38BDF8",duration:1800},{stage:"PLAN",title:"Multi-Agent Swarm Debate & Workflow DAG",detail:"Triggering multi-persona debate (swarm.py) and visual automation DAG (workflow_engine.py) to validate complex reasoning steps.",codeSnippet:`// Multi-Agent Swarm Debate (swarm.py & /api/swarm/stream)
const debate = await swarmEngine.deliberate({
  personas: ["SecurityAuditor", "CodeArchitect", "PerformanceOptimizer"],
  topic: "Parallel asyncio.gather tool execution flow"
});
// Consensus: APPROVED with 0 security warnings`,color:"#F59E0B",duration:2200},{stage:"ACT",title:"Speculative Concurrency & Playwright Automation",detail:"Dual-lane router executes Tier 0 read-only tools concurrently, while Playwright agent (browser_agent.py) and desktop GUI automation execute Tier 1 actions.",codeSnippet:`// Tier 0 Read-Only Concurrency (asyncio.gather)
const [fileData, searchResults] = await asyncio.gather(
  toolRegistry.call("read_file", { path: "meridian_backend/src/core/loop.py" }),
  toolRegistry.call("search_web", { query: "FastAPI SlowAPI rate limiting" })
);
// Playwright Web Agent (browser_agent.py) launched`,color:"#10B981",duration:2200},{stage:"OBSERVE",title:"Self-Healing Engine & Tool Parameter Repair",detail:"Self-correction engine catches tool signature mismatches against TOOL_REGISTRY and auto-injects corrected arguments in loop.py.",codeSnippet:`[WARN] Signature mismatch in tool call: 'file_path' expected 'path'.
[HEAL] Self-Healing Applied: Remapped 'file_path' -> 'path'.
[SSE Stream] Telemetry Stream: /api/chat/stream -> EVENT: HEALED
[Mascot State] Three.js Ring: AMBER (Working) -> FAST_SPIN`,color:"#F59E0B",duration:2400},{stage:"SELF-CORRECT",title:"Temporal Rollback Snapshot & Supertonic Speech",detail:"Task completed cleanly. Creating temporal memory snapshot (temporal_memory.py), retrieving AES vault secret (vault.py), and triggering Supertonic TTS voice.",codeSnippet:`✓ ReAct Loop Completed (meridian_backend/src/core/loop.py)
💾 Temporal Snapshot Saved (temporal_memory.py / Timeline.tsx)
🔐 AES-256-GCM Vault (vault.py): Secret retrieved via HMAC passphrase
🔊 Supertonic TTS: 10 Local Voices ("Male M3 - Execution completed.")
🦊 Mascot State: GREEN (Success - 60 FPS Three.js Ring)`,color:"#10B981",duration:2500}],GC=()=>{const[t,e]=Pe.useState(0),[n,i]=Pe.useState(!0),[r,s]=Pe.useState(1),[o,a]=Pe.useState(!1);Pe.useEffect(()=>{const c=document.querySelector(".sim-log-active");c&&jf(c,{translateY:[12,0],opacity:[.3,1],duration:450,ease:"outQuad"})},[t]),Pe.useEffect(()=>{if(!n)return;const c=In[t],h=setTimeout(()=>{e(p=>(p+1)%In.length)},c.duration/r);return()=>clearTimeout(h)},[t,n,r]);const l=()=>{const c=In.slice(0,t+1).map(h=>`[${h.stage}] ${h.title}
${h.detail}
${h.codeSnippet||""}`).join(`

`);navigator.clipboard.writeText(c),a(!0),setTimeout(()=>a(!1),2e3)};return u.jsxs("section",{id:"simulator",style:{padding:"100px 0",position:"relative",zIndex:1},children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{style:{textAlign:"center",maxWidth:"720px",margin:"0 auto 60px auto"},children:[u.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.5vw, 3rem)",marginBottom:"16px"},children:["Continuous ",u.jsx("span",{className:"gradient-text-cyan",children:"ReAct Engine"})," in Action."]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem"},children:"Watch Meridian-X reason, execute code, observe errors, and self-correct on your local hardware without human intervention."})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(300px, 380px) 1fr",gap:"24px",alignItems:"start"},className:"simulator-layout",children:[u.jsxs("div",{className:"glass-card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"16px",background:"rgba(12, 12, 16, 0.95)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[u.jsx("h3",{style:{fontSize:"1.1rem",color:"#FFF"},children:"Cognitive Loop Pipeline"}),u.jsxs("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-code)",color:"#FAFAFA"},children:["Step ",t+1," of ",In.length]})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:In.map((c,h)=>{const p=h===t,d=h<t;return u.jsxs("div",{onClick:()=>{e(h),i(!1)},style:{padding:"14px 16px",borderRadius:"12px",background:p?"rgba(255, 255, 255, 0.08)":d?"rgba(10, 10, 14, 0.8)":"rgba(8, 8, 12, 0.4)",border:p?"1px solid #FFFFFF":"1px solid rgba(255, 255, 255, 0.08)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},children:[u.jsxs("div",{style:{width:"28px",height:"28px",borderRadius:"8px",background:p?"#FFFFFF":"rgba(255,255,255,0.06)",color:p?"#030303":c.color,fontWeight:700,fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-code)"},children:["0",h+1]}),u.jsxs("div",{style:{flex:1},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("span",{style:{fontWeight:700,fontSize:"0.82rem",color:c.color,fontFamily:"var(--font-code)"},children:["[",c.stage,"]"]}),d&&u.jsx(Of,{size:14,color:"#10B981"})]}),u.jsx("div",{style:{fontSize:"0.85rem",color:p?"#FFF":"var(--text-muted)",fontWeight:500},children:c.title})]})]},c.stage)})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"16px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("button",{onClick:()=>i(!n),className:"btn-secondary",style:{padding:"8px 14px",fontSize:"0.85rem"},children:[n?u.jsx(EM,{size:15}):u.jsx(bM,{size:15}),u.jsx("span",{children:n?"Pause":"Play"})]}),u.jsx("button",{onClick:()=>{e(0),i(!0)},className:"btn-secondary",style:{padding:"8px 12px"},title:"Reset Simulator",children:u.jsx(wM,{size:15})})]}),u.jsxs("button",{onClick:()=>s(c=>c===1?2:c===2?.5:1),className:"btn-secondary",style:{padding:"8px 12px",fontSize:"0.8rem",fontFamily:"var(--font-code)"},children:[u.jsx(hM,{size:14}),u.jsxs("span",{children:[r,"x Speed"]})]})]})]}),u.jsx("div",{className:"glow-border-card",style:{height:"100%",background:"rgba(10, 10, 14, 0.95)"},children:u.jsxs("div",{className:"glow-border-card-inner",style:{padding:"0",display:"flex",flexDirection:"column",height:"100%",background:"#050508"},children:[u.jsxs("div",{style:{background:"rgba(14, 14, 18, 0.98)",padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(Oa,{size:18,color:"#FAFAFA"}),u.jsx("span",{style:{fontSize:"0.88rem",fontFamily:"var(--font-code)",fontWeight:600,color:"#FFFFFF"},children:"Meridian-X ReAct Terminal Log Stream"})]}),u.jsxs("button",{onClick:l,style:{background:"transparent",border:"none",color:o?"var(--emerald-accent)":"var(--text-muted)",cursor:"pointer",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"6px"},children:[o?u.jsx(ji,{size:15}):u.jsx(to,{size:15}),u.jsx("span",{children:o?"Copied":"Copy Logs"})]})]}),u.jsxs("div",{className:"sim-log-active",style:{padding:"24px",background:"#040810",fontFamily:"var(--font-code)",fontSize:"0.88rem",lineHeight:"1.7",color:"#E2E8F0",flex:1,display:"flex",flexDirection:"column",gap:"20px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[u.jsxs("span",{style:{background:In[t].color,color:"#040D1A",padding:"4px 10px",borderRadius:"6px",fontWeight:800,fontSize:"0.8rem"},children:["[",In[t].stage,"]"]}),u.jsx("span",{style:{color:"#FFF",fontWeight:600,fontSize:"0.95rem"},children:In[t].title})]}),u.jsx("div",{style:{color:"var(--text-muted)",paddingLeft:"12px",borderLeft:`2px solid ${In[t].color}`},children:In[t].detail}),In[t].codeSnippet&&u.jsx("div",{style:{background:"rgba(15, 23, 42, 0.8)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",padding:"16px",whiteSpace:"pre-wrap",color:In[t].stage==="OBSERVE"?"#F59E0B":"#00F2FE",fontSize:"0.84rem"},children:In[t].codeSnippet}),u.jsxs("div",{style:{marginTop:"auto",paddingTop:"16px",borderTop:"1px dashed rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)"},children:[u.jsx("span",{children:"Runtime: Ollama (Offline GPU Engine)"}),u.jsx("span",{style:{color:"var(--emerald-accent)"},children:"● Verification: Passed (0 errors)"})]})]})]})})]})]}),u.jsx("style",{children:`
        @media (max-width: 868px) {
          .simulator-layout { grid-template-columns: 1fr !important; }
        }
      `})]})},WC=[{id:"sovereignty",title:"100% Offline & Sovereign",badge:"Air-Gapped Ready",tagline:"Zero telemetry. Zero cloud egress.",description:"Operates 100% locally via embedded Ollama runtime & FastAPI microservice. Your code, documents, API keys, and SQLite database memory never leave your device.",iconName:"ShieldCheck",accentColor:"#10B981",metrics:"0 KB Cloud Egress",details:["Local GGUF Model Execution","Full Air-Gap & Off-Grid Support","Zero Telemetry & Tracking"]},{id:"react-loop",title:"ReAct Engine & Self-Healing",badge:"loop.py ReAct Engine",tagline:"Reason → Act → Observe → Auto-Heal",description:"Asynchronous ReAct loop (meridian_backend/src/core/loop.py). Intercepts tool calls, auto-corrects parameter signature mismatches against TOOL_REGISTRY, and runs Code Auditor model checks.",iconName:"Cpu",accentColor:"#E4E4E7",metrics:"Sub-100ms Tool Healing",details:["TOOL_REGISTRY Auto-Fix","Code Auditor Security Check","Live SSE Telemetry Stream"]},{id:"swarm-debate",title:"Multi-Agent Swarm & Debate Engine",badge:"SwarmDebate.tsx",tagline:"Adversarial consensus & multi-persona debate",description:"Multi-perspective autonomous debate between customized agent personas (swarm.py, SwarmDebate.tsx). Parallel reasoning synthesis for complex problem-solving and consensus verification.",iconName:"Users",accentColor:"#F59E0B",metrics:"Multi-Persona Swarm",details:["Parallel Agent Deliberation (swarm.py)","Adversarial Consensus Validation","Live SSE Debate Stream (/api/swarm/stream)"]},{id:"workflow-dag",title:"Visual Workflow & DAG Engine",badge:"WorkflowBuilder.tsx",tagline:"Node-based visual automation graph builder",description:"Drag-and-drop workflow DAG builder (workflow_engine.py, WorkflowBuilder.tsx). Combines LLM steps, shell scripts, API calls, and watchers into sequential and conditional execution graphs.",iconName:"GitMerge",accentColor:"#8B5CF6",metrics:"Visual Node Builder",details:["Node-Based DAG Graph Builder","Conditional Execution Loops","Watcher & Trigger Integrations"]},{id:"p2p-mesh",title:"P2P Mesh & Encrypted Peer Offload",badge:"Encrypted LAN/WAN Mesh",tagline:"Distributed peer discovery & task offloading",description:"Distributed peer-to-peer node discovery and handshake (p2p.py, p2p_crypto.py). End-to-end encrypted task offloading between trusted LAN/WAN Meridian-X nodes over port 8765.",iconName:"Network",accentColor:"#EC4899",metrics:"End-to-End Encrypted",details:["P2P Node Handshake (p2p_crypto.py)","Distributed Peer Task Offload","Port 8765 Mesh Gateway"]},{id:"code-lsp",title:"Code Graph & LSP Client Engine",badge:"AST Symbol Indexer",tagline:"Deep code AST analysis & symbol graph",description:"Language Server Protocol integration (lsp_client.py, code_graph.py) for deep AST symbol analysis, type checking, and automated code quality reviewing (auto_reviewer.py).",iconName:"FileCode",accentColor:"#38BDF8",metrics:"AST Symbol Graph",details:["LSP Client Integration (lsp_client.py)","Symbol Knowledge Graph (code_graph.py)","Automated Code Reviewer"]},{id:"browser-desktop",title:"Playwright Web & Desktop Agent",badge:"GUI & Web Automation",tagline:"Headless browser scraping & GUI macros",description:"Headless and visual Playwright browser agent (browser_agent.py, web_browser.py). Desktop GUI mouse/keyboard macro recording and playback (desktop.py, recording.py).",iconName:"MonitorPlay",accentColor:"#67E8F9",metrics:"Playwright + GUI Macros",details:["Playwright Browser Agent","Desktop GUI Macro Recorder","Visual Click & Screen Perception"]},{id:"temporal-memory",title:"Temporal Memory & State Rollback",badge:"Time-Travel Rollback",tagline:"Granular session snapshots & history rollback",description:"Granular conversation session state snapshots and time-travel rollback (temporal_memory.py, Timeline.tsx). Instant state restoration via /api/history/rollback.",iconName:"History",accentColor:"#14B8A6",metrics:"Instant Snapshots",details:["Temporal Memory Snapshots","Time-Travel State Rollback","Telemetry Log Exporter"]},{id:"social-bridges",title:"Social & Communication Bridges",badge:"Discord / Telegram / WhatsApp",tagline:"Out-of-the-box bot communication bridges",description:"Bidirectional bot integration bridges for Discord (discord_bridge.py), Telegram (telegram_bridge.py), and WhatsApp (whatsapp_manager.py) for remote control.",iconName:"MessageSquare",accentColor:"#A78BFA",metrics:"3 Bot Channels",details:["Discord Bot Bridge (discord_bridge.py)","Telegram Bot Bridge (telegram_bridge.py)","WhatsApp Manager (whatsapp_manager.py)"]},{id:"onboarding-wizard",title:"Non-Techie Onboarding Wizard",badge:"Auto Spec Classifier",tagline:"Hardware auto-detect & multi-port Ollama scanner",description:"Detects system CPU cores, RAM, and NVIDIA VRAM (pynvml) to classify machines into Entry (<8GB), Mid (8-16GB), or High (>16GB) tiers. Auto-scans ports 11434, 11435, 8080, 5000 and streams model downloads via SSE.",iconName:"Sparkles",accentColor:"#38BDF8",metrics:"4-Port Auto-Discovery",details:["Hardware Tier Detection (hardware_detector.py)","Multi-Port Ollama Scanner (ollama_manager.py)","Real-Time SSE Model Puller"]},{id:"remote-selfhost",title:"Remote Backend & Docker Stacks",badge:"Caddy SSL Automated",tagline:"Self-host on private servers or cloud VMs",description:"Deploy with standard docker-compose.yml or docker-compose.prod.yml featuring automated Caddy SSL reverse proxy. Switch between local and remote backends instantly via ServerConnectionModal.",iconName:"Server",accentColor:"#67E8F9",metrics:"1-Click Docker Stack",details:["Production Caddy SSL Proxy","docs/SELF_HOSTING.md Guide","Remote Backend URL Switcher"]},{id:"mcp-reverse",title:"MCP Plugins & Reverse MCP Server",badge:"/api/mcp/v1/tools",tagline:"1-Click plugins + reverse tool export for IDEs",description:"Marketplace for PostgreSQL, GitHub, Linear, and Slack MCP servers. Exposes internal TOOL_REGISTRY as a reverse MCP server at /api/mcp/v1/tools for external IDE consumption.",iconName:"Plug",accentColor:"#F43F5E",metrics:"Reverse MCP Server",details:["GitHub / Postgres / Slack MCP","Reverse Endpoint /api/mcp/v1/tools","Dynamic JSON-RPC Schema Injection"]},{id:"encrypted-vault",title:"AES-256-GCM Secret Vault",badge:"Hardware HMAC Passphrase",tagline:"Machine-bound HMAC derivation & encrypted keys",description:"AES-256-GCM encrypted credential vault (vault.py) bound to hostname + username HMAC passphrase. Manages keys for OpenAI, Anthropic, Gemini, Groq, DeepSeek, Tavily, Discord, and Telegram.",iconName:"Lock",accentColor:"#10B981",metrics:"256-Bit Key Hardware Vault",details:["HMAC Passphrase Derivation","Cloud API Key Vault (vault.py)","SEC-01..SEC-26 Security Gateways"]},{id:"supertonic-voice",title:"Supertonic Voice & ONNX Wake-Word",badge:"'Hey Meridian' Wake-Word",tagline:"Hands-free wake-word + 10-voice neural TTS",description:"Hands-free ONNX wake-word listener for 'Hey Meridian' (wakeword.py), Faster-Whisper local speech-to-text (stt.py), and 10-voice neural text-to-speech with Supertonic (tts.py).",iconName:"Volume2",accentColor:"#EC4899",metrics:"ONNX Wake-Word",details:["'Hey Meridian' Wake-Word (wakeword.py)","Faster-Whisper Local STT (stt.py)","Supertonic 10-Voice TTS (tts.py)"]}],jC=[{id:"cyber-slate",name:"Classic Cyber Slate",type:"Dark",accentColor:"#E8A020",typography:"IBM Plex Mono",description:"Solar Amber accents with deep slate obsidian backdrop"},{id:"art-deco",name:"Art Deco Luxury",type:"Dark",accentColor:"#D4AF37",typography:"Playfair Display (Serif)",description:"Metallic Gold geometric sophistication"},{id:"neobrutalism",name:"Neobrutalism",type:"Dark",accentColor:"#FFDE59",typography:"Space Grotesk",description:"Canary Yellow stark high-contrast boundaries"},{id:"cyberpunk-neon",name:"Cyberpunk Neon",type:"Dark",accentColor:"#FF0055",typography:"Orbitron",description:"Electric Magenta glowing terminal vibe"},{id:"retro-synthwave",name:"Retro Synthwave",type:"Dark",accentColor:"#FF71CE",typography:"VT323 (Pixel Mono)",description:"Hot Pink 80s arcade aesthetic"},{id:"ink-slate",name:"Ink & Slate",type:"Dark",accentColor:"#818CF8",typography:"Inter",description:"Muted Indigo clean developer workspace"},{id:"nordic-frost",name:"Nordic Frost",type:"Dark",accentColor:"#38BDF8",typography:"DM Sans",description:"Sky Blue crisp Scandinavian minimalism"},{id:"maximalism",name:"Maximalism",type:"Dark",accentColor:"#FF007A",typography:"Syne",description:"Vibrant Pink expressive high-density layout"},{id:"paper-ink",name:"Paper & Ink",type:"Light",accentColor:"#D95338",typography:"Lora (Serif)",description:"Terracotta Coral warm editorial feel"},{id:"sakura-blossom",name:"Sakura Blossom",type:"Light",accentColor:"#E85D75",typography:"Outfit",description:"Rose Quartz soft modern aesthetic"},{id:"solaris-light",name:"Solaris Light",type:"Light",accentColor:"#2563EB",typography:"DM Sans",description:"Cobalt Blue professional daylight layout"}],XC=[{name:"Tauri v2",role:"Desktop Core & Security Shell",description:"Rust-powered lightweight desktop container with zero Electron bloat, fast startup, frameless HUD, and native OS global hotkeys.",badge:"Rust v2 Engine",color:"#F59E0B"},{name:"FastAPI",role:"Async Local Execution Backend",description:"Asynchronous Python engine orchestrating local tool calling, system commands, SSE streaming, and background ReAct loops.",badge:"Async FastAPI",color:"#009688"},{name:"Turbovec & SQLite WAL",role:"On-Device Vector Memory & Storage",description:"Blazing fast local vector index storing embeddings for instant semantic RAG combined with SQLite WAL database persistence.",badge:"Vector RAG + WAL",color:"#8B5CF6"},{name:"Ollama Runtime",role:"Local LLM Inference Engine",description:"Direct hardware acceleration (CUDA/Metal/ROCm) running Qwen 2.5 Coder, Llama 3.2 Vision, and Nomic Embed locally.",badge:"GPU Accelerated",color:"#10B981"}],qC={ShieldCheck:u.jsx(mu,{size:22,color:"#10B981"}),Cpu:u.jsx($a,{size:22,color:"#E4E4E7"}),Users:u.jsx(AM,{size:22,color:"#F59E0B"}),GitMerge:u.jsx(gM,{size:22,color:"#8B5CF6"}),Network:u.jsx(MM,{size:22,color:"#EC4899"}),FileCode:u.jsx(ly,{size:22,color:"#38BDF8"}),MonitorPlay:u.jsx(SM,{size:22,color:"#67E8F9"}),History:u.jsx(vM,{size:22,color:"#14B8A6"}),MessageSquare:u.jsx(_M,{size:22,color:"#A78BFA"}),Sparkles:u.jsx(ka,{size:22,color:"#38BDF8"}),Server:u.jsx(Lp,{size:22,color:"#67E8F9"}),Plug:u.jsx(TM,{size:22,color:"#F43F5E"}),Zap:u.jsx(dy,{size:22,color:"#F59E0B"}),Layers:u.jsx(yM,{size:22,color:"#A78BFA"}),Lock:u.jsx(Ip,{size:22,color:"#10B981"}),ShieldAlert:u.jsx(Np,{size:22,color:"#EF4444"}),ClipboardList:u.jsx(cM,{size:22,color:"#8B5CF6"}),Volume2:u.jsx(CM,{size:22,color:"#EC4899"}),BarChart3:u.jsx(sM,{size:22,color:"#3B82F6"}),Database:u.jsx(fM,{size:22,color:"#14B8A6"}),Feather:u.jsx(pM,{size:22,color:"#64748B"})},YC=()=>{const[t,e]=Pe.useState("All"),[n,i]=Pe.useState("cyber-slate");return u.jsx("section",{id:"features",style:{padding:"90px 0",position:"relative",zIndex:1},children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 56px auto"},children:[u.jsxs("h2",{style:{fontSize:"clamp(2rem, 4vw, 3.2rem)",marginBottom:"18px",fontWeight:800},children:["Key Features & ",u.jsx("span",{className:"gradient-text-purple",children:"System Capabilities"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"Complete list of sovereign offline agentic functions, background surveillance engines, security gates, and UI companions."})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:[WC.map(r=>u.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"16px",background:"rgba(10, 10, 14, 0.92)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"16px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(5, 5, 8, 0.95)",border:`1px solid ${r.accentColor}44`,display:"flex",alignItems:"center",justifyContent:"center"},children:qC[r.iconName]}),u.jsx("span",{className:"glass-pill",style:{fontSize:"0.75rem",color:r.accentColor,borderColor:`${r.accentColor}44`,padding:"3px 10px"},children:r.badge})]}),u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:r.title}),u.jsx("div",{style:{fontSize:"0.84rem",color:r.accentColor,fontWeight:600,marginBottom:"8px"},children:r.tagline}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.55},children:r.description})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"auto",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:r.details.map((s,o)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",color:"#E2E8F0"},children:[u.jsx(Of,{size:13,color:r.accentColor}),u.jsx("span",{children:s})]},o))}),u.jsxs("div",{style:{paddingTop:"8px",display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-code)"},children:[u.jsx("span",{children:"Spec Target"}),u.jsx("span",{style:{color:r.accentColor,fontWeight:600},children:r.metrics})]})]},r.id)),u.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"14px",background:"rgba(18, 18, 28, 0.6)",border:"1px dashed rgba(255, 255, 255, 0.25)",position:"relative"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-code)",color:"#38BDF8",background:"rgba(56, 189, 248, 0.15)",padding:"3px 8px",borderRadius:"6px",fontWeight:700},children:"UPCOMING ROADMAP"}),u.jsx(ka,{size:18,color:"#38BDF8",className:"animate-pulse"})]}),u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:"More Features Coming Soon"}),u.jsx("div",{style:{fontSize:"0.84rem",color:"#38BDF8",fontWeight:600,marginBottom:"8px"},children:"Continuous Expansion & Community MCPs"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.55},children:"Active development pipeline introducing enhanced multi-modal agents, expanded MCP server ecosystem, and advanced workflow automation."})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"auto",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:["Multi-Agent Swarm Orchestration","Local Speech-to-Speech Engine","Automated Workflow Scripting","Community MCP Plugin Store"].map((r,s)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",color:"#E2E8F0"},children:[u.jsx(ka,{size:13,color:"#38BDF8"}),u.jsx("span",{children:r})]},s))}),u.jsxs("div",{style:{paddingTop:"8px",display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-code)"},children:[u.jsx("span",{children:"Status"}),u.jsx("span",{style:{color:"#38BDF8",fontWeight:600},children:"Active Development"})]})]})]}),u.jsxs("div",{style:{marginTop:"80px",paddingTop:"50px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[u.jsx("h3",{style:{fontSize:"clamp(1.8rem, 3vw, 2.5rem)",marginBottom:"10px",fontWeight:700},children:"11 Built-in Design Styles"}),u.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"640px",margin:"0 auto 20px auto",fontSize:"0.95rem"},children:"Selectable in Settings → Mascot & Style with live visual theme swatches & font pairings."}),u.jsx("div",{style:{display:"inline-flex",gap:"8px",background:"rgba(15, 15, 20, 0.8)",padding:"6px",borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:["All","Dark","Light"].map(r=>u.jsxs("button",{onClick:()=>e(r),style:{background:t===r?"var(--cyan-accent)":"transparent",color:t===r?"#000000":"var(--text-muted)",fontWeight:t===r?700:500,border:"none",borderRadius:"8px",padding:"6px 16px",fontSize:"0.82rem",cursor:"pointer",transition:"all 0.2s ease"},children:[r," Themes"]},r))})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px"},children:jC.filter(r=>t==="All"||r.type===t).map(r=>{const s=n===r.id;return u.jsxs("div",{onClick:()=>i(r.id),style:{background:r.type==="Dark"?"rgba(12, 12, 18, 0.9)":"rgba(240, 240, 245, 0.95)",color:r.type==="Dark"?"#FFFFFF":"#111827",border:`2px solid ${s?r.accentColor:"rgba(255, 255, 255, 0.1)"}`,borderRadius:"14px",padding:"18px",cursor:"pointer",transition:"all 0.2s ease"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:r.accentColor,boxShadow:`0 0 8px ${r.accentColor}`}}),u.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem"},children:r.name})]}),u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:600,padding:"2px 8px",borderRadius:"6px",background:r.type==="Dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",color:r.type==="Dark"?"#E2E8F0":"#334155"},children:r.type})]}),u.jsx("p",{style:{fontSize:"0.8rem",opacity:.8,marginBottom:"10px",lineHeight:1.4},children:r.description}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.75rem",fontFamily:r.typography.includes("Mono")||r.typography.includes("VT323")?"monospace":"sans-serif",paddingTop:"8px",borderTop:`1px solid ${r.type==="Dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}`},children:[u.jsxs("span",{children:["Font: ",r.typography]}),s&&u.jsx(Of,{size:14,color:r.accentColor})]})]},r.id)})})]})]})})},Kl=[{stepNum:1,layerTitle:"1️⃣ Trigger & Entry Layer",subtitle:"Workspace Chat, ONNX Wake-Word, Social Bridges & P2P Mesh",accentColor:"#818CF8",nodes:[{id:"t1",name:"💬 Workspace Chat UI",badge:"Tauri v2",tech:"React 18",desc:"Main desktop workspace window & React chat shell",color:"#818CF8"},{id:"t2",name:"🎮 Overlay HUD (Alt+Shift+M)",badge:"Sub-10ms",tech:"Tauri IPC",desc:"Frameless GPU overlay & compact mascot island",color:"#38BDF8"},{id:"t3",name:'🎙️ Wake Word ("Hey Meridian")',badge:"ONNX Engine",tech:"wakeword.py",desc:"Hands-free ONNX wake-word listener & Supertonic voice",color:"#EC4899"},{id:"t4",name:"📋 Clipboard & Watchers",badge:"clipboard.py",tech:"watcher.py",desc:"50-slot pastebuffer listener & proactive event monitors",color:"#A78BFA"},{id:"t5",name:"🤖 Social Bot Bridges",badge:"Discord/TG/WA",tech:"social_bridge",desc:"Discord, Telegram & WhatsApp remote control bridges",color:"#67E8F9"},{id:"t6",name:"🌐 Remote & P2P Peer Req",badge:"P2P Mesh",tech:"p2p.py (8765)",desc:"Remote backend URL switcher & P2P mesh task offload",color:"#34D399"}]},{stepNum:2,layerTitle:"2️⃣ Security & Verification Gate",subtitle:"SEC-01..SEC-26 Security, Rate Limiting & Sandboxed Execution",accentColor:"#38BDF8",nodes:[{id:"s1",name:"🛡️ Auth Check (X-API-Key)",badge:"require_api_key",tech:"FastAPI Depends",desc:"X-API-Key middleware & token auth verification",color:"#38BDF8"},{id:"s2",name:"⏱️ SlowAPI Rate Limiter",badge:"SlowAPI",tech:"20 req/min",desc:"20 req/min chat & 10 req/min vault endpoint protection",color:"#0EA5E9"},{id:"s3",name:"🧹 Prompt Injection Sanitizer",badge:"SEC-16",tech:"prompt_injection.py",desc:"Strips jailbreak directives & zero-width unicode exploits",color:"#0284C7"},{id:"s4",name:"🛡️ Defense & Sandbox Runner",badge:"system_defense",tech:"sandbox_runner.py",desc:"System Defense Shield and isolated execution runner",color:"#6366F1"}]},{stepNum:3,layerTitle:"3️⃣ Unified Context Assembly",subtitle:"Turbovec Vector RAG, Knowledge Graph & LSP Symbols",accentColor:"#67E8F9",nodes:[{id:"c1",name:"⚡ Turbovec Vector RAG",badge:"< 1ms RAG",tech:"rag_optimizer.py",desc:"Local vector store for document & repo embeddings",color:"#67E8F9"},{id:"c2",name:"🕸️ Knowledge Graph",badge:"graph_rag.py",tech:"SQLite WAL + Mongo",desc:"Entity-relationship graph memory with Mongo sync",color:"#22D3EE"},{id:"c3",name:"📜 Temporal Memory History",badge:"Timeline.tsx",tech:"temporal_memory.py",desc:"Granular conversation snapshots & time-travel rollback",color:"#06B6D4"},{id:"c4",name:"💻 System Specs & Env State",badge:"hardware_detector.py",tech:"pynvml + Ollama Scan",desc:"Entry/Mid/High tier classification & multi-port scan",color:"#38BDF8"},{id:"c5",name:"🔍 Code Graph & LSP Symbols",badge:"code_graph.py",tech:"lsp_client.py",desc:"LSP client symbol graph, AST references & linting",color:"#A78BFA"}]},{stepNum:4,layerTitle:"4️⃣ Reasoning & Execution Engine",subtitle:"ReAct Loop (loop.py), Multi-Agent Swarm & Workflow DAG",accentColor:"#A78BFA",nodes:[{id:"r1",name:"🧠 LLM ReAct Loop (loop.py)",badge:"Async ReAct",tech:"loop.py",desc:"Asynchronous Reason → Act → Observe iterative execution loop",color:"#A78BFA"},{id:"r2",name:"🐝 Swarm Debate Engine",badge:"SwarmDebate.tsx",tech:"swarm.py",desc:"Multi-agent persona debate & adversarial consensus",color:"#F59E0B"},{id:"r3",name:"⚡ Workflow DAG Engine",badge:"WorkflowBuilder",tech:"workflow_engine.py",desc:"Node-based visual automation graph & conditional loops",color:"#8B5CF6"},{id:"r4",name:"❓ Tool Signature Auditor",badge:"TOOL_REGISTRY",tech:"registry.py",desc:"Validates tool schemas & code blocks before execution",color:"#7C3AED"},{id:"r5",name:"🩹 Self-Healing Corrector",badge:"Auto-Fix",tech:"Parameter Corrector",desc:"Catches schema mismatches & re-injects repaired arguments",color:"#EC4899"}]},{stepNum:5,layerTitle:"5️⃣ Tiered Tool & Automation Execution",subtitle:"Speculative Concurrency, Playwright & P2P Mesh",accentColor:"#4ADE80",nodes:[{id:"e1",name:"⚡ Tier 0 (Parallel Read-Only)",badge:"asyncio.gather",tech:"Parallel Exec",desc:"Executes read_file, search_web, code_graph concurrently",color:"#4ADE80",subItems:["read_file","search_web","code_graph","db_query"]},{id:"e2",name:"🔒 Tier 1+ (Mutating Sequential)",badge:"Transaction Safety",tech:"Sequential Gate",desc:"Executes write_file, run_command in transactional safety",color:"#FB923C",subItems:["write_file","run_command","desktop_gui","browser_agent"]},{id:"e3",name:"🌐 Playwright & Desktop Agent",badge:"browser_agent.py",tech:"desktop.py",desc:"Playwright web agent & GUI mouse/keyboard recording",color:"#38BDF8"},{id:"e4",name:"🔌 MCP Marketplace & P2P Mesh",badge:"/api/mcp/v1/tools",tech:"p2p.py + MCP",desc:"Reverse MCP server at /api/mcp/v1/tools & P2P task offload",color:"#F43F5E"}]},{stepNum:6,layerTitle:"6️⃣ Telemetry, Persistence & Output",subtitle:"AES Vault, Temporal Snapshots & 3D Mascot Ring",accentColor:"#FF71CE",nodes:[{id:"o1",name:"👁️ Observe & Merge Output",badge:"ReAct Cycle",tech:"Loop Evaluator",desc:"Merges tool outputs & checks task completion status",color:"#FF71CE"},{id:"o2",name:"🔐 AES-256-GCM Key Vault",badge:"vault.py",tech:"HMAC Passphrase",desc:"AES-GCM encryption bound to hostname + username + salt",color:"#FFDE59"},{id:"o3",name:"💾 SQLite WAL & Temporal Log",badge:"temporal_memory",tech:"database.py",desc:"Task execution logging & time-travel state rollback",color:"#34D399"},{id:"o4",name:"📡 Real-Time SSE Telemetry",badge:"/api/chat/stream",tech:"SSE Stream",desc:"Streams PLANNING, EXEC, STATUS, WARNING telemetry to UI",color:"#38BDF8"},{id:"o5",name:"🔊 Supertonic Neural TTS",badge:"duplex.py",tech:"tts.py + stt.py",desc:"10-voice local neural speech synthesis & Faster-Whisper STT",color:"#EC4899"},{id:"o6",name:"🦊 3D Mascot State Animation",badge:"Three.js 60 FPS",tech:"Mascot.tsx",desc:"Blue (Idle), Amber (Working), Red (Error), Green (Success)",color:"#10B981"}]}],$C=()=>{const[t,e]=Pe.useState(Kl[3].nodes[0]),[n,i]=Pe.useState("ALL");return u.jsxs("div",{style:{width:"100%"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[u.jsx("h3",{style:{fontSize:"clamp(1.6rem, 2.5vw, 2.2rem)",fontWeight:800,marginBottom:"8px"},children:"Meridian-X 6-Layer Execution Pipeline"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",maxWidth:"640px",margin:"0 auto"},children:"Interactive system flow: click any node to inspect data contracts, execution concurrency, and telemetry streams."}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"6px",flexWrap:"wrap",marginTop:"18px"},children:[u.jsx("button",{onClick:()=>i("ALL"),style:{padding:"6px 12px",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.15)",background:n==="ALL"?"rgba(255, 255, 255, 0.15)":"rgba(12, 12, 18, 0.8)",color:n==="ALL"?"#FFF":"var(--text-dim)",fontSize:"0.78rem",fontWeight:600,cursor:"pointer"},children:"Show All Layers"}),Kl.map(r=>u.jsxs("button",{onClick:()=>i(r.stepNum),style:{padding:"6px 12px",borderRadius:"8px",border:`1px solid ${n===r.stepNum?r.accentColor:"rgba(255, 255, 255, 0.1)"}`,background:n===r.stepNum?`${r.accentColor}22`:"rgba(12, 12, 18, 0.8)",color:n===r.stepNum?r.accentColor:"var(--text-dim)",fontSize:"0.78rem",fontWeight:600,cursor:"pointer"},children:["Layer ",r.stepNum]},r.stepNum))]})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",position:"relative"},children:Kl.filter(r=>n==="ALL"||n===r.stepNum).map((r,s)=>u.jsxs("div",{style:{position:"relative"},children:[u.jsxs("div",{style:{background:"rgba(14, 14, 20, 0.95)",border:`1px solid ${r.accentColor}44`,borderLeft:`5px solid ${r.accentColor}`,borderRadius:"12px",padding:"14px 20px",marginBottom:"14px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:`0 4px 20px ${r.accentColor}15`},children:[u.jsxs("div",{children:[u.jsx("strong",{style:{fontSize:"1.05rem",color:"#FFF"},children:r.layerTitle}),u.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginLeft:"12px"},children:r.subtitle})]}),u.jsxs("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-code)",color:r.accentColor,background:`${r.accentColor}22`,padding:"3px 10px",borderRadius:"6px",fontWeight:700},children:[r.nodes.length," Component Nodes"]})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"14px"},children:r.nodes.map(o=>{const a=t.id===o.id;return u.jsxs("div",{onClick:()=>e(o),style:{background:a?"rgba(20, 20, 30, 0.95)":"rgba(10, 10, 14, 0.8)",border:`2px solid ${a?o.color:"rgba(255, 255, 255, 0.08)"}`,borderRadius:"12px",padding:"16px",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:a?"translateY(-2px)":"none",boxShadow:a?`0 8px 24px ${o.color}33`:"none"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[u.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"#FFF"},children:o.name}),u.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-code)",color:o.color,background:`${o.color}22`,padding:"2px 6px",borderRadius:"4px"},children:o.badge})]}),u.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",lineHeight:1.4,marginBottom:"10px"},children:o.desc}),o.subItems&&u.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:o.subItems.map(l=>u.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-code)",background:"rgba(255, 255, 255, 0.06)",color:"#E2E8F0",padding:"1px 6px",borderRadius:"4px"},children:l},l))}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.72rem",color:"var(--text-dim)",borderTop:"1px solid rgba(255, 255, 255, 0.06)",paddingTop:"8px"},children:[u.jsxs("span",{children:["Tech: ",o.tech]}),a&&u.jsx(Nr,{size:13,color:o.color})]})]},o.id)})}),s<Kl.length-1&&n==="ALL"&&u.jsx("div",{style:{textAlign:"center",margin:"10px 0 -10px 0",opacity:.4},children:u.jsx(rM,{size:18,color:r.accentColor,className:"animate-bounce"})})]},r.stepNum))}),u.jsxs("div",{style:{marginTop:"32px",background:"rgba(12, 12, 18, 0.95)",border:`1px solid ${t.color}`,borderRadius:"16px",padding:"24px",boxShadow:`0 10px 30px ${t.color}22`},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(ly,{size:18,color:t.color}),u.jsx("h4",{style:{fontSize:"1.15rem",color:"#FFF"},children:t.name})]}),u.jsx("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-code)",color:t.color,background:`${t.color}22`,padding:"3px 10px",borderRadius:"6px"},children:t.tech})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",lineHeight:1.6,marginBottom:"16px"},children:t.desc}),u.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.8rem",color:"#E2E8F0",fontFamily:"var(--font-code)"},children:[u.jsxs("span",{children:["Execution Target: ",u.jsx("strong",{style:{color:t.color},children:"100% On-Device / Sandboxed"})]}),u.jsxs("span",{children:["Security Gate: ",u.jsx("strong",{style:{color:"#10B981"},children:"Enforced (SEC-01..SEC-26)"})]}),u.jsxs("span",{children:["Latency Spec: ",u.jsx("strong",{style:{color:"#38BDF8"},children:"Microsecond IPC"})]})]})]})]})},KC=()=>u.jsx("section",{id:"architecture",style:{padding:"110px 0",position:"relative",zIndex:1,background:"#030303"},children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 64px auto"},children:[u.jsxs("h2",{style:{fontSize:"clamp(2.2rem, 4vw, 3.4rem)",marginBottom:"20px",letterSpacing:"-0.03em"},children:["Engineered for ",u.jsx("span",{className:"gradient-text-cyan",children:"Sub-Millisecond Autonomy."})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.08rem",lineHeight:1.65},children:"Decoupled multi-process pipeline uniting Rust native speed, FastAPI async control loops, embedded vector memory, and offline GPU inference."})]}),u.jsx("div",{style:{marginBottom:"48px"},children:u.jsx($C,{})}),u.jsx("div",{style:{marginBottom:"24px",fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-dim)",fontWeight:700},children:"Core Infrastructure Components"}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"24px"},children:XC.map(t=>u.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"14px",background:"rgba(12, 12, 16, 0.92)",borderColor:"rgba(255, 255, 255, 0.08)"},children:[u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:u.jsx("span",{className:"glass-pill",style:{fontSize:"0.72rem",color:"#FAFAFA",borderColor:"rgba(255, 255, 255, 0.2)",padding:"3px 10px"},children:t.badge})}),u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:t.name}),u.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:600},children:t.role})]}),u.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:1.55},children:t.description})]},t.name))}),u.jsxs("div",{style:{marginTop:"70px",paddingTop:"50px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[u.jsx("h3",{style:{fontSize:"clamp(1.6rem, 2.5vw, 2.2rem)",fontWeight:700,marginBottom:"10px"},children:"System Requirements & Platform Support"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem"},children:"Optimized for hardware efficiency with optional hybrid cloud offloading for CPU-only systems."})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"28px"},children:[u.jsxs("div",{style:{background:"rgba(12, 12, 18, 0.9)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",padding:"24px"},children:[u.jsxs("h4",{style:{fontSize:"1.1rem",marginBottom:"16px",color:"#FFF",display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx($a,{size:18,color:"#3B82F6"}),u.jsx("span",{children:"Hardware Specifications"})]}),u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"var(--text-dim)",textAlign:"left"},children:[u.jsx("th",{style:{padding:"8px 0"},children:"Tier"}),u.jsx("th",{style:{padding:"8px 0"},children:"Minimum"}),u.jsx("th",{style:{padding:"8px 0",color:"#10B981"},children:"Recommended"})]})}),u.jsxs("tbody",{style:{color:"#E2E8F0"},children:[u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"CPU"}),u.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"i5 / Ryzen 5 (AVX2)"}),u.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"i7 / Ryzen 7+ (8+ cores)"})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"RAM"}),u.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"8 GB (Entry Tier)"}),u.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"16–32 GB (Mid/High Tier)"})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"GPU / VRAM"}),u.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"Iris Xe / Vega"}),u.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"RTX 3060+ (8 GB+ VRAM)"})]}),u.jsxs("tr",{children:[u.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"Storage"}),u.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"10 GB SSD"}),u.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"30 GB+ NVMe"})]})]})]})]}),u.jsxs("div",{style:{background:"rgba(12, 12, 18, 0.9)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",padding:"24px"},children:[u.jsxs("h4",{style:{fontSize:"1.1rem",marginBottom:"16px",color:"#FFF",display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(Up,{size:18,color:"#10B981"}),u.jsx("span",{children:"OS Platform Support"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[u.jsxs("div",{children:[u.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"Windows 11 (64-bit)"}),u.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"NSIS Exe & MSI Package"})]}),u.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(Nr,{size:15})," Native Tauri v2"]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[u.jsxs("div",{children:[u.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"macOS 12+"}),u.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Apple Silicon & Intel DMG"})]}),u.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(Nr,{size:15})," Native Tauri v2"]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[u.jsxs("div",{children:[u.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"Linux Kernel 5.4+"}),u.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Ubuntu / Debian / Arch / Fedora"})]}),u.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(Nr,{size:15})," Native Tauri v2"]})]})]})]})]})]}),u.jsxs("div",{style:{marginTop:"60px",paddingTop:"40px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[u.jsx("h3",{style:{fontSize:"clamp(1.5rem, 2.2vw, 2rem)",fontWeight:700,marginBottom:"8px"},children:"REST API & Config Specification Reference"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem"},children:"Open FastAPI REST endpoints and local environment key schema from PROJECT_CONTEXT.md."})]}),u.jsx("div",{style:{background:"rgba(10, 10, 14, 0.95)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",overflow:"hidden"},children:u.jsx("div",{style:{overflowX:"auto"},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.84rem",textAlign:"left"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{background:"rgba(20, 20, 30, 0.95)",color:"#FFF",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[u.jsx("th",{style:{padding:"12px 18px"},children:"Endpoint"}),u.jsx("th",{style:{padding:"12px 18px"},children:"Method"}),u.jsx("th",{style:{padding:"12px 18px"},children:"Description"})]})}),u.jsxs("tbody",{style:{color:"#E2E8F0",fontFamily:"var(--font-code)"},children:[u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/health"}),u.jsx("td",{style:{padding:"10px 18px",color:"#10B981"},children:"GET"}),u.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Returns system health, version, and background daemon status"})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/onboarding/hardware-spec"}),u.jsx("td",{style:{padding:"10px 18px",color:"#10B981"},children:"GET"}),u.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Returns CPU cores, RAM GB, GPU VRAM (hardware_detector.py)"})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/chat/stream"}),u.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),u.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Executes ReAct loop (loop.py) and streams telemetry events via SSE"})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/swarm/stream"}),u.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),u.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Streams multi-agent persona swarm debate deliberation (swarm.py)"})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/history/rollback"}),u.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),u.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Rolls back workspace session state to historical snapshot (Timeline.tsx)"})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/sandbox/run"}),u.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),u.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Executes code snippet inside isolated sandbox runner (sandbox_runner.py)"})]}),u.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[u.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/vault/keys"}),u.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),u.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Encrypts API credential into AES-256-GCM vault (vault.py)"})]}),u.jsxs("tr",{children:[u.jsx("td",{style:{padding:"10px 18px",color:"#F43F5E"},children:"/api/mcp/v1/tools"}),u.jsx("td",{style:{padding:"10px 18px",color:"#10B981"},children:"GET"}),u.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Returns reverse MCP server tool schemas for external IDE consumption"})]})]})]})})})]})]})}),ZC=[{name:"Reverse MCP Server",category:"IDE Integration",description:"Exposes internal TOOL_REGISTRY at /api/mcp/v1/tools for Cursor, VS Code & Claude Desktop.",installed:!0,color:"#F43F5E"},{name:"GitHub Protocol",category:"Code Automation",description:"Create PRs, read repos, review code diffs & manage issues locally via mcp_client.py.",installed:!0,color:"#FAFAFA"},{name:"PostgreSQL Direct",category:"Database RAG",description:"Inspect schemas, run sandboxed queries, and vectorize database rows into Turbovec.",installed:!0,color:"#E4E4E7"},{name:"Linear Workflows",category:"Issue Tracking",description:"Sync project tasks, estimate issues, and auto-update sprint status.",installed:!1,color:"#10B981"},{name:"Slack Local Bridge",category:"Communications",description:"Summarize internal threads and draft responses securely.",installed:!1,color:"#38BDF8"}],QC=()=>u.jsxs("section",{id:"mcp",style:{padding:"100px 0",position:"relative",zIndex:1},children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{style:{textAlign:"center",maxWidth:"760px",margin:"0 auto 60px auto"},children:[u.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Universal MCP Marketplace & ",u.jsx("span",{className:"gradient-text-amber",children:"Encrypted Key Vault."})]}),u.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:["Connect Meridian-X to your developer toolchain via open Model Context Protocol (MCP) servers and export your tool registry via reverse MCP server at ",u.jsx("code",{children:"/api/mcp/v1/tools"}),"."]})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(300px, 380px) 1fr",gap:"28px",alignItems:"start"},className:"mcp-grid",children:[u.jsxs("div",{className:"glass-card",style:{padding:"32px",display:"flex",flexDirection:"column",gap:"20px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[u.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx(Ip,{size:22,color:"var(--emerald-accent)"})}),u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1.15rem"},children:"Local Key Vault (vault.py)"}),u.jsx("span",{style:{fontSize:"0.78rem",color:"var(--emerald-accent)",fontFamily:"var(--font-code)"},children:"AES-256-GCM Hardware Vault"})]})]}),u.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",lineHeight:1.6},children:["API keys & secrets stay AES-256-GCM encrypted in your local vault (",u.jsx("code",{children:"vault.py"}),"). Machine-bound HMAC-SHA256 passphrase derived from ",u.jsx("code",{children:"hostname + username + salt"})," with ",u.jsx("code",{children:"SlowAPI"})," rate limiting (10 req/min). Zero plain text stored."]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsxs("div",{style:Vd,children:[u.jsx(Qu,{size:14,color:"var(--emerald-accent)"}),u.jsx("span",{children:"OpenAI / Anthropic / Gemini Key"}),u.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]}),u.jsxs("div",{style:Vd,children:[u.jsx(Qu,{size:14,color:"var(--emerald-accent)"}),u.jsx("span",{children:"Groq / OpenRouter / DeepSeek"}),u.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]}),u.jsxs("div",{style:Vd,children:[u.jsx(Qu,{size:14,color:"var(--emerald-accent)"}),u.jsx("span",{children:"Tavily / Discord / Telegram Bot Token"}),u.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]})]})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"18px"},children:ZC.map(t=>u.jsxs("div",{className:"glass-card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"14px",borderColor:t.installed?`${t.color}44`:"var(--border-glass)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("span",{style:{fontSize:"0.75rem",color:t.color,fontFamily:"var(--font-code)"},children:t.category}),u.jsx("span",{className:"glass-pill",style:{fontSize:"0.7rem",padding:"2px 8px",color:t.installed?"var(--emerald-accent)":"var(--text-muted)",borderColor:t.installed?"rgba(16, 185, 129, 0.3)":"var(--border-glass)"},children:t.installed?"Installed":"1-Click Add"})]}),u.jsxs("div",{children:[u.jsx("h4",{style:{fontSize:"1.05rem",marginBottom:"4px"},children:t.name}),u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.5},children:t.description})]})]},t.name))})]})]}),u.jsx("style",{children:`
        @media (max-width: 868px) {
          .mcp-grid { grid-template-columns: 1fr !important; }
        }
      `})]}),Vd={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.6)",border:"1px solid var(--border-glass)",fontSize:"0.82rem",color:"var(--text-main)",fontFamily:"var(--font-code)"},j0=[{feature:"Data Execution & Privacy",meridianX:"100% Offline (Local GGUF via Ollama)",cloudAgents:"Cloud Servers (Data sent externally)",highlight:!0},{feature:"Multi-Agent Swarm Debate",meridianX:"Adversarial consensus & persona debate (swarm.py)",cloudAgents:"Single model output (No debate)",highlight:!0},{feature:"Visual Workflow DAG Builder",meridianX:"Drag-and-Drop Node Graph (WorkflowBuilder.tsx)",cloudAgents:"Linear prompt chains",highlight:!1},{feature:"P2P Encrypted Peer Mesh",meridianX:"Distributed LAN/WAN offloading (p2p.py)",cloudAgents:"Centralized server lock-in",highlight:!1},{feature:"Overlay Launcher & Hotkeys",meridianX:"Sub-10ms Overlay (Alt+M, Alt+Shift+M, Alt+V)",cloudAgents:"Browser-only / High latency API",highlight:!0},{feature:"Playwright & Desktop GUI Agent",meridianX:"Web browser agent & desktop macro recorder",cloudAgents:"Text-only web responses",highlight:!1},{feature:"Autonomous ReAct Loop",meridianX:"Self-Healing AST & Fast Auditor (loop.py)",cloudAgents:"Basic Prompting / Retries",highlight:!0},{feature:"Temporal History Rollback",meridianX:"Granular snapshots & time-travel rollback",cloudAgents:"Transient chat logs",highlight:!1},{feature:"API Key Security",meridianX:"AES-256-GCM Vault (vault.py) + HMAC Passphrase",cloudAgents:"Plaintext / Server-Side Key Vault",highlight:!1},{feature:"Voice Engine & Wake-Word",meridianX:"'Hey Meridian' ONNX Wake-Word + 10 Local Voices",cloudAgents:"Cloud API TTS ($/char)",highlight:!1},{feature:"Monthly Cost",meridianX:"$0 / Forever Free & Open Source",cloudAgents:"$20 - $500 / month Subscription",highlight:!0}],JC=()=>u.jsxs("section",{style:{padding:"100px 0",position:"relative",zIndex:1},children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 60px auto"},children:[u.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Built Sovereign. ",u.jsx("span",{className:"gradient-text-cyan",children:"Compared to Cloud Agents."})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"See why developers and privacy-focused teams choose local execution over centralized cloud LLM services."})]}),u.jsx("div",{className:"glow-border-card",style:{maxWidth:"960px",margin:"0 auto",background:"rgba(10, 10, 14, 0.95)"},children:u.jsxs("div",{className:"glow-border-card-inner",style:{padding:"0",overflow:"hidden",background:"#050508"},children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.4fr 1.2fr 1fr",background:"rgba(14, 14, 18, 0.98)",padding:"20px 28px",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",fontWeight:700,fontSize:"0.95rem"},className:"matrix-header",children:[u.jsx("div",{style:{color:"var(--text-muted)"},children:"Feature Architecture"}),u.jsxs("div",{style:{color:"#FFFFFF",display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(ka,{size:16}),u.jsx("span",{children:"Meridian-X (Sovereign)"})]}),u.jsx("div",{style:{color:"var(--text-dim)"},children:"Cloud AI Agents"})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column"},children:j0.map((t,e)=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.4fr 1.2fr 1fr",padding:"18px 28px",borderBottom:e<j0.length-1?"1px solid var(--border-glass)":"none",background:t.highlight?"rgba(0, 242, 254, 0.03)":"transparent",alignItems:"center",fontSize:"0.9rem"},className:"matrix-row",children:[u.jsx("div",{style:{fontWeight:600,color:"var(--text-main)"},children:t.feature}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--emerald-accent)",fontWeight:600},children:[u.jsx(ji,{size:16,color:"var(--emerald-accent)"}),u.jsx("span",{children:t.meridianX})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--text-dim)"},children:[u.jsx(Mo,{size:15,color:"#F43F5E"}),u.jsx("span",{children:t.cloudAgents})]})]},t.feature))})]})})]}),u.jsx("style",{children:`
        @media (max-width: 768px) {
          .matrix-header, .matrix-row {
            grid-template-columns: 1fr !important;
            gap: 8px;
          }
        }
      `})]}),eR=[{question:"How does the Multi-Agent Swarm & Debate Engine work?",answer:"The Swarm Debate Engine (swarm.py, SwarmDebate.tsx) orchestrates multi-perspective autonomous deliberations between customizable agent personas (Security Auditor, Code Architect, Performance Optimizer). It streams real-time debate thoughts via /api/swarm/stream for adversarial consensus validation."},{question:"What is the P2P Mesh Network & Encrypted Peer Offloading?",answer:"The P2P mesh engine (p2p.py, p2p_crypto.py) discovers local LAN/WAN Meridian-X nodes over port 8765. Tasks can be offloaded securely using end-to-end asymmetric encryption keys across trusted peer nodes."},{question:"How does Temporal Memory & Time-Travel Rollback work?",answer:"Temporal memory (temporal_memory.py, Timeline.tsx) captures granular session snapshots of workspace state, code changes, and task outputs. You can roll back workspace state to any historical snapshot via /api/history/rollback."},{question:"How does the Non-Techie Onboarding Wizard work?",answer:"The onboarding wizard (OnboardingWizard.tsx) runs hardware spec detection (hardware_detector.py) analyzing CPU cores, RAM, and NVIDIA VRAM (pynvml) to classify your PC into Entry (<8GB), Mid (8-16GB), or High (>16GB) tiers. It automatically scans Ollama ports 11434, 11435, 8080, and 5000 (ollama_manager.py) and streams model pulls via real-time SSE."},{question:"Can I self-host Meridian-X remotely using Docker?",answer:"Yes! Meridian-X supports remote backend self-hosting via docker-compose.yml (direct IP) or production docker-compose.prod.yml (with automated Caddy SSL reverse proxy). You can switch target servers instantly using the Server Connection Modal (MERIDIAN_REMOTE_BACKEND_URL). Full instructions are in docs/SELF_HOSTING.md."},{question:"What is the Reverse MCP Server feature?",answer:"In addition to connecting 1-click MCP plugins (GitHub, PostgreSQL, Slack, Linear), Meridian-X exposes its internal TOOL_REGISTRY as a reverse MCP server at /api/mcp/v1/tools. This allows external IDEs like Cursor, VS Code, and Claude Desktop to consume Meridian-X tools directly."},{question:"What global hotkeys are supported in Meridian-X?",answer:"Meridian-X provides sub-10ms global shortcuts: `Alt + M` toggles the main desktop workspace window, `Alt + Shift + M` toggles the compact 3D mascot floating island HUD, and `Alt + V` triggers instant push-to-talk voice dictation."},{question:`Why does macOS say Meridian-X is "damaged and can't be opened"?`,answer:"Meridian-X is a 100% free open-source desktop app that uses ad-hoc code signing. Apple Gatekeeper blocks unsigned open-source binaries by default. To fix this instantly, drag meridian-x.app into /Applications, open Terminal, and run: `sudo xattr -r -d com.apple.quarantine /Applications/meridian-x.app`. Alternatively, run our 1-line installer: `curl -fsSL https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.sh | bash`."},{question:"How does 100% offline privacy and AES-GCM Vault work?",answer:"Meridian-X embeds local Ollama runtime and Turbovec vector storage. Credentials are encrypted in local vault (vault.py) via AES-256-GCM with machine-bound HMAC-SHA256 passphrase derivation (hostname + username + salt). Zero code, API keys, or prompt telemetry ever leave your device."}],tR=()=>{const[t,e]=Pe.useState(0),n=i=>{e(t===i?null:i)};return u.jsx("section",{style:{padding:"100px 0",position:"relative",zIndex:1},children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{style:{textAlign:"center",maxWidth:"760px",margin:"0 auto 60px auto"},children:[u.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Frequently Asked ",u.jsx("span",{className:"gradient-text-cyan",children:"Questions."})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"Everything you need to know about setting up local inference, hardware security, and ReAct loops."})]}),u.jsx("div",{style:{maxWidth:"820px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"16px"},children:eR.map((i,r)=>{const s=t===r;return u.jsxs("div",{className:"glass-card",onClick:()=>n(r),style:{padding:"22px 28px",cursor:"pointer",borderColor:s?"var(--border-cyan)":"var(--border-glass)",transition:"all 0.25s ease"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[u.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,color:s?"var(--cyan-primary)":"var(--text-main)"},children:i.question}),u.jsx("div",{style:{transform:s?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease",color:s?"var(--cyan-primary)":"var(--text-muted)"},children:u.jsx(aM,{size:20})})]}),s&&u.jsx("div",{style:{marginTop:"14px",paddingTop:"14px",borderTop:"1px dashed rgba(255,255,255,0.08)",color:"var(--text-muted)",fontSize:"0.94rem",lineHeight:1.6},children:i.answer})]},i.question)})}),u.jsx("div",{style:{maxWidth:"820px",margin:"48px auto 0 auto"},children:u.jsxs("div",{className:"glass-card",style:{padding:"36px",textAlign:"center",border:"1px solid rgba(0, 242, 254, 0.2)"},children:[u.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:700,color:"#FFF",marginBottom:"8px"},children:"Subscribe to Release & Security Alerts"}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"24px"},children:"Receive cryptographically signed release updates and security advisories. Zero spam, 1-click unsubscribe."}),u.jsx(nR,{})]})})]})})},nR=()=>{const[t,e]=Pe.useState(""),[n,i]=Pe.useState(null),[r,s]=Pe.useState(!1),[o,a]=Pe.useState(!1),l=c=>{if(c.preventDefault(),!t||!t.includes("@")||!t.includes(".")){i("Please enter a valid cryptographic email address (e.g. user@domain.com)");return}i(null),s(!0),setTimeout(()=>{s(!1),a(!0)},1e3)};return o?u.jsx("div",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",borderRadius:"10px",padding:"16px",color:"#10B981",fontSize:"0.95rem"},children:"✓ Subscribed successfully! Sovereign update stream confirmed."}):u.jsxs("form",{onSubmit:l,style:{maxWidth:"520px",margin:"0 auto"},noValidate:!0,children:[u.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[u.jsx("div",{style:{flex:1,minWidth:"240px",position:"relative"},children:u.jsx("input",{type:"email",placeholder:"enter@developer-email.com",value:t,onChange:c=>{e(c.target.value),n&&i(null)},"aria-invalid":!!n,style:{width:"100%",padding:"14px 18px",borderRadius:"8px",background:"rgba(0, 0, 0, 0.6)",border:n?"1px solid #EF4444":"1px solid rgba(255, 255, 255, 0.15)",color:"#FFFFFF",fontSize:"0.95rem",outline:"none",transition:"border 0.2s ease",boxShadow:n?"0 0 12px rgba(239, 68, 68, 0.3)":"none"}})}),u.jsx("button",{type:"submit",disabled:r,className:"btn-primary",style:{padding:"14px 24px",fontSize:"0.92rem",opacity:r?.7:1},children:r?u.jsx("div",{style:{width:16,height:16,border:"2px solid rgba(0,0,0,0.2)",borderTopColor:"#000",borderRadius:"50%",animation:"spin 0.6s linear infinite"}}):"Subscribe"})]}),n&&u.jsxs("div",{style:{color:"#EF4444",fontSize:"0.82rem",textAlign:"left",marginTop:"8px",display:"flex",alignItems:"center",gap:"6px"},children:["⚠️ ",n]})]})},iR=({onDownloadClick:t,detectedOS:e})=>(gu(),u.jsx("footer",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(5, 5, 8, 0.85)",backdropFilter:"blur(10px)",padding:"80px 0 40px 0",position:"relative",zIndex:1},children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"40px",marginBottom:"60px"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx("img",{src:"/logo.png",alt:"Meridian-X Logo",style:{width:"34px",height:"34px",borderRadius:"50%",objectFit:"cover",border:"1px solid rgba(255, 255, 255, 0.25)",boxShadow:"0 0 12px rgba(255, 255, 255, 0.15)"}}),u.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.25rem",color:"#FFF"},children:["Meridian",u.jsx("span",{style:{color:"#A1A1AA",fontWeight:600},children:"-X"})]})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6},children:"Local execution. Total privacy. Absolute autonomy. Sovereign desktop AI continuous reasoning engine."}),u.jsxs("div",{style:{fontSize:"0.85rem",color:"#FAFAFA",fontWeight:600},children:["Architected & Built by ",u.jsx("strong",{style:{color:"#10B981"},children:"Aryan"})]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Product"}),u.jsx("a",{href:"#simulator",style:ai,children:"ReAct Terminal Demo"}),u.jsx("a",{href:"#features",style:ai,children:"System Features"}),u.jsx("a",{href:"#architecture",style:ai,children:"Tauri v2 & Architecture"}),u.jsx("a",{href:"#mcp",style:ai,children:"MCP Marketplace"}),u.jsx("a",{href:"/docs",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/docs"),window.dispatchEvent(new Event("popstate"))},style:ai,children:"Documentation & Server Setup"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Supported Platforms"}),u.jsx("span",{style:Hd,children:"Windows 10 / 11 (x64 & ARM64)"}),u.jsx("span",{style:Hd,children:"macOS Sonoma / Sequoia (Apple Silicon & Intel)"}),u.jsx("span",{style:Hd,children:"Linux (AppImage / Deb / Arch PKGBUILD)"}),u.jsxs("button",{onClick:t,className:"btn-primary",style:{padding:"8px 16px",fontSize:"0.85rem",width:"fit-content",marginTop:"6px"},children:[u.jsx(Xi,{size:14}),u.jsx("span",{children:"Get Desktop App"})]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Maintainer & Community"}),u.jsxs("span",{style:{fontSize:"0.84rem",color:"var(--text-dim)",lineHeight:1.5},children:["Open-source project maintained by ",u.jsx("strong",{children:"Aryan"}),". Built for complete local data sovereignty."]}),u.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X",target:"_blank",rel:"noopener noreferrer",style:ai,children:[u.jsx(cy,{size:14})," GitHub Repository"]}),u.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"6px",flexWrap:"wrap"},children:[u.jsx("a",{href:"/docs",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/docs"),window.dispatchEvent(new Event("popstate"))},style:ai,children:"Docs"}),u.jsx("a",{href:"/privacy",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/privacy"),window.dispatchEvent(new Event("popstate"))},style:ai,children:"Privacy Policy"}),u.jsx("a",{href:"/terms",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/terms"),window.dispatchEvent(new Event("popstate"))},style:ai,children:"Terms"})]})]})]}),u.jsxs("div",{style:{paddingTop:"28px",borderTop:"1px solid var(--border-glass)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",fontSize:"0.84rem",color:"var(--text-dim)"},children:[u.jsxs("div",{children:["© ",new Date().getFullYear()," Meridian-X by ",u.jsx("strong",{children:"Aryan"}),". All rights reserved. 100% Sovereign & Offline."]}),u.jsxs("div",{style:{display:"flex",gap:"20px"},children:[u.jsx("a",{href:"/privacy",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/privacy"),window.dispatchEvent(new Event("popstate"))},style:ai,children:"Privacy First Policy"}),u.jsx("a",{href:"/thank-you",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},style:ai,children:"Verification Checksums"})]})]})]})})),rR=({isOpen:t,onClose:e,detectedOS:n})=>{const i=gu();return t?u.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(4, 8, 16, 0.85)",backdropFilter:"blur(16px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:u.jsx("div",{className:"glow-border-card",style:{width:"100%",maxWidth:"540px"},children:u.jsxs("div",{className:"glow-border-card-inner",style:{padding:"32px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(Xi,{size:22,color:"var(--cyan-primary)"}),u.jsxs("h3",{style:{fontSize:"1.3rem"},children:["Download Meridian-X ",i.tagName]})]}),u.jsx("button",{onClick:e,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer"},children:u.jsx(Mo,{size:20})})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"24px",lineHeight:1.6},children:"Select your operating system binary. All builds are signed, standalone Tauri v2 executables requiring zero cloud connectivity."}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[u.jsxs("div",{style:{display:"flex",gap:"8px"},children:[u.jsxs("a",{href:i.downloadUrlExe,target:"_blank",rel:"noopener noreferrer",onClick:()=>{e(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},className:"btn-secondary",style:{flex:1,justifyContent:"space-between",borderColor:n.includes("Windows")?"var(--cyan-primary)":"var(--border-glass)"},children:[u.jsxs("div",{children:[u.jsx("strong",{children:"🪟 Windows (.exe)"}),u.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-dim)"},children:"x64 Setup"})]}),u.jsx(Xi,{size:15,color:"var(--cyan-primary)"})]}),u.jsxs("a",{href:i.downloadUrlMsi,target:"_blank",rel:"noopener noreferrer",onClick:()=>{e(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},className:"btn-secondary",style:{flex:1,justifyContent:"space-between",borderColor:"var(--border-glass)"},children:[u.jsxs("div",{children:[u.jsx("strong",{children:"🪟 Windows (.msi)"}),u.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-dim)"},children:"MSI Package"})]}),u.jsx(Xi,{size:15,color:"var(--cyan-primary)"})]})]}),u.jsxs("a",{href:i.downloadUrlDmg,target:"_blank",rel:"noopener noreferrer",onClick:()=>{e(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},className:"btn-secondary",style:{justifyContent:"space-between",borderColor:n.includes("macOS")||n.includes("Mac")?"var(--cyan-primary)":"var(--border-glass)"},children:[u.jsxs("div",{children:[u.jsx("strong",{children:"🍎 macOS Installer (.dmg)"}),u.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)"},children:"Universal / Apple Silicon & Intel • Includes Gatekeeper Guide"})]}),u.jsx(Xi,{size:16,color:"var(--cyan-primary)"})]}),u.jsxs("a",{href:i.downloadUrlDeb,target:"_blank",rel:"noopener noreferrer",onClick:()=>{e(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},className:"btn-secondary",style:{justifyContent:"space-between",borderColor:n.includes("Linux")?"var(--cyan-primary)":"var(--border-glass)"},children:[u.jsxs("div",{children:[u.jsx("strong",{children:"🐧 Linux Installer (.deb)"}),u.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)"},children:"Debian / Ubuntu / Linux Mint"})]}),u.jsx(Xi,{size:16,color:"var(--cyan-primary)"})]})]}),u.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)",textAlign:"center"},children:["SHA-256 Checksums available on ",u.jsx("a",{href:"https://github.com/Aryan4132/Meridian-X/releases",target:"_blank",rel:"noreferrer",style:{color:"var(--cyan-primary)"},children:"GitHub v0.4.0 Releases"})]})]})})}):null},ai={color:"var(--text-muted)",textDecoration:"none",fontSize:"0.88rem",transition:"color 0.2s ease",display:"flex",alignItems:"center",gap:"8px"},Hd={color:"var(--text-dim)",fontSize:"0.84rem"},sR=({onNavigateHome:t})=>u.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"120px 24px 60px 24px",position:"relative",zIndex:10},children:u.jsxs("div",{className:"glass-card",style:{maxWidth:"680px",width:"100%",padding:"48px 36px",textAlign:"center",background:"rgba(10, 10, 14, 0.85)",border:"1px solid rgba(239, 68, 68, 0.3)",boxShadow:"0 0 50px rgba(239, 68, 68, 0.15)"},children:[u.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"72px",height:"72px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",marginBottom:"24px",color:"#EF4444"},children:u.jsx(Np,{size:36})}),u.jsxs("div",{className:"glass-pill",style:{display:"inline-flex",alignItems:"center",gap:"8px",color:"#EF4444",borderColor:"rgba(239, 68, 68, 0.3)",marginBottom:"16px",fontSize:"0.75rem",fontFamily:"var(--font-code)"},children:[u.jsx(Oa,{size:14})," ERROR CODE: 0x404_SIGNAL_DISRUPTED"]}),u.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"2.5rem",fontWeight:800,color:"#FFFFFF",marginBottom:"16px",letterSpacing:"-0.02em"},children:"Coordinates Lost in Space"}),u.jsx("p",{style:{color:"#A1A1AA",fontSize:"1rem",lineHeight:1.6,marginBottom:"32px",maxWidth:"520px",margin:"0 auto 32px auto"},children:"The quantum pathway or resource endpoint you requested does not exist on this sovereign local node. Return to the main command deck."}),u.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"8px",padding:"16px",marginBottom:"32px",fontFamily:"var(--font-code)",fontSize:"0.85rem",color:"#71717A",textAlign:"left",display:"flex",alignItems:"center",gap:"12px"},children:[u.jsx($a,{size:18,style:{color:"#EF4444",flexShrink:0}}),u.jsx("span",{children:"diagnostic: path standard lookup returned NULL — zero memory leaked."})]}),u.jsxs("button",{onClick:t,className:"btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"10px",padding:"14px 28px",fontSize:"0.95rem",cursor:"pointer"},children:[u.jsx(Ya,{size:18})," Return to Command Deck"]})]})}),oR=({onNavigateHome:t})=>u.jsx("div",{style:{minHeight:"100vh",padding:"120px 24px 80px 24px",position:"relative",zIndex:10},children:u.jsxs("div",{className:"container",style:{maxWidth:"840px"},children:[u.jsxs("button",{onClick:t,style:{background:"transparent",border:"none",color:"#A1A1AA",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem",marginBottom:"24px",fontFamily:"var(--font-heading)"},children:[u.jsx(Ya,{size:16})," Back to Overview"]}),u.jsxs("div",{className:"glass-card",style:{padding:"48px",background:"rgba(10, 10, 14, 0.9)",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[u.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(0, 242, 254, 0.1)",border:"1px solid rgba(0, 242, 254, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#00F2FE"},children:u.jsx(Up,{size:22})}),u.jsx("span",{className:"glass-pill",style:{color:"#00F2FE",borderColor:"rgba(0, 242, 254, 0.3)"},children:"SOVEREIGN DATA POLICY"})]}),u.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"2.5rem",fontWeight:800,color:"#FFFFFF",marginBottom:"12px",letterSpacing:"-0.02em"},children:"Privacy Policy & Data Sovereignty"}),u.jsx("p",{style:{color:"#71717A",fontSize:"0.9rem",marginBottom:"40px"},children:"Effective Date: August 17, 2026 • Version 1.0.0"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"#D4D4D8",lineHeight:1.7},children:[u.jsxs("section",{children:[u.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(Ip,{size:18,style:{color:"#00F2FE"}})," 1. Absolute Local Processing"]}),u.jsx("p",{children:"Meridian-X operates under a strict sovereign local model. When you run Meridian-X on your local workstation (Windows, macOS, Linux), all prompt parsing, code analysis, tool execution, and AST parsing take place exclusively inside your machine's CPU/GPU and local storage."})]}),u.jsxs("section",{children:[u.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(Lp,{size:18,style:{color:"#8B5CF6"}})," 2. Zero Telemetry & Cloud Tracking"]}),u.jsx("p",{children:"We do not collect, send, transmit, or store any user prompts, codebases, file paths, hardware IDs, or interaction logs on external servers. Meridian-X does not ship with phone-home scripts or silent cloud tracking."})]}),u.jsxs("section",{children:[u.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx($a,{size:18,style:{color:"#10B981"}})," 3. Local Key Vault (AES-256 GCM)"]}),u.jsx("p",{children:"Any API keys provided for local LLM adapters (such as local Ollama instances, LM Studio, or self-hosted vLLM servers) are encrypted locally using AES-256-GCM. Master keys are protected by your operating system's native keychain (Windows Credential Manager, macOS Keychain, or Linux Secret Service)."})]}),u.jsxs("section",{style:{background:"rgba(0, 242, 254, 0.04)",border:"1px solid rgba(0, 242, 254, 0.15)",borderRadius:"12px",padding:"24px"},children:[u.jsx("h3",{style:{color:"#FFFFFF",fontWeight:700,marginBottom:"8px"},children:"Sovereignty Summary Checklist"}),u.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.9rem"},children:[u.jsx(Nr,{size:16,style:{color:"#10B981"}})," Zero remote prompt logging"]}),u.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.9rem"},children:[u.jsx(Nr,{size:16,style:{color:"#10B981"}})," 100% offline-capableReAct runtime"]}),u.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.9rem"},children:[u.jsx(Nr,{size:16,style:{color:"#10B981"}})," Local encrypted state storage"]})]})]})]})]})]})}),aR=({onNavigateHome:t})=>u.jsx("div",{style:{minHeight:"100vh",padding:"120px 24px 80px 24px",position:"relative",zIndex:10},children:u.jsxs("div",{className:"container",style:{maxWidth:"840px"},children:[u.jsxs("button",{onClick:t,style:{background:"transparent",border:"none",color:"#A1A1AA",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem",marginBottom:"24px",fontFamily:"var(--font-heading)"},children:[u.jsx(Ya,{size:16})," Back to Overview"]}),u.jsxs("div",{className:"glass-card",style:{padding:"48px",background:"rgba(10, 10, 14, 0.9)",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[u.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(139, 92, 246, 0.1)",border:"1px solid rgba(139, 92, 246, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#8B5CF6"},children:u.jsx(mM,{size:22})}),u.jsx("span",{className:"glass-pill",style:{color:"#8B5CF6",borderColor:"rgba(139, 92, 246, 0.3)"},children:"END USER LICENSE & TERMS"})]}),u.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"2.5rem",fontWeight:800,color:"#FFFFFF",marginBottom:"12px",letterSpacing:"-0.02em"},children:"Terms of Service"}),u.jsx("p",{style:{color:"#71717A",fontSize:"0.9rem",marginBottom:"40px"},children:"Effective Date: August 17, 2026 • Version 1.0.0"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"#D4D4D8",lineHeight:1.7},children:[u.jsxs("section",{children:[u.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(mu,{size:18,style:{color:"#8B5CF6"}})," 1. Open Source & Desktop Software License"]}),u.jsx("p",{children:"Meridian-X is distributed as open-source desktop software under the Apache 2.0 license. You are granted a non-exclusive, worldwide license to install, execute, inspect, and modify the application on your personal or corporate desktop workstations."})]}),u.jsxs("section",{children:[u.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(iM,{size:18,style:{color:"#F59E0B"}})," 2. Local Execution Responsibility"]}),u.jsx("p",{children:"Because Meridian-X performs direct local tool execution (such as executing shell commands, modifying local file structures, or running local scripts), you retain full responsibility for configuring sandbox parameters and reviewing automated agent actions before approval."})]}),u.jsxs("section",{children:[u.jsx("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px"},children:"3. Limitation of Liability"}),u.jsx("p",{children:'Meridian-X is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. In no event shall the authors or open-source maintainers be liable for any claim, damages, or data loss arising from local agent execution or model inference outputs.'})]})]})]})]})}),lR=({onNavigateHome:t,detectedOS:e})=>{const[n,i]=Pe.useState(e.includes("Mac")||e.includes("macOS")?"macOS":e.includes("Linux")?"Linux":"Windows"),[r,s]=Pe.useState(!1),[o,a]=Pe.useState(!1),[l,c]=Pe.useState(!1),[h,p]=Pe.useState(!1),[d,m]=Pe.useState(!1),g=gu(),E=g.checksums[n]||g.checksums.default||"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",x=n==="macOS"||n==="Linux"?`shasum -a 256 meridian-x_${g.version}_*.${n==="macOS"?"dmg":"deb"}`:`Get-FileHash -Algorithm SHA256 .\\meridian-x_${g.version}_x64-setup.exe`,f="sudo xattr -r -d com.apple.quarantine /Applications/meridian-x.app",v="curl -fsSL https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.sh | bash",M=()=>{navigator.clipboard.writeText(E),s(!0),setTimeout(()=>s(!1),2e3)},S=()=>{navigator.clipboard.writeText(x),a(!0),setTimeout(()=>a(!1),2e3)},T=()=>{navigator.clipboard.writeText(f),c(!0),setTimeout(()=>c(!1),2e3)},b=()=>{navigator.clipboard.writeText(v),p(!0),setTimeout(()=>p(!1),2e3)};return u.jsx("div",{style:{minHeight:"100vh",padding:"120px 24px 80px 24px",position:"relative",zIndex:10},children:u.jsxs("div",{className:"container",style:{maxWidth:"840px"},children:[u.jsxs("button",{onClick:t,style:{background:"transparent",border:"none",color:"#A1A1AA",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem",marginBottom:"24px",fontFamily:"var(--font-heading)"},children:[u.jsx(Ya,{size:16})," Return Home"]}),u.jsxs("div",{className:"glass-card",style:{padding:"48px",background:"rgba(10, 10, 14, 0.92)",border:"1px solid rgba(16, 185, 129, 0.3)",boxShadow:"0 0 50px rgba(16, 185, 129, 0.1)"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[u.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",borderRadius:"50%",background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#10B981",marginBottom:"20px"},children:u.jsx(Nr,{size:36})}),u.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"8px",marginBottom:"12px"},children:u.jsxs("span",{className:"glass-pill",style:{color:"#10B981",borderColor:"rgba(16, 185, 129, 0.3)"},children:["BINARY TRANSFER INITIATED • ",g.tagName]})}),u.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"2.4rem",fontWeight:800,color:"#FFFFFF",marginBottom:"12px",letterSpacing:"-0.02em"},children:"Welcome to Meridian-X"}),u.jsxs("p",{style:{color:"#A1A1AA",fontSize:"1rem",maxWidth:"580px",margin:"0 auto"},children:["Your desktop download for ",u.jsx("strong",{style:{color:"#FFFFFF"},children:n})," has started. Follow the platform-specific guide below for smooth setup & Gatekeeper verification."]})]}),u.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"8px",marginBottom:"28px",background:"rgba(0, 0, 0, 0.4)",padding:"6px",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[{id:"macOS",label:"🍎 macOS (Apple Silicon & Intel)",badge:"Gatekeeper Fix"},{id:"Windows",label:"🪟 Windows (10/11 x64)"},{id:"Linux",label:"🐧 Linux (.deb / AppImage)"}].map(A=>{const y=n===A.id;return u.jsxs("button",{onClick:()=>i(A.id),style:{flex:1,padding:"10px 14px",borderRadius:"7px",border:y?"1px solid rgba(16, 185, 129, 0.5)":"1px solid transparent",background:y?"rgba(16, 185, 129, 0.15)":"transparent",color:y?"#FFFFFF":"#A1A1AA",fontSize:"0.85rem",fontWeight:y?700:500,cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[u.jsx("span",{children:A.label}),A.badge&&u.jsx("span",{style:{fontSize:"0.65rem",background:y?"#10B981":"rgba(255, 255, 255, 0.1)",color:y?"#000000":"#A1A1AA",padding:"2px 6px",borderRadius:"4px",fontWeight:700},children:A.badge})]},A.id)})}),u.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(16, 185, 129, 0.25)",borderRadius:"12px",padding:"16px 20px",marginBottom:"28px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"rgba(16, 185, 129, 0.2)",border:"1px solid rgba(16, 185, 129, 0.4)",color:"#10B981",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx(ji,{size:14})}),u.jsxs("div",{children:[u.jsxs("strong",{style:{color:"#FFFFFF",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"6px"},children:["Authentic & Verified Build (",n,")"]}),u.jsx("span",{style:{color:"#A1A1AA",fontSize:"0.78rem"},children:"SHA-256 Checksum secured against GitHub release"})]})]}),u.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[u.jsxs("button",{onClick:M,style:{background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#10B981",padding:"6px 12px",borderRadius:"6px",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},children:[r?u.jsx(ji,{size:12}):u.jsx(to,{size:12}),r?"Copied Hash!":"Copy Hash"]}),u.jsxs("button",{onClick:()=>m(!d),style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#A1A1AA",padding:"6px 12px",borderRadius:"6px",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(mu,{size:13}),u.jsx("span",{children:d?"Hide Details ▲":"Hash Details ▼"})]})]})]}),d&&u.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[u.jsxs("span",{style:{fontSize:"0.75rem",color:"#10B981",fontFamily:"var(--font-code)"},children:["SHA256 Fingerprint (",n,"):"]}),u.jsxs("a",{href:g.releaseNotesUrl,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.75rem",color:"#A1A1AA",textDecoration:"none",display:"flex",alignItems:"center",gap:"3px"},children:[u.jsx(ay,{size:11})," GitHub Release"]})]}),u.jsx("code",{style:{display:"block",fontFamily:"var(--font-code)",fontSize:"0.76rem",color:"#D4D4D8",wordBreak:"break-all",background:"rgba(0,0,0,0.5)",padding:"10px",borderRadius:"6px",marginBottom:"10px"},children:E}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(16, 185, 129, 0.05)",padding:"8px 12px",borderRadius:"6px",border:"1px dashed rgba(16, 185, 129, 0.2)"},children:[u.jsxs("span",{style:{fontSize:"0.75rem",color:"#A1A1AA",fontFamily:"var(--font-code)",display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"},children:[u.jsx(Oa,{size:13,style:{color:"#10B981"}})," Verify in terminal: ",u.jsx("code",{style:{color:"#10B981"},children:x})]}),u.jsxs("button",{onClick:S,style:{background:"transparent",border:"none",color:o?"#10B981":"#A1A1AA",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},children:[o?u.jsx(ji,{size:12}):u.jsx(to,{size:12}),o?"Copied":"Copy Cmd"]})]})]})]}),n==="macOS"&&u.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)",border:"1px solid rgba(245, 158, 11, 0.3)",borderRadius:"14px",padding:"24px",marginBottom:"32px",boxShadow:"0 0 30px rgba(245, 158, 11, 0.05)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"14px"},children:[u.jsx("div",{style:{background:"rgba(245, 158, 11, 0.2)",border:"1px solid rgba(245, 158, 11, 0.4)",color:"#F59E0B",borderRadius:"8px",padding:"6px"},children:u.jsx(Np,{size:20})}),u.jsxs("div",{children:[u.jsx("h3",{style:{color:"#FFFFFF",fontSize:"1.15rem",fontWeight:700,margin:0},children:"macOS First-Launch & Gatekeeper Guide"}),u.jsx("span",{style:{color:"#F59E0B",fontSize:"0.8rem",fontFamily:"var(--font-code)"},children:`Bypass "App is damaged and can't be opened" alert`})]})]}),u.jsxs("p",{style:{color:"#D4D4D8",fontSize:"0.88rem",lineHeight:1.6,marginBottom:"20px"},children:["Because Meridian-X is a 100% free open-source application with ad-hoc code signing, macOS Gatekeeper may block the first launch with a warning: ",u.jsx("em",{style:{color:"#F59E0B"},children:`"meridian-x.app is damaged and can't be opened"`}),". Follow either fix below:"]}),u.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"10px",padding:"16px",marginBottom:"16px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[u.jsxs("strong",{style:{color:"#10B981",fontSize:"0.88rem",display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(Oa,{size:14})," Option 1: Remove Gatekeeper Quarantine (Recommended)"]}),u.jsxs("button",{onClick:T,style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#10B981",padding:"4px 10px",borderRadius:"6px",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontWeight:600},children:[l?u.jsx(ji,{size:12}):u.jsx(to,{size:12}),l?"Copied!":"Copy Fix Command"]})]}),u.jsxs("p",{style:{color:"#A1A1AA",fontSize:"0.82rem",margin:"0 0 10px 0"},children:["Drag ",u.jsx("code",{style:{color:"#FFF"},children:"meridian-x.app"})," to your ",u.jsx("code",{style:{color:"#FFF"},children:"/Applications"})," folder, open Terminal app, and paste:"]}),u.jsx("code",{style:{display:"block",fontFamily:"var(--font-code)",fontSize:"0.82rem",color:"#10B981",background:"rgba(10, 10, 14, 0.9)",padding:"10px 12px",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.2)",wordBreak:"break-all"},children:f})]}),u.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"10px",padding:"16px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[u.jsxs("strong",{style:{color:"#00F2FE",fontSize:"0.88rem",display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(dM,{size:14})," Option 2: Automated 1-Line Terminal Installer"]}),u.jsxs("button",{onClick:b,style:{background:"rgba(0, 242, 254, 0.15)",border:"1px solid rgba(0, 242, 254, 0.3)",color:"#00F2FE",padding:"4px 10px",borderRadius:"6px",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontWeight:600},children:[h?u.jsx(ji,{size:12}):u.jsx(to,{size:12}),h?"Copied!":"Copy Install Script"]})]}),u.jsx("p",{style:{color:"#A1A1AA",fontSize:"0.82rem",margin:"0 0 10px 0"},children:"Runs official bash script to fetch latest build, apply ad-hoc code signature, and bypass Gatekeeper automatically:"}),u.jsx("code",{style:{display:"block",fontFamily:"var(--font-code)",fontSize:"0.82rem",color:"#00F2FE",background:"rgba(10, 10, 14, 0.9)",padding:"10px 12px",borderRadius:"6px",border:"1px solid rgba(0, 242, 254, 0.2)",wordBreak:"break-all"},children:v})]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"32px"},children:[u.jsx("h3",{style:{color:"#FFFFFF",fontSize:"1.1rem",fontWeight:700,display:"flex",alignItems:"center",gap:"8px"},children:u.jsxs("span",{children:["Quick Launch Sequence (",n,")"]})}),u.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[u.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"rgba(0, 242, 254, 0.1)",border:"1px solid rgba(0, 242, 254, 0.3)",color:"#00F2FE",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"0.85rem",flexShrink:0},children:"1"}),u.jsxs("div",{children:[u.jsx("strong",{style:{color:"#FFFFFF",display:"block",fontSize:"0.95rem"},children:n==="macOS"?"Move to Applications & Clear Quarantine":n==="Windows"?"Run Binary Setup (.exe / .msi)":"Install Package (.deb / AppImage)"}),u.jsx("p",{style:{color:"#A1A1AA",fontSize:"0.85rem",margin:0},children:n==="macOS"?"Drag meridian-x.app into Applications folder. Run the quarantine fix command if Gatekeeper blocks launch.":n==="Windows"?"Launch setup installer. Allow Windows SmartScreen and local system overlay permissions.":"Install via dpkg -i meridian-x.deb or grant chmod +x to AppImage and run directly."})]})]}),u.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[u.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"rgba(139, 92, 246, 0.1)",border:"1px solid rgba(139, 92, 246, 0.3)",color:"#8B5CF6",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"0.85rem",flexShrink:0},children:"2"}),u.jsxs("div",{children:[u.jsx("strong",{style:{color:"#FFFFFF",display:"block",fontSize:"0.95rem"},children:"Trigger Hotkey HUD & Voice Control"}),u.jsxs("p",{style:{color:"#A1A1AA",fontSize:"0.85rem",margin:0,lineHeight:1.6},children:["Press ",u.jsx("code",{style:{color:"#00F2FE",background:"rgba(0, 242, 254, 0.1)",padding:"2px 6px",borderRadius:"4px"},children:n==="macOS"?"Option + M":"Alt + M"})," for Main Workspace, ",u.jsx("code",{style:{color:"#F59E0B",background:"rgba(245, 158, 11, 0.1)",padding:"2px 6px",borderRadius:"4px"},children:n==="macOS"?"Option + Shift + M":"Alt + Shift + M"})," for Mascot Island Overlay, and ",u.jsx("code",{style:{color:"#8B5CF6",background:"rgba(139, 92, 246, 0.1)",padding:"2px 6px",borderRadius:"4px"},children:n==="macOS"?"Option + V":"Alt + V"})," for Voice dictation or say ",u.jsx("strong",{style:{color:"#10B981"},children:'"Hey Meridian"'}),"."]})]})]}),u.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[u.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#10B981",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"0.85rem",flexShrink:0},children:"3"}),u.jsxs("div",{children:[u.jsx("strong",{style:{color:"#FFFFFF",display:"block",fontSize:"0.95rem"},children:"Automatic Hardware & Ollama Detection"}),u.jsx("p",{style:{color:"#A1A1AA",fontSize:"0.85rem",margin:0},children:"Meridian-X automatically detects system RAM, VRAM specs, and local Ollama ports (`11434`, `8080`, `5000`) for zero-configuration startup."})]})]})]}),u.jsx("div",{style:{textAlign:"center",borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"24px"},children:u.jsx("button",{onClick:t,className:"btn-primary",style:{padding:"12px 24px",fontSize:"0.9rem"},children:"Return to Command Center"})})]})]})})},Jo=[{id:"quickstart",title:"Quickstart & Installation",iconName:"Zap",badge:"Popular",description:"Get Meridian-X running on Windows, macOS, or Linux in under 60 seconds with offline-first LLM support.",sections:[{id:"one-line-install",title:"1-Command Desktop Installer",description:"Run the sovereign installer directly from PowerShell (Windows) or Terminal (macOS/Linux). No admin privileges required for standard user installations.",codeSnippet:{language:"powershell",filename:"Windows PowerShell",code:"irm https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.ps1 | iex"},notes:["Automatically verifies CPU AVX2 instructions and local GPU VRAM available.","Installs Meridian-X local daemon, desktop tray overlay, and default lightweight Ollama model tags."]},{id:"macos-linux-install",title:"macOS & Linux Setup",description:"For Apple Silicon (M1/M2/M3/M4) or Linux x86_64 distributions, use the unified bash script:",codeSnippet:{language:"bash",filename:"Terminal (Bash / Zsh)",code:"curl -fsSL https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.sh | bash"},notes:["Automatically downloads standalone binary, applies ad-hoc code signature, and strips quarantine flags."]},{id:"macos-gatekeeper-fix",title:"macOS Gatekeeper Quarantine Fix",description:`Because Meridian-X uses free ad-hoc code signing for open-source releases, macOS Gatekeeper may present a prompt saying "meridian-x.app is damaged and can't be opened". Remove the quarantine attribute via Terminal:`,codeSnippet:{language:"bash",filename:"macOS Terminal",code:"sudo xattr -r -d com.apple.quarantine /Applications/meridian-x.app"},notes:["Drag meridian-x.app into /Applications before running this command.","Fixes unsigned developer warning instantly without requiring Apple Developer paid Certificate."]},{id:"system-requirements",title:"System Requirements",description:"Meridian-X optimizes VRAM allocation based on detected system hardware specs:",steps:[{stepNumber:1,title:"Minimum Requirements",content:"2 CPU cores, 4 GB System RAM, 5 GB Storage space. Operates in low-memory Tier 0 CPU mode with 1.5B parameters."},{stepNumber:2,title:"Recommended Specs",content:"8 CPU cores, 16+ GB RAM, NVIDIA RTX 3060+ or Apple Silicon M-Series. Enables instant sub-10ms overlay response and 7B/11B model acceleration."}]}]},{id:"host-on-server",title:"Host on Server",iconName:"Server",badge:"VPS / Cloud",description:"Host the Meridian-X backend daemon on a remote VPS, home server, or cloud instance (Ubuntu, Debian, macOS, or Windows Server) and connect desktop or web clients securely over HTTPS.",sections:[{id:"server-prerequisites",title:"Prerequisites",description:"Before beginning server setup, ensure your remote machine satisfies:",notes:["Machine: VPS or Cloud Instance (2+ CPU Cores, 4+ GB RAM, Docker installed)","Software: Docker & Docker Compose plugin","Optional: Custom domain name pointing to your server IP for HTTPS SSL certificates"]},{id:"server-step1-deployment",title:"Step 1: Download Deployment Files",description:"Clone the repository or download docker-compose.yml directly onto your remote server node:",codeSnippet:{language:"bash",filename:"Server Shell",code:`mkdir meridian-server && cd meridian-server
curl -fsSL https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/docker-compose.yml -o docker-compose.yml`}},{id:"server-step2-env-config",title:"Step 2: Configure Environment Variables",description:"Create a .env configuration file in the deployment directory to define host binding, port, and security token:",codeSnippet:{language:"ini",filename:".env",code:`# Server Configuration
HOST=0.0.0.0
PORT=4132

# Security & API Key
AUTH_ENABLED=true
MERIDIAN_API_KEY=my_super_secret_secure_key_12345

# Ollama Engine Connection
OLLAMA_HOST=http://ollama:11434
MERIDIAN_MODEL=llama3.2:3b
DOMAIN=api.your-domain.com`}},{id:"server-step3-launch-stack",title:"Step 3: Launch Docker Stack",description:"Spin up backend daemon and local Ollama containers in detached background mode:",codeSnippet:{language:"bash",filename:"Server Shell",code:`docker compose up -d
docker compose ps`},notes:["meridian-backend listening on port 4132","meridian-ollama listening on port 11434"]},{id:"server-step4-pull-models",title:"Step 4: Pull AI Models on Server",description:"Pull preferred offline LLM model parameters into the server Ollama container:",codeSnippet:{language:"bash",filename:"Server Shell",code:`# Recommended for standard servers (8 GB RAM)
docker exec -it meridian-ollama ollama pull llama3.2:3b

# Optional: Pull lightweight model for budget VPS (2-4 GB RAM)
docker exec -it meridian-ollama ollama pull llama3.2:1b`}},{id:"server-step5-ssl-proxy",title:"Step 5: HTTPS SSL Setup via Reverse Proxy",description:"Configure reverse proxies to enable encrypted HTTPS and WebSocket connections across public networks.",steps:[{stepNumber:1,title:"Option A: Automatic SSL via Caddy (Recommended)",content:"Caddy automatically issues Let's Encrypt TLS certificates with automatic renewal.",codeSnippet:{language:"caddyfile",filename:"Caddyfile",code:`api.your-domain.com {
    reverse_proxy 127.0.0.1:4132
}`}},{stepNumber:2,title:"Option B: Nginx + Certbot (Let's Encrypt)",content:"Configure Nginx site proxy with WebSocket header forwarding:",codeSnippet:{language:"nginx",filename:"/etc/nginx/sites-available/meridian.conf",code:`server {
    server_name api.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:4132;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`}}]},{id:"server-step6-connect-client",title:"Step 6: Connect Desktop / Web Client",description:"Connect your desktop tray overlay or browser frontend to your hosted server instance:",steps:[{stepNumber:1,title:"Open Settings",content:"In Meridian-X Desktop or Web App, open Settings -> Backend Server Settings."},{stepNumber:2,title:"Enter Credentials",content:"Set Server URL to https://api.your-domain.com (or http://YOUR_SERVER_IP:4132) and enter your configured MERIDIAN_API_KEY."},{stepNumber:3,title:"Test Connection",content:'Click "Test Connection" to confirm "✅ Connected successfully!", then save settings.'}]},{id:"server-health-check",title:"Health Check & Troubleshooting",description:"Commands to diagnose container status and connection health:",codeSnippet:{language:"bash",filename:"Terminal Commands",code:`# Test API Status
curl http://YOUR_SERVER_IP:4132/api/health

# Inspect Backend Daemon Logs
docker compose logs -f meridian-backend

# Inspect Ollama Container Logs
docker compose logs -f meridian-ollama`}}]},{id:"architecture",title:"Core Architecture & Security",iconName:"Shield",description:"Deep dive into Meridian-X 6-layer agentic architecture, AES-GCM vault, and speculative execution engine.",sections:[{id:"react-loop",title:"ReAct Agentic Reasoning Loop",description:"Meridian-X executes an autonomous Reason-Act-Observe cycle with instant self-healing capabilities.",notes:["Layer 1 Trigger: Global hotkeys, desktop tray events, or automated schedule triggers.","Layer 2 Security Gate: AES-GCM key vault decrypts keys in memory without writing secrets to disk.","Layer 3 Context Assembly: Summarizes local SQLite history + relevant MCP tool context.","Layer 4 ReAct Reasoning: Evaluates intent, schema validates parameters, and handles tool errors automatically.","Layer 5 Tiered Execution: Routes non-mutating calls to Tier 0 parallel router and mutating state to Tier 1 sequential queue.","Layer 6 Observe/Respond/Persist: Emits TTS audio telemetry, updates overlay HUD status, and logs metrics."]},{id:"key-vault",title:"Machine-Bound Secret Vault",description:"API keys, database credentials, and session tokens are encrypted using AES-256-GCM with machine-specific hardware HMAC-SHA256 signatures.",codeSnippet:{language:"typescript",filename:"vault.ts",code:`// Sovereign local encryption
const encryptedKey = await MeridianVault.encryptSecret({
  secret: 'sk_live_abc123...',
  hardwareBind: true,
  algorithm: 'AES-256-GCM'
});`}}]},{id:"hotkeys-hud",title:"Hotkeys & HUD Reference",iconName:"Terminal",description:"Master global desktop hotkey triggers and interactive mascot orbital state indicators.",sections:[{id:"global-hotkeys",title:"Global Desktop Shortcuts",description:"Control Meridian-X overlay anywhere across Windows, macOS, and Linux:",steps:[{stepNumber:1,title:"Alt + M",content:"Toggle Frameless Overlay HUD command palette for rapid prompt execution."},{stepNumber:2,title:"Alt + Shift + M",content:"Trigger Voice Dictation & Supertonic TTS speech output."},{stepNumber:3,title:"Alt + V",content:"Open 50-Slot Clipboard Surveillance Grid for instant prompt analysis."}]},{id:"mascot-states",title:"Orbital Mascot Ring States",description:"The interactive 3D desktop mascot signals daemon activity using 4 glow states:",notes:["🔵 Blue (Idle): Agent standby mode listening for hotkeys or background triggers.","🟡 Amber (Thinking): ReAct reasoning, schema validation, or tool call processing in progress.","🔴 Red (Error / Healing): Self-correction retry or invalid tool parameter repair.","🟢 Green (Success): Execution complete, clipboard updated, or action executed successfully."]}]},{id:"mcp-integration",title:"MCP Server Integration",iconName:"Cpu",description:"Connect Model Context Protocol (MCP) servers for PostgreSQL, GitHub, Slack, Linear, and filesystem integration.",sections:[{id:"mcp-json-config",title:"Registering MCP Servers",description:"Add custom STDIO or HTTP MCP servers in settings or via mcp_config.json:",codeSnippet:{language:"json",filename:"mcp_config.json",code:`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_TOKEN"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/prod_db"]
    }
  }
}`}}]},{id:"models-tuning",title:"Model Presets & Tuning",iconName:"Sparkles",description:"Optimize local LLM inference speeds, context length, and GPU VRAM footprint.",sections:[{id:"model-presets",title:"Recommended Local Model Presets",description:"Tested offline models for code generation, vision, and light agents:",notes:["qwen2.5-coder:7b-instruct-q4_K_M — Best overall coding & tool calling performance (5.2 GB VRAM).","qwen2.5-coder:1.5b-instruct — Ultra-fast sub-10ms response for budget laptops (1.2 GB RAM).","llama3.2-vision:11b — Screenshot & visual UI element analysis (8.5 GB VRAM).","moondream:1.8b — Compact fast vision model for desktop screen monitoring.","nomic-embed-text — High-precision local vector embeddings for doc RAG."]}]}],cR=({onNavigateHome:t})=>{const[e,n]=Pe.useState("quickstart"),[i,r]=Pe.useState(""),[s,o]=Pe.useState(null),[a,l]=Pe.useState(!1);Pe.useEffect(()=>{const g=()=>{const E=window.location.hash.replace("#","");if(E){const x=Jo.find(f=>f.id===E||f.sections.some(v=>v.id===E));x&&n(x.id)}};return g(),window.addEventListener("hashchange",g),()=>window.removeEventListener("hashchange",g)},[]);const c=g=>{n(g),window.history.pushState(null,"",`/docs#${g}`),l(!1),window.scrollTo({top:0,behavior:"smooth"})},h=(g,E)=>{navigator.clipboard.writeText(g),o(E),setTimeout(()=>o(null),2e3)},p=Pe.useMemo(()=>Jo.find(g=>g.id===e)||Jo[0],[e]),d=Pe.useMemo(()=>{if(!i.trim())return null;const g=i.toLowerCase(),E=[];return Jo.forEach(x=>{x.sections.forEach(f=>{var A,y,C,P;const v=f.title.toLowerCase().includes(g),M=(A=f.description)==null?void 0:A.toLowerCase().includes(g),S=(y=f.codeSnippet)==null?void 0:y.code.toLowerCase().includes(g),T=(C=f.notes)==null?void 0:C.some(D=>D.toLowerCase().includes(g)),b=(P=f.steps)==null?void 0:P.some(D=>D.title.toLowerCase().includes(g)||D.content.toLowerCase().includes(g));(v||M||S||T||b)&&E.push({category:x,section:f})})}),E},[i]),m=(g,E=18)=>{switch(g){case"Zap":return u.jsx(dy,{size:E});case"Server":return u.jsx(Lp,{size:E});case"Shield":return u.jsx(Up,{size:E});case"Terminal":return u.jsx(Oa,{size:E});case"Cpu":return u.jsx($a,{size:E});case"Sparkles":return u.jsx(ka,{size:E});default:return u.jsx(oM,{size:E})}};return u.jsxs("div",{style:{paddingTop:"100px",paddingBottom:"80px",minHeight:"100vh",color:"#FAFAFA"},children:[u.jsxs("div",{className:"container",style:{maxWidth:"1280px",margin:"0 auto",padding:"0 24px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"32px",flexWrap:"wrap",gap:"16px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[u.jsxs("button",{onClick:t,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#A1A1AA",padding:"8px 16px",borderRadius:"8px",cursor:"pointer",fontSize:"0.85rem",fontWeight:500,transition:"all 0.2s ease"},onMouseEnter:g=>{g.currentTarget.style.color="#FFFFFF",g.currentTarget.style.borderColor="rgba(255, 255, 255, 0.25)"},onMouseLeave:g=>{g.currentTarget.style.color="#A1A1AA",g.currentTarget.style.borderColor="rgba(255, 255, 255, 0.12)"},children:[u.jsx(Ya,{size:16}),u.jsx("span",{children:"Back to Home"})]}),u.jsx("span",{style:{color:"#52525B"},children:"/"}),u.jsx("span",{style:{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:"0.95rem",color:"#FAFAFA"},children:"Documentation"})]}),u.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"380px"},children:[u.jsx(Ag,{size:16,style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"#A1A1AA"}}),u.jsx("input",{type:"text",placeholder:"Search docs (e.g. Host on Server, Caddy, Hotkeys)...",value:i,onChange:g=>r(g.target.value),style:{width:"100%",background:"rgba(18, 18, 22, 0.9)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"10px",padding:"10px 16px 10px 42px",color:"#FFFFFF",fontSize:"0.88rem",outline:"none",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.4)",transition:"all 0.2s ease"},onFocus:g=>g.target.style.borderColor="#6366F1",onBlur:g=>g.target.style.borderColor="rgba(255, 255, 255, 0.15)"}),i&&u.jsx("button",{onClick:()=>r(""),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"#A1A1AA",cursor:"pointer"},children:u.jsx(Mo,{size:14})})]})]}),u.jsx("div",{style:{display:"none",marginBottom:"20px"},className:"mobile-sidebar-toggle-row",children:u.jsxs("button",{onClick:()=>l(!a),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(24, 24, 28, 0.9)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"10px",padding:"12px 18px",color:"#FFFFFF",fontWeight:600,fontSize:"0.95rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[m(p.iconName,18),u.jsx("span",{children:p.title})]}),a?u.jsx(Mo,{size:18}):u.jsx(uy,{size:18})]})}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"280px 1fr",gap:"32px",alignItems:"start"},className:"docs-layout-grid",children:[u.jsxs("aside",{style:{background:"rgba(12, 12, 16, 0.75)",backdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"16px",padding:"16px",position:"sticky",top:"100px",display:a?"block":void 0},className:a?"mobile-sidebar-open":"desktop-sidebar",children:[u.jsx("div",{style:{fontSize:"0.72rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"#71717A",padding:"8px 12px 12px 12px"},children:"Documentation Topics"}),u.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:Jo.map(g=>{const E=g.id===e&&!i;return u.jsxs("button",{onClick:()=>c(g.id),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"10px 14px",borderRadius:"10px",background:E?"linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.15) 100%)":"transparent",border:E?"1px solid rgba(129, 140, 248, 0.4)":"1px solid transparent",color:E?"#FFFFFF":"#A1A1AA",cursor:"pointer",fontSize:"0.88rem",fontWeight:E?600:500,textAlign:"left",transition:"all 0.2s ease"},onMouseEnter:x=>{E||(x.currentTarget.style.background="rgba(255, 255, 255, 0.04)",x.currentTarget.style.color="#F4F4F5")},onMouseLeave:x=>{E||(x.currentTarget.style.background="transparent",x.currentTarget.style.color="#A1A1AA")},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx("span",{style:{color:E?"#818CF8":"#71717A"},children:m(g.iconName,17)}),u.jsx("span",{children:g.title})]}),g.badge&&u.jsx("span",{style:{fontSize:"0.65rem",fontWeight:700,padding:"2px 7px",borderRadius:"9999px",background:g.badge==="VPS / Cloud"?"rgba(59, 130, 246, 0.2)":"rgba(168, 85, 247, 0.2)",color:g.badge==="VPS / Cloud"?"#60A5FA":"#C084FC",border:g.badge==="VPS / Cloud"?"1px solid rgba(96, 165, 250, 0.3)":"1px solid rgba(192, 132, 252, 0.3)"},children:g.badge})]},g.id)})}),u.jsxs("div",{style:{marginTop:"24px",padding:"16px",background:"rgba(18, 18, 24, 0.6)",border:"1px solid rgba(255, 255, 255, 0.06)",borderRadius:"12px"},children:[u.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"#E4E4E7",marginBottom:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(xM,{size:14,style:{color:"#818CF8"}}),u.jsx("span",{children:"Need Support?"})]}),u.jsx("p",{style:{fontSize:"0.78rem",color:"#9CA3AF",lineHeight:"1.4",marginBottom:"12px"},children:"Join our GitHub community or inspect server deployment issue logs."}),u.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.78rem",color:"#818CF8",textDecoration:"none",fontWeight:600},children:[u.jsx("span",{children:"GitHub Repository"}),u.jsx(ay,{size:12})]})]})]}),u.jsx("main",{style:{minWidth:0},children:d?u.jsxs("div",{children:[u.jsxs("div",{style:{marginBottom:"24px"},children:[u.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,fontFamily:"var(--font-heading)",color:"#FFFFFF"},children:"Search Results"}),u.jsxs("p",{style:{color:"#A1A1AA",fontSize:"0.9rem",marginTop:"4px"},children:["Found ",d.length," matching section",d.length===1?"":"s",' for "',i,'"']})]}),d.length===0?u.jsxs("div",{style:{padding:"48px 24px",textAlign:"center",background:"rgba(18, 18, 22, 0.6)",border:"1px dashed rgba(255, 255, 255, 0.12)",borderRadius:"16px"},children:[u.jsx(Ag,{size:36,style:{color:"#52525B",marginBottom:"12px"}}),u.jsx("h3",{style:{fontSize:"1.1rem",color:"#E4E4E7",fontWeight:600},children:"No documentation matches found"}),u.jsx("p",{style:{color:"#A1A1AA",fontSize:"0.85rem",marginTop:"6px"},children:'Try searching for "docker", "caddy", "ssl", "hotkeys", or "ollama".'})]}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:d.map(({category:g,section:E})=>u.jsx(X0,{categoryTitle:g.title,section:E,copiedSnippetId:s,onCopyCode:h},E.id))})]}):u.jsxs("div",{children:[u.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(24, 24, 32, 0.8) 0%, rgba(18, 18, 24, 0.6) 100%)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"20px",padding:"32px",marginBottom:"36px",position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{position:"absolute",top:"-40px",right:"-40px",width:"200px",height:"200px",background:"radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",pointerEvents:"none"}}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[u.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)",border:"1px solid rgba(129, 140, 248, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",color:"#A5B4FC"},children:m(p.iconName,22)}),u.jsx("div",{children:u.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:800,fontFamily:"var(--font-heading)",color:"#FFFFFF",letterSpacing:"-0.02em",margin:0},children:p.title})})]}),u.jsx("p",{style:{color:"#D4D4D8",fontSize:"0.98rem",lineHeight:"1.6",margin:0,maxWidth:"800px"},children:p.description})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:p.sections.map(g=>u.jsx(X0,{categoryTitle:p.title,section:g,copiedSnippetId:s,onCopyCode:h},g.id))})]})})]})]}),u.jsx("style",{children:`
        @media (max-width: 868px) {
          .docs-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .desktop-sidebar {
            display: none !important;
          }
          .mobile-sidebar-toggle-row {
            display: block !important;
          }
          .mobile-sidebar-open {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 24px;
          }
        }
      `})]})},X0=({categoryTitle:t,section:e,copiedSnippetId:n,onCopyCode:i})=>u.jsxs("div",{id:e.id,style:{background:"rgba(15, 15, 20, 0.7)",backdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"16px",padding:"28px",transition:"all 0.25s ease"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[u.jsx("span",{style:{fontSize:"0.72rem",fontWeight:600,color:"#818CF8",textTransform:"uppercase",letterSpacing:"0.08em"},children:t}),u.jsx(lM,{size:12,style:{color:"#52525B"}}),u.jsxs("span",{style:{fontSize:"0.72rem",color:"#A1A1AA",fontFamily:"var(--font-code)"},children:["#",e.id]})]}),u.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:700,fontFamily:"var(--font-heading)",color:"#FFFFFF",margin:"0 0 10px 0"},children:e.title}),e.description&&u.jsx("p",{style:{color:"#A1A1AA",fontSize:"0.92rem",lineHeight:"1.6",margin:"0 0 18px 0"},children:e.description}),e.codeSnippet&&u.jsx("div",{style:{marginBottom:"20px"},children:u.jsx(q0,{snippet:e.codeSnippet,snippetId:e.id,copiedId:n,onCopy:i})}),e.steps&&u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",margin:"20px 0"},children:e.steps.map(r=>u.jsxs("div",{style:{background:"rgba(22, 22, 28, 0.6)",border:"1px solid rgba(255, 255, 255, 0.06)",borderRadius:"12px",padding:"18px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px"},children:[u.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"rgba(99, 102, 241, 0.2)",color:"#818CF8",border:"1px solid rgba(129, 140, 248, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.78rem",fontWeight:700},children:r.stepNumber}),u.jsx("span",{style:{fontWeight:600,fontSize:"0.95rem",color:"#F4F4F5"},children:r.title})]}),u.jsx("p",{style:{color:"#A1A1AA",fontSize:"0.88rem",lineHeight:"1.5",margin:"0 0 12px 0",paddingLeft:"34px"},children:r.content}),r.codeSnippet&&u.jsx("div",{style:{paddingLeft:"34px"},children:u.jsx(q0,{snippet:r.codeSnippet,snippetId:`${e.id}-step-${r.stepNumber}`,copiedId:n,onCopy:i})})]},r.stepNumber))}),e.notes&&e.notes.length>0&&u.jsx("div",{style:{background:"rgba(99, 102, 241, 0.06)",borderLeft:"3px solid #6366F1",borderRadius:"0 10px 10px 0",padding:"14px 18px",marginTop:"16px"},children:u.jsx("ul",{style:{margin:0,paddingLeft:"18px",color:"#D4D4D8",fontSize:"0.86rem",lineHeight:"1.6"},children:e.notes.map((r,s)=>u.jsx("li",{style:{marginBottom:s===e.notes.length-1?0:"6px"},children:r},s))})})]}),q0=({snippet:t,snippetId:e,copiedId:n,onCopy:i})=>{const r=n===e;return u.jsxs("div",{style:{background:"#0B0B0E",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",overflow:"hidden",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.5)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",background:"rgba(255, 255, 255, 0.03)",borderBottom:"1px solid rgba(255, 255, 255, 0.06)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(uM,{size:14,style:{color:"#818CF8"}}),u.jsx("span",{style:{fontSize:"0.78rem",color:"#A1A1AA",fontFamily:"var(--font-code)",fontWeight:500},children:t.filename||t.language})]}),u.jsxs("button",{onClick:()=>i(t.code,e),style:{display:"inline-flex",alignItems:"center",gap:"6px",background:r?"rgba(34, 197, 94, 0.2)":"rgba(255, 255, 255, 0.06)",border:r?"1px solid rgba(34, 197, 94, 0.4)":"1px solid rgba(255, 255, 255, 0.1)",color:r?"#4ADE80":"#A1A1AA",padding:"4px 10px",borderRadius:"6px",fontSize:"0.75rem",cursor:"pointer",fontWeight:500,transition:"all 0.2s ease"},children:[r?u.jsx(ji,{size:13}):u.jsx(to,{size:13}),u.jsx("span",{children:r?"Copied!":"Copy"})]})]}),u.jsx("pre",{style:{margin:0,padding:"16px",overflowX:"auto",fontFamily:"var(--font-code)",fontSize:"0.84rem",lineHeight:"1.6",color:"#E4E4E7",background:"transparent"},children:u.jsx("code",{children:t.code})})]})};class uR{constructor(){xm(this,"enabled",!1);this.checkConsent()}checkConsent(){const e=localStorage.getItem("meridian_cookie_consent");this.enabled=e==="accepted"}track(e,n){this.checkConsent();const i={name:e,properties:n,timestamp:Date.now()};if(typeof window<"u"&&window.DEV&&console.log("[Sovereign Analytics Event]:",i),!!this.enabled)try{window.dispatchEvent(new CustomEvent("meridian-analytics-event",{detail:i}))}catch{}}}const ya=new uR,dR=()=>{const[t,e]=Pe.useState(!1);Pe.useEffect(()=>{if(!localStorage.getItem("meridian_cookie_consent")){const s=setTimeout(()=>e(!0),1200);return()=>clearTimeout(s)}},[]);const n=()=>{localStorage.setItem("meridian_cookie_consent","accepted"),e(!1),ya.track("cookie_consent_accepted")},i=()=>{localStorage.setItem("meridian_cookie_consent","declined"),e(!1)};return t?u.jsxs("div",{style:{position:"fixed",bottom:"24px",left:"24px",right:"24px",maxWidth:"480px",margin:"0 auto",zIndex:999,background:"rgba(10, 10, 14, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(0, 242, 254, 0.3)",borderRadius:"16px",padding:"20px",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.15)",animation:"slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"14px",marginBottom:"16px"},children:[u.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(0, 242, 254, 0.1)",border:"1px solid rgba(0, 242, 254, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#00F2FE",flexShrink:0},children:u.jsx(mu,{size:20})}),u.jsxs("div",{children:[u.jsx("h4",{style:{color:"#FFFFFF",fontSize:"0.95rem",fontWeight:700,margin:"0 0 4px 0"},children:"Zero-Telemetry Sovereignty"}),u.jsxs("p",{style:{color:"#A1A1AA",fontSize:"0.82rem",margin:0,lineHeight:1.5},children:["Meridian-X does not use third-party tracking cookies. We only save UI state locally in ",u.jsx("code",{style:{color:"#00F2FE"},children:"localStorage"}),"."]})]})]}),u.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[u.jsx("button",{onClick:i,style:{background:"transparent",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#A1A1AA",padding:"8px 16px",borderRadius:"8px",fontSize:"0.82rem",cursor:"pointer",fontWeight:500},children:"Strict Necessary Only"}),u.jsxs("button",{onClick:n,className:"btn-primary",style:{padding:"8px 18px",fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(ji,{size:14})," Accept & Enable"]})]})]}):null},fR=({onDownloadClick:t,detectedOS:e})=>{const[n,i]=Pe.useState(!1),[r,s]=Pe.useState(!1);return Pe.useEffect(()=>{const o=()=>{const a=window.innerWidth<768,l=window.scrollY>350;i(!!(a&&l&&!r))};return window.addEventListener("scroll",o),window.addEventListener("resize",o),o(),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",o)}},[r]),!n||r?null:u.jsxs("div",{className:"mobile-sticky-cta",style:{position:"fixed",bottom:0,left:0,right:0,zIndex:90,background:"rgba(5, 5, 8, 0.95)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderTop:"1px solid rgba(0, 242, 254, 0.3)",padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 -10px 30px rgba(0,0,0,0.8)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx("img",{src:"/logo.png",alt:"Meridian-X Mobile Logo",style:{width:"32px",height:"32px",borderRadius:"50%",border:"1px solid rgba(255,255,255,0.2)"}}),u.jsxs("div",{children:[u.jsx("div",{style:{color:"#FFFFFF",fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-heading)"},children:"Meridian-X"}),u.jsxs("div",{style:{color:"#A1A1AA",fontSize:"0.72rem"},children:["Sovereign Agent for ",e]})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsxs("button",{onClick:()=>{ya.track("sticky_mobile_cta_click",{os:e}),t()},className:"btn-primary",style:{padding:"8px 16px",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(Xi,{size:14})," Download"]}),u.jsx("button",{onClick:()=>s(!0),style:{background:"transparent",border:"none",color:"#71717A",padding:"4px",cursor:"pointer"},"aria-label":"Dismiss sticky CTA",children:u.jsx(Mo,{size:16})})]})]})},Y0={"/":{title:"Meridian-X — Sovereign Desktop AI Workspace",description:"Local execution. Total privacy. Absolute autonomy. Run autonomous agentic ReAct loops locally on Windows, macOS, and Linux with sub-10ms overlay.",canonicalUrl:"https://meridian-x.ai/",ogType:"website"},"/privacy":{title:"Privacy Policy — Meridian-X Sovereign Local AI",description:"100% local compute. Zero telemetry tracking. Local AES key vault security model and zero cloud leakage guarantee.",canonicalUrl:"https://meridian-x.ai/privacy",ogType:"article"},"/docs":{title:"Documentation & Server Hosting — Meridian-X Sovereign AI",description:"Complete Meridian-X documentation, installation guides, host on server tutorial (Docker, Caddy, Nginx SSL), architecture specs, hotkey shortcuts, and MCP server setup.",canonicalUrl:"https://meridian-x.ai/docs",ogType:"website"},"/terms":{title:"Terms of Service — Meridian-X Open-Source Sovereign AI",description:"Terms of Service and End-User License Agreement for Meridian-X sovereign desktop application and local tool execution framework.",canonicalUrl:"https://meridian-x.ai/terms",ogType:"article"},"/thank-you":{title:"Thank You for Downloading — Meridian-X Sovereign AI",description:"Installation instructions, SHA256 checksum verification, and initial desktop onboarding guide for Meridian-X.",canonicalUrl:"https://meridian-x.ai/thank-you",ogType:"website"},"/404":{title:"404 — Signal Disrupted | Meridian-X Sovereign AI",description:"The requested quantum coordinate or local endpoint was not found on this node.",canonicalUrl:"https://meridian-x.ai/404",ogType:"website"}},Gd=t=>{const e=Y0[t]||Y0["/404"];document.title=e.title;let n=document.querySelector('meta[name="description"]');n||(n=document.createElement("meta"),n.setAttribute("name","description"),document.head.appendChild(n)),n.setAttribute("content",e.description);const i=(s,o)=>{let a=document.querySelector(`meta[property="${s}"]`);a||(a=document.createElement("meta"),a.setAttribute("property",s),document.head.appendChild(a)),a.setAttribute("content",o)};i("og:title",e.title),i("og:description",e.description),i("og:url",e.canonicalUrl||"https://meridian-x.ai"+t),i("og:type",e.ogType||"website"),i("og:image","https://meridian-x.ai/og-image.png");const r=(s,o)=>{let a=document.querySelector(`meta[name="${s}"]`);a||(a=document.createElement("meta"),a.setAttribute("name",s),document.head.appendChild(a)),a.setAttribute("content",o)};r("twitter:card","summary_large_image"),r("twitter:title",e.title),r("twitter:description",e.description),r("twitter:image","https://meridian-x.ai/og-image.png")},hR=()=>{const[t,e]=Pe.useState("Windows"),[n,i]=Pe.useState(!1),[r,s]=Pe.useState(!1),[o,a]=Pe.useState(window.location.pathname);Pe.useEffect(()=>{const p=()=>{const E=window.location.pathname;a(E),Gd(E)};window.addEventListener("popstate",p),Gd(window.location.pathname);const d=navigator.userAgent;let m="Windows";d.includes("Macintosh")||d.includes("Mac OS X")?m="macOS":d.includes("Linux")?m="Linux":(d.includes("Android")||d.includes("iPhone")||d.includes("iPad"))&&(m="Desktop Required"),e(m);const g=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d)||window.innerWidth<768;return i(g),ya.track("page_view",{path:window.location.pathname}),()=>{window.removeEventListener("popstate",p)}},[]);const l=p=>{window.history.pushState({},"",p),a(p),Gd(p),ya.track("navigation",{path:p}),window.scrollTo({top:0,behavior:"smooth"})},c=()=>{ya.track("download_modal_opened",{os:t}),s(!0)},h=()=>{switch(o){case"/":return u.jsxs(u.Fragment,{children:[u.jsx(HC,{detectedOS:t,isMobile:n,onDownloadClick:c}),u.jsx(GC,{}),u.jsx(YC,{}),u.jsx(KC,{}),u.jsx(QC,{}),u.jsx(JC,{}),u.jsx(tR,{})]});case"/privacy":return u.jsx(oR,{onNavigateHome:()=>l("/")});case"/terms":return u.jsx(aR,{onNavigateHome:()=>l("/")});case"/docs":case"/documentation":return u.jsx(cR,{onNavigateHome:()=>l("/")});case"/thank-you":return u.jsx(lR,{onNavigateHome:()=>l("/"),detectedOS:t});default:return u.jsx(sR,{onNavigateHome:()=>l("/")})}};return u.jsxs("div",{style:{position:"relative",minHeight:"100vh",background:"var(--bg-obsidian)"},children:[u.jsx(eM,{}),u.jsx(RM,{onDownloadClick:c,detectedOS:t}),h(),u.jsx(iR,{onDownloadClick:c,detectedOS:t}),u.jsx(rR,{isOpen:r,onClose:()=>s(!1),detectedOS:t}),u.jsx(dR,{}),u.jsx(fR,{onDownloadClick:c,detectedOS:t})]})};Wd.createRoot(document.getElementById("root")).render(u.jsx(H_.StrictMode,{children:u.jsx(hR,{})}));
