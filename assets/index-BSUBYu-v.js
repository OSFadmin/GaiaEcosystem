(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function bu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ll={exports:{}},xo={},cl={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),ku=Symbol.for("react.portal"),ju=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),Cu=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),zu=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Tu=Symbol.for("react.memo"),Iu=Symbol.for("react.lazy"),Ka=Symbol.iterator;function Lu(e){return e===null||typeof e!="object"?null:(e=Ka&&e[Ka]||e["@@iterator"],typeof e=="function"?e:null)}var ul={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dl=Object.assign,ml={};function jn(e,t,n){this.props=e,this.context=t,this.refs=ml,this.updater=n||ul}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fl(){}fl.prototype=jn.prototype;function ta(e,t,n){this.props=e,this.context=t,this.refs=ml,this.updater=n||ul}var na=ta.prototype=new fl;na.constructor=ta;dl(na,jn.prototype);na.isPureReactComponent=!0;var Xa=Array.isArray,pl=Object.prototype.hasOwnProperty,ra={current:null},hl={key:!0,ref:!0,__self:!0,__source:!0};function gl(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)pl.call(t,r)&&!hl.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:dr,type:e,key:i,ref:s,props:o,_owner:ra.current}}function _u(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function Ru(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Za=/\/+/g;function Oo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ru(""+e.key):t.toString(36)}function Dr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case dr:case ku:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Oo(s,0):r,Xa(o)?(n="",e!=null&&(n=e.replace(Za,"$&/")+"/"),Dr(o,t,n,"",function(u){return u})):o!=null&&(oa(o)&&(o=_u(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Za,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Xa(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+Oo(i,l);s+=Dr(i,t,n,c,o)}else if(c=Lu(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+Oo(i,l++),s+=Dr(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function yr(e,t,n){if(e==null)return e;var r=[],o=0;return Dr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ou(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Mr={transition:null},Du={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ra};function vl(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=jn;O.Fragment=ju;O.Profiler=Nu;O.PureComponent=ta;O.StrictMode=Su;O.Suspense=Pu;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Du;O.act=vl;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dl({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ra.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)pl.call(t,c)&&!hl.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:dr,type:e.type,key:o,ref:i,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:Eu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cu,_context:e},e.Consumer=e};O.createElement=gl;O.createFactory=function(e){var t=gl.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:zu,render:e}};O.isValidElement=oa;O.lazy=function(e){return{$$typeof:Iu,_payload:{_status:-1,_result:e},_init:Ou}};O.memo=function(e,t){return{$$typeof:Tu,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};O.unstable_act=vl;O.useCallback=function(e,t){return ge.current.useCallback(e,t)};O.useContext=function(e){return ge.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};O.useEffect=function(e,t){return ge.current.useEffect(e,t)};O.useId=function(){return ge.current.useId()};O.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ge.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};O.useRef=function(e){return ge.current.useRef(e)};O.useState=function(e){return ge.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ge.current.useTransition()};O.version="18.3.1";cl.exports=O;var R=cl.exports;const Mu=bu(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au=R,Fu=Symbol.for("react.element"),Uu=Symbol.for("react.fragment"),Bu=Object.prototype.hasOwnProperty,Vu=Au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hu={key:!0,ref:!0,__self:!0,__source:!0};function yl(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Bu.call(t,r)&&!Hu.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Fu,type:e,key:i,ref:s,props:o,_owner:Vu.current}}xo.Fragment=Uu;xo.jsx=yl;xo.jsxs=yl;ll.exports=xo;var a=ll.exports,li={},xl={exports:{}},Pe={},wl={exports:{}},bl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,T){var L=j.length;j.push(T);e:for(;0<L;){var M=L-1>>>1,V=j[M];if(0<o(V,T))j[M]=T,j[L]=V,L=M;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var T=j[0],L=j.pop();if(L!==T){j[0]=L;e:for(var M=0,V=j.length,Tt=V>>>1;M<Tt;){var re=2*(M+1)-1,qt=j[re],Se=re+1,It=j[Se];if(0>o(qt,L))Se<V&&0>o(It,qt)?(j[M]=It,j[Se]=L,M=Se):(j[M]=qt,j[re]=L,M=re);else if(Se<V&&0>o(It,L))j[M]=It,j[Se]=L,M=Se;else break e}}return T}function o(j,T){var L=j.sortIndex-T.sortIndex;return L!==0?L:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],p=1,h=null,g=3,w=!1,x=!1,b=!1,F=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(j){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=j)r(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(u)}}function v(j){if(b=!1,f(j),!x)if(n(c)!==null)x=!0,Yt(k);else{var T=n(u);T!==null&&Qt(v,T.startTime-j)}}function k(j,T){x=!1,b&&(b=!1,m(z),z=-1),w=!0;var L=g;try{for(f(T),h=n(c);h!==null&&(!(h.expirationTime>T)||j&&!ye());){var M=h.callback;if(typeof M=="function"){h.callback=null,g=h.priorityLevel;var V=M(h.expirationTime<=T);T=e.unstable_now(),typeof V=="function"?h.callback=V:h===n(c)&&r(c),f(T)}else r(c);h=n(c)}if(h!==null)var Tt=!0;else{var re=n(u);re!==null&&Qt(v,re.startTime-T),Tt=!1}return Tt}finally{h=null,g=L,w=!1}}var C=!1,E=null,z=-1,$=5,_=-1;function ye(){return!(e.unstable_now()-_<$)}function Pt(){if(E!==null){var j=e.unstable_now();_=j;var T=!0;try{T=E(!0,j)}finally{T?Ie():(C=!1,E=null)}}else C=!1}var Ie;if(typeof d=="function")Ie=function(){d(Pt)};else if(typeof MessageChannel<"u"){var Cn=new MessageChannel,Gt=Cn.port2;Cn.port1.onmessage=Pt,Ie=function(){Gt.postMessage(null)}}else Ie=function(){F(Pt,0)};function Yt(j){E=j,C||(C=!0,Ie())}function Qt(j,T){z=F(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,Yt(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var L=g;g=T;try{return j()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=g;g=j;try{return T()}finally{g=L}},e.unstable_scheduleCallback=function(j,T,L){var M=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,j){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=L+V,j={id:p++,callback:T,priorityLevel:j,startTime:L,expirationTime:V,sortIndex:-1},L>M?(j.sortIndex=L,t(u,j),n(c)===null&&j===n(u)&&(b?(m(z),z=-1):b=!0,Qt(v,L-M))):(j.sortIndex=V,t(c,j),x||w||(x=!0,Yt(k))),j},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(j){var T=g;return function(){var L=g;g=T;try{return j.apply(this,arguments)}finally{g=L}}}})(bl);wl.exports=bl;var Wu=wl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u=R,ze=Wu;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kl=new Set,Qn={};function Wt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Qn[e]=t,e=0;e<t.length;e++)kl.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ci=Object.prototype.hasOwnProperty,Gu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ja={},es={};function Yu(e){return ci.call(es,e)?!0:ci.call(Ja,e)?!1:Gu.test(e)?es[e]=!0:(Ja[e]=!0,!1)}function Qu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qu(e,t,n,r){if(t===null||typeof t>"u"||Qu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ia,aa);ce[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ia,aa);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ia,aa);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qu(t,n,o,r)&&(n=null),r||o===null?Yu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=$u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),la=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),jl=Symbol.for("react.provider"),Sl=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),di=Symbol.for("react.suspense"),mi=Symbol.for("react.suspense_list"),ua=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Nl=Symbol.for("react.offscreen"),ts=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Do;function On(e){if(Do===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Do=t&&t[1]||""}return`
`+Do+e}var Mo=!1;function Ao(e,t){if(!e||Mo)return"";Mo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Mo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function Ku(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function fi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Xt:return"Portal";case ui:return"Profiler";case la:return"StrictMode";case di:return"Suspense";case mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sl:return(e.displayName||"Context")+".Consumer";case jl:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ua:return t=e.displayName||null,t!==null?t:fi(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return fi(e(t))}catch{}}return null}function Xu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fi(t);case 8:return t===la?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zu(e){var t=Cl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=Zu(e))}function El(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pi(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ns(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zl(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function hi(e,t){zl(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&gi(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gi(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function os(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Dn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Pl(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function is(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,Il=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ju=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Ju.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Ll(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function _l(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ll(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ed=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(e,t){if(t){if(ed[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function wi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,dn=null,mn=null;function as(e){if(e=pr(e)){if(typeof ki!="function")throw Error(y(280));var t=e.stateNode;t&&(t=So(t),ki(e.stateNode,e.type,t))}}function Rl(e){dn?mn?mn.push(e):mn=[e]:dn=e}function Ol(){if(dn){var e=dn,t=mn;if(mn=dn=null,as(e),t)for(e=0;e<t.length;e++)as(t[e])}}function Dl(e,t){return e(t)}function Ml(){}var Fo=!1;function Al(e,t,n){if(Fo)return e(t,n);Fo=!0;try{return Dl(e,t,n)}finally{Fo=!1,(dn!==null||mn!==null)&&(Ml(),Ol())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=So(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ji=!1;if(ot)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){ji=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{ji=!1}function td(e,t,n,r,o,i,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Un=!1,qr=null,Kr=!1,Si=null,nd={onError:function(e){Un=!0,qr=e}};function rd(e,t,n,r,o,i,s,l,c){Un=!1,qr=null,td.apply(nd,arguments)}function od(e,t,n,r,o,i,s,l,c){if(rd.apply(this,arguments),Un){if(Un){var u=qr;Un=!1,qr=null}else throw Error(y(198));Kr||(Kr=!0,Si=u)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ss(e){if($t(e)!==e)throw Error(y(188))}function id(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ss(o),e;if(i===r)return ss(o),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ul(e){return e=id(e),e!==null?Bl(e):null}function Bl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bl(e);if(t!==null)return t;e=e.sibling}return null}var Vl=ze.unstable_scheduleCallback,ls=ze.unstable_cancelCallback,ad=ze.unstable_shouldYield,sd=ze.unstable_requestPaint,J=ze.unstable_now,ld=ze.unstable_getCurrentPriorityLevel,ma=ze.unstable_ImmediatePriority,Hl=ze.unstable_UserBlockingPriority,Xr=ze.unstable_NormalPriority,cd=ze.unstable_LowPriority,Wl=ze.unstable_IdlePriority,wo=null,Ke=null;function ud(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:fd,dd=Math.log,md=Math.LN2;function fd(e){return e>>>=0,e===0?32:31-(dd(e)/md|0)|0}var kr=64,jr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Mn(l):(i&=s,i!==0&&(r=Mn(i)))}else s=n&~o,s!==0?r=Mn(s):i!==0&&(r=Mn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),o=1<<n,r|=e[n],t&=~o;return r}function pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-We(i),l=1<<s,c=o[s];c===-1?(!(l&n)||l&r)&&(o[s]=pd(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $l(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function gd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-We(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function fa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var A=0;function Gl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yl,pa,Ql,ql,Kl,Ci=!1,Sr=[],gt=null,vt=null,yt=null,Xn=new Map,Zn=new Map,mt=[],vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cs(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function Pn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&pa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yd(e,t,n,r,o){switch(t){case"focusin":return gt=Pn(gt,e,t,n,r,o),!0;case"dragenter":return vt=Pn(vt,e,t,n,r,o),!0;case"mouseover":return yt=Pn(yt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Xn.set(i,Pn(Xn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Zn.set(i,Pn(Zn.get(i)||null,e,t,n,r,o)),!0}return!1}function Xl(e){var t=Rt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Fl(n),t!==null){e.blockedOn=t,Kl(e.priority,function(){Ql(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bi=r,n.target.dispatchEvent(r),bi=null}else return t=pr(n),t!==null&&pa(t),e.blockedOn=n,!1;t.shift()}return!0}function us(e,t,n){Ar(e)&&n.delete(t)}function xd(){Ci=!1,gt!==null&&Ar(gt)&&(gt=null),vt!==null&&Ar(vt)&&(vt=null),yt!==null&&Ar(yt)&&(yt=null),Xn.forEach(us),Zn.forEach(us)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ci||(Ci=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,xd)))}function Jn(e){function t(o){return Tn(o,e)}if(0<Sr.length){Tn(Sr[0],e);for(var n=1;n<Sr.length;n++){var r=Sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&Tn(gt,e),vt!==null&&Tn(vt,e),yt!==null&&Tn(yt,e),Xn.forEach(t),Zn.forEach(t),n=0;n<mt.length;n++)r=mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(n=mt[0],n.blockedOn===null);)Xl(n),n.blockedOn===null&&mt.shift()}var fn=lt.ReactCurrentBatchConfig,Jr=!0;function wd(e,t,n,r){var o=A,i=fn.transition;fn.transition=null;try{A=1,ha(e,t,n,r)}finally{A=o,fn.transition=i}}function bd(e,t,n,r){var o=A,i=fn.transition;fn.transition=null;try{A=4,ha(e,t,n,r)}finally{A=o,fn.transition=i}}function ha(e,t,n,r){if(Jr){var o=Ei(e,t,n,r);if(o===null)Ko(e,t,r,eo,n),cs(e,r);else if(yd(o,e,t,n,r))r.stopPropagation();else if(cs(e,r),t&4&&-1<vd.indexOf(e)){for(;o!==null;){var i=pr(o);if(i!==null&&Yl(i),i=Ei(e,t,n,r),i===null&&Ko(e,t,r,eo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ko(e,t,r,null,n)}}var eo=null;function Ei(e,t,n,r){if(eo=null,e=da(r),e=Rt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function Zl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ld()){case ma:return 1;case Hl:return 4;case Xr:case cd:return 16;case Wl:return 536870912;default:return 16}default:return 16}}var pt=null,ga=null,Fr=null;function Jl(){if(Fr)return Fr;var e,t=ga,n=t.length,r,o="value"in pt?pt.value:pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Fr=o.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function ds(){return!1}function Te(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nr:ds,this.isPropagationStopped=ds,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Te(Sn),fr=X({},Sn,{view:0,detail:0}),kd=Te(fr),Bo,Vo,In,bo=X({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(Bo=e.screenX-In.screenX,Vo=e.screenY-In.screenY):Vo=Bo=0,In=e),Bo)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),ms=Te(bo),jd=X({},bo,{dataTransfer:0}),Sd=Te(jd),Nd=X({},fr,{relatedTarget:0}),Ho=Te(Nd),Cd=X({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ed=Te(Cd),zd=X({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=Te(zd),Td=X({},Sn,{data:0}),fs=Te(Td),Id={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_d[e])?!!t[e]:!1}function ya(){return Rd}var Od=X({},fr,{key:function(e){if(e.key){var t=Id[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dd=Te(Od),Md=X({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=Te(Md),Ad=X({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),Fd=Te(Ad),Ud=X({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bd=Te(Ud),Vd=X({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hd=Te(Vd),Wd=[9,13,27,32],xa=ot&&"CompositionEvent"in window,Bn=null;ot&&"documentMode"in document&&(Bn=document.documentMode);var $d=ot&&"TextEvent"in window&&!Bn,ec=ot&&(!xa||Bn&&8<Bn&&11>=Bn),hs=" ",gs=!1;function tc(e,t){switch(e){case"keyup":return Wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function Gd(e,t){switch(e){case"compositionend":return nc(t);case"keypress":return t.which!==32?null:(gs=!0,hs);case"textInput":return e=t.data,e===hs&&gs?null:e;default:return null}}function Yd(e,t){if(Jt)return e==="compositionend"||!xa&&tc(e,t)?(e=Jl(),Fr=ga=pt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ec&&t.locale!=="ko"?null:t.data;default:return null}}var Qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qd[e.type]:t==="textarea"}function rc(e,t,n,r){Rl(r),t=to(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,er=null;function qd(e){pc(e,0)}function ko(e){var t=nn(e);if(El(t))return e}function Kd(e,t){if(e==="change")return t}var oc=!1;if(ot){var Wo;if(ot){var $o="oninput"in document;if(!$o){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),$o=typeof ys.oninput=="function"}Wo=$o}else Wo=!1;oc=Wo&&(!document.documentMode||9<document.documentMode)}function xs(){Vn&&(Vn.detachEvent("onpropertychange",ic),er=Vn=null)}function ic(e){if(e.propertyName==="value"&&ko(er)){var t=[];rc(t,er,e,da(e)),Al(qd,t)}}function Xd(e,t,n){e==="focusin"?(xs(),Vn=t,er=n,Vn.attachEvent("onpropertychange",ic)):e==="focusout"&&xs()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(er)}function Jd(e,t){if(e==="click")return ko(t)}function em(e,t){if(e==="input"||e==="change")return ko(t)}function tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:tm;function tr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ci.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bs(e,t){var n=ws(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ws(n)}}function ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sc(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nm(e){var t=sc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ac(n.ownerDocument.documentElement,n)){if(r!==null&&wa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=bs(n,i);var s=bs(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=ot&&"documentMode"in document&&11>=document.documentMode,en=null,zi=null,Hn=null,Pi=!1;function ks(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pi||en==null||en!==Qr(r)||(r=en,"selectionStart"in r&&wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&tr(Hn,r)||(Hn=r,r=to(zi,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},Go={},lc={};ot&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function jo(e){if(Go[e])return Go[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lc)return Go[e]=t[n];return e}var cc=jo("animationend"),uc=jo("animationiteration"),dc=jo("animationstart"),mc=jo("transitionend"),fc=new Map,js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){fc.set(e,t),Wt(t,[e])}for(var Yo=0;Yo<js.length;Yo++){var Qo=js[Yo],om=Qo.toLowerCase(),im=Qo[0].toUpperCase()+Qo.slice(1);Ct(om,"on"+im)}Ct(cc,"onAnimationEnd");Ct(uc,"onAnimationIteration");Ct(dc,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(mc,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),am=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function Ss(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,od(r,t,void 0,e),e.currentTarget=null}function pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;Ss(o,l,u),i=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;Ss(o,l,u),i=c}}}if(Kr)throw e=Si,Kr=!1,Si=null,e}function G(e,t){var n=t[Ri];n===void 0&&(n=t[Ri]=new Set);var r=e+"__bubble";n.has(r)||(hc(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),hc(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Er]){e[Er]=!0,kl.forEach(function(n){n!=="selectionchange"&&(am.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,qo("selectionchange",!1,t))}}function hc(e,t,n,r){switch(Zl(t)){case 1:var o=wd;break;case 4:o=bd;break;default:o=ha}n=o.bind(null,t,n,e),o=void 0,!ji||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ko(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Rt(l),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Al(function(){var u=i,p=da(n),h=[];e:{var g=fc.get(e);if(g!==void 0){var w=va,x=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":w=Dd;break;case"focusin":x="focus",w=Ho;break;case"focusout":x="blur",w=Ho;break;case"beforeblur":case"afterblur":w=Ho;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Fd;break;case cc:case uc:case dc:w=Ed;break;case mc:w=Bd;break;case"scroll":w=kd;break;case"wheel":w=Hd;break;case"copy":case"cut":case"paste":w=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ps}var b=(t&4)!==0,F=!b&&e==="scroll",m=b?g!==null?g+"Capture":null:g;b=[];for(var d=u,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,m!==null&&(v=Kn(d,m),v!=null&&b.push(rr(d,v,f)))),F)break;d=d.return}0<b.length&&(g=new w(g,x,null,n,p),h.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==bi&&(x=n.relatedTarget||n.fromElement)&&(Rt(x)||x[it]))break e;if((w||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?Rt(x):null,x!==null&&(F=$t(x),x!==F||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(b=ms,v="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=ps,v="onPointerLeave",m="onPointerEnter",d="pointer"),F=w==null?g:nn(w),f=x==null?g:nn(x),g=new b(v,d+"leave",w,n,p),g.target=F,g.relatedTarget=f,v=null,Rt(p)===u&&(b=new b(m,d+"enter",x,n,p),b.target=f,b.relatedTarget=F,v=b),F=v,w&&x)t:{for(b=w,m=x,d=0,f=b;f;f=Kt(f))d++;for(f=0,v=m;v;v=Kt(v))f++;for(;0<d-f;)b=Kt(b),d--;for(;0<f-d;)m=Kt(m),f--;for(;d--;){if(b===m||m!==null&&b===m.alternate)break t;b=Kt(b),m=Kt(m)}b=null}else b=null;w!==null&&Ns(h,g,w,b,!1),x!==null&&F!==null&&Ns(h,F,x,b,!0)}}e:{if(g=u?nn(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var k=Kd;else if(vs(g))if(oc)k=em;else{k=Zd;var C=Xd}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Jd);if(k&&(k=k(e,u))){rc(h,k,n,p);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&gi(g,"number",g.value)}switch(C=u?nn(u):window,e){case"focusin":(vs(C)||C.contentEditable==="true")&&(en=C,zi=u,Hn=null);break;case"focusout":Hn=zi=en=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,ks(h,n,p);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":ks(h,n,p)}var E;if(xa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Jt?tc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(ec&&n.locale!=="ko"&&(Jt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Jt&&(E=Jl()):(pt=p,ga="value"in pt?pt.value:pt.textContent,Jt=!0)),C=to(u,z),0<C.length&&(z=new fs(z,e,null,n,p),h.push({event:z,listeners:C}),E?z.data=E:(E=nc(n),E!==null&&(z.data=E)))),(E=$d?Gd(e,n):Yd(e,n))&&(u=to(u,"onBeforeInput"),0<u.length&&(p=new fs("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=E))}pc(h,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Kn(e,n),i!=null&&r.unshift(rr(e,i,o)),i=Kn(e,t),i!=null&&r.push(rr(e,i,o))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ns(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=Kn(n,i),c!=null&&s.unshift(rr(n,c,l))):o||(c=Kn(n,i),c!=null&&s.push(rr(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var sm=/\r\n?/g,lm=/\u0000|\uFFFD/g;function Cs(e){return(typeof e=="string"?e:""+e).replace(sm,`
`).replace(lm,"")}function zr(e,t,n){if(t=Cs(t),Cs(e)!==t&&n)throw Error(y(425))}function no(){}var Ti=null,Ii=null;function Li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,Es=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof Es<"u"?function(e){return Es.resolve(null).then(e).catch(dm)}:_i;function dm(e){setTimeout(function(){throw e})}function Xo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Jn(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Nn,or="__reactProps$"+Nn,it="__reactContainer$"+Nn,Ri="__reactEvents$"+Nn,mm="__reactListeners$"+Nn,fm="__reactHandles$"+Nn;function Rt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[it]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zs(e);e!==null;){if(n=e[qe])return n;e=zs(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[qe]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function So(e){return e[or]||null}var Oi=[],rn=-1;function Et(e){return{current:e}}function Y(e){0>rn||(e.current=Oi[rn],Oi[rn]=null,rn--)}function W(e,t){rn++,Oi[rn]=e.current,e.current=t}var Nt={},fe=Et(Nt),be=Et(!1),Ft=Nt;function vn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function ro(){Y(be),Y(fe)}function Ps(e,t,n){if(fe.current!==Nt)throw Error(y(168));W(fe,t),W(be,n)}function gc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(y(108,Xu(e)||"Unknown",o));return X({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Ft=fe.current,W(fe,e),W(be,be.current),!0}function Ts(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=gc(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,Y(be),Y(fe),W(fe,e)):Y(be),W(be,n)}var Je=null,No=!1,Zo=!1;function vc(e){Je===null?Je=[e]:Je.push(e)}function pm(e){No=!0,vc(e)}function zt(){if(!Zo&&Je!==null){Zo=!0;var e=0,t=A;try{var n=Je;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,No=!1}catch(o){throw Je!==null&&(Je=Je.slice(e+1)),Vl(ma,zt),o}finally{A=t,Zo=!1}}return null}var on=[],an=0,io=null,ao=0,_e=[],Re=0,Ut=null,et=1,tt="";function Lt(e,t){on[an++]=ao,on[an++]=io,io=e,ao=t}function yc(e,t,n){_e[Re++]=et,_e[Re++]=tt,_e[Re++]=Ut,Ut=e;var r=et;e=tt;var o=32-We(r)-1;r&=~(1<<o),n+=1;var i=32-We(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,et=1<<32-We(t)+o|n<<o|r,tt=i+e}else et=1<<i|n<<o|r,tt=e}function ba(e){e.return!==null&&(Lt(e,1),yc(e,1,0))}function ka(e){for(;e===io;)io=on[--an],on[an]=null,ao=on[--an],on[an]=null;for(;e===Ut;)Ut=_e[--Re],_e[Re]=null,tt=_e[--Re],_e[Re]=null,et=_e[--Re],_e[Re]=null}var Ee=null,Ce=null,Q=!1,He=null;function xc(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Is(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Ce=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Ce=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(Q){var t=Ce;if(t){var n=t;if(!Is(e,t)){if(Di(e))throw Error(y(418));t=xt(n.nextSibling);var r=Ee;t&&Is(e,t)?xc(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ee=e)}}else{if(Di(e))throw Error(y(418));e.flags=e.flags&-4097|2,Q=!1,Ee=e}}}function Ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Pr(e){if(e!==Ee)return!1;if(!Q)return Ls(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Li(e.type,e.memoizedProps)),t&&(t=Ce)){if(Di(e))throw wc(),Error(y(418));for(;t;)xc(e,t),t=xt(t.nextSibling)}if(Ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ee?xt(e.stateNode.nextSibling):null;return!0}function wc(){for(var e=Ce;e;)e=xt(e.nextSibling)}function yn(){Ce=Ee=null,Q=!1}function ja(e){He===null?He=[e]:He.push(e)}var hm=lt.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _s(e){var t=e._init;return t(e._payload)}function bc(e){function t(m,d){if(e){var f=m.deletions;f===null?(m.deletions=[d],m.flags|=16):f.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=jt(m,d),m.index=0,m.sibling=null,m}function i(m,d,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<d?(m.flags|=2,d):f):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,f,v){return d===null||d.tag!==6?(d=ii(f,m.mode,v),d.return=m,d):(d=o(d,f),d.return=m,d)}function c(m,d,f,v){var k=f.type;return k===Zt?p(m,d,f.props.children,v,f.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ut&&_s(k)===d.type)?(v=o(d,f.props),v.ref=Ln(m,d,f),v.return=m,v):(v=Yr(f.type,f.key,f.props,null,m.mode,v),v.ref=Ln(m,d,f),v.return=m,v)}function u(m,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=ai(f,m.mode,v),d.return=m,d):(d=o(d,f.children||[]),d.return=m,d)}function p(m,d,f,v,k){return d===null||d.tag!==7?(d=At(f,m.mode,v,k),d.return=m,d):(d=o(d,f),d.return=m,d)}function h(m,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ii(""+d,m.mode,f),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xr:return f=Yr(d.type,d.key,d.props,null,m.mode,f),f.ref=Ln(m,null,d),f.return=m,f;case Xt:return d=ai(d,m.mode,f),d.return=m,d;case ut:var v=d._init;return h(m,v(d._payload),f)}if(Dn(d)||En(d))return d=At(d,m.mode,f,null),d.return=m,d;Tr(m,d)}return null}function g(m,d,f,v){var k=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:l(m,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:return f.key===k?c(m,d,f,v):null;case Xt:return f.key===k?u(m,d,f,v):null;case ut:return k=f._init,g(m,d,k(f._payload),v)}if(Dn(f)||En(f))return k!==null?null:p(m,d,f,v,null);Tr(m,f)}return null}function w(m,d,f,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(f)||null,l(d,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xr:return m=m.get(v.key===null?f:v.key)||null,c(d,m,v,k);case Xt:return m=m.get(v.key===null?f:v.key)||null,u(d,m,v,k);case ut:var C=v._init;return w(m,d,f,C(v._payload),k)}if(Dn(v)||En(v))return m=m.get(f)||null,p(d,m,v,k,null);Tr(d,v)}return null}function x(m,d,f,v){for(var k=null,C=null,E=d,z=d=0,$=null;E!==null&&z<f.length;z++){E.index>z?($=E,E=null):$=E.sibling;var _=g(m,E,f[z],v);if(_===null){E===null&&(E=$);break}e&&E&&_.alternate===null&&t(m,E),d=i(_,d,z),C===null?k=_:C.sibling=_,C=_,E=$}if(z===f.length)return n(m,E),Q&&Lt(m,z),k;if(E===null){for(;z<f.length;z++)E=h(m,f[z],v),E!==null&&(d=i(E,d,z),C===null?k=E:C.sibling=E,C=E);return Q&&Lt(m,z),k}for(E=r(m,E);z<f.length;z++)$=w(E,m,z,f[z],v),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?z:$.key),d=i($,d,z),C===null?k=$:C.sibling=$,C=$);return e&&E.forEach(function(ye){return t(m,ye)}),Q&&Lt(m,z),k}function b(m,d,f,v){var k=En(f);if(typeof k!="function")throw Error(y(150));if(f=k.call(f),f==null)throw Error(y(151));for(var C=k=null,E=d,z=d=0,$=null,_=f.next();E!==null&&!_.done;z++,_=f.next()){E.index>z?($=E,E=null):$=E.sibling;var ye=g(m,E,_.value,v);if(ye===null){E===null&&(E=$);break}e&&E&&ye.alternate===null&&t(m,E),d=i(ye,d,z),C===null?k=ye:C.sibling=ye,C=ye,E=$}if(_.done)return n(m,E),Q&&Lt(m,z),k;if(E===null){for(;!_.done;z++,_=f.next())_=h(m,_.value,v),_!==null&&(d=i(_,d,z),C===null?k=_:C.sibling=_,C=_);return Q&&Lt(m,z),k}for(E=r(m,E);!_.done;z++,_=f.next())_=w(E,m,z,_.value,v),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?z:_.key),d=i(_,d,z),C===null?k=_:C.sibling=_,C=_);return e&&E.forEach(function(Pt){return t(m,Pt)}),Q&&Lt(m,z),k}function F(m,d,f,v){if(typeof f=="object"&&f!==null&&f.type===Zt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:e:{for(var k=f.key,C=d;C!==null;){if(C.key===k){if(k=f.type,k===Zt){if(C.tag===7){n(m,C.sibling),d=o(C,f.props.children),d.return=m,m=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ut&&_s(k)===C.type){n(m,C.sibling),d=o(C,f.props),d.ref=Ln(m,C,f),d.return=m,m=d;break e}n(m,C);break}else t(m,C);C=C.sibling}f.type===Zt?(d=At(f.props.children,m.mode,v,f.key),d.return=m,m=d):(v=Yr(f.type,f.key,f.props,null,m.mode,v),v.ref=Ln(m,d,f),v.return=m,m=v)}return s(m);case Xt:e:{for(C=f.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(m,d.sibling),d=o(d,f.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=ai(f,m.mode,v),d.return=m,m=d}return s(m);case ut:return C=f._init,F(m,d,C(f._payload),v)}if(Dn(f))return x(m,d,f,v);if(En(f))return b(m,d,f,v);Tr(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,f),d.return=m,m=d):(n(m,d),d=ii(f,m.mode,v),d.return=m,m=d),s(m)):n(m,d)}return F}var xn=bc(!0),kc=bc(!1),so=Et(null),lo=null,sn=null,Sa=null;function Na(){Sa=sn=lo=null}function Ca(e){var t=so.current;Y(so),e._currentValue=t}function Ai(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){lo=e,Sa=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(lo===null)throw Error(y(308));sn=e,lo.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var Ot=null;function Ea(e){Ot===null?Ot=[e]:Ot.push(e)}function jc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ea(t)):(n.next=o.next,o.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,at(e,n)}return o=r.interleaved,o===null?(t.next=t,Ea(r)):(t.next=o.next,o.next=t),r.interleaved=t,at(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fa(e,n)}}function Rs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var o=e.updateQueue;dt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;s=0,p=u=c=null,l=i;do{var g=l.lane,w=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,b=l;switch(g=t,w=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){h=x.call(w,h,g);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,g=typeof x=="function"?x.call(w,h,g):x,g==null)break e;h=X({},h,g);break e;case 2:dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=w,c=h):p=p.next=w,s|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(c=h),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Vt|=s,e.lanes=s,e.memoizedState=h}}function Os(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(y(191,o));o.call(r)}}}var hr={},Xe=Et(hr),ir=Et(hr),ar=Et(hr);function Dt(e){if(e===hr)throw Error(y(174));return e}function Pa(e,t){switch(W(ar,t),W(ir,e),W(Xe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yi(t,e)}Y(Xe),W(Xe,t)}function wn(){Y(Xe),Y(ir),Y(ar)}function Nc(e){Dt(ar.current);var t=Dt(Xe.current),n=yi(t,e.type);t!==n&&(W(ir,e),W(Xe,n))}function Ta(e){ir.current===e&&(Y(Xe),Y(ir))}var q=Et(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jo=[];function Ia(){for(var e=0;e<Jo.length;e++)Jo[e]._workInProgressVersionPrimary=null;Jo.length=0}var Vr=lt.ReactCurrentDispatcher,ei=lt.ReactCurrentBatchConfig,Bt=0,K=null,te=null,oe=null,mo=!1,Wn=!1,sr=0,gm=0;function ue(){throw Error(y(321))}function La(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function _a(e,t,n,r,o,i){if(Bt=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?wm:bm,e=n(r,o),Wn){i=0;do{if(Wn=!1,sr=0,25<=i)throw Error(y(301));i+=1,oe=te=null,t.updateQueue=null,Vr.current=km,e=n(r,o)}while(Wn)}if(Vr.current=fo,t=te!==null&&te.next!==null,Bt=0,oe=te=K=null,mo=!1,t)throw Error(y(300));return e}function Ra(){var e=sr!==0;return sr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?K.memoizedState=oe=e:oe=oe.next=e,oe}function Fe(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?K.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(y(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?K.memoizedState=oe=e:oe=oe.next=e}return oe}function lr(e,t){return typeof t=="function"?t(e):t}function ti(e){var t=Fe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,c=null,u=i;do{var p=u.lane;if((Bt&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,K.lanes|=p,Vt|=p}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=l,Ge(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,Vt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ni(e){var t=Fe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Ge(i,t.memoizedState)||(we=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Cc(){}function Ec(e,t){var n=K,r=Fe(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,we=!0),r=r.queue,Oa(Tc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,cr(9,Pc.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(y(349));Bt&30||zc(n,t,o)}return o}function zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pc(e,t,n,r){t.value=n,t.getSnapshot=r,Ic(t)&&Lc(e)}function Tc(e,t,n){return n(function(){Ic(t)&&Lc(e)})}function Ic(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Lc(e){var t=at(e,1);t!==null&&$e(t,e,1,-1)}function Ds(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=xm.bind(null,K,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _c(){return Fe().memoizedState}function Hr(e,t,n,r){var o=Qe();K.flags|=e,o.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var o=Fe();r=r===void 0?null:r;var i=void 0;if(te!==null){var s=te.memoizedState;if(i=s.destroy,r!==null&&La(r,s.deps)){o.memoizedState=cr(t,n,i,r);return}}K.flags|=e,o.memoizedState=cr(1|t,n,i,r)}function Ms(e,t){return Hr(8390656,8,e,t)}function Oa(e,t){return Co(2048,8,e,t)}function Rc(e,t){return Co(4,2,e,t)}function Oc(e,t){return Co(4,4,e,t)}function Dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,Dc.bind(null,t,e),n)}function Da(){}function Ac(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uc(e,t,n){return Bt&21?(Ge(n,t)||(n=$l(),K.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function vm(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=ei.transition;ei.transition={};try{e(!1),t()}finally{A=n,ei.transition=r}}function Bc(){return Fe().memoizedState}function ym(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vc(e))Hc(t,n);else if(n=jc(e,t,n,r),n!==null){var o=he();$e(n,e,r,o),Wc(n,t,r)}}function xm(e,t,n){var r=kt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))Hc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Ge(l,s)){var c=t.interleaved;c===null?(o.next=o,Ea(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=jc(e,t,o,r),n!==null&&(o=he(),$e(n,e,r,o),Wc(n,t,r))}}function Vc(e){var t=e.alternate;return e===K||t!==null&&t===K}function Hc(e,t){Wn=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fa(e,n)}}var fo={readContext:Ae,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},wm={readContext:Ae,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ms,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,Dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ym.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Ds,useDebugValue:Da,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Ds(!1),t=e[0];return e=vm.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=Qe();if(Q){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ie===null)throw Error(y(349));Bt&30||zc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ms(Tc.bind(null,r,i,e),[e]),r.flags|=2048,cr(9,Pc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qe(),t=ie.identifierPrefix;if(Q){var n=tt,r=et;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bm={readContext:Ae,useCallback:Ac,useContext:Ae,useEffect:Oa,useImperativeHandle:Mc,useInsertionEffect:Rc,useLayoutEffect:Oc,useMemo:Fc,useReducer:ti,useRef:_c,useState:function(){return ti(lr)},useDebugValue:Da,useDeferredValue:function(e){var t=Fe();return Uc(t,te.memoizedState,e)},useTransition:function(){var e=ti(lr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Cc,useSyncExternalStore:Ec,useId:Bc,unstable_isNewReconciler:!1},km={readContext:Ae,useCallback:Ac,useContext:Ae,useEffect:Oa,useImperativeHandle:Mc,useInsertionEffect:Rc,useLayoutEffect:Oc,useMemo:Fc,useReducer:ni,useRef:_c,useState:function(){return ni(lr)},useDebugValue:Da,useDeferredValue:function(e){var t=Fe();return te===null?t.memoizedState=e:Uc(t,te.memoizedState,e)},useTransition:function(){var e=ni(lr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Cc,useSyncExternalStore:Ec,useId:Bc,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),o=kt(e),i=nt(r,o);i.payload=t,n!=null&&(i.callback=n),t=wt(e,i,o),t!==null&&($e(t,e,o,r),Br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),o=kt(e),i=nt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=wt(e,i,o),t!==null&&($e(t,e,o,r),Br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=kt(e),o=nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=wt(e,o,r),t!==null&&($e(t,e,r,n),Br(t,e,r))}};function As(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(o,i):!0}function $c(e,t,n){var r=!1,o=Nt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=ke(t)?Ft:fe.current,r=t.contextTypes,i=(r=r!=null)?vn(e,o):Nt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Ui(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},za(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=ke(t)?Ft:fe.current,o.context=vn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Eo.enqueueReplaceState(o,o.state,null),co(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function bn(e,t){try{var n="",r=t;do n+=Ku(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jm=typeof WeakMap=="function"?WeakMap:Map;function Gc(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ho||(ho=!0,Xi=r),Bi(e,t)},n}function Yc(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bi(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Us(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Mm.bind(null,e,t,n),t.then(e,e))}function Bs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var Sm=lt.ReactCurrentOwner,we=!1;function pe(e,t,n,r){t.child=e===null?kc(t,null,n,r):xn(t,e.child,n,r)}function Hs(e,t,n,r,o){n=n.render;var i=t.ref;return pn(t,o),r=_a(e,t,n,r,i,o),n=Ra(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):(Q&&n&&ba(t),t.flags|=1,pe(e,t,r,o),t.child)}function Ws(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Wa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qc(e,t,i,r,o)):(e=Yr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(s,r)&&e.ref===t.ref)return st(e,t,o)}return t.flags|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(tr(i,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,st(e,t,o)}return Vi(e,t,n,r,o)}function qc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(cn,Ne),Ne|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(cn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(cn,Ne),Ne|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(cn,Ne),Ne|=r;return pe(e,t,o,n),t.child}function Kc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vi(e,t,n,r,o){var i=ke(n)?Ft:fe.current;return i=vn(t,i),pn(t,o),n=_a(e,t,n,r,i,o),r=Ra(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,st(e,t,o)):(Q&&r&&ba(t),t.flags|=1,pe(e,t,n,o),t.child)}function $s(e,t,n,r,o){if(ke(n)){var i=!0;oo(t)}else i=!1;if(pn(t,o),t.stateNode===null)Wr(e,t),$c(t,n,r),Ui(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ke(n)?Ft:fe.current,u=vn(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Fs(t,s,r,u),dt=!1;var g=t.memoizedState;s.state=g,co(t,r,s,o),c=t.memoizedState,l!==r||g!==c||be.current||dt?(typeof p=="function"&&(Fi(t,n,p,r),c=t.memoizedState),(l=dt||As(t,n,l,r,g,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Sc(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Be(t.type,l),s.props=u,h=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ae(c):(c=ke(n)?Ft:fe.current,c=vn(t,c));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||g!==c)&&Fs(t,s,r,c),dt=!1,g=t.memoizedState,s.state=g,co(t,r,s,o);var x=t.memoizedState;l!==h||g!==x||be.current||dt?(typeof w=="function"&&(Fi(t,n,w,r),x=t.memoizedState),(u=dt||As(t,n,u,r,g,x,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Hi(e,t,n,r,i,o)}function Hi(e,t,n,r,o,i){Kc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Ts(t,n,!1),st(e,t,i);r=t.stateNode,Sm.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=xn(t,e.child,null,i),t.child=xn(t,null,l,i)):pe(e,t,l,i),t.memoizedState=r.state,o&&Ts(t,n,!0),t.child}function Xc(e){var t=e.stateNode;t.pendingContext?Ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ps(e,t.context,!1),Pa(e,t.containerInfo)}function Gs(e,t,n,r,o){return yn(),ja(o),t.flags|=256,pe(e,t,n,r),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zc(e,t,n){var r=t.pendingProps,o=q.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(q,o&1),e===null)return Mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=To(s,r,0,null),e=At(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$i(n),t.memoizedState=Wi,e):Ma(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Nm(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=jt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=jt(l,i):(i=At(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?$i(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Wi,r}return i=e.child,e=i.sibling,r=jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ma(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,n,r){return r!==null&&ja(r),xn(t,e.child,null,n),e=Ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nm(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=ri(Error(y(422))),Ir(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=To({mode:"visible",children:r.children},o,0,null),i=At(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&xn(t,e.child,null,s),t.child.memoizedState=$i(s),t.memoizedState=Wi,i);if(!(t.mode&1))return Ir(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(y(419)),r=ri(i,r,void 0),Ir(e,t,s,r)}if(l=(s&e.childLanes)!==0,we||l){if(r=ie,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,at(e,o),$e(r,e,o,-1))}return Ha(),r=ri(Error(y(421))),Ir(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Am.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ce=xt(o.nextSibling),Ee=t,Q=!0,He=null,e!==null&&(_e[Re++]=et,_e[Re++]=tt,_e[Re++]=Ut,et=e.id,tt=e.overflow,Ut=t),t=Ma(t,r.children),t.flags|=4096,t)}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ai(e.return,t,n)}function oi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Jc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(pe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,n,t);else if(e.tag===19)Ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),oi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}oi(t,!0,n,null,i);break;case"together":oi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cm(e,t,n){switch(t.tag){case 3:Xc(t),yn();break;case 5:Nc(t);break;case 1:ke(t.type)&&oo(t);break;case 4:Pa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Zc(e,t,n):(W(q,q.current&1),e=st(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,qc(e,t,n)}return st(e,t,n)}var eu,Gi,tu,nu;eu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gi=function(){};tu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dt(Xe.current);var i=null;switch(n){case"input":o=pi(e,o),r=pi(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=vi(e,o),r=vi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}xi(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&G("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};nu=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Em(e,t,n){var r=t.pendingProps;switch(ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&ro(),de(t),null;case 3:return r=t.stateNode,wn(),Y(be),Y(fe),Ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(ea(He),He=null))),Gi(e,t),de(t),null;case 5:Ta(t);var o=Dt(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)tu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return de(t),null}if(e=Dt(Xe.current),Pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qe]=t,r[or]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<An.length;o++)G(An[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":ns(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":os(r,i),G("invalid",r)}xi(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,l,e),o=["children",""+l]):Qn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":wr(r),rs(r,i,!0);break;case"textarea":wr(r),is(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=no)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[qe]=t,e[or]=r,eu(e,t,!1,!1),t.stateNode=e;e:{switch(s=wi(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<An.length;o++)G(An[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":ns(e,r),o=pi(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),G("invalid",e);break;case"textarea":os(e,r),o=vi(e,r),G("invalid",e);break;default:o=r}xi(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?_l(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Il(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&qn(e,c):typeof c=="number"&&qn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&G("scroll",e):c!=null&&sa(e,i,c,s))}switch(n){case"input":wr(e),rs(e,r,!1);break;case"textarea":wr(e),is(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)nu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Dt(ar.current),Dt(Xe.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(i=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return de(t),null;case 13:if(Y(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ce!==null&&t.mode&1&&!(t.flags&128))wc(),yn(),t.flags|=98560,i=!1;else if(i=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[qe]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else He!==null&&(ea(He),He=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ne===0&&(ne=3):Ha())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return wn(),Gi(e,t),e===null&&nr(t.stateNode.containerInfo),de(t),null;case 10:return Ca(t.type._context),de(t),null;case 17:return ke(t.type)&&ro(),de(t),null;case 19:if(Y(q),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)_n(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=uo(e),s!==null){for(t.flags|=128,_n(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>kn&&(t.flags|=128,r=!0,_n(i,!1),t.lanes=4194304)}else{if(!r)if(e=uo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Q)return de(t),null}else 2*J()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,_n(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function zm(e,t){switch(ka(t),t.tag){case 1:return ke(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),Y(be),Y(fe),Ia(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(Y(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(q),null;case 4:return wn(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var Lr=!1,me=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,S=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Yi(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Qs=!1;function Tm(e,t){if(Ti=Jr,e=sc(),wa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,p=0,h=e,g=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(l=s+o),h!==i||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(w=h.firstChild)!==null;)g=h,h=w;for(;;){if(h===e)break t;if(g===n&&++u===o&&(l=s),g===i&&++p===r&&(c=s),(w=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ii={focusedElem:e,selectionRange:n},Jr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,F=x.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:Be(t.type,b),F);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){Z(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return x=Qs,Qs=!1,x}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yi(t,n,i)}o=o.next}while(o!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[or],delete t[Ri],delete t[mm],delete t[fm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ou(e){return e.tag===5||e.tag===3||e.tag===4}function qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}var se=null,Ve=!1;function ct(e,t,n){for(n=n.child;n!==null;)iu(e,t,n),n=n.sibling}function iu(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:me||ln(n,t);case 6:var r=se,o=Ve;se=null,ct(e,t,n),se=r,Ve=o,se!==null&&(Ve?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Ve?(e=se,n=n.stateNode,e.nodeType===8?Xo(e.parentNode,n):e.nodeType===1&&Xo(e,n),Jn(e)):Xo(se,n.stateNode));break;case 4:r=se,o=Ve,se=n.stateNode.containerInfo,Ve=!0,ct(e,t,n),se=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Yi(n,t,s),o=o.next}while(o!==r)}ct(e,t,n);break;case 1:if(!me&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,t,l)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ct(e,t,n),me=r):ct(e,t,n);break;default:ct(e,t,n)}}function Ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pm),t.forEach(function(r){var o=Fm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:se=l.stateNode,Ve=!1;break e;case 3:se=l.stateNode.containerInfo,Ve=!0;break e;case 4:se=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(se===null)throw Error(y(160));iu(i,s,o),se=null,Ve=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){Z(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)au(t,e),t=t.sibling}function au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ye(e),r&4){try{$n(3,e,e.return),zo(3,e)}catch(b){Z(e,e.return,b)}try{$n(5,e,e.return)}catch(b){Z(e,e.return,b)}}break;case 1:Ue(t,e),Ye(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Ue(t,e),Ye(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var o=e.stateNode;try{qn(o,"")}catch(b){Z(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&zl(o,i),wi(l,s);var u=wi(l,i);for(s=0;s<c.length;s+=2){var p=c[s],h=c[s+1];p==="style"?_l(o,h):p==="dangerouslySetInnerHTML"?Il(o,h):p==="children"?qn(o,h):sa(o,p,h,u)}switch(l){case"input":hi(o,i);break;case"textarea":Pl(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?un(o,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?un(o,!!i.multiple,i.defaultValue,!0):un(o,!!i.multiple,i.multiple?[]:"",!1))}o[or]=i}catch(b){Z(e,e.return,b)}}break;case 6:if(Ue(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(y(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){Z(e,e.return,b)}}break;case 3:if(Ue(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(b){Z(e,e.return,b)}break;case 4:Ue(t,e),Ye(e);break;case 13:Ue(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ua=J())),r&4&&Ks(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||p,Ue(t,e),me=u):Ue(t,e),Ye(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(S=e,p=e.child;p!==null;){for(h=S=p;S!==null;){switch(g=S,w=g.child,g.tag){case 0:case 11:case 14:case 15:$n(4,g,g.return);break;case 1:ln(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){Z(r,n,b)}}break;case 5:ln(g,g.return);break;case 22:if(g.memoizedState!==null){Zs(h);continue}}w!==null?(w.return=g,S=w):Zs(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ll("display",s))}catch(b){Z(e,e.return,b)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){Z(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Ye(e),r&4&&Ks(e);break;case 21:break;default:Ue(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ou(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qn(o,""),r.flags&=-33);var i=qs(e);Ki(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=qs(e);qi(e,l,s);break;default:throw Error(y(161))}}catch(c){Z(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,n){S=e,su(e)}function su(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var o=S,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Lr;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||me;l=Lr;var u=me;if(Lr=s,(me=c)&&!u)for(S=o;S!==null;)s=S,c=s.child,s.tag===22&&s.memoizedState!==null?Js(o):c!==null?(c.return=s,S=c):Js(o);for(;i!==null;)S=i,su(i),i=i.sibling;S=o,Lr=l,me=u}Xs(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,S=i):Xs(e)}}function Xs(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Os(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Os(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Jn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}me||t.flags&512&&Qi(t)}catch(g){Z(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Zs(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Js(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(c){Z(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Z(t,o,c)}}var i=t.return;try{Qi(t)}catch(c){Z(t,i,c)}break;case 5:var s=t.return;try{Qi(t)}catch(c){Z(t,s,c)}}}catch(c){Z(t,t.return,c)}if(t===e){S=null;break}var l=t.sibling;if(l!==null){l.return=t.return,S=l;break}S=t.return}}var Lm=Math.ceil,po=lt.ReactCurrentDispatcher,Aa=lt.ReactCurrentOwner,Me=lt.ReactCurrentBatchConfig,D=0,ie=null,ee=null,le=0,Ne=0,cn=Et(0),ne=0,ur=null,Vt=0,Po=0,Fa=0,Gn=null,xe=null,Ua=0,kn=1/0,Ze=null,ho=!1,Xi=null,bt=null,_r=!1,ht=null,go=0,Yn=0,Zi=null,$r=-1,Gr=0;function he(){return D&6?J():$r!==-1?$r:$r=J()}function kt(e){return e.mode&1?D&2&&le!==0?le&-le:hm.transition!==null?(Gr===0&&(Gr=$l()),Gr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Zl(e.type)),e):1}function $e(e,t,n,r){if(50<Yn)throw Yn=0,Zi=null,Error(y(185));mr(e,n,r),(!(D&2)||e!==ie)&&(e===ie&&(!(D&2)&&(Po|=n),ne===4&&ft(e,le)),je(e,r),n===1&&D===0&&!(t.mode&1)&&(kn=J()+500,No&&zt()))}function je(e,t){var n=e.callbackNode;hd(e,t);var r=Zr(e,e===ie?le:0);if(r===0)n!==null&&ls(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ls(n),t===1)e.tag===0?pm(el.bind(null,e)):vc(el.bind(null,e)),um(function(){!(D&6)&&zt()}),n=null;else{switch(Gl(r)){case 1:n=ma;break;case 4:n=Hl;break;case 16:n=Xr;break;case 536870912:n=Wl;break;default:n=Xr}n=hu(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if($r=-1,Gr=0,D&6)throw Error(y(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=Zr(e,e===ie?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var o=D;D|=2;var i=uu();(ie!==e||le!==t)&&(Ze=null,kn=J()+500,Mt(e,t));do try{Om();break}catch(l){cu(e,l)}while(!0);Na(),po.current=i,D=o,ee!==null?t=0:(ie=null,le=0,t=ne)}if(t!==0){if(t===2&&(o=Ni(e),o!==0&&(r=o,t=Ji(e,o))),t===1)throw n=ur,Mt(e,0),ft(e,r),je(e,J()),n;if(t===6)ft(e,r);else{if(o=e.current.alternate,!(r&30)&&!_m(o)&&(t=vo(e,r),t===2&&(i=Ni(e),i!==0&&(r=i,t=Ji(e,i))),t===1))throw n=ur,Mt(e,0),ft(e,r),je(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:_t(e,xe,Ze);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=Ua+500-J(),10<t)){if(Zr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_i(_t.bind(null,e,xe,Ze),t);break}_t(e,xe,Ze);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-We(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lm(r/1960))-r,10<r){e.timeoutHandle=_i(_t.bind(null,e,xe,Ze),r);break}_t(e,xe,Ze);break;case 5:_t(e,xe,Ze);break;default:throw Error(y(329))}}}return je(e,J()),e.callbackNode===n?lu.bind(null,e):null}function Ji(e,t){var n=Gn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=vo(e,t),e!==2&&(t=xe,xe=n,t!==null&&ea(t)),e}function ea(e){xe===null?xe=e:xe.push.apply(xe,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~Fa,t&=~Po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function el(e){if(D&6)throw Error(y(327));hn();var t=Zr(e,0);if(!(t&1))return je(e,J()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=Ni(e);r!==0&&(t=r,n=Ji(e,r))}if(n===1)throw n=ur,Mt(e,0),ft(e,t),je(e,J()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,xe,Ze),je(e,J()),null}function Ba(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(kn=J()+500,No&&zt())}}function Ht(e){ht!==null&&ht.tag===0&&!(D&6)&&hn();var t=D;D|=1;var n=Me.transition,r=A;try{if(Me.transition=null,A=1,e)return e()}finally{A=r,Me.transition=n,D=t,!(D&6)&&zt()}}function Va(){Ne=cn.current,Y(cn)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cm(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:wn(),Y(be),Y(fe),Ia();break;case 5:Ta(r);break;case 4:wn();break;case 13:Y(q);break;case 19:Y(q);break;case 10:Ca(r.type._context);break;case 22:case 23:Va()}n=n.return}if(ie=e,ee=e=jt(e.current,null),le=Ne=t,ne=0,ur=null,Fa=Po=Vt=0,xe=Gn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Ot=null}return e}function cu(e,t){do{var n=ee;try{if(Na(),Vr.current=fo,mo){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}mo=!1}if(Bt=0,oe=te=K=null,Wn=!1,sr=0,Aa.current=null,n===null||n.return===null){ne=1,ur=t,ee=null;break}e:{var i=e,s=n.return,l=n,c=t;if(t=le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Bs(s);if(w!==null){w.flags&=-257,Vs(w,s,l,i,t),w.mode&1&&Us(i,u,t),t=w,c=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(c),t.updateQueue=b}else x.add(c);break e}else{if(!(t&1)){Us(i,u,t),Ha();break e}c=Error(y(426))}}else if(Q&&l.mode&1){var F=Bs(s);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Vs(F,s,l,i,t),ja(bn(c,l));break e}}i=c=bn(c,l),ne!==4&&(ne=2),Gn===null?Gn=[i]:Gn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Gc(i,c,t);Rs(i,m);break e;case 1:l=c;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(bt===null||!bt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Yc(i,l,t);Rs(i,v);break e}}i=i.return}while(i!==null)}mu(n)}catch(k){t=k,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function uu(){var e=po.current;return po.current=fo,e===null?fo:e}function Ha(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!(Vt&268435455)&&!(Po&268435455)||ft(ie,le)}function vo(e,t){var n=D;D|=2;var r=uu();(ie!==e||le!==t)&&(Ze=null,Mt(e,t));do try{Rm();break}catch(o){cu(e,o)}while(!0);if(Na(),D=n,po.current=r,ee!==null)throw Error(y(261));return ie=null,le=0,ne}function Rm(){for(;ee!==null;)du(ee)}function Om(){for(;ee!==null&&!ad();)du(ee)}function du(e){var t=pu(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?mu(e):ee=t,Aa.current=null}function mu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zm(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=Em(n,t,Ne),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function _t(e,t,n){var r=A,o=Me.transition;try{Me.transition=null,A=1,Dm(e,t,n,r)}finally{Me.transition=o,A=r}return null}function Dm(e,t,n,r){do hn();while(ht!==null);if(D&6)throw Error(y(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(gd(e,i),e===ie&&(ee=ie=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,hu(Xr,function(){return hn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var s=A;A=1;var l=D;D|=4,Aa.current=null,Tm(e,n),au(n,e),nm(Ii),Jr=!!Ti,Ii=Ti=null,e.current=n,Im(n),sd(),D=l,A=s,Me.transition=i}else e.current=n;if(_r&&(_r=!1,ht=e,go=o),i=e.pendingLanes,i===0&&(bt=null),ud(n.stateNode),je(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ho)throw ho=!1,e=Xi,Xi=null,e;return go&1&&e.tag!==0&&hn(),i=e.pendingLanes,i&1?e===Zi?Yn++:(Yn=0,Zi=e):Yn=0,zt(),null}function hn(){if(ht!==null){var e=Gl(go),t=Me.transition,n=A;try{if(Me.transition=null,A=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,go=0,D&6)throw Error(y(331));var o=D;for(D|=4,S=e.current;S!==null;){var i=S,s=i.child;if(S.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(S=u;S!==null;){var p=S;switch(p.tag){case 0:case 11:case 15:$n(8,p,i)}var h=p.child;if(h!==null)h.return=p,S=h;else for(;S!==null;){p=S;var g=p.sibling,w=p.return;if(ru(p),p===u){S=null;break}if(g!==null){g.return=w,S=g;break}S=w}}}var x=i.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var F=b.sibling;b.sibling=null,b=F}while(b!==null)}}S=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,S=s;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$n(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,S=m;break e}S=i.return}}var d=e.current;for(S=d;S!==null;){s=S;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,S=f;else e:for(s=d;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zo(9,l)}}catch(k){Z(l,l.return,k)}if(l===s){S=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,S=v;break e}S=l.return}}if(D=o,zt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{A=n,Me.transition=t}}return!1}function tl(e,t,n){t=bn(n,t),t=Gc(e,t,1),e=wt(e,t,1),t=he(),e!==null&&(mr(e,1,t),je(e,t))}function Z(e,t,n){if(e.tag===3)tl(e,e,n);else for(;t!==null;){if(t.tag===3){tl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=bn(n,e),e=Yc(t,e,1),t=wt(t,e,1),e=he(),t!==null&&(mr(t,1,e),je(t,e));break}}t=t.return}}function Mm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(le&n)===n&&(ne===4||ne===3&&(le&130023424)===le&&500>J()-Ua?Mt(e,0):Fa|=n),je(e,t)}function fu(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=he();e=at(e,t),e!==null&&(mr(e,t,n),je(e,n))}function Am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fu(e,n)}function Fm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),fu(e,n)}var pu;pu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Cm(e,t,n);we=!!(e.flags&131072)}else we=!1,Q&&t.flags&1048576&&yc(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var o=vn(t,fe.current);pn(t,n),o=_a(null,t,r,e,o,n);var i=Ra();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,oo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,za(t),o.updater=Eo,t.stateNode=o,o._reactInternals=t,Ui(t,r,e,n),t=Hi(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&ba(t),pe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Bm(r),e=Be(r,e),o){case 0:t=Vi(null,t,r,e,n);break e;case 1:t=$s(null,t,r,e,n);break e;case 11:t=Hs(null,t,r,e,n);break e;case 14:t=Ws(null,t,r,Be(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Vi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),$s(e,t,r,o,n);case 3:e:{if(Xc(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Sc(e,t),co(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=bn(Error(y(423)),t),t=Gs(e,t,r,n,o);break e}else if(r!==o){o=bn(Error(y(424)),t),t=Gs(e,t,r,n,o);break e}else for(Ce=xt(t.stateNode.containerInfo.firstChild),Ee=t,Q=!0,He=null,n=kc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===o){t=st(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Nc(t),e===null&&Mi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Li(r,o)?s=null:i!==null&&Li(r,i)&&(t.flags|=32),Kc(e,t),pe(e,t,s,n),t.child;case 6:return e===null&&Mi(t),null;case 13:return Zc(e,t,n);case 4:return Pa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Hs(e,t,r,o,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,W(so,r._currentValue),r._currentValue=s,i!==null)if(Ge(i.value,s)){if(i.children===o.children&&!be.current){t=st(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=nt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ai(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(y(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ai(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}pe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pn(t,n),o=Ae(o),r=r(o),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,o=Be(r,t.pendingProps),o=Be(r.type,o),Ws(e,t,r,o,n);case 15:return Qc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Wr(e,t),t.tag=1,ke(r)?(e=!0,oo(t)):e=!1,pn(t,n),$c(t,r,o),Ui(t,r,o,n),Hi(null,t,r,!0,e,n);case 19:return Jc(e,t,n);case 22:return qc(e,t,n)}throw Error(y(156,t.tag))};function hu(e,t){return Vl(e,t)}function Um(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Um(e,t,n,r)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bm(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===ua)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Wa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Zt:return At(n.children,o,i,t);case la:s=8,o|=8;break;case ui:return e=De(12,n,t,o|2),e.elementType=ui,e.lanes=i,e;case di:return e=De(13,n,t,o),e.elementType=di,e.lanes=i,e;case mi:return e=De(19,n,t,o),e.elementType=mi,e.lanes=i,e;case Nl:return To(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jl:s=10;break e;case Sl:s=9;break e;case ca:s=11;break e;case ua:s=14;break e;case ut:s=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=De(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function At(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=De(22,e,r,t),e.elementType=Nl,e.lanes=n,e.stateNode={isHidden:!1},e}function ii(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function ai(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function $a(e,t,n,r,o,i,s,l,c){return e=new Vm(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=De(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(i),e}function Hm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gu(e){if(!e)return Nt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(ke(n))return gc(e,n,t)}return t}function vu(e,t,n,r,o,i,s,l,c){return e=$a(n,r,!0,e,o,i,s,l,c),e.context=gu(null),n=e.current,r=he(),o=kt(n),i=nt(r,o),i.callback=t??null,wt(n,i,o),e.current.lanes=o,mr(e,o,r),je(e,r),e}function Io(e,t,n,r){var o=t.current,i=he(),s=kt(o);return n=gu(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(o,t,s),e!==null&&($e(e,o,s,i),Br(e,o,s)),s}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ga(e,t){nl(e,t),(e=e.alternate)&&nl(e,t)}function Wm(){return null}var yu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ya(e){this._internalRoot=e}Lo.prototype.render=Ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Io(e,t,null,null)};Lo.prototype.unmount=Ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Io(null,e,null,null)}),t[it]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ql();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mt.length&&t!==0&&t<mt[n].priority;n++);mt.splice(n,0,e),n===0&&Xl(e)}};function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rl(){}function $m(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=yo(s);i.call(u)}}var s=vu(t,r,e,0,null,!1,!1,"",rl);return e._reactRootContainer=s,e[it]=s.current,nr(e.nodeType===8?e.parentNode:e),Ht(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=yo(c);l.call(u)}}var c=$a(e,0,!1,null,null,!1,!1,"",rl);return e._reactRootContainer=c,e[it]=c.current,nr(e.nodeType===8?e.parentNode:e),Ht(function(){Io(t,c,n,r)}),c}function Ro(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var c=yo(s);l.call(c)}}Io(t,s,e,o)}else s=$m(n,t,e,o,r);return yo(s)}Yl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(fa(t,n|1),je(t,J()),!(D&6)&&(kn=J()+500,zt()))}break;case 13:Ht(function(){var r=at(e,1);if(r!==null){var o=he();$e(r,e,1,o)}}),Ga(e,1)}};pa=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=he();$e(t,e,134217728,n)}Ga(e,134217728)}};Ql=function(e){if(e.tag===13){var t=kt(e),n=at(e,t);if(n!==null){var r=he();$e(n,e,t,r)}Ga(e,t)}};ql=function(){return A};Kl=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};ki=function(e,t,n){switch(t){case"input":if(hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(y(90));El(r),hi(r,o)}}}break;case"textarea":Pl(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Dl=Ba;Ml=Ht;var Gm={usingClientEntryPoint:!1,Events:[pr,nn,So,Rl,Ol,Ba]},Rn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ym={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ul(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||Wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{wo=Rr.inject(Ym),Ke=Rr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qa(t))throw Error(y(200));return Hm(e,t,null,n)};Pe.createRoot=function(e,t){if(!Qa(e))throw Error(y(299));var n=!1,r="",o=yu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=$a(e,1,!1,null,null,n,!1,r,o),e[it]=t.current,nr(e.nodeType===8?e.parentNode:e),new Ya(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ul(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Ht(e)};Pe.hydrate=function(e,t,n){if(!_o(t))throw Error(y(200));return Ro(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Qa(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=yu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=vu(t,null,e,1,n??null,o,!1,i,s),e[it]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Lo(t)};Pe.render=function(e,t,n){if(!_o(t))throw Error(y(200));return Ro(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!_o(e))throw Error(y(40));return e._reactRootContainer?(Ht(function(){Ro(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Pe.unstable_batchedUpdates=Ba;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_o(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Ro(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function xu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xu)}catch(e){console.error(e)}}xu(),xl.exports=Pe;var Qm=xl.exports,ol=Qm;li.createRoot=ol.createRoot,li.hydrateRoot=ol.hydrateRoot;const qm=""+new URL("The Gaia Ecosystem Hero Image-5dq3M1QC.png",import.meta.url).href,Km=""+new URL("From Isolation to Integration-2-25k5038m.png",import.meta.url).href,Xm=""+new URL("Wheel Gaia Ecosystem-G1vfXwh6.png",import.meta.url).href,Zm=""+new URL("The Gaia Ecosystem-Bx52tQoB.png",import.meta.url).href,Jm=""+new URL("Vision-quote-author-CodlOb5y.png",import.meta.url).href,ef=""+new URL("WeCo-CWvBJ4nj.png",import.meta.url).href,tf=""+new URL("1. OSF-r0cMROr1.png",import.meta.url).href,nf=""+new URL("2. Trust-BxXlzwM6.png",import.meta.url).href,rf=""+new URL("3. Commons-CtHn3rWs.png",import.meta.url).href,of=""+new URL("4. OPAL-CaU7k3XM.png",import.meta.url).href,af=""+new URL("5. PASEO-BqFF3B6D.png",import.meta.url).href,sf=""+new URL("Partner 4-RNGO2o2u.JPG",import.meta.url).href,lf=""+new URL("7. Design -Be8UoUrh.png",import.meta.url).href,cf=""+new URL("8. Tech -DdKdIgji.png",import.meta.url).href,uf=""+new URL("Steward 1-Cs68kw5h.jpg",import.meta.url).href,df=""+new URL("Steward 2-Bju_WN7w.jpeg",import.meta.url).href,mf=""+new URL("Steward 3-D3nDxO99.jpg",import.meta.url).href,ff=""+new URL("Steward 4-DdPF5wLI.jpeg",import.meta.url).href,pf=""+new URL("Steward 5 -J9ON8Yzq.png",import.meta.url).href,hf=""+new URL("Steward 6-Cr7dDgU6.webp",import.meta.url).href,gf=""+new URL("Steward 7-BCGnMJr7.jpeg",import.meta.url).href,vf=""+new URL("Steward 8-D0vrYsBQ.png",import.meta.url).href,yf=""+new URL("Steward 9-CfrbpHFK.webp",import.meta.url).href,xf=""+new URL("Steward 10-DGsFU9WE.png",import.meta.url).href,wf=""+new URL("Steward 11-DvPXQSzf.png",import.meta.url).href,bf=""+new URL("Steward 12-CQsoQCpu.png",import.meta.url).href,kf=""+new URL("Steward 13-CmMuTnjP.jpg",import.meta.url).href,jf=""+new URL("Steward 14-CITIlrf6.png",import.meta.url).href,Sf=""+new URL("Steward 15-3oPBpSg6.png",import.meta.url).href,Nf=""+new URL("Steward 16-CcjuPsII.png",import.meta.url).href,Cf=""+new URL("Steward 17-c76U5yJE.png",import.meta.url).href,Ef=""+new URL("Steward 18-DTBcw6-9.png",import.meta.url).href,zf=""+new URL("Expert Wheel White Short-VKM_CXfZ.mp4",import.meta.url).href,si=""+new URL("Gaia Ecosystem central Earth cropped-DZ9obkYH.png",import.meta.url).href,Pf="data:image/svg+xml,%3csvg%20width='179'%20height='141'%20viewBox='0%200%20179%20141'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M173.131%2081.475C170.464%2089.0216%20167.257%2095.5116%20163.511%20100.945C149.357%20121.492%20130.567%20134.218%20107.141%20139.125C75.6606%20145.725%2042.0606%20134.455%2021.1506%20109.595C6.61056%2092.3149%20-0.432773%2071.8949%200.0205602%2048.3349C0.0872269%2044.7949%200.610568%2042.1983%201.59057%2040.545C2.99723%2038.1583%204.74055%2036.3883%206.82055%2035.235C8.08721%2034.535%209.75388%2034.1949%2011.8205%2034.2149C16.0805%2034.2549%2018.8106%2034.235%2022.0006%2037.755C25.7906%2041.925%2025.3906%2045.705%2025.4006%2050.725C25.4306%2065.235%2037.6006%2072.645%2049.5406%2077.265C57.6706%2080.405%2061.7706%2085.835%2064.7406%2093.735C68.4606%20103.655%2076.2706%20114.865%2088.1706%20115.315C92.5239%20115.482%2096.4306%20114.395%2099.8906%20112.055C106.741%20107.425%20110.501%20101.035%20113.431%2093.485C116.521%2085.495%20121.231%2080.055%20129.521%2076.765C140.421%2072.445%20153.241%2064.4949%20152.631%2050.9949C152.524%2048.6216%20152.631%2046.4116%20152.951%2044.3649C153.811%2038.9549%20158.141%2033.965%20163.991%2034.255C166.231%2034.365%20168.361%2033.9949%20170.511%2034.8649C175.521%2036.8949%20178.041%2041.835%20178.141%2047.135C178.387%2059.895%20176.717%2071.3416%20173.131%2081.475Z'%20fill='black'/%3e%3cpath%20d='M104.001%2086.1249C101.101%2092.5949%2099.2605%2098.6349%2093.0705%20102.725C87.9905%20106.095%2081.8405%20101.075%2079.1905%2096.7449C77.3905%2093.8115%2075.9539%2090.8649%2074.8805%2087.9049C72.0205%2080.0648%2066.8539%2073.7682%2059.3805%2069.0149C52.6205%2064.7249%2044.2005%2063.9749%2039.0705%2057.1049C35.7605%2052.6849%2037.1405%2047.7749%2041.1705%2044.2949C44.9505%2041.0149%2049.0705%2039.1948%2053.6505%2037.3948C56.3038%2036.3548%2058.3805%2035.3348%2059.8805%2034.3348C64.2072%2031.4482%2067.8538%2027.8682%2070.8205%2023.5949C73.6205%2019.5549%2075.0805%2014.9549%2077.1005%2010.5549C78.3738%207.78819%2080.3338%205.11486%2082.9805%202.53486C84.7872%200.768189%2086.8171%20-0.0784707%2089.0705%20-0.0051374C95.9405%200.214863%20100.201%207.99485%20102.301%2013.5649C103.547%2016.8715%20105.111%2020.0515%20106.991%2023.1049C111.801%2030.9249%20119.381%2035.5649%20127.921%2038.8849C131.361%2040.2249%20134.521%2042.0815%20137.4%2044.4549C141.84%2048.1249%20142.131%2054.4948%20137.881%2058.4948C134.587%2061.5948%20131.204%2063.7449%20127.731%2064.9449C116.517%2068.8115%20108.607%2075.8715%20104.001%2086.1249Z'%20fill='black'/%3e%3c/svg%3e",Tf=""+new URL("Partner 1-BS9mmEpz.png",import.meta.url).href,If=""+new URL("Partner 2-7yDRfbhY.webp",import.meta.url).href,Lf=""+new URL("Partner 3-AU1_P8lK.jpeg",import.meta.url).href,_f=""+new URL("Partner 4-RNGO2o2u.JPG",import.meta.url).href,Rf=""+new URL("Partner 5-DaxyKawW.png",import.meta.url).href,Of=""+new URL("v-BYfXKgnB.png",import.meta.url).href,rt={width:960,height:520},Df=rt,Mf=e=>!e||!e.width||!e.height?rt:e,Oe={nodeDiameterPx:130,maxOrbitRadiusX:.42,maxOrbitRadiusY:.42,exitRotationSpeed:1,mobileBreakpointPx:768,tightPackingBreakpointPx:1140,mobileRadiusScale:.85,overlapStartBreakpointPx:930},Af=Math.PI*2,Ff=e=>{const t=[];for(let n=0;n<e;n++){const o=n/e*Af+2.62;t.push({index:n,baseAngle:o,x:0,y:0})}return t},il=(e=rt)=>{const t=e.width||rt.width,n=e.height||rt.height,r=Oe.overlapStartBreakpointPx,o=Oe.nodeDiameterPx;if(t>=r)return o;const s=.25+.75*(t/r);let l=o*s;const u=t<Oe.mobileBreakpointPx?Oe.mobileRadiusScale:1,p=t*Oe.maxOrbitRadiusX*u,h=n*Oe.maxOrbitRadiusY*u,x=2*Math.max(1,Math.min(p,h))*Math.sin(Math.PI/12)*.95,b=Math.min(l,x);return Math.max(45,b)},Uf=(e,t=rt,n=0)=>{if(!e||!e.length)return e;const r=t.width||rt.width,o=t.height||rt.height,s=r<Oe.mobileBreakpointPx?Oe.mobileRadiusScale:1,l=r*Oe.maxOrbitRadiusX*s,c=o*Oe.maxOrbitRadiusY*s,u=n>1?(n-1)*Oe.exitRotationSpeed:0,p=Math.PI*1.5;return e.forEach((h,g)=>{const w=.05*g;let x=(n-w)/(1-w);x=Math.max(0,Math.min(1,x));const b=1-Math.pow(1-x,3),F=l*b,m=c*b,d=(1-b)*p,f=h.baseAngle-d+u;h.x=Math.cos(f)*F,h.y=Math.sin(f)*m}),e},Bf=({theme:e,onToggleTheme:t})=>{const[n,r]=R.useState(!1),[o,i]=R.useState(!1);R.useEffect(()=>{const c=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const s=c=>{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth"}),i(!1)},l=[{label:"Vision",target:"paradigm-section"},{label:"Ecosystem",target:"gaia-nature-video"},{label:"Team",target:"team"},{label:"Roadmap",target:"roadmap"},{label:"Join Us",target:"networks"}];return a.jsxs("nav",{className:`navbar ${n?"scrolled":""}`,children:[a.jsxs("div",{className:"nav-container",children:[a.jsxs("div",{className:"logo",children:[a.jsx("svg",{width:"40",height:"40",viewBox:"0 0 600 600",className:"header-weco-svg-element","aria-hidden":"true",children:a.jsxs("g",{transform:"translate(300, 300)",children:[a.jsx("circle",{r:"280",fill:"#006633",className:"header-weco-ring ring-12"}),a.jsx("circle",{r:"255",fill:"#00753a",className:"header-weco-ring ring-11"}),a.jsx("circle",{r:"230",fill:"#008542",className:"header-weco-ring ring-10"}),a.jsx("circle",{r:"205",fill:"#15944b",className:"header-weco-ring ring-9"}),a.jsx("circle",{r:"180",fill:"#2ea356",className:"header-weco-ring ring-8"}),a.jsx("circle",{r:"155",fill:"#46b262",className:"header-weco-ring ring-7"}),a.jsx("circle",{r:"130",fill:"#5fc16f",className:"header-weco-ring ring-6"}),a.jsx("circle",{r:"105",fill:"#78cf7d",className:"header-weco-ring ring-5"}),a.jsx("circle",{r:"80",fill:"#91dd8c",className:"header-weco-ring ring-4"}),a.jsx("circle",{r:"55",fill:"#aae99d",className:"header-weco-ring ring-3"}),a.jsx("circle",{r:"30",fill:"#c3f5af",className:"header-weco-ring ring-2"}),a.jsx("circle",{r:"15",fill:"#ddffc2",className:"header-weco-ring ring-1"})]})}),a.jsx("span",{className:"logo-text",children:"Gaia Ecosystem"})]}),a.jsxs("div",{className:"nav-right",children:[a.jsx("div",{className:"nav-links",children:l.map(({label:c,target:u})=>a.jsx("a",{onClick:()=>s(u),className:"nav-link",children:c},c))}),a.jsxs("button",{className:"theme-toggle",onClick:t,"aria-label":e==="dark"?"Switch to light mode":"Switch to dark mode",children:[a.jsx("span",{className:"theme-toggle-label",children:e==="dark"?"Dark mode":"Light mode"}),a.jsx("div",{className:`theme-toggle-track ${e==="dark"?"is-dark":"is-light"}`,children:a.jsx("div",{className:"theme-toggle-thumb"})})]}),a.jsx("button",{className:`nav-toggle ${o?"is-open":""}`,onClick:()=>i(c=>!c),"aria-label":"Toggle navigation menu",children:a.jsx("span",{className:"nav-burger"})})]})]}),o&&a.jsx("div",{className:"nav-mobile-menu",children:l.map(({label:c,target:u})=>a.jsx("button",{className:"nav-mobile-link",onClick:()=>s(u),type:"button",children:c},c))})]})},Vf=({theme:e,onOpenDeck:t})=>{const n=e==="light",r=()=>{const i=document.getElementById("video-section");i&&i.scrollIntoView({behavior:"smooth"})},o=n?"linear-gradient(135deg, rgba(231, 244, 235, 0.26) 0%, rgba(218, 238, 227, 0.23) 45%, rgba(207, 233, 221, 0.22) 100%)":"linear-gradient(135deg, rgba(6, 23, 16, 0.77) 0%, rgba(16, 45, 31, 0.75) 50%, rgba(30, 77, 61, 0.75) 100%)";return a.jsxs("section",{id:"vision",className:"hero-section",style:{backgroundImage:`${o}, url(${qm})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[a.jsx("div",{className:"hero-particles"}),a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("i",{className:"fas fa-leaf"}),a.jsx("span",{children:"Commons-Based Regenerative Infrastructure"})]}),a.jsx("h1",{className:"hero-title",children:"The Gaia Ecosystem"}),a.jsx("p",{className:"hero-subtitle",children:"Deploying the Operating Systems for a Regenerative Civilization"}),a.jsx("p",{className:"hero-description",children:"Building the commons infrastructure to weave regenerative efforts into a living web of coherence, resilience, and shared purpose"}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:r,children:[a.jsx("i",{className:"fas fa-play"}),"Watch the Video"]}),a.jsxs("button",{className:"btn-secondary",onClick:t,children:[a.jsx("i",{className:"fas fa-images"}),a.jsx("strong",{children:"See the Deck"})]})]})]}),a.jsx("div",{className:"scroll-indicator",children:a.jsx("i",{className:"fas fa-chevron-down"})})]})},Hf=()=>{const e=()=>{const t=document.getElementById("paradigm-section");t&&t.scrollIntoView({behavior:"smooth"})};return a.jsx("section",{id:"video-section",className:"video-section",children:a.jsxs("div",{className:"video-container",children:[a.jsx("h2",{className:"video-title",children:"Watch the video introduction"}),a.jsx("div",{className:"video-frame",children:a.jsx("div",{className:"video-embed",children:a.jsx("iframe",{src:"https://www.youtube.com/embed/iO0ycMkr8lo",title:"Introduction to regenerative and sustainable initiatives",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}),a.jsx("div",{className:"video-actions",children:a.jsxs("button",{className:"btn-secondary-small",onClick:e,children:[a.jsx("strong",{children:"Keep going"}),a.jsx("span",{className:"btn-secondary-arrow"})]})})]})})},Wf=()=>a.jsx("section",{id:"paradigm-section",className:"paradigm-section",children:a.jsx("div",{className:"paradigm-container",children:a.jsxs("div",{className:"paradigm-content",children:[a.jsx("h2",{children:"A New Paradigm Emerges"}),a.jsx("p",{className:"lead-text",children:"Across the world, individuals, communities and organizations are awakening to their shared role as stewards of a thriving planet. A global transition is unfolding—from extractive systems of competition to collaborative, regenerative forms of economy that align human productivity with the wellbeing of life."}),a.jsxs("div",{className:"paradigm-cards",children:[a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-seedling"}),a.jsx("h3",{children:"Stewardship"}),a.jsx("p",{children:"Caring for shared resources for current and future generations"})]}),a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-sync-alt"}),a.jsx("h3",{children:"Reciprocity"}),a.jsx("p",{children:"Fair exchange based on transparent agreements"})]}),a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-hands-helping"}),a.jsx("h3",{children:"Shared Purpose"}),a.jsx("p",{children:"Collective wellbeing over individual accumulation"})]})]})]})})}),$f=()=>a.jsx("section",{id:"ecosystem",className:"problem-section",children:a.jsxs("div",{className:"problem-container",children:[a.jsxs("div",{className:"problem-text",children:[a.jsxs("div",{className:"section-label section-label--challenge",children:[a.jsx("i",{className:"fas fa-triangle-exclamation"}),"The Challenge"]}),a.jsx("h2",{children:"From Isolation to Integration"}),a.jsx("p",{className:"lead-text lead-text-left",children:"Despite the growing number of regenerative initiatives, most operate in isolation. This fragmentation leads to duplication, inefficiency, and missed opportunities for synergistic impact."}),a.jsxs("div",{className:"problem-points",children:[a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-link-slash"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Disconnected Efforts"}),a.jsx("p",{children:"Regenerative projects lack connective infrastructure for collaboration"})]})]}),a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-clone"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Duplication & Waste"}),a.jsx("p",{children:"Without coordination, valuable resources are spent redundantly"})]})]}),a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-compress"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Limited Scale"}),a.jsx("p",{children:"Isolated initiatives cannot achieve the systemic transformation needed"})]})]})]})]}),a.jsx("div",{className:"problem-visual",children:a.jsx("img",{src:Km,alt:"From Isolation to Integration",className:"problem-image"})})]})}),Gf=()=>a.jsx("section",{className:"solution-section",children:a.jsxs("div",{className:"solution-container",children:[a.jsxs("div",{className:"solution-header-block",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-network-wired"}),"The Solution"]}),a.jsx("h2",{children:"Commons-Based Infrastructure"})]}),a.jsx("div",{className:"solution-visual",children:a.jsx("img",{src:Xm,alt:"Gaia Ecosystem wheel",className:"solution-image"})}),a.jsxs("div",{className:"solution-body",children:[a.jsxs("p",{className:"lead-text lead-text-left",children:["The Gaia Ecosystem provides the ",a.jsx("strong",{children:"nervous and circulatory system"})," for a regenerative civilization—the structures that let collective intelligence and resources flow through diverse, decentralized actors."]}),a.jsxs("div",{className:"solution-features",children:[a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-hands-helping"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Systemic Coherence"}),a.jsx("p",{children:"Shared infrastructure enables seamless collaboration while retaining autonomy"})]})]}),a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-balance-scale"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Transparent Governance"}),a.jsx("p",{children:"Distributed decision-making across scales with clear accountability"})]})]}),a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-recycle"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Regenerative by Design"}),a.jsx("p",{children:"Surplus reinvested into community health and ecological restoration"})]})]})]})]})]})}),Yf=()=>{const e=()=>{const t=document.getElementById("historic-moment");t&&t.scrollIntoView({behavior:"smooth"})};return a.jsx("section",{id:"gaia-nature-video",className:"video-section",children:a.jsxs("div",{className:"video-container",children:[a.jsx("h2",{className:"video-title",children:"Experience the Gaia Ecosystem"}),a.jsx("div",{className:"video-frame",children:a.jsx("div",{className:"video-embed",children:a.jsx("iframe",{src:"https://www.youtube.com/embed/upci4DZW8oU",title:"Immersive naturescapes",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}),a.jsxs("div",{className:"video-actions",children:[a.jsx("button",{className:"btn-primary-small",children:a.jsx("strong",{children:"Get in touch"})}),a.jsxs("button",{className:"btn-secondary-small",onClick:e,style:{marginLeft:"0.75rem"},children:[a.jsx("strong",{children:"Keep going"}),a.jsx("span",{className:"btn-secondary-arrow"})]})]})]})})},al=e=>e?String(e).split("**").map((n,r)=>r%2===1?a.jsx("strong",{children:n},r):n):null,Qf=({onOpenDeck:e,theme:t,highVisibility:n,onToggleHighVisibility:r})=>{const[o,i]=R.useState(0),[s,l]=R.useState(null);R.useEffect(()=>{if(s!==null){const u=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=u}}},[s]);const c=[{icon:"leaf",title:"Open Systems Foundation",subtitle:"Catalyst Organization",description:"The legal entity stewarding the infrastructure creation to ensure integrity and coherence across the ecosystem.",image:tf,ecosystemObjective:"A dedicated open organization to steward the creation and maintenance of the backbone infrastructure that enables the commons ecosystem to operate effectively.",chosenComponent:"Open Systems Foundation – the legal entity and operational framework for commons infrastructure development and stewardship."},{icon:"archive",title:"Commons Trust Infrastructure",subtitle:"Commons Repository",description:"Federated legal entities holding shared assets in trust for collective benefit.",image:nf,ecosystemObjective:"Legal vehicles for holding collective resources and tracking contributions, enabling collaborative innovation and stewardship of a global resource pool.",chosenComponent:"**Commons Trust Infrastructure** - A federated network of trusts for legal stewardship of shared resources that protect contributor rights while enabling a global “Gaia Commons”. Starting with one trust in Phase 1."},{icon:"globe-americas",title:"Gaia Commons",subtitle:"Management Framework",description:"Distributed governance and intelligence framework balancing autonomy with coherence.",image:rf,ecosystemObjective:"Distributed governance frameworks for managing and maintaining shared assets, enabling self-sovereign contributions to create collective benefits through peer-to-peer dynamics that balance local autonomy with global coherence.",chosenComponent:"**Gaia Commons Agency Framework** - The operational backbone that enables the commons to manage and develop itself coherently, providing governance, intelligence, and financial management infrastructure."},{icon:"certificate",title:"OPAL Licenses",subtitle:"Intellectual Property",description:"Regenerative licensing for shared innovation, transparent attribution, and equitable revenue flow.",image:of,ecosystemObjective:"Licensing structures for on-boarding, creating and managing IP within the commons, managing revenue streams and ensuring contributors receive recognition and benefits.",chosenComponent:"**Open Peer Access License** (OPAL), a customized licensing approach that enables both commons collaboration and strategic interface with conventional systems."},{icon:"seedling",title:"PASEO Framework",subtitle:"Organizational Participation",description:"A model enabling organizations to transition from profit-driven to commons-based operations through surplus-sharing.",image:af,ecosystemObjective:"Organizational wrappers made up of legal, operational, and governance systems that enable seamless alignment and interaction with the commons, facilitating efficient internal resource exchange while providing accessible pathways for any organization willing to collaborate regeneratively.",chosenComponent:"**PASEOs (Purpose Driven Altruistic Syntropic Ecosystem Organization)**  - Comprehensive templates for organizations to engage with the commons that model key economic value flow patterns between commons and non-commons stakeholders, while preserving organizations' autonomy and unique identity. The framework is designed to result in gradually increased participation and integration into the commons, incentivized through access to collective intelligence, infrastructure and economic advantages rather than philosophical alignment alone."},{icon:"users",title:"Gaia & Open Earth Networks",subtitle:"Onboarding Pathways",description:"Accessible portals for individuals and organizations to enter and evolve within the ecosystem.",image:sf,ecosystemObjective:"Multiple entry points enable diverse actors to engage with the commons at their current capacity while providing evolution pathways toward deeper collaboration.",chosenComponent:"The Planetir platform facilitates Multiple Network Entry Points for different communities and target audiences, managing the funnel of ecosystem entrants. These communities include the **Gaia Network** (network of commons-ready regenerative practitioners), **Open Earth Network** (network of aligned “open” initiatives), and **Partner Networks** (strategic relationships with complementary organizations)."},{icon:"lightbulb",title:"CreActive Design Labs",subtitle:"Collaborative Design",description:"Immersive co-creation environments that activate shared projects and refine coordination mechanisms.",image:lf,ecosystemObjective:"A collaborative methodology for amalgamating and launching key projects that deliver commons infrastructure to targeted areas of strategic priority.",chosenComponent:"**CreActive Design Lab** - Proven methodology for collaborative design and project activation, adapted for commons contexts from decades of DesignShop® experience."},{icon:"project-diagram",title:"GaiaOS & HIVE",subtitle:"Coordination Technology",description:"The digital nervous system connecting all components through mapping, resource tracking, and AI-assisted collaboration.",image:cf,ecosystemObjective:"A solution to harness agentic AI to help manage planetary commons governance, creating a global operating system for commons coordination and stewardship.",chosenComponent:`**GaiaOS** - An AI-inclusive digital infrastructure that enables all participants to create more effectively, share creations across the commons, and cohere around planetary well-being.

The first purpose-built application within GaiaOS is **HIVE**, a knowledge-sharing platform designed to overcome siloed information by creating a dynamic, AI-powered collective brain for regenerative actors, enabling participants to capture, discover, and evolve shared wisdom at scale.`}];return a.jsxs("section",{id:"components",className:"components-section",children:[s!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:()=>l(null),children:a.jsxs("div",{className:"component-modal",onClick:u=>u.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:()=>l(null),"aria-label":"Close details",children:"×"}),a.jsx("div",{className:"component-modal-header"+(c[s].title==="Gaia & Open Earth Networks"?" component-modal-header--stacked":""),children:c[s].title==="Gaia & Open Earth Networks"?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"component-modal-icon component-modal-icon--compact",children:a.jsx("img",{src:c[s].image,alt:c[s].title})}),a.jsx("p",{className:"component-modal-subtitle component-modal-subtitle--centered",children:c[s].subtitle})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"component-modal-icon",children:a.jsx("img",{src:c[s].image,alt:c[s].title})}),a.jsxs("div",{className:"component-modal-text",children:[a.jsx("h3",{children:c[s].title}),a.jsx("p",{className:"component-modal-subtitle",children:c[s].subtitle})]})]})}),a.jsxs("div",{className:"component-modal-body",children:[a.jsxs("div",{className:"component-modal-box component-modal-box--objective",children:[a.jsx("div",{className:"component-modal-box-title",children:"Ecosystem Objective"}),a.jsx("p",{children:al(c[s].ecosystemObjective||c[s].description)})]}),a.jsxs("div",{className:"component-modal-box component-modal-box--chosen",children:[a.jsx("div",{className:"component-modal-box-title",children:"Chosen Component"}),a.jsx("p",{children:al(c[s].chosenComponent||c[s].title)})]})]})]})}),a.jsxs("div",{className:"components-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-sitemap"}),"The Architecture"]}),a.jsx("h2",{children:"Eight Infrastructural Components"}),a.jsx("p",{className:"section-subtitle",children:"Together, these elements function as a self-reinforcing loop that harnesses contribution for collective wellbeing"}),a.jsx("div",{className:"components-visibility-toggle",children:t==="dark"&&a.jsxs("button",{type:"button",className:`vis-toggle ${n?"is-on":""}`,onClick:r,children:[a.jsx("span",{className:"vis-toggle-label",children:"Increased Visibility"}),a.jsx("span",{className:"vis-toggle-switch",children:a.jsx("span",{className:"vis-toggle-thumb"})})]})})]}),a.jsx("div",{className:"ecosystem-wheel",children:a.jsx("img",{src:Zm,alt:"The Gaia Ecosystem",className:`wheel-image ${n?"wheel-image--hv":""}`})}),a.jsx("div",{className:"components-grid",children:c.map((u,p)=>a.jsxs("div",{className:`component-card ${o===p?"active":""}`,onClick:()=>{i(p),l(p)},children:[a.jsx("div",{className:"component-icon",children:a.jsx("img",{src:u.image,alt:u.title})}),a.jsx("div",{className:"component-number",children:p+1}),a.jsx("p",{className:"component-subtitle",children:u.subtitle}),a.jsx("p",{className:"component-description",children:u.description}),a.jsx("div",{className:"component-card-readmore",children:a.jsx("span",{children:"View More"})})]},p))}),a.jsxs("div",{className:"components-cta",children:[a.jsxs("h2",{children:["Are you a commons infrastructure provider?",a.jsx("br",{}),"Reach out to become a contributor."]}),a.jsxs("div",{className:"components-cta-buttons",children:[a.jsx("button",{className:"btn-ghost-small",onClick:e,children:a.jsx("strong",{children:"See the Deck"})}),a.jsx("button",{className:"btn-primary-small",children:"Apply"})]})]})]})]})},qf=()=>a.jsx("section",{id:"historic-moment",className:"convergence-section",children:a.jsxs("div",{className:"convergence-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"Historic Moment"}),a.jsx("h2",{children:"A Planetary Convergence"}),a.jsx("p",{className:"lead-text",children:"For the first time in history, the conditions necessary for global coordination are in place"})]}),a.jsxs("div",{className:"convergence-grid",children:[a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-microchip"}),a.jsx("h3",{children:"Technological"}),a.jsx("p",{children:"Distributed ledgers, AI, and digital collaboration tools enable decentralized intelligence"})]}),a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-balance-scale"}),a.jsx("h3",{children:"Legal"}),a.jsx("p",{children:"Cooperatives and new models like innovative Trusts and DAOs allow shared ownership and stewardship"})]}),a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-people-group"}),a.jsx("h3",{children:"Cultural"}),a.jsx("p",{children:"A growing regenerative ethos, evolving consciousness and systemic thinking create desire and readiness for collective unity"})]})]}),a.jsx("div",{className:"convergence-cta",children:a.jsx("p",{className:"convergence-statement",children:"This convergence opens a window of possibility to design the global architecture of a regenerative civilization"})})]})}),Kf=()=>{const[e,t]=R.useState(0);R.useEffect(()=>{const r=()=>{const o=document.querySelectorAll(".roadmap-phase");if(!o.length)return;const i=window.innerHeight/2;let s=0,l=1/0;o.forEach((c,u)=>{const p=c.getBoundingClientRect(),h=p.top+p.height/2,g=Math.abs(h-i);g<l&&(l=g,s=u)}),t(s)};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>window.removeEventListener("scroll",r)},[]);const n=[{phase:"Phase 1",title:"Foundational Infrastructure",timeline:"12 Months",budget:"€1,000,000",description:"Establish the core infrastructure that enables the commons-based economy to function",deliverables:["First stage activation of the Gaia Ecosystem","Launch of first Commons Trust and Foundation Stewardship","Activation of Gaia Commons Governance","Development of OPAL and PASEO frameworks","First CreActive Design Lab convened","GaiaOS technology multi-stakeholder coherent development"],kpis:"≥10 organizational partners, ≥1 bioregional pilot, ≥50 contributors engaged"},{phase:"Phase 2",title:"Ecosystem Activation",timeline:"Years 2-3",budget:"TBD",description:"Pilot the infrastructure, refine through real-world learning, and initiate Seed Commons Projects",deliverables:["Launch pilot projects across key domains","Implement capacity-building programs","Establish adaptive feedback loops","Expand to multiple bioregions","Develop regenerative finance mechanisms"],kpis:"Tested, refined, and interconnected infrastructure supporting cross-sector collaboration"},{phase:"Phase 3",title:"Ecosystem Maturation",timeline:"Year 4+",budget:"Self-Sustaining",description:"Achieve distributed governance, regenerative financial systems, and global self-sufficiency",deliverables:["Adaptive governance & real-time learning","Mutual credit & asset-backed currencies","Internal circular economies","Autonomous funding loops","Global federation of commons"],kpis:"A self-evolving planetary economy—decentralized, intelligent, and regenerative by design"}];return a.jsx("section",{id:"roadmap",className:"roadmap-section",children:a.jsxs("div",{className:"roadmap-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"Implementation"}),a.jsx("h2",{children:"The Path Forward"}),a.jsx("p",{className:"section-subtitle",children:"A phased approach to building planetary-scale regenerative infrastructure"})]}),a.jsx("div",{className:"roadmap-tabs",children:n.map((r,o)=>a.jsxs("button",{className:`roadmap-tab ${o===e?"active":""}`,onClick:()=>{t(o);const i=document.getElementById(`phase-${o}`);i&&i.scrollIntoView({behavior:"smooth",block:"center"})},children:[a.jsx("span",{className:"roadmap-tab-phase",children:r.phase}),a.jsx("span",{className:"roadmap-tab-title",children:r.title})]},r.phase))}),a.jsx("div",{className:"roadmap-timeline",children:n.map((r,o)=>a.jsxs("div",{id:`phase-${o}`,className:`roadmap-phase ${o===e?"active":"inactive"}`,onClick:()=>t(o),children:[a.jsxs("div",{className:"phase-marker",children:[a.jsx("div",{className:"phase-number",children:o+1}),a.jsx("div",{className:"phase-line"})]}),a.jsxs("div",{className:"phase-content",children:[a.jsxs("div",{className:"phase-header",children:[a.jsx("h3",{children:r.title}),a.jsxs("div",{className:"phase-meta",children:[a.jsxs("span",{className:"phase-timeline",children:[a.jsx("i",{className:"fas fa-clock"})," ",r.timeline]}),a.jsxs("span",{className:"phase-budget",children:[a.jsx("i",{className:"fas fa-coins"})," ",r.budget]})]})]}),a.jsx("p",{className:"phase-description",children:r.description}),a.jsxs("div",{className:"phase-deliverables",children:[a.jsx("h4",{children:"Key Deliverables:"}),a.jsx("ul",{children:r.deliverables.map((i,s)=>a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-check"}),i]},s))})]}),a.jsxs("div",{className:"phase-kpis",children:[a.jsx("strong",{children:"Success Indicators:"})," ",r.kpis]})]})]},o))}),a.jsx("div",{className:"roadmap-plan",children:a.jsxs("div",{className:"roadmap-plan-card",children:[a.jsxs("div",{className:"roadmap-plan-doc",children:[a.jsx("div",{className:"roadmap-plan-doc-icon",children:a.jsx("i",{className:"fas fa-file-alt"})}),a.jsxs("div",{children:[a.jsx("h3",{children:"Read the full plan"}),a.jsx("p",{children:"Dive into the detailed implementation plan outlining phases, governance structures, and next-step priorities for the Gaia Ecosystem."})]})]}),a.jsxs("a",{href:"https://globalrenaissance.notion.site/the-gaia-ecosystem?source=copy_link",className:"roadmap-plan-button",target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-external-link-alt"}),a.jsx("span",{children:"Open the plan"})]})]})})]})})},Or=({version:e="v1"})=>{const t=[{name:"Gaia Ecosystem",role:"Planetary Commons Architecture",bio:"The Gaia Ecosystem is the planetary-scale commons architecture that provides the connective tissue for a regenerative civilization. It weaves people, projects, and places into a coherent whole by offering shared legal, financial, cultural, and technological infrastructure that honors the uniqueness of each context. Rather than a single organization, it is a living field of agreements, protocols, and relational patterns that enable coordination without centralization. Through trusts, networks, and digital tools, the Gaia Ecosystem supports communities in governing shared resources, circulating value, and learning together over time."},{name:"Oliver Clarity",role:"Core Team - Regenerative Systems Design Specialist",bio:`Oliver Clarity is a systems architect, builder, and speaker dedicated to designing the foundational infrastructure for humanity's transition toward a regenerative, commons-based world. Combining training from his bachelor's in Organizational Psychology from IE University in Spain with 8 years of hands-on experience across entrepreneurship, consulting, and systems design, he develops pragmatic solutions at the intersection of individual transformation and large-scale societal change.
 
 At the heart of Oliver's work is an Open Earth—a world where openness, collaboration, and shared-innovation form the foundation of a thriving global community. He specializes in designing incentive-based, peer-to-peer systems that self-perpetuate and scale. His journey includes pioneering the Project Helix initiative with six-figure philanthropic R&D funding, co-founding the Rise Movement for consciousness-raising events and new paradigm training, and facilitating regenerative community formation in Bali.
 
 Through supporting and founding visionary projects worldwide, Oliver identified common patterns of need and encountered the missing infrastructure required for these initiatives to succeed. This led to the creation of the Open Systems Foundation (OSF), a philanthropic organization designing solutions to these shared challenges, now united with aligned partners to form the Gaia Ecosystem and build the missing infrastructure together. Oliver believes that human potential, supported by the right systems, will carry us together toward a thriving regenerative world.`,photo:uf,websites:["https://www.oliverclarity.co","https://youtu.be/5kdQesH3dK0?si=XsBXKandVaQUm9FU"],linkedin:"https://www.linkedin.com/in/oliverclarity/"},{name:"Silvana Emilia",role:"Core Team - Commons Governance Specialist",bio:`Silvana Emilia Raveane is a strategist and systems economist with over a decade of entrepreneurial and consulting experience across regions and sectors—including health tech and construction in Europe and West Africa, post‑capitalistic philanthropy, and organizational development. She has built and led companies in emerging markets and supported organizations through transitions requiring clarity, coherence, and multi‑stakeholder coordination in environments of uncertainty.
 
 Educated in International Affairs at the University of St. Gallen and in International Economics at the Graduate Institute in Geneva, Silvana integrates analytical rigor with intuitive insight and a heart‑centered approach. Her work bridges disciplines (economics, governance, business, law, and political science) and cultural contexts, enabling her to translate complexity and foster trust, understanding, and collaboration.
 
 Her expertise as a Strategy Council Steward for Gaia Commons includes governance design, systems thinking, regenerative financial and economic modeling, and value‑flow architecture. She is dedicated to building the economic and governance architectures necessary for regenerative, commons‑based civilization—structures that enable a planetary commons to function as a coherent whole.
 
 Silvana is driven by the conviction that humanity is part of a single, interdependent living system. She brings a grounded, relational, and integrative presence to initiatives aligned with planetary wellbeing—supporting the emergence of a world that thrives as One.`,photo:df,linkedin:"https://www.linkedin.com/in/raveane/"},{name:"Rory Tews",role:"Core Team - Commons Finance Specialist",bio:`Rory Tews is a systems architect and impact finance innovator dedicated to designing the foundational infrastructure for humanity's transition toward regenerative, commons-based futures. Combining a PhD in Sociology with over 15 years of experience in impact entrepreneurship and finance, he develops pragmatic solutions at the intersection of technology, investment, and systems transformation.
 
 Rory pioneered the Impact-Linked Finance approach, structuring dozens of individual transactions and launching capitalised funds in off-grid clean energy and gender-inclusive fintech. As the former Head of Research & Development at Roots of Impact and Head of Strategic Development at Proof, he has built expertise in structuring innovative financial instruments, impact management and data interoperability for systemic investing.
 
 His work spans qualitative impact data at scale, bioregional financial structuring, and collective intelligence infrastructure—most recently through his work towards establishing the Gaia Commons and GaiaOS. As lead author of the CSP/MIT Investor's Guide to Systemic Investing and advisor on consensus-building processes for impact data standards, Rory bridges technical innovation with the deeper questions of how institutions embed values and how financial architecture can enable collective stewardship.
 
 He is driven by the conviction that the next two decades require not incremental optimization but a fundamental rewiring of how humans coordinate resources and relate to living systems.`,photo:mf,websites:["https://www.cspglobal.org/research/publications/investors-guide-systemic-investing"],linkedin:"https://www.linkedin.com/in/rory-tews/"},{name:"Kara Stonehouse",role:"Meshwork Steward",bio:`Kara is an Evolutionary Leader, meshworker with The Hague Center for Global Governance, Innovation and Emergence and founder of Aha! Graphic Facilitation. She has extensive experience facilitating for high level government and non-profit clients around the world in strategy, sustainable design and systems change.

She was then the initiator, fundraiser and lead facilitator of the Ottawa Energy Collective Impact project from 2016-2019 combining design thinking and sustainability leadership expertise to bring municipal, NGO, Academic and business players together for meaningful collaboration on carbon dioxide reductions.

She is a core contributor to World Unity Week and Peace Weekend massive global convergences. Inspired and awakened by her global journey studying eco-villages, her mission is to co-create new cultural norms and global governance systems in line with life. Kara is often described as ‘magical,’ bringing the power of playfulness and deep spiritual connection for the greatest good of all.`,photo:ff,websites:["www.thehaguecenter.org","www.ahagraphic.com"],linkedin:"https://www.linkedin.com/in/karastonehouse/"},{name:"Steward 5",role:"Design & Narrative Steward",bio:"This placeholder profile represents a design and narrative steward who cares for how the Gaia Ecosystem is seen, felt, and understood. A fully developed bio could describe how they weave visual identity, language, and storytelling into a coherent field that feels both visionary and grounded. It can highlight their work on presentations, websites, gatherings, and learning materials that invite people into the architecture in accessible ways. The text may also share how they collaborate with artists, writers, and facilitators to reflect many cultural perspectives, and how narrative strategy helps align the inner felt sense of the ecosystem with its outer expression in the world.",photo:pf},{name:"Daphne Laan",role:"Ecosystem Orchestration and Finance",bio:`Daphne Laan is a Founding Partner of Planetir, an AI-native, steward-led ecosystem platform connecting people, knowledge, capital and opportunities for planetary action. She is a heart-led visionary who makes things happen at the intersection of business, technology, creativity and impact.
 
 Daphne is also Co-Founder of The Board Whisperers, guiding founders, CEOs and boards through transformation with clarity, courage, and intuitive intelligence. She works from House of Wonder, her forest-based business hub and art space, turning stories into global movements. Through House of Wonder, she helped launch the documentary DOWN to EARTH into a worldwide educational movement.
 
 After pioneering in solar, telco and media, as Head of Technology, Dealmaking & Ecosystem Development at Google, Daphne explored what happens when you follow your heart, discovering it opens doors unexpectedly.
 
 Daphne’s mission is to make the unthinkable possible by creating freedom in thinking, doing and feeling. She speaks internationally on regenerative leadership, AI and tech for good, ecosystem collaboration, intuition as intelligence and the power of collective imagination - inviting audiences to see simplicity in complexity and to co-create the future together.`,photo:hf,websites:["https://www.planetir.org/welcome","https://www.theboardwhisperers.com/en/","https://www.houseofwonder.nl/","https://downtoearthfilm.com/"],linkedin:"https://www.linkedin.com/in/daphnelaan/"},{name:"Chad Lefevre",role:"Design Strategy & Cultural Transformation",bio:`Chad Lefevre is an international Design Thinker, business philosopher, strategist, and speaker with twenty years of executive experience successfully designing business strategy and leading cultural transformation initiatives from start-ups to Fortune 100 companies. His clients have included Coca-Cola, Shell, TELUS, Sony Music Latin, and United Way, and he has co-produced events such as the Sundance Thought Leader Summit and SANG—featuring global thinkers including Tony Robbins, Peter Diamandis, and Peter Guber.

At the heart of Chad's work is Liberation—focusing on what becomes possible when human beings are liberated, aligned, and empowered to overcome limiting perceptions and beliefs. He specializes in combining neuroscience, depth psychology, and ontology to unlock profound performance and creative potential.

Chad is Founder of The Most Important Conversations (TMIC), a groundbreaking transformational community serving what some call "healthy normals" seeking deeper growth. Previously, he founded NeuroBe Inc., a neuroscience-informed consulting firm, and co-founded Ncite Neuromedia, pioneering "transformational gaming" for leadership development.

As an avid researcher in neuropsychology, perception, creativity, and ontology, Chad integrates insights from game theory, complexity science, and systems thinking to architect transformative solutions that liberate human potential and reshape organizational culture from the inside out.`,photo:gf,websites:["https://tmicglobal.com/","https://chadlefevre.com/"],linkedin:"https://www.linkedin.com/in/chadlefevre/"},{name:"Ruben Daniels",role:"Digital Sovereignty & Organization Modelling",bio:`Ruben Daniels is a serial entrepreneur, systems thinker, and technologist dedicated to building digital infrastructure that serves human sovereignty and planetary regeneration. Beginning his career as a software engineer with studies at TU Delft, he spent over two decades founding and scaling technology ventures.

Ruben co-founded Cloud9 IDE, the first cloud-based integrated development environment, which was acquired by Amazon Web Services in an eight-figure exit. After leading the product at AWS, he turned his focus toward digital sovereignty—researching new economics, mutual credit systems, self-governing organization design, and scalable regenerative agriculture through Polis Research.

This work led to founding Memri, building infrastructure for data ownership that enables people to control their data and trust their AI. Most recently, Ruben founded Allelo, a steward-owned organization setting the prerequisites for cooperation to outcompete competition. Through Allelo, he is launching the NAO (Network Adaptive Organism)—a decentralized organizational model creating trust-based digital infrastructure where users own their data, relationships, and online interactions. Built on local-first technology and relationship-based trust networks, NAOs represent an alternative to extractive internet platforms by enabling authentic digital communities grounded in real trust.

Ruben is driven by the conviction that the right digital infrastructure can unlock humanity's capacity to coordinate, cooperate, and regenerate at scale.`,photo:vf,linkedin:"https://www.linkedin.com/in/javruben/"},{name:"Andrew Hasse",role:"Media and Storytelling Expert",bio:`Andrew Hasse is a filmmaker and media producer with over 30 years of experience bringing stories of transformation to screen. Trained at NYU Film School, he has worked across music videos, advertising, and independent feature films in New York and Los Angeles.
 
 Andrew's work increasingly focuses on regenerative and ecological themes. He directed and produced "Edible City", a feature-length documentary on local food systems distributed internationally by Filmbuff, and "Being 97", a short documentary distributed by The Atlantic with over 5.5 million views. He has collaborated extensively with permaculture and regenerative organizations on educational, promotional, and fundraising content.
 
 Born and raised in Berkeley, California, Andrew now focuses on Evolutionary Media and Regenerative Systems Design—exploring how storytelling can serve as infrastructure for visioneering humanity's flourishing future.`,photo:yf,websites:["https://vimeo.com/94672054","https://www.youtube.com/watch?v=qX6NztnPU-4","https://bit.ly/regenfilm"]},{name:"Leon Seefeld",role:"Bioregional Finance & Systems Strategy",bio:`Leon Seefeld is a systems strategist and bioregional finance expert dedicated to redesigning financial architecture in service of planetary regeneration. He leads Strategy to Operations at Dark Matter Labs' Capital Systems division, coordinating across the lab's project portfolio while thematically driving Bioregional Finance initiatives.

Leon brings years of experience in social innovation and sustainability consulting, including leading his own consultancy firm focused on regenerative business model innovation and advising organizations on B Corp certification. He has worked on large-scale landscape restoration projects, weaving multi-stakeholder processes and social labs to catalyze systemic change on the ground.

He co-authored Bioregional Financing Facilities: Reimagining Finance to Regenerate Our Planet, which proposes a new layer in global financial architecture to drive decentralization of financial resource governance and enable the transition to regenerative economies at the bioregional scale. The work addresses a critical insight: closing the "nature finance gap" alone is insufficient—where resources flow, how financing is structured, and who makes decisions matters as much as the quantum of capital.

Leon holds a Bachelor's degree in International Business Management and a Master's in Strategic Leadership towards Sustainability. He is passionate about systemic interventions that achieve not merely what is "better" than the status quo, but what is necessary to enable ten billion people to live well within planetary boundaries.`,photo:xf,linkedin:"https://www.linkedin.com/in/leon-seefeld/",websites:["https://darkmatterlabs.org/feed/bioregional-financing-facilities"]},{name:"Steward 11",role:"Operations & Delivery",bio:"This placeholder profile stands in for an operations steward who keeps the day-to-day functioning of the ecosystem flowing smoothly. A future version might describe how they coordinate teams, manage timelines, and ensure that complex multi-stakeholder projects land in reality without burning people out. It can mention their background in project management, facilitation, and organizational development, and how they design processes that are both robust and flexible. The bio can also highlight how operations stewardship is deeply relational, involving constant listening, negotiation, and gentle course-correction as needs shift and new opportunities arise.",photo:wf},{name:"Steward 12",role:"Advisory & Elders",bio:"This placeholder profile is for advisors and elders who bring long-term perspective and deep wisdom to the Gaia Ecosystem. A more complete narrative could share how they help hold ethical questions, sense into generational dynamics, and remind the ecosystem of its original intention when pressures arise. It can describe the diverse backgrounds they come from, such as indigenous leadership, spiritual traditions, public service, or decades of work in social movements. The text may also explore how advisory roles are designed not as distant oversight, but as relational, reciprocal engagements where elders are also learning from emerging practice at the edges of the ecosystem.",photo:bf},{name:"Franz Josef Allmayer",role:"Digital Governance & Bioregional Advisor",bio:`Franz Josef Allmayer is a systems designer and entrepreneur working at the convergence of digital infrastructure, collaborative governance, and collective intelligence. With a Master's from the London School of Economics in Health Policy Planning and Financing, graduate training in Development Communications from Harvard, and a background in Biomedical Engineering, he brings interdisciplinary depth to designing systems that help societies navigate complexity with coherence and purpose.
 
 Franz founded Integrity.Earth in 2018, an independent think-and-do tank in Liechtenstein focused on whole-systems approaches to regenerative development. He co-founded digihub.li, Liechtenstein's European Digital Innovation Hub specializing in open-source distributed governance and cooperative economic protocols, and was a co-founder of Hypha and SEEDS, pioneering decentralized tools for regenerative economic systems. He currently serves as a board director of IXO, advancing high-integrity digital infrastructure for governing, financing, and verifying impacts at scale.
 
 His work spans bioregional funding initiatives and collaboration with governments across Europe, designing lawful, digital, and social frameworks where diverse actors can align capabilities, share knowledge, and act with clarity toward long-term wellbeing.
 
 Guided by openness and integrity, Franz designs infrastructures that strengthen collective capability and support the emergence of resilient, life-supporting systems.`,photo:kf,websites:["https://digihub.li/en/","https://www.ixo.world/","https://www.integrity.earth/"],linkedin:"https://www.linkedin.com/in/franz-josef-allmayer/"},{name:"Steward 14",role:"Steward",bio:"This placeholder profile is for a steward supporting learning journeys and capacity building within the ecosystem. A fuller narrative can share how they design programs, trainings, and reflective spaces that help people embody commons-based ways of working over time.",photo:jf},{name:"Steward 15",role:"Steward",bio:"This placeholder profile is for a steward tending relationships with funders, partners, and aligned initiatives. In a future version, this card can describe how they bridge regenerative finance, philanthropy, and project needs in a coherent, transparent way.",photo:Sf},{name:"Steward 16",role:"Steward",bio:"This placeholder profile is for a steward working on digital infrastructure and information flows. A complete profile can share how they support the evolution of tools, platforms, and protocols that make it easier for many actors to coordinate in a commons-aligned way.",photo:Nf},{name:"Steward 17",role:"Steward",bio:"This placeholder profile is for a steward focusing on deep cultural interventions—story, ritual, and meaning-making that keep the ecosystem aligned with its core purpose. Future text can describe how they host spaces that help the work stay grounded, humble, and connected to life.",photo:Cf},{name:"Steward 18",role:"Steward",bio:"This placeholder profile is for a steward who connects the Gaia Ecosystem to broader movements for planetary transformation. A fuller narrative can outline how they build bridges with networks, institutions, and communities who are experimenting with new ways of living, working, and governing together.",photo:Ef}],[n,r]=R.useState(null),o=Array.from({length:12}),i=e==="v2"||e==="v3"||e==="v4",s=Array.from({length:12},(N,I)=>7+I),l=s.length,c=e==="v4",u=e==="v3",p=e==="v2",h=u||c,[g,w]=R.useState(rt),x=R.useMemo(()=>Mf(g),[g]),[b,F]=R.useState(0),[m,d]=R.useState(!1),[f,v]=R.useState(!1),k=R.useRef(null),C=R.useRef(null),E=R.useRef(0),z=R.useRef([]),$=R.useRef([]),_=R.useRef(null);R.useEffect(()=>{if(!c)return;const N=document.getElementById("team");N&&(_.current=N);const I=()=>{const B=C.current;if(!B)return;const H=B.getBoundingClientRect();w(ae=>{const Le={width:Math.max(H.width,1),height:Math.max(H.height,1)};return Math.abs(ae.width-Le.width)<1&&Math.abs(ae.height-Le.height)<1?ae:Le})};I();let P;typeof ResizeObserver<"u"&&C.current&&(P=new ResizeObserver(()=>I()),P.observe(C.current));const U=()=>I();return window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U),P&&P.disconnect()}},[c]);const[ye,Pt]=R.useState(()=>({orbitAssignments:s,innerProfileIndex:5,currentSlot:11})),[Ie,Cn]=R.useState(null),[Gt,Yt]=R.useState(!1),Qt=n!==null||m;R.useEffect(()=>{if(!(h||p)||n!==null||m)return;const I=setInterval(()=>{Yt(!0)},4e3);return()=>{clearInterval(I)}},[h,p,n,m]),R.useEffect(()=>{if(!(h||p)||Ie==null)return;const N=setTimeout(()=>Cn(null),600);return()=>clearTimeout(N)},[h,p,Ie]),R.useEffect(()=>{if(!h||n!==null||m)return;let N;const I=1e5;let P=typeof performance<"u"?performance.now():Date.now();const U=B=>{const H=B-P;P=B;const ae=H/I*360;E.current=(E.current+ae)%360,F(E.current),N=requestAnimationFrame(U)};return N=requestAnimationFrame(U),()=>{N&&cancelAnimationFrame(N)}},[h,n,m]),R.useEffect(()=>{if(!c)return;let N;(!z.current||z.current.length!==l)&&(z.current=Ff(l));const I=()=>{const P=z.current,U=x&&x.width&&x.height?x:Df;if(!P){N=requestAnimationFrame(I);return}let B=0;if(_.current){const H=_.current.getBoundingClientRect(),ae=window.innerHeight,Le=H.top+H.height/2,gr=ae/2,qa=Le-gr,vr=ae*.6;B=1-qa/vr}n!==null&&(B=1),Uf(P,U,B),P.forEach((H,ae)=>{if(!$.current[ae])return;const Le=$.current[ae];Le.style.transform=`translate(calc(-50% + ${H.x}px), calc(-50% + ${H.y}px))`}),N=requestAnimationFrame(I)};return N=requestAnimationFrame(I),()=>{N&&cancelAnimationFrame(N)}},[c,n,m,l,x]),R.useEffect(()=>{if(!(h||p))return;const N=k.current;N&&(m?N.pause():Gt&&!f&&N.play().catch(()=>{}))},[h,p,m,Gt,f]);const j=()=>{(h||p)&&(v(!0),Pt(N=>{const{orbitAssignments:I,innerProfileIndex:P,currentSlot:U}=N,B=I.length||1;let H;if(p)do H=Math.floor(Math.random()*B);while(H===U&&B>1);else H=(U+1)%B;const ae=[...I],Le=ae[H];return ae[H]=P,Cn(H),{orbitAssignments:ae,innerProfileIndex:Le,currentSlot:H}}),setTimeout(()=>{Yt(!1),v(!1)},150))},T=h||p?ye.orbitAssignments:s,L=h||p?ye.innerProfileIndex:5,M=c?il(x):null,V=N=>r(N),Tt=()=>r(null),re=n!==null?t[n]:null,qt=!!(re&&re.linkedin),Se=re&&Array.isArray(re.websites)?re.websites.find(N=>N.toLowerCase().includes("planetir")):null,It=!!Se;return a.jsxs("section",{id:"team",className:`team-section team-section--${e}`,children:[n!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:Tt,children:a.jsxs("div",{className:"team-profile-modal",onClick:N=>N.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:Tt,"aria-label":"Close profile",children:"×"}),a.jsxs("div",{className:"team-profile-layout",children:[a.jsxs("div",{className:"team-profile-photo",children:[a.jsx("div",{className:"team-profile-avatar",children:t[n].photo||n===0?a.jsx("img",{src:t[n].photo||(n===0?si:""),alt:t[n].name,className:"team-profile-avatar-img"}):a.jsx("i",{className:"fas fa-user-circle"})}),a.jsxs("div",{className:"team-profile-links",children:[a.jsxs("button",{type:"button",className:`team-profile-link-item ${qt?"is-clickable":""}`,onClick:()=>{if(!qt||!re||!re.linkedin)return;const N=re.linkedin.startsWith("http")?re.linkedin:`https://${re.linkedin}`;window.open(N,"_blank","noreferrer")},children:[a.jsx("i",{className:"fab fa-linkedin-in"}),a.jsx("span",{children:"LinkedIn"})]}),a.jsxs("button",{type:"button",className:`team-profile-link-item ${It?"is-clickable":""}`,onClick:()=>{if(!It||!Se)return;const N=Se.startsWith("http")?Se:`https://${Se}`;window.open(N,"_blank","noreferrer")},children:[a.jsx("img",{src:Pf,alt:"Planetir",className:"team-profile-plantir-icon"}),a.jsx("span",{children:"Planetir"})]})]}),a.jsxs("div",{className:"team-profile-websites",children:[a.jsx("div",{className:"team-profile-websites-label",children:"Websites"}),Array.isArray(t[n].websites)&&t[n].websites.length>0&&a.jsx("ul",{className:"team-profile-websites-list",children:t[n].websites.map(N=>{const I=t[n];let P=N.replace(/^https?:\/\//,"");return I.name==="Oliver Clarity"?N==="https://youtu.be/5kdQesH3dK0?si=XsBXKandVaQUm9FU"&&(P="Open Earth Introduction Video"):I.name==="Andrew Hasse"?N==="https://vimeo.com/94672054"?P="Edible City - Trailer":N==="https://www.youtube.com/watch?v=qX6NztnPU-4"?P="Being 97 - Documentary":N==="https://bit.ly/regenfilm"&&(P="Vimeo"):I.name==="Rory Tews"?N==="https://www.cspglobal.org/research/publications/investors-guide-systemic-investing"&&(P="Investor's Guide to Systemic Investing"):I.name==="Leon Seefeld"&&N==="https://darkmatterlabs.org/feed/bioregional-financing-facilities"&&(P="Bioregional Financing Facilities Publication"),a.jsx("li",{children:a.jsxs("a",{href:N.startsWith("http")?N:`https://${N}`,target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-globe website-link-icon","aria-hidden":"true"}),a.jsx("span",{children:P})]})},N)})})]})]}),a.jsxs("div",{className:"team-profile-content",children:[a.jsx("h3",{className:"team-profile-name",children:t[n].name}),a.jsx("p",{className:"team-profile-role",children:t[n].role}),(()=>{const N=String(t[n].bio||"");return(N.includes(`

`)?N.split(`

`):N.split(`
`).filter(P=>P.trim().length>0)).map((P,U)=>a.jsx("p",{className:"team-profile-bio",children:P},U))})()]})]})]})}),a.jsxs("div",{className:"team-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-people-group"}),"Team & Advisors"]}),a.jsxs("div",{className:"team-header-row",children:[a.jsx("h2",{children:"The Ecosystem Stewards"}),a.jsx("div",{className:"team-version-pill",children:e})]}),a.jsx("p",{className:"section-subtitle",children:"A growing constellation of stewards, practitioners, and advisors holding the architecture of the Gaia Ecosystem."})]}),a.jsx("div",{className:"team-fruit-wrapper",children:i?a.jsxs("div",{className:`team-fruit team-fruit-v2 ${c?"team-fruit--cloud":""} ${p?"team-fruit--v2-static":""}`,children:[a.jsxs("div",{className:"team-nucleus",children:[a.jsx("div",{className:"team-node center earth",style:c&&M?{width:`${M}px`,height:`${M}px`}:void 0,onClick:()=>V(0),children:a.jsx("img",{src:si,alt:"Gaia Ecosystem",className:"team-node-photo"})}),o.slice(0,6).map((N,I)=>{const U=I===3;let B;U?h||p?B=L:B=5:I===4?B=4:B=I+1;const H=t[B],ae=H==null?void 0:H.photo;let Le={};if(c&&x&&x.width<Oe.tightPackingBreakpointPx&&M){const gr=M,vr=[-90,-30,30,90,150,210][I]*(Math.PI/180),wu=Math.cos(vr)*gr;Le={top:`calc(50% + ${Math.sin(vr)*gr}px)`,left:`calc(50% + ${wu}px)`,transform:"translate(-50%, -50%)"}}return a.jsxs("div",{className:`team-node node-${I+1} ${(h||p)&&U&&(Gt||Ie!==null)?"is-swapping":""}`,style:{...c&&M?{width:`${M}px`,height:`${M}px`}:void 0,...Le},onClick:()=>V(B),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[ae?a.jsx("img",{src:H.photo,alt:H.name,className:"team-node-photo"}):a.jsx("i",{className:"fas fa-user-circle"}),(h||p)&&U&&Gt&&a.jsx("div",{className:`expert-needed-overlay ${f?"is-fading-out":""}`,children:a.jsx("video",{ref:k,className:"expert-needed-video",src:zf,autoPlay:!0,muted:!0,playsInline:!0,onEnded:j})})]},I)})]}),p?a.jsxs(a.Fragment,{children:[a.jsx("h3",{className:"team-v2-grid-title",children:"Advising Stewards"}),a.jsx("div",{className:"team-v2-grid-container",children:T.map((N,I)=>{const P=t[N],U=P==null?void 0:P.photo,B=Ie===I;return a.jsx("div",{className:`team-node team-v2-static-node ${B?"is-swapping":""}`,onClick:()=>V(N),children:U?a.jsx("img",{src:P.photo,alt:P.name,className:"team-node-photo"}):a.jsx("i",{className:"fas fa-user-circle"})},`${N}-${I}`)})})]}):c?a.jsx("div",{ref:C,className:`team-cloud-field ${Qt?"is-paused":""}`,children:T.map((N,I)=>{const P=t[N],U=P==null?void 0:P.photo,B=il(x);return a.jsx("div",{ref:H=>$.current[I]=H,className:"team-cloud-node-wrapper",style:{position:"absolute",top:"50%",left:"50%",width:0,height:0,willChange:"transform",pointerEvents:"none"},children:a.jsx("div",{className:`team-cloud-node ${h&&Ie===I?"is-swapping":""}`,style:{top:0,left:0,width:`${B}px`,height:`${B}px`,pointerEvents:"auto"},onClick:()=>V(N),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:a.jsx("div",{className:"team-cloud-node-inner",children:U?a.jsx("img",{src:P.photo,alt:P.name,className:"team-cloud-node-img"}):a.jsx("i",{className:"fas fa-user-circle"})})})},`${N}-${I}-wrapper`)})}):a.jsx("div",{className:`team-orbit-ring ${Qt?"is-paused":""}`,style:u?{transform:`rotate(${b}deg)`}:void 0,children:T.map((N,I)=>{const P=t[N],U=P==null?void 0:P.photo;return a.jsx("div",{className:`team-orbit-node orbit-pos-${I} ${h&&Ie===I?"is-swapping":""}`,onClick:()=>V(N),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:a.jsx("div",{className:"team-orbit-node-inner",style:u?{transform:`rotate(${-b}deg)`}:void 0,children:U?a.jsx("img",{src:P.photo,alt:P.name,className:"team-orbit-node-img"}):a.jsx("i",{className:"fas fa-user-circle"})})},N)})})]}):a.jsxs("div",{className:"team-fruit",children:[a.jsx("div",{className:"team-node center earth",onClick:()=>V(0),children:a.jsx("img",{src:si,alt:"Gaia Ecosystem",className:"team-node-photo"})}),o.map((N,I)=>{const P=I+1===12?13:I+1,U=t[P],B=U==null?void 0:U.photo;return a.jsx("div",{className:`team-node node-${I+1}`,onClick:()=>V(P),children:B?a.jsx("img",{src:U.photo,alt:U.name,className:"team-node-photo"}):a.jsx("i",{className:"fas fa-user-circle"})},I)})]})}),(h||p)&&a.jsxs("div",{className:"team-v3-switching-copy",children:[h&&a.jsx("h3",{className:"team-v3-switching-heading",children:"Switching Experts"}),a.jsx("p",{className:`team-v3-switching-subtitle ${p?"team-v2-switching-subtitle":""}`,children:"When specific expertise is needed to build elements of the Gaia Ecosystem, expert stewards switch in to the core circle to provide their skills and advance the mission"})]})]})]})},Xf=()=>{const e=[{name:"digihub.li",role:"Liechtenstein's European Digital Innovation Hub",tagline:"",image:Tf,description:`digihub.li is Liechtenstein's European Digital Innovation Hub (EDIH), co-funded by the European Union and the Government of Liechtenstein, and part of the pan-European EDIH network supporting digital transformation across the continent.

Operating as a Liechtenstein Venture Cooperative, digihub.li specializes in establishing digital ecosystems for co-creation and collaboration, building on Liechtenstein's pioneering blockchain legislation. The hub supports SMEs and public institutions in developing responsible digital systems, shared data architectures, and collective intelligence tools that enable coordinated action across scales.

Its four core services include an innovation ecosystem for sustainable business model development, digital skills training, personalized project coaching, and innovation spaces connecting startups, SMEs, and investors.

Guided by its purpose—"to make Liechtenstein a lighthouse for positive digital transformation that connects humans through trust, transparency, and purpose-driven action"—digihub.li creates pathways for communities to align capabilities, share knowledge, and address complex challenges together.`,websites:["https://digihub.li/en"]},{name:"TMIC – The Most Important Conversations",role:"Design and Transformational Experiences",tagline:"Design and Transformational Experiences",image:If,description:`The Most Important Conversations (TMIC) is a transformational organization focused on facilitating the conversations that shape the beliefs needed to support a thriving humanity in harmony with itself and the living world. Founded by Chad Lefevre, TMIC operates as a creativity incubator—convening visionaries, thought leaders, entrepreneurs, artists, healers, and scientists through intentional collaboration to reimagine and co-create systems that serve life.

At its core is a recognition that conversations are how human beings share stories, and stories are how we co-create meaning and socially construct our reality. TMIC's offerings include the Community for ongoing elevation and connection, the Whole Life Architecture program for designing life by intention rather than default, and Business By-Design for entrepreneurs building from their calling. A podcast network features conversations with futurist thought leaders across business, wellness, relationships, creativity, and meaning-making.

TMIC serves as a cornerstone strategic partner for the Gaia Ecosystem, providing design methodology expertise through the DesignShop® transformative collaborative process. This powers the CreActive Design Lab—a comprehensive design and implementation pipeline for successfully launching regenerative infrastructure projects. At this inflection point in human history, TMIC supports the shift from human doing to human creating—engaging in conversations that generate life-regenerative solutions for human thriving by design.`,websites:["https://tmicglobal.com"]},{name:"",role:"Technology Collective",tagline:"Advancing planetary governance through systemic design, deep collaboration and shared purpose.",image:Lf,description:`The Hague Center for Global Governance, Innovation and Emergence is an international collective dedicated to cultivating the conditions for a conscious, interconnected humanity. Working at the intersection of systems thinking, social innovation and inner development, the Center supports organisations, communities and leaders in co-creating solutions that serve the wellbeing of the whole.

Their approach blends rigorous systemic methodologies with relational and intuitive intelligence, recognising that effective governance emerges from coherence across physical, social, energetic and cultural layers. Through practices such as meshworking, field inquiry, meta-weaving and meaning-making, they help diverse stakeholders align around shared purpose, unlock collective insight and design pathways toward regenerative futures.

The Hague Center partners with initiatives across the world—spanning education, community development, planetary governance, gender equity, social entrepreneurship and global convening spaces. Their projects consistently aim to amplify collaboration, build capacity for complexity, and support the emergence of solutions that are both deeply human and systemically sound.

Rooted in The Hague yet globally active, the Center operates as a learning ecosystem committed to evolving the architectures of governance needed for our time. Their work invites groups into higher coherence, deeper alignment and the possibility of creating futures that honour life in all its dimensions.`,websites:["https://www.thehaguecenter.org"]},{name:"Planetir",role:"Learning & Research Institute",tagline:"Holding long-term inquiry and ecosystem sense-making.",image:_f,description:"This placeholder profile is for a learning and research partner that helps the Gaia Ecosystem stay reflective and adaptive over time. A deeper description might explain how they host transdisciplinary research programs, action-learning cohorts, and sense-making circles with practitioners around the world. It can outline the methods they use—such as systems mapping, action research, and developmental evaluation—and how they publish insights as open knowledge commons. The text can also cover how they work alongside bioregional hubs, funders, and communities to track emergent patterns, document what is working, and translate those learnings into practical guidance for others who wish to replicate or adapt the architecture.",websites:["https://www.planetir.org"]},{name:"Dark Matter Labs",role:"Systems Design for Life-Ennobling Economies",tagline:"Systems Design for Life-Ennobling Economies",image:Rf,description:`Dark Matter Labs is a global strategic design and development studio building options for the next economies. With offices across the Netherlands, United Kingdom, Canada, South Korea, and Sweden, they view today's interconnected crises as symptoms of a deeper structural miscoding of our economic systems—physical, structural, and psychological.

Their work explores alternative pathways for organizing society and stewarding shared planetary commons, framing this transformation as a shift toward Life-Ennobling Economies. This requires a radical reframing of our relationship to everything: from technology and money to land and the other-than-human world.

Dark Matter Labs operates through an integrated matrix of Labs, Arcs, and Studios. Labs build technical expertise in areas such as Capital Systems, Property & Beyond, and Societal Decisions. Arcs drive directional goals like Net Zero Cities, Bioregional Economics, and Planetary Civics. Studios—including Civic Tech, Conversational Design, and Foresight & Futuring—provide connective support across projects.

Their proposed structural shifts include moving beyond property, labour, extraction, private contracts, governance, and monetary capital—toward reciprocal relationships with the full web of life, institutions of stewardship, and regenerative care for the diverse capitals that sustain thriving. They are building these pathways step-by-step with a growing ecosystem of unusual allies.`,websites:["https://darkmatterlabs.org"]},{name:"The NAO",role:"Steward-Led Organizational Model & Digital Sovereignty",tagline:"Steward-Led Organizational Model & Digital Sovereignty",image:Of,description:`The NAO (Network Adaptive Organism) is a collection of pioneer technology partners brought together to empower humanity's transition into an era of belonging, collective action, and regeneration. The outcome of this fusion is a Digital Collaboration Fabric that enables organizations to integrate at zero cost, gives users zero switching costs, and lets communities adopt new tools without onboarding barriers or cold-start limitations.

The NAO creates the conditions for seamless, multi-stakeholder collaboration. Through portable communities, groups carry their identities and relationships across platforms; each community retains full sovereignty by owning and controlling its trust-graph, supported by local-first data, trustworthy local AI, and self-sovereign identity.

Across this shared fabric, resources, needs, and gifts dynamically match—enabling collective decision-making, intelligent coordination, and new forms of economic flow. Applications from one group seamlessly connect to other communities, increasing the likelihood of meaningful coordination and accelerating iteration.

By reducing total cost of ownership and enabling the reuse of shared models, tooling, and libraries, the NAO supports a new wave of regenerative systems and cultures. Operating as a self-governing, participatory ecosystem, it invites builders across regenerative and adjacent fields to co-evolve solutions—strengthening bonds within neighborhood-scale and Dunbar-number-scale communities.`,websites:["www.allelo.eco"]},{name:"Placeholder Partner 7",role:"Organizational Transition Partner",tagline:"Supporting organizations to bridge into commons-based work.",description:"This partner profile is a placeholder for an organization that guides others through the journey of transitioning into more regenerative, commons-oriented ways of working. A fuller text here could explain the frameworks, tools, and accompaniment processes they use to support leadership teams, staff, and stakeholders. It can talk about experiments with new ownership models, distributed governance, and surplus allocation, as well as the challenges and breakthroughs encountered along the way. The description may also share how they feed real-world learnings back into the Gaia Ecosystem so that future transitions can happen with more ease, clarity, and support from a growing field of practice."},{name:"Placeholder Partner 8",role:"Movement & Network Alliance",tagline:"Weaving alliances between movements, networks, and initiatives.",description:"This placeholder partner stands for alliances that link together multiple movements, networks, and initiatives working toward regenerative futures. A more detailed narrative might cover how they convene cross-movement dialogues, co-create shared campaigns, and host spaces for strategic coordination across sectors and geographies. It can describe the histories, commitments, and organizing traditions they carry, and how these inform their participation in the Gaia Ecosystem. The profile can also point to specific collaborations, such as shared governance experiments or joint funding strategies, through which multiple movements are learning how to act as one ecosystem while honoring the uniqueness of each lineage and community involved."}],[t,n]=R.useState(null),r=i=>n(i),o=()=>n(null);return a.jsxs("section",{className:"partner-section",children:[t!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:o,children:a.jsxs("div",{className:"team-profile-modal",onClick:i=>i.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:o,"aria-label":"Close partner profile",children:"×"}),(()=>{const i=e[t]||{},s=i.name&&i.name.trim().length>0?i.name:"Partner Organization",l=i.role||"Organizational Ally",c=String(i.description||"").split(`

`).filter(u=>u.trim().length>0);return a.jsxs("div",{className:"team-profile-layout",children:[a.jsxs("div",{className:"team-profile-photo",children:[a.jsx("div",{className:"team-profile-avatar",children:i.image?a.jsx("img",{src:i.image,alt:s,className:`team-profile-avatar-img ${i.name==="Dark Matter Labs"?"team-profile-avatar-img--darkmatter":""}`}):a.jsx("i",{className:"fas fa-user-circle"})}),a.jsxs("div",{className:"team-profile-websites",children:[a.jsx("div",{className:"team-profile-websites-label",children:"Websites"}),Array.isArray(i.websites)&&i.websites.length>0?a.jsx("ul",{className:"team-profile-websites-list",children:i.websites.map(u=>a.jsx("li",{children:a.jsxs("a",{href:u.startsWith("http")?u:`https://${u}`,target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-globe website-link-icon","aria-hidden":"true"}),a.jsx("span",{children:u.replace(/^https?:\/\//,"")})]})},u))}):a.jsx("div",{className:"team-profile-website-placeholder",children:"Website coming soon"})]})]}),a.jsxs("div",{className:"team-profile-content",children:[a.jsx("h3",{className:"team-profile-name",children:s}),a.jsx("p",{className:"team-profile-role",children:l}),i.tagline&&a.jsx("p",{className:"team-profile-bio",children:i.tagline}),c.map((u,p)=>a.jsx("p",{className:"team-profile-bio",children:u},p))]})]})})()]})}),a.jsxs("div",{className:"partner-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-handshake"}),"Partner Organizations"]}),a.jsx("h2",{children:"Organizational Allies"}),a.jsx("p",{className:"section-subtitle",children:"Mission-aligned partners across complementary domains, united in supporting the emergence of regenerative systems and planetary wellbeing."})]}),a.jsx("div",{className:"partner-grid",children:e.map((i,s)=>a.jsxs("button",{className:`partner-card ${i.name==="Dark Matter Labs"?"partner-card--darkmatter":""}`,type:"button",onClick:()=>r(s),children:[a.jsx("div",{className:"partner-card-logo-wrap",children:i.image?a.jsx("img",{src:i.image,alt:i.name||"Partner logo",className:"partner-card-logo-img"}):a.jsx("div",{className:"partner-card-logo-initial",children:a.jsx("span",{children:(i.name||"").charAt(0)})})}),a.jsx("div",{className:"partner-card-readmore",children:a.jsx("span",{children:"View More"})})]},i.name||s))})]})]})},sl=({id:e="networks"})=>a.jsx("section",{id:e,className:"networks-section",children:a.jsxs("div",{className:"networks-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-door-open"}),"Entry Points"]}),a.jsx("h2",{children:"Multiple Pathways to Participate"})]}),a.jsxs("div",{className:"networks-grid",children:[a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-users"})}),a.jsx("h3",{children:"For Innovation Hubs & Researchers"}),a.jsx("p",{children:"Join the Gaia Network and Open Earth Network to onboard, learn, and become peers in the commons ecosystem."}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-heart"})," Ally to study outcomes from commons-based initiatives worldwide"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-graduation-cap"})," Help improve the Gaia Ecosystem through contributing your ongoing discoveries."]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-hands-helping"})," Contribute to bioregional coordination frameworks"]})]}),a.jsx("button",{className:"btn-network",children:"Explore Research Partnership"})]}),a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-hand-holding-heart"})}),a.jsx("h3",{children:"For NGOs & Philanthropists"}),a.jsx("p",{children:"We invite you to collaborate in funding a healthy world"}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-donate"})," Donate to the Foundation now"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-hand-holding-heart"})," Collaborate on broader grants and funding"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-seedling"})," Discover Phase 2 revenue-share investment opportunities"]})]}),a.jsx("button",{className:"btn-network",children:"Explore Funding Collaboration"})]}),a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-building"})}),a.jsx("h3",{children:"For Organizations"}),a.jsx("p",{children:"Contribute infrastructural building blocks to the ecosystem, or sign up for the pilot commons ecosystem."}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-project-diagram"})," Contribute technology infrastructure pieces to GaiaOS"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-leaf"})," Join the waiting list for the pilot commons ecosystem"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-balance-scale"})," Support us now with your talent, expertise and resources"]})]}),a.jsx("button",{className:"btn-network",children:"Get involved as an Organization"})]})]})]})}),Zf=()=>a.jsxs("section",{className:"vision-section",children:[a.jsx("div",{className:"vision-overlay"}),a.jsx("div",{className:"vision-container",children:a.jsxs("div",{className:"vision-content",children:[a.jsx("h2",{children:"The Operating System for a Regenerative Civilization"}),a.jsx("p",{className:"vision-statement",children:"Through this infrastructure, humanity gains the capacity to act as a unified yet diverse organism—learning, adapting, and creating in service of life."}),a.jsxs("div",{className:"vision-quote",children:[a.jsx("div",{className:"vision-quote-avatar",children:a.jsx("div",{className:"vision-quote-avatar-inner",children:a.jsx("img",{src:Jm,alt:"Quote author",className:"vision-quote-avatar-img"})})}),a.jsxs("div",{className:"vision-quote-text",children:[a.jsx("p",{className:"vision-quote-text-main",children:'"You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete."'}),a.jsx("div",{className:"vision-quote-author",children:a.jsx("strong",{children:"- Buckminster Fuller"})})]})]})]})})]}),Jf=()=>{const[e,t]=R.useState(0),n=[{question:"If someone contributes something valuable to the commons—an innovation, methodology, or resource—do they lose ownership and control of it?",answer:"No, and this is crucial. The OPAL licensing framework is designed so contributors maintain attribution and stewardship rights, and can still commercialize their innovations outside the commons. Within the commons, others can build on and improve those innovations, with benefits and potential revenues flowing back to all contributors in proportion to participation. Instead of intellectual property being extracted or locked away, it becomes part of a living pool of shared intelligence that generates more value collectively than it could in isolation."},{question:"What happens when someone joins who claims alignment but acts extractively or doesn’t share regenerative values?",answer:"The architecture is being designed with multiple layers of protection. The PASEO organizational framework creates graduated participation pathways—actors demonstrate alignment over time before gaining deeper access. Governance processes give communities tools for accountability and, when necessary, exclusion. Economically, the system is structured so that genuine collaboration is more beneficial than gaming it, while Commons Trust structures provide legal protection for shared assets. This is not a solved problem, but the ecosystem is intentionally designing for it rather than assuming good faith alone."},{question:"How does the Gaia Ecosystem relate to existing economic systems—is it trying to replace capitalism or build alongside it?",answer:"The Gaia Ecosystem is building a bridge rather than declaring a war. Commons infrastructure is designed to operate alongside existing markets while progressively making extractive models less attractive by offering better coordination and shared value creation. Through PASEO, organizations can participate in both commons-based and conventional activities, with value flows between them made explicit. Products, services, and patterns developed in the commons can generate revenue in traditional markets, with agreed portions returning to support the commons itself. Over time, the practical advantages of this model—not ideology—are what we expect will drive wider adoption."},{question:"How does this become financially self-sufficient rather than dependent on continuous philanthropic support?",answer:"Phase 1 requires philanthropic and catalytic funding because it builds foundational commons infrastructure that markets will not finance on their own. From the outset, however, the architecture bakes in future revenue streams: commons-developed products and services, licensing and revenue-sharing arrangements, regenerative finance instruments, and internal economic activity using commons-aligned currencies and agreements. By Phase 3, the aim is for the ecosystem to generate stable income and direct surplus toward ecological regeneration and community wellbeing, rather than toward private extraction."}],r=o=>{t(i=>i===o?null:o)};return a.jsx("section",{className:"qa-section",children:a.jsxs("div",{className:"qa-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-brain"}),"Q&A"]}),a.jsx("h2",{children:"Questions & Answers for more complex matters"}),a.jsx("p",{className:"section-subtitle",children:"Four questions about participation, protection, economics, and sustainability—answered from a whole-systems perspective."})]}),a.jsx("div",{className:"qa-list",children:n.map((o,i)=>{const s=e===i;return a.jsxs("div",{className:`qa-item ${s?"open":""}`,children:[a.jsxs("button",{type:"button",className:"qa-item-header",onClick:()=>r(i),"aria-expanded":s,children:[a.jsx("span",{className:"qa-question",children:o.question}),a.jsx("span",{className:`qa-toggle-icon ${s?"is-open":""}`,children:a.jsx("i",{className:"fas fa-chevron-down"})})]}),s&&a.jsx("div",{className:"qa-answer",children:a.jsx("p",{children:o.answer})})]},o.question)})})]})})},ep=()=>a.jsx("section",{id:"join-us",className:"cta-section",children:a.jsx("div",{className:"cta-container",children:a.jsxs("div",{className:"cta-content",children:[a.jsx("h2",{children:"Join the Planetary Mission"}),a.jsx("p",{children:"Be part of designing the infrastructure for a thriving, regenerative future. Whether you're an individual, organization, or investor, there's a place for you in the Gaia Ecosystem."}),a.jsxs("div",{className:"cta-buttons",children:[a.jsxs("button",{className:"btn-primary-large",children:[a.jsx("i",{className:"fas fa-rocket"}),"Get Started Today"]}),a.jsxs("button",{className:"btn-secondary-large",children:[a.jsx("i",{className:"fas fa-calendar"}),"Schedule a Call"]})]}),a.jsx("div",{className:"cta-contact",children:a.jsxs("p",{children:["Questions? Reach out to ",a.jsx("a",{href:"mailto:info@opensystems.foundation",children:"info@opensystems.foundation"})]})})]})})}),tp=()=>a.jsx("footer",{className:"footer",children:a.jsxs("div",{className:"footer-container",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"footer-column",children:[a.jsxs("div",{className:"footer-logo",children:[a.jsxs("svg",{width:"50",height:"50",viewBox:"0 0 100 100",children:[a.jsx("circle",{cx:"50",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"3",opacity:"0.8"}),a.jsx("circle",{cx:"50",cy:"36",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"64",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"36",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"64",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"50",r:"10",fill:"currentColor"})]}),a.jsx("span",{children:"Gaia Ecosystem"})]}),a.jsx("p",{children:"Building the commons infrastructure for a regenerative civilization"}),a.jsxs("div",{className:"footer-weco-row",children:[a.jsx("div",{className:"footer-weco",children:a.jsx("div",{className:"footer-weco-circle",children:a.jsx("img",{src:ef,alt:"WeCo logo",className:"footer-weco-breathing"})})}),a.jsx("div",{className:"footer-weco-svg",children:a.jsx("svg",{width:"600",height:"600",viewBox:"0 0 600 600",className:"footer-weco-svg-element","aria-hidden":"true",children:a.jsxs("g",{transform:"translate(300, 300)",children:[a.jsx("circle",{r:"280",fill:"#006633",className:"footer-weco-ring ring-12"}),a.jsx("circle",{r:"255",fill:"#00753a",className:"footer-weco-ring ring-11"}),a.jsx("circle",{r:"230",fill:"#008542",className:"footer-weco-ring ring-10"}),a.jsx("circle",{r:"205",fill:"#15944b",className:"footer-weco-ring ring-9"}),a.jsx("circle",{r:"180",fill:"#2ea356",className:"footer-weco-ring ring-8"}),a.jsx("circle",{r:"155",fill:"#46b262",className:"footer-weco-ring ring-7"}),a.jsx("circle",{r:"130",fill:"#5fc16f",className:"footer-weco-ring ring-6"}),a.jsx("circle",{r:"105",fill:"#78cf7d",className:"footer-weco-ring ring-5"}),a.jsx("circle",{r:"80",fill:"#91dd8c",className:"footer-weco-ring ring-4"}),a.jsx("circle",{r:"55",fill:"#aae99d",className:"footer-weco-ring ring-3"}),a.jsx("circle",{r:"30",fill:"#c3f5af",className:"footer-weco-ring ring-2"}),a.jsx("circle",{r:"15",fill:"#ddffc2",className:"footer-weco-ring ring-1"})]})})}),a.jsx("div",{className:"footer-weco-svg-alt",children:a.jsx("svg",{viewBox:"0 0 200 200",className:"footer-weco-svg-alt-element","aria-hidden":"true",children:a.jsxs("g",{children:[a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"100.0",fill:"#0c9155",style:{"--i":11}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"91.61",fill:"#1a9d5c",style:{"--i":10}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"83.33",fill:"#26a45e",style:{"--i":9}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"74.95",fill:"#3db062",style:{"--i":8}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"66.67",fill:"#55ba65",style:{"--i":7}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"58.28",fill:"#64c067",style:{"--i":6}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"50.0",fill:"#75c669",style:{"--i":5}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"41.61",fill:"#7fca6a",style:{"--i":4}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"33.33",fill:"#8fd06e",style:{"--i":3}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"24.95",fill:"#9dd773",style:{"--i":2}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"16.67",fill:"#a7db77",style:{"--i":1}}),a.jsx("circle",{className:"footer-weco-alt-ring",cx:"100",cy:"100",r:"8.28",fill:"#acdd78",style:{"--i":0}})]})})})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Ecosystem"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#components",children:"Components"})}),a.jsx("li",{children:a.jsx("a",{href:"#roadmap",children:"Roadmap"})}),a.jsx("li",{children:a.jsx("a",{href:"#networks",children:"Networks"})})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Resources"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:"Documentation"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Research"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Blog"})})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Connect"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:"Contact"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Community"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Partners"})})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"footer-whole-system",children:[a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 100 100",children:[a.jsx("circle",{cx:"50",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"3",opacity:"0.8"}),a.jsx("circle",{cx:"50",cy:"36",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"64",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"36",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"64",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"50",r:"10",fill:"currentColor"})]}),a.jsx("span",{children:"The Whole System"})]}),a.jsx("p",{children:"© 2025 Gaia Ecosystem. All rights reserved."}),a.jsx("div",{className:"footer-social",children:["twitter","linkedin-in","github"].map(e=>a.jsx("a",{href:"#",className:"social-link",children:a.jsx("i",{className:`fab fa-${e}`})},e))})]})]})});function np(){const[e,t]=R.useState("light"),[n,r]=R.useState(!1),[o,i]=R.useState(!1);R.useEffect(()=>{const u=e==="dark"?"theme-dark":"theme-light";document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(u)},[e]),R.useEffect(()=>{if(n){const u=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=u}}},[n]);const s=()=>{t(u=>u==="dark"?"light":"dark")},l=()=>{if(window.innerWidth<=768){window.open("https://gamma.app/embed/6lri4hq4c44s6jt","_blank");return}r(!0)},c=()=>r(!1);return a.jsxs(a.Fragment,{children:[a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"}),a.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),a.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          /* Base neutrals */
          --color-bg-page: #fdfdf8;
          --color-bg-section-alt: #f4f5f2;
          --color-bg-card: #ffffff;
          --color-border-soft: #dde4d8;
          --color-text-main: #3e4c3a;

          /* Hero + brand gradients */
          --color-hero-from: #2d4f3c;
          --color-hero-via: #3e6b4e;
          --color-hero-to: #4a7c59;

          /* Regenerative accent palette */
          --color-accent-primary: #7cb342;
          --color-accent-secondary: #8bc34a;
          --color-accent-warm: #f7b267;
        }

        body {
          font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
          background: var(--color-bg-page);
          color: var(--color-text-main);
        }

        body.theme-dark {
          --color-bg-page: #050c08;
          --color-bg-section-alt: #07140d;
          --color-bg-card: #0f2017;
          --color-border-soft: rgba(173, 200, 180, 0.35);
          --color-text-main: #eaf4ea;

          --color-hero-from: #061710;
          --color-hero-via: #102d1f;
          --color-hero-to: #1e4d3d;

          --color-accent-primary: #88c27a;
          --color-accent-secondary: #c2e59f;
          --color-accent-warm: #ffb74d;
        }

        body.theme-light {
          --color-bg-page: #f6fbf4;
          --color-bg-section-alt: #edf6ec;
          --color-bg-card: #ffffff;
          --color-border-soft: #d7e5d4;
          --color-text-main: #273424;

          --color-hero-from: #eaf8ee;
          --color-hero-via: #d6f0df;
          --color-hero-to: #c2e7d0;

          --color-accent-primary: #4caf50;
          --color-accent-secondary: #81c784;
          --color-accent-warm: #ffb74d;
        }
        
        h1, h2, h3 {
          font-family: 'Code Pro', 'Gotham Rounded', 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          padding: 1.5rem 0;
        }

        .navbar.scrolled {
          background: var(--color-bg-card);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.10);
          padding: 1rem 0;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-icon {
          color: var(--color-accent-primary);
          transition: color 0.3s;
        }

        .logo-weco-breathing {
          width: 40px;
          height: 40px;
          object-fit: contain;
          display: block;
          animation: breathe 5s ease-in-out infinite;
          transform-origin: center center;
        }

        .header-weco-svg-element {
          /* Generously padded and overflow visible so circle + shadow never clip */
          width: 34px;
          height: 34px;
          display: block;
          overflow: visible;
          /* Slight offset so logo baseline aligns visually with "Gaia Ecosystem" text */
          transform: translateY(-1px);
        }

        .header-weco-svg-element .header-weco-ring {
          transform-box: fill-box;
          transform-origin: center;
          /* Slower, smoother shimmer in header */
          animation: shimmer-breath 6s ease-in-out infinite;
        }

        /* Staggered shimmer delays for header rings (inner → outer) */
        .header-weco-svg-element .ring-1  { animation-delay: -0.0s; }
        .header-weco-svg-element .ring-2  { animation-delay: -0.15s; }
        .header-weco-svg-element .ring-3  { animation-delay: -0.30s; }
        .header-weco-svg-element .ring-4  { animation-delay: -0.45s; }
        .header-weco-svg-element .ring-5  { animation-delay: -0.60s; }
        .header-weco-svg-element .ring-6  { animation-delay: -0.75s; }
        .header-weco-svg-element .ring-7  { animation-delay: -0.90s; }
        .header-weco-svg-element .ring-8  { animation-delay: -1.05s; }
        .header-weco-svg-element .ring-9  { animation-delay: -1.20s; }
        .header-weco-svg-element .ring-10 { animation-delay: -1.35s; }
        .header-weco-svg-element .ring-11 { animation-delay: -1.50s; }
        .header-weco-svg-element .ring-12 { animation-delay: -1.65s; }

        .logo-icon circle {
          transform-origin: 50% 50%;
        }

        .logo-icon circle:not(:last-child) {
          animation: logoRipple 4s infinite ease-out;
        }

        .logo-icon circle:nth-child(1) {
          animation-delay: 0s;
        }

        .logo-icon circle:nth-child(2) {
          animation-delay: 0.35s;
        }

        .logo-icon circle:nth-child(3) {
          animation-delay: 0.7s;
        }

        .logo-text {
          font-family: 'Code Pro', 'Gotham Rounded', 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #fff;
          transition: color 0.3s;
        }

        .navbar.scrolled .logo-text {
          color: #2d4f3c;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-toggle {
          display: none;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(0, 0, 0, 0.25);
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }

        .nav-burger {
          position: relative;
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: #ffffff;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .nav-burger::before,
        .nav-burger::after {
          content: '';
          position: absolute;
          left: 0;
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: #ffffff;
          transition: transform 0.2s ease, opacity 0.2s ease, top 0.2s ease, bottom 0.2s ease;
        }

        .nav-burger::before {
          top: -6px;
        }

        .nav-burger::after {
          bottom: -6px;
        }

        .nav-toggle.is-open .nav-burger {
          background: transparent;
        }

        .nav-toggle.is-open .nav-burger::before {
          top: 0;
          transform: rotate(45deg);
        }

        .nav-toggle.is-open .nav-burger::after {
          bottom: 0;
          transform: rotate(-45deg);
        }

        .nav-mobile-menu {
          display: none;
        }

        body.theme-light .nav-toggle {
          border-color: rgba(43, 74, 60, 0.3);
          background: rgba(255, 255, 255, 0.95);
        }

        body.theme-light .nav-burger,
        body.theme-light .nav-burger::before,
        body.theme-light .nav-burger::after {
          background: #273424;
        }

        body.theme-dark .nav-toggle {
          border-color: rgba(136, 194, 122, 0.75);
          background: rgba(6, 23, 16, 0.92);
        }

        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.4rem 0.9rem;
          width: 150px;
          flex-shrink: 0;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background: rgba(0, 0, 0, 0.18);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
 
        /* When light mode is the default, show a light pill even at the top of the page */
        body.theme-light .theme-toggle {
          background: rgba(255, 255, 255, 0.9);
          color: #2d4f3c;
          border-color: rgba(62, 76, 58, 0.25);
        }
  
        .navbar.scrolled .theme-toggle {
          background: rgba(255, 255, 255, 0.9);
          color: #2d4f3c;
          border-color: rgba(62, 76, 58, 0.25);
        }
 
        /* Dark-mode styling for theme toggle */
        body.theme-dark .theme-toggle {
          background: rgba(6, 23, 16, 0.9);
          color: #eaf4ea;
          border-color: rgba(136, 194, 122, 0.65);
        }
 
        body.theme-dark .navbar.scrolled .theme-toggle {
          background: rgba(6, 23, 16, 0.95);
          color: #eaf4ea;
          border-color: rgba(136, 194, 122, 0.8);
        }

        .theme-toggle-track {
          width: 40px;
          height: 20px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.3);
          position: relative;
          transition: background 0.25s ease;
        }

        .theme-toggle-thumb {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
          transition: transform 0.25s ease;
        }

        .theme-toggle-track.is-light {
          /* light theme = default "off" state, keep neutral background */
        }
 
        .theme-toggle-track.is-dark {
          background: linear-gradient(135deg, #264d32 0%, #1c3a26 100%);
        }

        .theme-toggle-track.is-dark .theme-toggle-thumb {
          transform: translateX(18px);
        }

        .theme-toggle-label {
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .vis-toggle-label {
          white-space: nowrap;
          text-align: center;
          max-width: none;
          line-height: 1.3;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.95);
          text-decoration: none;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s;
          position: relative;
        }

        .navbar.scrolled .nav-link {
          color: #3e4c3a;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #7fb069, transparent);
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--color-hero-from) 0%, var(--color-hero-via) 50%, var(--color-hero-to) 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        body.theme-light .hero-content {
          color: #ffffff;
        }

        body.theme-light .hero-badge {
          background: rgba(129, 199, 132, 0.17);
          color: #fdf7e8;
        }

        body.theme-light .btn-secondary {
          background: #ffffff;
          color: var(--color-text-main);
          border-color: rgba(0, 0, 0, 0.15);
        }

        .hero-particles {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(127, 176, 105, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(102, 145, 89, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(127, 176, 105, 0.08) 0%, transparent 40%);
          animation: particleFloat 20s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-10px) translateX(-10px); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: #fff;
          max-width: 900px;
          padding: 2rem;
          margin-top: 80px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease-out;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .hero-badge i {
          font-size: 1.1rem;
        }

        .hero-title {
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          animation: fadeInUp 1s ease-out 0.1s backwards;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          margin-bottom: 1.5rem;
          opacity: 0.95;
          animation: fadeInUp 1s ease-out 0.2s backwards;
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description {
          font-size: 1.3rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          animation: fadeInUp 1s ease-out 0.3s backwards;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
          color: #ffffff;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          animation: fadeInUp 1s ease-out 0.4s backwards;
          flex-wrap: wrap;
        }

        .hero-image {
          margin-top: 2.5rem;
        }

        .hero-image img {
          max-width: 520px;
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
        }

        .btn-primary {
          background: linear-gradient(135deg, #7fb069 0%, #669157 100%);
          color: white;
          border: none;
          padding: 1.2rem 2.5rem;
          border-radius: 60px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(127, 176, 105, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(127, 176, 105, 0.35);
          background: linear-gradient(135deg, #8bc276 0%, #75a065 100%);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
          padding: 1.2rem 2.5rem;
          border-radius: 60px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.4s;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: white;
          transform: translateY(-3px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* scroll line removed */

        .scroll-indicator i {
          font-size: 1.5rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        /* Paradigm Section */
        .paradigm-section {
          padding: 6rem 2rem;
          background: var(--color-bg-page);
        }

        .paradigm-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Video Section */
        .video-section {
          padding: 6rem 2rem;
          background: var(--color-bg-section-alt);
        }

        .video-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .video-title {
          font-size: clamp(2.4rem, 3.8vw, 3.2rem);
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .video-frame {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          background: radial-gradient(circle at top left, rgba(0,0,0,0.65), rgba(0,0,0,0.95));
        }

        .video-embed {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
        }

        .video-embed iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-actions {
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .btn-secondary-small {
          padding: 1.2rem 2.5rem;
          border-radius: 60px;
          border: 1px solid var(--color-border-soft);
          background: #ffffff;
          color: var(--color-text-main);
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.25s ease;
        }

        .btn-secondary-small:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.14);
        }

        .btn-secondary-arrow {
          width: 10px;
          height: 10px;
          border-right: 2px solid var(--color-text-main);
          border-bottom: 2px solid var(--color-text-main);
          transform: rotate(45deg);
          animation: arrow-down 1.2s infinite ease-in-out;
        }

        /* Dark mode styling for video "Read more" button */
        body.theme-dark .btn-secondary-small {
          background: #1e4d3d;
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
        }

        body.theme-dark .btn-secondary-small:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.6);
        }

        body.theme-dark .btn-secondary-arrow {
          border-right: 2px solid #ffffff;
          border-bottom: 2px solid #ffffff;
        }

        @keyframes arrow-down {
          0% {
            transform: translateY(0) rotate(45deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(4px) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) rotate(45deg);
            opacity: 0.7;
          }
        }

        /* Video Section */
        .video-section {
          padding: 6rem 2rem;
          background: var(--color-bg-section-alt);
        }

        .video-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .video-title {
          font-size: clamp(2.4rem, 3.8vw, 3.2rem);
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .video-frame {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          background: radial-gradient(circle at top left, rgba(0,0,0,0.65), rgba(0,0,0,0.95));
        }

        .video-embed {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
        }

        .video-embed iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-actions {
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .btn-secondary-small {
          padding: 0.9rem 1.8rem;
          border-radius: 999px;
          border: 1px solid var(--color-border-soft);
          background: #ffffff;
          color: var(--color-text-main);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.25s ease;
        }

        .btn-secondary-small:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.14);
        }

        .btn-secondary-arrow {
          width: 10px;
          height: 10px;
          border-right: 2px solid var(--color-text-main);
          border-bottom: 2px solid var(--color-text-main);
          transform: rotate(45deg);
          animation: arrow-down 1.2s infinite ease-in-out;
          margin-left: 0.3rem;
        }

        @keyframes arrow-down {
          0% {
            transform: translateY(0) rotate(45deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(4px) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) rotate(45deg);
            opacity: 0.7;
          }
        }

        /* Video Section */
        .video-section {
          padding: 6rem 2rem;
          background: var(--color-bg-section-alt);
        }

        .video-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .video-title {
          font-size: clamp(2.4rem, 3.8vw, 3.2rem);
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .video-frame {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          background: radial-gradient(circle at top left, rgba(0,0,0,0.65), rgba(0,0,0,0.95));
        }

        .video-embed {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
        }

        .video-embed iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .video-actions {
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .btn-secondary-small {
          padding: 0.9rem 1.9rem;
          border-radius: 999px;
          border: 1px solid var(--color-border-soft);
          background: #ffffff;
          color: var(--color-text-main);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: all 0.25s ease;
        }

        .btn-secondary-small:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.14);
        }

        .paradigm-content h2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: #1e4d3d;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .lead-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--color-text-main);
          max-width: 900px;
          margin: 0 auto 4rem;
          text-align: center;
        }

        .lead-text-left {
          text-align: left;
          margin-left: 0;
          margin-right: 0;
        }

        .paradigm-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .paradigm-card {
          background: var(--color-bg-card);
          padding: 3rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s;
          border: 1px solid rgba(124, 179, 66, 0.1);
        }

        .paradigm-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: #7cb342;
        }

        .paradigm-card i {
          font-size: 3rem;
          color: var(--color-accent-primary);
          margin-bottom: 1.5rem;
        }

        .paradigm-card h3 {
          font-size: 1.5rem;
          color: #1e4d3d;
          margin-bottom: 1rem;
        }

        body.theme-dark .paradigm-card h3 {
          color: #f3f8f4;
        }

        .paradigm-card p {
          color: var(--color-text-main);
          line-height: 1.6;
        }

        /* Section Labels */
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.5rem;
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          color: white;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .section-label--challenge {
          background: #8c3b2a; /* earthy red */
          background-image: none;
        }

        /* Problem Section */
        .problem-section {
          padding: 6rem 2rem;
          background: var(--color-bg-section-alt);
        }

        .problem-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 4rem;
          align-items: center;
        }

        .problem-text h2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
        }

        .problem-points {
          margin-top: 3rem;
        }

        .problem-point {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .problem-icon {
          width: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .problem-icon i {
          font-size: 1.5rem;
          color: #8c3b2a; /* match earthy challenge red */
          margin-top: 0.15rem;
        }

        .problem-point h4 {
          color: var(--color-accent-primary);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .problem-point p {
          color: var(--color-text-main);
          line-height: 1.6;
        }

        .problem-visual img {
          width: 100%;
          border-radius: 20px;
          box-shadow: none;
        }

        /* Solution Section */
        .solution-section {
          padding: 6rem 2rem;
          background: var(--color-bg-page);
        }

        .solution-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.3fr);
          grid-template-rows: auto auto;
          grid-template-areas:
            "solution-visual solution-header"
            "solution-visual solution-body";
          column-gap: 4rem;
          row-gap: 2rem;
          align-items: center;
        }

        .solution-header-block {
          grid-area: solution-header;
          text-align: left;
        }

        .solution-header-block h2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
        }

        .solution-body {
          grid-area: solution-body;
          text-align: left;
        }

        .solution-visual {
          grid-area: solution-visual;
        }

        .solution-features {
          margin-top: 3rem;
        }
        
        .solution-feature {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        /* Fix icon/text alignment in "Commons-Based Infrastructure" by giving
           all icons a fixed-width column and centering the glyph inside it. */
        .feature-icon {
          width: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .feature-icon i {
          width: 100%;
          text-align: center;
        }
        
        .solution-feature i {
          font-size: 1.5rem;
          color: #7cb342;
          margin-top: 0.3rem;
        }
        
        .solution-feature h4 {
          color: var(--color-accent-primary);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .solution-feature p {
          color: var(--color-text-main);
          line-height: 1.6;
        }

        .solution-visual img {
          width: 100%;
          border-radius: 20px;
          box-shadow: none;
        }

        /* Components Section */
        .components-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--color-bg-section-alt) 0%, var(--color-bg-page) 100%);
        }

        .components-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: var(--color-text-main);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--color-text-main);
          max-width: 700px;
          margin: 0 auto;
        }

        .components-visibility-toggle {
          margin-top: 0.75rem;
          display: flex;
          justify-content: center;
          align-items: center;
          /* Reserve vertical space even when the toggle is hidden in light mode,
             so the wheel never jumps when switching themes. */
          height: 32px;
        }
 
        .vis-toggle {
          border-radius: 999px;
          padding: 0.35rem 0.9rem 0.35rem 1rem;
          border: 1px solid var(--color-border-soft);
          background: rgba(0, 0, 0, 0.04);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-main);
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease,
            color 0.2s ease,
            box-shadow 0.2s ease;
          animation: none;
        }
 
        .vis-toggle:hover {
          transform: translateY(-1px);
          background: rgba(0, 0, 0, 0.06);
        }
 
        .vis-toggle-switch {
          width: 30px;
          height: 16px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }
 
        .vis-toggle-thumb {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
          transition: transform 0.2s ease, background 0.2s ease;
        }
 
        .vis-toggle.is-on .vis-toggle-thumb {
          transform: translateX(12px);
        }
 
        /* Dark-mode styling for the Increased Visibility toggle */
        body.theme-dark .vis-toggle {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.25);
          color: #eaf4ea;
          animation: visFlash 1.15s ease-in-out 0s 4;
        }
 
        body.theme-dark .vis-toggle-switch {
          background: rgba(255, 255, 255, 0.16);
        }
 
        /* When pressed in dark mode, the toggle becomes a clear, light-white pill. */
        body.theme-dark .vis-toggle.is-on {
          background: rgba(255, 255, 255, 0.96);
          border-color: rgba(255, 255, 255, 1);
          color: #1e4d3d;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
          animation: none;
        }
 
        body.theme-dark .vis-toggle.is-on .vis-toggle-switch {
          background: rgba(245, 245, 245, 1);
        }
 
        body.theme-dark .vis-toggle.is-on .vis-toggle-thumb {
          background: #1e4d3d;
        }
 
        .ecosystem-wheel {
          margin: 0 0 5rem;
          text-align: center;
        }
 
        .wheel-image {
          max-width: 1200px;
          width: 100%;
          height: auto;
          border-radius: 20px;
          transition: filter 0.12s ease-out;
        }
 
        /* Dark mode creme outline for Increased Visibility, made stronger so it reads
           clearly as a creme halo around the wheel without changing the image itself. */
        body.theme-dark .wheel-image--hv {
          filter:
            /* base edge */
            drop-shadow(0 0 0 rgba(255, 248, 232, 1))
            /* cardinal directions */
            drop-shadow(0 3px 0 rgba(255, 248, 232, 1))
            drop-shadow(0 -3px 0 rgba(255, 248, 232, 1))
            drop-shadow(3px 0 0 rgba(255, 248, 232, 1))
            drop-shadow(-3px 0 0 rgba(255, 248, 232, 1))
            /* diagonals to round the stroke */
            drop-shadow(2px 2px 0 rgba(255, 248, 232, 1))
            drop-shadow(-2px 2px 0 rgba(255, 248, 232, 1))
            drop-shadow(2px -2px 0 rgba(255, 248, 232, 1))
            drop-shadow(-2px -2px 0 rgba(255, 248, 232, 1))
            /* subtle softening to anti-alias the edge */
            drop-shadow(0 0 3px rgba(255, 248, 232, 0.8));
        }

        .components-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .components-cta {
          margin-top: 4rem;
          text-align: center;
        }

        .components-cta h2 {
          font-size: 1.8rem;
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
        }

        .components-cta-buttons {
          display: inline-flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-ghost-small {
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          border: 1px solid var(--color-border-soft);
          background: transparent;
          color: var(--color-text-main);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-ghost-small:hover {
          background: rgba(0, 0, 0, 0.04);
        }

        .btn-primary-small {
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          box-shadow: 0 8px 20px rgba(124, 179, 66, 0.35);
        }

        .btn-primary-small:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(124, 179, 66, 0.45);
        }

        .component-card {
          background: var(--color-bg-card);
          padding: 1.9rem;
          border-radius: 20px;
          transition: all 0.3s;
          cursor: pointer;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .component-card-readmore {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 50%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 0.9rem;
          background: linear-gradient(
            to top,
            rgba(124, 179, 66, 0.52),
            rgba(124, 179, 66, 0.0)
          );
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .component-card:hover .component-card-readmore {
          opacity: 1;
        }

        .component-card:hover,
        .component-card.active {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: #7cb342;
        }

        .component-number {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .component-icon {
          margin-bottom: 1.5rem;
        }

        .component-icon img {
          height: 110px;
          width: 100%;
          object-fit: contain;
          filter: none;
          mix-blend-mode: normal;
        }

        .component-icon i {
          font-size: 3rem;
          color: var(--color-accent-primary);
        }

        .component-card h3 {
          font-size: 1.4rem;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
        }

        .component-subtitle {
          color: #7cb342;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .component-description {
          color: var(--color-text-main);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* Component modal overlay */
        .component-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          z-index: 2000;
          animation: modalBackdropIn 0.18s ease-out;
        }

        .component-modal {
          position: relative;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          background: var(--color-bg-card);
          border-radius: 24px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
          padding: 2.5rem 3rem;
          overflow-y: auto;
          border: 1px solid var(--color-border-soft);
          transform-origin: center;
          animation: modalScaleIn 0.18s ease-out;
        }

        .partner-modal {
          position: relative;
          max-width: 960px;
          width: 100%;
          max-height: 90vh;
          background: var(--color-bg-card);
          border-radius: 24px;
          box-shadow: 0 30px 82px rgba(0, 0, 0, 0.58);
          padding: 2.6rem 3rem;
          overflow-y: auto;
          border: 1px solid var(--color-border-soft);
          transform-origin: center;
          animation: modalScaleIn 0.18s ease-out;
        }

        .partner-modal-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .partner-modal-logo {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .partner-modal-image {
          max-width: 312px;
          max-height: 208px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
 
        .partner-logo-placeholder {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.8rem;
          box-shadow: 0 16px 40px rgba(124, 179, 66, 0.55);
        }

        .partner-modal-title h3 {
          font-size: 1.7rem;
          margin-bottom: 0.3rem;
          color: var(--color-text-main);
        }

        .partner-modal-role {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-accent-primary);
          font-weight: 600;
        }

        .partner-modal-body {
          font-size: 0.98rem;
          line-height: 1.85;
          color: var(--color-text-main);
          margin-top: 0.75rem;
        }

        .partner-modal-body p + p {
          margin-top: 1.4rem;
        }

        .partner-modal-links {
          margin-top: 0.75rem;
          text-align: center;
        }

        .partner-modal-links-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          opacity: 0.75;
          margin-bottom: 0.25rem;
        }

        .partner-modal-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .partner-modal-links-list li + li {
          margin-top: 0.2rem;
        }

        .partner-modal-links-list a {
          font-size: 0.9rem;
          color: var(--color-accent-primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .partner-modal-links-list a:hover {
          text-decoration: underline;
        }

        .partner-modal-links-placeholder {
          font-size: 0.85rem;
          opacity: 0.65;
        }
  
        .team-profile-modal {
          position: relative;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          background: var(--color-bg-card);
          border-radius: 24px;
          box-shadow: 0 32px 90px rgba(0, 0, 0, 0.65);
          padding: 3rem 3.5rem;
          overflow-y: auto;
          border: 1px solid var(--color-border-soft);
          transform-origin: center;
          animation: modalScaleIn 0.18s ease-out;
        }
 
        .team-profile-layout {
          display: flex;
          flex-direction: row;
          gap: 2.2rem;
          align-items: flex-start;
          flex-wrap: nowrap;
        }
 
        .team-profile-photo {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
 
        .team-profile-avatar {
          width: 240px;
          height: 240px;
          border-radius: 32px;
          background: radial-gradient(circle at 30% 20%, #ffffff, #c5e1a5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.45);
          color: var(--color-hero-from);
          font-size: 3.4rem;
          position: relative;
          overflow: hidden;
        }
 
        .team-profile-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 32px;
          object-fit: cover;
          object-position: top center;
        }

        /* Invert Dark Matter Labs logo also inside the Organizational Allies modal */
        .team-profile-avatar-img--darkmatter {
          filter: invert(1);
        }

        .team-profile-links {
          margin-top: 1.2rem;
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .team-profile-link-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          background: #1e4d3d; /* fixed dark green for contrast in both themes */
          border: 1px solid rgba(0, 0, 0, 0.45);
          font-size: 0.8rem;
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
          cursor: default;
        }

        .team-profile-link-item.is-clickable {
          cursor: pointer;
        }

        .team-profile-link-item i {
          font-size: 0.9rem;
          color: #ffffff;
        }

        .team-profile-plantir-icon {
          width: 16px;
          height: 16px;
          object-fit: contain;
          border-radius: 4px;
        }

        .team-profile-websites {
          margin-top: 1rem;
          text-align: center;
        }

        .team-profile-websites-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--color-text-main);
          opacity: 0.7;
          margin-bottom: 0.3rem;
        }

        .team-profile-websites-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .team-profile-websites-list li + li {
          margin-top: 0.2rem;
        }

        .team-profile-websites-list a {
          font-size: 0.85rem;
          color: var(--color-accent-primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .website-link-icon {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .team-profile-websites-list a:hover {
          text-decoration: underline;
        }

        .team-profile-website-placeholder {
          font-size: 0.85rem;
          color: var(--color-text-main);
          opacity: 0.6;
        }
 
        .team-profile-content {
          flex: 1;
          min-width: 320px;
          text-align: left;
        }
 
        .team-profile-name {
          font-size: 2.1rem;
          margin-bottom: 0.4rem;
          color: var(--color-text-main);
        }
 
        .team-profile-role {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--color-accent-primary);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
 
        .team-profile-bio {
          font-size: 1rem;
          line-height: 1.9;
          color: var(--color-text-main);
          opacity: 0.96;
          margin: 0;
        }

        .team-profile-bio + .team-profile-bio {
          margin-top: 0.8rem;
        }
 
        @media (max-width: 960px) {
          .team-profile-layout {
            flex-wrap: wrap;
            align-items: center;
          }
        }
 
        @media (max-width: 768px) {
          .team-profile-layout {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
 
          .team-profile-content {
            text-align: center;
            min-width: 0;
          }
        }

        .deck-backdrop {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          z-index: 2000;
          pointer-events: none;
          opacity: 0;
          background: transparent;
          transition: opacity 0.2s ease, background 0.2s ease;
        }

        .deck-backdrop.is-open {
          pointer-events: auto;
          opacity: 1;
          background: rgba(0, 0, 0, 0.6);
        }

        .deck-modal {
          position: relative;
          max-width: 1400px;
          width: 100%;
          max-height: 95vh;
          height: 95vh;
          background: var(--color-bg-card);
          border-radius: 24px;
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.55);
          padding: 0.4rem 0.45rem 0.45rem;
          overflow: hidden;
          border: 1px solid var(--color-border-soft);
          transform-origin: center;
          transform: scale(0.97);
          opacity: 0;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .deck-backdrop.is-open .deck-modal {
          transform: scale(1);
          opacity: 1;
        }

        .deck-modal-header {
          display: none;
        }

        .deck-modal-frame {
          flex: 1;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
        }

        .component-modal-close {
          position: absolute;
          top: 0.9rem;
          right: 0.9rem;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid var(--color-border-soft);
          font-size: 1.4rem;
          line-height: 1;
          cursor: pointer;
          color: var(--color-text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .component-modal-close:hover {
          background: rgba(0, 0, 0, 0.08);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }

        .component-modal-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .component-modal-icon img {
          height: 130px;
          width: auto;
          object-fit: contain;
        }
 
        /* For Component 6 (Gaia & Open Earth Networks), tighten the logo size in the
           modal so the subtitle can sit comfortably below the logo. */
        .component-modal-icon--compact img {
          height: 90px;
        }
 
        .component-modal-subtitle--centered {
          margin-top: 0.75rem;
          text-align: center;
        }

        .component-modal-header--stacked {
          flex-direction: column;
          align-items: center;
        }

        .component-modal-text h3 {
          font-size: 1.6rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
        }

        .component-modal-subtitle {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-accent-primary);
          font-weight: 600;
        }

        .component-modal-body {
          margin-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .component-modal-box {
          padding: 1.3rem 1.5rem;
          border-radius: 16px;
          border: 1px solid var(--color-border-soft);
          background: rgba(255, 255, 255, 0.04);
        }

        .component-modal-box-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
          margin-bottom: 0.5rem;
          opacity: 0.85;
        }

        .component-modal-box--objective {
          background: rgba(179, 157, 219, 0.18); /* pastel purple */
          border-color: rgba(179, 157, 219, 0.45);
        }

        .component-modal-box--chosen {
          background: rgba(200, 230, 201, 0.2); /* pastel green */
          border-color: rgba(129, 199, 132, 0.5);
        }

        .component-modal-box p {
          margin: 0;
          font-size: 0.98rem;
          line-height: 1.8;
          color: var(--color-text-main);
        }
 
        .component-modal-tags {
          margin-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
 
        .component-tag {
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          background: var(--color-bg-section-alt);
          border: 1px solid var(--color-border-soft);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-main);
        }

        /* Convergence Section */
        .convergence-section {
          padding: 6rem 2rem;
          background: #1e4d3d;
          color: white;
        }

        .convergence-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .convergence-section .section-header h2 {
          color: white;
        }

        .convergence-section .lead-text {
          color: rgba(255, 255, 255, 0.9);
        }

        .convergence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .convergence-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }

        .convergence-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-10px);
        }

        .convergence-card i {
          font-size: 3rem;
          color: var(--color-accent-primary);
          margin-bottom: 1.5rem;
          display: block;
        }

        .convergence-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .convergence-card p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
        }

        .convergence-cta {
          margin-top: 4rem;
          text-align: center;
        }

        .convergence-statement {
          font-size: 1.4rem;
          font-weight: 500;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Roadmap Section */
        .roadmap-section {
          padding: 6rem 2rem;
          background: var(--color-bg-page);
        }

        /* Roadmap subtitle: slightly larger and wider on desktop, but still
           narrower than the tabs row so it doesn’t overrun the pills */
        @media (min-width: 1024px) {
          .roadmap-section .section-subtitle {
            font-size: 1.3rem;
            max-width: 900px;
          }
        }

        /* Light mode: use same background as card so area around number/line
           matches the box behind it, but keep dark-mode box unchanged */
        body.theme-light .roadmap-section {
          background: var(--color-bg-card);
        }

        .roadmap-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .roadmap-timeline {
          margin-top: 3rem;
        }

        .roadmap-tabs {
          margin-top: 3rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .roadmap-tab {
          border-radius: 999px;
          border: 1px solid var(--color-border-soft);
          background: var(--color-bg-card);
          padding: 0.75rem 1.6rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-main);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
          transition: all 0.25s ease;
        }

        .roadmap-tab-phase {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.78rem;
          opacity: 0.8;
        }

        .roadmap-tab-title {
          font-weight: 600;
        }

        .roadmap-tab.active {
          border-color: #7cb342;
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          color: #ffffff;
          box-shadow: 0 10px 26px rgba(124, 179, 66, 0.4);
        }

        .roadmap-tab.active .roadmap-tab-phase {
          opacity: 1;
        }

        .roadmap-phase {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }

        .roadmap-phase.inactive {
          opacity: 0.7;
        }

        .roadmap-phase.active {
          transform: translateY(-4px);
        }

        .phase-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .phase-number {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(124, 179, 66, 0.3);
        }

        .phase-line {
          width: 3px;
          flex: 1;
          background: linear-gradient(to bottom, #7cb342, transparent);
          margin-top: 1rem;
        }

        .phase-content {
          background: var(--color-bg-card);
          padding: 3rem;
          border-radius: 20px;
        }

        /* In light mode, match card background with page background in roadmap so the
           left number + line appear to float with no visible seam */
        body.theme-light .roadmap-section {
          background: var(--color-bg-page);
        }

        // body.theme-light .phase-content {
        //   background: var(--color-bg-page);
        // }

        .phase-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .phase-header h3 {
          font-size: 2rem;
          color: var(--color-text-main);
        }

        .phase-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .phase-timeline,
        .phase-budget {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e4d3d;
        }

        .phase-description {
          font-size: 1.1rem;
          color: var(--color-text-main);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .phase-deliverables h4 {
          color: var(--color-text-main);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .phase-deliverables ul {
          list-style: none;
          display: grid;
          gap: 0.8rem;
        }

        .phase-deliverables li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: var(--color-text-main);
        }

        .phase-deliverables i {
          color: #7cb342;
          margin-top: 0.3rem;
        }

        .phase-kpis {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(124, 179, 66, 0.1);
          border-radius: 10px;
          color: var(--color-text-main);
          line-height: 1.7;
        }

        .roadmap-plan {
          margin-top: 3rem;
          display: flex;
          justify-content: flex-start;
        }

        .roadmap-plan-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          width: calc(100% - (100px + 3rem));
          margin-left: calc(100px + 3rem);
          padding: 1.75rem 2rem;
          border-radius: 20px;
          background: var(--color-bg-card);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--color-border-soft);
        }

        .roadmap-plan-doc {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .roadmap-plan-doc-icon {
          width: 52px;
          height: 64px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 10px 26px rgba(124, 179, 66, 0.45);
        }

        .roadmap-plan-doc-icon i {
          font-size: 1.6rem;
        }

        .roadmap-plan-doc h3 {
          font-size: 1.3rem;
          margin-bottom: 0.4rem;
          color: var(--color-text-main);
        }

        .roadmap-plan-doc p {
          font-size: 0.98rem;
          color: var(--color-text-main);
          opacity: 0.9;
        }

        .roadmap-plan-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.7rem;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 10px 26px rgba(124, 179, 66, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .roadmap-plan-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(124, 179, 66, 0.55);
        }

        .roadmap-plan-button i {
          font-size: 0.9rem;
        }

        /* Networks Section */
        .networks-section {
          padding: 6rem 2rem;
          background: var(--color-bg-section-alt);
        }

        .networks-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .networks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        /* Team & Advisors */
        .team-section {
          padding: 6rem 2rem;
          background: var(--color-bg-page);
        }

        /* V3 variant: slightly larger orbit radius (more space between profiles),
           while keeping node size identical. Positions are a uniform radial
           scale of the V2 orbit, so angular spacing (and thus distances) are equal. */
        .team-section--v3 .team-orbit-node.orbit-pos-0  { top: 0.3%;  left: 50%;   transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-1  { top: 6.8%;  left: 74.8%; transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-2  { top: 25.2%; left: 93.2%; transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-3  { top: 50%;   left: 99.7%; transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-4  { top: 74.8%; left: 93.2%; transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-5  { top: 93.2%; left: 74.8%; transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-6  { top: 99.7%; left: 50%;   transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-7  { top: 93.2%; left: 25.2%; transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-8  { top: 74.8%; left: 6.8%;  transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-9  { top: 50%;   left: 0.3%;  transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-10 { top: 25.2%; left: 6.8%;  transform: translate(-50%, -50%); }
        .team-section--v3 .team-orbit-node.orbit-pos-11 { top: 6.8%;  left: 25.2%; transform: translate(-50%, -50%); }

        /* For v3 and v4, turn off the CSS-driven orbit/counter-rotation animations;
           rotation and self-levelling are handled in JS via v3OrbitAngle. */
        .team-section--v3 .team-orbit-ring,
        .team-section--v4 .team-orbit-ring {
          animation: none;
        }
 
        .team-section--v3 .team-orbit-node-inner,
        .team-section--v4 .team-orbit-node-inner {
          animation: none;
        }

        .team-section .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .team-header-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
        }

        .team-version-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.15rem 0.6rem;
          border-radius: 999px;
          border: 1px solid var(--color-border-soft);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-text-main);
          background: rgba(255, 255, 255, 0.8);
        }

        .team-fruit-wrapper {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
        }

        .team-cloud-field {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .team-cloud-field.is-paused .team-cloud-node {
          transition-duration: 0.8s;
        }

        .team-cloud-node {
          pointer-events: auto;
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          transition:
            top 0.7s ease,
            left 0.7s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
          cursor: pointer;
        }

        .team-cloud-node::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .team-cloud-node:hover {
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
          background: radial-gradient(circle at 30% 20%, #ffffff, #a5d6a7);
          z-index: 2;
        }

        .team-cloud-node:hover::after {
          border-color: rgba(129, 199, 132, 0.9);
          box-shadow: 0 0 0 4px rgba(129, 199, 132, 0.25);
        }

        .team-cloud-node-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
        }

        .team-cloud-node-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }


        .team-cloud-field {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .team-cloud-field.is-paused .team-cloud-node {
          transition-duration: 0.8s;
        }

        .team-cloud-node {
          pointer-events: auto;
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          transition:
            top 0.7s ease,
            left 0.7s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
          cursor: pointer;
        }

        .team-cloud-node::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .team-cloud-node.is-swapping {
          animation: teamSwapPulse 0.55s ease-out;
        }

        .team-cloud-node:hover {
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
          background: radial-gradient(circle at 30% 20%, #ffffff, #a5d6a7);
          z-index: 2;
        }

        .team-cloud-node:hover::after {
          border-color: rgba(129, 199, 132, 0.9);
          box-shadow: 0 0 0 4px rgba(129, 199, 132, 0.25);
        }

        .team-cloud-node-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
        }

        .team-cloud-node-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .team-v3-switching-copy {
           margin-top: 5.5rem;
           max-width: 720px;
           margin-left: auto;
           margin-right: auto;
           text-align: center;
        }

        .team-v3-switching-heading {
           font-size: 1.5rem;
           font-weight: 600;
           color: var(--color-text-main);
           margin-bottom: 0.5rem;
        }

        .team-v3-switching-subtitle {
           font-size: 1.2rem;
           line-height: 1.7;
           color: var(--color-text-main);
           opacity: 0.9;
        }

        /* V2: no "Switching Experts" heading, bring the text closer and larger */
        .team-section--v2 .team-v3-switching-copy {
           margin-top: 3.5rem;
        }

        .team-section--v2 .team-v3-switching-subtitle,
        .team-v2-switching-subtitle {
           font-size: 1.44rem; /* 20% larger than 1.2rem */
        }

        .team-fruit {
          position: relative;
          width: 540px;
          height: 540px;
        }

        .team-fruit.team-fruit-v2 {
          position: relative;
        }

        /* V2 Static Mode Container Overrides */
        .team-fruit.team-fruit-v2.team-fruit--v2-static {
          width: 100%;
          max-width: 1400px;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: visible;
          /* Reset transform on desktop so the container isn't scaled unnecessarily */
          transform: none;
          margin-bottom: 3rem;
        }

        /* Ensure the Nucleus (Stewards 1-6 + Earth) stays exactly as intended */
        .team-fruit--v2-static .team-nucleus {
           height: 540px;
           width: 540px;
           min-width: 540px; /* Force width */
           flex-shrink: 0;
           margin: 0 auto;
           position: relative;
        }

        /* Increase size for V2 nucleus nodes only */
        .team-fruit--v2-static .team-nucleus .team-node {
           width: 140px;
           height: 140px;
        }

        /* Further enlarge Stewards 1–6 in v2 while keeping center Earth at 140px.
           These six nodes get a slightly larger diameter while remaining side-by-side. */
        .team-section--v2 .team-nucleus .team-node.node-1,
        .team-section--v2 .team-nucleus .team-node.node-2,
        .team-section--v2 .team-nucleus .team-node.node-3,
        .team-section--v2 .team-nucleus .team-node.node-4,
        .team-section--v2 .team-nucleus .team-node.node-5,
        .team-section--v2 .team-nucleus .team-node.node-6 {
           width: 150px;
           height: 150px;
        }

        /* Title above the v2 advising stewards grid (Stewards 7–18) */
        .team-v2-grid-title {
           margin-top: 2.5rem;
           margin-bottom: 0.75rem;
           /* Same style as .team-v3-switching-heading but ~15% larger */
           font-size: 1.7rem;
           font-weight: 600;
           color: var(--color-text-main);
        }

        /* Static Grid for Stewards 7-18 */
        /* We use flex-wrap so as window shrinks, it goes from 2 lines of 6 -> 3 lines of 4 -> etc. */
        .team-v2-grid-container {
           /* Reduce vertical gap between the core constellation (1–6) and rows 7–18 by ~1/3 */
           margin-top: 2rem;
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
           gap: 1.5rem; /* Reduced gap to fit more on a line */
           width: 100%;
           padding: 0 2rem;
           max-width: 1200px; /* Increased max width */
        }

        /* team-v2-grid-row styles removed as container handles it directly */

        /* Smaller circles for the static grid */
        .team-node.team-v2-static-node {
           position: relative;
           top: auto;
           left: auto;
           transform: none;
           margin: 0;
           width: 140px;
           height: 140px;
           flex-shrink: 0;
           box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .team-node.team-v2-static-node:hover {
           transform: translateY(-5px);
           box-shadow: 0 16px 40px rgba(0,0,0,0.25);
        }

        .team-node.team-v2-static-node .team-node-photo {
           width: 100%;
           height: 100%;
           object-fit: cover;
           border-radius: 50%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
           /* Scale down the nucleus so it fits on mobile */
           .team-fruit--v2-static .team-nucleus {
              transform: scale(0.75);
              transform-origin: center top;
              margin-bottom: -100px; /* Compensate for empty space from scale */
              /* Remove min-width constraints on mobile if needed, though scale handles it */
           }

           .team-node.team-v2-static-node {
             width: 100px;
             height: 100px;
           }
           
           .team-v2-grid-row {
             gap: 1rem;
           }
           
           .team-fruit.team-fruit-v2.team-fruit--v2-static {
             /* Re-enable default responsiveness or manage it here */
             transform: none;
             width: 100%;
           }
        }

        .team-section--v4 .team-fruit,
        .team-fruit--cloud {
          width: min(100%, 1280px);
          height: clamp(520px, 60vw, 920px);
          margin: 0 auto;
        }

        /*
           From 868px width and smaller, fix the stewards cloud so it
           always uses full viewport width minus 48px, guaranteeing
           exactly 24px margin on both the left and right edges.
           We also remove container max-width/padding constraints
           for the V4 section so the width is truly viewport-based.
        */
        @media (max-width: 868px) {
          .team-section--v4 {
            padding-left: 0;
            padding-right: 0;
          }

          .team-section--v4 .team-container {
            max-width: none;
            margin-left: 0;
            margin-right: 0;
          }

          .team-section--v4 .team-fruit,
          .team-section--v4 .team-fruit.team-fruit--cloud {
            width: calc(100vw - 48px);
            max-width: calc(100vw - 48px);
            margin-left: auto;
            margin-right: auto;
          }
        }

        .team-section--v4 .team-cloud-field {
          width: 100%;
          height: 100%;
        }

        .team-nucleus {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .team-orbit-ring {
          position: absolute;
          inset: 0;
          animation: teamOrbitRotate 100s linear infinite;
          transform-origin: 50% 50%;
          pointer-events: none;
        }

        /* Also pause when a profile card is open (handled via is-paused class) */
        .team-orbit-ring.is-paused {
          animation-play-state: paused;
        }

        .team-orbit-ring.is-paused .team-orbit-node-inner {
          animation-play-state: paused;
        }

        .team-orbit-node {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0.1));
          border: 1px solid rgba(255,255,255,0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: auto;
        }

        .team-orbit-node-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          /* Ensure counter-rotation uses the exact center of each avatar so it self-levels
             visually as the outer ring rotates (applies to both v2 and v3). */
          transform-origin: 50% 50%;
          animation: teamOrbitCounterRotate 100s linear infinite;
        }

        .team-orbit-node-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        /* 12 evenly spaced orbit positions around the Gaia nucleus.
           Radius chosen so node diameters are almost touching, forming a continuous ring. */
        .team-orbit-node.orbit-pos-0  { top: 4%;  left: 50%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-1  { top: 10%; left: 73%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-2  { top: 27%; left: 90%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-3  { top: 50%; left: 96%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-4  { top: 73%; left: 90%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-5  { top: 90%; left: 73%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-6  { top: 96%; left: 50%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-7  { top: 90%; left: 27%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-8  { top: 73%; left: 10%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-9  { top: 50%; left: 4%;  transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-10 { top: 27%; left: 10%; transform: translate(-50%, -50%); }
        .team-orbit-node.orbit-pos-11 { top: 10%; left: 27%; transform: translate(-50%, -50%); }

        .team-node,
        .team-orbit-node {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.9), rgba(255,255,255,0.1));
          border: 1px solid rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-hero-from);
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
          transition: box-shadow 0.25s ease, background 0.25s ease;
          cursor: pointer;
          overflow: visible;
        }
 
        .team-node::after,
        .team-orbit-node::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid transparent;
          box-shadow: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
 
        .team-node i,
        .team-orbit-node i {
          font-size: 1.6rem;
        }

        .team-node-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
        }
 
        .team-earth {
          width: 100%;
          height: 100%;
        }
 
        .team-node.center {
          width: 120px;
          height: 120px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle at 30% 20%, #ffffff, #81c784);
          color: #1e4d3d;
          border-width: 2px;
        }

        /* Simple swap highlight animation used when a steward trades places with
           the core dynamic slot. This does not move nodes along a path; it gives
           a gentle pulse at the moment of swap. */
        .team-node.node-4.is-swapping,
        .team-orbit-node.is-swapping,
        .team-cloud-node.is-swapping {
          animation: teamSwapPulse 0.55s ease-out;
        }

        @keyframes teamSwapPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.12);
            box-shadow: 0 18px 46px rgba(0, 0, 0, 0.35);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          }
        }

        /* V2 static grid (Stewards 7–18): use a bounce that keeps their
           relative positioning in the flex grid (no translate(-50%, -50%)). */
        .team-node.team-v2-static-node.is-swapping {
          animation: teamSwapPulseStatic 0.55s ease-out;
        }

        @keyframes teamSwapPulseStatic {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
          50% {
            transform: scale(1.1) translateY(-6px);
            box-shadow: 0 18px 46px rgba(0, 0, 0, 0.30);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
        }

        /* Pre-swap "Expert Needed" overlay that appears above the Steward 5
           inner nucleus position in V3 just before each swap. */
        .expert-needed-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 3;
        }

        .expert-needed-video {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          opacity: 0.6; /* 60% opacity so the underlying profile remains visible */
          animation: expertVideoFadeIn 0.15s ease-out forwards;
        }

        .expert-needed-overlay.is-fading-out .expert-needed-video {
          animation: expertVideoFadeOut 0.15s ease-in forwards;
        }

        @keyframes expertNeededBounce {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          40% {
            transform: scale(1.08);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        /* Fruit-of-Life style positions (inner ring 6 + outer ring 6) */
        /* Inner ring (radius ~22%) */
        .team-node.node-1 { top: 28%; left: 50%; transform: translate(-50%, -50%); }
        .team-node.node-2 { top: 39%; left: 69%; transform: translate(-50%, -50%); }
        .team-node.node-3 { top: 61%; left: 69%; transform: translate(-50%, -50%); }
        .team-node.node-4 { top: 72%; left: 50%; transform: translate(-50%, -50%); }
        .team-node.node-5 { top: 61%; left: 31%; transform: translate(-50%, -50%); }
        .team-node.node-6 { top: 39%; left: 31%; transform: translate(-50%, -50%); }

        /* V2 inner ring: push the larger 150px circles further out so they sit side by side (touching but not overlapping),
           while preserving the hexagonal Fruit-of-Life pattern. */
        .team-section--v2 .team-node.node-1 { top: 22%; left: 50%; transform: translate(-50%, -50%); }
        .team-section--v2 .team-node.node-2 { top: 36%; left: 76%; transform: translate(-50%, -50%); }
        .team-section--v2 .team-node.node-3 { top: 64%; left: 76%; transform: translate(-50%, -50%); }
        .team-section--v2 .team-node.node-4 { top: 78%; left: 50%; transform: translate(-50%, -50%); }
        .team-section--v2 .team-node.node-5 { top: 64%; left: 24%; transform: translate(-50%, -50%); }
        .team-section--v2 .team-node.node-6 { top: 36%; left: 24%; transform: translate(-50%, -50%); }

        /* Pull the inner ring closer together in v4 so the nucleus feels
           compact and distinct relative to the breathing cloud. */
        /* V4 Inner Nucleus: Slightly tighter than V3 for core feel, but spaced for 130px nodes */
        .team-section--v4 .team-node.node-1 { top: 30%; left: 50%; transform: translate(-50%, -50%); }
        .team-section--v4 .team-node.node-2 { top: 40%; left: 68%; transform: translate(-50%, -50%); }
        .team-section--v4 .team-node.node-3 { top: 60%; left: 68%; transform: translate(-50%, -50%); }
        .team-section--v4 .team-node.node-4 { top: 70%; left: 50%; transform: translate(-50%, -50%); }
        .team-section--v4 .team-node.node-5 { top: 60%; left: 32%; transform: translate(-50%, -50%); }
        .team-section--v4 .team-node.node-6 { top: 40%; left: 32%; transform: translate(-50%, -50%); }
 
        /* Outer ring (radius ~44%) */
        .team-node.node-7  { top: 6%;  left: 50%; transform: translate(-50%, -50%); }
        .team-node.node-8  { top: 28%; left: 88%; transform: translate(-50%, -50%); }
        .team-node.node-9  { top: 72%; left: 88%; transform: translate(-50%, -50%); }
        .team-node.node-10 { top: 94%; left: 50%; transform: translate(-50%, -50%); }
        .team-node.node-11 { top: 72%; left: 12%; transform: translate(-50%, -50%); }
        .team-node.node-12 { top: 28%; left: 12%; transform: translate(-50%, -50%); }

        .team-node:hover,
        .team-orbit-node:hover {
          box-shadow: 0 16px 40px rgba(0,0,0,0.28);
          background: radial-gradient(circle at 30% 20%, #ffffff, #a5d6a7);
          z-index: 2;
        }
 
        .team-node.center:hover {
          box-shadow: 0 18px 46px rgba(0,0,0,0.32);
        }
 
        .team-node:hover::after,
        .team-orbit-node:hover::after {
          border-color: rgba(129, 199, 132, 0.9);
          box-shadow: 0 0 0 4px rgba(129, 199, 132, 0.25);
        }
 
        @media (max-width: 768px) {
          /* Keep the mobile scale-down for v1–v3,
             but do NOT shrink V4 so it can fully use the viewport width. */
          .team-section:not(.team-section--v4) .team-fruit {
            transform: scale(0.85);
          }
        }

        /* Partner Organizations */
        .partner-section {
          padding: 6rem 2rem;
          background: var(--color-bg-section-alt);
        }

        /* In Organizational Allies modal, allow non-square logos to size
           dynamically while sharing a common max width. This override applies
           only inside the partner section and leaves steward modals unchanged. */
        .partner-section .team-profile-photo {
          align-items: center; /* keep logo + websites visually centered as a column */
        }

        .partner-section .team-profile-avatar {
          width: 320px;
          max-width: 100%;
          height: auto;
          border-radius: 24px;
          padding: 1.25rem 1.5rem;
          background: radial-gradient(circle at 30% 20%, #ffffff, #d8e9c8);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-section .team-profile-avatar-img {
          width: 100%;
          height: auto;
          max-height: 260px;
          object-fit: contain;
          object-position: center;
          border-radius: 16px;
        }
 
        .partner-container {
          max-width: 1400px;
          margin: 0 auto;
        }
 
        .partner-grid {
          margin-top: 3.5rem;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 2rem;
          /* Ensure all rows share the same card height */
          grid-auto-rows: 1fr;
          align-items: stretch;
        }

        @media (max-width: 1200px) {
          .partner-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .partner-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .partner-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
 
        .partner-card {
          position: relative;
          background: var(--color-bg-card);
          border-radius: 20px;
          padding: 0;
          border: 1px solid var(--color-border-soft);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          outline: none;
          overflow: hidden;
          /* Fill the grid row so all cards in all rows share the same height */
          height: 100%;
        }
 
        .partner-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
          border-color: rgba(124, 179, 66, 0.55);
          background: radial-gradient(circle at top, rgba(232, 245, 233, 0.5), transparent 65%), var(--color-bg-card);
        }
 
        .partner-card-logo-wrap {
          flex: 1 1 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0;
          width: 100%;
          aspect-ratio: 4 / 3;
          padding: 0.9rem 1.1rem;
          box-sizing: border-box;
        }
 
        .partner-card-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Invert the Dark Matter Labs logo colours on its card only */
        .partner-card--darkmatter .partner-card-logo-img {
          filter: invert(1);
        }
 
        .partner-card-logo-initial {
          flex: 1 1 auto;
          width: 100%;
          height: 100%;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(124, 179, 66, 0.16), rgba(40, 95, 63, 0.2));
          border: 1px solid rgba(124, 179, 66, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-hero-from);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        }

        .partner-card-logo-initial span {
          font-size: 1.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }
 
        .partner-card-text h3 {
          font-size: 1.1rem;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
        }
 
        .partner-card-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--color-text-main);
          opacity: 0.9;
          display: -webkit-box;
          -webkit-line-clamp: 4; /* allow longer previews (e.g. The Hague Centre) */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .partner-card-readmore {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 50%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 0.9rem;
          background: linear-gradient(
            to top,
            rgba(124, 179, 66, 0.52),
            rgba(124, 179, 66, 0.0)
          );
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .partner-card:hover .partner-card-readmore {
          opacity: 1;
        }

        .network-card {
          background: var(--color-bg-card);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.3s;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          height: 100%;
          gap: 1.5rem;
        }
 
        .network-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .network-logo {
          height: 80px;
          width: auto;
          margin-bottom: 2rem;
        }

        .network-card h3 {
          font-size: 1.6rem;
          color: var(--color-text-main);
          margin-bottom: 1rem;
        }
 
        .network-card > p {
          color: var(--color-text-main);
          line-height: 1.7;
          margin-bottom: 2rem;
          /* Ensure the bullet list (with its dividers) starts at the same vertical
             position across all three cards when in a row, by giving the intro
             paragraph a consistent minimum height. This keeps the list items and
             their separators horizontally aligned between cards. */
          min-height: 4.5rem;
        }

        .network-features {
          list-style: none;
          text-align: left;
          margin-bottom: 2rem;
        }

        .network-features li {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 0;
          border-bottom: 1px solid #f0f0f0;
          color: var(--color-text-main);
        }

        .network-features i {
          color: var(--color-accent-primary);
          font-size: 1.2rem;
        }

        .btn-network {
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          margin-top: auto;
        }

        .btn-network:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(124, 179, 66, 0.3);
        }

        /* Q&A Section */
        .qa-section {
          padding: 6rem 2rem 3rem;
          background: var(--color-bg-page);
        }
 
        .qa-container {
          max-width: 900px;
          margin: 0 auto;
        }
 
        .qa-list {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
 
        .qa-item {
          border-radius: 18px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-soft);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.04);
          transition:
            box-shadow 0.32s ease,
            border-color 0.32s ease,
            transform 0.32s ease,
            background 0.32s ease;
        }
 
        .qa-item.open {
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
          border-color: rgba(124, 179, 66, 0.55);
          transform: translateY(-2px);
          background: radial-gradient(circle at top, rgba(232, 245, 233, 0.6), transparent 65%), var(--color-bg-card);
        }

        /* In dark mode, remove the light "blob" highlight from open Q&A cards */
        body.theme-dark .qa-item.open {
          background: var(--color-bg-card);
        }
 
        .qa-item-header {
          width: 100%;
          padding: 1.4rem 1.6rem;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          border-radius: 18px;
        }
 
        .qa-question {
          font-size: 1.1rem;
          font-weight: 400;
          font-family: inherit;
          color: var(--color-text-main);
          text-align: left;
        }
 
        .qa-toggle-icon {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid var(--color-border-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-main);
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
 
        .qa-toggle-icon i {
          font-size: 0.85rem;
        }
 
        .qa-toggle-icon.is-open {
          transform: rotate(180deg);
          background: rgba(124, 179, 66, 0.12);
          border-color: rgba(124, 179, 66, 0.6);
        }
 
        .qa-answer {
          padding: 0 1.6rem 1.4rem;
          animation: qaUnfold 0.32s ease-out;
          transform-origin: top;
        }
 
        .qa-answer p {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--color-text-main);
          opacity: 0.96;
        }

        @keyframes qaUnfold {
          from {
            opacity: 0;
            transform: scaleY(0.85);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        /* Subtle flash for the dark-mode "Increased Visibility" toggle
           to draw attention when it appears, without changing its base style. */
        @keyframes visFlash {
          0% {
            box-shadow: none;
            transform: translateY(0);
          }
          40% {
            box-shadow:
              0 0 0 1px rgba(252, 246, 231, 0.7),
              0 0 14px rgba(252, 246, 231, 0.9);
            transform: translateY(-1px);
          }
          100% {
            box-shadow: none;
            transform: translateY(0);
          }
        }

        @keyframes teamOrbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes teamOrbitCounterRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes expertVideoFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.6;
          }
        }

        @keyframes expertVideoFadeOut {
          from {
            opacity: 0.6;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes expertVideoFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.6;
          }
        }
 
        /* Vision Section */
        .vision-section {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #1e4d3d 0%, #2d5f4f 100%);
          position: relative;
          overflow: hidden;
          text-align: center;
          color: white;
        }

        .vision-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          /* Subtle light patterns only, no external file path so it works on GitHub Pages */
          background:
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08), transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.06), transparent 60%);
          opacity: 0.5;
        }

        .vision-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .vision-content h2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          margin-bottom: 2rem;
          line-height: 1.3;
        }

        .vision-statement {
          font-size: 1.4rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          opacity: 0.95;
        }

        .vision-quote {
          display: flex;
          align-items: center;
          gap: 1.4rem;
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.9;
          padding: 1.6rem 1.8rem;
          border-left: 4px solid #7cb342;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          text-align: left;
        }

        .vision-quote-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .vision-quote-author {
          margin-top: 0.35rem;
          text-align: left;
          font-size: 0.95rem;
        }

        .vision-quote-avatar {
          flex: 0 0 auto;
        }

        .vision-quote-avatar-inner {
          width: 144px;
          height: 144px;
          border-radius: 18px;
          background: radial-gradient(circle at 30% 20%, #ffffff, #c5e1a5);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
          overflow: hidden;
        }

        .vision-quote-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
          display: block;
        }

        .vision-quote-text-main {
          margin: 0;
          font-size: 1.2rem;
          font-style: italic;
        }

        @media (max-width: 600px) {
          .vision-quote {
            padding: 1.4rem 1.4rem;
          }

          .vision-quote-avatar-inner {
            width: 110px;
            height: 110px;
          }

          .vision-quote-text-main {
            font-size: 1.1rem;
          }
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 2rem;
          background: var(--color-bg-page);
        }

        .cta-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-content h2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
        }

        .cta-content > p {
          font-size: 1.2rem;
          color: var(--color-text-main);
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .btn-primary-large {
          background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
          color: white;
          border: none;
          padding: 1.5rem 3rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(124, 179, 66, 0.3);
        }

        .btn-primary-large:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(124, 179, 66, 0.4);
        }

        .btn-secondary-large {
          background: transparent;
          color: #1e4d3d;
          border: 2px solid #1e4d3d;
          padding: 1.5rem 3rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.3s;
        }

        .btn-secondary-large:hover {
          background: #1e4d3d;
          color: white;
        }

        .cta-contact {
          margin-top: 2rem;
        }

        .cta-contact p {
          color: var(--color-text-main);
          font-size: 1rem;
        }

        .cta-contact a {
          color: var(--color-accent-primary);
          text-decoration: none;
          font-weight: 600;
        }

        .cta-contact a:hover {
          text-decoration: underline;
        }

        /* Footer */
        .footer {
          background: #1e4d3d;
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--color-accent-primary);
        }

        .footer-logo svg {
          width: 50px;
          height: 50px;
        }

        .footer-column h4 {
          color: var(--color-accent-primary);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .footer-column ul {
          list-style: none;
        }

        .footer-column li {
          margin-bottom: 0.8rem;
        }

        .footer-column a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-column a:hover {
          color: var(--color-accent-primary);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-whole-system {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--color-accent-primary);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .footer-whole-system svg {
          width: 26px;
          height: 26px;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.9rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s;
        }

        .social-link:hover {
          background: var(--color-accent-primary);
          transform: translateY(-3px);
        }

        .footer-weco-row {
          margin-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          align-items: center;
        }

        .footer-weco,
        .footer-weco-svg,
        .footer-weco-svg-alt {
          margin-top: 0;
        }

        .footer-weco-circle,
        .footer-weco-svg,
        .footer-weco-svg-alt {
          width: 140px;
          max-width: 100%;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-weco-breathing {
          width: 100%;
          height: 100%;
          display: block;
          animation: breathe 5s ease-in-out infinite;
          transform-origin: center center;
        }

        .footer-weco-svg-element {
          width: 100%;
          height: 100%;
          overflow: visible;
          display: block;
        }

        .footer-weco-svg-element .footer-weco-ring {
          transform-box: fill-box;
          transform-origin: center;
          /* Same shimmer timing as header for version 2 */
          animation: shimmer-breath 6s ease-in-out infinite;
        }

        .footer-weco-svg-alt {
          margin-top: 0;
        }

        .footer-weco-svg-alt-element {
          width: 100%;
          height: 100%;
          overflow: visible;
          display: block;
        }

        .footer-weco-svg-alt-element .footer-weco-alt-ring {
          transform-origin: 50% 50%;
          transform-box: fill-box;
          animation: footer-weco-breathe-alt 7s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.25s);
        }

        /* Staggered shimmer delays for the 600×600 rings (inner → outer) */
        .footer-weco-svg-element .ring-1  { animation-delay: -0.0s; }  /* Inner */
        .footer-weco-svg-element .ring-2  { animation-delay: -0.15s; }
        .footer-weco-svg-element .ring-3  { animation-delay: -0.30s; }
        .footer-weco-svg-element .ring-4  { animation-delay: -0.45s; }
        .footer-weco-svg-element .ring-5  { animation-delay: -0.60s; }
        .footer-weco-svg-element .ring-6  { animation-delay: -0.75s; }
        .footer-weco-svg-element .ring-7  { animation-delay: -0.90s; }
        .footer-weco-svg-element .ring-8  { animation-delay: -1.05s; }
        .footer-weco-svg-element .ring-9  { animation-delay: -1.20s; }
        .footer-weco-svg-element .ring-10 { animation-delay: -1.35s; }
        .footer-weco-svg-element .ring-11 { animation-delay: -1.50s; }
        .footer-weco-svg-element .ring-12 { animation-delay: -1.65s; } /* Outer */

        @keyframes breathe {
          0% {
            transform: scale(0.96);
            filter: brightness(0.95) drop-shadow(0 0 12px rgba(0, 0, 0, 0.35));
          }
          50% {
            transform: scale(1.04);
            filter: brightness(1.05) drop-shadow(0 0 28px rgba(0, 255, 140, 0.45));
          }
          100% {
            transform: scale(0.96);
            filter: brightness(0.95) drop-shadow(0 0 12px rgba(0, 0, 0, 0.35));
          }
        }

        /* Shimmer-breath for the 600×600 concentric rings (logo version 2) */
        @keyframes shimmer-breath {
          0%, 100% {
            /* Start smaller to keep well inside the container */
            transform: scale(0.8);
            filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3));
          }
          50% {
            /* Expand noticeably, but still fully contained */
            transform: scale(1.05);
            filter: drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.4));
          }
        }

        @keyframes footer-weco-breathe-alt {
          0%,
          100% {
            transform: scale(0.97);
            opacity: 0.96;
          }
          50% {
            transform: scale(1.03);
            opacity: 1;
          }
        }

        /* Animations */
        @keyframes logoRipple {
          0% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 0.35;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScaleIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .nav-toggle {
            display: inline-flex;
          }

          .nav-mobile-menu {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--color-bg-card);
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
            border-bottom-left-radius: 18px;
            border-bottom-right-radius: 18px;
            border-top: 1px solid var(--color-border-soft);
            padding: 0.75rem 1.5rem 1rem;
            z-index: 999;
          }

          .nav-mobile-link {
            display: block;
            width: 100%;
            text-align: left;
            padding: 0.65rem 0;
            background: transparent;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.04);
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--color-text-main);
            cursor: pointer;
          }

          .nav-mobile-link:last-of-type {
            border-bottom: none;
          }

          /* Deck modal: full-screen on mobile with only the close button floating above */
          .deck-modal {
            max-width: 100%;
            width: 100%;
            max-height: 100vh;
            height: 100vh;
            border-radius: 0;
            padding: 0;
            border: none;
            box-shadow: none;
          }

          .deck-modal-frame {
            border-radius: 0;
            box-shadow: none;
          }

          .deck-backdrop {
            padding: 0.25rem;
          }
 
          .problem-container,
          .solution-container {
            grid-template-columns: 1fr;
          }
 
          .problem-container {
            gap: 1.5rem;
          }
 
          .problem-points {
            margin-top: 1.5rem;
          }
 
          .problem-visual img {
            margin-top: 0;
            margin-bottom: 0;
          }
 
          /* On mobile, show the Solution heading above the diagram and the body below */
          .solution-container {
            display: flex;
            flex-direction: column;
          }

          .solution-header-block {
            order: 1;
          }
 
          .solution-visual {
            order: 2;
          }

          .solution-body {
            order: 3;
          }

          .roadmap-phase {
            grid-template-columns: 60px 1fr;
            gap: 1.5rem;
          }

          .phase-number {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .phase-content {
            padding: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary-large,
          .btn-secondary-large {
            width: 100%;
            justify-content: center;
          }

          .roadmap-plan {
            justify-content: center;
          }

          .roadmap-plan-card {
            margin-left: 0;
            width: 100%;
          }
        }
      `}),a.jsxs("div",{className:"app-root",children:[a.jsx("div",{className:`deck-backdrop ${n?"is-open":""}`,onClick:n?c:void 0,children:a.jsxs("div",{className:"deck-modal",onClick:u=>u.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:c,"aria-label":"Close deck",children:"×"}),a.jsx("div",{className:"deck-modal-frame",children:a.jsx("iframe",{src:"https://gamma.app/embed/6lri4hq4c44s6jt",title:"The Gaia Ecosystem Introduction",style:{width:"100%",height:"100%",border:"0"},allow:"fullscreen"})})]})}),a.jsx(Bf,{theme:e,onToggleTheme:s}),a.jsx(Vf,{theme:e,onOpenDeck:l}),a.jsx(Hf,{}),a.jsx(Wf,{}),a.jsx($f,{}),a.jsx(Gf,{}),a.jsx(Yf,{}),a.jsx(qf,{}),a.jsx(Qf,{onOpenDeck:l,theme:e,highVisibility:o,onToggleHighVisibility:()=>i(u=>!u)}),a.jsx(sl,{id:"entry-points-architecture"}),a.jsx(Or,{version:"v1"}),a.jsx(Or,{version:"v2"}),a.jsx(Or,{version:"v3"}),a.jsx(Or,{version:"v4"}),a.jsx(Xf,{}),a.jsx(Kf,{}),a.jsx(sl,{}),a.jsx(Zf,{}),a.jsx(Jf,{}),a.jsx(ep,{}),a.jsx(tp,{})]})]})}li.createRoot(document.getElementById("root")).render(a.jsx(Mu.StrictMode,{children:a.jsx(np,{})}));
