(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function au(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ql={exports:{}},eo={},Yl={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),lu=Symbol.for("react.portal"),su=Symbol.for("react.fragment"),cu=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),fu=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),hu=Symbol.for("react.memo"),gu=Symbol.for("react.lazy"),Ra=Symbol.iterator;function vu(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var Kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ql=Object.assign,Xl={};function on(e,t,n){this.props=e,this.context=t,this.refs=Xl,this.updater=n||Kl}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zl(){}Zl.prototype=on.prototype;function Ui(e,t,n){this.props=e,this.context=t,this.refs=Xl,this.updater=n||Kl}var Bi=Ui.prototype=new Zl;Bi.constructor=Ui;ql(Bi,on.prototype);Bi.isPureReactComponent=!0;var Da=Array.isArray,Jl=Object.prototype.hasOwnProperty,Vi={current:null},es={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Jl.call(t,r)&&!es.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Yn,type:e,key:i,ref:l,props:o,_owner:Vi.current}}function yu(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function xu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fa=/\/+/g;function wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xu(""+e.key):t.toString(36)}function yr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Yn:case lu:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+wo(l,0):r,Da(o)?(n="",e!=null&&(n=e.replace(Fa,"$&/")+"/"),yr(o,t,n,"",function(u){return u})):o!=null&&(Wi(o)&&(o=yu(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Fa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Da(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+wo(i,s);l+=yr(i,t,n,c,o)}else if(c=vu(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+wo(i,s++),l+=yr(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function tr(e,t,n){if(e==null)return e;var r=[],o=0;return yr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function wu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},xr={transition:null},ku={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Vi};function ns(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=on;T.Fragment=su;T.Profiler=uu;T.PureComponent=Ui;T.StrictMode=cu;T.Suspense=mu;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ku;T.act=ns;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ql({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Vi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Jl.call(t,c)&&!es.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Yn,type:e.type,key:o,ref:i,props:r,_owner:l}};T.createContext=function(e){return e={$$typeof:fu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:du,_context:e},e.Consumer=e};T.createElement=ts;T.createFactory=function(e){var t=ts.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:pu,render:e}};T.isValidElement=Wi;T.lazy=function(e){return{$$typeof:gu,_payload:{_status:-1,_result:e},_init:wu}};T.memo=function(e,t){return{$$typeof:hu,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};T.unstable_act=ns;T.useCallback=function(e,t){return se.current.useCallback(e,t)};T.useContext=function(e){return se.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return se.current.useDeferredValue(e)};T.useEffect=function(e,t){return se.current.useEffect(e,t)};T.useId=function(){return se.current.useId()};T.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return se.current.useMemo(e,t)};T.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};T.useRef=function(e){return se.current.useRef(e)};T.useState=function(e){return se.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return se.current.useTransition()};T.version="18.3.1";Yl.exports=T;var Y=Yl.exports;const bu=au(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju=Y,Su=Symbol.for("react.element"),Nu=Symbol.for("react.fragment"),Cu=Object.prototype.hasOwnProperty,Eu=ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zu={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Cu.call(t,r)&&!zu.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Su,type:e,key:i,ref:l,props:o,_owner:Eu.current}}eo.Fragment=Nu;eo.jsx=rs;eo.jsxs=rs;Ql.exports=eo;var a=Ql.exports,Qo={},os={exports:{}},xe={},is={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,z){var P=S.length;S.push(z);e:for(;0<P;){var $=P-1>>>1,q=S[$];if(0<o(q,z))S[$]=z,S[P]=q,P=$;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var z=S[0],P=S.pop();if(P!==z){S[0]=P;e:for(var $=0,q=S.length,Jn=q>>>1;$<Jn;){var gt=2*($+1)-1,xo=S[gt],vt=gt+1,er=S[vt];if(0>o(xo,P))vt<q&&0>o(er,xo)?(S[$]=er,S[vt]=P,$=vt):(S[$]=xo,S[gt]=P,$=gt);else if(vt<q&&0>o(er,P))S[$]=er,S[vt]=P,$=vt;else break e}}return z}function o(S,z){var P=S.sortIndex-z.sortIndex;return P!==0?P:S.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],h=1,g=null,m=3,x=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=S)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function v(S){if(k=!1,p(S),!w)if(n(c)!==null)w=!0,vo(j);else{var z=n(u);z!==null&&yo(v,z.startTime-S)}}function j(S,z){w=!1,k&&(k=!1,f(E),E=-1),x=!0;var P=m;try{for(p(z),g=n(c);g!==null&&(!(g.expirationTime>z)||S&&!Ee());){var $=g.callback;if(typeof $=="function"){g.callback=null,m=g.priorityLevel;var q=$(g.expirationTime<=z);z=e.unstable_now(),typeof q=="function"?g.callback=q:g===n(c)&&r(c),p(z)}else r(c);g=n(c)}if(g!==null)var Jn=!0;else{var gt=n(u);gt!==null&&yo(v,gt.startTime-z),Jn=!1}return Jn}finally{g=null,m=P,x=!1}}var N=!1,C=null,E=-1,W=5,_=-1;function Ee(){return!(e.unstable_now()-_<W)}function sn(){if(C!==null){var S=e.unstable_now();_=S;var z=!0;try{z=C(!0,S)}finally{z?cn():(N=!1,C=null)}}else N=!1}var cn;if(typeof d=="function")cn=function(){d(sn)};else if(typeof MessageChannel<"u"){var La=new MessageChannel,iu=La.port2;La.port1.onmessage=sn,cn=function(){iu.postMessage(null)}}else cn=function(){F(sn,0)};function vo(S){C=S,N||(N=!0,cn())}function yo(S,z){E=F(function(){S(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,vo(j))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return S()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,z){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var P=m;m=S;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(S,z,P){var $=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,S){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=P+q,S={id:h++,callback:z,priorityLevel:S,startTime:P,expirationTime:q,sortIndex:-1},P>$?(S.sortIndex=P,t(u,S),n(c)===null&&S===n(u)&&(k?(f(E),E=-1):k=!0,yo(v,P-$))):(S.sortIndex=q,t(c,S),w||x||(w=!0,vo(j))),S},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(S){var z=m;return function(){var P=m;m=z;try{return S.apply(this,arguments)}finally{m=P}}}})(as);is.exports=as;var Pu=is.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=Y,ye=Pu;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ls=new Set,_n={};function Tt(e,t){Xt(e,t),Xt(e+"Capture",t)}function Xt(e,t){for(_n[e]=t,e=0;e<t.length;e++)ls.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=Object.prototype.hasOwnProperty,_u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ma={},Aa={};function Iu(e){return Yo.call(Aa,e)?!0:Yo.call(Ma,e)?!1:_u.test(e)?Aa[e]=!0:(Ma[e]=!0,!1)}function Ou(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lu(e,t,n,r){if(t===null||typeof t>"u"||Ou(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var $i=/[\-:]([a-z])/g;function Hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($i,Hi);te[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($i,Hi);te[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($i,Hi);te[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gi(e,t,n,r){var o=te.hasOwnProperty(t)?te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lu(t,n,o,r)&&(n=null),r||o===null?Iu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=Tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),Ko=Symbol.for("react.profiler"),ss=Symbol.for("react.provider"),cs=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),qo=Symbol.for("react.suspense"),Xo=Symbol.for("react.suspense_list"),Ki=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),us=Symbol.for("react.offscreen"),Ua=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,ko;function yn(e){if(ko===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ko=t&&t[1]||""}return`
`+ko+e}var bo=!1;function jo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Ru(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=jo(e.type,!1),e;case 11:return e=jo(e.type.render,!1),e;case 1:return e=jo(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lt:return"Fragment";case Ot:return"Portal";case Ko:return"Profiler";case Qi:return"StrictMode";case qo:return"Suspense";case Xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cs:return(e.displayName||"Context")+".Consumer";case ss:return(e._context.displayName||"Context")+".Provider";case Yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ki:return t=e.displayName||null,t!==null?t:Zo(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return Zo(e(t))}catch{}}return null}function Du(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(t);case 8:return t===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fu(e){var t=ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Fu(e))}function fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jo(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ps(e,t){t=t.checked,t!=null&&Gi(e,"checked",t,!1)}function ei(e,t){ps(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Ht(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(xn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ms(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mu=["Webkit","ms","Moz","O"];Object.keys(bn).forEach(function(e){Mu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bn[t]=bn[e]})});function vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bn.hasOwnProperty(e)&&bn[e]?(""+t).trim():t+"px"}function ys(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Au=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(Au[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Gt=null,Qt=null;function Ha(e){if(e=Xn(e)){if(typeof li!="function")throw Error(y(280));var t=e.stateNode;t&&(t=io(t),li(e.stateNode,e.type,t))}}function xs(e){Gt?Qt?Qt.push(e):Qt=[e]:Gt=e}function ws(){if(Gt){var e=Gt,t=Qt;if(Qt=Gt=null,Ha(e),t)for(e=0;e<t.length;e++)Ha(t[e])}}function ks(e,t){return e(t)}function bs(){}var So=!1;function js(e,t,n){if(So)return e(t,n);So=!0;try{return ks(e,t,n)}finally{So=!1,(Gt!==null||Qt!==null)&&(bs(),ws())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var si=!1;if(He)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){si=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{si=!1}function Uu(e,t,n,r,o,i,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var jn=!1,_r=null,Ir=!1,ci=null,Bu={onError:function(e){jn=!0,_r=e}};function Vu(e,t,n,r,o,i,l,s,c){jn=!1,_r=null,Uu.apply(Bu,arguments)}function Wu(e,t,n,r,o,i,l,s,c){if(Vu.apply(this,arguments),jn){if(jn){var u=_r;jn=!1,_r=null}else throw Error(y(198));Ir||(Ir=!0,ci=u)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ga(e){if(_t(e)!==e)throw Error(y(188))}function $u(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ga(o),e;if(i===r)return Ga(o),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ns(e){return e=$u(e),e!==null?Cs(e):null}function Cs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cs(e);if(t!==null)return t;e=e.sibling}return null}var Es=ye.unstable_scheduleCallback,Qa=ye.unstable_cancelCallback,Hu=ye.unstable_shouldYield,Gu=ye.unstable_requestPaint,H=ye.unstable_now,Qu=ye.unstable_getCurrentPriorityLevel,Xi=ye.unstable_ImmediatePriority,zs=ye.unstable_UserBlockingPriority,Or=ye.unstable_NormalPriority,Yu=ye.unstable_LowPriority,Ps=ye.unstable_IdlePriority,to=null,Me=null;function Ku(e){if(Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:Zu,qu=Math.log,Xu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(qu(e)/Xu|0)|0}var ir=64,ar=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=wn(s):(i&=l,i!==0&&(r=wn(i)))}else l=n&~o,l!==0?r=wn(l):i!==0&&(r=wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),o=1<<n,r|=e[n],t&=~o;return r}function Ju(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ie(i),s=1<<l,c=o[l];c===-1?(!(s&n)||s&r)&&(o[l]=Ju(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ts(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function No(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ie(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var O=0;function _s(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,Ji,Os,Ls,Rs,di=!1,lr=[],rt=null,ot=null,it=null,Ln=new Map,Rn=new Map,Je=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function fn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Xn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rd(e,t,n,r,o){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,o),!0;case"dragenter":return ot=fn(ot,e,t,n,r,o),!0;case"mouseover":return it=fn(it,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ln.set(i,fn(Ln.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Rn.set(i,fn(Rn.get(i)||null,e,t,n,r,o)),!0}return!1}function Ds(e){var t=wt(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=Ss(n),t!==null){e.blockedOn=t,Rs(e.priority,function(){Os(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ai=r,n.target.dispatchEvent(r),ai=null}else return t=Xn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){wr(e)&&n.delete(t)}function od(){di=!1,rt!==null&&wr(rt)&&(rt=null),ot!==null&&wr(ot)&&(ot=null),it!==null&&wr(it)&&(it=null),Ln.forEach(Ka),Rn.forEach(Ka)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,di||(di=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,od)))}function Dn(e){function t(o){return pn(o,e)}if(0<lr.length){pn(lr[0],e);for(var n=1;n<lr.length;n++){var r=lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),ot!==null&&pn(ot,e),it!==null&&pn(it,e),Ln.forEach(t),Rn.forEach(t),n=0;n<Je.length;n++)r=Je[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(n=Je[0],n.blockedOn===null);)Ds(n),n.blockedOn===null&&Je.shift()}var Yt=Ke.ReactCurrentBatchConfig,Rr=!0;function id(e,t,n,r){var o=O,i=Yt.transition;Yt.transition=null;try{O=1,ea(e,t,n,r)}finally{O=o,Yt.transition=i}}function ad(e,t,n,r){var o=O,i=Yt.transition;Yt.transition=null;try{O=4,ea(e,t,n,r)}finally{O=o,Yt.transition=i}}function ea(e,t,n,r){if(Rr){var o=fi(e,t,n,r);if(o===null)Ro(e,t,r,Dr,n),Ya(e,r);else if(rd(o,e,t,n,r))r.stopPropagation();else if(Ya(e,r),t&4&&-1<nd.indexOf(e)){for(;o!==null;){var i=Xn(o);if(i!==null&&Is(i),i=fi(e,t,n,r),i===null&&Ro(e,t,r,Dr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ro(e,t,r,null,n)}}var Dr=null;function fi(e,t,n,r){if(Dr=null,e=qi(r),e=wt(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ss(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function Fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Xi:return 1;case zs:return 4;case Or:case Yu:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var tt=null,ta=null,kr=null;function Ms(){if(kr)return kr;var e,t=ta,n=t.length,r,o="value"in tt?tt.value:tt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return kr=o.slice(e,1<r?1-r:void 0)}function br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function qa(){return!1}function we(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sr:qa,this.isPropagationStopped=qa,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=we(an),qn=B({},an,{view:0,detail:0}),ld=we(qn),Co,Eo,mn,no=B({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Co=e.screenX-mn.screenX,Eo=e.screenY-mn.screenY):Eo=Co=0,mn=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),Xa=we(no),sd=B({},no,{dataTransfer:0}),cd=we(sd),ud=B({},qn,{relatedTarget:0}),zo=we(ud),dd=B({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=we(dd),pd=B({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=we(pd),hd=B({},an,{data:0}),Za=we(hd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function ra(){return xd}var wd=B({},qn,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=we(wd),bd=B({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=we(bd),jd=B({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),Sd=we(jd),Nd=B({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=we(Nd),Ed=B({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=we(Ed),Pd=[9,13,27,32],oa=He&&"CompositionEvent"in window,Sn=null;He&&"documentMode"in document&&(Sn=document.documentMode);var Td=He&&"TextEvent"in window&&!Sn,As=He&&(!oa||Sn&&8<Sn&&11>=Sn),el=" ",tl=!1;function Us(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function _d(e,t){switch(e){case"compositionend":return Bs(t);case"keypress":return t.which!==32?null:(tl=!0,el);case"textInput":return e=t.data,e===el&&tl?null:e;default:return null}}function Id(e,t){if(Rt)return e==="compositionend"||!oa&&Us(e,t)?(e=Ms(),kr=ta=tt=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return As&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function Vs(e,t,n,r){xs(r),t=Fr(t,"onChange"),0<t.length&&(n=new na("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nn=null,Fn=null;function Ld(e){Js(e,0)}function ro(e){var t=Mt(e);if(fs(t))return e}function Rd(e,t){if(e==="change")return t}var Ws=!1;if(He){var Po;if(He){var To="oninput"in document;if(!To){var rl=document.createElement("div");rl.setAttribute("oninput","return;"),To=typeof rl.oninput=="function"}Po=To}else Po=!1;Ws=Po&&(!document.documentMode||9<document.documentMode)}function ol(){Nn&&(Nn.detachEvent("onpropertychange",$s),Fn=Nn=null)}function $s(e){if(e.propertyName==="value"&&ro(Fn)){var t=[];Vs(t,Fn,e,qi(e)),js(Ld,t)}}function Dd(e,t,n){e==="focusin"?(ol(),Nn=t,Fn=n,Nn.attachEvent("onpropertychange",$s)):e==="focusout"&&ol()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ro(Fn)}function Md(e,t){if(e==="click")return ro(t)}function Ad(e,t){if(e==="input"||e==="change")return ro(t)}function Ud(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:Ud;function Mn(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Yo.call(t,o)||!Le(e[o],t[o]))return!1}return!0}function il(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function al(e,t){var n=il(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=il(n)}}function Hs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=Gs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hs(n.ownerDocument.documentElement,n)){if(r!==null&&ia(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=al(n,i);var l=al(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=He&&"documentMode"in document&&11>=document.documentMode,Dt=null,pi=null,Cn=null,mi=!1;function ll(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mi||Dt==null||Dt!==Tr(r)||(r=Dt,"selectionStart"in r&&ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cn&&Mn(Cn,r)||(Cn=r,r=Fr(pi,"onSelect"),0<r.length&&(t=new na("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},_o={},Qs={};He&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function oo(e){if(_o[e])return _o[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qs)return _o[e]=t[n];return e}var Ys=oo("animationend"),Ks=oo("animationiteration"),qs=oo("animationstart"),Xs=oo("transitionend"),Zs=new Map,sl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Zs.set(e,t),Tt(t,[e])}for(var Io=0;Io<sl.length;Io++){var Oo=sl[Io],Wd=Oo.toLowerCase(),$d=Oo[0].toUpperCase()+Oo.slice(1);pt(Wd,"on"+$d)}pt(Ys,"onAnimationEnd");pt(Ks,"onAnimationIteration");pt(qs,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Xs,"onTransitionEnd");Xt("onMouseEnter",["mouseout","mouseover"]);Xt("onMouseLeave",["mouseout","mouseover"]);Xt("onPointerEnter",["pointerout","pointerover"]);Xt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function cl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wu(r,t,void 0,e),e.currentTarget=null}function Js(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;cl(o,s,u),i=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;cl(o,s,u),i=c}}}if(Ir)throw e=ci,Ir=!1,ci=null,e}function R(e,t){var n=t[xi];n===void 0&&(n=t[xi]=new Set);var r=e+"__bubble";n.has(r)||(ec(t,e,2,!1),n.add(r))}function Lo(e,t,n){var r=0;t&&(r|=4),ec(n,e,r,t)}var ur="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[ur]){e[ur]=!0,ls.forEach(function(n){n!=="selectionchange"&&(Hd.has(n)||Lo(n,!1,e),Lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ur]||(t[ur]=!0,Lo("selectionchange",!1,t))}}function ec(e,t,n,r){switch(Fs(t)){case 1:var o=id;break;case 4:o=ad;break;default:o=ea}n=o.bind(null,t,n,e),o=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ro(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;s!==null;){if(l=wt(s),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}s=s.parentNode}}r=r.return}js(function(){var u=i,h=qi(n),g=[];e:{var m=Zs.get(e);if(m!==void 0){var x=na,w=e;switch(e){case"keypress":if(br(n)===0)break e;case"keydown":case"keyup":x=kd;break;case"focusin":w="focus",x=zo;break;case"focusout":w="blur",x=zo;break;case"beforeblur":case"afterblur":x=zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Sd;break;case Ys:case Ks:case qs:x=fd;break;case Xs:x=Cd;break;case"scroll":x=ld;break;case"wheel":x=zd;break;case"copy":case"cut":case"paste":x=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ja}var k=(t&4)!==0,F=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var d=u,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=On(d,f),v!=null&&k.push(Un(d,v,p)))),F)break;d=d.return}0<k.length&&(m=new x(m,w,null,n,h),g.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==ai&&(w=n.relatedTarget||n.fromElement)&&(wt(w)||w[Ge]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?wt(w):null,w!==null&&(F=_t(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(k=Xa,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ja,v="onPointerLeave",f="onPointerEnter",d="pointer"),F=x==null?m:Mt(x),p=w==null?m:Mt(w),m=new k(v,d+"leave",x,n,h),m.target=F,m.relatedTarget=p,v=null,wt(h)===u&&(k=new k(f,d+"enter",w,n,h),k.target=p,k.relatedTarget=F,v=k),F=v,x&&w)t:{for(k=x,f=w,d=0,p=k;p;p=It(p))d++;for(p=0,v=f;v;v=It(v))p++;for(;0<d-p;)k=It(k),d--;for(;0<p-d;)f=It(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=It(k),f=It(f)}k=null}else k=null;x!==null&&ul(g,m,x,k,!1),w!==null&&F!==null&&ul(g,F,w,k,!0)}}e:{if(m=u?Mt(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var j=Rd;else if(nl(m))if(Ws)j=Ad;else{j=Fd;var N=Dd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Md);if(j&&(j=j(e,u))){Vs(g,j,n,h);break e}N&&N(e,m,u),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&ti(m,"number",m.value)}switch(N=u?Mt(u):window,e){case"focusin":(nl(N)||N.contentEditable==="true")&&(Dt=N,pi=u,Cn=null);break;case"focusout":Cn=pi=Dt=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,ll(g,n,h);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":ll(g,n,h)}var C;if(oa)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Rt?Us(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(As&&n.locale!=="ko"&&(Rt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Rt&&(C=Ms()):(tt=h,ta="value"in tt?tt.value:tt.textContent,Rt=!0)),N=Fr(u,E),0<N.length&&(E=new Za(E,e,null,n,h),g.push({event:E,listeners:N}),C?E.data=C:(C=Bs(n),C!==null&&(E.data=C)))),(C=Td?_d(e,n):Id(e,n))&&(u=Fr(u,"onBeforeInput"),0<u.length&&(h=new Za("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:u}),h.data=C))}Js(g,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=On(e,n),i!=null&&r.unshift(Un(e,i,o)),i=On(e,t),i!=null&&r.push(Un(e,i,o))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ul(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,o?(c=On(n,i),c!=null&&l.unshift(Un(n,c,s))):o||(c=On(n,i),c!=null&&l.push(Un(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function dl(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Qd,"")}function dr(e,t,n){if(t=dl(t),dl(e)!==t&&n)throw Error(y(425))}function Mr(){}var hi=null,gi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,fl=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof fl<"u"?function(e){return fl.resolve(null).then(e).catch(qd)}:yi;function qd(e){setTimeout(function(){throw e})}function Do(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Dn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Dn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),Fe="__reactFiber$"+ln,Bn="__reactProps$"+ln,Ge="__reactContainer$"+ln,xi="__reactEvents$"+ln,Xd="__reactListeners$"+ln,Zd="__reactHandles$"+ln;function wt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pl(e);e!==null;){if(n=e[Fe])return n;e=pl(e)}return t}e=n,n=e.parentNode}return null}function Xn(e){return e=e[Fe]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function io(e){return e[Bn]||null}var wi=[],At=-1;function mt(e){return{current:e}}function D(e){0>At||(e.current=wi[At],wi[At]=null,At--)}function L(e,t){At++,wi[At]=e.current,e.current=t}var ft={},ie=mt(ft),fe=mt(!1),Nt=ft;function Zt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function pe(e){return e=e.childContextTypes,e!=null}function Ar(){D(fe),D(ie)}function ml(e,t,n){if(ie.current!==ft)throw Error(y(168));L(ie,t),L(fe,n)}function tc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(y(108,Du(e)||"Unknown",o));return B({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Nt=ie.current,L(ie,e),L(fe,fe.current),!0}function hl(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=tc(e,t,Nt),r.__reactInternalMemoizedMergedChildContext=e,D(fe),D(ie),L(ie,e)):D(fe),L(fe,n)}var Be=null,ao=!1,Fo=!1;function nc(e){Be===null?Be=[e]:Be.push(e)}function Jd(e){ao=!0,nc(e)}function ht(){if(!Fo&&Be!==null){Fo=!0;var e=0,t=O;try{var n=Be;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,ao=!1}catch(o){throw Be!==null&&(Be=Be.slice(e+1)),Es(Xi,ht),o}finally{O=t,Fo=!1}}return null}var Ut=[],Bt=0,Br=null,Vr=0,ke=[],be=0,Ct=null,Ve=1,We="";function yt(e,t){Ut[Bt++]=Vr,Ut[Bt++]=Br,Br=e,Vr=t}function rc(e,t,n){ke[be++]=Ve,ke[be++]=We,ke[be++]=Ct,Ct=e;var r=Ve;e=We;var o=32-Ie(r)-1;r&=~(1<<o),n+=1;var i=32-Ie(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ve=1<<32-Ie(t)+o|n<<o|r,We=i+e}else Ve=1<<i|n<<o|r,We=e}function aa(e){e.return!==null&&(yt(e,1),rc(e,1,0))}function la(e){for(;e===Br;)Br=Ut[--Bt],Ut[Bt]=null,Vr=Ut[--Bt],Ut[Bt]=null;for(;e===Ct;)Ct=ke[--be],ke[be]=null,We=ke[--be],ke[be]=null,Ve=ke[--be],ke[be]=null}var ve=null,ge=null,M=!1,_e=null;function oc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ct!==null?{id:Ve,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bi(e){if(M){var t=ge;if(t){var n=t;if(!gl(e,t)){if(ki(e))throw Error(y(418));t=at(n.nextSibling);var r=ve;t&&gl(e,t)?oc(r,n):(e.flags=e.flags&-4097|2,M=!1,ve=e)}}else{if(ki(e))throw Error(y(418));e.flags=e.flags&-4097|2,M=!1,ve=e}}}function vl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function fr(e){if(e!==ve)return!1;if(!M)return vl(e),M=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=ge)){if(ki(e))throw ic(),Error(y(418));for(;t;)oc(e,t),t=at(t.nextSibling)}if(vl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?at(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=ge;e;)e=at(e.nextSibling)}function Jt(){ge=ve=null,M=!1}function sa(e){_e===null?_e=[e]:_e.push(e)}var ef=Ke.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yl(e){var t=e._init;return t(e._payload)}function ac(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=ut(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=$o(p,f.mode,v),d.return=f,d):(d=o(d,p),d.return=f,d)}function c(f,d,p,v){var j=p.type;return j===Lt?h(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Xe&&yl(j)===d.type)?(v=o(d,p.props),v.ref=hn(f,d,p),v.return=f,v):(v=Pr(p.type,p.key,p.props,null,f.mode,v),v.ref=hn(f,d,p),v.return=f,v)}function u(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ho(p,f.mode,v),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function h(f,d,p,v,j){return d===null||d.tag!==7?(d=St(p,f.mode,v,j),d.return=f,d):(d=o(d,p),d.return=f,d)}function g(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=$o(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case nr:return p=Pr(d.type,d.key,d.props,null,f.mode,p),p.ref=hn(f,null,d),p.return=f,p;case Ot:return d=Ho(d,f.mode,p),d.return=f,d;case Xe:var v=d._init;return g(f,v(d._payload),p)}if(xn(d)||un(d))return d=St(d,f.mode,p,null),d.return=f,d;pr(f,d)}return null}function m(f,d,p,v){var j=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:return p.key===j?c(f,d,p,v):null;case Ot:return p.key===j?u(f,d,p,v):null;case Xe:return j=p._init,m(f,d,j(p._payload),v)}if(xn(p)||un(p))return j!==null?null:h(f,d,p,v,null);pr(f,p)}return null}function x(f,d,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nr:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,j);case Ot:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,j);case Xe:var N=v._init;return x(f,d,p,N(v._payload),j)}if(xn(v)||un(v))return f=f.get(p)||null,h(d,f,v,j,null);pr(d,v)}return null}function w(f,d,p,v){for(var j=null,N=null,C=d,E=d=0,W=null;C!==null&&E<p.length;E++){C.index>E?(W=C,C=null):W=C.sibling;var _=m(f,C,p[E],v);if(_===null){C===null&&(C=W);break}e&&C&&_.alternate===null&&t(f,C),d=i(_,d,E),N===null?j=_:N.sibling=_,N=_,C=W}if(E===p.length)return n(f,C),M&&yt(f,E),j;if(C===null){for(;E<p.length;E++)C=g(f,p[E],v),C!==null&&(d=i(C,d,E),N===null?j=C:N.sibling=C,N=C);return M&&yt(f,E),j}for(C=r(f,C);E<p.length;E++)W=x(C,f,E,p[E],v),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?E:W.key),d=i(W,d,E),N===null?j=W:N.sibling=W,N=W);return e&&C.forEach(function(Ee){return t(f,Ee)}),M&&yt(f,E),j}function k(f,d,p,v){var j=un(p);if(typeof j!="function")throw Error(y(150));if(p=j.call(p),p==null)throw Error(y(151));for(var N=j=null,C=d,E=d=0,W=null,_=p.next();C!==null&&!_.done;E++,_=p.next()){C.index>E?(W=C,C=null):W=C.sibling;var Ee=m(f,C,_.value,v);if(Ee===null){C===null&&(C=W);break}e&&C&&Ee.alternate===null&&t(f,C),d=i(Ee,d,E),N===null?j=Ee:N.sibling=Ee,N=Ee,C=W}if(_.done)return n(f,C),M&&yt(f,E),j;if(C===null){for(;!_.done;E++,_=p.next())_=g(f,_.value,v),_!==null&&(d=i(_,d,E),N===null?j=_:N.sibling=_,N=_);return M&&yt(f,E),j}for(C=r(f,C);!_.done;E++,_=p.next())_=x(C,f,E,_.value,v),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?E:_.key),d=i(_,d,E),N===null?j=_:N.sibling=_,N=_);return e&&C.forEach(function(sn){return t(f,sn)}),M&&yt(f,E),j}function F(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Lt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:e:{for(var j=p.key,N=d;N!==null;){if(N.key===j){if(j=p.type,j===Lt){if(N.tag===7){n(f,N.sibling),d=o(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Xe&&yl(j)===N.type){n(f,N.sibling),d=o(N,p.props),d.ref=hn(f,N,p),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Lt?(d=St(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Pr(p.type,p.key,p.props,null,f.mode,v),v.ref=hn(f,d,p),v.return=f,f=v)}return l(f);case Ot:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Ho(p,f.mode,v),d.return=f,f=d}return l(f);case Xe:return N=p._init,F(f,d,N(p._payload),v)}if(xn(p))return w(f,d,p,v);if(un(p))return k(f,d,p,v);pr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=$o(p,f.mode,v),d.return=f,f=d),l(f)):n(f,d)}return F}var en=ac(!0),lc=ac(!1),Wr=mt(null),$r=null,Vt=null,ca=null;function ua(){ca=Vt=$r=null}function da(e){var t=Wr.current;D(Wr),e._currentValue=t}function ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){$r=e,ca=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ca!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if($r===null)throw Error(y(308));Vt=e,$r.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var kt=null;function fa(e){kt===null?kt=[e]:kt.push(e)}function sc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,fa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Qe(e,n)}return o=r.interleaved,o===null?(t.next=t,fa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Qe(e,n)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function xl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hr(e,t,n,r){var o=e.updateQueue;Ze=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=c))}if(i!==null){var g=o.baseState;l=0,h=u=c=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){g=w.call(x,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,g,m):w,m==null)break e;g=B({},g,m);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=x,c=g):h=h.next=x,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(c=g),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);zt|=l,e.lanes=l,e.memoizedState=g}}function wl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(y(191,o));o.call(r)}}}var Zn={},Ae=mt(Zn),Vn=mt(Zn),Wn=mt(Zn);function bt(e){if(e===Zn)throw Error(y(174));return e}function ma(e,t){switch(L(Wn,t),L(Vn,e),L(Ae,Zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}D(Ae),L(Ae,t)}function tn(){D(Ae),D(Vn),D(Wn)}function uc(e){bt(Wn.current);var t=bt(Ae.current),n=ri(t,e.type);t!==n&&(L(Vn,e),L(Ae,n))}function ha(e){Vn.current===e&&(D(Ae),D(Vn))}var A=mt(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function ga(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var Sr=Ke.ReactCurrentDispatcher,Ao=Ke.ReactCurrentBatchConfig,Et=0,U=null,Q=null,X=null,Qr=!1,En=!1,$n=0,tf=0;function ne(){throw Error(y(321))}function va(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Le(e[n],t[n]))return!1;return!0}function ya(e,t,n,r,o,i){if(Et=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sr.current=e===null||e.memoizedState===null?af:lf,e=n(r,o),En){i=0;do{if(En=!1,$n=0,25<=i)throw Error(y(301));i+=1,X=Q=null,t.updateQueue=null,Sr.current=sf,e=n(r,o)}while(En)}if(Sr.current=Yr,t=Q!==null&&Q.next!==null,Et=0,X=Q=U=null,Qr=!1,t)throw Error(y(300));return e}function xa(){var e=$n!==0;return $n=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Ce(){if(Q===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=X===null?U.memoizedState:X.next;if(t!==null)X=t,Q=e;else{if(e===null)throw Error(y(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function Hn(e,t){return typeof t=="function"?t(e):t}function Uo(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Q,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,c=null,u=i;do{var h=u.lane;if((Et&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=g,l=r):c=c.next=g,U.lanes|=h,zt|=h}u=u.next}while(u!==null&&u!==i);c===null?l=r:c.next=s,Le(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,U.lanes|=i,zt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Le(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function dc(){}function fc(e,t){var n=U,r=Ce(),o=t(),i=!Le(r.memoizedState,o);if(i&&(r.memoizedState=o,de=!0),r=r.queue,wa(hc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Gn(9,mc.bind(null,n,r,o,t),void 0,null),Z===null)throw Error(y(349));Et&30||pc(n,t,o)}return o}function pc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mc(e,t,n,r){t.value=n,t.getSnapshot=r,gc(t)&&vc(e)}function hc(e,t,n){return n(function(){gc(t)&&vc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Le(e,n)}catch{return!0}}function vc(e){var t=Qe(e,1);t!==null&&Oe(t,e,1,-1)}function kl(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t.queue=e,e=e.dispatch=of.bind(null,U,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yc(){return Ce().memoizedState}function Nr(e,t,n,r){var o=De();U.flags|=e,o.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function lo(e,t,n,r){var o=Ce();r=r===void 0?null:r;var i=void 0;if(Q!==null){var l=Q.memoizedState;if(i=l.destroy,r!==null&&va(r,l.deps)){o.memoizedState=Gn(t,n,i,r);return}}U.flags|=e,o.memoizedState=Gn(1|t,n,i,r)}function bl(e,t){return Nr(8390656,8,e,t)}function wa(e,t){return lo(2048,8,e,t)}function xc(e,t){return lo(4,2,e,t)}function wc(e,t){return lo(4,4,e,t)}function kc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bc(e,t,n){return n=n!=null?n.concat([e]):null,lo(4,4,kc.bind(null,t,e),n)}function ka(){}function jc(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&va(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sc(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&va(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nc(e,t,n){return Et&21?(Le(n,t)||(n=Ts(),U.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function nf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Ao.transition;Ao.transition={};try{e(!1),t()}finally{O=n,Ao.transition=r}}function Cc(){return Ce().memoizedState}function rf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ec(e))zc(t,n);else if(n=sc(e,t,n,r),n!==null){var o=le();Oe(n,e,r,o),Pc(n,t,r)}}function of(e,t,n){var r=ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))zc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Le(s,l)){var c=t.interleaved;c===null?(o.next=o,fa(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=sc(e,t,o,r),n!==null&&(o=le(),Oe(n,e,r,o),Pc(n,t,r))}}function Ec(e){var t=e.alternate;return e===U||t!==null&&t===U}function zc(e,t){En=Qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Yr={readContext:Ne,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},af={readContext:Ne,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:bl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nr(4194308,4,kc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:kl,useDebugValue:ka,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=kl(!1),t=e[0];return e=nf.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,o=De();if(M){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Z===null)throw Error(y(349));Et&30||pc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,bl(hc.bind(null,r,i,e),[e]),r.flags|=2048,Gn(9,mc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=De(),t=Z.identifierPrefix;if(M){var n=We,r=Ve;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$n++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lf={readContext:Ne,useCallback:jc,useContext:Ne,useEffect:wa,useImperativeHandle:bc,useInsertionEffect:xc,useLayoutEffect:wc,useMemo:Sc,useReducer:Uo,useRef:yc,useState:function(){return Uo(Hn)},useDebugValue:ka,useDeferredValue:function(e){var t=Ce();return Nc(t,Q.memoizedState,e)},useTransition:function(){var e=Uo(Hn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:fc,useId:Cc,unstable_isNewReconciler:!1},sf={readContext:Ne,useCallback:jc,useContext:Ne,useEffect:wa,useImperativeHandle:bc,useInsertionEffect:xc,useLayoutEffect:wc,useMemo:Sc,useReducer:Bo,useRef:yc,useState:function(){return Bo(Hn)},useDebugValue:ka,useDeferredValue:function(e){var t=Ce();return Q===null?t.memoizedState=e:Nc(t,Q.memoizedState,e)},useTransition:function(){var e=Bo(Hn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:fc,useId:Cc,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var so={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),o=ct(e),i=$e(r,o);i.payload=t,n!=null&&(i.callback=n),t=lt(e,i,o),t!==null&&(Oe(t,e,o,r),jr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),o=ct(e),i=$e(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=lt(e,i,o),t!==null&&(Oe(t,e,o,r),jr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=ct(e),o=$e(n,r);o.tag=2,t!=null&&(o.callback=t),t=lt(e,o,r),t!==null&&(Oe(t,e,r,n),jr(t,e,r))}};function jl(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Mn(n,r)||!Mn(o,i):!0}function Tc(e,t,n){var r=!1,o=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(o=pe(t)?Nt:ie.current,r=t.contextTypes,i=(r=r!=null)?Zt(e,o):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Sl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function Ni(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},pa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ne(i):(i=pe(t)?Nt:ie.current,o.context=Zt(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Si(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&so.enqueueReplaceState(o,o.state,null),Hr(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Ru(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Vo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ci(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function _c(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Di=r),Ci(e,t)},n}function Ic(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ci(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ci(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Nl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jf.bind(null,e,t,n),t.then(e,e))}function Cl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function El(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var uf=Ke.ReactCurrentOwner,de=!1;function ae(e,t,n,r){t.child=e===null?lc(t,null,n,r):en(t,e.child,n,r)}function zl(e,t,n,r,o){n=n.render;var i=t.ref;return Kt(t,o),r=ya(e,t,n,r,i,o),n=xa(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(M&&n&&aa(t),t.flags|=1,ae(e,t,r,o),t.child)}function Pl(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Pa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Oc(e,t,i,r,o)):(e=Pr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mn,n(l,r)&&e.ref===t.ref)return Ye(e,t,o)}return t.flags|=1,e=ut(i,r),e.ref=t.ref,e.return=t,t.child=e}function Oc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Mn(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ye(e,t,o)}return Ei(e,t,n,r,o)}function Lc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L($t,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L($t,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,L($t,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,L($t,he),he|=r;return ae(e,t,o,n),t.child}function Rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ei(e,t,n,r,o){var i=pe(n)?Nt:ie.current;return i=Zt(t,i),Kt(t,o),n=ya(e,t,n,r,i,o),r=xa(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(M&&r&&aa(t),t.flags|=1,ae(e,t,n,o),t.child)}function Tl(e,t,n,r,o){if(pe(n)){var i=!0;Ur(t)}else i=!1;if(Kt(t,o),t.stateNode===null)Cr(e,t),Tc(t,n,r),Ni(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ne(u):(u=pe(n)?Nt:ie.current,u=Zt(t,u));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Sl(t,l,r,u),Ze=!1;var m=t.memoizedState;l.state=m,Hr(t,r,l,o),c=t.memoizedState,s!==r||m!==c||fe.current||Ze?(typeof h=="function"&&(Si(t,n,h,r),c=t.memoizedState),(s=Ze||jl(t,n,s,r,m,c,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,cc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Pe(t.type,s),l.props=u,g=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ne(c):(c=pe(n)?Nt:ie.current,c=Zt(t,c));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==c)&&Sl(t,l,r,c),Ze=!1,m=t.memoizedState,l.state=m,Hr(t,r,l,o);var w=t.memoizedState;s!==g||m!==w||fe.current||Ze?(typeof x=="function"&&(Si(t,n,x,r),w=t.memoizedState),(u=Ze||jl(t,n,u,r,m,w,c)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return zi(e,t,n,r,i,o)}function zi(e,t,n,r,o,i){Rc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&hl(t,n,!1),Ye(e,t,i);r=t.stateNode,uf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=en(t,e.child,null,i),t.child=en(t,null,s,i)):ae(e,t,s,i),t.memoizedState=r.state,o&&hl(t,n,!0),t.child}function Dc(e){var t=e.stateNode;t.pendingContext?ml(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ml(e,t.context,!1),ma(e,t.containerInfo)}function _l(e,t,n,r,o){return Jt(),sa(o),t.flags|=256,ae(e,t,n,r),t.child}var Pi={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fc(e,t,n){var r=t.pendingProps,o=A.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),L(A,o&1),e===null)return bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=fo(l,r,0,null),e=St(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ti(n),t.memoizedState=Pi,e):ba(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return df(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ut(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=ut(s,i):(i=St(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ti(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Pi,r}return i=e.child,e=i.sibling,r=ut(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ba(e,t){return t=fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&sa(r),en(t,e.child,null,n),e=ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Vo(Error(y(422))),mr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=fo({mode:"visible",children:r.children},o,0,null),i=St(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,l),t.child.memoizedState=Ti(l),t.memoizedState=Pi,i);if(!(t.mode&1))return mr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=Vo(i,r,void 0),mr(e,t,l,r)}if(s=(l&e.childLanes)!==0,de||s){if(r=Z,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Qe(e,o),Oe(r,e,o,-1))}return za(),r=Vo(Error(y(421))),mr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ge=at(o.nextSibling),ve=t,M=!0,_e=null,e!==null&&(ke[be++]=Ve,ke[be++]=We,ke[be++]=Ct,Ve=e.id,We=e.overflow,Ct=t),t=ba(t,r.children),t.flags|=4096,t)}function Il(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ji(e.return,t,n)}function Wo(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Mc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ae(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Il(e,n,t);else if(e.tag===19)Il(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(A,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Wo(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Gr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Wo(t,!0,n,null,i);break;case"together":Wo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Dc(t),Jt();break;case 5:uc(t);break;case 1:pe(t.type)&&Ur(t);break;case 4:ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;L(Wr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(L(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Fc(e,t,n):(L(A,A.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);L(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),L(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Lc(e,t,n)}return Ye(e,t,n)}var Ac,_i,Uc,Bc;Ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_i=function(){};Uc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bt(Ae.current);var i=null;switch(n){case"input":o=Jo(e,o),r=Jo(e,r),i=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":o=ni(e,o),r=ni(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mr)}oi(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_n.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_n.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&R("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Bc=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!M)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pf(e,t,n){var r=t.pendingProps;switch(la(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Ar(),re(t),null;case 3:return r=t.stateNode,tn(),D(fe),D(ie),ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_e!==null&&(Ai(_e),_e=null))),_i(e,t),re(t),null;case 5:ha(t);var o=bt(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return re(t),null}if(e=bt(Ae.current),fr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Bn]=i,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(o=0;o<kn.length;o++)R(kn[o],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":Ba(r,i),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},R("invalid",r);break;case"textarea":Wa(r,i),R("invalid",r)}oi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),o=["children",""+s]):_n.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&R("scroll",r)}switch(n){case"input":rr(r),Va(r,i,!0);break;case"textarea":rr(r),$a(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Mr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Fe]=t,e[Bn]=r,Ac(e,t,!1,!1),t.stateNode=e;e:{switch(l=ii(n,r),n){case"dialog":R("cancel",e),R("close",e),o=r;break;case"iframe":case"object":case"embed":R("load",e),o=r;break;case"video":case"audio":for(o=0;o<kn.length;o++)R(kn[o],e);o=r;break;case"source":R("error",e),o=r;break;case"img":case"image":case"link":R("error",e),R("load",e),o=r;break;case"details":R("toggle",e),o=r;break;case"input":Ba(e,r),o=Jo(e,r),R("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),R("invalid",e);break;case"textarea":Wa(e,r),o=ni(e,r),R("invalid",e);break;default:o=r}oi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?ys(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gs(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&In(e,c):typeof c=="number"&&In(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_n.hasOwnProperty(i)?c!=null&&i==="onScroll"&&R("scroll",e):c!=null&&Gi(e,i,c,l))}switch(n){case"input":rr(e),Va(e,r,!1);break;case"textarea":rr(e),$a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ht(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Mr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Bc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=bt(Wn.current),bt(Ae.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return re(t),null;case 13:if(D(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(M&&ge!==null&&t.mode&1&&!(t.flags&128))ic(),Jt(),t.flags|=98560,i=!1;else if(i=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Fe]=t}else Jt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else _e!==null&&(Ai(_e),_e=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?K===0&&(K=3):za())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tn(),_i(e,t),e===null&&An(t.stateNode.containerInfo),re(t),null;case 10:return da(t.type._context),re(t),null;case 17:return pe(t.type)&&Ar(),re(t),null;case 19:if(D(A),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)gn(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Gr(e),l!==null){for(t.flags|=128,gn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(A,A.current&1|2),t.child}e=e.sibling}i.tail!==null&&H()>rn&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Gr(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!M)return re(t),null}else 2*H()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=H(),t.sibling=null,n=A.current,L(A,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Ea(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function mf(e,t){switch(la(t),t.tag){case 1:return pe(t.type)&&Ar(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),D(fe),D(ie),ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(D(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Jt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(A),null;case 4:return tn(),null;case 10:return da(t.type._context),null;case 22:case 23:return Ea(),null;case 24:return null;default:return null}}var hr=!1,oe=!1,hf=typeof WeakSet=="function"?WeakSet:Set,b=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ii(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ol=!1;function gf(e,t){if(hi=Rr,e=Gs(),ia(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,u=0,h=0,g=e,m=null;t:for(;;){for(var x;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(c=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++h===r&&(c=l),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Rr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Pe(t.type,k),F);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return w=Ol,Ol=!1,w}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ii(t,n,i)}o=o.next}while(o!==r)}}function co(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vc(e){var t=e.alternate;t!==null&&(e.alternate=null,Vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Bn],delete t[xi],delete t[Xd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wc(e){return e.tag===5||e.tag===3||e.tag===4}function Ll(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mr));else if(r!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}var J=null,Te=!1;function qe(e,t,n){for(n=n.child;n!==null;)$c(e,t,n),n=n.sibling}function $c(e,t,n){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:oe||Wt(n,t);case 6:var r=J,o=Te;J=null,qe(e,t,n),J=r,Te=o,J!==null&&(Te?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Te?(e=J,n=n.stateNode,e.nodeType===8?Do(e.parentNode,n):e.nodeType===1&&Do(e,n),Dn(e)):Do(J,n.stateNode));break;case 4:r=J,o=Te,J=n.stateNode.containerInfo,Te=!0,qe(e,t,n),J=r,Te=o;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ii(n,t,l),o=o.next}while(o!==r)}qe(e,t,n);break;case 1:if(!oe&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,qe(e,t,n),oe=r):qe(e,t,n);break;default:qe(e,t,n)}}function Rl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(r){var o=Nf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:J=s.stateNode,Te=!1;break e;case 3:J=s.stateNode.containerInfo,Te=!0;break e;case 4:J=s.stateNode.containerInfo,Te=!0;break e}s=s.return}if(J===null)throw Error(y(160));$c(i,l,o),J=null,Te=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){V(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}function Hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Re(e),r&4){try{zn(3,e,e.return),co(3,e)}catch(k){V(e,e.return,k)}try{zn(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:ze(t,e),Re(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(ze(t,e),Re(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var o=e.stateNode;try{In(o,"")}catch(k){V(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ps(o,i),ii(s,l);var u=ii(s,i);for(l=0;l<c.length;l+=2){var h=c[l],g=c[l+1];h==="style"?ys(o,g):h==="dangerouslySetInnerHTML"?gs(o,g):h==="children"?In(o,g):Gi(o,h,g,u)}switch(s){case"input":ei(o,i);break;case"textarea":ms(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Ht(o,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ht(o,!!i.multiple,i.defaultValue,!0):Ht(o,!!i.multiple,i.multiple?[]:"",!1))}o[Bn]=i}catch(k){V(e,e.return,k)}}break;case 6:if(ze(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(y(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){V(e,e.return,k)}}break;case 3:if(ze(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:ze(t,e),Re(e);break;case 13:ze(t,e),Re(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Na=H())),r&4&&Rl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,ze(t,e),oe=u):ze(t,e),Re(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(b=e,h=e.child;h!==null;){for(g=b=h;b!==null;){switch(m=b,x=m.child,m.tag){case 0:case 11:case 14:case 15:zn(4,m,m.return);break;case 1:Wt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){V(r,n,k)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Fl(g);continue}}x!==null?(x.return=m,b=x):Fl(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{o=g.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,c=g.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=vs("display",l))}catch(k){V(e,e.return,k)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(k){V(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ze(t,e),Re(e),r&4&&Rl(e);break;case 21:break;default:ze(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(In(o,""),r.flags&=-33);var i=Ll(e);Ri(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ll(e);Li(e,s,l);break;default:throw Error(y(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){b=e,Gc(e)}function Gc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||hr;if(!l){var s=o.alternate,c=s!==null&&s.memoizedState!==null||oe;s=hr;var u=oe;if(hr=l,(oe=c)&&!u)for(b=o;b!==null;)l=b,c=l.child,l.tag===22&&l.memoizedState!==null?Ml(o):c!==null?(c.return=l,b=c):Ml(o);for(;i!==null;)b=i,Gc(i),i=i.sibling;b=o,hr=s,oe=u}Dl(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,b=i):Dl(e)}}function Dl(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||co(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wl(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wl(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Dn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&Oi(t)}catch(m){V(t,t.return,m)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Fl(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Ml(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{co(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){V(t,o,c)}}var i=t.return;try{Oi(t)}catch(c){V(t,i,c)}break;case 5:var l=t.return;try{Oi(t)}catch(c){V(t,l,c)}}}catch(c){V(t,t.return,c)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var yf=Math.ceil,Kr=Ke.ReactCurrentDispatcher,ja=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,I=0,Z=null,G=null,ee=0,he=0,$t=mt(0),K=0,Qn=null,zt=0,uo=0,Sa=0,Pn=null,ue=null,Na=0,rn=1/0,Ue=null,qr=!1,Di=null,st=null,gr=!1,nt=null,Xr=0,Tn=0,Fi=null,Er=-1,zr=0;function le(){return I&6?H():Er!==-1?Er:Er=H()}function ct(e){return e.mode&1?I&2&&ee!==0?ee&-ee:ef.transition!==null?(zr===0&&(zr=Ts()),zr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Fs(e.type)),e):1}function Oe(e,t,n,r){if(50<Tn)throw Tn=0,Fi=null,Error(y(185));Kn(e,n,r),(!(I&2)||e!==Z)&&(e===Z&&(!(I&2)&&(uo|=n),K===4&&et(e,ee)),me(e,r),n===1&&I===0&&!(t.mode&1)&&(rn=H()+500,ao&&ht()))}function me(e,t){var n=e.callbackNode;ed(e,t);var r=Lr(e,e===Z?ee:0);if(r===0)n!==null&&Qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qa(n),t===1)e.tag===0?Jd(Al.bind(null,e)):nc(Al.bind(null,e)),Kd(function(){!(I&6)&&ht()}),n=null;else{switch(_s(r)){case 1:n=Xi;break;case 4:n=zs;break;case 16:n=Or;break;case 536870912:n=Ps;break;default:n=Or}n=eu(n,Qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qc(e,t){if(Er=-1,zr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Lr(e,e===Z?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zr(e,r);else{t=r;var o=I;I|=2;var i=Kc();(Z!==e||ee!==t)&&(Ue=null,rn=H()+500,jt(e,t));do try{kf();break}catch(s){Yc(e,s)}while(!0);ua(),Kr.current=i,I=o,G!==null?t=0:(Z=null,ee=0,t=K)}if(t!==0){if(t===2&&(o=ui(e),o!==0&&(r=o,t=Mi(e,o))),t===1)throw n=Qn,jt(e,0),et(e,r),me(e,H()),n;if(t===6)et(e,r);else{if(o=e.current.alternate,!(r&30)&&!xf(o)&&(t=Zr(e,r),t===2&&(i=ui(e),i!==0&&(r=i,t=Mi(e,i))),t===1))throw n=Qn,jt(e,0),et(e,r),me(e,H()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,ue,Ue);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Na+500-H(),10<t)){if(Lr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=yi(xt.bind(null,e,ue,Ue),t);break}xt(e,ue,Ue);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ie(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=yi(xt.bind(null,e,ue,Ue),r);break}xt(e,ue,Ue);break;case 5:xt(e,ue,Ue);break;default:throw Error(y(329))}}}return me(e,H()),e.callbackNode===n?Qc.bind(null,e):null}function Mi(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=Zr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Ai(t)),e}function Ai(e){ue===null?ue=e:ue.push.apply(ue,e)}function xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Le(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Sa,t&=~uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Al(e){if(I&6)throw Error(y(327));qt();var t=Lr(e,0);if(!(t&1))return me(e,H()),null;var n=Zr(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Mi(e,r))}if(n===1)throw n=Qn,jt(e,0),et(e,t),me(e,H()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ue,Ue),me(e,H()),null}function Ca(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(rn=H()+500,ao&&ht())}}function Pt(e){nt!==null&&nt.tag===0&&!(I&6)&&qt();var t=I;I|=1;var n=Se.transition,r=O;try{if(Se.transition=null,O=1,e)return e()}finally{O=r,Se.transition=n,I=t,!(I&6)&&ht()}}function Ea(){he=$t.current,D($t)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yd(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(la(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ar();break;case 3:tn(),D(fe),D(ie),ga();break;case 5:ha(r);break;case 4:tn();break;case 13:D(A);break;case 19:D(A);break;case 10:da(r.type._context);break;case 22:case 23:Ea()}n=n.return}if(Z=e,G=e=ut(e.current,null),ee=he=t,K=0,Qn=null,Sa=uo=zt=0,ue=Pn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}kt=null}return e}function Yc(e,t){do{var n=G;try{if(ua(),Sr.current=Yr,Qr){for(var r=U.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qr=!1}if(Et=0,X=Q=U=null,En=!1,$n=0,ja.current=null,n===null||n.return===null){K=1,Qn=t,G=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=ee,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Cl(l);if(x!==null){x.flags&=-257,El(x,l,s,i,t),x.mode&1&&Nl(i,u,t),t=x,c=u;var w=t.updateQueue;if(w===null){var k=new Set;k.add(c),t.updateQueue=k}else w.add(c);break e}else{if(!(t&1)){Nl(i,u,t),za();break e}c=Error(y(426))}}else if(M&&s.mode&1){var F=Cl(l);if(F!==null){!(F.flags&65536)&&(F.flags|=256),El(F,l,s,i,t),sa(nn(c,s));break e}}i=c=nn(c,s),K!==4&&(K=2),Pn===null?Pn=[i]:Pn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=_c(i,c,t);xl(i,f);break e;case 1:s=c;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(st===null||!st.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ic(i,s,t);xl(i,v);break e}}i=i.return}while(i!==null)}Xc(n)}catch(j){t=j,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Kc(){var e=Kr.current;return Kr.current=Yr,e===null?Yr:e}function za(){(K===0||K===3||K===2)&&(K=4),Z===null||!(zt&268435455)&&!(uo&268435455)||et(Z,ee)}function Zr(e,t){var n=I;I|=2;var r=Kc();(Z!==e||ee!==t)&&(Ue=null,jt(e,t));do try{wf();break}catch(o){Yc(e,o)}while(!0);if(ua(),I=n,Kr.current=r,G!==null)throw Error(y(261));return Z=null,ee=0,K}function wf(){for(;G!==null;)qc(G)}function kf(){for(;G!==null&&!Hu();)qc(G)}function qc(e){var t=Jc(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Xc(e):G=t,ja.current=null}function Xc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,G=null;return}}else if(n=pf(n,t,he),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);K===0&&(K=5)}function xt(e,t,n){var r=O,o=Se.transition;try{Se.transition=null,O=1,bf(e,t,n,r)}finally{Se.transition=o,O=r}return null}function bf(e,t,n,r){do qt();while(nt!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(td(e,i),e===Z&&(G=Z=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,eu(Or,function(){return qt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var l=O;O=1;var s=I;I|=4,ja.current=null,gf(e,n),Hc(n,e),Bd(gi),Rr=!!hi,gi=hi=null,e.current=n,vf(n),Gu(),I=s,O=l,Se.transition=i}else e.current=n;if(gr&&(gr=!1,nt=e,Xr=o),i=e.pendingLanes,i===0&&(st=null),Ku(n.stateNode),me(e,H()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(qr)throw qr=!1,e=Di,Di=null,e;return Xr&1&&e.tag!==0&&qt(),i=e.pendingLanes,i&1?e===Fi?Tn++:(Tn=0,Fi=e):Tn=0,ht(),null}function qt(){if(nt!==null){var e=_s(Xr),t=Se.transition,n=O;try{if(Se.transition=null,O=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Xr=0,I&6)throw Error(y(331));var o=I;for(I|=4,b=e.current;b!==null;){var i=b,l=i.child;if(b.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(b=u;b!==null;){var h=b;switch(h.tag){case 0:case 11:case 15:zn(8,h,i)}var g=h.child;if(g!==null)g.return=h,b=g;else for(;b!==null;){h=b;var m=h.sibling,x=h.return;if(Vc(h),h===u){b=null;break}if(m!==null){m.return=x,b=m;break}b=x}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}b=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,b=l;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,b=f;break e}b=i.return}}var d=e.current;for(b=d;b!==null;){l=b;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,b=p;else e:for(l=d;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:co(9,s)}}catch(j){V(s,s.return,j)}if(s===l){b=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,b=v;break e}b=s.return}}if(I=o,ht(),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(to,e)}catch{}r=!0}return r}finally{O=n,Se.transition=t}}return!1}function Ul(e,t,n){t=nn(n,t),t=_c(e,t,1),e=lt(e,t,1),t=le(),e!==null&&(Kn(e,1,t),me(e,t))}function V(e,t,n){if(e.tag===3)Ul(e,e,n);else for(;t!==null;){if(t.tag===3){Ul(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=Ic(t,e,1),t=lt(t,e,1),e=le(),t!==null&&(Kn(t,1,e),me(t,e));break}}t=t.return}}function jf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(ee&n)===n&&(K===4||K===3&&(ee&130023424)===ee&&500>H()-Na?jt(e,0):Sa|=n),me(e,t)}function Zc(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=le();e=Qe(e,t),e!==null&&(Kn(e,t,n),me(e,n))}function Sf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zc(e,n)}function Nf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Zc(e,n)}var Jc;Jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,ff(e,t,n);de=!!(e.flags&131072)}else de=!1,M&&t.flags&1048576&&rc(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Cr(e,t),e=t.pendingProps;var o=Zt(t,ie.current);Kt(t,n),o=ya(null,t,r,e,o,n);var i=xa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,Ur(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,pa(t),o.updater=so,t.stateNode=o,o._reactInternals=t,Ni(t,r,e,n),t=zi(null,t,r,!0,i,n)):(t.tag=0,M&&i&&aa(t),ae(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Cr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ef(r),e=Pe(r,e),o){case 0:t=Ei(null,t,r,e,n);break e;case 1:t=Tl(null,t,r,e,n);break e;case 11:t=zl(null,t,r,e,n);break e;case 14:t=Pl(null,t,r,Pe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pe(r,o),Ei(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pe(r,o),Tl(e,t,r,o,n);case 3:e:{if(Dc(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,o=i.element,cc(e,t),Hr(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=nn(Error(y(423)),t),t=_l(e,t,r,n,o);break e}else if(r!==o){o=nn(Error(y(424)),t),t=_l(e,t,r,n,o);break e}else for(ge=at(t.stateNode.containerInfo.firstChild),ve=t,M=!0,_e=null,n=lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jt(),r===o){t=Ye(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return uc(t),e===null&&bi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,vi(r,o)?l=null:i!==null&&vi(r,i)&&(t.flags|=32),Rc(e,t),ae(e,t,l,n),t.child;case 6:return e===null&&bi(t),null;case 13:return Fc(e,t,n);case 4:return ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pe(r,o),zl(e,t,r,o,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,L(Wr,r._currentValue),r._currentValue=l,i!==null)if(Le(i.value,l)){if(i.children===o.children&&!fe.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=$e(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),ji(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(y(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ji(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ae(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Kt(t,n),o=Ne(o),r=r(o),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,o=Pe(r,t.pendingProps),o=Pe(r.type,o),Pl(e,t,r,o,n);case 15:return Oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pe(r,o),Cr(e,t),t.tag=1,pe(r)?(e=!0,Ur(t)):e=!1,Kt(t,n),Tc(t,r,o),Ni(t,r,o,n),zi(null,t,r,!0,e,n);case 19:return Mc(e,t,n);case 22:return Lc(e,t,n)}throw Error(y(156,t.tag))};function eu(e,t){return Es(e,t)}function Cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Cf(e,t,n,r)}function Pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return Pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yi)return 11;if(e===Ki)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Pa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Lt:return St(n.children,o,i,t);case Qi:l=8,o|=8;break;case Ko:return e=je(12,n,t,o|2),e.elementType=Ko,e.lanes=i,e;case qo:return e=je(13,n,t,o),e.elementType=qo,e.lanes=i,e;case Xo:return e=je(19,n,t,o),e.elementType=Xo,e.lanes=i,e;case us:return fo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ss:l=10;break e;case cs:l=9;break e;case Yi:l=11;break e;case Ki:l=14;break e;case Xe:l=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=je(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function St(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function fo(e,t,n,r){return e=je(22,e,r,t),e.elementType=us,e.lanes=n,e.stateNode={isHidden:!1},e}function $o(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Ho(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=No(0),this.expirationTimes=No(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ta(e,t,n,r,o,i,l,s,c){return e=new zf(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pa(i),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tu(e){if(!e)return ft;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(pe(n))return tc(e,n,t)}return t}function nu(e,t,n,r,o,i,l,s,c){return e=Ta(n,r,!0,e,o,i,l,s,c),e.context=tu(null),n=e.current,r=le(),o=ct(n),i=$e(r,o),i.callback=t??null,lt(n,i,o),e.current.lanes=o,Kn(e,o,r),me(e,r),e}function po(e,t,n,r){var o=t.current,i=le(),l=ct(o);return n=tu(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=lt(o,t,l),e!==null&&(Oe(e,o,l,i),jr(e,o,l)),l}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _a(e,t){Bl(e,t),(e=e.alternate)&&Bl(e,t)}function Tf(){return null}var ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ia(e){this._internalRoot=e}mo.prototype.render=Ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));po(e,t,null,null)};mo.prototype.unmount=Ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){po(null,e,null,null)}),t[Ge]=null}};function mo(e){this._internalRoot=e}mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Je.length&&t!==0&&t<Je[n].priority;n++);Je.splice(n,0,e),n===0&&Ds(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vl(){}function _f(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Jr(l);i.call(u)}}var l=nu(t,r,e,0,null,!1,!1,"",Vl);return e._reactRootContainer=l,e[Ge]=l.current,An(e.nodeType===8?e.parentNode:e),Pt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Jr(c);s.call(u)}}var c=Ta(e,0,!1,null,null,!1,!1,"",Vl);return e._reactRootContainer=c,e[Ge]=c.current,An(e.nodeType===8?e.parentNode:e),Pt(function(){po(t,c,n,r)}),c}function go(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var c=Jr(l);s.call(c)}}po(t,l,e,o)}else l=_f(n,t,e,o,r);return Jr(l)}Is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Zi(t,n|1),me(t,H()),!(I&6)&&(rn=H()+500,ht()))}break;case 13:Pt(function(){var r=Qe(e,1);if(r!==null){var o=le();Oe(r,e,1,o)}}),_a(e,1)}};Ji=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=le();Oe(t,e,134217728,n)}_a(e,134217728)}};Os=function(e){if(e.tag===13){var t=ct(e),n=Qe(e,t);if(n!==null){var r=le();Oe(n,e,t,r)}_a(e,t)}};Ls=function(){return O};Rs=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};li=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=io(r);if(!o)throw Error(y(90));fs(r),ei(r,o)}}}break;case"textarea":ms(e,n);break;case"select":t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}};ks=Ca;bs=Pt;var If={usingClientEntryPoint:!1,Events:[Xn,Mt,io,xs,ws,Ca]},vn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Of={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ns(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{to=vr.inject(Of),Me=vr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(y(200));return Pf(e,t,null,n)};xe.createRoot=function(e,t){if(!Oa(e))throw Error(y(299));var n=!1,r="",o=ru;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ta(e,1,!1,null,null,n,!1,r,o),e[Ge]=t.current,An(e.nodeType===8?e.parentNode:e),new Ia(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ns(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Pt(e)};xe.hydrate=function(e,t,n){if(!ho(t))throw Error(y(200));return go(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Oa(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=ru;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=nu(t,null,e,1,n??null,o,!1,i,l),e[Ge]=t.current,An(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new mo(t)};xe.render=function(e,t,n){if(!ho(t))throw Error(y(200));return go(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!ho(e))throw Error(y(40));return e._reactRootContainer?(Pt(function(){go(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};xe.unstable_batchedUpdates=Ca;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ho(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return go(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function ou(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ou)}catch(e){console.error(e)}}ou(),os.exports=xe;var Lf=os.exports,Wl=Lf;Qo.createRoot=Wl.createRoot,Qo.hydrateRoot=Wl.hydrateRoot;const Rf="/assets/The%20Gaia%20Ecosystem%20Hero%20Image-5dq3M1QC.png",Df="/assets/From%20Isolation%20to%20Integration-2-25k5038m.png",Ff="/assets/Wheel%20Gaia%20Ecosystem-DPyYkMYP.png",Mf="/assets/The%20Gaia%20Ecosystem-BTl50B9b.png",Af="/assets/Vision-quote-author-CodlOb5y.png",Uf="/assets/1.%20OSF-r0cMROr1.png",Bf="/assets/2.%20Trust-BxXlzwM6.png",Vf="/assets/3.%20Commons-CtHn3rWs.png",Wf="/assets/4.%20OPAL-CC7dtNzx.png",$f="/assets/5.%20PASEO-BqFF3B6D.png",Hf="/assets/6.%20Networks-Ct4MPswu.png",Gf="/assets/7.%20Design%20-Be8UoUrh.png",Qf="/assets/8.%20Tech%20-B5oSKB8k.png",Yf="/assets/Steward%201-Cs68kw5h.jpg",Kf="/assets/Steward%202-Bju_WN7w.jpeg",qf="/assets/Steward%203-D3nDxO99.jpg",Xf="/assets/Steward%204-DdPF5wLI.jpeg",Zf="/assets/Steward%206-Cr7dDgU6.webp",Jf="/assets/Steward%207-BCGnMJr7.jpeg",ep="/assets/Steward%2013-CmMuTnjP.jpg",Go="/assets/Earth%20icon-BA2P242t.png",tp="data:image/svg+xml,%3csvg%20width='179'%20height='141'%20viewBox='0%200%20179%20141'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M173.131%2081.475C170.464%2089.0216%20167.257%2095.5116%20163.511%20100.945C149.357%20121.492%20130.567%20134.218%20107.141%20139.125C75.6606%20145.725%2042.0606%20134.455%2021.1506%20109.595C6.61056%2092.3149%20-0.432773%2071.8949%200.0205602%2048.3349C0.0872269%2044.7949%200.610568%2042.1983%201.59057%2040.545C2.99723%2038.1583%204.74055%2036.3883%206.82055%2035.235C8.08721%2034.535%209.75388%2034.1949%2011.8205%2034.2149C16.0805%2034.2549%2018.8106%2034.235%2022.0006%2037.755C25.7906%2041.925%2025.3906%2045.705%2025.4006%2050.725C25.4306%2065.235%2037.6006%2072.645%2049.5406%2077.265C57.6706%2080.405%2061.7706%2085.835%2064.7406%2093.735C68.4606%20103.655%2076.2706%20114.865%2088.1706%20115.315C92.5239%20115.482%2096.4306%20114.395%2099.8906%20112.055C106.741%20107.425%20110.501%20101.035%20113.431%2093.485C116.521%2085.495%20121.231%2080.055%20129.521%2076.765C140.421%2072.445%20153.241%2064.4949%20152.631%2050.9949C152.524%2048.6216%20152.631%2046.4116%20152.951%2044.3649C153.811%2038.9549%20158.141%2033.965%20163.991%2034.255C166.231%2034.365%20168.361%2033.9949%20170.511%2034.8649C175.521%2036.8949%20178.041%2041.835%20178.141%2047.135C178.387%2059.895%20176.717%2071.3416%20173.131%2081.475Z'%20fill='black'/%3e%3cpath%20d='M104.001%2086.1249C101.101%2092.5949%2099.2605%2098.6349%2093.0705%20102.725C87.9905%20106.095%2081.8405%20101.075%2079.1905%2096.7449C77.3905%2093.8115%2075.9539%2090.8649%2074.8805%2087.9049C72.0205%2080.0648%2066.8539%2073.7682%2059.3805%2069.0149C52.6205%2064.7249%2044.2005%2063.9749%2039.0705%2057.1049C35.7605%2052.6849%2037.1405%2047.7749%2041.1705%2044.2949C44.9505%2041.0149%2049.0705%2039.1948%2053.6505%2037.3948C56.3038%2036.3548%2058.3805%2035.3348%2059.8805%2034.3348C64.2072%2031.4482%2067.8538%2027.8682%2070.8205%2023.5949C73.6205%2019.5549%2075.0805%2014.9549%2077.1005%2010.5549C78.3738%207.78819%2080.3338%205.11486%2082.9805%202.53486C84.7872%200.768189%2086.8171%20-0.0784707%2089.0705%20-0.0051374C95.9405%200.214863%20100.201%207.99485%20102.301%2013.5649C103.547%2016.8715%20105.111%2020.0515%20106.991%2023.1049C111.801%2030.9249%20119.381%2035.5649%20127.921%2038.8849C131.361%2040.2249%20134.521%2042.0815%20137.4%2044.4549C141.84%2048.1249%20142.131%2054.4948%20137.881%2058.4948C134.587%2061.5948%20131.204%2063.7449%20127.731%2064.9449C116.517%2068.8115%20108.607%2075.8715%20104.001%2086.1249Z'%20fill='black'/%3e%3c/svg%3e",np="/assets/Partner%201-C6e_8W96.png",rp="/assets/Partner%202-7yDRfbhY.webp",op="/assets/Partner%203-AU1_P8lK.jpeg",ip="/assets/Partner%204-RNGO2o2u.JPG",ap=({theme:e,onToggleTheme:t})=>{const[n,r]=Y.useState(!1),[o,i]=Y.useState(!1);Y.useEffect(()=>{const c=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=c=>{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth"}),i(!1)},s=[{label:"Vision",target:"paradigm-section"},{label:"Ecosystem",target:"gaia-nature-video"},{label:"Roadmap",target:"roadmap"},{label:"Team",target:"team"},{label:"Join Us",target:"networks"}];return a.jsxs("nav",{className:`navbar ${n?"scrolled":""}`,children:[a.jsxs("div",{className:"nav-container",children:[a.jsxs("div",{className:"logo",children:[a.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 100 100",className:"logo-icon",children:[a.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"currentColor",strokeWidth:"3",opacity:"0.3"}),a.jsx("circle",{cx:"50",cy:"50",r:"35",fill:"none",stroke:"currentColor",strokeWidth:"3",opacity:"0.5"}),a.jsx("circle",{cx:"50",cy:"50",r:"25",fill:"none",stroke:"currentColor",strokeWidth:"3",opacity:"0.7"}),a.jsx("circle",{cx:"50",cy:"50",r:"15",fill:"currentColor"})]}),a.jsx("span",{className:"logo-text",children:"Gaia Ecosystem"})]}),a.jsxs("div",{className:"nav-right",children:[a.jsx("div",{className:"nav-links",children:s.map(({label:c,target:u})=>a.jsx("a",{onClick:()=>l(u),className:"nav-link",children:c},c))}),a.jsxs("button",{className:"theme-toggle",onClick:t,"aria-label":e==="dark"?"Switch to light mode":"Switch to dark mode",children:[a.jsx("span",{className:"theme-toggle-label",children:e==="dark"?"Dark mode":"Light mode"}),a.jsx("div",{className:`theme-toggle-track ${e==="dark"?"is-dark":"is-light"}`,children:a.jsx("div",{className:"theme-toggle-thumb"})})]}),a.jsx("button",{className:`nav-toggle ${o?"is-open":""}`,onClick:()=>i(c=>!c),"aria-label":"Toggle navigation menu",children:a.jsx("span",{className:"nav-burger"})})]})]}),o&&a.jsx("div",{className:"nav-mobile-menu",children:s.map(({label:c,target:u})=>a.jsx("button",{className:"nav-mobile-link",onClick:()=>l(u),type:"button",children:c},c))})]})},lp=({theme:e,onOpenDeck:t})=>{const n=e==="light",r=()=>{const i=document.getElementById("video-section");i&&i.scrollIntoView({behavior:"smooth"})},o=n?"linear-gradient(135deg, rgba(231, 244, 235, 0.26) 0%, rgba(218, 238, 227, 0.23) 45%, rgba(207, 233, 221, 0.22) 100%)":"linear-gradient(135deg, rgba(6, 23, 16, 0.77) 0%, rgba(16, 45, 31, 0.75) 50%, rgba(30, 77, 61, 0.75) 100%)";return a.jsxs("section",{id:"vision",className:"hero-section",style:{backgroundImage:`${o}, url(${Rf})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[a.jsx("div",{className:"hero-particles"}),a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("i",{className:"fas fa-leaf"}),a.jsx("span",{children:"Commons-Based Regenerative Infrastructure"})]}),a.jsx("h1",{className:"hero-title",children:"The Gaia Ecosystem"}),a.jsx("p",{className:"hero-subtitle",children:"Deploying the Operating Systems for a Regenerative Civilization"}),a.jsx("p",{className:"hero-description",children:"Building the commons infrastructure to weave regenerative efforts into a living web of coherence, resilience, and shared purpose"}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:r,children:[a.jsx("i",{className:"fas fa-play"}),"Watch the Video"]}),a.jsxs("button",{className:"btn-secondary",onClick:t,children:[a.jsx("i",{className:"fas fa-images"}),a.jsx("strong",{children:"See the Deck"})]})]})]}),a.jsx("div",{className:"scroll-indicator",children:a.jsx("i",{className:"fas fa-chevron-down"})})]})},sp=()=>{const e=()=>{const t=document.getElementById("paradigm-section");t&&t.scrollIntoView({behavior:"smooth"})};return a.jsx("section",{id:"video-section",className:"video-section",children:a.jsxs("div",{className:"video-container",children:[a.jsx("h2",{className:"video-title",children:"Watch the video introduction"}),a.jsx("div",{className:"video-frame",children:a.jsx("div",{className:"video-embed",children:a.jsx("iframe",{src:"https://www.youtube.com/embed/iO0ycMkr8lo",title:"Introduction to regenerative and sustainable initiatives",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}),a.jsx("div",{className:"video-actions",children:a.jsxs("button",{className:"btn-secondary-small",onClick:e,children:[a.jsx("strong",{children:"Keep going"}),a.jsx("span",{className:"btn-secondary-arrow"})]})})]})})},cp=()=>a.jsx("section",{id:"paradigm-section",className:"paradigm-section",children:a.jsx("div",{className:"paradigm-container",children:a.jsxs("div",{className:"paradigm-content",children:[a.jsx("h2",{children:"A New Paradigm Emerges"}),a.jsx("p",{className:"lead-text",children:"Across the world, individuals, communities and organizations are awakening to their shared role as stewards of a thriving planet. A global transition is unfolding—from extractive systems of competition to collaborative, regenerative forms of economy that align human productivity with the wellbeing of life."}),a.jsxs("div",{className:"paradigm-cards",children:[a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-seedling"}),a.jsx("h3",{children:"Stewardship"}),a.jsx("p",{children:"Caring for shared resources for current and future generations"})]}),a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-sync-alt"}),a.jsx("h3",{children:"Reciprocity"}),a.jsx("p",{children:"Fair exchange based on transparent agreements"})]}),a.jsxs("div",{className:"paradigm-card",children:[a.jsx("i",{className:"fas fa-hands-helping"}),a.jsx("h3",{children:"Shared Purpose"}),a.jsx("p",{children:"Collective wellbeing over individual accumulation"})]})]})]})})}),up=()=>a.jsx("section",{id:"ecosystem",className:"problem-section",children:a.jsxs("div",{className:"problem-container",children:[a.jsxs("div",{className:"problem-text",children:[a.jsxs("div",{className:"section-label section-label--challenge",children:[a.jsx("i",{className:"fas fa-triangle-exclamation"}),"The Challenge"]}),a.jsx("h2",{children:"From Isolation to Integration"}),a.jsx("p",{className:"lead-text lead-text-left",children:"Despite the growing number of regenerative initiatives, most operate in isolation. This fragmentation leads to duplication, inefficiency, and missed opportunities for synergistic impact."}),a.jsxs("div",{className:"problem-points",children:[a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-link-slash"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Disconnected Efforts"}),a.jsx("p",{children:"Regenerative projects lack connective infrastructure for collaboration"})]})]}),a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-clone"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Duplication & Waste"}),a.jsx("p",{children:"Without coordination, valuable resources are spent redundantly"})]})]}),a.jsxs("div",{className:"problem-point",children:[a.jsx("div",{className:"problem-icon",children:a.jsx("i",{className:"fas fa-compress"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Limited Scale"}),a.jsx("p",{children:"Isolated initiatives cannot achieve the systemic transformation needed"})]})]})]})]}),a.jsx("div",{className:"problem-visual",children:a.jsx("img",{src:Df,alt:"From Isolation to Integration",className:"problem-image"})})]})}),dp=()=>a.jsx("section",{className:"solution-section",children:a.jsxs("div",{className:"solution-container",children:[a.jsxs("div",{className:"solution-header-block",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-network-wired"}),"The Solution"]}),a.jsx("h2",{children:"Commons-Based Infrastructure"})]}),a.jsx("div",{className:"solution-visual",children:a.jsx("img",{src:Ff,alt:"Gaia Ecosystem wheel",className:"solution-image"})}),a.jsxs("div",{className:"solution-body",children:[a.jsxs("p",{className:"lead-text lead-text-left",children:["The Gaia Ecosystem provides the ",a.jsx("strong",{children:"nervous and circulatory system"})," for a regenerative civilization—the structures that let collective intelligence and resources flow through diverse, decentralized actors."]}),a.jsxs("div",{className:"solution-features",children:[a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-hands-helping"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Systemic Coherence"}),a.jsx("p",{children:"Shared infrastructure enables seamless collaboration while retaining autonomy"})]})]}),a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-balance-scale"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Transparent Governance"}),a.jsx("p",{children:"Distributed decision-making across scales with clear accountability"})]})]}),a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"feature-icon",children:a.jsx("i",{className:"fas fa-recycle"})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Regenerative by Design"}),a.jsx("p",{children:"Surplus reinvested into community health and ecological restoration"})]})]})]})]})]})}),fp=()=>{const e=()=>{const t=document.getElementById("historic-moment");t&&t.scrollIntoView({behavior:"smooth"})};return a.jsx("section",{id:"gaia-nature-video",className:"video-section",children:a.jsxs("div",{className:"video-container",children:[a.jsx("h2",{className:"video-title",children:"Experience the Gaia Ecosystem"}),a.jsx("div",{className:"video-frame",children:a.jsx("div",{className:"video-embed",children:a.jsx("iframe",{src:"https://www.youtube.com/embed/upci4DZW8oU",title:"Immersive naturescapes",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}),a.jsxs("div",{className:"video-actions",children:[a.jsx("button",{className:"btn-primary-small",children:a.jsx("strong",{children:"Get in touch"})}),a.jsxs("button",{className:"btn-secondary-small",onClick:e,style:{marginLeft:"0.75rem"},children:[a.jsx("strong",{children:"Keep going"}),a.jsx("span",{className:"btn-secondary-arrow"})]})]})]})})},$l=e=>e?String(e).split("**").map((n,r)=>r%2===1?a.jsx("strong",{children:n},r):n):null,pp=({onOpenDeck:e,theme:t,highVisibility:n,onToggleHighVisibility:r})=>{const[o,i]=Y.useState(0),[l,s]=Y.useState(null);Y.useEffect(()=>{if(l!==null){const u=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=u}}},[l]);const c=[{icon:"leaf",title:"Open Systems Foundation",subtitle:"Catalyst Organization",description:"The legal entity stewarding the fundamental infrastructure creation to ensure integrity and coherence across the ecosystem.",image:Uf,ecosystemObjective:"A dedicated open organization to steward the creation and maintenance of the backbone infrastructure that enables the commons ecosystem to operate effectively.",chosenComponent:"Open Systems Foundation – the legal entity and operational framework for commons infrastructure development and stewardship."},{icon:"archive",title:"Commons Trust Infrastructure",subtitle:"Commons Repository",description:"Federated legal entities holding shared assets in trust for collective benefit.",image:Bf,ecosystemObjective:"Legal vehicles for holding collective resources and tracking contributions, enabling collaborative innovation and stewardship of a global resource pool.",chosenComponent:"**Commons Trust Infrastructure** - A federated network of trusts for legal stewardship of shared resources that protect contributor rights while enabling a global “Gaia Commons”. Starting with one trust in Phase 1."},{icon:"globe-americas",title:"Gaia Commons",subtitle:"Management Framework",description:"Distributed governance and intelligence framework balancing autonomy with coherence.",image:Vf,ecosystemObjective:"Distributed governance frameworks for managing and maintaining shared assets, enabling self-sovereign contributions to create collective benefits through peer-to-peer dynamics that balance local autonomy with global coherence.",chosenComponent:"**Gaia Commons Agency Framework** - The operational backbone that enables the commons to manage and develop itself coherently, providing governance, intelligence, and financial management infrastructure."},{icon:"certificate",title:"OPAL Licenses",subtitle:"Intellectual Property",description:"Regenerative licensing for shared innovation, transparent attribution, and equitable revenue flow.",image:Wf,ecosystemObjective:"Licensing structures for on-boarding, creating and managing IP within the commons, managing revenue streams and ensuring contributors receive recognition and benefits.",chosenComponent:"**Open Peer Access License** (OPAL), a customized licensing approach that enables both commons collaboration and strategic interface with conventional systems."},{icon:"seedling",title:"PASEO Framework",subtitle:"Organizational Participation",description:"A model enabling organizations to bridge from profit-driven to commons-based operations through surplus-sharing.",image:$f,ecosystemObjective:"Organizational wrappers made up of legal, operational, and governance systems that enable seamless alignment and interaction with the commons, facilitating efficient internal resource exchange while providing accessible pathways for any organization willing to collaborate regeneratively.",chosenComponent:"**PASEOs (Purpose Driven Altruistic Syntropic Ecosystem Organization)**  - Comprehensive templates for organizations to engage with the commons that model key economic value flow patterns between commons and non-commons stakeholders, while preserving organizations' autonomy and unique identity. The framework is designed to result in gradually increased participation and integration into the commons, incentivized through access to collective intelligence, infrastructure and economic advantages rather than philosophical alignment alone."},{icon:"users",title:"Gaia & Open Earth Networks",subtitle:"Onboarding Pathways",description:"Accessible portals for individuals and organizations to enter and evolve within the ecosystem.",image:Hf,ecosystemObjective:"Multiple entry points that enable diverse actors to engage with the commons at their current capacity while providing evolution pathways toward deeper collaboration.",chosenComponent:"Multiple Network Entry Points including **Gaia Network** (network of commons-ready regenerative practitioners), **Open Earth Network** (network of aligned “open” initiatives), and **Partner Networks** (strategic relationships with complementary organizations)."},{icon:"lightbulb",title:"CreActive Design Labs",subtitle:"Collaborative Design",description:"Immersive co-creation environments that activate shared projects and refine coordination mechanisms.",image:Gf,ecosystemObjective:"A collaborative methodology for amalgamating and launching key projects that deliver commons infrastructure to targeted areas of strategic priority.",chosenComponent:"**CreActive Design Lab** - Proven methodology for collaborative design and project activation, adapted for commons contexts from decades of DesignShop® experience."},{icon:"project-diagram",title:"GaiaOS & HIVE",subtitle:"Coordination Technology",description:"The digital nervous system connecting all components through mapping, resource tracking, and AI-assisted collaboration.",image:Qf,ecosystemObjective:"A solution to harness agentic AI to help manage planetary commons governance, creating a global operating system for commons coordination and stewardship.",chosenComponent:`**GaiaOS** - An AI-inclusive digital infrastructure that enables all participants to create more effectively, share creations across the commons, and cohere around planetary well-being.

The first purpose-built application within GaiaOS is **HIVE**, a knowledge-sharing platform designed to overcome siloed information by creating a dynamic, AI-powered collective brain for regenerative actors, enabling participants to capture, discover, and evolve shared wisdom at scale.`}];return a.jsxs("section",{id:"components",className:"components-section",children:[l!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:()=>s(null),children:a.jsxs("div",{className:"component-modal",onClick:u=>u.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:()=>s(null),"aria-label":"Close details",children:"×"}),a.jsxs("div",{className:"component-modal-header",children:[a.jsx("div",{className:"component-modal-icon",children:a.jsx("img",{src:c[l].image,alt:c[l].title})}),a.jsxs("div",{className:"component-modal-text",children:[a.jsx("h3",{children:c[l].title}),a.jsx("p",{className:"component-modal-subtitle",children:c[l].subtitle})]})]}),a.jsxs("div",{className:"component-modal-body",children:[a.jsxs("div",{className:"component-modal-box component-modal-box--objective",children:[a.jsx("div",{className:"component-modal-box-title",children:"Ecosystem Objective"}),a.jsx("p",{children:$l(c[l].ecosystemObjective||c[l].description)})]}),a.jsxs("div",{className:"component-modal-box component-modal-box--chosen",children:[a.jsx("div",{className:"component-modal-box-title",children:"Chosen Component"}),a.jsx("p",{children:$l(c[l].chosenComponent||c[l].title)})]})]})]})}),a.jsxs("div",{className:"components-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-sitemap"}),"The Architecture"]}),a.jsx("h2",{children:"Eight Infrastructural Components"}),a.jsxs("div",{className:"components-header-row",children:[a.jsx("p",{className:"section-subtitle",children:"Together, these elements function as a self-reinforcing loop that harnesses contribution for collective wellbeing"}),a.jsx("div",{className:"components-visibility-toggle",children:t==="dark"&&a.jsxs("button",{type:"button",className:`vis-toggle ${n?"is-on":""}`,onClick:r,children:[a.jsx("span",{className:"vis-toggle-label",children:"Increased Visibility"}),a.jsx("span",{className:"vis-toggle-switch",children:a.jsx("span",{className:"vis-toggle-thumb"})})]})})]})]}),a.jsx("div",{className:"ecosystem-wheel",children:a.jsx("img",{src:Mf,alt:"The Gaia Ecosystem",className:`wheel-image ${n?"wheel-image--hv":""}`})}),a.jsx("div",{className:"components-grid",children:c.map((u,h)=>a.jsxs("div",{className:`component-card ${o===h?"active":""}`,onClick:()=>{i(h),s(h)},children:[a.jsx("div",{className:"component-icon",children:a.jsx("img",{src:u.image,alt:u.title})}),a.jsx("div",{className:"component-number",children:h+1}),a.jsx("p",{className:"component-subtitle",children:u.subtitle}),a.jsx("p",{className:"component-description",children:u.description}),a.jsx("div",{className:"component-card-readmore",children:a.jsx("span",{children:"View More"})})]},h))}),a.jsxs("div",{className:"components-cta",children:[a.jsxs("h2",{children:["Are you a commons infrastructure provider?",a.jsx("br",{}),"Reach out to become a contributor."]}),a.jsxs("div",{className:"components-cta-buttons",children:[a.jsx("button",{className:"btn-ghost-small",onClick:e,children:a.jsx("strong",{children:"See the Deck"})}),a.jsx("button",{className:"btn-primary-small",children:"Apply"})]})]})]})]})},mp=()=>a.jsx("section",{id:"historic-moment",className:"convergence-section",children:a.jsxs("div",{className:"convergence-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"Historic Moment"}),a.jsx("h2",{children:"A Planetary Convergence"}),a.jsx("p",{className:"lead-text",children:"For the first time in history, all necessary conditions for planetary coordination are in place"})]}),a.jsxs("div",{className:"convergence-grid",children:[a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-microchip"}),a.jsx("h3",{children:"Technological"}),a.jsx("p",{children:"Distributed ledgers, AI, and digital collaboration tools enable decentralized intelligence"})]}),a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-balance-scale"}),a.jsx("h3",{children:"Legal"}),a.jsx("p",{children:"New models like cooperatives, innovative Trusts and DAOs allow shared ownership and stewardship"})]}),a.jsxs("div",{className:"convergence-card",children:[a.jsx("i",{className:"fas fa-people-group"}),a.jsx("h3",{children:"Cultural"}),a.jsx("p",{children:"A growing regenerative ethos, evolving consciousness and systemic thinking create desire and readiness for collective unity"})]})]}),a.jsx("div",{className:"convergence-cta",children:a.jsx("p",{className:"convergence-statement",children:"This convergence opens a window of possibility to design the global architecture of a regenerative civilization"})})]})}),hp=()=>{const[e,t]=Y.useState(0);Y.useEffect(()=>{const r=()=>{const o=document.querySelectorAll(".roadmap-phase");if(!o.length)return;const i=window.innerHeight/2;let l=0,s=1/0;o.forEach((c,u)=>{const h=c.getBoundingClientRect(),g=h.top+h.height/2,m=Math.abs(g-i);m<s&&(s=m,l=u)}),t(l)};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>window.removeEventListener("scroll",r)},[]);const n=[{phase:"Phase 1",title:"Foundational Infrastructure",timeline:"12 Months",budget:"€1,000,000",description:"Establish the core infrastructure that enables the commons-based economy to function",deliverables:["First stage activation of the Gaia Ecosystem","Launch of first Commons Trust and Foundation Stewardship","Activation of Gaia Commons Governance","Development of OPAL and PASEO frameworks","First CreActive Design Lab convened","GaiaOS technology multi-stakeholder coherent development"],kpis:"≥10 organizational partners, ≥1 bioregional pilot, ≥50 contributors engaged"},{phase:"Phase 2",title:"Ecosystem Activation",timeline:"Years 2-3",budget:"TBD",description:"Pilot the infrastructure, refine through real-world learning, and initiate Seed Commons Projects",deliverables:["Launch pilot projects across key domains","Implement capacity-building programs","Establish adaptive feedback loops","Expand to multiple bioregions","Develop regenerative finance mechanisms"],kpis:"Tested, refined, and interconnected infrastructure supporting cross-sector collaboration"},{phase:"Phase 3",title:"Ecosystem Maturation",timeline:"Year 4+",budget:"Self-Sustaining",description:"Achieve distributed governance, regenerative financial systems, and global self-sufficiency",deliverables:["Adaptive governance & real-time learning","Mutual credit & asset-backed currencies","Internal circular economies","Autonomous funding loops","Global federation of commons"],kpis:"A self-evolving planetary economy—decentralized, intelligent, and regenerative by design"}];return a.jsx("section",{id:"roadmap",className:"roadmap-section",children:a.jsxs("div",{className:"roadmap-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"Implementation"}),a.jsx("h2",{children:"The Path Forward"}),a.jsx("p",{className:"section-subtitle",children:"A phased approach to building planetary-scale regenerative infrastructure"})]}),a.jsx("div",{className:"roadmap-tabs",children:n.map((r,o)=>a.jsxs("button",{className:`roadmap-tab ${o===e?"active":""}`,onClick:()=>{t(o);const i=document.getElementById(`phase-${o}`);i&&i.scrollIntoView({behavior:"smooth",block:"center"})},children:[a.jsx("span",{className:"roadmap-tab-phase",children:r.phase}),a.jsx("span",{className:"roadmap-tab-title",children:r.title})]},r.phase))}),a.jsx("div",{className:"roadmap-timeline",children:n.map((r,o)=>a.jsxs("div",{id:`phase-${o}`,className:`roadmap-phase ${o===e?"active":"inactive"}`,onClick:()=>t(o),children:[a.jsxs("div",{className:"phase-marker",children:[a.jsx("div",{className:"phase-number",children:o+1}),a.jsx("div",{className:"phase-line"})]}),a.jsxs("div",{className:"phase-content",children:[a.jsxs("div",{className:"phase-header",children:[a.jsx("h3",{children:r.title}),a.jsxs("div",{className:"phase-meta",children:[a.jsxs("span",{className:"phase-timeline",children:[a.jsx("i",{className:"fas fa-clock"})," ",r.timeline]}),a.jsxs("span",{className:"phase-budget",children:[a.jsx("i",{className:"fas fa-coins"})," ",r.budget]})]})]}),a.jsx("p",{className:"phase-description",children:r.description}),a.jsxs("div",{className:"phase-deliverables",children:[a.jsx("h4",{children:"Key Deliverables:"}),a.jsx("ul",{children:r.deliverables.map((i,l)=>a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-check"}),i]},l))})]}),a.jsxs("div",{className:"phase-kpis",children:[a.jsx("strong",{children:"Success Indicators:"})," ",r.kpis]})]})]},o))}),a.jsx("div",{className:"roadmap-plan",children:a.jsxs("div",{className:"roadmap-plan-card",children:[a.jsxs("div",{className:"roadmap-plan-doc",children:[a.jsx("div",{className:"roadmap-plan-doc-icon",children:a.jsx("i",{className:"fas fa-file-alt"})}),a.jsxs("div",{children:[a.jsx("h3",{children:"Read the full plan"}),a.jsx("p",{children:"Dive into the detailed implementation plan outlining phases, governance structures, and next-step priorities for the Gaia Ecosystem."})]})]}),a.jsxs("a",{href:"https://globalrenaissance.notion.site/the-gaia-ecosystem?source=copy_link",className:"roadmap-plan-button",target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-external-link-alt"}),a.jsx("span",{children:"Open the plan"})]})]})})]})})},Hl=({version:e="v1"})=>{const t=[{name:"Gaia Ecosystem",role:"Planetary Commons Architecture",bio:"The Gaia Ecosystem is the planetary-scale commons architecture that provides the connective tissue for a regenerative civilization. It weaves people, projects, and places into a coherent whole by offering shared legal, financial, cultural, and technological infrastructure that honors the uniqueness of each context. Rather than a single organization, it is a living field of agreements, protocols, and relational patterns that enable coordination without centralization. Through trusts, networks, and digital tools, the Gaia Ecosystem supports communities in governing shared resources, circulating value, and learning together over time. This profile card can eventually hold a deeper narrative about the vision, origin story, design principles, and practical pathways for participation within the ecosystem as it continues to evolve."},{name:"Oliver Clarity",role:"Ecosystem Steward",bio:`Oliver Clarity is a visionary systems architect, hands-on builder, speaker, and writer dedicated to shaping a thriving future for all life on Earth. Combining expertise in psychology, consciousness research, and systems thinking, Oliver develops pragmatic solutions for lasting change. His approach bridges individual transformation with large-scale societal shifts, focusing on creating a New Paradigm of Society.

At the heart of Oliver's work is the concept of an Open Earth—a world where openness, collaboration, and sustainability form the foundation of a thriving global community. He specializes in designing incentive-based, peer-to-peer systems that self-perpetuate and scale, leading to rapid societal transformation. This vision has culminated in the creation of the Open Systems Foundation (OSF), a philanthropic organization enabling the creation of the Open Earth.

To realize this vision, the OSF has focused its efforts on building the core nucleus of the broader Open Earth ecosystem: the Gaia Ecosystem. Through collaboration with visionaries across the regenerative space, the foundation is incubating the foundational components that create the global Gaia commons and its accompanying infrastructure—the place where the full manifestation of commons-based flourishing principles take place. By focusing here, the foundation sees the greatest potential to build from the core and extend invitations outward, gradually incentivizing participation from players more broadly who believe in the "Open Philosophy" within the global open source, open science, and open data movements. As a Whole Systems architect, Oliver stands at the forefront of this civilizational transformation, designing the foundational architecture through which humanity can transition from competitive scarcity to collaborative abundance—one integrated system at a time.`,photo:Yf,websites:["https://www.oliverclarity.co"]},{name:"Steward 2",role:"Legal & Trust Steward",bio:"This placeholder profile is for a steward focusing on the legal and trust dimensions of the commons. A fuller version of this card could explain how they help design multi-jurisdictional trust infrastructures, cooperative structures, and agreements that keep assets in service to the whole. It could describe how they translate regenerative values into enforceable legal terms, collaborate with lawyers and communities, and ensure that the legal grammar of the ecosystem supports equity and long-term resilience. The text can also highlight how their work interfaces with philanthropy, public benefit entities, and emerging digital commons tools.",photo:Kf},{name:"Steward 3",role:"Networks Steward",bio:"This placeholder profile stands in for a networks steward who tends the relational field between communities, initiatives, and organizations. In a future version, this card could share how they support onboarding into the Gaia and Open Earth Networks, curate patterns of mutual support, and help people find the right level of participation. It can describe their experience with facilitation, community weaving, and conflict transformation, as well as the methodologies they draw on to keep diverse actors in creative dialogue. The narrative can show how networks stewardship is less about control and more about cultivating conditions for trust, reciprocity, and shared learning.",photo:qf},{name:"Kara Stonehouse",role:"Meshwork Steward",bio:`Kara is an Evolutionary Leader, meshworker with The Hague Center for Global Governance, Innovation and Emergence and founder of Aha! Graphic Facilitation. She has extensive experience facilitating for high level government and non-profit clients around the world in strategy, sustainable design and systems change.

She was then the initiator, fundraiser and lead facilitator of the Ottawa Energy Collective Impact project from 2016-2019 combining design thinking and sustainability leadership expertise to bring municipal, NGO, Academic and business players together for meaningful collaboration on carbon dioxide reductions.

She is a core contributor to World Unity Week and Peace Weekend massive global convergences. Inspired and awakened by her global journey studying eco-villages, her mission is to co-create new cultural norms and global governance systems in line with life. Kara is often described as ‘magical,’ bringing the power of playfulness and deep spiritual connection for the greatest good of all.`,photo:Xf,websites:["www.thehaguecenter.org","www.ahagraphic.com"]},{name:"Steward 5",role:"Design & Narrative Steward",bio:"This placeholder profile represents a design and narrative steward who cares for how the Gaia Ecosystem is seen, felt, and understood. A fully developed bio could describe how they weave visual identity, language, and storytelling into a coherent field that feels both visionary and grounded. It can highlight their work on presentations, websites, gatherings, and learning materials that invite people into the architecture in accessible ways. The text may also share how they collaborate with artists, writers, and facilitators to reflect many cultural perspectives, and how narrative strategy helps align the inner felt sense of the ecosystem with its outer expression in the world."},{name:"Steward 6",role:"Finance & Regenerative Capital",bio:"This placeholder profile is for a steward focused on regenerative capital flows. A longer description here might explore how they bridge philanthropy, grants, catalytic capital, and revenue-sharing models that honor both risk and reciprocity. It can outline their experience working with foundations, impact investors, and community-led funds, and the tools they use to design transparent, trustworthy agreements. The text can also describe how they help translate abstract financial concepts into simple patterns that communities can work with, ensuring that capital supports long-term commons health rather than short-term extraction, and how they collaborate with the legal and governance stewards.",photo:Zf},{name:"Steward 7",role:"Bioregional Commons",bio:"This placeholder profile stands in for a steward of bioregional commons work. In a future version, this card could detail how they support place-based hubs, land-based projects, and regional alliances that are experimenting with new governance and ownership patterns. It can describe their background in community organizing, ecological restoration, and local economic development, and how they translate the Gaia Ecosystem architecture into concrete practices in a specific watershed or territory. The narrative might also explain how they connect bioregional pilots back into global learning loops, so that insights and challenges from the ground directly inform the evolution of the whole system.",photo:Jf,websites:["https://chadlefevre.com/"]},{name:"Steward 8",role:"Organizational Transition",bio:"This placeholder profile is for a steward supporting organizations that wish to transition toward commons-based and regenerative operations. A fuller bio can share how they guide leadership teams through multi-year transition journeys, designing new ownership models, governance structures, and revenue-sharing mechanisms. It can describe their experience with cooperatives, steward-owned companies, and hybrid structures, as well as the tools they use for diagnostics, change management, and capacity building. The text can also highlight how they work closely with legal, finance, and cultural stewards to ensure that organizational shifts are embodied, ethical, and deeply relational, rather than merely technical restructuring."},{name:"Steward 9",role:"Cultural Weaving",bio:"This placeholder profile represents a cultural weaver who tends the subtle, often invisible dimensions of the ecosystem. A longer narrative here could express how they host gatherings, rituals, and reflective spaces that help participants stay connected to purpose, humility, and mutual care. It can highlight their training in group process, trauma-informed facilitation, and cross-cultural dialogue, and the ways they invite more-than-human perspectives into decision-making. The description might also explain how cultural weaving supports conflict navigation, collective grieving and celebration, and the ongoing renewal of shared values so that the architecture does not become rigid or purely technical over time."},{name:"Steward 10",role:"Learning & Research",bio:"This placeholder profile is for a steward of learning and research within the Gaia Ecosystem. A full description could outline how they design feedback loops, evaluation frameworks, and learning journeys that help the ecosystem sense itself and adapt over time. It can speak to their experience with action research, systems mapping, and participatory evaluation, and how they collaborate with universities, think tanks, and grassroots researchers. The text can also show how learning is treated as a shared commons, with principles and patterns being documented, synthesized, and made available openly so that others can replicate, adapt, and extend the work in their own contexts."},{name:"Steward 11",role:"Operations & Delivery",bio:"This placeholder profile stands in for an operations steward who keeps the day-to-day functioning of the ecosystem flowing smoothly. A future version might describe how they coordinate teams, manage timelines, and ensure that complex multi-stakeholder projects land in reality without burning people out. It can mention their background in project management, facilitation, and organizational development, and how they design processes that are both robust and flexible. The bio can also highlight how operations stewardship is deeply relational, involving constant listening, negotiation, and gentle course-correction as needs shift and new opportunities arise."},{name:"Steward 12",role:"Advisory & Elders",bio:"This placeholder profile is for advisors and elders who bring long-term perspective and deep wisdom to the Gaia Ecosystem. A more complete narrative could share how they help hold ethical questions, sense into generational dynamics, and remind the ecosystem of its original intention when pressures arise. It can describe the diverse backgrounds they come from, such as indigenous leadership, spiritual traditions, public service, or decades of work in social movements. The text may also explore how advisory roles are designed not as distant oversight, but as relational, reciprocal engagements where elders are also learning from emerging practice at the edges of the ecosystem."},{name:"Franz Josef Allmayer",role:"Steward",bio:"This placeholder profile is for an emerging steward focused on weaving together new forms of collaboration across regions and disciplines. In a future version, this card can describe how they prototype new ways of organizing work, sharing resources, and making decisions that reflect the values of the Gaia Ecosystem in practice.",photo:ep},{name:"Steward 14",role:"Steward",bio:"This placeholder profile is for a steward supporting learning journeys and capacity building within the ecosystem. A fuller narrative can share how they design programs, trainings, and reflective spaces that help people embody commons-based ways of working over time."},{name:"Steward 15",role:"Steward",bio:"This placeholder profile is for a steward tending relationships with funders, partners, and aligned initiatives. In a future version, this card can describe how they bridge regenerative finance, philanthropy, and project needs in a coherent, transparent way."},{name:"Steward 16",role:"Steward",bio:"This placeholder profile is for a steward working on digital infrastructure and information flows. A complete profile can share how they support the evolution of tools, platforms, and protocols that make it easier for many actors to coordinate in a commons-aligned way."},{name:"Steward 17",role:"Steward",bio:"This placeholder profile is for a steward focusing on deep cultural interventions—story, ritual, and meaning-making that keep the ecosystem aligned with its core purpose. Future text can describe how they host spaces that help the work stay grounded, humble, and connected to life."},{name:"Steward 18",role:"Steward",bio:"This placeholder profile is for a steward who connects the Gaia Ecosystem to broader movements for planetary transformation. A fuller narrative can outline how they build bridges with networks, institutions, and communities who are experimenting with new ways of living, working, and governing together."}],[n,r]=Y.useState(null),o=Array.from({length:12}),i=e==="v2",l=Array.from({length:12},(u,h)=>7+h),s=u=>r(u),c=()=>r(null);return a.jsxs("section",{id:"team",className:"team-section",children:[n!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:c,children:a.jsxs("div",{className:"team-profile-modal",onClick:u=>u.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:c,"aria-label":"Close profile",children:"×"}),a.jsxs("div",{className:"team-profile-layout",children:[a.jsxs("div",{className:"team-profile-photo",children:[a.jsx("div",{className:"team-profile-avatar",children:t[n].photo||n===0?a.jsx("img",{src:t[n].photo||(n===0?Go:""),alt:t[n].name,className:"team-profile-avatar-img"}):a.jsx("i",{className:"fas fa-user-circle"})}),a.jsxs("div",{className:"team-profile-links",children:[a.jsxs("button",{type:"button",className:"team-profile-link-item",children:[a.jsx("i",{className:"fab fa-linkedin-in"}),a.jsx("span",{children:"LinkedIn"})]}),a.jsxs("button",{type:"button",className:"team-profile-link-item",children:[a.jsx("img",{src:tp,alt:"Planetir",className:"team-profile-plantir-icon"}),a.jsx("span",{children:"Planetir"})]})]}),a.jsxs("div",{className:"team-profile-websites",children:[a.jsx("div",{className:"team-profile-websites-label",children:"Websites"}),Array.isArray(t[n].websites)&&t[n].websites.length>0&&a.jsx("ul",{className:"team-profile-websites-list",children:t[n].websites.map(u=>a.jsx("li",{children:a.jsxs("a",{href:u.startsWith("http")?u:`https://${u}`,target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-globe website-link-icon","aria-hidden":"true"}),a.jsx("span",{children:u})]})},u))})]})]}),a.jsxs("div",{className:"team-profile-content",children:[a.jsx("h3",{className:"team-profile-name",children:t[n].name}),a.jsx("p",{className:"team-profile-role",children:t[n].role}),String(t[n].bio||"").split(`

`).map((u,h)=>a.jsx("p",{className:"team-profile-bio",children:u},h))]})]})]})}),a.jsxs("div",{className:"team-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-people-group"}),"Team & Advisors"]}),a.jsxs("div",{className:"team-header-row",children:[a.jsx("h2",{children:"The Ecosystem Stewards"}),a.jsx("div",{className:"team-version-pill",children:e})]}),a.jsx("p",{className:"section-subtitle",children:"A growing constellation of stewards, practitioners, and advisors holding the architecture of the Gaia Ecosystem."})]}),a.jsx("div",{className:"team-fruit-wrapper",children:i?a.jsxs("div",{className:"team-fruit team-fruit-v2",children:[a.jsxs("div",{className:"team-nucleus",children:[a.jsx("div",{className:"team-node center earth",onClick:()=>s(0),children:a.jsx("img",{src:Go,alt:"Gaia Ecosystem",className:"team-node-photo"})}),o.slice(0,6).map((u,h)=>{const g=h+1,m=t[g],x=m==null?void 0:m.photo;return a.jsx("div",{className:`team-node node-${h+1}`,onClick:()=>s(g),children:x?a.jsx("img",{src:m.photo,alt:m.name,className:"team-node-photo"}):a.jsx("i",{className:"fas fa-user-circle"})},h)})]}),a.jsx("div",{className:`team-orbit-ring ${n!==null?"is-paused":""}`,children:l.map((u,h)=>{const g=t[u],m=g==null?void 0:g.photo;return a.jsx("div",{className:`team-orbit-node orbit-pos-${h}`,onClick:()=>s(u),children:a.jsx("div",{className:"team-orbit-node-inner",children:m?a.jsx("img",{src:g.photo,alt:g.name,className:"team-orbit-node-img"}):a.jsx("i",{className:"fas fa-user-circle"})})},u)})})]}):a.jsxs("div",{className:"team-fruit",children:[a.jsx("div",{className:"team-node center earth",onClick:()=>s(0),children:a.jsx("img",{src:Go,alt:"Gaia Ecosystem",className:"team-node-photo"})}),o.map((u,h)=>{const g=h+1===12?13:h+1,m=t[g],x=m==null?void 0:m.photo;return a.jsx("div",{className:`team-node node-${h+1}`,onClick:()=>s(g),children:x?a.jsx("img",{src:m.photo,alt:m.name,className:"team-node-photo"}):a.jsx("i",{className:"fas fa-user-circle"})},h)})]})})]})]})},gp=()=>{const e=[{name:"Placeholder Partner 1",role:"Commons Infrastructure Partner",tagline:"Contributing key commons infrastructure and stewardship capacity.",image:np,description:"This placeholder partner profile represents an organization that brings deep experience in building and maintaining shared infrastructure for the commons. In the future, this space can describe how they contribute legal, financial, technical, or cultural capabilities that become part of the Gaia Ecosystem's backbone. It can highlight key projects they are involved in, the communities they serve, and how their governance model aligns with regenerative principles. The description might also outline how they collaborate with other partners and stewards, what kinds of experiments they are running, and how they are helping to translate the planetary architecture into grounded, practical implementations across multiple regions.",websites:["https://www.integrity.earth"]},{name:"TMIC",role:"Bioregional Hub",tagline:"Anchoring bioregional commons work and experimentation.",image:rp,description:"This placeholder represents a bioregional hub organization that is experimenting with new models of governance, ownership, and stewardship at the scale of a specific landscape or watershed. A fuller narrative here could describe their work with local communities, indigenous leadership, and municipal actors to articulate shared visions for land, water, and cultural regeneration. It can outline current pilot projects, such as community land trusts, cooperative enterprises, or new funding mechanisms, and show how insights from the region feed back into the Gaia Ecosystem learning loops. The profile can also highlight how the hub uses GaiaOS, HIVE, and the wider architecture as scaffolding rather than a rigid blueprint.",websites:["https://tmicglobal.com"]},{name:"",role:"Technology Collective",tagline:"Advancing planetary governance through systemic design, deep collaboration and shared purpose.",image:op,description:`The Hague Center for Global Governance, Innovation and Emergence is an international collective dedicated to cultivating the conditions for a conscious, interconnected humanity. Working at the intersection of systems thinking, social innovation and inner development, the Center supports organisations, communities and leaders in co-creating solutions that serve the wellbeing of the whole.

Their approach blends rigorous systemic methodologies with relational and intuitive intelligence, recognising that effective governance emerges from coherence across physical, social, energetic and cultural layers. Through practices such as meshworking, field inquiry, meta-weaving and meaning-making, they help diverse stakeholders align around shared purpose, unlock collective insight and design pathways toward regenerative futures.

The Hague Center partners with initiatives across the world—spanning education, community development, planetary governance, gender equity, social entrepreneurship and global convening spaces. Their projects consistently aim to amplify collaboration, build capacity for complexity, and support the emergence of solutions that are both deeply human and systemically sound.

Rooted in The Hague yet globally active, the Center operates as a learning ecosystem committed to evolving the architectures of governance needed for our time. Their work invites groups into higher coherence, deeper alignment and the possibility of creating futures that honour life in all its dimensions.`,websites:["https://www.thehaguecenter.org"]},{name:"Planetir",role:"Learning & Research Institute",tagline:"Holding long-term inquiry and ecosystem sense-making.",image:ip,description:"This placeholder profile is for a learning and research partner that helps the Gaia Ecosystem stay reflective and adaptive over time. A deeper description might explain how they host transdisciplinary research programs, action-learning cohorts, and sense-making circles with practitioners around the world. It can outline the methods they use—such as systems mapping, action research, and developmental evaluation—and how they publish insights as open knowledge commons. The text can also cover how they work alongside bioregional hubs, funders, and communities to track emergent patterns, document what is working, and translate those learnings into practical guidance for others who wish to replicate or adapt the architecture.",websites:["https://www.planetir.org"]},{name:"Placeholder Partner 5",role:"Regenerative Finance Network",tagline:"Co-creating capital flows for long-term commons health.",description:"This card represents a network of regenerative finance organizations that are prototyping new ways of moving resources into commons infrastructure and place-based projects. A full profile could detail how this partner experiments with blended finance vehicles, revenue-sharing models, and community-led funds that prioritize long-term resilience over short-term extraction. It may outline the principles that guide their investment decisions, the kinds of projects they support, and how they design transparent, trustworthy agreements. The description can also show how they collaborate with legal, governance, and cultural stewards to ensure that capital flows remain accountable to the communities and ecosystems they are meant to serve."},{name:"Placeholder Partner 6",role:"Cultural & Narrative Partner",tagline:"Tending story, identity, and cultural translation.",description:"This placeholder stands in for a cultural and narrative partner who helps the Gaia Ecosystem speak to many different worlds in a way that is resonant, respectful, and clear. A future version of this profile could describe how they work with artists, storytellers, and media makers to craft narratives that honor both ancestral wisdom and emergent innovation. It might outline their role in curating public communications, visual identity, and educational content, as well as how they support translation across languages, cultures, and domains of practice. The narrative can also highlight how, by tending story at multiple scales, they help people recognize themselves inside the architecture and see the roles they might play."},{name:"Placeholder Partner 7",role:"Organizational Transition Partner",tagline:"Supporting organizations to bridge into commons-based work.",description:"This partner profile is a placeholder for an organization that guides others through the journey of transitioning into more regenerative, commons-oriented ways of working. A fuller text here could explain the frameworks, tools, and accompaniment processes they use to support leadership teams, staff, and stakeholders. It can talk about experiments with new ownership models, distributed governance, and surplus allocation, as well as the challenges and breakthroughs encountered along the way. The description may also share how they feed real-world learnings back into the Gaia Ecosystem so that future transitions can happen with more ease, clarity, and support from a growing field of practice."},{name:"Placeholder Partner 8",role:"Movement & Network Alliance",tagline:"Weaving alliances between movements, networks, and initiatives.",description:"This placeholder partner stands for alliances that link together multiple movements, networks, and initiatives working toward regenerative futures. A more detailed narrative might cover how they convene cross-movement dialogues, co-create shared campaigns, and host spaces for strategic coordination across sectors and geographies. It can describe the histories, commitments, and organizing traditions they carry, and how these inform their participation in the Gaia Ecosystem. The profile can also point to specific collaborations, such as shared governance experiments or joint funding strategies, through which multiple movements are learning how to act as one ecosystem while honoring the uniqueness of each lineage and community involved."}],[t,n]=Y.useState(null),r=i=>n(i),o=()=>n(null);return a.jsxs("section",{className:"partner-section",children:[t!==null&&a.jsx("div",{className:"component-modal-backdrop",onClick:o,children:a.jsxs("div",{className:"partner-modal",onClick:i=>i.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:o,"aria-label":"Close partner profile",children:"×"}),a.jsxs("div",{className:"partner-modal-header",children:[a.jsx("div",{className:"partner-modal-logo",children:e[t].image?a.jsx("img",{src:e[t].image,alt:e[t].name,className:"partner-modal-image"}):a.jsx("div",{className:"partner-logo-placeholder",children:e[t].name.charAt(0)})}),a.jsxs("div",{className:"partner-modal-links",children:[a.jsx("div",{className:"partner-modal-links-label",children:"Website"}),Array.isArray(e[t].websites)&&e[t].websites.length>0?a.jsx("ul",{className:"partner-modal-links-list",children:e[t].websites.map(i=>a.jsx("li",{children:a.jsxs("a",{href:i.startsWith("http")?i:`https://${i}`,target:"_blank",rel:"noreferrer",children:[a.jsx("i",{className:"fas fa-globe website-link-icon","aria-hidden":"true"}),a.jsx("span",{children:i})]})},i))}):a.jsx("div",{className:"partner-modal-links-placeholder",children:"Website coming soon"})]})]}),a.jsx("div",{className:"partner-modal-body",children:String(e[t].description||"").split(`

`).map((i,l)=>a.jsx("p",{children:i},l))})]})}),a.jsxs("div",{className:"partner-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-handshake"}),"Partner Organizations"]}),a.jsx("h2",{children:"Organizational Allies"}),a.jsx("p",{className:"section-subtitle",children:"Mission-aligned partners across complementary domains, united in supporting the emergence of regenerative systems and planetary wellbeing."})]}),a.jsx("div",{className:"partner-grid",children:e.map((i,l)=>a.jsxs("button",{className:"partner-card",type:"button",onClick:()=>r(l),children:[a.jsx("div",{className:"partner-card-logo-wrap",children:i.image?a.jsx("img",{src:i.image,alt:i.name||"Partner logo",className:"partner-card-logo-img"}):a.jsx("div",{className:"partner-card-logo-initial",children:a.jsx("span",{children:(i.name||"").charAt(0)})})}),a.jsx("div",{className:"partner-card-readmore",children:a.jsx("span",{children:"View More"})})]},i.name||l))})]})]})},Gl=({id:e="networks"})=>a.jsx("section",{id:e,className:"networks-section",children:a.jsxs("div",{className:"networks-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-door-open"}),"Entry Points"]}),a.jsx("h2",{children:"Multiple Pathways to Participate"})]}),a.jsxs("div",{className:"networks-grid",children:[a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-users"})}),a.jsx("h3",{children:"For Communities & Individuals"}),a.jsx("p",{children:"Join the Gaia Network and Open Earth Network to onboard, learn, and become peers in the commons ecosystem."}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-heart"})," Community engagement"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-graduation-cap"})," Grow your understanding of the commons"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-hands-helping"})," Co-creation opportunities"]})]}),a.jsx("button",{className:"btn-network",children:"Explore Networks"})]}),a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-hand-holding-heart"})}),a.jsx("h3",{children:"For NGOs & Philanthropists"}),a.jsx("p",{children:"We invite you to collaborate in funding a healthy world"}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-donate"})," Donate to the Foundation now"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-hand-holding-heart"})," Collaborate on broader grants and funding"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-seedling"})," Discover Phase 2 revenue-share investment opportunities"]})]}),a.jsx("button",{className:"btn-network",children:"Explore Funding Collaboration"})]}),a.jsxs("div",{className:"network-card",children:[a.jsx("div",{className:"network-icon",children:a.jsx("i",{className:"fas fa-building"})}),a.jsx("h3",{children:"For Organizations"}),a.jsx("p",{children:"Contribute infrastructural building blocks to the ecosystem, or sign up for the pilot commons ecosystem."}),a.jsxs("ul",{className:"network-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-project-diagram"})," Contribute technology infrastructure pieces to GaiaOS"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-leaf"})," Join the waiting list for the pilot commons ecosystem"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fas fa-balance-scale"})," Support us now with your talent, expertise and resources"]})]}),a.jsx("button",{className:"btn-network",children:"Get involved as an Organization"})]})]})]})}),vp=()=>a.jsxs("section",{className:"vision-section",children:[a.jsx("div",{className:"vision-overlay"}),a.jsx("div",{className:"vision-container",children:a.jsxs("div",{className:"vision-content",children:[a.jsx("h2",{children:"The Operating System for a Regenerative Civilization"}),a.jsx("p",{className:"vision-statement",children:"Through this infrastructure, humanity gains the capacity to act as a unified yet diverse organism—learning, adapting, and creating in service of life."}),a.jsxs("div",{className:"vision-quote",children:[a.jsx("div",{className:"vision-quote-avatar",children:a.jsx("div",{className:"vision-quote-avatar-inner",children:a.jsx("img",{src:Af,alt:"Quote author",className:"vision-quote-avatar-img"})})}),a.jsx("p",{className:"vision-quote-text-main",children:'"You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete."'})]})]})})]}),yp=()=>{const[e,t]=Y.useState(0),n=[{question:"If someone contributes something valuable to the commons—an innovation, methodology, or resource—do they lose ownership and control of it?",answer:"No, and this is crucial. The OPAL licensing framework is designed so contributors maintain attribution and stewardship rights, and can still commercialize their innovations outside the commons. Within the commons, others can build on and improve those innovations, with benefits and potential revenues flowing back to all contributors in proportion to participation. Instead of intellectual property being extracted or locked away, it becomes part of a living pool of shared intelligence that generates more value collectively than it could in isolation."},{question:"What happens when someone joins who claims alignment but acts extractively or doesn’t share regenerative values?",answer:"The architecture is being designed with multiple layers of protection. The PASEO organizational framework creates graduated participation pathways—actors demonstrate alignment over time before gaining deeper access. Governance processes give communities tools for accountability and, when necessary, exclusion. Economically, the system is structured so that genuine collaboration is more beneficial than gaming it, while Commons Trust structures provide legal protection for shared assets. This is not a solved problem, but the ecosystem is intentionally designing for it rather than assuming good faith alone."},{question:"How does the Gaia Ecosystem relate to existing economic systems—is it trying to replace capitalism or build alongside it?",answer:"The Gaia Ecosystem is building a bridge rather than declaring a war. Commons infrastructure is designed to operate alongside existing markets while progressively making extractive models less attractive by offering better coordination and shared value creation. Through PASEO, organizations can participate in both commons-based and conventional activities, with value flows between them made explicit. Products, services, and patterns developed in the commons can generate revenue in traditional markets, with agreed portions returning to support the commons itself. Over time, the practical advantages of this model—not ideology—are what we expect will drive wider adoption."},{question:"How does this become financially self-sufficient rather than dependent on continuous philanthropic support?",answer:"Phase 1 requires philanthropic and catalytic funding because it builds foundational commons infrastructure that markets will not finance on their own. From the outset, however, the architecture bakes in future revenue streams: commons-developed products and services, licensing and revenue-sharing arrangements, regenerative finance instruments, and internal economic activity using commons-aligned currencies and agreements. By Phase 3, the aim is for the ecosystem to generate stable income and direct surplus toward ecological regeneration and community wellbeing, rather than toward private extraction."}],r=o=>{t(i=>i===o?null:o)};return a.jsx("section",{className:"qa-section",children:a.jsxs("div",{className:"qa-container",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-label",children:[a.jsx("i",{className:"fas fa-brain"}),"Q&A"]}),a.jsx("h2",{children:"Questions & Answers for more complex matters"}),a.jsx("p",{className:"section-subtitle",children:"Four questions about participation, protection, economics, and sustainability—answered from a whole-systems perspective."})]}),a.jsx("div",{className:"qa-list",children:n.map((o,i)=>{const l=e===i;return a.jsxs("div",{className:`qa-item ${l?"open":""}`,children:[a.jsxs("button",{type:"button",className:"qa-item-header",onClick:()=>r(i),"aria-expanded":l,children:[a.jsx("span",{className:"qa-question",children:o.question}),a.jsx("span",{className:`qa-toggle-icon ${l?"is-open":""}`,children:a.jsx("i",{className:"fas fa-chevron-down"})})]}),l&&a.jsx("div",{className:"qa-answer",children:a.jsx("p",{children:o.answer})})]},o.question)})})]})})},xp=()=>a.jsx("section",{id:"join-us",className:"cta-section",children:a.jsx("div",{className:"cta-container",children:a.jsxs("div",{className:"cta-content",children:[a.jsx("h2",{children:"Join the Planetary Mission"}),a.jsx("p",{children:"Be part of designing the infrastructure for a thriving, regenerative future. Whether you're an individual, organization, or investor, there's a place for you in the Gaia Ecosystem."}),a.jsxs("div",{className:"cta-buttons",children:[a.jsxs("button",{className:"btn-primary-large",children:[a.jsx("i",{className:"fas fa-rocket"}),"Get Started Today"]}),a.jsxs("button",{className:"btn-secondary-large",children:[a.jsx("i",{className:"fas fa-calendar"}),"Schedule a Call"]})]}),a.jsx("div",{className:"cta-contact",children:a.jsxs("p",{children:["Questions? Reach out to ",a.jsx("a",{href:"mailto:info@opensystems.foundation",children:"info@opensystems.foundation"})]})})]})})}),wp=()=>a.jsx("footer",{className:"footer",children:a.jsxs("div",{className:"footer-container",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"footer-column",children:[a.jsxs("div",{className:"footer-logo",children:[a.jsxs("svg",{width:"50",height:"50",viewBox:"0 0 100 100",children:[a.jsx("circle",{cx:"50",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"3",opacity:"0.8"}),a.jsx("circle",{cx:"50",cy:"36",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"64",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"36",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"64",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"50",r:"10",fill:"currentColor"})]}),a.jsx("span",{children:"Gaia Ecosystem"})]}),a.jsx("p",{children:"Building the commons infrastructure for a regenerative civilization"})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Ecosystem"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#components",children:"Components"})}),a.jsx("li",{children:a.jsx("a",{href:"#roadmap",children:"Roadmap"})}),a.jsx("li",{children:a.jsx("a",{href:"#networks",children:"Networks"})})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Resources"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:"Documentation"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Research"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Blog"})})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("h4",{children:"Connect"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:"Contact"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Community"})}),a.jsx("li",{children:a.jsx("a",{href:"#",children:"Partners"})})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"footer-whole-system",children:[a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 100 100",children:[a.jsx("circle",{cx:"50",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"3",opacity:"0.8"}),a.jsx("circle",{cx:"50",cy:"36",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"64",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"36",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"64",cy:"50",r:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",opacity:"0.55"}),a.jsx("circle",{cx:"50",cy:"50",r:"10",fill:"currentColor"})]}),a.jsx("span",{children:"The Whole System"})]}),a.jsx("p",{children:"© 2025 Gaia Ecosystem. All rights reserved."}),a.jsx("div",{className:"footer-social",children:["twitter","linkedin-in","github"].map(e=>a.jsx("a",{href:"#",className:"social-link",children:a.jsx("i",{className:`fab fa-${e}`})},e))})]})]})});function kp(){const[e,t]=Y.useState("dark"),[n,r]=Y.useState(!1),[o,i]=Y.useState(!1);Y.useEffect(()=>{const u=e==="dark"?"theme-dark":"theme-light";document.body.classList.remove("theme-dark","theme-light"),document.body.classList.add(u)},[e]),Y.useEffect(()=>{if(n){const u=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=u}}},[n]);const l=()=>{t(u=>u==="dark"?"light":"dark")},s=()=>{if(window.innerWidth<=768){window.open("https://gamma.app/embed/6lri4hq4c44s6jt","_blank");return}r(!0)},c=()=>r(!1);return a.jsxs(a.Fragment,{children:[a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap",rel:"stylesheet"}),a.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),a.jsx("style",{children:`
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
          background: #b84a3a;
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

        .problem-point i {
          font-size: 1.5rem;
          color: #b84a3a;
          margin-top: 0.3rem;
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

        .components-header-row {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 0.4rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .components-header-row .section-subtitle {
          text-align: center;
          margin: 0;
          flex: 0 0 auto;
        }

        .components-visibility-toggle {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 32px; /* fixed height so header + wheel don't move vertically between themes */
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
            color 0.2s ease;
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
          transition: transform 0.2s ease;
        }

        .vis-toggle.is-on .vis-toggle-thumb {
          transform: translateX(12px);
        }

        body.theme-dark .vis-toggle {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.25);
          color: #eaf4ea;
          animation: visFlash 1.15s ease-in-out 0s 4;
        }

        body.theme-dark .vis-toggle-switch {
          background: rgba(255, 255, 255, 0.16);
        }

        /* Dark-mode "Increased Visibility" toggle – brighter when active */
        body.theme-dark .vis-toggle.is-on {
          background: rgba(255, 255, 255, 0.20);
          border-color: rgba(255, 255, 255, 0.75);
          color: #fefcf7;
          animation: none;
        }

        body.theme-dark .vis-toggle.is-on .vis-toggle-switch {
          background: rgba(255, 255, 255, 0.85);
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

        /* Dark mode Paper-Mario style light-beige outline, only when Increased Visibility is enabled. */
        body.theme-dark .wheel-image--hv {
          filter:
            /* base edge */
            drop-shadow(0 0 0 rgba(252, 246, 231, 1))
            /* cardinal directions */
            drop-shadow(0 2px 0 rgba(252, 246, 231, 1))
            drop-shadow(0 -2px 0 rgba(252, 246, 231, 1))
            drop-shadow(2px 0 0 rgba(252, 246, 231, 1))
            drop-shadow(-2px 0 0 rgba(252, 246, 231, 1))
            /* diagonals to round the stroke */
            drop-shadow(1.5px 1.5px 0 rgba(252, 246, 231, 1))
            drop-shadow(-1.5px 1.5px 0 rgba(252, 246, 231, 1))
            drop-shadow(1.5px -1.5px 0 rgba(252, 246, 231, 1))
            drop-shadow(-1.5px -1.5px 0 rgba(252, 246, 231, 1))
            /* subtle softening to anti-alias the edge */
            drop-shadow(0 0 2px rgba(252, 246, 231, 0.7));
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
          width: auto;
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

        .team-fruit {
          position: relative;
          width: 540px;
          height: 540px;
        }

        .team-fruit.team-fruit-v2 {
          position: relative;
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

        /* Pause the orbit rotation when hovering anywhere over the ring or its nodes */
        .team-orbit-ring:hover {
          animation-play-state: paused;
        }

        .team-orbit-ring:hover .team-orbit-node-inner {
          animation-play-state: paused;
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
 
        /* Fruit-of-Life style positions (inner ring 6 + outer ring 6) */
        /* Inner ring (radius ~22%) */
        .team-node.node-1 { top: 28%; left: 50%; transform: translate(-50%, -50%); }
        .team-node.node-2 { top: 39%; left: 69%; transform: translate(-50%, -50%); }
        .team-node.node-3 { top: 61%; left: 69%; transform: translate(-50%, -50%); }
        .team-node.node-4 { top: 72%; left: 50%; transform: translate(-50%, -50%); }
        .team-node.node-5 { top: 61%; left: 31%; transform: translate(-50%, -50%); }
        .team-node.node-6 { top: 39%; left: 31%; transform: translate(-50%, -50%); }
 
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
          .team-fruit {
            transform: scale(0.85);
          }
        }

        /* Partner Organizations */
        .partner-section {
          padding: 6rem 2rem;
          background: var(--color-bg-section-alt);
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
          background-image: url('computer:///mnt/user-data/outputs/10.png');
          background-size: cover;
          background-position: center;
          opacity: 0.1;
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
      `}),a.jsxs("div",{className:"app-root",children:[a.jsx("div",{className:`deck-backdrop ${n?"is-open":""}`,onClick:n?c:void 0,children:a.jsxs("div",{className:"deck-modal",onClick:u=>u.stopPropagation(),children:[a.jsx("button",{className:"component-modal-close",onClick:c,"aria-label":"Close deck",children:"×"}),a.jsx("div",{className:"deck-modal-frame",children:a.jsx("iframe",{src:"https://gamma.app/embed/6lri4hq4c44s6jt",title:"The Gaia Ecosystem Introduction",style:{width:"100%",height:"100%",border:"0"},allow:"fullscreen"})})]})}),a.jsx(ap,{theme:e,onToggleTheme:l}),a.jsx(lp,{theme:e,onOpenDeck:s}),a.jsx(sp,{}),a.jsx(cp,{}),a.jsx(up,{}),a.jsx(dp,{}),a.jsx(fp,{}),a.jsx(mp,{}),a.jsx(pp,{onOpenDeck:s,theme:e,highVisibility:o,onToggleHighVisibility:()=>i(u=>!u)}),a.jsx(Gl,{id:"entry-points-architecture"}),a.jsx(hp,{}),a.jsx(Hl,{version:"v1"}),a.jsx(Hl,{version:"v2"}),a.jsx(gp,{}),a.jsx(Gl,{}),a.jsx(vp,{}),a.jsx(yp,{}),a.jsx(xp,{}),a.jsx(wp,{})]})]})}Qo.createRoot(document.getElementById("root")).render(a.jsx(bu.StrictMode,{children:a.jsx(kp,{})}));
