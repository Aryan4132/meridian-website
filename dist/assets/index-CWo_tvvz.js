(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function oy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D0={exports:{}},jc={},I0={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),ay=Symbol.for("react.portal"),ly=Symbol.for("react.fragment"),cy=Symbol.for("react.strict_mode"),uy=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),hy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),gy=Symbol.for("react.lazy"),sm=Symbol.iterator;function xy(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F0=Object.assign,U0={};function wo(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||N0}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function O0(){}O0.prototype=wo.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||N0}var Rh=Ch.prototype=new O0;Rh.constructor=Ch;F0(Rh,wo.prototype);Rh.isPureReactComponent=!0;var om=Array.isArray,k0=Object.prototype.hasOwnProperty,Ph={current:null},B0={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)k0.call(e,i)&&!B0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fa,type:t,key:s,ref:o,props:r,_owner:Ph.current}}function vy(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function _y(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var am=/\/+/g;function xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_y(""+t.key):e.toString(36)}function Hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case ay:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xu(o,0):i,om(r)?(n="",t!=null&&(n=t.replace(am,"$&/")+"/"),Hl(r,e,n,"",function(c){return c})):r!=null&&(Lh(r)&&(r=vy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(am,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",om(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xu(s,a);o+=Hl(s,e,n,l,r)}else if(l=xy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xu(s,a++),o+=Hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return Hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Gl={transition:null},Sy={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:Ph};function V0(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Lh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=wo;ot.Fragment=ly;ot.Profiler=uy;ot.PureComponent=Ch;ot.StrictMode=cy;ot.Suspense=py;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;ot.act=V0;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=F0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ph.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)k0.call(e,l)&&!B0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(t){return t={$$typeof:fy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dy,_context:t},t.Consumer=t};ot.createElement=z0;ot.createFactory=function(t){var e=z0.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:hy,render:t}};ot.isValidElement=Lh;ot.lazy=function(t){return{$$typeof:gy,_payload:{_status:-1,_result:t},_init:yy}};ot.memo=function(t,e){return{$$typeof:my,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};ot.unstable_act=V0;ot.useCallback=function(t,e){return _n.current.useCallback(t,e)};ot.useContext=function(t){return _n.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};ot.useEffect=function(t,e){return _n.current.useEffect(t,e)};ot.useId=function(){return _n.current.useId()};ot.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return _n.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};ot.useRef=function(t){return _n.current.useRef(t)};ot.useState=function(t){return _n.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return _n.current.useTransition()};ot.version="18.3.1";I0.exports=ot;var st=I0.exports;const My=oy(st);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey=st,Ty=Symbol.for("react.element"),wy=Symbol.for("react.fragment"),Ay=Object.prototype.hasOwnProperty,by=Ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cy={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ay.call(e,i)&&!Cy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ty,type:t,key:s,ref:o,props:r,_owner:by.current}}jc.Fragment=wy;jc.jsx=H0;jc.jsxs=H0;D0.exports=jc;var y=D0.exports,Id={},G0={exports:{}},Vn={},W0={exports:{}},X0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,I){var j=F.length;F.push(I);e:for(;0<j;){var te=j-1>>>1,re=F[te];if(0<r(re,I))F[te]=I,F[j]=re,j=te;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var I=F[0],j=F.pop();if(j!==I){F[0]=j;e:for(var te=0,re=F.length,Ve=re>>>1;te<Ve;){var qe=2*(te+1)-1,ke=F[qe],G=qe+1,se=F[G];if(0>r(ke,j))G<re&&0>r(se,ke)?(F[te]=se,F[G]=j,te=G):(F[te]=ke,F[qe]=j,te=qe);else if(G<re&&0>r(se,j))F[te]=se,F[G]=j,te=G;else break e}}return I}function r(F,I){var j=F.sortIndex-I.sortIndex;return j!==0?j:F.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,u=3,p=!1,_=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(F){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=F)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function S(F){if(E=!1,M(F),!_)if(n(l)!==null)_=!0,q(w);else{var I=n(c);I!==null&&H(S,I.startTime-F)}}function w(F,I){_=!1,E&&(E=!1,d(v),v=-1),p=!0;var j=u;try{for(M(I),h=n(l);h!==null&&(!(h.expirationTime>I)||F&&!D());){var te=h.callback;if(typeof te=="function"){h.callback=null,u=h.priorityLevel;var re=te(h.expirationTime<=I);I=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&i(l),M(I)}else i(l);h=n(l)}if(h!==null)var Ve=!0;else{var qe=n(c);qe!==null&&H(S,qe.startTime-I),Ve=!1}return Ve}finally{h=null,u=j,p=!1}}var T=!1,C=null,v=-1,b=5,P=-1;function D(){return!(t.unstable_now()-P<b)}function k(){if(C!==null){var F=t.unstable_now();P=F;var I=!0;try{I=C(!0,F)}finally{I?$():(T=!1,C=null)}}else T=!1}var $;if(typeof m=="function")$=function(){m(k)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,O=Q.port2;Q.port1.onmessage=k,$=function(){O.postMessage(null)}}else $=function(){g(k,0)};function q(F){C=F,T||(T=!0,$())}function H(F,I){v=g(function(){F(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,q(w))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(u){case 1:case 2:case 3:var I=3;break;default:I=u}var j=u;u=I;try{return F()}finally{u=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,I){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=u;u=F;try{return I()}finally{u=j}},t.unstable_scheduleCallback=function(F,I,j){var te=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?te+j:te):j=te,F){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,F={id:f++,callback:I,priorityLevel:F,startTime:j,expirationTime:re,sortIndex:-1},j>te?(F.sortIndex=j,e(c,F),n(l)===null&&F===n(c)&&(E?(d(v),v=-1):E=!0,H(S,j-te))):(F.sortIndex=re,e(l,F),_||p||(_=!0,q(w))),F},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(F){var I=u;return function(){var j=u;u=I;try{return F.apply(this,arguments)}finally{u=j}}}})(X0);W0.exports=X0;var Ry=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=st,zn=Ry;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,pa={};function ps(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(pa[t]=e,t=0;t<e.length;t++)j0.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nd=Object.prototype.hasOwnProperty,Ly=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},cm={};function Dy(t){return Nd.call(cm,t)?!0:Nd.call(lm,t)?!1:Ly.test(t)?cm[t]=!0:(lm[t]=!0,!1)}function Iy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ny(t,e,n,i){if(e===null||typeof e>"u"||Iy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,Ih);tn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,Ih);tn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,Ih);tn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ny(e,n,r,i)&&(n=null),i||r===null?Dy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Od=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),um=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var It=Object.assign,vu;function $o(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var _u=!1;function yu(t,e){if(!t||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function Fy(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function kd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case zs:return"Portal";case Fd:return"Profiler";case Fh:return"StrictMode";case Ud:return"Suspense";case Od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y0:return(t.displayName||"Context")+".Consumer";case q0:return(t._context.displayName||"Context")+".Provider";case Uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oh:return e=t.displayName||null,e!==null?e:kd(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return kd(t(e))}catch{}}return null}function Uy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kd(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function K0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Oy(t){var e=K0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=Oy(t))}function Z0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=K0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bd(t,e){var n=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Q0(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function zd(t,e){Q0(t,e);var n=Lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vd(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vd(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function Js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ko(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function J0(t,e){var n=Lr(e.value),i=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function pm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ex(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ex(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,tx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ky=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){ky.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function nx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function ix(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=nx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var By=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wd(t,e){if(e){if(By[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jd=null;function kh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qd=null,eo=null,to=null;function mm(t){if(t=ka(t)){if(typeof qd!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Zc(e),qd(t.stateNode,t.type,e))}}function rx(t){eo?to?to.push(t):to=[t]:eo=t}function sx(){if(eo){var t=eo,e=to;if(to=eo=null,mm(t),e)for(t=0;t<e.length;t++)mm(e[t])}}function ox(t,e){return t(e)}function ax(){}var Su=!1;function lx(t,e,n){if(Su)return t(e,n);Su=!0;try{return ox(t,e,n)}finally{Su=!1,(eo!==null||to!==null)&&(ax(),sx())}}function ga(t,e){var n=t.stateNode;if(n===null)return null;var i=Zc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Yd=!1;if(Zi)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Yd=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Yd=!1}function zy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var sa=!1,hc=null,pc=!1,$d=null,Vy={onError:function(t){sa=!0,hc=t}};function Hy(t,e,n,i,r,s,o,a,l){sa=!1,hc=null,zy.apply(Vy,arguments)}function Gy(t,e,n,i,r,s,o,a,l){if(Hy.apply(this,arguments),sa){if(sa){var c=hc;sa=!1,hc=null}else throw Error(ae(198));pc||(pc=!0,$d=c)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gm(t){if(ms(t)!==t)throw Error(ae(188))}function Wy(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return gm(r),t;if(s===i)return gm(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function ux(t){return t=Wy(t),t!==null?dx(t):null}function dx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dx(t);if(e!==null)return e;t=t.sibling}return null}var fx=zn.unstable_scheduleCallback,xm=zn.unstable_cancelCallback,Xy=zn.unstable_shouldYield,jy=zn.unstable_requestPaint,kt=zn.unstable_now,qy=zn.unstable_getCurrentPriorityLevel,Bh=zn.unstable_ImmediatePriority,hx=zn.unstable_UserBlockingPriority,mc=zn.unstable_NormalPriority,Yy=zn.unstable_LowPriority,px=zn.unstable_IdlePriority,qc=null,Ci=null;function $y(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:Qy,Ky=Math.log,Zy=Math.LN2;function Qy(t){return t>>>=0,t===0?32:31-(Ky(t)/Zy|0)|0}var $a=64,Ka=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),r=1<<n,i|=t[n],e&=~r;return i}function Jy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Jy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mx(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function tS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var xt=0;function gx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xx,Vh,vx,_x,yx,Zd=!1,Za=[],Er=null,Tr=null,wr=null,xa=new Map,va=new Map,xr=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vm(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Io(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&Vh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function iS(t,e,n,i,r){switch(e){case"focusin":return Er=Io(Er,t,e,n,i,r),!0;case"dragenter":return Tr=Io(Tr,t,e,n,i,r),!0;case"mouseover":return wr=Io(wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,Io(xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,va.set(s,Io(va.get(s)||null,t,e,n,i,r)),!0}return!1}function Sx(t){var e=Kr(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=cx(n),e!==null){t.blockedOn=e,yx(t.priority,function(){vx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);jd=i,n.target.dispatchEvent(i),jd=null}else return e=ka(n),e!==null&&Vh(e),t.blockedOn=n,!1;e.shift()}return!0}function _m(t,e,n){Wl(t)&&n.delete(e)}function rS(){Zd=!1,Er!==null&&Wl(Er)&&(Er=null),Tr!==null&&Wl(Tr)&&(Tr=null),wr!==null&&Wl(wr)&&(wr=null),xa.forEach(_m),va.forEach(_m)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,Zd||(Zd=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,rS)))}function _a(t){function e(r){return No(r,t)}if(0<Za.length){No(Za[0],t);for(var n=1;n<Za.length;n++){var i=Za[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&No(Er,t),Tr!==null&&No(Tr,t),wr!==null&&No(wr,t),xa.forEach(e),va.forEach(e),n=0;n<xr.length;n++)i=xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)Sx(n),n.blockedOn===null&&xr.shift()}var no=ir.ReactCurrentBatchConfig,xc=!0;function sS(t,e,n,i){var r=xt,s=no.transition;no.transition=null;try{xt=1,Hh(t,e,n,i)}finally{xt=r,no.transition=s}}function oS(t,e,n,i){var r=xt,s=no.transition;no.transition=null;try{xt=4,Hh(t,e,n,i)}finally{xt=r,no.transition=s}}function Hh(t,e,n,i){if(xc){var r=Qd(t,e,n,i);if(r===null)Du(t,e,i,vc,n),vm(t,i);else if(iS(r,t,e,n,i))i.stopPropagation();else if(vm(t,i),e&4&&-1<nS.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&xx(s),s=Qd(t,e,n,i),s===null&&Du(t,e,i,vc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Du(t,e,i,null,n)}}var vc=null;function Qd(t,e,n,i){if(vc=null,t=kh(i),t=Kr(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function Mx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qy()){case Bh:return 1;case hx:return 4;case mc:case Yy:return 16;case px:return 536870912;default:return 16}default:return 16}}var yr=null,Gh=null,Xl=null;function Ex(){if(Xl)return Xl;var t,e=Gh,n=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xl=r.slice(t,1<i?1-i:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function ym(){return!1}function Hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:ym,this.isPropagationStopped=ym,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=Hn(Ao),Oa=It({},Ao,{view:0,detail:0}),aS=Hn(Oa),Eu,Tu,Fo,Yc=It({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Eu=t.screenX-Fo.screenX,Tu=t.screenY-Fo.screenY):Tu=Eu=0,Fo=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Sm=Hn(Yc),lS=It({},Yc,{dataTransfer:0}),cS=Hn(lS),uS=It({},Oa,{relatedTarget:0}),wu=Hn(uS),dS=It({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=Hn(dS),hS=It({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pS=Hn(hS),mS=It({},Ao,{data:0}),Mm=Hn(mS),gS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vS[t])?!!e[t]:!1}function Xh(){return _S}var yS=It({},Oa,{key:function(t){if(t.key){var e=gS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),SS=Hn(yS),MS=It({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Em=Hn(MS),ES=It({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),TS=Hn(ES),wS=It({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),AS=Hn(wS),bS=It({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Hn(bS),RS=[9,13,27,32],jh=Zi&&"CompositionEvent"in window,oa=null;Zi&&"documentMode"in document&&(oa=document.documentMode);var PS=Zi&&"TextEvent"in window&&!oa,Tx=Zi&&(!jh||oa&&8<oa&&11>=oa),Tm=" ",wm=!1;function wx(t,e){switch(t){case"keyup":return RS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ax(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function LS(t,e){switch(t){case"compositionend":return Ax(e);case"keypress":return e.which!==32?null:(wm=!0,Tm);case"textInput":return t=e.data,t===Tm&&wm?null:t;default:return null}}function DS(t,e){if(Hs)return t==="compositionend"||!jh&&wx(t,e)?(t=Ex(),Xl=Gh=yr=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tx&&e.locale!=="ko"?null:e.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IS[t.type]:e==="textarea"}function bx(t,e,n,i){rx(i),e=_c(e,"onChange"),0<e.length&&(n=new Wh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,ya=null;function NS(t){kx(t,0)}function $c(t){var e=Xs(t);if(Z0(e))return t}function FS(t,e){if(t==="change")return e}var Cx=!1;if(Zi){var Au;if(Zi){var bu="oninput"in document;if(!bu){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),bu=typeof bm.oninput=="function"}Au=bu}else Au=!1;Cx=Au&&(!document.documentMode||9<document.documentMode)}function Cm(){aa&&(aa.detachEvent("onpropertychange",Rx),ya=aa=null)}function Rx(t){if(t.propertyName==="value"&&$c(ya)){var e=[];bx(e,ya,t,kh(t)),lx(NS,e)}}function US(t,e,n){t==="focusin"?(Cm(),aa=e,ya=n,aa.attachEvent("onpropertychange",Rx)):t==="focusout"&&Cm()}function OS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(ya)}function kS(t,e){if(t==="click")return $c(e)}function BS(t,e){if(t==="input"||t==="change")return $c(e)}function zS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:zS;function Sa(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nd.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,e){var n=Rm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rm(n)}}function Px(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Px(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lx(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VS(t){var e=Lx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Px(n.ownerDocument.documentElement,n)){if(i!==null&&qh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Pm(n,s);var o=Pm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HS=Zi&&"documentMode"in document&&11>=document.documentMode,Gs=null,Jd=null,la=null,ef=!1;function Lm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ef||Gs==null||Gs!==fc(i)||(i=Gs,"selectionStart"in i&&qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&Sa(la,i)||(la=i,i=_c(Jd,"onSelect"),0<i.length&&(e=new Wh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gs)))}function Ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},Cu={},Dx={};Zi&&(Dx=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Kc(t){if(Cu[t])return Cu[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dx)return Cu[t]=e[n];return t}var Ix=Kc("animationend"),Nx=Kc("animationiteration"),Fx=Kc("animationstart"),Ux=Kc("transitionend"),Ox=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){Ox.set(t,e),ps(e,[t])}for(var Ru=0;Ru<Dm.length;Ru++){var Pu=Dm[Ru],GS=Pu.toLowerCase(),WS=Pu[0].toUpperCase()+Pu.slice(1);Ur(GS,"on"+WS)}Ur(Ix,"onAnimationEnd");Ur(Nx,"onAnimationIteration");Ur(Fx,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Ux,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Im(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Gy(i,e,void 0,t),t.currentTarget=null}function kx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Im(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Im(r,a,c),s=l}}}if(pc)throw t=$d,pc=!1,$d=null,t}function wt(t,e){var n=e[of];n===void 0&&(n=e[of]=new Set);var i=t+"__bubble";n.has(i)||(Bx(e,t,2,!1),n.add(i))}function Lu(t,e,n){var i=0;e&&(i|=4),Bx(n,t,i,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Ma(t){if(!t[el]){t[el]=!0,j0.forEach(function(n){n!=="selectionchange"&&(XS.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,Lu("selectionchange",!1,e))}}function Bx(t,e,n,i){switch(Mx(e)){case 1:var r=sS;break;case 4:r=oS;break;default:r=Hh}n=r.bind(null,e,n,t),r=void 0,!Yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Du(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lx(function(){var c=s,f=kh(n),h=[];e:{var u=Ox.get(t);if(u!==void 0){var p=Wh,_=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":p=SS;break;case"focusin":_="focus",p=wu;break;case"focusout":_="blur",p=wu;break;case"beforeblur":case"afterblur":p=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=TS;break;case Ix:case Nx:case Fx:p=fS;break;case Ux:p=AS;break;case"scroll":p=aS;break;case"wheel":p=CS;break;case"copy":case"cut":case"paste":p=pS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Em}var E=(e&4)!==0,g=!E&&t==="scroll",d=E?u!==null?u+"Capture":null:u;E=[];for(var m=c,M;m!==null;){M=m;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,d!==null&&(S=ga(m,d),S!=null&&E.push(Ea(m,S,M)))),g)break;m=m.return}0<E.length&&(u=new p(u,_,null,n,f),h.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==jd&&(_=n.relatedTarget||n.fromElement)&&(Kr(_)||_[Qi]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Kr(_):null,_!==null&&(g=ms(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(E=Sm,S="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Em,S="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?u:Xs(p),M=_==null?u:Xs(_),u=new E(S,m+"leave",p,n,f),u.target=g,u.relatedTarget=M,S=null,Kr(f)===c&&(E=new E(d,m+"enter",_,n,f),E.target=M,E.relatedTarget=g,S=E),g=S,p&&_)t:{for(E=p,d=_,m=0,M=E;M;M=_s(M))m++;for(M=0,S=d;S;S=_s(S))M++;for(;0<m-M;)E=_s(E),m--;for(;0<M-m;)d=_s(d),M--;for(;m--;){if(E===d||d!==null&&E===d.alternate)break t;E=_s(E),d=_s(d)}E=null}else E=null;p!==null&&Nm(h,u,p,E,!1),_!==null&&g!==null&&Nm(h,g,_,E,!0)}}e:{if(u=c?Xs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var w=FS;else if(Am(u))if(Cx)w=BS;else{w=OS;var T=US}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(w=kS);if(w&&(w=w(t,c))){bx(h,w,n,f);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Vd(u,"number",u.value)}switch(T=c?Xs(c):window,t){case"focusin":(Am(T)||T.contentEditable==="true")&&(Gs=T,Jd=c,la=null);break;case"focusout":la=Jd=Gs=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Lm(h,n,f);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":Lm(h,n,f)}var C;if(jh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Hs?wx(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Tx&&n.locale!=="ko"&&(Hs||v!=="onCompositionStart"?v==="onCompositionEnd"&&Hs&&(C=Ex()):(yr=f,Gh="value"in yr?yr.value:yr.textContent,Hs=!0)),T=_c(c,v),0<T.length&&(v=new Mm(v,t,null,n,f),h.push({event:v,listeners:T}),C?v.data=C:(C=Ax(n),C!==null&&(v.data=C)))),(C=PS?LS(t,n):DS(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(f=new Mm("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}kx(h,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ga(t,n),s!=null&&i.unshift(Ea(t,s,r)),s=ga(t,e),s!=null&&i.push(Ea(t,s,r))),t=t.return}return i}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ga(n,s),l!=null&&o.unshift(Ea(n,l,a))):r||(l=ga(n,s),l!=null&&o.push(Ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(jS,`
`).replace(qS,"")}function tl(t,e,n){if(e=Fm(e),Fm(t)!==e&&n)throw Error(ae(425))}function yc(){}var tf=null,nf=null;function rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(KS)}:sf;function KS(t){setTimeout(function(){throw t})}function Iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_a(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Ti="__reactFiber$"+bo,Ta="__reactProps$"+bo,Qi="__reactContainer$"+bo,of="__reactEvents$"+bo,ZS="__reactListeners$"+bo,QS="__reactHandles$"+bo;function Kr(t){var e=t[Ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Om(t);t!==null;){if(n=t[Ti])return n;t=Om(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[Ti]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Zc(t){return t[Ta]||null}var af=[],js=-1;function Or(t){return{current:t}}function At(t){0>js||(t.current=af[js],af[js]=null,js--)}function Tt(t,e){js++,af[js]=t.current,t.current=e}var Dr={},fn=Or(Dr),Tn=Or(!1),rs=Dr;function fo(t,e){var n=t.type.contextTypes;if(!n)return Dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function wn(t){return t=t.childContextTypes,t!=null}function Sc(){At(Tn),At(fn)}function km(t,e,n){if(fn.current!==Dr)throw Error(ae(168));Tt(fn,e),Tt(Tn,n)}function zx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Uy(t)||"Unknown",r));return It({},n,i)}function Mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,rs=fn.current,Tt(fn,t),Tt(Tn,Tn.current),!0}function Bm(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=zx(t,e,rs),i.__reactInternalMemoizedMergedChildContext=t,At(Tn),At(fn),Tt(fn,t)):At(Tn),Tt(Tn,n)}var Hi=null,Qc=!1,Nu=!1;function Vx(t){Hi===null?Hi=[t]:Hi.push(t)}function JS(t){Qc=!0,Vx(t)}function kr(){if(!Nu&&Hi!==null){Nu=!0;var t=0,e=xt;try{var n=Hi;for(xt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,Qc=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),fx(Bh,kr),r}finally{xt=e,Nu=!1}}return null}var qs=[],Ys=0,Ec=null,Tc=0,Yn=[],$n=0,ss=null,Gi=1,Wi="";function Xr(t,e){qs[Ys++]=Tc,qs[Ys++]=Ec,Ec=t,Tc=e}function Hx(t,e,n){Yn[$n++]=Gi,Yn[$n++]=Wi,Yn[$n++]=ss,ss=t;var i=Gi;t=Wi;var r=32-pi(i)-1;i&=~(1<<r),n+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-pi(e)+r|n<<r|i,Wi=s+t}else Gi=1<<s|n<<r|i,Wi=t}function Yh(t){t.return!==null&&(Xr(t,1),Hx(t,1,0))}function $h(t){for(;t===Ec;)Ec=qs[--Ys],qs[Ys]=null,Tc=qs[--Ys],qs[Ys]=null;for(;t===ss;)ss=Yn[--$n],Yn[$n]=null,Wi=Yn[--$n],Yn[$n]=null,Gi=Yn[--$n],Yn[$n]=null}var Bn=null,On=null,bt=!1,ui=null;function Gx(t,e){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bn=t,On=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bn=t,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bn=t,On=null,!0):!1;default:return!1}}function lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cf(t){if(bt){var e=On;if(e){var n=e;if(!zm(t,e)){if(lf(t))throw Error(ae(418));e=Ar(n.nextSibling);var i=Bn;e&&zm(t,e)?Gx(i,n):(t.flags=t.flags&-4097|2,bt=!1,Bn=t)}}else{if(lf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,bt=!1,Bn=t}}}function Vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function nl(t){if(t!==Bn)return!1;if(!bt)return Vm(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rf(t.type,t.memoizedProps)),e&&(e=On)){if(lf(t))throw Wx(),Error(ae(418));for(;e;)Gx(t,e),e=Ar(e.nextSibling)}if(Vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){On=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}On=null}}else On=Bn?Ar(t.stateNode.nextSibling):null;return!0}function Wx(){for(var t=On;t;)t=Ar(t.nextSibling)}function ho(){On=Bn=null,bt=!1}function Kh(t){ui===null?ui=[t]:ui.push(t)}var e1=ir.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hm(t){var e=t._init;return e(t._payload)}function Xx(t){function e(d,m){if(t){var M=d.deletions;M===null?(d.deletions=[m],d.flags|=16):M.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Pr(d,m),d.index=0,d.sibling=null,d}function s(d,m,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<m?(d.flags|=2,m):M):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,M,S){return m===null||m.tag!==6?(m=Vu(M,d.mode,S),m.return=d,m):(m=r(m,M),m.return=d,m)}function l(d,m,M,S){var w=M.type;return w===Vs?f(d,m,M.props.children,S,M.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===mr&&Hm(w)===m.type)?(S=r(m,M.props),S.ref=Uo(d,m,M),S.return=d,S):(S=Jl(M.type,M.key,M.props,null,d.mode,S),S.ref=Uo(d,m,M),S.return=d,S)}function c(d,m,M,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==M.containerInfo||m.stateNode.implementation!==M.implementation?(m=Hu(M,d.mode,S),m.return=d,m):(m=r(m,M.children||[]),m.return=d,m)}function f(d,m,M,S,w){return m===null||m.tag!==7?(m=is(M,d.mode,S,w),m.return=d,m):(m=r(m,M),m.return=d,m)}function h(d,m,M){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Vu(""+m,d.mode,M),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ja:return M=Jl(m.type,m.key,m.props,null,d.mode,M),M.ref=Uo(d,null,m),M.return=d,M;case zs:return m=Hu(m,d.mode,M),m.return=d,m;case mr:var S=m._init;return h(d,S(m._payload),M)}if(Ko(m)||Lo(m))return m=is(m,d.mode,M,null),m.return=d,m;il(d,m)}return null}function u(d,m,M,S){var w=m!==null?m.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return w!==null?null:a(d,m,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ja:return M.key===w?l(d,m,M,S):null;case zs:return M.key===w?c(d,m,M,S):null;case mr:return w=M._init,u(d,m,w(M._payload),S)}if(Ko(M)||Lo(M))return w!==null?null:f(d,m,M,S,null);il(d,M)}return null}function p(d,m,M,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(M)||null,a(m,d,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ja:return d=d.get(S.key===null?M:S.key)||null,l(m,d,S,w);case zs:return d=d.get(S.key===null?M:S.key)||null,c(m,d,S,w);case mr:var T=S._init;return p(d,m,M,T(S._payload),w)}if(Ko(S)||Lo(S))return d=d.get(M)||null,f(m,d,S,w,null);il(m,S)}return null}function _(d,m,M,S){for(var w=null,T=null,C=m,v=m=0,b=null;C!==null&&v<M.length;v++){C.index>v?(b=C,C=null):b=C.sibling;var P=u(d,C,M[v],S);if(P===null){C===null&&(C=b);break}t&&C&&P.alternate===null&&e(d,C),m=s(P,m,v),T===null?w=P:T.sibling=P,T=P,C=b}if(v===M.length)return n(d,C),bt&&Xr(d,v),w;if(C===null){for(;v<M.length;v++)C=h(d,M[v],S),C!==null&&(m=s(C,m,v),T===null?w=C:T.sibling=C,T=C);return bt&&Xr(d,v),w}for(C=i(d,C);v<M.length;v++)b=p(C,d,v,M[v],S),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?v:b.key),m=s(b,m,v),T===null?w=b:T.sibling=b,T=b);return t&&C.forEach(function(D){return e(d,D)}),bt&&Xr(d,v),w}function E(d,m,M,S){var w=Lo(M);if(typeof w!="function")throw Error(ae(150));if(M=w.call(M),M==null)throw Error(ae(151));for(var T=w=null,C=m,v=m=0,b=null,P=M.next();C!==null&&!P.done;v++,P=M.next()){C.index>v?(b=C,C=null):b=C.sibling;var D=u(d,C,P.value,S);if(D===null){C===null&&(C=b);break}t&&C&&D.alternate===null&&e(d,C),m=s(D,m,v),T===null?w=D:T.sibling=D,T=D,C=b}if(P.done)return n(d,C),bt&&Xr(d,v),w;if(C===null){for(;!P.done;v++,P=M.next())P=h(d,P.value,S),P!==null&&(m=s(P,m,v),T===null?w=P:T.sibling=P,T=P);return bt&&Xr(d,v),w}for(C=i(d,C);!P.done;v++,P=M.next())P=p(C,d,v,P.value,S),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?v:P.key),m=s(P,m,v),T===null?w=P:T.sibling=P,T=P);return t&&C.forEach(function(k){return e(d,k)}),bt&&Xr(d,v),w}function g(d,m,M,S){if(typeof M=="object"&&M!==null&&M.type===Vs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ja:e:{for(var w=M.key,T=m;T!==null;){if(T.key===w){if(w=M.type,w===Vs){if(T.tag===7){n(d,T.sibling),m=r(T,M.props.children),m.return=d,d=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===mr&&Hm(w)===T.type){n(d,T.sibling),m=r(T,M.props),m.ref=Uo(d,T,M),m.return=d,d=m;break e}n(d,T);break}else e(d,T);T=T.sibling}M.type===Vs?(m=is(M.props.children,d.mode,S,M.key),m.return=d,d=m):(S=Jl(M.type,M.key,M.props,null,d.mode,S),S.ref=Uo(d,m,M),S.return=d,d=S)}return o(d);case zs:e:{for(T=M.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===M.containerInfo&&m.stateNode.implementation===M.implementation){n(d,m.sibling),m=r(m,M.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=Hu(M,d.mode,S),m.return=d,d=m}return o(d);case mr:return T=M._init,g(d,m,T(M._payload),S)}if(Ko(M))return _(d,m,M,S);if(Lo(M))return E(d,m,M,S);il(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,M),m.return=d,d=m):(n(d,m),m=Vu(M,d.mode,S),m.return=d,d=m),o(d)):n(d,m)}return g}var po=Xx(!0),jx=Xx(!1),wc=Or(null),Ac=null,$s=null,Zh=null;function Qh(){Zh=$s=Ac=null}function Jh(t){var e=wc.current;At(wc),t._currentValue=e}function uf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function io(t,e){Ac=t,Zh=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(Zh!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Ac===null)throw Error(ae(308));$s=t,Ac.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var Zr=null;function ep(t){Zr===null?Zr=[t]:Zr.push(t)}function qx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ep(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,ep(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zh(t,n)}}function Gm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bc(t,e,n,i){var r=t.updateQueue;gr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(u=e,p=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(p,h,u);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,u=typeof _=="function"?_.call(p,h,u):_,u==null)break e;h=It({},h,u);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=o,t.lanes=o,t.memoizedState=h}}function Wm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ba={},Ri=Or(Ba),wa=Or(Ba),Aa=Or(Ba);function Qr(t){if(t===Ba)throw Error(ae(174));return t}function np(t,e){switch(Tt(Aa,e),Tt(wa,t),Tt(Ri,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gd(e,t)}At(Ri),Tt(Ri,e)}function mo(){At(Ri),At(wa),At(Aa)}function $x(t){Qr(Aa.current);var e=Qr(Ri.current),n=Gd(e,t.type);e!==n&&(Tt(wa,t),Tt(Ri,n))}function ip(t){wa.current===t&&(At(Ri),At(wa))}var Ct=Or(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function rp(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var Yl=ir.ReactCurrentDispatcher,Uu=ir.ReactCurrentBatchConfig,os=0,Lt=null,Vt=null,qt=null,Rc=!1,ca=!1,ba=0,t1=0;function rn(){throw Error(ae(321))}function sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function op(t,e,n,i,r,s){if(os=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=t===null||t.memoizedState===null?s1:o1,t=n(i,r),ca){s=0;do{if(ca=!1,ba=0,25<=s)throw Error(ae(301));s+=1,qt=Vt=null,e.updateQueue=null,Yl.current=a1,t=n(i,r)}while(ca)}if(Yl.current=Pc,e=Vt!==null&&Vt.next!==null,os=0,qt=Vt=Lt=null,Rc=!1,e)throw Error(ae(300));return t}function ap(){var t=ba!==0;return ba=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Lt.memoizedState=qt=t:qt=qt.next=t,qt}function ti(){if(Vt===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=qt===null?Lt.memoizedState:qt.next;if(e!==null)qt=e,Vt=t;else{if(t===null)throw Error(ae(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},qt===null?Lt.memoizedState=qt=t:qt=qt.next=t}return qt}function Ca(t,e){return typeof e=="function"?e(t):e}function Ou(t){var e=ti(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((os&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Lt.lanes|=f,as|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Lt.lanes|=s,as|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ku(t){var e=ti(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kx(){}function Zx(t,e){var n=Lt,i=ti(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,lp(ev.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,Ra(9,Jx.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(ae(349));os&30||Qx(n,e,r)}return r}function Qx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jx(t,e,n,i){e.value=n,e.getSnapshot=i,tv(e)&&nv(t)}function ev(t,e,n){return n(function(){tv(e)&&nv(t)})}function tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function nv(t){var e=Ji(t,1);e!==null&&mi(e,t,1,-1)}function Xm(t){var e=Mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},e.queue=t,t=t.dispatch=r1.bind(null,Lt,t),[e.memoizedState,t]}function Ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function iv(){return ti().memoizedState}function $l(t,e,n,i){var r=Mi();Lt.flags|=t,r.memoizedState=Ra(1|e,n,void 0,i===void 0?null:i)}function Jc(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&sp(i,o.deps)){r.memoizedState=Ra(e,n,s,i);return}}Lt.flags|=t,r.memoizedState=Ra(1|e,n,s,i)}function jm(t,e){return $l(8390656,8,t,e)}function lp(t,e){return Jc(2048,8,t,e)}function rv(t,e){return Jc(4,2,t,e)}function sv(t,e){return Jc(4,4,t,e)}function ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function av(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,ov.bind(null,e,t),n)}function cp(){}function lv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function cv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function uv(t,e,n){return os&21?(gi(n,e)||(n=mx(),Lt.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function n1(t,e){var n=xt;xt=n!==0&&4>n?n:4,t(!0);var i=Uu.transition;Uu.transition={};try{t(!1),e()}finally{xt=n,Uu.transition=i}}function dv(){return ti().memoizedState}function i1(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fv(t))hv(e,n);else if(n=qx(t,e,n,i),n!==null){var r=gn();mi(n,t,i,r),pv(n,e,i)}}function r1(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fv(t))hv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,ep(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=qx(t,e,r,i),n!==null&&(r=gn(),mi(n,t,i,r),pv(n,e,i))}}function fv(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function hv(t,e){ca=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zh(t,n)}}var Pc={readContext:ei,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},s1={readContext:ei,useCallback:function(t,e){return Mi().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=Mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=i1.bind(null,Lt,t),[i.memoizedState,t]},useRef:function(t){var e=Mi();return t={current:t},e.memoizedState=t},useState:Xm,useDebugValue:cp,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=Xm(!1),e=t[0];return t=n1.bind(null,t[1]),Mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Lt,r=Mi();if(bt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Yt===null)throw Error(ae(349));os&30||Qx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jm(ev.bind(null,i,s,t),[t]),i.flags|=2048,Ra(9,Jx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Mi(),e=Yt.identifierPrefix;if(bt){var n=Wi,i=Gi;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=t1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},o1={readContext:ei,useCallback:lv,useContext:ei,useEffect:lp,useImperativeHandle:av,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:cv,useReducer:Ou,useRef:iv,useState:function(){return Ou(Ca)},useDebugValue:cp,useDeferredValue:function(t){var e=ti();return uv(e,Vt.memoizedState,t)},useTransition:function(){var t=Ou(Ca)[0],e=ti().memoizedState;return[t,e]},useMutableSource:Kx,useSyncExternalStore:Zx,useId:dv,unstable_isNewReconciler:!1},a1={readContext:ei,useCallback:lv,useContext:ei,useEffect:lp,useImperativeHandle:av,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:cv,useReducer:ku,useRef:iv,useState:function(){return ku(Ca)},useDebugValue:cp,useDeferredValue:function(t){var e=ti();return Vt===null?e.memoizedState=t:uv(e,Vt.memoizedState,t)},useTransition:function(){var t=ku(Ca)[0],e=ti().memoizedState;return[t,e]},useMutableSource:Kx,useSyncExternalStore:Zx,useId:dv,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=It({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function df(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:It({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Rr(t),s=ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(mi(e,t,r,i),ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Rr(t),s=ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(mi(e,t,r,i),ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=Rr(t),r=ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(mi(e,t,i,n),ql(e,t,i))}};function qm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Sa(n,i)||!Sa(r,s):!0}function mv(t,e,n){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=wn(e)?rs:fn.current,i=e.contextTypes,s=(i=i!=null)?fo(t,r):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ym(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},tp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=wn(e)?rs:fn.current,r.context=fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(df(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&eu.enqueueReplaceState(r,r.state,null),bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=Fy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function gv(t,e,n){n=ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dc||(Dc=!0,Ef=i),hf(t,e)},n}function xv(t,e,n){n=ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hf(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $m(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new l1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=M1.bind(null,t,e,n),e.then(t,t))}function Km(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ji(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var c1=ir.ReactCurrentOwner,En=!1;function pn(t,e,n,i){e.child=t===null?jx(e,null,n,i):po(e,t.child,n,i)}function Qm(t,e,n,i,r){n=n.render;var s=e.ref;return io(e,r),i=op(t,e,n,i,s,r),n=ap(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(bt&&n&&Yh(e),e.flags|=1,pn(t,e,i,r),e.child)}function Jm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vv(t,e,s,i,r)):(t=Jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(o,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function vv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Sa(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,er(t,e,r)}return pf(t,e,n,i,r)}function _v(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(Zs,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Tt(Zs,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Tt(Zs,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Tt(Zs,Nn),Nn|=i;return pn(t,e,r,n),e.child}function yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pf(t,e,n,i,r){var s=wn(n)?rs:fn.current;return s=fo(e,s),io(e,r),n=op(t,e,n,i,s,r),i=ap(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(bt&&i&&Yh(e),e.flags|=1,pn(t,e,n,r),e.child)}function eg(t,e,n,i,r){if(wn(n)){var s=!0;Mc(e)}else s=!1;if(io(e,r),e.stateNode===null)Kl(t,e),mv(e,n,i),ff(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=wn(n)?rs:fn.current,c=fo(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ym(e,o,i,c),gr=!1;var u=e.memoizedState;o.state=u,bc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Tn.current||gr?(typeof f=="function"&&(df(e,n,f,i),l=e.memoizedState),(a=gr||qm(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Yx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=wn(n)?rs:fn.current,l=fo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&Ym(e,o,i,l),gr=!1,u=e.memoizedState,o.state=u,bc(e,i,o,r);var _=e.memoizedState;a!==h||u!==_||Tn.current||gr?(typeof p=="function"&&(df(e,n,p,i),_=e.memoizedState),(c=gr||qm(e,n,c,i,u,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return mf(t,e,n,i,s,r)}function mf(t,e,n,i,r,s){yv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bm(e,n,!1),er(t,e,s);i=e.stateNode,c1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):pn(t,e,a,s),e.memoizedState=i.state,r&&Bm(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&km(t,e.context,!1),np(t,e.containerInfo)}function tg(t,e,n,i,r){return ho(),Kh(r),e.flags|=256,pn(t,e,n,i),e.child}var gf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mv(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Tt(Ct,r&1),t===null)return cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,i,0,null),t=is(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xf(n),e.memoizedState=gf,t):up(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return u1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=is(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gf,i}return s=t.child,t=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function up(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rl(t,e,n,i){return i!==null&&Kh(i),po(e,t.child,null,n),t=up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Bu(Error(ae(422))),rl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=iu({mode:"visible",children:i.children},r,0,null),s=is(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=gf,s);if(!(e.mode&1))return rl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Bu(s,i,void 0),rl(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),mi(i,t,r,-1))}return gp(),i=Bu(Error(ae(421))),rl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=E1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,On=Ar(r.nextSibling),Bn=e,bt=!0,ui=null,t!==null&&(Yn[$n++]=Gi,Yn[$n++]=Wi,Yn[$n++]=ss,Gi=t.id,Wi=t.overflow,ss=e),e=up(e,i.children),e.flags|=4096,e)}function ng(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),uf(t.return,e,n)}function zu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ev(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,n,e);else if(t.tag===19)ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Tt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zu(e,!0,n,null,s);break;case"together":zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function d1(t,e,n){switch(e.tag){case 3:Sv(e),ho();break;case 5:$x(e);break;case 1:wn(e.type)&&Mc(e);break;case 4:np(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Tt(wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Tt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?Mv(t,e,n):(Tt(Ct,Ct.current&1),t=er(t,e,n),t!==null?t.sibling:null);Tt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ev(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Tt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,_v(t,e,n)}return er(t,e,n)}var Tv,vf,wv,Av;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vf=function(){};wv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Qr(Ri.current);var s=null;switch(n){case"input":r=Bd(t,r),i=Bd(t,i),s=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),s=[];break;case"textarea":r=Hd(t,r),i=Hd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yc)}Wd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Av=function(t,e,n,i){n!==i&&(e.flags|=4)};function Oo(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function f1(t,e,n){var i=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return wn(e.type)&&Sc(),sn(e),null;case 3:return i=e.stateNode,mo(),At(Tn),At(fn),rp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(Af(ui),ui=null))),vf(t,e),sn(e),null;case 5:ip(e);var r=Qr(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)wv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return sn(e),null}if(t=Qr(Ri.current),nl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)wt(Qo[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":dm(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":hm(i,s),wt("invalid",i)}Wd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,t),r=["children",""+a]):pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":qa(i),fm(i,s,!0);break;case"textarea":qa(i),pm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ex(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ti]=e,t[Ta]=i,Tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xd(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)wt(Qo[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":dm(t,i),r=Bd(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),wt("invalid",t);break;case"textarea":hm(t,i),r=Hd(t,i),wt("invalid",t);break;default:r=i}Wd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ix(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ma(t,l):typeof l=="number"&&ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&Nh(t,s,l,o))}switch(n){case"input":qa(t),fm(t,i,!1);break;case"textarea":qa(t),pm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Js(t,!!i.multiple,s,!1):i.defaultValue!=null&&Js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)Av(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Qr(Aa.current),Qr(Ri.current),nl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==n)&&(t=Bn,t!==null))switch(t.tag){case 3:tl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return sn(e),null;case 13:if(At(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&On!==null&&e.mode&1&&!(e.flags&128))Wx(),ho(),e.flags|=98560,s=!1;else if(s=nl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Ti]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else ui!==null&&(Af(ui),ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Gt===0&&(Gt=3):gp())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return mo(),vf(t,e),t===null&&Ma(e.stateNode.containerInfo),sn(e),null;case 10:return Jh(e.type._context),sn(e),null;case 17:return wn(e.type)&&Sc(),sn(e),null;case 19:if(At(Ct),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Oo(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,Oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Tt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>xo&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!bt)return sn(e),null}else 2*kt()-s.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=Ct.current,Tt(Ct,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function h1(t,e){switch($h(e),e.tag){case 1:return wn(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),At(Tn),At(fn),rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ip(e),null;case 13:if(At(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return At(Ct),null;case 4:return mo(),null;case 10:return Jh(e.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var sl=!1,un=!1,p1=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ft(t,e,i)}else n.current=null}function _f(t,e,n){try{n()}catch(i){Ft(t,e,i)}}var ig=!1;function m1(t,e){if(tf=xc,t=Lx(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nf={focusedElem:t,selectionRange:n},xc=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,g=_.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:ai(e.type,E),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Ft(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return _=ig,ig=!1,_}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_f(e,n,s)}r=r.next}while(r!==i)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bv(t){var e=t.alternate;e!==null&&(t.alternate=null,bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ti],delete e[Ta],delete e[of],delete e[ZS],delete e[QS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cv(t){return t.tag===5||t.tag===3||t.tag===4}function rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yc));else if(i!==4&&(t=t.child,t!==null))for(Sf(t,e,n),t=t.sibling;t!==null;)Sf(t,e,n),t=t.sibling}function Mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}var Kt=null,li=!1;function ar(t,e,n){for(n=n.child;n!==null;)Rv(t,e,n),n=n.sibling}function Rv(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:un||Ks(n,e);case 6:var i=Kt,r=li;Kt=null,ar(t,e,n),Kt=i,li=r,Kt!==null&&(li?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(li?(t=Kt,n=n.stateNode,t.nodeType===8?Iu(t.parentNode,n):t.nodeType===1&&Iu(t,n),_a(t)):Iu(Kt,n.stateNode));break;case 4:i=Kt,r=li,Kt=n.stateNode.containerInfo,li=!0,ar(t,e,n),Kt=i,li=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_f(n,e,o),r=r.next}while(r!==i)}ar(t,e,n);break;case 1:if(!un&&(Ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ft(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,ar(t,e,n),un=i):ar(t,e,n);break;default:ar(t,e,n)}}function sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new p1),e.forEach(function(i){var r=T1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,li=!1;break e;case 3:Kt=a.stateNode.containerInfo,li=!0;break e;case 4:Kt=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(Kt===null)throw Error(ae(160));Rv(s,o,r),Kt=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pv(e,t),e=e.sibling}function Pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),vi(t),i&4){try{ua(3,t,t.return),tu(3,t)}catch(E){Ft(t,t.return,E)}try{ua(5,t,t.return)}catch(E){Ft(t,t.return,E)}}break;case 1:ii(e,t),vi(t),i&512&&n!==null&&Ks(n,n.return);break;case 5:if(ii(e,t),vi(t),i&512&&n!==null&&Ks(n,n.return),t.flags&32){var r=t.stateNode;try{ma(r,"")}catch(E){Ft(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Q0(r,s),Xd(a,o);var c=Xd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?ix(r,h):f==="dangerouslySetInnerHTML"?tx(r,h):f==="children"?ma(r,h):Nh(r,f,h,c)}switch(a){case"input":zd(r,s);break;case"textarea":J0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Js(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Js(r,!!s.multiple,s.defaultValue,!0):Js(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ta]=s}catch(E){Ft(t,t.return,E)}}break;case 6:if(ii(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Ft(t,t.return,E)}}break;case 3:if(ii(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(E){Ft(t,t.return,E)}break;case 4:ii(e,t),vi(t);break;case 13:ii(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hp=kt())),i&4&&sg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(un=(c=un)||f,ii(e,t),un=c):ii(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(we=t,f=t.child;f!==null;){for(h=we=f;we!==null;){switch(u=we,p=u.child,u.tag){case 0:case 11:case 14:case 15:ua(4,u,u.return);break;case 1:Ks(u,u.return);var _=u.stateNode;if(typeof _.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){Ft(i,n,E)}}break;case 5:Ks(u,u.return);break;case 22:if(u.memoizedState!==null){ag(h);continue}}p!==null?(p.return=u,we=p):ag(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nx("display",o))}catch(E){Ft(t,t.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){Ft(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ii(e,t),vi(t),i&4&&sg(t);break;case 21:break;default:ii(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ma(r,""),i.flags&=-33);var s=rg(t);Mf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rg(t);Sf(t,a,o);break;default:throw Error(ae(161))}}catch(l){Ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function g1(t,e,n){we=t,Lv(t)}function Lv(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=sl;var c=un;if(sl=o,(un=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?lg(r):l!==null?(l.return=o,we=l):lg(r);for(;s!==null;)we=s,Lv(s),s=s.sibling;we=r,sl=a,un=c}og(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):og(t)}}function og(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&_a(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}un||e.flags&512&&yf(e)}catch(u){Ft(e,e.return,u)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function ag(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function lg(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){Ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ft(e,r,l)}}var s=e.return;try{yf(e)}catch(l){Ft(e,s,l)}break;case 5:var o=e.return;try{yf(e)}catch(l){Ft(e,o,l)}}}catch(l){Ft(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var x1=Math.ceil,Lc=ir.ReactCurrentDispatcher,dp=ir.ReactCurrentOwner,Qn=ir.ReactCurrentBatchConfig,pt=0,Yt=null,zt=null,en=0,Nn=0,Zs=Or(0),Gt=0,Pa=null,as=0,nu=0,fp=0,da=null,Mn=null,hp=0,xo=1/0,zi=null,Dc=!1,Ef=null,Cr=null,ol=!1,Sr=null,Ic=0,fa=0,Tf=null,Zl=-1,Ql=0;function gn(){return pt&6?kt():Zl!==-1?Zl:Zl=kt()}function Rr(t){return t.mode&1?pt&2&&en!==0?en&-en:e1.transition!==null?(Ql===0&&(Ql=mx()),Ql):(t=xt,t!==0||(t=window.event,t=t===void 0?16:Mx(t.type)),t):1}function mi(t,e,n,i){if(50<fa)throw fa=0,Tf=null,Error(ae(185));Ua(t,n,i),(!(pt&2)||t!==Yt)&&(t===Yt&&(!(pt&2)&&(nu|=n),Gt===4&&vr(t,en)),An(t,i),n===1&&pt===0&&!(e.mode&1)&&(xo=kt()+500,Qc&&kr()))}function An(t,e){var n=t.callbackNode;eS(t,e);var i=gc(t,t===Yt?en:0);if(i===0)n!==null&&xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xm(n),e===1)t.tag===0?JS(cg.bind(null,t)):Vx(cg.bind(null,t)),$S(function(){!(pt&6)&&kr()}),n=null;else{switch(gx(i)){case 1:n=Bh;break;case 4:n=hx;break;case 16:n=mc;break;case 536870912:n=px;break;default:n=mc}n=Bv(n,Dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dv(t,e){if(Zl=-1,Ql=0,pt&6)throw Error(ae(327));var n=t.callbackNode;if(ro()&&t.callbackNode!==n)return null;var i=gc(t,t===Yt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nc(t,i);else{e=i;var r=pt;pt|=2;var s=Nv();(Yt!==t||en!==e)&&(zi=null,xo=kt()+500,ns(t,e));do try{y1();break}catch(a){Iv(t,a)}while(!0);Qh(),Lc.current=s,pt=r,zt!==null?e=0:(Yt=null,en=0,e=Gt)}if(e!==0){if(e===2&&(r=Kd(t),r!==0&&(i=r,e=wf(t,r))),e===1)throw n=Pa,ns(t,0),vr(t,i),An(t,kt()),n;if(e===6)vr(t,i);else{if(r=t.current.alternate,!(i&30)&&!v1(r)&&(e=Nc(t,i),e===2&&(s=Kd(t),s!==0&&(i=s,e=wf(t,s))),e===1))throw n=Pa,ns(t,0),vr(t,i),An(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:jr(t,Mn,zi);break;case 3:if(vr(t,i),(i&130023424)===i&&(e=hp+500-kt(),10<e)){if(gc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sf(jr.bind(null,t,Mn,zi),e);break}jr(t,Mn,zi);break;case 4:if(vr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*x1(i/1960))-i,10<i){t.timeoutHandle=sf(jr.bind(null,t,Mn,zi),i);break}jr(t,Mn,zi);break;case 5:jr(t,Mn,zi);break;default:throw Error(ae(329))}}}return An(t,kt()),t.callbackNode===n?Dv.bind(null,t):null}function wf(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&Af(e)),t}function Af(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function v1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~fp,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function cg(t){if(pt&6)throw Error(ae(327));ro();var e=gc(t,0);if(!(e&1))return An(t,kt()),null;var n=Nc(t,e);if(t.tag!==0&&n===2){var i=Kd(t);i!==0&&(e=i,n=wf(t,i))}if(n===1)throw n=Pa,ns(t,0),vr(t,e),An(t,kt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,Mn,zi),An(t,kt()),null}function pp(t,e){var n=pt;pt|=1;try{return t(e)}finally{pt=n,pt===0&&(xo=kt()+500,Qc&&kr())}}function ls(t){Sr!==null&&Sr.tag===0&&!(pt&6)&&ro();var e=pt;pt|=1;var n=Qn.transition,i=xt;try{if(Qn.transition=null,xt=1,t)return t()}finally{xt=i,Qn.transition=n,pt=e,!(pt&6)&&kr()}}function mp(){Nn=Zs.current,At(Zs)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YS(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch($h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sc();break;case 3:mo(),At(Tn),At(fn),rp();break;case 5:ip(i);break;case 4:mo();break;case 13:At(Ct);break;case 19:At(Ct);break;case 10:Jh(i.type._context);break;case 22:case 23:mp()}n=n.return}if(Yt=t,zt=t=Pr(t.current,null),en=Nn=e,Gt=0,Pa=null,fp=nu=as=0,Mn=da=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Zr=null}return t}function Iv(t,e){do{var n=zt;try{if(Qh(),Yl.current=Pc,Rc){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(os=0,qt=Vt=Lt=null,ca=!1,ba=0,dp.current=null,n===null||n.return===null){Gt=1,Pa=e,zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=en,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Km(o);if(p!==null){p.flags&=-257,Zm(p,o,a,s,e),p.mode&1&&$m(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){$m(s,c,e),gp();break e}l=Error(ae(426))}}else if(bt&&a.mode&1){var g=Km(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Zm(g,o,a,s,e),Kh(go(l,a));break e}}s=l=go(l,a),Gt!==4&&(Gt=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=gv(s,l,e);Gm(s,d);break e;case 1:a=l;var m=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Cr===null||!Cr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=xv(s,a,e);Gm(s,S);break e}}s=s.return}while(s!==null)}Uv(n)}catch(w){e=w,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function Nv(){var t=Lc.current;return Lc.current=Pc,t===null?Pc:t}function gp(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Yt===null||!(as&268435455)&&!(nu&268435455)||vr(Yt,en)}function Nc(t,e){var n=pt;pt|=2;var i=Nv();(Yt!==t||en!==e)&&(zi=null,ns(t,e));do try{_1();break}catch(r){Iv(t,r)}while(!0);if(Qh(),pt=n,Lc.current=i,zt!==null)throw Error(ae(261));return Yt=null,en=0,Gt}function _1(){for(;zt!==null;)Fv(zt)}function y1(){for(;zt!==null&&!Xy();)Fv(zt)}function Fv(t){var e=kv(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?Uv(t):zt=e,dp.current=null}function Uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=h1(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,zt=null;return}}else if(n=f1(n,e,Nn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Gt===0&&(Gt=5)}function jr(t,e,n){var i=xt,r=Qn.transition;try{Qn.transition=null,xt=1,S1(t,e,n,i)}finally{Qn.transition=r,xt=i}return null}function S1(t,e,n,i){do ro();while(Sr!==null);if(pt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tS(t,s),t===Yt&&(zt=Yt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Bv(mc,function(){return ro(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=xt;xt=1;var a=pt;pt|=4,dp.current=null,m1(t,n),Pv(n,t),VS(nf),xc=!!tf,nf=tf=null,t.current=n,g1(n),jy(),pt=a,xt=o,Qn.transition=s}else t.current=n;if(ol&&(ol=!1,Sr=t,Ic=r),s=t.pendingLanes,s===0&&(Cr=null),$y(n.stateNode),An(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dc)throw Dc=!1,t=Ef,Ef=null,t;return Ic&1&&t.tag!==0&&ro(),s=t.pendingLanes,s&1?t===Tf?fa++:(fa=0,Tf=t):fa=0,kr(),null}function ro(){if(Sr!==null){var t=gx(Ic),e=Qn.transition,n=xt;try{if(Qn.transition=null,xt=16>t?16:t,Sr===null)var i=!1;else{if(t=Sr,Sr=null,Ic=0,pt&6)throw Error(ae(331));var r=pt;for(pt|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var f=we;switch(f.tag){case 0:case 11:case 15:ua(8,f,s)}var h=f.child;if(h!==null)h.return=f,we=h;else for(;we!==null;){f=we;var u=f.sibling,p=f.return;if(bv(f),f===c){we=null;break}if(u!==null){u.return=p,we=u;break}we=p}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,we=d;break e}we=s.return}}var m=t.current;for(we=m;we!==null;){o=we;var M=o.child;if(o.subtreeFlags&2064&&M!==null)M.return=o,we=M;else e:for(o=m;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(w){Ft(a,a.return,w)}if(a===o){we=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,we=S;break e}we=a.return}}if(pt=r,kr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(qc,t)}catch{}i=!0}return i}finally{xt=n,Qn.transition=e}}return!1}function ug(t,e,n){e=go(n,e),e=gv(t,e,1),t=br(t,e,1),e=gn(),t!==null&&(Ua(t,1,e),An(t,e))}function Ft(t,e,n){if(t.tag===3)ug(t,t,n);else for(;e!==null;){if(e.tag===3){ug(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=go(n,t),t=xv(e,t,1),e=br(e,t,1),t=gn(),e!==null&&(Ua(e,1,t),An(e,t));break}}e=e.return}}function M1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(en&n)===n&&(Gt===4||Gt===3&&(en&130023424)===en&&500>kt()-hp?ns(t,0):fp|=n),An(t,e)}function Ov(t,e){e===0&&(t.mode&1?(e=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):e=1);var n=gn();t=Ji(t,e),t!==null&&(Ua(t,e,n),An(t,n))}function E1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ov(t,n)}function T1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Ov(t,n)}var kv;kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,d1(t,e,n);En=!!(t.flags&131072)}else En=!1,bt&&e.flags&1048576&&Hx(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kl(t,e),t=e.pendingProps;var r=fo(e,fn.current);io(e,n),r=op(null,e,i,t,r,n);var s=ap();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Mc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tp(e),r.updater=eu,e.stateNode=r,r._reactInternals=e,ff(e,i,t,n),e=mf(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&Yh(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=A1(i),t=ai(i,t),r){case 0:e=pf(null,e,i,t,n);break e;case 1:e=eg(null,e,i,t,n);break e;case 11:e=Qm(null,e,i,t,n);break e;case 14:e=Jm(null,e,i,ai(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),eg(t,e,i,r,n);case 3:e:{if(Sv(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yx(t,e),bc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=go(Error(ae(423)),e),e=tg(t,e,i,n,r);break e}else if(i!==r){r=go(Error(ae(424)),e),e=tg(t,e,i,n,r);break e}else for(On=Ar(e.stateNode.containerInfo.firstChild),Bn=e,bt=!0,ui=null,n=jx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=er(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return $x(e),t===null&&cf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,rf(i,r)?o=null:s!==null&&rf(i,s)&&(e.flags|=32),yv(t,e),pn(t,e,o,n),e.child;case 6:return t===null&&cf(e),null;case 13:return Mv(t,e,n);case 4:return np(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=po(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Qm(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Tt(wc,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!Tn.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,io(e,n),r=ei(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Jm(t,e,i,r,n);case 15:return vv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Kl(t,e),e.tag=1,wn(i)?(t=!0,Mc(e)):t=!1,io(e,n),mv(e,i,r),ff(e,i,r,n),mf(null,e,i,!0,t,n);case 19:return Ev(t,e,n);case 22:return _v(t,e,n)}throw Error(ae(156,e.tag))};function Bv(t,e){return fx(t,e)}function w1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,e,n,i){return new w1(t,e,n,i)}function xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function A1(t){if(typeof t=="function")return xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uh)return 11;if(t===Oh)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return is(n.children,r,s,e);case Fh:o=8,r|=8;break;case Fd:return t=Zn(12,n,e,r|2),t.elementType=Fd,t.lanes=s,t;case Ud:return t=Zn(13,n,e,r),t.elementType=Ud,t.lanes=s,t;case Od:return t=Zn(19,n,e,r),t.elementType=Od,t.lanes=s,t;case $0:return iu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q0:o=10;break e;case Y0:o=9;break e;case Uh:o=11;break e;case Oh:o=14;break e;case mr:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function is(t,e,n,i){return t=Zn(7,t,i,e),t.lanes=n,t}function iu(t,e,n,i){return t=Zn(22,t,i,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=Zn(6,t,null,e),t.lanes=n,t}function Hu(t,e,n){return e=Zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function b1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mu(0),this.expirationTimes=Mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vp(t,e,n,i,r,s,o,a,l){return t=new b1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(s),t}function C1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function zv(t){if(!t)return Dr;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(wn(n))return zx(t,n,e)}return e}function Vv(t,e,n,i,r,s,o,a,l){return t=vp(n,i,!0,t,r,s,o,a,l),t.context=zv(null),n=t.current,i=gn(),r=Rr(n),s=ji(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Ua(t,r,i),An(t,i),t}function ru(t,e,n,i){var r=e.current,s=gn(),o=Rr(r);return n=zv(n),e.context===null?e.context=n:e.pendingContext=n,e=ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,o),t!==null&&(mi(t,r,o,s),ql(t,r,o)),o}function Fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _p(t,e){dg(t,e),(t=t.alternate)&&dg(t,e)}function R1(){return null}var Hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function yp(t){this._internalRoot=t}su.prototype.render=yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));ru(t,e,null,null)};su.prototype.unmount=yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){ru(null,t,null,null)}),e[Qi]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=_x();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&Sx(t)}};function Sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fg(){}function P1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fc(o);s.call(c)}}var o=Vv(e,i,t,0,null,!1,!1,"",fg);return t._reactRootContainer=o,t[Qi]=o.current,Ma(t.nodeType===8?t.parentNode:t),ls(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Fc(l);a.call(c)}}var l=vp(t,0,!1,null,null,!1,!1,"",fg);return t._reactRootContainer=l,t[Qi]=l.current,Ma(t.nodeType===8?t.parentNode:t),ls(function(){ru(e,l,n,i)}),l}function au(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fc(o);a.call(l)}}ru(e,o,t,r)}else o=P1(n,e,t,r,i);return Fc(o)}xx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(zh(e,n|1),An(e,kt()),!(pt&6)&&(xo=kt()+500,kr()))}break;case 13:ls(function(){var i=Ji(t,1);if(i!==null){var r=gn();mi(i,t,1,r)}}),_p(t,1)}};Vh=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=gn();mi(e,t,134217728,n)}_p(t,134217728)}};vx=function(t){if(t.tag===13){var e=Rr(t),n=Ji(t,e);if(n!==null){var i=gn();mi(n,t,e,i)}_p(t,e)}};_x=function(){return xt};yx=function(t,e){var n=xt;try{return xt=t,e()}finally{xt=n}};qd=function(t,e,n){switch(e){case"input":if(zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zc(i);if(!r)throw Error(ae(90));Z0(i),zd(i,r)}}}break;case"textarea":J0(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};ox=pp;ax=ls;var L1={usingClientEntryPoint:!1,Events:[ka,Xs,Zc,rx,sx,pp]},ko={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ux(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||R1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{qc=al.inject(D1),Ci=al}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L1;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(e))throw Error(ae(200));return C1(t,e,null,n)};Vn.createRoot=function(t,e){if(!Sp(t))throw Error(ae(299));var n=!1,i="",r=Hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vp(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,Ma(t.nodeType===8?t.parentNode:t),new yp(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=ux(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return ls(t)};Vn.hydrate=function(t,e,n){if(!ou(e))throw Error(ae(200));return au(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!Sp(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vv(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,Ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new su(e)};Vn.render=function(t,e,n){if(!ou(e))throw Error(ae(200));return au(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!ou(t))throw Error(ae(40));return t._reactRootContainer?(ls(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Vn.unstable_batchedUpdates=pp;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ou(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return au(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(t){console.error(t)}}Gv(),G0.exports=Vn;var I1=G0.exports,hg=I1;Id.createRoot=hg.createRoot,Id.hydrateRoot=hg.hydrateRoot;const N1=()=>{const t=st.useRef(null);return st.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight,o=0,a=0,l=0,c=0,f=0,h=window.scrollY;const u=Math.min(260,Math.floor(r*s/5500)),p=[],_=["#00f0ff","#7000ff","#ffffff","#ff00aa","#00ff88"],E=w=>{w.x=(Math.random()-.5)*r*2,w.y=(Math.random()-.5)*s*2,w.z=r,w.pz=r,w.size=.5+Math.random()*1.8,w.color=_[Math.floor(Math.random()*_.length)]};for(let w=0;w<u;w++){const T={x:0,y:0,z:0,pz:0,size:1,color:"#ffffff"};E(T),T.z=Math.random()*r,T.pz=T.z,p.push(T)}const g=()=>{e&&(r=e.width=window.innerWidth,s=e.height=window.innerHeight)},d=w=>{l=(w.clientX-r/2)*.2,c=(w.clientY-s/2)*.2},m=()=>{const w=window.scrollY,T=Math.abs(w-h);f=Math.min(35,f+T*.6),h=w};window.addEventListener("resize",g),window.addEventListener("mousemove",d),window.addEventListener("scroll",m,{passive:!0});const M=2.5,S=()=>{o+=(l-o)*.05,a+=(c-a)*.05,f*=.92;const w=M+f;n.fillStyle="#05070e",n.fillRect(0,0,r,s);const T=r/2+o,C=s/2+a;for(let v=0;v<p.length;v++){const b=p[v];if(b.pz=b.z,b.z-=w,b.z<=0){E(b);continue}const P=250/b.z,D=b.x*P+T,k=b.y*P+C,$=250/b.pz,Q=b.x*$+T,O=b.y*$+C;if(D>=0&&D<=r&&k>=0&&k<=s){const q=Math.min(1,(1-b.z/r)*1.2);n.strokeStyle=b.color,n.lineWidth=b.size*P*(1+f*.05),n.globalAlpha=q,n.beginPath(),n.moveTo(D,k),n.lineTo(Q,O),n.stroke(),n.fillStyle=b.color,n.beginPath(),n.arc(D,k,b.size*P*.5,0,Math.PI*2),n.fill()}}n.globalAlpha=1,i=requestAnimationFrame(S)};return S(),()=>{window.removeEventListener("resize",g),window.removeEventListener("mousemove",d),window.removeEventListener("scroll",m),cancelAnimationFrame(i)}},[]),y.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),mt=(t,e)=>{const n=st.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},f)=>st.createElement("svg",{ref:f,...F1,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${U1(t)}`,a].join(" "),...c},[...e.map(([h,u])=>st.createElement(h,u)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=mt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=mt("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=mt("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=mt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=mt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=mt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=mt("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=mt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=mt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=mt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=mt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=mt("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=mt("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=mt("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=mt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=mt("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=mt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=mt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=mt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=mt("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=mt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=mt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=mt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=mt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=mt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=mt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=mt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=mt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=mt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=mt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),ys={version:"0.4.0",tagName:"v0.4.0",downloadUrlExe:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64-setup.exe",downloadUrlMsi:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64_en-US.msi",releaseNotesUrl:"https://github.com/Aryan4132/Meridian-X/releases/latest",publishedAt:new Date().toISOString(),isLive:!1,isLoading:!0};let ll=null;function Tp(){const[t,e]=st.useState(ll||ys);return st.useEffect(()=>{if(ll){e(ll);return}let n=!0;return(async()=>{try{const r=await fetch("https://api.github.com/repos/Aryan4132/Meridian-X/releases/latest",{headers:{Accept:"application/vnd.github.v3+json"}});if(r.ok){const s=await r.json(),o=s.tag_name||"v0.4.0",a=o.replace(/^v/,"");let l=ys.downloadUrlExe,c=ys.downloadUrlMsi;if(Array.isArray(s.assets)){const h=s.assets.find(p=>{var _;return(_=p.name)==null?void 0:_.endsWith(".exe")}),u=s.assets.find(p=>{var _;return(_=p.name)==null?void 0:_.endsWith(".msi")});h!=null&&h.browser_download_url&&(l=h.browser_download_url),u!=null&&u.browser_download_url&&(c=u.browser_download_url)}const f={version:a,tagName:o,downloadUrlExe:l,downloadUrlMsi:c,releaseNotesUrl:s.html_url||ys.releaseNotesUrl,publishedAt:s.published_at||ys.publishedAt,isLive:!0,isLoading:!1};ll=f,n&&e(f);return}}catch{}n&&e({...ys,isLoading:!1})})(),()=>{n=!1}},[]),t}const tM=({onDownloadClick:t,detectedOS:e})=>{const[n,i]=st.useState(!1),[r,s]=st.useState(!1),o=Tp();return st.useEffect(()=>{const a=()=>{i(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),y.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",background:n?"rgba(3, 3, 3, 0.92)":"rgba(3, 3, 3, 0.5)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:n?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 255, 255, 0.04)",boxShadow:n?"0 12px 36px rgba(0, 0, 0, 0.9)":"none",padding:n?"12px 0":"18px 0"},children:[y.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[y.jsx("img",{src:"/logo.png",alt:"Meridian-X Logo",style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover",border:"1px solid rgba(255, 255, 255, 0.25)",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 255, 255, 0.15)"}}),y.jsx("div",{children:y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.3rem",letterSpacing:"-0.03em",color:"#FFFFFF"},children:["Meridian",y.jsx("span",{style:{color:"#A1A1AA",fontWeight:600},children:"-X"})]}),y.jsx("span",{className:"glass-pill",style:{fontSize:"0.68rem",padding:"2px 8px",color:"#FAFAFA",borderColor:"rgba(255, 255, 255, 0.2)",fontFamily:"var(--font-code)"},children:o.tagName})]})})]}),y.jsxs("nav",{className:"desktop-nav",style:{display:"flex",alignItems:"center",gap:"24px",background:"rgba(18, 18, 22, 0.8)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"9999px",padding:"6px 20px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)"},children:[y.jsx("a",{href:"#simulator",className:"nav-item-link",children:"Terminal Demo"}),y.jsx("a",{href:"#features",className:"nav-item-link",children:"Features"}),y.jsx("a",{href:"#architecture",className:"nav-item-link",children:"Architecture"}),y.jsx("a",{href:"#mcp",className:"nav-item-link",children:"MCP Marketplace"})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[y.jsxs("button",{onClick:t,className:"btn-primary",style:{padding:"9px 18px",fontSize:"0.86rem",borderRadius:"10px"},children:[y.jsx(Jr,{size:15}),y.jsxs("span",{children:["Download (",e,")"]})]}),y.jsx("button",{onClick:()=>s(!r),className:"mobile-toggle",style:{background:"rgba(18, 18, 22, 0.8)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#FFFFFF",cursor:"pointer",padding:"8px",display:"none"},"aria-label":"Toggle menu",children:r?y.jsx(Ep,{size:20}):y.jsx(j1,{size:20})})]})]}),r&&y.jsxs("div",{style:{background:"rgba(8, 8, 10, 0.98)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",padding:"24px",display:"flex",flexDirection:"column",gap:"16px",marginTop:"12px"},children:[y.jsx("a",{href:"#simulator",onClick:()=>s(!1),style:cl,children:"Terminal Demo"}),y.jsx("a",{href:"#features",onClick:()=>s(!1),style:cl,children:"Core Pillars"}),y.jsx("a",{href:"#architecture",onClick:()=>s(!1),style:cl,children:"Architecture"}),y.jsx("a",{href:"#mcp",onClick:()=>s(!1),style:cl,children:"MCP Marketplace"})]}),y.jsx("style",{children:`
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
      `})]})},cl={color:"#FAFAFA",textDecoration:"none",fontSize:"1.05rem",fontWeight:600};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Br=typeof window<"u",Wu=Br?window:null,La=Br?document:null,Rt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},at={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Kn={NONE:0,AUTO:1,FORCE:2},mn={replace:0,none:1,blend:2},pg=Symbol(),vo=Symbol(),$v=Symbol(),lu=Symbol(),nM=Symbol(),_t=1e-11,Cf=1e12,_o=1e3,Rf=240,cs="",iM="var(",ul=[],Kv=(()=>{const t=new Map;return t.set("x","translateX"),t.set("y","translateY"),t.set("z","translateZ"),t})(),Oc=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],rM=Oc.reduce((t,e)=>({...t,[e]:e+"("}),{}),jn=()=>{},sM=t=>t,oM=/\)\s*[-.\d]/,aM=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,lM=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,cM=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,uM=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,dM=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,mg=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Zv=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,fM=/([a-z])([A-Z])/g,hM=/(\*=|\+=|-=)/,pM=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const kc={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:Rf,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:_o,delay:0,loopDelay:0,ease:"out(2)",composition:mn.replace,modifier:sM,onBegin:jn,onBeforeUpdate:jn,onUpdate:jn,onLoop:jn,onPause:jn,onComplete:jn,onRender:jn},mM={root:La},Zt={defaults:kc,precision:4,timeScale:1,tickThreshold:200},Qv={version:"4.5.0",engine:null};Br&&(Wu.AnimeJS||(Wu.AnimeJS=[]),Wu.AnimeJS.push(Qv));/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Jv=t=>t.replace(fM,"$1-$2").toLowerCase(),qi=(t,e)=>t.indexOf(e)===0,yo=Date.now,Yi=Array.isArray,Xu=t=>t&&t.constructor===Object,Vi=t=>typeof t=="number"&&!isNaN(t),us=t=>typeof t=="string",ds=t=>typeof t=="function",dt=t=>typeof t>"u",so=t=>dt(t)||t===null,e_=t=>Br&&t instanceof SVGElement,t_=t=>aM.test(t),n_=t=>qi(t,"rgb"),i_=t=>qi(t,"hsl"),gM=t=>t_(t)||(n_(t)||i_(t))&&(t[t.length-1]===")"||!oM.test(t)),tc=t=>!Zt.defaults.hasOwnProperty(t),xM=["opacity","rotate","overflow","color"],vM=(t,e)=>{if(xM.includes(e))return!1;if(t.getAttribute(e)||e in t){if(e==="scale"){const n=t.parentNode;return n&&n.tagName==="filter"}return!0}},ju=t=>us(t)?parseFloat(t):t,Os=Math.pow,Pf=Math.sqrt,_M=Math.sin,yM=Math.cos,dl=Math.abs,Jo=Math.floor,SM=Math.asin,wp=Math.PI,gg=Math.round,di=(t,e,n)=>t<e?e:t>n?n:t,Et=(t,e)=>{if(e<0)return t;if(!e)return gg(t);const n=10**e;return gg(t*n)/n},nc=(t,e,n)=>n===1?e:n===0?t:t+(e-t)*n,Ap=t=>t===1/0?Cf:t===-1/0?-Cf:t,ha=t=>t<=_t?_t:Ap(Et(t,11)),ln=t=>Yi(t)?[...t]:t,MM=(t,e)=>{const n={...t};for(let i in e){const r=t[i];n[i]=dt(r)?e[i]:r}return n},Ht=(t,e,n,i="_prev",r="_next")=>{let s=t._head,o=r;for(n&&(s=t._tail,o=i);s;){const a=s[o];e(s),s=a}},ea=(t,e,n="_prev",i="_next")=>{const r=e[n],s=e[i];r?r[i]=s:t._head=s,s?s[n]=r:t._tail=r,e[n]=null,e[i]=null},Qs=(t,e,n,i="_prev",r="_next")=>{let s=t._tail;for(;s&&n&&n(s,e);)s=s[i];const o=s?s[r]:t._head;s?s[r]=e:t._head=e,o?o[i]=e:t._tail=e,e[i]=s,e[r]=o};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const EM=(t,e,n)=>{const i=t.style.transform;if(i){const r=t[lu];let s=0;const o=i.length;let a;for(;s<o;){for(;s<o&&i.charCodeAt(s)===32;)s++;if(s>=o)break;const c=s;for(;s<o&&i.charCodeAt(s)!==40;)s++;if(s>=o)break;const f=i.substring(c,s);let h=1;const u=s+1;let p=-1,_=-1;for(s++;s<o&&h>0;){const g=i.charCodeAt(s);g===40?h++:g===41?h--:g===44&&h===1&&(p===-1?p=s:_===-1&&(_=s)),s++}const E=s-1;f==="translate"||f==="translate3d"?(p===-1?r.translateX=i.substring(u,E).trim():(r.translateX=i.substring(u,p).trim(),_===-1?r.translateY=i.substring(p+1,E).trim():(r.translateY=i.substring(p+1,_).trim(),r.translateZ=i.substring(_+1,E).trim())),a=i.substring(u,E)):f==="scale"||f==="scale3d"?p===-1?r.scale=i.substring(u,E).trim():(r.scaleX=i.substring(u,p).trim(),_===-1?r.scaleY=i.substring(p+1,E).trim():(r.scaleY=i.substring(p+1,_).trim(),r.scaleZ=i.substring(_+1,E).trim())):r[f]=i.substring(u,E)}if(e==="translate3d"&&a)return n&&(n[e]=a),a;const l=r[e];if(!dt(l))return n&&(n[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":qi(e,"scale")?"1":qi(e,"rotate")||qi(e,"skew")?"0deg":"0px"},r_=t=>{let e=cs;for(let n=0,i=Oc.length;n<i;n++){const r=Oc[n],s=t[r];if(s!==void 0){if(r==="translateX"){const o=t.translateY;if(o!==void 0){const a=t.translateZ;a!==void 0?(e+=`translate3d(${s},${o},${a}) `,n+=2):(e+=`translate(${s},${o}) `,n+=1);continue}}if(r==="scaleX"&&t.scale===void 0){const o=t.scaleY;if(o!==void 0){const a=t.scaleZ;a!==void 0?(e+=`scale3d(${s},${o},${a}) `,n+=2):(e+=`scale(${s},${o}) `,n+=1);continue}}e+=`${rM[r]}${s}) `}r==="rotateZ"&&t.rotate3d!==void 0&&(e+=`rotate3d(${t.rotate3d}) `)}return t.matrix!==void 0&&(e+=`matrix(${t.matrix}) `),t.matrix3d!==void 0&&(e+=`matrix3d(${t.matrix3d}) `),e};/**
 * Anime.js - adapters - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const qu=[];function s_(t,e){if(!t)return null;const n=qu.length;e:for(let i=0;i<n;i++){const r=qu[i];if(r.detect&&!r.detect(t))continue;const s=r.targetAdapters;for(let o=0,a=s.length;o<a;o++){const l=s[o];if(l.detect(t)){const c=l.props[e];if(c&&(!c.gate||c.gate(t)))return c;break e}}}for(let i=0;i<n;i++){const r=qu[i];if(r.detect&&!r.detect(t))continue;const s=r.propertyResolvers;for(let o=0,a=s.length;o<a;o++){const l=s[o](t,e);if(l)return l}}return null}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const TM=t=>{const e=lM.exec(t)||cM.exec(t),n=dt(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],n]},wM=t=>{const e=t.length,n=e===4||e===5;return[+("0x"+t[1]+t[n?1:2]),+("0x"+t[n?2:3]+t[n?2:4]),+("0x"+t[n?3:5]+t[n?3:6]),e===5||e===9?+(+("0x"+t[n?4:7]+t[n?4:8])/255).toFixed(3):1]},Yu=(t,e,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t),AM=t=>{const e=uM.exec(t)||dM.exec(t),n=+e[1]/360,i=+e[2]/100,r=+e[3]/100,s=dt(e[4])?1:+e[4];let o,a,l;if(i===0)o=a=l=r;else{const c=r<.5?r*(1+i):r+i-r*i,f=2*r-c;o=Et(Yu(f,c,n+1/3)*255,0),a=Et(Yu(f,c,n)*255,0),l=Et(Yu(f,c,n-1/3)*255,0)}return[o,a,l,s]},bM=t=>n_(t)?TM(t):t_(t)?wM(t):i_(t)?AM(t):[0,0,0,1];/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Qt=(t,e)=>dt(t)?e:t,xg=(t,e)=>{var s;const n=t.match(pM),i=e[vo]?e:document.documentElement;let r=(s=getComputedStyle(i))==null?void 0:s.getPropertyValue(n[1]);return(!r||r.trim()===cs)&&n[2]&&(r=n[2].trim()),r||0},Ni=(t,e,n,i,r,s)=>{if(ds(t)){if(!r){const a=t(e,n,i,s);return isNaN(+a)?a||0:+a}const o=()=>{const a=t(e,n,i,s);return isNaN(+a)?a||0:+a};return r.func=o,o()}if(us(t)&&qi(t,iM)){if(!r)return xg(t,e);const o=()=>xg(t,e);return r.func=o,o()}return t},o_=(t,e)=>t[vo]?t[$v]&&vM(t,e)?Rt.ATTRIBUTE:Oc.includes(e)||Kv.get(e)?Rt.TRANSFORM:qi(e,"--")?Rt.CSS_VAR:e in t.style?Rt.CSS:e in t?Rt.OBJECT:Rt.ATTRIBUTE:Rt.OBJECT,vg=(t,e,n)=>{const i=t.style[e];i&&n&&(n[e]=i);const r=i||getComputedStyle(t[nM]||t).getPropertyValue(e);return r==="auto"?"0":r},ks=(t,e,n,i)=>{const r=dt(n)?o_(t,e):n,s=s_(t,e);if(s){const o=s.get(t);return o&&i&&(i[e]=o),o??0}if(r===Rt.OBJECT){const o=t[e];return o&&i&&(i[e]=o),o||0}if(r===Rt.ATTRIBUTE){const o=t.getAttribute(e);return o&&i&&(i[e]=o),o}return r===Rt.TRANSFORM?EM(t,e,i):r===Rt.CSS_VAR?vg(t,e,i).trimStart():vg(t,e,i)},ic=(t,e,n)=>n==="-"?t-e:n==="+"?t+e:t*e,bp=()=>({t:at.NUMBER,n:0,u:null,o:null,d:null,s:null}),Xn=(t,e)=>{if(e.t=at.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!t)return e;const n=+t;if(!isNaN(n))return e.n=n,e;let i=t;i[1]==="="&&(e.o=i[0],i=i.slice(2));const r=i.includes(" ")?!1:Zv.exec(i);if(r)return e.t=at.UNIT,e.n=+r[1],e.u=r[2],e;if(e.o)return e.n=+i,e;if(gM(i))return e.t=at.COLOR,e.d=bM(i),e;{const s=i.match(mg);return e.t=at.COMPLEX,e.d=s?s.map(Number):[],e.s=i.split(mg)||[],e}},_g=(t,e)=>(e.t=t._valueType,e.n=t._toNumber,e.u=t._unit,e.o=null,e.d=ln(t._toNumbers),e.s=ln(t._strings),e),ci=bp(),a_=(t,e,n)=>{const i=t._modifier,r=t._fromNumbers,s=t._toNumbers,o=t._strings;let a=o[0];for(let l=0,c=s.length;l<c;l++){const f=i(Et(nc(r[l],s[l],e),n)),h=o[l+1];a+=`${h?f+h:f}`,t._numbers[l]=f}return a};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const rc=(t,e,n,i,r)=>{const s=t.parent,o=t.duration,a=t.completed,l=t.iterationDuration,c=t.iterationCount,f=t._currentIteration,h=t._loopDelay,u=t._reversed,p=t._alternate,_=t._hasChildren,E=t._delay,g=t._currentTime,d=E+l,m=e-E,M=di(g,-E,o),S=di(m,-E,o),w=m-g,T=S>0,C=S>=o,v=o<=_t,b=r===Kn.FORCE;let P=0,D=m,k=0;if(c>1){const H=l+(C?0:h),F=~~(S/H);t._currentIteration=di(F,0,c),C&&t._currentIteration--,P=t._currentIteration%2,D=S-F*H||0}const $=u^(p&&P),Q=t._ease;let O=C?$?0:o:$?l-D:D;Q&&(O=l*Q(O/l)||0);const q=(s?s.backwards:m<g)?!$:!!$;if(t._currentTime=m,t._iterationTime=O,t.backwards=q,T&&!t.began?(t.began=!0,!n&&!(s&&(q||!s.began))&&t.onBegin(t)):m<=0&&(t.began=!1),!n&&!_&&T&&t._currentIteration!==f&&t.onLoop(t),b||r===Kn.AUTO&&(e>=(s&&E>0?0:E)&&e<=d||e<=E&&M>E||e>=d&&M!==o)||O>=d&&M!==o||O<=E&&M>0&&!C||e<=M&&M===o&&a||C&&!a&&v){if(T&&(t.computeDeltaTime(M),n||t.onBeforeUpdate(t)),!_){const H=b||(q?w*-1:w)>=Zt.tickThreshold,F=Et(t._offset+(s?s._offset:0)+E+O,12);let I=t._head,j,te,re,Ve,qe=0;for(;I;){const ke=I._composition,G=I._currentTime,se=I._changeDuration,ne=I._absoluteStartTime+I._changeDuration,ue=I._nextRep,Pe=I._prevRep,_e=ke!==mn.none,be=Pe?Pe._absoluteStartTime+Pe._changeDuration:0,Se=Pe&&Pe.parent!==I.parent,He=!ue||ue._isOverridden?ne:ue.parent===I.parent?ne+ue._delay:ue._absoluteStartTime<ue._absoluteUpdateStartTime?ue._absoluteStartTime:ue._absoluteUpdateStartTime;if((H||(G!==se||F<=He||Pe&&!Se&&(!ue||ue.parent!==I.parent))&&(G!==0||F>=I._absoluteStartTime||Se&&!I._hasFromValue&&!Pe._isOverridden&&F>=be||ue&&!ue._isOverridden&&ue.parent===I.parent&&ue._currentTime!==0&&O<ue._startTime))&&(!Pe||Se||O>=I._startTime)&&(!_e||!I._isOverridden&&(!I._isOverlapped||F<=ne)&&(!ue||ue._isOverridden||F<=He)&&(!Pe||Pe._isOverridden||(Se?F>=I._absoluteStartTime||!I._hasFromValue&&F>=be:F>=be+I._delay)))){const Be=I._currentTime=di(O-I._startTime,0,se),Ce=I._ease(Be/I._updateDuration),Ye=I._modifier,Je=I._valueType,Ke=I._tweenType,ut=Ke===Rt.OBJECT,We=Je===at.NUMBER,Re=We&&ut||Ce===0||Ce===1?-1:Zt.precision;let L,Xe;if(We)L=Xe=Ye(Et(nc(I._fromNumber,I._toNumber,Ce),Re));else if(Je===at.UNIT)Xe=Ye(Et(nc(I._fromNumber,I._toNumber,Ce),Re)),L=`${Xe}${I._unit}`;else if(Je===at.COLOR){const Me=I._numbers,R=I._fromNumbers,x=I._toNumbers,U=1-Ce,V=R[0],K=R[1],oe=R[2],le=x[0],Z=x[1],J=x[2];Me[0]=Ye(Math.sqrt(V*V*U+le*le*Ce)),Me[1]=Ye(Math.sqrt(K*K*U+Z*Z*Ce)),Me[2]=Ye(Math.sqrt(oe*oe*U+J*J*Ce)),Me[3]=Ye(nc(R[3],x[3],Ce)),(!I._setter||i)&&(L=`rgba(${Et(Me[0],0)},${Et(Me[1],0)},${Et(Me[2],0)},${Me[3]})`)}else Je===at.COMPLEX&&(L=a_(I,Ce,Re));if(_e&&(I._number=Xe),!i&&ke!==mn.blend){const Me=I.property;j=I.target,I._setter?I._setter(j,Xe,I):ut?j[Me]=L:Ke===Rt.ATTRIBUTE?j.setAttribute(Me,L):(te=j.style,Ke===Rt.TRANSFORM?(j!==re&&(re=j,Ve=j[lu]),Ve[Me]=L,qe=1):Ke===Rt.CSS?te[Me]=L:Ke===Rt.CSS_VAR&&te.setProperty(Me,L)),T&&(k=1)}else I._value=L}else G&&Pe&&!Se&&O<I._startTime&&(I._currentTime=0);qe&&I._renderTransforms&&(te.transform=r_(Ve),qe=0),I=I._next}!n&&k&&t.onRender(t)}!n&&T&&t.onUpdate(t)}return s&&v?!n&&(s.began&&!q&&m>0&&!a||q&&m<=_t&&a)&&(t.onComplete(t),t.completed=!q):T&&C?c===1/0?t._startTime+=t.duration:t._currentIteration>=c-1&&(t.paused=!0,!a&&!_&&(t.completed=!0,!n&&!(s&&(q||!s.began))&&(t.onComplete(t),t._resolve(t)))):t.completed=!1,k},Bs=(t,e,n,i,r)=>{const s=t._currentIteration;if(rc(t,e,n,i,r),t._hasChildren){const o=t,a=o.backwards,l=i?e:o._iterationTime,c=yo();let f=0,h=!0;if(!i&&o._currentIteration!==s){const u=o.iterationDuration;Ht(o,p=>{if(!a)!p.completed&&!p.backwards&&p._currentTime<p.iterationDuration&&rc(p,u,n,1,Kn.FORCE),p.began=!1,p.completed=!1;else{const _=p.duration,E=p._offset+p._delay,g=E+_;!n&&_<=_t&&(!E||g===u)&&p.onComplete(p)}}),n||o.onLoop(o)}Ht(o,u=>{const p=Et((l-u._offset)*u._speed,12);if(a&&p>u._delay+u.duration)return;const _=u._fps<o._fps?u.requestTick(c):r;f+=rc(u,p,n,i,_),!u.completed&&h&&(h=!1)},a),!n&&f&&o.onRender(o),(h||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,n||(o.onComplete(o),o._resolve(o))))}};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const yg={},CM=(t,e,n)=>{if(n===Rt.TRANSFORM){const i=Kv.get(t);return i||t}else if(n===Rt.CSS||n===Rt.ATTRIBUTE&&e_(e)&&t in e.style){const i=yg[t];if(i)return i;{const r=t&&Jv(t);return yg[t]=r,r}}else return t},l_=(t,e=!1)=>{if(t._hasChildren)Ht(t,n=>l_(n,e),!0);else{const n=t;n.pause(),Ht(n,i=>{const r=i.property,s=i.target,o=i._tweenType,a=i._inlineValue,l=so(a)||a===cs;if(i._setter){if(!e&&!l){if(Xn(a,ci),ci.d){const c=ci.d,f=i._numbers;for(let h=0,u=c.length;h<u;h++)f[h]=c[h]}else i._number=ci.n;i._setter(i.target,i._number,i)}}else if(o===Rt.OBJECT)!e&&!l&&(s[r]=a);else if(s[vo])if(o===Rt.ATTRIBUTE)e||(l?s.removeAttribute(r):s.setAttribute(r,a));else{const c=s.style;if(o===Rt.TRANSFORM){const f=s[lu];l?delete f[r]:f[r]=a,i._renderTransforms&&(Object.keys(f).length?c.transform=r_(f):c.removeProperty("transform"))}else l?c.removeProperty(Jv(r)):c[r]=a}s[vo]&&n._tail===i&&n.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===cs&&c.removeAttribute("style")})})}return t};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */let c_=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=_o/Rf,this._fps=Rf,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const n=+e,i=n<_t?_t:n,r=_o/i;i>kc.frameRate&&(kc.frameRate=i),this._fps=i,this._frameDuration=r}get speed(){return this._speed}set speed(e){const n=+e;this._speed=n<_t?_t:n}requestTick(e){const n=this._frameDuration,i=e-this._lastTickTime,r=n*.25,s=r<4?r:4;return i+s<n?Kn.NONE:(this._lastTickTime=i>=n?e-i%n:e,Kn.AUTO)}computeDeltaTime(e){const n=e-this._lastTime;return this.deltaTime=n,this._lastTime=e,n}};/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const oo={animation:null,update:jn},RM=t=>{let e=oo.animation;return e||(e={duration:_t,computeDeltaTime:jn,_offset:0,_delay:0,_head:null,_tail:null},oo.animation=e,oo.update=()=>{t.forEach(n=>{for(let i in n){const r=n[i],s=r._head;if(s){const o=s._valueType,a=o===at.COMPLEX||o===at.COLOR?ln(s._fromNumbers):null;let l=s._fromNumber,c=r._tail;for(;c&&c!==s;){if(a)for(let f=0,h=c._numbers.length;f<h;f++)a[f]+=c._numbers[f];else l+=c._number;c=c._prevAdd}s._toNumber=l,s._toNumbers=a}}}),rc(e,1,1,0,Kn.FORCE)}),e};/**
 * Anime.js - engine - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const u_=Br?requestAnimationFrame:setImmediate,PM=Br?cancelAnimationFrame:clearImmediate;class LM extends c_{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=kc,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=yo();if(this.requestTick(e)){this.computeDeltaTime(e);const n=this._speed,i=this._fps;let r=this._head;for(;r;){const s=r._next;r.paused?(ea(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):Bs(r,(e-r._startTime)*r._speed*n,0,0,r._fps<i?r.requestTick(e):Kn.AUTO),r=s}oo.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(yo()),this.reqId=u_(d_)),this}pause(){if(this.reqId)return this.paused=!0,DM()}resume(){if(this.paused)return this.paused=!1,Ht(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Zt.timeScale===1?1:_o)}set speed(e){const n=e*Zt.timeScale;this._speed!==n&&(this._speed=n,Ht(this,i=>i.speed=i._speed))}get timeUnit(){return Zt.timeScale===1?"ms":"s"}set timeUnit(e){const i=e==="s",r=i?.001:1;if(Zt.timeScale!==r){Zt.timeScale=r,Zt.tickThreshold=200*r;const s=i?.001:_o;this.defaults.duration*=s,this._speed*=s}}get precision(){return Zt.precision}set precision(e){Zt.precision=e}}const cn=(()=>{const t=new LM(yo());return Br&&(Qv.engine=t,La.addEventListener("visibilitychange",()=>{t.pauseOnDocumentHidden&&(La.hidden?t.pause():t.resume())})),t})(),d_=()=>{cn._head?(cn.reqId=u_(d_),cn.update()):cn.reqId=0},DM=()=>(PM(cn.reqId),cn.reqId=0,cn);/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Bc={_rep:new WeakMap,_add:new Map},Cp=(t,e,n="_rep")=>{const i=Bc[n];let r=i.get(t);return r||(r={},i.set(t,r)),r[e]?r[e]:r[e]={_head:null,_tail:null}},IM=(t,e)=>t._isOverridden||t._absoluteStartTime>e._absoluteStartTime,sc=t=>{t._isOverlapped=1,t._isOverridden=1,t._changeDuration=_t,t._currentTime=_t},f_=(t,e)=>{const n=t._composition;if(n===mn.replace){const i=t._absoluteStartTime;Qs(e,t,IM,"_prevRep","_nextRep");const r=t._prevRep;if(r){const s=r.parent,o=r._absoluteEndTime;if(t.parent.id!==s.id&&s.iterationCount>1&&o+(s.duration-s.iterationDuration)>i){sc(r);let c=r._prevRep;for(;c&&c.parent.id===s.id;)sc(c),c=c._prevRep}const a=t._absoluteUpdateStartTime;if(o>a){const c=r._startTime,f=o-(c+r._updateDuration),h=Et(a-f-c,12);r._changeDuration=h,r._currentTime=h,r._isOverlapped=1,h<_t&&sc(r)}const l=t.parent.parent;if(!l||l!==s.parent){let c=!0;if(Ht(s,f=>{f._isOverlapped||(c=!1)}),c){const f=s.parent;if(f){let h=!0;Ht(f,u=>{u!==s&&Ht(u,p=>{p._isOverlapped||(h=!1)})}),h&&f.cancel()}else s.cancel()}}}}else if(n===mn.blend){const i=Cp(t.target,t.property,"_add"),r=RM(Bc._add);let s=i._head;s||(s={...t},s._composition=mn.replace,s._updateDuration=_t,s._startTime=0,s._numbers=ln(t._fromNumbers),s._number=0,s._next=null,s._prev=null,Qs(i,s),Qs(r,s));const o=t._toNumber;if(t._fromNumber=s._fromNumber-o,t._toNumber=0,t._numbers=ln(t._fromNumbers),t._number=0,s._fromNumber=o,t._toNumbers.length){const a=ln(t._toNumbers);a.forEach((l,c)=>{t._fromNumbers[c]=s._fromNumbers[c]-l,t._toNumbers[c]=0}),s._fromNumbers=a}Qs(i,t,null,"_prevAdd","_nextAdd")}return t},NM=t=>{const e=t._composition;if(e!==mn.none){const n=t.target,i=t.property,o=Bc._rep.get(n)[i];if(ea(o,t,"_prevRep","_nextRep"),e===mn.blend){const a=Bc._add,l=a.get(n);if(!l)return;const c=l[i],f=oo.animation;ea(c,t,"_prevAdd","_nextAdd");const h=c._head;if(h&&h===c._tail){ea(c,h,"_prevAdd","_nextAdd"),ea(f,h);let u=!0;for(let p in l)if(l[p]._head){u=!1;break}u&&a.delete(n)}}}return t};/**
 * Anime.js - timer - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Sg=t=>(t.paused=!0,t.began=!1,t.completed=!1,t),Lf=t=>(t._cancelled&&(t._hasChildren?Ht(t,Lf):Ht(t,e=>{e._composition!==mn.none&&f_(e,Cp(e.target,e.property))}),t._cancelled=0),t);let Mg=0;const FM=(t,e)=>t._priority>e._priority;class UM extends c_{constructor(e={},n=null,i=0){super(0),++Mg;const{id:r,delay:s,duration:o,reversed:a,alternate:l,loop:c,loopDelay:f,autoplay:h,frameRate:u,playbackRate:p,priority:_,onComplete:E,onLoop:g,onPause:d,onBegin:m,onBeforeUpdate:M,onUpdate:S}=e,w=n?0:cn._lastTickTime,T=n?n.defaults:Zt.defaults,C=ds(s)||dt(s)?T.delay:+s,v=ds(o)||dt(o)?1/0:+o,b=Qt(c,T.loop),P=Qt(f,T.loopDelay);let D=b===!0||b===1/0||b<0?1/0:b+1,k=0;n?k=i:(cn.reqId||cn.requestTick(yo()),k=(cn._lastTickTime-cn._startTime)*Zt.timeScale),this.id=dt(r)?Mg:r,this.parent=n,this.duration=Ap((v+P)*D-P)||_t,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=m||T.onBegin,this.onBeforeUpdate=M||T.onBeforeUpdate,this.onUpdate=S||T.onUpdate,this.onLoop=g||T.onLoop,this.onPause=d||T.onPause,this.onComplete=E||T.onComplete,this.iterationDuration=v,this.iterationCount=D,this._autoplay=n?!1:Qt(h,T.autoplay),this._offset=k,this._delay=C,this._loopDelay=P,this._iterationTime=0,this._currentIteration=0,this._resolve=jn,this._running=!1,this._reversed=+Qt(a,T.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Qt(l,T.alternate),this._prev=null,this._next=null,this._lastTickTime=w,this._startTime=w,this._lastTime=w,this._fps=Qt(u,T.frameRate),this._speed=Qt(p,T.playbackRate),this._priority=+Qt(_,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return di(Et(this._currentTime,Zt.precision),-this._delay,this.duration)}set currentTime(e){const n=this.paused;this.pause().seek(+e),n||this.resume()}get iterationCurrentTime(){return di(Et(this._iterationTime,Zt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return di(Et(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return di(Et(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const n=this.iterationDuration;this.currentTime=n*this._currentIteration+n*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*di(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return Lf(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Bs(this,0,1,~~e,Kn.FORCE),Sg(this),this._hasChildren&&Ht(this,Sg),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Bs(this,this.duration,1,~~e,Kn.FORCE),this.reset(e);const n=this._autoplay;return n===!0?this.resume():n&&!dt(n.linked)&&n.link(this),this}resetTime(){const e=1/(this._speed*cn._speed);return this._startTime=yo()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=_t&&!this._hasChildren?Bs(this,_t,0,0,Kn.FORCE):(this._running||(Qs(cn,this,FM),cn._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,cn.wake()),this):this}restart(){return this.reset().resume()}seek(e,n=0,i=0){Lf(this),this.completed=!1;const r=this.paused;return this.paused=!0,Bs(this,e+this._delay,~~n,~~i,Kn.AUTO),r?this:this.resume()}alternate(){const e=this._reversed,n=this.iterationCount,i=this.iterationDuration,r=n===1/0?Jo(Cf/i):n;return this._reversed=+(this._alternate&&!(r%2)?e:!e),n===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Ht(this,e=>e.cancel(),!0):Ht(this,NM),this._cancelled=1,this.pause()}stretch(e){const n=this.duration,i=ha(e);if(n===i)return this;const r=e/n,s=e<=_t;return this.duration=s?_t:i,this.iterationDuration=s?_t:ha(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){Bs(this,0,1,0,Kn.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=jn){const n=this.then,i=()=>{this.then=null,e(this),this.then=n,this._resolve=jn};return new Promise(r=>(this._resolve=()=>r(i()),this.completed&&this._resolve(),this))}}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */function Eg(t){const e=us(t)?mM.root.querySelectorAll(t):t;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function OM(t){if(so(t))return[];if(!Br)return Yi(t)&&t.flat(1/0)||[t];if(Yi(t)){const n=t.flat(1/0),i=[];for(let r=0,s=n.length;r<s;r++){const o=n[r];if(!so(o)){const a=Eg(o);if(a)for(let l=0,c=a.length;l<c;l++){const f=a[l];if(!so(f)){let h=!1;for(let u=0,p=i.length;u<p;u++)if(i[u]===f){h=!0;break}h||i.push(f)}}else{let l=!1;for(let c=0,f=i.length;c<f;c++)if(i[c]===o){l=!0;break}l||i.push(o)}}}return i}const e=Eg(t);return e?Array.from(e):[t]}function h_(t){const e=OM(t),n=e.length;for(let i=0;i<n;i++){const r=e[i];if(!r[pg]){r[pg]=!0;const s=e_(r);(r.nodeType||s)&&(r[vo]=!0,r[$v]=s,r[lu]={})}}return e}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const $u={deg:1,rad:180/wp,turn:360},Tg={},wg=(t,e,n,i=!1)=>{const r=e.u,s=e.n;if(e.t===at.UNIT&&r===n)return e;const o=s+r+n,a=Tg[o];if(!dt(a)&&!i)e.n=a;else{let l;if(r in $u)l=s*$u[r]/$u[n];else{const f=t.cloneNode(),h=t.parentNode,u=h&&h!==La?h:La.body;u.appendChild(f);const p=f.style;p.width=100+r;const _=f.offsetWidth||100;p.width=100+n;const E=f.offsetWidth||100,g=_/E;u.removeChild(f),l=g*s}e.n=l,Tg[o]=l}return e.t,at.UNIT,e.u=n,e};/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Ir=t=>t;/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Bo=(t=1.68)=>e=>Os(e,+t),Df={in:t=>e=>t(e),out:t=>e=>1-t(1-e),inOut:t=>e=>e<.5?t(e*2)/2:1-t(e*-2+2)/2,outIn:t=>e=>e<.5?(1-t(1-e*2))/2:(t(e*2-1)+1)/2},kM=wp/2,Ag=wp*2,bg={[cs]:Bo,Quad:Bo(2),Cubic:Bo(3),Quart:Bo(4),Quint:Bo(5),Sine:t=>1-yM(t*kM),Circ:t=>1-Pf(1-t*t),Expo:t=>t?Os(2,10*t-10):0,Bounce:t=>{let e,n=4;for(;t<((e=Os(2,--n))-1)/11;);return 1/Os(4,3-n)-7.5625*Os((e*3-2)/22-t,2)},Back:(t=1.7)=>e=>(+t+1)*e*e*e-+t*e*e,Elastic:(t=1,e=.3)=>{const n=di(+t,1,10),i=di(+e,_t,2),r=i/Ag*SM(1/n),s=Ag/i;return o=>o===0||o===1?o:-n*Os(2,-10*(1-o))*_M((1-o-r)*s)}},Ku=(()=>{const t={linear:Ir,none:Ir};for(let e in Df)for(let n in bg){const i=bg[n],r=Df[e];t[e+n]=n===cs||n==="Back"||n==="Elastic"?(s,o)=>r(i(s,o)):r(i)}return t})(),fl={linear:Ir,none:Ir},BM=t=>{if(fl[t])return fl[t];if(t.indexOf("(")<=-1){const n=Df[t]||t.includes("Back")||t.includes("Elastic")?Ku[t]():Ku[t];return n?fl[t]=n:Ir}else{const e=t.slice(0,-1).split("("),n=Ku[e[0]];return n?fl[t]=n(...e[1].split(",")):Ir}},Cg=["steps(","irregular(","linear(","cubicBezier("],If=t=>{if(us(t)){for(let n=0,i=Cg.length;n<i;n++)if(qi(t,Cg[n]))return console.warn(`String syntax for \`ease: "${t}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${t}\``),Ir}return ds(t)?t:us(t)?BM(t):Ir};/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const je=bp(),et=bp(),Ss={},hl={func:null},pl={func:null},ml=[null],Ms=[null,null],gl={to:null};let zM=0,Rg=0,lr,_i;const VM=(t,e)=>{const n={};if(Yi(t)){const i=[].concat(...t.map(r=>Object.keys(r))).filter(tc);for(let r=0,s=i.length;r<s;r++){const o=i[r],a=t.map(l=>{const c={};for(let f in l){const h=l[f];tc(f)?f===o&&(c.to=h):c[f]=h}return c});n[o]=a}}else{const i=Qt(e.duration,Zt.defaults.duration);Object.keys(t).map(s=>({o:parseFloat(s)/100,p:t[s]})).sort((s,o)=>s.o-o.o).forEach(s=>{const o=s.o,a=s.p;for(let l in a)if(tc(l)){let c=n[l];c||(c=n[l]=[]);const f=o*i;let h=c.length,u=c[h-1];const p={to:a[l]};let _=0;for(let E=0;E<h;E++)_+=c[E].duration;h===1&&(p.from=u.to),a.ease&&(p.ease=a.ease),p.duration=f-(h?_:0),c.push(p)}return s});for(let s in n){const o=n[s];let a;for(let l=0,c=o.length;l<c;l++){const f=o[l],h=f.ease;f.ease=a||void 0,a=h}o[0].duration||o.shift()}}return n};class HM extends UM{constructor(e,n,i,r,s=!1,o=0,a){super(n,i,r),this._head,this._tail,++Rg;const l=h_(e),c=l.length,f=n.keyframes,h=f?MM(VM(f,n),n):n,{id:u,delay:p,duration:_,ease:E,playbackEase:g,modifier:d,composition:m,onRender:M}=h,S=i?i.defaults:Zt.defaults,w=Qt(E,S.ease),T=Qt(g,S.playbackEase),C=T?If(T):null,v=!dt(w.ease),b=v?w.ease:Qt(E,C?"linear":S.ease),P=v?w.settlingDuration:Qt(_,S.duration),D=Qt(p,S.delay),k=d||S.modifier,$=dt(m)&&c>=_o?mn.none:dt(m)?S.composition:m,Q=this._offset+(i?i._offset:0);v&&(w.parent=this);let O=NaN,q=NaN,H=0,F=0;for(let I=0;I<c;I++){const j=l[I],te=o||I,re=a||l;let Ve=NaN,qe=NaN;for(let ke in h)if(tc(ke)){const G=o_(j,ke),se=s_(j,ke),ne=CM(ke,j,G);let ue=h[ke];const Pe=Yi(ue);if(s&&!Pe&&(Ms[0]=ue,Ms[1]=ue,ue=Ms),Pe){const Ce=ue.length,Ye=!Xu(ue[0]);Ce===2&&Ye?(gl.to=ue,ml[0]=gl,lr=ml):Ce>2&&Ye?(lr=[],ue.forEach((Je,Ke)=>{Ke?Ke===1?(Ms[1]=Je,lr.push(Ms)):lr.push(Je):Ms[0]=Je})):lr=ue}else ml[0]=ue,lr=ml;let _e=null,be=null,Se=NaN,He=0,Be=0;for(let Ce=lr.length;Be<Ce;Be++){const Ye=lr[Be];Xu(Ye)?_i=Ye:(gl.to=Ye,_i=gl),hl.func=null,pl.func=null;const Je=Ni(Qt(_i.composition,$),j,te,re,null,null),Ke=Vi(Je)?Je:mn[Je];!_e&&Ke!==mn.none&&(_e=Cp(j,ne));const ut=_e?_e._tail:null,We=i&&ut&&ut.parent.parent===i?ut:be,Re=Ni(_i.to,j,te,re,hl,We);let L;Xu(Re)&&!dt(Re.to)?(_i=Re,L=Re.to):L=Re;const Xe=Ni(_i.from,j,te,re,pl,We),Me=_i.ease||b,R=Ni(Me,j,te,re,null,We),x=ds(R)||us(R)?R:Me,U=!dt(x)&&!dt(x.ease),V=U?x.ease:x,K=U?x.settlingDuration:Ni(Qt(_i.duration,Ce>1?Ni(P,j,te,re,null,We)/Ce:P),j,te,re,null,We),oe=Ni(Qt(_i.delay,Be?0:D),j,te,re,null,We),le=_i.modifier||k,Z=!dt(Xe),J=!dt(L),ce=Yi(L),De=ce||Z&&J,pe=be?He:0,he=be?He+oe:oe,Ie=Et(Q+he,12),ze=Et(Q+pe,12);!F&&(Z||ce)&&(F=1);let Oe=be;if(Ke!==mn.none){let Fe=_e._head;for(;Fe&&Fe._absoluteStartTime<=Ie;)if(Fe._isOverridden||(Oe=Fe),Fe=Fe._nextRep,Fe&&Fe._absoluteStartTime>=Ie)for(;Fe;)sc(Fe),Fe=Fe._nextRep}if(De){Xn(ce?Ni(L[0],j,te,re,pl,We):Xe,je),Xn(ce?Ni(L[1],j,te,re,hl,We):L,et);const Fe=ks(j,ne,G,Ss);je.t===at.NUMBER&&(Oe?Oe._valueType===at.UNIT&&(je.t=at.UNIT,je.u=Oe._unit):(Xn(Fe,ci),ci.t===at.UNIT&&(je.t=at.UNIT,je.u=ci.u)))}else J?Xn(L,et):be?_g(be,et):Xn(i&&Oe&&Oe.parent.parent===i?Oe._value:ks(j,ne,G,Ss),et),Z?Xn(Xe,je):be?_g(be,je):Xn(i&&Oe&&Oe.parent.parent===i?Oe._value:ks(j,ne,G,Ss),je);if(je.o&&(je.n=ic(Oe?Oe._toNumber:Xn(ks(j,ne,G,Ss),ci).n,je.n,je.o)),et.o&&(et.n=ic(je.n,et.n,et.o)),je.t!==et.t){if(je.t===at.COMPLEX||et.t===at.COMPLEX){const Fe=je.t===at.COMPLEX?je:et,Ze=je.t===at.COMPLEX?et:je;Ze.t=at.COMPLEX,Ze.s=ln(Fe.s),Ze.d=Fe.d.map(()=>Ze.n)}else if(je.t===at.UNIT||et.t===at.UNIT){const Fe=je.t===at.UNIT?je:et,Ze=je.t===at.UNIT?et:je;Ze.t=at.UNIT,Ze.u=Fe.u}else if(je.t===at.COLOR||et.t===at.COLOR){const Fe=je.t===at.COLOR?je:et,Ze=je.t===at.COLOR?et:je;Ze.t=at.COLOR,Ze.d=Fe.d.map(()=>0)}}if(je.u!==et.u){let Fe=et.u?je:et;Fe=wg(j,Fe,et.u?et.u:je.u,!1)}if(et.d&&je.d&&et.d.length!==je.d.length){const Fe=je.d.length>et.d.length?je:et,Ze=Fe===je?et:je;Ze.d=Fe.d.map((ni,Rn)=>dt(Ze.d[Rn])?0:Ze.d[Rn]),Ze.s=ln(Fe.s)}const N=Et(+K||_t,12);let de=Ss[ne];so(de)||(Ss[ne]=null);const ee=se?se.set:null;He=Et(he+N,12);const fe=je.d,me=et.d,ie=et.s,ye={parent:this,id:zM++,property:ne,target:j,_value:null,_toFunc:hl.func,_fromFunc:pl.func,_ease:If(V),_fromNumbers:fe?ln(fe):ul,_toNumbers:me?ln(me):ul,_strings:ie?ln(ie):ul,_fromNumber:je.n,_toNumber:et.n,_numbers:fe?ln(fe):ul,_number:je.n,_unit:et.u,_modifier:le,_currentTime:0,_startTime:he,_delay:+oe,_updateDuration:N,_changeDuration:N,_absoluteStartTime:Ie,_absoluteUpdateStartTime:ze,_absoluteEndTime:Et(Q+He,12),_hasFromValue:Z||ce?1:0,_tweenType:G,_setter:ee,_valueType:et.t,_composition:Ke,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:de,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};Ke!==mn.none&&f_(ye,_e);const Ae=ye._valueType;if(Ae===at.COMPLEX)ye._value=a_(ye,1,-1);else if(Ae===at.UNIT)ye._value=`${le(ye._toNumber)}${ye._unit}`;else if(Ae===at.COLOR){const Fe=et.d;ye._value=`rgba(${Et(Fe[0],0)},${Et(Fe[1],0)},${Et(Fe[2],0)},${Fe[3]})`}else ye._value=le(ye._toNumber);isNaN(Se)&&(Se=ye._startTime),be=ye,H++,Qs(this,ye)}(isNaN(q)||Se<q)&&(q=Se),(isNaN(O)||He>O)&&(O=He),G===Rt.TRANSFORM&&(Ve=H-Be,qe=H)}if(!isNaN(Ve)){let ke=0;Ht(this,G=>{ke>=Ve&&ke<qe&&(G._renderTransforms=1,G._composition===mn.blend&&Ht(oo.animation,se=>{se.id===G.id&&(se._renderTransforms=1)})),ke++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),q?(Ht(this,I=>{I._startTime-I._delay||(I._delay-=q),I._startTime-=q}),O-=q):q=0,O||(O=_t,this.iterationCount=0),this.targets=l,this.id=dt(u)?Rg:u,this.duration=O===_t?_t:Ap((O+this._loopDelay)*this.iterationCount-this._loopDelay)||_t,this.onRender=M||S.onRender,this._ease=C,this._delay=q,this.iterationDuration=O,!this._autoplay&&F&&this.onRender(this)}stretch(e){const n=this.duration;if(n===ha(e))return this;const i=e/n;return Ht(this,r=>{r._updateDuration=ha(r._updateDuration*i),r._changeDuration=ha(r._changeDuration*i),r._currentTime*=i,r._delay*=i,r._startTime*=i,r._absoluteStartTime*=i,r._absoluteUpdateStartTime*=i,r._absoluteEndTime*=i}),super.stretch(e)}refresh(){return Ht(this,e=>{const n=e._toFunc,i=e._fromFunc;(n||i)&&(i?(Xn(i(),je),je.u!==e._unit&&e.target[vo]&&wg(e.target,je,e._unit,!0),e._fromNumbers=ln(je.d),e._fromNumber=je.n):n&&(Xn(ks(e.target,e.property,e._tweenType),ci),e._fromNumbers=ln(ci.d),e._fromNumber=ci.n),n&&(Xn(n(),et),e._toNumbers=ln(et.d),e._strings=ln(et.s),e._toNumber=et.o?ic(e._fromNumber,et.n,et.o):et.n))}),this.duration===_t&&this.restart(),this}revert(){return super.revert(),l_(this)}then(e){return super.then(e)}}const Nf=(t,e)=>new HM(t,e,null,0,!1).init();/**
 * Anime.js - timeline - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const GM=(t,e)=>{if(qi(e,"<")){const n=e[1]==="<",i=t._tail,r=i?i._offset+i._delay:0;return n?r:r+i.duration}},WM=(t,e)=>{let n=t.iterationDuration;if(n===_t&&(n=0),dt(e))return n;if(Vi(+e))return+e;const i=e,r=t?t.labels:null,s=!so(r),o=GM(t,i),a=!dt(o),l=hM.exec(i);if(l){const c=l[0],f=i.split(c),h=s&&f[0]?r[f[0]]:n,u=a?o:s?h:n,p=+f[1];return ic(u,p,c[0])}else return a?o:s?dt(r[i])?n:r[i]:n};/**
 * Anime.js - utils - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const p_=(t=0,e=1,n=0)=>{const i=10**n;return Math.floor((Math.random()*(e-t+1/i)+t)*i)/i};let XM=0;const jM=(t,e=0,n=1,i=0)=>{let r=t===void 0?XM++:t;return(s=e,o=n,a=i)=>{r+=1831565813,r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61);const l=10**a;return Math.floor((((r^r>>>14)>>>0)/4294967296*(o-s+1/l)+s)*l)/l}},qM=(t,e=p_)=>{let n=t.length,i,r;for(;n;)r=e(0,--n),i=t[n],t[n]=t[r],t[r]=i;return t};/**
 * Anime.js - utils - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const YM=(t,e={})=>{let n=[],i=0,r,s=null;const o=e.from,a=e.reversed,l=e.ease,c=!dt(l),h=c&&!dt(l.ease)?l.ease:c?If(l):null,u=e.grid,p=u===!0,_=e.axis,E=e.total,g=dt(o)||o===0||o==="first",d=o==="center",m=o==="last",M=o==="random",S=Yi(o),w=Yi(t),T=e.use,C=ju(w?t[0]:t),v=w?ju(t[1]):0,b=Zv.exec((w?t[1]:t)+cs),P=e.start||0+(w?C:0),D=e.seed,$=!dt(D)&&D!==!1?jM(D===!0?0:D):p_,Q=e.jitter,O=!dt(Q),q=Yi(Q),H=q?Q[0]:Q||0,F=q?Q[1]:Q||0;let I=g?0:Vi(o)?o:0;return(j,te,re,Ve,qe)=>{const[ke]=h_(j),G=dt(E)?re.length:E,se=dt(T)?!1:ds(T)?T(ke,te,G):ks(ke,T),ne=Vi(se)||us(se)&&Vi(+se)?+se:te,ue=ne>=0&&ne<G?ne:te;if(d&&(I=(G-1)/2),m&&(I=G-1),!n.length){if(p){let be=!0,Se=!1,He=1/0,Be=1/0,Ce=1/0,Ye=-1/0,Je=-1/0,Ke=-1/0;const ut=[],We=[],Re=[];for(let L=0;L<G;L++){const Xe=re[L];let Me=0,R=0,x=0,U=!1;if(Xe&&ds(Xe.getBoundingClientRect)){const V=Xe.getBoundingClientRect();Me=V.left+V.width/2,R=V.top+V.height/2,U=!0}else{const V=Xe;V&&Vi(V.x)&&Vi(V.y)&&(Me=V.x,R=V.y,Vi(V.z)&&(x=V.z,Se=!0),U=!0)}if(!U){be=!1;break}ut.push(Me),We.push(R),Re.push(x),Me<He&&(He=Me),R<Be&&(Be=R),x<Ce&&(Ce=x),Me>Ye&&(Ye=Me),R>Je&&(Je=R),x>Ke&&(Ke=x)}if(be){let L=ut[0],Xe=We[0],Me=Re[0];S?(L=He+o[0]*(Ye-He),Xe=Be+o[1]*(Je-Be),Me=Se?Ce+(o.length>=3?o[2]:.5)*(Ke-Ce):0):d?(L=(He+Ye)/2,Xe=(Be+Je)/2,Me=(Ce+Ke)/2):m?(L=ut[G-1],Xe=We[G-1],Me=Re[G-1]):Vi(o)&&(L=ut[o],Xe=We[o],Me=Re[o]);for(let x=0;x<G;x++){const U=L-ut[x],V=Xe-We[x],K=Me-Re[x];let oe=Pf(U*U+V*V+(Se?K*K:0));_==="x"&&(oe=-U),_==="y"&&(oe=-V),_==="z"&&(oe=-K),n.push(oe)}let R=1/0;for(let x=0;x<G;x++){const U=dl(n[x]);U>0&&U<R&&(R=U)}if(R>0&&R<1/0)for(let x=0;x<G;x++)n[x]=n[x]/R}else for(let L=0;L<G;L++)n.push(dl(I-L))}else for(let be=0;be<G;be++)if(!u)n.push(dl(I-be));else{const Se=u.length,He=u[0]*u[1];let Be,Ce,Ye;S?(Be=o[0]*(u[0]-1),Ce=o[1]*(u[1]-1),Ye=Se===3?(o.length>=3?o[2]:.5)*(u[2]-1):0):d?(Be=(u[0]-1)/2,Ce=(u[1]-1)/2,Ye=Se===3?(u[2]-1)/2:0):(Be=I%u[0],Ce=Jo(I/u[0])%u[1],Ye=Se===3?Jo(I/He):0);const Je=be%u[0],Ke=Jo(be/u[0])%u[1],ut=Se===3?Jo(be/He):0,We=Be-Je,Re=Ce-Ke,L=Ye-ut;let Xe=Pf(We*We+Re*Re+(Se===3?L*L:0));_==="x"&&(Xe=-We),_==="y"&&(Xe=-Re),_==="z"&&(Xe=-L),n.push(Xe)}i=n[0];for(let be=1;be<G;be++)n[be]>i&&(i=n[be]);if(h||a)for(let be=0;be<G;be++){let Se=n[be];h&&(Se=h(Se/i)*i),a&&(Se=_?-Se:dl(i-Se)),n[be]=Se}if(O){s=new Array(G);for(let be=0;be<G;be++)s[be]=$(-1,1,4)}M&&(n=qM(n,$))}const Pe=w?(v-C)/i:C;dt(r)&&(r=qe?WM(qe,dt(e.start)?qe.iterationDuration:P):P);let _e=r+(Pe*Et(n[ue],2)||0);if(O){const be=i?n[ue]/i:0,Se=H+(F-H)*be;_e=_e+s[ue]*Se}return e.modifier&&(_e=e.modifier(_e)),b&&(_e=`${_e}${b[2]}`),_e}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rp="185",$M=0,Pg=1,KM=2,oc=1,ZM=2,ta=3,Nr=0,bn=1,wi=2,$i=0,ao=1,Ff=2,Lg=3,Dg=4,QM=5,Yr=100,JM=101,eE=102,tE=103,nE=104,iE=200,rE=201,sE=202,oE=203,Uf=204,Of=205,aE=206,lE=207,cE=208,uE=209,dE=210,fE=211,hE=212,pE=213,mE=214,kf=0,Bf=1,zf=2,So=3,Vf=4,Hf=5,Gf=6,Wf=7,m_=0,gE=1,xE=2,Pi=0,g_=1,x_=2,v_=3,__=4,y_=5,S_=6,M_=7,E_=300,fs=301,Mo=302,Zu=303,Qu=304,cu=306,Xf=1e3,Xi=1001,jf=1002,Jt=1003,vE=1004,xl=1005,dn=1006,Ju=1007,es=1008,Un=1009,T_=1010,w_=1011,Da=1012,Pp=1013,Di=1014,Ai=1015,tr=1016,Lp=1017,Dp=1018,Ia=1020,A_=35902,b_=35899,C_=1021,R_=1022,hi=1023,nr=1026,ts=1027,P_=1028,Ip=1029,hs=1030,Np=1031,Fp=1033,ac=33776,lc=33777,cc=33778,uc=33779,qf=35840,Yf=35841,$f=35842,Kf=35843,Zf=36196,Qf=37492,Jf=37496,eh=37488,th=37489,zc=37490,nh=37491,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,dh=37816,fh=37817,hh=37818,ph=37819,mh=37820,gh=37821,xh=36492,vh=36494,_h=36495,yh=36283,Sh=36284,Vc=36285,Mh=36286,_E=3200,Eh=0,yE=1,_r="",qn="srgb",Hc="srgb-linear",Gc="linear",gt="srgb",Es=7680,Ig=519,SE=512,ME=513,EE=514,Up=515,TE=516,wE=517,Op=518,AE=519,Ng=35044,Fg="300 es",bi=2e3,Na=2001;function bE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CE(){const t=Wc("canvas");return t.style.display="block",t}const Ug={};function Og(...t){const e="THREE."+t.shift();console.log(e,...t)}function L_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=L_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ht(...t){t=L_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function lo(...t){const e=t.join(" ");e in Ug||(Ug[e]=!0,Ge(...t))}function RE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const PE={[kf]:Bf,[zf]:Gf,[Vf]:Wf,[So]:Hf,[Bf]:kf,[Gf]:zf,[Wf]:Vf,[Hf]:So};class gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,Th=180/Math.PI;function za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function ct(t,e,n){return Math.max(e,Math.min(n,t))}function LE(t,e){return(t%e+e)%e}function td(t,e,n){return(1-n)*t+n*e}function zo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xp=class Xp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xp.prototype.isVector2=!0;let rt=Xp;class Co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[o+0],p=s[o+1],_=s[o+2],E=s[o+3];if(h!==E||l!==u||c!==p||f!==_){let g=l*u+c*p+f*_+h*E;g<0&&(u=-u,p=-p,_=-_,E=-E,g=-g);let d=1-a;if(g<.9995){const m=Math.acos(g),M=Math.sin(m);d=Math.sin(d*m)/M,a=Math.sin(a*m)/M,l=l*d+u*a,c=c*d+p*a,f=f*d+_*a,h=h*d+E*a}else{l=l*d+u*a,c=c*d+p*a,f=f*d+_*a,h=h*d+E*a;const m=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=m,c*=m,f*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],u=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*h+l*p-c*u,e[n+1]=l*_+f*u+c*h-a*p,e[n+2]=c*_+f*p+a*u-l*h,e[n+3]=f*_-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),u=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*p*_,this._y=c*p*h-u*f*_,this._z=c*f*_+u*p*h,this._w=c*f*h-u*p*_;break;case"YXZ":this._x=u*f*h+c*p*_,this._y=c*p*h-u*f*_,this._z=c*f*_-u*p*h,this._w=c*f*h+u*p*_;break;case"ZXY":this._x=u*f*h-c*p*_,this._y=c*p*h+u*f*_,this._z=c*f*_+u*p*h,this._w=c*f*h-u*p*_;break;case"ZYX":this._x=u*f*h-c*p*_,this._y=c*p*h+u*f*_,this._z=c*f*_-u*p*h,this._w=c*f*h+u*p*_;break;case"YZX":this._x=u*f*h+c*p*_,this._y=c*p*h+u*f*_,this._z=c*f*_-u*p*h,this._w=c*f*h-u*p*_;break;case"XZY":this._x=u*f*h-c*p*_,this._y=c*p*h-u*f*_,this._z=c*f*_+u*p*h,this._w=c*f*h+u*p*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jp=class jp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jp.prototype.isVector3=!0;let z=jp;const nd=new z,kg=new Co,qp=class qp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],p=i[5],_=i[8],E=r[0],g=r[3],d=r[6],m=r[1],M=r[4],S=r[7],w=r[2],T=r[5],C=r[8];return s[0]=o*E+a*m+l*w,s[3]=o*g+a*M+l*T,s[6]=o*d+a*S+l*C,s[1]=c*E+f*m+h*w,s[4]=c*g+f*M+h*T,s[7]=c*d+f*S+h*C,s[2]=u*E+p*m+_*w,s[5]=u*g+p*M+_*T,s[8]=u*d+p*S+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,p=c*s-o*l,_=n*h+i*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=h*E,e[1]=(r*c-f*i)*E,e[2]=(a*i-r*o)*E,e[3]=u*E,e[4]=(f*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(id.makeScale(e,n)),this}rotate(e){return lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(id.makeRotation(-e)),this}translate(e,n){return lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(id.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qp.prototype.isMatrix3=!0;let $e=qp;const id=new $e,Bg=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zg=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const t={enabled:!0,workingColorSpace:Hc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=co(r.r),r.g=co(r.g),r.b=co(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_r?Gc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hc]:{primaries:e,whitePoint:i,transfer:Gc,toXYZ:Bg,fromXYZ:zg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Bg,fromXYZ:zg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),t}const lt=DE();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function co(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ts;class IE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ts===void 0&&(Ts=Wc("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ts}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rd(r[o].image)):s.push(rd(r[o]))}else s=rd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let FE=0;const sd=new z;class xn extends gs{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Xi,r=Xi,s=dn,o=es,a=hi,l=Un,c=xn.DEFAULT_ANISOTROPY,f=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=za(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xf:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xf:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=E_;xn.DEFAULT_ANISOTROPY=1;const Yp=class Yp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],_=l[9],E=l[2],g=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-E)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+E)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(p+1)/2,w=(d+1)/2,T=(f+u)/4,C=(h+E)/4,v=(_+g)/4;return M>S&&M>w?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=C/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=v/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=v/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(h-E)*(h-E)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(h-E)/m,this.z=(u-f)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this.w=ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this.w=ct(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yp.prototype.isVector4=!0;let Pt=Yp;class UE extends gs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new xn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new kp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends UE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class D_ extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OE extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xc=class Xc{constructor(e,n,i,r,s,o,a,l,c,f,h,u,p,_,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,u,p,_,E,g)}set(e,n,i,r,s,o,a,l,c,f,h,u,p,_,E,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=p,d[7]=_,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*h,_=a*f,E=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=u-E*c,n[9]=-a*l,n[2]=E-u*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*h,_=c*f,E=c*h;n[0]=u+E*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=E+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*h,_=c*f,E=c*h;n[0]=u-E*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=E-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*h,_=a*f,E=a*h;n[0]=l*f,n[4]=_*c-p,n[8]=u*c+E,n[1]=l*h,n[5]=E*c+u,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*f,n[4]=E-u*h,n[8]=_*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+_,n[10]=u-E*h}else if(e.order==="XZY"){const u=o*l,p=o*c,_=a*l,E=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+E,n[5]=o*f,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*f,n[10]=E*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kE,e,BE)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),cr.crossVectors(i,Ln),cr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),cr.crossVectors(i,Ln)),cr.normalize(),vl.crossVectors(Ln,cr),r[0]=cr.x,r[4]=vl.x,r[8]=Ln.x,r[1]=cr.y,r[5]=vl.y,r[9]=Ln.y,r[2]=cr.z,r[6]=vl.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],p=i[13],_=i[2],E=i[6],g=i[10],d=i[14],m=i[3],M=i[7],S=i[11],w=i[15],T=r[0],C=r[4],v=r[8],b=r[12],P=r[1],D=r[5],k=r[9],$=r[13],Q=r[2],O=r[6],q=r[10],H=r[14],F=r[3],I=r[7],j=r[11],te=r[15];return s[0]=o*T+a*P+l*Q+c*F,s[4]=o*C+a*D+l*O+c*I,s[8]=o*v+a*k+l*q+c*j,s[12]=o*b+a*$+l*H+c*te,s[1]=f*T+h*P+u*Q+p*F,s[5]=f*C+h*D+u*O+p*I,s[9]=f*v+h*k+u*q+p*j,s[13]=f*b+h*$+u*H+p*te,s[2]=_*T+E*P+g*Q+d*F,s[6]=_*C+E*D+g*O+d*I,s[10]=_*v+E*k+g*q+d*j,s[14]=_*b+E*$+g*H+d*te,s[3]=m*T+M*P+S*Q+w*F,s[7]=m*C+M*D+S*O+w*I,s[11]=m*v+M*k+S*q+w*j,s[15]=m*b+M*$+S*H+w*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],p=e[14],_=e[3],E=e[7],g=e[11],d=e[15],m=l*p-c*u,M=a*p-c*h,S=a*u-l*h,w=o*p-c*f,T=o*u-l*f,C=o*h-a*f;return n*(E*m-g*M+d*S)-i*(_*m-g*w+d*T)+r*(_*M-E*w+d*C)-s*(_*S-E*T+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],p=e[11],_=e[12],E=e[13],g=e[14],d=e[15],m=n*a-i*o,M=n*l-r*o,S=n*c-s*o,w=i*l-r*a,T=i*c-s*a,C=r*c-s*l,v=f*E-h*_,b=f*g-u*_,P=f*d-p*_,D=h*g-u*E,k=h*d-p*E,$=u*d-p*g,Q=m*$-M*k+S*D+w*P-T*b+C*v;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Q;return e[0]=(a*$-l*k+c*D)*O,e[1]=(r*k-i*$-s*D)*O,e[2]=(E*C-g*T+d*w)*O,e[3]=(u*T-h*C-p*w)*O,e[4]=(l*P-o*$-c*b)*O,e[5]=(n*$-r*P+s*b)*O,e[6]=(g*S-_*C-d*M)*O,e[7]=(f*C-u*S+p*M)*O,e[8]=(o*k-a*P+c*v)*O,e[9]=(i*P-n*k-s*v)*O,e[10]=(_*T-E*S+d*m)*O,e[11]=(h*S-f*T-p*m)*O,e[12]=(a*b-o*D-l*v)*O,e[13]=(n*D-i*b+r*v)*O,e[14]=(E*M-_*w-g*m)*O,e[15]=(f*w-h*M+u*m)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,u=s*c,p=s*f,_=s*h,E=o*f,g=o*h,d=a*h,m=l*c,M=l*f,S=l*h,w=i.x,T=i.y,C=i.z;return r[0]=(1-(E+d))*w,r[1]=(p+S)*w,r[2]=(_-M)*w,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(u+d))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(_+M)*C,r[9]=(g-m)*C,r[10]=(1-(u+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ws.set(r[0],r[1],r[2]).length();const a=ws.set(r[4],r[5],r[6]).length(),l=ws.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ri.copy(this);const c=1/o,f=1/a,h=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=f,ri.elements[5]*=f,ri.elements[6]*=f,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,n.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=bi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let _,E;if(l)_=s/(o-s),E=o*s/(o-s);else if(a===bi)_=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Na)_=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,E;if(l)_=1/(o-s),E=o/(o-s);else if(a===bi)_=-2/(o-s),E=-(o+s)/(o-s);else if(a===Na)_=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Xc.prototype.isMatrix4=!0;let Dt=Xc;const ws=new z,ri=new Dt,kE=new z(0,0,0),BE=new z(1,1,1),cr=new z,vl=new z,Ln=new z,Vg=new Dt,Hg=new Co;class Fr{constructor(e=0,n=0,i=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hg.setFromEuler(this),this.setFromQuaternion(Hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const Gg=new z,As=new Co,Fi=new Dt,_l=new z,Vo=new z,VE=new z,HE=new Co,Wg=new z(1,0,0),Xg=new z(0,1,0),jg=new z(0,0,1),qg={type:"added"},GE={type:"removed"},bs={type:"childadded",child:null},od={type:"childremoved",child:null};class vn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new z,n=new Fr,i=new Co,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new $e}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(Xg,e)}rotateZ(e){return this.rotateOnAxis(jg,e)}translateOnAxis(e,n){return Gg.copy(e).applyQuaternion(this.quaternion),this.position.add(Gg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(Xg,e)}translateZ(e){return this.translateOnAxis(jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_l.copy(e):_l.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Vo,_l,this.up):Fi.lookAt(_l,Vo,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),As.setFromRotationMatrix(Fi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qg),bs.child=e,this.dispatchEvent(bs),bs.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GE),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qg),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,VE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new z(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class na extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),d=this._getHandJoint(c,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},yl={h:0,s:0,l:0};function ld(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=LE(e,1),n=ct(n,0,1),i=ct(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ld(o,s,e+1/3),this.g=ld(o,s,e),this.b=ld(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=N_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return lt.workingToColorSpace(an.copy(this),e),Math.round(ct(an.r*255,0,255))*65536+Math.round(ct(an.g*255,0,255))*256+Math.round(ct(an.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=qn){lt.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(yl);const i=td(ur.h,yl.h,n),r=td(ur.s,yl.s,n),s=td(ur.l,yl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new it;it.NAMES=N_;class XE extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new z,Ui=new z,cd=new z,Oi=new z,Cs=new z,Rs=new z,Yg=new z,ud=new z,dd=new z,fd=new z,hd=new Pt,pd=new Pt,md=new Pt;class fi{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),Ui.subVectors(i,n),cd.subVectors(e,n);const o=si.dot(si),a=si.dot(Ui),l=si.dot(cd),c=Ui.dot(Ui),f=Ui.dot(cd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-a*f)*u,_=(o*f-a*l)*u;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return hd.setScalar(0),pd.setScalar(0),md.setScalar(0),hd.fromBufferAttribute(e,n),pd.fromBufferAttribute(e,i),md.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(hd,s.x),o.addScaledVector(pd,s.y),o.addScaledVector(md,s.z),o}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Ui.subVectors(e,n),si.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Cs.subVectors(r,i),Rs.subVectors(s,i),ud.subVectors(e,i);const l=Cs.dot(ud),c=Rs.dot(ud);if(l<=0&&c<=0)return n.copy(i);dd.subVectors(e,r);const f=Cs.dot(dd),h=Rs.dot(dd);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Cs,o);fd.subVectors(e,s);const p=Cs.dot(fd),_=Rs.dot(fd);if(_>=0&&p<=_)return n.copy(s);const E=p*c-l*_;if(E<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Rs,a);const g=f*_-p*h;if(g<=0&&h-f>=0&&p-_>=0)return Yg.subVectors(s,r),a=(h-f)/(h-f+(p-_)),n.copy(r).addScaledVector(Yg,a);const d=1/(g+E+u);return o=E*d,a=u*d,n.copy(i).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Va{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sl.copy(i.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Ml.subVectors(this.max,Ho),Ps.subVectors(e.a,Ho),Ls.subVectors(e.b,Ho),Ds.subVectors(e.c,Ho),dr.subVectors(Ls,Ps),fr.subVectors(Ds,Ls),Vr.subVectors(Ps,Ds);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Vr.z,Vr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Vr.z,0,-Vr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Vr.y,Vr.x,0];return!gd(n,Ps,Ls,Ds,Ml)||(n=[1,0,0,0,1,0,0,0,1],!gd(n,Ps,Ls,Ds,Ml))?!1:(El.crossVectors(dr,fr),n=[El.x,El.y,El.z],gd(n,Ps,Ls,Ds,Ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new z,new z,new z,new z,new z,new z,new z,new z],oi=new z,Sl=new Va,Ps=new z,Ls=new z,Ds=new z,dr=new z,fr=new z,Vr=new z,Ho=new z,Ml=new z,El=new z,Hr=new z;function gd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Hr.fromArray(t,s);const a=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),c=n.dot(Hr),f=i.dot(Hr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Bt=new z,Tl=new rt;let jE=0;class Jn extends gs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ng,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tl.fromBufferAttribute(this,n),Tl.applyMatrix3(e),this.setXY(n,Tl.x,Tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ng&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class F_ extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class U_ extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const qE=new Va,Go=new z,xd=new z;class uu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const n=Go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(xd)),this.expandByPoint(Go.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YE=0;const Wn=new Dt,vd=new vn,Is=new z,Dn=new Va,Wo=new Va,jt=new z;class Cn extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bE(e)?U_:F_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,i){return Wn.makeTranslation(e,n,i),this.applyMatrix4(Wn),this}scale(e,n,i){return Wn.makeScale(e,n,i),this.applyMatrix4(Wn),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Dn.min,Wo.min),Dn.expandByPoint(jt),jt.addVectors(Dn.max,Wo.max),Dn.expandByPoint(jt)):(Dn.expandByPoint(Wo.min),Dn.expandByPoint(Wo.max))}Dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)jt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),jt.add(Is)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new z,l[v]=new z;const c=new z,f=new z,h=new z,u=new rt,p=new rt,_=new rt,E=new z,g=new z;function d(v,b,P){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,P),u.fromBufferAttribute(s,v),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,P),f.sub(c),h.sub(c),p.sub(u),_.sub(u);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(E.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(D),a[v].add(E),a[b].add(E),a[P].add(E),l[v].add(g),l[b].add(g),l[P].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let v=0,b=m.length;v<b;++v){const P=m[v],D=P.start,k=P.count;for(let $=D,Q=D+k;$<Q;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const M=new z,S=new z,w=new z,T=new z;function C(v){w.fromBufferAttribute(r,v),T.copy(w);const b=a[v];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),S.crossVectors(T,b);const D=S.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,D)}for(let v=0,b=m.length;v<b;++v){const P=m[v],D=P.start,k=P.count;for(let $=D,Q=D+k;$<Q;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,f=new z,h=new z;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),E=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let p=0,_=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*f;for(let d=0;d<f;d++)u[_++]=c[p++]}return new Jn(u,f,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $E=0;class Ro extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=za(),this.name="",this.type="Material",this.blending=ao,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uf,this.blendDst=Of,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uf&&(i.blendSrc=this.blendSrc),this.blendDst!==Of&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new z,_d=new z,wl=new z,hr=new z,yd=new z,Al=new z,Sd=new z;class O_{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_d.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(_d);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wl),a=hr.dot(this.direction),l=-hr.dot(wl),c=hr.lengthSq(),f=Math.abs(1-o*o);let h,u,p,_;if(f>0)if(h=o*l-a,u=o*a-l,_=s*f,h>=0)if(u>=-_)if(u<=_){const E=1/f;h*=E,u*=E,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_d).addScaledVector(wl,u),p}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,i,r,s){yd.subVectors(n,e),Al.subVectors(i,e),Sd.crossVectors(yd,Al);let o=this.direction.dot(Sd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(hr,Al));if(l<0)return null;const c=a*this.direction.dot(yd.cross(hr));if(c<0||l+c>o)return null;const f=-a*hr.dot(Sd);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bp extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $g=new Dt,Gr=new O_,bl=new uu,Kg=new z,Cl=new z,Rl=new z,Pl=new z,Md=new z,Ll=new z,Zg=new z,Dl=new z;class kn extends vn{constructor(e=new Cn,n=new Bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Md.fromBufferAttribute(h,e),o?Ll.addScaledVector(Md,f):Ll.addScaledVector(Md.sub(n),f))}n.add(Ll)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(bl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(bl,Kg)===null||Gr.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&($g.copy(s).invert(),Gr.copy(e.ray).applyMatrix4($g),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,E=u.length;_<E;_++){const g=u[_],d=o[g.materialIndex],m=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,w=M;S<w;S+=3){const T=a.getX(S),C=a.getX(S+1),v=a.getX(S+2);r=Il(this,d,e,i,c,f,h,T,C,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let g=_,d=E;g<d;g+=3){const m=a.getX(g),M=a.getX(g+1),S=a.getX(g+2);r=Il(this,o,e,i,c,f,h,m,M,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,E=u.length;_<E;_++){const g=u[_],d=o[g.materialIndex],m=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,w=M;S<w;S+=3){const T=S,C=S+1,v=S+2;r=Il(this,d,e,i,c,f,h,T,C,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=_,d=E;g<d;g+=3){const m=g,M=g+1,S=g+2;r=Il(this,o,e,i,c,f,h,m,M,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function KE(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Nr,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Dl);return c<n.near||c>n.far?null:{distance:c,point:Dl.clone(),object:t}}function Il(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Cl),t.getVertexPosition(l,Rl),t.getVertexPosition(c,Pl);const f=KE(t,e,n,i,Cl,Rl,Pl,Zg);if(f){const h=new z;fi.getBarycoord(Zg,Cl,Rl,Pl,h),r&&(f.uv=fi.getInterpolatedAttribute(r,a,l,c,h,new rt)),s&&(f.uv1=fi.getInterpolatedAttribute(s,a,l,c,h,new rt)),o&&(f.normal=fi.getInterpolatedAttribute(o,a,l,c,h,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new z,materialIndex:0};fi.getNormal(Cl,Rl,Pl,u.normal),f.face=u,f.barycoord=h}return f}class ZE extends xn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Jt,f=Jt,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new z,QE=new z,JE=new $e;class qr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ed.subVectors(i,n).cross(QE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ed),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||JE.getNormalMatrix(e),r=this.coplanarPoint(Ed).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new uu,eT=new rt(.5,.5),Nl=new z;class zp{constructor(e=new qr,n=new qr,i=new qr,r=new qr,s=new qr,o=new qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],p=s[7],_=s[8],E=s[9],g=s[10],d=s[11],m=s[12],M=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-o,p-f,d-_,w-m).normalize(),r[1].setComponents(c+o,p+f,d+_,w+m).normalize(),r[2].setComponents(c+a,p+h,d+E,w+M).normalize(),r[3].setComponents(c-a,p-h,d-E,w-M).normalize(),i)r[4].setComponents(l,u,g,S).normalize(),r[5].setComponents(c-l,p-u,d-g,w-S).normalize();else if(r[4].setComponents(c-l,p-u,d-g,w-S).normalize(),n===bi)r[5].setComponents(c+l,p+u,d+g,w+S).normalize();else if(n===Na)r[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const n=eT.distanceTo(e.center);return Wr.radius=.7071067811865476+n,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Nl.x=r.normal.x>0?e.max.x:e.min.x,Nl.y=r.normal.y>0?e.max.y:e.min.y,Nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k_ extends Ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qg=new Dt,wh=new O_,Fl=new uu,Ul=new z;class tT extends vn{constructor(e=new Cn,n=new k_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;Qg.copy(r).invert(),wh.copy(e.ray).applyMatrix4(Qg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=u,E=p;_<E;_++){const g=c.getX(_);Ul.fromBufferAttribute(h,g),Jg(Ul,g,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=u,E=p;_<E;_++)Ul.fromBufferAttribute(h,_),Jg(Ul,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jg(t,e,n,i,r,s,o){const a=wh.distanceSqToPoint(t);if(a<n){const l=new z;wh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class B_ extends xn{constructor(e=[],n=fs,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eo extends xn{constructor(e,n,i=Di,r,s,o,a=Jt,l=Jt,c,f=nr,h=1){if(f!==nr&&f!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class nT extends Eo{constructor(e,n=Di,i=fs,r,s,o=Jt,a=Jt,l,c=nr){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class z_ extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ha extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(h,2));function _(E,g,d,m,M,S,w,T,C,v,b){const P=S/C,D=w/v,k=S/2,$=w/2,Q=T/2,O=C+1,q=v+1;let H=0,F=0;const I=new z;for(let j=0;j<q;j++){const te=j*D-$;for(let re=0;re<O;re++){const Ve=re*P-k;I[E]=Ve*m,I[g]=te*M,I[d]=Q,c.push(I.x,I.y,I.z),I[E]=0,I[g]=0,I[d]=T>0?1:-1,f.push(I.x,I.y,I.z),h.push(re/C),h.push(1-j/v),H+=1}}for(let j=0;j<v;j++)for(let te=0;te<C;te++){const re=u+te+O*j,Ve=u+te+O*(j+1),qe=u+(te+1)+O*(j+1),ke=u+(te+1)+O*j;l.push(re,Ve,ke),l.push(Ve,qe,ke),F+=6}a.addGroup(p,F,b),p+=F,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class du extends Cn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const M=new z,S=new z,w=new z;for(let T=0;T<n.length;T+=3)p(n[T+0],M),p(n[T+1],S),p(n[T+2],w),l(M,S,w,m)}function l(m,M,S,w){const T=w+1,C=[];for(let v=0;v<=T;v++){C[v]=[];const b=m.clone().lerp(S,v/T),P=M.clone().lerp(S,v/T),D=T-v;for(let k=0;k<=D;k++)k===0&&v===T?C[v][k]=b:C[v][k]=b.clone().lerp(P,k/D)}for(let v=0;v<T;v++)for(let b=0;b<2*(T-v)-1;b++){const P=Math.floor(b/2);b%2===0?(u(C[v][P+1]),u(C[v+1][P]),u(C[v][P])):(u(C[v][P+1]),u(C[v+1][P+1]),u(C[v+1][P]))}}function c(m){const M=new z;for(let S=0;S<s.length;S+=3)M.x=s[S+0],M.y=s[S+1],M.z=s[S+2],M.normalize().multiplyScalar(m),s[S+0]=M.x,s[S+1]=M.y,s[S+2]=M.z}function f(){const m=new z;for(let M=0;M<s.length;M+=3){m.x=s[M+0],m.y=s[M+1],m.z=s[M+2];const S=g(m)/2/Math.PI+.5,w=d(m)/Math.PI+.5;o.push(S,1-w)}_(),h()}function h(){for(let m=0;m<o.length;m+=6){const M=o[m+0],S=o[m+2],w=o[m+4],T=Math.max(M,S,w),C=Math.min(M,S,w);T>.9&&C<.1&&(M<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),w<.2&&(o[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,M){const S=m*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function _(){const m=new z,M=new z,S=new z,w=new z,T=new rt,C=new rt,v=new rt;for(let b=0,P=0;b<s.length;b+=9,P+=6){m.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),S.set(s[b+6],s[b+7],s[b+8]),T.set(o[P+0],o[P+1]),C.set(o[P+2],o[P+3]),v.set(o[P+4],o[P+5]),w.copy(m).add(M).add(S).divideScalar(3);const D=g(w);E(T,P+0,m,D),E(C,P+2,M,D),E(v,P+4,S,D)}}function E(m,M,S,w){w<0&&m.x===1&&(o[M]=m.x-1),S.x===0&&S.z===0&&(o[M]=w/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.vertices,e.indices,e.radius,e.detail)}}class Vp extends du{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Vp(e.radius,e.detail)}}class Hp extends du{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Hp(e.radius,e.detail)}}class fu extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,u=n/l,p=[],_=[],E=[],g=[];for(let d=0;d<f;d++){const m=d*u-o;for(let M=0;M<c;M++){const S=M*h-s;_.push(S,-m,0),E.push(0,0,1),g.push(M/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const M=m+c*d,S=m+c*(d+1),w=m+1+c*(d+1),T=m+1+c*d;p.push(M,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(E,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gp extends Cn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let h=e;const u=(n-e)/r,p=new z,_=new rt;for(let E=0;E<=r;E++){for(let g=0;g<=i;g++){const d=s+g/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,f.push(_.x,_.y)}h+=u}for(let E=0;E<r;E++){const g=E*(i+1);for(let d=0;d<i;d++){const m=d+g,M=m,S=m+i+1,w=m+i+2,T=m+1;a.push(M,S,T),a.push(S,w,T)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wp extends Cn{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],f=[],h=new z,u=new z,p=new z,_=new z,E=new z,g=new z,d=new z;for(let M=0;M<=i;++M){const S=M/i*s*Math.PI*2;m(S,s,o,e,p),m(S+.01,s,o,e,_),g.subVectors(_,p),d.addVectors(_,p),E.crossVectors(g,d),d.crossVectors(E,g),E.normalize(),d.normalize();for(let w=0;w<=r;++w){const T=w/r*Math.PI*2,C=-n*Math.cos(T),v=n*Math.sin(T);h.x=p.x+(C*d.x+v*E.x),h.y=p.y+(C*d.y+v*E.y),h.z=p.z+(C*d.z+v*E.z),l.push(h.x,h.y,h.z),u.subVectors(h,p).normalize(),c.push(u.x,u.y,u.z),f.push(M/i),f.push(w/r)}}for(let M=1;M<=i;M++)for(let S=1;S<=r;S++){const w=(r+1)*(M-1)+(S-1),T=(r+1)*M+(S-1),C=(r+1)*M+S,v=(r+1)*(M-1)+S;a.push(w,T,v),a.push(T,C,v)}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(f,2));function m(M,S,w,T,C){const v=Math.cos(M),b=Math.sin(M),P=w/S*M,D=Math.cos(P);C.x=T*(2+D)*.5*v,C.y=T*(2+D)*b*.5,C.z=T*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function To(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(e0(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(e0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=To(t[n]);for(const r in i)e[r]=i[r]}return e}function e0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function iT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function V_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const rT={clone:To,merge:hn};var sT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sT,this.fragmentShader=oT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=iT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(r.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class aT extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Td extends Ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lT extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cT extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class H_ extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const wd=new Dt,t0=new z,n0=new z;class uT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;t0.setFromMatrixPosition(e.matrixWorld),n.position.copy(t0),n0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(n0),n.updateMatrixWorld(),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Na||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new z,kl=new Co,yi=new z;class G_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,kl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,yi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ol,kl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new z,i0=new rt,r0=new rt;class Fn extends G_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Th*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Th*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,i0,r0),n.subVectors(r0,i0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ed*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class dT extends uT{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}}class s0 extends H_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class W_ extends G_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class fT extends H_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ns=-90,Fs=1;class hT extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(Ns,Fs,e,n);r.layers=this.layers,this.add(r);const s=new Fn(Ns,Fs,e,n);s.layers=this.layers,this.add(s);const o=new Fn(Ns,Fs,e,n);o.layers=this.layers,this.add(o);const a=new Fn(Ns,Fs,e,n);a.layers=this.layers,this.add(a);const l=new Fn(Ns,Fs,e,n);l.layers=this.layers,this.add(l);const c=new Fn(Ns,Fs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class pT extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const $p=class $p{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};$p.prototype.isMatrix2=!0;let o0=$p;function a0(t,e,n,i){const r=gT(i);switch(n){case C_:return t*e;case P_:return t*e/r.components*r.byteLength;case Ip:return t*e/r.components*r.byteLength;case hs:return t*e*2/r.components*r.byteLength;case Np:return t*e*2/r.components*r.byteLength;case R_:return t*e*3/r.components*r.byteLength;case hi:return t*e*4/r.components*r.byteLength;case Fp:return t*e*4/r.components*r.byteLength;case ac:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:case Kf:return Math.max(t,16)*Math.max(e,8)/4;case qf:case $f:return Math.max(t,8)*Math.max(e,8)/2;case Zf:case Qf:case eh:case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jf:case zc:case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xh:case vh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yh:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vc:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function gT(t){switch(t){case Un:case T_:return{byteLength:1,components:1};case Da:case w_:case tr:return{byteLength:2,components:1};case Lp:case Dp:return{byteLength:2,components:4};case Di:case Pp:case Ai:return{byteLength:4,components:1};case A_:case b_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xT(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<h.length;p++){const _=h[u],E=h[p];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++u,h[u]=E)}h.length=u+1;for(let p=0,_=h.length;p<_;p++){const E=h[p];t.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var vT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_T=`#ifdef USE_ALPHAHASH
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
#endif`,yT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ST=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ET=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TT=`#ifdef USE_AOMAP
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
#endif`,wT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AT=`#ifdef USE_BATCHING
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
#endif`,bT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LT=`#ifdef USE_IRIDESCENCE
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
#endif`,DT=`#ifdef USE_BUMPMAP
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
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VT=`#define PI 3.141592653589793
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
} // validated`,HT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GT=`vec3 transformedNormal = objectNormal;
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
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YT="gl_FragColor = linearToOutputTexel( gl_FragColor );",$T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
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
#endif`,JT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sw=`#ifdef USE_GRADIENTMAP
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
}`,ow=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uw=`#ifdef USE_ENVMAP
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
#endif`,dw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mw=`PhysicalMaterial material;
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
#endif`,gw=`uniform sampler2D dfgLUT;
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
}`,xw=`
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
#endif`,vw=`#if defined( RE_IndirectDiffuse )
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
#endif`,_w=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ew=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ww=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cw=`#if defined( USE_POINTS_UV )
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
#endif`,Rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nw=`#ifdef USE_MORPHTARGETS
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
#endif`,Fw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vw=`#ifdef USE_NORMALMAP
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
#endif`,Hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$w=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iA=`float getShadowMask() {
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
}`,rA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sA=`#ifdef USE_SKINNING
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
#endif`,oA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aA=`#ifdef USE_SKINNING
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
#endif`,lA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fA=`#ifdef USE_TRANSMISSION
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
#endif`,hA=`#ifdef USE_TRANSMISSION
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_A=`uniform sampler2D t2D;
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`#include <common>
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
}`,wA=`#if DEPTH_PACKING == 3200
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
}`,AA=`#define DISTANCE
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
}`,bA=`#define DISTANCE
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
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`uniform float scale;
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
}`,LA=`uniform vec3 diffuse;
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
}`,DA=`#include <common>
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
}`,IA=`uniform vec3 diffuse;
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
}`,NA=`#define LAMBERT
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
}`,FA=`#define LAMBERT
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
}`,UA=`#define MATCAP
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
}`,OA=`#define MATCAP
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
}`,kA=`#define NORMAL
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
}`,BA=`#define NORMAL
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
}`,zA=`#define PHONG
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
}`,VA=`#define PHONG
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
}`,HA=`#define STANDARD
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
}`,GA=`#define STANDARD
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
}`,WA=`#define TOON
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
}`,XA=`#define TOON
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
}`,jA=`uniform float size;
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
}`,qA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,$A=`uniform vec3 color;
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
}`,KA=`uniform float rotation;
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
}`,ZA=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:vT,alphahash_pars_fragment:_T,alphamap_fragment:yT,alphamap_pars_fragment:ST,alphatest_fragment:MT,alphatest_pars_fragment:ET,aomap_fragment:TT,aomap_pars_fragment:wT,batching_pars_vertex:AT,batching_vertex:bT,begin_vertex:CT,beginnormal_vertex:RT,bsdfs:PT,iridescence_fragment:LT,bumpmap_pars_fragment:DT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:NT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:UT,color_fragment:OT,color_pars_fragment:kT,color_pars_vertex:BT,color_vertex:zT,common:VT,cube_uv_reflection_fragment:HT,defaultnormal_vertex:GT,displacementmap_pars_vertex:WT,displacementmap_vertex:XT,emissivemap_fragment:jT,emissivemap_pars_fragment:qT,colorspace_fragment:YT,colorspace_pars_fragment:$T,envmap_fragment:KT,envmap_common_pars_fragment:ZT,envmap_pars_fragment:QT,envmap_pars_vertex:JT,envmap_physical_pars_fragment:uw,envmap_vertex:ew,fog_vertex:tw,fog_pars_vertex:nw,fog_fragment:iw,fog_pars_fragment:rw,gradientmap_pars_fragment:sw,lightmap_pars_fragment:ow,lights_lambert_fragment:aw,lights_lambert_pars_fragment:lw,lights_pars_begin:cw,lights_toon_fragment:dw,lights_toon_pars_fragment:fw,lights_phong_fragment:hw,lights_phong_pars_fragment:pw,lights_physical_fragment:mw,lights_physical_pars_fragment:gw,lights_fragment_begin:xw,lights_fragment_maps:vw,lights_fragment_end:_w,lightprobes_pars_fragment:yw,logdepthbuf_fragment:Sw,logdepthbuf_pars_fragment:Mw,logdepthbuf_pars_vertex:Ew,logdepthbuf_vertex:Tw,map_fragment:ww,map_pars_fragment:Aw,map_particle_fragment:bw,map_particle_pars_fragment:Cw,metalnessmap_fragment:Rw,metalnessmap_pars_fragment:Pw,morphinstance_vertex:Lw,morphcolor_vertex:Dw,morphnormal_vertex:Iw,morphtarget_pars_vertex:Nw,morphtarget_vertex:Fw,normal_fragment_begin:Uw,normal_fragment_maps:Ow,normal_pars_fragment:kw,normal_pars_vertex:Bw,normal_vertex:zw,normalmap_pars_fragment:Vw,clearcoat_normal_fragment_begin:Hw,clearcoat_normal_fragment_maps:Gw,clearcoat_pars_fragment:Ww,iridescence_pars_fragment:Xw,opaque_fragment:jw,packing:qw,premultiplied_alpha_fragment:Yw,project_vertex:$w,dithering_fragment:Kw,dithering_pars_fragment:Zw,roughnessmap_fragment:Qw,roughnessmap_pars_fragment:Jw,shadowmap_pars_fragment:eA,shadowmap_pars_vertex:tA,shadowmap_vertex:nA,shadowmask_pars_fragment:iA,skinbase_vertex:rA,skinning_pars_vertex:sA,skinning_vertex:oA,skinnormal_vertex:aA,specularmap_fragment:lA,specularmap_pars_fragment:cA,tonemapping_fragment:uA,tonemapping_pars_fragment:dA,transmission_fragment:fA,transmission_pars_fragment:hA,uv_pars_fragment:pA,uv_pars_vertex:mA,uv_vertex:gA,worldpos_vertex:xA,background_vert:vA,background_frag:_A,backgroundCube_vert:yA,backgroundCube_frag:SA,cube_vert:MA,cube_frag:EA,depth_vert:TA,depth_frag:wA,distance_vert:AA,distance_frag:bA,equirect_vert:CA,equirect_frag:RA,linedashed_vert:PA,linedashed_frag:LA,meshbasic_vert:DA,meshbasic_frag:IA,meshlambert_vert:NA,meshlambert_frag:FA,meshmatcap_vert:UA,meshmatcap_frag:OA,meshnormal_vert:kA,meshnormal_frag:BA,meshphong_vert:zA,meshphong_frag:VA,meshphysical_vert:HA,meshphysical_frag:GA,meshtoon_vert:WA,meshtoon_frag:XA,points_vert:jA,points_frag:qA,shadow_vert:YA,shadow_frag:$A,sprite_vert:KA,sprite_frag:ZA},ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ei={basic:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:hn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:hn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:hn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:hn([ge.points,ge.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:hn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:hn([ge.common,ge.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:hn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:hn([ge.sprite,ge.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:hn([ge.common,ge.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:hn([ge.lights,ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Ei.physical={uniforms:hn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Bl={r:0,b:0,g:0},QA=new Dt,j_=new $e;j_.set(-1,0,0,0,1,0,0,0,1);function JA(t,e,n,i,r,s){const o=new it(0);let a=r===!0?0:1,l,c,f=null,h=0,u=null;function p(m){let M=m.isScene===!0?m.background:null;if(M&&M.isTexture){const S=m.backgroundBlurriness>0;M=e.get(M,S)}return M}function _(m){let M=!1;const S=p(m);S===null?g(o,a):S&&S.isColor&&(g(S,1),M=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(m,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===cu)?(c===void 0&&(c=new kn(new Ha(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:To(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QA.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(j_),c.material.toneMapped=lt.getTransfer(S.colorSpace)!==gt,(f!==S||h!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new kn(new fu(2,2),new Ii({name:"BackgroundMaterial",uniforms:To(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=lt.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,u=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,M){m.getRGB(Bl,V_(t)),n.buffers.color.setClear(Bl.r,Bl.g,Bl.b,M,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,M=1){o.set(m),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:_,addToRenderList:E,dispose:d}}function eb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(D,k,$,Q,O){let q=!1;const H=h(D,Q,$,k);s!==H&&(s=H,c(s.object)),q=p(D,Q,$,O),q&&_(D,Q,$,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(D,k,$,Q),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function h(D,k,$,Q){const O=Q.wireframe===!0;let q=i[k.id];q===void 0&&(q={},i[k.id]=q);const H=D.isInstancedMesh===!0?D.id:0;let F=q[H];F===void 0&&(F={},q[H]=F);let I=F[$.id];I===void 0&&(I={},F[$.id]=I);let j=I[O];return j===void 0&&(j=u(l()),I[O]=j),j}function u(D){const k=[],$=[],Q=[];for(let O=0;O<n;O++)k[O]=0,$[O]=0,Q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:Q,object:D,attributes:{},index:null}}function p(D,k,$,Q){const O=s.attributes,q=k.attributes;let H=0;const F=$.getAttributes();for(const I in F)if(F[I].location>=0){const te=O[I];let re=q[I];if(re===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==Q}function _(D,k,$,Q){const O={},q=k.attributes;let H=0;const F=$.getAttributes();for(const I in F)if(F[I].location>=0){let te=q[I];te===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),O[I]=re,H++}s.attributes=O,s.attributesNum=H,s.index=Q}function E(){const D=s.newAttributes;for(let k=0,$=D.length;k<$;k++)D[k]=0}function g(D){d(D,0)}function d(D,k){const $=s.newAttributes,Q=s.enabledAttributes,O=s.attributeDivisors;$[D]=1,Q[D]===0&&(t.enableVertexAttribArray(D),Q[D]=1),O[D]!==k&&(t.vertexAttribDivisor(D,k),O[D]=k)}function m(){const D=s.newAttributes,k=s.enabledAttributes;for(let $=0,Q=k.length;$<Q;$++)k[$]!==D[$]&&(t.disableVertexAttribArray($),k[$]=0)}function M(D,k,$,Q,O,q,H){H===!0?t.vertexAttribIPointer(D,k,$,O,q):t.vertexAttribPointer(D,k,$,Q,O,q)}function S(D,k,$,Q){E();const O=Q.attributes,q=$.getAttributes(),H=k.defaultAttributeValues;for(const F in q){const I=q[F];if(I.location>=0){let j=O[F];if(j===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const te=j.normalized,re=j.itemSize,Ve=e.get(j);if(Ve===void 0)continue;const qe=Ve.buffer,ke=Ve.type,G=Ve.bytesPerElement,se=ke===t.INT||ke===t.UNSIGNED_INT||j.gpuType===Pp;if(j.isInterleavedBufferAttribute){const ne=j.data,ue=ne.stride,Pe=j.offset;if(ne.isInstancedInterleavedBuffer){for(let _e=0;_e<I.locationSize;_e++)d(I.location+_e,ne.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<I.locationSize;_e++)g(I.location+_e);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let _e=0;_e<I.locationSize;_e++)M(I.location+_e,re/I.locationSize,ke,te,ue*G,(Pe+re/I.locationSize*_e)*G,se)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<I.locationSize;ne++)d(I.location+ne,j.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<I.locationSize;ne++)g(I.location+ne);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let ne=0;ne<I.locationSize;ne++)M(I.location+ne,re/I.locationSize,ke,te,re*G,re/I.locationSize*ne*G,se)}}else if(H!==void 0){const te=H[F];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(I.location,te);break;case 3:t.vertexAttrib3fv(I.location,te);break;case 4:t.vertexAttrib4fv(I.location,te);break;default:t.vertexAttrib1fv(I.location,te)}}}}m()}function w(){b();for(const D in i){const k=i[D];for(const $ in k){const Q=k[$];for(const O in Q){const q=Q[O];for(const H in q)f(q[H].object),delete q[H];delete Q[O]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const k=i[D.id];for(const $ in k){const Q=k[$];for(const O in Q){const q=Q[O];for(const H in q)f(q[H].object),delete q[H];delete Q[O]}}delete i[D.id]}function C(D){for(const k in i){const $=i[k];for(const Q in $){const O=$[Q];if(O[D.id]===void 0)continue;const q=O[D.id];for(const H in q)f(q[H].object),delete q[H];delete O[D.id]}}}function v(D){for(const k in i){const $=i[k],Q=D.isInstancedMesh===!0?D.id:0,O=$[Q];if(O!==void 0){for(const q in O){const H=O[q];for(const F in H)f(H[F].object),delete H[F];delete O[q]}delete $[Q],Object.keys($).length===0&&delete i[k]}}}function b(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function tb(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function nb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==hi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const v=C===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ai&&!v)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ge("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:S,maxSamples:w,samples:T}}function ib(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,p){const _=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const m=s?0:i,M=m*4;let S=d.clippingState||null;l.value=S,S=f(_,u,M,p);for(let w=0;w!==M;++w)S[w]=n[w];d.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,p,_){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=l.value,_!==!0||g===null){const d=p+E*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,S=p;M!==E;++M,S+=4)o.copy(h[M]).applyMatrix4(m,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const Mr=4,l0=[.125,.215,.35,.446,.526,.582],$r=20,rb=256,Xo=new W_,c0=new it;let Ad=null,bd=0,Cd=0,Rd=!1;const sb=new z;class u0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=sb}=s;Ad=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,bd,Cd),this._renderer.xr.enabled=Rd,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fs||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:tr,format:hi,colorSpace:Hc,depthBuffer:!1},r=d0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ob(s)),this._blurMaterial=lb(s,e,n),this._ggxMaterial=ab(s,e,n)}return r}_compileMaterial(e){const n=new kn(new Cn,e);this._renderer.compile(n,Xo)}_sceneToCubeUV(e,n,i,r,s){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(c0),h.toneMapping=Pi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kn(new Ha,new Bp({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let d=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,d=!0):(g.color.copy(c0),d=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[M]));const w=this._cubeSize;Us(r,S*w,M>2?w:0,w,w),h.setRenderTarget(r),d&&h.render(E,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fs||e.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Us(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=0+c*1.25,p=h*u,{_lodMax:_}=this,E=this._sizeLods[i],g=3*E*(i>_-Mr?i-_+Mr:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Us(s,g,d,3*E,2*E),r.setRenderTarget(s),r.render(a,Xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Us(e,g,d,3*E,2*E),r.setRenderTarget(e),r.render(a,Xo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),E=s/_,g=isFinite(s)?1+Math.floor(f*E):$r;g>$r&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$r}`);const d=[];let m=0;for(let C=0;C<$r;++C){const v=C/E,b=Math.exp(-v*v/2);d.push(b),C===0?m+=b:C<g&&(m+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/m;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-i;const S=this._sizeLods[r],w=3*S*(r>M-Mr?r-M+Mr:0),T=4*(this._cubeSize-S);Us(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(h,Xo)}}function ob(t){const e=[],n=[],i=[];let r=t;const s=t-Mr+1+l0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Mr?l=l0[o-t+Mr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,E=3,g=2,d=1,m=new Float32Array(E*_*p),M=new Float32Array(g*_*p),S=new Float32Array(d*_*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,v=T>2?0:-1,b=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];m.set(b,E*_*T),M.set(u,g*_*T);const P=[T,T,T,T,T,T];S.set(P,d*_*T)}const w=new Cn;w.setAttribute("position",new Jn(m,E)),w.setAttribute("uv",new Jn(M,g)),w.setAttribute("faceIndex",new Jn(S,d)),i.push(new kn(w,null)),r>Mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function d0(t,e,n){const i=new Li(t,e,n);return i.texture.mapping=cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ab(t,e,n){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function lb(t,e,n){const i=new Float32Array($r),r=new z(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function f0(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function h0(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}class q_ extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new B_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ha(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:$i});s.uniforms.tEquirect.value=n;const o=new kn(r,s),a=n.minFilter;return n.minFilter===es&&(n.minFilter=dn),new hT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function cb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Zu||p===Qu)if(e.has(u)){const _=e.get(u).texture;return a(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const E=new q_(_.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),a(E.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,_=p===Zu||p===Qu,E=p===fs||p===Mo;if(_||E){let g=n.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new u0(t)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return _&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new u0(t)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,p){return p===Zu?u.mapping=fs:p===Qu&&(u.mapping=Mo),u}function l(u){let p=0;const _=6;for(let E=0;E<_;E++)u[E]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ub(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&lo("WebGLRenderer: "+i+" extension not supported."),r}}}function db(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,_=h.attributes.position;let E=0;if(_===void 0)return;if(p!==null){const m=p.array;E=p.version;for(let M=0,S=m.length;M<S;M+=3){const w=m[M+0],T=m[M+1],C=m[M+2];u.push(w,T,T,C,C,w)}}else{const m=_.array;E=_.version;for(let M=0,S=m.length/3-1;M<S;M+=3){const w=M+0,T=M+1,C=M+2;u.push(w,T,T,C,C,w)}}const g=new(_.count>=65535?U_:F_)(u,1);g.version=E;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function f(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function fb(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*o),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,h*o,p),n.update(u,i,p))}function f(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let E=0;for(let g=0;g<p;g++)E+=u[g];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function hb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pb(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let P=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let w=a.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*h),v=new D_(C,w,T,h);v.type=Ai,v.needsUpdate=!0;const b=S*4;for(let D=0;D<h;D++){const k=d[D],$=m[D],Q=M[D],O=w*T*4*D;for(let q=0;q<k.count;q++){const H=q*b;_===!0&&(r.fromBufferAttribute(k,q),C[O+H+0]=r.x,C[O+H+1]=r.y,C[O+H+2]=r.z,C[O+H+3]=0),E===!0&&(r.fromBufferAttribute($,q),C[O+H+4]=r.x,C[O+H+5]=r.y,C[O+H+6]=r.z,C[O+H+7]=0),g===!0&&(r.fromBufferAttribute(Q,q),C[O+H+8]=r.x,C[O+H+9]=r.y,C[O+H+10]=r.z,C[O+H+11]=Q.itemSize===4?r.w:1)}}u={count:h,texture:v,size:new rt(w,T)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const E=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function mb(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const gb={[g_]:"LINEAR_TONE_MAPPING",[x_]:"REINHARD_TONE_MAPPING",[v_]:"CINEON_TONE_MAPPING",[__]:"ACES_FILMIC_TONE_MAPPING",[S_]:"AGX_TONE_MAPPING",[M_]:"NEUTRAL_TONE_MAPPING",[y_]:"CUSTOM_TONE_MAPPING"};function xb(t,e,n,i,r,s){const o=new Li(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Eo(e,n):void 0}),a=new Li(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),l=new Cn;l.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new aT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new kn(l,c),h=new W_(-1,1,1,-1,0,1);let u=null,p=null,_=!1,E,g=null,d=[],m=!1;this.setSize=function(M,S){o.setSize(M,S),a.setSize(M,S);for(let w=0;w<d.length;w++){const T=d[w];T.setSize&&T.setSize(M,S)}},this.setEffects=function(M){d=M,m=d.length>0&&d[0].isRenderPass===!0;const S=o.width,w=o.height;for(let T=0;T<d.length;T++){const C=d[T];C.setSize&&C.setSize(S,w)}},this.begin=function(M,S){if(_||M.toneMapping===Pi&&d.length===0)return!1;if(g=S,S!==null){const w=S.width,T=S.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return m===!1&&M.setRenderTarget(o),E=M.toneMapping,M.toneMapping=Pi,!0},this.hasRenderPass=function(){return m},this.end=function(M,S){M.toneMapping=E,_=!0;let w=o,T=a;for(let C=0;C<d.length;C++){const v=d[C];if(v.enabled!==!1&&(v.render(M,T,w,S),v.needsSwap!==!1)){const b=w;w=T,T=b}}if(u!==M.outputColorSpace||p!==M.toneMapping){u=M.outputColorSpace,p=M.toneMapping,c.defines={},lt.getTransfer(u)===gt&&(c.defines.SRGB_TRANSFER="");const C=gb[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(g),M.render(f,h),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const Y_=new xn,Ah=new Eo(1,1),$_=new D_,K_=new OE,Z_=new B_,p0=[],m0=[],g0=new Float32Array(16),x0=new Float32Array(9),v0=new Float32Array(4);function Po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=p0[r];if(s===void 0&&(s=new Float32Array(r),p0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pu(t,e){let n=m0[e];n===void 0&&(n=new Int32Array(e),m0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function Sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function Mb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;v0.set(i),t.uniformMatrix2fv(this.addr,!1,v0),Xt(n,i)}}function Eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;x0.set(i),t.uniformMatrix3fv(this.addr,!1,x0),Xt(n,i)}}function Tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;g0.set(i),t.uniformMatrix4fv(this.addr,!1,g0),Xt(n,i)}}function wb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function Rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function Lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function Db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function Ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ah.compareFunction=n.isReversedDepthBuffer()?Op:Up,s=Ah):s=Y_,n.setTexture2D(e||s,r)}function Nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||K_,r)}function Fb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Z_,r)}function Ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$_,r)}function Ob(t){switch(t){case 5126:return vb;case 35664:return _b;case 35665:return yb;case 35666:return Sb;case 35674:return Mb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return wb;case 35667:case 35671:return Ab;case 35668:case 35672:return bb;case 35669:case 35673:return Cb;case 5125:return Rb;case 36294:return Pb;case 36295:return Lb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ub}}function kb(t,e){t.uniform1fv(this.addr,e)}function Bb(t,e){const n=Po(e,this.size,2);t.uniform2fv(this.addr,n)}function zb(t,e){const n=Po(e,this.size,3);t.uniform3fv(this.addr,n)}function Vb(t,e){const n=Po(e,this.size,4);t.uniform4fv(this.addr,n)}function Hb(t,e){const n=Po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Gb(t,e){const n=Po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Wb(t,e){const n=Po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Xb(t,e){t.uniform1iv(this.addr,e)}function jb(t,e){t.uniform2iv(this.addr,e)}function qb(t,e){t.uniform3iv(this.addr,e)}function Yb(t,e){t.uniform4iv(this.addr,e)}function $b(t,e){t.uniform1uiv(this.addr,e)}function Kb(t,e){t.uniform2uiv(this.addr,e)}function Zb(t,e){t.uniform3uiv(this.addr,e)}function Qb(t,e){t.uniform4uiv(this.addr,e)}function Jb(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ah:o=Y_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function e2(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||K_,s[o])}function t2(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Z_,s[o])}function n2(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$_,s[o])}function i2(t){switch(t){case 5126:return kb;case 35664:return Bb;case 35665:return zb;case 35666:return Vb;case 35674:return Hb;case 35675:return Gb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return jb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return $b;case 36294:return Kb;case 36295:return Zb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}class r2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ob(n.type)}}class s2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=i2(n.type)}}class o2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function _0(t,e){t.seq.push(e),t.map[e.id]=e}function a2(t,e,n){const i=t.name,r=i.length;for(Pd.lastIndex=0;;){const s=Pd.exec(i),o=Pd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_0(n,c===void 0?new r2(a,t,e):new s2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new o2(a),_0(n,h)),n=h}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);a2(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function y0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const l2=37297;let c2=0;function u2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const S0=new $e;function d2(t){lt._getMatrix(S0,lt.workingColorSpace,t);const e=`mat3( ${S0.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case Gc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function M0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+u2(t.getShaderSource(e),a)}else return s}function f2(t,e){const n=d2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const h2={[g_]:"Linear",[x_]:"Reinhard",[v_]:"Cineon",[__]:"ACESFilmic",[S_]:"AgX",[M_]:"Neutral",[y_]:"Custom"};function p2(t,e){const n=h2[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zl=new z;function m2(){lt.getLuminanceCoefficients(zl);const t=zl.x.toFixed(4),e=zl.y.toFixed(4),n=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function x2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function v2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function E0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(t){return t.replace(_2,S2)}const y2=new Map;function S2(t,e){let n=tt[e];if(n===void 0){const i=y2.get(e);if(i!==void 0)n=tt[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bh(n)}const M2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(t){return t.replace(M2,E2)}function E2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function A0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const T2={[oc]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function w2(t){return T2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A2={[fs]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function b2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":A2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const C2={[Mo]:"ENVMAP_MODE_REFRACTION"};function R2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":C2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const P2={[m_]:"ENVMAP_BLENDING_MULTIPLY",[gE]:"ENVMAP_BLENDING_MIX",[xE]:"ENVMAP_BLENDING_ADD"};function L2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":P2[t.combine]||"ENVMAP_BLENDING_NONE"}function D2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function I2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=w2(n),c=b2(n),f=R2(n),h=L2(n),u=D2(n),p=g2(n),_=x2(s),E=r.createProgram();let g,d,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ia).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(g=[A0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[A0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?tt.tonemapping_pars_fragment:"",n.toneMapping!==Pi?p2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,f2("linearToOutputTexel",n.outputColorSpace),m2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=bh(o),o=E0(o,n),o=T0(o,n),a=bh(a),a=E0(a,n),a=T0(a,n),o=w0(o),a=w0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=m+g+o,S=m+d+a,w=y0(r,r.VERTEX_SHADER,M),T=y0(r,r.FRAGMENT_SHADER,S);r.attachShader(E,w),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(D){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",$=r.getShaderInfoLog(w)||"",Q=r.getShaderInfoLog(T)||"",O=k.trim(),q=$.trim(),H=Q.trim();let F=!0,I=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,w,T);else{const j=M0(r,w,"vertex"),te=M0(r,T,"fragment");ht("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+j+`
`+te)}else O!==""?Ge("WebGLProgram: Program Info Log:",O):(q===""||H==="")&&(I=!1);I&&(D.diagnostics={runnable:F,programLog:O,vertexShader:{log:q,prefix:g},fragmentShader:{log:H,prefix:d}})}r.deleteShader(w),r.deleteShader(T),v=new dc(r,E),b=v2(r,E)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,l2)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=T,this}let N2=0;class F2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new U2(e),n.set(e,i)),i}}class U2{constructor(e){this.id=N2++,this.code=e,this.usedTimes=0}}function O2(t){return t===hs||t===zc||t===Vc}function k2(t,e,n,i,r,s){const o=new I_,a=new F2,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,b,P,D,k,$){const Q=D.fog,O=k.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||q,H),I=F&&F.mapping===cu?F.image.height:null,j=p[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=te!==void 0?te.length:0;let Ve=0;O.morphAttributes.position!==void 0&&(Ve=1),O.morphAttributes.normal!==void 0&&(Ve=2),O.morphAttributes.color!==void 0&&(Ve=3);let qe,ke,G,se;if(j){const Ae=Ei[j];qe=Ae.vertexShader,ke=Ae.fragmentShader}else{qe=v.vertexShader,ke=v.fragmentShader;const Ae=a.getVertexShaderStage(v),Fe=a.getFragmentShaderStage(v);a.update(v,Ae,Fe),G=Ae.id,se=Fe.id}const ne=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,be=!!v.map,Se=!!v.matcap,He=!!F,Be=!!v.aoMap,Ce=!!v.lightMap,Ye=!!v.bumpMap&&v.wireframe===!1,Je=!!v.normalMap,Ke=!!v.displacementMap,ut=!!v.emissiveMap,We=!!v.metalnessMap,Re=!!v.roughnessMap,L=v.anisotropy>0,Xe=v.clearcoat>0,Me=v.dispersion>0,R=v.iridescence>0,x=v.sheen>0,U=v.transmission>0,V=L&&!!v.anisotropyMap,K=Xe&&!!v.clearcoatMap,oe=Xe&&!!v.clearcoatNormalMap,le=Xe&&!!v.clearcoatRoughnessMap,Z=R&&!!v.iridescenceMap,J=R&&!!v.iridescenceThicknessMap,ce=x&&!!v.sheenColorMap,De=x&&!!v.sheenRoughnessMap,pe=!!v.specularMap,he=!!v.specularColorMap,Ie=!!v.specularIntensityMap,ze=U&&!!v.transmissionMap,Oe=U&&!!v.thicknessMap,N=!!v.gradientMap,de=!!v.alphaMap,ee=v.alphaTest>0,fe=!!v.alphaHash,me=!!v.extensions;let ie=Pi;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ie=t.toneMapping);const ye={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:ke,defines:v.defines,customVertexShaderID:G,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:be,matcap:Se,envMap:He,envMapMode:He&&F.mapping,envMapCubeUVHeight:I,aoMap:Be,lightMap:Ce,bumpMap:Ye,normalMap:Je,displacementMap:Ke,emissiveMap:ut,normalMapObjectSpace:Je&&v.normalMapType===yE,normalMapTangentSpace:Je&&v.normalMapType===Eh,packedNormalMap:Je&&v.normalMapType===Eh&&O2(v.normalMap.format),metalnessMap:We,roughnessMap:Re,anisotropy:L,anisotropyMap:V,clearcoat:Xe,clearcoatMap:K,clearcoatNormalMap:oe,clearcoatRoughnessMap:le,dispersion:Me,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:J,sheen:x,sheenColorMap:ce,sheenRoughnessMap:De,specularMap:pe,specularColorMap:he,specularIntensityMap:Ie,transmission:U,transmissionMap:ze,thicknessMap:Oe,gradientMap:N,opaque:v.transparent===!1&&v.blending===ao&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:ee,alphaHash:fe,combine:v.combine,mapUv:be&&_(v.map.channel),aoMapUv:Be&&_(v.aoMap.channel),lightMapUv:Ce&&_(v.lightMap.channel),bumpMapUv:Ye&&_(v.bumpMap.channel),normalMapUv:Je&&_(v.normalMap.channel),displacementMapUv:Ke&&_(v.displacementMap.channel),emissiveMapUv:ut&&_(v.emissiveMap.channel),metalnessMapUv:We&&_(v.metalnessMap.channel),roughnessMapUv:Re&&_(v.roughnessMap.channel),anisotropyMapUv:V&&_(v.anisotropyMap.channel),clearcoatMapUv:K&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(v.sheenRoughnessMap.channel),specularMapUv:pe&&_(v.specularMap.channel),specularColorMapUv:he&&_(v.specularColorMap.channel),specularIntensityMapUv:Ie&&_(v.specularIntensityMap.channel),transmissionMapUv:ze&&_(v.transmissionMap.channel),thicknessMapUv:Oe&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Je||L),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(be||de),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&Je===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:be&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wi,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&v.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function g(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(d(b,v),m(b,v),b.push(t.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function d(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function m(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const b=p[v.type];let P;if(b){const D=Ei[b];P=rT.clone(D.uniforms)}else P=v.uniforms;return P}function S(v,b){let P=f.get(b);return P!==void 0?++P.usedTimes:(P=new I2(t,b,v,r),c.push(P),f.set(b,P)),P}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function C(){a.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function B2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function z2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function b0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function C0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,_,E,g,d){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:_,materialVariant:o(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:d},t[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=_,m.materialVariant=o(u),m.groupOrder=E,m.renderOrder=u.renderOrder,m.z=g,m.group=d),e++,m}function l(u,p,_,E,g,d){const m=a(u,p,_,E,g,d);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):n.push(m)}function c(u,p,_,E,g,d){const m=a(u,p,_,E,g,d);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function f(u,p,_){n.length>1&&n.sort(u||z2),i.length>1&&i.sort(p||b0),r.length>1&&r.sort(p||b0),_&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let u=e,p=t.length;u<p;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function V2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new C0,t.set(i,[o])):r>=s.length?(o=new C0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function H2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new it};break;case"SpotLight":n={position:new z,direction:new z,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function G2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let W2=0;function X2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function j2(t){const e=new H2,n=G2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Dt,o=new Dt;function a(c){let f=0,h=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,E=0,g=0,d=0,m=0,M=0,S=0,w=0,T=0,C=0;c.sort(X2);for(let b=0,P=c.length;b<P;b++){const D=c[b],k=D.color,$=D.intensity,Q=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===hs?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=k.r*$,h+=k.g*$,u+=k.b*$;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],$);C++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=q,p++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(k).multiplyScalar($),q.distance=Q,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[E]=q;const H=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,H.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[E]=H.matrix,D.castShadow){const F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.spotShadow[E]=F,i.spotShadowMap[E]=O,S++}E++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(k).multiplyScalar($),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=q,g++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const H=D.shadow,F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,F.shadowCameraNear=H.camera.near,F.shadowCameraFar=H.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=D.shadow.matrix,M++}i.point[_]=q,_++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar($),q.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[d]=q,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==E||v.rectAreaLength!==g||v.hemiLength!==d||v.numDirectionalShadows!==m||v.numPointShadows!==M||v.numSpotShadows!==S||v.numSpotMaps!==w||v.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,v.directionalLength=p,v.pointLength=_,v.spotLength=E,v.rectAreaLength=g,v.hemiLength=d,v.numDirectionalShadows=m,v.numPointShadows=M,v.numSpotShadows=S,v.numSpotMaps=w,v.numLightProbes=C,i.version=W2++)}function l(c,f){let h=0,u=0,p=0,_=0,E=0;const g=f.matrixWorldInverse;for(let d=0,m=c.length;d<m;d++){const M=c[d];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(M.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:i}}function R0(t){const e=new j2(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function q2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new R0(t),e.set(r,[a])):s>=o.length?(a=new R0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$2=`uniform sampler2D shadow_pass;
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
}`,K2=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Z2=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],P0=new Dt,jo=new z,Ld=new z;function Q2(t,e,n){let i=new zp;const r=new rt,s=new rt,o=new Pt,a=new lT,l=new cT,c={},f=n.maxTextureSize,h={[Nr]:bn,[bn]:Nr,[wi]:wi},u=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Y2,fragmentShader:$2}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new kn(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let d=this.type;this.render=function(T,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===ZM&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oc);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),k=t.state;k.setBlending($i),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=d!==this.type;$&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(O=>O.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,O=T.length;Q<O;Q++){const q=T[Q],H=q.shadow;if(H===void 0){Ge("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const F=H.getFrameExtents();r.multiply(F),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,H.mapSize.y=s.y));const I=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=I,H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ta){if(q.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Li(r.x,r.y,{format:hs,type:tr,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new Eo(r.x,r.y,Ai),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=nr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt}else q.isPointLight?(H.map=new q_(r.x),H.map.depthTexture=new nT(r.x,Di)):(H.map=new Li(r.x,r.y),H.map.depthTexture=new Eo(r.x,r.y,Di)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=nr,this.type===oc?(H.map.depthTexture.compareFunction=I?Op:Up,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt);H.camera.updateProjectionMatrix()}const j=H.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<j;te++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,te),t.clear();else{te===0&&(t.setRenderTarget(H.map),t.clear());const re=H.getViewport(te);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(o)}if(q.isPointLight){const re=H.camera,Ve=H.matrix,qe=q.distance||re.far;qe!==re.far&&(re.far=qe,re.updateProjectionMatrix()),jo.setFromMatrixPosition(q.matrixWorld),re.position.copy(jo),Ld.copy(re.position),Ld.add(K2[te]),re.up.copy(Z2[te]),re.lookAt(Ld),re.updateMatrixWorld(),Ve.makeTranslation(-jo.x,-jo.y,-jo.z),P0.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),H._frustum.setFromProjectionMatrix(P0,re.coordinateSystem,re.reversedDepth)}else H.updateMatrices(q);i=H.getFrustum(),S(C,v,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===ta&&m(H,v),H.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(b,P,D)};function m(T,C){const v=e.update(E);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Li(r.x,r.y,{format:hs,type:tr})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,v,u,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,v,p,E,null)}function M(T,C,v,b){let P=null;const D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=v.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=P.uuid,$=C.uuid;let Q=c[k];Q===void 0&&(Q={},c[k]=Q);let O=Q[$];O===void 0&&(O=P.clone(),Q[$]=O,C.addEventListener("dispose",w)),P=O}if(P.visible=C.visible,P.wireframe=C.wireframe,b===ta?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=t.properties.get(P);k.light=v}return P}function S(T,C,v,b,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===ta)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const $=e.update(T),Q=T.material;if(Array.isArray(Q)){const O=$.groups;for(let q=0,H=O.length;q<H;q++){const F=O[q],I=Q[F.materialIndex];if(I&&I.visible){const j=M(T,I,b,P);T.onBeforeShadow(t,T,C,v,$,j,F),t.renderBufferDirect(v,null,$,j,T,F),T.onAfterShadow(t,T,C,v,$,j,F)}}}else if(Q.visible){const O=M(T,Q,b,P);T.onBeforeShadow(t,T,C,v,$,O,null),t.renderBufferDirect(v,null,$,O,T,null),T.onAfterShadow(t,T,C,v,$,O,null)}}const k=T.children;for(let $=0,Q=k.length;$<Q;$++)S(k[$],C,v,b,P)}function w(T){T.target.removeEventListener("dispose",w);for(const v in c){const b=c[v],P=T.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function J2(t,e){function n(){let N=!1;const de=new Pt;let ee=null;const fe=new Pt(0,0,0,0);return{setMask:function(me){ee!==me&&!N&&(t.colorMask(me,me,me,me),ee=me)},setLocked:function(me){N=me},setClear:function(me,ie,ye,Ae,Fe){Fe===!0&&(me*=Ae,ie*=Ae,ye*=Ae),de.set(me,ie,ye,Ae),fe.equals(de)===!1&&(t.clearColor(me,ie,ye,Ae),fe.copy(de))},reset:function(){N=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,ee=null,fe=null,me=null;return{setReversed:function(ie){if(de!==ie){const ye=e.get("EXT_clip_control");ie?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),de=ie;const Ae=me;me=null,this.setClear(Ae)}},getReversed:function(){return de},setTest:function(ie){ie?ne(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!N&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(de&&(ie=PE[ie]),fe!==ie){switch(ie){case kf:t.depthFunc(t.NEVER);break;case Bf:t.depthFunc(t.ALWAYS);break;case zf:t.depthFunc(t.LESS);break;case So:t.depthFunc(t.LEQUAL);break;case Vf:t.depthFunc(t.EQUAL);break;case Hf:t.depthFunc(t.GEQUAL);break;case Gf:t.depthFunc(t.GREATER);break;case Wf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){me!==ie&&(me=ie,de&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,ee=null,fe=null,me=null,de=!1}}}function r(){let N=!1,de=null,ee=null,fe=null,me=null,ie=null,ye=null,Ae=null,Fe=null;return{setTest:function(Ze){N||(Ze?ne(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Ze){de!==Ze&&!N&&(t.stencilMask(Ze),de=Ze)},setFunc:function(Ze,ni,Rn){(ee!==Ze||fe!==ni||me!==Rn)&&(t.stencilFunc(Ze,ni,Rn),ee=Ze,fe=ni,me=Rn)},setOp:function(Ze,ni,Rn){(ie!==Ze||ye!==ni||Ae!==Rn)&&(t.stencilOp(Ze,ni,Rn),ie=Ze,ye=ni,Ae=Rn)},setLocked:function(Ze){N=Ze},setClear:function(Ze){Fe!==Ze&&(t.clearStencil(Ze),Fe=Ze)},reset:function(){N=!1,de=null,ee=null,fe=null,me=null,ie=null,ye=null,Ae=null,Fe=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u={},p=new WeakMap,_=[],E=null,g=!1,d=null,m=null,M=null,S=null,w=null,T=null,C=null,v=new it(0,0,0),b=0,P=!1,D=null,k=null,$=null,Q=null,O=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),H=F>=1):I.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),H=F>=2);let j=null,te={};const re=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),qe=new Pt().fromArray(re),ke=new Pt().fromArray(Ve);function G(N,de,ee,fe){const me=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<ee;ye++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(de+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ie}const se={};se[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(So),Ye(!1),Je(Pg),ne(t.CULL_FACE),Be($i);function ne(N){f[N]!==!0&&(t.enable(N),f[N]=!0)}function ue(N){f[N]!==!1&&(t.disable(N),f[N]=!1)}function Pe(N,de){return u[N]!==de?(t.bindFramebuffer(N,de),u[N]=de,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function _e(N,de){let ee=_,fe=!1;if(N){ee=p.get(de),ee===void 0&&(ee=[],p.set(de,ee));const me=N.textures;if(ee.length!==me.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,ye=me.length;ie<ye;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=me.length,fe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ee)}function be(N){return E!==N?(t.useProgram(N),E=N,!0):!1}const Se={[Yr]:t.FUNC_ADD,[JM]:t.FUNC_SUBTRACT,[eE]:t.FUNC_REVERSE_SUBTRACT};Se[tE]=t.MIN,Se[nE]=t.MAX;const He={[iE]:t.ZERO,[rE]:t.ONE,[sE]:t.SRC_COLOR,[Uf]:t.SRC_ALPHA,[dE]:t.SRC_ALPHA_SATURATE,[cE]:t.DST_COLOR,[aE]:t.DST_ALPHA,[oE]:t.ONE_MINUS_SRC_COLOR,[Of]:t.ONE_MINUS_SRC_ALPHA,[uE]:t.ONE_MINUS_DST_COLOR,[lE]:t.ONE_MINUS_DST_ALPHA,[fE]:t.CONSTANT_COLOR,[hE]:t.ONE_MINUS_CONSTANT_COLOR,[pE]:t.CONSTANT_ALPHA,[mE]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(N,de,ee,fe,me,ie,ye,Ae,Fe,Ze){if(N===$i){g===!0&&(ue(t.BLEND),g=!1);return}if(g===!1&&(ne(t.BLEND),g=!0),N!==QM){if(N!==d||Ze!==P){if((m!==Yr||w!==Yr)&&(t.blendEquation(t.FUNC_ADD),m=Yr,w=Yr),Ze)switch(N){case ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ff:t.blendFunc(t.ONE,t.ONE);break;case Lg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ht("WebGLState: Invalid blending: ",N);break}else switch(N){case ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ff:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Lg:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dg:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",N);break}M=null,S=null,T=null,C=null,v.set(0,0,0),b=0,d=N,P=Ze}return}me=me||de,ie=ie||ee,ye=ye||fe,(de!==m||me!==w)&&(t.blendEquationSeparate(Se[de],Se[me]),m=de,w=me),(ee!==M||fe!==S||ie!==T||ye!==C)&&(t.blendFuncSeparate(He[ee],He[fe],He[ie],He[ye]),M=ee,S=fe,T=ie,C=ye),(Ae.equals(v)===!1||Fe!==b)&&(t.blendColor(Ae.r,Ae.g,Ae.b,Fe),v.copy(Ae),b=Fe),d=N,P=!1}function Ce(N,de){N.side===wi?ue(t.CULL_FACE):ne(t.CULL_FACE);let ee=N.side===bn;de&&(ee=!ee),Ye(ee),N.blending===ao&&N.transparent===!1?Be($i):Be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const fe=N.stencilWrite;a.setTest(fe),fe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(N){D!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),D=N)}function Je(N){N!==$M?(ne(t.CULL_FACE),N!==k&&(N===Pg?t.cullFace(t.BACK):N===KM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),k=N}function Ke(N){N!==$&&(H&&t.lineWidth(N),$=N)}function ut(N,de,ee){N?(ne(t.POLYGON_OFFSET_FILL),(Q!==de||O!==ee)&&(Q=de,O=ee,o.getReversed()&&(de=-de),t.polygonOffset(de,ee))):ue(t.POLYGON_OFFSET_FILL)}function We(N){N?ne(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function Re(N){N===void 0&&(N=t.TEXTURE0+q-1),j!==N&&(t.activeTexture(N),j=N)}function L(N,de,ee){ee===void 0&&(j===null?ee=t.TEXTURE0+q-1:ee=j);let fe=te[ee];fe===void 0&&(fe={type:void 0,texture:void 0},te[ee]=fe),(fe.type!==N||fe.texture!==de)&&(j!==ee&&(t.activeTexture(ee),j=ee),t.bindTexture(N,de||se[N]),fe.type=N,fe.texture=de)}function Xe(){const N=te[j];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Me(){try{t.compressedTexImage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function x(){try{t.texSubImage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function U(){try{t.texSubImage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function oe(){try{t.texStorage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function le(){try{t.texStorage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function Z(){try{t.texImage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function J(){try{t.texImage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function ce(N){return h[N]!==void 0?h[N]:t.getParameter(N)}function De(N,de){h[N]!==de&&(t.pixelStorei(N,de),h[N]=de)}function pe(N){qe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function he(N){ke.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ke.copy(N))}function Ie(N,de){let ee=c.get(de);ee===void 0&&(ee=new WeakMap,c.set(de,ee));let fe=ee.get(N);fe===void 0&&(fe=t.getUniformBlockIndex(de,N.name),ee.set(N,fe))}function ze(N,de){const fe=c.get(de).get(N);l.get(de)!==fe&&(t.uniformBlockBinding(de,fe,N.__bindingPointIndex),l.set(de,fe))}function Oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},j=null,te={},u={},p=new WeakMap,_=[],E=null,g=!1,d=null,m=null,M=null,S=null,w=null,T=null,C=null,v=new it(0,0,0),b=0,P=!1,D=null,k=null,$=null,Q=null,O=null,qe.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ue,bindFramebuffer:Pe,drawBuffers:_e,useProgram:be,setBlending:Be,setMaterial:Ce,setFlipSided:Ye,setCullFace:Je,setLineWidth:Ke,setPolygonOffset:ut,setScissorTest:We,activeTexture:Re,bindTexture:L,unbindTexture:Xe,compressedTexImage2D:Me,compressedTexImage3D:R,texImage2D:Z,texImage3D:J,pixelStorei:De,getParameter:ce,updateUBOMapping:Ie,uniformBlockBinding:ze,texStorage2D:oe,texStorage3D:le,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:pe,viewport:he,reset:Oe}}function eC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,f=new WeakMap,h=new Set;let u;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,x){return _?new OffscreenCanvas(R,x):Wc("canvas")}function g(R,x,U){let V=1;const K=Me(R);if((K.width>U||K.height>U)&&(V=U/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(V*K.width),le=Math.floor(V*K.height);u===void 0&&(u=E(oe,le));const Z=x?E(oe,le):u;return Z.width=oe,Z.height=le,Z.getContext("2d").drawImage(R,0,0,oe,le),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+oe+"x"+le+")."),Z}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function d(R){return R.generateMipmaps}function m(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,x,U,V,K,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;V&&(le=e.get("EXT_texture_norm16"),le||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===t.RED&&(U===t.FLOAT&&(Z=t.R32F),U===t.HALF_FLOAT&&(Z=t.R16F),U===t.UNSIGNED_BYTE&&(Z=t.R8),U===t.UNSIGNED_SHORT&&le&&(Z=le.R16_EXT),U===t.SHORT&&le&&(Z=le.R16_SNORM_EXT)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.R8UI),U===t.UNSIGNED_SHORT&&(Z=t.R16UI),U===t.UNSIGNED_INT&&(Z=t.R32UI),U===t.BYTE&&(Z=t.R8I),U===t.SHORT&&(Z=t.R16I),U===t.INT&&(Z=t.R32I)),x===t.RG&&(U===t.FLOAT&&(Z=t.RG32F),U===t.HALF_FLOAT&&(Z=t.RG16F),U===t.UNSIGNED_BYTE&&(Z=t.RG8),U===t.UNSIGNED_SHORT&&le&&(Z=le.RG16_EXT),U===t.SHORT&&le&&(Z=le.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RG8UI),U===t.UNSIGNED_SHORT&&(Z=t.RG16UI),U===t.UNSIGNED_INT&&(Z=t.RG32UI),U===t.BYTE&&(Z=t.RG8I),U===t.SHORT&&(Z=t.RG16I),U===t.INT&&(Z=t.RG32I)),x===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),U===t.UNSIGNED_INT&&(Z=t.RGB32UI),U===t.BYTE&&(Z=t.RGB8I),U===t.SHORT&&(Z=t.RGB16I),U===t.INT&&(Z=t.RGB32I)),x===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),U===t.UNSIGNED_INT&&(Z=t.RGBA32UI),U===t.BYTE&&(Z=t.RGBA8I),U===t.SHORT&&(Z=t.RGBA16I),U===t.INT&&(Z=t.RGBA32I)),x===t.RGB&&(U===t.UNSIGNED_SHORT&&le&&(Z=le.RGB16_EXT),U===t.SHORT&&le&&(Z=le.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),x===t.RGBA){const J=oe?Gc:lt.getTransfer(K);U===t.FLOAT&&(Z=t.RGBA32F),U===t.HALF_FLOAT&&(Z=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Z=J===gt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&le&&(Z=le.RGBA16_EXT),U===t.SHORT&&le&&(Z=le.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(R,x){let U;return R?x===null||x===Di||x===Ia?U=t.DEPTH24_STENCIL8:x===Ai?U=t.DEPTH32F_STENCIL8:x===Da&&(U=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===Ia?U=t.DEPTH_COMPONENT24:x===Ai?U=t.DEPTH_COMPONENT32F:x===Da&&(U=t.DEPTH_COMPONENT16),U}function T(R,x){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function C(R){const x=R.target;x.removeEventListener("dispose",C),b(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&h.delete(x)}function v(R){const x=R.target;x.removeEventListener("dispose",v),D(x)}function b(R){const x=i.get(R);if(x.__webglInit===void 0)return;const U=R.source,V=p.get(U);if(V){const K=V[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(R),Object.keys(V).length===0&&p.delete(U)}i.remove(R)}function P(R){const x=i.get(R);t.deleteTexture(x.__webglTexture);const U=R.source,V=p.get(U);delete V[x.__cacheKey],o.memory.textures--}function D(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let K=0;K<x.__webglFramebuffer[V].length;K++)t.deleteFramebuffer(x.__webglFramebuffer[V][K]);else t.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)t.deleteFramebuffer(x.__webglFramebuffer[V]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=R.textures;for(let V=0,K=U.length;V<K;V++){const oe=i.get(U[V]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(U[V])}i.remove(R)}let k=0;function $(){k=0}function Q(){return k}function O(R){k=R}function q(){const R=k;return R>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function H(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function F(R,x){const U=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const V=R.image;if(V===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(U,R,x);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function I(R,x){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ue(U,R,x);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function j(R,x){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ue(U,R,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function te(R,x){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){Pe(U,R,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}const re={[Xf]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[jf]:t.MIRRORED_REPEAT},Ve={[Jt]:t.NEAREST,[vE]:t.NEAREST_MIPMAP_NEAREST,[xl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[Ju]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},qe={[SE]:t.NEVER,[AE]:t.ALWAYS,[ME]:t.LESS,[Up]:t.LEQUAL,[EE]:t.EQUAL,[Op]:t.GEQUAL,[TE]:t.GREATER,[wE]:t.NOTEQUAL};function ke(R,x){if(x.type===Ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===dn||x.magFilter===Ju||x.magFilter===xl||x.magFilter===es||x.minFilter===dn||x.minFilter===Ju||x.minFilter===xl||x.minFilter===es)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,re[x.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,re[x.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,re[x.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ve[x.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ve[x.minFilter]),x.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,qe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==xl&&x.minFilter!==es||x.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function G(R,x){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",C));const V=x.source;let K=p.get(V);K===void 0&&(K={},p.set(V,K));const oe=H(x);if(oe!==R.__cacheKey){K[oe]===void 0&&(K[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[oe].usedTimes++;const le=K[R.__cacheKey];le!==void 0&&(K[R.__cacheKey].usedTimes--,le.usedTimes===0&&P(x)),R.__cacheKey=oe,R.__webglTexture=K[oe].texture}return U}function se(R,x,U){return Math.floor(Math.floor(R/U)/x)}function ne(R,x,U,V){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,U,V,x.data);else{oe.sort((De,pe)=>De.start-pe.start);let le=0;for(let De=1;De<oe.length;De++){const pe=oe[le],he=oe[De],Ie=pe.start+pe.count,ze=se(he.start,x.width,4),Oe=se(pe.start,x.width,4);he.start<=Ie+1&&ze===Oe&&se(he.start+he.count-1,x.width,4)===ze?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++le,oe[le]=he)}oe.length=le+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let De=0,pe=oe.length;De<pe;De++){const he=oe[De],Ie=Math.floor(he.start/4),ze=Math.ceil(he.count/4),Oe=Ie%x.width,N=Math.floor(Ie/x.width),de=ze,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Oe,N,de,ee,U,V,x.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function ue(R,x,U){let V=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=t.TEXTURE_3D);const K=G(R,x),oe=x.source;n.bindTexture(V,R.__webglTexture,t.TEXTURE0+U);const le=i.get(oe);if(oe.version!==le.__version||K===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ee=lt.getPrimaries(lt.workingColorSpace),fe=x.colorSpace===_r?null:lt.getPrimaries(x.colorSpace),me=x.colorSpace===_r||ee===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let J=g(x.image,!1,r.maxTextureSize);J=Xe(x,J);const ce=s.convert(x.format,x.colorSpace),De=s.convert(x.type);let pe=S(x.internalFormat,ce,De,x.normalized,x.colorSpace,x.isVideoTexture);ke(V,x);let he;const Ie=x.mipmaps,ze=x.isVideoTexture!==!0,Oe=le.__version===void 0||K===!0,N=oe.dataReady,de=T(x,J);if(x.isDepthTexture)pe=w(x.format===ts,x.type),Oe&&(ze?n.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,ce,De,null));else if(x.isDataTexture)if(Ie.length>0){ze&&Oe&&n.texStorage2D(t.TEXTURE_2D,de,pe,Ie[0].width,Ie[0].height);for(let ee=0,fe=Ie.length;ee<fe;ee++)he=Ie[ee],ze?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ce,De,he.data):n.texImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,ce,De,he.data);x.generateMipmaps=!1}else ze?(Oe&&n.texStorage2D(t.TEXTURE_2D,de,pe,J.width,J.height),N&&ne(x,J,ce,De)):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,ce,De,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,pe,Ie[0].width,Ie[0].height,J.depth);for(let ee=0,fe=Ie.length;ee<fe;ee++)if(he=Ie[ee],x.format!==hi)if(ce!==null)if(ze){if(N)if(x.layerUpdates.size>0){const me=a0(he.width,he.height,x.format,x.type);for(const ie of x.layerUpdates){const ye=he.data.subarray(ie*me/he.data.BYTES_PER_ELEMENT,(ie+1)*me/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,he.width,he.height,1,ce,ye)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ce,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,pe,he.width,he.height,J.depth,0,he.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ce,De,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,pe,he.width,he.height,J.depth,0,ce,De,he.data)}else{ze&&Oe&&n.texStorage2D(t.TEXTURE_2D,de,pe,Ie[0].width,Ie[0].height);for(let ee=0,fe=Ie.length;ee<fe;ee++)he=Ie[ee],x.format!==hi?ce!==null?ze?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ce,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,he.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ce,De,he.data):n.texImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,ce,De,he.data)}else if(x.isDataArrayTexture)if(ze){if(Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,pe,J.width,J.height,J.depth),N)if(x.layerUpdates.size>0){const ee=a0(J.width,J.height,x.format,x.type);for(const fe of x.layerUpdates){const me=J.data.subarray(fe*ee/J.data.BYTES_PER_ELEMENT,(fe+1)*ee/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,J.width,J.height,1,ce,De,me)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ce,De,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,ce,De,J.data);else if(x.isData3DTexture)ze?(Oe&&n.texStorage3D(t.TEXTURE_3D,de,pe,J.width,J.height,J.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ce,De,J.data)):n.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,ce,De,J.data);else if(x.isFramebufferTexture){if(Oe)if(ze)n.texStorage2D(t.TEXTURE_2D,de,pe,J.width,J.height);else{let ee=J.width,fe=J.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,pe,ee,fe,0,ce,De,null),ee>>=1,fe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),J.parentNode!==ee){ee.appendChild(J),h.add(x),ee.onpaint=fe=>{const me=fe.changedElements;for(const ie of h)me.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const me=t.RGBA,ie=t.RGBA,ye=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,me,ie,ye,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(ze&&Oe){const ee=Me(Ie[0]);n.texStorage2D(t.TEXTURE_2D,de,pe,ee.width,ee.height)}for(let ee=0,fe=Ie.length;ee<fe;ee++)he=Ie[ee],ze?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce,De,he):n.texImage2D(t.TEXTURE_2D,ee,pe,ce,De,he);x.generateMipmaps=!1}else if(ze){if(Oe){const ee=Me(J);n.texStorage2D(t.TEXTURE_2D,de,pe,ee.width,ee.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,De,J)}else n.texImage2D(t.TEXTURE_2D,0,pe,ce,De,J);d(x)&&m(V),le.__version=oe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Pe(R,x,U){if(x.image.length!==6)return;const V=G(R,x),K=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+U);const oe=i.get(K);if(K.version!==oe.__version||V===!0){n.activeTexture(t.TEXTURE0+U);const le=lt.getPrimaries(lt.workingColorSpace),Z=x.colorSpace===_r?null:lt.getPrimaries(x.colorSpace),J=x.colorSpace===_r||le===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,De=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!ce&&!De?pe[ie]=g(x.image[ie],!0,r.maxCubemapSize):pe[ie]=De?x.image[ie].image:x.image[ie],pe[ie]=Xe(x,pe[ie]);const he=pe[0],Ie=s.convert(x.format,x.colorSpace),ze=s.convert(x.type),Oe=S(x.internalFormat,Ie,ze,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,de=oe.__version===void 0||V===!0,ee=K.dataReady;let fe=T(x,he);ke(t.TEXTURE_CUBE_MAP,x);let me;if(ce){N&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Oe,he.width,he.height);for(let ie=0;ie<6;ie++){me=pe[ie].mipmaps;for(let ye=0;ye<me.length;ye++){const Ae=me[ye];x.format!==hi?Ie!==null?N?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,Ae.width,Ae.height,Ie,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,Oe,Ae.width,Ae.height,0,Ae.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,Ae.width,Ae.height,Ie,ze,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,Oe,Ae.width,Ae.height,0,Ie,ze,Ae.data)}}}else{if(me=x.mipmaps,N&&de){me.length>0&&fe++;const ie=Me(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(De){N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Ie,ze,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,pe[ie].width,pe[ie].height,0,Ie,ze,pe[ie].data);for(let ye=0;ye<me.length;ye++){const Fe=me[ye].image[ie].image;N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,Fe.width,Fe.height,Ie,ze,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,Oe,Fe.width,Fe.height,0,Ie,ze,Fe.data)}}else{N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,ze,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,Ie,ze,pe[ie]);for(let ye=0;ye<me.length;ye++){const Ae=me[ye];N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,Ie,ze,Ae.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,Oe,Ie,ze,Ae.image[ie])}}}d(x)&&m(t.TEXTURE_CUBE_MAP),oe.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function _e(R,x,U,V,K,oe){const le=s.convert(U.format,U.colorSpace),Z=s.convert(U.type),J=S(U.internalFormat,le,Z,U.normalized,U.colorSpace),ce=i.get(x),De=i.get(U);if(De.__renderTarget=x,!ce.__hasExternalTextures){const pe=Math.max(1,x.width>>oe),he=Math.max(1,x.height>>oe);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,oe,J,pe,he,x.depth,0,le,Z,null):n.texImage2D(K,oe,J,pe,he,0,le,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Re(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,K,De.__webglTexture,0,We(x)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,K,De.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,R),x.depthBuffer){const V=x.depthTexture,K=V&&V.isDepthTexture?V.type:null,oe=w(x.stencilBuffer,K),le=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Re(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We(x),oe,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,We(x),oe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,oe,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,R)}else{const V=x.textures;for(let K=0;K<V.length;K++){const oe=V[K],le=s.convert(oe.format,oe.colorSpace),Z=s.convert(oe.type),J=S(oe.internalFormat,le,Z,oe.normalized,oe.colorSpace);Re(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We(x),J,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,We(x),J,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,J,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(R,x,U){const V=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ke(t.TEXTURE_CUBE_MAP,x.depthTexture);const ce=s.convert(x.depthTexture.format),De=s.convert(x.depthTexture.type);let pe;x.depthTexture.format===nr?pe=t.DEPTH_COMPONENT24:x.depthTexture.format===ts&&(pe=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pe,x.width,x.height,0,ce,De,null)}}else F(x.depthTexture,0);const oe=K.__webglTexture,le=We(x),Z=V?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,J=x.depthTexture.format===ts?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===nr)Re(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Z,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,J,Z,oe,0);else if(x.depthTexture.format===ts)Re(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Z,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,J,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(R){const x=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=V}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let V=0;V<6;V++)Se(x.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?Se(x.__webglFramebuffer[0],R,0):Se(x.__webglFramebuffer,R,0)}else if(U){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=t.createRenderbuffer(),be(x.__webglDepthbuffer[V],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),be(x.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(R,x,U){const V=i.get(R);x!==void 0&&_e(V.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&He(R)}function Ce(R){const x=R.texture,U=i.get(R),V=i.get(x);R.addEventListener("dispose",v);const K=R.textures,oe=R.isWebGLCubeRenderTarget===!0,le=K.length>1;if(le||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=x.version,o.memory.textures++),oe){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let J=0;J<x.mipmaps.length;J++)U.__webglFramebuffer[Z][J]=t.createFramebuffer()}else U.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)U.__webglFramebuffer[Z]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(le)for(let Z=0,J=K.length;Z<J;Z++){const ce=i.get(K[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Re(R)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const J=K[Z];U.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);const ce=s.convert(J.format,J.colorSpace),De=s.convert(J.type),pe=S(J.internalFormat,ce,De,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),he=We(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),be(U.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),ke(t.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)_e(U.__webglFramebuffer[Z][J],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else _e(U.__webglFramebuffer[Z],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(x)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let Z=0,J=K.length;Z<J;Z++){const ce=K[Z],De=i.get(ce);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,De.__webglTexture),ke(pe,ce),_e(U.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+Z,pe,0),d(ce)&&m(pe)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,V.__webglTexture),ke(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)_e(U.__webglFramebuffer[J],R,x,t.COLOR_ATTACHMENT0,Z,J);else _e(U.__webglFramebuffer,R,x,t.COLOR_ATTACHMENT0,Z,0);d(x)&&m(Z),n.unbindTexture()}R.depthBuffer&&He(R)}function Ye(R){const x=R.textures;for(let U=0,V=x.length;U<V;U++){const K=x[U];if(d(K)){const oe=M(R),le=i.get(K).__webglTexture;n.bindTexture(oe,le),m(oe),n.unbindTexture()}}}const Je=[],Ke=[];function ut(R){if(R.samples>0){if(Re(R)===!1){const x=R.textures,U=R.width,V=R.height;let K=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),Z=x.length>1;if(Z)for(let ce=0;ce<x.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const De=i.get(x[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,U,V,0,0,U,V,K,t.NEAREST),l===!0&&(Je.length=0,Ke.length=0,Je.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Je.push(oe),Ke.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<x.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const De=i.get(x[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function We(R){return Math.min(r.maxSamples,R.samples)}function Re(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(R){const x=o.render.frame;f.get(R)!==x&&(f.set(R,x),R.update())}function Xe(R,x){const U=R.colorSpace,V=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Hc&&U!==_r&&(lt.getTransfer(U)===gt?(V!==hi||K!==Un)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",U)),x}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=I,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=Be,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tC(t,e){function n(i,r=_r){let s;const o=lt.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===Lp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===A_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===b_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===T_)return t.BYTE;if(i===w_)return t.SHORT;if(i===Da)return t.UNSIGNED_SHORT;if(i===Pp)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===C_)return t.ALPHA;if(i===R_)return t.RGB;if(i===hi)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===ts)return t.DEPTH_STENCIL;if(i===P_)return t.RED;if(i===Ip)return t.RED_INTEGER;if(i===hs)return t.RG;if(i===Np)return t.RG_INTEGER;if(i===Fp)return t.RGBA_INTEGER;if(i===ac||i===lc||i===cc||i===uc)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qf||i===Yf||i===$f||i===Kf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zf||i===Qf||i===Jf||i===eh||i===th||i===zc||i===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zf||i===Qf)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===eh)return s.COMPRESSED_R11_EAC;if(i===th)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zc)return s.COMPRESSED_RG11_EAC;if(i===nh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ih)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xh||i===vh||i===_h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xh)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===Sh||i===Vc||i===Mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ia?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
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

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new z_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ii({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new fu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends gs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,_=null;const E=typeof XRWebGLBinding<"u",g=new rC,d={},m=n.getContextAttributes();let M=null,S=null;const w=[],T=[],C=new rt;let v=null;const b=new Fn;b.viewport=new Pt;const P=new Fn;P.viewport=new Pt;const D=[b,P],k=new pT;let $=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let se=w[G];return se===void 0&&(se=new ad,w[G]=se),se.getTargetRaySpace()},this.getControllerGrip=function(G){let se=w[G];return se===void 0&&(se=new ad,w[G]=se),se.getGripSpace()},this.getHand=function(G){let se=w[G];return se===void 0&&(se=new ad,w[G]=se),se.getHandSpace()};function O(G){const se=T.indexOf(G.inputSource);if(se===-1)return;const ne=w[se];ne!==void 0&&(ne.update(G.inputSource,G.frame,c||o),ne.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",H);for(let G=0;G<w.length;G++){const se=T[G];se!==null&&(T[G]=null,w[G].disconnect(se))}$=null,Q=null,g.reset();for(const G in d)delete d[G];e.setRenderTarget(M),p=null,u=null,h=null,r=null,S=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ue=null,Pe=null;m.depth&&(Pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?ts:nr,ue=m.stencil?Ia:Di);const _e={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(_e),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Li(u.textureWidth,u.textureHeight,{format:hi,type:Un,depthTexture:new Eo(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Li(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(G){for(let se=0;se<G.removed.length;se++){const ne=G.removed[se],ue=T.indexOf(ne);ue>=0&&(T[ue]=null,w[ue].disconnect(ne))}for(let se=0;se<G.added.length;se++){const ne=G.added[se];let ue=T.indexOf(ne);if(ue===-1){for(let _e=0;_e<w.length;_e++)if(_e>=T.length){T.push(ne),ue=_e;break}else if(T[_e]===null){T[_e]=ne,ue=_e;break}if(ue===-1)break}const Pe=w[ue];Pe&&Pe.connect(ne)}}const F=new z,I=new z;function j(G,se,ne){F.setFromMatrixPosition(se.matrixWorld),I.setFromMatrixPosition(ne.matrixWorld);const ue=F.distanceTo(I),Pe=se.projectionMatrix.elements,_e=ne.projectionMatrix.elements,be=Pe[14]/(Pe[10]-1),Se=Pe[14]/(Pe[10]+1),He=(Pe[9]+1)/Pe[5],Be=(Pe[9]-1)/Pe[5],Ce=(Pe[8]-1)/Pe[0],Ye=(_e[8]+1)/_e[0],Je=be*Ce,Ke=be*Ye,ut=ue/(-Ce+Ye),We=ut*-Ce;if(se.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(We),G.translateZ(ut),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Pe[10]===-1)G.projectionMatrix.copy(se.projectionMatrix),G.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Re=be+ut,L=Se+ut,Xe=Je-We,Me=Ke+(ue-We),R=He*Se/L*Re,x=Be*Se/L*Re;G.projectionMatrix.makePerspective(Xe,Me,R,x,Re,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function te(G,se){se===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(se.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let se=G.near,ne=G.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),k.near=P.near=b.near=se,k.far=P.far=b.far=ne,($!==k.near||Q!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),$=k.near,Q=k.far),k.layers.mask=G.layers.mask|6,b.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;const ue=G.parent,Pe=k.cameras;te(k,ue);for(let _e=0;_e<Pe.length;_e++)te(Pe[_e],ue);Pe.length===2?j(k,b,P):k.projectionMatrix.copy(b.projectionMatrix),re(G,k,ue)};function re(G,se,ne){ne===null?G.matrix.copy(se.matrixWorld):(G.matrix.copy(ne.matrixWorld),G.matrix.invert(),G.matrix.multiply(se.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(se.projectionMatrix),G.projectionMatrixInverse.copy(se.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Th*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(G){return d[G]};let Ve=null;function qe(G,se){if(f=se.getViewerPose(c||o),_=se,f!==null){const ne=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ue=!1;ne.length!==k.cameras.length&&(k.cameras.length=0,ue=!0);for(let Se=0;Se<ne.length;Se++){const He=ne[Se];let Be=null;if(p!==null)Be=p.getViewport(He);else{const Ye=h.getViewSubImage(u,He);Be=Ye.viewport,Se===0&&(e.setRenderTargetTextures(S,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(S))}let Ce=D[Se];Ce===void 0&&(Ce=new Fn,Ce.layers.enable(Se),Ce.viewport=new Pt,D[Se]=Ce),Ce.matrix.fromArray(He.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(He.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Be.x,Be.y,Be.width,Be.height),Se===0&&(k.matrix.copy(Ce.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ue===!0&&k.cameras.push(Ce)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const Se=h.getDepthInformation(ne[0]);Se&&Se.isValid&&Se.texture&&g.init(Se,r.renderState)}if(Pe&&Pe.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let Se=0;Se<ne.length;Se++){const He=ne[Se].camera;if(He){let Be=d[He];Be||(Be=new z_,d[He]=Be);const Ce=h.getCameraImage(He);Be.sourceTexture=Ce}}}}for(let ne=0;ne<w.length;ne++){const ue=T[ne],Pe=w[ne];ue!==null&&Pe!==void 0&&Pe.update(ue,se,c||o)}Ve&&Ve(G,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}const ke=new X_;ke.setAnimationLoop(qe),this.setAnimationLoop=function(G){Ve=G},this.dispose=function(){}}}const oC=new Dt,Q_=new $e;Q_.set(-1,0,0,0,1,0,0,0,1);function aC(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,V_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,M,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),E(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,m,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===bn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===bn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const m=e.get(d),M=m.envMap,S=m.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(oC.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Q_),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=M*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){const m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function c(S,w){let T=r[S.id];T===void 0&&(g(S),T=f(S),r[S.id]=T,S.addEventListener("dispose",m));const C=w.program;i.updateUBOMapping(S,C);const v=e.render.frame;s[S.id]!==v&&(u(S),s[S.id]=v)}function f(S){const w=h();S.__bindingPointIndex=w;const T=t.createBuffer(),C=S.__size,v=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=r[S.id],T=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let v=0,b=T.length;v<b;v++){const P=T[v];if(Array.isArray(P))for(let D=0,k=P.length;D<k;D++)p(P[D],v,D,C);else p(P,v,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,w,T,C){if(E(S,w,T,C)===!0){const v=S.__offset,b=S.value;if(Array.isArray(b)){let P=0;for(let D=0;D<b.length;D++){const k=b[D],$=d(k);_(k,S.__data,P),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,S.__data)}}function _(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function E(S,w,T,C){const v=S.value,b=w+"_"+T;if(C[b]===void 0)return typeof v=="number"||typeof v=="boolean"?C[b]=v:ArrayBuffer.isView(v)?C[b]=v.slice():C[b]=v.clone(),!0;{const P=C[b];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(S){const w=S.uniforms;let T=0;const C=16;for(let b=0,P=w.length;b<P;b++){const D=Array.isArray(w[b])?w[b]:[w[b]];for(let k=0,$=D.length;k<$;k++){const Q=D[k],O=Array.isArray(Q.value)?Q.value:[Q.value];for(let q=0,H=O.length;q<H;q++){const F=O[q],I=d(F),j=T%C,te=j%I.boundary,re=j+te;T+=te,re!==0&&C-re<I.storage&&(T+=C-re),Q.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=I.storage}}}const v=T%C;return v>0&&(T+=C-v),S.__size=T,S.__cache={},this}function d(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}const cC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Si=null;function uC(){return Si===null&&(Si=new ZE(cC,16,16,hs,tr),Si.name="DFG_LUT",Si.minFilter=dn,Si.magFilter=dn,Si.wrapS=Xi,Si.wrapT=Xi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class dC{constructor(e={}){const{canvas:n=CE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Un}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const E=p,g=new Set([Fp,Np,Ip]),d=new Set([Un,Di,Da,Ia,Lp,Dp]),m=new Uint32Array(4),M=new Int32Array(4),S=new z;let w=null,T=null;const C=[],v=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,k=null,$=null,Q=null,O=null;this._outputColorSpace=qn;let q=0,H=0,F=null,I=-1,j=null;const te=new Pt,re=new Pt;let Ve=null;const qe=new it(0);let ke=0,G=n.width,se=n.height,ne=1,ue=null,Pe=null;const _e=new Pt(0,0,G,se),be=new Pt(0,0,G,se);let Se=!1;const He=new zp;let Be=!1,Ce=!1;const Ye=new Dt,Je=new z,Ke=new Pt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Re(){return F===null?ne:1}let L=i;function Xe(A,B){return n.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rp}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",Ze,!1),n.addEventListener("webglcontextcreationerror",ni,!1),L===null){const B="webgl2";if(L=Xe(B,A),L===null)throw Xe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw ht("WebGLRenderer: "+A.message),A}let Me,R,x,U,V,K,oe,le,Z,J,ce,De,pe,he,Ie,ze,Oe,N,de,ee,fe,me,ie;function ye(){Me=new ub(L),Me.init(),fe=new tC(L,Me),R=new nb(L,Me,e,fe),x=new J2(L,Me),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),$=L.createFramebuffer(),Q=L.createFramebuffer(),O=L.createFramebuffer(),U=new hb(L),V=new B2,K=new eC(L,Me,x,V,R,fe,U),oe=new cb(P),le=new xT(L),me=new eb(L,le),Z=new db(L,le,U,me),J=new mb(L,Z,le,me,U),N=new pb(L,R,K),Ie=new ib(V),ce=new k2(P,oe,Me,R,me,Ie),De=new aC(P,V),pe=new V2,he=new q2(Me),Oe=new JA(P,oe,x,J,_,l),ze=new Q2(P,J,R),ie=new lC(L,U,R,x),de=new tb(L,Me,U),ee=new fb(L,Me,U),U.programs=ce.programs,P.capabilities=R,P.extensions=Me,P.properties=V,P.renderLists=pe,P.shadowMap=ze,P.state=x,P.info=U}ye(),E!==Un&&(b=new xb(E,n.width,n.height,a,r,s));const Ae=new sC(P,L);this.xr=Ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(G,se,!1))},this.getSize=function(A){return A.set(G,se)},this.setSize=function(A,B,Y=!0){if(Ae.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,se=B,n.width=Math.floor(A*ne),n.height=Math.floor(B*ne),Y===!0&&(n.style.width=A+"px",n.style.height=B+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(G*ne,se*ne).floor()},this.setDrawingBufferSize=function(A,B,Y){G=A,se=B,ne=Y,n.width=Math.floor(A*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(E===Un){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,B,Y,W){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,B,Y,W),x.viewport(te.copy(_e).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,B,Y,W){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,B,Y,W),x.scissor(re.copy(be).multiplyScalar(ne).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){x.setScissorTest(Se=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){Pe=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Y=!0){let W=0;if(A){let X=!1;if(F!==null){const ve=F.texture.format;X=g.has(ve)}if(X){const ve=F.texture.type,Te=d.has(ve),xe=Oe.getClearColor(),Le=Oe.getClearAlpha(),Ne=xe.r,Qe=xe.g,nt=xe.b;Te?(m[0]=Ne,m[1]=Qe,m[2]=nt,m[3]=Le,L.clearBufferuiv(L.COLOR,0,m)):(M[0]=Ne,M[1]=Qe,M[2]=nt,M[3]=Le,L.clearBufferiv(L.COLOR,0,M))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",Ze,!1),n.removeEventListener("webglcontextcreationerror",ni,!1),Oe.dispose(),pe.dispose(),he.dispose(),V.dispose(),oe.dispose(),J.dispose(),me.dispose(),ie.dispose(),ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Zp),Ae.removeEventListener("sessionend",Qp),zr.stop()};function Fe(A){A.preventDefault(),Og("WebGLRenderer: Context Lost."),D=!0}function Ze(){Og("WebGLRenderer: Context Restored."),D=!1;const A=U.autoReset,B=ze.enabled,Y=ze.autoUpdate,W=ze.needsUpdate,X=ze.type;ye(),U.autoReset=A,ze.enabled=B,ze.autoUpdate=Y,ze.needsUpdate=W,ze.type=X}function ni(A){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Rn(A){const B=A.target;B.removeEventListener("dispose",Rn),J_(B)}function J_(A){ey(A),V.remove(A)}function ey(A){const B=V.get(A).programs;B!==void 0&&(B.forEach(function(Y){ce.releaseProgram(Y)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,W,X,ve){B===null&&(B=ut);const Te=X.isMesh&&X.matrixWorld.determinantAffine()<0,xe=iy(A,B,Y,W,X);x.setMaterial(W,Te);let Le=Y.index,Ne=1;if(W.wireframe===!0){if(Le=Z.getWireframeAttribute(Y),Le===void 0)return;Ne=2}const Qe=Y.drawRange,nt=Y.attributes.position;let Ue=Qe.start*Ne,vt=(Qe.start+Qe.count)*Ne;ve!==null&&(Ue=Math.max(Ue,ve.start*Ne),vt=Math.min(vt,(ve.start+ve.count)*Ne)),Le!==null?(Ue=Math.max(Ue,0),vt=Math.min(vt,Le.count)):nt!=null&&(Ue=Math.max(Ue,0),vt=Math.min(vt,nt.count));const Ut=vt-Ue;if(Ut<0||Ut===1/0)return;me.setup(X,W,xe,Y,Le);let Nt,yt=de;if(Le!==null&&(Nt=le.get(Le),yt=ee,yt.setIndex(Nt)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*Re()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(X.isLine){let nn=W.linewidth;nn===void 0&&(nn=1),x.setLineWidth(nn*Re()),X.isLineSegments?yt.setMode(L.LINES):X.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else X.isPoints?yt.setMode(L.POINTS):X.isSprite&&yt.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))yt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const nn=X._multiDrawStarts,Ee=X._multiDrawCounts,Pn=X._multiDrawCount,ft=Le?le.get(Le).bytesPerElement:1,Gn=V.get(W).currentProgram.getUniforms();for(let xi=0;xi<Pn;xi++)Gn.setValue(L,"_gl_DrawID",xi),yt.render(nn[xi]/ft,Ee[xi])}else if(X.isInstancedMesh)yt.renderInstances(Ue,Ut,X.count);else if(Y.isInstancedBufferGeometry){const nn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ee=Math.min(Y.instanceCount,nn);yt.renderInstances(Ue,Ut,Ee)}else yt.render(Ue,Ut)};function Kp(A,B,Y){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,Wa(A,B,Y),A.side=Nr,A.needsUpdate=!0,Wa(A,B,Y),A.side=wi):Wa(A,B,Y)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),T=he.get(Y),T.init(B),v.push(T),Y.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();const W=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ve=X.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const xe=ve[Te];Kp(xe,Y,X),W.add(xe)}else Kp(ve,Y,X),W.add(ve)}),T=v.pop(),W},this.compileAsync=function(A,B,Y=null){const W=this.compile(A,B,Y);return new Promise(X=>{function ve(){if(W.forEach(function(Te){V.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){X(A);return}setTimeout(ve,10)}Me.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let mu=null;function ty(A){mu&&mu(A)}function Zp(){zr.stop()}function Qp(){zr.start()}const zr=new X_;zr.setAnimationLoop(ty),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(A){mu=A,Ae.setAnimationLoop(A),A===null?zr.stop():zr.start()},Ae.addEventListener("sessionstart",Zp),Ae.addEventListener("sessionend",Qp),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(A,B);const Y=Ae.enabled===!0&&Ae.isPresenting===!0,W=b!==null&&(F===null||Y)&&b.begin(P,F);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(B),B=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,B,F),T=he.get(A,v.length),T.init(B),T.state.textureUnits=K.getTextureUnits(),v.push(T),Ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),He.setFromProjectionMatrix(Ye,bi,B.reversedDepth),Ce=this.localClippingEnabled,Be=Ie.init(this.clippingPlanes,Ce),w=pe.get(A,C.length),w.init(),C.push(w),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&gu(Te,B,-1/0,P.sortObjects)}gu(A,B,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(ue,Pe,B.reversedDepth),We=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,We&&Oe.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&Ie.beginShadows();const X=T.state.shadowsArray;if(ze.render(X,A,B),Be===!0&&Ie.endShadows(),(W&&b.hasRenderPass())===!1){const Te=w.opaque,xe=w.transmissive;if(T.setupLights(),B.isArrayCamera){const Le=B.cameras;if(xe.length>0)for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const nt=Le[Ne];em(Te,xe,A,nt)}We&&Oe.render(A);for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const nt=Le[Ne];Jp(w,A,nt,nt.viewport)}}else xe.length>0&&em(Te,xe,A,B),We&&Oe.render(A),Jp(w,A,B)}F!==null&&H===0&&(K.updateMultisampleRenderTarget(F),K.updateRenderTargetMipmap(F)),W&&b.end(P),A.isScene===!0&&A.onAfterRender(P,A,B),me.resetDefaultState(),I=-1,j=null,v.pop(),v.length>0?(T=v[v.length-1],K.setTextureUnits(T.state.textureUnits),Be===!0&&Ie.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,k!==null&&k.renderEnd()};function gu(A,B,Y,W){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||He.intersectsSprite(A)){W&&Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ye);const Te=J.update(A),xe=A.material;xe.visible&&w.push(A,Te,xe,Y,Ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||He.intersectsObject(A))){const Te=J.update(A),xe=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ke.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ke.copy(Te.boundingSphere.center)),Ke.applyMatrix4(A.matrixWorld).applyMatrix4(Ye)),Array.isArray(xe)){const Le=Te.groups;for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const nt=Le[Ne],Ue=xe[nt.materialIndex];Ue&&Ue.visible&&w.push(A,Te,Ue,Y,Ke.z,nt)}}else xe.visible&&w.push(A,Te,xe,Y,Ke.z,null)}}const ve=A.children;for(let Te=0,xe=ve.length;Te<xe;Te++)gu(ve[Te],B,Y,W)}function Jp(A,B,Y,W){const{opaque:X,transmissive:ve,transparent:Te}=A;T.setupLightsView(Y),Be===!0&&Ie.setGlobalState(P.clippingPlanes,Y),W&&x.viewport(te.copy(W)),X.length>0&&Ga(X,B,Y),ve.length>0&&Ga(ve,B,Y),Te.length>0&&Ga(Te,B,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function em(A,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Ue=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Li(1,1,{generateMipmaps:!0,type:Ue?tr:Un,minFilter:es,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const ve=T.state.transmissionRenderTarget[W.id],Te=W.viewport||te;ve.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);const xe=P.getRenderTarget(),Le=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(qe),ke=P.getClearAlpha(),ke<1&&P.setClearColor(16777215,.5),P.clear(),We&&Oe.render(Y);const Qe=P.toneMapping;P.toneMapping=Pi;const nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Be===!0&&Ie.setGlobalState(P.clippingPlanes,W),Ga(A,Y,W),K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let vt=0,Ut=B.length;vt<Ut;vt++){const Nt=B[vt],{object:yt,geometry:nn,material:Ee,group:Pn}=Nt;if(Ee.side===wi&&yt.layers.test(W.layers)){const ft=Ee.side;Ee.side=bn,Ee.needsUpdate=!0,tm(yt,Y,W,nn,Ee,Pn),Ee.side=ft,Ee.needsUpdate=!0,Ue=!0}}Ue===!0&&(K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve))}P.setRenderTarget(xe,Le,Ne),P.setClearColor(qe,ke),nt!==void 0&&(W.viewport=nt),P.toneMapping=Qe}function Ga(A,B,Y){const W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,ve=A.length;X<ve;X++){const Te=A[X],{object:xe,geometry:Le,group:Ne}=Te;let Qe=Te.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),xe.layers.test(Y.layers)&&tm(xe,B,Y,Le,Qe,Ne)}}function tm(A,B,Y,W,X,ve){A.onBeforeRender(P,B,Y,W,X,ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(P,B,Y,W,A,ve),X.transparent===!0&&X.side===wi&&X.forceSinglePass===!1?(X.side=bn,X.needsUpdate=!0,P.renderBufferDirect(Y,B,W,X,A,ve),X.side=Nr,X.needsUpdate=!0,P.renderBufferDirect(Y,B,W,X,A,ve),X.side=wi):P.renderBufferDirect(Y,B,W,X,A,ve),A.onAfterRender(P,B,Y,W,X,ve)}function Wa(A,B,Y){B.isScene!==!0&&(B=ut);const W=V.get(A),X=T.state.lights,ve=T.state.shadowsArray,Te=X.state.version,xe=ce.getParameters(A,X.state,ve,B,Y,T.state.lightProbeGridArray),Le=ce.getProgramCacheKey(xe);let Ne=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=oe.get(A.envMap||W.environment,Qe),W.envMapRotation=W.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",Rn),Ne=new Map,W.programs=Ne);let nt=Ne.get(Le);if(nt!==void 0){if(W.currentProgram===nt&&W.lightsStateVersion===Te)return im(A,xe),nt}else xe.uniforms=ce.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,Y,xe),A.onBeforeCompile(xe,P),nt=ce.acquireProgram(xe,Le),Ne.set(Le,nt),W.uniforms=xe.uniforms;const Ue=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=Ie.uniform),im(A,xe),W.needsLights=sy(A),W.lightsStateVersion=Te,W.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=nt,W.uniformsList=null,nt}function nm(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=dc.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function im(A,B){const Y=V.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function ny(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let Y=0,W=A.length;Y<W;Y++){const X=A[Y];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function iy(A,B,Y,W,X){B.isScene!==!0&&(B=ut),K.resetTextureUnits();const ve=B.fog,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,xe=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:lt.workingColorSpace,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=oe.get(W.envMap||Te,Le),Qe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,nt=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Ut=!!Y.morphAttributes.color;let Nt=Pi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Nt=P.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nn=yt!==void 0?yt.length:0,Ee=V.get(W),Pn=T.state.lights;if(Be===!0&&(Ce===!0||A!==j)){const Mt=A===j&&W.id===I;Ie.setState(W,A,Mt)}let ft=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Pn.state.version||Ee.outputColorSpace!==xe||X.isBatchedMesh&&Ee.batching===!1||!X.isBatchedMesh&&Ee.batching===!0||X.isBatchedMesh&&Ee.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ee.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ee.instancing===!1||!X.isInstancedMesh&&Ee.instancing===!0||X.isSkinnedMesh&&Ee.skinning===!1||!X.isSkinnedMesh&&Ee.skinning===!0||X.isInstancedMesh&&Ee.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ee.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ee.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ee.instancingMorph===!1&&X.morphTexture!==null||Ee.envMap!==Ne||W.fog===!0&&Ee.fog!==ve||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ie.numPlanes||Ee.numIntersection!==Ie.numIntersection)||Ee.vertexAlphas!==Qe||Ee.vertexTangents!==nt||Ee.morphTargets!==Ue||Ee.morphNormals!==vt||Ee.morphColors!==Ut||Ee.toneMapping!==Nt||Ee.morphTargetsCount!==nn||!!Ee.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ee.__version=W.version);let Gn=Ee.currentProgram;ft===!0&&(Gn=Wa(W,B,X),k&&W.isNodeMaterial&&k.onUpdateProgram(W,Gn,Ee));let xi=!1,rr=!1,xs=!1;const St=Gn.getUniforms(),Ot=Ee.uniforms;if(x.useProgram(Gn.program)&&(xi=!0,rr=!0,xs=!0),W.id!==I&&(I=W.id,rr=!0),Ee.needsLights){const Mt=ny(T.state.lightProbeGridArray,X);Ee.lightProbeGrid!==Mt&&(Ee.lightProbeGrid=Mt,rr=!0)}if(xi||j!==A){x.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",A.projectionMatrix),St.setValue(L,"viewMatrix",A.matrixWorldInverse);const or=St.map.cameraPosition;or!==void 0&&or.setValue(L,Je.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,rr=!0,xs=!0)}if(Ee.needsLights&&(Pn.state.directionalShadowMap.length>0&&St.setValue(L,"directionalShadowMap",Pn.state.directionalShadowMap,K),Pn.state.spotShadowMap.length>0&&St.setValue(L,"spotShadowMap",Pn.state.spotShadowMap,K),Pn.state.pointShadowMap.length>0&&St.setValue(L,"pointShadowMap",Pn.state.pointShadowMap,K)),X.isSkinnedMesh){St.setOptional(L,X,"bindMatrix"),St.setOptional(L,X,"bindMatrixInverse");const Mt=X.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),St.setValue(L,"boneTexture",Mt.boneTexture,K))}X.isBatchedMesh&&(St.setOptional(L,X,"batchingTexture"),St.setValue(L,"batchingTexture",X._matricesTexture,K),St.setOptional(L,X,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",X._indirectTexture,K),St.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",X._colorsTexture,K));const sr=Y.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&N.update(X,Y,Gn),(rr||Ee.receiveShadow!==X.receiveShadow)&&(Ee.receiveShadow=X.receiveShadow,St.setValue(L,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Ot.envMapIntensity.value=B.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=uC()),rr){if(St.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&ry(Ot,xs),ve&&W.fog===!0&&De.refreshFogUniforms(Ot,ve),De.refreshMaterialUniforms(Ot,W,ne,se,T.state.transmissionRenderTarget[A.id]),Ee.needsLights&&Ee.lightProbeGrid){const Mt=Ee.lightProbeGrid;Ot.probesSH.value=Mt.texture,Ot.probesMin.value.copy(Mt.boundingBox.min),Ot.probesMax.value.copy(Mt.boundingBox.max),Ot.probesResolution.value.copy(Mt.resolution)}dc.upload(L,nm(Ee),Ot,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(dc.upload(L,nm(Ee),Ot,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(L,"center",X.center),St.setValue(L,"modelViewMatrix",X.modelViewMatrix),St.setValue(L,"normalMatrix",X.normalMatrix),St.setValue(L,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const Mt=W.uniformsGroups;for(let or=0,vs=Mt.length;or<vs;or++){const rm=Mt[or];ie.update(rm,Gn),ie.bind(rm,Gn)}}return Gn}function ry(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function sy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,B,Y){const W=V.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),V.get(A.texture).__webglTexture=B,V.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const Y=V.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Y=0){F=A,q=B,H=Y;let W=null,X=!1,ve=!1;if(A){const xe=V.get(A);if(xe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,xe.__webglFramebuffer),te.copy(A.viewport),re.copy(A.scissor),Ve=A.scissorTest,x.viewport(te),x.scissor(re),x.setScissorTest(Ve),I=-1;return}else if(xe.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(xe.__hasExternalTextures)K.rebindTextures(A,V.get(A.texture).__webglTexture,V.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(xe.__boundDepthTexture!==Qe){if(Qe!==null&&V.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ve=!0);const Ne=V.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?W=Ne[B][Y]:W=Ne[B],X=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?W=V.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[Y]:W=Ne,te.copy(A.viewport),re.copy(A.scissor),Ve=A.scissorTest}else te.copy(_e).multiplyScalar(ne).floor(),re.copy(be).multiplyScalar(ne).floor(),Ve=Se;if(Y!==0&&(W=$),x.bindFramebuffer(L.FRAMEBUFFER,W)&&x.drawBuffers(A,W),x.viewport(te),x.scissor(re),x.setScissorTest(Ve),X){const xe=V.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,Y)}else if(ve){const xe=B;for(let Le=0;Le<A.textures.length;Le++){const Ne=V.get(A.textures[Le]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,Y,xe)}}else if(A!==null&&Y!==0){const xe=V.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,Y)}I=-1},this.readRenderTargetPixels=function(A,B,Y,W,X,ve,Te,xe=0){if(!(A&&A.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=V.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){x.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Ne=A.textures[xe],Qe=Ne.format,nt=Ne.type;if(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(Qe)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(nt)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-W&&Y>=0&&Y<=A.height-X&&L.readPixels(B,Y,W,X,fe.convert(Qe),fe.convert(nt),ve)}finally{const Ne=F!==null?V.get(F).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,B,Y,W,X,ve,Te,xe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=V.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le)if(B>=0&&B<=A.width-W&&Y>=0&&Y<=A.height-X){x.bindFramebuffer(L.FRAMEBUFFER,Le);const Ne=A.textures[xe],Qe=Ne.format,nt=Ne.type;if(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,ve.byteLength,L.STREAM_READ),L.readPixels(B,Y,W,X,fe.convert(Qe),fe.convert(nt),0);const vt=F!==null?V.get(F).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,vt);const Ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await RE(L,Ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ve),L.deleteBuffer(Ue),L.deleteSync(Ut),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Y=0){const W=Math.pow(2,-Y),X=Math.floor(A.image.width*W),ve=Math.floor(A.image.height*W),Te=B!==null?B.x:0,xe=B!==null?B.y:0;K.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Te,xe,X,ve),x.unbindTexture()},this.copyTextureToTexture=function(A,B,Y=null,W=null,X=0,ve=0){let Te,xe,Le,Ne,Qe,nt,Ue,vt,Ut;const Nt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(Y!==null)Te=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Qe=Y.min.y,nt=Y.isBox3?Y.min.z:0;else{const Ot=Math.pow(2,-X);Te=Math.floor(Nt.width*Ot),xe=Math.floor(Nt.height*Ot),A.isDataArrayTexture?Le=Nt.depth:A.isData3DTexture?Le=Math.floor(Nt.depth*Ot):Le=1,Ne=0,Qe=0,nt=0}W!==null?(Ue=W.x,vt=W.y,Ut=W.z):(Ue=0,vt=0,Ut=0);const yt=fe.convert(B.format),nn=fe.convert(B.type);let Ee;B.isData3DTexture?(K.setTexture3D(B,0),Ee=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Ee=L.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Ee=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Pn=x.getParameter(L.UNPACK_ROW_LENGTH),ft=x.getParameter(L.UNPACK_IMAGE_HEIGHT),Gn=x.getParameter(L.UNPACK_SKIP_PIXELS),xi=x.getParameter(L.UNPACK_SKIP_ROWS),rr=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,Nt.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nt.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),x.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),x.pixelStorei(L.UNPACK_SKIP_IMAGES,nt);const xs=A.isDataArrayTexture||A.isData3DTexture,St=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const Ot=V.get(A),sr=V.get(B),Mt=V.get(Ot.__renderTarget),or=V.get(sr.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,Mt.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let vs=0;vs<Le;vs++)xs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(A).__webglTexture,X,nt+vs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(B).__webglTexture,ve,Ut+vs)),L.blitFramebuffer(Ne,Qe,Te,xe,Ue,vt,Te,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||V.has(A)){const Ot=V.get(A),sr=V.get(B);x.bindFramebuffer(L.READ_FRAMEBUFFER,Q),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let Mt=0;Mt<Le;Mt++)xs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,X,nt+Mt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,X),St?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sr.__webglTexture,ve,Ut+Mt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sr.__webglTexture,ve),X!==0?L.blitFramebuffer(Ne,Qe,Te,xe,Ue,vt,Te,xe,L.COLOR_BUFFER_BIT,L.NEAREST):St?L.copyTexSubImage3D(Ee,ve,Ue,vt,Ut+Mt,Ne,Qe,Te,xe):L.copyTexSubImage2D(Ee,ve,Ue,vt,Ne,Qe,Te,xe);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else St?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ee,ve,Ue,vt,Ut,Te,xe,Le,yt,nn,Nt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,ve,Ue,vt,Ut,Te,xe,Le,yt,Nt.data):L.texSubImage3D(Ee,ve,Ue,vt,Ut,Te,xe,Le,yt,nn,Nt):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ve,Ue,vt,Te,xe,yt,nn,Nt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ve,Ue,vt,Nt.width,Nt.height,yt,Nt.data):L.texSubImage2D(L.TEXTURE_2D,ve,Ue,vt,Te,xe,yt,nn,Nt);x.pixelStorei(L.UNPACK_ROW_LENGTH,Pn),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Gn),x.pixelStorei(L.UNPACK_SKIP_ROWS,xi),x.pixelStorei(L.UNPACK_SKIP_IMAGES,rr),ve===0&&B.generateMipmaps&&L.generateMipmap(Ee),x.unbindTexture()},this.initRenderTarget=function(A){V.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),x.unbindTexture()},this.resetState=function(){q=0,H=0,F=null,x.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}const fC=({className:t="",height:e="320px",accentColor:n="#00f0ff",modelId:i="qwen3.5",vramText:r="6.6 GB",speedText:s="92 tok/s"})=>{var h,u;const o=st.useRef(null),[a,l]=st.useState([{x:0,y:0,visible:!1},{x:0,y:0,visible:!1}]),c=st.useRef(n);c.current=n;const f=st.useRef(i);return f.current=i,st.useEffect(()=>{const p=o.current;if(!p)return;const _=p.clientWidth||400,E=p.clientHeight||320,g=new XE,d=new Fn(45,_/E,.1,1e3);d.position.z=6.5;const m=new dC({alpha:!0,antialias:!0});m.setSize(_,E),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.appendChild(m.domElement);const M=new na;g.add(M);const S=new Hp(1.1,3),w=new Td({color:new it(c.current),wireframe:!0,emissive:new it(c.current),emissiveIntensity:.8,roughness:.2,metalness:.9}),T=new kn(S,w);M.add(T);const C=new Wp(1.6,.22,128,16,2,3),v=new Td({color:7340287,wireframe:!0,emissive:4718762,emissiveIntensity:.6,transparent:!0,opacity:.7}),b=new kn(C,v);M.add(b);const P=new Vp(2.3,0),D=new Td({color:16711850,wireframe:!0,transparent:!0,opacity:.4}),k=new kn(P,D);M.add(k);const $=300,Q=new Cn,O=new Float32Array($*3),q=new Float32Array($*3);for(let Re=0;Re<$;Re++){const L=2.6+Math.random()*.9,Xe=Math.random()*Math.PI*2,Me=(Math.random()-.5)*Math.PI*.6;O[Re*3]=L*Math.cos(Xe)*Math.cos(Me),O[Re*3+1]=L*Math.sin(Me),O[Re*3+2]=L*Math.sin(Xe)*Math.cos(Me);const R=new it(c.current);q[Re*3]=R.r,q[Re*3+1]=R.g,q[Re*3+2]=R.b}Q.setAttribute("position",new Jn(O,3)),Q.setAttribute("color",new Jn(q,3));const H=new k_({size:.06,vertexColors:!0,transparent:!0,opacity:.85,blending:Ff}),F=new tT(Q,H);M.add(F);const I=new Gp(.1,.15,64),j=new Bp({color:new it(c.current),side:wi,transparent:!0,opacity:0}),te=new kn(I,j);te.rotation.x=Math.PI/2,g.add(te);let re=!1,Ve=.1,qe=1;const ke=new fT(16777215,.4);g.add(ke);const G=new s0(61695,3,20);G.position.set(4,4,5),g.add(G);const se=new s0(16711850,3,20);se.position.set(-4,-4,-3),g.add(se);let ne=0,ue=0,Pe=0,_e=0;const be=Re=>{const L=p.getBoundingClientRect(),Xe=(Re.clientX-L.left)/p.clientWidth*2-1,Me=-((Re.clientY-L.top)/p.clientHeight*2-1);ue=Xe*.9,ne=Me*.9},Se=()=>{re=!0,Ve=.1,qe=1},He=m.domElement;window.addEventListener("mousemove",be),He.addEventListener("click",Se);let Be;const Ce=new mT,Ye=new z(1.8,1.2,0),Je=new z(-1.8,-1.2,0),Ke=()=>{Be=requestAnimationFrame(Ke);const Re=Ce.getElapsedTime(),L=new it(c.current);w.color.lerp(L,.05),w.emissive.lerp(L,.05),G.color.lerp(L,.05),j.color.lerp(L,.05),Pe+=(ne-Pe)*.06,_e+=(ue-_e)*.06,M.rotation.x=Pe+Math.sin(Re*.5)*.1,M.rotation.y=_e+Re*.25,T.rotation.y=-Re*.6,b.rotation.x=Re*.5,b.rotation.z=Re*.3,k.rotation.y=Re*.2,F.rotation.y=Re*.12,M.position.y=Math.sin(Re*1.5)*.15,re&&(Ve+=.18,qe-=.04,te.scale.set(Ve,Ve,1),j.opacity=Math.max(0,qe),qe<=0&&(re=!1));const Xe=Ye.clone().applyMatrix4(M.matrixWorld).project(d),Me=Je.clone().applyMatrix4(M.matrixWorld).project(d),R=x=>({x:(x.x+1)*_/2,y:(-x.y+1)*E/2,visible:x.z<1});l([R(Xe),R(Me)]),m.render(g,d)};Ke();const ut=()=>{if(!p)return;const Re=p.clientWidth,L=p.clientHeight;d.aspect=Re/L,d.updateProjectionMatrix(),m.setSize(Re,L)},We=new ResizeObserver(()=>ut());return We.observe(p),()=>{window.removeEventListener("mousemove",be),He.removeEventListener("click",Se),cancelAnimationFrame(Be),We.disconnect(),p.contains(m.domElement)&&p.removeChild(m.domElement),S.dispose(),w.dispose(),C.dispose(),v.dispose(),P.dispose(),D.dispose(),Q.dispose(),H.dispose(),I.dispose(),j.dispose(),m.dispose()}},[]),y.jsxs("div",{ref:o,className:`cyber-core-3d-container ${t}`,style:{width:"100%",height:typeof e=="number"?`${e}px`:e,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",cursor:"pointer"},children:[((h=a[0])==null?void 0:h.visible)&&y.jsxs("div",{style:{position:"absolute",left:`${a[0].x}px`,top:`${a[0].y}px`,transform:"translate(-50%, -100%)",pointerEvents:"none",background:"rgba(5, 5, 8, 0.85)",border:`1px solid ${n}`,color:n,padding:"3px 8px",borderRadius:"6px",fontSize:"0.7rem",fontFamily:"monospace",boxShadow:`0 0 12px ${n}44`,transition:"border 0.3s ease"},children:["⚡ ",s]}),((u=a[1])==null?void 0:u.visible)&&y.jsxs("div",{style:{position:"absolute",left:`${a[1].x}px`,top:`${a[1].y}px`,transform:"translate(-50%, 0)",pointerEvents:"none",background:"rgba(5, 5, 8, 0.85)",border:`1px solid ${n}`,color:"#FFFFFF",padding:"3px 8px",borderRadius:"6px",fontSize:"0.7rem",fontFamily:"monospace",boxShadow:"0 0 12px rgba(255, 255, 255, 0.2)"},children:["💾 VRAM: ",r]})]})},hC=[{id:"custom-ollama",name:"Any Local Agent (Your Choice via Ollama)",tag:"ollama pull <any-model>",vram:"Configurable",vramPct:35,speed:"120 tok/s",latency:"2.8 ms",purpose:"Choose Any Agent Model (DeepSeek, Llama 3, Qwen, Mistral, Gemma, Phi)",accent:"#3B82F6"},{id:"code-agent",name:"Code Synthesis Agent",tag:"qwen2.5-coder / deepseek-coder",vram:"4.7 GB",vramPct:39,speed:"118 tok/s",latency:"3.2 ms",purpose:"Full-Stack Code Synthesis & AST Verification",accent:"#10B981"},{id:"vision-agent",name:"GUI Perception Agent",tag:"llama3.2-vision / moondream",vram:"7.8 GB",vramPct:65,speed:"64 tok/s",latency:"6.1 ms",purpose:"Screen Bounding Box Detection & GUI Automation",accent:"#8B5CF6"},{id:"fast-auditor",name:"Fast Auditor Micro Agent",tag:"1.5B - 3B Lightweight Models",vram:"1.2 GB",vramPct:10,speed:"185 tok/s",latency:"1.5 ms",purpose:"Sub-second Syntax & Logic Self-Healer",accent:"#F59E0B"},{id:"cloud-vault",name:"Cloud Provider Vault (Optional)",tag:"OpenAI / Gemini / Groq / Anthropic",vram:"0 GB Local",vramPct:0,speed:"200 tok/s",latency:"1.2 ms",purpose:"Offload Inference to Cloud API Keys in Encrypted Vault",accent:"#EC4899"}],pC=({detectedOS:t,isMobile:e,onDownloadClick:n})=>{const[i,r]=st.useState(!1),[s,o]=st.useState("powershell"),[a,l]=st.useState(hC[0]),c={powershell:'powershell -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.ps1 | iex"',ollama:"ollama pull <any-agent-model-of-your-choice>",batch:"start_meridian.bat",winget:"winget install Aryan.MeridianX"};st.useEffect(()=>{const h=setTimeout(()=>{const u=document.querySelector(".hero-anim-logo"),p=document.querySelectorAll(".hero-anim-item");u&&Nf(u,{scale:[.4,1],opacity:[0,1],duration:900,ease:"outExpo"}),p.length>0&&Nf(p,{translateY:[24,0],opacity:[0,1],delay:YM(110),duration:800,ease:"outExpo"})},50);return()=>clearTimeout(h)},[]);const f=()=>{navigator.clipboard.writeText(c[s]),r(!0),setTimeout(()=>r(!1),2e3)};return y.jsx("section",{style:{paddingTop:"160px",paddingBottom:"90px",position:"relative",zIndex:1,overflow:"hidden"},children:y.jsx("div",{className:"container",children:y.jsxs("div",{style:{textAlign:"center",maxWidth:"880px",margin:"0 auto"},children:[y.jsx("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:y.jsx(fC,{height:280,accentColor:a.accent,modelId:a.id,vramText:a.vram,speedText:a.speed})}),y.jsxs("div",{className:"hero-anim-item",style:{marginBottom:"16px",color:"var(--text-muted)",fontSize:"0.95rem",fontWeight:600,letterSpacing:"0.04em"},children:["Sovereign Offline AI Agent created by ",y.jsx("strong",{style:{color:"#FFF"},children:"Aryan"})]}),y.jsxs("h1",{className:"hero-anim-item",style:{fontSize:"clamp(2.5rem, 5vw, 4.2rem)",lineHeight:1.1,marginBottom:"20px",fontWeight:800},children:["A Cognitive Layer for ",y.jsx("br",{}),y.jsx("span",{className:"gradient-text-cyan",children:"Your Desktop OS."})]}),y.jsxs("p",{className:"hero-anim-item",style:{fontSize:"clamp(1.05rem, 2vw, 1.25rem)",color:"var(--text-muted)",marginBottom:"32px",maxWidth:"740px",margin:"0 auto 36px auto",lineHeight:1.6},children:[y.jsx("strong",{style:{color:"#FFF"},children:"Local execution. Total privacy. Absolute autonomy."}),y.jsx("br",{}),"Run continuous ReAct agentic loops locally with 100% data privacy. Powered by local LLMs via Ollama, vector RAG memory, and sub-10ms system overlay."]}),y.jsxs("div",{className:"hero-anim-item",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"16px",marginBottom:"28px"},children:[y.jsxs("button",{onClick:n,className:"btn-primary",style:{padding:"16px 32px",fontSize:"1.05rem"},children:[y.jsx(Jr,{size:20}),y.jsxs("span",{children:["Download Desktop App (",t,")"]})]}),y.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",style:{padding:"16px 28px",fontSize:"1.05rem"},children:[y.jsx(jv,{size:20}),y.jsx("span",{children:"Star on GitHub"})]})]}),e&&y.jsxs("div",{style:{background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",borderRadius:"12px",padding:"12px 20px",marginBottom:"28px",fontSize:"0.9rem",color:"var(--amber-accent)",display:"inline-block"},children:["💻 ",y.jsx("strong",{children:"Desktop OS Required:"})," Meridian-X runs exclusively on Windows, macOS, and Linux. Star on GitHub to setup on your computer!"]}),y.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:"8px",background:"rgba(12, 12, 16, 0.95)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",padding:"12px 18px",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.8)",maxWidth:"680px",width:"100%"},children:[y.jsx("div",{style:{display:"flex",gap:"6px",width:"100%",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",paddingBottom:"8px"},children:["powershell","ollama","batch","winget"].map(h=>y.jsx("button",{onClick:()=>o(h),style:{background:s===h?"rgba(255, 255, 255, 0.1)":"transparent",border:"1px solid",borderColor:s===h?"rgba(255, 255, 255, 0.25)":"transparent",color:s===h?"#FFFFFF":"var(--text-dim)",borderRadius:"6px",padding:"4px 10px",fontSize:"0.75rem",fontFamily:"var(--font-code)",cursor:"pointer",textTransform:"uppercase",fontWeight:600,transition:"all 0.2s ease"},children:h},h))}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",gap:"12px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontFamily:"var(--font-code)",fontSize:"0.82rem",color:"#E4E4E7",overflowX:"auto"},children:[y.jsx(Yv,{size:14,color:"#FAFAFA"}),y.jsx("span",{children:c[s]})]}),y.jsx("button",{onClick:f,style:{background:"transparent",border:"none",color:i?"#10B981":"var(--text-muted)",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},title:"Copy shell install command",children:i?y.jsx(Mp,{size:16}):y.jsx(Wv,{size:16})})]})]}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"24px",marginTop:"36px",fontSize:"0.82rem",color:"var(--text-muted)",fontFamily:"var(--font-code)"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[y.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10B981"}}),y.jsx("span",{children:"0 KB Cloud Egress"})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[y.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#FAFAFA"}}),y.jsx("span",{children:"< 6.8ms HUD Latency"})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[y.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#FAFAFA"}}),y.jsx("span",{children:"84 tok/sec GPU Inference"})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[y.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10B981"}}),y.jsx("span",{children:"AES-256 Keychain Vault"})]})]})]})})})},In=[{stage:"THINK",title:"Analyze Goal & Assemble Unified Prompt Context",detail:"Inspecting local workspace repository. Assembling prompt context in parallel from Turbovec Vector RAG, Knowledge Graph memory, and 50-slot persistent clipboard buffer.",codeSnippet:`// 3-Way Context Assembly (Parallel)
const [vectorContext, kgNodes, pastHistory] = await Promise.all([
  turbovec.query(queryEmbedding, { top_k: 5 }),
  knowledgeGraph.findEntities(topic),
  sqliteWal.getRecentHistory(10)
]);`,color:"#38BDF8",duration:1800},{stage:"PLAN",title:"Fast Auditor LLM Check & Schema Validation",detail:"Fast Auditor LLM checks tool call schemas and Python code blocks before execution to catch logic bugs early.",codeSnippet:`// Fast Auditor Gate (Any Fast Local Model)
const audit = await auditorLLM.validate({
  plan: ["search_web", "write_file", "run_python"],
  sandbox_gate: "SEC-16_ENFORCED"
});
// Status: APPROVED (0.02s latency)`,color:"#A78BFA",duration:2e3},{stage:"ACT",title:"Speculative Concurrency Router: Tier 0 Execution",detail:"Dual-lane router executes Tier 0 read-only tools (read_file, search_web) concurrently in parallel via asyncio.gather().",codeSnippet:`// Tier 0 Read-Only Concurrency (Parallel)
const [fileData, searchResults] = await asyncio.gather(
  toolRegistry.call("read_file", { path: "api.py" }),
  toolRegistry.call("search_web", { query: "FastAPI rate limit slowapi" })
);`,color:"#10B981",duration:2200},{stage:"OBSERVE",title:"Intercept & Heal Tool Parameter Mismatches",detail:"Self-correction engine detects parameter mismatch in mutating Tier 1 command and auto-heals parameters against TOOL_REGISTRY.",codeSnippet:`[WARN] Tool call signature mismatch: 'file_path' expected 'path'.
[HEAL] Self-Healing Applied: Remapped 'file_path' -> 'path'.
[SSE Stream] Mascot Island Spin State: AMBER (Working) -> FAST_SPIN`,color:"#F59E0B",duration:2400},{stage:"SELF-CORRECT",title:"Final Observe, Supertonic Speech & State Persistence",detail:"Task completed cleanly. Persisting state to SQLite WAL, triggering Supertonic TTS voice feedback, and updating Mascot Island to Green (Success).",codeSnippet:`✓ ReAct Loop Completed (3 iterations)
🔊 Supertonic TTS Voice: "Male M3 (Deep) - Task executed cleanly."
🦊 Mascot State: GREEN (Success)
💾 Persisted to SQLite WAL + Turbovec Graph Memory`,color:"#10B981",duration:2500}],mC=()=>{const[t,e]=st.useState(0),[n,i]=st.useState(!0),[r,s]=st.useState(1),[o,a]=st.useState(!1);st.useEffect(()=>{const c=document.querySelector(".sim-log-active");c&&Nf(c,{translateY:[12,0],opacity:[.3,1],duration:450,ease:"outQuad"})},[t]),st.useEffect(()=>{if(!n)return;const c=In[t],f=setTimeout(()=>{e(h=>(h+1)%In.length)},c.duration/r);return()=>clearTimeout(f)},[t,n,r]);const l=()=>{const c=In.slice(0,t+1).map(f=>`[${f.stage}] ${f.title}
${f.detail}
${f.codeSnippet||""}`).join(`

`);navigator.clipboard.writeText(c),a(!0),setTimeout(()=>a(!1),2e3)};return y.jsxs("section",{id:"simulator",style:{padding:"100px 0",position:"relative",zIndex:1},children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{textAlign:"center",maxWidth:"720px",margin:"0 auto 60px auto"},children:[y.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.5vw, 3rem)",marginBottom:"16px"},children:["Continuous ",y.jsx("span",{className:"gradient-text-cyan",children:"ReAct Engine"})," in Action."]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem"},children:"Watch Meridian-X reason, execute code, observe errors, and self-correct on your local hardware without human intervention."})]}),y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(300px, 380px) 1fr",gap:"24px",alignItems:"start"},className:"simulator-layout",children:[y.jsxs("div",{className:"glass-card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"16px",background:"rgba(12, 12, 16, 0.95)"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[y.jsx("h3",{style:{fontSize:"1.1rem",color:"#FFF"},children:"Cognitive Loop Pipeline"}),y.jsxs("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-code)",color:"#FAFAFA"},children:["Step ",t+1," of ",In.length]})]}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:In.map((c,f)=>{const h=f===t,u=f<t;return y.jsxs("div",{onClick:()=>{e(f),i(!1)},style:{padding:"14px 16px",borderRadius:"12px",background:h?"rgba(255, 255, 255, 0.08)":u?"rgba(10, 10, 14, 0.8)":"rgba(8, 8, 12, 0.4)",border:h?"1px solid #FFFFFF":"1px solid rgba(255, 255, 255, 0.08)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},children:[y.jsxs("div",{style:{width:"28px",height:"28px",borderRadius:"8px",background:h?"#FFFFFF":"rgba(255,255,255,0.06)",color:h?"#030303":c.color,fontWeight:700,fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-code)"},children:["0",f+1]}),y.jsxs("div",{style:{flex:1},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsxs("span",{style:{fontWeight:700,fontSize:"0.82rem",color:c.color,fontFamily:"var(--font-code)"},children:["[",c.stage,"]"]}),u&&y.jsx(bf,{size:14,color:"#10B981"})]}),y.jsx("div",{style:{fontSize:"0.85rem",color:h?"#FFF":"var(--text-muted)",fontWeight:500},children:c.title})]})]},c.stage)})}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"16px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsxs("button",{onClick:()=>i(!n),className:"btn-secondary",style:{padding:"8px 14px",fontSize:"0.85rem"},children:[n?y.jsx(q1,{size:15}):y.jsx(Y1,{size:15}),y.jsx("span",{children:n?"Pause":"Play"})]}),y.jsx("button",{onClick:()=>{e(0),i(!0)},className:"btn-secondary",style:{padding:"8px 12px"},title:"Reset Simulator",children:y.jsx($1,{size:15})})]}),y.jsxs("button",{onClick:()=>s(c=>c===1?2:c===2?.5:1),className:"btn-secondary",style:{padding:"8px 12px",fontSize:"0.8rem",fontFamily:"var(--font-code)"},children:[y.jsx(H1,{size:14}),y.jsxs("span",{children:[r,"x Speed"]})]})]})]}),y.jsx("div",{className:"glow-border-card",style:{height:"100%",background:"rgba(10, 10, 14, 0.95)"},children:y.jsxs("div",{className:"glow-border-card-inner",style:{padding:"0",display:"flex",flexDirection:"column",height:"100%",background:"#050508"},children:[y.jsxs("div",{style:{background:"rgba(14, 14, 18, 0.98)",padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[y.jsx(Yv,{size:18,color:"#FAFAFA"}),y.jsx("span",{style:{fontSize:"0.88rem",fontFamily:"var(--font-code)",fontWeight:600,color:"#FFFFFF"},children:"Meridian-X ReAct Terminal Log Stream"})]}),y.jsxs("button",{onClick:l,style:{background:"transparent",border:"none",color:o?"var(--emerald-accent)":"var(--text-muted)",cursor:"pointer",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"6px"},children:[o?y.jsx(Mp,{size:15}):y.jsx(Wv,{size:15}),y.jsx("span",{children:o?"Copied":"Copy Logs"})]})]}),y.jsxs("div",{className:"sim-log-active",style:{padding:"24px",background:"#040810",fontFamily:"var(--font-code)",fontSize:"0.88rem",lineHeight:"1.7",color:"#E2E8F0",flex:1,display:"flex",flexDirection:"column",gap:"20px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[y.jsxs("span",{style:{background:In[t].color,color:"#040D1A",padding:"4px 10px",borderRadius:"6px",fontWeight:800,fontSize:"0.8rem"},children:["[",In[t].stage,"]"]}),y.jsx("span",{style:{color:"#FFF",fontWeight:600,fontSize:"0.95rem"},children:In[t].title})]}),y.jsx("div",{style:{color:"var(--text-muted)",paddingLeft:"12px",borderLeft:`2px solid ${In[t].color}`},children:In[t].detail}),In[t].codeSnippet&&y.jsx("div",{style:{background:"rgba(15, 23, 42, 0.8)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",padding:"16px",whiteSpace:"pre-wrap",color:In[t].stage==="OBSERVE"?"#F59E0B":"#00F2FE",fontSize:"0.84rem"},children:In[t].codeSnippet}),y.jsxs("div",{style:{marginTop:"auto",paddingTop:"16px",borderTop:"1px dashed rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)"},children:[y.jsx("span",{children:"Runtime: Ollama (Offline GPU Engine)"}),y.jsx("span",{style:{color:"var(--emerald-accent)"},children:"● Verification: Passed (0 errors)"})]})]})]})})]})]}),y.jsx("style",{children:`
        @media (max-width: 868px) {
          .simulator-layout { grid-template-columns: 1fr !important; }
        }
      `})]})},gC=[{id:"sovereignty",title:"100% Offline & Sovereign",badge:"Air-Gapped Ready",tagline:"Zero telemetry. Zero cloud calls.",description:"Operates 100% locally via embedded Ollama runtime & FastAPI microservice. Your code, documents, API keys, and conversation history never leave your device.",iconName:"ShieldCheck",accentColor:"#10B981",metrics:"0 KB Cloud Egress",details:["Local GGUF Model Execution","Full Air-Gap & Off-Grid Support","Zero Telemetry & Tracking"]},{id:"react-loop",title:"ReAct Reasoning & Self-Correction",badge:"Fast Auditor Check",tagline:"Reason → Act → Observe → Auto-Heal",description:"Asynchronous ReAct loop powered by any local Ollama models or cloud LLMs. Intercepts tool calls, auto-corrects parameter mismatches, and runs syntax verification.",iconName:"Cpu",accentColor:"#E4E4E7",metrics:"Sub-100ms Tool Healing",details:["TOOL_REGISTRY Auto-Fix","Fast Auditor LLM Gate","SSE Real-Time Telemetry Stream"]},{id:"mascot-island",title:"3D Mascot & Dynamic Island",badge:"Orbital-Ring Companion",tagline:"Cognitive state reflection in real time",description:"Floating 3D desktop companion reflecting execution status with color states (Blue=Idle, Amber=Working, Red=Failed, Green=Success). Compresses into a sleek floating island with 6 anchor points.",iconName:"Sparkles",accentColor:"#38BDF8",metrics:"60 FPS GPU Companion",details:["Blue/Amber/Red/Green State Colors","Slow/Fast/Frozen Spin Dynamics","6 Desktop Anchor Positions"]},{id:"global-hotkeys",title:"Frameless Overlay & Hotkeys",badge:"Sub-10ms Overlay",tagline:"Instant HUD without losing window focus",description:"Sub-10ms frameless HUD and global hotkey engine. Toggle workspace shell (Alt+M), compact mascot island HUD (Alt+Shift+M), or push-to-talk voice input (Alt+V) seamlessly.",iconName:"Zap",accentColor:"#F59E0B",metrics:"Sub-10ms Frame Latency",details:["Alt + M (Main Workspace)","Alt + Shift + M (Mascot HUD)","Alt + V (Voice Push-to-Talk)"]},{id:"speculative-concurrency",title:"Speculative Concurrency Router",badge:"Dual-Lane Execution",tagline:"Parallel reads + sequential transaction safety",description:"Dual-lane tool execution engine. Tier 0 read-only tools (read_file, search_web) execute concurrently via asyncio.gather(); Tier ≥ 1 mutating operations run sequentially.",iconName:"Layers",accentColor:"#A78BFA",metrics:"3.4x Throughput Gain",details:["Tier 0 Concurrent asyncio.gather","Tier 1+ Mutating Transactions","Zero Race Condition Guarantees"]},{id:"encrypted-vault",title:"AES-GCM Secret Vault & MCP",badge:"SEC-01..SEC-26 Security",tagline:"Machine-bound HMAC derivation & 1-click plugins",description:"AES-256-GCM encrypted credential store tied to machine hostname + username HMAC. Connects to 1-Click MCP server plugins (GitHub, PostgreSQL, Slack, Linear).",iconName:"Lock",accentColor:"#10B981",metrics:"256-Bit Hardware Encryption",details:["HMAC-SHA256 Passphrase Derivation","Direct MCP Tool Injection","Prompt Injection Sanitizer (SEC-16)"]},{id:"focus-shield",title:"Focus Distraction Blocker",badge:"Pomodoro Shield",tagline:"Block distracting web & desktop apps",description:"Blocks distracting websites (YouTube, Reddit, Twitter/X, Twitch) and background desktop processes (discord.exe, steam.exe) during Pomodoro focus blocks.",iconName:"ShieldAlert",accentColor:"#EF4444",metrics:"100% Focus Guarantee",details:["Website Domain Blocking","Process Surveillance & Termination","Active Shield Status Indicator"]},{id:"clipboard-surveillance",title:"50-Slot Clipboard Surveillance",badge:"SQLite WAL Buffer",tagline:"Pastebuffer monitoring & prompt analysis",description:"Real-time pastebuffer monitoring with 50 persistent slots, automatic URL/Code classification, 1-click prompt analysis, and SQLite WAL database persistence fallback.",iconName:"ClipboardList",accentColor:"#8B5CF6",metrics:"50 Persistent History Slots",details:["URL & Code Snippet Auto-Classify","1-Click Prompt Analysis","SQLite WAL Fallback Store"]},{id:"supertonic-voice",title:"Supertonic Speech & Voice Engine",badge:"10 Voice Synthesizer",tagline:"Local text-to-speech & audio sound FX",description:"Local text-to-speech engine featuring 10 distinct speaker voices (Male M1–M5, Female F1–F5), dynamic speech volume control, and audio state-change sound FX.",iconName:"Volume2",accentColor:"#EC4899",metrics:"10 Local Voices",details:["5 Male & 5 Female Speaker Profiles","Dynamic Audio State FX","Offline Audio Preprocessing"]},{id:"real-stats",title:"Developer Productivity Engine",badge:"Real SQLite Metrics",tagline:"Live metric tracking from SQLite & Git",description:"Queries live SQLite task logs and Git repository commits to calculate real metrics: Success Rate, Heals Applied, Git Commits/Snapshots, and Pomodoros Completed.",iconName:"BarChart3",accentColor:"#3B82F6",metrics:"Real-Time Telemetry",details:["Git Commit & Snapshot Tracking","Task Auto-Heal Analytics","Pomodoro Analytics"]},{id:"turbovec-rag",title:"Turbovec RAG & Knowledge Graph",badge:"Sub-ms Hybrid Retrieval",tagline:"Vector RAG + entity-relationship memory",description:"Local semantic vector store (Turbovec) combined with entity-relationship knowledge graph memory for instant sub-millisecond retrieval without third-party egress.",iconName:"Database",accentColor:"#14B8A6",metrics:"< 1ms Retrieval",details:["On-Device Vector RAG","Entity Knowledge Graph Memory","Zero Third-Party Data Leakage"]},{id:"low-ram-optimizer",title:"Low RAM Optimizer & Particle Canvas",badge:"Resource Control",tagline:"Dynamic particles with memory conservation",description:"Dynamic background particle renderer with floating nodes & accent connections, featuring a 1-click Low RAM Mode toggle in Settings to conserve memory.",iconName:"Feather",accentColor:"#64748B",metrics:"< 120MB Idle Memory",details:["1-Click Low RAM Mode Toggle","GPU Particle Canvas","Resource Governor Controls"]}],xC=[{id:"cyber-slate",name:"Classic Cyber Slate",type:"Dark",accentColor:"#E8A020",typography:"IBM Plex Mono",description:"Solar Amber accents with deep slate obsidian backdrop"},{id:"art-deco",name:"Art Deco Luxury",type:"Dark",accentColor:"#D4AF37",typography:"Playfair Display (Serif)",description:"Metallic Gold geometric sophistication"},{id:"neobrutalism",name:"Neobrutalism",type:"Dark",accentColor:"#FFDE59",typography:"Space Grotesk",description:"Canary Yellow stark high-contrast boundaries"},{id:"cyberpunk-neon",name:"Cyberpunk Neon",type:"Dark",accentColor:"#FF0055",typography:"Orbitron",description:"Electric Magenta glowing terminal vibe"},{id:"retro-synthwave",name:"Retro Synthwave",type:"Dark",accentColor:"#FF71CE",typography:"VT323 (Pixel Mono)",description:"Hot Pink 80s arcade aesthetic"},{id:"ink-slate",name:"Ink & Slate",type:"Dark",accentColor:"#818CF8",typography:"Inter",description:"Muted Indigo clean developer workspace"},{id:"nordic-frost",name:"Nordic Frost",type:"Dark",accentColor:"#38BDF8",typography:"DM Sans",description:"Sky Blue crisp Scandinavian minimalism"},{id:"maximalism",name:"Maximalism",type:"Dark",accentColor:"#FF007A",typography:"Syne",description:"Vibrant Pink expressive high-density layout"},{id:"paper-ink",name:"Paper & Ink",type:"Light",accentColor:"#D95338",typography:"Lora (Serif)",description:"Terracotta Coral warm editorial feel"},{id:"sakura-blossom",name:"Sakura Blossom",type:"Light",accentColor:"#E85D75",typography:"Outfit",description:"Rose Quartz soft modern aesthetic"},{id:"solaris-light",name:"Solaris Light",type:"Light",accentColor:"#2563EB",typography:"DM Sans",description:"Cobalt Blue professional daylight layout"}],vC=[{name:"Tauri v2",role:"Desktop Core & Security Shell",description:"Rust-powered lightweight desktop container with zero Electron bloat, fast startup, frameless HUD, and native OS global hotkeys.",badge:"Rust v2 Engine",color:"#F59E0B"},{name:"FastAPI",role:"Async Local Execution Backend",description:"Asynchronous Python engine orchestrating local tool calling, system commands, SSE streaming, and background ReAct loops.",badge:"Async FastAPI",color:"#009688"},{name:"Turbovec & SQLite WAL",role:"On-Device Vector Memory & Storage",description:"Blazing fast local vector index storing embeddings for instant semantic RAG combined with SQLite WAL database persistence.",badge:"Vector RAG + WAL",color:"#8B5CF6"},{name:"Ollama Runtime",role:"Local LLM Inference Engine",description:"Direct hardware acceleration (CUDA/Metal/ROCm) running Qwen 2.5 Coder, Llama 3.2 Vision, and Nomic Embed locally.",badge:"GPU Accelerated",color:"#10B981"}],_C={ShieldCheck:y.jsx(Z1,{size:22,color:"#10B981"}),Cpu:y.jsx(Xv,{size:22,color:"#E4E4E7"}),Sparkles:y.jsx(Uc,{size:22,color:"#38BDF8"}),Zap:y.jsx(eM,{size:22,color:"#F59E0B"}),Layers:y.jsx(X1,{size:22,color:"#A78BFA"}),Lock:y.jsx(qv,{size:22,color:"#10B981"}),ShieldAlert:y.jsx(K1,{size:22,color:"#EF4444"}),ClipboardList:y.jsx(z1,{size:22,color:"#8B5CF6"}),Volume2:y.jsx(J1,{size:22,color:"#EC4899"}),BarChart3:y.jsx(k1,{size:22,color:"#3B82F6"}),Database:y.jsx(V1,{size:22,color:"#14B8A6"}),Feather:y.jsx(G1,{size:22,color:"#64748B"})},yC=()=>{const[t,e]=st.useState("All"),[n,i]=st.useState("cyber-slate");return y.jsx("section",{id:"features",style:{padding:"90px 0",position:"relative",zIndex:1},children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 56px auto"},children:[y.jsxs("h2",{style:{fontSize:"clamp(2rem, 4vw, 3.2rem)",marginBottom:"18px",fontWeight:800},children:["Key Features & ",y.jsx("span",{className:"gradient-text-purple",children:"System Capabilities"})]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"Complete list of sovereign offline agentic functions, background surveillance engines, security gates, and UI companions."})]}),y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:[gC.map(r=>y.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"16px",background:"rgba(10, 10, 14, 0.92)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"16px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(5, 5, 8, 0.95)",border:`1px solid ${r.accentColor}44`,display:"flex",alignItems:"center",justifyContent:"center"},children:_C[r.iconName]}),y.jsx("span",{className:"glass-pill",style:{fontSize:"0.75rem",color:r.accentColor,borderColor:`${r.accentColor}44`,padding:"3px 10px"},children:r.badge})]}),y.jsxs("div",{children:[y.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:r.title}),y.jsx("div",{style:{fontSize:"0.84rem",color:r.accentColor,fontWeight:600,marginBottom:"8px"},children:r.tagline}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.55},children:r.description})]}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"auto",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:r.details.map((s,o)=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",color:"#E2E8F0"},children:[y.jsx(bf,{size:13,color:r.accentColor}),y.jsx("span",{children:s})]},o))}),y.jsxs("div",{style:{paddingTop:"8px",display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-code)"},children:[y.jsx("span",{children:"Spec Target"}),y.jsx("span",{style:{color:r.accentColor,fontWeight:600},children:r.metrics})]})]},r.id)),y.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"14px",background:"rgba(18, 18, 28, 0.6)",border:"1px dashed rgba(255, 255, 255, 0.25)",position:"relative"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-code)",color:"#38BDF8",background:"rgba(56, 189, 248, 0.15)",padding:"3px 8px",borderRadius:"6px",fontWeight:700},children:"UPCOMING ROADMAP"}),y.jsx(Uc,{size:18,color:"#38BDF8",className:"animate-pulse"})]}),y.jsxs("div",{children:[y.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:"More Features Coming Soon"}),y.jsx("div",{style:{fontSize:"0.84rem",color:"#38BDF8",fontWeight:600,marginBottom:"8px"},children:"Continuous Expansion & Community MCPs"}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.55},children:"Active development pipeline introducing enhanced multi-modal agents, expanded MCP server ecosystem, and advanced workflow automation."})]}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"auto",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:["Multi-Agent Swarm Orchestration","Local Speech-to-Speech Engine","Automated Workflow Scripting","Community MCP Plugin Store"].map((r,s)=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",color:"#E2E8F0"},children:[y.jsx(Uc,{size:13,color:"#38BDF8"}),y.jsx("span",{children:r})]},s))}),y.jsxs("div",{style:{paddingTop:"8px",display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-code)"},children:[y.jsx("span",{children:"Status"}),y.jsx("span",{style:{color:"#38BDF8",fontWeight:600},children:"Active Development"})]})]})]}),y.jsxs("div",{style:{marginTop:"80px",paddingTop:"50px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[y.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[y.jsx("h3",{style:{fontSize:"clamp(1.8rem, 3vw, 2.5rem)",marginBottom:"10px",fontWeight:700},children:"11 Built-in Design Styles"}),y.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"640px",margin:"0 auto 20px auto",fontSize:"0.95rem"},children:"Selectable in Settings → Mascot & Style with live visual theme swatches & font pairings."}),y.jsx("div",{style:{display:"inline-flex",gap:"8px",background:"rgba(15, 15, 20, 0.8)",padding:"6px",borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:["All","Dark","Light"].map(r=>y.jsxs("button",{onClick:()=>e(r),style:{background:t===r?"var(--cyan-accent)":"transparent",color:t===r?"#000000":"var(--text-muted)",fontWeight:t===r?700:500,border:"none",borderRadius:"8px",padding:"6px 16px",fontSize:"0.82rem",cursor:"pointer",transition:"all 0.2s ease"},children:[r," Themes"]},r))})]}),y.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px"},children:xC.filter(r=>t==="All"||r.type===t).map(r=>{const s=n===r.id;return y.jsxs("div",{onClick:()=>i(r.id),style:{background:r.type==="Dark"?"rgba(12, 12, 18, 0.9)":"rgba(240, 240, 245, 0.95)",color:r.type==="Dark"?"#FFFFFF":"#111827",border:`2px solid ${s?r.accentColor:"rgba(255, 255, 255, 0.1)"}`,borderRadius:"14px",padding:"18px",cursor:"pointer",transition:"all 0.2s ease"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:r.accentColor,boxShadow:`0 0 8px ${r.accentColor}`}}),y.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem"},children:r.name})]}),y.jsx("span",{style:{fontSize:"0.7rem",fontWeight:600,padding:"2px 8px",borderRadius:"6px",background:r.type==="Dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",color:r.type==="Dark"?"#E2E8F0":"#334155"},children:r.type})]}),y.jsx("p",{style:{fontSize:"0.8rem",opacity:.8,marginBottom:"10px",lineHeight:1.4},children:r.description}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.75rem",fontFamily:r.typography.includes("Mono")||r.typography.includes("VT323")?"monospace":"sans-serif",paddingTop:"8px",borderTop:`1px solid ${r.type==="Dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}`},children:[y.jsxs("span",{children:["Font: ",r.typography]}),s&&y.jsx(bf,{size:14,color:r.accentColor})]})]},r.id)})})]})]})})},Vl=[{stepNum:1,layerTitle:"1️⃣ Trigger Layer",subtitle:"System Inputs & Event Surveillance",accentColor:"#818CF8",nodes:[{id:"t1",name:"💬 Workspace Chat UI",badge:"Tauri v2",tech:"React 18",desc:"Main desktop workspace window & chat shell",color:"#818CF8"},{id:"t2",name:"🎮 Overlay HUD (Alt+Shift+M)",badge:"Sub-10ms",tech:"Tauri IPC",desc:"Frameless GPU overlay HUD",color:"#38BDF8"},{id:"t3",name:"🎙️ Voice (Alt+V)",badge:"Push-to-Talk",tech:"PyAudio",desc:"Instant dictation & wake word engine",color:"#EC4899"},{id:"t4",name:"📋 Clipboard Watcher",badge:"Surveillance",tech:"Pyperclip",desc:"50-slot persistent pastebuffer classifier",color:"#A78BFA"}]},{stepNum:2,layerTitle:"2️⃣ Security Gate",subtitle:"Authentication & Threat Sanitization",accentColor:"#38BDF8",nodes:[{id:"s1",name:"🛡️ Auth & Rate Limiter",badge:"SEC-01",tech:"SlowAPI",desc:"X-API-Key middleware & endpoint rate limits",color:"#38BDF8"},{id:"s2",name:"🧹 Prompt Injection Sanitizer",badge:"SEC-16",tech:"Regex AST",desc:"Strips jailbreak directives & zero-width unicode",color:"#0284C7"}]},{stepNum:3,layerTitle:"3️⃣ Context Assembly",subtitle:"Parallel Memory & Knowledge Retrieval",accentColor:"#67E8F9",nodes:[{id:"c1",name:"⚡ Turbovec Vector RAG",badge:"< 1ms",tech:"HNSW Index",desc:"Local vector store for document & repo context",color:"#67E8F9"},{id:"c2",name:"🕸️ Knowledge Graph",badge:"Entity Graph",tech:"SQLite WAL",desc:"Persistent entity-relationship memory graph",color:"#22D3EE"},{id:"c3",name:"📜 Conversation History",badge:"Buffer",tech:"FastAPI Session",desc:"Multi-turn context window history",color:"#06B6D4"}]},{stepNum:4,layerTitle:"4️⃣ ReAct Reasoning",subtitle:"Autonomous Plan & Self-Correction Kernel",accentColor:"#A78BFA",nodes:[{id:"r1",name:"🧠 Reason Kernel (Local Ollama / Cloud)",badge:"Reasoning",tech:"FastAPI Async",desc:"Generates structured ReAct tool execution plans",color:"#A78BFA"},{id:"r2",name:"❓ Schema & Syntax Auditor",badge:"Fast Auditor",tech:"Python AST",desc:"Validates code & tool schemas before execution",color:"#8B5CF6"},{id:"r3",name:"🩹 Self-Correction Healer",badge:"Auto-Heal",tech:"TOOL_REGISTRY",desc:"Intercepts tool errors and repairs parameters",color:"#7C3AED"}]},{stepNum:5,layerTitle:"5️⃣ Tiered Execution Engine",subtitle:"Speculative Concurrency & Transaction Safety",accentColor:"#4ADE80",nodes:[{id:"e1",name:"⚡ Tier 0 (Read-Only Concurrent)",badge:"Parallel",tech:"asyncio.gather",desc:"Executes read_file, search_web concurrently",color:"#4ADE80",subItems:["read_file","search_web","fetch_url"]},{id:"e2",name:"🔒 Tier 1+ (Mutating Sequential)",badge:"Sequential",tech:"Transaction Gate",desc:"Executes write_file, run_command in order",color:"#FB923C",subItems:["write_file","run_command","gui_click"]},{id:"e3",name:"🔌 MCP Server Plugins",badge:"1-Click MCP",tech:"JSON-RPC",desc:"Direct tool injection for GitHub, Postgres, Slack",color:"#F43F5E"}]},{stepNum:6,layerTitle:"6️⃣ Observe, Respond & Persist",subtitle:"Telemetry, Telepathic Mascot & Hardware Vault",accentColor:"#FF71CE",nodes:[{id:"o1",name:"👁️ Observe & Merge Results",badge:"Loop Check",tech:"ReAct Cycle",desc:"Merges tool outputs into final user response",color:"#FF71CE"},{id:"o2",name:"🔊 Supertonic TTS Engine",badge:"10 Voices",tech:"Local TTS",desc:"Local speech synthesis & state-change audio FX",color:"#EC4899"},{id:"o3",name:"🔐 AES-256-GCM Vault",badge:"Encrypted",tech:"OS Keyring",desc:"Hardware-bound secret key storage",color:"#FFDE59"},{id:"o4",name:"🦊 Mascot & Dynamic Island",badge:"60 FPS",tech:"SSE Stream",desc:"Real-time cognitive state ring (Blue/Amber/Red/Green)",color:"#38BDF8"}]}],SC=()=>{const[t,e]=st.useState(Vl[3].nodes[0]),[n,i]=st.useState("ALL");return y.jsxs("div",{style:{width:"100%"},children:[y.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[y.jsx("h3",{style:{fontSize:"clamp(1.6rem, 2.5vw, 2.2rem)",fontWeight:800,marginBottom:"8px"},children:"Meridian-X 6-Layer Execution Pipeline"}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",maxWidth:"640px",margin:"0 auto"},children:"Interactive system flow: click any node to inspect data contracts, execution concurrency, and telemetry streams."}),y.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"6px",flexWrap:"wrap",marginTop:"18px"},children:[y.jsx("button",{onClick:()=>i("ALL"),style:{padding:"6px 12px",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.15)",background:n==="ALL"?"rgba(255, 255, 255, 0.15)":"rgba(12, 12, 18, 0.8)",color:n==="ALL"?"#FFF":"var(--text-dim)",fontSize:"0.78rem",fontWeight:600,cursor:"pointer"},children:"Show All Layers"}),Vl.map(r=>y.jsxs("button",{onClick:()=>i(r.stepNum),style:{padding:"6px 12px",borderRadius:"8px",border:`1px solid ${n===r.stepNum?r.accentColor:"rgba(255, 255, 255, 0.1)"}`,background:n===r.stepNum?`${r.accentColor}22`:"rgba(12, 12, 18, 0.8)",color:n===r.stepNum?r.accentColor:"var(--text-dim)",fontSize:"0.78rem",fontWeight:600,cursor:"pointer"},children:["Layer ",r.stepNum]},r.stepNum))]})]}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",position:"relative"},children:Vl.filter(r=>n==="ALL"||n===r.stepNum).map((r,s)=>y.jsxs("div",{style:{position:"relative"},children:[y.jsxs("div",{style:{background:"rgba(14, 14, 20, 0.95)",border:`1px solid ${r.accentColor}44`,borderLeft:`5px solid ${r.accentColor}`,borderRadius:"12px",padding:"14px 20px",marginBottom:"14px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:`0 4px 20px ${r.accentColor}15`},children:[y.jsxs("div",{children:[y.jsx("strong",{style:{fontSize:"1.05rem",color:"#FFF"},children:r.layerTitle}),y.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginLeft:"12px"},children:r.subtitle})]}),y.jsxs("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-code)",color:r.accentColor,background:`${r.accentColor}22`,padding:"3px 10px",borderRadius:"6px",fontWeight:700},children:[r.nodes.length," Component Nodes"]})]}),y.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"14px"},children:r.nodes.map(o=>{const a=t.id===o.id;return y.jsxs("div",{onClick:()=>e(o),style:{background:a?"rgba(20, 20, 30, 0.95)":"rgba(10, 10, 14, 0.8)",border:`2px solid ${a?o.color:"rgba(255, 255, 255, 0.08)"}`,borderRadius:"12px",padding:"16px",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:a?"translateY(-2px)":"none",boxShadow:a?`0 8px 24px ${o.color}33`:"none"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[y.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"#FFF"},children:o.name}),y.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-code)",color:o.color,background:`${o.color}22`,padding:"2px 6px",borderRadius:"4px"},children:o.badge})]}),y.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",lineHeight:1.4,marginBottom:"10px"},children:o.desc}),o.subItems&&y.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:o.subItems.map(l=>y.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-code)",background:"rgba(255, 255, 255, 0.06)",color:"#E2E8F0",padding:"1px 6px",borderRadius:"4px"},children:l},l))}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.72rem",color:"var(--text-dim)",borderTop:"1px solid rgba(255, 255, 255, 0.06)",paddingTop:"8px"},children:[y.jsxs("span",{children:["Tech: ",o.tech]}),a&&y.jsx(ec,{size:13,color:o.color})]})]},o.id)})}),s<Vl.length-1&&n==="ALL"&&y.jsx("div",{style:{textAlign:"center",margin:"10px 0 -10px 0",opacity:.4},children:y.jsx(O1,{size:18,color:r.accentColor,className:"animate-bounce"})})]},r.stepNum))}),y.jsxs("div",{style:{marginTop:"32px",background:"rgba(12, 12, 18, 0.95)",border:`1px solid ${t.color}`,borderRadius:"16px",padding:"24px",boxShadow:`0 10px 30px ${t.color}22`},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[y.jsx(W1,{size:18,color:t.color}),y.jsx("h4",{style:{fontSize:"1.15rem",color:"#FFF"},children:t.name})]}),y.jsx("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-code)",color:t.color,background:`${t.color}22`,padding:"3px 10px",borderRadius:"6px"},children:t.tech})]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",lineHeight:1.6,marginBottom:"16px"},children:t.desc}),y.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.8rem",color:"#E2E8F0",fontFamily:"var(--font-code)"},children:[y.jsxs("span",{children:["Execution Target: ",y.jsx("strong",{style:{color:t.color},children:"100% On-Device / Sandboxed"})]}),y.jsxs("span",{children:["Security Gate: ",y.jsx("strong",{style:{color:"#10B981"},children:"Enforced (SEC-01..SEC-26)"})]}),y.jsxs("span",{children:["Latency Spec: ",y.jsx("strong",{style:{color:"#38BDF8"},children:"Microsecond IPC"})]})]})]})]})},MC=()=>y.jsx("section",{id:"architecture",style:{padding:"110px 0",position:"relative",zIndex:1,background:"#030303"},children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 64px auto"},children:[y.jsxs("h2",{style:{fontSize:"clamp(2.2rem, 4vw, 3.4rem)",marginBottom:"20px",letterSpacing:"-0.03em"},children:["Engineered for ",y.jsx("span",{className:"gradient-text-cyan",children:"Sub-Millisecond Autonomy."})]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.08rem",lineHeight:1.65},children:"Decoupled multi-process pipeline uniting Rust native speed, FastAPI async control loops, embedded vector memory, and offline GPU inference."})]}),y.jsx("div",{style:{marginBottom:"48px"},children:y.jsx(SC,{})}),y.jsx("div",{style:{marginBottom:"24px",fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-dim)",fontWeight:700},children:"Core Infrastructure Components"}),y.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"24px"},children:vC.map(t=>y.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"14px",background:"rgba(12, 12, 16, 0.92)",borderColor:"rgba(255, 255, 255, 0.08)"},children:[y.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:y.jsx("span",{className:"glass-pill",style:{fontSize:"0.72rem",color:"#FAFAFA",borderColor:"rgba(255, 255, 255, 0.2)",padding:"3px 10px"},children:t.badge})}),y.jsxs("div",{children:[y.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:t.name}),y.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:600},children:t.role})]}),y.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:1.55},children:t.description})]},t.name))}),y.jsxs("div",{style:{marginTop:"70px",paddingTop:"50px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[y.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[y.jsx("h3",{style:{fontSize:"clamp(1.6rem, 2.5vw, 2.2rem)",fontWeight:700,marginBottom:"10px"},children:"System Requirements & Platform Support"}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem"},children:"Optimized for hardware efficiency with optional hybrid cloud offloading for CPU-only systems."})]}),y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"28px"},children:[y.jsxs("div",{style:{background:"rgba(12, 12, 18, 0.9)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",padding:"24px"},children:[y.jsxs("h4",{style:{fontSize:"1.1rem",marginBottom:"16px",color:"#FFF",display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx(Xv,{size:18,color:"#3B82F6"}),y.jsx("span",{children:"Hardware Specifications"})]}),y.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem"},children:[y.jsx("thead",{children:y.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"var(--text-dim)",textAlign:"left"},children:[y.jsx("th",{style:{padding:"8px 0"},children:"Component"}),y.jsx("th",{style:{padding:"8px 0"},children:"Minimum"}),y.jsx("th",{style:{padding:"8px 0",color:"#10B981"},children:"Recommended"})]})}),y.jsxs("tbody",{style:{color:"#E2E8F0"},children:[y.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[y.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"CPU"}),y.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"i5 / Ryzen 5 (AVX2)"}),y.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"i7 / Ryzen 7+ (8+ cores)"})]}),y.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[y.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"RAM"}),y.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"8 GB"}),y.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"16–32 GB DDR5"})]}),y.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[y.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"GPU / VRAM"}),y.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"Iris Xe / Vega"}),y.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"RTX 3060+ (8 GB+ VRAM)"})]}),y.jsxs("tr",{children:[y.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"Storage"}),y.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"10 GB SSD"}),y.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"30 GB+ NVMe"})]})]})]})]}),y.jsxs("div",{style:{background:"rgba(12, 12, 18, 0.9)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",padding:"24px"},children:[y.jsxs("h4",{style:{fontSize:"1.1rem",marginBottom:"16px",color:"#FFF",display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx(Q1,{size:18,color:"#10B981"}),y.jsx("span",{children:"OS Platform Support"})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[y.jsxs("div",{children:[y.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"Windows 11"}),y.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"64-bit NSIS / MSI Installer"})]}),y.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[y.jsx(ec,{size:15})," Fully Supported"]})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[y.jsxs("div",{children:[y.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"macOS 12+"}),y.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Apple Silicon M1/M2/M3 & Intel"})]}),y.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[y.jsx(ec,{size:15})," Fully Supported"]})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[y.jsxs("div",{children:[y.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"Linux Kernel 5.4+"}),y.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Ubuntu / Debian / Arch / Fedora"})]}),y.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[y.jsx(ec,{size:15})," Fully Supported"]})]})]})]})]})]})]})}),EC=[{name:"GitHub Protocol",category:"Code Automation",description:"Create PRs, read repos, review code diffs & manage issues locally.",installed:!0,color:"#FAFAFA"},{name:"PostgreSQL Direct",category:"Database RAG",description:"Inspect schemas, run sandboxed queries, and vectorize database rows.",installed:!0,color:"#E4E4E7"},{name:"Linear Workflows",category:"Issue Tracking",description:"Sync project tasks, estimate issues, and auto-update sprint status.",installed:!1,color:"#10B981"},{name:"Slack Local Bridge",category:"Communications",description:"Summarize internal threads and draft responses securely.",installed:!1,color:"#FAFAFA"}],TC=()=>y.jsxs("section",{id:"mcp",style:{padding:"100px 0",position:"relative",zIndex:1},children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{textAlign:"center",maxWidth:"760px",margin:"0 auto 60px auto"},children:[y.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Universal MCP Marketplace & ",y.jsx("span",{className:"gradient-text-amber",children:"Encrypted Key Vault."})]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"Connect Meridian-X to your developer toolchain via open Model Context Protocol (MCP) servers with hardware-backed AES-256-GCM credential security."})]}),y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(300px, 380px) 1fr",gap:"28px",alignItems:"start"},className:"mcp-grid",children:[y.jsxs("div",{className:"glass-card",style:{padding:"32px",display:"flex",flexDirection:"column",gap:"20px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[y.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",justifyContent:"center"},children:y.jsx(qv,{size:22,color:"var(--emerald-accent)"})}),y.jsxs("div",{children:[y.jsx("h3",{style:{fontSize:"1.15rem"},children:"Local Key Vault"}),y.jsx("span",{style:{fontSize:"0.78rem",color:"var(--emerald-accent)",fontFamily:"var(--font-code)"},children:"AES-256-GCM OS Keychain"})]})]}),y.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",lineHeight:1.6},children:["API keys & secrets stay AES-256-GCM encrypted in your local OS Keychain. Machine-bound HMAC-SHA256 passphrase derived from ",y.jsx("code",{children:"hostname + username"})," with ",y.jsx("code",{children:"slowapi"})," rate limiting. Zero plain text on disk."]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[y.jsxs("div",{style:Dd,children:[y.jsx(Gu,{size:14,color:"var(--emerald-accent)"}),y.jsx("span",{children:"GitHub PAT Token"}),y.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]}),y.jsxs("div",{style:Dd,children:[y.jsx(Gu,{size:14,color:"var(--emerald-accent)"}),y.jsx("span",{children:"Postgres DB Connection URI"}),y.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]}),y.jsxs("div",{style:Dd,children:[y.jsx(Gu,{size:14,color:"var(--emerald-accent)"}),y.jsx("span",{children:"Linear API Secret"}),y.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]})]})]}),y.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"18px"},children:EC.map(t=>y.jsxs("div",{className:"glass-card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"14px",borderColor:t.installed?`${t.color}44`:"var(--border-glass)"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsx("span",{style:{fontSize:"0.75rem",color:t.color,fontFamily:"var(--font-code)"},children:t.category}),y.jsx("span",{className:"glass-pill",style:{fontSize:"0.7rem",padding:"2px 8px",color:t.installed?"var(--emerald-accent)":"var(--text-muted)",borderColor:t.installed?"rgba(16, 185, 129, 0.3)":"var(--border-glass)"},children:t.installed?"Installed":"1-Click Add"})]}),y.jsxs("div",{children:[y.jsx("h4",{style:{fontSize:"1.05rem",marginBottom:"4px"},children:t.name}),y.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.5},children:t.description})]})]},t.name))})]})]}),y.jsx("style",{children:`
        @media (max-width: 868px) {
          .mcp-grid { grid-template-columns: 1fr !important; }
        }
      `})]}),Dd={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.6)",border:"1px solid var(--border-glass)",fontSize:"0.82rem",color:"var(--text-main)",fontFamily:"var(--font-code)"},L0=[{feature:"Data Execution & Privacy",meridianX:"100% Offline (Local GGUF via Ollama)",cloudAgents:"Cloud Servers (Data sent externally)",highlight:!0},{feature:"Overlay Launcher & Hotkeys",meridianX:"Sub-10ms Overlay (Alt+M, Alt+Shift+M, Alt+V)",cloudAgents:"Browser-only / High latency API",highlight:!0},{feature:"3D Mascot Companion & Themes",meridianX:"4-State Orbital Companion + 11 Selectable Themes",cloudAgents:"Generic Browser Web Dashboard",highlight:!1},{feature:"Focus Shield & Pastebuffer",meridianX:"Pomodoro Blocker + 50-Slot Clipboard Monitor",cloudAgents:"None",highlight:!1},{feature:"Autonomous ReAct Loop",meridianX:"Self-Healing AST & Fast Auditor (Any Local LLM)",cloudAgents:"Basic Prompting / Retries",highlight:!0},{feature:"Speculative Concurrency",meridianX:"Tier 0 Parallel asyncio + Tier 1 Sequential",cloudAgents:"Single Thread / Blocking",highlight:!1},{feature:"Persistent Vector Memory",meridianX:"Turbovec Vector RAG + Knowledge Graph",cloudAgents:"Ephemeral Session Context",highlight:!1},{feature:"API Key Security",meridianX:"AES-256-GCM Vault + HMACPassphrase",cloudAgents:"Plaintext / Server-Side Key Vault",highlight:!1},{feature:"Supertonic Voice Engine",meridianX:"10 Local Speaker Voices (Male/Female)",cloudAgents:"Cloud API TTS ($/char)",highlight:!1},{feature:"Monthly Cost",meridianX:"$0 / Forever Free & Open Source",cloudAgents:"$20 - $500 / month Subscription",highlight:!0}],wC=()=>y.jsxs("section",{style:{padding:"100px 0",position:"relative",zIndex:1},children:[y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 60px auto"},children:[y.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Built Sovereign. ",y.jsx("span",{className:"gradient-text-cyan",children:"Compared to Cloud Agents."})]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"See why developers and privacy-focused teams choose local execution over centralized cloud LLM services."})]}),y.jsx("div",{className:"glow-border-card",style:{maxWidth:"960px",margin:"0 auto",background:"rgba(10, 10, 14, 0.95)"},children:y.jsxs("div",{className:"glow-border-card-inner",style:{padding:"0",overflow:"hidden",background:"#050508"},children:[y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.4fr 1.2fr 1fr",background:"rgba(14, 14, 18, 0.98)",padding:"20px 28px",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",fontWeight:700,fontSize:"0.95rem"},className:"matrix-header",children:[y.jsx("div",{style:{color:"var(--text-muted)"},children:"Feature Architecture"}),y.jsxs("div",{style:{color:"#FFFFFF",display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx(Uc,{size:16}),y.jsx("span",{children:"Meridian-X (Sovereign)"})]}),y.jsx("div",{style:{color:"var(--text-dim)"},children:"Cloud AI Agents"})]}),y.jsx("div",{style:{display:"flex",flexDirection:"column"},children:L0.map((t,e)=>y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.4fr 1.2fr 1fr",padding:"18px 28px",borderBottom:e<L0.length-1?"1px solid var(--border-glass)":"none",background:t.highlight?"rgba(0, 242, 254, 0.03)":"transparent",alignItems:"center",fontSize:"0.9rem"},className:"matrix-row",children:[y.jsx("div",{style:{fontWeight:600,color:"var(--text-main)"},children:t.feature}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--emerald-accent)",fontWeight:600},children:[y.jsx(Mp,{size:16,color:"var(--emerald-accent)"}),y.jsx("span",{children:t.meridianX})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--text-dim)"},children:[y.jsx(Ep,{size:15,color:"#F43F5E"}),y.jsx("span",{children:t.cloudAgents})]})]},t.feature))})]})})]}),y.jsx("style",{children:`
        @media (max-width: 768px) {
          .matrix-header, .matrix-row {
            grid-template-columns: 1fr !important;
            gap: 8px;
          }
        }
      `})]}),AC=[{question:"What global hotkeys are supported in Meridian-X?",answer:"Meridian-X provides sub-10ms global shortcuts: `Alt + M` toggles the main desktop workspace window, `Alt + Shift + M` toggles the compact 3D mascot floating island HUD, and `Alt + V` triggers instant push-to-talk voice dictation."},{question:"What hardware is required to run Meridian-X locally?",answer:"Meridian-X runs on Windows 11, macOS 12+ (Apple Silicon & Intel), and Linux. Minimum requirements are 8 GB RAM with AVX2 CPU. Recommended is 16 GB+ RAM with an NVIDIA RTX 3060 or Apple M-series chip. For CPU-only hardware, enable Low RAM Mode in Settings or add a cloud API key."},{question:"How do the 11 Selectable Design Styles work?",answer:"Navigate to Settings → Mascot & Style to switch between 11 curated design themes including Classic Cyber Slate, Art Deco Luxury, Neobrutalism, Cyberpunk Neon, Retro Synthwave, Ink & Slate, Nordic Frost, Maximalism, Paper & Ink, Sakura Blossom, and Solaris Light."},{question:"How does the Focus Distraction Blocker work?",answer:"The Focus Shield monitors background desktop processes and web traffic during Pomodoro focus blocks. It automatically blocks distracting domains (YouTube, Reddit, Twitter/X, Twitch) and shuts down target background apps (discord.exe, steam.exe)."},{question:"How does 100% offline privacy and AES-GCM Vault work?",answer:"Meridian-X embeds local Ollama runtime and Turbovec vector storage. Credentials are encrypted in local OS Keyring via AES-256-GCM with machine-bound HMAC-SHA256 passphrase derivation. Zero code, API keys, or prompt telemetry ever leave your device."},{question:"Is Meridian-X free and open source?",answer:"Yes! Meridian-X is created by Aryan and released under the open-source MIT License. You can inspect the codebase, contribute on GitHub, or install 1-click MCP servers for free."}],bC=()=>{const[t,e]=st.useState(0),n=i=>{e(t===i?null:i)};return y.jsx("section",{style:{padding:"100px 0",position:"relative",zIndex:1},children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{textAlign:"center",maxWidth:"760px",margin:"0 auto 60px auto"},children:[y.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Frequently Asked ",y.jsx("span",{className:"gradient-text-cyan",children:"Questions."})]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"Everything you need to know about setting up local inference, hardware security, and ReAct loops."})]}),y.jsx("div",{style:{maxWidth:"820px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"16px"},children:AC.map((i,r)=>{const s=t===r;return y.jsxs("div",{className:"glass-card",onClick:()=>n(r),style:{padding:"22px 28px",cursor:"pointer",borderColor:s?"var(--border-cyan)":"var(--border-glass)",transition:"all 0.25s ease"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[y.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,color:s?"var(--cyan-primary)":"var(--text-main)"},children:i.question}),y.jsx("div",{style:{transform:s?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease",color:s?"var(--cyan-primary)":"var(--text-muted)"},children:y.jsx(B1,{size:20})})]}),s&&y.jsx("div",{style:{marginTop:"14px",paddingTop:"14px",borderTop:"1px dashed rgba(255,255,255,0.08)",color:"var(--text-muted)",fontSize:"0.94rem",lineHeight:1.6},children:i.answer})]},i.question)})})]})})},CC=({onDownloadClick:t,detectedOS:e})=>{const n=Tp();return y.jsx("footer",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(5, 5, 8, 0.85)",backdropFilter:"blur(10px)",padding:"80px 0 40px 0",position:"relative",zIndex:1},children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"40px",marginBottom:"60px"},children:[y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[y.jsx("img",{src:"/logo.png",alt:"Meridian-X Logo",style:{width:"34px",height:"34px",borderRadius:"50%",objectFit:"cover",border:"1px solid rgba(255, 255, 255, 0.25)",boxShadow:"0 0 12px rgba(255, 255, 255, 0.15)"}}),y.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.25rem",color:"#FFF"},children:["Meridian",y.jsx("span",{style:{color:"#A1A1AA",fontWeight:600},children:"-X"})]})]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6},children:"Local execution. Total privacy. Absolute autonomy. Sovereign desktop AI continuous reasoning engine."}),y.jsxs("div",{style:{fontSize:"0.85rem",color:"#FAFAFA",fontWeight:600},children:["Architected & Built by ",y.jsx("strong",{style:{color:"#10B981"},children:"Aryan"})]})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[y.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Product"}),y.jsx("a",{href:"#simulator",style:qo,children:"ReAct Terminal Demo"}),y.jsx("a",{href:"#features",style:qo,children:"System Features"}),y.jsx("a",{href:"#architecture",style:qo,children:"Tauri v2 & Architecture"}),y.jsx("a",{href:"#mcp",style:qo,children:"MCP Marketplace"})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[y.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Supported Platforms"}),y.jsx("span",{style:Yo,children:"Windows 10 / 11 (x64 & ARM64)"}),y.jsx("span",{style:Yo,children:"macOS Sonoma / Sequoia (Apple Silicon & Intel)"}),y.jsx("span",{style:Yo,children:"Linux (AppImage / Deb / Arch PKGBUILD)"}),y.jsxs("button",{onClick:t,className:"btn-primary",style:{padding:"8px 16px",fontSize:"0.85rem",width:"fit-content",marginTop:"6px"},children:[y.jsx(Jr,{size:14}),y.jsx("span",{children:"Get Desktop App"})]})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[y.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Open Source"}),y.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X",target:"_blank",rel:"noopener noreferrer",style:qo,children:[y.jsx(jv,{size:14})," GitHub Repository"]}),y.jsx("span",{style:Yo,children:"Licensed under MIT License"}),y.jsxs("span",{style:Yo,children:["Version: ",n.tagName," (Auto-Updated)"]})]})]}),y.jsxs("div",{style:{paddingTop:"28px",borderTop:"1px solid var(--border-glass)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",fontSize:"0.84rem",color:"var(--text-dim)"},children:[y.jsxs("div",{children:["© ",new Date().getFullYear()," Meridian-X by ",y.jsx("strong",{children:"Aryan"}),". All rights reserved. 100% Sovereign & Offline."]}),y.jsxs("div",{style:{display:"flex",gap:"20px"},children:[y.jsx("span",{children:"Privacy First Policy"}),y.jsx("span",{children:"Zero Data Collection"})]})]})]})})},RC=({isOpen:t,onClose:e,detectedOS:n})=>{const i=Tp();return t?y.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(4, 8, 16, 0.85)",backdropFilter:"blur(16px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:y.jsx("div",{className:"glow-border-card",style:{width:"100%",maxWidth:"540px"},children:y.jsxs("div",{className:"glow-border-card-inner",style:{padding:"32px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[y.jsx(Jr,{size:22,color:"var(--cyan-primary)"}),y.jsxs("h3",{style:{fontSize:"1.3rem"},children:["Download Meridian-X ",i.tagName]})]}),y.jsx("button",{onClick:e,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer"},children:y.jsx(Ep,{size:20})})]}),y.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"24px",lineHeight:1.6},children:"Select your operating system binary. All builds are signed, standalone Tauri v2 executables requiring zero cloud connectivity."}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[y.jsxs("a",{href:i.downloadUrlExe,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",style:{justifyContent:"space-between",borderColor:n.includes("Windows")?"var(--cyan-primary)":"var(--border-glass)"},children:[y.jsxs("div",{children:[y.jsx("strong",{children:"🪟 Windows Installer (NSIS .exe / MSI)"}),y.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)"},children:"meridian-x_0.4.0_x64-setup.exe"})]}),y.jsx(Jr,{size:16,color:"var(--cyan-primary)"})]}),y.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X/releases",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",style:{justifyContent:"space-between",borderColor:n.includes("macOS")?"var(--cyan-primary)":"var(--border-glass)"},children:[y.jsxs("div",{children:[y.jsx("strong",{children:"🍎 macOS Apple Silicon & Intel (.dmg)"}),y.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)"},children:"macOS 12+ Monterey / Sonoma / Sequoia"})]}),y.jsx(Jr,{size:16,color:"var(--cyan-primary)"})]}),y.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X/releases",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",style:{justifyContent:"space-between",borderColor:n.includes("Linux")?"var(--cyan-primary)":"var(--border-glass)"},children:[y.jsxs("div",{children:[y.jsx("strong",{children:"🐧 Linux Package (.AppImage / .deb)"}),y.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)"},children:"Ubuntu, Debian, Arch, Fedora"})]}),y.jsx(Jr,{size:16,color:"var(--cyan-primary)"})]})]}),y.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)",textAlign:"center"},children:["SHA-256 Checksums available on ",y.jsx("a",{href:"https://github.com/Aryan4132/Meridian-X/releases",target:"_blank",rel:"noreferrer",style:{color:"var(--cyan-primary)"},children:"GitHub v0.4.0 Releases"})]})]})})}):null},qo={color:"var(--text-muted)",textDecoration:"none",fontSize:"0.88rem",transition:"color 0.2s ease",display:"flex",alignItems:"center",gap:"8px"},Yo={color:"var(--text-dim)",fontSize:"0.84rem"},PC=()=>{const[t,e]=st.useState("Windows"),[n,i]=st.useState(!1),[r,s]=st.useState(!1);return st.useEffect(()=>{const o=navigator.userAgent;let a="Windows";o.includes("Macintosh")||o.includes("Mac OS X")?a="macOS":o.includes("Linux")?a="Linux":(o.includes("Android")||o.includes("iPhone")||o.includes("iPad"))&&(a="Desktop Required"),e(a);const l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o)||window.innerWidth<768;i(l)},[]),y.jsxs("div",{style:{position:"relative",minHeight:"100vh",background:"var(--bg-obsidian)"},children:[y.jsx(N1,{}),y.jsx(tM,{onDownloadClick:()=>s(!0),detectedOS:t}),y.jsx(pC,{detectedOS:t,isMobile:n,onDownloadClick:()=>s(!0)}),y.jsx(mC,{}),y.jsx(yC,{}),y.jsx(MC,{}),y.jsx(TC,{}),y.jsx(wC,{}),y.jsx(bC,{}),y.jsx(CC,{onDownloadClick:()=>s(!0),detectedOS:t}),y.jsx(RC,{isOpen:r,onClose:()=>s(!1),detectedOS:t})]})};Id.createRoot(document.getElementById("root")).render(y.jsx(My.StrictMode,{children:y.jsx(PC,{})}));
