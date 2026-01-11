(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ml={exports:{}},bo={},pl={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),Pd=Symbol.for("react.portal"),Id=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),_d=Symbol.for("react.provider"),Od=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Dd=Symbol.for("react.suspense"),Ad=Symbol.for("react.memo"),Md=Symbol.for("react.lazy"),ts=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var fl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hl=Object.assign,gl={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=gl,this.updater=n||fl}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vl(){}vl.prototype=Nn.prototype;function ra(e,t,n){this.props=e,this.context=t,this.refs=gl,this.updater=n||fl}var oa=ra.prototype=new vl;oa.constructor=ra;hl(oa,Nn.prototype);oa.isPureReactComponent=!0;var ns=Array.isArray,yl=Object.prototype.hasOwnProperty,ia={current:null},xl={key:!0,ref:!0,__self:!0,__source:!0};function wl(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)yl.call(t,r)&&!xl.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:fr,type:e,key:i,ref:s,props:o,_owner:ia.current}}function Ud(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function Bd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rs=/\/+/g;function Ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bd(""+e.key):t.toString(36)}function Mr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fr:case Pd:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Ao(s,0):r,ns(o)?(n="",e!=null&&(n=e.replace(rs,"$&/")+"/"),Mr(o,t,n,"",function(d){return d})):o!=null&&(aa(o)&&(o=Ud(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(rs,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",ns(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+Ao(i,l);s+=Mr(i,t,n,c,o)}else if(c=Fd(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+Ao(i,l++),s+=Mr(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function br(e,t,n){if(e==null)return e;var r=[],o=0;return Mr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Vd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Fr={transition:null},Hd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:ia};function bl(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Nn;R.Fragment=Id;R.Profiler=Ld;R.PureComponent=ra;R.StrictMode=Td;R.Suspense=Dd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hd;R.act=bl;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hl({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ia.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)yl.call(t,c)&&!xl.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:fr,type:e.type,key:o,ref:i,props:r,_owner:s}};R.createContext=function(e){return e={$$typeof:Od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_d,_context:e},e.Consumer=e};R.createElement=wl;R.createFactory=function(e){var t=wl.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Rd,render:e}};R.isValidElement=aa;R.lazy=function(e){return{$$typeof:Md,_payload:{_status:-1,_result:e},_init:Vd}};R.memo=function(e,t){return{$$typeof:Ad,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};R.unstable_act=bl;R.useCallback=function(e,t){return ge.current.useCallback(e,t)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,t){return ge.current.useEffect(e,t)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ge.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.3.1";pl.exports=R;var L=pl.exports;const $d=zd(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=L,Gd=Symbol.for("react.element"),Yd=Symbol.for("react.fragment"),Qd=Object.prototype.hasOwnProperty,qd=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function kl(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Qd.call(t,r)&&!Kd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Gd,type:e,key:i,ref:s,props:o,_owner:qd.current}}bo.Fragment=Yd;bo.jsx=kl;bo.jsxs=kl;ml.exports=bo;var a=ml.exports,di={},jl={exports:{}},ze={},Sl={exports:{}},Nl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,T){var _=j.length;j.push(T);e:for(;0<_;){var G=_-1>>>1,ee=j[G];if(0<o(ee,T))j[G]=T,j[_]=ee,_=G;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var T=j[0],_=j.pop();if(_!==T){j[0]=_;e:for(var G=0,ee=j.length,ut=ee>>>1;G<ut;){var Je=2*(G+1)-1,Te=j[Je],pe=Je+1,mt=j[pe];if(0>o(Te,_))pe<ee&&0>o(mt,Te)?(j[G]=mt,j[pe]=_,G=pe):(j[G]=Te,j[Je]=_,G=Je);else if(pe<ee&&0>o(mt,_))j[G]=mt,j[pe]=_,G=pe;else break e}}return T}function o(j,T){var _=j.sortIndex-T.sortIndex;return _!==0?_:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],f=1,h=null,g=3,y=!1,w=!1,b=!1,F=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=j)r(d),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(d)}}function v(j){if(b=!1,p(j),!w)if(n(c)!==null)w=!0,Kt(k);else{var T=n(d);T!==null&&Xt(v,T.startTime-j)}}function k(j,T){w=!1,b&&(b=!1,m(z),z=-1),y=!0;var _=g;try{for(p(T),h=n(c);h!==null&&(!(h.expirationTime>T)||j&&!ye());){var G=h.callback;if(typeof G=="function"){h.callback=null,g=h.priorityLevel;var ee=G(h.expirationTime<=T);T=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(c)&&r(c),p(T)}else r(c);h=n(c)}if(h!==null)var ut=!0;else{var Je=n(d);Je!==null&&Xt(v,Je.startTime-T),ut=!1}return ut}finally{h=null,g=_,y=!1}}var C=!1,E=null,z=-1,V=5,O=-1;function ye(){return!(e.unstable_now()-O<V)}function _t(){if(E!==null){var j=e.unstable_now();O=j;var T=!0;try{T=E(!0,j)}finally{T?Ie():(C=!1,E=null)}}else C=!1}var Ie;if(typeof u=="function")Ie=function(){u(_t)};else if(typeof MessageChannel<"u"){var zn=new MessageChannel,qt=zn.port2;zn.port1.onmessage=_t,Ie=function(){qt.postMessage(null)}}else Ie=function(){F(_t,0)};function Kt(j){E=j,C||(C=!0,Ie())}function Xt(j,T){z=F(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Kt(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var _=g;g=T;try{return j()}finally{g=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var _=g;g=j;try{return T()}finally{g=_}},e.unstable_scheduleCallback=function(j,T,_){var G=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=_+ee,j={id:f++,callback:T,priorityLevel:j,startTime:_,expirationTime:ee,sortIndex:-1},_>G?(j.sortIndex=_,t(d,j),n(c)===null&&j===n(d)&&(b?(m(z),z=-1):b=!0,Xt(v,_-G))):(j.sortIndex=ee,t(c,j),w||y||(w=!0,Kt(k))),j},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(j){var T=g;return function(){var _=g;g=T;try{return j.apply(this,arguments)}finally{g=_}}}})(Nl);Sl.exports=Nl;var Xd=Sl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=L,Ee=Xd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cl=new Set,Xn={};function Yt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(Xn[e]=t,e=0;e<t.length;e++)Cl.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ui=Object.prototype.hasOwnProperty,Jd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,os={},is={};function eu(e){return ui.call(is,e)?!0:ui.call(os,e)?!1:Jd.test(e)?is[e]=!0:(os[e]=!0,!1)}function tu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nu(e,t,n,r){if(t===null||typeof t>"u"||tu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var sa=/[\-:]([a-z])/g;function la(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sa,la);le[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sa,la);le[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sa,la);le[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ca(e,t,n,r){var o=le.hasOwnProperty(t)?le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nu(t,n,o,r)&&(n=null),r||o===null?eu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),da=Symbol.for("react.strict_mode"),mi=Symbol.for("react.profiler"),El=Symbol.for("react.provider"),zl=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),pi=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),ma=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Pl=Symbol.for("react.offscreen"),as=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Mo;function Mn(e){if(Mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mo=t&&t[1]||""}return`
`+Mo+e}var Fo=!1;function Uo(e,t){if(!e||Fo)return"";Fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Fo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function ru(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Uo(e.type,!1),e;case 11:return e=Uo(e.type.render,!1),e;case 1:return e=Uo(e.type,!0),e;default:return""}}function hi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case Jt:return"Portal";case mi:return"Profiler";case da:return"StrictMode";case pi:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zl:return(e.displayName||"Context")+".Consumer";case El:return(e._context.displayName||"Context")+".Provider";case ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ma:return t=e.displayName||null,t!==null?t:hi(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return hi(e(t))}catch{}}return null}function ou(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hi(t);case 8:return t===da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Il(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iu(e){var t=Il(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=iu(e))}function Tl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Il(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gi(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ss(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ll(e,t){t=t.checked,t!=null&&ca(e,"checked",t,!1)}function vi(e,t){Ll(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&yi(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ls(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yi(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function mn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Fn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function _l(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ol(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ol(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Rl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},au=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){au.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function Dl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function Al(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Dl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var su=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bi(e,t){if(t){if(su[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Si=null,pn=null,fn=null;function us(e){if(e=vr(e)){if(typeof Si!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Co(t),Si(e.stateNode,e.type,t))}}function Ml(e){pn?fn?fn.push(e):fn=[e]:pn=e}function Fl(){if(pn){var e=pn,t=fn;if(fn=pn=null,us(e),t)for(e=0;e<t.length;e++)us(t[e])}}function Ul(e,t){return e(t)}function Bl(){}var Bo=!1;function Vl(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Ul(e,t,n)}finally{Bo=!1,(pn!==null||fn!==null)&&(Bl(),Fl())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Ni=!1;if(at)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Ni=!1}function lu(e,t,n,r,o,i,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Hn=!1,Xr=null,Zr=!1,Ci=null,cu={onError:function(e){Hn=!0,Xr=e}};function du(e,t,n,r,o,i,s,l,c){Hn=!1,Xr=null,lu.apply(cu,arguments)}function uu(e,t,n,r,o,i,s,l,c){if(du.apply(this,arguments),Hn){if(Hn){var d=Xr;Hn=!1,Xr=null}else throw Error(x(198));Zr||(Zr=!0,Ci=d)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ms(e){if(Qt(e)!==e)throw Error(x(188))}function mu(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ms(o),e;if(i===r)return ms(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function $l(e){return e=mu(e),e!==null?Wl(e):null}function Wl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wl(e);if(t!==null)return t;e=e.sibling}return null}var Gl=Ee.unstable_scheduleCallback,ps=Ee.unstable_cancelCallback,pu=Ee.unstable_shouldYield,fu=Ee.unstable_requestPaint,J=Ee.unstable_now,hu=Ee.unstable_getCurrentPriorityLevel,fa=Ee.unstable_ImmediatePriority,Yl=Ee.unstable_UserBlockingPriority,Jr=Ee.unstable_NormalPriority,gu=Ee.unstable_LowPriority,Ql=Ee.unstable_IdlePriority,ko=null,Xe=null;function vu(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:wu,yu=Math.log,xu=Math.LN2;function wu(e){return e>>>=0,e===0?32:31-(yu(e)/xu|0)|0}var Nr=64,Cr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Un(l):(i&=s,i!==0&&(r=Un(i)))}else s=n&~o,s!==0?r=Un(s):i!==0&&(r=Un(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),o=1<<n,r|=e[n],t&=~o;return r}function bu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ku(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-$e(i),l=1<<s,c=o[s];c===-1?(!(l&n)||l&r)&&(o[s]=bu(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ql(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function ju(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$e(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function Kl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xl,ga,Zl,Jl,ec,zi=!1,Er=[],wt=null,bt=null,kt=null,er=new Map,tr=new Map,gt=[],Su="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fs(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function Ln(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=vr(t),t!==null&&ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Nu(e,t,n,r,o){switch(t){case"focusin":return wt=Ln(wt,e,t,n,r,o),!0;case"dragenter":return bt=Ln(bt,e,t,n,r,o),!0;case"mouseover":return kt=Ln(kt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return er.set(i,Ln(er.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,tr.set(i,Ln(tr.get(i)||null,e,t,n,r,o)),!0}return!1}function tc(e){var t=Dt(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Hl(n),t!==null){e.blockedOn=t,ec(e.priority,function(){Zl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=vr(n),t!==null&&ga(t),e.blockedOn=n,!1;t.shift()}return!0}function hs(e,t,n){Ur(e)&&n.delete(t)}function Cu(){zi=!1,wt!==null&&Ur(wt)&&(wt=null),bt!==null&&Ur(bt)&&(bt=null),kt!==null&&Ur(kt)&&(kt=null),er.forEach(hs),tr.forEach(hs)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,zi||(zi=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Cu)))}function nr(e){function t(o){return _n(o,e)}if(0<Er.length){_n(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&_n(wt,e),bt!==null&&_n(bt,e),kt!==null&&_n(kt,e),er.forEach(t),tr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)tc(n),n.blockedOn===null&&gt.shift()}var hn=dt.ReactCurrentBatchConfig,to=!0;function Eu(e,t,n,r){var o=M,i=hn.transition;hn.transition=null;try{M=1,va(e,t,n,r)}finally{M=o,hn.transition=i}}function zu(e,t,n,r){var o=M,i=hn.transition;hn.transition=null;try{M=4,va(e,t,n,r)}finally{M=o,hn.transition=i}}function va(e,t,n,r){if(to){var o=Pi(e,t,n,r);if(o===null)Zo(e,t,r,no,n),fs(e,r);else if(Nu(o,e,t,n,r))r.stopPropagation();else if(fs(e,r),t&4&&-1<Su.indexOf(e)){for(;o!==null;){var i=vr(o);if(i!==null&&Xl(i),i=Pi(e,t,n,r),i===null&&Zo(e,t,r,no,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var no=null;function Pi(e,t,n,r){if(no=null,e=pa(r),e=Dt(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hu()){case fa:return 1;case Yl:return 4;case Jr:case gu:return 16;case Ql:return 536870912;default:return 16}default:return 16}}var yt=null,ya=null,Br=null;function rc(){if(Br)return Br;var e,t=ya,n=t.length,r,o="value"in yt?yt.value:yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Br=o.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function gs(){return!1}function Pe(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zr:gs,this.isPropagationStopped=gs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=Pe(Cn),gr=K({},Cn,{view:0,detail:0}),Pu=Pe(gr),Ho,$o,On,jo=K({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(Ho=e.screenX-On.screenX,$o=e.screenY-On.screenY):$o=Ho=0,On=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),vs=Pe(jo),Iu=K({},jo,{dataTransfer:0}),Tu=Pe(Iu),Lu=K({},gr,{relatedTarget:0}),Wo=Pe(Lu),_u=K({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ou=Pe(_u),Ru=K({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Du=Pe(Ru),Au=K({},Cn,{data:0}),ys=Pe(Au),Mu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uu[e])?!!t[e]:!1}function wa(){return Bu}var Vu=K({},gr,{key:function(e){if(e.key){var t=Mu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hu=Pe(Vu),$u=K({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=Pe($u),Wu=K({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),Gu=Pe(Wu),Yu=K({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qu=Pe(Yu),qu=K({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ku=Pe(qu),Xu=[9,13,27,32],ba=at&&"CompositionEvent"in window,$n=null;at&&"documentMode"in document&&($n=document.documentMode);var Zu=at&&"TextEvent"in window&&!$n,oc=at&&(!ba||$n&&8<$n&&11>=$n),ws=" ",bs=!1;function ic(e,t){switch(e){case"keyup":return Xu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Ju(e,t){switch(e){case"compositionend":return ac(t);case"keypress":return t.which!==32?null:(bs=!0,ws);case"textInput":return e=t.data,e===ws&&bs?null:e;default:return null}}function em(e,t){if(tn)return e==="compositionend"||!ba&&ic(e,t)?(e=rc(),Br=ya=yt=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tm[e.type]:t==="textarea"}function sc(e,t,n,r){Ml(r),t=ro(t,"onChange"),0<t.length&&(n=new xa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,rr=null;function nm(e){yc(e,0)}function So(e){var t=on(e);if(Tl(t))return e}function rm(e,t){if(e==="change")return t}var lc=!1;if(at){var Go;if(at){var Yo="oninput"in document;if(!Yo){var js=document.createElement("div");js.setAttribute("oninput","return;"),Yo=typeof js.oninput=="function"}Go=Yo}else Go=!1;lc=Go&&(!document.documentMode||9<document.documentMode)}function Ss(){Wn&&(Wn.detachEvent("onpropertychange",cc),rr=Wn=null)}function cc(e){if(e.propertyName==="value"&&So(rr)){var t=[];sc(t,rr,e,pa(e)),Vl(nm,t)}}function om(e,t,n){e==="focusin"?(Ss(),Wn=t,rr=n,Wn.attachEvent("onpropertychange",cc)):e==="focusout"&&Ss()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return So(rr)}function am(e,t){if(e==="click")return So(t)}function sm(e,t){if(e==="input"||e==="change")return So(t)}function lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:lm;function or(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ui.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function Ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cs(e,t){var n=Ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ns(n)}}function dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uc(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cm(e){var t=uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dc(n.ownerDocument.documentElement,n)){if(r!==null&&ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Cs(n,i);var s=Cs(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dm=at&&"documentMode"in document&&11>=document.documentMode,nn=null,Ii=null,Gn=null,Ti=!1;function Es(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ti||nn==null||nn!==Kr(r)||(r=nn,"selectionStart"in r&&ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&or(Gn,r)||(Gn=r,r=ro(Ii,"onSelect"),0<r.length&&(t=new xa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},Qo={},mc={};at&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function No(e){if(Qo[e])return Qo[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mc)return Qo[e]=t[n];return e}var pc=No("animationend"),fc=No("animationiteration"),hc=No("animationstart"),gc=No("transitionend"),vc=new Map,zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){vc.set(e,t),Yt(t,[e])}for(var qo=0;qo<zs.length;qo++){var Ko=zs[qo],um=Ko.toLowerCase(),mm=Ko[0].toUpperCase()+Ko.slice(1);It(um,"on"+mm)}It(pc,"onAnimationEnd");It(fc,"onAnimationIteration");It(hc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(gc,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Ps(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uu(r,t,void 0,e),e.currentTarget=null}function yc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;Ps(o,l,d),i=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;Ps(o,l,d),i=c}}}if(Zr)throw e=Ci,Zr=!1,Ci=null,e}function $(e,t){var n=t[Di];n===void 0&&(n=t[Di]=new Set);var r=e+"__bubble";n.has(r)||(xc(t,e,2,!1),n.add(r))}function Xo(e,t,n){var r=0;t&&(r|=4),xc(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Ir]){e[Ir]=!0,Cl.forEach(function(n){n!=="selectionchange"&&(pm.has(n)||Xo(n,!1,e),Xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,Xo("selectionchange",!1,t))}}function xc(e,t,n,r){switch(nc(t)){case 1:var o=Eu;break;case 4:o=zu;break;default:o=va}n=o.bind(null,t,n,e),o=void 0,!Ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Dt(l),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Vl(function(){var d=i,f=pa(n),h=[];e:{var g=vc.get(e);if(g!==void 0){var y=xa,w=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":y=Hu;break;case"focusin":w="focus",y=Wo;break;case"focusout":w="blur",y=Wo;break;case"beforeblur":case"afterblur":y=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Tu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Gu;break;case pc:case fc:case hc:y=Ou;break;case gc:y=Qu;break;case"scroll":y=Pu;break;case"wheel":y=Ku;break;case"copy":case"cut":case"paste":y=Du;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xs}var b=(t&4)!==0,F=!b&&e==="scroll",m=b?g!==null?g+"Capture":null:g;b=[];for(var u=d,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,m!==null&&(v=Jn(u,m),v!=null&&b.push(ar(u,v,p)))),F)break;u=u.return}0<b.length&&(g=new y(g,w,null,n,f),h.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==ji&&(w=n.relatedTarget||n.fromElement)&&(Dt(w)||w[st]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=d,w=w?Dt(w):null,w!==null&&(F=Qt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=d),y!==w)){if(b=vs,v="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=xs,v="onPointerLeave",m="onPointerEnter",u="pointer"),F=y==null?g:on(y),p=w==null?g:on(w),g=new b(v,u+"leave",y,n,f),g.target=F,g.relatedTarget=p,v=null,Dt(f)===d&&(b=new b(m,u+"enter",w,n,f),b.target=p,b.relatedTarget=F,v=b),F=v,y&&w)t:{for(b=y,m=w,u=0,p=b;p;p=Zt(p))u++;for(p=0,v=m;v;v=Zt(v))p++;for(;0<u-p;)b=Zt(b),u--;for(;0<p-u;)m=Zt(m),p--;for(;u--;){if(b===m||m!==null&&b===m.alternate)break t;b=Zt(b),m=Zt(m)}b=null}else b=null;y!==null&&Is(h,g,y,b,!1),w!==null&&F!==null&&Is(h,F,w,b,!0)}}e:{if(g=d?on(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=rm;else if(ks(g))if(lc)k=sm;else{k=im;var C=om}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=am);if(k&&(k=k(e,d))){sc(h,k,n,f);break e}C&&C(e,g,d),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&yi(g,"number",g.value)}switch(C=d?on(d):window,e){case"focusin":(ks(C)||C.contentEditable==="true")&&(nn=C,Ii=d,Gn=null);break;case"focusout":Gn=Ii=nn=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,Es(h,n,f);break;case"selectionchange":if(dm)break;case"keydown":case"keyup":Es(h,n,f)}var E;if(ba)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else tn?ic(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(oc&&n.locale!=="ko"&&(tn||z!=="onCompositionStart"?z==="onCompositionEnd"&&tn&&(E=rc()):(yt=f,ya="value"in yt?yt.value:yt.textContent,tn=!0)),C=ro(d,z),0<C.length&&(z=new ys(z,e,null,n,f),h.push({event:z,listeners:C}),E?z.data=E:(E=ac(n),E!==null&&(z.data=E)))),(E=Zu?Ju(e,n):em(e,n))&&(d=ro(d,"onBeforeInput"),0<d.length&&(f=new ys("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=E))}yc(h,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Jn(e,n),i!=null&&r.unshift(ar(e,i,o)),i=Jn(e,t),i!=null&&r.push(ar(e,i,o))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Is(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,o?(c=Jn(n,i),c!=null&&s.unshift(ar(n,c,l))):o||(c=Jn(n,i),c!=null&&s.push(ar(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var fm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function Ts(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(hm,"")}function Tr(e,t,n){if(t=Ts(t),Ts(e)!==t&&n)throw Error(x(425))}function oo(){}var Li=null,_i=null;function Oi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ri=typeof setTimeout=="function"?setTimeout:void 0,gm=typeof clearTimeout=="function"?clearTimeout:void 0,Ls=typeof Promise=="function"?Promise:void 0,vm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ls<"u"?function(e){return Ls.resolve(null).then(e).catch(ym)}:Ri;function ym(e){setTimeout(function(){throw e})}function Jo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);nr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _s(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var En=Math.random().toString(36).slice(2),Ke="__reactFiber$"+En,sr="__reactProps$"+En,st="__reactContainer$"+En,Di="__reactEvents$"+En,xm="__reactListeners$"+En,wm="__reactHandles$"+En;function Dt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_s(e);e!==null;){if(n=e[Ke])return n;e=_s(e)}return t}e=n,n=e.parentNode}return null}function vr(e){return e=e[Ke]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Co(e){return e[sr]||null}var Ai=[],an=-1;function Tt(e){return{current:e}}function W(e){0>an||(e.current=Ai[an],Ai[an]=null,an--)}function B(e,t){an++,Ai[an]=e.current,e.current=t}var Pt={},me=Tt(Pt),be=Tt(!1),Vt=Pt;function xn(e,t){var n=e.type.contextTypes;if(!n)return Pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function io(){W(be),W(me)}function Os(e,t,n){if(me.current!==Pt)throw Error(x(168));B(me,t),B(be,n)}function wc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,ou(e)||"Unknown",o));return K({},n,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Vt=me.current,B(me,e),B(be,be.current),!0}function Rs(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=wc(e,t,Vt),r.__reactInternalMemoizedMergedChildContext=e,W(be),W(me),B(me,e)):W(be),B(be,n)}var tt=null,Eo=!1,ei=!1;function bc(e){tt===null?tt=[e]:tt.push(e)}function bm(e){Eo=!0,bc(e)}function Lt(){if(!ei&&tt!==null){ei=!0;var e=0,t=M;try{var n=tt;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Eo=!1}catch(o){throw tt!==null&&(tt=tt.slice(e+1)),Gl(fa,Lt),o}finally{M=t,ei=!1}}return null}var sn=[],ln=0,so=null,lo=0,Le=[],_e=0,Ht=null,nt=1,rt="";function Ot(e,t){sn[ln++]=lo,sn[ln++]=so,so=e,lo=t}function kc(e,t,n){Le[_e++]=nt,Le[_e++]=rt,Le[_e++]=Ht,Ht=e;var r=nt;e=rt;var o=32-$e(r)-1;r&=~(1<<o),n+=1;var i=32-$e(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,nt=1<<32-$e(t)+o|n<<o|r,rt=i+e}else nt=1<<i|n<<o|r,rt=e}function ja(e){e.return!==null&&(Ot(e,1),kc(e,1,0))}function Sa(e){for(;e===so;)so=sn[--ln],sn[ln]=null,lo=sn[--ln],sn[ln]=null;for(;e===Ht;)Ht=Le[--_e],Le[_e]=null,rt=Le[--_e],Le[_e]=null,nt=Le[--_e],Le[_e]=null}var Ce=null,Ne=null,Y=!1,He=null;function jc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ds(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ne=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ne=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if(Y){var t=Ne;if(t){var n=t;if(!Ds(e,t)){if(Mi(e))throw Error(x(418));t=jt(n.nextSibling);var r=Ce;t&&Ds(e,t)?jc(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ce=e)}}else{if(Mi(e))throw Error(x(418));e.flags=e.flags&-4097|2,Y=!1,Ce=e}}}function As(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Lr(e){if(e!==Ce)return!1;if(!Y)return As(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oi(e.type,e.memoizedProps)),t&&(t=Ne)){if(Mi(e))throw Sc(),Error(x(418));for(;t;)jc(e,t),t=jt(t.nextSibling)}if(As(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Ce?jt(e.stateNode.nextSibling):null;return!0}function Sc(){for(var e=Ne;e;)e=jt(e.nextSibling)}function wn(){Ne=Ce=null,Y=!1}function Na(e){He===null?He=[e]:He.push(e)}var km=dt.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ms(e){var t=e._init;return t(e._payload)}function Nc(e){function t(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function r(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function o(m,u){return m=Et(m,u),m.index=0,m.sibling=null,m}function i(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,p,v){return u===null||u.tag!==6?(u=si(p,m.mode,v),u.return=m,u):(u=o(u,p),u.return=m,u)}function c(m,u,p,v){var k=p.type;return k===en?f(m,u,p.props.children,v,p.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ft&&Ms(k)===u.type)?(v=o(u,p.props),v.ref=Rn(m,u,p),v.return=m,v):(v=qr(p.type,p.key,p.props,null,m.mode,v),v.ref=Rn(m,u,p),v.return=m,v)}function d(m,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=li(p,m.mode,v),u.return=m,u):(u=o(u,p.children||[]),u.return=m,u)}function f(m,u,p,v,k){return u===null||u.tag!==7?(u=Ut(p,m.mode,v,k),u.return=m,u):(u=o(u,p),u.return=m,u)}function h(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=si(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case kr:return p=qr(u.type,u.key,u.props,null,m.mode,p),p.ref=Rn(m,null,u),p.return=m,p;case Jt:return u=li(u,m.mode,p),u.return=m,u;case ft:var v=u._init;return h(m,v(u._payload),p)}if(Fn(u)||In(u))return u=Ut(u,m.mode,p,null),u.return=m,u;_r(m,u)}return null}function g(m,u,p,v){var k=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(m,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:return p.key===k?c(m,u,p,v):null;case Jt:return p.key===k?d(m,u,p,v):null;case ft:return k=p._init,g(m,u,k(p._payload),v)}if(Fn(p)||In(p))return k!==null?null:f(m,u,p,v,null);_r(m,p)}return null}function y(m,u,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(p)||null,l(u,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kr:return m=m.get(v.key===null?p:v.key)||null,c(u,m,v,k);case Jt:return m=m.get(v.key===null?p:v.key)||null,d(u,m,v,k);case ft:var C=v._init;return y(m,u,p,C(v._payload),k)}if(Fn(v)||In(v))return m=m.get(p)||null,f(u,m,v,k,null);_r(u,v)}return null}function w(m,u,p,v){for(var k=null,C=null,E=u,z=u=0,V=null;E!==null&&z<p.length;z++){E.index>z?(V=E,E=null):V=E.sibling;var O=g(m,E,p[z],v);if(O===null){E===null&&(E=V);break}e&&E&&O.alternate===null&&t(m,E),u=i(O,u,z),C===null?k=O:C.sibling=O,C=O,E=V}if(z===p.length)return n(m,E),Y&&Ot(m,z),k;if(E===null){for(;z<p.length;z++)E=h(m,p[z],v),E!==null&&(u=i(E,u,z),C===null?k=E:C.sibling=E,C=E);return Y&&Ot(m,z),k}for(E=r(m,E);z<p.length;z++)V=y(E,m,z,p[z],v),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?z:V.key),u=i(V,u,z),C===null?k=V:C.sibling=V,C=V);return e&&E.forEach(function(ye){return t(m,ye)}),Y&&Ot(m,z),k}function b(m,u,p,v){var k=In(p);if(typeof k!="function")throw Error(x(150));if(p=k.call(p),p==null)throw Error(x(151));for(var C=k=null,E=u,z=u=0,V=null,O=p.next();E!==null&&!O.done;z++,O=p.next()){E.index>z?(V=E,E=null):V=E.sibling;var ye=g(m,E,O.value,v);if(ye===null){E===null&&(E=V);break}e&&E&&ye.alternate===null&&t(m,E),u=i(ye,u,z),C===null?k=ye:C.sibling=ye,C=ye,E=V}if(O.done)return n(m,E),Y&&Ot(m,z),k;if(E===null){for(;!O.done;z++,O=p.next())O=h(m,O.value,v),O!==null&&(u=i(O,u,z),C===null?k=O:C.sibling=O,C=O);return Y&&Ot(m,z),k}for(E=r(m,E);!O.done;z++,O=p.next())O=y(E,m,z,O.value,v),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?z:O.key),u=i(O,u,z),C===null?k=O:C.sibling=O,C=O);return e&&E.forEach(function(_t){return t(m,_t)}),Y&&Ot(m,z),k}function F(m,u,p,v){if(typeof p=="object"&&p!==null&&p.type===en&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:e:{for(var k=p.key,C=u;C!==null;){if(C.key===k){if(k=p.type,k===en){if(C.tag===7){n(m,C.sibling),u=o(C,p.props.children),u.return=m,m=u;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ft&&Ms(k)===C.type){n(m,C.sibling),u=o(C,p.props),u.ref=Rn(m,C,p),u.return=m,m=u;break e}n(m,C);break}else t(m,C);C=C.sibling}p.type===en?(u=Ut(p.props.children,m.mode,v,p.key),u.return=m,m=u):(v=qr(p.type,p.key,p.props,null,m.mode,v),v.ref=Rn(m,u,p),v.return=m,m=v)}return s(m);case Jt:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(m,u.sibling),u=o(u,p.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=li(p,m.mode,v),u.return=m,m=u}return s(m);case ft:return C=p._init,F(m,u,C(p._payload),v)}if(Fn(p))return w(m,u,p,v);if(In(p))return b(m,u,p,v);_r(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(m,u.sibling),u=o(u,p),u.return=m,m=u):(n(m,u),u=si(p,m.mode,v),u.return=m,m=u),s(m)):n(m,u)}return F}var bn=Nc(!0),Cc=Nc(!1),co=Tt(null),uo=null,cn=null,Ca=null;function Ea(){Ca=cn=uo=null}function za(e){var t=co.current;W(co),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){uo=e,Ca=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(uo===null)throw Error(x(308));cn=e,uo.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var At=null;function Pa(e){At===null?At=[e]:At.push(e)}function Ec(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pa(t)):(n.next=o.next,o.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,lt(e,n)}return o=r.interleaved,o===null?(t.next=t,Pa(r)):(t.next=o.next,o.next=t),r.interleaved=t,lt(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function Fs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var o=e.updateQueue;ht=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?i=d:s.next=d,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;s=0,f=d=c=null,l=i;do{var g=l.lane,y=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,b=l;switch(g=t,y=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){h=w.call(y,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,g=typeof w=="function"?w.call(y,h,g):w,g==null)break e;h=K({},h,g);break e;case 2:ht=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=y,c=h):f=f.next=y,s|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(c=h),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Wt|=s,e.lanes=s,e.memoizedState=h}}function Us(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var yr={},Ze=Tt(yr),lr=Tt(yr),cr=Tt(yr);function Mt(e){if(e===yr)throw Error(x(174));return e}function Ta(e,t){switch(B(cr,t),B(lr,e),B(Ze,yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wi(t,e)}W(Ze),B(Ze,t)}function kn(){W(Ze),W(lr),W(cr)}function Pc(e){Mt(cr.current);var t=Mt(Ze.current),n=wi(t,e.type);t!==n&&(B(lr,e),B(Ze,n))}function La(e){lr.current===e&&(W(Ze),W(lr))}var Q=Tt(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function _a(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var $r=dt.ReactCurrentDispatcher,ni=dt.ReactCurrentBatchConfig,$t=0,q=null,ne=null,oe=null,fo=!1,Yn=!1,dr=0,jm=0;function ce(){throw Error(x(321))}function Oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Ra(e,t,n,r,o,i){if($t=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Em:zm,e=n(r,o),Yn){i=0;do{if(Yn=!1,dr=0,25<=i)throw Error(x(301));i+=1,oe=ne=null,t.updateQueue=null,$r.current=Pm,e=n(r,o)}while(Yn)}if($r.current=ho,t=ne!==null&&ne.next!==null,$t=0,oe=ne=q=null,fo=!1,t)throw Error(x(300));return e}function Da(){var e=dr!==0;return dr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?q.memoizedState=oe=e:oe=oe.next=e,oe}function Me(){if(ne===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?q.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(x(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?q.memoizedState=oe=e:oe=oe.next=e}return oe}function ur(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=Me(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,c=null,d=i;do{var f=d.lane;if(($t&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,q.lanes|=f,Wt|=f}d=d.next}while(d!==null&&d!==i);c===null?s=r:c.next=l,Ge(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,Wt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oi(e){var t=Me(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Ge(i,t.memoizedState)||(we=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ic(){}function Tc(e,t){var n=q,r=Me(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,we=!0),r=r.queue,Aa(Oc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,mr(9,_c.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(x(349));$t&30||Lc(n,t,o)}return o}function Lc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _c(e,t,n,r){t.value=n,t.getSnapshot=r,Rc(t)&&Dc(e)}function Oc(e,t,n){return n(function(){Rc(t)&&Dc(e)})}function Rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Dc(e){var t=lt(e,1);t!==null&&We(t,e,1,-1)}function Bs(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Cm.bind(null,q,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ac(){return Me().memoizedState}function Wr(e,t,n,r){var o=qe();q.flags|=e,o.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function zo(e,t,n,r){var o=Me();r=r===void 0?null:r;var i=void 0;if(ne!==null){var s=ne.memoizedState;if(i=s.destroy,r!==null&&Oa(r,s.deps)){o.memoizedState=mr(t,n,i,r);return}}q.flags|=e,o.memoizedState=mr(1|t,n,i,r)}function Vs(e,t){return Wr(8390656,8,e,t)}function Aa(e,t){return zo(2048,8,e,t)}function Mc(e,t){return zo(4,2,e,t)}function Fc(e,t){return zo(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bc(e,t,n){return n=n!=null?n.concat([e]):null,zo(4,4,Uc.bind(null,t,e),n)}function Ma(){}function Vc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $c(e,t,n){return $t&21?(Ge(n,t)||(n=ql(),q.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function Sm(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ni.transition;ni.transition={};try{e(!1),t()}finally{M=n,ni.transition=r}}function Wc(){return Me().memoizedState}function Nm(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e))Yc(t,n);else if(n=Ec(e,t,n,r),n!==null){var o=he();We(n,e,r,o),Qc(n,t,r)}}function Cm(e,t,n){var r=Ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))Yc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Ge(l,s)){var c=t.interleaved;c===null?(o.next=o,Pa(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Ec(e,t,o,r),n!==null&&(o=he(),We(n,e,r,o),Qc(n,t,r))}}function Gc(e){var t=e.alternate;return e===q||t!==null&&t===q}function Yc(e,t){Yn=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var ho={readContext:Ae,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Em={readContext:Ae,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Vs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,Uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:Bs,useDebugValue:Ma,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=Bs(!1),t=e[0];return e=Sm.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=qe();if(Y){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ie===null)throw Error(x(349));$t&30||Lc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Vs(Oc.bind(null,r,i,e),[e]),r.flags|=2048,mr(9,_c.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=qe(),t=ie.identifierPrefix;if(Y){var n=rt,r=nt;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zm={readContext:Ae,useCallback:Vc,useContext:Ae,useEffect:Aa,useImperativeHandle:Bc,useInsertionEffect:Mc,useLayoutEffect:Fc,useMemo:Hc,useReducer:ri,useRef:Ac,useState:function(){return ri(ur)},useDebugValue:Ma,useDeferredValue:function(e){var t=Me();return $c(t,ne.memoizedState,e)},useTransition:function(){var e=ri(ur)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Tc,useId:Wc,unstable_isNewReconciler:!1},Pm={readContext:Ae,useCallback:Vc,useContext:Ae,useEffect:Aa,useImperativeHandle:Bc,useInsertionEffect:Mc,useLayoutEffect:Fc,useMemo:Hc,useReducer:oi,useRef:Ac,useState:function(){return oi(ur)},useDebugValue:Ma,useDeferredValue:function(e){var t=Me();return ne===null?t.memoizedState=e:$c(t,ne.memoizedState,e)},useTransition:function(){var e=oi(ur)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Tc,useId:Wc,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),o=Ct(e),i=ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=St(e,i,o),t!==null&&(We(t,e,o,r),Hr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),o=Ct(e),i=ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=St(e,i,o),t!==null&&(We(t,e,o,r),Hr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Ct(e),o=ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=St(e,o,r),t!==null&&(We(t,e,r,n),Hr(t,e,r))}};function Hs(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(o,i):!0}function qc(e,t,n){var r=!1,o=Pt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=ke(t)?Vt:me.current,r=t.contextTypes,i=(r=r!=null)?xn(e,o):Pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function $s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function Vi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ia(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=ke(t)?Vt:me.current,o.context=xn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Po.enqueueReplaceState(o,o.state,null),mo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",r=t;do n+=ru(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ii(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Im=typeof WeakMap=="function"?WeakMap:Map;function Kc(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,Ji=r),Hi(e,t)},n}function Xc(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hi(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ws(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Im;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$m.bind(null,e,t,n),t.then(e,e))}function Gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ys(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var Tm=dt.ReactCurrentOwner,we=!1;function fe(e,t,n,r){t.child=e===null?Cc(t,null,n,r):bn(t,e.child,n,r)}function Qs(e,t,n,r,o){n=n.render;var i=t.ref;return gn(t,o),r=Ra(e,t,n,r,i,o),n=Da(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Y&&n&&ja(t),t.flags|=1,fe(e,t,r,o),t.child)}function qs(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ga(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Zc(e,t,i,r,o)):(e=qr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(s,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=Et(i,r),e.ref=t.ref,e.return=t,t.child=e}function Zc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(or(i,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ct(e,t,o)}return $i(e,t,n,r,o)}function Jc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(un,Se),Se|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(un,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(un,Se),Se|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(un,Se),Se|=r;return fe(e,t,o,n),t.child}function ed(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $i(e,t,n,r,o){var i=ke(n)?Vt:me.current;return i=xn(t,i),gn(t,o),n=Ra(e,t,n,r,i,o),r=Da(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Y&&r&&ja(t),t.flags|=1,fe(e,t,n,o),t.child)}function Ks(e,t,n,r,o){if(ke(n)){var i=!0;ao(t)}else i=!1;if(gn(t,o),t.stateNode===null)Gr(e,t),qc(t,n,r),Vi(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=ke(n)?Vt:me.current,d=xn(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==d)&&$s(t,s,r,d),ht=!1;var g=t.memoizedState;s.state=g,mo(t,r,s,o),c=t.memoizedState,l!==r||g!==c||be.current||ht?(typeof f=="function"&&(Bi(t,n,f,r),c=t.memoizedState),(l=ht||Hs(t,n,l,r,g,c,d))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,zc(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Be(t.type,l),s.props=d,h=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ae(c):(c=ke(n)?Vt:me.current,c=xn(t,c));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||g!==c)&&$s(t,s,r,c),ht=!1,g=t.memoizedState,s.state=g,mo(t,r,s,o);var w=t.memoizedState;l!==h||g!==w||be.current||ht?(typeof y=="function"&&(Bi(t,n,y,r),w=t.memoizedState),(d=ht||Hs(t,n,d,r,g,w,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Wi(e,t,n,r,i,o)}function Wi(e,t,n,r,o,i){ed(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Rs(t,n,!1),ct(e,t,i);r=t.stateNode,Tm.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=bn(t,e.child,null,i),t.child=bn(t,null,l,i)):fe(e,t,l,i),t.memoizedState=r.state,o&&Rs(t,n,!0),t.child}function td(e){var t=e.stateNode;t.pendingContext?Os(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Os(e,t.context,!1),Ta(e,t.containerInfo)}function Xs(e,t,n,r,o){return wn(),Na(o),t.flags|=256,fe(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function nd(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(Q,o&1),e===null)return Fi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Lo(s,r,0,null),e=Ut(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yi(n),t.memoizedState=Gi,e):Fa(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Lm(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Et(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Et(l,i):(i=Ut(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Yi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=Et(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fa(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Or(e,t,n,r){return r!==null&&Na(r),bn(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lm(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=ii(Error(x(422))),Or(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Lo({mode:"visible",children:r.children},o,0,null),i=Ut(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&bn(t,e.child,null,s),t.child.memoizedState=Yi(s),t.memoizedState=Gi,i);if(!(t.mode&1))return Or(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(x(419)),r=ii(i,r,void 0),Or(e,t,s,r)}if(l=(s&e.childLanes)!==0,we||l){if(r=ie,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,lt(e,o),We(r,e,o,-1))}return Wa(),r=ii(Error(x(421))),Or(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Wm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ne=jt(o.nextSibling),Ce=t,Y=!0,He=null,e!==null&&(Le[_e++]=nt,Le[_e++]=rt,Le[_e++]=Ht,nt=e.id,rt=e.overflow,Ht=t),t=Fa(t,r.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function ai(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function rd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(fe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ai(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ai(t,!0,n,null,i);break;case"together":ai(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _m(e,t,n){switch(t.tag){case 3:td(t),wn();break;case 5:Pc(t);break;case 1:ke(t.type)&&ao(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(co,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?nd(e,t,n):(B(Q,Q.current&1),e=ct(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Jc(e,t,n)}return ct(e,t,n)}var od,Qi,id,ad;od=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qi=function(){};id=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Mt(Ze.current);var i=null;switch(n){case"input":o=gi(e,o),r=gi(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=xi(e,o),r=xi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}bi(n,r);var s;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var l=o[d];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(l=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&$("scroll",e),i||l===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};ad=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Om(e,t,n){var r=t.pendingProps;switch(Sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&io(),de(t),null;case 3:return r=t.stateNode,kn(),W(be),W(me),_a(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(na(He),He=null))),Qi(e,t),de(t),null;case 5:La(t);var o=Mt(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)id(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return de(t),null}if(e=Mt(Ze.current),Lr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ke]=t,r[sr]=i,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(o=0;o<Bn.length;o++)$(Bn[o],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":ss(r,i),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$("invalid",r);break;case"textarea":cs(r,i),$("invalid",r)}bi(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Tr(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Tr(r.textContent,l,e),o=["children",""+l]):Xn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":jr(r),ls(r,i,!0);break;case"textarea":jr(r),ds(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ol(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ke]=t,e[sr]=r,od(e,t,!1,!1),t.stateNode=e;e:{switch(s=ki(n,r),n){case"dialog":$("cancel",e),$("close",e),o=r;break;case"iframe":case"object":case"embed":$("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bn.length;o++)$(Bn[o],e);o=r;break;case"source":$("error",e),o=r;break;case"img":case"image":case"link":$("error",e),$("load",e),o=r;break;case"details":$("toggle",e),o=r;break;case"input":ss(e,r),o=gi(e,r),$("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),$("invalid",e);break;case"textarea":cs(e,r),o=xi(e,r),$("invalid",e);break;default:o=r}bi(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Al(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rl(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Zn(e,c):typeof c=="number"&&Zn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&$("scroll",e):c!=null&&ca(e,i,c,s))}switch(n){case"input":jr(e),ls(e,r,!1);break;case"textarea":jr(e),ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?mn(e,!!r.multiple,i,!1):r.defaultValue!=null&&mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Mt(cr.current),Mt(Ze.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(i=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return de(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ne!==null&&t.mode&1&&!(t.flags&128))Sc(),wn(),t.flags|=98560,i=!1;else if(i=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Ke]=t}else wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else He!==null&&(na(He),He=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):Wa())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return kn(),Qi(e,t),e===null&&ir(t.stateNode.containerInfo),de(t),null;case 10:return za(t.type._context),de(t),null;case 17:return ke(t.type)&&io(),de(t),null;case 19:if(W(Q),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Dn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=po(e),s!==null){for(t.flags|=128,Dn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Sn&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304)}else{if(!r)if(e=po(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Y)return de(t),null}else 2*J()-i.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return $a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Rm(e,t){switch(Sa(t),t.tag){case 1:return ke(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(),W(be),W(me),_a(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return La(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return kn(),null;case 10:return za(t.type._context),null;case 22:case 23:return $a(),null;case 24:return null;default:return null}}var Rr=!1,ue=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,N=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function qi(e,t,n){try{n()}catch(r){X(e,t,r)}}var Js=!1;function Am(e,t){if(Li=to,e=uc(),ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,d=0,f=0,h=e,g=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(l=s+o),h!==i||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++d===o&&(l=s),g===i&&++f===r&&(c=s),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(_i={focusedElem:e,selectionRange:n},to=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,F=w.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:Be(t.type,b),F);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=Js,Js=!1,w}function Qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&qi(t,n,i)}o=o.next}while(o!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sd(e){var t=e.alternate;t!==null&&(e.alternate=null,sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[sr],delete t[Di],delete t[xm],delete t[wm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ld(e){return e.tag===5||e.tag===3||e.tag===4}function el(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}var ae=null,Ve=!1;function pt(e,t,n){for(n=n.child;n!==null;)cd(e,t,n),n=n.sibling}function cd(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:ue||dn(n,t);case 6:var r=ae,o=Ve;ae=null,pt(e,t,n),ae=r,Ve=o,ae!==null&&(Ve?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ve?(e=ae,n=n.stateNode,e.nodeType===8?Jo(e.parentNode,n):e.nodeType===1&&Jo(e,n),nr(e)):Jo(ae,n.stateNode));break;case 4:r=ae,o=Ve,ae=n.stateNode.containerInfo,Ve=!0,pt(e,t,n),ae=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&qi(n,t,s),o=o.next}while(o!==r)}pt(e,t,n);break;case 1:if(!ue&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){X(n,t,l)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,pt(e,t,n),ue=r):pt(e,t,n);break;default:pt(e,t,n)}}function tl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dm),t.forEach(function(r){var o=Gm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ae=l.stateNode,Ve=!1;break e;case 3:ae=l.stateNode.containerInfo,Ve=!0;break e;case 4:ae=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(ae===null)throw Error(x(160));cd(i,s,o),ae=null,Ve=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){X(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dd(t,e),t=t.sibling}function dd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Qe(e),r&4){try{Qn(3,e,e.return),Io(3,e)}catch(b){X(e,e.return,b)}try{Qn(5,e,e.return)}catch(b){X(e,e.return,b)}}break;case 1:Ue(t,e),Qe(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(Ue(t,e),Qe(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var o=e.stateNode;try{Zn(o,"")}catch(b){X(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ll(o,i),ki(l,s);var d=ki(l,i);for(s=0;s<c.length;s+=2){var f=c[s],h=c[s+1];f==="style"?Al(o,h):f==="dangerouslySetInnerHTML"?Rl(o,h):f==="children"?Zn(o,h):ca(o,f,h,d)}switch(l){case"input":vi(o,i);break;case"textarea":_l(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?mn(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?mn(o,!!i.multiple,i.defaultValue,!0):mn(o,!!i.multiple,i.multiple?[]:"",!1))}o[sr]=i}catch(b){X(e,e.return,b)}}break;case 6:if(Ue(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){X(e,e.return,b)}}break;case 3:if(Ue(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(b){X(e,e.return,b)}break;case 4:Ue(t,e),Qe(e);break;case 13:Ue(t,e),Qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Va=J())),r&4&&tl(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(d=ue)||f,Ue(t,e),ue=d):Ue(t,e),Qe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(h=N=f;N!==null;){switch(g=N,y=g.child,g.tag){case 0:case 11:case 14:case 15:Qn(4,g,g.return);break;case 1:dn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){X(r,n,b)}}break;case 5:dn(g,g.return);break;case 22:if(g.memoizedState!==null){rl(h);continue}}y!==null?(y.return=g,N=y):rl(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Dl("display",s))}catch(b){X(e,e.return,b)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(b){X(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Qe(e),r&4&&tl(e);break;case 21:break;default:Ue(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ld(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zn(o,""),r.flags&=-33);var i=el(e);Zi(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=el(e);Xi(e,l,s);break;default:throw Error(x(161))}}catch(c){X(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mm(e,t,n){N=e,ud(e)}function ud(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Rr;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||ue;l=Rr;var d=ue;if(Rr=s,(ue=c)&&!d)for(N=o;N!==null;)s=N,c=s.child,s.tag===22&&s.memoizedState!==null?ol(o):c!==null?(c.return=s,N=c):ol(o);for(;i!==null;)N=i,ud(i),i=i.sibling;N=o,Rr=l,ue=d}nl(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):nl(e)}}function nl(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Us(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Us(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&nr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ue||t.flags&512&&Ki(t)}catch(g){X(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function rl(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ol(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(c){X(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){X(t,o,c)}}var i=t.return;try{Ki(t)}catch(c){X(t,i,c)}break;case 5:var s=t.return;try{Ki(t)}catch(c){X(t,s,c)}}}catch(c){X(t,t.return,c)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var Fm=Math.ceil,go=dt.ReactCurrentDispatcher,Ua=dt.ReactCurrentOwner,De=dt.ReactCurrentBatchConfig,D=0,ie=null,te=null,se=0,Se=0,un=Tt(0),re=0,pr=null,Wt=0,To=0,Ba=0,qn=null,xe=null,Va=0,Sn=1/0,et=null,vo=!1,Ji=null,Nt=null,Dr=!1,xt=null,yo=0,Kn=0,ea=null,Yr=-1,Qr=0;function he(){return D&6?J():Yr!==-1?Yr:Yr=J()}function Ct(e){return e.mode&1?D&2&&se!==0?se&-se:km.transition!==null?(Qr===0&&(Qr=ql()),Qr):(e=M,e!==0||(e=window.event,e=e===void 0?16:nc(e.type)),e):1}function We(e,t,n,r){if(50<Kn)throw Kn=0,ea=null,Error(x(185));hr(e,n,r),(!(D&2)||e!==ie)&&(e===ie&&(!(D&2)&&(To|=n),re===4&&vt(e,se)),je(e,r),n===1&&D===0&&!(t.mode&1)&&(Sn=J()+500,Eo&&Lt()))}function je(e,t){var n=e.callbackNode;ku(e,t);var r=eo(e,e===ie?se:0);if(r===0)n!==null&&ps(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ps(n),t===1)e.tag===0?bm(il.bind(null,e)):bc(il.bind(null,e)),vm(function(){!(D&6)&&Lt()}),n=null;else{switch(Kl(r)){case 1:n=fa;break;case 4:n=Yl;break;case 16:n=Jr;break;case 536870912:n=Ql;break;default:n=Jr}n=xd(n,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function md(e,t){if(Yr=-1,Qr=0,D&6)throw Error(x(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=eo(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xo(e,r);else{t=r;var o=D;D|=2;var i=fd();(ie!==e||se!==t)&&(et=null,Sn=J()+500,Ft(e,t));do try{Vm();break}catch(l){pd(e,l)}while(!0);Ea(),go.current=i,D=o,te!==null?t=0:(ie=null,se=0,t=re)}if(t!==0){if(t===2&&(o=Ei(e),o!==0&&(r=o,t=ta(e,o))),t===1)throw n=pr,Ft(e,0),vt(e,r),je(e,J()),n;if(t===6)vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Um(o)&&(t=xo(e,r),t===2&&(i=Ei(e),i!==0&&(r=i,t=ta(e,i))),t===1))throw n=pr,Ft(e,0),vt(e,r),je(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Rt(e,xe,et);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Va+500-J(),10<t)){if(eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ri(Rt.bind(null,e,xe,et),t);break}Rt(e,xe,et);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-$e(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fm(r/1960))-r,10<r){e.timeoutHandle=Ri(Rt.bind(null,e,xe,et),r);break}Rt(e,xe,et);break;case 5:Rt(e,xe,et);break;default:throw Error(x(329))}}}return je(e,J()),e.callbackNode===n?md.bind(null,e):null}function ta(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=xo(e,t),e!==2&&(t=xe,xe=n,t!==null&&na(t)),e}function na(e){xe===null?xe=e:xe.push.apply(xe,e)}function Um(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Ba,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function il(e){if(D&6)throw Error(x(327));vn();var t=eo(e,0);if(!(t&1))return je(e,J()),null;var n=xo(e,t);if(e.tag!==0&&n===2){var r=Ei(e);r!==0&&(t=r,n=ta(e,r))}if(n===1)throw n=pr,Ft(e,0),vt(e,t),je(e,J()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,xe,et),je(e,J()),null}function Ha(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Sn=J()+500,Eo&&Lt())}}function Gt(e){xt!==null&&xt.tag===0&&!(D&6)&&vn();var t=D;D|=1;var n=De.transition,r=M;try{if(De.transition=null,M=1,e)return e()}finally{M=r,De.transition=n,D=t,!(D&6)&&Lt()}}function $a(){Se=un.current,W(un)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gm(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:kn(),W(be),W(me),_a();break;case 5:La(r);break;case 4:kn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:za(r.type._context);break;case 22:case 23:$a()}n=n.return}if(ie=e,te=e=Et(e.current,null),se=Se=t,re=0,pr=null,Ba=To=Wt=0,xe=qn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}At=null}return e}function pd(e,t){do{var n=te;try{if(Ea(),$r.current=ho,fo){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fo=!1}if($t=0,oe=ne=q=null,Yn=!1,dr=0,Ua.current=null,n===null||n.return===null){re=1,pr=t,te=null;break}e:{var i=e,s=n.return,l=n,c=t;if(t=se,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Gs(s);if(y!==null){y.flags&=-257,Ys(y,s,l,i,t),y.mode&1&&Ws(i,d,t),t=y,c=d;var w=t.updateQueue;if(w===null){var b=new Set;b.add(c),t.updateQueue=b}else w.add(c);break e}else{if(!(t&1)){Ws(i,d,t),Wa();break e}c=Error(x(426))}}else if(Y&&l.mode&1){var F=Gs(s);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ys(F,s,l,i,t),Na(jn(c,l));break e}}i=c=jn(c,l),re!==4&&(re=2),qn===null?qn=[i]:qn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Kc(i,c,t);Fs(i,m);break e;case 1:l=c;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Xc(i,l,t);Fs(i,v);break e}}i=i.return}while(i!==null)}gd(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function fd(){var e=go.current;return go.current=ho,e===null?ho:e}function Wa(){(re===0||re===3||re===2)&&(re=4),ie===null||!(Wt&268435455)&&!(To&268435455)||vt(ie,se)}function xo(e,t){var n=D;D|=2;var r=fd();(ie!==e||se!==t)&&(et=null,Ft(e,t));do try{Bm();break}catch(o){pd(e,o)}while(!0);if(Ea(),D=n,go.current=r,te!==null)throw Error(x(261));return ie=null,se=0,re}function Bm(){for(;te!==null;)hd(te)}function Vm(){for(;te!==null&&!pu();)hd(te)}function hd(e){var t=yd(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?gd(e):te=t,Ua.current=null}function gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rm(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Om(n,t,Se),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Rt(e,t,n){var r=M,o=De.transition;try{De.transition=null,M=1,Hm(e,t,n,r)}finally{De.transition=o,M=r}return null}function Hm(e,t,n,r){do vn();while(xt!==null);if(D&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ju(e,i),e===ie&&(te=ie=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dr||(Dr=!0,xd(Jr,function(){return vn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var s=M;M=1;var l=D;D|=4,Ua.current=null,Am(e,n),dd(n,e),cm(_i),to=!!Li,_i=Li=null,e.current=n,Mm(n),fu(),D=l,M=s,De.transition=i}else e.current=n;if(Dr&&(Dr=!1,xt=e,yo=o),i=e.pendingLanes,i===0&&(Nt=null),vu(n.stateNode),je(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=Ji,Ji=null,e;return yo&1&&e.tag!==0&&vn(),i=e.pendingLanes,i&1?e===ea?Kn++:(Kn=0,ea=e):Kn=0,Lt(),null}function vn(){if(xt!==null){var e=Kl(yo),t=De.transition,n=M;try{if(De.transition=null,M=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,yo=0,D&6)throw Error(x(331));var o=D;for(D|=4,N=e.current;N!==null;){var i=N,s=i.child;if(N.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(N=d;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:Qn(8,f,i)}var h=f.child;if(h!==null)h.return=f,N=h;else for(;N!==null;){f=N;var g=f.sibling,y=f.return;if(sd(f),f===d){N=null;break}if(g!==null){g.return=y,N=g;break}N=y}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var F=b.sibling;b.sibling=null,b=F}while(b!==null)}}N=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,N=s;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qn(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,N=m;break e}N=i.return}}var u=e.current;for(N=u;N!==null;){s=N;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,N=p;else e:for(s=u;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Io(9,l)}}catch(k){X(l,l.return,k)}if(l===s){N=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,N=v;break e}N=l.return}}if(D=o,Lt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{M=n,De.transition=t}}return!1}function al(e,t,n){t=jn(n,t),t=Kc(e,t,1),e=St(e,t,1),t=he(),e!==null&&(hr(e,1,t),je(e,t))}function X(e,t,n){if(e.tag===3)al(e,e,n);else for(;t!==null;){if(t.tag===3){al(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=jn(n,e),e=Xc(t,e,1),t=St(t,e,1),e=he(),t!==null&&(hr(t,1,e),je(t,e));break}}t=t.return}}function $m(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(se&n)===n&&(re===4||re===3&&(se&130023424)===se&&500>J()-Va?Ft(e,0):Ba|=n),je(e,t)}function vd(e,t){t===0&&(e.mode&1?(t=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):t=1);var n=he();e=lt(e,t),e!==null&&(hr(e,t,n),je(e,n))}function Wm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vd(e,n)}function Gm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),vd(e,n)}var yd;yd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,_m(e,t,n);we=!!(e.flags&131072)}else we=!1,Y&&t.flags&1048576&&kc(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gr(e,t),e=t.pendingProps;var o=xn(t,me.current);gn(t,n),o=Ra(null,t,r,e,o,n);var i=Da();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,ao(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ia(t),o.updater=Po,t.stateNode=o,o._reactInternals=t,Vi(t,r,e,n),t=Wi(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&ja(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Qm(r),e=Be(r,e),o){case 0:t=$i(null,t,r,e,n);break e;case 1:t=Ks(null,t,r,e,n);break e;case 11:t=Qs(null,t,r,e,n);break e;case 14:t=qs(null,t,r,Be(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),$i(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Ks(e,t,r,o,n);case 3:e:{if(td(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,zc(e,t),mo(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=jn(Error(x(423)),t),t=Xs(e,t,r,n,o);break e}else if(r!==o){o=jn(Error(x(424)),t),t=Xs(e,t,r,n,o);break e}else for(Ne=jt(t.stateNode.containerInfo.firstChild),Ce=t,Y=!0,He=null,n=Cc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===o){t=ct(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Pc(t),e===null&&Fi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Oi(r,o)?s=null:i!==null&&Oi(r,i)&&(t.flags|=32),ed(e,t),fe(e,t,s,n),t.child;case 6:return e===null&&Fi(t),null;case 13:return nd(e,t,n);case 4:return Ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Qs(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,B(co,r._currentValue),r._currentValue=s,i!==null)if(Ge(i.value,s)){if(i.children===o.children&&!be.current){t=ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=ot(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ui(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(x(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ui(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gn(t,n),o=Ae(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=Be(r,t.pendingProps),o=Be(r.type,o),qs(e,t,r,o,n);case 15:return Zc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Gr(e,t),t.tag=1,ke(r)?(e=!0,ao(t)):e=!1,gn(t,n),qc(t,r,o),Vi(t,r,o,n),Wi(null,t,r,!0,e,n);case 19:return rd(e,t,n);case 22:return Jc(e,t,n)}throw Error(x(156,t.tag))};function xd(e,t){return Gl(e,t)}function Ym(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Ym(e,t,n,r)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qm(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===ma)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qr(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Ga(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case en:return Ut(n.children,o,i,t);case da:s=8,o|=8;break;case mi:return e=Re(12,n,t,o|2),e.elementType=mi,e.lanes=i,e;case pi:return e=Re(13,n,t,o),e.elementType=pi,e.lanes=i,e;case fi:return e=Re(19,n,t,o),e.elementType=fi,e.lanes=i,e;case Pl:return Lo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case El:s=10;break e;case zl:s=9;break e;case ua:s=11;break e;case ma:s=14;break e;case ft:s=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Re(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ut(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=Re(22,e,r,t),e.elementType=Pl,e.lanes=n,e.stateNode={isHidden:!1},e}function si(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function li(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ya(e,t,n,r,o,i,s,l,c){return e=new qm(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Re(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(i),e}function Km(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wd(e){if(!e)return Pt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ke(n))return wc(e,n,t)}return t}function bd(e,t,n,r,o,i,s,l,c){return e=Ya(n,r,!0,e,o,i,s,l,c),e.context=wd(null),n=e.current,r=he(),o=Ct(n),i=ot(r,o),i.callback=t??null,St(n,i,o),e.current.lanes=o,hr(e,o,r),je(e,r),e}function _o(e,t,n,r){var o=t.current,i=he(),s=Ct(o);return n=wd(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(o,t,s),e!==null&&(We(e,o,s,i),Hr(e,o,s)),s}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qa(e,t){sl(e,t),(e=e.alternate)&&sl(e,t)}function Xm(){return null}var kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function qa(e){this._internalRoot=e}Oo.prototype.render=qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));_o(e,t,null,null)};Oo.prototype.unmount=qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){_o(null,e,null,null)}),t[st]=null}};function Oo(e){this._internalRoot=e}Oo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&tc(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ll(){}function Zm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=wo(s);i.call(d)}}var s=bd(t,r,e,0,null,!1,!1,"",ll);return e._reactRootContainer=s,e[st]=s.current,ir(e.nodeType===8?e.parentNode:e),Gt(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var d=wo(c);l.call(d)}}var c=Ya(e,0,!1,null,null,!1,!1,"",ll);return e._reactRootContainer=c,e[st]=c.current,ir(e.nodeType===8?e.parentNode:e),Gt(function(){_o(t,c,n,r)}),c}function Do(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var c=wo(s);l.call(c)}}_o(t,s,e,o)}else s=Zm(n,t,e,o,r);return wo(s)}Xl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(ha(t,n|1),je(t,J()),!(D&6)&&(Sn=J()+500,Lt()))}break;case 13:Gt(function(){var r=lt(e,1);if(r!==null){var o=he();We(r,e,1,o)}}),Qa(e,1)}};ga=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=he();We(t,e,134217728,n)}Qa(e,134217728)}};Zl=function(e){if(e.tag===13){var t=Ct(e),n=lt(e,t);if(n!==null){var r=he();We(n,e,t,r)}Qa(e,t)}};Jl=function(){return M};ec=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Si=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(x(90));Tl(r),vi(r,o)}}}break;case"textarea":_l(e,n);break;case"select":t=n.value,t!=null&&mn(e,!!n.multiple,t,!1)}};Ul=Ha;Bl=Gt;var Jm={usingClientEntryPoint:!1,Events:[vr,on,Co,Ml,Fl,Ha]},An={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ep={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$l(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{ko=Ar.inject(ep),Xe=Ar}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jm;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(t))throw Error(x(200));return Km(e,t,null,n)};ze.createRoot=function(e,t){if(!Ka(e))throw Error(x(299));var n=!1,r="",o=kd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ya(e,1,!1,null,null,n,!1,r,o),e[st]=t.current,ir(e.nodeType===8?e.parentNode:e),new qa(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=$l(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Gt(e)};ze.hydrate=function(e,t,n){if(!Ro(t))throw Error(x(200));return Do(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Ka(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=kd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=bd(t,null,e,1,n??null,o,!1,i,s),e[st]=t.current,ir(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Oo(t)};ze.render=function(e,t,n){if(!Ro(t))throw Error(x(200));return Do(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(x(40));return e._reactRootContainer?(Gt(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};ze.unstable_batchedUpdates=Ha;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Do(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)}catch(e){console.error(e)}}jd(),jl.exports=ze;var tp=jl.exports,cl=tp;di.createRoot=cl.createRoot,di.hydrateRoot=cl.hydrateRoot;const np=""+new URL("The Gaia Ecosystem Hero Image-5dq3M1QC.png",import.meta.url).href,rp=""+new URL("From Isolation to Integration-2-25k5038m.png",import.meta.url).href,op=""+new URL("Wheel Gaia Ecosystem-G1vfXwh6.png",import.meta.url).href,Sd=""+new URL("The Gaia Ecosystem-Bx52tQoB.png",import.meta.url).href,ip=""+new URL("Vision-quote-author-CodlOb5y.png",import.meta.url).href,ap=""+new URL("1. OSF-r0cMROr1.png",import.meta.url).href,sp=""+new URL("2. Trust-BxXlzwM6.png",import.meta.url).href,lp=""+new URL("3. Commons-CtHn3rWs.png",import.meta.url).href,cp=""+new URL("4. OPAL-CaU7k3XM.png",import.meta.url).href,dp=""+new URL("5. PASEO-BqFF3B6D.png",import.meta.url).href,up=""+new URL("Partner 4-RNGO2o2u.JPG",import.meta.url).href,mp=""+new URL("7. Design -Be8UoUrh.png",import.meta.url).href,pp=""+new URL("8. Tech -DdKdIgji.png",import.meta.url).href,fp=""+new URL("Steward 1-Cs68kw5h.jpg",import.meta.url).href,hp=""+new URL("Steward 2-Bju_WN7w.jpeg",import.meta.url).href,gp=""+new URL("Steward 3-D3nDxO99.jpg",import.meta.url).href,vp=""+new URL("Steward 4-DdPF5wLI.jpeg",import.meta.url).href,yp=""+new URL("Steward 5-CmMuTnjP.jpg",import.meta.url).href,xp=""+new URL("Steward 6-Cr7dDgU6.webp",import.meta.url).href,wp=""+new URL("Steward 7-BCGnMJr7.jpeg",import.meta.url).href,bp=""+new URL("Steward 8-D0vrYsBQ.png",import.meta.url).href,kp=""+new URL("Steward 9-CfrbpHFK.webp",import.meta.url).href,jp=""+new URL("Steward 10-DGsFU9WE.png",import.meta.url).href,Sp=""+new URL("Steward 13-C5QA6nbs.png",import.meta.url).href,Np=""+new URL("Steward 18-kTM82b7N.png",import.meta.url).href,Cp=""+new URL("Steward 11 -Cibrl3fb.webp",import.meta.url).href,Ep=""+new URL("Steward 14-GrDdz4oT.jpg",import.meta.url).href,zp=""+new URL("Steward 12-01rFrVrJ.jpg",import.meta.url).href,Pp=""+new URL("Anne Marie-hsIe4orO.jpeg",import.meta.url).href,Ip=""+new URL("Favier-Amandine-CuApNleI.jpg",import.meta.url).href,Tp=""+new URL("Anette-C9p4GgT3.jpg",import.meta.url).href,Lp=""+new URL("Expert Wheel White Short-VKM_CXfZ.mp4",import.meta.url).href,ci=""+new URL("Gaia Ecosystem central Earth cropped-DZ9obkYH.png",import.meta.url).href,_p="data:image/svg+xml,%3csvg%20width='179'%20height='141'%20viewBox='0%200%20179%20141'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M173.131%2081.475C170.464%2089.0216%20167.257%2095.5116%20163.511%20100.945C149.357%20121.492%20130.567%20134.218%20107.141%20139.125C75.6606%20145.725%2042.0606%20134.455%2021.1506%20109.595C6.61056%2092.3149%20-0.432773%2071.8949%200.0205602%2048.3349C0.0872269%2044.7949%200.610568%2042.1983%201.59057%2040.545C2.99723%2038.1583%204.74055%2036.3883%206.82055%2035.235C8.08721%2034.535%209.75388%2034.1949%2011.8205%2034.2149C16.0805%2034.2549%2018.8106%2034.235%2022.0006%2037.755C25.7906%2041.925%2025.3906%2045.705%2025.4006%2050.725C25.4306%2065.235%2037.6006%2072.645%2049.5406%2077.265C57.6706%2080.405%2061.7706%2085.835%2064.7406%2093.735C68.4606%20103.655%2076.2706%20114.865%2088.1706%20115.315C92.5239%20115.482%2096.4306%20114.395%2099.8906%20112.055C106.741%20107.425%20110.501%20101.035%20113.431%2093.485C116.521%2085.495%20121.231%2080.055%20129.521%2076.765C140.421%2072.445%20153.241%2064.4949%20152.631%2050.9949C152.524%2048.6216%20152.631%2046.4116%20152.951%2044.3649C153.811%2038.9549%20158.141%2033.965%20163.991%2034.255C166.231%2034.365%20168.361%2033.9949%20170.511%2034.8649C175.521%2036.8949%20178.041%2041.835%20178.141%2047.135C178.387%2059.895%20176.717%2071.3416%20173.131%2081.475Z'%20fill='black'/%3e%3cpath%20d='M104.001%2086.1249C101.101%2092.5949%2099.2605%2098.6349%2093.0705%20102.725C87.9905%20106.095%2081.8405%20101.075%2079.1905%2096.7449C77.3905%2093.8115%2075.9539%2090.8649%2074.8805%2087.9049C72.0205%2080.0648%2066.8539%2073.7682%2059.3805%2069.0149C52.6205%2064.7249%2044.2005%2063.9749%2039.0705%2057.1049C35.7605%2052.6849%2037.1405%2047.7749%2041.1705%2044.2949C44.9505%2041.0149%2049.0705%2039.1948%2053.6505%2037.3948C56.3038%2036.3548%2058.3805%2035.3348%2059.8805%2034.3348C64.2072%2031.4482%2067.8538%2027.8682%2070.8205%2023.5949C73.6205%2019.5549%2075.0805%2014.9549%2077.1005%2010.5549C78.3738%207.78819%2080.3338%205.11486%2082.9805%202.53486C84.7872%200.768189%2086.8171%20-0.0784707%2089.0705%20-0.0051374C95.9405%200.214863%20100.201%207.99485%20102.301%2013.5649C103.547%2016.8715%20105.111%2020.0515%20106.991%2023.1049C111.801%2030.9249%20119.381%2035.5649%20127.921%2038.8849C131.361%2040.2249%20134.521%2042.0815%20137.4%2044.4549C141.84%2048.1249%20142.131%2054.4948%20137.881%2058.4948C134.587%2061.5948%20131.204%2063.7449%20127.731%2064.9449C116.517%2068.8115%20108.607%2075.8715%20104.001%2086.1249Z'%20fill='black'/%3e%3c/svg%3e",Op=""+new URL("Partner 1-BS9mmEpz.png",import.meta.url).href,Rp=""+new URL("Partner 2-7yDRfbhY.webp",import.meta.url).href,Dp=""+new URL("Partner 3-AU1_P8lK.jpeg",import.meta.url).href,Ap=""+new URL("Partner 4-RNGO2o2u.JPG",import.meta.url).href,Mp=""+new URL("Partner 5-DaxyKawW.png",import.meta.url).href,Fp=""+new URL("v-BYfXKgnB.png",import.meta.url).href,Up=""+new URL("Partner 7-CKB4Vc78.jpg",import.meta.url).href,Bp=""+new URL("Partner 8-BvAT-9pj.png",import.meta.url).href,it={width:960,height:520},Nd="https://noteforms.com/forms/contact-us-30gsrv",Bt=()=>{window.open(Nd,"_blank","noreferrer")},Vp=it,Hp=e=>!e||!e.width||!e.height?it:e,Oe={nodeDiameterPx:130,maxOrbitRadiusX:.42,maxOrbitRadiusY:.42,exitRotationSpeed:1,mobileBreakpointPx:768,tightPackingBreakpointPx:1140,mobileRadiusScale:.85,overlapStartBreakpointPx:930},$p=Math.PI*2,Wp=e=>{const t=[];for(let n=0;n<e;n++){const o=n/e*$p+2.62;t.push({index:n,baseAngle:o,x:0,y:0})}return t},dl=(e=it)=>{const t=e.width||it.width,n=e.height||it.height,r=Oe.overlapStartBreakpointPx,o=Oe.nodeDiameterPx;if(t>=r)return o;const s=.25+.75*(t/r);let l=o*s;const d=t<Oe.mobileBreakpointPx?Oe.mobileRadiusScale:1,f=t*Oe.maxOrbitRadiusX*d,h=n*Oe.maxOrbitRadiusY*d,w=2*Math.max(1,Math.min(f,h))*Math.sin(Math.PI/12)*.95,b=Math.min(l,w);return Math.max(45,b)},Gp=(e,t=it,n=0)=>{if(!e||!e.length)return e;const r=t.width||it.width,o=t.height||it.height,s=r<Oe.mobileBreakpointPx?Oe.mobileRadiusScale:1,l=r*Oe.maxOrbitRadiusX*s,c=o*Oe.maxOrbitRadiusY*s,d=n>1?(n-1)*Oe.exitRotationSpeed:0,f=Math.PI*1.5;return e.forEach((h,g)=>{const y=.05*g;let w=(n-y)/(1-y);w=Math.max(0,Math.min(1,w));const b=1-Math.pow(1-w,3),F=l*b,m=c*b,u=(1-b)*f,p=h.baseAngle-u+d;h.x=Math.cos(p)*F,h.y=Math.sin(p)*m}),e},Yp=({theme:e,onToggleTheme:t})=>{const[n,r]=L.useState(!1),[o,i]=L.useState(!1);L.useEffect(()=>{const c=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const s=c=>{const d=document.getElementById(c);d&&d.scrollIntoView({behavior:"smooth"}),i(!1)},l=[{label:"Vision",target:"paradigm-section"},{label:"Ecosystem",target:"gaia-nature-video"},{label:"Team",target:"team"},{label:"Roadmap",target:"roadmap"},{label:"Join Us",target:"networks"}];return a.jsxs("nav",{className:`navbar ${n?"scrolled":""}`,children:[a.jsxs("div",{className:"nav-container",children:[a.jsxs("div",{className:"logo",children:[a.jsx("svg",{width:"40",height:"40",viewBox:"0 0 600 600",className:"header-weco-svg-element","aria-hidden":"true",children:a.jsxs("g",{transform:"translate(300, 300)",children:[a.jsx("circle",{r:"280",fill:"#006633",className:"header-weco-ring ring-12"}),a.jsx("circle",{r:"255",fill:"#00753a",className:"header-weco-ring ring-11"}),a.jsx("circle",{r:"230",fill:"#008542",className:"header-weco-ring ring-10"}),a.jsx("circle",{r:"205",fill:"#15944b",className:"header-weco-ring ring-9"}),a.jsx("circle",{r:"180",fill:"#2ea356",className:"header-weco-ring ring-8"}),a.jsx("circle",{r:"155",fill:"#46b262",className:"header-weco-ring ring-7"}),a.jsx("circle",{r:"130",fill:"#5fc16f",className:"header-weco-ring ring-6"}),a.jsx("circle",{r:"105",fill:"#78cf7d",className:"header-weco-ring ring-5"}),a.jsx("circle",{r:"80",fill:"#91dd8c",className:"header-weco-ring ring-4"}),a.jsx("circle",{r:"55",fill:"#aae99d",className:"header-weco-ring ring-3"}),a.jsx("circle",{r:"30",fill:"#c3f5af",className:"header-weco-ring ring-2"}),a.jsx("circle",{r:"15",fill:"#ddffc2",className:"header-weco-ring ring-1"})]})}),a.jsx("span",{className:"logo-text",children:"Gaia Ecosystem"})]}),a.jsx("div",{className:"nav-links",children:l.map(({label:c,target:d})=>a.jsx("a",{onClick:()=>s(d),className:"nav-link",children:c},c))}),a.jsxs("div",{className:"nav-right",children:[a.jsxs("button",{className:"theme-toggle",onClick:t,"aria-label":e==="dark"?"Switch to light mode":"Switch to dark mode",children:[a.jsx("span",{className:"theme-toggle-label",children:e==="dark"?"Dark mode":"Light mode"}),a.jsx("span",{className:"theme-toggle-icon","aria-hidden":"true",children:a.jsx("i",{className:`fas ${e==="dark"?"fa-moon":"fa-lightbulb"}`})}),a.jsx("div",{className:`theme-toggle-track ${e==="dark"?"is-dark":"is-light"}`,children:a.jsx("div",{className:"theme-toggle-thumb"})})]}),a.jsx("button",{className:`nav-toggle ${o?"is-open":""}`,onClick:()=>i(c=>!c),"aria-label":"Toggle navigation menu",children:a.jsx("span",{className:"nav-burger"})})]})]}),o&&a.jsx("div",{className:"nav-mobile-menu",children:l.map(({label:c,target:d})=>a.jsx("button",{className:"nav-mobile-link",onClick:()=>s(d),type:"button",children:c},c))})]})},Qp=({theme:e,onOpenDeck:t})=>{const n=e==="light",r=()=>{const i=document.getElementById("video-section");i&&i.scrollIntoView({behavior:"smooth"})},o=n?"linear-gradient(135deg, rgba(231, 244, 235, 0.15) 0%, rgba(218, 238, 227, 0.12) 45%, rgba(207, 233, 221, 0.11) 100%)":"linear-gradient(135deg, rgba(6, 23, 16, 0.77) 0%, rgba(16, 45, 31, 0.75) 50%, rgba(30, 77, 61, 0.75) 100%)";return a.jsxs("section",{id:"vision",className:"hero-section",style:{backgroundImage:`${o}, url(${np})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[a.jsx("div",{className:"hero-particles"}),a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("i",{className:"fas fa-leaf"}),a.jsx("span",{children:"Commons-Based Regenerative Infrastructure"})]}),a.jsx("h1",{className:"hero-title",children:"The Gaia Ecosystem"}),a.jsx("p",{className:"hero-subtitle",children:"Deploying an Operating Systems for a Regenerative Civilization"}),a.jsx("p",{className:"hero-description",children:"Building commons infrastructure to weave regenerative efforts into a living web of coherence, resilience, and shared purpose"}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:r,children:[a.jsx("i",{className:"fas fa-play"}),"Watch the Video"]}),a.jsxs("button",{className:"btn-secondary",onClick:t,children:[a.jsx("i",{className:"fas fa-images"}),a.jsx("strong",{children:"See the Deck"})]})]})]}),a.jsx("div",{className:"scroll-indicator",children:a.jsx("i",{className:"fas fa-chevron-down"})})]})},qp=()=>{const e=()=>{const t=document.getElementById("paradigm-section");t&&t.scrollIntoView({behavior:"smooth"})};return a.jsx("section",{id:"video-section",className:"video-section",children:a.jsxs("div",{className:"video-container",children:[a.jsx("h2",{className:"video-title",children:"Watch the video introduction"}),a.jsx("div",{className:"video-frame",children:a.jsx("div",{className:"video-embed",children:a.jsx("iframe",{src:"https://www.youtube.com/embed/2jIMBAcrXPg",title:"Introduction to regenerative and sustainable initiatives",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}),a.jsx("div",{className:"video-actions",children:a.jsxs("button",{className:"btn-secondary-small",onClick:e,children:[a.jsx("strong",{children:"Keep going"}),a.jsx("span",{className:"btn-secondary-arrow"})]})})]})})},Kp=()=>a.jsx("section",{id:"paradigm-section",className:"paradigm-section",children:a.jsx("div",{className:"paradigm-container",children:a.jsxs("div",{className:"paradigm-content",children:[a.jsx("h2",{children:"A New Paradigm Emerges"}),a.jsx("p",{className:"lead-text",children:"Across the world, individuals, communities and organizations are awakening to their shared role as stewards of a thriving planet. A global transition is unfolding—from extractive systems of competition to collaborative, regenerative forms of economy that align human productivity with the wellbeing of life."}),a.jsxs("div",{className:"paradigm-cards",children:[a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-seedling"}),a.jsx("h3",{children:"Stewardship"}),a.jsx("p",{children:"Caring for shared resources for current and future generations"})]}),a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-sync-alt"}),a.jsx("h3",{children:"Reciprocity"}),a.jsx("p",{children:"Fair exchange based on transparent agreements"})]}),a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-hands-helping"}),a.jsx("h3",{children:"Shared Purpose"}),a.jsx("p",{children:"Collective wellbeing over individual accumulation"})]})]})]})})}),Xp=()=>a.jsx("section",{id:"ecosystem",className:"problem-section",children:a.jsxs("div",{className:"problem-container",children:[a.jsxs("div",{className:"problem-text",children:[a.jsxs("div",{className:"section-label section-label--challenge",children:[a.jsx("i",{className:"fas fa-triangle-exclamation"}),"The Challenge"]}),a.jsx("h2",{children:"From Isolation to Integration"}),a.jsx("p",{className:"lead-text lead-text-left",children:"Despite the growing number of regenerative initiatives, most operate in isolation. This fragmentation leads to duplication, inefficiency, and missed opportunities for synergistic impact."}),a.jsxs("div",{className:"problem-points",children:[a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-link-slash"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Disconnected Efforts"}),a.jsx("p",{children:"Regenerative projects lack connective infrastructure for collaboration"})]})]}),a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-clone"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Duplication & Waste"}),a.jsx("p",{children:"Without coordination, valuable resources are spent redundantly"})]})]}),a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-compress"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Limited Scale"}),a.jsx("p",{children:"Isolated initiatives cannot achieve the systemic transformation needed"})]})]})]})]}),a.jsx("div",{className:"problem-visual",children:a.jsx("img",{src:rp,alt:"From Isolation to Integration",className:"problem-image"})})]})}),Zp=()=>a.jsx("section",{className:"solution-section",children:a.jsxs("div",{className:"solution-container",children:[a.jsxs("div",{className:"solution-header-block",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-network-wired"}),"The Solution"]}),a.jsx("h2",{children:"Commons-Based Infrastructure"})]}),a.jsx("div",{className:"solution-visual",children:a.jsx("img",{src:op,alt:"Gaia Ecosystem wheel",className:"solution-image"})}),a.jsxs("div",{className:"solution-body",children:[a.jsxs("p",{className:"lead-text lead-text-left",children:["The Gaia Ecosystem provides the ",a.jsx("strong",{children:"nervous and circulatory system"})," for a regenerative civilization—the structures that let collective intelligence and resources flow through diverse, decentralized actors."]}),a.jsxs("div",{className:"solution-features",children:[a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-hands-helping"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Systemic Coherence"}),a.jsx("p",{children:"Shared infrastructure enables seamless collaboration while retaining autonomy"})]})]}),a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-balance-scale"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Transparent Governance"}),a.jsx("p",{children:"Distributed decision-making across scales with clear accountability"})]})]}),a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-recycle"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Regenerative by Design"}),a.jsx("p",{children:"Surplus reinvested into community health and ecological restoration"})]})]})]})]})]})}),Jp=()=>{const e=()=>{const t=document.getElementById("historic-moment");t&&t.scrollIntoView({behavior:"smooth"})};return a.jsx("section",{id:"gaia-nature-video",className:"video-section",children:a.jsxs("div",{className:"video-container",children:[a.jsx("h2",{className:"video-title",children:"Experience the Gaia Ecosystem"}),a.jsx("div",{className:"video-frame",children:a.jsx("div",{className:"video-embed",children:a.jsx("iframe",{src:"https://www.youtube.com/embed/BTMjD7_evjE",title:"Immersive naturescapes",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}),a.jsxs("div",{className:"video-actions",children:[a.jsx("button",{className:"btn-primary-small",onClick:Bt,children:a.jsx("strong",{children:"Get in touch"})}),a.jsxs("button",{className:"btn-secondary-small",onClick:e,style:{marginLeft:"0.75rem"},children:[a.jsx("strong",{children:"Keep going"}),a.jsx("span",{className:"btn-secondary-arrow"})]})]})]})})},ul=e=>e?String(e).split("**").map((n,r)=>r%2===1?a.jsx("strong",{children:n},r):n):null,ef=({onOpenDeck:e,theme:t,highVisibility:n,onToggleHighVisibility:r,onOpenEcosystemImage:o})=>{const[i,s]=L.useState(0),[l,c]=L.useState(null);L.useEffect(()=>{if(l!==null){const f=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=f}}},[l]);const d=[{icon:"leaf",title:"Open Systems Foundation",subtitle:"Catalyst Organization",description:"The legal entity stewarding the infrastructure creation to ensure integrity and coherence across the ecosystem.",image:ap,ecosystemObjective:"A dedicated open organization to steward the creation and maintenance of the backbone infrastructure that enables the commons ecosystem to operate effectively.",chosenComponent:"Open Systems Foundation – the legal entity and operational framework for commons infrastructure development and stewardship."},{icon:"archive",title:"Commons Trust Infrastructure",subtitle:"Commons Repository",description:"Federated legal entities holding shared assets in trust for collective benefit.",image:sp,ecosystemObjective:"Legal vehicles for holding collective resources and tracking contributions, enabling collaborative innovation and stewardship of a global resource pool.",chosenComponent:"**Commons Trust Infrastructure** - A federated network of trusts for legal stewardship of shared resources that protect contributor rights while enabling a global “Gaia Commons”. Starting with one trust in Phase 1."},{icon:"globe-americas",title:"Gaia Commons",subtitle:"Management Framework",description:"Distributed governance and intelligence framework balancing autonomy with coherence.",image:lp,ecosystemObjective:"Distributed governance frameworks for managing and maintaining shared assets, enabling self-sovereign contributions to create collective benefits through peer-to-peer dynamics that balance local autonomy with global coherence.",chosenComponent:"**Gaia Commons Agency Framework** - The operational backbone that enables the commons to manage and develop itself coherently, providing governance, intelligence, and financial management infrastructure."},{icon:"certificate",title:"OPAL Licenses",subtitle:"Intellectual Property",description:"Regenerative licensing for shared innovation, transparent attribution, and equitable revenue flow.",image:cp,ecosystemObjective:"Licensing structures for on-boarding, creating and managing IP within the commons, managing revenue streams and ensuring contributors receive recognition and benefits.",chosenComponent:"**Open Peer Access License** (OPAL), a customized licensing approach that enables both commons collaboration and strategic interface with conventional systems."},{icon:"seedling",title:"PASEO Framework",subtitle:"Organizational Participation",description:"A model enabling organizations to transition from profit-driven to commons-based operations through surplus-sharing.",image:dp,ecosystemObjective:"Organizational wrappers made up of legal, operational, and governance systems that enable seamless alignment and interaction with the commons, facilitating efficient internal resource exchange while providing accessible pathways for any organization willing to collaborate regeneratively.",chosenComponent:"**PASEOs (Purpose Driven Altruistic Syntropic Ecosystem Organization)**  - Comprehensive templates for organizations to engage with the commons that model key economic value flow patterns between commons and non-commons stakeholders, while preserving organizations' autonomy and unique identity. The framework is designed to result in gradually increased participation and integration into the commons, incentivized through access to collective intelligence, infrastructure and economic advantages rather than philosophical alignment alone."},{icon:"users",title:"Gaia & Open Earth Networks",subtitle:"Onboarding Pathways",description:"Accessible portals for individuals and organizations to enter and evolve within the ecosystem.",image:up,ecosystemObjective:"Multiple entry points enable diverse actors to engage with the commons at their current capacity while providing evolution pathways toward deeper collaboration.",chosenComponent:"The Planetir platform facilitates Multiple Network Entry Points for different communities and target audiences, managing the funnel of ecosystem entrants. These communities include the **Gaia Network** (network of commons-ready regenerative practitioners), **Open Earth Network** (network of aligned “open” initiatives), and **Partner Networks** (strategic relationships with complementary organizations)."},{icon:"lightbulb",title:"CreActive Design Labs",subtitle:"Collaborative Design",description:"Immersive co-creation environments that activate shared projects and refine coordination mechanisms.",image:mp,ecosystemObjective:"A collaborative methodology for amalgamating and launching key projects that deliver commons infrastructure to targeted areas of strategic priority.",chosenComponent:"**CreActive Design Lab** - Proven methodology for collaborative design and project activation, adapted for commons contexts from decades of DesignShop® experience."},{icon:"project-diagram",title:"GaiaOS & Gaia Ops",subtitle:"Coordination Technology",description:"The digital nervous system connecting all components through mapping, resource tracking, and AI-assisted collaboration.",image:pp,ecosystemObjective:"A solution to harness agentic AI to help manage planetary commons governance, creating a global operating system for commons coordination and stewardship.",chosenComponent:`**GaiaOS** - An AI-inclusive digital infrastructure that enables all participants to create more effectively, share creations across the commons, and cohere around individual and planetary wellbeing.

The first purpose-built application within GaiaOS is GaiaOps. While GaiaOS will provide the comprehensive, over-arching coordinating solution, GaiaOps will pull together solutions relevant for day-to-day activities of the launch team. GaiaOps will thus provide both the first iteration on GaiaOS, as well as testing the process of engaging multiple tech providers in a collaborative manner.`}];return a.jsxs("section",{id:"components",className:"components-section",children:[l!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:()=>c(null),children:a.jsxs("div",{className:"component-modal",onClick:f=>f.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:()=>c(null),"aria-label":"Close details",children:"×"}),a.jsxs("div",{className:"component-modal-content",children:[a.jsx("div",{className:"component-modal-header"+(d[l].title==="Gaia & Open Earth Networks"?" component-modal-header--stacked":""),children:d[l].title==="Gaia & Open Earth Networks"?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"component-modal-icon component-modal-icon--compact",children:a.jsx("img",{src:d[l].image,alt:d[l].title})}),a.jsx("p",{className:"component-modal-subtitle component-modal-subtitle--centered",children:d[l].subtitle})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"component-modal-icon",children:a.jsx("img",{src:d[l].image,alt:d[l].title})}),a.jsxs("div",{className:"component-modal-text",children:[a.jsx("h3",{children:d[l].title}),a.jsx("p",{className:"component-modal-subtitle",children:d[l].subtitle})]})]})}),a.jsxs("div",{className:"component-modal-body",children:[a.jsxs("div",{className:"component-modal-box component-modal-box--objective",children:[a.jsx("div",{className:"component-modal-box-title",children:"Ecosystem Objective"}),a.jsx("p",{children:ul(d[l].ecosystemObjective||d[l].description)})]}),a.jsxs("div",{className:"component-modal-box component-modal-box--chosen",children:[a.jsx("div",{className:"component-modal-box-title",children:"Chosen Component"}),a.jsx("p",{children:ul(d[l].chosenComponent||d[l].title)})]})]})]}),a.jsx("button",{type:"button",className:"component-modal-back",onClick:()=>c(null),children:"Back to website"})]})}),a.jsxs("div",{className:"components-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-sitemap"}),"The Architecture"]}),a.jsx("h2",{children:"Initial Infrastructural Components"}),a.jsx("p",{className:"section-subtitle",children:"These eight elements function as a self-reinforcing loop designed to harnesses contributions for collective wellbeing"}),a.jsx("div",{className:"components-visibility-toggle",children:t==="dark"&&a.jsxs("button",{type:"button",className:`vis-toggle ${n?"is-on":""}`,onClick:r,children:[a.jsx("span",{className:"vis-toggle-label",children:"Increased Visibility"}),a.jsx("span",{className:"vis-toggle-switch",children:a.jsx("span",{className:"vis-toggle-thumb"})})]})})]}),a.jsx("div",{className:"ecosystem-wheel",children:a.jsx("img",{src:Sd,alt:"The Gaia Ecosystem",className:`wheel-image ${n?"wheel-image--hv":""}`})}),a.jsx("div",{className:"ecosystem-wheel-actions",children:a.jsx("button",{type:"button",className:"btn-secondary-small",onClick:o,children:a.jsx("strong",{children:"See full screen"})})}),a.jsx("div",{className:"components-grid",children:d.map((f,h)=>a.jsxs("div",{className:`component-card ${i===h?"active":""}`,onClick:()=>{s(h),c(h)},children:[a.jsx("div",{className:"component-icon",children:a.jsx("img",{src:f.image,alt:f.title})}),a.jsx("div",{className:"component-number",children:h+1}),a.jsx("p",{className:"component-subtitle",children:f.subtitle}),a.jsx("p",{className:"component-description",children:f.description}),a.jsx("div",{className:"component-card-readmore",children:a.jsx("span",{children:"View More"})})]},h))}),a.jsxs("div",{className:"components-cta",children:[a.jsxs("h2",{children:["Are you a commons infrastructure provider?",a.jsx("br",{}),"Reach out to become a contributor."]}),a.jsxs("div",{className:"components-cta-buttons",children:[a.jsx("button",{className:"btn-ghost-small",onClick:e,children:a.jsx("strong",{children:"See the Deck"})}),a.jsx("button",{className:"btn-primary-small",onClick:Bt,children:"Apply"})]})]})]})]})},tf=()=>a.jsx("section",{id:"historic-moment",className:"convergence-section",children:a.jsxs("div",{className:"convergence-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"Historic Moment"}),a.jsx("h2",{children:"A Planetary Convergence"}),a.jsx("p",{className:"lead-text",children:"For the first time in history, the conditions necessary for global coordination are in place"})]}),a.jsxs("div",{className:"convergence-grid",children:[a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-microchip"}),a.jsx("h3",{children:"Technological"}),a.jsx("p",{children:"Distributed ledgers, AI, and digital collaboration tools enable decentralized intelligence"})]}),a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-balance-scale"}),a.jsx("h3",{children:"Legal"}),a.jsx("p",{children:"Cooperatives and new models like innovative Trusts and DAOs allow shared ownership and stewardship"})]}),a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-people-group"}),a.jsx("h3",{children:"Cultural"}),a.jsx("p",{children:"A growing regenerative ethos, evolving consciousness and systemic thinking create desire and readiness for collective unity"})]})]}),a.jsx("div",{className:"convergence-cta",children:a.jsx("p",{className:"convergence-statement",children:"This convergence opens a window of possibility to design the global architecture of a regenerative civilization"})})]})}),nf=()=>{const[e,t]=L.useState(0);L.useEffect(()=>{const r=()=>{const o=document.querySelectorAll(".roadmap-phase");if(!o.length)return;const i=window.innerHeight/2;let s=0,l=1/0;o.forEach((c,d)=>{const f=c.getBoundingClientRect(),h=f.top+f.height/2,g=Math.abs(h-i);g<l&&(l=g,s=d)}),t(s)};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>window.removeEventListener("scroll",r)},[]);const n=[{phase:"Phase 1",title:"Foundational Infrastructure",timeline:"12 Months",budget:"€1,000,000",description:"Establish the core infrastructure that enables the commons-based economy to function",deliverables:["First stage activation of the Gaia Ecosystem","Launch of first Commons Trust and Foundation Stewardship","Activation of Gaia Commons Governance","Development of OPAL and PASEO frameworks","First CreActive Design Lab convened","GaiaOS technology multi-stakeholder coherent development"],kpis:"≥10 organizational partners, ≥1 bioregional pilot, ≥50 contributors engaged"},{phase:"Phase 2",title:"Ecosystem Activation",timeline:"Years 2-3",budget:"TBD",description:"Pilot the infrastructure, refine through real-world learning, and initiate Seed Commons Projects",deliverables:["Launch pilot projects across key domains","Implement capacity-building programs","Establish adaptive feedback loops","Expand to multiple bioregions","Develop regenerative finance mechanisms"],kpis:"Tested, refined, and interconnected infrastructure supporting cross-sector collaboration"},{phase:"Phase 3",title:"Ecosystem Maturation",timeline:"Year 4+",budget:"Self-Sustaining",description:"Achieve distributed governance, regenerative financial systems, and global self-sufficiency",deliverables:["Adaptive governance & real-time learning","Mutual credit & asset-backed currencies","Internal circular economies","Autonomous funding loops","Global federation of commons"],kpis:"A self-evolving planetary economy—decentralized, intelligent, and regenerative by design"}];return a.jsx("section",{id:"roadmap",className:"roadmap-section",children:a.jsxs("div",{className:"roadmap-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"Implementation"}),a.jsx("h2",{children:"The Path Forward"}),a.jsx("p",{className:"section-subtitle",children:"A phased approach to building planetary-scale regenerative infrastructure"})]}),a.jsx("div",{className:"roadmap-tabs",children:n.map((r,o)=>a.jsxs("button",{className:`roadmap-tab ${o===e?"active":""}`,onClick:()=>{t(o);const i=document.getElementById(`phase-${o}`);i&&i.scrollIntoView({behavior:"smooth",block:"center"})},children:[a.jsx("span",{className:"roadmap-tab-phase",children:r.phase}),a.jsx("span",{className:"roadmap-tab-title",children:r.title})]},r.phase))}),a.jsx("div",{className:"roadmap-timeline",children:n.map((r,o)=>a.jsxs("div",{id:`phase-${o}`,className:`roadmap-phase ${o===e?"active":"inactive"}`,onClick:()=>t(o),children:[a.jsxs("div",{className:"phase-marker",children:[a.jsx("div",{className:"phase-number",children:o+1}),a.jsx("div",{className:"phase-line"})]}),a.jsxs("div",{className:"phase-content",children:[a.jsxs("div",{className:"phase-header",children:[a.jsxs("div",{className:"phase-title-row",children:[a.jsx("div",{className:"phase-number-inline",children:o+1}),a.jsx("h3",{children:r.title})]}),a.jsxs("div",{className:"phase-meta",children:[a.jsxs("span",{className:"phase-timeline",children:[a.jsx("i",{className:"fas fa-clock"})," ",r.timeline]}),a.jsxs("span",{className:"phase-budget",children:[a.jsx("i",{className:"fas fa-coins"})," ",r.budget]})]})]}),a.jsx("p",{className:"phase-description",children:r.description}),a.jsxs("div",{className:"phase-deliverables",children:[a.jsx("h4",{children:"Key Deliverables:"}),a.jsx("ul",{children:r.deliverables.map((i,s)=>a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-check"}),i]},s))})]}),a.jsxs("div",{className:"phase-kpis",children:[a.jsx("strong",{children:"Success Indicators:"})," ",r.kpis]})]})]},o))}),a.jsx("div",{className:"roadmap-plan",children:a.jsxs("div",{className:"roadmap-plan-card",children:[a.jsxs("div",{className:"roadmap-plan-doc",children:[a.jsx("div",{className:"roadmap-plan-doc-icon",children:a.jsx("i",{className:"fas fa-file-alt"})}),a.jsxs("div",{children:[a.jsx("h3",{children:"Read the full plan"}),a.jsx("p",{children:"Dive into the detailed implementation plan outlining phases, governance structures, and next-step priorities for the Gaia Ecosystem."})]})]}),a.jsxs("a",{href:"https://globalrenaissance.notion.site/the-gaia-ecosystem?source=copy_link",className:"roadmap-plan-button",target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-external-link-alt"}),a.jsx("span",{children:"Open the plan"})]})]})})]})})},rf=({version:e="v1"})=>{const t=[{name:"Gaia Ecosystem",role:"Planetary Commons Architecture",bio:"The Gaia Ecosystem is the planetary-scale commons architecture that provides the connective tissue for a regenerative civilization. It weaves people, projects, and places into a coherent whole by offering shared legal, financial, cultural, and technological infrastructure that honors the uniqueness of each context. Rather than a single organization, it is a living field of agreements, protocols, and relational patterns that enable coordination without centralization. Through trusts, networks, and digital tools, the Gaia Ecosystem supports communities in governing shared resources, circulating value, and learning together over time."},{name:"Oliver Clarity",role:"Core Team - Regenerative Systems Design Specialist",bio:`Oliver Clarity is a systems architect, builder, and speaker dedicated to designing the foundational infrastructure for humanity's transition toward a regenerative, commons-based world. Combining training from his bachelor's in Organizational Psychology from IE University in Spain with 8 years of hands-on experience across entrepreneurship, consulting, and systems design, he develops pragmatic solutions at the intersection of individual transformation and large-scale societal change.
 
 At the heart of Oliver's work is an Open Earth—a world where openness, collaboration, and shared-innovation form the foundation of a thriving global community. He specializes in designing incentive-based, peer-to-peer systems that self-perpetuate and scale. His journey includes pioneering the Project Helix initiative with six-figure philanthropic R&D funding, co-founding the Rise Movement for consciousness-raising events and new paradigm training, and facilitating regenerative community formation in Bali.
 
 Through supporting and founding visionary projects worldwide, Oliver identified common patterns of need and encountered the missing infrastructure required for these initiatives to succeed. This led to the creation of the Open Systems Foundation (OSF), a philanthropic organization designing solutions to these shared challenges, now united with aligned partners to form the Gaia Ecosystem and build the missing infrastructure together. Oliver believes that human potential, supported by the right systems, will carry us together toward a thriving regenerative world.`,photo:fp,websites:["https://www.oliverclarity.co","https://youtu.be/5kdQesH3dK0?si=XsBXKandVaQUm9FU"],linkedin:"https://www.linkedin.com/in/oliverclarity/"},{name:"Silvana Emilia",role:"Core Team - Commons Governance Specialist",bio:`Silvana Emilia Raveane is a strategist and systems economist with over a decade of entrepreneurial and consulting experience across regions and sectors—including health tech and construction in Europe and West Africa, post‑capitalistic philanthropy, and organizational development. She has built and led companies in emerging markets and supported organizations through transitions requiring clarity, coherence, and multi‑stakeholder coordination in environments of uncertainty.
 
 Educated in International Affairs at the University of St. Gallen and in International Economics at the Graduate Institute in Geneva, Silvana integrates analytical rigor with intuitive insight and a heart‑centered approach. Her work bridges disciplines (economics, governance, business, law, and political science) and cultural contexts, enabling her to translate complexity and foster trust, understanding, and collaboration.
 
 Her expertise as a Strategy Council Steward for Gaia Commons includes governance design, systems thinking, regenerative financial and economic modeling, and value‑flow architecture. She is dedicated to building the economic and governance architectures necessary for regenerative, commons‑based civilization—structures that enable a planetary commons to function as a coherent whole.
 
 Silvana is driven by the conviction that humanity is part of a single, interdependent living system. She brings a grounded, relational, and integrative presence to initiatives aligned with planetary wellbeing—supporting the emergence of a world that thrives as One.`,photo:hp,linkedin:"https://www.linkedin.com/in/raveane/"},{name:"Rory Tews",role:"Core Team - Commons Finance Specialist",bio:`Rory Tews is a systems architect and impact finance innovator dedicated to designing the foundational infrastructure for humanity's transition toward regenerative, commons-based futures. Combining a PhD in Sociology with over 15 years of experience in impact entrepreneurship and finance, he develops pragmatic solutions at the intersection of technology, investment, and systems transformation.
 
 Rory pioneered the Impact-Linked Finance approach, structuring dozens of individual transactions and launching capitalised funds in off-grid clean energy and gender-inclusive fintech. As the former Head of Research & Development at Roots of Impact and Head of Strategic Development at Proof, he has built expertise in structuring innovative financial instruments, impact management and data interoperability for systemic investing.
 
 His work spans qualitative impact data at scale, bioregional financial structuring, and collective intelligence infrastructure—most recently through his work towards establishing the Gaia Commons and GaiaOS. As lead author of the CSP/MIT Investor's Guide to Systemic Investing and advisor on consensus-building processes for impact data standards, Rory bridges technical innovation with the deeper questions of how institutions embed values and how financial architecture can enable collective stewardship.
 
 He is driven by the conviction that the next two decades require not incremental optimization but a fundamental rewiring of how humans coordinate resources and relate to living systems.`,photo:gp,websites:["https://www.cspglobal.org/research/publications/investors-guide-systemic-investing"],linkedin:"https://www.linkedin.com/in/rory-tews/"},{name:"Kara Stonehouse",role:"Meshwork Steward",bio:`Kara is an Evolutionary Leader, meshworker with The Hague Center for Global Governance, Innovation and Emergence and founder of Aha! Graphic Facilitation. She has extensive experience facilitating for high level government and non-profit clients around the world in strategy, sustainable design and systems change.

She was then the initiator, fundraiser and lead facilitator of the Ottawa Energy Collective Impact project from 2016-2019 combining design thinking and sustainability leadership expertise to bring municipal, NGO, Academic and business players together for meaningful collaboration on carbon dioxide reductions.

She is a core contributor to World Unity Week and Peace Weekend massive global convergences. Inspired and awakened by her global journey studying eco-villages, her mission is to co-create new cultural norms and global governance systems in line with life. Kara is often described as ‘magical,’ bringing the power of playfulness and deep spiritual connection for the greatest good of all.`,photo:vp,websites:["www.thehaguecenter.org","www.ahagraphic.com"],linkedin:"https://www.linkedin.com/in/karastonehouse/"},{name:"Franz Josef Allmayer",role:"Digital Governance & Bioregional Advisor",bio:`Franz Josef Allmayer is a systems designer and entrepreneur working at the convergence of digital infrastructure, collaborative governance, and collective intelligence. With a Master's from the London School of Economics in Health Policy Planning and Financing, graduate training in Development Communications from Harvard, and a background in Biomedical Engineering, he brings interdisciplinary depth to designing systems that help societies navigate complexity with coherence and purpose.
 
 Franz founded Integrity.Earth in 2018, an independent think-and-do tank in Liechtenstein focused on whole-systems approaches to regenerative development. He co-founded digihub.li, Liechtenstein's European Digital Innovation Hub specializing in open-source distributed governance and cooperative economic protocols, and was a co-founder of Hypha and SEEDS, pioneering decentralized tools for regenerative economic systems. He currently serves as a board director of IXO, advancing high-integrity digital infrastructure for governing, financing, and verifying impacts at scale.
 
 His work spans bioregional funding initiatives and collaboration with governments across Europe, designing lawful, digital, and social frameworks where diverse actors can align capabilities, share knowledge, and act with clarity toward long-term wellbeing.
 
 Guided by openness and integrity, Franz designs infrastructures that strengthen collective capability and support the emergence of resilient, life-supporting systems.`,photo:yp,websites:["https://digihub.li/en/","https://www.ixo.world/","https://www.integrity.earth/"],linkedin:"https://www.linkedin.com/in/franz-josef-allmayer/"},{name:"Daphne Laan",role:"Ecosystem Orchestration and Finance",bio:`Daphne Laan is a Founding Partner of Planetir, an AI-native, steward-led ecosystem platform connecting people, knowledge, capital and opportunities for planetary action. She is a heart-led visionary who makes things happen at the intersection of business, technology, creativity and impact.
 
 Daphne is also Co-Founder of The Board Whisperers, guiding founders, CEOs and boards through transformation with clarity, courage, and intuitive intelligence. She works from House of Wonder, her forest-based business hub and art space, turning stories into global movements. Through House of Wonder, she helped launch the documentary DOWN to EARTH into a worldwide educational movement.
 
 After pioneering in solar, telco and media, as Head of Technology, Dealmaking & Ecosystem Development at Google, Daphne explored what happens when you follow your heart, discovering it opens doors unexpectedly.
 
 Daphne’s mission is to make the unthinkable possible by creating freedom in thinking, doing and feeling. She speaks internationally on regenerative leadership, AI and tech for good, ecosystem collaboration, intuition as intelligence and the power of collective imagination - inviting audiences to see simplicity in complexity and to co-create the future together.`,photo:xp,websites:["https://www.planetir.org/welcome","https://www.theboardwhisperers.com/en/","https://www.houseofwonder.nl/","https://downtoearthfilm.com/"],linkedin:"https://www.linkedin.com/in/daphnelaan/"},{name:"Chad Lefevre",role:"Design Strategy & Cultural Transformation",bio:`Chad Lefevre is an international Design Thinker, business philosopher, strategist, and speaker with twenty years of executive experience successfully designing business strategy and leading cultural transformation initiatives from start-ups to Fortune 100 companies. His clients have included Coca-Cola, Shell, TELUS, Sony Music Latin, and United Way, and he has co-produced events such as the Sundance Thought Leader Summit and SANG—featuring global thinkers including Tony Robbins, Peter Diamandis, and Peter Guber.

At the heart of Chad's work is Liberation—focusing on what becomes possible when human beings are liberated, aligned, and empowered to overcome limiting perceptions and beliefs. He specializes in combining neuroscience, depth psychology, and ontology to unlock profound performance and creative potential.

Chad is Founder of The Most Important Conversations (TMIC), a groundbreaking transformational community serving what some call "healthy normals" seeking deeper growth. Previously, he founded NeuroBe Inc., a neuroscience-informed consulting firm, and co-founded Ncite Neuromedia, pioneering "transformational gaming" for leadership development.

As an avid researcher in neuropsychology, perception, creativity, and ontology, Chad integrates insights from game theory, complexity science, and systems thinking to architect transformative solutions that liberate human potential and reshape organizational culture from the inside out.`,photo:wp,websites:["https://tmicglobal.com/","https://chadlefevre.com/"],linkedin:"https://www.linkedin.com/in/chadlefevre/"},{name:"Ruben Daniels",role:"Digital Sovereignty & Organization Modelling",bio:`Ruben Daniels is a serial entrepreneur, systems thinker, and technologist dedicated to building digital infrastructure that serves human sovereignty and planetary regeneration. Beginning his career as a software engineer with studies at TU Delft, he spent over two decades founding and scaling technology ventures.

Ruben co-founded Cloud9 IDE, the first cloud-based integrated development environment, which was acquired by Amazon Web Services in an eight-figure exit. After leading the product at AWS, he turned his focus toward digital sovereignty—researching new economics, mutual credit systems, self-governing organization design, and scalable regenerative agriculture through Polis Research.

This work led to founding Memri, building infrastructure for data ownership that enables people to control their data and trust their AI. Most recently, Ruben founded Allelo, a steward-owned organization setting the prerequisites for cooperation to outcompete competition. Through Allelo, he is launching the NAO (Network Adaptive Organism)—a decentralized organizational model creating trust-based digital infrastructure where users own their data, relationships, and online interactions. Built on local-first technology and relationship-based trust networks, NAOs represent an alternative to extractive internet platforms by enabling authentic digital communities grounded in real trust.

Ruben is driven by the conviction that the right digital infrastructure can unlock humanity's capacity to coordinate, cooperate, and regenerate at scale.`,photo:bp,linkedin:"https://www.linkedin.com/in/javruben/"},{name:"Andrew Hasse",role:"Media and Storytelling Expert",bio:`Andrew Hasse is a filmmaker and media producer with over 30 years of experience bringing stories of transformation to screen. Trained at NYU Film School, he has worked across music videos, advertising, and independent feature films in New York and Los Angeles.
 
 Andrew's work increasingly focuses on regenerative and ecological themes. He directed and produced "Edible City", a feature-length documentary on local food systems distributed internationally by Filmbuff, and "Being 97", a short documentary distributed by The Atlantic with over 5.5 million views. He has collaborated extensively with permaculture and regenerative organizations on educational, promotional, and fundraising content.
 
 Born and raised in Berkeley, California, Andrew now focuses on Evolutionary Media and Regenerative Systems Design—exploring how storytelling can serve as infrastructure for visioneering humanity's flourishing future.`,photo:kp,websites:["https://vimeo.com/94672054","https://www.youtube.com/watch?v=qX6NztnPU-4","https://bit.ly/regenfilm"]},{name:"Leon Seefeld",role:"Bioregional Finance & Systems Strategy",bio:`Leon Seefeld is a systems strategist and bioregional finance expert dedicated to redesigning financial architecture in service of planetary regeneration. He leads Strategy to Operations at Dark Matter Labs' Capital Systems division, coordinating across the lab's project portfolio while thematically driving Bioregional Finance initiatives.

Leon brings years of experience in social innovation and sustainability consulting, including leading his own consultancy firm focused on regenerative business model innovation and advising organizations on B Corp certification. He has worked on large-scale landscape restoration projects, weaving multi-stakeholder processes and social labs to catalyze systemic change on the ground.

He co-authored Bioregional Financing Facilities: Reimagining Finance to Regenerate Our Planet, which proposes a new layer in global financial architecture to drive decentralization of financial resource governance and enable the transition to regenerative economies at the bioregional scale. The work addresses a critical insight: closing the "nature finance gap" alone is insufficient—where resources flow, how financing is structured, and who makes decisions matters as much as the quantum of capital.

Leon holds a Bachelor's degree in International Business Management and a Master's in Strategic Leadership towards Sustainability. He is passionate about systemic interventions that achieve not merely what is "better" than the status quo, but what is necessary to enable ten billion people to live well within planetary boundaries.`,photo:jp,linkedin:"https://www.linkedin.com/in/leon-seefeld/",websites:["https://darkmatterlabs.org/feed/bioregional-financing-facilities"]},{name:"Steward 11",role:"Operations & Delivery",bio:"This placeholder profile stands in for an operations steward who keeps the day-to-day functioning of the ecosystem flowing smoothly. A future version might describe how they coordinate teams, manage timelines, and ensure that complex multi-stakeholder projects land in reality without burning people out. It can mention their background in project management, facilitation, and organizational development, and how they design processes that are both robust and flexible. The bio can also highlight how operations stewardship is deeply relational, involving constant listening, negotiation, and gentle course-correction as needs shift and new opportunities arise.",photo:Cp},{name:"Steward 12",role:"Advisory & Elders",bio:"This placeholder profile is for advisors and elders who bring long-term perspective and deep wisdom to the Gaia Ecosystem. A more complete narrative could share how they help hold ethical questions, sense into generational dynamics, and remind the ecosystem of its original intention when pressures arise. It can describe the diverse backgrounds they come from, such as indigenous leadership, spiritual traditions, public service, or decades of work in social movements. The text may also explore how advisory roles are designed not as distant oversight, but as relational, reciprocal engagements where elders are also learning from emerging practice at the edges of the ecosystem.",photo:zp},{name:"Franz Josef Allmayer",role:"Digital Governance & Bioregional Advisor",bio:`Franz Josef Allmayer is a systems designer and entrepreneur working at the convergence of digital infrastructure, collaborative governance, and collective intelligence. With a Master's from the London School of Economics in Health Policy Planning and Financing, graduate training in Development Communications from Harvard, and a background in Biomedical Engineering, he brings interdisciplinary depth to designing systems that help societies navigate complexity with coherence and purpose.
 
 Franz founded Integrity.Earth in 2018, an independent think-and-do tank in Liechtenstein focused on whole-systems approaches to regenerative development. He co-founded digihub.li, Liechtenstein's European Digital Innovation Hub specializing in open-source distributed governance and cooperative economic protocols, and was a co-founder of Hypha and SEEDS, pioneering decentralized tools for regenerative economic systems. He currently serves as a board director of IXO, advancing high-integrity digital infrastructure for governing, financing, and verifying impacts at scale.
 
 His work spans bioregional funding initiatives and collaboration with governments across Europe, designing lawful, digital, and social frameworks where diverse actors can align capabilities, share knowledge, and act with clarity toward long-term wellbeing.
 
 Guided by openness and integrity, Franz designs infrastructures that strengthen collective capability and support the emergence of resilient, life-supporting systems.`,photo:Sp,websites:["https://digihub.li/en/","https://www.ixo.world/","https://www.integrity.earth/"],linkedin:"https://www.linkedin.com/in/franz-josef-allmayer/"},{name:"Steward 14",role:"Steward",bio:"This placeholder profile is for a steward supporting learning journeys and capacity building within the ecosystem. A fuller narrative can share how they design programs, trainings, and reflective spaces that help people embody commons-based ways of working over time.",photo:Ep},{name:"Steward 15",role:"Steward",bio:"This placeholder profile is for a steward tending relationships with funders, partners, and aligned initiatives. In a future version, this card can describe how they bridge regenerative finance, philanthropy, and project needs in a coherent, transparent way.",photo:Pp},{name:"Steward 16",role:"Steward",bio:"This placeholder profile is for a steward working on digital infrastructure and information flows. A complete profile can share how they support the evolution of tools, platforms, and protocols that make it easier for many actors to coordinate in a commons-aligned way.",photo:Ip},{name:"Steward 17",role:"Steward",bio:"This placeholder profile is for a steward focusing on deep cultural interventions—story, ritual, and meaning-making that keep the ecosystem aligned with its core purpose. Future text can describe how they host spaces that help the work stay grounded, humble, and connected to life.",photo:Tp},{name:"Steward 18",role:"Steward",bio:"This placeholder profile is for a steward who connects the Gaia Ecosystem to broader movements for planetary transformation. A fuller narrative can outline how they build bridges with networks, institutions, and communities who are experimenting with new ways of living, working, and governing together.",photo:Np}],[n,r]=L.useState(null),o=Array.from({length:12}),i=e==="v2"||e==="v3"||e==="v4",s=Array.from({length:12},(S,P)=>7+P),l=s.length,c=e==="v4",d=e==="v3",f=e==="v2",h=d||c,[g,y]=L.useState(it),w=L.useMemo(()=>Hp(g),[g]),[b,F]=L.useState(0),[m,u]=L.useState(!1),[p,v]=L.useState(!1),k=L.useRef(null),C=L.useRef(null),E=L.useRef(0),z=L.useRef([]),V=L.useRef([]),O=L.useRef(null);L.useEffect(()=>{if(!c)return;const S=document.getElementById("team");S&&(O.current=S);const P=()=>{const H=C.current;if(!H)return;const U=H.getBoundingClientRect();y(Z=>{const Fe={width:Math.max(U.width,1),height:Math.max(U.height,1)};return Math.abs(Z.width-Fe.width)<1&&Math.abs(Z.height-Fe.height)<1?Z:Fe})};P();let I;typeof ResizeObserver<"u"&&C.current&&(I=new ResizeObserver(()=>P()),I.observe(C.current));const A=()=>P();return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A),I&&I.disconnect()}},[c]);const[ye,_t]=L.useState(()=>({orbitAssignments:s,innerProfileIndex:5,currentSlot:11})),[Ie,zn]=L.useState(null),[qt,Kt]=L.useState(!1),Xt=n!==null||m,j=L.useRef(null),T=L.useRef(!1),[_,G]=L.useState(!1);L.useEffect(()=>{if(!(h||f))return;const S=j.current;if(!S)return;if(typeof IntersectionObserver>"u"){T.current=!0,G(!0);return}let P=null;const I=new IntersectionObserver(A=>{const H=A[0];if(H)if(H.isIntersecting){if(T.current||P!=null)return;P=window.setTimeout(()=>{T.current=!0,G(!0),P=null},3e3)}else P!=null&&(window.clearTimeout(P),P=null)},{threshold:.15});return I.observe(S),()=>{P!=null&&window.clearTimeout(P),I.disconnect()}},[h,f]),L.useEffect(()=>{if(!(h||f)||!_||n!==null||m)return;const P=setInterval(()=>{Kt(!0)},4e3);return()=>{clearInterval(P)}},[h,f,n,m]),L.useEffect(()=>{if(!(h||f)||Ie==null)return;const S=setTimeout(()=>zn(null),600);return()=>clearTimeout(S)},[h,f,Ie]),L.useEffect(()=>{if(!h||n!==null||m)return;let S;const P=1e5;let I=typeof performance<"u"?performance.now():Date.now();const A=H=>{const U=H-I;I=H;const Z=U/P*360;E.current=(E.current+Z)%360,F(E.current),S=requestAnimationFrame(A)};return S=requestAnimationFrame(A),()=>{S&&cancelAnimationFrame(S)}},[h,n,m]),L.useEffect(()=>{if(!c)return;let S;(!z.current||z.current.length!==l)&&(z.current=Wp(l));const P=()=>{const I=z.current,A=w&&w.width&&w.height?w:Vp;if(!I){S=requestAnimationFrame(P);return}let H=0;if(O.current){const U=O.current.getBoundingClientRect(),Z=window.innerHeight,Fe=U.top+U.height/2,xr=Z/2,wr=Fe-xr,Ja=Z*.6;H=1-wr/Ja}n!==null&&(H=1),Gp(I,A,H),I.forEach((U,Z)=>{if(!V.current[Z])return;const Fe=V.current[Z];Fe.style.transform=`translate(calc(-50% + ${U.x}px), calc(-50% + ${U.y}px))`}),S=requestAnimationFrame(P)};return S=requestAnimationFrame(P),()=>{S&&cancelAnimationFrame(S)}},[c,n,m,l,w]),L.useEffect(()=>{if(!(h||f))return;const S=k.current;S&&(m?S.pause():qt&&!p&&S.play().catch(()=>{}))},[h,f,m,qt,p]);const ee=()=>{(h||f)&&(v(!0),_t(S=>{const{orbitAssignments:P,innerProfileIndex:I,currentSlot:A}=S,H=P.length||1;let U;if(f)do U=Math.floor(Math.random()*H);while(U===A&&H>1);else U=(A+1)%H;const Z=[...P],Fe=Z[U];return Z[U]=I,zn(U),{orbitAssignments:Z,innerProfileIndex:Fe,currentSlot:U}}),setTimeout(()=>{Kt(!1),v(!1)},150))},ut=h||f?ye.orbitAssignments:s,Je=h||f?ye.innerProfileIndex:5,Te=c?dl(w):null,pe=S=>r(S),mt=()=>r(null),Ye=n!==null?t[n]:null,Xa=!!(Ye&&Ye.linkedin),Pn=Ye&&Array.isArray(Ye.websites)?Ye.websites.find(S=>S.toLowerCase().includes("planetir")):null,Za=!!Pn,Cd=f?"A unique constellation of core stewards, and expert advisors holding the implementation of the Gaia Ecosystem.":"A growing constellation of stewards, practitioners, and advisors holding the architecture of the Gaia Ecosystem.";return a.jsxs("section",{ref:j,id:"team",className:`team-section team-section--${e}`,children:[n!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:mt,children:a.jsxs("div",{className:"team-profile-modal",onClick:S=>S.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:mt,"aria-label":"Close profile",children:"×"}),a.jsx("div",{className:"team-profile-modal-content",children:a.jsxs("div",{className:"team-profile-layout",children:[a.jsxs("div",{className:"team-profile-photo",children:[a.jsx("div",{className:"team-profile-avatar",children:t[n].photo||n===0?a.jsx("img",{src:t[n].photo||(n===0?ci:""),alt:t[n].name,className:"team-profile-avatar-img"}):a.jsx("i",{className:"fas fa-user-circle"})}),a.jsxs("div",{className:"team-profile-links",children:[a.jsxs("button",{type:"button",className:`team-profile-link-item ${Xa?"is-clickable":""}`,onClick:()=>{if(!Xa||!Ye||!Ye.linkedin)return;const S=Ye.linkedin.startsWith("http")?Ye.linkedin:`https://${Ye.linkedin}`;window.open(S,"_blank","noreferrer")},children:[a.jsx("i",{className:"fab fa-linkedin-in"}),a.jsx("span",{children:"LinkedIn"})]}),a.jsxs("button",{type:"button",className:`team-profile-link-item ${Za?"is-clickable":""}`,onClick:()=>{if(!Za||!Pn)return;const S=Pn.startsWith("http")?Pn:`https://${Pn}`;window.open(S,"_blank","noreferrer")},children:[a.jsx("img",{src:_p,alt:"Planetir",className:"team-profile-plantir-icon"}),a.jsx("span",{children:"Planetir"})]})]}),a.jsxs("div",{className:"team-profile-websites",children:[a.jsx("div",{className:"team-profile-websites-label",children:"Websites"}),Array.isArray(t[n].websites)&&t[n].websites.length>0&&a.jsx("ul",{className:"team-profile-websites-list",children:t[n].websites.map(S=>{const P=t[n];let I=S.replace(/^https?:\/\//,"");return P.name==="Oliver Clarity"?S==="https://youtu.be/5kdQesH3dK0?si=XsBXKandVaQUm9FU"&&(I="Open Earth Introduction Video"):P.name==="Andrew Hasse"?S==="https://vimeo.com/94672054"?I="Edible City - Trailer":S==="https://www.youtube.com/watch?v=qX6NztnPU-4"?I="Being 97 - Documentary":S==="https://bit.ly/regenfilm"&&(I="Vimeo"):P.name==="Rory Tews"?S==="https://www.cspglobal.org/research/publications/investors-guide-systemic-investing"&&(I="Investor's Guide to Systemic Investing"):P.name==="Leon Seefeld"&&S==="https://darkmatterlabs.org/feed/bioregional-financing-facilities"&&(I="Bioregional Financing Facilities Publication"),a.jsx("li",{children:a.jsxs("a",{href:S.startsWith("http")?S:`https://${S}`,target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-globe website-link-icon","aria-hidden":"true"}),a.jsx("span",{children:I})]})},S)})})]})]}),a.jsxs("div",{className:"team-profile-content",children:[a.jsx("h3",{className:"team-profile-name",children:t[n].name}),a.jsx("p",{className:"team-profile-role",children:t[n].role}),(()=>{const S=String(t[n].bio||"");return(S.includes(`

`)?S.split(`

`):S.split(`
`).filter(I=>I.trim().length>0)).map((I,A)=>a.jsx("p",{className:"team-profile-bio",children:I},A))})()]})]})}),a.jsx("button",{type:"button",className:"team-profile-modal-back",onClick:mt,children:"Back to website"})]})}),a.jsxs("div",{className:"team-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-people-group"}),"Team & Advisors"]}),a.jsxs("div",{className:"team-header-row",children:[a.jsx("h2",{children:"The Ecosystem Stewards"}),!f&&a.jsx("div",{className:"team-version-pill",children:e})]}),a.jsx("p",{className:"section-subtitle",children:Cd})]}),f&&a.jsx("h3",{className:"team-v2-core-title",children:"Core Stewards"}),a.jsx("div",{className:"team-fruit-wrapper",children:i?a.jsxs("div",{className:`team-fruit team-fruit-v2 ${c?"team-fruit--cloud":""} ${f?"team-fruit--v2-static":""}`,children:[a.jsxs("div",{className:"team-nucleus",children:[a.jsx("div",{className:"team-node center earth",style:c&&Te?{width:`${Te}px`,height:`${Te}px`}:void 0,onClick:()=>pe(0),children:a.jsx("img",{src:ci,alt:"Gaia Ecosystem",className:"team-node-photo"})}),o.slice(0,6).map((S,P)=>{const A=P===4,H=[3,2,1,4,null,6];let U;A?h||f?U=Je:U=5:U=H[P]??P+1;const Z=t[U],Fe=Z==null?void 0:Z.photo;let xr={};if(c&&w&&w.width<Oe.tightPackingBreakpointPx&&Te){const wr=Te,es=[-90,-30,30,90,150,210][P]*(Math.PI/180),Ed=Math.cos(es)*wr;xr={top:`calc(50% + ${Math.sin(es)*wr}px)`,left:`calc(50% + ${Ed}px)`,transform:"translate(-50%, -50%)"}}return a.jsxs("div",{className:`team-node node-${P+1} ${(h||f)&&A&&(qt||Ie!==null)?"is-swapping":""}`,style:{...c&&Te?{width:`${Te}px`,height:`${Te}px`}:void 0,...xr},onClick:()=>pe(U),onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[Fe?a.jsx("img",{src:Z.photo,alt:Z.name,className:"team-node-photo"}):a.jsx("i",{className:"fas fa-user-circle"}),(h||f)&&A&&qt&&a.jsx("div",{className:`expert-needed-overlay ${p?"is-fading-out":""}`,children:a.jsx("video",{ref:k,className:"expert-needed-video",src:Lp,autoPlay:!0,muted:!0,playsInline:!0,onEnded:ee})})]},P)})]}),f?a.jsxs(a.Fragment,{children:[a.jsx("h3",{className:"team-v2-grid-title",children:"Advising Expert Stewards"}),a.jsx("div",{className:"team-v2-grid-container",children:ut.map((S,P)=>{const I=t[S],A=I==null?void 0:I.photo,H=Ie===P;return a.jsx("div",{className:`team-node team-v2-static-node ${H?"is-swapping":""}`,onClick:()=>pe(S),children:A?a.jsx("img",{src:I.photo,alt:I.name,className:"team-node-photo"}):a.jsx("i",{className:"fas fa-user-circle"})},`${S}-${P}`)})})]}):c?a.jsx("div",{ref:C,className:`team-cloud-field ${Xt?"is-paused":""}`,children:ut.map((S,P)=>{const I=t[S],A=I==null?void 0:I.photo,H=dl(w);return a.jsx("div",{ref:U=>V.current[P]=U,className:"team-cloud-node-wrapper",style:{position:"absolute",top:"50%",left:"50%",width:0,height:0,willChange:"transform",pointerEvents:"none"},children:a.jsx("div",{className:`team-cloud-node ${h&&Ie===P?"is-swapping":""}`,style:{top:0,left:0,width:`${H}px`,height:`${H}px`,pointerEvents:"auto"},onClick:()=>pe(S),onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:a.jsx("div",{className:"team-cloud-node-inner",children:A?a.jsx("img",{src:I.photo,alt:I.name,className:"team-cloud-node-img"}):a.jsx("i",{className:"fas fa-user-circle"})})})},`${S}-${P}-wrapper`)})}):a.jsx("div",{className:`team-orbit-ring ${Xt?"is-paused":""}`,style:d?{transform:`rotate(${b}deg)`}:void 0,children:ut.map((S,P)=>{const I=t[S],A=I==null?void 0:I.photo;return a.jsx("div",{className:`team-orbit-node orbit-pos-${P} ${h&&Ie===P?"is-swapping":""}`,onClick:()=>pe(S),onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:a.jsx("div",{className:"team-orbit-node-inner",style:d?{transform:`rotate(${-b}deg)`}:void 0,children:A?a.jsx("img",{src:I.photo,alt:I.name,className:"team-orbit-node-img"}):a.jsx("i",{className:"fas fa-user-circle"})})},S)})})]}):a.jsxs("div",{className:"team-fruit",children:[a.jsx("div",{className:"team-node center earth",onClick:()=>pe(0),children:a.jsx("img",{src:ci,alt:"Gaia Ecosystem",className:"team-node-photo"})}),o.map((S,P)=>{const I=P+1===12?13:P+1,A=t[I],H=A==null?void 0:A.photo;return a.jsx("div",{className:`team-node node-${P+1}`,onClick:()=>pe(I),children:H?a.jsx("img",{src:A.photo,alt:A.name,className:"team-node-photo"}):a.jsx("i",{className:"fas fa-user-circle"})},P)})]})}),(h||f)&&a.jsxs("div",{className:"team-v3-switching-copy",children:[h&&a.jsx("h3",{className:"team-v3-switching-heading",children:"Switching Experts"}),a.jsx("p",{className:`team-v3-switching-subtitle ${f?"team-v2-switching-subtitle":""}`,children:"When specific expertise is needed to build elements of the Gaia Ecosystem, expert stewards switch in to the core circle to provide their skills and advance the mission"})]})]})]})},of=()=>{const e=[{name:"digihub.li",role:"Liechtenstein's European Digital Innovation Hub",tagline:"",image:Op,description:`digihub.li is Liechtenstein's European Digital Innovation Hub (EDIH), co-funded by the European Union and the Government of Liechtenstein, and part of the pan-European EDIH network supporting digital transformation across the continent.

Operating as a Liechtenstein Venture Cooperative, digihub.li specializes in establishing digital ecosystems for co-creation and collaboration, building on Liechtenstein's pioneering blockchain legislation. The hub supports SMEs and public institutions in developing responsible digital systems, shared data architectures, and collective intelligence tools that enable coordinated action across scales.

Its four core services include an innovation ecosystem for sustainable business model development, digital skills training, personalized project coaching, and innovation spaces connecting startups, SMEs, and investors.

Guided by its purpose—"to make Liechtenstein a lighthouse for positive digital transformation that connects humans through trust, transparency, and purpose-driven action"—digihub.li creates pathways for communities to align capabilities, share knowledge, and address complex challenges together.`,websites:["https://digihub.li/en"]},{name:"TMIC – The Most Important Conversations",role:"Design and Transformational Experiences",tagline:"Design and Transformational Experiences",image:Rp,description:`The Most Important Conversations (TMIC) is a transformational organization focused on facilitating the conversations that shape the beliefs needed to support a thriving humanity in harmony with itself and the living world. Founded by Chad Lefevre, TMIC operates as a creativity incubator—convening visionaries, thought leaders, entrepreneurs, artists, healers, and scientists through intentional collaboration to reimagine and co-create systems that serve life.

At its core is a recognition that conversations are how human beings share stories, and stories are how we co-create meaning and socially construct our reality. TMIC's offerings include the Community for ongoing elevation and connection, the Whole Life Architecture program for designing life by intention rather than default, and Business By-Design for entrepreneurs building from their calling. A podcast network features conversations with futurist thought leaders across business, wellness, relationships, creativity, and meaning-making.

TMIC serves as a cornerstone strategic partner for the Gaia Ecosystem, providing design methodology expertise through the DesignShop® transformative collaborative process. This powers the CreActive Design Lab—a comprehensive design and implementation pipeline for successfully launching regenerative infrastructure projects. At this inflection point in human history, TMIC supports the shift from human doing to human creating—engaging in conversations that generate life-regenerative solutions for human thriving by design.`,websites:["https://tmicglobal.com"]},{name:"The Hague Center for Global Governance, Innovation and Emergence",role:"Systems Innovation for Global Coherence",tagline:"",image:Dp,description:`The Hague Center for Global Governance, Innovation and Emergence is an international collective dedicated to cultivating the conditions for a conscious, interconnected humanity. Working at the intersection of systems thinking, social innovation and inner development, the Center supports organisations, communities and leaders in co-creating solutions that serve the wellbeing of the whole.

Their approach blends rigorous systemic methodologies with relational and intuitive intelligence, recognising that effective governance emerges from coherence across physical, social, energetic and cultural layers. Through practices such as meshworking, field inquiry, meta-weaving and meaning-making, they help diverse stakeholders align around shared purpose, unlock collective insight and design pathways toward regenerative futures.

The Hague Center partners with initiatives across the world—spanning education, community development, planetary governance, gender equity, social entrepreneurship and global convening spaces. Their projects consistently aim to amplify collaboration, build capacity for complexity, and support the emergence of solutions that are both deeply human and systemically sound.

Rooted in The Hague yet globally active, the Center operates as a learning ecosystem committed to evolving the architectures of governance needed for our time. Their work invites groups into higher coherence, deeper alignment and the possibility of creating futures that honour life in all its dimensions.`,websites:["https://www.thehaguecenter.org"]},{name:"Planetir",role:"Learning & Research Institute",tagline:"Holding long-term inquiry and ecosystem sense-making.",image:Ap,description:`Planetir is a digital home where people and communities deepen connection and collaboration, and co-create the world we know is possible. We’re building an AI-native, steward-led ecosystem platform that connects people, knowledge, capital, and opportunities for collaboration. Our AI amplifies collective intelligence by matchmaking and facilitating the exchange of wisdom, best practices, and resources across communities.

Planetir brings together three pillars:
Connection - Find your people and build meaningful relationships based on shared vibe, values, and passion;
Learning - Grow your awareness and capacity to lead inner and outer change through curated experiences and wisdom;
Action - Realize your vision through opportunities for collaboration, jobs, and funding.

A share of our revenues funds ecological and societal projects.

Because we’re all planetary citizens - united in our shared humanity and strongest when we combine our gifts and talents.`,websites:["https://www.planetir.org"]},{name:"Dark Matter Labs",role:"Systems Design for Life-Ennobling Economies",tagline:"Systems Design for Life-Ennobling Economies",image:Mp,description:`Dark Matter Labs is a global strategic design and development studio building options for the next economies. With offices across the Netherlands, United Kingdom, Canada, South Korea, and Sweden, they view today's interconnected crises as symptoms of a deeper structural miscoding of our economic systems—physical, structural, and psychological.

Their work explores alternative pathways for organizing society and stewarding shared planetary commons, framing this transformation as a shift toward Life-Ennobling Economies. This requires a radical reframing of our relationship to everything: from technology and money to land and the other-than-human world.

Dark Matter Labs operates through an integrated matrix of Labs, Arcs, and Studios. Labs build technical expertise in areas such as Capital Systems, Property & Beyond, and Societal Decisions. Arcs drive directional goals like Net Zero Cities, Bioregional Economics, and Planetary Civics. Studios—including Civic Tech, Conversational Design, and Foresight & Futuring—provide connective support across projects.

Their proposed structural shifts include moving beyond property, labour, extraction, private contracts, governance, and monetary capital—toward reciprocal relationships with the full web of life, institutions of stewardship, and regenerative care for the diverse capitals that sustain thriving. They are building these pathways step-by-step with a growing ecosystem of unusual allies.`,websites:["https://darkmatterlabs.org"]},{name:"The NAO",role:"Steward-Led Organizational Model & Digital Sovereignty",tagline:"Steward-Led Organizational Model & Digital Sovereignty",image:Fp,description:`The NAO (Network Adaptive Organism) is a collection of pioneer technology partners brought together to empower humanity's transition into an era of belonging, collective action, and regeneration. The outcome of this fusion is a Digital Collaboration Fabric that enables organizations to integrate at zero cost, gives users zero switching costs, and lets communities adopt new tools without onboarding barriers or cold-start limitations.

The NAO creates the conditions for seamless, multi-stakeholder collaboration. Through portable communities, groups carry their identities and relationships across platforms; each community retains full sovereignty by owning and controlling its trust-graph, supported by local-first data, trustworthy local AI, and self-sovereign identity.

Across this shared fabric, resources, needs, and gifts dynamically match—enabling collective decision-making, intelligent coordination, and new forms of economic flow. Applications from one group seamlessly connect to other communities, increasing the likelihood of meaningful coordination and accelerating iteration.

By reducing total cost of ownership and enabling the reuse of shared models, tooling, and libraries, the NAO supports a new wave of regenerative systems and cultures. Operating as a self-governing, participatory ecosystem, it invites builders across regenerative and adjacent fields to co-evolve solutions—strengthening bonds within neighborhood-scale and Dunbar-number-scale communities.`,websites:["www.allelo.eco"]},{name:"reState Foundation",role:"Systemic Governance Innovation",tagline:"Systemic Governance Innovation",image:Up,description:`reState Foundation is a Swiss-based non-profit ecosystem dedicated to reimagining the future of governance and stewarding the emergence of new civilizational realities aligned with humanity’s highest potential. At the core of reState’s mission is a commitment to accelerating the transition to the next stage of human development by redefining how societies organize, decide, and collaborate in the 21st century. reState operates at the intersection of innovative governance, regenerative leadership, and collective evolution—bridging visionary concepts with real-world applications that expand inclusivity, transparency, and shared agency across communities worldwide.

Through experimental governance initiatives, reState prototypes and tests alternative decision-making architectures that move beyond hierarchical control toward adaptive, participatory systems. Its work includes digital and hybrid governance explorations, evolving repositories of participatory models, and interdisciplinary design labs that co-create actionable frameworks for future-ready institutions.

In parallel, the Foundation cultivates regenerative leadership paradigms rooted in systems thinking, relational intelligence, and embodied responsibility—equipping leaders to steward systemic change with clarity and integrity. Through global dialogues, events, and practical toolkits, reState inspires and empowers changemakers to reshape institutions, narratives, and structures toward resilience, justice, and collective flourishing.`,websites:["https://restate.global/"]},{name:"Placeholder Partner 8",role:"Movement & Network Alliance",tagline:"Weaving alliances between movements, networks, and initiatives.",image:Bp,description:"This placeholder partner stands for alliances that link together multiple movements, networks, and initiatives working toward regenerative futures. A more detailed narrative might cover how they convene cross-movement dialogues, co-create shared campaigns, and host spaces for strategic coordination across sectors and geographies. It can describe the histories, commitments, and organizing traditions they carry, and how these inform their participation in the Gaia Ecosystem. The profile can also point to specific collaborations, such as shared governance experiments or joint funding strategies, through which multiple movements are learning how to act as one ecosystem while honoring the uniqueness of each lineage and community involved."}],[t,n]=L.useState(null),r=i=>n(i),o=()=>n(null);return a.jsxs("section",{id:"partners",className:"partner-section",children:[t!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:o,children:a.jsxs("div",{className:"team-profile-modal",onClick:i=>i.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:o,"aria-label":"Close partner profile",children:"×"}),(()=>{const i=e[t]||{},s=i.name&&i.name.trim().length>0?i.name:"Partner Organization",l=i.role||"Organizational Ally",c=String(i.description||"").split(`

`).filter(d=>d.trim().length>0);return a.jsx("div",{className:"team-profile-modal-content",children:a.jsxs("div",{className:"partner-profile-layout",children:[a.jsxs("div",{className:"partner-profile-aside",children:[a.jsx("div",{className:"partner-profile-logo",children:a.jsx("div",{className:"team-profile-avatar",children:i.image?a.jsx("img",{src:i.image,alt:s,className:`team-profile-avatar-img ${i.name==="Dark Matter Labs"?"team-profile-avatar-img--darkmatter":""}`}):a.jsx("i",{className:"fas fa-user-circle"})})}),a.jsx("div",{className:"partner-profile-websites",children:a.jsxs("div",{className:"partner-websites",children:[a.jsx("div",{className:"partner-websites-label",children:"Websites"}),Array.isArray(i.websites)&&i.websites.length>0?a.jsx("ul",{className:"partner-websites-list",children:i.websites.map(d=>a.jsx("li",{children:a.jsxs("a",{href:d.startsWith("http")?d:`https://${d}`,target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-globe website-link-icon","aria-hidden":"true"}),a.jsx("span",{children:d.replace(/^https?:\/\//,"")})]})},d))}):a.jsx("div",{className:"partner-websites-placeholder",children:"Website coming soon"})]})})]}),a.jsxs("div",{className:"partner-profile-main",children:[a.jsx("h3",{className:"team-profile-name",children:s}),a.jsx("p",{className:"team-profile-role",children:l}),i.tagline&&a.jsx("p",{className:"team-profile-bio",children:i.tagline}),c.map((d,f)=>a.jsx("p",{className:"team-profile-bio",children:d},f))]})]})})})(),a.jsx("button",{type:"button",className:"team-profile-modal-back",onClick:o,children:"Back to website"})]})}),a.jsxs("div",{className:"partner-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-handshake"}),"Partner Organizations"]}),a.jsx("h2",{children:"Organizational Allies"}),a.jsx("p",{className:"section-subtitle",children:"Mission-aligned partners across complementary domains, united in supporting the emergence of regenerative systems and planetary wellbeing."})]}),a.jsx("div",{className:"partner-grid",children:e.map((i,s)=>a.jsxs("button",{className:`partner-card ${i.name==="Dark Matter Labs"?"partner-card--darkmatter":""} ${i.name==="reState Foundation"?"partner-card--restate":""}`,type:"button",onClick:()=>r(s),children:[a.jsx("div",{className:"partner-card-logo-wrap",children:i.image?a.jsx("img",{src:i.image,alt:i.name||"Partner logo",className:"partner-card-logo-img"}):a.jsx("div",{className:"partner-card-logo-initial",children:a.jsx("span",{children:(i.name||"").charAt(0)})})}),a.jsx("div",{className:"partner-card-readmore",children:a.jsx("span",{children:"View More"})})]},i.name||s))})]})]})},af=({id:e="networks"})=>a.jsx("section",{id:e,className:"networks-section",children:a.jsxs("div",{className:"networks-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-door-open"}),"Entry Points"]}),a.jsx("h2",{children:"Multiple Pathways to Participate"})]}),a.jsxs("div",{className:"networks-grid",children:[a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-users"})}),a.jsx("h3",{children:"For Innovation Hubs & Researchers"}),a.jsx("p",{children:"Join the Gaia Network and Open Earth Network to onboard, learn, and become peers in the commons ecosystem."}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-heart"})," Ally to study outcomes from commons-based initiatives worldwide"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-graduation-cap"})," Contribute to the Gaia Ecosystem with research and innovation"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-hands-helping"})," Contribute to bioregional coordination frameworks"]})]}),a.jsx("button",{className:"btn-network",onClick:Bt,children:"Explore Research Partnership"})]}),a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-hand-holding-heart"})}),a.jsx("h3",{children:"For NGOs & Philanthropists"}),a.jsx("p",{children:"We invite you to collaborate in funding a healthy world"}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-donate"})," Donate to the Foundation now and accelerate your impact"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-hand-holding-heart"})," Collaborate on broader grants and funding"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-seedling"})," Discover Phase 2 revenue-share investment opportunities"]})]}),a.jsx("button",{className:"btn-network",onClick:Bt,children:"Explore Funding Collaboration"})]}),a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-building"})}),a.jsx("h3",{children:"For Organizations"}),a.jsx("p",{children:"Contribute infrastructural building blocks to the ecosystem, or sign up for the pilot commons ecosystem."}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-project-diagram"})," Contribute technology infrastructure pieces to GaiaOS"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-leaf"})," Join the waiting list for the pilot commons ecosystem"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-balance-scale"})," Support us now with your talent, expertise and resources"]})]}),a.jsx("button",{className:"btn-network",onClick:Bt,children:"Get involved as an Organization"})]})]})]})}),sf=()=>a.jsxs("section",{className:"vision-section",children:[a.jsx("div",{className:"vision-overlay"}),a.jsx("div",{className:"vision-container",children:a.jsxs("div",{className:"vision-content",children:[a.jsx("h2",{children:"An Operating System for a Regenerative Civilization"}),a.jsx("p",{className:"vision-statement",children:"Through this infrastructure, humanity can increase its capacity to act as a unified, yet diverse organism—learning, adapting, and creating in service of life."}),a.jsxs("div",{className:"vision-quote",children:[a.jsx("div",{className:"vision-quote-avatar",children:a.jsx("div",{className:"vision-quote-avatar-inner",children:a.jsx("img",{src:ip,alt:"Quote author",className:"vision-quote-avatar-img"})})}),a.jsxs("div",{className:"vision-quote-text",children:[a.jsx("p",{className:"vision-quote-text-main",children:'"You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete."'}),a.jsx("div",{className:"vision-quote-author",children:a.jsx("strong",{children:"- Buckminster Fuller"})})]})]})]})})]}),lf=()=>{const[e,t]=L.useState(0),n=[{question:"If someone contributes something valuable to the commons—an innovation, methodology, or resource—do they lose ownership and control of it?",answer:"No, and this is crucial. The OPAL licensing framework is designed so contributors maintain attribution and stewardship rights, and can still commercialize their innovations outside the commons. Within the commons, others can build on and improve those innovations, with benefits and potential revenues flowing back to all contributors in proportion to participation. Instead of intellectual property being extracted or locked away, it becomes part of a living pool of shared intelligence that generates more value collectively than it could in isolation."},{question:"What happens when someone joins who claims alignment but acts extractively or doesn’t share regenerative values?",answer:"The architecture is being designed with multiple layers of protection. The PASEO organizational framework creates graduated participation pathways—actors demonstrate alignment over time before gaining deeper access. Governance processes give communities tools for accountability and, when necessary, exclusion. Economically, the system is structured so that genuine collaboration is more beneficial than gaming it, while Commons Trust structures provide legal protection for shared assets. This is not a solved problem, but the ecosystem is intentionally designing for it rather than assuming good faith alone."},{question:"How does the Gaia Ecosystem relate to existing economic systems—is it trying to replace capitalism or build alongside it?",answer:"The Gaia Ecosystem is building a bridge rather than declaring a war. Commons infrastructure is designed to operate alongside existing markets while progressively making extractive models less attractive by offering better coordination and shared value creation. Through PASEO, organizations can participate in both commons-based and conventional activities, with value flows between them made explicit. Products, services, and patterns developed in the commons can generate revenue in traditional markets, with agreed portions returning to support the commons itself. Over time, the practical advantages of this model—not ideology—are what we expect will drive wider adoption."},{question:"How does this become financially self-sufficient rather than dependent on continuous philanthropic support?",answer:"Phase 1 requires philanthropic and catalytic funding because it builds foundational commons infrastructure that markets will not finance on their own. From the outset, however, the architecture bakes in future revenue streams: commons-developed products and services, licensing and revenue-sharing arrangements, regenerative finance instruments, and internal economic activity using commons-aligned currencies and agreements. By Phase 3, the aim is for the ecosystem to generate stable income and direct surplus toward ecological regeneration and community wellbeing, rather than toward private extraction."}],r=o=>{t(i=>i===o?null:o)};return a.jsx("section",{className:"qa-section",children:a.jsxs("div",{className:"qa-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-brain"}),"Q&A"]}),a.jsx("h2",{children:"Questions & Answers for more complex matters"}),a.jsx("p",{className:"section-subtitle",children:"Four questions about participation, protection, economics, and sustainability—answered from a whole-systems perspective."})]}),a.jsx("div",{className:"qa-list",children:n.map((o,i)=>{const s=e===i;return a.jsxs("div",{className:`qa-item ${s?"open":""}`,children:[a.jsxs("button",{type:"button",className:"qa-item-header",onClick:()=>r(i),"aria-expanded":s,children:[a.jsx("span",{className:"qa-question",children:o.question}),a.jsx("span",{className:`qa-toggle-icon ${s?"is-open":""}`,children:a.jsx("i",{className:"fas fa-chevron-down"})})]}),s&&a.jsx("div",{className:"qa-answer",children:a.jsx("p",{children:o.answer})})]},o.question)})})]})})},cf=()=>a.jsx("section",{id:"join-us",className:"cta-section",children:a.jsx("div",{className:"cta-container",children:a.jsxs("div",{className:"cta-content",children:[a.jsx("h2",{children:"Join the Planetary Mission"}),a.jsx("p",{children:"Be part of designing the infrastructure for a thriving, regenerative future. Whether you're an individual, organization, or investor, there's a place for you in the Gaia Ecosystem."}),a.jsxs("div",{className:"cta-buttons",children:[a.jsxs("button",{className:"btn-primary-large",onClick:Bt,children:[a.jsx("i",{className:"fas fa-rocket"}),"Get Started Today"]}),a.jsxs("button",{className:"btn-secondary-large",onClick:Bt,children:[a.jsx("i",{className:"fas fa-calendar"}),"Schedule a Call"]})]}),a.jsx("div",{className:"cta-contact",children:a.jsxs("p",{children:["Questions? Reach out to ",a.jsx("a",{href:"mailto:info@opensystems.foundation",children:"info@opensystems.foundation"})]})})]})})}),df=()=>a.jsx("footer",{className:"footer",children:a.jsxs("div",{className:"footer-container",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Ecosystem"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#components",children:"Components"})}),a.jsx("li",{children:a.jsx("a",{href:"#roadmap",children:"Roadmap"})}),a.jsx("li",{children:a.jsx("a",{href:"#networks",children:"Networks"})})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Resources"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"https://globalrenaissance.notion.site/the-gaia-ecosystem?source=copy_link",target:"_blank",rel:"noreferrer",children:"Documentation"})}),a.jsx("li",{children:a.jsx("a",{href:"https://gamma.app/embed/The-Gaia-Ecosystem-Introduction-6lri4hq4c44s6jt?mode=doc",target:"_blank",rel:"noreferrer",children:"Presentation"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Blog"})})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Connect"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:Nd,target:"_blank",rel:"noreferrer",children:"Contact"})}),a.jsx("li",{children:a.jsx("a",{href:"https://www.planetir.org/welcome",target:"_blank",rel:"noreferrer",children:"Community"})}),a.jsx("li",{children:a.jsx("a",{href:"#partners",children:"Partners"})})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"footer-whole-system",children:[a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 100 100",children:[a.jsx("circle",{cx:"50",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"3",opacity:"0.8"}),a.jsx("circle",{cx:"50",cy:"36",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"64",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"36",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"64",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"50",r:"10",fill:"currentColor"})]}),a.jsx("span",{children:"The Whole System"})]}),a.jsx("p",{children:"© 2025 Gaia Ecosystem. All rights reserved."}),a.jsxs("div",{className:"footer-social",children:[a.jsx("a",{href:"https://x.com/OpenSystemsF",className:"social-link","aria-label":"X",target:"_blank",rel:"noreferrer",children:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 1200 1227",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{d:"M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"})})}),a.jsx("a",{href:"https://www.linkedin.com/company/open-systems-foundation/?viewAsMember=true",className:"social-link","aria-label":"LinkedIn",target:"_blank",rel:"noreferrer",children:a.jsx("i",{className:"fab fa-linkedin-in","aria-hidden":"true"})}),a.jsx("a",{href:"https://www.instagram.com/opensystemsfoundation?igsh=MXc2cHBiNWhqYmI4dg%3D%3D&utm_source=qr",className:"social-link","aria-label":"Instagram",target:"_blank",rel:"noreferrer",children:a.jsx("i",{className:"fab fa-instagram","aria-hidden":"true"})}),a.jsx("a",{href:"https://www.youtube.com/@OpenSystemsFoundation",className:"social-link","aria-label":"YouTube",target:"_blank",rel:"noreferrer",children:a.jsx("i",{className:"fab fa-youtube","aria-hidden":"true"})})]})]})]})});function uf(){const[e,t]=L.useState("light"),[n,r]=L.useState(!1),[o,i]=L.useState(!1),[s,l]=L.useState(!1);L.useEffect(()=>{const y=e==="dark"?"theme-dark":"theme-light";document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(y)},[e]),L.useEffect(()=>{if(n){const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}}},[n]),L.useEffect(()=>{if(o){const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}}},[o]);const c=()=>{t(y=>y==="dark"?"light":"dark")},d=()=>{if(window.innerWidth<=768){window.open("https://gamma.app/embed/6lri4hq4c44s6jt","_blank");return}r(!0)},f=()=>r(!1),h=()=>i(!0),g=()=>i(!1);return a.jsxs(a.Fragment,{children:[a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"}),a.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),a.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }


        /* Ensure form controls (buttons, inputs) inherit the site typography.
           This fixes FAQ question text (inside a <button>) looking like a different font. */
        button,
        input,
        textarea,
        select {
          font: inherit;
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
          position: relative;
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
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
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

        .theme-toggle-icon {
          display: none;
          width: 18px;
          height: 18px;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .theme-toggle {
            padding: 0.45rem 0.7rem;
            width: auto;
          }

          .theme-toggle-label {
            display: none;
          }

          .theme-toggle-icon {
            display: inline-flex;
          }
        }
 
        /* When light mode is the default, show a light pill even at the top of the page */
        body.theme-light .theme-toggle {
          background: rgba(235, 248, 235, 0.92);
          color: #2d4f3c;
          border-color: rgba(62, 76, 58, 0.25);
        }
  
        .navbar.scrolled .theme-toggle {
          background: rgba(235, 248, 235, 0.92);
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
          padding: 6rem 2rem 2.75rem;
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

        .ecosystem-wheel-actions {
          margin-top: -3.5rem;
          display: flex;
          justify-content: center;
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

        .component-modal-content {
          padding: 0;
        }

        .component-modal-back {
          display: none;
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

        .team-profile-modal-content {
          padding: 0;
        }

        .team-profile-modal-back {
          display: none;
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
          /* Team profile modal: full-screen on mobile, no nested scroll areas */
          .team-profile-modal {
            width: 100%;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
            border: none;
            box-shadow: none;
          }

          .team-profile-modal-content {
            padding: 2.5rem 1.5rem;
          }

          .team-profile-modal-back {
            border-radius: 0;
          }

          .team-profile-modal .component-modal-close {
            z-index: 5;
            top: 0.75rem;
            right: 0.75rem;
          }

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

        /* Full-screen ecosystem wheel modal (shares the same visual language as the deck modal) */
        .image-backdrop {
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

        .image-backdrop.is-open {
          pointer-events: auto;
          opacity: 1;
          background: rgba(0, 0, 0, 0.6);
        }

        .image-modal {
          position: relative;
          width: calc(100vw - 48px);
          height: calc(100vh - 48px);
          max-width: none;
          max-height: none;
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

        .image-backdrop.is-open .image-modal {
          transform: scale(1);
          opacity: 1;
        }

        .image-modal-frame {
          flex: 1;
          width: 100%;
          border-radius: 18px;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          background: #ffffff;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-modal-img {
          width: max(100%, 1100px);
          height: auto;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        .image-modal-mobile-back {
          display: none;
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

        .phase-title-row {
          display: inline-flex;
          align-items: center;
          gap: 0.9rem;
        }

        /* Inline phase number: desktop hides this in favor of the left marker column. */
        .phase-number-inline {
          display: none;
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
          flex: 0 0 52px;
          min-width: 52px;
          box-sizing: border-box;
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
          /* Add a subtle tint so the section reads as distinct from the Architecture section above */
          background:
            radial-gradient(circle at 20% 0%, rgba(124, 179, 66, 0.10), transparent 55%),
            radial-gradient(circle at 80% 100%, rgba(129, 199, 132, 0.08), transparent 55%),
            var(--color-bg-page);
        }

        /* Tighten the transition into Team & Advisors now that the preceding
           Entry Points section was removed above it. */
        .partner-section + .team-section {
          padding-top: 4rem;
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

        /* V2: with only one version displayed, center the title cleanly */
        .team-section--v2 .team-header-row {
          display: flex;
          width: 100%;
          justify-content: center;
          gap: 0;
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

        /* V2: tighten vertical rhythm so "Core Stewards" sits close to the nucleus */
        .team-section--v2 .team-fruit-wrapper {
          margin-top: 0.05rem;
        }

        /* V2 nucleus sizing + spacing variables.
           Requirement: Earth circle is 1.6× the steward circles at ALL breakpoints. */
        .team-section--v2 {
          --v2-core-d: clamp(80px, 16vw, 123px);
          --v2-earth-d: calc(var(--v2-core-d) * 1.6);
          /* Small, responsive gap between Earth and each steward circle */
          --v2-earth-gap: clamp(6px, 1.2vw, 12px);
          /* Orbit radius from center to steward centers */
          --v2-orbit: calc((var(--v2-earth-d) + var(--v2-core-d)) / 2 + var(--v2-earth-gap));
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
          /* Match the spacing rhythm used in v2 between the "Advising Expert Stewards"
             title and its circles (title margin-bottom + grid margin-top). */
           margin-top: 1.25rem;
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
           margin-top: 1.25rem;
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
           width: min(540px, calc(100vw - 64px));
           height: min(540px, calc(100vw - 64px));
           min-width: 0;
           flex-shrink: 0;
           margin: 0 auto;
           position: relative;
        }

        /* Increase size for V2 nucleus nodes only */
        .team-fruit--v2-static .team-nucleus .team-node {
           /* Smooth downscaling across breakpoints (avoid sudden 768px jump) */
           width: var(--v2-core-d);
           height: var(--v2-core-d);
        }

        /* Further enlarge Stewards 1–6 in v2 while keeping center Earth at 140px.
           These six nodes get a slightly larger diameter while remaining side-by-side. */
        .team-section--v2 .team-nucleus .team-node.node-1,
        .team-section--v2 .team-nucleus .team-node.node-2,
        .team-section--v2 .team-nucleus .team-node.node-3,
        .team-section--v2 .team-nucleus .team-node.node-4,
        .team-section--v2 .team-nucleus .team-node.node-5,
        .team-section--v2 .team-nucleus .team-node.node-6 {
           width: var(--v2-core-d);
           height: var(--v2-core-d);
        }

        /* Title above the v2 core stewards nucleus (Stewards 1–6) */
        .team-v2-core-title {
           margin-top: 2.1rem;
           margin-bottom: -0.05rem;
           /* Match v2 grid title styling */
           font-size: 1.7rem;
           font-weight: 600;
           color: var(--color-text-main);
        }

        /* Title above the v2 advising stewards grid (Stewards 7–18) */
        .team-v2-grid-title {
           margin-top: 1.25rem;
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
           /* Tuned so default desktop wrap is 7 on row 1, 5 on row 2 */
           max-width: 1140px;
        }

        /* V2 mobile optimisation: stop the sudden scale-down at ~768px and reclaim width
           by reducing side padding. This keeps the steward circles as large as possible. */
        @media (max-width: 820px) {
          .team-section--v2 {
            /* Use almost the full viewport width so the circles don’t get
               artificially small due to excess side padding. */
            padding-left: 0.5rem;
            padding-right: 0.5rem;

            /* Allow larger circles on smaller screens where width is the limiting
               factor (still guaranteed to fit inside the 540px nucleus). */
            --v2-core-d: clamp(86px, 18vw, 140px);
          }

          .team-section--v2 .team-container {
            max-width: none;
          }

          .team-section--v2 .team-fruit-wrapper {
            width: 100%;
          }

          .team-section--v2 .team-fruit.team-fruit-v2.team-fruit--v2-static {
            max-width: none;
            width: 100%;
          }

          .team-section--v2 .team-fruit--v2-static .team-nucleus {
            /* Reduce lateral margin so the nucleus can use the screen width */
            width: min(540px, calc(100vw - 12px));
            height: min(540px, calc(100vw - 12px));
          }

          .team-section--v2 .team-v2-grid-container {
            padding: 0 0.5rem;
            gap: 1rem;
          }
        }

        /* team-v2-grid-row styles removed as container handles it directly */

        /* Smaller circles for the static grid */
        .team-node.team-v2-static-node {
           position: relative;
           top: auto;
           left: auto;
           transform: none;
           margin: 0;
           width: clamp(62px, 15vw, 116px);
           height: clamp(62px, 15vw, 116px);
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
           /* Keep v2 nucleus centered; sizing is handled via min()/clamp() above */
           .team-fruit--v2-static .team-nucleus {
              transform: none;
              margin-bottom: 0;
           }

           .team-node.team-v2-static-node {
             /* sizes handled via clamp() above */
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

        /* V2: Earth is larger than core steward circles (1.6×) */
        .team-section--v2 .team-node.center {
          width: var(--v2-earth-d);
          height: var(--v2-earth-d);
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

        /* V2: swap pulse must preserve the rotate+translate positioning */
        .team-section--v2 .team-node.node-4.is-swapping {
          animation: teamSwapPulseV2 0.55s ease-out;
        }

        @keyframes teamSwapPulseV2 {
          0% {
            transform: translate(-50%, -50%) rotate(var(--v2-angle)) translateY(calc(0px - var(--v2-orbit))) scale(1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          }
          50% {
            transform: translate(-50%, -50%) rotate(var(--v2-angle)) translateY(calc(0px - var(--v2-orbit))) scale(1.12);
            box-shadow: 0 18px 46px rgba(0, 0, 0, 0.35);
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--v2-angle)) translateY(calc(0px - var(--v2-orbit))) scale(1);
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

        /* V2 inner ring: true hex around the (larger) Earth, scaling cleanly at all widths */
        .team-section--v2 .team-nucleus .team-node.node-1,
        .team-section--v2 .team-nucleus .team-node.node-2,
        .team-section--v2 .team-nucleus .team-node.node-3,
        .team-section--v2 .team-nucleus .team-node.node-4,
        .team-section--v2 .team-nucleus .team-node.node-5,
        .team-section--v2 .team-nucleus .team-node.node-6 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(var(--v2-angle)) translateY(calc(0px - var(--v2-orbit)));
        }

        /* V2: keep steward photos/icons upright while their nodes are rotated into orbit.
           (We rotate the node for positioning, then counter-rotate the contents.) */
        .team-section--v2 .team-nucleus .team-node:not(.center) .team-node-photo {
          transform: rotate(calc(-1 * var(--v2-angle)));
          transform-origin: 50% 50%;
        }

        .team-section--v2 .team-nucleus .team-node:not(.center) .expert-needed-video {
          transform: rotate(calc(-1 * var(--v2-angle)));
          transform-origin: 50% 50%;
        }

        .team-section--v2 .team-nucleus .team-node:not(.center) > i {
          display: block;
          transform: rotate(calc(-1 * var(--v2-angle)));
          transform-origin: 50% 50%;
        }

        .team-section--v2 .team-nucleus .team-node.node-1 { --v2-angle: -90deg; }
        .team-section--v2 .team-nucleus .team-node.node-2 { --v2-angle: -30deg; }
        .team-section--v2 .team-nucleus .team-node.node-3 { --v2-angle: 30deg; }
        .team-section--v2 .team-nucleus .team-node.node-4 { --v2-angle: 90deg; }
        .team-section--v2 .team-nucleus .team-node.node-5 { --v2-angle: 150deg; }
        .team-section--v2 .team-nucleus .team-node.node-6 { --v2-angle: 210deg; }

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
              but do NOT shrink V4 or V2 so they can fully use the viewport width. */
          .team-section:not(.team-section--v4):not(.team-section--v2) .team-fruit {
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

        .partner-profile-layout {
          display: flex;
          align-items: flex-start;
          gap: 2.2rem;
        }

        .partner-profile-aside {
          flex: 0 0 360px;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          align-items: center;
        }

        .partner-profile-logo {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .partner-profile-main {
          flex: 1 1 auto;
          min-width: 0;
          text-align: left;
        }

        /* Organizational Allies: dedicated websites styles (decoupled from steward modals) */
        .partner-websites {
          width: 100%;
          text-align: center;
        }

        .partner-websites-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--color-text-main);
          opacity: 0.7;
          margin-bottom: 0.3rem;
        }

        .partner-websites-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .partner-websites-list a {
          font-size: 0.9rem;
          color: var(--color-accent-primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
        }

        .partner-websites-list a:hover {
          text-decoration: underline;
        }

        .partner-websites-placeholder {
          font-size: 0.85rem;
          color: var(--color-text-main);
          opacity: 0.6;
          text-align: center;
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
          gap: 1.6rem;
          /* Ensure all rows share the same card height */
          grid-auto-rows: 1fr;
          align-items: stretch;

          /* Slightly smaller tiles on desktop by constraining the grid width */
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
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
          padding: 0.75rem 0.95rem;
          box-sizing: border-box;
        }
 
        .partner-card-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Partner 7 (reState): round image corners (mainly visible on logo cards) */
        .partner-card--restate .partner-card-logo-img {
          border-radius: 18px;
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

        /* Desktop: anchor the bullet list (and thus its divider lines) relative to
           the bottom CTA button so all three cards align vertically. */
        @media (min-width: 1024px) {
          .network-features {
            margin-top: auto;
          }

          .btn-network {
            margin-top: 0;
          }

          .network-card > p {
            margin-bottom: 0;
          }
        }

        /* Desktop: keep the 3 divider lines perfectly aligned across the 3 cards
           by forcing the 3 bullet rows to share equal height in every card. */
        @media (min-width: 1024px) {
          .network-features {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            min-height: 9.6rem;
          }
        }

        .network-features li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.8rem 0;
          border-bottom: 1px solid #f0f0f0;
          color: var(--color-text-main);
        }

        .network-features li:last-child {
          border-bottom: none;
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
          font-family: inherit;
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
        /* Switch navbar to burger menu slightly earlier than the rest of the mobile layout */
        @media (max-width: 1100px) {
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
        }

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
            max-height: 100dvh;
            height: 100vh;
            height: 100dvh;
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
            /* No inset margins on mobile: modal should be edge-to-edge */
            padding: 0;
          }

          /* Component details modal: full-screen on mobile with a single "Back to website" control */
          .component-modal-backdrop {
            /* No inset margins on mobile: modal should be edge-to-edge */
            padding: 0;
          }

          .component-modal {
            width: 100%;
            max-height: 100vh;
            max-height: 100dvh;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
            border: none;
            box-shadow: none;
            padding: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }

          .component-modal-content {
            flex: 1 1 auto;
            min-height: 0;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            padding: 2rem 1.5rem;
          }

          /* On mobile keep the close button, but reserve space so it never overlaps the header content. */
          .component-modal .component-modal-close {
            display: flex;
            z-index: 5;
            top: 0.75rem;
            right: 0.75rem;
          }

          .component-modal-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.65rem;
            margin-top: 0.25rem;
            padding-top: 0.6rem;
            padding-right: 3.25rem; /* reserve space for close X */
            padding-left: 3.25rem;
            box-sizing: border-box;
            width: 100%;
          }

          .component-modal-icon {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .component-modal-icon img,
          .component-modal-icon--compact img {
            height: auto;
            width: min(280px, 72vw);
            max-height: 160px;
            object-fit: contain;
          }

          .component-modal-text {
            width: 100%;
            text-align: center;
          }

          .component-modal-text h3 {
            font-size: 1.45rem;
          }

          .component-modal-subtitle {
            margin-top: 0.25rem;
          }

          .component-modal-back {
            border-radius: 0;
            display: block;
            width: 100%;
            flex: 0 0 auto;
            margin-top: auto;
            border: none;
            padding: calc(1rem + env(safe-area-inset-bottom)) 1.5rem;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            color: #ffffff;
            background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
            box-shadow: 0 -8px 22px rgba(0, 0, 0, 0.2);
          }

          /* Team profile modal: full-screen on mobile, no nested scroll areas */
          .team-profile-modal {
            width: 100%;
            max-height: 100vh;
            max-height: 100dvh;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
            border: none;
            box-shadow: none;
            padding: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }

          .team-profile-modal-content {
            flex: 1 1 auto;
            min-height: 0;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            padding: 2.5rem 1.5rem;
          }

          /* Partner modal: keep small-but-safe side padding and enforce mobile content order:
             Logo -> Title -> Subtitle -> Body -> Websites */
          .partner-section .team-profile-modal-content {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .partner-profile-layout {
            flex-direction: column;
            gap: 1.1rem;
          }

          /* Turn the aside wrapper into a passthrough so Logo + Websites can
             participate in the mobile flex ordering. */
          .partner-profile-aside {
            display: contents;
          }

          .partner-profile-logo {
            order: 1;
            margin-top: 1.1rem;
          }

          .partner-profile-main {
            order: 2;
            text-align: center;
          }

          .partner-profile-websites {
            order: 3;
          }

          /* Ensure partner websites block is visually centered on mobile */
          .partner-profile-websites {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .partner-websites {
            width: min(520px, 100%);
            padding-bottom: 0.25rem;
          }
        
          .team-profile-modal-back {
            display: block;
            width: 100%;
            flex: 0 0 auto;
            margin-top: auto;
            border: none;
            border-radius: 0;
            padding: calc(1rem + env(safe-area-inset-bottom)) 1.5rem;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            color: #ffffff;
            background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
            box-shadow: 0 -8px 22px rgba(0, 0, 0, 0.2);
          }

          .team-profile-modal .component-modal-close {
            z-index: 5;
            top: 0.75rem;
            right: 0.75rem;
          }

          /* Ecosystem image modal: full-screen on mobile with a clear "Back to Website" button */
          .image-backdrop {
            /* No inset margins on mobile: modal should be edge-to-edge */
            padding: 0;
          }

          .image-modal {
            max-width: 100%;
            width: 100%;
            max-height: 100vh;
            max-height: 100dvh;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
            padding: 0;
            border: none;
            box-shadow: none;
          }

          .image-modal-frame {
            border-radius: 0;
            box-shadow: none;
            background: #ffffff;
          }

          .image-modal .component-modal-close {
            display: none;
          }

          .image-modal-mobile-back {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            flex: 0 0 auto;
            margin-top: auto;
            border: none;
            border-radius: 0;
            padding: calc(1rem + env(safe-area-inset-bottom)) 1.25rem;
            font-weight: 600;
            font-size: 1rem;
            background: var(--color-bg-card);
            color: var(--color-text-main);
            border-top: 1px solid var(--color-border-soft);
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

          /* Roadmap mobile: reclaim width by removing the left marker column.
             Show phase numbers next to the title inside the panel and hide the green line. */
          .roadmap-phase {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .phase-marker {
            display: none;
          }

          .phase-number-inline {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.1rem;
            flex: 0 0 auto;
            box-shadow: 0 10px 26px rgba(124, 179, 66, 0.35);
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
            padding: 1.25rem 1.25rem;
            gap: 1.25rem;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: flex-start;
          }

          .roadmap-plan-doc {
            gap: 0.9rem;
            width: 100%;
            align-items: flex-start;
          }

          /* "Read the full plan" icon: scale down on mobile so it doesn't dominate the row */
          .roadmap-plan-doc-icon {
            width: 42px;
            height: 52px;
            flex: 0 0 42px;
            min-width: 42px;
            border-radius: 10px;
            flex: 0 0 auto;
            /* Align the icon container with the start of the body copy ("Dive into...") */
            margin-top: 1.55rem;
          }

          .roadmap-plan-doc-icon i {
            font-size: 1.25rem;
          }

          .roadmap-plan-doc h3 {
            font-size: 1.15rem;
          }

          /* Mobile: align the pill with the start of the text (not the icon) */
          .roadmap-plan-button {
            align-self: flex-start;
            margin-left: calc(42px + 0.9rem);
            margin-top: 0.5rem;
          }
        }
      `}),a.jsxs("div",{className:"app-root",children:[a.jsx("div",{className:`image-backdrop ${o?"is-open":""}`,onClick:o?g:void 0,children:a.jsxs("div",{className:"image-modal",onClick:y=>y.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:g,"aria-label":"Close full screen image",children:"×"}),a.jsx("div",{className:"image-modal-frame",children:a.jsx("img",{src:Sd,alt:"The Gaia Ecosystem",className:"image-modal-img"})}),a.jsx("button",{type:"button",className:"image-modal-mobile-back",onClick:g,children:"Back to website"})]})}),a.jsx("div",{className:`deck-backdrop ${n?"is-open":""}`,onClick:n?f:void 0,children:a.jsxs("div",{className:"deck-modal",onClick:y=>y.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:f,"aria-label":"Close deck",children:"×"}),a.jsx("div",{className:"deck-modal-frame",children:a.jsx("iframe",{src:"https://gamma.app/embed/6lri4hq4c44s6jt",title:"The Gaia Ecosystem Introduction",style:{width:"100%",height:"100%",border:"0"},allow:"fullscreen"})})]})}),a.jsx(Yp,{theme:e,onToggleTheme:c}),a.jsx(Qp,{theme:e,onOpenDeck:d}),a.jsx(qp,{}),a.jsx(Kp,{}),a.jsx(Xp,{}),a.jsx(Zp,{}),a.jsx(Jp,{}),a.jsx(tf,{}),a.jsx(ef,{onOpenDeck:d,theme:e,highVisibility:s,onToggleHighVisibility:()=>l(y=>!y),onOpenEcosystemImage:h}),a.jsx(rf,{version:"v2"}),a.jsx(of,{}),a.jsx(nf,{}),a.jsx(af,{}),a.jsx(sf,{}),a.jsx(lf,{}),a.jsx(cf,{}),a.jsx(df,{})]})]})}di.createRoot(document.getElementById("root")).render(a.jsx($d.StrictMode,{children:a.jsx(uf,{})}));
