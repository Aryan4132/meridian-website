var gy=Object.defineProperty;var xy=(t,e,n)=>e in t?gy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var dm=(t,e,n)=>xy(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z0={exports:{}},Xc={},V0={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),_y=Symbol.for("react.portal"),yy=Symbol.for("react.fragment"),Sy=Symbol.for("react.strict_mode"),My=Symbol.for("react.profiler"),Ey=Symbol.for("react.provider"),Ty=Symbol.for("react.context"),wy=Symbol.for("react.forward_ref"),by=Symbol.for("react.suspense"),Ay=Symbol.for("react.memo"),Cy=Symbol.for("react.lazy"),fm=Symbol.iterator;function Ry(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,W0={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||H0}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j0(){}j0.prototype=Ao.prototype;function Nh(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||H0}var Uh=Nh.prototype=new j0;Uh.constructor=Nh;G0(Uh,Ao.prototype);Uh.isPureReactComponent=!0;var hm=Array.isArray,X0=Object.prototype.hasOwnProperty,kh={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)X0.call(e,i)&&!q0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:t,key:s,ref:o,props:r,_owner:kh.current}}function Py(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function Dy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function Mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dy(""+t.key):e.toString(36)}function Gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case _y:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mu(o,0):i,hm(r)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),Gl(r,e,n,"",function(c){return c})):r!=null&&(Oh(r)&&(r=Py(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(pm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mu(s,a);o+=Gl(s,e,n,l,r)}else if(l=Ry(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mu(s,a++),o+=Gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return Gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ly(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Wl={transition:null},Iy={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:kh};function $0(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};lt.Component=Ao;lt.Fragment=yy;lt.Profiler=My;lt.PureComponent=Nh;lt.StrictMode=Sy;lt.Suspense=by;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;lt.act=$0;lt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=G0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)X0.call(e,l)&&!q0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:o}};lt.createContext=function(t){return t={$$typeof:Ty,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ey,_context:t},t.Consumer=t};lt.createElement=Y0;lt.createFactory=function(t){var e=Y0.bind(null,t);return e.type=t,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(t){return{$$typeof:wy,render:t}};lt.isValidElement=Oh;lt.lazy=function(t){return{$$typeof:Cy,_payload:{_status:-1,_result:t},_init:Ly}};lt.memo=function(t,e){return{$$typeof:Ay,type:t,compare:e===void 0?null:e}};lt.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};lt.unstable_act=$0;lt.useCallback=function(t,e){return _n.current.useCallback(t,e)};lt.useContext=function(t){return _n.current.useContext(t)};lt.useDebugValue=function(){};lt.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};lt.useEffect=function(t,e){return _n.current.useEffect(t,e)};lt.useId=function(){return _n.current.useId()};lt.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};lt.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};lt.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};lt.useMemo=function(t,e){return _n.current.useMemo(t,e)};lt.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};lt.useRef=function(t){return _n.current.useRef(t)};lt.useState=function(t){return _n.current.useState(t)};lt.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};lt.useTransition=function(){return _n.current.useTransition()};lt.version="18.3.1";V0.exports=lt;var He=V0.exports;const Fy=vy(He);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=He,Uy=Symbol.for("react.element"),ky=Symbol.for("react.fragment"),Oy=Object.prototype.hasOwnProperty,By=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zy={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Oy.call(e,i)&&!zy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uy,type:t,key:s,ref:o,props:r,_owner:By.current}}Xc.Fragment=ky;Xc.jsx=K0;Xc.jsxs=K0;z0.exports=Xc;var d=z0.exports,zd={},Z0={exports:{}},Vn={},Q0={exports:{}},J0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,I){var X=F.length;F.push(I);e:for(;0<X;){var te=X-1>>>1,re=F[te];if(0<r(re,I))F[te]=I,F[X]=re,X=te;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var I=F[0],X=F.pop();if(X!==I){F[0]=X;e:for(var te=0,re=F.length,je=re>>>1;te<je;){var Ke=2*(te+1)-1,Be=F[Ke],G=Ke+1,se=F[G];if(0>r(Be,X))G<re&&0>r(se,Be)?(F[te]=se,F[G]=X,te=G):(F[te]=Be,F[Ke]=X,te=Ke);else if(G<re&&0>r(se,X))F[te]=se,F[G]=X,te=G;else break e}}return I}function r(F,I){var X=F.sortIndex-I.sortIndex;return X!==0?X:F.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,u=3,m=!1,v=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(F){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=F)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function S(F){if(E=!1,M(F),!v)if(n(l)!==null)v=!0,q(w);else{var I=n(c);I!==null&&H(S,I.startTime-F)}}function w(F,I){v=!1,E&&(E=!1,f(_),_=-1),m=!0;var X=u;try{for(M(I),p=n(l);p!==null&&(!(p.expirationTime>I)||F&&!D());){var te=p.callback;if(typeof te=="function"){p.callback=null,u=p.priorityLevel;var re=te(p.expirationTime<=I);I=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&i(l),M(I)}else i(l);p=n(l)}if(p!==null)var je=!0;else{var Ke=n(c);Ke!==null&&H(S,Ke.startTime-I),je=!1}return je}finally{p=null,u=X,m=!1}}var T=!1,C=null,_=-1,A=5,P=-1;function D(){return!(t.unstable_now()-P<A)}function k(){if(C!==null){var F=t.unstable_now();P=F;var I=!0;try{I=C(!0,F)}finally{I?$():(T=!1,C=null)}}else T=!1}var $;if(typeof g=="function")$=function(){g(k)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,O=Q.port2;Q.port1.onmessage=k,$=function(){O.postMessage(null)}}else $=function(){x(k,0)};function q(F){C=F,T||(T=!0,$())}function H(F,I){_=x(function(){F(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,q(w))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(u){case 1:case 2:case 3:var I=3;break;default:I=u}var X=u;u=I;try{return F()}finally{u=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,I){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=u;u=F;try{return I()}finally{u=X}},t.unstable_scheduleCallback=function(F,I,X){var te=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?te+X:te):X=te,F){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=X+re,F={id:h++,callback:I,priorityLevel:F,startTime:X,expirationTime:re,sortIndex:-1},X>te?(F.sortIndex=X,e(c,F),n(l)===null&&F===n(c)&&(E?(f(_),_=-1):E=!0,H(S,X-te))):(F.sortIndex=re,e(l,F),v||m||(v=!0,q(w))),F},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(F){var I=u;return function(){var X=u;u=I;try{return F.apply(this,arguments)}finally{u=X}}}})(J0);Q0.exports=J0;var Vy=Q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy=He,zn=Vy;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ex=new Set,ma={};function xs(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(ma[t]=e,t=0;t<e.length;t++)ex.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vd=Object.prototype.hasOwnProperty,Gy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function Wy(t){return Vd.call(gm,t)?!0:Vd.call(mm,t)?!1:Gy.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function jy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xy(t,e,n,i){if(e===null||typeof e>"u"||jy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,zh);tn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,zh);tn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,zh);tn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xy(e,n,r,i)&&(n=null),i||r===null?Wy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var or=Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Hs=Symbol.for("react.portal"),Gs=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),tx=Symbol.for("react.provider"),nx=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Wd=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),ix=Symbol.for("react.offscreen"),xm=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var It=Object.assign,Eu;function $o(t){if(Eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eu=e&&e[1]||""}return`
`+Eu+t}var Tu=!1;function wu(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function qy(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gs:return"Fragment";case Hs:return"Portal";case Hd:return"Profiler";case Hh:return"StrictMode";case Gd:return"Suspense";case Wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nx:return(t.displayName||"Context")+".Consumer";case tx:return(t._context.displayName||"Context")+".Provider";case Gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:jd(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return jd(t(e))}catch{}}return null}function Yy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $y(t){var e=rx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=$y(t))}function sx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xd(t,e){var n=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ox(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function qd(t,e){ox(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yd(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yd(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function to(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ko(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function ax(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,cx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ky=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){Ky.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function ux(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function dx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ux(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Zy=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zd(t,e){if(e){if(Zy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ef=null,no=null,io=null;function Mm(t){if(t=Ba(t)){if(typeof ef!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Zc(e),ef(t.stateNode,t.type,e))}}function fx(t){no?io?io.push(t):io=[t]:no=t}function hx(){if(no){var t=no,e=io;if(io=no=null,Mm(t),e)for(t=0;t<e.length;t++)Mm(e[t])}}function px(t,e){return t(e)}function mx(){}var bu=!1;function gx(t,e,n){if(bu)return t(e,n);bu=!0;try{return px(t,e,n)}finally{bu=!1,(no!==null||io!==null)&&(mx(),hx())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=Zc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var tf=!1;if(er)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){tf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{tf=!1}function Qy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var sa=!1,hc=null,pc=!1,nf=null,Jy={onError:function(t){sa=!0,hc=t}};function eS(t,e,n,i,r,s,o,a,l){sa=!1,hc=null,Qy.apply(Jy,arguments)}function tS(t,e,n,i,r,s,o,a,l){if(eS.apply(this,arguments),sa){if(sa){var c=hc;sa=!1,hc=null}else throw Error(ae(198));pc||(pc=!0,nf=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Em(t){if(vs(t)!==t)throw Error(ae(188))}function nS(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Em(r),t;if(s===i)return Em(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function vx(t){return t=nS(t),t!==null?_x(t):null}function _x(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_x(t);if(e!==null)return e;t=t.sibling}return null}var yx=zn.unstable_scheduleCallback,Tm=zn.unstable_cancelCallback,iS=zn.unstable_shouldYield,rS=zn.unstable_requestPaint,Ot=zn.unstable_now,sS=zn.unstable_getCurrentPriorityLevel,Xh=zn.unstable_ImmediatePriority,Sx=zn.unstable_UserBlockingPriority,mc=zn.unstable_NormalPriority,oS=zn.unstable_LowPriority,Mx=zn.unstable_IdlePriority,qc=null,Ci=null;function aS(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:uS,lS=Math.log,cS=Math.LN2;function uS(t){return t>>>=0,t===0?32:31-(lS(t)/cS|0)|0}var Ka=64,Za=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),r=1<<n,i|=t[n],e&=~r;return i}function dS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=dS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ex(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function Au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function hS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var xt=0;function Tx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wx,Yh,bx,Ax,Cx,sf=!1,Qa=[],br=null,Ar=null,Cr=null,va=new Map,_a=new Map,yr=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function No(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function mS(t,e,n,i,r){switch(e){case"focusin":return br=No(br,t,e,n,i,r),!0;case"dragenter":return Ar=No(Ar,t,e,n,i,r),!0;case"mouseover":return Cr=No(Cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return va.set(s,No(va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_a.set(s,No(_a.get(s)||null,t,e,n,i,r)),!0}return!1}function Rx(t){var e=es(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=xx(n),e!==null){t.blockedOn=e,Cx(t.priority,function(){bx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jd=i,n.target.dispatchEvent(i),Jd=null}else return e=Ba(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function bm(t,e,n){jl(t)&&n.delete(e)}function gS(){sf=!1,br!==null&&jl(br)&&(br=null),Ar!==null&&jl(Ar)&&(Ar=null),Cr!==null&&jl(Cr)&&(Cr=null),va.forEach(bm),_a.forEach(bm)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,sf||(sf=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,gS)))}function ya(t){function e(r){return Uo(r,t)}if(0<Qa.length){Uo(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(br!==null&&Uo(br,t),Ar!==null&&Uo(Ar,t),Cr!==null&&Uo(Cr,t),va.forEach(e),_a.forEach(e),n=0;n<yr.length;n++)i=yr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)Rx(n),n.blockedOn===null&&yr.shift()}var ro=or.ReactCurrentBatchConfig,xc=!0;function xS(t,e,n,i){var r=xt,s=ro.transition;ro.transition=null;try{xt=1,$h(t,e,n,i)}finally{xt=r,ro.transition=s}}function vS(t,e,n,i){var r=xt,s=ro.transition;ro.transition=null;try{xt=4,$h(t,e,n,i)}finally{xt=r,ro.transition=s}}function $h(t,e,n,i){if(xc){var r=of(t,e,n,i);if(r===null)ku(t,e,i,vc,n),wm(t,i);else if(mS(r,t,e,n,i))i.stopPropagation();else if(wm(t,i),e&4&&-1<pS.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&wx(s),s=of(t,e,n,i),s===null&&ku(t,e,i,vc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ku(t,e,i,null,n)}}var vc=null;function of(t,e,n,i){if(vc=null,t=jh(i),t=es(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function Px(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sS()){case Xh:return 1;case Sx:return 4;case mc:case oS:return 16;case Mx:return 536870912;default:return 16}default:return 16}}var Er=null,Kh=null,Xl=null;function Dx(){if(Xl)return Xl;var t,e=Kh,n=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xl=r.slice(t,1<i?1-i:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Am(){return!1}function Hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Am,this.isPropagationStopped=Am,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=Hn(Co),Oa=It({},Co,{view:0,detail:0}),_S=Hn(Oa),Cu,Ru,ko,Yc=It({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ko&&(ko&&t.type==="mousemove"?(Cu=t.screenX-ko.screenX,Ru=t.screenY-ko.screenY):Ru=Cu=0,ko=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),Cm=Hn(Yc),yS=It({},Yc,{dataTransfer:0}),SS=Hn(yS),MS=It({},Oa,{relatedTarget:0}),Pu=Hn(MS),ES=It({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),TS=Hn(ES),wS=It({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bS=Hn(wS),AS=It({},Co,{data:0}),Rm=Hn(AS),CS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PS[t])?!!e[t]:!1}function Qh(){return DS}var LS=It({},Oa,{key:function(t){if(t.key){var e=CS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qh,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),IS=Hn(LS),FS=It({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=Hn(FS),NS=It({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qh}),US=Hn(NS),kS=It({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=Hn(kS),BS=It({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=Hn(BS),VS=[9,13,27,32],Jh=er&&"CompositionEvent"in window,oa=null;er&&"documentMode"in document&&(oa=document.documentMode);var HS=er&&"TextEvent"in window&&!oa,Lx=er&&(!Jh||oa&&8<oa&&11>=oa),Dm=" ",Lm=!1;function Ix(t,e){switch(t){case"keyup":return VS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function GS(t,e){switch(t){case"compositionend":return Fx(e);case"keypress":return e.which!==32?null:(Lm=!0,Dm);case"textInput":return t=e.data,t===Dm&&Lm?null:t;default:return null}}function WS(t,e){if(Ws)return t==="compositionend"||!Jh&&Ix(t,e)?(t=Dx(),Xl=Kh=Er=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lx&&e.locale!=="ko"?null:e.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jS[t.type]:e==="textarea"}function Nx(t,e,n,i){fx(i),e=_c(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,Sa=null;function XS(t){Xx(t,0)}function $c(t){var e=qs(t);if(sx(e))return t}function qS(t,e){if(t==="change")return e}var Ux=!1;if(er){var Du;if(er){var Lu="oninput"in document;if(!Lu){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),Lu=typeof Fm.oninput=="function"}Du=Lu}else Du=!1;Ux=Du&&(!document.documentMode||9<document.documentMode)}function Nm(){aa&&(aa.detachEvent("onpropertychange",kx),Sa=aa=null)}function kx(t){if(t.propertyName==="value"&&$c(Sa)){var e=[];Nx(e,Sa,t,jh(t)),gx(XS,e)}}function YS(t,e,n){t==="focusin"?(Nm(),aa=e,Sa=n,aa.attachEvent("onpropertychange",kx)):t==="focusout"&&Nm()}function $S(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(Sa)}function KS(t,e){if(t==="click")return $c(e)}function ZS(t,e){if(t==="input"||t==="change")return $c(e)}function QS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:QS;function Ma(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vd.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function km(t,e){var n=Um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function Ox(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ox(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bx(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JS(t){var e=Bx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ox(n.ownerDocument.documentElement,n)){if(i!==null&&ep(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=km(n,s);var o=km(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var e1=er&&"documentMode"in document&&11>=document.documentMode,js=null,af=null,la=null,lf=!1;function Om(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lf||js==null||js!==fc(i)||(i=js,"selectionStart"in i&&ep(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&Ma(la,i)||(la=i,i=_c(af,"onSelect"),0<i.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=js)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Iu={},zx={};er&&(zx=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Kc(t){if(Iu[t])return Iu[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zx)return Iu[t]=e[n];return t}var Vx=Kc("animationend"),Hx=Kc("animationiteration"),Gx=Kc("animationstart"),Wx=Kc("transitionend"),jx=new Map,Bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){jx.set(t,e),xs(e,[t])}for(var Fu=0;Fu<Bm.length;Fu++){var Nu=Bm[Fu],t1=Nu.toLowerCase(),n1=Nu[0].toUpperCase()+Nu.slice(1);zr(t1,"on"+n1)}zr(Vx,"onAnimationEnd");zr(Hx,"onAnimationIteration");zr(Gx,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Wx,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function zm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,tS(i,e,void 0,t),t.currentTarget=null}function Xx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zm(r,a,c),s=l}}}if(pc)throw t=nf,pc=!1,nf=null,t}function wt(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var i=t+"__bubble";n.has(i)||(qx(e,t,2,!1),n.add(i))}function Uu(t,e,n){var i=0;e&&(i|=4),qx(n,t,i,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[tl]){t[tl]=!0,ex.forEach(function(n){n!=="selectionchange"&&(i1.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,Uu("selectionchange",!1,e))}}function qx(t,e,n,i){switch(Px(e)){case 1:var r=xS;break;case 4:r=vS;break;default:r=$h}n=r.bind(null,e,n,t),r=void 0,!tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gx(function(){var c=s,h=jh(n),p=[];e:{var u=jx.get(t);if(u!==void 0){var m=Zh,v=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":m=IS;break;case"focusin":v="focus",m=Pu;break;case"focusout":v="blur",m=Pu;break;case"beforeblur":case"afterblur":m=Pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=SS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=US;break;case Vx:case Hx:case Gx:m=TS;break;case Wx:m=OS;break;case"scroll":m=_S;break;case"wheel":m=zS;break;case"copy":case"cut":case"paste":m=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pm}var E=(e&4)!==0,x=!E&&t==="scroll",f=E?u!==null?u+"Capture":null:u;E=[];for(var g=c,M;g!==null;){M=g;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,f!==null&&(S=xa(g,f),S!=null&&E.push(Ta(g,S,M)))),x)break;g=g.return}0<E.length&&(u=new m(u,v,null,n,h),p.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==Jd&&(v=n.relatedTarget||n.fromElement)&&(es(v)||v[tr]))break e;if((m||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?es(v):null,v!==null&&(x=vs(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(E=Cm,S="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(E=Pm,S="onPointerLeave",f="onPointerEnter",g="pointer"),x=m==null?u:qs(m),M=v==null?u:qs(v),u=new E(S,g+"leave",m,n,h),u.target=x,u.relatedTarget=M,S=null,es(h)===c&&(E=new E(f,g+"enter",v,n,h),E.target=M,E.relatedTarget=x,S=E),x=S,m&&v)t:{for(E=m,f=v,g=0,M=E;M;M=Ms(M))g++;for(M=0,S=f;S;S=Ms(S))M++;for(;0<g-M;)E=Ms(E),g--;for(;0<M-g;)f=Ms(f),M--;for(;g--;){if(E===f||f!==null&&E===f.alternate)break t;E=Ms(E),f=Ms(f)}E=null}else E=null;m!==null&&Vm(p,u,m,E,!1),v!==null&&x!==null&&Vm(p,x,v,E,!0)}}e:{if(u=c?qs(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var w=qS;else if(Im(u))if(Ux)w=ZS;else{w=$S;var T=YS}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(w=KS);if(w&&(w=w(t,c))){Nx(p,w,n,h);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Yd(u,"number",u.value)}switch(T=c?qs(c):window,t){case"focusin":(Im(T)||T.contentEditable==="true")&&(js=T,af=c,la=null);break;case"focusout":la=af=js=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,Om(p,n,h);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Om(p,n,h)}var C;if(Jh)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ws?Ix(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Lx&&n.locale!=="ko"&&(Ws||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ws&&(C=Dx()):(Er=h,Kh="value"in Er?Er.value:Er.textContent,Ws=!0)),T=_c(c,_),0<T.length&&(_=new Rm(_,t,null,n,h),p.push({event:_,listeners:T}),C?_.data=C:(C=Fx(n),C!==null&&(_.data=C)))),(C=HS?GS(t,n):WS(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(h=new Rm("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=C))}Xx(p,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xa(t,n),s!=null&&i.unshift(Ta(t,s,r)),s=xa(t,e),s!=null&&i.push(Ta(t,s,r))),t=t.return}return i}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=xa(n,s),l!=null&&o.unshift(Ta(n,l,a))):r||(l=xa(n,s),l!=null&&o.push(Ta(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var r1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(r1,`
`).replace(s1,"")}function nl(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(ae(425))}function yc(){}var cf=null,uf=null;function df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(t){return Gm.resolve(null).then(t).catch(l1)}:ff;function l1(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Ro,wa="__reactProps$"+Ro,tr="__reactContainer$"+Ro,hf="__reactEvents$"+Ro,c1="__reactListeners$"+Ro,u1="__reactHandles$"+Ro;function es(t){var e=t[Ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wm(t);t!==null;){if(n=t[Ti])return n;t=Wm(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[Ti]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Zc(t){return t[wa]||null}var pf=[],Ys=-1;function Vr(t){return{current:t}}function bt(t){0>Ys||(t.current=pf[Ys],pf[Ys]=null,Ys--)}function Tt(t,e){Ys++,pf[Ys]=t.current,t.current=e}var Ur={},fn=Vr(Ur),Tn=Vr(!1),as=Ur;function po(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function wn(t){return t=t.childContextTypes,t!=null}function Sc(){bt(Tn),bt(fn)}function jm(t,e,n){if(fn.current!==Ur)throw Error(ae(168));Tt(fn,e),Tt(Tn,n)}function Yx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Yy(t)||"Unknown",r));return It({},n,i)}function Mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,as=fn.current,Tt(fn,t),Tt(Tn,Tn.current),!0}function Xm(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Yx(t,e,as),i.__reactInternalMemoizedMergedChildContext=t,bt(Tn),bt(fn),Tt(fn,t)):bt(Tn),Tt(Tn,n)}var Wi=null,Qc=!1,Bu=!1;function $x(t){Wi===null?Wi=[t]:Wi.push(t)}function d1(t){Qc=!0,$x(t)}function Hr(){if(!Bu&&Wi!==null){Bu=!0;var t=0,e=xt;try{var n=Wi;for(xt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Wi=null,Qc=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(t+1)),yx(Xh,Hr),r}finally{xt=e,Bu=!1}}return null}var $s=[],Ks=0,Ec=null,Tc=0,Yn=[],$n=0,ls=null,Xi=1,qi="";function $r(t,e){$s[Ks++]=Tc,$s[Ks++]=Ec,Ec=t,Tc=e}function Kx(t,e,n){Yn[$n++]=Xi,Yn[$n++]=qi,Yn[$n++]=ls,ls=t;var i=Xi;t=qi;var r=32-pi(i)-1;i&=~(1<<r),n+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Xi=1<<32-pi(e)+r|n<<r|i,qi=s+t}else Xi=1<<s|n<<r|i,qi=t}function tp(t){t.return!==null&&($r(t,1),Kx(t,1,0))}function np(t){for(;t===Ec;)Ec=$s[--Ks],$s[Ks]=null,Tc=$s[--Ks],$s[Ks]=null;for(;t===ls;)ls=Yn[--$n],Yn[$n]=null,qi=Yn[--$n],Yn[$n]=null,Xi=Yn[--$n],Yn[$n]=null}var Bn=null,kn=null,At=!1,ui=null;function Zx(t,e){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bn=t,kn=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bn=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:Xi,overflow:qi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bn=t,kn=null,!0):!1;default:return!1}}function mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gf(t){if(At){var e=kn;if(e){var n=e;if(!qm(t,e)){if(mf(t))throw Error(ae(418));e=Rr(n.nextSibling);var i=Bn;e&&qm(t,e)?Zx(i,n):(t.flags=t.flags&-4097|2,At=!1,Bn=t)}}else{if(mf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,At=!1,Bn=t}}}function Ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function il(t){if(t!==Bn)return!1;if(!At)return Ym(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!df(t.type,t.memoizedProps)),e&&(e=kn)){if(mf(t))throw Qx(),Error(ae(418));for(;e;)Zx(t,e),e=Rr(e.nextSibling)}if(Ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=Bn?Rr(t.stateNode.nextSibling):null;return!0}function Qx(){for(var t=kn;t;)t=Rr(t.nextSibling)}function mo(){kn=Bn=null,At=!1}function ip(t){ui===null?ui=[t]:ui.push(t)}var f1=or.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function Jx(t){function e(f,g){if(t){var M=f.deletions;M===null?(f.deletions=[g],f.flags|=16):M.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Ir(f,g),f.index=0,f.sibling=null,f}function s(f,g,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<g?(f.flags|=2,g):M):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,M,S){return g===null||g.tag!==6?(g=Xu(M,f.mode,S),g.return=f,g):(g=r(g,M),g.return=f,g)}function l(f,g,M,S){var w=M.type;return w===Gs?h(f,g,M.props.children,S,M.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vr&&$m(w)===g.type)?(S=r(g,M.props),S.ref=Oo(f,g,M),S.return=f,S):(S=ec(M.type,M.key,M.props,null,f.mode,S),S.ref=Oo(f,g,M),S.return=f,S)}function c(f,g,M,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=qu(M,f.mode,S),g.return=f,g):(g=r(g,M.children||[]),g.return=f,g)}function h(f,g,M,S,w){return g===null||g.tag!==7?(g=os(M,f.mode,S,w),g.return=f,g):(g=r(g,M),g.return=f,g)}function p(f,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Xu(""+g,f.mode,M),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qa:return M=ec(g.type,g.key,g.props,null,f.mode,M),M.ref=Oo(f,null,g),M.return=f,M;case Hs:return g=qu(g,f.mode,M),g.return=f,g;case vr:var S=g._init;return p(f,S(g._payload),M)}if(Ko(g)||Io(g))return g=os(g,f.mode,M,null),g.return=f,g;rl(f,g)}return null}function u(f,g,M,S){var w=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return w!==null?null:a(f,g,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qa:return M.key===w?l(f,g,M,S):null;case Hs:return M.key===w?c(f,g,M,S):null;case vr:return w=M._init,u(f,g,w(M._payload),S)}if(Ko(M)||Io(M))return w!==null?null:h(f,g,M,S,null);rl(f,M)}return null}function m(f,g,M,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(M)||null,a(g,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qa:return f=f.get(S.key===null?M:S.key)||null,l(g,f,S,w);case Hs:return f=f.get(S.key===null?M:S.key)||null,c(g,f,S,w);case vr:var T=S._init;return m(f,g,M,T(S._payload),w)}if(Ko(S)||Io(S))return f=f.get(M)||null,h(g,f,S,w,null);rl(g,S)}return null}function v(f,g,M,S){for(var w=null,T=null,C=g,_=g=0,A=null;C!==null&&_<M.length;_++){C.index>_?(A=C,C=null):A=C.sibling;var P=u(f,C,M[_],S);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(f,C),g=s(P,g,_),T===null?w=P:T.sibling=P,T=P,C=A}if(_===M.length)return n(f,C),At&&$r(f,_),w;if(C===null){for(;_<M.length;_++)C=p(f,M[_],S),C!==null&&(g=s(C,g,_),T===null?w=C:T.sibling=C,T=C);return At&&$r(f,_),w}for(C=i(f,C);_<M.length;_++)A=m(C,f,_,M[_],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?_:A.key),g=s(A,g,_),T===null?w=A:T.sibling=A,T=A);return t&&C.forEach(function(D){return e(f,D)}),At&&$r(f,_),w}function E(f,g,M,S){var w=Io(M);if(typeof w!="function")throw Error(ae(150));if(M=w.call(M),M==null)throw Error(ae(151));for(var T=w=null,C=g,_=g=0,A=null,P=M.next();C!==null&&!P.done;_++,P=M.next()){C.index>_?(A=C,C=null):A=C.sibling;var D=u(f,C,P.value,S);if(D===null){C===null&&(C=A);break}t&&C&&D.alternate===null&&e(f,C),g=s(D,g,_),T===null?w=D:T.sibling=D,T=D,C=A}if(P.done)return n(f,C),At&&$r(f,_),w;if(C===null){for(;!P.done;_++,P=M.next())P=p(f,P.value,S),P!==null&&(g=s(P,g,_),T===null?w=P:T.sibling=P,T=P);return At&&$r(f,_),w}for(C=i(f,C);!P.done;_++,P=M.next())P=m(C,f,_,P.value,S),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?_:P.key),g=s(P,g,_),T===null?w=P:T.sibling=P,T=P);return t&&C.forEach(function(k){return e(f,k)}),At&&$r(f,_),w}function x(f,g,M,S){if(typeof M=="object"&&M!==null&&M.type===Gs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case qa:e:{for(var w=M.key,T=g;T!==null;){if(T.key===w){if(w=M.type,w===Gs){if(T.tag===7){n(f,T.sibling),g=r(T,M.props.children),g.return=f,f=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vr&&$m(w)===T.type){n(f,T.sibling),g=r(T,M.props),g.ref=Oo(f,T,M),g.return=f,f=g;break e}n(f,T);break}else e(f,T);T=T.sibling}M.type===Gs?(g=os(M.props.children,f.mode,S,M.key),g.return=f,f=g):(S=ec(M.type,M.key,M.props,null,f.mode,S),S.ref=Oo(f,g,M),S.return=f,f=S)}return o(f);case Hs:e:{for(T=M.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){n(f,g.sibling),g=r(g,M.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=qu(M,f.mode,S),g.return=f,f=g}return o(f);case vr:return T=M._init,x(f,g,T(M._payload),S)}if(Ko(M))return v(f,g,M,S);if(Io(M))return E(f,g,M,S);rl(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,M),g.return=f,f=g):(n(f,g),g=Xu(M,f.mode,S),g.return=f,f=g),o(f)):n(f,g)}return x}var go=Jx(!0),ev=Jx(!1),wc=Vr(null),bc=null,Zs=null,rp=null;function sp(){rp=Zs=bc=null}function op(t){var e=wc.current;bt(wc),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function so(t,e){bc=t,rp=Zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(rp!==t)if(t={context:t,memoizedValue:e,next:null},Zs===null){if(bc===null)throw Error(ae(308));Zs=t,bc.dependencies={lanes:0,firstContext:t}}else Zs=Zs.next=t;return e}var ts=null;function ap(t){ts===null?ts=[t]:ts.push(t)}function tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ap(e)):(n.next=r.next,r.next=n),e.interleaved=n,nr(t,i)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,nr(t,n)}return r=i.interleaved,r===null?(e.next=e,ap(i)):(e.next=r.next,r.next=e),i.interleaved=e,nr(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function Km(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=c=l=null,a=s;do{var u=a.lane,m=a.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,E=a;switch(u=e,m=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){p=v.call(m,p,u);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,u=typeof v=="function"?v.call(m,p,u):v,u==null)break e;p=It({},p,u);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else m={eventTime:m,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=p}}function Zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var za={},Ri=Vr(za),ba=Vr(za),Aa=Vr(za);function ns(t){if(t===za)throw Error(ae(174));return t}function cp(t,e){switch(Tt(Aa,e),Tt(ba,t),Tt(Ri,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kd(e,t)}bt(Ri),Tt(Ri,e)}function xo(){bt(Ri),bt(ba),bt(Aa)}function iv(t){ns(Aa.current);var e=ns(Ri.current),n=Kd(e,t.type);e!==n&&(Tt(ba,t),Tt(Ri,n))}function up(t){ba.current===t&&(bt(Ri),bt(ba))}var Ct=Vr(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function dp(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var $l=or.ReactCurrentDispatcher,Vu=or.ReactCurrentBatchConfig,cs=0,Dt=null,Vt=null,qt=null,Rc=!1,ca=!1,Ca=0,h1=0;function rn(){throw Error(ae(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function hp(t,e,n,i,r,s){if(cs=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?x1:v1,t=n(i,r),ca){s=0;do{if(ca=!1,Ca=0,25<=s)throw Error(ae(301));s+=1,qt=Vt=null,e.updateQueue=null,$l.current=_1,t=n(i,r)}while(ca)}if($l.current=Pc,e=Vt!==null&&Vt.next!==null,cs=0,qt=Vt=Dt=null,Rc=!1,e)throw Error(ae(300));return t}function pp(){var t=Ca!==0;return Ca=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Dt.memoizedState=qt=t:qt=qt.next=t,qt}function ti(){if(Vt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=qt===null?Dt.memoizedState:qt.next;if(e!==null)qt=e,Vt=t;else{if(t===null)throw Error(ae(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},qt===null?Dt.memoizedState=qt=t:qt=qt.next=t}return qt}function Ra(t,e){return typeof e=="function"?e(t):e}function Hu(t){var e=ti(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((cs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,Dt.lanes|=h,us|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Dt.lanes|=s,us|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gu(t){var e=ti(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rv(){}function sv(t,e){var n=Dt,i=ti(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,mp(lv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,av.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(ae(349));cs&30||ov(n,e,r)}return r}function ov(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function av(t,e,n,i){e.value=n,e.getSnapshot=i,cv(e)&&uv(t)}function lv(t,e,n){return n(function(){cv(e)&&uv(t)})}function cv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function uv(t){var e=nr(t,1);e!==null&&mi(e,t,1,-1)}function Qm(t){var e=Mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=g1.bind(null,Dt,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dv(){return ti().memoizedState}function Kl(t,e,n,i){var r=Mi();Dt.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function Jc(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&fp(i,o.deps)){r.memoizedState=Pa(e,n,s,i);return}}Dt.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function Jm(t,e){return Kl(8390656,8,t,e)}function mp(t,e){return Jc(2048,8,t,e)}function fv(t,e){return Jc(4,2,t,e)}function hv(t,e){return Jc(4,4,t,e)}function pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mv(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,pv.bind(null,e,t),n)}function gp(){}function gv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function xv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vv(t,e,n){return cs&21?(gi(n,e)||(n=Ex(),Dt.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function p1(t,e){var n=xt;xt=n!==0&&4>n?n:4,t(!0);var i=Vu.transition;Vu.transition={};try{t(!1),e()}finally{xt=n,Vu.transition=i}}function _v(){return ti().memoizedState}function m1(t,e,n){var i=Lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},yv(t))Sv(e,n);else if(n=tv(t,e,n,i),n!==null){var r=gn();mi(n,t,i,r),Mv(n,e,i)}}function g1(t,e,n){var i=Lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(yv(t))Sv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,ap(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tv(t,e,r,i),n!==null&&(r=gn(),mi(n,t,i,r),Mv(n,e,i))}}function yv(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function Sv(t,e){ca=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var Pc={readContext:ei,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},x1={readContext:ei,useCallback:function(t,e){return Mi().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:Jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4194308,4,pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Kl(4,2,t,e)},useMemo:function(t,e){var n=Mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=m1.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=Mi();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:gp,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=p1.bind(null,t[1]),Mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,r=Mi();if(At){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Yt===null)throw Error(ae(349));cs&30||ov(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jm(lv.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,av.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Mi(),e=Yt.identifierPrefix;if(At){var n=qi,i=Xi;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=h1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},v1={readContext:ei,useCallback:gv,useContext:ei,useEffect:mp,useImperativeHandle:mv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:xv,useReducer:Hu,useRef:dv,useState:function(){return Hu(Ra)},useDebugValue:gp,useDeferredValue:function(t){var e=ti();return vv(e,Vt.memoizedState,t)},useTransition:function(){var t=Hu(Ra)[0],e=ti().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:_v,unstable_isNewReconciler:!1},_1={readContext:ei,useCallback:gv,useContext:ei,useEffect:mp,useImperativeHandle:mv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:xv,useReducer:Gu,useRef:dv,useState:function(){return Gu(Ra)},useDebugValue:gp,useDeferredValue:function(t){var e=ti();return Vt===null?e.memoizedState=t:vv(e,Vt.memoizedState,t)},useTransition:function(){var t=Gu(Ra)[0],e=ti().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:_v,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=It({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:It({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Lr(t),s=$i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(mi(e,t,r,i),Yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Lr(t),s=$i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(mi(e,t,r,i),Yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=Lr(t),r=$i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pr(t,r,i),e!==null&&(mi(e,t,i,n),Yl(e,t,i))}};function eg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function Ev(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=wn(e)?as:fn.current,i=e.contextTypes,s=(i=i!=null)?po(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},lp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=wn(e)?as:fn.current,r.context=po(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&eu.enqueueReplaceState(r,r.state,null),Ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vo(t,e){try{var n="",i=e;do n+=qy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var y1=typeof WeakMap=="function"?WeakMap:Map;function Tv(t,e,n){n=$i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,Pf=i),yf(t,e)},n}function wv(t,e,n){n=$i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yf(t,e),typeof i!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new y1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=F1.bind(null,t,e,n),e.then(t,t))}function ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$i(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var S1=or.ReactCurrentOwner,En=!1;function pn(t,e,n,i){e.child=t===null?ev(e,null,n,i):go(e,t.child,n,i)}function sg(t,e,n,i,r){n=n.render;var s=e.ref;return so(e,r),i=hp(t,e,n,i,s,r),n=pp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ir(t,e,r)):(At&&n&&tp(e),e.flags|=1,pn(t,e,i,r),e.child)}function og(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bv(t,e,s,i,r)):(t=ec(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(o,i)&&t.ref===e.ref)return ir(t,e,r)}return e.flags|=1,t=Ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function bv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,ir(t,e,r)}return Sf(t,e,n,i,r)}function Av(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(Js,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Tt(Js,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Tt(Js,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Tt(Js,Fn),Fn|=i;return pn(t,e,r,n),e.child}function Cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sf(t,e,n,i,r){var s=wn(n)?as:fn.current;return s=po(e,s),so(e,r),n=hp(t,e,n,i,s,r),i=pp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ir(t,e,r)):(At&&i&&tp(e),e.flags|=1,pn(t,e,n,r),e.child)}function ag(t,e,n,i,r){if(wn(n)){var s=!0;Mc(e)}else s=!1;if(so(e,r),e.stateNode===null)Zl(t,e),Ev(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=wn(n)?as:fn.current,c=po(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&tg(e,o,i,c),_r=!1;var u=e.memoizedState;o.state=u,Ac(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Tn.current||_r?(typeof h=="function"&&(vf(e,n,h,i),l=e.memoizedState),(a=_r||eg(e,n,a,i,u,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,nv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,p=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=wn(n)?as:fn.current,l=po(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||u!==l)&&tg(e,o,i,l),_r=!1,u=e.memoizedState,o.state=u,Ac(e,i,o,r);var v=e.memoizedState;a!==p||u!==v||Tn.current||_r?(typeof m=="function"&&(vf(e,n,m,i),v=e.memoizedState),(c=_r||eg(e,n,c,i,u,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Mf(t,e,n,i,s,r)}function Mf(t,e,n,i,r,s){Cv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xm(e,n,!1),ir(t,e,s);i=e.stateNode,S1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=go(e,t.child,null,s),e.child=go(e,null,a,s)):pn(t,e,a,s),e.memoizedState=i.state,r&&Xm(e,n,!0),e.child}function Rv(t){var e=t.stateNode;e.pendingContext?jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(t,e.context,!1),cp(t,e.containerInfo)}function lg(t,e,n,i,r){return mo(),ip(r),e.flags|=256,pn(t,e,n,i),e.child}var Ef={dehydrated:null,treeContext:null,retryLane:0};function Tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pv(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Tt(Ct,r&1),t===null)return gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,i,0,null),t=os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tf(n),e.memoizedState=Ef,t):xp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return M1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ir(a,s):(s=os(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ef,i}return s=t.child,t=s.sibling,i=Ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xp(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,i){return i!==null&&ip(i),go(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function M1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wu(Error(ae(422))),sl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=iu({mode:"visible",children:i.children},r,0,null),s=os(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&go(e,t.child,null,o),e.child.memoizedState=Tf(o),e.memoizedState=Ef,s);if(!(e.mode&1))return sl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Wu(s,i,void 0),sl(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,nr(t,r),mi(i,t,r,-1))}return Ep(),i=Wu(Error(ae(421))),sl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=N1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,kn=Rr(r.nextSibling),Bn=e,At=!0,ui=null,t!==null&&(Yn[$n++]=Xi,Yn[$n++]=qi,Yn[$n++]=ls,Xi=t.id,qi=t.overflow,ls=e),e=xp(e,i.children),e.flags|=4096,e)}function cg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xf(t.return,e,n)}function ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Dv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cg(t,n,e);else if(t.tag===19)cg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Tt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function E1(t,e,n){switch(e.tag){case 3:Rv(e),mo();break;case 5:iv(e);break;case 1:wn(e.type)&&Mc(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Tt(wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Tt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?Pv(t,e,n):(Tt(Ct,Ct.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Tt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Dv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Tt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Av(t,e,n)}return ir(t,e,n)}var Lv,wf,Iv,Fv;Lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wf=function(){};Iv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ns(Ri.current);var s=null;switch(n){case"input":r=Xd(t,r),i=Xd(t,i),s=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),s=[];break;case"textarea":r=$d(t,r),i=$d(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yc)}Zd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Fv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bo(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function T1(t,e,n){var i=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return wn(e.type)&&Sc(),sn(e),null;case 3:return i=e.stateNode,xo(),bt(Tn),bt(fn),dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(If(ui),ui=null))),wf(t,e),sn(e),null;case 5:up(e);var r=ns(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)Iv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return sn(e),null}if(t=ns(Ri.current),il(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[wa]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)wt(Qo[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":vm(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":ym(i,s),wt("invalid",i)}Zd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":Ya(i),_m(i,s,!0);break;case"textarea":Ya(i),Sm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ti]=e,t[wa]=i,Lv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qd(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)wt(Qo[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":vm(t,i),r=Xd(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),wt("invalid",t);break;case"textarea":ym(t,i),r=$d(t,i),wt("invalid",t);break;default:r=i}Zd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&Vh(t,s,l,o))}switch(n){case"input":Ya(t),_m(t,i,!1);break;case"textarea":Ya(t),Sm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?to(t,!!i.multiple,s,!1):i.defaultValue!=null&&to(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)Fv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=ns(Aa.current),ns(Ri.current),il(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==n)&&(t=Bn,t!==null))switch(t.tag){case 3:nl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return sn(e),null;case 13:if(bt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&kn!==null&&e.mode&1&&!(e.flags&128))Qx(),mo(),e.flags|=98560,s=!1;else if(s=il(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Ti]=e}else mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else ui!==null&&(If(ui),ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Gt===0&&(Gt=3):Ep())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return xo(),wf(t,e),t===null&&Ea(e.stateNode.containerInfo),sn(e),null;case 10:return op(e.type._context),sn(e),null;case 17:return wn(e.type)&&Sc(),sn(e),null;case 19:if(bt(Ct),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bo(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,Bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Tt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ot()>_o&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return sn(e),null}else 2*Ot()-s.renderingStartTime>_o&&n!==1073741824&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,n=Ct.current,Tt(Ct,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return Mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function w1(t,e){switch(np(e),e.tag){case 1:return wn(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),bt(Tn),bt(fn),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return up(e),null;case 13:if(bt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(Ct),null;case 4:return xo(),null;case 10:return op(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var ol=!1,un=!1,b1=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function bf(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var ug=!1;function A1(t,e){if(cf=xc,t=Bx(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,u=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)u=p,p=m;for(;;){if(p===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++h===i&&(l=o),(m=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uf={focusedElem:t,selectionRange:n},xc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,x=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:ai(e.type,E),x);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Nt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return v=ug,ug=!1,v}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bf(e,n,s)}r=r.next}while(r!==i)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ti],delete e[wa],delete e[hf],delete e[c1],delete e[u1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uv(t){return t.tag===5||t.tag===3||t.tag===4}function dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yc));else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}var Kt=null,li=!1;function ur(t,e,n){for(n=n.child;n!==null;)kv(t,e,n),n=n.sibling}function kv(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:un||Qs(n,e);case 6:var i=Kt,r=li;Kt=null,ur(t,e,n),Kt=i,li=r,Kt!==null&&(li?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(li?(t=Kt,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),ya(t)):Ou(Kt,n.stateNode));break;case 4:i=Kt,r=li,Kt=n.stateNode.containerInfo,li=!0,ur(t,e,n),Kt=i,li=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bf(n,e,o),r=r.next}while(r!==i)}ur(t,e,n);break;case 1:if(!un&&(Qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,ur(t,e,n),un=i):ur(t,e,n);break;default:ur(t,e,n)}}function fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new b1),e.forEach(function(i){var r=U1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ii(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,li=!1;break e;case 3:Kt=a.stateNode.containerInfo,li=!0;break e;case 4:Kt=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(Kt===null)throw Error(ae(160));kv(s,o,r),Kt=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(e,t),vi(t),i&4){try{ua(3,t,t.return),tu(3,t)}catch(E){Nt(t,t.return,E)}try{ua(5,t,t.return)}catch(E){Nt(t,t.return,E)}}break;case 1:ii(e,t),vi(t),i&512&&n!==null&&Qs(n,n.return);break;case 5:if(ii(e,t),vi(t),i&512&&n!==null&&Qs(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(E){Nt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ox(r,s),Qd(a,o);var c=Qd(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?dx(r,p):h==="dangerouslySetInnerHTML"?cx(r,p):h==="children"?ga(r,p):Vh(r,h,p,c)}switch(a){case"input":qd(r,s);break;case"textarea":ax(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?to(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?to(r,!!s.multiple,s.defaultValue,!0):to(r,!!s.multiple,s.multiple?[]:"",!1))}r[wa]=s}catch(E){Nt(t,t.return,E)}}break;case 6:if(ii(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Nt(t,t.return,E)}}break;case 3:if(ii(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(E){Nt(t,t.return,E)}break;case 4:ii(e,t),vi(t);break;case 13:ii(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yp=Ot())),i&4&&fg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(un=(c=un)||h,ii(e,t),un=c):ii(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Te=t,h=t.child;h!==null;){for(p=Te=h;Te!==null;){switch(u=Te,m=u.child,u.tag){case 0:case 11:case 14:case 15:ua(4,u,u.return);break;case 1:Qs(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){Nt(i,n,E)}}break;case 5:Qs(u,u.return);break;case 22:if(u.memoizedState!==null){pg(p);continue}}m!==null?(m.return=u,Te=m):pg(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ux("display",o))}catch(E){Nt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){Nt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ii(e,t),vi(t),i&4&&fg(t);break;case 21:break;default:ii(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Uv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=dg(t);Rf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dg(t);Cf(t,a,o);break;default:throw Error(ae(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function C1(t,e,n){Te=t,Bv(t)}function Bv(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=ol;var c=un;if(ol=o,(un=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?mg(r):l!==null?(l.return=o,Te=l):mg(r);for(;s!==null;)Te=s,Bv(s),s=s.sibling;Te=r,ol=a,un=c}hg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):hg(t)}}function hg(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ya(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}un||e.flags&512&&Af(e)}catch(u){Nt(e,e.return,u)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function pg(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function mg(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{Af(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{Af(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var R1=Math.ceil,Dc=or.ReactCurrentDispatcher,vp=or.ReactCurrentOwner,Qn=or.ReactCurrentBatchConfig,mt=0,Yt=null,zt=null,en=0,Fn=0,Js=Vr(0),Gt=0,Da=null,us=0,nu=0,_p=0,da=null,Mn=null,yp=0,_o=1/0,Hi=null,Lc=!1,Pf=null,Dr=null,al=!1,Tr=null,Ic=0,fa=0,Df=null,Ql=-1,Jl=0;function gn(){return mt&6?Ot():Ql!==-1?Ql:Ql=Ot()}function Lr(t){return t.mode&1?mt&2&&en!==0?en&-en:f1.transition!==null?(Jl===0&&(Jl=Ex()),Jl):(t=xt,t!==0||(t=window.event,t=t===void 0?16:Px(t.type)),t):1}function mi(t,e,n,i){if(50<fa)throw fa=0,Df=null,Error(ae(185));ka(t,n,i),(!(mt&2)||t!==Yt)&&(t===Yt&&(!(mt&2)&&(nu|=n),Gt===4&&Sr(t,en)),bn(t,i),n===1&&mt===0&&!(e.mode&1)&&(_o=Ot()+500,Qc&&Hr()))}function bn(t,e){var n=t.callbackNode;fS(t,e);var i=gc(t,t===Yt?en:0);if(i===0)n!==null&&Tm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Tm(n),e===1)t.tag===0?d1(gg.bind(null,t)):$x(gg.bind(null,t)),a1(function(){!(mt&6)&&Hr()}),n=null;else{switch(Tx(i)){case 1:n=Xh;break;case 4:n=Sx;break;case 16:n=mc;break;case 536870912:n=Mx;break;default:n=mc}n=qv(n,zv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zv(t,e){if(Ql=-1,Jl=0,mt&6)throw Error(ae(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var i=gc(t,t===Yt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fc(t,i);else{e=i;var r=mt;mt|=2;var s=Hv();(Yt!==t||en!==e)&&(Hi=null,_o=Ot()+500,ss(t,e));do try{L1();break}catch(a){Vv(t,a)}while(!0);sp(),Dc.current=s,mt=r,zt!==null?e=0:(Yt=null,en=0,e=Gt)}if(e!==0){if(e===2&&(r=rf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=Da,ss(t,0),Sr(t,i),bn(t,Ot()),n;if(e===6)Sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!P1(r)&&(e=Fc(t,i),e===2&&(s=rf(t),s!==0&&(i=s,e=Lf(t,s))),e===1))throw n=Da,ss(t,0),Sr(t,i),bn(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Kr(t,Mn,Hi);break;case 3:if(Sr(t,i),(i&130023424)===i&&(e=yp+500-Ot(),10<e)){if(gc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ff(Kr.bind(null,t,Mn,Hi),e);break}Kr(t,Mn,Hi);break;case 4:if(Sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*R1(i/1960))-i,10<i){t.timeoutHandle=ff(Kr.bind(null,t,Mn,Hi),i);break}Kr(t,Mn,Hi);break;case 5:Kr(t,Mn,Hi);break;default:throw Error(ae(329))}}}return bn(t,Ot()),t.callbackNode===n?zv.bind(null,t):null}function Lf(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&If(e)),t}function If(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function P1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~_p,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function gg(t){if(mt&6)throw Error(ae(327));oo();var e=gc(t,0);if(!(e&1))return bn(t,Ot()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var i=rf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=Da,ss(t,0),Sr(t,e),bn(t,Ot()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,Mn,Hi),bn(t,Ot()),null}function Sp(t,e){var n=mt;mt|=1;try{return t(e)}finally{mt=n,mt===0&&(_o=Ot()+500,Qc&&Hr())}}function ds(t){Tr!==null&&Tr.tag===0&&!(mt&6)&&oo();var e=mt;mt|=1;var n=Qn.transition,i=xt;try{if(Qn.transition=null,xt=1,t)return t()}finally{xt=i,Qn.transition=n,mt=e,!(mt&6)&&Hr()}}function Mp(){Fn=Js.current,bt(Js)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o1(n)),zt!==null)for(n=zt.return;n!==null;){var i=n;switch(np(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sc();break;case 3:xo(),bt(Tn),bt(fn),dp();break;case 5:up(i);break;case 4:xo();break;case 13:bt(Ct);break;case 19:bt(Ct);break;case 10:op(i.type._context);break;case 22:case 23:Mp()}n=n.return}if(Yt=t,zt=t=Ir(t.current,null),en=Fn=e,Gt=0,Da=null,_p=nu=us=0,Mn=da=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ts=null}return t}function Vv(t,e){do{var n=zt;try{if(sp(),$l.current=Pc,Rc){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(cs=0,qt=Vt=Dt=null,ca=!1,Ca=0,vp.current=null,n===null||n.return===null){Gt=1,Da=e,zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=en,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=ig(o);if(m!==null){m.flags&=-257,rg(m,o,a,s,e),m.mode&1&&ng(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){ng(s,c,e),Ep();break e}l=Error(ae(426))}}else if(At&&a.mode&1){var x=ig(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),rg(x,o,a,s,e),ip(vo(l,a));break e}}s=l=vo(l,a),Gt!==4&&(Gt=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Tv(s,l,e);Km(s,f);break e;case 1:a=l;var g=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Dr===null||!Dr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=wv(s,a,e);Km(s,S);break e}}s=s.return}while(s!==null)}Wv(n)}catch(w){e=w,zt===n&&n!==null&&(zt=n=n.return);continue}break}while(!0)}function Hv(){var t=Dc.current;return Dc.current=Pc,t===null?Pc:t}function Ep(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Yt===null||!(us&268435455)&&!(nu&268435455)||Sr(Yt,en)}function Fc(t,e){var n=mt;mt|=2;var i=Hv();(Yt!==t||en!==e)&&(Hi=null,ss(t,e));do try{D1();break}catch(r){Vv(t,r)}while(!0);if(sp(),mt=n,Dc.current=i,zt!==null)throw Error(ae(261));return Yt=null,en=0,Gt}function D1(){for(;zt!==null;)Gv(zt)}function L1(){for(;zt!==null&&!iS();)Gv(zt)}function Gv(t){var e=Xv(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?Wv(t):zt=e,vp.current=null}function Wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=w1(n,e),n!==null){n.flags&=32767,zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,zt=null;return}}else if(n=T1(n,e,Fn),n!==null){zt=n;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Kr(t,e,n){var i=xt,r=Qn.transition;try{Qn.transition=null,xt=1,I1(t,e,n,i)}finally{Qn.transition=r,xt=i}return null}function I1(t,e,n,i){do oo();while(Tr!==null);if(mt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hS(t,s),t===Yt&&(zt=Yt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,qv(mc,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=xt;xt=1;var a=mt;mt|=4,vp.current=null,A1(t,n),Ov(n,t),JS(uf),xc=!!cf,uf=cf=null,t.current=n,C1(n),rS(),mt=a,xt=o,Qn.transition=s}else t.current=n;if(al&&(al=!1,Tr=t,Ic=r),s=t.pendingLanes,s===0&&(Dr=null),aS(n.stateNode),bn(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=Pf,Pf=null,t;return Ic&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===Df?fa++:(fa=0,Df=t):fa=0,Hr(),null}function oo(){if(Tr!==null){var t=Tx(Ic),e=Qn.transition,n=xt;try{if(Qn.transition=null,xt=16>t?16:t,Tr===null)var i=!1;else{if(t=Tr,Tr=null,Ic=0,mt&6)throw Error(ae(331));var r=mt;for(mt|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var h=Te;switch(h.tag){case 0:case 11:case 15:ua(8,h,s)}var p=h.child;if(p!==null)p.return=h,Te=p;else for(;Te!==null;){h=Te;var u=h.sibling,m=h.return;if(Nv(h),h===c){Te=null;break}if(u!==null){u.return=m,Te=u;break}Te=m}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Te=f;break e}Te=s.return}}var g=t.current;for(Te=g;Te!==null;){o=Te;var M=o.child;if(o.subtreeFlags&2064&&M!==null)M.return=o,Te=M;else e:for(o=g;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(w){Nt(a,a.return,w)}if(a===o){Te=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Te=S;break e}Te=a.return}}if(mt=r,Hr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(qc,t)}catch{}i=!0}return i}finally{xt=n,Qn.transition=e}}return!1}function xg(t,e,n){e=vo(n,e),e=Tv(t,e,1),t=Pr(t,e,1),e=gn(),t!==null&&(ka(t,1,e),bn(t,e))}function Nt(t,e,n){if(t.tag===3)xg(t,t,n);else for(;e!==null;){if(e.tag===3){xg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dr===null||!Dr.has(i))){t=vo(n,t),t=wv(e,t,1),e=Pr(e,t,1),t=gn(),e!==null&&(ka(e,1,t),bn(e,t));break}}e=e.return}}function F1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(en&n)===n&&(Gt===4||Gt===3&&(en&130023424)===en&&500>Ot()-yp?ss(t,0):_p|=n),bn(t,e)}function jv(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=gn();t=nr(t,e),t!==null&&(ka(t,e,n),bn(t,n))}function N1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jv(t,n)}function U1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),jv(t,n)}var Xv;Xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,E1(t,e,n);En=!!(t.flags&131072)}else En=!1,At&&e.flags&1048576&&Kx(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zl(t,e),t=e.pendingProps;var r=po(e,fn.current);so(e,n),r=hp(null,e,i,t,r,n);var s=pp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Mc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,lp(e),r.updater=eu,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=Mf(null,e,i,!0,s,n)):(e.tag=0,At&&s&&tp(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=O1(i),t=ai(i,t),r){case 0:e=Sf(null,e,i,t,n);break e;case 1:e=ag(null,e,i,t,n);break e;case 11:e=sg(null,e,i,t,n);break e;case 14:e=og(null,e,i,ai(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),ag(t,e,i,r,n);case 3:e:{if(Rv(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,nv(t,e),Ac(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=vo(Error(ae(423)),e),e=lg(t,e,i,n,r);break e}else if(i!==r){r=vo(Error(ae(424)),e),e=lg(t,e,i,n,r);break e}else for(kn=Rr(e.stateNode.containerInfo.firstChild),Bn=e,At=!0,ui=null,n=ev(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),i===r){e=ir(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return iv(e),t===null&&gf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,df(i,r)?o=null:s!==null&&df(i,s)&&(e.flags|=32),Cv(t,e),pn(t,e,o,n),e.child;case 6:return t===null&&gf(e),null;case 13:return Pv(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=go(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),sg(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Tt(wc,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!Tn.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,n),r=ei(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),og(t,e,i,r,n);case 15:return bv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Zl(t,e),e.tag=1,wn(i)?(t=!0,Mc(e)):t=!1,so(e,n),Ev(e,i,r),_f(e,i,r,n),Mf(null,e,i,!0,t,n);case 19:return Dv(t,e,n);case 22:return Av(t,e,n)}throw Error(ae(156,e.tag))};function qv(t,e){return yx(t,e)}function k1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,e,n,i){return new k1(t,e,n,i)}function Tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function O1(t){if(typeof t=="function")return Tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gh)return 11;if(t===Wh)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ec(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Tp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gs:return os(n.children,r,s,e);case Hh:o=8,r|=8;break;case Hd:return t=Zn(12,n,e,r|2),t.elementType=Hd,t.lanes=s,t;case Gd:return t=Zn(13,n,e,r),t.elementType=Gd,t.lanes=s,t;case Wd:return t=Zn(19,n,e,r),t.elementType=Wd,t.lanes=s,t;case ix:return iu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tx:o=10;break e;case nx:o=9;break e;case Gh:o=11;break e;case Wh:o=14;break e;case vr:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=Zn(7,t,i,e),t.lanes=n,t}function iu(t,e,n,i){return t=Zn(22,t,i,e),t.elementType=ix,t.lanes=n,t.stateNode={isHidden:!1},t}function Xu(t,e,n){return t=Zn(6,t,null,e),t.lanes=n,t}function qu(t,e,n){return e=Zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function B1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wp(t,e,n,i,r,s,o,a,l){return t=new B1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function z1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Yv(t){if(!t)return Ur;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(wn(n))return Yx(t,n,e)}return e}function $v(t,e,n,i,r,s,o,a,l){return t=wp(n,i,!0,t,r,s,o,a,l),t.context=Yv(null),n=t.current,i=gn(),r=Lr(n),s=$i(i,r),s.callback=e??null,Pr(n,s,r),t.current.lanes=r,ka(t,r,i),bn(t,i),t}function ru(t,e,n,i){var r=e.current,s=gn(),o=Lr(r);return n=Yv(n),e.context===null?e.context=n:e.pendingContext=n,e=$i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pr(r,e,o),t!==null&&(mi(t,r,o,s),Yl(t,r,o)),o}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){vg(t,e),(t=t.alternate)&&vg(t,e)}function V1(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}su.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));ru(t,e,null,null)};su.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){ru(null,t,null,null)}),e[tr]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ax();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&Rx(t)}};function Cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function H1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nc(o);s.call(c)}}var o=$v(e,i,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[tr]=o.current,Ea(t.nodeType===8?t.parentNode:t),ds(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Nc(l);a.call(c)}}var l=wp(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=l,t[tr]=l.current,Ea(t.nodeType===8?t.parentNode:t),ds(function(){ru(e,l,n,i)}),l}function au(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Nc(o);a.call(l)}}ru(e,o,t,r)}else o=H1(n,e,t,r,i);return Nc(o)}wx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(qh(e,n|1),bn(e,Ot()),!(mt&6)&&(_o=Ot()+500,Hr()))}break;case 13:ds(function(){var i=nr(t,1);if(i!==null){var r=gn();mi(i,t,1,r)}}),bp(t,1)}};Yh=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=gn();mi(e,t,134217728,n)}bp(t,134217728)}};bx=function(t){if(t.tag===13){var e=Lr(t),n=nr(t,e);if(n!==null){var i=gn();mi(n,t,e,i)}bp(t,e)}};Ax=function(){return xt};Cx=function(t,e){var n=xt;try{return xt=t,e()}finally{xt=n}};ef=function(t,e,n){switch(e){case"input":if(qd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zc(i);if(!r)throw Error(ae(90));sx(i),qd(i,r)}}}break;case"textarea":ax(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};px=Sp;mx=ds;var G1={usingClientEntryPoint:!1,Events:[Ba,qs,Zc,fx,hx,Sp]},zo={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W1={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vx(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||V1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{qc=ll.inject(W1),Ci=ll}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G1;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(ae(200));return z1(t,e,null,n)};Vn.createRoot=function(t,e){if(!Cp(t))throw Error(ae(299));var n=!1,i="",r=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wp(t,1,!1,null,null,n,!1,i,r),t[tr]=e.current,Ea(t.nodeType===8?t.parentNode:t),new Ap(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=vx(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return ds(t)};Vn.hydrate=function(t,e,n){if(!ou(e))throw Error(ae(200));return au(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!Cp(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$v(e,null,t,1,n??null,r,!1,s,o),t[tr]=e.current,Ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new su(e)};Vn.render=function(t,e,n){if(!ou(e))throw Error(ae(200));return au(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!ou(t))throw Error(ae(40));return t._reactRootContainer?(ds(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Vn.unstable_batchedUpdates=Sp;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ou(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return au(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function Zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv)}catch(t){console.error(t)}}Zv(),Z0.exports=Vn;var j1=Z0.exports,yg=j1;zd.createRoot=yg.createRoot,zd.hydrateRoot=yg.hydrateRoot;const X1=()=>{const t=He.useRef(null);return He.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight,o=0,a=0,l=0,c=0,h=0,p=window.scrollY;const u=Math.min(260,Math.floor(r*s/5500)),m=[],v=["#00f0ff","#7000ff","#ffffff","#ff00aa","#00ff88"],E=w=>{w.x=(Math.random()-.5)*r*2,w.y=(Math.random()-.5)*s*2,w.z=r,w.pz=r,w.size=.5+Math.random()*1.8,w.color=v[Math.floor(Math.random()*v.length)]};for(let w=0;w<u;w++){const T={x:0,y:0,z:0,pz:0,size:1,color:"#ffffff"};E(T),T.z=Math.random()*r,T.pz=T.z,m.push(T)}const x=()=>{e&&(r=e.width=window.innerWidth,s=e.height=window.innerHeight)},f=w=>{l=(w.clientX-r/2)*.2,c=(w.clientY-s/2)*.2},g=()=>{const w=window.scrollY,T=Math.abs(w-p);h=Math.min(35,h+T*.6),p=w};window.addEventListener("resize",x),window.addEventListener("mousemove",f),window.addEventListener("scroll",g,{passive:!0});const M=2.5,S=()=>{o+=(l-o)*.05,a+=(c-a)*.05,h*=.92;const w=M+h;n.fillStyle="#05070e",n.fillRect(0,0,r,s);const T=r/2+o,C=s/2+a;for(let _=0;_<m.length;_++){const A=m[_];if(A.pz=A.z,A.z-=w,A.z<=0){E(A);continue}const P=250/A.z,D=A.x*P+T,k=A.y*P+C,$=250/A.pz,Q=A.x*$+T,O=A.y*$+C;if(D>=0&&D<=r&&k>=0&&k<=s){const q=Math.min(1,(1-A.z/r)*1.2);n.strokeStyle=A.color,n.lineWidth=A.size*P*(1+h*.05),n.globalAlpha=q,n.beginPath(),n.moveTo(D,k),n.lineTo(Q,O),n.stroke(),n.fillStyle=A.color,n.beginPath(),n.arc(D,k,A.size*P*.5,0,Math.PI*2),n.fill()}}n.globalAlpha=1,i=requestAnimationFrame(S)};return S(),()=>{window.removeEventListener("resize",x),window.removeEventListener("mousemove",f),window.removeEventListener("scroll",g),cancelAnimationFrame(i)}},[]),d.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),it=(t,e)=>{const n=He.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},h)=>He.createElement("svg",{ref:h,...q1,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Y1(t)}`,a].join(" "),...c},[...e.map(([p,u])=>He.createElement(p,u)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=it("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=it("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=it("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=it("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=it("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=it("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=it("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=it("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=it("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=it("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=it("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=it("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=it("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=it("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=it("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=it("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=it("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=it("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=it("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=it("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=it("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=it("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=it("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=it("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=it("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=it("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=it("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=it("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=it("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=it("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=it("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=it("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=it("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=it("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=it("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=it("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=it("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=it("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=it("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=it("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Fi={version:"0.4.0",tagName:"v0.4.0",downloadUrlExe:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64-setup.exe",downloadUrlMsi:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64_en-US.msi",downloadUrlDmg:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_aarch64.dmg",downloadUrlDeb:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_amd64.deb",downloadUrlAppImage:"https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_amd64.AppImage",releaseNotesUrl:"https://github.com/Aryan4132/Meridian-X/releases/latest",publishedAt:new Date().toISOString(),isLive:!1,isLoading:!0};let cl=null;function Pp(){const[t,e]=He.useState(cl||Fi);return He.useEffect(()=>{if(cl){e(cl);return}let n=!0;return(async()=>{try{const r=await fetch("https://api.github.com/repos/Aryan4132/Meridian-X/releases/latest",{headers:{Accept:"application/vnd.github.v3+json"}});if(r.ok){const s=await r.json(),o=s.tag_name||"v0.4.0",a=o.replace(/^v/,"");let l=Fi.downloadUrlExe,c=Fi.downloadUrlMsi,h=Fi.downloadUrlDmg,p=Fi.downloadUrlDeb,u=Fi.downloadUrlAppImage;if(Array.isArray(s.assets)){const v=s.assets.find(M=>{var S;return(S=M.name)==null?void 0:S.endsWith(".exe")}),E=s.assets.find(M=>{var S;return(S=M.name)==null?void 0:S.endsWith(".msi")}),x=s.assets.find(M=>{var S;return(S=M.name)==null?void 0:S.endsWith(".dmg")}),f=s.assets.find(M=>{var S;return(S=M.name)==null?void 0:S.endsWith(".deb")}),g=s.assets.find(M=>{var S;return(S=M.name)==null?void 0:S.endsWith(".AppImage")});v!=null&&v.browser_download_url&&(l=v.browser_download_url),E!=null&&E.browser_download_url&&(c=E.browser_download_url),x!=null&&x.browser_download_url&&(h=x.browser_download_url),f!=null&&f.browser_download_url&&(p=f.browser_download_url),g!=null&&g.browser_download_url&&(u=g.browser_download_url)}const m={version:a,tagName:o,downloadUrlExe:l,downloadUrlMsi:c,downloadUrlDmg:h,downloadUrlDeb:p,downloadUrlAppImage:u,releaseNotesUrl:s.html_url||Fi.releaseNotesUrl,publishedAt:s.published_at||Fi.publishedAt,isLive:!0,isLoading:!1};cl=m,n&&e(m);return}}catch{}n&&e({...Fi,isLoading:!1})})(),()=>{n=!1}},[]),t}const vM=({onDownloadClick:t,detectedOS:e})=>{const[n,i]=He.useState(!1),[r,s]=He.useState(!1),o=Pp();return He.useEffect(()=>{const a=()=>{i(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),d.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",background:n?"rgba(3, 3, 3, 0.92)":"rgba(3, 3, 3, 0.5)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:n?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 255, 255, 0.04)",boxShadow:n?"0 12px 36px rgba(0, 0, 0, 0.9)":"none",padding:n?"12px 0":"18px 0"},children:[d.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("a",{href:"/",onClick:a=>{a.preventDefault(),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[d.jsx("img",{src:"/logo.png",alt:"Meridian-X Sovereign AI Workspace Logo",style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover",border:"1px solid rgba(255, 255, 255, 0.25)",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 255, 255, 0.15)"}}),d.jsx("div",{children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.3rem",letterSpacing:"-0.03em",color:"#FFFFFF"},children:["Meridian",d.jsx("span",{style:{color:"#A1A1AA",fontWeight:600},children:"-X"})]}),d.jsx("span",{className:"glass-pill",style:{fontSize:"0.68rem",padding:"2px 8px",color:"#FAFAFA",borderColor:"rgba(255, 255, 255, 0.2)",fontFamily:"var(--font-code)"},children:o.tagName})]})})]}),d.jsxs("nav",{className:"desktop-nav",style:{display:"flex",alignItems:"center",gap:"24px",background:"rgba(18, 18, 22, 0.8)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"9999px",padding:"6px 20px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)"},children:[d.jsx("a",{href:"#simulator",className:"nav-item-link",children:"Terminal Demo"}),d.jsx("a",{href:"#features",className:"nav-item-link",children:"Features"}),d.jsx("a",{href:"#architecture",className:"nav-item-link",children:"Architecture"}),d.jsx("a",{href:"#mcp",className:"nav-item-link",children:"MCP Marketplace"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsxs("button",{onClick:t,className:"btn-primary",style:{padding:"9px 18px",fontSize:"0.86rem",borderRadius:"10px"},children:[d.jsx(ji,{size:15}),d.jsx("span",{children:"Download"})]}),d.jsx("button",{onClick:()=>s(!r),className:"mobile-toggle",style:{background:"rgba(18, 18, 22, 0.8)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",color:"#FFFFFF",cursor:"pointer",padding:"8px",display:"none"},"aria-label":"Toggle menu",children:r?d.jsx(fu,{size:20}):d.jsx(aM,{size:20})})]})]}),r&&d.jsxs("div",{style:{background:"rgba(8, 8, 10, 0.98)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",padding:"24px",display:"flex",flexDirection:"column",gap:"16px",marginTop:"12px"},children:[d.jsx("a",{href:"#simulator",onClick:()=>s(!1),style:ul,children:"Terminal Demo"}),d.jsx("a",{href:"#features",onClick:()=>s(!1),style:ul,children:"Core Pillars"}),d.jsx("a",{href:"#architecture",onClick:()=>s(!1),style:ul,children:"Architecture"}),d.jsx("a",{href:"#mcp",onClick:()=>s(!1),style:ul,children:"MCP Marketplace"})]}),d.jsx("style",{children:`
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
      `})]})},ul={color:"#FAFAFA",textDecoration:"none",fontSize:"1.05rem",fontWeight:600};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Gr=typeof window<"u",$u=Gr?window:null,La=Gr?document:null,Rt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},ct={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Kn={NONE:0,AUTO:1,FORCE:2},mn={replace:0,none:1,blend:2},Sg=Symbol(),yo=Symbol(),s_=Symbol(),hu=Symbol(),_M=Symbol(),_t=1e-11,Nf=1e12,So=1e3,Uf=240,fs="",yM="var(",dl=[],o_=(()=>{const t=new Map;return t.set("x","translateX"),t.set("y","translateY"),t.set("z","translateZ"),t})(),kc=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],SM=kc.reduce((t,e)=>({...t,[e]:e+"("}),{}),Xn=()=>{},MM=t=>t,EM=/\)\s*[-.\d]/,TM=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,wM=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,bM=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,AM=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,CM=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Mg=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,a_=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,RM=/([a-z])([A-Z])/g,PM=/(\*=|\+=|-=)/,DM=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Oc={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:Uf,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:So,delay:0,loopDelay:0,ease:"out(2)",composition:mn.replace,modifier:MM,onBegin:Xn,onBeforeUpdate:Xn,onUpdate:Xn,onLoop:Xn,onPause:Xn,onComplete:Xn,onRender:Xn},LM={root:La},Zt={defaults:Oc,precision:4,timeScale:1,tickThreshold:200},l_={version:"4.5.0",engine:null};Gr&&($u.AnimeJS||($u.AnimeJS=[]),$u.AnimeJS.push(l_));/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const c_=t=>t.replace(RM,"$1-$2").toLowerCase(),Ki=(t,e)=>t.indexOf(e)===0,Mo=Date.now,Zi=Array.isArray,Ku=t=>t&&t.constructor===Object,Gi=t=>typeof t=="number"&&!isNaN(t),hs=t=>typeof t=="string",ps=t=>typeof t=="function",ft=t=>typeof t>"u",ao=t=>ft(t)||t===null,u_=t=>Gr&&t instanceof SVGElement,d_=t=>TM.test(t),f_=t=>Ki(t,"rgb"),h_=t=>Ki(t,"hsl"),IM=t=>d_(t)||(f_(t)||h_(t))&&(t[t.length-1]===")"||!EM.test(t)),tc=t=>!Zt.defaults.hasOwnProperty(t),FM=["opacity","rotate","overflow","color"],NM=(t,e)=>{if(FM.includes(e))return!1;if(t.getAttribute(e)||e in t){if(e==="scale"){const n=t.parentNode;return n&&n.tagName==="filter"}return!0}},Zu=t=>hs(t)?parseFloat(t):t,Bs=Math.pow,kf=Math.sqrt,UM=Math.sin,kM=Math.cos,fl=Math.abs,Jo=Math.floor,OM=Math.asin,Dp=Math.PI,Eg=Math.round,di=(t,e,n)=>t<e?e:t>n?n:t,Et=(t,e)=>{if(e<0)return t;if(!e)return Eg(t);const n=10**e;return Eg(t*n)/n},nc=(t,e,n)=>n===1?e:n===0?t:t+(e-t)*n,Lp=t=>t===1/0?Nf:t===-1/0?-Nf:t,ha=t=>t<=_t?_t:Lp(Et(t,11)),ln=t=>Zi(t)?[...t]:t,BM=(t,e)=>{const n={...t};for(let i in e){const r=t[i];n[i]=ft(r)?e[i]:r}return n},Ht=(t,e,n,i="_prev",r="_next")=>{let s=t._head,o=r;for(n&&(s=t._tail,o=i);s;){const a=s[o];e(s),s=a}},ea=(t,e,n="_prev",i="_next")=>{const r=e[n],s=e[i];r?r[i]=s:t._head=s,s?s[n]=r:t._tail=r,e[n]=null,e[i]=null},eo=(t,e,n,i="_prev",r="_next")=>{let s=t._tail;for(;s&&n&&n(s,e);)s=s[i];const o=s?s[r]:t._head;s?s[r]=e:t._head=e,o?o[i]=e:t._tail=e,e[i]=s,e[r]=o};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const zM=(t,e,n)=>{const i=t.style.transform;if(i){const r=t[hu];let s=0;const o=i.length;let a;for(;s<o;){for(;s<o&&i.charCodeAt(s)===32;)s++;if(s>=o)break;const c=s;for(;s<o&&i.charCodeAt(s)!==40;)s++;if(s>=o)break;const h=i.substring(c,s);let p=1;const u=s+1;let m=-1,v=-1;for(s++;s<o&&p>0;){const x=i.charCodeAt(s);x===40?p++:x===41?p--:x===44&&p===1&&(m===-1?m=s:v===-1&&(v=s)),s++}const E=s-1;h==="translate"||h==="translate3d"?(m===-1?r.translateX=i.substring(u,E).trim():(r.translateX=i.substring(u,m).trim(),v===-1?r.translateY=i.substring(m+1,E).trim():(r.translateY=i.substring(m+1,v).trim(),r.translateZ=i.substring(v+1,E).trim())),a=i.substring(u,E)):h==="scale"||h==="scale3d"?m===-1?r.scale=i.substring(u,E).trim():(r.scaleX=i.substring(u,m).trim(),v===-1?r.scaleY=i.substring(m+1,E).trim():(r.scaleY=i.substring(m+1,v).trim(),r.scaleZ=i.substring(v+1,E).trim())):r[h]=i.substring(u,E)}if(e==="translate3d"&&a)return n&&(n[e]=a),a;const l=r[e];if(!ft(l))return n&&(n[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":Ki(e,"scale")?"1":Ki(e,"rotate")||Ki(e,"skew")?"0deg":"0px"},p_=t=>{let e=fs;for(let n=0,i=kc.length;n<i;n++){const r=kc[n],s=t[r];if(s!==void 0){if(r==="translateX"){const o=t.translateY;if(o!==void 0){const a=t.translateZ;a!==void 0?(e+=`translate3d(${s},${o},${a}) `,n+=2):(e+=`translate(${s},${o}) `,n+=1);continue}}if(r==="scaleX"&&t.scale===void 0){const o=t.scaleY;if(o!==void 0){const a=t.scaleZ;a!==void 0?(e+=`scale3d(${s},${o},${a}) `,n+=2):(e+=`scale(${s},${o}) `,n+=1);continue}}e+=`${SM[r]}${s}) `}r==="rotateZ"&&t.rotate3d!==void 0&&(e+=`rotate3d(${t.rotate3d}) `)}return t.matrix!==void 0&&(e+=`matrix(${t.matrix}) `),t.matrix3d!==void 0&&(e+=`matrix3d(${t.matrix3d}) `),e};/**
 * Anime.js - adapters - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Qu=[];function m_(t,e){if(!t)return null;const n=Qu.length;e:for(let i=0;i<n;i++){const r=Qu[i];if(r.detect&&!r.detect(t))continue;const s=r.targetAdapters;for(let o=0,a=s.length;o<a;o++){const l=s[o];if(l.detect(t)){const c=l.props[e];if(c&&(!c.gate||c.gate(t)))return c;break e}}}for(let i=0;i<n;i++){const r=Qu[i];if(r.detect&&!r.detect(t))continue;const s=r.propertyResolvers;for(let o=0,a=s.length;o<a;o++){const l=s[o](t,e);if(l)return l}}return null}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const VM=t=>{const e=wM.exec(t)||bM.exec(t),n=ft(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],n]},HM=t=>{const e=t.length,n=e===4||e===5;return[+("0x"+t[1]+t[n?1:2]),+("0x"+t[n?2:3]+t[n?2:4]),+("0x"+t[n?3:5]+t[n?3:6]),e===5||e===9?+(+("0x"+t[n?4:7]+t[n?4:8])/255).toFixed(3):1]},Ju=(t,e,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t),GM=t=>{const e=AM.exec(t)||CM.exec(t),n=+e[1]/360,i=+e[2]/100,r=+e[3]/100,s=ft(e[4])?1:+e[4];let o,a,l;if(i===0)o=a=l=r;else{const c=r<.5?r*(1+i):r+i-r*i,h=2*r-c;o=Et(Ju(h,c,n+1/3)*255,0),a=Et(Ju(h,c,n)*255,0),l=Et(Ju(h,c,n-1/3)*255,0)}return[o,a,l,s]},WM=t=>f_(t)?VM(t):d_(t)?HM(t):h_(t)?GM(t):[0,0,0,1];/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Qt=(t,e)=>ft(t)?e:t,Tg=(t,e)=>{var s;const n=t.match(DM),i=e[yo]?e:document.documentElement;let r=(s=getComputedStyle(i))==null?void 0:s.getPropertyValue(n[1]);return(!r||r.trim()===fs)&&n[2]&&(r=n[2].trim()),r||0},Ni=(t,e,n,i,r,s)=>{if(ps(t)){if(!r){const a=t(e,n,i,s);return isNaN(+a)?a||0:+a}const o=()=>{const a=t(e,n,i,s);return isNaN(+a)?a||0:+a};return r.func=o,o()}if(hs(t)&&Ki(t,yM)){if(!r)return Tg(t,e);const o=()=>Tg(t,e);return r.func=o,o()}return t},g_=(t,e)=>t[yo]?t[s_]&&NM(t,e)?Rt.ATTRIBUTE:kc.includes(e)||o_.get(e)?Rt.TRANSFORM:Ki(e,"--")?Rt.CSS_VAR:e in t.style?Rt.CSS:e in t?Rt.OBJECT:Rt.ATTRIBUTE:Rt.OBJECT,wg=(t,e,n)=>{const i=t.style[e];i&&n&&(n[e]=i);const r=i||getComputedStyle(t[_M]||t).getPropertyValue(e);return r==="auto"?"0":r},zs=(t,e,n,i)=>{const r=ft(n)?g_(t,e):n,s=m_(t,e);if(s){const o=s.get(t);return o&&i&&(i[e]=o),o??0}if(r===Rt.OBJECT){const o=t[e];return o&&i&&(i[e]=o),o||0}if(r===Rt.ATTRIBUTE){const o=t.getAttribute(e);return o&&i&&(i[e]=o),o}return r===Rt.TRANSFORM?zM(t,e,i):r===Rt.CSS_VAR?wg(t,e,i).trimStart():wg(t,e,i)},ic=(t,e,n)=>n==="-"?t-e:n==="+"?t+e:t*e,Ip=()=>({t:ct.NUMBER,n:0,u:null,o:null,d:null,s:null}),jn=(t,e)=>{if(e.t=ct.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!t)return e;const n=+t;if(!isNaN(n))return e.n=n,e;let i=t;i[1]==="="&&(e.o=i[0],i=i.slice(2));const r=i.includes(" ")?!1:a_.exec(i);if(r)return e.t=ct.UNIT,e.n=+r[1],e.u=r[2],e;if(e.o)return e.n=+i,e;if(IM(i))return e.t=ct.COLOR,e.d=WM(i),e;{const s=i.match(Mg);return e.t=ct.COMPLEX,e.d=s?s.map(Number):[],e.s=i.split(Mg)||[],e}},bg=(t,e)=>(e.t=t._valueType,e.n=t._toNumber,e.u=t._unit,e.o=null,e.d=ln(t._toNumbers),e.s=ln(t._strings),e),ci=Ip(),x_=(t,e,n)=>{const i=t._modifier,r=t._fromNumbers,s=t._toNumbers,o=t._strings;let a=o[0];for(let l=0,c=s.length;l<c;l++){const h=i(Et(nc(r[l],s[l],e),n)),p=o[l+1];a+=`${p?h+p:h}`,t._numbers[l]=h}return a};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const rc=(t,e,n,i,r)=>{const s=t.parent,o=t.duration,a=t.completed,l=t.iterationDuration,c=t.iterationCount,h=t._currentIteration,p=t._loopDelay,u=t._reversed,m=t._alternate,v=t._hasChildren,E=t._delay,x=t._currentTime,f=E+l,g=e-E,M=di(x,-E,o),S=di(g,-E,o),w=g-x,T=S>0,C=S>=o,_=o<=_t,A=r===Kn.FORCE;let P=0,D=g,k=0;if(c>1){const H=l+(C?0:p),F=~~(S/H);t._currentIteration=di(F,0,c),C&&t._currentIteration--,P=t._currentIteration%2,D=S-F*H||0}const $=u^(m&&P),Q=t._ease;let O=C?$?0:o:$?l-D:D;Q&&(O=l*Q(O/l)||0);const q=(s?s.backwards:g<x)?!$:!!$;if(t._currentTime=g,t._iterationTime=O,t.backwards=q,T&&!t.began?(t.began=!0,!n&&!(s&&(q||!s.began))&&t.onBegin(t)):g<=0&&(t.began=!1),!n&&!v&&T&&t._currentIteration!==h&&t.onLoop(t),A||r===Kn.AUTO&&(e>=(s&&E>0?0:E)&&e<=f||e<=E&&M>E||e>=f&&M!==o)||O>=f&&M!==o||O<=E&&M>0&&!C||e<=M&&M===o&&a||C&&!a&&_){if(T&&(t.computeDeltaTime(M),n||t.onBeforeUpdate(t)),!v){const H=A||(q?w*-1:w)>=Zt.tickThreshold,F=Et(t._offset+(s?s._offset:0)+E+O,12);let I=t._head,X,te,re,je,Ke=0;for(;I;){const Be=I._composition,G=I._currentTime,se=I._changeDuration,ne=I._absoluteStartTime+I._changeDuration,ce=I._nextRep,Re=I._prevRep,ye=Be!==mn.none,Ae=Re?Re._absoluteStartTime+Re._changeDuration:0,Se=Re&&Re.parent!==I.parent,Ge=!ce||ce._isOverridden?ne:ce.parent===I.parent?ne+ce._delay:ce._absoluteStartTime<ce._absoluteUpdateStartTime?ce._absoluteStartTime:ce._absoluteUpdateStartTime;if((H||(G!==se||F<=Ge||Re&&!Se&&(!ce||ce.parent!==I.parent))&&(G!==0||F>=I._absoluteStartTime||Se&&!I._hasFromValue&&!Re._isOverridden&&F>=Ae||ce&&!ce._isOverridden&&ce.parent===I.parent&&ce._currentTime!==0&&O<ce._startTime))&&(!Re||Se||O>=I._startTime)&&(!ye||!I._isOverridden&&(!I._isOverlapped||F<=ne)&&(!ce||ce._isOverridden||F<=Ge)&&(!Re||Re._isOverridden||(Se?F>=I._absoluteStartTime||!I._hasFromValue&&F>=Ae:F>=Ae+I._delay)))){const ze=I._currentTime=di(O-I._startTime,0,se),Ce=I._ease(ze/I._updateDuration),Xe=I._modifier,tt=I._valueType,Qe=I._tweenType,Ne=Qe===Rt.OBJECT,De=tt===ct.NUMBER,qe=De&&Ne||Ce===0||Ce===1?-1:Zt.precision;let L,Ye;if(De)L=Ye=Xe(Et(nc(I._fromNumber,I._toNumber,Ce),qe));else if(tt===ct.UNIT)Ye=Xe(Et(nc(I._fromNumber,I._toNumber,Ce),qe)),L=`${Ye}${I._unit}`;else if(tt===ct.COLOR){const we=I._numbers,R=I._fromNumbers,y=I._toNumbers,U=1-Ce,V=R[0],K=R[1],oe=R[2],le=y[0],Z=y[1],J=y[2];we[0]=Xe(Math.sqrt(V*V*U+le*le*Ce)),we[1]=Xe(Math.sqrt(K*K*U+Z*Z*Ce)),we[2]=Xe(Math.sqrt(oe*oe*U+J*J*Ce)),we[3]=Xe(nc(R[3],y[3],Ce)),(!I._setter||i)&&(L=`rgba(${Et(we[0],0)},${Et(we[1],0)},${Et(we[2],0)},${we[3]})`)}else tt===ct.COMPLEX&&(L=x_(I,Ce,qe));if(ye&&(I._number=Ye),!i&&Be!==mn.blend){const we=I.property;X=I.target,I._setter?I._setter(X,Ye,I):Ne?X[we]=L:Qe===Rt.ATTRIBUTE?X.setAttribute(we,L):(te=X.style,Qe===Rt.TRANSFORM?(X!==re&&(re=X,je=X[hu]),je[we]=L,Ke=1):Qe===Rt.CSS?te[we]=L:Qe===Rt.CSS_VAR&&te.setProperty(we,L)),T&&(k=1)}else I._value=L}else G&&Re&&!Se&&O<I._startTime&&(I._currentTime=0);Ke&&I._renderTransforms&&(te.transform=p_(je),Ke=0),I=I._next}!n&&k&&t.onRender(t)}!n&&T&&t.onUpdate(t)}return s&&_?!n&&(s.began&&!q&&g>0&&!a||q&&g<=_t&&a)&&(t.onComplete(t),t.completed=!q):T&&C?c===1/0?t._startTime+=t.duration:t._currentIteration>=c-1&&(t.paused=!0,!a&&!v&&(t.completed=!0,!n&&!(s&&(q||!s.began))&&(t.onComplete(t),t._resolve(t)))):t.completed=!1,k},Vs=(t,e,n,i,r)=>{const s=t._currentIteration;if(rc(t,e,n,i,r),t._hasChildren){const o=t,a=o.backwards,l=i?e:o._iterationTime,c=Mo();let h=0,p=!0;if(!i&&o._currentIteration!==s){const u=o.iterationDuration;Ht(o,m=>{if(!a)!m.completed&&!m.backwards&&m._currentTime<m.iterationDuration&&rc(m,u,n,1,Kn.FORCE),m.began=!1,m.completed=!1;else{const v=m.duration,E=m._offset+m._delay,x=E+v;!n&&v<=_t&&(!E||x===u)&&m.onComplete(m)}}),n||o.onLoop(o)}Ht(o,u=>{const m=Et((l-u._offset)*u._speed,12);if(a&&m>u._delay+u.duration)return;const v=u._fps<o._fps?u.requestTick(c):r;h+=rc(u,m,n,i,v),!u.completed&&p&&(p=!1)},a),!n&&h&&o.onRender(o),(p||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,n||(o.onComplete(o),o._resolve(o))))}};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Ag={},jM=(t,e,n)=>{if(n===Rt.TRANSFORM){const i=o_.get(t);return i||t}else if(n===Rt.CSS||n===Rt.ATTRIBUTE&&u_(e)&&t in e.style){const i=Ag[t];if(i)return i;{const r=t&&c_(t);return Ag[t]=r,r}}else return t},v_=(t,e=!1)=>{if(t._hasChildren)Ht(t,n=>v_(n,e),!0);else{const n=t;n.pause(),Ht(n,i=>{const r=i.property,s=i.target,o=i._tweenType,a=i._inlineValue,l=ao(a)||a===fs;if(i._setter){if(!e&&!l){if(jn(a,ci),ci.d){const c=ci.d,h=i._numbers;for(let p=0,u=c.length;p<u;p++)h[p]=c[p]}else i._number=ci.n;i._setter(i.target,i._number,i)}}else if(o===Rt.OBJECT)!e&&!l&&(s[r]=a);else if(s[yo])if(o===Rt.ATTRIBUTE)e||(l?s.removeAttribute(r):s.setAttribute(r,a));else{const c=s.style;if(o===Rt.TRANSFORM){const h=s[hu];l?delete h[r]:h[r]=a,i._renderTransforms&&(Object.keys(h).length?c.transform=p_(h):c.removeProperty("transform"))}else l?c.removeProperty(c_(r)):c[r]=a}s[yo]&&n._tail===i&&n.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===fs&&c.removeAttribute("style")})})}return t};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */let __=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=So/Uf,this._fps=Uf,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const n=+e,i=n<_t?_t:n,r=So/i;i>Oc.frameRate&&(Oc.frameRate=i),this._fps=i,this._frameDuration=r}get speed(){return this._speed}set speed(e){const n=+e;this._speed=n<_t?_t:n}requestTick(e){const n=this._frameDuration,i=e-this._lastTickTime,r=n*.25,s=r<4?r:4;return i+s<n?Kn.NONE:(this._lastTickTime=i>=n?e-i%n:e,Kn.AUTO)}computeDeltaTime(e){const n=e-this._lastTime;return this.deltaTime=n,this._lastTime=e,n}};/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const lo={animation:null,update:Xn},XM=t=>{let e=lo.animation;return e||(e={duration:_t,computeDeltaTime:Xn,_offset:0,_delay:0,_head:null,_tail:null},lo.animation=e,lo.update=()=>{t.forEach(n=>{for(let i in n){const r=n[i],s=r._head;if(s){const o=s._valueType,a=o===ct.COMPLEX||o===ct.COLOR?ln(s._fromNumbers):null;let l=s._fromNumber,c=r._tail;for(;c&&c!==s;){if(a)for(let h=0,p=c._numbers.length;h<p;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}s._toNumber=l,s._toNumbers=a}}}),rc(e,1,1,0,Kn.FORCE)}),e};/**
 * Anime.js - engine - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const y_=Gr?requestAnimationFrame:setImmediate,qM=Gr?cancelAnimationFrame:clearImmediate;class YM extends __{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=Oc,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=Mo();if(this.requestTick(e)){this.computeDeltaTime(e);const n=this._speed,i=this._fps;let r=this._head;for(;r;){const s=r._next;r.paused?(ea(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):Vs(r,(e-r._startTime)*r._speed*n,0,0,r._fps<i?r.requestTick(e):Kn.AUTO),r=s}lo.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(Mo()),this.reqId=y_(S_)),this}pause(){if(this.reqId)return this.paused=!0,$M()}resume(){if(this.paused)return this.paused=!1,Ht(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Zt.timeScale===1?1:So)}set speed(e){const n=e*Zt.timeScale;this._speed!==n&&(this._speed=n,Ht(this,i=>i.speed=i._speed))}get timeUnit(){return Zt.timeScale===1?"ms":"s"}set timeUnit(e){const i=e==="s",r=i?.001:1;if(Zt.timeScale!==r){Zt.timeScale=r,Zt.tickThreshold=200*r;const s=i?.001:So;this.defaults.duration*=s,this._speed*=s}}get precision(){return Zt.precision}set precision(e){Zt.precision=e}}const cn=(()=>{const t=new YM(Mo());return Gr&&(l_.engine=t,La.addEventListener("visibilitychange",()=>{t.pauseOnDocumentHidden&&(La.hidden?t.pause():t.resume())})),t})(),S_=()=>{cn._head?(cn.reqId=y_(S_),cn.update()):cn.reqId=0},$M=()=>(qM(cn.reqId),cn.reqId=0,cn);/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Bc={_rep:new WeakMap,_add:new Map},Fp=(t,e,n="_rep")=>{const i=Bc[n];let r=i.get(t);return r||(r={},i.set(t,r)),r[e]?r[e]:r[e]={_head:null,_tail:null}},KM=(t,e)=>t._isOverridden||t._absoluteStartTime>e._absoluteStartTime,sc=t=>{t._isOverlapped=1,t._isOverridden=1,t._changeDuration=_t,t._currentTime=_t},M_=(t,e)=>{const n=t._composition;if(n===mn.replace){const i=t._absoluteStartTime;eo(e,t,KM,"_prevRep","_nextRep");const r=t._prevRep;if(r){const s=r.parent,o=r._absoluteEndTime;if(t.parent.id!==s.id&&s.iterationCount>1&&o+(s.duration-s.iterationDuration)>i){sc(r);let c=r._prevRep;for(;c&&c.parent.id===s.id;)sc(c),c=c._prevRep}const a=t._absoluteUpdateStartTime;if(o>a){const c=r._startTime,h=o-(c+r._updateDuration),p=Et(a-h-c,12);r._changeDuration=p,r._currentTime=p,r._isOverlapped=1,p<_t&&sc(r)}const l=t.parent.parent;if(!l||l!==s.parent){let c=!0;if(Ht(s,h=>{h._isOverlapped||(c=!1)}),c){const h=s.parent;if(h){let p=!0;Ht(h,u=>{u!==s&&Ht(u,m=>{m._isOverlapped||(p=!1)})}),p&&h.cancel()}else s.cancel()}}}}else if(n===mn.blend){const i=Fp(t.target,t.property,"_add"),r=XM(Bc._add);let s=i._head;s||(s={...t},s._composition=mn.replace,s._updateDuration=_t,s._startTime=0,s._numbers=ln(t._fromNumbers),s._number=0,s._next=null,s._prev=null,eo(i,s),eo(r,s));const o=t._toNumber;if(t._fromNumber=s._fromNumber-o,t._toNumber=0,t._numbers=ln(t._fromNumbers),t._number=0,s._fromNumber=o,t._toNumbers.length){const a=ln(t._toNumbers);a.forEach((l,c)=>{t._fromNumbers[c]=s._fromNumbers[c]-l,t._toNumbers[c]=0}),s._fromNumbers=a}eo(i,t,null,"_prevAdd","_nextAdd")}return t},ZM=t=>{const e=t._composition;if(e!==mn.none){const n=t.target,i=t.property,o=Bc._rep.get(n)[i];if(ea(o,t,"_prevRep","_nextRep"),e===mn.blend){const a=Bc._add,l=a.get(n);if(!l)return;const c=l[i],h=lo.animation;ea(c,t,"_prevAdd","_nextAdd");const p=c._head;if(p&&p===c._tail){ea(c,p,"_prevAdd","_nextAdd"),ea(h,p);let u=!0;for(let m in l)if(l[m]._head){u=!1;break}u&&a.delete(n)}}}return t};/**
 * Anime.js - timer - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Cg=t=>(t.paused=!0,t.began=!1,t.completed=!1,t),Of=t=>(t._cancelled&&(t._hasChildren?Ht(t,Of):Ht(t,e=>{e._composition!==mn.none&&M_(e,Fp(e.target,e.property))}),t._cancelled=0),t);let Rg=0;const QM=(t,e)=>t._priority>e._priority;class JM extends __{constructor(e={},n=null,i=0){super(0),++Rg;const{id:r,delay:s,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:p,frameRate:u,playbackRate:m,priority:v,onComplete:E,onLoop:x,onPause:f,onBegin:g,onBeforeUpdate:M,onUpdate:S}=e,w=n?0:cn._lastTickTime,T=n?n.defaults:Zt.defaults,C=ps(s)||ft(s)?T.delay:+s,_=ps(o)||ft(o)?1/0:+o,A=Qt(c,T.loop),P=Qt(h,T.loopDelay);let D=A===!0||A===1/0||A<0?1/0:A+1,k=0;n?k=i:(cn.reqId||cn.requestTick(Mo()),k=(cn._lastTickTime-cn._startTime)*Zt.timeScale),this.id=ft(r)?Rg:r,this.parent=n,this.duration=Lp((_+P)*D-P)||_t,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=g||T.onBegin,this.onBeforeUpdate=M||T.onBeforeUpdate,this.onUpdate=S||T.onUpdate,this.onLoop=x||T.onLoop,this.onPause=f||T.onPause,this.onComplete=E||T.onComplete,this.iterationDuration=_,this.iterationCount=D,this._autoplay=n?!1:Qt(p,T.autoplay),this._offset=k,this._delay=C,this._loopDelay=P,this._iterationTime=0,this._currentIteration=0,this._resolve=Xn,this._running=!1,this._reversed=+Qt(a,T.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Qt(l,T.alternate),this._prev=null,this._next=null,this._lastTickTime=w,this._startTime=w,this._lastTime=w,this._fps=Qt(u,T.frameRate),this._speed=Qt(m,T.playbackRate),this._priority=+Qt(v,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return di(Et(this._currentTime,Zt.precision),-this._delay,this.duration)}set currentTime(e){const n=this.paused;this.pause().seek(+e),n||this.resume()}get iterationCurrentTime(){return di(Et(this._iterationTime,Zt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return di(Et(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return di(Et(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const n=this.iterationDuration;this.currentTime=n*this._currentIteration+n*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*di(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return Of(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Vs(this,0,1,~~e,Kn.FORCE),Cg(this),this._hasChildren&&Ht(this,Cg),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Vs(this,this.duration,1,~~e,Kn.FORCE),this.reset(e);const n=this._autoplay;return n===!0?this.resume():n&&!ft(n.linked)&&n.link(this),this}resetTime(){const e=1/(this._speed*cn._speed);return this._startTime=Mo()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=_t&&!this._hasChildren?Vs(this,_t,0,0,Kn.FORCE):(this._running||(eo(cn,this,QM),cn._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,cn.wake()),this):this}restart(){return this.reset().resume()}seek(e,n=0,i=0){Of(this),this.completed=!1;const r=this.paused;return this.paused=!0,Vs(this,e+this._delay,~~n,~~i,Kn.AUTO),r?this:this.resume()}alternate(){const e=this._reversed,n=this.iterationCount,i=this.iterationDuration,r=n===1/0?Jo(Nf/i):n;return this._reversed=+(this._alternate&&!(r%2)?e:!e),n===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Ht(this,e=>e.cancel(),!0):Ht(this,ZM),this._cancelled=1,this.pause()}stretch(e){const n=this.duration,i=ha(e);if(n===i)return this;const r=e/n,s=e<=_t;return this.duration=s?_t:i,this.iterationDuration=s?_t:ha(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){Vs(this,0,1,0,Kn.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=Xn){const n=this.then,i=()=>{this.then=null,e(this),this.then=n,this._resolve=Xn};return new Promise(r=>(this._resolve=()=>r(i()),this.completed&&this._resolve(),this))}}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */function Pg(t){const e=hs(t)?LM.root.querySelectorAll(t):t;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function eE(t){if(ao(t))return[];if(!Gr)return Zi(t)&&t.flat(1/0)||[t];if(Zi(t)){const n=t.flat(1/0),i=[];for(let r=0,s=n.length;r<s;r++){const o=n[r];if(!ao(o)){const a=Pg(o);if(a)for(let l=0,c=a.length;l<c;l++){const h=a[l];if(!ao(h)){let p=!1;for(let u=0,m=i.length;u<m;u++)if(i[u]===h){p=!0;break}p||i.push(h)}}else{let l=!1;for(let c=0,h=i.length;c<h;c++)if(i[c]===o){l=!0;break}l||i.push(o)}}}return i}const e=Pg(t);return e?Array.from(e):[t]}function E_(t){const e=eE(t),n=e.length;for(let i=0;i<n;i++){const r=e[i];if(!r[Sg]){r[Sg]=!0;const s=u_(r);(r.nodeType||s)&&(r[yo]=!0,r[s_]=s,r[hu]={})}}return e}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const ed={deg:1,rad:180/Dp,turn:360},Dg={},Lg=(t,e,n,i=!1)=>{const r=e.u,s=e.n;if(e.t===ct.UNIT&&r===n)return e;const o=s+r+n,a=Dg[o];if(!ft(a)&&!i)e.n=a;else{let l;if(r in ed)l=s*ed[r]/ed[n];else{const h=t.cloneNode(),p=t.parentNode,u=p&&p!==La?p:La.body;u.appendChild(h);const m=h.style;m.width=100+r;const v=h.offsetWidth||100;m.width=100+n;const E=h.offsetWidth||100,x=v/E;u.removeChild(h),l=x*s}e.n=l,Dg[o]=l}return e.t,ct.UNIT,e.u=n,e};/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const kr=t=>t;/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Vo=(t=1.68)=>e=>Bs(e,+t),Bf={in:t=>e=>t(e),out:t=>e=>1-t(1-e),inOut:t=>e=>e<.5?t(e*2)/2:1-t(e*-2+2)/2,outIn:t=>e=>e<.5?(1-t(1-e*2))/2:(t(e*2-1)+1)/2},tE=Dp/2,Ig=Dp*2,Fg={[fs]:Vo,Quad:Vo(2),Cubic:Vo(3),Quart:Vo(4),Quint:Vo(5),Sine:t=>1-kM(t*tE),Circ:t=>1-kf(1-t*t),Expo:t=>t?Bs(2,10*t-10):0,Bounce:t=>{let e,n=4;for(;t<((e=Bs(2,--n))-1)/11;);return 1/Bs(4,3-n)-7.5625*Bs((e*3-2)/22-t,2)},Back:(t=1.7)=>e=>(+t+1)*e*e*e-+t*e*e,Elastic:(t=1,e=.3)=>{const n=di(+t,1,10),i=di(+e,_t,2),r=i/Ig*OM(1/n),s=Ig/i;return o=>o===0||o===1?o:-n*Bs(2,-10*(1-o))*UM((1-o-r)*s)}},td=(()=>{const t={linear:kr,none:kr};for(let e in Bf)for(let n in Fg){const i=Fg[n],r=Bf[e];t[e+n]=n===fs||n==="Back"||n==="Elastic"?(s,o)=>r(i(s,o)):r(i)}return t})(),hl={linear:kr,none:kr},nE=t=>{if(hl[t])return hl[t];if(t.indexOf("(")<=-1){const n=Bf[t]||t.includes("Back")||t.includes("Elastic")?td[t]():td[t];return n?hl[t]=n:kr}else{const e=t.slice(0,-1).split("("),n=td[e[0]];return n?hl[t]=n(...e[1].split(",")):kr}},Ng=["steps(","irregular(","linear(","cubicBezier("],zf=t=>{if(hs(t)){for(let n=0,i=Ng.length;n<i;n++)if(Ki(t,Ng[n]))return console.warn(`String syntax for \`ease: "${t}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${t}\``),kr}return ps(t)?t:hs(t)?nE(t):kr};/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const $e=Ip(),nt=Ip(),Es={},pl={func:null},ml={func:null},gl=[null],Ts=[null,null],xl={to:null};let iE=0,Ug=0,dr,_i;const rE=(t,e)=>{const n={};if(Zi(t)){const i=[].concat(...t.map(r=>Object.keys(r))).filter(tc);for(let r=0,s=i.length;r<s;r++){const o=i[r],a=t.map(l=>{const c={};for(let h in l){const p=l[h];tc(h)?h===o&&(c.to=p):c[h]=p}return c});n[o]=a}}else{const i=Qt(e.duration,Zt.defaults.duration);Object.keys(t).map(s=>({o:parseFloat(s)/100,p:t[s]})).sort((s,o)=>s.o-o.o).forEach(s=>{const o=s.o,a=s.p;for(let l in a)if(tc(l)){let c=n[l];c||(c=n[l]=[]);const h=o*i;let p=c.length,u=c[p-1];const m={to:a[l]};let v=0;for(let E=0;E<p;E++)v+=c[E].duration;p===1&&(m.from=u.to),a.ease&&(m.ease=a.ease),m.duration=h-(p?v:0),c.push(m)}return s});for(let s in n){const o=n[s];let a;for(let l=0,c=o.length;l<c;l++){const h=o[l],p=h.ease;h.ease=a||void 0,a=p}o[0].duration||o.shift()}}return n};class sE extends JM{constructor(e,n,i,r,s=!1,o=0,a){super(n,i,r),this._head,this._tail,++Ug;const l=E_(e),c=l.length,h=n.keyframes,p=h?BM(rE(h,n),n):n,{id:u,delay:m,duration:v,ease:E,playbackEase:x,modifier:f,composition:g,onRender:M}=p,S=i?i.defaults:Zt.defaults,w=Qt(E,S.ease),T=Qt(x,S.playbackEase),C=T?zf(T):null,_=!ft(w.ease),A=_?w.ease:Qt(E,C?"linear":S.ease),P=_?w.settlingDuration:Qt(v,S.duration),D=Qt(m,S.delay),k=f||S.modifier,$=ft(g)&&c>=So?mn.none:ft(g)?S.composition:g,Q=this._offset+(i?i._offset:0);_&&(w.parent=this);let O=NaN,q=NaN,H=0,F=0;for(let I=0;I<c;I++){const X=l[I],te=o||I,re=a||l;let je=NaN,Ke=NaN;for(let Be in p)if(tc(Be)){const G=g_(X,Be),se=m_(X,Be),ne=jM(Be,X,G);let ce=p[Be];const Re=Zi(ce);if(s&&!Re&&(Ts[0]=ce,Ts[1]=ce,ce=Ts),Re){const Ce=ce.length,Xe=!Ku(ce[0]);Ce===2&&Xe?(xl.to=ce,gl[0]=xl,dr=gl):Ce>2&&Xe?(dr=[],ce.forEach((tt,Qe)=>{Qe?Qe===1?(Ts[1]=tt,dr.push(Ts)):dr.push(tt):Ts[0]=tt})):dr=ce}else gl[0]=ce,dr=gl;let ye=null,Ae=null,Se=NaN,Ge=0,ze=0;for(let Ce=dr.length;ze<Ce;ze++){const Xe=dr[ze];Ku(Xe)?_i=Xe:(xl.to=Xe,_i=xl),pl.func=null,ml.func=null;const tt=Ni(Qt(_i.composition,$),X,te,re,null,null),Qe=Gi(tt)?tt:mn[tt];!ye&&Qe!==mn.none&&(ye=Fp(X,ne));const Ne=ye?ye._tail:null,De=i&&Ne&&Ne.parent.parent===i?Ne:Ae,qe=Ni(_i.to,X,te,re,pl,De);let L;Ku(qe)&&!ft(qe.to)?(_i=qe,L=qe.to):L=qe;const Ye=Ni(_i.from,X,te,re,ml,De),we=_i.ease||A,R=Ni(we,X,te,re,null,De),y=ps(R)||hs(R)?R:we,U=!ft(y)&&!ft(y.ease),V=U?y.ease:y,K=U?y.settlingDuration:Ni(Qt(_i.duration,Ce>1?Ni(P,X,te,re,null,De)/Ce:P),X,te,re,null,De),oe=Ni(Qt(_i.delay,ze?0:D),X,te,re,null,De),le=_i.modifier||k,Z=!ft(Ye),J=!ft(L),ue=Zi(L),Le=ue||Z&&J,pe=Ae?Ge:0,he=Ae?Ge+oe:oe,Ie=Et(Q+he,12),Ve=Et(Q+pe,12);!F&&(Z||ue)&&(F=1);let Oe=Ae;if(Qe!==mn.none){let Ue=ye._head;for(;Ue&&Ue._absoluteStartTime<=Ie;)if(Ue._isOverridden||(Oe=Ue),Ue=Ue._nextRep,Ue&&Ue._absoluteStartTime>=Ie)for(;Ue;)sc(Ue),Ue=Ue._nextRep}if(Le){jn(ue?Ni(L[0],X,te,re,ml,De):Ye,$e),jn(ue?Ni(L[1],X,te,re,pl,De):L,nt);const Ue=zs(X,ne,G,Es);$e.t===ct.NUMBER&&(Oe?Oe._valueType===ct.UNIT&&($e.t=ct.UNIT,$e.u=Oe._unit):(jn(Ue,ci),ci.t===ct.UNIT&&($e.t=ct.UNIT,$e.u=ci.u)))}else J?jn(L,nt):Ae?bg(Ae,nt):jn(i&&Oe&&Oe.parent.parent===i?Oe._value:zs(X,ne,G,Es),nt),Z?jn(Ye,$e):Ae?bg(Ae,$e):jn(i&&Oe&&Oe.parent.parent===i?Oe._value:zs(X,ne,G,Es),$e);if($e.o&&($e.n=ic(Oe?Oe._toNumber:jn(zs(X,ne,G,Es),ci).n,$e.n,$e.o)),nt.o&&(nt.n=ic($e.n,nt.n,nt.o)),$e.t!==nt.t){if($e.t===ct.COMPLEX||nt.t===ct.COMPLEX){const Ue=$e.t===ct.COMPLEX?$e:nt,Je=$e.t===ct.COMPLEX?nt:$e;Je.t=ct.COMPLEX,Je.s=ln(Ue.s),Je.d=Ue.d.map(()=>Je.n)}else if($e.t===ct.UNIT||nt.t===ct.UNIT){const Ue=$e.t===ct.UNIT?$e:nt,Je=$e.t===ct.UNIT?nt:$e;Je.t=ct.UNIT,Je.u=Ue.u}else if($e.t===ct.COLOR||nt.t===ct.COLOR){const Ue=$e.t===ct.COLOR?$e:nt,Je=$e.t===ct.COLOR?nt:$e;Je.t=ct.COLOR,Je.d=Ue.d.map(()=>0)}}if($e.u!==nt.u){let Ue=nt.u?$e:nt;Ue=Lg(X,Ue,nt.u?nt.u:$e.u,!1)}if(nt.d&&$e.d&&nt.d.length!==$e.d.length){const Ue=$e.d.length>nt.d.length?$e:nt,Je=Ue===$e?nt:$e;Je.d=Ue.d.map((ni,Rn)=>ft(Je.d[Rn])?0:Je.d[Rn]),Je.s=ln(Ue.s)}const N=Et(+K||_t,12);let de=Es[ne];ao(de)||(Es[ne]=null);const ee=se?se.set:null;Ge=Et(he+N,12);const fe=$e.d,me=nt.d,ie=nt.s,_e={parent:this,id:iE++,property:ne,target:X,_value:null,_toFunc:pl.func,_fromFunc:ml.func,_ease:zf(V),_fromNumbers:fe?ln(fe):dl,_toNumbers:me?ln(me):dl,_strings:ie?ln(ie):dl,_fromNumber:$e.n,_toNumber:nt.n,_numbers:fe?ln(fe):dl,_number:$e.n,_unit:nt.u,_modifier:le,_currentTime:0,_startTime:he,_delay:+oe,_updateDuration:N,_changeDuration:N,_absoluteStartTime:Ie,_absoluteUpdateStartTime:Ve,_absoluteEndTime:Et(Q+Ge,12),_hasFromValue:Z||ue?1:0,_tweenType:G,_setter:ee,_valueType:nt.t,_composition:Qe,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:de,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};Qe!==mn.none&&M_(_e,ye);const be=_e._valueType;if(be===ct.COMPLEX)_e._value=x_(_e,1,-1);else if(be===ct.UNIT)_e._value=`${le(_e._toNumber)}${_e._unit}`;else if(be===ct.COLOR){const Ue=nt.d;_e._value=`rgba(${Et(Ue[0],0)},${Et(Ue[1],0)},${Et(Ue[2],0)},${Ue[3]})`}else _e._value=le(_e._toNumber);isNaN(Se)&&(Se=_e._startTime),Ae=_e,H++,eo(this,_e)}(isNaN(q)||Se<q)&&(q=Se),(isNaN(O)||Ge>O)&&(O=Ge),G===Rt.TRANSFORM&&(je=H-ze,Ke=H)}if(!isNaN(je)){let Be=0;Ht(this,G=>{Be>=je&&Be<Ke&&(G._renderTransforms=1,G._composition===mn.blend&&Ht(lo.animation,se=>{se.id===G.id&&(se._renderTransforms=1)})),Be++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),q?(Ht(this,I=>{I._startTime-I._delay||(I._delay-=q),I._startTime-=q}),O-=q):q=0,O||(O=_t,this.iterationCount=0),this.targets=l,this.id=ft(u)?Ug:u,this.duration=O===_t?_t:Lp((O+this._loopDelay)*this.iterationCount-this._loopDelay)||_t,this.onRender=M||S.onRender,this._ease=C,this._delay=q,this.iterationDuration=O,!this._autoplay&&F&&this.onRender(this)}stretch(e){const n=this.duration;if(n===ha(e))return this;const i=e/n;return Ht(this,r=>{r._updateDuration=ha(r._updateDuration*i),r._changeDuration=ha(r._changeDuration*i),r._currentTime*=i,r._delay*=i,r._startTime*=i,r._absoluteStartTime*=i,r._absoluteUpdateStartTime*=i,r._absoluteEndTime*=i}),super.stretch(e)}refresh(){return Ht(this,e=>{const n=e._toFunc,i=e._fromFunc;(n||i)&&(i?(jn(i(),$e),$e.u!==e._unit&&e.target[yo]&&Lg(e.target,$e,e._unit,!0),e._fromNumbers=ln($e.d),e._fromNumber=$e.n):n&&(jn(zs(e.target,e.property,e._tweenType),ci),e._fromNumbers=ln(ci.d),e._fromNumber=ci.n),n&&(jn(n(),nt),e._toNumbers=ln(nt.d),e._strings=ln(nt.s),e._toNumber=nt.o?ic(e._fromNumber,nt.n,nt.o):nt.n))}),this.duration===_t&&this.restart(),this}revert(){return super.revert(),v_(this)}then(e){return super.then(e)}}const Vf=(t,e)=>new sE(t,e,null,0,!1).init();/**
 * Anime.js - timeline - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const oE=(t,e)=>{if(Ki(e,"<")){const n=e[1]==="<",i=t._tail,r=i?i._offset+i._delay:0;return n?r:r+i.duration}},aE=(t,e)=>{let n=t.iterationDuration;if(n===_t&&(n=0),ft(e))return n;if(Gi(+e))return+e;const i=e,r=t?t.labels:null,s=!ao(r),o=oE(t,i),a=!ft(o),l=PM.exec(i);if(l){const c=l[0],h=i.split(c),p=s&&h[0]?r[h[0]]:n,u=a?o:s?p:n,m=+h[1];return ic(u,m,c[0])}else return a?o:s?ft(r[i])?n:r[i]:n};/**
 * Anime.js - utils - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const T_=(t=0,e=1,n=0)=>{const i=10**n;return Math.floor((Math.random()*(e-t+1/i)+t)*i)/i};let lE=0;const cE=(t,e=0,n=1,i=0)=>{let r=t===void 0?lE++:t;return(s=e,o=n,a=i)=>{r+=1831565813,r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61);const l=10**a;return Math.floor((((r^r>>>14)>>>0)/4294967296*(o-s+1/l)+s)*l)/l}},uE=(t,e=T_)=>{let n=t.length,i,r;for(;n;)r=e(0,--n),i=t[n],t[n]=t[r],t[r]=i;return t};/**
 * Anime.js - utils - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const dE=(t,e={})=>{let n=[],i=0,r,s=null;const o=e.from,a=e.reversed,l=e.ease,c=!ft(l),p=c&&!ft(l.ease)?l.ease:c?zf(l):null,u=e.grid,m=u===!0,v=e.axis,E=e.total,x=ft(o)||o===0||o==="first",f=o==="center",g=o==="last",M=o==="random",S=Zi(o),w=Zi(t),T=e.use,C=Zu(w?t[0]:t),_=w?Zu(t[1]):0,A=a_.exec((w?t[1]:t)+fs),P=e.start||0+(w?C:0),D=e.seed,$=!ft(D)&&D!==!1?cE(D===!0?0:D):T_,Q=e.jitter,O=!ft(Q),q=Zi(Q),H=q?Q[0]:Q||0,F=q?Q[1]:Q||0;let I=x?0:Gi(o)?o:0;return(X,te,re,je,Ke)=>{const[Be]=E_(X),G=ft(E)?re.length:E,se=ft(T)?!1:ps(T)?T(Be,te,G):zs(Be,T),ne=Gi(se)||hs(se)&&Gi(+se)?+se:te,ce=ne>=0&&ne<G?ne:te;if(f&&(I=(G-1)/2),g&&(I=G-1),!n.length){if(m){let Ae=!0,Se=!1,Ge=1/0,ze=1/0,Ce=1/0,Xe=-1/0,tt=-1/0,Qe=-1/0;const Ne=[],De=[],qe=[];for(let L=0;L<G;L++){const Ye=re[L];let we=0,R=0,y=0,U=!1;if(Ye&&ps(Ye.getBoundingClientRect)){const V=Ye.getBoundingClientRect();we=V.left+V.width/2,R=V.top+V.height/2,U=!0}else{const V=Ye;V&&Gi(V.x)&&Gi(V.y)&&(we=V.x,R=V.y,Gi(V.z)&&(y=V.z,Se=!0),U=!0)}if(!U){Ae=!1;break}Ne.push(we),De.push(R),qe.push(y),we<Ge&&(Ge=we),R<ze&&(ze=R),y<Ce&&(Ce=y),we>Xe&&(Xe=we),R>tt&&(tt=R),y>Qe&&(Qe=y)}if(Ae){let L=Ne[0],Ye=De[0],we=qe[0];S?(L=Ge+o[0]*(Xe-Ge),Ye=ze+o[1]*(tt-ze),we=Se?Ce+(o.length>=3?o[2]:.5)*(Qe-Ce):0):f?(L=(Ge+Xe)/2,Ye=(ze+tt)/2,we=(Ce+Qe)/2):g?(L=Ne[G-1],Ye=De[G-1],we=qe[G-1]):Gi(o)&&(L=Ne[o],Ye=De[o],we=qe[o]);for(let y=0;y<G;y++){const U=L-Ne[y],V=Ye-De[y],K=we-qe[y];let oe=kf(U*U+V*V+(Se?K*K:0));v==="x"&&(oe=-U),v==="y"&&(oe=-V),v==="z"&&(oe=-K),n.push(oe)}let R=1/0;for(let y=0;y<G;y++){const U=fl(n[y]);U>0&&U<R&&(R=U)}if(R>0&&R<1/0)for(let y=0;y<G;y++)n[y]=n[y]/R}else for(let L=0;L<G;L++)n.push(fl(I-L))}else for(let Ae=0;Ae<G;Ae++)if(!u)n.push(fl(I-Ae));else{const Se=u.length,Ge=u[0]*u[1];let ze,Ce,Xe;S?(ze=o[0]*(u[0]-1),Ce=o[1]*(u[1]-1),Xe=Se===3?(o.length>=3?o[2]:.5)*(u[2]-1):0):f?(ze=(u[0]-1)/2,Ce=(u[1]-1)/2,Xe=Se===3?(u[2]-1)/2:0):(ze=I%u[0],Ce=Jo(I/u[0])%u[1],Xe=Se===3?Jo(I/Ge):0);const tt=Ae%u[0],Qe=Jo(Ae/u[0])%u[1],Ne=Se===3?Jo(Ae/Ge):0,De=ze-tt,qe=Ce-Qe,L=Xe-Ne;let Ye=kf(De*De+qe*qe+(Se===3?L*L:0));v==="x"&&(Ye=-De),v==="y"&&(Ye=-qe),v==="z"&&(Ye=-L),n.push(Ye)}i=n[0];for(let Ae=1;Ae<G;Ae++)n[Ae]>i&&(i=n[Ae]);if(p||a)for(let Ae=0;Ae<G;Ae++){let Se=n[Ae];p&&(Se=p(Se/i)*i),a&&(Se=v?-Se:fl(i-Se)),n[Ae]=Se}if(O){s=new Array(G);for(let Ae=0;Ae<G;Ae++)s[Ae]=$(-1,1,4)}M&&(n=uE(n,$))}const Re=w?(_-C)/i:C;ft(r)&&(r=Ke?aE(Ke,ft(e.start)?Ke.iterationDuration:P):P);let ye=r+(Re*Et(n[ce],2)||0);if(O){const Ae=i?n[ce]/i:0,Se=H+(F-H)*Ae;ye=ye+s[ce]*Se}return e.modifier&&(ye=e.modifier(ye)),A&&(ye=`${ye}${A[2]}`),ye}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="185",fE=0,kg=1,hE=2,oc=1,pE=2,ta=3,Or=0,An=1,wi=2,Qi=0,co=1,Hf=2,Og=3,Bg=4,mE=5,Qr=100,gE=101,xE=102,vE=103,_E=104,yE=200,SE=201,ME=202,EE=203,Gf=204,Wf=205,TE=206,wE=207,bE=208,AE=209,CE=210,RE=211,PE=212,DE=213,LE=214,jf=0,Xf=1,qf=2,Eo=3,Yf=4,$f=5,Kf=6,Zf=7,w_=0,IE=1,FE=2,Pi=0,b_=1,A_=2,C_=3,R_=4,P_=5,D_=6,L_=7,I_=300,ms=301,To=302,nd=303,id=304,pu=306,Qf=1e3,Yi=1001,Jf=1002,Jt=1003,NE=1004,vl=1005,dn=1006,rd=1007,is=1008,Un=1009,F_=1010,N_=1011,Ia=1012,Up=1013,Li=1014,bi=1015,rr=1016,kp=1017,Op=1018,Fa=1020,U_=35902,k_=35899,O_=1021,B_=1022,hi=1023,sr=1026,rs=1027,z_=1028,Bp=1029,gs=1030,zp=1031,Vp=1033,ac=33776,lc=33777,cc=33778,uc=33779,eh=35840,th=35841,nh=35842,ih=35843,rh=36196,sh=37492,oh=37496,ah=37488,lh=37489,zc=37490,ch=37491,uh=37808,dh=37809,fh=37810,hh=37811,ph=37812,mh=37813,gh=37814,xh=37815,vh=37816,_h=37817,yh=37818,Sh=37819,Mh=37820,Eh=37821,Th=36492,wh=36494,bh=36495,Ah=36283,Ch=36284,Vc=36285,Rh=36286,UE=3200,Ph=0,kE=1,Mr="",qn="srgb",Hc="srgb-linear",Gc="linear",gt="srgb",ws=7680,zg=519,OE=512,BE=513,zE=514,Hp=515,VE=516,HE=517,Gp=518,GE=519,Vg=35044,Hg="300 es",Ai=2e3,Na=2001;function WE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jE(){const t=Wc("canvas");return t.style.display="block",t}const Gg={};function Wg(...t){const e="THREE."+t.shift();console.log(e,...t)}function V_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function We(...t){t=V_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function pt(...t){t=V_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function uo(...t){const e=t.join(" ");e in Gg||(Gg[e]=!0,We(...t))}function XE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qE={[jf]:Xf,[qf]:Kf,[Yf]:Zf,[Eo]:$f,[Xf]:jf,[Kf]:qf,[Zf]:Yf,[$f]:Eo};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,Dh=180/Math.PI;function Va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function dt(t,e,n){return Math.max(e,Math.min(n,t))}function YE(t,e){return(t%e+e)%e}function od(t,e,n){return(1-n)*t+n*e}function Ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zp=class Zp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;let at=Zp;class Po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],u=s[o+0],m=s[o+1],v=s[o+2],E=s[o+3];if(p!==E||l!==u||c!==m||h!==v){let x=l*u+c*m+h*v+p*E;x<0&&(u=-u,m=-m,v=-v,E=-E,x=-x);let f=1-a;if(x<.9995){const g=Math.acos(x),M=Math.sin(g);f=Math.sin(f*g)/M,a=Math.sin(a*g)/M,l=l*f+u*a,c=c*f+m*a,h=h*f+v*a,p=p*f+E*a}else{l=l*f+u*a,c=c*f+m*a,h=h*f+v*a,p=p*f+E*a;const g=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=g,c*=g,h*=g,p*=g}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[o],u=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+h*p+l*m-c*u,e[n+1]=l*v+h*u+c*p-a*m,e[n+2]=c*v+h*m+a*u-l*p,e[n+3]=h*v-a*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(s/2),u=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=u*h*p+c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p-u*m*v;break;case"YXZ":this._x=u*h*p+c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p+u*m*v;break;case"ZXY":this._x=u*h*p-c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p-u*m*v;break;case"ZYX":this._x=u*h*p-c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p+u*m*v;break;case"YZX":this._x=u*h*p+c*m*v,this._y=c*m*p+u*h*v,this._z=c*h*v-u*m*p,this._w=c*h*p-u*m*v;break;case"XZY":this._x=u*h*p-c*m*v,this._y=c*m*p-u*h*v,this._z=c*h*v+u*m*p,this._w=c*h*p+u*m*v;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+a+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qp=class Qp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*h,this.y=i+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qp.prototype.isVector3=!0;let z=Qp;const ad=new z,jg=new Po,Jp=class Jp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],m=i[5],v=i[8],E=r[0],x=r[3],f=r[6],g=r[1],M=r[4],S=r[7],w=r[2],T=r[5],C=r[8];return s[0]=o*E+a*g+l*w,s[3]=o*x+a*M+l*T,s[6]=o*f+a*S+l*C,s[1]=c*E+h*g+p*w,s[4]=c*x+h*M+p*T,s[7]=c*f+h*S+p*C,s[2]=u*E+m*g+v*w,s[5]=u*x+m*M+v*T,s[8]=u*f+m*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,u=a*l-h*s,m=c*s-o*l,v=n*p+i*u+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(a*i-r*o)*E,e[3]=u*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ld.makeScale(e,n)),this}rotate(e){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jp.prototype.isMatrix3=!0;let Ze=Jp;const ld=new Ze,Xg=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qg=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $E(){const t={enabled:!0,workingColorSpace:Hc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Ji(r.r),r.g=Ji(r.g),r.b=Ji(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=fo(r.r),r.g=fo(r.g),r.b=fo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?Gc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hc]:{primaries:e,whitePoint:i,transfer:Gc,toXYZ:Xg,fromXYZ:qg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Xg,fromXYZ:qg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),t}const ut=$E();function Ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let bs;class KE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bs===void 0&&(bs=Wc("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=bs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ji(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ji(n[i]/255)*255):n[i]=Ji(n[i]);return{data:n,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZE=0;class Wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cd(r[o].image)):s.push(cd(r[o]))}else s=cd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let QE=0;const ud=new z;class xn extends _s{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Yi,r=Yi,s=dn,o=is,a=hi,l=Un,c=xn.DEFAULT_ANISOTROPY,h=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Va(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){We(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qf:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qf:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=I_;xn.DEFAULT_ANISOTROPY=1;const em=class em{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],v=l[9],E=l[2],x=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-E)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+E)<.1&&Math.abs(v+x)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(m+1)/2,w=(f+1)/2,T=(h+u)/4,C=(p+E)/4,_=(v+x)/4;return M>S&&M>w?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=C/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=_/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-v)*(x-v)+(p-E)*(p-E)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(x-v)/g,this.y=(p-E)/g,this.z=(u-h)/g,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this.w=dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this.w=dt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};em.prototype.isVector4=!0;let Pt=em;class JE extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new xn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Wp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends JE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class H_ extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eT extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,n,i,r,s,o,a,l,c,h,p,u,m,v,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,p,u,m,v,E,x)}set(e,n,i,r,s,o,a,l,c,h,p,u,m,v,E,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=m,f[7]=v,f[11]=E,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=o*h,m=o*p,v=a*h,E=a*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+v*c,n[5]=u-E*c,n[9]=-a*l,n[2]=E-u*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*h,m=l*p,v=c*h,E=c*p;n[0]=u+E*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=m*a-v,n[6]=E+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*h,m=l*p,v=c*h,E=c*p;n[0]=u-E*a,n[4]=-o*p,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*h,n[9]=E-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*h,m=o*p,v=a*h,E=a*p;n[0]=l*h,n[4]=v*c-m,n[8]=u*c+E,n[1]=l*p,n[5]=E*c+u,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,v=a*l,E=a*c;n[0]=l*h,n[4]=E-u*p,n[8]=v*p+m,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=m*p+v,n[10]=u-E*p}else if(e.order==="XZY"){const u=o*l,m=o*c,v=a*l,E=a*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+E,n[5]=o*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=a*h,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tT,e,nT)}lookAt(e,n,i){const r=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),fr.crossVectors(i,Dn),fr.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),fr.crossVectors(i,Dn)),fr.normalize(),_l.crossVectors(Dn,fr),r[0]=fr.x,r[4]=_l.x,r[8]=Dn.x,r[1]=fr.y,r[5]=_l.y,r[9]=Dn.y,r[2]=fr.z,r[6]=_l.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],m=i[13],v=i[2],E=i[6],x=i[10],f=i[14],g=i[3],M=i[7],S=i[11],w=i[15],T=r[0],C=r[4],_=r[8],A=r[12],P=r[1],D=r[5],k=r[9],$=r[13],Q=r[2],O=r[6],q=r[10],H=r[14],F=r[3],I=r[7],X=r[11],te=r[15];return s[0]=o*T+a*P+l*Q+c*F,s[4]=o*C+a*D+l*O+c*I,s[8]=o*_+a*k+l*q+c*X,s[12]=o*A+a*$+l*H+c*te,s[1]=h*T+p*P+u*Q+m*F,s[5]=h*C+p*D+u*O+m*I,s[9]=h*_+p*k+u*q+m*X,s[13]=h*A+p*$+u*H+m*te,s[2]=v*T+E*P+x*Q+f*F,s[6]=v*C+E*D+x*O+f*I,s[10]=v*_+E*k+x*q+f*X,s[14]=v*A+E*$+x*H+f*te,s[3]=g*T+M*P+S*Q+w*F,s[7]=g*C+M*D+S*O+w*I,s[11]=g*_+M*k+S*q+w*X,s[15]=g*A+M*$+S*H+w*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],m=e[14],v=e[3],E=e[7],x=e[11],f=e[15],g=l*m-c*u,M=a*m-c*p,S=a*u-l*p,w=o*m-c*h,T=o*u-l*h,C=o*p-a*h;return n*(E*g-x*M+f*S)-i*(v*g-x*w+f*T)+r*(v*M-E*w+f*C)-s*(v*S-E*T+x*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return n*(o*h-a*c)-i*(s*h-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],m=e[11],v=e[12],E=e[13],x=e[14],f=e[15],g=n*a-i*o,M=n*l-r*o,S=n*c-s*o,w=i*l-r*a,T=i*c-s*a,C=r*c-s*l,_=h*E-p*v,A=h*x-u*v,P=h*f-m*v,D=p*x-u*E,k=p*f-m*E,$=u*f-m*x,Q=g*$-M*k+S*D+w*P-T*A+C*_;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Q;return e[0]=(a*$-l*k+c*D)*O,e[1]=(r*k-i*$-s*D)*O,e[2]=(E*C-x*T+f*w)*O,e[3]=(u*T-p*C-m*w)*O,e[4]=(l*P-o*$-c*A)*O,e[5]=(n*$-r*P+s*A)*O,e[6]=(x*S-v*C-f*M)*O,e[7]=(h*C-u*S+m*M)*O,e[8]=(o*k-a*P+c*_)*O,e[9]=(i*P-n*k-s*_)*O,e[10]=(v*T-E*S+f*g)*O,e[11]=(p*S-h*T-m*g)*O,e[12]=(a*A-o*D-l*_)*O,e[13]=(n*D-i*A+r*_)*O,e[14]=(E*M-v*w-x*g)*O,e[15]=(h*w-p*M+u*g)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,p=a+a,u=s*c,m=s*h,v=s*p,E=o*h,x=o*p,f=a*p,g=l*c,M=l*h,S=l*p,w=i.x,T=i.y,C=i.z;return r[0]=(1-(E+f))*w,r[1]=(m+S)*w,r[2]=(v-M)*w,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(u+f))*T,r[6]=(x+g)*T,r[7]=0,r[8]=(v+M)*C,r[9]=(x-g)*C,r[10]=(1-(u+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=As.set(r[0],r[1],r[2]).length();const a=As.set(r[4],r[5],r[6]).length(),l=As.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ri.copy(this);const c=1/o,h=1/a,p=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=p,ri.elements[9]*=p,ri.elements[10]*=p,n.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let v,E;if(l)v=s/(o-s),E=o*s/(o-s);else if(a===Ai)v=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Na)v=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,E;if(l)v=1/(o-s),E=o/(o-s);else if(a===Ai)v=-2/(o-s),E=-(o+s)/(o-s);else if(a===Na)v=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};jc.prototype.isMatrix4=!0;let Lt=jc;const As=new z,ri=new Lt,tT=new z(0,0,0),nT=new z(1,1,1),fr=new z,_l=new z,Dn=new z,Yg=new Lt,$g=new Po;class Br{constructor(e=0,n=0,i=0,r=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $g.setFromEuler(this),this.setFromQuaternion($g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class G_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iT=0;const Kg=new z,Cs=new Po,Ui=new Lt,yl=new z,Go=new z,rT=new z,sT=new Po,Zg=new z(1,0,0),Qg=new z(0,1,0),Jg=new z(0,0,1),e0={type:"added"},oT={type:"removed"},Rs={type:"childadded",child:null},dd={type:"childremoved",child:null};class vn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new z,n=new Br,i=new Po,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ze}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Zg,e)}rotateY(e){return this.rotateOnAxis(Qg,e)}rotateZ(e){return this.rotateOnAxis(Jg,e)}translateOnAxis(e,n){return Kg.copy(e).applyQuaternion(this.quaternion),this.position.add(Kg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zg,e)}translateY(e){return this.translateOnAxis(Qg,e)}translateZ(e){return this.translateOnAxis(Jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yl.copy(e):yl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Go,yl,this.up):Ui.lookAt(yl,Go,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oT),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,rT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,sT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),u=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new z(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class na extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aT={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,i),f=this._getHandJoint(c,E);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function hd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=YE(e,1),n=dt(n,0,1),i=dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hd(o,s,e+1/3),this.g=hd(o,s,e),this.b=hd(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=W_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return ut.workingToColorSpace(an.copy(this),e),Math.round(dt(an.r*255,0,255))*65536+Math.round(dt(an.g*255,0,255))*256+Math.round(dt(an.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ut.workingColorSpace){return ut.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=qn){ut.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(Sl);const i=od(hr.h,Sl.h,n),r=od(hr.s,Sl.s,n),s=od(hr.l,Sl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ot;ot.NAMES=W_;class lT extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new z,ki=new z,pd=new z,Oi=new z,Ps=new z,Ds=new z,t0=new z,md=new z,gd=new z,xd=new z,vd=new Pt,_d=new Pt,yd=new Pt;class fi{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),ki.subVectors(i,n),pd.subVectors(e,n);const o=si.dot(si),a=si.dot(ki),l=si.dot(pd),c=ki.dot(ki),h=ki.dot(pd),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const u=1/p,m=(c*l-a*h)*u,v=(o*h-a*l)*u;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return vd.setScalar(0),_d.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,n),_d.fromBufferAttribute(e,i),yd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vd,s.x),o.addScaledVector(_d,s.y),o.addScaledVector(yd,s.z),o}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),ki.subVectors(e,n),si.cross(ki).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),si.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ps.subVectors(r,i),Ds.subVectors(s,i),md.subVectors(e,i);const l=Ps.dot(md),c=Ds.dot(md);if(l<=0&&c<=0)return n.copy(i);gd.subVectors(e,r);const h=Ps.dot(gd),p=Ds.dot(gd);if(h>=0&&p<=h)return n.copy(r);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Ps,o);xd.subVectors(e,s);const m=Ps.dot(xd),v=Ds.dot(xd);if(v>=0&&m<=v)return n.copy(s);const E=m*c-l*v;if(E<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Ds,a);const x=h*v-m*p;if(x<=0&&p-h>=0&&m-v>=0)return t0.subVectors(s,r),a=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(t0,a);const f=1/(x+E+u);return o=E*f,a=u*f,n.copy(i).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ha{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ml.copy(i.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),El.subVectors(this.max,Wo),Ls.subVectors(e.a,Wo),Is.subVectors(e.b,Wo),Fs.subVectors(e.c,Wo),pr.subVectors(Is,Ls),mr.subVectors(Fs,Is),jr.subVectors(Ls,Fs);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-jr.z,jr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,jr.z,0,-jr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-jr.y,jr.x,0];return!Sd(n,Ls,Is,Fs,El)||(n=[1,0,0,0,1,0,0,0,1],!Sd(n,Ls,Is,Fs,El))?!1:(Tl.crossVectors(pr,mr),n=[Tl.x,Tl.y,Tl.z],Sd(n,Ls,Is,Fs,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new z,new z,new z,new z,new z,new z,new z,new z],oi=new z,Ml=new Ha,Ls=new z,Is=new z,Fs=new z,pr=new z,mr=new z,jr=new z,Wo=new z,El=new z,Tl=new z,Xr=new z;function Sd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),h=i.dot(Xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bt=new z,wl=new at;let cT=0;class Jn extends _s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vg,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wl.fromBufferAttribute(this,n),wl.applyMatrix3(e),this.setXY(n,wl.x,wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class j_ extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class X_ extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const uT=new Ha,jo=new z,Md=new z;class mu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Md)),this.expandByPoint(jo.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let dT=0;const Wn=new Lt,Ed=new vn,Ns=new z,Ln=new Ha,Xo=new Ha,Xt=new z;class Cn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WE(e)?X_:j_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,i){return Wn.makeTranslation(e,n,i),this.applyMatrix4(Wn),this}scale(e,n,i){return Wn.makeScale(e,n,i),this.applyMatrix4(Wn),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Ln.min,Xo.min),Ln.expandByPoint(Xt),Xt.addVectors(Ln.max,Xo.max),Ln.expandByPoint(Xt)):(Ln.expandByPoint(Xo.min),Ln.expandByPoint(Xo.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xt.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),Xt.add(Ns)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new z,l[_]=new z;const c=new z,h=new z,p=new z,u=new at,m=new at,v=new at,E=new z,x=new z;function f(_,A,P){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,P),u.fromBufferAttribute(s,_),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,P),h.sub(c),p.sub(c),m.sub(u),v.sub(u);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(D),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(D),a[_].add(E),a[A].add(E),a[P].add(E),l[_].add(x),l[A].add(x),l[P].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,A=g.length;_<A;++_){const P=g[_],D=P.start,k=P.count;for(let $=D,Q=D+k;$<Q;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const M=new z,S=new z,w=new z,T=new z;function C(_){w.fromBufferAttribute(r,_),T.copy(w);const A=a[_];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(T,A);const D=S.dot(l[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,D)}for(let _=0,A=g.length;_<A;++_){const P=g[_],D=P.start,k=P.count;for(let $=D,Q=D+k;$<Q;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,p=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),E=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,x),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,u=new c.constructor(l.length*h);let m=0,v=0;for(let E=0,x=l.length;E<x;E++){a.isInterleavedBufferAttribute?m=l[E]*a.data.stride+a.offset:m=l[E]*h;for(let f=0;f<h;f++)u[v++]=c[m++]}return new Jn(u,h,p)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const u=c[h],m=e(u,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fT=0;class Do extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=co,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Wf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){We(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gf&&(i.blendSrc=this.blendSrc),this.blendDst!==Wf&&(i.blendDst=this.blendDst),this.blendEquation!==Qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zi=new z,Td=new z,bl=new z,gr=new z,wd=new z,Al=new z,bd=new z;class q_{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Td.copy(e).add(n).multiplyScalar(.5),bl.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Td);const s=e.distanceTo(n)*.5,o=-this.direction.dot(bl),a=gr.dot(this.direction),l=-gr.dot(bl),c=gr.lengthSq(),h=Math.abs(1-o*o);let p,u,m,v;if(h>0)if(p=o*l-a,u=o*a-l,v=s*h,p>=0)if(u>=-v)if(u<=v){const E=1/h;p*=E,u*=E,m=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=s,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-o*s+a)),u=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(p=Math.max(0,-(o*s+a)),u=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+u*(u+2*l)+c);else u=o>0?-s:s,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Td).addScaledVector(bl,u),m}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,r,s){wd.subVectors(n,e),Al.subVectors(i,e),bd.crossVectors(wd,Al);let o=this.direction.dot(bd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gr.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(gr,Al));if(l<0)return null;const c=a*this.direction.dot(wd.cross(gr));if(c<0||l+c>o)return null;const h=-a*gr.dot(bd);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jp extends Do{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const n0=new Lt,qr=new q_,Cl=new mu,i0=new z,Rl=new z,Pl=new z,Dl=new z,Ad=new z,Ll=new z,r0=new z,Il=new z;class On extends vn{constructor(e=new Cn,n=new jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(Ad.fromBufferAttribute(p,e),o?Ll.addScaledVector(Ad,h):Ll.addScaledVector(Ad.sub(n),h))}n.add(Ll)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Cl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Cl,i0)===null||qr.origin.distanceToSquared(i0)>(e.far-e.near)**2))&&(n0.copy(s).invert(),qr.copy(e.ray).applyMatrix4(n0),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,E=u.length;v<E;v++){const x=u[v],f=o[x.materialIndex],g=Math.max(x.start,m.start),M=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let S=g,w=M;S<w;S+=3){const T=a.getX(S),C=a.getX(S+1),_=a.getX(S+2);r=Fl(this,f,e,i,c,h,p,T,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let x=v,f=E;x<f;x+=3){const g=a.getX(x),M=a.getX(x+1),S=a.getX(x+2);r=Fl(this,o,e,i,c,h,p,g,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,E=u.length;v<E;v++){const x=u[v],f=o[x.materialIndex],g=Math.max(x.start,m.start),M=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=g,w=M;S<w;S+=3){const T=S,C=S+1,_=S+2;r=Fl(this,f,e,i,c,h,p,T,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let x=v,f=E;x<f;x+=3){const g=x,M=x+1,S=x+2;r=Fl(this,o,e,i,c,h,p,g,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function hT(t,e,n,i,r,s,o,a){let l;if(e.side===An?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;Il.copy(a),Il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Il);return c<n.near||c>n.far?null:{distance:c,point:Il.clone(),object:t}}function Fl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Rl),t.getVertexPosition(l,Pl),t.getVertexPosition(c,Dl);const h=hT(t,e,n,i,Rl,Pl,Dl,r0);if(h){const p=new z;fi.getBarycoord(r0,Rl,Pl,Dl,p),r&&(h.uv=fi.getInterpolatedAttribute(r,a,l,c,p,new at)),s&&(h.uv1=fi.getInterpolatedAttribute(s,a,l,c,p,new at)),o&&(h.normal=fi.getInterpolatedAttribute(o,a,l,c,p,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new z,materialIndex:0};fi.getNormal(Rl,Pl,Dl,u.normal),h.face=u,h.barycoord=p}return h}class pT extends xn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Jt,h=Jt,p,u){super(null,o,a,l,c,h,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new z,mT=new z,gT=new Ze;class Zr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cd.subVectors(i,n).cross(mT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Cd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gT.getNormalMatrix(e),r=this.coplanarPoint(Cd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new mu,xT=new at(.5,.5),Nl=new z;class Xp{constructor(e=new Zr,n=new Zr,i=new Zr,r=new Zr,s=new Zr,o=new Zr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],m=s[7],v=s[8],E=s[9],x=s[10],f=s[11],g=s[12],M=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-o,m-h,f-v,w-g).normalize(),r[1].setComponents(c+o,m+h,f+v,w+g).normalize(),r[2].setComponents(c+a,m+p,f+E,w+M).normalize(),r[3].setComponents(c-a,m-p,f-E,w-M).normalize(),i)r[4].setComponents(l,u,x,S).normalize(),r[5].setComponents(c-l,m-u,f-x,w-S).normalize();else if(r[4].setComponents(c-l,m-u,f-x,w-S).normalize(),n===Ai)r[5].setComponents(c+l,m+u,f+x,w+S).normalize();else if(n===Na)r[5].setComponents(l,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=xT.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Nl.x=r.normal.x>0?e.max.x:e.min.x,Nl.y=r.normal.y>0?e.max.y:e.min.y,Nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y_ extends Do{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s0=new Lt,Lh=new q_,Ul=new mu,kl=new z;class vT extends vn{constructor(e=new Cn,n=new Y_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),Ul.radius+=s,e.ray.intersectsSphere(Ul)===!1)return;s0.copy(r).invert(),Lh.copy(e.ray).applyMatrix4(s0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=u,E=m;v<E;v++){const x=c.getX(v);kl.fromBufferAttribute(p,x),o0(kl,x,l,r,e,n,this)}}else{const u=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=u,E=m;v<E;v++)kl.fromBufferAttribute(p,v),o0(kl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function o0(t,e,n,i,r,s,o){const a=Lh.distanceSqToPoint(t);if(a<n){const l=new z;Lh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class $_ extends xn{constructor(e=[],n=ms,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wo extends xn{constructor(e,n,i=Li,r,s,o,a=Jt,l=Jt,c,h=sr,p=1){if(h!==sr&&h!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _T extends wo{constructor(e,n=Li,i=ms,r,s,o=Jt,a=Jt,l,c=sr){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class K_ extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ga extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let u=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(p,2));function v(E,x,f,g,M,S,w,T,C,_,A){const P=S/C,D=w/_,k=S/2,$=w/2,Q=T/2,O=C+1,q=_+1;let H=0,F=0;const I=new z;for(let X=0;X<q;X++){const te=X*D-$;for(let re=0;re<O;re++){const je=re*P-k;I[E]=je*g,I[x]=te*M,I[f]=Q,c.push(I.x,I.y,I.z),I[E]=0,I[x]=0,I[f]=T>0?1:-1,h.push(I.x,I.y,I.z),p.push(re/C),p.push(1-X/_),H+=1}}for(let X=0;X<_;X++)for(let te=0;te<C;te++){const re=u+te+O*X,je=u+te+O*(X+1),Ke=u+(te+1)+O*(X+1),Be=u+(te+1)+O*X;l.push(re,je,Be),l.push(je,Ke,Be),F+=6}a.addGroup(m,F,A),m+=F,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gu extends Cn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const M=new z,S=new z,w=new z;for(let T=0;T<n.length;T+=3)m(n[T+0],M),m(n[T+1],S),m(n[T+2],w),l(M,S,w,g)}function l(g,M,S,w){const T=w+1,C=[];for(let _=0;_<=T;_++){C[_]=[];const A=g.clone().lerp(S,_/T),P=M.clone().lerp(S,_/T),D=T-_;for(let k=0;k<=D;k++)k===0&&_===T?C[_][k]=A:C[_][k]=A.clone().lerp(P,k/D)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){const P=Math.floor(A/2);A%2===0?(u(C[_][P+1]),u(C[_+1][P]),u(C[_][P])):(u(C[_][P+1]),u(C[_+1][P+1]),u(C[_+1][P]))}}function c(g){const M=new z;for(let S=0;S<s.length;S+=3)M.x=s[S+0],M.y=s[S+1],M.z=s[S+2],M.normalize().multiplyScalar(g),s[S+0]=M.x,s[S+1]=M.y,s[S+2]=M.z}function h(){const g=new z;for(let M=0;M<s.length;M+=3){g.x=s[M+0],g.y=s[M+1],g.z=s[M+2];const S=x(g)/2/Math.PI+.5,w=f(g)/Math.PI+.5;o.push(S,1-w)}v(),p()}function p(){for(let g=0;g<o.length;g+=6){const M=o[g+0],S=o[g+2],w=o[g+4],T=Math.max(M,S,w),C=Math.min(M,S,w);T>.9&&C<.1&&(M<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),w<.2&&(o[g+4]+=1))}}function u(g){s.push(g.x,g.y,g.z)}function m(g,M){const S=g*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function v(){const g=new z,M=new z,S=new z,w=new z,T=new at,C=new at,_=new at;for(let A=0,P=0;A<s.length;A+=9,P+=6){g.set(s[A+0],s[A+1],s[A+2]),M.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),T.set(o[P+0],o[P+1]),C.set(o[P+2],o[P+3]),_.set(o[P+4],o[P+5]),w.copy(g).add(M).add(S).divideScalar(3);const D=x(w);E(T,P+0,g,D),E(C,P+2,M,D),E(_,P+4,S,D)}}function E(g,M,S,w){w<0&&g.x===1&&(o[M]=g.x-1),S.x===0&&S.z===0&&(o[M]=w/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.vertices,e.indices,e.radius,e.detail)}}class qp extends gu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new qp(e.radius,e.detail)}}class Yp extends gu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Yp(e.radius,e.detail)}}class xu extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,u=n/l,m=[],v=[],E=[],x=[];for(let f=0;f<h;f++){const g=f*u-o;for(let M=0;M<c;M++){const S=M*p-s;v.push(S,-g,0),E.push(0,0,1),x.push(M/a),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const M=g+c*f,S=g+c*(f+1),w=g+1+c*(f+1),T=g+1+c*f;m.push(M,S,T),m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(E,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}class $p extends Cn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let p=e;const u=(n-e)/r,m=new z,v=new at;for(let E=0;E<=r;E++){for(let x=0;x<=i;x++){const f=s+x/i*o;m.x=p*Math.cos(f),m.y=p*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,h.push(v.x,v.y)}p+=u}for(let E=0;E<r;E++){const x=E*(i+1);for(let f=0;f<i;f++){const g=f+x,M=g,S=g+i+1,w=g+i+2,T=g+1;a.push(M,S,T),a.push(S,w,T)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $p(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Kp extends Cn{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],h=[],p=new z,u=new z,m=new z,v=new z,E=new z,x=new z,f=new z;for(let M=0;M<=i;++M){const S=M/i*s*Math.PI*2;g(S,s,o,e,m),g(S+.01,s,o,e,v),x.subVectors(v,m),f.addVectors(v,m),E.crossVectors(x,f),f.crossVectors(E,x),E.normalize(),f.normalize();for(let w=0;w<=r;++w){const T=w/r*Math.PI*2,C=-n*Math.cos(T),_=n*Math.sin(T);p.x=m.x+(C*f.x+_*E.x),p.y=m.y+(C*f.y+_*E.y),p.z=m.z+(C*f.z+_*E.z),l.push(p.x,p.y,p.z),u.subVectors(p,m).normalize(),c.push(u.x,u.y,u.z),h.push(M/i),h.push(w/r)}}for(let M=1;M<=i;M++)for(let S=1;S<=r;S++){const w=(r+1)*(M-1)+(S-1),T=(r+1)*M+(S-1),C=(r+1)*M+S,_=(r+1)*(M-1)+S;a.push(w,T,_),a.push(T,C,_)}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2));function g(M,S,w,T,C){const _=Math.cos(M),A=Math.sin(M),P=w/S*M,D=Math.cos(P);C.x=T*(2+D)*.5*_,C.y=T*(2+D)*A*.5,C.z=T*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function bo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(a0(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(a0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=bo(t[n]);for(const r in i)e[r]=i[r]}return e}function a0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function yT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Z_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const ST={clone:bo,merge:hn};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Do{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=yT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(r.value);break;case"v2":this.uniforms[i].value=new at().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class TT extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rd extends Do{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wT extends Do{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bT extends Do{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Q_ extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Pd=new Lt,l0=new z,c0=new z;class AT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xp,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),n.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(c0),n.updateMatrixWorld(),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Na||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new z,Bl=new Po,yi=new z;class J_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,Bl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,yi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ol,Bl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new z,u0=new at,d0=new at;class Nn extends J_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,u0,d0),n.subVectors(d0,u0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class CT extends AT{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0}}class f0 extends Q_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new CT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class ey extends J_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class RT extends Q_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Us=-90,ks=1;class PT extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Us,ks,e,n);r.layers=this.layers,this.add(r);const s=new Nn(Us,ks,e,n);s.layers=this.layers,this.add(s);const o=new Nn(Us,ks,e,n);o.layers=this.layers,this.add(o);const a=new Nn(Us,ks,e,n);a.layers=this.layers,this.add(a);const l=new Nn(Us,ks,e,n);l.layers=this.layers,this.add(l);const c=new Nn(Us,ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,u,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class DT extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class LT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,We("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const tm=class tm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};tm.prototype.isMatrix2=!0;let h0=tm;function p0(t,e,n,i){const r=IT(i);switch(n){case O_:return t*e;case z_:return t*e/r.components*r.byteLength;case Bp:return t*e/r.components*r.byteLength;case gs:return t*e*2/r.components*r.byteLength;case zp:return t*e*2/r.components*r.byteLength;case B_:return t*e*3/r.components*r.byteLength;case hi:return t*e*4/r.components*r.byteLength;case Vp:return t*e*4/r.components*r.byteLength;case ac:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(t,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(t,8)*Math.max(e,8)/2;case rh:case sh:case ah:case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oh:case zc:case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Th:case wh:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ah:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vc:case Rh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IT(t){switch(t){case Un:case F_:return{byteLength:1,components:1};case Ia:case N_:case rr:return{byteLength:2,components:1};case kp:case Op:return{byteLength:2,components:4};case Li:case Up:case bi:return{byteLength:4,components:1};case U_:case k_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ty(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function FT(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<p.length;m++){const v=p[u],E=p[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++u,p[u]=E)}p.length=u+1;for(let m=0,v=p.length;m<v;m++){const E=p[m];t.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var NT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UT=`#ifdef USE_ALPHAHASH
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
#endif`,kT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VT=`#ifdef USE_AOMAP
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
#endif`,HT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GT=`#ifdef USE_BATCHING
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
#endif`,WT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YT=`#ifdef USE_IRIDESCENCE
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
#endif`,$T=`#ifdef USE_BUMPMAP
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
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rw=`#define PI 3.141592653589793
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
} // validated`,sw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ow=`vec3 transformedNormal = objectNormal;
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
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dw="gl_FragColor = linearToOutputTexel( gl_FragColor );",fw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hw=`#ifdef USE_ENVMAP
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
#endif`,pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xw=`#ifdef USE_ENVMAP
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
#endif`,vw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_w=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mw=`#ifdef USE_GRADIENTMAP
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
}`,Ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ww=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Aw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lw=`PhysicalMaterial material;
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
#endif`,Iw=`uniform sampler2D dfgLUT;
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
}`,Fw=`
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
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ow=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jw=`#if defined( USE_POINTS_UV )
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
#endif`,Xw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$w=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zw=`#ifdef USE_MORPHTARGETS
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
#endif`,Qw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r2=`#ifdef USE_NORMALMAP
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
#endif`,s2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y2=`float getShadowMask() {
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
}`,S2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M2=`#ifdef USE_SKINNING
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
#endif`,E2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T2=`#ifdef USE_SKINNING
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
#endif`,w2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R2=`#ifdef USE_TRANSMISSION
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
#endif`,P2=`#ifdef USE_TRANSMISSION
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
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U2=`uniform sampler2D t2D;
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
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V2=`#include <common>
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
}`,H2=`#if DEPTH_PACKING == 3200
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
}`,G2=`#define DISTANCE
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
}`,W2=`#define DISTANCE
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
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`uniform float scale;
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
}`,Y2=`uniform vec3 diffuse;
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
}`,$2=`#include <common>
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
}`,K2=`uniform vec3 diffuse;
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
}`,Z2=`#define LAMBERT
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
}`,Q2=`#define LAMBERT
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
}`,J2=`#define MATCAP
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
}`,eb=`#define MATCAP
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
}`,tb=`#define NORMAL
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
}`,nb=`#define NORMAL
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
}`,ib=`#define PHONG
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
}`,rb=`#define PHONG
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
}`,sb=`#define STANDARD
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
}`,ob=`#define STANDARD
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
}`,ab=`#define TOON
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
}`,lb=`#define TOON
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
}`,cb=`uniform float size;
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
}`,ub=`uniform vec3 diffuse;
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
}`,db=`#include <common>
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
}`,fb=`uniform vec3 color;
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
}`,hb=`uniform float rotation;
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
}`,pb=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:NT,alphahash_pars_fragment:UT,alphamap_fragment:kT,alphamap_pars_fragment:OT,alphatest_fragment:BT,alphatest_pars_fragment:zT,aomap_fragment:VT,aomap_pars_fragment:HT,batching_pars_vertex:GT,batching_vertex:WT,begin_vertex:jT,beginnormal_vertex:XT,bsdfs:qT,iridescence_fragment:YT,bumpmap_pars_fragment:$T,clipping_planes_fragment:KT,clipping_planes_pars_fragment:ZT,clipping_planes_pars_vertex:QT,clipping_planes_vertex:JT,color_fragment:ew,color_pars_fragment:tw,color_pars_vertex:nw,color_vertex:iw,common:rw,cube_uv_reflection_fragment:sw,defaultnormal_vertex:ow,displacementmap_pars_vertex:aw,displacementmap_vertex:lw,emissivemap_fragment:cw,emissivemap_pars_fragment:uw,colorspace_fragment:dw,colorspace_pars_fragment:fw,envmap_fragment:hw,envmap_common_pars_fragment:pw,envmap_pars_fragment:mw,envmap_pars_vertex:gw,envmap_physical_pars_fragment:Aw,envmap_vertex:xw,fog_vertex:vw,fog_pars_vertex:_w,fog_fragment:yw,fog_pars_fragment:Sw,gradientmap_pars_fragment:Mw,lightmap_pars_fragment:Ew,lights_lambert_fragment:Tw,lights_lambert_pars_fragment:ww,lights_pars_begin:bw,lights_toon_fragment:Cw,lights_toon_pars_fragment:Rw,lights_phong_fragment:Pw,lights_phong_pars_fragment:Dw,lights_physical_fragment:Lw,lights_physical_pars_fragment:Iw,lights_fragment_begin:Fw,lights_fragment_maps:Nw,lights_fragment_end:Uw,lightprobes_pars_fragment:kw,logdepthbuf_fragment:Ow,logdepthbuf_pars_fragment:Bw,logdepthbuf_pars_vertex:zw,logdepthbuf_vertex:Vw,map_fragment:Hw,map_pars_fragment:Gw,map_particle_fragment:Ww,map_particle_pars_fragment:jw,metalnessmap_fragment:Xw,metalnessmap_pars_fragment:qw,morphinstance_vertex:Yw,morphcolor_vertex:$w,morphnormal_vertex:Kw,morphtarget_pars_vertex:Zw,morphtarget_vertex:Qw,normal_fragment_begin:Jw,normal_fragment_maps:e2,normal_pars_fragment:t2,normal_pars_vertex:n2,normal_vertex:i2,normalmap_pars_fragment:r2,clearcoat_normal_fragment_begin:s2,clearcoat_normal_fragment_maps:o2,clearcoat_pars_fragment:a2,iridescence_pars_fragment:l2,opaque_fragment:c2,packing:u2,premultiplied_alpha_fragment:d2,project_vertex:f2,dithering_fragment:h2,dithering_pars_fragment:p2,roughnessmap_fragment:m2,roughnessmap_pars_fragment:g2,shadowmap_pars_fragment:x2,shadowmap_pars_vertex:v2,shadowmap_vertex:_2,shadowmask_pars_fragment:y2,skinbase_vertex:S2,skinning_pars_vertex:M2,skinning_vertex:E2,skinnormal_vertex:T2,specularmap_fragment:w2,specularmap_pars_fragment:b2,tonemapping_fragment:A2,tonemapping_pars_fragment:C2,transmission_fragment:R2,transmission_pars_fragment:P2,uv_pars_fragment:D2,uv_pars_vertex:L2,uv_vertex:I2,worldpos_vertex:F2,background_vert:N2,background_frag:U2,backgroundCube_vert:k2,backgroundCube_frag:O2,cube_vert:B2,cube_frag:z2,depth_vert:V2,depth_frag:H2,distance_vert:G2,distance_frag:W2,equirect_vert:j2,equirect_frag:X2,linedashed_vert:q2,linedashed_frag:Y2,meshbasic_vert:$2,meshbasic_frag:K2,meshlambert_vert:Z2,meshlambert_frag:Q2,meshmatcap_vert:J2,meshmatcap_frag:eb,meshnormal_vert:tb,meshnormal_frag:nb,meshphong_vert:ib,meshphong_frag:rb,meshphysical_vert:sb,meshphysical_frag:ob,meshtoon_vert:ab,meshtoon_frag:lb,points_vert:cb,points_frag:ub,shadow_vert:db,shadow_frag:fb,sprite_vert:hb,sprite_frag:pb},ge={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ei={basic:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:hn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:hn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:hn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ot(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:hn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:hn([ge.points,ge.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:hn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:hn([ge.common,ge.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:hn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:hn([ge.sprite,ge.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:hn([ge.common,ge.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:hn([ge.lights,ge.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ei.physical={uniforms:hn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const zl={r:0,b:0,g:0},mb=new Lt,ny=new Ze;ny.set(-1,0,0,0,1,0,0,0,1);function gb(t,e,n,i,r,s){const o=new ot(0);let a=r===!0?0:1,l,c,h=null,p=0,u=null;function m(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){const S=g.backgroundBlurriness>0;M=e.get(M,S)}return M}function v(g){let M=!1;const S=m(g);S===null?x(o,a):S&&S.isColor&&(x(S,1),M=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(g,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===pu)?(c===void 0&&(c=new On(new Ga(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:bo(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mb.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ny),c.material.toneMapped=ut.getTransfer(S.colorSpace)!==gt,(h!==S||p!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new On(new xu(2,2),new Ii({name:"BackgroundMaterial",uniforms:bo(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,M){g.getRGB(zl,Z_(t)),n.buffers.color.setClear(zl.r,zl.g,zl.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,M=1){o.set(g),a=M,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,x(o,a)},render:v,addToRenderList:E,dispose:f}}function xb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(D,k,$,Q,O){let q=!1;const H=p(D,Q,$,k);s!==H&&(s=H,c(s.object)),q=m(D,Q,$,O),q&&v(D,Q,$,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(D,k,$,Q),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function p(D,k,$,Q){const O=Q.wireframe===!0;let q=i[k.id];q===void 0&&(q={},i[k.id]=q);const H=D.isInstancedMesh===!0?D.id:0;let F=q[H];F===void 0&&(F={},q[H]=F);let I=F[$.id];I===void 0&&(I={},F[$.id]=I);let X=I[O];return X===void 0&&(X=u(l()),I[O]=X),X}function u(D){const k=[],$=[],Q=[];for(let O=0;O<n;O++)k[O]=0,$[O]=0,Q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:Q,object:D,attributes:{},index:null}}function m(D,k,$,Q){const O=s.attributes,q=k.attributes;let H=0;const F=$.getAttributes();for(const I in F)if(F[I].location>=0){const te=O[I];let re=q[I];if(re===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==Q}function v(D,k,$,Q){const O={},q=k.attributes;let H=0;const F=$.getAttributes();for(const I in F)if(F[I].location>=0){let te=q[I];te===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),O[I]=re,H++}s.attributes=O,s.attributesNum=H,s.index=Q}function E(){const D=s.newAttributes;for(let k=0,$=D.length;k<$;k++)D[k]=0}function x(D){f(D,0)}function f(D,k){const $=s.newAttributes,Q=s.enabledAttributes,O=s.attributeDivisors;$[D]=1,Q[D]===0&&(t.enableVertexAttribArray(D),Q[D]=1),O[D]!==k&&(t.vertexAttribDivisor(D,k),O[D]=k)}function g(){const D=s.newAttributes,k=s.enabledAttributes;for(let $=0,Q=k.length;$<Q;$++)k[$]!==D[$]&&(t.disableVertexAttribArray($),k[$]=0)}function M(D,k,$,Q,O,q,H){H===!0?t.vertexAttribIPointer(D,k,$,O,q):t.vertexAttribPointer(D,k,$,Q,O,q)}function S(D,k,$,Q){E();const O=Q.attributes,q=$.getAttributes(),H=k.defaultAttributeValues;for(const F in q){const I=q[F];if(I.location>=0){let X=O[F];if(X===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const te=X.normalized,re=X.itemSize,je=e.get(X);if(je===void 0)continue;const Ke=je.buffer,Be=je.type,G=je.bytesPerElement,se=Be===t.INT||Be===t.UNSIGNED_INT||X.gpuType===Up;if(X.isInterleavedBufferAttribute){const ne=X.data,ce=ne.stride,Re=X.offset;if(ne.isInstancedInterleavedBuffer){for(let ye=0;ye<I.locationSize;ye++)f(I.location+ye,ne.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<I.locationSize;ye++)x(I.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let ye=0;ye<I.locationSize;ye++)M(I.location+ye,re/I.locationSize,Be,te,ce*G,(Re+re/I.locationSize*ye)*G,se)}else{if(X.isInstancedBufferAttribute){for(let ne=0;ne<I.locationSize;ne++)f(I.location+ne,X.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ne=0;ne<I.locationSize;ne++)x(I.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let ne=0;ne<I.locationSize;ne++)M(I.location+ne,re/I.locationSize,Be,te,re*G,re/I.locationSize*ne*G,se)}}else if(H!==void 0){const te=H[F];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(I.location,te);break;case 3:t.vertexAttrib3fv(I.location,te);break;case 4:t.vertexAttrib4fv(I.location,te);break;default:t.vertexAttrib1fv(I.location,te)}}}}g()}function w(){A();for(const D in i){const k=i[D];for(const $ in k){const Q=k[$];for(const O in Q){const q=Q[O];for(const H in q)h(q[H].object),delete q[H];delete Q[O]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const k=i[D.id];for(const $ in k){const Q=k[$];for(const O in Q){const q=Q[O];for(const H in q)h(q[H].object),delete q[H];delete Q[O]}}delete i[D.id]}function C(D){for(const k in i){const $=i[k];for(const Q in $){const O=$[Q];if(O[D.id]===void 0)continue;const q=O[D.id];for(const H in q)h(q[H].object),delete q[H];delete O[D.id]}}}function _(D){for(const k in i){const $=i[k],Q=D.isInstancedMesh===!0?D.id:0,O=$[Q];if(O!==void 0){for(const q in O){const H=O[q];for(const F in H)h(H[F].object),delete H[F];delete O[q]}delete $[Q],Object.keys($).length===0&&delete i[k]}}}function A(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:x,disableUnusedAttributes:g}}function vb(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function _b(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==hi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const _=C===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bi&&!_)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:S,maxSamples:w,samples:T}}function yb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||i!==0||r;return r=u,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,m){const v=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,f=t.get(p);if(!r||v===null||v.length===0||s&&!x)s?h(null):c();else{const g=s?0:i,M=g*4;let S=f.clippingState||null;l.value=S,S=h(v,u,M,m);for(let w=0;w!==M;++w)S[w]=n[w];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,m,v){const E=p!==null?p.length:0;let x=null;if(E!==0){if(x=l.value,v!==!0||x===null){const f=m+E*4,g=u.matrixWorldInverse;a.getNormalMatrix(g),(x===null||x.length<f)&&(x=new Float32Array(f));for(let M=0,S=m;M!==E;++M,S+=4)o.copy(p[M]).applyMatrix4(g,a),o.normal.toArray(x,S),x[S+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const wr=4,m0=[.125,.215,.35,.446,.526,.582],Jr=20,Sb=256,qo=new ey,g0=new ot;let Dd=null,Ld=0,Id=0,Fd=!1;const Mb=new z;class x0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Mb}=s;Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ld,Id),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:rr,format:hi,colorSpace:Hc,depthBuffer:!1},r=v0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Eb(s)),this._blurMaterial=wb(s,e,n),this._ggxMaterial=Tb(s,e,n)}return r}_compileMaterial(e){const n=new On(new Cn,e);this._renderer.compile(n,qo)}_sceneToCubeUV(e,n,i,r,s){const l=new Nn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(g0),p.toneMapping=Pi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new Ga,new jp({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let f=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,f=!0):(x.color.copy(g0),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const w=this._cubeSize;Os(r,S*w,M>2?w:0,w,w),p.setRenderTarget(r),f&&p.render(E,l),p.render(e,l)}p.toneMapping=m,p.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===To;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Os(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=0+c*1.25,m=p*u,{_lodMax:v}=this,E=this._sizeLods[i],x=3*E*(i>v-wr?i-v+wr:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,Os(s,x,f,3*E,2*E),r.setRenderTarget(s),r.render(a,qo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Os(e,x,f,3*E,2*E),r.setRenderTarget(e),r.render(a,qo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jr-1),E=s/v,x=isFinite(s)?1+Math.floor(h*E):Jr;x>Jr&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Jr}`);const f=[];let g=0;for(let C=0;C<Jr;++C){const _=C/E,A=Math.exp(-_*_/2);f.push(A),C===0?g+=A:C<x&&(g+=2*A)}for(let C=0;C<f.length;C++)f[C]=f[C]/g;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=v,u.mipInt.value=M-i;const S=this._sizeLods[r],w=3*S*(r>M-wr?r-M+wr:0),T=4*(this._cubeSize-S);Os(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(p,qo)}}function Eb(t){const e=[],n=[],i=[];let r=t;const s=t-wr+1+m0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-wr?l=m0[o-t+wr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,E=3,x=2,f=1,g=new Float32Array(E*v*m),M=new Float32Array(x*v*m),S=new Float32Array(f*v*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,_=T>2?0:-1,A=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];g.set(A,E*v*T),M.set(u,x*v*T);const P=[T,T,T,T,T,T];S.set(P,f*v*T)}const w=new Cn;w.setAttribute("position",new Jn(g,E)),w.setAttribute("uv",new Jn(M,x)),w.setAttribute("faceIndex",new Jn(S,f)),i.push(new On(w,null)),r>wr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function v0(t,e,n){const i=new Di(t,e,n);return i.texture.mapping=pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Tb(t,e,n){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function wb(t,e,n){const i=new Float32Array(Jr),r=new z(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function _0(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function y0(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}class iy extends Di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:bo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Qi});s.uniforms.tEquirect.value=n;const o=new On(r,s),a=n.minFilter;return n.minFilter===is&&(n.minFilter=dn),new PT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function bb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?o(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===nd||m===id)if(e.has(u)){const v=e.get(u).texture;return a(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const E=new iy(v.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),a(E.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,v=m===nd||m===id,E=m===ms||m===To;if(v||E){let x=n.get(u);const f=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new x0(t)),x=v?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),x.texture;if(x!==void 0)return x.texture;{const g=u.image;return v&&g&&g.height>0||E&&g&&l(g)?(i===null&&(i=new x0(t)),x=v?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function a(u,m){return m===nd?u.mapping=ms:m===id&&(u.mapping=To),u}function l(u){let m=0;const v=6;for(let E=0;E<v;E++)u[E]!==void 0&&m++;return m===v}function c(u){const m=u.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Ab(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&uo("WebGLRenderer: "+i+" extension not supported."),r}}}function Cb(t,e,n,i){const r={},s=new WeakMap;function o(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(p,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(p){const u=[],m=p.index,v=p.attributes.position;let E=0;if(v===void 0)return;if(m!==null){const g=m.array;E=m.version;for(let M=0,S=g.length;M<S;M+=3){const w=g[M+0],T=g[M+1],C=g[M+2];u.push(w,T,T,C,C,w)}}else{const g=v.array;E=v.version;for(let M=0,S=g.length/3-1;M<S;M+=3){const w=M+0,T=M+1,C=M+2;u.push(w,T,T,C,C,w)}}const x=new(v.count>=65535?X_:j_)(u,1);x.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,x)}function h(p){const u=s.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Rb(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,u){t.drawElements(i,u,s,p*o),n.update(u,i,1)}function c(p,u,m){m!==0&&(t.drawElementsInstanced(i,u,s,p*o,m),n.update(u,i,m))}function h(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,m);let E=0;for(let x=0;x<m;x++)E+=u[x];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Pb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Db(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==p){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var m=P;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),x===!0&&(S=3);let w=a.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*p),_=new H_(C,w,T,p);_.type=bi,_.needsUpdate=!0;const A=S*4;for(let D=0;D<p;D++){const k=f[D],$=g[D],Q=M[D],O=w*T*4*D;for(let q=0;q<k.count;q++){const H=q*A;v===!0&&(r.fromBufferAttribute(k,q),C[O+H+0]=r.x,C[O+H+1]=r.y,C[O+H+2]=r.z,C[O+H+3]=0),E===!0&&(r.fromBufferAttribute($,q),C[O+H+4]=r.x,C[O+H+5]=r.y,C[O+H+6]=r.z,C[O+H+7]=0),x===!0&&(r.fromBufferAttribute(Q,q),C[O+H+8]=r.x,C[O+H+9]=r.y,C[O+H+10]=r.z,C[O+H+11]=Q.itemSize===4?r.w:1)}}u={count:p,texture:_,size:new at(w,T)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let x=0;x<c.length;x++)v+=c[x];const E=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function Lb(t,e,n,i,r){let s=new WeakMap;function o(c){const h=r.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return u}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const Ib={[b_]:"LINEAR_TONE_MAPPING",[A_]:"REINHARD_TONE_MAPPING",[C_]:"CINEON_TONE_MAPPING",[R_]:"ACES_FILMIC_TONE_MAPPING",[D_]:"AGX_TONE_MAPPING",[L_]:"NEUTRAL_TONE_MAPPING",[P_]:"CUSTOM_TONE_MAPPING"};function Fb(t,e,n,i,r,s){const o=new Di(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new wo(e,n):void 0}),a=new Di(e,n,{type:rr,depthBuffer:!1,stencilBuffer:!1}),l=new Cn;l.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new TT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new On(l,c),p=new ey(-1,1,1,-1,0,1);let u=null,m=null,v=!1,E,x=null,f=[],g=!1;this.setSize=function(M,S){o.setSize(M,S),a.setSize(M,S);for(let w=0;w<f.length;w++){const T=f[w];T.setSize&&T.setSize(M,S)}},this.setEffects=function(M){f=M,g=f.length>0&&f[0].isRenderPass===!0;const S=o.width,w=o.height;for(let T=0;T<f.length;T++){const C=f[T];C.setSize&&C.setSize(S,w)}},this.begin=function(M,S){if(v||M.toneMapping===Pi&&f.length===0)return!1;if(x=S,S!==null){const w=S.width,T=S.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return g===!1&&M.setRenderTarget(o),E=M.toneMapping,M.toneMapping=Pi,!0},this.hasRenderPass=function(){return g},this.end=function(M,S){M.toneMapping=E,v=!0;let w=o,T=a;for(let C=0;C<f.length;C++){const _=f[C];if(_.enabled!==!1&&(_.render(M,T,w,S),_.needsSwap!==!1)){const A=w;w=T,T=A}}if(u!==M.outputColorSpace||m!==M.toneMapping){u=M.outputColorSpace,m=M.toneMapping,c.defines={},ut.getTransfer(u)===gt&&(c.defines.SRGB_TRANSFER="");const C=Ib[m];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(x),M.render(h,p),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const ry=new xn,Ih=new wo(1,1),sy=new H_,oy=new eT,ay=new $_,S0=[],M0=[],E0=new Float32Array(16),T0=new Float32Array(9),w0=new Float32Array(4);function Lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=S0[r];if(s===void 0&&(s=new Float32Array(r),S0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _u(t,e){let n=M0[e];n===void 0&&(n=new Int32Array(e),M0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function Bb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;w0.set(i),t.uniformMatrix2fv(this.addr,!1,w0),jt(n,i)}}function zb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;T0.set(i),t.uniformMatrix3fv(this.addr,!1,T0),jt(n,i)}}function Vb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Wt(n,i))return;E0.set(i),t.uniformMatrix4fv(this.addr,!1,E0),jt(n,i)}}function Hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function Xb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function Yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function Kb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ih.compareFunction=n.isReversedDepthBuffer()?Gp:Hp,s=Ih):s=ry,n.setTexture2D(e||s,r)}function Zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||oy,r)}function Qb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ay,r)}function Jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||sy,r)}function eA(t){switch(t){case 5126:return Nb;case 35664:return Ub;case 35665:return kb;case 35666:return Ob;case 35674:return Bb;case 35675:return zb;case 35676:return Vb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return jb;case 5125:return Xb;case 36294:return qb;case 36295:return Yb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return Jb}}function tA(t,e){t.uniform1fv(this.addr,e)}function nA(t,e){const n=Lo(e,this.size,2);t.uniform2fv(this.addr,n)}function iA(t,e){const n=Lo(e,this.size,3);t.uniform3fv(this.addr,n)}function rA(t,e){const n=Lo(e,this.size,4);t.uniform4fv(this.addr,n)}function sA(t,e){const n=Lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oA(t,e){const n=Lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aA(t,e){const n=Lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lA(t,e){t.uniform1iv(this.addr,e)}function cA(t,e){t.uniform2iv(this.addr,e)}function uA(t,e){t.uniform3iv(this.addr,e)}function dA(t,e){t.uniform4iv(this.addr,e)}function fA(t,e){t.uniform1uiv(this.addr,e)}function hA(t,e){t.uniform2uiv(this.addr,e)}function pA(t,e){t.uniform3uiv(this.addr,e)}function mA(t,e){t.uniform4uiv(this.addr,e)}function gA(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ih:o=ry;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function xA(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||oy,s[o])}function vA(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ay,s[o])}function _A(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||sy,s[o])}function yA(t){switch(t){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return aA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return dA;case 5125:return fA;case 36294:return hA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return _A}}class SA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eA(n.type)}}class MA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yA(n.type)}}class EA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function b0(t,e){t.seq.push(e),t.map[e.id]=e}function TA(t,e,n){const i=t.name,r=i.length;for(Nd.lastIndex=0;;){const s=Nd.exec(i),o=Nd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){b0(n,c===void 0?new SA(a,t,e):new MA(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new EA(a),b0(n,p)),n=p}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);TA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function A0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const wA=37297;let bA=0;function AA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const C0=new Ze;function CA(t){ut._getMatrix(C0,ut.workingColorSpace,t);const e=`mat3( ${C0.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case Gc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function R0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+AA(t.getShaderSource(e),a)}else return s}function RA(t,e){const n=CA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const PA={[b_]:"Linear",[A_]:"Reinhard",[C_]:"Cineon",[R_]:"ACESFilmic",[D_]:"AgX",[L_]:"Neutral",[P_]:"Custom"};function DA(t,e){const n=PA[e];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vl=new z;function LA(){ut.getLuminanceCoefficients(Vl);const t=Vl.x.toFixed(4),e=Vl.y.toFixed(4),n=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function FA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function P0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(t){return t.replace(UA,OA)}const kA=new Map;function OA(t,e){let n=rt[e];if(n===void 0){const i=kA.get(e);if(i!==void 0)n=rt[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(n)}const BA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(t){return t.replace(BA,zA)}function zA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function I0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const VA={[oc]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function HA(t){return VA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GA={[ms]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function WA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":GA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const jA={[To]:"ENVMAP_MODE_REFRACTION"};function XA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":jA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qA={[w_]:"ENVMAP_BLENDING_MULTIPLY",[IE]:"ENVMAP_BLENDING_MIX",[FE]:"ENVMAP_BLENDING_ADD"};function YA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":qA[t.combine]||"ENVMAP_BLENDING_NONE"}function $A(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=HA(n),c=WA(n),h=XA(n),p=YA(n),u=$A(n),m=IA(n),v=FA(s),E=r.createProgram();let x,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ia).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ia).join(`
`),f.length>0&&(f+=`
`)):(x=[I0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),f=[I0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?rt.tonemapping_pars_fragment:"",n.toneMapping!==Pi?DA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,RA("linearToOutputTexel",n.outputColorSpace),LA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=Fh(o),o=P0(o,n),o=D0(o,n),a=Fh(a),a=P0(a,n),a=D0(a,n),o=L0(o),a=L0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===Hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=g+x+o,S=g+f+a,w=A0(r,r.VERTEX_SHADER,M),T=A0(r,r.FRAGMENT_SHADER,S);r.attachShader(E,w),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(D){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",$=r.getShaderInfoLog(w)||"",Q=r.getShaderInfoLog(T)||"",O=k.trim(),q=$.trim(),H=Q.trim();let F=!0,I=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,w,T);else{const X=R0(r,w,"vertex"),te=R0(r,T,"fragment");pt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+X+`
`+te)}else O!==""?We("WebGLProgram: Program Info Log:",O):(q===""||H==="")&&(I=!1);I&&(D.diagnostics={runnable:F,programLog:O,vertexShader:{log:q,prefix:x},fragmentShader:{log:H,prefix:f}})}r.deleteShader(w),r.deleteShader(T),_=new dc(r,E),A=NA(r,E)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,wA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=T,this}let ZA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JA(e),n.set(e,i)),i}}class JA{constructor(e){this.id=ZA++,this.code=e,this.usedTimes=0}}function eC(t){return t===gs||t===zc||t===Vc}function tC(t,e,n,i,r,s){const o=new G_,a=new QA,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,A,P,D,k,$){const Q=D.fog,O=k.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||q,H),I=F&&F.mapping===pu?F.image.height:null,X=m[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=te!==void 0?te.length:0;let je=0;O.morphAttributes.position!==void 0&&(je=1),O.morphAttributes.normal!==void 0&&(je=2),O.morphAttributes.color!==void 0&&(je=3);let Ke,Be,G,se;if(X){const be=Ei[X];Ke=be.vertexShader,Be=be.fragmentShader}else{Ke=_.vertexShader,Be=_.fragmentShader;const be=a.getVertexShaderStage(_),Ue=a.getFragmentShaderStage(_);a.update(_,be,Ue),G=be.id,se=Ue.id}const ne=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),Re=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,Ae=!!_.map,Se=!!_.matcap,Ge=!!F,ze=!!_.aoMap,Ce=!!_.lightMap,Xe=!!_.bumpMap&&_.wireframe===!1,tt=!!_.normalMap,Qe=!!_.displacementMap,Ne=!!_.emissiveMap,De=!!_.metalnessMap,qe=!!_.roughnessMap,L=_.anisotropy>0,Ye=_.clearcoat>0,we=_.dispersion>0,R=_.iridescence>0,y=_.sheen>0,U=_.transmission>0,V=L&&!!_.anisotropyMap,K=Ye&&!!_.clearcoatMap,oe=Ye&&!!_.clearcoatNormalMap,le=Ye&&!!_.clearcoatRoughnessMap,Z=R&&!!_.iridescenceMap,J=R&&!!_.iridescenceThicknessMap,ue=y&&!!_.sheenColorMap,Le=y&&!!_.sheenRoughnessMap,pe=!!_.specularMap,he=!!_.specularColorMap,Ie=!!_.specularIntensityMap,Ve=U&&!!_.transmissionMap,Oe=U&&!!_.thicknessMap,N=!!_.gradientMap,de=!!_.alphaMap,ee=_.alphaTest>0,fe=!!_.alphaHash,me=!!_.extensions;let ie=Pi;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ie=t.toneMapping);const _e={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:Ke,fragmentShader:Be,defines:_.defines,customVertexShaderID:G,customFragmentShaderID:se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Re,instancingColor:Re&&k.instanceColor!==null,instancingMorph:Re&&k.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ae,matcap:Se,envMap:Ge,envMapMode:Ge&&F.mapping,envMapCubeUVHeight:I,aoMap:ze,lightMap:Ce,bumpMap:Xe,normalMap:tt,displacementMap:Qe,emissiveMap:Ne,normalMapObjectSpace:tt&&_.normalMapType===kE,normalMapTangentSpace:tt&&_.normalMapType===Ph,packedNormalMap:tt&&_.normalMapType===Ph&&eC(_.normalMap.format),metalnessMap:De,roughnessMap:qe,anisotropy:L,anisotropyMap:V,clearcoat:Ye,clearcoatMap:K,clearcoatNormalMap:oe,clearcoatRoughnessMap:le,dispersion:we,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:J,sheen:y,sheenColorMap:ue,sheenRoughnessMap:Le,specularMap:pe,specularColorMap:he,specularIntensityMap:Ie,transmission:U,transmissionMap:Ve,thicknessMap:Oe,gradientMap:N,opaque:_.transparent===!1&&_.blending===co&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:ee,alphaHash:fe,combine:_.combine,mapUv:Ae&&v(_.map.channel),aoMapUv:ze&&v(_.aoMap.channel),lightMapUv:Ce&&v(_.lightMap.channel),bumpMapUv:Xe&&v(_.bumpMap.channel),normalMapUv:tt&&v(_.normalMap.channel),displacementMapUv:Qe&&v(_.displacementMap.channel),emissiveMapUv:Ne&&v(_.emissiveMap.channel),metalnessMapUv:De&&v(_.metalnessMap.channel),roughnessMapUv:qe&&v(_.roughnessMap.channel),anisotropyMapUv:V&&v(_.anisotropyMap.channel),clearcoatMapUv:K&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(_.sheenRoughnessMap.channel),specularMapUv:pe&&v(_.specularMap.channel),specularColorMapUv:he&&v(_.specularColorMap.channel),specularIntensityMapUv:Ie&&v(_.specularIntensityMap.channel),transmissionMapUv:Ve&&v(_.transmissionMap.channel),thicknessMapUv:Oe&&v(_.thicknessMap.channel),alphaMapUv:de&&v(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(tt||L),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Ae||de),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&tt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ce,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:je,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ae&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===gt,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&ut.getTransfer(_.emissiveMap.colorSpace)===gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===wi,flipSided:_.side===An,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function x(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(A,_),g(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function g(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const A=m[_.type];let P;if(A){const D=Ei[A];P=ST.clone(D.uniforms)}else P=_.uniforms;return P}function S(_,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new KA(t,A,_,r),c.push(P),h.set(A,P)),P}function w(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function C(){a.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function nC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function F0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function N0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,v,E,x,f){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:m,material:v,materialVariant:o(u),groupOrder:E,renderOrder:u.renderOrder,z:x,group:f},t[e]=g):(g.id=u.id,g.object=u,g.geometry=m,g.material=v,g.materialVariant=o(u),g.groupOrder=E,g.renderOrder=u.renderOrder,g.z=x,g.group=f),e++,g}function l(u,m,v,E,x,f){const g=a(u,m,v,E,x,f);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(u,m,v,E,x,f){const g=a(u,m,v,E,x,f);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function h(u,m,v){n.length>1&&n.sort(u||iC),i.length>1&&i.sort(m||F0),r.length>1&&r.sort(m||F0),v&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let u=e,m=t.length;u<m;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function rC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new N0,t.set(i,[o])):r>=s.length?(o=new N0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new ot};break;case"SpotLight":n={position:new z,direction:new z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function oC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aC=0;function lC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cC(t){const e=new sC,n=oC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Lt,o=new Lt;function a(c){let h=0,p=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,v=0,E=0,x=0,f=0,g=0,M=0,S=0,w=0,T=0,C=0;c.sort(lC);for(let A=0,P=c.length;A<P;A++){const D=c[A],k=D.color,$=D.intensity,Q=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===gs?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*$,p+=k.g*$,u+=k.b*$;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],$);C++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=O,i.directionalShadowMatrix[m]=D.shadow.matrix,g++}i.directional[m]=q,m++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(k).multiplyScalar($),q.distance=Q,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[E]=q;const H=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,H.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[E]=H.matrix,D.castShadow){const F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.spotShadow[E]=F,i.spotShadowMap[E]=O,S++}E++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(k).multiplyScalar($),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=q,x++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const H=D.shadow,F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,F.shadowCameraNear=H.camera.near,F.shadowCameraFar=H.camera.far,i.pointShadow[v]=F,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=D.shadow.matrix,M++}i.point[v]=q,v++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar($),q.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[f]=q,f++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==m||_.pointLength!==v||_.spotLength!==E||_.rectAreaLength!==x||_.hemiLength!==f||_.numDirectionalShadows!==g||_.numPointShadows!==M||_.numSpotShadows!==S||_.numSpotMaps!==w||_.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=x,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,_.directionalLength=m,_.pointLength=v,_.spotLength=E,_.rectAreaLength=x,_.hemiLength=f,_.numDirectionalShadows=g,_.numPointShadows=M,_.numSpotShadows=S,_.numSpotMaps=w,_.numLightProbes=C,i.version=aC++)}function l(c,h){let p=0,u=0,m=0,v=0,E=0;const x=h.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const M=c[f];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),p++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(M.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),o.identity(),s.copy(M.matrixWorld),s.premultiply(x),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),u++}else if(M.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(x),E++}}}return{setup:a,setupView:l,state:i}}function U0(t){const e=new cC(t),n=[],i=[],r=[];function s(u){p.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function uC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new U0(t),e.set(r,[a])):s>=o.length?(a=new U0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fC=`uniform sampler2D shadow_pass;
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
}`,hC=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],pC=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],k0=new Lt,Yo=new z,Ud=new z;function mC(t,e,n){let i=new Xp;const r=new at,s=new at,o=new Pt,a=new wT,l=new bT,c={},h=n.maxTextureSize,p={[Or]:An,[An]:Or,[wi]:wi},u=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:dC,fragmentShader:fC}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new Cn;v.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new On(v,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let f=this.type;this.render=function(T,C,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===pE&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oc);const A=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Qi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=f!==this.type;$&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(O=>O.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,O=T.length;Q<O;Q++){const q=T[Q],H=q.shadow;if(H===void 0){We("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const F=H.getFrameExtents();r.multiply(F),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/F.x),r.x=s.x*F.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/F.y),r.y=s.y*F.y,H.mapSize.y=s.y));const I=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=I,H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ta){if(q.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Di(r.x,r.y,{format:gs,type:rr,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new wo(r.x,r.y,bi),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=sr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt}else q.isPointLight?(H.map=new iy(r.x),H.map.depthTexture=new _T(r.x,Li)):(H.map=new Di(r.x,r.y),H.map.depthTexture=new wo(r.x,r.y,Li)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=sr,this.type===oc?(H.map.depthTexture.compareFunction=I?Gp:Hp,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt);H.camera.updateProjectionMatrix()}const X=H.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<X;te++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,te),t.clear();else{te===0&&(t.setRenderTarget(H.map),t.clear());const re=H.getViewport(te);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(o)}if(q.isPointLight){const re=H.camera,je=H.matrix,Ke=q.distance||re.far;Ke!==re.far&&(re.far=Ke,re.updateProjectionMatrix()),Yo.setFromMatrixPosition(q.matrixWorld),re.position.copy(Yo),Ud.copy(re.position),Ud.add(hC[te]),re.up.copy(pC[te]),re.lookAt(Ud),re.updateMatrixWorld(),je.makeTranslation(-Yo.x,-Yo.y,-Yo.z),k0.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),H._frustum.setFromProjectionMatrix(k0,re.coordinateSystem,re.reversedDepth)}else H.updateMatrices(q);i=H.getFrustum(),S(C,_,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===ta&&g(H,_),H.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(A,P,D)};function g(T,C){const _=e.update(E);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Di(r.x,r.y,{format:gs,type:rr})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,_,u,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,_,m,E,null)}function M(T,C,_,A){let P=null;const D=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=P.uuid,$=C.uuid;let Q=c[k];Q===void 0&&(Q={},c[k]=Q);let O=Q[$];O===void 0&&(O=P.clone(),Q[$]=O,C.addEventListener("dispose",w)),P=O}if(P.visible=C.visible,P.wireframe=C.wireframe,A===ta?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:p[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=t.properties.get(P);k.light=_}return P}function S(T,C,_,A,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===ta)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const $=e.update(T),Q=T.material;if(Array.isArray(Q)){const O=$.groups;for(let q=0,H=O.length;q<H;q++){const F=O[q],I=Q[F.materialIndex];if(I&&I.visible){const X=M(T,I,A,P);T.onBeforeShadow(t,T,C,_,$,X,F),t.renderBufferDirect(_,null,$,X,T,F),T.onAfterShadow(t,T,C,_,$,X,F)}}}else if(Q.visible){const O=M(T,Q,A,P);T.onBeforeShadow(t,T,C,_,$,O,null),t.renderBufferDirect(_,null,$,O,T,null),T.onAfterShadow(t,T,C,_,$,O,null)}}const k=T.children;for(let $=0,Q=k.length;$<Q;$++)S(k[$],C,_,A,P)}function w(T){T.target.removeEventListener("dispose",w);for(const _ in c){const A=c[_],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function gC(t,e){function n(){let N=!1;const de=new Pt;let ee=null;const fe=new Pt(0,0,0,0);return{setMask:function(me){ee!==me&&!N&&(t.colorMask(me,me,me,me),ee=me)},setLocked:function(me){N=me},setClear:function(me,ie,_e,be,Ue){Ue===!0&&(me*=be,ie*=be,_e*=be),de.set(me,ie,_e,be),fe.equals(de)===!1&&(t.clearColor(me,ie,_e,be),fe.copy(de))},reset:function(){N=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,ee=null,fe=null,me=null;return{setReversed:function(ie){if(de!==ie){const _e=e.get("EXT_clip_control");ie?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),de=ie;const be=me;me=null,this.setClear(be)}},getReversed:function(){return de},setTest:function(ie){ie?ne(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!N&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(de&&(ie=qE[ie]),fe!==ie){switch(ie){case jf:t.depthFunc(t.NEVER);break;case Xf:t.depthFunc(t.ALWAYS);break;case qf:t.depthFunc(t.LESS);break;case Eo:t.depthFunc(t.LEQUAL);break;case Yf:t.depthFunc(t.EQUAL);break;case $f:t.depthFunc(t.GEQUAL);break;case Kf:t.depthFunc(t.GREATER);break;case Zf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){me!==ie&&(me=ie,de&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,ee=null,fe=null,me=null,de=!1}}}function r(){let N=!1,de=null,ee=null,fe=null,me=null,ie=null,_e=null,be=null,Ue=null;return{setTest:function(Je){N||(Je?ne(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Je){de!==Je&&!N&&(t.stencilMask(Je),de=Je)},setFunc:function(Je,ni,Rn){(ee!==Je||fe!==ni||me!==Rn)&&(t.stencilFunc(Je,ni,Rn),ee=Je,fe=ni,me=Rn)},setOp:function(Je,ni,Rn){(ie!==Je||_e!==ni||be!==Rn)&&(t.stencilOp(Je,ni,Rn),ie=Je,_e=ni,be=Rn)},setLocked:function(Je){N=Je},setClear:function(Je){Ue!==Je&&(t.clearStencil(Je),Ue=Je)},reset:function(){N=!1,de=null,ee=null,fe=null,me=null,ie=null,_e=null,be=null,Ue=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},p={},u={},m=new WeakMap,v=[],E=null,x=!1,f=null,g=null,M=null,S=null,w=null,T=null,C=null,_=new ot(0,0,0),A=0,P=!1,D=null,k=null,$=null,Q=null,O=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),H=F>=1):I.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),H=F>=2);let X=null,te={};const re=t.getParameter(t.SCISSOR_BOX),je=t.getParameter(t.VIEWPORT),Ke=new Pt().fromArray(re),Be=new Pt().fromArray(je);function G(N,de,ee,fe){const me=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<ee;_e++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(de+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ie}const se={};se[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(Eo),Xe(!1),tt(kg),ne(t.CULL_FACE),ze(Qi);function ne(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function ce(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Re(N,de){return u[N]!==de?(t.bindFramebuffer(N,de),u[N]=de,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(N,de){let ee=v,fe=!1;if(N){ee=m.get(de),ee===void 0&&(ee=[],m.set(de,ee));const me=N.textures;if(ee.length!==me.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,_e=me.length;ie<_e;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=me.length,fe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ee)}function Ae(N){return E!==N?(t.useProgram(N),E=N,!0):!1}const Se={[Qr]:t.FUNC_ADD,[gE]:t.FUNC_SUBTRACT,[xE]:t.FUNC_REVERSE_SUBTRACT};Se[vE]=t.MIN,Se[_E]=t.MAX;const Ge={[yE]:t.ZERO,[SE]:t.ONE,[ME]:t.SRC_COLOR,[Gf]:t.SRC_ALPHA,[CE]:t.SRC_ALPHA_SATURATE,[bE]:t.DST_COLOR,[TE]:t.DST_ALPHA,[EE]:t.ONE_MINUS_SRC_COLOR,[Wf]:t.ONE_MINUS_SRC_ALPHA,[AE]:t.ONE_MINUS_DST_COLOR,[wE]:t.ONE_MINUS_DST_ALPHA,[RE]:t.CONSTANT_COLOR,[PE]:t.ONE_MINUS_CONSTANT_COLOR,[DE]:t.CONSTANT_ALPHA,[LE]:t.ONE_MINUS_CONSTANT_ALPHA};function ze(N,de,ee,fe,me,ie,_e,be,Ue,Je){if(N===Qi){x===!0&&(ce(t.BLEND),x=!1);return}if(x===!1&&(ne(t.BLEND),x=!0),N!==mE){if(N!==f||Je!==P){if((g!==Qr||w!==Qr)&&(t.blendEquation(t.FUNC_ADD),g=Qr,w=Qr),Je)switch(N){case co:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hf:t.blendFunc(t.ONE,t.ONE);break;case Og:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:pt("WebGLState: Invalid blending: ",N);break}else switch(N){case co:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Og:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bg:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",N);break}M=null,S=null,T=null,C=null,_.set(0,0,0),A=0,f=N,P=Je}return}me=me||de,ie=ie||ee,_e=_e||fe,(de!==g||me!==w)&&(t.blendEquationSeparate(Se[de],Se[me]),g=de,w=me),(ee!==M||fe!==S||ie!==T||_e!==C)&&(t.blendFuncSeparate(Ge[ee],Ge[fe],Ge[ie],Ge[_e]),M=ee,S=fe,T=ie,C=_e),(be.equals(_)===!1||Ue!==A)&&(t.blendColor(be.r,be.g,be.b,Ue),_.copy(be),A=Ue),f=N,P=!1}function Ce(N,de){N.side===wi?ce(t.CULL_FACE):ne(t.CULL_FACE);let ee=N.side===An;de&&(ee=!ee),Xe(ee),N.blending===co&&N.transparent===!1?ze(Qi):ze(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const fe=N.stencilWrite;a.setTest(fe),fe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(N){D!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),D=N)}function tt(N){N!==fE?(ne(t.CULL_FACE),N!==k&&(N===kg?t.cullFace(t.BACK):N===hE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),k=N}function Qe(N){N!==$&&(H&&t.lineWidth(N),$=N)}function Ne(N,de,ee){N?(ne(t.POLYGON_OFFSET_FILL),(Q!==de||O!==ee)&&(Q=de,O=ee,o.getReversed()&&(de=-de),t.polygonOffset(de,ee))):ce(t.POLYGON_OFFSET_FILL)}function De(N){N?ne(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function qe(N){N===void 0&&(N=t.TEXTURE0+q-1),X!==N&&(t.activeTexture(N),X=N)}function L(N,de,ee){ee===void 0&&(X===null?ee=t.TEXTURE0+q-1:ee=X);let fe=te[ee];fe===void 0&&(fe={type:void 0,texture:void 0},te[ee]=fe),(fe.type!==N||fe.texture!==de)&&(X!==ee&&(t.activeTexture(ee),X=ee),t.bindTexture(N,de||se[N]),fe.type=N,fe.texture=de)}function Ye(){const N=te[X];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function we(){try{t.compressedTexImage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function y(){try{t.texSubImage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function U(){try{t.texSubImage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function oe(){try{t.texStorage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function le(){try{t.texStorage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function Z(){try{t.texImage2D(...arguments)}catch(N){pt("WebGLState:",N)}}function J(){try{t.texImage3D(...arguments)}catch(N){pt("WebGLState:",N)}}function ue(N){return p[N]!==void 0?p[N]:t.getParameter(N)}function Le(N,de){p[N]!==de&&(t.pixelStorei(N,de),p[N]=de)}function pe(N){Ke.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ke.copy(N))}function he(N){Be.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Be.copy(N))}function Ie(N,de){let ee=c.get(de);ee===void 0&&(ee=new WeakMap,c.set(de,ee));let fe=ee.get(N);fe===void 0&&(fe=t.getUniformBlockIndex(de,N.name),ee.set(N,fe))}function Ve(N,de){const fe=c.get(de).get(N);l.get(de)!==fe&&(t.uniformBlockBinding(de,fe,N.__bindingPointIndex),l.set(de,fe))}function Oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},X=null,te={},u={},m=new WeakMap,v=[],E=null,x=!1,f=null,g=null,M=null,S=null,w=null,T=null,C=null,_=new ot(0,0,0),A=0,P=!1,D=null,k=null,$=null,Q=null,O=null,Ke.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ce,bindFramebuffer:Re,drawBuffers:ye,useProgram:Ae,setBlending:ze,setMaterial:Ce,setFlipSided:Xe,setCullFace:tt,setLineWidth:Qe,setPolygonOffset:Ne,setScissorTest:De,activeTexture:qe,bindTexture:L,unbindTexture:Ye,compressedTexImage2D:we,compressedTexImage3D:R,texImage2D:Z,texImage3D:J,pixelStorei:Le,getParameter:ue,updateUBOMapping:Ie,uniformBlockBinding:Ve,texStorage2D:oe,texStorage3D:le,texSubImage2D:y,texSubImage3D:U,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:pe,viewport:he,reset:Oe}}function xC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,p=new Set;let u;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,y){return v?new OffscreenCanvas(R,y):Wc("canvas")}function x(R,y,U){let V=1;const K=we(R);if((K.width>U||K.height>U)&&(V=U/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(V*K.width),le=Math.floor(V*K.height);u===void 0&&(u=E(oe,le));const Z=y?E(oe,le):u;return Z.width=oe,Z.height=le,Z.getContext("2d").drawImage(R,0,0,oe,le),We("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+oe+"x"+le+")."),Z}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,y,U,V,K,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;V&&(le=e.get("EXT_texture_norm16"),le||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===t.RED&&(U===t.FLOAT&&(Z=t.R32F),U===t.HALF_FLOAT&&(Z=t.R16F),U===t.UNSIGNED_BYTE&&(Z=t.R8),U===t.UNSIGNED_SHORT&&le&&(Z=le.R16_EXT),U===t.SHORT&&le&&(Z=le.R16_SNORM_EXT)),y===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.R8UI),U===t.UNSIGNED_SHORT&&(Z=t.R16UI),U===t.UNSIGNED_INT&&(Z=t.R32UI),U===t.BYTE&&(Z=t.R8I),U===t.SHORT&&(Z=t.R16I),U===t.INT&&(Z=t.R32I)),y===t.RG&&(U===t.FLOAT&&(Z=t.RG32F),U===t.HALF_FLOAT&&(Z=t.RG16F),U===t.UNSIGNED_BYTE&&(Z=t.RG8),U===t.UNSIGNED_SHORT&&le&&(Z=le.RG16_EXT),U===t.SHORT&&le&&(Z=le.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RG8UI),U===t.UNSIGNED_SHORT&&(Z=t.RG16UI),U===t.UNSIGNED_INT&&(Z=t.RG32UI),U===t.BYTE&&(Z=t.RG8I),U===t.SHORT&&(Z=t.RG16I),U===t.INT&&(Z=t.RG32I)),y===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),U===t.UNSIGNED_INT&&(Z=t.RGB32UI),U===t.BYTE&&(Z=t.RGB8I),U===t.SHORT&&(Z=t.RGB16I),U===t.INT&&(Z=t.RGB32I)),y===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),U===t.UNSIGNED_INT&&(Z=t.RGBA32UI),U===t.BYTE&&(Z=t.RGBA8I),U===t.SHORT&&(Z=t.RGBA16I),U===t.INT&&(Z=t.RGBA32I)),y===t.RGB&&(U===t.UNSIGNED_SHORT&&le&&(Z=le.RGB16_EXT),U===t.SHORT&&le&&(Z=le.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),y===t.RGBA){const J=oe?Gc:ut.getTransfer(K);U===t.FLOAT&&(Z=t.RGBA32F),U===t.HALF_FLOAT&&(Z=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Z=J===gt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&le&&(Z=le.RGBA16_EXT),U===t.SHORT&&le&&(Z=le.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(R,y){let U;return R?y===null||y===Li||y===Fa?U=t.DEPTH24_STENCIL8:y===bi?U=t.DEPTH32F_STENCIL8:y===Ia&&(U=t.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===Fa?U=t.DEPTH_COMPONENT24:y===bi?U=t.DEPTH_COMPONENT32F:y===Ia&&(U=t.DEPTH_COMPONENT16),U}function T(R,y){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function _(R){const y=R.target;y.removeEventListener("dispose",_),D(y)}function A(R){const y=i.get(R);if(y.__webglInit===void 0)return;const U=R.source,V=m.get(U);if(V){const K=V[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(R),Object.keys(V).length===0&&m.delete(U)}i.remove(R)}function P(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const U=R.source,V=m.get(U);delete V[y.__cacheKey],o.memory.textures--}function D(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let K=0;K<y.__webglFramebuffer[V].length;K++)t.deleteFramebuffer(y.__webglFramebuffer[V][K]);else t.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)t.deleteFramebuffer(y.__webglFramebuffer[V]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=R.textures;for(let V=0,K=U.length;V<K;V++){const oe=i.get(U[V]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(U[V])}i.remove(R)}let k=0;function $(){k=0}function Q(){return k}function O(R){k=R}function q(){const R=k;return R>=r.maxTextures&&We("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function H(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function F(R,y){const U=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const V=R.image;if(V===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(U,R,y);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+y)}function I(R,y){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ce(U,R,y);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+y)}function X(R,y){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ce(U,R,y);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+y)}function te(R,y){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){Re(U,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+y)}const re={[Qf]:t.REPEAT,[Yi]:t.CLAMP_TO_EDGE,[Jf]:t.MIRRORED_REPEAT},je={[Jt]:t.NEAREST,[NE]:t.NEAREST_MIPMAP_NEAREST,[vl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[rd]:t.LINEAR_MIPMAP_NEAREST,[is]:t.LINEAR_MIPMAP_LINEAR},Ke={[OE]:t.NEVER,[GE]:t.ALWAYS,[BE]:t.LESS,[Hp]:t.LEQUAL,[zE]:t.EQUAL,[Gp]:t.GEQUAL,[VE]:t.GREATER,[HE]:t.NOTEQUAL};function Be(R,y){if(y.type===bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===rd||y.magFilter===vl||y.magFilter===is||y.minFilter===dn||y.minFilter===rd||y.minFilter===vl||y.minFilter===is)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,re[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,re[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,re[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,je[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,je[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt||y.minFilter!==vl&&y.minFilter!==is||y.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function G(R,y){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const V=y.source;let K=m.get(V);K===void 0&&(K={},m.set(V,K));const oe=H(y);if(oe!==R.__cacheKey){K[oe]===void 0&&(K[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[oe].usedTimes++;const le=K[R.__cacheKey];le!==void 0&&(K[R.__cacheKey].usedTimes--,le.usedTimes===0&&P(y)),R.__cacheKey=oe,R.__webglTexture=K[oe].texture}return U}function se(R,y,U){return Math.floor(Math.floor(R/U)/y)}function ne(R,y,U,V){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,U,V,y.data);else{oe.sort((Le,pe)=>Le.start-pe.start);let le=0;for(let Le=1;Le<oe.length;Le++){const pe=oe[le],he=oe[Le],Ie=pe.start+pe.count,Ve=se(he.start,y.width,4),Oe=se(pe.start,y.width,4);he.start<=Ie+1&&Ve===Oe&&se(he.start+he.count-1,y.width,4)===Ve?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++le,oe[le]=he)}oe.length=le+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Le=0,pe=oe.length;Le<pe;Le++){const he=oe[Le],Ie=Math.floor(he.start/4),Ve=Math.ceil(he.count/4),Oe=Ie%y.width,N=Math.floor(Ie/y.width),de=Ve,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Oe,N,de,ee,U,V,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function ce(R,y,U){let V=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=t.TEXTURE_3D);const K=G(R,y),oe=y.source;n.bindTexture(V,R.__webglTexture,t.TEXTURE0+U);const le=i.get(oe);if(oe.version!==le.__version||K===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ee=ut.getPrimaries(ut.workingColorSpace),fe=y.colorSpace===Mr?null:ut.getPrimaries(y.colorSpace),me=y.colorSpace===Mr||ee===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let J=x(y.image,!1,r.maxTextureSize);J=Ye(y,J);const ue=s.convert(y.format,y.colorSpace),Le=s.convert(y.type);let pe=S(y.internalFormat,ue,Le,y.normalized,y.colorSpace,y.isVideoTexture);Be(V,y);let he;const Ie=y.mipmaps,Ve=y.isVideoTexture!==!0,Oe=le.__version===void 0||K===!0,N=oe.dataReady,de=T(y,J);if(y.isDepthTexture)pe=w(y.format===rs,y.type),Oe&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,ue,Le,null));else if(y.isDataTexture)if(Ie.length>0){Ve&&Oe&&n.texStorage2D(t.TEXTURE_2D,de,pe,Ie[0].width,Ie[0].height);for(let ee=0,fe=Ie.length;ee<fe;ee++)he=Ie[ee],Ve?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ue,Le,he.data):n.texImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,ue,Le,he.data);y.generateMipmaps=!1}else Ve?(Oe&&n.texStorage2D(t.TEXTURE_2D,de,pe,J.width,J.height),N&&ne(y,J,ue,Le)):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,ue,Le,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,pe,Ie[0].width,Ie[0].height,J.depth);for(let ee=0,fe=Ie.length;ee<fe;ee++)if(he=Ie[ee],y.format!==hi)if(ue!==null)if(Ve){if(N)if(y.layerUpdates.size>0){const me=p0(he.width,he.height,y.format,y.type);for(const ie of y.layerUpdates){const _e=he.data.subarray(ie*me/he.data.BYTES_PER_ELEMENT,(ie+1)*me/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,he.width,he.height,1,ue,_e)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ue,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,pe,he.width,he.height,J.depth,0,he.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ue,Le,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,pe,he.width,he.height,J.depth,0,ue,Le,he.data)}else{Ve&&Oe&&n.texStorage2D(t.TEXTURE_2D,de,pe,Ie[0].width,Ie[0].height);for(let ee=0,fe=Ie.length;ee<fe;ee++)he=Ie[ee],y.format!==hi?ue!==null?Ve?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ue,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,he.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,he.width,he.height,ue,Le,he.data):n.texImage2D(t.TEXTURE_2D,ee,pe,he.width,he.height,0,ue,Le,he.data)}else if(y.isDataArrayTexture)if(Ve){if(Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,pe,J.width,J.height,J.depth),N)if(y.layerUpdates.size>0){const ee=p0(J.width,J.height,y.format,y.type);for(const fe of y.layerUpdates){const me=J.data.subarray(fe*ee/J.data.BYTES_PER_ELEMENT,(fe+1)*ee/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,J.width,J.height,1,ue,Le,me)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,Le,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,ue,Le,J.data);else if(y.isData3DTexture)Ve?(Oe&&n.texStorage3D(t.TEXTURE_3D,de,pe,J.width,J.height,J.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,Le,J.data)):n.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,ue,Le,J.data);else if(y.isFramebufferTexture){if(Oe)if(Ve)n.texStorage2D(t.TEXTURE_2D,de,pe,J.width,J.height);else{let ee=J.width,fe=J.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,pe,ee,fe,0,ue,Le,null),ee>>=1,fe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),J.parentNode!==ee){ee.appendChild(J),p.add(y),ee.onpaint=fe=>{const me=fe.changedElements;for(const ie of p)me.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const me=t.RGBA,ie=t.RGBA,_e=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,me,ie,_e,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ve&&Oe){const ee=we(Ie[0]);n.texStorage2D(t.TEXTURE_2D,de,pe,ee.width,ee.height)}for(let ee=0,fe=Ie.length;ee<fe;ee++)he=Ie[ee],Ve?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue,Le,he):n.texImage2D(t.TEXTURE_2D,ee,pe,ue,Le,he);y.generateMipmaps=!1}else if(Ve){if(Oe){const ee=we(J);n.texStorage2D(t.TEXTURE_2D,de,pe,ee.width,ee.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Le,J)}else n.texImage2D(t.TEXTURE_2D,0,pe,ue,Le,J);f(y)&&g(V),le.__version=oe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Re(R,y,U){if(y.image.length!==6)return;const V=G(R,y),K=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+U);const oe=i.get(K);if(K.version!==oe.__version||V===!0){n.activeTexture(t.TEXTURE0+U);const le=ut.getPrimaries(ut.workingColorSpace),Z=y.colorSpace===Mr?null:ut.getPrimaries(y.colorSpace),J=y.colorSpace===Mr||le===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ue=y.isCompressedTexture||y.image[0].isCompressedTexture,Le=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!ue&&!Le?pe[ie]=x(y.image[ie],!0,r.maxCubemapSize):pe[ie]=Le?y.image[ie].image:y.image[ie],pe[ie]=Ye(y,pe[ie]);const he=pe[0],Ie=s.convert(y.format,y.colorSpace),Ve=s.convert(y.type),Oe=S(y.internalFormat,Ie,Ve,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,de=oe.__version===void 0||V===!0,ee=K.dataReady;let fe=T(y,he);Be(t.TEXTURE_CUBE_MAP,y);let me;if(ue){N&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Oe,he.width,he.height);for(let ie=0;ie<6;ie++){me=pe[ie].mipmaps;for(let _e=0;_e<me.length;_e++){const be=me[_e];y.format!==hi?Ie!==null?N?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,0,0,be.width,be.height,Ie,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,Oe,be.width,be.height,0,be.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,0,0,be.width,be.height,Ie,Ve,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,Oe,be.width,be.height,0,Ie,Ve,be.data)}}}else{if(me=y.mipmaps,N&&de){me.length>0&&fe++;const ie=we(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Le){N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Ie,Ve,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,pe[ie].width,pe[ie].height,0,Ie,Ve,pe[ie].data);for(let _e=0;_e<me.length;_e++){const Ue=me[_e].image[ie].image;N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,0,0,Ue.width,Ue.height,Ie,Ve,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,Oe,Ue.width,Ue.height,0,Ie,Ve,Ue.data)}}else{N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,Ve,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,Ie,Ve,pe[ie]);for(let _e=0;_e<me.length;_e++){const be=me[_e];N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,0,0,Ie,Ve,be.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,Oe,Ie,Ve,be.image[ie])}}}f(y)&&g(t.TEXTURE_CUBE_MAP),oe.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ye(R,y,U,V,K,oe){const le=s.convert(U.format,U.colorSpace),Z=s.convert(U.type),J=S(U.internalFormat,le,Z,U.normalized,U.colorSpace),ue=i.get(y),Le=i.get(U);if(Le.__renderTarget=y,!ue.__hasExternalTextures){const pe=Math.max(1,y.width>>oe),he=Math.max(1,y.height>>oe);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,oe,J,pe,he,y.depth,0,le,Z,null):n.texImage2D(K,oe,J,pe,he,0,le,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),qe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,K,Le.__webglTexture,0,De(y)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,K,Le.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(R,y,U){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const V=y.depthTexture,K=V&&V.isDepthTexture?V.type:null,oe=w(y.stencilBuffer,K),le=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De(y),oe,y.width,y.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,De(y),oe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,oe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,R)}else{const V=y.textures;for(let K=0;K<V.length;K++){const oe=V[K],le=s.convert(oe.format,oe.colorSpace),Z=s.convert(oe.type),J=S(oe.internalFormat,le,Z,oe.normalized,oe.colorSpace);qe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De(y),J,y.width,y.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,De(y),J,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,J,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(R,y,U){const V=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Be(t.TEXTURE_CUBE_MAP,y.depthTexture);const ue=s.convert(y.depthTexture.format),Le=s.convert(y.depthTexture.type);let pe;y.depthTexture.format===sr?pe=t.DEPTH_COMPONENT24:y.depthTexture.format===rs&&(pe=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pe,y.width,y.height,0,ue,Le,null)}}else F(y.depthTexture,0);const oe=K.__webglTexture,le=De(y),Z=V?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,J=y.depthTexture.format===rs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===sr)qe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Z,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,J,Z,oe,0);else if(y.depthTexture.format===rs)qe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Z,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,J,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(R){const y=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=V}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let V=0;V<6;V++)Se(y.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?Se(y.__webglFramebuffer[0],R,0):Se(y.__webglFramebuffer,R,0)}else if(U){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=t.createRenderbuffer(),Ae(y.__webglDepthbuffer[V],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ae(y.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(R,y,U){const V=i.get(R);y!==void 0&&ye(V.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ge(R)}function Ce(R){const y=R.texture,U=i.get(R),V=i.get(y);R.addEventListener("dispose",_);const K=R.textures,oe=R.isWebGLCubeRenderTarget===!0,le=K.length>1;if(le||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=y.version,o.memory.textures++),oe){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let J=0;J<y.mipmaps.length;J++)U.__webglFramebuffer[Z][J]=t.createFramebuffer()}else U.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)U.__webglFramebuffer[Z]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(le)for(let Z=0,J=K.length;Z<J;Z++){const ue=i.get(K[Z]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&qe(R)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const J=K[Z];U.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);const ue=s.convert(J.format,J.colorSpace),Le=s.convert(J.type),pe=S(J.internalFormat,ue,Le,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),he=De(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(U.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),Be(t.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)ye(U.__webglFramebuffer[Z][J],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else ye(U.__webglFramebuffer[Z],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(y)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let Z=0,J=K.length;Z<J;Z++){const ue=K[Z],Le=i.get(ue);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Le.__webglTexture),Be(pe,ue),ye(U.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+Z,pe,0),f(ue)&&g(pe)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,V.__webglTexture),Be(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)ye(U.__webglFramebuffer[J],R,y,t.COLOR_ATTACHMENT0,Z,J);else ye(U.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,Z,0);f(y)&&g(Z),n.unbindTexture()}R.depthBuffer&&Ge(R)}function Xe(R){const y=R.textures;for(let U=0,V=y.length;U<V;U++){const K=y[U];if(f(K)){const oe=M(R),le=i.get(K).__webglTexture;n.bindTexture(oe,le),g(oe),n.unbindTexture()}}}const tt=[],Qe=[];function Ne(R){if(R.samples>0){if(qe(R)===!1){const y=R.textures,U=R.width,V=R.height;let K=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),Z=y.length>1;if(Z)for(let ue=0;ue<y.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Le=i.get(y[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,U,V,0,0,U,V,K,t.NEAREST),l===!0&&(tt.length=0,Qe.length=0,tt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(oe),Qe.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ue=0;ue<y.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Le=i.get(y[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function De(R){return Math.min(r.maxSamples,R.samples)}function qe(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Ye(R,y){const U=R.colorSpace,V=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Hc&&U!==Mr&&(ut.getTransfer(U)===gt?(V!==hi||K!==Un)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",U)),y}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=I,this.setTexture3D=X,this.setTextureCube=te,this.rebindTextures=ze,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vC(t,e){function n(i,r=Mr){let s;const o=ut.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===kp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Op)return t.UNSIGNED_SHORT_5_5_5_1;if(i===U_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===k_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===F_)return t.BYTE;if(i===N_)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===Up)return t.INT;if(i===Li)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===rr)return t.HALF_FLOAT;if(i===O_)return t.ALPHA;if(i===B_)return t.RGB;if(i===hi)return t.RGBA;if(i===sr)return t.DEPTH_COMPONENT;if(i===rs)return t.DEPTH_STENCIL;if(i===z_)return t.RED;if(i===Bp)return t.RED_INTEGER;if(i===gs)return t.RG;if(i===zp)return t.RG_INTEGER;if(i===Vp)return t.RGBA_INTEGER;if(i===ac||i===lc||i===cc||i===uc)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===th)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rh||i===sh||i===oh||i===ah||i===lh||i===zc||i===ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rh||i===sh)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ah)return s.COMPRESSED_R11_EAC;if(i===lh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zc)return s.COMPRESSED_RG11_EAC;if(i===ch)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===xh||i===vh||i===_h||i===yh||i===Sh||i===Mh||i===Eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ph)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Th||i===wh||i===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Th)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ah||i===Ch||i===Vc||i===Rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ah)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yC=`
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

}`;class SC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new K_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ii({vertexShader:_C,fragmentShader:yC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new On(new xu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MC extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,v=null;const E=typeof XRWebGLBinding<"u",x=new SC,f={},g=n.getContextAttributes();let M=null,S=null;const w=[],T=[],C=new at;let _=null;const A=new Nn;A.viewport=new Pt;const P=new Nn;P.viewport=new Pt;const D=[A,P],k=new DT;let $=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let se=w[G];return se===void 0&&(se=new fd,w[G]=se),se.getTargetRaySpace()},this.getControllerGrip=function(G){let se=w[G];return se===void 0&&(se=new fd,w[G]=se),se.getGripSpace()},this.getHand=function(G){let se=w[G];return se===void 0&&(se=new fd,w[G]=se),se.getHandSpace()};function O(G){const se=T.indexOf(G.inputSource);if(se===-1)return;const ne=w[se];ne!==void 0&&(ne.update(G.inputSource,G.frame,c||o),ne.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",H);for(let G=0;G<w.length;G++){const se=T[G];se!==null&&(T[G]=null,w[G].disconnect(se))}$=null,Q=null,x.reset();for(const G in f)delete f[G];e.setRenderTarget(M),m=null,u=null,p=null,r=null,S=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ce=null,Re=null;g.depth&&(Re=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=g.stencil?rs:sr,ce=g.stencil?Fa:Li);const ye={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(ye),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Di(u.textureWidth,u.textureHeight,{format:hi,type:Un,depthTexture:new wo(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Di(m.framebufferWidth,m.framebufferHeight,{format:hi,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(G){for(let se=0;se<G.removed.length;se++){const ne=G.removed[se],ce=T.indexOf(ne);ce>=0&&(T[ce]=null,w[ce].disconnect(ne))}for(let se=0;se<G.added.length;se++){const ne=G.added[se];let ce=T.indexOf(ne);if(ce===-1){for(let ye=0;ye<w.length;ye++)if(ye>=T.length){T.push(ne),ce=ye;break}else if(T[ye]===null){T[ye]=ne,ce=ye;break}if(ce===-1)break}const Re=w[ce];Re&&Re.connect(ne)}}const F=new z,I=new z;function X(G,se,ne){F.setFromMatrixPosition(se.matrixWorld),I.setFromMatrixPosition(ne.matrixWorld);const ce=F.distanceTo(I),Re=se.projectionMatrix.elements,ye=ne.projectionMatrix.elements,Ae=Re[14]/(Re[10]-1),Se=Re[14]/(Re[10]+1),Ge=(Re[9]+1)/Re[5],ze=(Re[9]-1)/Re[5],Ce=(Re[8]-1)/Re[0],Xe=(ye[8]+1)/ye[0],tt=Ae*Ce,Qe=Ae*Xe,Ne=ce/(-Ce+Xe),De=Ne*-Ce;if(se.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(De),G.translateZ(Ne),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Re[10]===-1)G.projectionMatrix.copy(se.projectionMatrix),G.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const qe=Ae+Ne,L=Se+Ne,Ye=tt-De,we=Qe+(ce-De),R=Ge*Se/L*qe,y=ze*Se/L*qe;G.projectionMatrix.makePerspective(Ye,we,R,y,qe,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function te(G,se){se===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(se.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let se=G.near,ne=G.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(ne=x.depthFar)),k.near=P.near=A.near=se,k.far=P.far=A.far=ne,($!==k.near||Q!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),$=k.near,Q=k.far),k.layers.mask=G.layers.mask|6,A.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;const ce=G.parent,Re=k.cameras;te(k,ce);for(let ye=0;ye<Re.length;ye++)te(Re[ye],ce);Re.length===2?X(k,A,P):k.projectionMatrix.copy(A.projectionMatrix),re(G,k,ce)};function re(G,se,ne){ne===null?G.matrix.copy(se.matrixWorld):(G.matrix.copy(ne.matrixWorld),G.matrix.invert(),G.matrix.multiply(se.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(se.projectionMatrix),G.projectionMatrixInverse.copy(se.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Dh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function(G){return f[G]};let je=null;function Ke(G,se){if(h=se.getViewerPose(c||o),v=se,h!==null){const ne=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ce=!1;ne.length!==k.cameras.length&&(k.cameras.length=0,ce=!0);for(let Se=0;Se<ne.length;Se++){const Ge=ne[Se];let ze=null;if(m!==null)ze=m.getViewport(Ge);else{const Xe=p.getViewSubImage(u,Ge);ze=Xe.viewport,Se===0&&(e.setRenderTargetTextures(S,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(S))}let Ce=D[Se];Ce===void 0&&(Ce=new Nn,Ce.layers.enable(Se),Ce.viewport=new Pt,D[Se]=Ce),Ce.matrix.fromArray(Ge.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ge.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(ze.x,ze.y,ze.width,ze.height),Se===0&&(k.matrix.copy(Ce.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ce===!0&&k.cameras.push(Ce)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Se=p.getDepthInformation(ne[0]);Se&&Se.isValid&&Se.texture&&x.init(Se,r.renderState)}if(Re&&Re.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let Se=0;Se<ne.length;Se++){const Ge=ne[Se].camera;if(Ge){let ze=f[Ge];ze||(ze=new K_,f[Ge]=ze);const Ce=p.getCameraImage(Ge);ze.sourceTexture=Ce}}}}for(let ne=0;ne<w.length;ne++){const ce=T[ne],Re=w[ne];ce!==null&&Re!==void 0&&Re.update(ce,se,c||o)}je&&je(G,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const Be=new ty;Be.setAnimationLoop(Ke),this.setAnimationLoop=function(G){je=G},this.dispose=function(){}}}const EC=new Lt,ly=new Ze;ly.set(-1,0,0,0,1,0,0,0,1);function TC(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,Z_(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,g,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),p(x,f)):f.isMeshPhongMaterial?(s(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),u(x,f),f.isMeshPhysicalMaterial&&m(x,f,S)):f.isMeshMatcapMaterial?(s(x,f),v(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),E(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?l(x,f,g,M):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===An&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===An&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const g=e.get(f),M=g.envMap,S=g.envMapRotation;M&&(x.envMap.value=M,x.envMapRotation.value.setFromMatrix4(EC.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(ly),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,g,M){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*g,x.scale.value=M*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function u(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,g){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,f){f.matcap&&(x.matcap.value=f.matcap)}function E(x,f){const g=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function c(S,w){let T=r[S.id];T===void 0&&(x(S),T=h(S),r[S.id]=T,S.addEventListener("dispose",g));const C=w.program;i.updateUBOMapping(S,C);const _=e.render.frame;s[S.id]!==_&&(u(S),s[S.id]=_)}function h(S){const w=p();S.__bindingPointIndex=w;const T=t.createBuffer(),C=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function p(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=r[S.id],T=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let _=0,A=T.length;_<A;_++){const P=T[_];if(Array.isArray(P))for(let D=0,k=P.length;D<k;D++)m(P[D],_,D,C);else m(P,_,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,w,T,C){if(E(S,w,T,C)===!0){const _=S.__offset,A=S.value;if(Array.isArray(A)){let P=0;for(let D=0;D<A.length;D++){const k=A[D],$=f(k);v(k,S.__data,P),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function v(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function E(S,w,T,C){const _=S.value,A=w+"_"+T;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{const P=C[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function x(S){const w=S.uniforms;let T=0;const C=16;for(let A=0,P=w.length;A<P;A++){const D=Array.isArray(w[A])?w[A]:[w[A]];for(let k=0,$=D.length;k<$;k++){const Q=D[k],O=Array.isArray(Q.value)?Q.value:[Q.value];for(let q=0,H=O.length;q<H;q++){const F=O[q],I=f(F),X=T%C,te=X%I.boundary,re=X+te;T+=te,re!==0&&C-re<I.storage&&(T+=C-re),Q.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=I.storage}}}const _=T%C;return _>0&&(T+=C-_),S.__size=T,S.__cache={},this}function f(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):We("WebGLRenderer: Unsupported uniform value type.",S),w}function g(S){const w=S.target;w.removeEventListener("dispose",g);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}const bC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Si=null;function AC(){return Si===null&&(Si=new pT(bC,16,16,gs,rr),Si.name="DFG_LUT",Si.minFilter=dn,Si.magFilter=dn,Si.wrapS=Yi,Si.wrapT=Yi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class CC{constructor(e={}){const{canvas:n=jE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Un}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const E=m,x=new Set([Vp,zp,Bp]),f=new Set([Un,Li,Ia,Fa,kp,Op]),g=new Uint32Array(4),M=new Int32Array(4),S=new z;let w=null,T=null;const C=[],_=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,k=null,$=null,Q=null,O=null;this._outputColorSpace=qn;let q=0,H=0,F=null,I=-1,X=null;const te=new Pt,re=new Pt;let je=null;const Ke=new ot(0);let Be=0,G=n.width,se=n.height,ne=1,ce=null,Re=null;const ye=new Pt(0,0,G,se),Ae=new Pt(0,0,G,se);let Se=!1;const Ge=new Xp;let ze=!1,Ce=!1;const Xe=new Lt,tt=new z,Qe=new Pt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function qe(){return F===null?ne:1}let L=i;function Ye(b,B){return n.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Np}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",Je,!1),n.addEventListener("webglcontextcreationerror",ni,!1),L===null){const B="webgl2";if(L=Ye(B,b),L===null)throw Ye(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw pt("WebGLRenderer: "+b.message),b}let we,R,y,U,V,K,oe,le,Z,J,ue,Le,pe,he,Ie,Ve,Oe,N,de,ee,fe,me,ie;function _e(){we=new Ab(L),we.init(),fe=new vC(L,we),R=new _b(L,we,e,fe),y=new gC(L,we),R.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),$=L.createFramebuffer(),Q=L.createFramebuffer(),O=L.createFramebuffer(),U=new Pb(L),V=new nC,K=new xC(L,we,y,V,R,fe,U),oe=new bb(P),le=new FT(L),me=new xb(L,le),Z=new Cb(L,le,U,me),J=new Lb(L,Z,le,me,U),N=new Db(L,R,K),Ie=new yb(V),ue=new tC(P,oe,we,R,me,Ie),Le=new TC(P,V),pe=new rC,he=new uC(we),Oe=new gb(P,oe,y,J,v,l),Ve=new mC(P,J,R),ie=new wC(L,U,R,y),de=new vb(L,we,U),ee=new Rb(L,we,U),U.programs=ue.programs,P.capabilities=R,P.extensions=we,P.properties=V,P.renderLists=pe,P.shadowMap=Ve,P.state=y,P.info=U}_e(),E!==Un&&(A=new Fb(E,n.width,n.height,a,r,s));const be=new MC(P,L);this.xr=be,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(G,se,!1))},this.getSize=function(b){return b.set(G,se)},this.setSize=function(b,B,Y=!0){if(be.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,se=B,n.width=Math.floor(b*ne),n.height=Math.floor(B*ne),Y===!0&&(n.style.width=b+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(G*ne,se*ne).floor()},this.setDrawingBufferSize=function(b,B,Y){G=b,se=B,ne=Y,n.width=Math.floor(b*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(E===Un){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(te)},this.getViewport=function(b){return b.copy(ye)},this.setViewport=function(b,B,Y,W){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,B,Y,W),y.viewport(te.copy(ye).multiplyScalar(ne).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,B,Y,W){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,B,Y,W),y.scissor(re.copy(Ae).multiplyScalar(ne).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){y.setScissorTest(Se=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){Re=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,Y=!0){let W=0;if(b){let j=!1;if(F!==null){const ve=F.texture.format;j=x.has(ve)}if(j){const ve=F.texture.type,Ee=f.has(ve),xe=Oe.getClearColor(),Pe=Oe.getClearAlpha(),Fe=xe.r,et=xe.g,st=xe.b;Ee?(g[0]=Fe,g[1]=et,g[2]=st,g[3]=Pe,L.clearBufferuiv(L.COLOR,0,g)):(M[0]=Fe,M[1]=et,M[2]=st,M[3]=Pe,L.clearBufferiv(L.COLOR,0,M))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",Je,!1),n.removeEventListener("webglcontextcreationerror",ni,!1),Oe.dispose(),pe.dispose(),he.dispose(),V.dispose(),oe.dispose(),J.dispose(),me.dispose(),ie.dispose(),ue.dispose(),be.dispose(),be.removeEventListener("sessionstart",im),be.removeEventListener("sessionend",rm),Wr.stop()};function Ue(b){b.preventDefault(),Wg("WebGLRenderer: Context Lost."),D=!0}function Je(){Wg("WebGLRenderer: Context Restored."),D=!1;const b=U.autoReset,B=Ve.enabled,Y=Ve.autoUpdate,W=Ve.needsUpdate,j=Ve.type;_e(),U.autoReset=b,Ve.enabled=B,Ve.autoUpdate=Y,Ve.needsUpdate=W,Ve.type=j}function ni(b){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Rn(b){const B=b.target;B.removeEventListener("dispose",Rn),cy(B)}function cy(b){uy(b),V.remove(b)}function uy(b){const B=V.get(b).programs;B!==void 0&&(B.forEach(function(Y){ue.releaseProgram(Y)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,Y,W,j,ve){B===null&&(B=Ne);const Ee=j.isMesh&&j.matrixWorld.determinantAffine()<0,xe=hy(b,B,Y,W,j);y.setMaterial(W,Ee);let Pe=Y.index,Fe=1;if(W.wireframe===!0){if(Pe=Z.getWireframeAttribute(Y),Pe===void 0)return;Fe=2}const et=Y.drawRange,st=Y.attributes.position;let ke=et.start*Fe,vt=(et.start+et.count)*Fe;ve!==null&&(ke=Math.max(ke,ve.start*Fe),vt=Math.min(vt,(ve.start+ve.count)*Fe)),Pe!==null?(ke=Math.max(ke,0),vt=Math.min(vt,Pe.count)):st!=null&&(ke=Math.max(ke,0),vt=Math.min(vt,st.count));const Ut=vt-ke;if(Ut<0||Ut===1/0)return;me.setup(j,W,xe,Y,Pe);let Ft,yt=de;if(Pe!==null&&(Ft=le.get(Pe),yt=ee,yt.setIndex(Ft)),j.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*qe()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(j.isLine){let nn=W.linewidth;nn===void 0&&(nn=1),y.setLineWidth(nn*qe()),j.isLineSegments?yt.setMode(L.LINES):j.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else j.isPoints?yt.setMode(L.POINTS):j.isSprite&&yt.setMode(L.TRIANGLES);if(j.isBatchedMesh)if(we.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nn=j._multiDrawStarts,Me=j._multiDrawCounts,Pn=j._multiDrawCount,ht=Pe?le.get(Pe).bytesPerElement:1,Gn=V.get(W).currentProgram.getUniforms();for(let xi=0;xi<Pn;xi++)Gn.setValue(L,"_gl_DrawID",xi),yt.render(nn[xi]/ht,Me[xi])}else if(j.isInstancedMesh)yt.renderInstances(ke,Ut,j.count);else if(Y.isInstancedBufferGeometry){const nn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Me=Math.min(Y.instanceCount,nn);yt.renderInstances(ke,Ut,Me)}else yt.render(ke,Ut)};function nm(b,B,Y){b.transparent===!0&&b.side===wi&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,ja(b,B,Y),b.side=Or,b.needsUpdate=!0,ja(b,B,Y),b.side=wi):ja(b,B,Y)}this.compile=function(b,B,Y=null){Y===null&&(Y=b),T=he.get(Y),T.init(B),_.push(T),Y.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),b!==Y&&b.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const W=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const xe=ve[Ee];nm(xe,Y,j),W.add(xe)}else nm(ve,Y,j),W.add(ve)}),T=_.pop(),W},this.compileAsync=function(b,B,Y=null){const W=this.compile(b,B,Y);return new Promise(j=>{function ve(){if(W.forEach(function(Ee){V.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){j(b);return}setTimeout(ve,10)}we.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let yu=null;function dy(b){yu&&yu(b)}function im(){Wr.stop()}function rm(){Wr.start()}const Wr=new ty;Wr.setAnimationLoop(dy),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(b){yu=b,be.setAnimationLoop(b),b===null?Wr.stop():Wr.start()},be.addEventListener("sessionstart",im),be.addEventListener("sessionend",rm),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(b,B);const Y=be.enabled===!0&&be.isPresenting===!0,W=A!==null&&(F===null||Y)&&A.begin(P,F);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(B),B=be.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,B,F),T=he.get(b,_.length),T.init(B),T.state.textureUnits=K.getTextureUnits(),_.push(T),Xe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ge.setFromProjectionMatrix(Xe,Ai,B.reversedDepth),Ce=this.localClippingEnabled,ze=Ie.init(this.clippingPlanes,Ce),w=pe.get(b,C.length),w.init(),C.push(w),be.enabled===!0&&be.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Su(Ee,B,-1/0,P.sortObjects)}Su(b,B,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(ce,Re,B.reversedDepth),De=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,De&&Oe.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ze===!0&&Ie.beginShadows();const j=T.state.shadowsArray;if(Ve.render(j,b,B),ze===!0&&Ie.endShadows(),(W&&A.hasRenderPass())===!1){const Ee=w.opaque,xe=w.transmissive;if(T.setupLights(),B.isArrayCamera){const Pe=B.cameras;if(xe.length>0)for(let Fe=0,et=Pe.length;Fe<et;Fe++){const st=Pe[Fe];om(Ee,xe,b,st)}De&&Oe.render(b);for(let Fe=0,et=Pe.length;Fe<et;Fe++){const st=Pe[Fe];sm(w,b,st,st.viewport)}}else xe.length>0&&om(Ee,xe,b,B),De&&Oe.render(b),sm(w,b,B)}F!==null&&H===0&&(K.updateMultisampleRenderTarget(F),K.updateRenderTargetMipmap(F)),W&&A.end(P),b.isScene===!0&&b.onAfterRender(P,b,B),me.resetDefaultState(),I=-1,X=null,_.pop(),_.length>0?(T=_[_.length-1],K.setTextureUnits(T.state.textureUnits),ze===!0&&Ie.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,k!==null&&k.renderEnd()};function Su(b,B,Y,W){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ge.intersectsSprite(b)){W&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Xe);const Ee=J.update(b),xe=b.material;xe.visible&&w.push(b,Ee,xe,Y,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ge.intersectsObject(b))){const Ee=J.update(b),xe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Qe.copy(Ee.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(Xe)),Array.isArray(xe)){const Pe=Ee.groups;for(let Fe=0,et=Pe.length;Fe<et;Fe++){const st=Pe[Fe],ke=xe[st.materialIndex];ke&&ke.visible&&w.push(b,Ee,ke,Y,Qe.z,st)}}else xe.visible&&w.push(b,Ee,xe,Y,Qe.z,null)}}const ve=b.children;for(let Ee=0,xe=ve.length;Ee<xe;Ee++)Su(ve[Ee],B,Y,W)}function sm(b,B,Y,W){const{opaque:j,transmissive:ve,transparent:Ee}=b;T.setupLightsView(Y),ze===!0&&Ie.setGlobalState(P.clippingPlanes,Y),W&&y.viewport(te.copy(W)),j.length>0&&Wa(j,B,Y),ve.length>0&&Wa(ve,B,Y),Ee.length>0&&Wa(Ee,B,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function om(b,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const ke=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Di(1,1,{generateMipmaps:!0,type:ke?rr:Un,minFilter:is,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const ve=T.state.transmissionRenderTarget[W.id],Ee=W.viewport||te;ve.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const xe=P.getRenderTarget(),Pe=P.getActiveCubeFace(),Fe=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(Ke),Be=P.getClearAlpha(),Be<1&&P.setClearColor(16777215,.5),P.clear(),De&&Oe.render(Y);const et=P.toneMapping;P.toneMapping=Pi;const st=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),ze===!0&&Ie.setGlobalState(P.clippingPlanes,W),Wa(b,Y,W),K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve),we.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let vt=0,Ut=B.length;vt<Ut;vt++){const Ft=B[vt],{object:yt,geometry:nn,material:Me,group:Pn}=Ft;if(Me.side===wi&&yt.layers.test(W.layers)){const ht=Me.side;Me.side=An,Me.needsUpdate=!0,am(yt,Y,W,nn,Me,Pn),Me.side=ht,Me.needsUpdate=!0,ke=!0}}ke===!0&&(K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve))}P.setRenderTarget(xe,Pe,Fe),P.setClearColor(Ke,Be),st!==void 0&&(W.viewport=st),P.toneMapping=et}function Wa(b,B,Y){const W=B.isScene===!0?B.overrideMaterial:null;for(let j=0,ve=b.length;j<ve;j++){const Ee=b[j],{object:xe,geometry:Pe,group:Fe}=Ee;let et=Ee.material;et.allowOverride===!0&&W!==null&&(et=W),xe.layers.test(Y.layers)&&am(xe,B,Y,Pe,et,Fe)}}function am(b,B,Y,W,j,ve){b.onBeforeRender(P,B,Y,W,j,ve),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(P,B,Y,W,b,ve),j.transparent===!0&&j.side===wi&&j.forceSinglePass===!1?(j.side=An,j.needsUpdate=!0,P.renderBufferDirect(Y,B,W,j,b,ve),j.side=Or,j.needsUpdate=!0,P.renderBufferDirect(Y,B,W,j,b,ve),j.side=wi):P.renderBufferDirect(Y,B,W,j,b,ve),b.onAfterRender(P,B,Y,W,j,ve)}function ja(b,B,Y){B.isScene!==!0&&(B=Ne);const W=V.get(b),j=T.state.lights,ve=T.state.shadowsArray,Ee=j.state.version,xe=ue.getParameters(b,j.state,ve,B,Y,T.state.lightProbeGridArray),Pe=ue.getProgramCacheKey(xe);let Fe=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const et=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=oe.get(b.envMap||W.environment,et),W.envMapRotation=W.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Rn),Fe=new Map,W.programs=Fe);let st=Fe.get(Pe);if(st!==void 0){if(W.currentProgram===st&&W.lightsStateVersion===Ee)return cm(b,xe),st}else xe.uniforms=ue.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,Y,xe),b.onBeforeCompile(xe,P),st=ue.acquireProgram(xe,Pe),Fe.set(Pe,st),W.uniforms=xe.uniforms;const ke=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=Ie.uniform),cm(b,xe),W.needsLights=my(b),W.lightsStateVersion=Ee,W.needsLights&&(ke.ambientLightColor.value=j.state.ambient,ke.lightProbe.value=j.state.probe,ke.directionalLights.value=j.state.directional,ke.directionalLightShadows.value=j.state.directionalShadow,ke.spotLights.value=j.state.spot,ke.spotLightShadows.value=j.state.spotShadow,ke.rectAreaLights.value=j.state.rectArea,ke.ltc_1.value=j.state.rectAreaLTC1,ke.ltc_2.value=j.state.rectAreaLTC2,ke.pointLights.value=j.state.point,ke.pointLightShadows.value=j.state.pointShadow,ke.hemisphereLights.value=j.state.hemi,ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ke.spotLightMatrix.value=j.state.spotLightMatrix,ke.spotLightMap.value=j.state.spotLightMap,ke.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=st,W.uniformsList=null,st}function lm(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=dc.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function cm(b,B){const Y=V.get(b);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function fy(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let Y=0,W=b.length;Y<W;Y++){const j=b[Y];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function hy(b,B,Y,W,j){B.isScene!==!0&&(B=Ne),K.resetTextureUnits();const ve=B.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,xe=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ut.workingColorSpace,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Fe=oe.get(W.envMap||Ee,Pe),et=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,st=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Ut=!!Y.morphAttributes.color;let Ft=Pi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ft=P.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nn=yt!==void 0?yt.length:0,Me=V.get(W),Pn=T.state.lights;if(ze===!0&&(Ce===!0||b!==X)){const Mt=b===X&&W.id===I;Ie.setState(W,b,Mt)}let ht=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Pn.state.version||Me.outputColorSpace!==xe||j.isBatchedMesh&&Me.batching===!1||!j.isBatchedMesh&&Me.batching===!0||j.isBatchedMesh&&Me.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Me.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Me.instancing===!1||!j.isInstancedMesh&&Me.instancing===!0||j.isSkinnedMesh&&Me.skinning===!1||!j.isSkinnedMesh&&Me.skinning===!0||j.isInstancedMesh&&Me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Me.instancingMorph===!1&&j.morphTexture!==null||Me.envMap!==Fe||W.fog===!0&&Me.fog!==ve||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ie.numPlanes||Me.numIntersection!==Ie.numIntersection)||Me.vertexAlphas!==et||Me.vertexTangents!==st||Me.morphTargets!==ke||Me.morphNormals!==vt||Me.morphColors!==Ut||Me.toneMapping!==Ft||Me.morphTargetsCount!==nn||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Me.__version=W.version);let Gn=Me.currentProgram;ht===!0&&(Gn=ja(W,B,j),k&&W.isNodeMaterial&&k.onUpdateProgram(W,Gn,Me));let xi=!1,ar=!1,ys=!1;const St=Gn.getUniforms(),kt=Me.uniforms;if(y.useProgram(Gn.program)&&(xi=!0,ar=!0,ys=!0),W.id!==I&&(I=W.id,ar=!0),Me.needsLights){const Mt=fy(T.state.lightProbeGridArray,j);Me.lightProbeGrid!==Mt&&(Me.lightProbeGrid=Mt,ar=!0)}if(xi||X!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",b.projectionMatrix),St.setValue(L,"viewMatrix",b.matrixWorldInverse);const cr=St.map.cameraPosition;cr!==void 0&&cr.setValue(L,tt.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),X!==b&&(X=b,ar=!0,ys=!0)}if(Me.needsLights&&(Pn.state.directionalShadowMap.length>0&&St.setValue(L,"directionalShadowMap",Pn.state.directionalShadowMap,K),Pn.state.spotShadowMap.length>0&&St.setValue(L,"spotShadowMap",Pn.state.spotShadowMap,K),Pn.state.pointShadowMap.length>0&&St.setValue(L,"pointShadowMap",Pn.state.pointShadowMap,K)),j.isSkinnedMesh){St.setOptional(L,j,"bindMatrix"),St.setOptional(L,j,"bindMatrixInverse");const Mt=j.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),St.setValue(L,"boneTexture",Mt.boneTexture,K))}j.isBatchedMesh&&(St.setOptional(L,j,"batchingTexture"),St.setValue(L,"batchingTexture",j._matricesTexture,K),St.setOptional(L,j,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",j._indirectTexture,K),St.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",j._colorsTexture,K));const lr=Y.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&N.update(j,Y,Gn),(ar||Me.receiveShadow!==j.receiveShadow)&&(Me.receiveShadow=j.receiveShadow,St.setValue(L,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(kt.envMapIntensity.value=B.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=AC()),ar){if(St.setValue(L,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&py(kt,ys),ve&&W.fog===!0&&Le.refreshFogUniforms(kt,ve),Le.refreshMaterialUniforms(kt,W,ne,se,T.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){const Mt=Me.lightProbeGrid;kt.probesSH.value=Mt.texture,kt.probesMin.value.copy(Mt.boundingBox.min),kt.probesMax.value.copy(Mt.boundingBox.max),kt.probesResolution.value.copy(Mt.resolution)}dc.upload(L,lm(Me),kt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(dc.upload(L,lm(Me),kt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(L,"center",j.center),St.setValue(L,"modelViewMatrix",j.modelViewMatrix),St.setValue(L,"normalMatrix",j.normalMatrix),St.setValue(L,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const Mt=W.uniformsGroups;for(let cr=0,Ss=Mt.length;cr<Ss;cr++){const um=Mt[cr];ie.update(um,Gn),ie.bind(um,Gn)}}return Gn}function py(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function my(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,B,Y){const W=V.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=B,V.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const Y=V.get(b);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,Y=0){F=b,q=B,H=Y;let W=null,j=!1,ve=!1;if(b){const xe=V.get(b);if(xe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,xe.__webglFramebuffer),te.copy(b.viewport),re.copy(b.scissor),je=b.scissorTest,y.viewport(te),y.scissor(re),y.setScissorTest(je),I=-1;return}else if(xe.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(xe.__hasExternalTextures)K.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const et=b.depthTexture;if(xe.__boundDepthTexture!==et){if(et!==null&&V.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ve=!0);const Fe=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?W=Fe[B][Y]:W=Fe[B],j=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?W=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[Y]:W=Fe,te.copy(b.viewport),re.copy(b.scissor),je=b.scissorTest}else te.copy(ye).multiplyScalar(ne).floor(),re.copy(Ae).multiplyScalar(ne).floor(),je=Se;if(Y!==0&&(W=$),y.bindFramebuffer(L.FRAMEBUFFER,W)&&y.drawBuffers(b,W),y.viewport(te),y.scissor(re),y.setScissorTest(je),j){const xe=V.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,Y)}else if(ve){const xe=B;for(let Pe=0;Pe<b.textures.length;Pe++){const Fe=V.get(b.textures[Pe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pe,Fe.__webglTexture,Y,xe)}}else if(b!==null&&Y!==0){const xe=V.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,Y)}I=-1},this.readRenderTargetPixels=function(b,B,Y,W,j,ve,Ee,xe=0){if(!(b&&b.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){y.bindFramebuffer(L.FRAMEBUFFER,Pe);try{const Fe=b.textures[xe],et=Fe.format,st=Fe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(et)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(st)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-W&&Y>=0&&Y<=b.height-j&&L.readPixels(B,Y,W,j,fe.convert(et),fe.convert(st),ve)}finally{const Fe=F!==null?V.get(F).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,B,Y,W,j,ve,Ee,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(B>=0&&B<=b.width-W&&Y>=0&&Y<=b.height-j){y.bindFramebuffer(L.FRAMEBUFFER,Pe);const Fe=b.textures[xe],et=Fe.format,st=Fe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!R.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,ve.byteLength,L.STREAM_READ),L.readPixels(B,Y,W,j,fe.convert(et),fe.convert(st),0);const vt=F!==null?V.get(F).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,vt);const Ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await XE(L,Ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ve),L.deleteBuffer(ke),L.deleteSync(Ut),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,Y=0){const W=Math.pow(2,-Y),j=Math.floor(b.image.width*W),ve=Math.floor(b.image.height*W),Ee=B!==null?B.x:0,xe=B!==null?B.y:0;K.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Ee,xe,j,ve),y.unbindTexture()},this.copyTextureToTexture=function(b,B,Y=null,W=null,j=0,ve=0){let Ee,xe,Pe,Fe,et,st,ke,vt,Ut;const Ft=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(Y!==null)Ee=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,et=Y.min.y,st=Y.isBox3?Y.min.z:0;else{const kt=Math.pow(2,-j);Ee=Math.floor(Ft.width*kt),xe=Math.floor(Ft.height*kt),b.isDataArrayTexture?Pe=Ft.depth:b.isData3DTexture?Pe=Math.floor(Ft.depth*kt):Pe=1,Fe=0,et=0,st=0}W!==null?(ke=W.x,vt=W.y,Ut=W.z):(ke=0,vt=0,Ut=0);const yt=fe.convert(B.format),nn=fe.convert(B.type);let Me;B.isData3DTexture?(K.setTexture3D(B,0),Me=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Me=L.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Me=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Pn=y.getParameter(L.UNPACK_ROW_LENGTH),ht=y.getParameter(L.UNPACK_IMAGE_HEIGHT),Gn=y.getParameter(L.UNPACK_SKIP_PIXELS),xi=y.getParameter(L.UNPACK_SKIP_ROWS),ar=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,Ft.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ft.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),y.pixelStorei(L.UNPACK_SKIP_ROWS,et),y.pixelStorei(L.UNPACK_SKIP_IMAGES,st);const ys=b.isDataArrayTexture||b.isData3DTexture,St=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const kt=V.get(b),lr=V.get(B),Mt=V.get(kt.__renderTarget),cr=V.get(lr.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,Mt.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let Ss=0;Ss<Pe;Ss++)ys&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(b).__webglTexture,j,st+Ss),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(B).__webglTexture,ve,Ut+Ss)),L.blitFramebuffer(Fe,et,Ee,xe,ke,vt,Ee,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||V.has(b)){const kt=V.get(b),lr=V.get(B);y.bindFramebuffer(L.READ_FRAMEBUFFER,Q),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let Mt=0;Mt<Pe;Mt++)ys?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,j,st+Mt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,j),St?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lr.__webglTexture,ve,Ut+Mt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,lr.__webglTexture,ve),j!==0?L.blitFramebuffer(Fe,et,Ee,xe,ke,vt,Ee,xe,L.COLOR_BUFFER_BIT,L.NEAREST):St?L.copyTexSubImage3D(Me,ve,ke,vt,Ut+Mt,Fe,et,Ee,xe):L.copyTexSubImage2D(Me,ve,ke,vt,Fe,et,Ee,xe);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else St?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Me,ve,ke,vt,Ut,Ee,xe,Pe,yt,nn,Ft.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,ve,ke,vt,Ut,Ee,xe,Pe,yt,Ft.data):L.texSubImage3D(Me,ve,ke,vt,Ut,Ee,xe,Pe,yt,nn,Ft):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ve,ke,vt,Ee,xe,yt,nn,Ft.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ve,ke,vt,Ft.width,Ft.height,yt,Ft.data):L.texSubImage2D(L.TEXTURE_2D,ve,ke,vt,Ee,xe,yt,nn,Ft);y.pixelStorei(L.UNPACK_ROW_LENGTH,Pn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Gn),y.pixelStorei(L.UNPACK_SKIP_ROWS,xi),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ar),ve===0&&B.generateMipmaps&&L.generateMipmap(Me),y.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){q=0,H=0,F=null,y.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}}const RC=({className:t="",height:e="320px",accentColor:n="#00f0ff",modelId:i="qwen3.5",vramText:r="6.6 GB",speedText:s="92 tok/s"})=>{const o=He.useRef(null),[a,l]=He.useState([{x:0,y:0,visible:!1},{x:0,y:0,visible:!1}]),c=He.useRef(n);c.current=n;const h=He.useRef(i);return h.current=i,He.useEffect(()=>{const p=o.current;if(!p)return;const u=p.clientWidth||400,m=p.clientHeight||320,v=new lT,E=new Nn(45,u/m,.1,1e3);E.position.z=6.5;const x=new CC({alpha:!0,antialias:!0});x.setSize(u,m),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.appendChild(x.domElement);const f=new na;v.add(f);const g=new Yp(1.1,3),M=new Rd({color:new ot(c.current),wireframe:!0,emissive:new ot(c.current),emissiveIntensity:.8,roughness:.2,metalness:.9}),S=new On(g,M);f.add(S);const w=new Kp(1.6,.22,128,16,2,3),T=new Rd({color:7340287,wireframe:!0,emissive:4718762,emissiveIntensity:.6,transparent:!0,opacity:.7}),C=new On(w,T);f.add(C);const _=new qp(2.3,0),A=new Rd({color:16711850,wireframe:!0,transparent:!0,opacity:.4}),P=new On(_,A);f.add(P);const D=300,k=new Cn,$=new Float32Array(D*3),Q=new Float32Array(D*3);for(let Ne=0;Ne<D;Ne++){const De=2.6+Math.random()*.9,qe=Math.random()*Math.PI*2,L=(Math.random()-.5)*Math.PI*.6;$[Ne*3]=De*Math.cos(qe)*Math.cos(L),$[Ne*3+1]=De*Math.sin(L),$[Ne*3+2]=De*Math.sin(qe)*Math.cos(L);const Ye=new ot(c.current);Q[Ne*3]=Ye.r,Q[Ne*3+1]=Ye.g,Q[Ne*3+2]=Ye.b}k.setAttribute("position",new Jn($,3)),k.setAttribute("color",new Jn(Q,3));const O=new Y_({size:.06,vertexColors:!0,transparent:!0,opacity:.85,blending:Hf}),q=new vT(k,O);f.add(q);const H=new $p(.1,.15,64),F=new jp({color:new ot(c.current),side:wi,transparent:!0,opacity:0}),I=new On(H,F);I.rotation.x=Math.PI/2,v.add(I);let X=!1,te=.1,re=1;const je=new RT(16777215,.4);v.add(je);const Ke=new f0(61695,3,20);Ke.position.set(4,4,5),v.add(Ke);const Be=new f0(16711850,3,20);Be.position.set(-4,-4,-3),v.add(Be);let G=0,se=0,ne=0,ce=0;const Re=Ne=>{const De=p.getBoundingClientRect(),qe=(Ne.clientX-De.left)/p.clientWidth*2-1,L=-((Ne.clientY-De.top)/p.clientHeight*2-1);se=qe*.9,G=L*.9},ye=()=>{X=!0,te=.1,re=1},Ae=x.domElement;window.addEventListener("mousemove",Re),Ae.addEventListener("click",ye);let Se;const Ge=new LT,ze=new z(1.8,1.2,0),Ce=new z(-1.8,-1.2,0),Xe=()=>{Se=requestAnimationFrame(Xe);const Ne=Ge.getElapsedTime(),De=new ot(c.current);M.color.lerp(De,.05),M.emissive.lerp(De,.05),Ke.color.lerp(De,.05),F.color.lerp(De,.05),ne+=(G-ne)*.06,ce+=(se-ce)*.06,f.rotation.x=ne+Math.sin(Ne*.5)*.1,f.rotation.y=ce+Ne*.25,S.rotation.y=-Ne*.6,C.rotation.x=Ne*.5,C.rotation.z=Ne*.3,P.rotation.y=Ne*.2,q.rotation.y=Ne*.12,f.position.y=Math.sin(Ne*1.5)*.15,X&&(te+=.18,re-=.04,I.scale.set(te,te,1),F.opacity=Math.max(0,re),re<=0&&(X=!1));const qe=ze.clone().applyMatrix4(f.matrixWorld).project(E),L=Ce.clone().applyMatrix4(f.matrixWorld).project(E),Ye=we=>({x:(we.x+1)*u/2,y:(-we.y+1)*m/2,visible:we.z<1});l([Ye(qe),Ye(L)]),x.render(v,E)};Xe();const tt=()=>{if(!p)return;const Ne=p.clientWidth,De=p.clientHeight;E.aspect=Ne/De,E.updateProjectionMatrix(),x.setSize(Ne,De)},Qe=new ResizeObserver(()=>tt());return Qe.observe(p),()=>{window.removeEventListener("mousemove",Re),Ae.removeEventListener("click",ye),cancelAnimationFrame(Se),Qe.disconnect(),p.contains(x.domElement)&&p.removeChild(x.domElement),g.dispose(),M.dispose(),w.dispose(),T.dispose(),_.dispose(),A.dispose(),k.dispose(),O.dispose(),H.dispose(),F.dispose(),x.dispose()}},[]),d.jsx("div",{ref:o,className:`cyber-core-3d-container ${t}`,style:{width:"100%",height:typeof e=="number"?`${e}px`:e,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",cursor:"pointer"}})},PC=[{id:"custom-ollama",name:"Any Local Agent (Your Choice via Ollama)",tag:"ollama pull <any-model>",vram:"Configurable",vramPct:35,speed:"120 tok/s",latency:"2.8 ms",purpose:"Choose Any Agent Model (DeepSeek, Llama 3, Qwen, Mistral, Gemma, Phi)",accent:"#3B82F6"},{id:"code-agent",name:"Code Synthesis Agent",tag:"qwen2.5-coder / deepseek-coder",vram:"4.7 GB",vramPct:39,speed:"118 tok/s",latency:"3.2 ms",purpose:"Full-Stack Code Synthesis & AST Verification",accent:"#10B981"},{id:"vision-agent",name:"GUI Perception Agent",tag:"llama3.2-vision / moondream",vram:"7.8 GB",vramPct:65,speed:"64 tok/s",latency:"6.1 ms",purpose:"Screen Bounding Box Detection & GUI Automation",accent:"#8B5CF6"},{id:"fast-auditor",name:"Fast Auditor Micro Agent",tag:"1.5B - 3B Lightweight Models",vram:"1.2 GB",vramPct:10,speed:"185 tok/s",latency:"1.5 ms",purpose:"Sub-second Syntax & Logic Self-Healer",accent:"#F59E0B"},{id:"cloud-vault",name:"Cloud Provider Vault (Optional)",tag:"OpenAI / Gemini / Groq / Anthropic",vram:"0 GB Local",vramPct:0,speed:"200 tok/s",latency:"1.2 ms",purpose:"Offload Inference to Cloud API Keys in Encrypted Vault",accent:"#EC4899"}],DC=({detectedOS:t,isMobile:e,onDownloadClick:n})=>{const[i,r]=He.useState(!1),[s,o]=He.useState("powershell"),[a,l]=He.useState(PC[0]);He.useEffect(()=>{const u=setTimeout(()=>{const m=document.querySelector(".hero-anim-logo"),v=document.querySelectorAll(".hero-anim-item");m&&Vf(m,{scale:[.4,1],opacity:[0,1],duration:900,ease:"outExpo"}),v.length>0&&Vf(v,{translateY:[24,0],opacity:[0,1],delay:dE(110),duration:800,ease:"outExpo"})},50);return()=>clearTimeout(u)},[]);const[c,h]=He.useState(!1),p=()=>{h(!0),n(),setTimeout(()=>h(!1),1e3)};return d.jsx("section",{style:{paddingTop:"130px",paddingBottom:"70px",position:"relative",zIndex:1,overflow:"hidden"},children:d.jsx("div",{className:"container",children:d.jsxs("div",{style:{textAlign:"center",maxWidth:"880px",margin:"0 auto"},children:[d.jsx("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:d.jsx(RC,{height:260,accentColor:a.accent,modelId:a.id,vramText:a.vram,speedText:a.speed})}),d.jsxs("div",{className:"hero-anim-item",style:{marginBottom:"16px",color:"var(--text-muted)",fontSize:"0.95rem",fontWeight:600,letterSpacing:"0.04em"},children:["Sovereign Offline AI Agent created by ",d.jsx("strong",{style:{color:"#FFF"},children:"Aryan"})]}),d.jsxs("h1",{className:"hero-anim-item",style:{fontSize:"clamp(2.3rem, 5vw, 4rem)",lineHeight:1.1,marginBottom:"18px",fontWeight:800},children:["A Cognitive Layer for ",d.jsx("br",{}),d.jsx("span",{className:"gradient-text-cyan",children:"Your Desktop OS."})]}),d.jsxs("p",{className:"hero-anim-item",style:{fontSize:"clamp(1rem, 2vw, 1.2rem)",color:"var(--text-muted)",marginBottom:"28px",maxWidth:"740px",margin:"0 auto 32px auto",lineHeight:1.6},children:[d.jsx("strong",{style:{color:"#FFF"},children:"Local execution. Total privacy. Absolute autonomy."}),d.jsx("br",{}),"Run continuous ReAct agentic loops locally with 100% data privacy. Powered by local LLMs via Ollama, vector RAG memory, and sub-10ms system overlay."]}),d.jsxs("div",{className:"hero-anim-item",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"16px",marginBottom:"28px"},children:[d.jsxs("button",{onClick:p,className:"btn-primary",disabled:c,style:{padding:"16px 32px",fontSize:"1.05rem",opacity:c?.8:1},children:[c?d.jsx("div",{className:"spinner",style:{width:20,height:20,border:"2px solid rgba(0,0,0,0.2)",borderTopColor:"#000",borderRadius:"50%",animation:"spin 0.6s linear infinite"}}):d.jsx(ji,{size:20}),d.jsx("span",{children:c?"Preparing Build...":"Download Desktop App"})]}),d.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",style:{padding:"16px 28px",fontSize:"1.05rem"},children:[d.jsx(e_,{size:20}),d.jsx("span",{children:"Star on GitHub"})]})]}),e&&d.jsxs("div",{style:{background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",borderRadius:"12px",padding:"12px 20px",marginBottom:"28px",fontSize:"0.9rem",color:"var(--amber-accent)",display:"inline-block"},children:["💻 ",d.jsx("strong",{children:"Desktop OS Required:"})," Meridian-X runs exclusively on Windows, macOS, and Linux. Star on GitHub to setup on your computer!"]}),d.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"24px",marginTop:"36px",fontSize:"0.82rem",color:"var(--text-muted)",fontFamily:"var(--font-code)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10B981"}}),d.jsx("span",{children:"0 KB Cloud Egress"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#FAFAFA"}}),d.jsx("span",{children:"< 6.8ms HUD Latency"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#FAFAFA"}}),d.jsx("span",{children:"84 tok/sec GPU Inference"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10B981"}}),d.jsx("span",{children:"AES-256 Keychain Vault"})]})]})]})})})},In=[{stage:"THINK",title:"Analyze Goal & Assemble Unified Context",detail:"Inspecting workspace context. Assembling prompt context in parallel from Turbovec Vector RAG, Code Graph (code_graph.py), SQLite WAL, and 50-slot clipboard buffer.",codeSnippet:`// Hardware & Context Assembly (hardware_detector.py & code_graph.py)
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
🦊 Mascot State: GREEN (Success - 60 FPS Three.js Ring)`,color:"#10B981",duration:2500}],LC=()=>{const[t,e]=He.useState(0),[n,i]=He.useState(!0),[r,s]=He.useState(1),[o,a]=He.useState(!1);He.useEffect(()=>{const c=document.querySelector(".sim-log-active");c&&Vf(c,{translateY:[12,0],opacity:[.3,1],duration:450,ease:"outQuad"})},[t]),He.useEffect(()=>{if(!n)return;const c=In[t],h=setTimeout(()=>{e(p=>(p+1)%In.length)},c.duration/r);return()=>clearTimeout(h)},[t,n,r]);const l=()=>{const c=In.slice(0,t+1).map(h=>`[${h.stage}] ${h.title}
${h.detail}
${h.codeSnippet||""}`).join(`

`);navigator.clipboard.writeText(c),a(!0),setTimeout(()=>a(!1),2e3)};return d.jsxs("section",{id:"simulator",style:{padding:"100px 0",position:"relative",zIndex:1},children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:"720px",margin:"0 auto 60px auto"},children:[d.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.5vw, 3rem)",marginBottom:"16px"},children:["Continuous ",d.jsx("span",{className:"gradient-text-cyan",children:"ReAct Engine"})," in Action."]}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem"},children:"Watch Meridian-X reason, execute code, observe errors, and self-correct on your local hardware without human intervention."})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(300px, 380px) 1fr",gap:"24px",alignItems:"start"},className:"simulator-layout",children:[d.jsxs("div",{className:"glass-card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"16px",background:"rgba(12, 12, 16, 0.95)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[d.jsx("h3",{style:{fontSize:"1.1rem",color:"#FFF"},children:"Cognitive Loop Pipeline"}),d.jsxs("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-code)",color:"#FAFAFA"},children:["Step ",t+1," of ",In.length]})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:In.map((c,h)=>{const p=h===t,u=h<t;return d.jsxs("div",{onClick:()=>{e(h),i(!1)},style:{padding:"14px 16px",borderRadius:"12px",background:p?"rgba(255, 255, 255, 0.08)":u?"rgba(10, 10, 14, 0.8)":"rgba(8, 8, 12, 0.4)",border:p?"1px solid #FFFFFF":"1px solid rgba(255, 255, 255, 0.08)",cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"12px"},children:[d.jsxs("div",{style:{width:"28px",height:"28px",borderRadius:"8px",background:p?"#FFFFFF":"rgba(255,255,255,0.06)",color:p?"#030303":c.color,fontWeight:700,fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-code)"},children:["0",h+1]}),d.jsxs("div",{style:{flex:1},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsxs("span",{style:{fontWeight:700,fontSize:"0.82rem",color:c.color,fontFamily:"var(--font-code)"},children:["[",c.stage,"]"]}),u&&d.jsx(Ff,{size:14,color:"#10B981"})]}),d.jsx("div",{style:{fontSize:"0.85rem",color:p?"#FFF":"var(--text-muted)",fontWeight:500},children:c.title})]})]},c.stage)})}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"16px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsxs("button",{onClick:()=>i(!n),className:"btn-secondary",style:{padding:"8px 14px",fontSize:"0.85rem"},children:[n?d.jsx(dM,{size:15}):d.jsx(fM,{size:15}),d.jsx("span",{children:n?"Pause":"Play"})]}),d.jsx("button",{onClick:()=>{e(0),i(!0)},className:"btn-secondary",style:{padding:"8px 12px"},title:"Reset Simulator",children:d.jsx(pM,{size:15})})]}),d.jsxs("button",{onClick:()=>s(c=>c===1?2:c===2?.5:1),className:"btn-secondary",style:{padding:"8px 12px",fontSize:"0.8rem",fontFamily:"var(--font-code)"},children:[d.jsx(tM,{size:14}),d.jsxs("span",{children:[r,"x Speed"]})]})]})]}),d.jsx("div",{className:"glow-border-card",style:{height:"100%",background:"rgba(10, 10, 14, 0.95)"},children:d.jsxs("div",{className:"glow-border-card-inner",style:{padding:"0",display:"flex",flexDirection:"column",height:"100%",background:"#050508"},children:[d.jsxs("div",{style:{background:"rgba(14, 14, 18, 0.98)",padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(r_,{size:18,color:"#FAFAFA"}),d.jsx("span",{style:{fontSize:"0.88rem",fontFamily:"var(--font-code)",fontWeight:600,color:"#FFFFFF"},children:"Meridian-X ReAct Terminal Log Stream"})]}),d.jsxs("button",{onClick:l,style:{background:"transparent",border:"none",color:o?"var(--emerald-accent)":"var(--text-muted)",cursor:"pointer",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"6px"},children:[o?d.jsx(cu,{size:15}):d.jsx(Qv,{size:15}),d.jsx("span",{children:o?"Copied":"Copy Logs"})]})]}),d.jsxs("div",{className:"sim-log-active",style:{padding:"24px",background:"#040810",fontFamily:"var(--font-code)",fontSize:"0.88rem",lineHeight:"1.7",color:"#E2E8F0",flex:1,display:"flex",flexDirection:"column",gap:"20px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsxs("span",{style:{background:In[t].color,color:"#040D1A",padding:"4px 10px",borderRadius:"6px",fontWeight:800,fontSize:"0.8rem"},children:["[",In[t].stage,"]"]}),d.jsx("span",{style:{color:"#FFF",fontWeight:600,fontSize:"0.95rem"},children:In[t].title})]}),d.jsx("div",{style:{color:"var(--text-muted)",paddingLeft:"12px",borderLeft:`2px solid ${In[t].color}`},children:In[t].detail}),In[t].codeSnippet&&d.jsx("div",{style:{background:"rgba(15, 23, 42, 0.8)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",padding:"16px",whiteSpace:"pre-wrap",color:In[t].stage==="OBSERVE"?"#F59E0B":"#00F2FE",fontSize:"0.84rem"},children:In[t].codeSnippet}),d.jsxs("div",{style:{marginTop:"auto",paddingTop:"16px",borderTop:"1px dashed rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)"},children:[d.jsx("span",{children:"Runtime: Ollama (Offline GPU Engine)"}),d.jsx("span",{style:{color:"var(--emerald-accent)"},children:"● Verification: Passed (0 errors)"})]})]})]})})]})]}),d.jsx("style",{children:`
        @media (max-width: 868px) {
          .simulator-layout { grid-template-columns: 1fr !important; }
        }
      `})]})},IC=[{id:"sovereignty",title:"100% Offline & Sovereign",badge:"Air-Gapped Ready",tagline:"Zero telemetry. Zero cloud egress.",description:"Operates 100% locally via embedded Ollama runtime & FastAPI microservice. Your code, documents, API keys, and SQLite database memory never leave your device.",iconName:"ShieldCheck",accentColor:"#10B981",metrics:"0 KB Cloud Egress",details:["Local GGUF Model Execution","Full Air-Gap & Off-Grid Support","Zero Telemetry & Tracking"]},{id:"react-loop",title:"ReAct Engine & Self-Healing",badge:"loop.py ReAct Engine",tagline:"Reason → Act → Observe → Auto-Heal",description:"Asynchronous ReAct loop (meridian_backend/src/core/loop.py). Intercepts tool calls, auto-corrects parameter signature mismatches against TOOL_REGISTRY, and runs Code Auditor model checks.",iconName:"Cpu",accentColor:"#E4E4E7",metrics:"Sub-100ms Tool Healing",details:["TOOL_REGISTRY Auto-Fix","Code Auditor Security Check","Live SSE Telemetry Stream"]},{id:"swarm-debate",title:"Multi-Agent Swarm & Debate Engine",badge:"SwarmDebate.tsx",tagline:"Adversarial consensus & multi-persona debate",description:"Multi-perspective autonomous debate between customized agent personas (swarm.py, SwarmDebate.tsx). Parallel reasoning synthesis for complex problem-solving and consensus verification.",iconName:"Users",accentColor:"#F59E0B",metrics:"Multi-Persona Swarm",details:["Parallel Agent Deliberation (swarm.py)","Adversarial Consensus Validation","Live SSE Debate Stream (/api/swarm/stream)"]},{id:"workflow-dag",title:"Visual Workflow & DAG Engine",badge:"WorkflowBuilder.tsx",tagline:"Node-based visual automation graph builder",description:"Drag-and-drop workflow DAG builder (workflow_engine.py, WorkflowBuilder.tsx). Combines LLM steps, shell scripts, API calls, and watchers into sequential and conditional execution graphs.",iconName:"GitMerge",accentColor:"#8B5CF6",metrics:"Visual Node Builder",details:["Node-Based DAG Graph Builder","Conditional Execution Loops","Watcher & Trigger Integrations"]},{id:"p2p-mesh",title:"P2P Mesh & Encrypted Peer Offload",badge:"Encrypted LAN/WAN Mesh",tagline:"Distributed peer discovery & task offloading",description:"Distributed peer-to-peer node discovery and handshake (p2p.py, p2p_crypto.py). End-to-end encrypted task offloading between trusted LAN/WAN Meridian-X nodes over port 8765.",iconName:"Network",accentColor:"#EC4899",metrics:"End-to-End Encrypted",details:["P2P Node Handshake (p2p_crypto.py)","Distributed Peer Task Offload","Port 8765 Mesh Gateway"]},{id:"code-lsp",title:"Code Graph & LSP Client Engine",badge:"AST Symbol Indexer",tagline:"Deep code AST analysis & symbol graph",description:"Language Server Protocol integration (lsp_client.py, code_graph.py) for deep AST symbol analysis, type checking, and automated code quality reviewing (auto_reviewer.py).",iconName:"FileCode",accentColor:"#38BDF8",metrics:"AST Symbol Graph",details:["LSP Client Integration (lsp_client.py)","Symbol Knowledge Graph (code_graph.py)","Automated Code Reviewer"]},{id:"browser-desktop",title:"Playwright Web & Desktop Agent",badge:"GUI & Web Automation",tagline:"Headless browser scraping & GUI macros",description:"Headless and visual Playwright browser agent (browser_agent.py, web_browser.py). Desktop GUI mouse/keyboard macro recording and playback (desktop.py, recording.py).",iconName:"MonitorPlay",accentColor:"#67E8F9",metrics:"Playwright + GUI Macros",details:["Playwright Browser Agent","Desktop GUI Macro Recorder","Visual Click & Screen Perception"]},{id:"temporal-memory",title:"Temporal Memory & State Rollback",badge:"Time-Travel Rollback",tagline:"Granular session snapshots & history rollback",description:"Granular conversation session state snapshots and time-travel rollback (temporal_memory.py, Timeline.tsx). Instant state restoration via /api/history/rollback.",iconName:"History",accentColor:"#14B8A6",metrics:"Instant Snapshots",details:["Temporal Memory Snapshots","Time-Travel State Rollback","Telemetry Log Exporter"]},{id:"social-bridges",title:"Social & Communication Bridges",badge:"Discord / Telegram / WhatsApp",tagline:"Out-of-the-box bot communication bridges",description:"Bidirectional bot integration bridges for Discord (discord_bridge.py), Telegram (telegram_bridge.py), and WhatsApp (whatsapp_manager.py) for remote control.",iconName:"MessageSquare",accentColor:"#A78BFA",metrics:"3 Bot Channels",details:["Discord Bot Bridge (discord_bridge.py)","Telegram Bot Bridge (telegram_bridge.py)","WhatsApp Manager (whatsapp_manager.py)"]},{id:"onboarding-wizard",title:"Non-Techie Onboarding Wizard",badge:"Auto Spec Classifier",tagline:"Hardware auto-detect & multi-port Ollama scanner",description:"Detects system CPU cores, RAM, and NVIDIA VRAM (pynvml) to classify machines into Entry (<8GB), Mid (8-16GB), or High (>16GB) tiers. Auto-scans ports 11434, 11435, 8080, 5000 and streams model downloads via SSE.",iconName:"Sparkles",accentColor:"#38BDF8",metrics:"4-Port Auto-Discovery",details:["Hardware Tier Detection (hardware_detector.py)","Multi-Port Ollama Scanner (ollama_manager.py)","Real-Time SSE Model Puller"]},{id:"remote-selfhost",title:"Remote Backend & Docker Stacks",badge:"Caddy SSL Automated",tagline:"Self-host on private servers or cloud VMs",description:"Deploy with standard docker-compose.yml or docker-compose.prod.yml featuring automated Caddy SSL reverse proxy. Switch between local and remote backends instantly via ServerConnectionModal.",iconName:"Server",accentColor:"#67E8F9",metrics:"1-Click Docker Stack",details:["Production Caddy SSL Proxy","docs/SELF_HOSTING.md Guide","Remote Backend URL Switcher"]},{id:"mcp-reverse",title:"MCP Plugins & Reverse MCP Server",badge:"/api/mcp/v1/tools",tagline:"1-Click plugins + reverse tool export for IDEs",description:"Marketplace for PostgreSQL, GitHub, Linear, and Slack MCP servers. Exposes internal TOOL_REGISTRY as a reverse MCP server at /api/mcp/v1/tools for external IDE consumption.",iconName:"Plug",accentColor:"#F43F5E",metrics:"Reverse MCP Server",details:["GitHub / Postgres / Slack MCP","Reverse Endpoint /api/mcp/v1/tools","Dynamic JSON-RPC Schema Injection"]},{id:"encrypted-vault",title:"AES-256-GCM Secret Vault",badge:"Hardware HMAC Passphrase",tagline:"Machine-bound HMAC derivation & encrypted keys",description:"AES-256-GCM encrypted credential vault (vault.py) bound to hostname + username HMAC passphrase. Manages keys for OpenAI, Anthropic, Gemini, Groq, DeepSeek, Tavily, Discord, and Telegram.",iconName:"Lock",accentColor:"#10B981",metrics:"256-Bit Key Hardware Vault",details:["HMAC Passphrase Derivation","Cloud API Key Vault (vault.py)","SEC-01..SEC-26 Security Gateways"]},{id:"supertonic-voice",title:"Supertonic Voice & ONNX Wake-Word",badge:"'Hey Meridian' Wake-Word",tagline:"Hands-free wake-word + 10-voice neural TTS",description:"Hands-free ONNX wake-word listener for 'Hey Meridian' (wakeword.py), Faster-Whisper local speech-to-text (stt.py), and 10-voice neural text-to-speech with Supertonic (tts.py).",iconName:"Volume2",accentColor:"#EC4899",metrics:"ONNX Wake-Word",details:["'Hey Meridian' Wake-Word (wakeword.py)","Faster-Whisper Local STT (stt.py)","Supertonic 10-Voice TTS (tts.py)"]}],FC=[{id:"cyber-slate",name:"Classic Cyber Slate",type:"Dark",accentColor:"#E8A020",typography:"IBM Plex Mono",description:"Solar Amber accents with deep slate obsidian backdrop"},{id:"art-deco",name:"Art Deco Luxury",type:"Dark",accentColor:"#D4AF37",typography:"Playfair Display (Serif)",description:"Metallic Gold geometric sophistication"},{id:"neobrutalism",name:"Neobrutalism",type:"Dark",accentColor:"#FFDE59",typography:"Space Grotesk",description:"Canary Yellow stark high-contrast boundaries"},{id:"cyberpunk-neon",name:"Cyberpunk Neon",type:"Dark",accentColor:"#FF0055",typography:"Orbitron",description:"Electric Magenta glowing terminal vibe"},{id:"retro-synthwave",name:"Retro Synthwave",type:"Dark",accentColor:"#FF71CE",typography:"VT323 (Pixel Mono)",description:"Hot Pink 80s arcade aesthetic"},{id:"ink-slate",name:"Ink & Slate",type:"Dark",accentColor:"#818CF8",typography:"Inter",description:"Muted Indigo clean developer workspace"},{id:"nordic-frost",name:"Nordic Frost",type:"Dark",accentColor:"#38BDF8",typography:"DM Sans",description:"Sky Blue crisp Scandinavian minimalism"},{id:"maximalism",name:"Maximalism",type:"Dark",accentColor:"#FF007A",typography:"Syne",description:"Vibrant Pink expressive high-density layout"},{id:"paper-ink",name:"Paper & Ink",type:"Light",accentColor:"#D95338",typography:"Lora (Serif)",description:"Terracotta Coral warm editorial feel"},{id:"sakura-blossom",name:"Sakura Blossom",type:"Light",accentColor:"#E85D75",typography:"Outfit",description:"Rose Quartz soft modern aesthetic"},{id:"solaris-light",name:"Solaris Light",type:"Light",accentColor:"#2563EB",typography:"DM Sans",description:"Cobalt Blue professional daylight layout"}],NC=[{name:"Tauri v2",role:"Desktop Core & Security Shell",description:"Rust-powered lightweight desktop container with zero Electron bloat, fast startup, frameless HUD, and native OS global hotkeys.",badge:"Rust v2 Engine",color:"#F59E0B"},{name:"FastAPI",role:"Async Local Execution Backend",description:"Asynchronous Python engine orchestrating local tool calling, system commands, SSE streaming, and background ReAct loops.",badge:"Async FastAPI",color:"#009688"},{name:"Turbovec & SQLite WAL",role:"On-Device Vector Memory & Storage",description:"Blazing fast local vector index storing embeddings for instant semantic RAG combined with SQLite WAL database persistence.",badge:"Vector RAG + WAL",color:"#8B5CF6"},{name:"Ollama Runtime",role:"Local LLM Inference Engine",description:"Direct hardware acceleration (CUDA/Metal/ROCm) running Qwen 2.5 Coder, Llama 3.2 Vision, and Nomic Embed locally.",badge:"GPU Accelerated",color:"#10B981"}],UC={ShieldCheck:d.jsx(du,{size:22,color:"#10B981"}),Cpu:d.jsx(uu,{size:22,color:"#E4E4E7"}),Users:d.jsx(mM,{size:22,color:"#F59E0B"}),GitMerge:d.jsx(rM,{size:22,color:"#8B5CF6"}),Network:d.jsx(uM,{size:22,color:"#EC4899"}),FileCode:d.jsx(Jv,{size:22,color:"#38BDF8"}),MonitorPlay:d.jsx(cM,{size:22,color:"#67E8F9"}),History:d.jsx(sM,{size:22,color:"#14B8A6"}),MessageSquare:d.jsx(lM,{size:22,color:"#A78BFA"}),Sparkles:d.jsx(Uc,{size:22,color:"#38BDF8"}),Server:d.jsx(t_,{size:22,color:"#67E8F9"}),Plug:d.jsx(hM,{size:22,color:"#F43F5E"}),Zap:d.jsx(xM,{size:22,color:"#F59E0B"}),Layers:d.jsx(oM,{size:22,color:"#A78BFA"}),Lock:d.jsx(Rp,{size:22,color:"#10B981"}),ShieldAlert:d.jsx(n_,{size:22,color:"#EF4444"}),ClipboardList:d.jsx(J1,{size:22,color:"#8B5CF6"}),Volume2:d.jsx(gM,{size:22,color:"#EC4899"}),BarChart3:d.jsx(Z1,{size:22,color:"#3B82F6"}),Database:d.jsx(eM,{size:22,color:"#14B8A6"}),Feather:d.jsx(nM,{size:22,color:"#64748B"})},kC=()=>{const[t,e]=He.useState("All"),[n,i]=He.useState("cyber-slate");return d.jsx("section",{id:"features",style:{padding:"90px 0",position:"relative",zIndex:1},children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 56px auto"},children:[d.jsxs("h2",{style:{fontSize:"clamp(2rem, 4vw, 3.2rem)",marginBottom:"18px",fontWeight:800},children:["Key Features & ",d.jsx("span",{className:"gradient-text-purple",children:"System Capabilities"})]}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"Complete list of sovereign offline agentic functions, background surveillance engines, security gates, and UI companions."})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:[IC.map(r=>d.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"16px",background:"rgba(10, 10, 14, 0.92)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"16px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(5, 5, 8, 0.95)",border:`1px solid ${r.accentColor}44`,display:"flex",alignItems:"center",justifyContent:"center"},children:UC[r.iconName]}),d.jsx("span",{className:"glass-pill",style:{fontSize:"0.75rem",color:r.accentColor,borderColor:`${r.accentColor}44`,padding:"3px 10px"},children:r.badge})]}),d.jsxs("div",{children:[d.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:r.title}),d.jsx("div",{style:{fontSize:"0.84rem",color:r.accentColor,fontWeight:600,marginBottom:"8px"},children:r.tagline}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.55},children:r.description})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"auto",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:r.details.map((s,o)=>d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",color:"#E2E8F0"},children:[d.jsx(Ff,{size:13,color:r.accentColor}),d.jsx("span",{children:s})]},o))}),d.jsxs("div",{style:{paddingTop:"8px",display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-code)"},children:[d.jsx("span",{children:"Spec Target"}),d.jsx("span",{style:{color:r.accentColor,fontWeight:600},children:r.metrics})]})]},r.id)),d.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"14px",background:"rgba(18, 18, 28, 0.6)",border:"1px dashed rgba(255, 255, 255, 0.25)",position:"relative"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-code)",color:"#38BDF8",background:"rgba(56, 189, 248, 0.15)",padding:"3px 8px",borderRadius:"6px",fontWeight:700},children:"UPCOMING ROADMAP"}),d.jsx(Uc,{size:18,color:"#38BDF8",className:"animate-pulse"})]}),d.jsxs("div",{children:[d.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:"More Features Coming Soon"}),d.jsx("div",{style:{fontSize:"0.84rem",color:"#38BDF8",fontWeight:600,marginBottom:"8px"},children:"Continuous Expansion & Community MCPs"}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.55},children:"Active development pipeline introducing enhanced multi-modal agents, expanded MCP server ecosystem, and advanced workflow automation."})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"auto",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:["Multi-Agent Swarm Orchestration","Local Speech-to-Speech Engine","Automated Workflow Scripting","Community MCP Plugin Store"].map((r,s)=>d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.8rem",color:"#E2E8F0"},children:[d.jsx(Uc,{size:13,color:"#38BDF8"}),d.jsx("span",{children:r})]},s))}),d.jsxs("div",{style:{paddingTop:"8px",display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-code)"},children:[d.jsx("span",{children:"Status"}),d.jsx("span",{style:{color:"#38BDF8",fontWeight:600},children:"Active Development"})]})]})]}),d.jsxs("div",{style:{marginTop:"80px",paddingTop:"50px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[d.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[d.jsx("h3",{style:{fontSize:"clamp(1.8rem, 3vw, 2.5rem)",marginBottom:"10px",fontWeight:700},children:"11 Built-in Design Styles"}),d.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"640px",margin:"0 auto 20px auto",fontSize:"0.95rem"},children:"Selectable in Settings → Mascot & Style with live visual theme swatches & font pairings."}),d.jsx("div",{style:{display:"inline-flex",gap:"8px",background:"rgba(15, 15, 20, 0.8)",padding:"6px",borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:["All","Dark","Light"].map(r=>d.jsxs("button",{onClick:()=>e(r),style:{background:t===r?"var(--cyan-accent)":"transparent",color:t===r?"#000000":"var(--text-muted)",fontWeight:t===r?700:500,border:"none",borderRadius:"8px",padding:"6px 16px",fontSize:"0.82rem",cursor:"pointer",transition:"all 0.2s ease"},children:[r," Themes"]},r))})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px"},children:FC.filter(r=>t==="All"||r.type===t).map(r=>{const s=n===r.id;return d.jsxs("div",{onClick:()=>i(r.id),style:{background:r.type==="Dark"?"rgba(12, 12, 18, 0.9)":"rgba(240, 240, 245, 0.95)",color:r.type==="Dark"?"#FFFFFF":"#111827",border:`2px solid ${s?r.accentColor:"rgba(255, 255, 255, 0.1)"}`,borderRadius:"14px",padding:"18px",cursor:"pointer",transition:"all 0.2s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:r.accentColor,boxShadow:`0 0 8px ${r.accentColor}`}}),d.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem"},children:r.name})]}),d.jsx("span",{style:{fontSize:"0.7rem",fontWeight:600,padding:"2px 8px",borderRadius:"6px",background:r.type==="Dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",color:r.type==="Dark"?"#E2E8F0":"#334155"},children:r.type})]}),d.jsx("p",{style:{fontSize:"0.8rem",opacity:.8,marginBottom:"10px",lineHeight:1.4},children:r.description}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.75rem",fontFamily:r.typography.includes("Mono")||r.typography.includes("VT323")?"monospace":"sans-serif",paddingTop:"8px",borderTop:`1px solid ${r.type==="Dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}`},children:[d.jsxs("span",{children:["Font: ",r.typography]}),s&&d.jsx(Ff,{size:14,color:r.accentColor})]})]},r.id)})})]})]})})},Hl=[{stepNum:1,layerTitle:"1️⃣ Trigger & Entry Layer",subtitle:"Workspace Chat, ONNX Wake-Word, Social Bridges & P2P Mesh",accentColor:"#818CF8",nodes:[{id:"t1",name:"💬 Workspace Chat UI",badge:"Tauri v2",tech:"React 18",desc:"Main desktop workspace window & React chat shell",color:"#818CF8"},{id:"t2",name:"🎮 Overlay HUD (Alt+Shift+M)",badge:"Sub-10ms",tech:"Tauri IPC",desc:"Frameless GPU overlay & compact mascot island",color:"#38BDF8"},{id:"t3",name:'🎙️ Wake Word ("Hey Meridian")',badge:"ONNX Engine",tech:"wakeword.py",desc:"Hands-free ONNX wake-word listener & Supertonic voice",color:"#EC4899"},{id:"t4",name:"📋 Clipboard & Watchers",badge:"clipboard.py",tech:"watcher.py",desc:"50-slot pastebuffer listener & proactive event monitors",color:"#A78BFA"},{id:"t5",name:"🤖 Social Bot Bridges",badge:"Discord/TG/WA",tech:"social_bridge",desc:"Discord, Telegram & WhatsApp remote control bridges",color:"#67E8F9"},{id:"t6",name:"🌐 Remote & P2P Peer Req",badge:"P2P Mesh",tech:"p2p.py (8765)",desc:"Remote backend URL switcher & P2P mesh task offload",color:"#34D399"}]},{stepNum:2,layerTitle:"2️⃣ Security & Verification Gate",subtitle:"SEC-01..SEC-26 Security, Rate Limiting & Sandboxed Execution",accentColor:"#38BDF8",nodes:[{id:"s1",name:"🛡️ Auth Check (X-API-Key)",badge:"require_api_key",tech:"FastAPI Depends",desc:"X-API-Key middleware & token auth verification",color:"#38BDF8"},{id:"s2",name:"⏱️ SlowAPI Rate Limiter",badge:"SlowAPI",tech:"20 req/min",desc:"20 req/min chat & 10 req/min vault endpoint protection",color:"#0EA5E9"},{id:"s3",name:"🧹 Prompt Injection Sanitizer",badge:"SEC-16",tech:"prompt_injection.py",desc:"Strips jailbreak directives & zero-width unicode exploits",color:"#0284C7"},{id:"s4",name:"🛡️ Defense & Sandbox Runner",badge:"system_defense",tech:"sandbox_runner.py",desc:"System Defense Shield and isolated execution runner",color:"#6366F1"}]},{stepNum:3,layerTitle:"3️⃣ Unified Context Assembly",subtitle:"Turbovec Vector RAG, Knowledge Graph & LSP Symbols",accentColor:"#67E8F9",nodes:[{id:"c1",name:"⚡ Turbovec Vector RAG",badge:"< 1ms RAG",tech:"rag_optimizer.py",desc:"Local vector store for document & repo embeddings",color:"#67E8F9"},{id:"c2",name:"🕸️ Knowledge Graph",badge:"graph_rag.py",tech:"SQLite WAL + Mongo",desc:"Entity-relationship graph memory with Mongo sync",color:"#22D3EE"},{id:"c3",name:"📜 Temporal Memory History",badge:"Timeline.tsx",tech:"temporal_memory.py",desc:"Granular conversation snapshots & time-travel rollback",color:"#06B6D4"},{id:"c4",name:"💻 System Specs & Env State",badge:"hardware_detector.py",tech:"pynvml + Ollama Scan",desc:"Entry/Mid/High tier classification & multi-port scan",color:"#38BDF8"},{id:"c5",name:"🔍 Code Graph & LSP Symbols",badge:"code_graph.py",tech:"lsp_client.py",desc:"LSP client symbol graph, AST references & linting",color:"#A78BFA"}]},{stepNum:4,layerTitle:"4️⃣ Reasoning & Execution Engine",subtitle:"ReAct Loop (loop.py), Multi-Agent Swarm & Workflow DAG",accentColor:"#A78BFA",nodes:[{id:"r1",name:"🧠 LLM ReAct Loop (loop.py)",badge:"Async ReAct",tech:"loop.py",desc:"Asynchronous Reason → Act → Observe iterative execution loop",color:"#A78BFA"},{id:"r2",name:"🐝 Swarm Debate Engine",badge:"SwarmDebate.tsx",tech:"swarm.py",desc:"Multi-agent persona debate & adversarial consensus",color:"#F59E0B"},{id:"r3",name:"⚡ Workflow DAG Engine",badge:"WorkflowBuilder",tech:"workflow_engine.py",desc:"Node-based visual automation graph & conditional loops",color:"#8B5CF6"},{id:"r4",name:"❓ Tool Signature Auditor",badge:"TOOL_REGISTRY",tech:"registry.py",desc:"Validates tool schemas & code blocks before execution",color:"#7C3AED"},{id:"r5",name:"🩹 Self-Healing Corrector",badge:"Auto-Fix",tech:"Parameter Corrector",desc:"Catches schema mismatches & re-injects repaired arguments",color:"#EC4899"}]},{stepNum:5,layerTitle:"5️⃣ Tiered Tool & Automation Execution",subtitle:"Speculative Concurrency, Playwright & P2P Mesh",accentColor:"#4ADE80",nodes:[{id:"e1",name:"⚡ Tier 0 (Parallel Read-Only)",badge:"asyncio.gather",tech:"Parallel Exec",desc:"Executes read_file, search_web, code_graph concurrently",color:"#4ADE80",subItems:["read_file","search_web","code_graph","db_query"]},{id:"e2",name:"🔒 Tier 1+ (Mutating Sequential)",badge:"Transaction Safety",tech:"Sequential Gate",desc:"Executes write_file, run_command in transactional safety",color:"#FB923C",subItems:["write_file","run_command","desktop_gui","browser_agent"]},{id:"e3",name:"🌐 Playwright & Desktop Agent",badge:"browser_agent.py",tech:"desktop.py",desc:"Playwright web agent & GUI mouse/keyboard recording",color:"#38BDF8"},{id:"e4",name:"🔌 MCP Marketplace & P2P Mesh",badge:"/api/mcp/v1/tools",tech:"p2p.py + MCP",desc:"Reverse MCP server at /api/mcp/v1/tools & P2P task offload",color:"#F43F5E"}]},{stepNum:6,layerTitle:"6️⃣ Telemetry, Persistence & Output",subtitle:"AES Vault, Temporal Snapshots & 3D Mascot Ring",accentColor:"#FF71CE",nodes:[{id:"o1",name:"👁️ Observe & Merge Output",badge:"ReAct Cycle",tech:"Loop Evaluator",desc:"Merges tool outputs & checks task completion status",color:"#FF71CE"},{id:"o2",name:"🔐 AES-256-GCM Key Vault",badge:"vault.py",tech:"HMAC Passphrase",desc:"AES-GCM encryption bound to hostname + username + salt",color:"#FFDE59"},{id:"o3",name:"💾 SQLite WAL & Temporal Log",badge:"temporal_memory",tech:"database.py",desc:"Task execution logging & time-travel state rollback",color:"#34D399"},{id:"o4",name:"📡 Real-Time SSE Telemetry",badge:"/api/chat/stream",tech:"SSE Stream",desc:"Streams PLANNING, EXEC, STATUS, WARNING telemetry to UI",color:"#38BDF8"},{id:"o5",name:"🔊 Supertonic Neural TTS",badge:"duplex.py",tech:"tts.py + stt.py",desc:"10-voice local neural speech synthesis & Faster-Whisper STT",color:"#EC4899"},{id:"o6",name:"🦊 3D Mascot State Animation",badge:"Three.js 60 FPS",tech:"Mascot.tsx",desc:"Blue (Idle), Amber (Working), Red (Error), Green (Success)",color:"#10B981"}]}],OC=()=>{const[t,e]=He.useState(Hl[3].nodes[0]),[n,i]=He.useState("ALL");return d.jsxs("div",{style:{width:"100%"},children:[d.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[d.jsx("h3",{style:{fontSize:"clamp(1.6rem, 2.5vw, 2.2rem)",fontWeight:800,marginBottom:"8px"},children:"Meridian-X 6-Layer Execution Pipeline"}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",maxWidth:"640px",margin:"0 auto"},children:"Interactive system flow: click any node to inspect data contracts, execution concurrency, and telemetry streams."}),d.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"6px",flexWrap:"wrap",marginTop:"18px"},children:[d.jsx("button",{onClick:()=>i("ALL"),style:{padding:"6px 12px",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.15)",background:n==="ALL"?"rgba(255, 255, 255, 0.15)":"rgba(12, 12, 18, 0.8)",color:n==="ALL"?"#FFF":"var(--text-dim)",fontSize:"0.78rem",fontWeight:600,cursor:"pointer"},children:"Show All Layers"}),Hl.map(r=>d.jsxs("button",{onClick:()=>i(r.stepNum),style:{padding:"6px 12px",borderRadius:"8px",border:`1px solid ${n===r.stepNum?r.accentColor:"rgba(255, 255, 255, 0.1)"}`,background:n===r.stepNum?`${r.accentColor}22`:"rgba(12, 12, 18, 0.8)",color:n===r.stepNum?r.accentColor:"var(--text-dim)",fontSize:"0.78rem",fontWeight:600,cursor:"pointer"},children:["Layer ",r.stepNum]},r.stepNum))]})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",position:"relative"},children:Hl.filter(r=>n==="ALL"||n===r.stepNum).map((r,s)=>d.jsxs("div",{style:{position:"relative"},children:[d.jsxs("div",{style:{background:"rgba(14, 14, 20, 0.95)",border:`1px solid ${r.accentColor}44`,borderLeft:`5px solid ${r.accentColor}`,borderRadius:"12px",padding:"14px 20px",marginBottom:"14px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:`0 4px 20px ${r.accentColor}15`},children:[d.jsxs("div",{children:[d.jsx("strong",{style:{fontSize:"1.05rem",color:"#FFF"},children:r.layerTitle}),d.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginLeft:"12px"},children:r.subtitle})]}),d.jsxs("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-code)",color:r.accentColor,background:`${r.accentColor}22`,padding:"3px 10px",borderRadius:"6px",fontWeight:700},children:[r.nodes.length," Component Nodes"]})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"14px"},children:r.nodes.map(o=>{const a=t.id===o.id;return d.jsxs("div",{onClick:()=>e(o),style:{background:a?"rgba(20, 20, 30, 0.95)":"rgba(10, 10, 14, 0.8)",border:`2px solid ${a?o.color:"rgba(255, 255, 255, 0.08)"}`,borderRadius:"12px",padding:"16px",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:a?"translateY(-2px)":"none",boxShadow:a?`0 8px 24px ${o.color}33`:"none"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[d.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"#FFF"},children:o.name}),d.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-code)",color:o.color,background:`${o.color}22`,padding:"2px 6px",borderRadius:"4px"},children:o.badge})]}),d.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",lineHeight:1.4,marginBottom:"10px"},children:o.desc}),o.subItems&&d.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:o.subItems.map(l=>d.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-code)",background:"rgba(255, 255, 255, 0.06)",color:"#E2E8F0",padding:"1px 6px",borderRadius:"4px"},children:l},l))}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.72rem",color:"var(--text-dim)",borderTop:"1px solid rgba(255, 255, 255, 0.06)",paddingTop:"8px"},children:[d.jsxs("span",{children:["Tech: ",o.tech]}),a&&d.jsx(Fr,{size:13,color:o.color})]})]},o.id)})}),s<Hl.length-1&&n==="ALL"&&d.jsx("div",{style:{textAlign:"center",margin:"10px 0 -10px 0",opacity:.4},children:d.jsx(K1,{size:18,color:r.accentColor,className:"animate-bounce"})})]},r.stepNum))}),d.jsxs("div",{style:{marginTop:"32px",background:"rgba(12, 12, 18, 0.95)",border:`1px solid ${t.color}`,borderRadius:"16px",padding:"24px",boxShadow:`0 10px 30px ${t.color}22`},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(Jv,{size:18,color:t.color}),d.jsx("h4",{style:{fontSize:"1.15rem",color:"#FFF"},children:t.name})]}),d.jsx("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-code)",color:t.color,background:`${t.color}22`,padding:"3px 10px",borderRadius:"6px"},children:t.tech})]}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",lineHeight:1.6,marginBottom:"16px"},children:t.desc}),d.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.8rem",color:"#E2E8F0",fontFamily:"var(--font-code)"},children:[d.jsxs("span",{children:["Execution Target: ",d.jsx("strong",{style:{color:t.color},children:"100% On-Device / Sandboxed"})]}),d.jsxs("span",{children:["Security Gate: ",d.jsx("strong",{style:{color:"#10B981"},children:"Enforced (SEC-01..SEC-26)"})]}),d.jsxs("span",{children:["Latency Spec: ",d.jsx("strong",{style:{color:"#38BDF8"},children:"Microsecond IPC"})]})]})]})]})},BC=()=>d.jsx("section",{id:"architecture",style:{padding:"110px 0",position:"relative",zIndex:1,background:"#030303"},children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 64px auto"},children:[d.jsxs("h2",{style:{fontSize:"clamp(2.2rem, 4vw, 3.4rem)",marginBottom:"20px",letterSpacing:"-0.03em"},children:["Engineered for ",d.jsx("span",{className:"gradient-text-cyan",children:"Sub-Millisecond Autonomy."})]}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.08rem",lineHeight:1.65},children:"Decoupled multi-process pipeline uniting Rust native speed, FastAPI async control loops, embedded vector memory, and offline GPU inference."})]}),d.jsx("div",{style:{marginBottom:"48px"},children:d.jsx(OC,{})}),d.jsx("div",{style:{marginBottom:"24px",fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-dim)",fontWeight:700},children:"Core Infrastructure Components"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"24px"},children:NC.map(t=>d.jsxs("div",{className:"glass-card",style:{padding:"28px",display:"flex",flexDirection:"column",gap:"14px",background:"rgba(12, 12, 16, 0.92)",borderColor:"rgba(255, 255, 255, 0.08)"},children:[d.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:d.jsx("span",{className:"glass-pill",style:{fontSize:"0.72rem",color:"#FAFAFA",borderColor:"rgba(255, 255, 255, 0.2)",padding:"3px 10px"},children:t.badge})}),d.jsxs("div",{children:[d.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"4px",color:"#FFF"},children:t.name}),d.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:600},children:t.role})]}),d.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:1.55},children:t.description})]},t.name))}),d.jsxs("div",{style:{marginTop:"70px",paddingTop:"50px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[d.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[d.jsx("h3",{style:{fontSize:"clamp(1.6rem, 2.5vw, 2.2rem)",fontWeight:700,marginBottom:"10px"},children:"System Requirements & Platform Support"}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem"},children:"Optimized for hardware efficiency with optional hybrid cloud offloading for CPU-only systems."})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"28px"},children:[d.jsxs("div",{style:{background:"rgba(12, 12, 18, 0.9)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",padding:"24px"},children:[d.jsxs("h4",{style:{fontSize:"1.1rem",marginBottom:"16px",color:"#FFF",display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(uu,{size:18,color:"#3B82F6"}),d.jsx("span",{children:"Hardware Specifications"})]}),d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)",color:"var(--text-dim)",textAlign:"left"},children:[d.jsx("th",{style:{padding:"8px 0"},children:"Tier"}),d.jsx("th",{style:{padding:"8px 0"},children:"Minimum"}),d.jsx("th",{style:{padding:"8px 0",color:"#10B981"},children:"Recommended"})]})}),d.jsxs("tbody",{style:{color:"#E2E8F0"},children:[d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"CPU"}),d.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"i5 / Ryzen 5 (AVX2)"}),d.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"i7 / Ryzen 7+ (8+ cores)"})]}),d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"RAM"}),d.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"8 GB (Entry Tier)"}),d.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"16–32 GB (Mid/High Tier)"})]}),d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"GPU / VRAM"}),d.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"Iris Xe / Vega"}),d.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"RTX 3060+ (8 GB+ VRAM)"})]}),d.jsxs("tr",{children:[d.jsx("td",{style:{padding:"10px 0",fontWeight:600},children:"Storage"}),d.jsx("td",{style:{padding:"10px 0",color:"var(--text-muted)"},children:"10 GB SSD"}),d.jsx("td",{style:{padding:"10px 0",color:"#FFF"},children:"30 GB+ NVMe"})]})]})]})]}),d.jsxs("div",{style:{background:"rgba(12, 12, 18, 0.9)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",padding:"24px"},children:[d.jsxs("h4",{style:{fontSize:"1.1rem",marginBottom:"16px",color:"#FFF",display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(i_,{size:18,color:"#10B981"}),d.jsx("span",{children:"OS Platform Support"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{children:[d.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"Windows 11 (64-bit)"}),d.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"NSIS Exe & MSI Package"})]}),d.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(Fr,{size:15})," Native Tauri v2"]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{children:[d.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"macOS 12+"}),d.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Apple Silicon & Intel DMG"})]}),d.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(Fr,{size:15})," Native Tauri v2"]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{children:[d.jsx("strong",{style:{color:"#FFF",fontSize:"0.9rem"},children:"Linux Kernel 5.4+"}),d.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Ubuntu / Debian / Arch / Fedora"})]}),d.jsxs("span",{style:{color:"#10B981",fontWeight:700,fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(Fr,{size:15})," Native Tauri v2"]})]})]})]})]})]}),d.jsxs("div",{style:{marginTop:"60px",paddingTop:"40px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[d.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[d.jsx("h3",{style:{fontSize:"clamp(1.5rem, 2.2vw, 2rem)",fontWeight:700,marginBottom:"8px"},children:"REST API & Config Specification Reference"}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem"},children:"Open FastAPI REST endpoints and local environment key schema from PROJECT_CONTEXT.md."})]}),d.jsx("div",{style:{background:"rgba(10, 10, 14, 0.95)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"16px",overflow:"hidden"},children:d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.84rem",textAlign:"left"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{background:"rgba(20, 20, 30, 0.95)",color:"#FFF",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[d.jsx("th",{style:{padding:"12px 18px"},children:"Endpoint"}),d.jsx("th",{style:{padding:"12px 18px"},children:"Method"}),d.jsx("th",{style:{padding:"12px 18px"},children:"Description"})]})}),d.jsxs("tbody",{style:{color:"#E2E8F0",fontFamily:"var(--font-code)"},children:[d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/health"}),d.jsx("td",{style:{padding:"10px 18px",color:"#10B981"},children:"GET"}),d.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Returns system health, version, and background daemon status"})]}),d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/onboarding/hardware-spec"}),d.jsx("td",{style:{padding:"10px 18px",color:"#10B981"},children:"GET"}),d.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Returns CPU cores, RAM GB, GPU VRAM (hardware_detector.py)"})]}),d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/chat/stream"}),d.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),d.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Executes ReAct loop (loop.py) and streams telemetry events via SSE"})]}),d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/swarm/stream"}),d.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),d.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Streams multi-agent persona swarm debate deliberation (swarm.py)"})]}),d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/history/rollback"}),d.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),d.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Rolls back workspace session state to historical snapshot (Timeline.tsx)"})]}),d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/sandbox/run"}),d.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),d.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Executes code snippet inside isolated sandbox runner (sandbox_runner.py)"})]}),d.jsxs("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:[d.jsx("td",{style:{padding:"10px 18px",color:"#38BDF8"},children:"/api/vault/keys"}),d.jsx("td",{style:{padding:"10px 18px",color:"#F59E0B"},children:"POST"}),d.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Encrypts API credential into AES-256-GCM vault (vault.py)"})]}),d.jsxs("tr",{children:[d.jsx("td",{style:{padding:"10px 18px",color:"#F43F5E"},children:"/api/mcp/v1/tools"}),d.jsx("td",{style:{padding:"10px 18px",color:"#10B981"},children:"GET"}),d.jsx("td",{style:{padding:"10px 18px",color:"var(--text-muted)",fontFamily:"sans-serif"},children:"Returns reverse MCP server tool schemas for external IDE consumption"})]})]})]})})})]})]})}),zC=[{name:"Reverse MCP Server",category:"IDE Integration",description:"Exposes internal TOOL_REGISTRY at /api/mcp/v1/tools for Cursor, VS Code & Claude Desktop.",installed:!0,color:"#F43F5E"},{name:"GitHub Protocol",category:"Code Automation",description:"Create PRs, read repos, review code diffs & manage issues locally via mcp_client.py.",installed:!0,color:"#FAFAFA"},{name:"PostgreSQL Direct",category:"Database RAG",description:"Inspect schemas, run sandboxed queries, and vectorize database rows into Turbovec.",installed:!0,color:"#E4E4E7"},{name:"Linear Workflows",category:"Issue Tracking",description:"Sync project tasks, estimate issues, and auto-update sprint status.",installed:!1,color:"#10B981"},{name:"Slack Local Bridge",category:"Communications",description:"Summarize internal threads and draft responses securely.",installed:!1,color:"#38BDF8"}],VC=()=>d.jsxs("section",{id:"mcp",style:{padding:"100px 0",position:"relative",zIndex:1},children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:"760px",margin:"0 auto 60px auto"},children:[d.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Universal MCP Marketplace & ",d.jsx("span",{className:"gradient-text-amber",children:"Encrypted Key Vault."})]}),d.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:["Connect Meridian-X to your developer toolchain via open Model Context Protocol (MCP) servers and export your tool registry via reverse MCP server at ",d.jsx("code",{children:"/api/mcp/v1/tools"}),"."]})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(300px, 380px) 1fr",gap:"28px",alignItems:"start"},className:"mcp-grid",children:[d.jsxs("div",{className:"glass-card",style:{padding:"32px",display:"flex",flexDirection:"column",gap:"20px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx(Rp,{size:22,color:"var(--emerald-accent)"})}),d.jsxs("div",{children:[d.jsx("h3",{style:{fontSize:"1.15rem"},children:"Local Key Vault (vault.py)"}),d.jsx("span",{style:{fontSize:"0.78rem",color:"var(--emerald-accent)",fontFamily:"var(--font-code)"},children:"AES-256-GCM Hardware Vault"})]})]}),d.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",lineHeight:1.6},children:["API keys & secrets stay AES-256-GCM encrypted in your local vault (",d.jsx("code",{children:"vault.py"}),"). Machine-bound HMAC-SHA256 passphrase derived from ",d.jsx("code",{children:"hostname + username + salt"})," with ",d.jsx("code",{children:"SlowAPI"})," rate limiting (10 req/min). Zero plain text stored."]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:kd,children:[d.jsx(Yu,{size:14,color:"var(--emerald-accent)"}),d.jsx("span",{children:"OpenAI / Anthropic / Gemini Key"}),d.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]}),d.jsxs("div",{style:kd,children:[d.jsx(Yu,{size:14,color:"var(--emerald-accent)"}),d.jsx("span",{children:"Groq / OpenRouter / DeepSeek"}),d.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]}),d.jsxs("div",{style:kd,children:[d.jsx(Yu,{size:14,color:"var(--emerald-accent)"}),d.jsx("span",{children:"Tavily / Discord / Telegram Bot Token"}),d.jsx("strong",{style:{color:"var(--emerald-accent)"},children:"ENCRYPTED"})]})]})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"18px"},children:zC.map(t=>d.jsxs("div",{className:"glass-card",style:{padding:"24px",display:"flex",flexDirection:"column",gap:"14px",borderColor:t.installed?`${t.color}44`:"var(--border-glass)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{style:{fontSize:"0.75rem",color:t.color,fontFamily:"var(--font-code)"},children:t.category}),d.jsx("span",{className:"glass-pill",style:{fontSize:"0.7rem",padding:"2px 8px",color:t.installed?"var(--emerald-accent)":"var(--text-muted)",borderColor:t.installed?"rgba(16, 185, 129, 0.3)":"var(--border-glass)"},children:t.installed?"Installed":"1-Click Add"})]}),d.jsxs("div",{children:[d.jsx("h4",{style:{fontSize:"1.05rem",marginBottom:"4px"},children:t.name}),d.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.5},children:t.description})]})]},t.name))})]})]}),d.jsx("style",{children:`
        @media (max-width: 868px) {
          .mcp-grid { grid-template-columns: 1fr !important; }
        }
      `})]}),kd={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderRadius:"8px",background:"rgba(15, 23, 42, 0.6)",border:"1px solid var(--border-glass)",fontSize:"0.82rem",color:"var(--text-main)",fontFamily:"var(--font-code)"},O0=[{feature:"Data Execution & Privacy",meridianX:"100% Offline (Local GGUF via Ollama)",cloudAgents:"Cloud Servers (Data sent externally)",highlight:!0},{feature:"Multi-Agent Swarm Debate",meridianX:"Adversarial consensus & persona debate (swarm.py)",cloudAgents:"Single model output (No debate)",highlight:!0},{feature:"Visual Workflow DAG Builder",meridianX:"Drag-and-Drop Node Graph (WorkflowBuilder.tsx)",cloudAgents:"Linear prompt chains",highlight:!1},{feature:"P2P Encrypted Peer Mesh",meridianX:"Distributed LAN/WAN offloading (p2p.py)",cloudAgents:"Centralized server lock-in",highlight:!1},{feature:"Overlay Launcher & Hotkeys",meridianX:"Sub-10ms Overlay (Alt+M, Alt+Shift+M, Alt+V)",cloudAgents:"Browser-only / High latency API",highlight:!0},{feature:"Playwright & Desktop GUI Agent",meridianX:"Web browser agent & desktop macro recorder",cloudAgents:"Text-only web responses",highlight:!1},{feature:"Autonomous ReAct Loop",meridianX:"Self-Healing AST & Fast Auditor (loop.py)",cloudAgents:"Basic Prompting / Retries",highlight:!0},{feature:"Temporal History Rollback",meridianX:"Granular snapshots & time-travel rollback",cloudAgents:"Transient chat logs",highlight:!1},{feature:"API Key Security",meridianX:"AES-256-GCM Vault (vault.py) + HMAC Passphrase",cloudAgents:"Plaintext / Server-Side Key Vault",highlight:!1},{feature:"Voice Engine & Wake-Word",meridianX:"'Hey Meridian' ONNX Wake-Word + 10 Local Voices",cloudAgents:"Cloud API TTS ($/char)",highlight:!1},{feature:"Monthly Cost",meridianX:"$0 / Forever Free & Open Source",cloudAgents:"$20 - $500 / month Subscription",highlight:!0}],HC=()=>d.jsxs("section",{style:{padding:"100px 0",position:"relative",zIndex:1},children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",margin:"0 auto 60px auto"},children:[d.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Built Sovereign. ",d.jsx("span",{className:"gradient-text-cyan",children:"Compared to Cloud Agents."})]}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"See why developers and privacy-focused teams choose local execution over centralized cloud LLM services."})]}),d.jsx("div",{className:"glow-border-card",style:{maxWidth:"960px",margin:"0 auto",background:"rgba(10, 10, 14, 0.95)"},children:d.jsxs("div",{className:"glow-border-card-inner",style:{padding:"0",overflow:"hidden",background:"#050508"},children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.4fr 1.2fr 1fr",background:"rgba(14, 14, 18, 0.98)",padding:"20px 28px",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",fontWeight:700,fontSize:"0.95rem"},className:"matrix-header",children:[d.jsx("div",{style:{color:"var(--text-muted)"},children:"Feature Architecture"}),d.jsxs("div",{style:{color:"#FFFFFF",display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(Uc,{size:16}),d.jsx("span",{children:"Meridian-X (Sovereign)"})]}),d.jsx("div",{style:{color:"var(--text-dim)"},children:"Cloud AI Agents"})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column"},children:O0.map((t,e)=>d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.4fr 1.2fr 1fr",padding:"18px 28px",borderBottom:e<O0.length-1?"1px solid var(--border-glass)":"none",background:t.highlight?"rgba(0, 242, 254, 0.03)":"transparent",alignItems:"center",fontSize:"0.9rem"},className:"matrix-row",children:[d.jsx("div",{style:{fontWeight:600,color:"var(--text-main)"},children:t.feature}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--emerald-accent)",fontWeight:600},children:[d.jsx(cu,{size:16,color:"var(--emerald-accent)"}),d.jsx("span",{children:t.meridianX})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--text-dim)"},children:[d.jsx(fu,{size:15,color:"#F43F5E"}),d.jsx("span",{children:t.cloudAgents})]})]},t.feature))})]})})]}),d.jsx("style",{children:`
        @media (max-width: 768px) {
          .matrix-header, .matrix-row {
            grid-template-columns: 1fr !important;
            gap: 8px;
          }
        }
      `})]}),GC=[{question:"How does the Multi-Agent Swarm & Debate Engine work?",answer:"The Swarm Debate Engine (swarm.py, SwarmDebate.tsx) orchestrates multi-perspective autonomous deliberations between customizable agent personas (Security Auditor, Code Architect, Performance Optimizer). It streams real-time debate thoughts via /api/swarm/stream for adversarial consensus validation."},{question:"What is the P2P Mesh Network & Encrypted Peer Offloading?",answer:"The P2P mesh engine (p2p.py, p2p_crypto.py) discovers local LAN/WAN Meridian-X nodes over port 8765. Tasks can be offloaded securely using end-to-end asymmetric encryption keys across trusted peer nodes."},{question:"How does Temporal Memory & Time-Travel Rollback work?",answer:"Temporal memory (temporal_memory.py, Timeline.tsx) captures granular session snapshots of workspace state, code changes, and task outputs. You can roll back workspace state to any historical snapshot via /api/history/rollback."},{question:"How does the Non-Techie Onboarding Wizard work?",answer:"The onboarding wizard (OnboardingWizard.tsx) runs hardware spec detection (hardware_detector.py) analyzing CPU cores, RAM, and NVIDIA VRAM (pynvml) to classify your PC into Entry (<8GB), Mid (8-16GB), or High (>16GB) tiers. It automatically scans Ollama ports 11434, 11435, 8080, and 5000 (ollama_manager.py) and streams model pulls via real-time SSE."},{question:"Can I self-host Meridian-X remotely using Docker?",answer:"Yes! Meridian-X supports remote backend self-hosting via docker-compose.yml (direct IP) or production docker-compose.prod.yml (with automated Caddy SSL reverse proxy). You can switch target servers instantly using the Server Connection Modal (MERIDIAN_REMOTE_BACKEND_URL). Full instructions are in docs/SELF_HOSTING.md."},{question:"What is the Reverse MCP Server feature?",answer:"In addition to connecting 1-click MCP plugins (GitHub, PostgreSQL, Slack, Linear), Meridian-X exposes its internal TOOL_REGISTRY as a reverse MCP server at /api/mcp/v1/tools. This allows external IDEs like Cursor, VS Code, and Claude Desktop to consume Meridian-X tools directly."},{question:"What global hotkeys are supported in Meridian-X?",answer:"Meridian-X provides sub-10ms global shortcuts: `Alt + M` toggles the main desktop workspace window, `Alt + Shift + M` toggles the compact 3D mascot floating island HUD, and `Alt + V` triggers instant push-to-talk voice dictation."},{question:"How does 100% offline privacy and AES-GCM Vault work?",answer:"Meridian-X embeds local Ollama runtime and Turbovec vector storage. Credentials are encrypted in local vault (vault.py) via AES-256-GCM with machine-bound HMAC-SHA256 passphrase derivation (hostname + username + salt). Zero code, API keys, or prompt telemetry ever leave your device."}],WC=()=>{const[t,e]=He.useState(0),n=i=>{e(t===i?null:i)};return d.jsx("section",{style:{padding:"100px 0",position:"relative",zIndex:1},children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{style:{textAlign:"center",maxWidth:"760px",margin:"0 auto 60px auto"},children:[d.jsxs("h2",{style:{fontSize:"clamp(2rem, 3.8vw, 3.2rem)",marginBottom:"18px"},children:["Frequently Asked ",d.jsx("span",{className:"gradient-text-cyan",children:"Questions."})]}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.6},children:"Everything you need to know about setting up local inference, hardware security, and ReAct loops."})]}),d.jsx("div",{style:{maxWidth:"820px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"16px"},children:GC.map((i,r)=>{const s=t===r;return d.jsxs("div",{className:"glass-card",onClick:()=>n(r),style:{padding:"22px 28px",cursor:"pointer",borderColor:s?"var(--border-cyan)":"var(--border-glass)",transition:"all 0.25s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[d.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,color:s?"var(--cyan-primary)":"var(--text-main)"},children:i.question}),d.jsx("div",{style:{transform:s?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease",color:s?"var(--cyan-primary)":"var(--text-muted)"},children:d.jsx(Q1,{size:20})})]}),s&&d.jsx("div",{style:{marginTop:"14px",paddingTop:"14px",borderTop:"1px dashed rgba(255,255,255,0.08)",color:"var(--text-muted)",fontSize:"0.94rem",lineHeight:1.6},children:i.answer})]},i.question)})}),d.jsx("div",{style:{maxWidth:"820px",margin:"48px auto 0 auto"},children:d.jsxs("div",{className:"glass-card",style:{padding:"36px",textAlign:"center",border:"1px solid rgba(0, 242, 254, 0.2)"},children:[d.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:700,color:"#FFF",marginBottom:"8px"},children:"Subscribe to Release & Security Alerts"}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"24px"},children:"Receive cryptographically signed release updates and security advisories. Zero spam, 1-click unsubscribe."}),d.jsx(jC,{})]})})]})})},jC=()=>{const[t,e]=He.useState(""),[n,i]=He.useState(null),[r,s]=He.useState(!1),[o,a]=He.useState(!1),l=c=>{if(c.preventDefault(),!t||!t.includes("@")||!t.includes(".")){i("Please enter a valid cryptographic email address (e.g. user@domain.com)");return}i(null),s(!0),setTimeout(()=>{s(!1),a(!0)},1e3)};return o?d.jsx("div",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",borderRadius:"10px",padding:"16px",color:"#10B981",fontSize:"0.95rem"},children:"✓ Subscribed successfully! Sovereign update stream confirmed."}):d.jsxs("form",{onSubmit:l,style:{maxWidth:"520px",margin:"0 auto"},noValidate:!0,children:[d.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[d.jsx("div",{style:{flex:1,minWidth:"240px",position:"relative"},children:d.jsx("input",{type:"email",placeholder:"enter@developer-email.com",value:t,onChange:c=>{e(c.target.value),n&&i(null)},"aria-invalid":!!n,style:{width:"100%",padding:"14px 18px",borderRadius:"8px",background:"rgba(0, 0, 0, 0.6)",border:n?"1px solid #EF4444":"1px solid rgba(255, 255, 255, 0.15)",color:"#FFFFFF",fontSize:"0.95rem",outline:"none",transition:"border 0.2s ease",boxShadow:n?"0 0 12px rgba(239, 68, 68, 0.3)":"none"}})}),d.jsx("button",{type:"submit",disabled:r,className:"btn-primary",style:{padding:"14px 24px",fontSize:"0.92rem",opacity:r?.7:1},children:r?d.jsx("div",{style:{width:16,height:16,border:"2px solid rgba(0,0,0,0.2)",borderTopColor:"#000",borderRadius:"50%",animation:"spin 0.6s linear infinite"}}):"Subscribe"})]}),n&&d.jsxs("div",{style:{color:"#EF4444",fontSize:"0.82rem",textAlign:"left",marginTop:"8px",display:"flex",alignItems:"center",gap:"6px"},children:["⚠️ ",n]})]})},XC=({onDownloadClick:t,detectedOS:e})=>(Pp(),d.jsx("footer",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(5, 5, 8, 0.85)",backdropFilter:"blur(10px)",padding:"80px 0 40px 0",position:"relative",zIndex:1},children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"40px",marginBottom:"60px"},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx("img",{src:"/logo.png",alt:"Meridian-X Logo",style:{width:"34px",height:"34px",borderRadius:"50%",objectFit:"cover",border:"1px solid rgba(255, 255, 255, 0.25)",boxShadow:"0 0 12px rgba(255, 255, 255, 0.15)"}}),d.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.25rem",color:"#FFF"},children:["Meridian",d.jsx("span",{style:{color:"#A1A1AA",fontWeight:600},children:"-X"})]})]}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6},children:"Local execution. Total privacy. Absolute autonomy. Sovereign desktop AI continuous reasoning engine."}),d.jsxs("div",{style:{fontSize:"0.85rem",color:"#FAFAFA",fontWeight:600},children:["Architected & Built by ",d.jsx("strong",{style:{color:"#10B981"},children:"Aryan"})]})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Product"}),d.jsx("a",{href:"#simulator",style:Vi,children:"ReAct Terminal Demo"}),d.jsx("a",{href:"#features",style:Vi,children:"System Features"}),d.jsx("a",{href:"#architecture",style:Vi,children:"Tauri v2 & Architecture"}),d.jsx("a",{href:"#mcp",style:Vi,children:"MCP Marketplace"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Supported Platforms"}),d.jsx("span",{style:Od,children:"Windows 10 / 11 (x64 & ARM64)"}),d.jsx("span",{style:Od,children:"macOS Sonoma / Sequoia (Apple Silicon & Intel)"}),d.jsx("span",{style:Od,children:"Linux (AppImage / Deb / Arch PKGBUILD)"}),d.jsxs("button",{onClick:t,className:"btn-primary",style:{padding:"8px 16px",fontSize:"0.85rem",width:"fit-content",marginTop:"6px"},children:[d.jsx(ji,{size:14}),d.jsx("span",{children:"Get Desktop App"})]})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("h4",{style:{fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-main)"},children:"Maintainer & Community"}),d.jsxs("span",{style:{fontSize:"0.84rem",color:"var(--text-dim)",lineHeight:1.5},children:["Open-source project maintained by ",d.jsx("strong",{children:"Aryan"}),". Built for complete local data sovereignty."]}),d.jsxs("a",{href:"https://github.com/Aryan4132/Meridian-X",target:"_blank",rel:"noopener noreferrer",style:Vi,children:[d.jsx(e_,{size:14})," GitHub Repository"]}),d.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"6px"},children:[d.jsx("a",{href:"/privacy",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/privacy"),window.dispatchEvent(new Event("popstate"))},style:Vi,children:"Privacy Policy"}),d.jsx("a",{href:"/terms",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/terms"),window.dispatchEvent(new Event("popstate"))},style:Vi,children:"Terms"})]})]})]}),d.jsxs("div",{style:{paddingTop:"28px",borderTop:"1px solid var(--border-glass)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",fontSize:"0.84rem",color:"var(--text-dim)"},children:[d.jsxs("div",{children:["© ",new Date().getFullYear()," Meridian-X by ",d.jsx("strong",{children:"Aryan"}),". All rights reserved. 100% Sovereign & Offline."]}),d.jsxs("div",{style:{display:"flex",gap:"20px"},children:[d.jsx("a",{href:"/privacy",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/privacy"),window.dispatchEvent(new Event("popstate"))},style:Vi,children:"Privacy First Policy"}),d.jsx("a",{href:"/thank-you",onClick:n=>{n.preventDefault(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},style:Vi,children:"Verification Checksums"})]})]})]})})),qC=({isOpen:t,onClose:e,detectedOS:n})=>{const i=Pp();return t?d.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(4, 8, 16, 0.85)",backdropFilter:"blur(16px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:d.jsx("div",{className:"glow-border-card",style:{width:"100%",maxWidth:"540px"},children:d.jsxs("div",{className:"glow-border-card-inner",style:{padding:"32px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(ji,{size:22,color:"var(--cyan-primary)"}),d.jsxs("h3",{style:{fontSize:"1.3rem"},children:["Download Meridian-X ",i.tagName]})]}),d.jsx("button",{onClick:e,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer"},children:d.jsx(fu,{size:20})})]}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"24px",lineHeight:1.6},children:"Select your operating system binary. All builds are signed, standalone Tauri v2 executables requiring zero cloud connectivity."}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[d.jsxs("div",{style:{display:"flex",gap:"8px"},children:[d.jsxs("a",{href:i.downloadUrlExe,target:"_blank",rel:"noopener noreferrer",onClick:()=>{e(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},className:"btn-secondary",style:{flex:1,justifyContent:"space-between",borderColor:n.includes("Windows")?"var(--cyan-primary)":"var(--border-glass)"},children:[d.jsxs("div",{children:[d.jsx("strong",{children:"🪟 Windows (.exe)"}),d.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-dim)"},children:"x64 Setup"})]}),d.jsx(ji,{size:15,color:"var(--cyan-primary)"})]}),d.jsxs("a",{href:i.downloadUrlMsi,target:"_blank",rel:"noopener noreferrer",onClick:()=>{e(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},className:"btn-secondary",style:{flex:1,justifyContent:"space-between",borderColor:"var(--border-glass)"},children:[d.jsxs("div",{children:[d.jsx("strong",{children:"🪟 Windows (.msi)"}),d.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-dim)"},children:"MSI Package"})]}),d.jsx(ji,{size:15,color:"var(--cyan-primary)"})]})]}),d.jsxs("a",{href:i.downloadUrlDmg,target:"_blank",rel:"noopener noreferrer",onClick:()=>{e(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},className:"btn-secondary",style:{justifyContent:"space-between",borderColor:n.includes("macOS")?"var(--cyan-primary)":"var(--border-glass)"},children:[d.jsxs("div",{children:[d.jsx("strong",{children:"🍎 macOS Installer (.dmg)"}),d.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)"},children:"Universal / Apple Silicon & Intel"})]}),d.jsx(ji,{size:16,color:"var(--cyan-primary)"})]}),d.jsxs("a",{href:i.downloadUrlDeb,target:"_blank",rel:"noopener noreferrer",onClick:()=>{e(),window.history.pushState({},"","/thank-you"),window.dispatchEvent(new Event("popstate"))},className:"btn-secondary",style:{justifyContent:"space-between",borderColor:n.includes("Linux")?"var(--cyan-primary)":"var(--border-glass)"},children:[d.jsxs("div",{children:[d.jsx("strong",{children:"🐧 Linux Installer (.deb)"}),d.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)"},children:"Debian / Ubuntu / Linux Mint"})]}),d.jsx(ji,{size:16,color:"var(--cyan-primary)"})]})]}),d.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)",textAlign:"center"},children:["SHA-256 Checksums available on ",d.jsx("a",{href:"https://github.com/Aryan4132/Meridian-X/releases",target:"_blank",rel:"noreferrer",style:{color:"var(--cyan-primary)"},children:"GitHub v0.4.0 Releases"})]})]})})}):null},Vi={color:"var(--text-muted)",textDecoration:"none",fontSize:"0.88rem",transition:"color 0.2s ease",display:"flex",alignItems:"center",gap:"8px"},Od={color:"var(--text-dim)",fontSize:"0.84rem"},YC=({onNavigateHome:t})=>d.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"120px 24px 60px 24px",position:"relative",zIndex:10},children:d.jsxs("div",{className:"glass-card",style:{maxWidth:"680px",width:"100%",padding:"48px 36px",textAlign:"center",background:"rgba(10, 10, 14, 0.85)",border:"1px solid rgba(239, 68, 68, 0.3)",boxShadow:"0 0 50px rgba(239, 68, 68, 0.15)"},children:[d.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"72px",height:"72px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",marginBottom:"24px",color:"#EF4444"},children:d.jsx(n_,{size:36})}),d.jsxs("div",{className:"glass-pill",style:{display:"inline-flex",alignItems:"center",gap:"8px",color:"#EF4444",borderColor:"rgba(239, 68, 68, 0.3)",marginBottom:"16px",fontSize:"0.75rem",fontFamily:"var(--font-code)"},children:[d.jsx(r_,{size:14})," ERROR CODE: 0x404_SIGNAL_DISRUPTED"]}),d.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"2.5rem",fontWeight:800,color:"#FFFFFF",marginBottom:"16px",letterSpacing:"-0.02em"},children:"Coordinates Lost in Space"}),d.jsx("p",{style:{color:"#A1A1AA",fontSize:"1rem",lineHeight:1.6,marginBottom:"32px",maxWidth:"520px",margin:"0 auto 32px auto"},children:"The quantum pathway or resource endpoint you requested does not exist on this sovereign local node. Return to the main command deck."}),d.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"8px",padding:"16px",marginBottom:"32px",fontFamily:"var(--font-code)",fontSize:"0.85rem",color:"#71717A",textAlign:"left",display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx(uu,{size:18,style:{color:"#EF4444",flexShrink:0}}),d.jsx("span",{children:"diagnostic: path standard lookup returned NULL — zero memory leaked."})]}),d.jsxs("button",{onClick:t,className:"btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"10px",padding:"14px 28px",fontSize:"0.95rem",cursor:"pointer"},children:[d.jsx(lu,{size:18})," Return to Command Deck"]})]})}),$C=({onNavigateHome:t})=>d.jsx("div",{style:{minHeight:"100vh",padding:"120px 24px 80px 24px",position:"relative",zIndex:10},children:d.jsxs("div",{className:"container",style:{maxWidth:"840px"},children:[d.jsxs("button",{onClick:t,style:{background:"transparent",border:"none",color:"#A1A1AA",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem",marginBottom:"24px",fontFamily:"var(--font-heading)"},children:[d.jsx(lu,{size:16})," Back to Overview"]}),d.jsxs("div",{className:"glass-card",style:{padding:"48px",background:"rgba(10, 10, 14, 0.9)",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[d.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(0, 242, 254, 0.1)",border:"1px solid rgba(0, 242, 254, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#00F2FE"},children:d.jsx(i_,{size:22})}),d.jsx("span",{className:"glass-pill",style:{color:"#00F2FE",borderColor:"rgba(0, 242, 254, 0.3)"},children:"SOVEREIGN DATA POLICY"})]}),d.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"2.5rem",fontWeight:800,color:"#FFFFFF",marginBottom:"12px",letterSpacing:"-0.02em"},children:"Privacy Policy & Data Sovereignty"}),d.jsx("p",{style:{color:"#71717A",fontSize:"0.9rem",marginBottom:"40px"},children:"Effective Date: August 17, 2026 • Version 1.0.0"}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"#D4D4D8",lineHeight:1.7},children:[d.jsxs("section",{children:[d.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(Rp,{size:18,style:{color:"#00F2FE"}})," 1. Absolute Local Processing"]}),d.jsx("p",{children:"Meridian-X operates under a strict sovereign local model. When you run Meridian-X on your local workstation (Windows, macOS, Linux), all prompt parsing, code analysis, tool execution, and AST parsing take place exclusively inside your machine's CPU/GPU and local storage."})]}),d.jsxs("section",{children:[d.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(t_,{size:18,style:{color:"#8B5CF6"}})," 2. Zero Telemetry & Cloud Tracking"]}),d.jsx("p",{children:"We do not collect, send, transmit, or store any user prompts, codebases, file paths, hardware IDs, or interaction logs on external servers. Meridian-X does not ship with phone-home scripts or silent cloud tracking."})]}),d.jsxs("section",{children:[d.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(uu,{size:18,style:{color:"#10B981"}})," 3. Local Key Vault (AES-256 GCM)"]}),d.jsx("p",{children:"Any API keys provided for local LLM adapters (such as local Ollama instances, LM Studio, or self-hosted vLLM servers) are encrypted locally using AES-256-GCM. Master keys are protected by your operating system's native keychain (Windows Credential Manager, macOS Keychain, or Linux Secret Service)."})]}),d.jsxs("section",{style:{background:"rgba(0, 242, 254, 0.04)",border:"1px solid rgba(0, 242, 254, 0.15)",borderRadius:"12px",padding:"24px"},children:[d.jsx("h3",{style:{color:"#FFFFFF",fontWeight:700,marginBottom:"8px"},children:"Sovereignty Summary Checklist"}),d.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.9rem"},children:[d.jsx(Fr,{size:16,style:{color:"#10B981"}})," Zero remote prompt logging"]}),d.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.9rem"},children:[d.jsx(Fr,{size:16,style:{color:"#10B981"}})," 100% offline-capableReAct runtime"]}),d.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.9rem"},children:[d.jsx(Fr,{size:16,style:{color:"#10B981"}})," Local encrypted state storage"]})]})]})]})]})]})}),KC=({onNavigateHome:t})=>d.jsx("div",{style:{minHeight:"100vh",padding:"120px 24px 80px 24px",position:"relative",zIndex:10},children:d.jsxs("div",{className:"container",style:{maxWidth:"840px"},children:[d.jsxs("button",{onClick:t,style:{background:"transparent",border:"none",color:"#A1A1AA",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem",marginBottom:"24px",fontFamily:"var(--font-heading)"},children:[d.jsx(lu,{size:16})," Back to Overview"]}),d.jsxs("div",{className:"glass-card",style:{padding:"48px",background:"rgba(10, 10, 14, 0.9)",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[d.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(139, 92, 246, 0.1)",border:"1px solid rgba(139, 92, 246, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#8B5CF6"},children:d.jsx(iM,{size:22})}),d.jsx("span",{className:"glass-pill",style:{color:"#8B5CF6",borderColor:"rgba(139, 92, 246, 0.3)"},children:"END USER LICENSE & TERMS"})]}),d.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"2.5rem",fontWeight:800,color:"#FFFFFF",marginBottom:"12px",letterSpacing:"-0.02em"},children:"Terms of Service"}),d.jsx("p",{style:{color:"#71717A",fontSize:"0.9rem",marginBottom:"40px"},children:"Effective Date: August 17, 2026 • Version 1.0.0"}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"#D4D4D8",lineHeight:1.7},children:[d.jsxs("section",{children:[d.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(du,{size:18,style:{color:"#8B5CF6"}})," 1. Open Source & Desktop Software License"]}),d.jsx("p",{children:"Meridian-X is distributed as open-source desktop software under the Apache 2.0 license. You are granted a non-exclusive, worldwide license to install, execute, inspect, and modify the application on your personal or corporate desktop workstations."})]}),d.jsxs("section",{children:[d.jsxs("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px",display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx($1,{size:18,style:{color:"#F59E0B"}})," 2. Local Execution Responsibility"]}),d.jsx("p",{children:"Because Meridian-X performs direct local tool execution (such as executing shell commands, modifying local file structures, or running local scripts), you retain full responsibility for configuring sandbox parameters and reviewing automated agent actions before approval."})]}),d.jsxs("section",{children:[d.jsx("h2",{style:{color:"#FFFFFF",fontSize:"1.3rem",fontWeight:700,marginBottom:"12px"},children:"3. Limitation of Liability"}),d.jsx("p",{children:'Meridian-X is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. In no event shall the authors or open-source maintainers be liable for any claim, damages, or data loss arising from local agent execution or model inference outputs.'})]})]})]})]})}),ZC=({onNavigateHome:t,detectedOS:e})=>{const[n,i]=He.useState(!1),r="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",s=()=>{navigator.clipboard.writeText(r),i(!0),setTimeout(()=>i(!1),2e3)};return d.jsx("div",{style:{minHeight:"100vh",padding:"120px 24px 80px 24px",position:"relative",zIndex:10},children:d.jsxs("div",{className:"container",style:{maxWidth:"800px"},children:[d.jsxs("button",{onClick:t,style:{background:"transparent",border:"none",color:"#A1A1AA",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem",marginBottom:"24px",fontFamily:"var(--font-heading)"},children:[d.jsx(lu,{size:16})," Return Home"]}),d.jsxs("div",{className:"glass-card",style:{padding:"48px",background:"rgba(10, 10, 14, 0.9)",border:"1px solid rgba(16, 185, 129, 0.3)",boxShadow:"0 0 50px rgba(16, 185, 129, 0.1)"},children:[d.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[d.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",borderRadius:"50%",background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#10B981",marginBottom:"20px"},children:d.jsx(Fr,{size:36})}),d.jsx("span",{className:"glass-pill",style:{color:"#10B981",borderColor:"rgba(16, 185, 129, 0.3)",marginBottom:"12px"},children:"BINARY TRANSFER INITIATED"}),d.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"2.4rem",fontWeight:800,color:"#FFFFFF",marginBottom:"12px",letterSpacing:"-0.02em"},children:"Welcome to Meridian-X"}),d.jsxs("p",{style:{color:"#A1A1AA",fontSize:"1rem",maxWidth:"560px",margin:"0 auto"},children:["Your desktop download for ",d.jsx("strong",{style:{color:"#FFFFFF"},children:e})," has started. Follow the verification steps below to verify build integrity."]})]}),d.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.5)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",padding:"20px",marginBottom:"32px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[d.jsxs("span",{style:{fontSize:"0.8rem",color:"#10B981",fontFamily:"var(--font-code)",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(du,{size:14})," SHA256 Verification Checksum"]}),d.jsxs("button",{onClick:s,style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#A1A1AA",padding:"4px 10px",borderRadius:"6px",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[n?d.jsx(cu,{size:12,style:{color:"#10B981"}}):d.jsx(Qv,{size:12}),n?"Copied":"Copy Hash"]})]}),d.jsx("code",{style:{display:"block",fontFamily:"var(--font-code)",fontSize:"0.78rem",color:"#D4D4D8",wordBreak:"break-all",background:"rgba(0,0,0,0.4)",padding:"10px",borderRadius:"6px"},children:r})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"32px"},children:[d.jsx("h3",{style:{color:"#FFFFFF",fontSize:"1.1rem",fontWeight:700},children:"Quick Launch Sequence"}),d.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[d.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"rgba(0, 242, 254, 0.1)",border:"1px solid rgba(0, 242, 254, 0.3)",color:"#00F2FE",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"0.85rem",flexShrink:0},children:"1"}),d.jsxs("div",{children:[d.jsx("strong",{style:{color:"#FFFFFF",display:"block",fontSize:"0.95rem"},children:"Run Binary Setup"}),d.jsx("p",{style:{color:"#A1A1AA",fontSize:"0.85rem",margin:0},children:"Launch the installer and allow local system overlay permissions."})]})]}),d.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[d.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"rgba(139, 92, 246, 0.1)",border:"1px solid rgba(139, 92, 246, 0.3)",color:"#8B5CF6",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"0.85rem",flexShrink:0},children:"2"}),d.jsxs("div",{children:[d.jsx("strong",{style:{color:"#FFFFFF",display:"block",fontSize:"0.95rem"},children:"Trigger Hotkey Overlay"}),d.jsxs("p",{style:{color:"#A1A1AA",fontSize:"0.85rem",margin:0},children:["Press ",d.jsx("code",{style:{color:"#00F2FE",background:"rgba(0, 242, 254, 0.1)",padding:"2px 6px",borderRadius:"4px"},children:"Option + Space"})," (macOS) or ",d.jsx("code",{style:{color:"#00F2FE",background:"rgba(0, 242, 254, 0.1)",padding:"2px 6px",borderRadius:"4px"},children:"Alt + Space"})," (Windows) anywhere to invoke Meridian-X HUD."]})]})]})]}),d.jsx("div",{style:{textAlign:"center",borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"24px"},children:d.jsx("button",{onClick:t,className:"btn-primary",style:{padding:"12px 24px",fontSize:"0.9rem"},children:"Return to Command Center"})})]})]})})};class QC{constructor(){dm(this,"enabled",!1);this.checkConsent()}checkConsent(){const e=localStorage.getItem("meridian_cookie_consent");this.enabled=e==="accepted"}track(e,n){this.checkConsent();const i={name:e,properties:n,timestamp:Date.now()};if(typeof window<"u"&&window.DEV&&console.log("[Sovereign Analytics Event]:",i),!!this.enabled)try{window.dispatchEvent(new CustomEvent("meridian-analytics-event",{detail:i}))}catch{}}}const pa=new QC,JC=()=>{const[t,e]=He.useState(!1);He.useEffect(()=>{if(!localStorage.getItem("meridian_cookie_consent")){const s=setTimeout(()=>e(!0),1200);return()=>clearTimeout(s)}},[]);const n=()=>{localStorage.setItem("meridian_cookie_consent","accepted"),e(!1),pa.track("cookie_consent_accepted")},i=()=>{localStorage.setItem("meridian_cookie_consent","declined"),e(!1)};return t?d.jsxs("div",{style:{position:"fixed",bottom:"24px",left:"24px",right:"24px",maxWidth:"480px",margin:"0 auto",zIndex:999,background:"rgba(10, 10, 14, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(0, 242, 254, 0.3)",borderRadius:"16px",padding:"20px",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.15)",animation:"slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"14px",marginBottom:"16px"},children:[d.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(0, 242, 254, 0.1)",border:"1px solid rgba(0, 242, 254, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#00F2FE",flexShrink:0},children:d.jsx(du,{size:20})}),d.jsxs("div",{children:[d.jsx("h4",{style:{color:"#FFFFFF",fontSize:"0.95rem",fontWeight:700,margin:"0 0 4px 0"},children:"Zero-Telemetry Sovereignty"}),d.jsxs("p",{style:{color:"#A1A1AA",fontSize:"0.82rem",margin:0,lineHeight:1.5},children:["Meridian-X does not use third-party tracking cookies. We only save UI state locally in ",d.jsx("code",{style:{color:"#00F2FE"},children:"localStorage"}),"."]})]})]}),d.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[d.jsx("button",{onClick:i,style:{background:"transparent",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#A1A1AA",padding:"8px 16px",borderRadius:"8px",fontSize:"0.82rem",cursor:"pointer",fontWeight:500},children:"Strict Necessary Only"}),d.jsxs("button",{onClick:n,className:"btn-primary",style:{padding:"8px 18px",fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(cu,{size:14})," Accept & Enable"]})]})]}):null},eR=({onDownloadClick:t,detectedOS:e})=>{const[n,i]=He.useState(!1),[r,s]=He.useState(!1);return He.useEffect(()=>{const o=()=>{const a=window.innerWidth<768,l=window.scrollY>350;i(!!(a&&l&&!r))};return window.addEventListener("scroll",o),window.addEventListener("resize",o),o(),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",o)}},[r]),!n||r?null:d.jsxs("div",{className:"mobile-sticky-cta",style:{position:"fixed",bottom:0,left:0,right:0,zIndex:90,background:"rgba(5, 5, 8, 0.95)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderTop:"1px solid rgba(0, 242, 254, 0.3)",padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 -10px 30px rgba(0,0,0,0.8)"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx("img",{src:"/logo.png",alt:"Meridian-X Mobile Logo",style:{width:"32px",height:"32px",borderRadius:"50%",border:"1px solid rgba(255,255,255,0.2)"}}),d.jsxs("div",{children:[d.jsx("div",{style:{color:"#FFFFFF",fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-heading)"},children:"Meridian-X"}),d.jsxs("div",{style:{color:"#A1A1AA",fontSize:"0.72rem"},children:["Sovereign Agent for ",e]})]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsxs("button",{onClick:()=>{pa.track("sticky_mobile_cta_click",{os:e}),t()},className:"btn-primary",style:{padding:"8px 16px",fontSize:"0.8rem",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(ji,{size:14})," Download"]}),d.jsx("button",{onClick:()=>s(!0),style:{background:"transparent",border:"none",color:"#71717A",padding:"4px",cursor:"pointer"},"aria-label":"Dismiss sticky CTA",children:d.jsx(fu,{size:16})})]})]})},B0={"/":{title:"Meridian-X — Sovereign Desktop AI Workspace",description:"Local execution. Total privacy. Absolute autonomy. Run autonomous agentic ReAct loops locally on Windows, macOS, and Linux with sub-10ms overlay.",canonicalUrl:"https://meridian-x.ai/",ogType:"website"},"/privacy":{title:"Privacy Policy — Meridian-X Sovereign Local AI",description:"100% local compute. Zero telemetry tracking. Local AES key vault security model and zero cloud leakage guarantee.",canonicalUrl:"https://meridian-x.ai/privacy",ogType:"article"},"/terms":{title:"Terms of Service — Meridian-X Open-Source Sovereign AI",description:"Terms of Service and End-User License Agreement for Meridian-X sovereign desktop application and local tool execution framework.",canonicalUrl:"https://meridian-x.ai/terms",ogType:"article"},"/thank-you":{title:"Thank You for Downloading — Meridian-X Sovereign AI",description:"Installation instructions, SHA256 checksum verification, and initial desktop onboarding guide for Meridian-X.",canonicalUrl:"https://meridian-x.ai/thank-you",ogType:"website"},"/404":{title:"404 — Signal Disrupted | Meridian-X Sovereign AI",description:"The requested quantum coordinate or local endpoint was not found on this node.",canonicalUrl:"https://meridian-x.ai/404",ogType:"website"}},Bd=t=>{const e=B0[t]||B0["/404"];document.title=e.title;let n=document.querySelector('meta[name="description"]');n||(n=document.createElement("meta"),n.setAttribute("name","description"),document.head.appendChild(n)),n.setAttribute("content",e.description);const i=(s,o)=>{let a=document.querySelector(`meta[property="${s}"]`);a||(a=document.createElement("meta"),a.setAttribute("property",s),document.head.appendChild(a)),a.setAttribute("content",o)};i("og:title",e.title),i("og:description",e.description),i("og:url",e.canonicalUrl||"https://meridian-x.ai"+t),i("og:type",e.ogType||"website"),i("og:image","https://meridian-x.ai/og-image.png");const r=(s,o)=>{let a=document.querySelector(`meta[name="${s}"]`);a||(a=document.createElement("meta"),a.setAttribute("name",s),document.head.appendChild(a)),a.setAttribute("content",o)};r("twitter:card","summary_large_image"),r("twitter:title",e.title),r("twitter:description",e.description),r("twitter:image","https://meridian-x.ai/og-image.png")},tR=()=>{const[t,e]=He.useState("Windows"),[n,i]=He.useState(!1),[r,s]=He.useState(!1),[o,a]=He.useState(window.location.pathname);He.useEffect(()=>{const p=()=>{const E=window.location.pathname;a(E),Bd(E)};window.addEventListener("popstate",p),Bd(window.location.pathname);const u=navigator.userAgent;let m="Windows";u.includes("Macintosh")||u.includes("Mac OS X")?m="macOS":u.includes("Linux")?m="Linux":(u.includes("Android")||u.includes("iPhone")||u.includes("iPad"))&&(m="Desktop Required"),e(m);const v=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u)||window.innerWidth<768;return i(v),pa.track("page_view",{path:window.location.pathname}),()=>{window.removeEventListener("popstate",p)}},[]);const l=p=>{window.history.pushState({},"",p),a(p),Bd(p),pa.track("navigation",{path:p}),window.scrollTo({top:0,behavior:"smooth"})},c=()=>{pa.track("download_modal_opened",{os:t}),s(!0)},h=()=>{switch(o){case"/":return d.jsxs(d.Fragment,{children:[d.jsx(DC,{detectedOS:t,isMobile:n,onDownloadClick:c}),d.jsx(LC,{}),d.jsx(kC,{}),d.jsx(BC,{}),d.jsx(VC,{}),d.jsx(HC,{}),d.jsx(WC,{})]});case"/privacy":return d.jsx($C,{onNavigateHome:()=>l("/")});case"/terms":return d.jsx(KC,{onNavigateHome:()=>l("/")});case"/thank-you":return d.jsx(ZC,{onNavigateHome:()=>l("/"),detectedOS:t});default:return d.jsx(YC,{onNavigateHome:()=>l("/")})}};return d.jsxs("div",{style:{position:"relative",minHeight:"100vh",background:"var(--bg-obsidian)"},children:[d.jsx(X1,{}),d.jsx(vM,{onDownloadClick:c,detectedOS:t}),h(),d.jsx(XC,{onDownloadClick:c,detectedOS:t}),d.jsx(qC,{isOpen:r,onClose:()=>s(!1),detectedOS:t}),d.jsx(JC,{}),d.jsx(eR,{onDownloadClick:c,detectedOS:t})]})};zd.createRoot(document.getElementById("root")).render(d.jsx(Fy.StrictMode,{children:d.jsx(tR,{})}));
