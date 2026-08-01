(()=>{var Vp=Object.create;var Ns=Object.defineProperty;var Kp=Object.getOwnPropertyDescriptor;var Gp=Object.getOwnPropertyNames;var qp=Object.getPrototypeOf,Xp=Object.prototype.hasOwnProperty;var Zt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Yp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Gp(t))!Xp.call(e,o)&&o!==n&&Ns(e,o,{get:()=>t[o],enumerable:!(r=Kp(t,o))||r.enumerable});return e};var Ss=(e,t,n)=>(n=e!=null?Vp(qp(e)):{},Yp(t||!e||!e.__esModule?Ns(n,"default",{value:e,enumerable:!0}):n,e));var Is=Zt(W=>{"use strict";var or=Symbol.for("react.element"),Qp=Symbol.for("react.portal"),Zp=Symbol.for("react.fragment"),Rp=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),af=Symbol.for("react.memo"),lf=Symbol.for("react.lazy"),Es=Symbol.iterator;function sf(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var zs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_s=Object.assign,Ts={};function kn(e,t,n){this.props=e,this.context=t,this.refs=Ts,this.updater=n||zs}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ls(){}Ls.prototype=kn.prototype;function Oa(e,t,n){this.props=e,this.context=t,this.refs=Ts,this.updater=n||zs}var ja=Oa.prototype=new Ls;ja.constructor=Oa;_s(ja,kn.prototype);ja.isPureReactComponent=!0;var Cs=Array.isArray,Ps=Object.prototype.hasOwnProperty,Ua={current:null},Ds={key:!0,ref:!0,__self:!0,__source:!0};function As(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ps.call(t,r)&&!Ds.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:or,type:e,key:i,ref:l,props:o,_owner:Ua.current}}function uf(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wa(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function cf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ms=/\/+/g;function $a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cf(""+e.key):t.toString(36)}function lo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case or:case Qp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+$a(l,0):r,Cs(o)?(n="",e!=null&&(n=e.replace(Ms,"$&/")+"/"),lo(o,t,n,"",function(c){return c})):o!=null&&(Wa(o)&&(o=uf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ms,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Cs(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+$a(i,s);l+=lo(i,t,n,u,o)}else if(u=sf(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+$a(i,s++),l+=lo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function io(e,t,n){if(e==null)return e;var r=[],o=0;return lo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},so={transition:null},pf={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:so,ReactCurrentOwner:Ua};function Fs(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Wa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=kn;W.Fragment=Zp;W.Profiler=ef;W.PureComponent=Oa;W.StrictMode=Rp;W.Suspense=of;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;W.act=Fs;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_s({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ua.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ps.call(t,u)&&!Ds.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:or,type:e.type,key:o,ref:i,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};W.createElement=As;W.createFactory=function(e){var t=As.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:rf,render:e}};W.isValidElement=Wa;W.lazy=function(e){return{$$typeof:lf,_payload:{_status:-1,_result:e},_init:df}};W.memo=function(e,t){return{$$typeof:af,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=so.transition;so.transition={};try{e()}finally{so.transition=t}};W.unstable_act=Fs;W.useCallback=function(e,t){return Ce.current.useCallback(e,t)};W.useContext=function(e){return Ce.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ce.current.useEffect(e,t)};W.useId=function(){return Ce.current.useId()};W.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ce.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};W.useRef=function(e){return Ce.current.useRef(e)};W.useState=function(e){return Ce.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ce.current.useTransition()};W.version="18.3.1"});var Ha=Zt((Fh,Bs)=>{"use strict";Bs.exports=Is()});var Gs=Zt(q=>{"use strict";function Ga(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<uo(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Ze(e){return e.length===0?null:e[0]}function po(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>uo(s,n))u<o&&0>uo(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>uo(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function uo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?($s=performance,q.unstable_now=function(){return $s.now()}):(Ja=Date,Os=Ja.now(),q.unstable_now=function(){return Ja.now()-Os});var $s,Ja,Os,it=[],Tt=[],ff=1,Je=null,we=3,fo=!1,Rt=!1,ir=!1,Ws=typeof setTimeout=="function"?setTimeout:null,Hs=typeof clearTimeout=="function"?clearTimeout:null,js=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function qa(e){for(var t=Ze(Tt);t!==null;){if(t.callback===null)po(Tt);else if(t.startTime<=e)po(Tt),t.sortIndex=t.expirationTime,Ga(it,t);else break;t=Ze(Tt)}}function Xa(e){if(ir=!1,qa(e),!Rt)if(Ze(it)!==null)Rt=!0,Qa(Ya);else{var t=Ze(Tt);t!==null&&Za(Xa,t.startTime-e)}}function Ya(e,t){Rt=!1,ir&&(ir=!1,Hs(lr),lr=-1),fo=!0;var n=we;try{for(qa(t),Je=Ze(it);Je!==null&&(!(Je.expirationTime>t)||e&&!Ks());){var r=Je.callback;if(typeof r=="function"){Je.callback=null,we=Je.priorityLevel;var o=r(Je.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?Je.callback=o:Je===Ze(it)&&po(it),qa(t)}else po(it);Je=Ze(it)}if(Je!==null)var i=!0;else{var l=Ze(Tt);l!==null&&Za(Xa,l.startTime-t),i=!1}return i}finally{Je=null,we=n,fo=!1}}var mo=!1,co=null,lr=-1,Js=5,Vs=-1;function Ks(){return!(q.unstable_now()-Vs<Js)}function Va(){if(co!==null){var e=q.unstable_now();Vs=e;var t=!0;try{t=co(!0,e)}finally{t?ar():(mo=!1,co=null)}}else mo=!1}var ar;typeof js=="function"?ar=function(){js(Va)}:typeof MessageChannel<"u"?(Ka=new MessageChannel,Us=Ka.port2,Ka.port1.onmessage=Va,ar=function(){Us.postMessage(null)}):ar=function(){Ws(Va,0)};var Ka,Us;function Qa(e){co=e,mo||(mo=!0,ar())}function Za(e,t){lr=Ws(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){Rt||fo||(Rt=!0,Qa(Ya))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Js=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return we};q.unstable_getFirstCallbackNode=function(){return Ze(it)};q.unstable_next=function(e){switch(we){case 1:case 2:case 3:var t=3;break;default:t=we}var n=we;we=t;try{return e()}finally{we=n}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=we;we=e;try{return t()}finally{we=n}};q.unstable_scheduleCallback=function(e,t,n){var r=q.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:ff++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Ga(Tt,e),Ze(it)===null&&e===Ze(Tt)&&(ir?(Hs(lr),lr=-1):ir=!0,Za(Xa,n-r))):(e.sortIndex=o,Ga(it,e),Rt||fo||(Rt=!0,Qa(Ya))),e};q.unstable_shouldYield=Ks;q.unstable_wrapCallback=function(e){var t=we;return function(){var n=we;we=t;try{return e.apply(this,arguments)}finally{we=n}}}});var Xs=Zt((Bh,qs)=>{"use strict";qs.exports=Gs()});var Rd=Zt(He=>{"use strict";var mf=Ha(),Ue=Xs();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nc=new Set,_r={};function fn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(_r[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wi=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ys={},Qs={};function vf(e){return wi.call(Qs,e)?!0:wi.call(Ys,e)?!1:hf.test(e)?Qs[e]=!0:(Ys[e]=!0,!1)}function gf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yf(e,t,n,r){if(t===null||typeof t>"u"||gf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var fl=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fl,ml);xe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fl,ml);xe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fl,ml);xe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function hl(e,t,n,r){var o=xe.hasOwnProperty(t)?xe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yf(t,n,o,r)&&(n=null),r||o===null?vf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),vl=Symbol.for("react.strict_mode"),bi=Symbol.for("react.profiler"),rc=Symbol.for("react.provider"),oc=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),ac=Symbol.for("react.offscreen"),Zs=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=Zs&&e[Zs]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Ra;function vr(e){if(Ra===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ra=t&&t[1]||""}return`
`+Ra+e}var ei=!1;function ti(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function xf(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=ti(e.type,!1),e;case 11:return e=ti(e.type.render,!1),e;case 1:return e=ti(e.type,!0),e;default:return""}}function Ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case Nn:return"Portal";case bi:return"Profiler";case vl:return"StrictMode";case Ni:return"Suspense";case Si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oc:return(e.displayName||"Context")+".Consumer";case rc:return(e._context.displayName||"Context")+".Provider";case gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yl:return t=e.displayName||null,t!==null?t:Ei(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Ei(e(t))}catch{}}return null}function kf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ei(t);case 8:return t===vl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wf(e){var t=ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vo(e){e._valueTracker||(e._valueTracker=wf(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sc(e,t){t=t.checked,t!=null&&hl(e,"checked",t,!1)}function Mi(e,t){sc(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zi(e,t.type,n):t.hasOwnProperty("defaultValue")&&zi(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zi(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _i(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(gr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function uc(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var go,dc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=go.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bf=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){bf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Nf=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Li(e,t){if(t){if(Nf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,In=null,Bn=null;function ru(e){if(e=qr(e)){if(typeof Ai!="function")throw Error(C(280));var t=e.stateNode;t&&(t=ya(t),Ai(e.stateNode,e.type,t))}}function mc(e){In?Bn?Bn.push(e):Bn=[e]:In=e}function hc(){if(In){var e=In,t=Bn;if(Bn=In=null,ru(e),t)for(e=0;e<t.length;e++)ru(t[e])}}function vc(e,t){return e(t)}function gc(){}var ni=!1;function yc(e,t,n){if(ni)return e(t,n);ni=!0;try{return vc(e,t,n)}finally{ni=!1,(In!==null||Bn!==null)&&(gc(),hc())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Fi=!1;if(kt)try{wn={},Object.defineProperty(wn,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Fi=!1}var wn;function Sf(e,t,n,r,o,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var wr=!1,Vo=null,Ko=!1,Ii=null,Ef={onError:function(e){wr=!0,Vo=e}};function Cf(e,t,n,r,o,i,l,s,u){wr=!1,Vo=null,Sf.apply(Ef,arguments)}function Mf(e,t,n,r,o,i,l,s,u){if(Cf.apply(this,arguments),wr){if(wr){var c=Vo;wr=!1,Vo=null}else throw Error(C(198));Ko||(Ko=!0,Ii=c)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(mn(e)!==e)throw Error(C(188))}function zf(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ou(o),e;if(i===r)return ou(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function kc(e){return e=zf(e),e!==null?wc(e):null}function wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wc(e);if(t!==null)return t;e=e.sibling}return null}var bc=Ue.unstable_scheduleCallback,au=Ue.unstable_cancelCallback,_f=Ue.unstable_shouldYield,Tf=Ue.unstable_requestPaint,se=Ue.unstable_now,Lf=Ue.unstable_getCurrentPriorityLevel,kl=Ue.unstable_ImmediatePriority,Nc=Ue.unstable_UserBlockingPriority,Go=Ue.unstable_NormalPriority,Pf=Ue.unstable_LowPriority,Sc=Ue.unstable_IdlePriority,ma=null,ct=null;function Df(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(ma,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:If,Af=Math.log,Ff=Math.LN2;function If(e){return e>>>=0,e===0?32:31-(Af(e)/Ff|0)|0}var yo=64,xo=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=yr(s):(i&=l,i!==0&&(r=yr(i)))}else l=n&~o,l!==0?r=yr(l):i!==0&&(r=yr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),o=1<<n,r|=e[n],t&=~o;return r}function Bf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-rt(i),s=1<<l,u=o[l];u===-1?((s&n)===0||(s&r)!==0)&&(o[l]=Bf(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ec(){var e=yo;return yo<<=1,(yo&4194240)===0&&(yo=64),e}function ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function Of(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function wl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function Cc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Mc,bl,zc,_c,Tc,$i=!1,ko=[],$t=null,Ot=null,jt=null,Pr=new Map,Dr=new Map,At=[],jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iu(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function ur(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=qr(t),t!==null&&bl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Uf(e,t,n,r,o){switch(t){case"focusin":return $t=ur($t,e,t,n,r,o),!0;case"dragenter":return Ot=ur(Ot,e,t,n,r,o),!0;case"mouseover":return jt=ur(jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Pr.set(i,ur(Pr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Dr.set(i,ur(Dr.get(i)||null,e,t,n,r,o)),!0}return!1}function Lc(e){var t=nn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=xc(n),t!==null){e.blockedOn=t,Tc(e.priority,function(){zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Di=r,n.target.dispatchEvent(r),Di=null}else return t=qr(n),t!==null&&bl(t),e.blockedOn=n,!1;t.shift()}return!0}function lu(e,t,n){Ao(e)&&n.delete(t)}function Wf(){$i=!1,$t!==null&&Ao($t)&&($t=null),Ot!==null&&Ao(Ot)&&(Ot=null),jt!==null&&Ao(jt)&&(jt=null),Pr.forEach(lu),Dr.forEach(lu)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,$i||($i=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Wf)))}function Ar(e){function t(o){return cr(o,e)}if(0<ko.length){cr(ko[0],e);for(var n=1;n<ko.length;n++){var r=ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&cr($t,e),Ot!==null&&cr(Ot,e),jt!==null&&cr(jt,e),Pr.forEach(t),Dr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Lc(n),n.blockedOn===null&&At.shift()}var $n=St.ReactCurrentBatchConfig,Xo=!0;function Hf(e,t,n,r){var o=K,i=$n.transition;$n.transition=null;try{K=1,Nl(e,t,n,r)}finally{K=o,$n.transition=i}}function Jf(e,t,n,r){var o=K,i=$n.transition;$n.transition=null;try{K=4,Nl(e,t,n,r)}finally{K=o,$n.transition=i}}function Nl(e,t,n,r){if(Xo){var o=Oi(e,t,n,r);if(o===null)ci(e,t,r,Yo,n),iu(e,r);else if(Uf(o,e,t,n,r))r.stopPropagation();else if(iu(e,r),t&4&&-1<jf.indexOf(e)){for(;o!==null;){var i=qr(o);if(i!==null&&Mc(i),i=Oi(e,t,n,r),i===null&&ci(e,t,r,Yo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ci(e,t,r,null,n)}}var Yo=null;function Oi(e,t,n,r){if(Yo=null,e=xl(r),e=nn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function Pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case kl:return 1;case Nc:return 4;case Go:case Pf:return 16;case Sc:return 536870912;default:return 16}default:return 16}}var It=null,Sl=null,Fo=null;function Dc(){if(Fo)return Fo;var e,t=Sl,n=t.length,r,o="value"in It?It.value:It.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Fo=o.slice(e,1<r?1-r:void 0)}function Io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function su(){return!1}function We(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wo:su,this.isPropagationStopped=su,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=We(qn),Gr=ae({},qn,{view:0,detail:0}),Vf=We(Gr),oi,ai,dr,ha=ae({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(oi=e.screenX-dr.screenX,ai=e.screenY-dr.screenY):ai=oi=0,dr=e),oi)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),uu=We(ha),Kf=ae({},ha,{dataTransfer:0}),Gf=We(Kf),qf=ae({},Gr,{relatedTarget:0}),ii=We(qf),Xf=ae({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yf=We(Xf),Qf=ae({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=We(Qf),Rf=ae({},qn,{data:0}),cu=We(Rf),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function Cl(){return rm}var om=ae({},Gr,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),am=We(om),im=ae({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=We(im),lm=ae({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),sm=We(lm),um=ae({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=We(um),dm=ae({},ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=We(dm),fm=[9,13,27,32],Ml=kt&&"CompositionEvent"in window,br=null;kt&&"documentMode"in document&&(br=document.documentMode);var mm=kt&&"TextEvent"in window&&!br,Ac=kt&&(!Ml||br&&8<br&&11>=br),pu=" ",fu=!1;function Fc(e,t){switch(e){case"keyup":return fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function hm(e,t){switch(e){case"compositionend":return Ic(t);case"keypress":return t.which!==32?null:(fu=!0,pu);case"textInput":return e=t.data,e===pu&&fu?null:e;default:return null}}function vm(e,t){if(En)return e==="compositionend"||!Ml&&Fc(e,t)?(e=Dc(),Fo=Sl=It=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ac&&t.locale!=="ko"?null:t.data;default:return null}}var gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gm[e.type]:t==="textarea"}function Bc(e,t,n,r){mc(r),t=Qo(t,"onChange"),0<t.length&&(n=new El("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Fr=null;function ym(e){qc(e,0)}function va(e){var t=zn(e);if(lc(t))return e}function xm(e,t){if(e==="change")return t}var $c=!1;kt&&(kt?(No="oninput"in document,No||(li=document.createElement("div"),li.setAttribute("oninput","return;"),No=typeof li.oninput=="function"),bo=No):bo=!1,$c=bo&&(!document.documentMode||9<document.documentMode));var bo,No,li;function hu(){Nr&&(Nr.detachEvent("onpropertychange",Oc),Fr=Nr=null)}function Oc(e){if(e.propertyName==="value"&&va(Fr)){var t=[];Bc(t,Fr,e,xl(e)),yc(ym,t)}}function km(e,t,n){e==="focusin"?(hu(),Nr=t,Fr=n,Nr.attachEvent("onpropertychange",Oc)):e==="focusout"&&hu()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return va(Fr)}function bm(e,t){if(e==="click")return va(t)}function Nm(e,t){if(e==="input"||e==="change")return va(t)}function Sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Sm;function Ir(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!wi.call(t,o)||!at(e[o],t[o]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gu(e,t){var n=vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function jc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Em(e){var t=Uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jc(n.ownerDocument.documentElement,n)){if(r!==null&&zl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=gu(n,i);var l=gu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cm=kt&&"documentMode"in document&&11>=document.documentMode,Cn=null,ji=null,Sr=null,Ui=!1;function yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ui||Cn==null||Cn!==Jo(r)||(r=Cn,"selectionStart"in r&&zl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Ir(Sr,r)||(Sr=r,r=Qo(ji,"onSelect"),0<r.length&&(t=new El("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function So(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},si={},Wc={};kt&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function ga(e){if(si[e])return si[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wc)return si[e]=t[n];return e}var Hc=ga("animationend"),Jc=ga("animationiteration"),Vc=ga("animationstart"),Kc=ga("transitionend"),Gc=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){Gc.set(e,t),fn(t,[e])}for(Eo=0;Eo<xu.length;Eo++)Co=xu[Eo],ku=Co.toLowerCase(),wu=Co[0].toUpperCase()+Co.slice(1),qt(ku,"on"+wu);var Co,ku,wu,Eo;qt(Hc,"onAnimationEnd");qt(Jc,"onAnimationIteration");qt(Vc,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Kc,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function bu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mf(r,t,void 0,e),e.currentTarget=null}function qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;bu(o,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;bu(o,s,c),i=u}}}if(Ko)throw e=Ii,Ko=!1,Ii=null,e}function Q(e,t){var n=t[Ki];n===void 0&&(n=t[Ki]=new Set);var r=e+"__bubble";n.has(r)||(Xc(t,e,2,!1),n.add(r))}function ui(e,t,n){var r=0;t&&(r|=4),Xc(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Mo]){e[Mo]=!0,nc.forEach(function(n){n!=="selectionchange"&&(Mm.has(n)||ui(n,!1,e),ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,ui("selectionchange",!1,t))}}function Xc(e,t,n,r){switch(Pc(t)){case 1:var o=Hf;break;case 4:o=Jf;break;default:o=Nl}n=o.bind(null,t,n,e),o=void 0,!Fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ci(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=nn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}yc(function(){var c=i,p=xl(n),h=[];e:{var v=Gc.get(e);if(v!==void 0){var g=El,k=e;switch(e){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":g=am;break;case"focusin":k="focus",g=ii;break;case"focusout":k="blur",g=ii;break;case"beforeblur":case"afterblur":g=ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=sm;break;case Hc:case Jc:case Vc:g=Yf;break;case Kc:g=cm;break;case"scroll":g=Vf;break;case"wheel":g=pm;break;case"copy":case"cut":case"paste":g=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=du}var y=(t&4)!==0,N=!y&&e==="scroll",f=y?v!==null?v+"Capture":null:v;y=[];for(var d=c,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=Lr(d,f),x!=null&&y.push($r(d,x,m)))),N)break;d=d.return}0<y.length&&(v=new g(v,k,null,n,p),h.push({event:v,listeners:y}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",v&&n!==Di&&(k=n.relatedTarget||n.fromElement)&&(nn(k)||k[wt]))break e;if((g||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,g?(k=n.relatedTarget||n.toElement,g=c,k=k?nn(k):null,k!==null&&(N=mn(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(g=null,k=c),g!==k)){if(y=uu,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=du,x="onPointerLeave",f="onPointerEnter",d="pointer"),N=g==null?v:zn(g),m=k==null?v:zn(k),v=new y(x,d+"leave",g,n,p),v.target=N,v.relatedTarget=m,x=null,nn(p)===c&&(y=new y(f,d+"enter",k,n,p),y.target=m,y.relatedTarget=N,x=y),N=x,g&&k)t:{for(y=g,f=k,d=0,m=y;m;m=bn(m))d++;for(m=0,x=f;x;x=bn(x))m++;for(;0<d-m;)y=bn(y),d--;for(;0<m-d;)f=bn(f),m--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=bn(y),f=bn(f)}y=null}else y=null;g!==null&&Nu(h,v,g,y,!1),k!==null&&N!==null&&Nu(h,N,k,y,!0)}}e:{if(v=c?zn(c):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var w=xm;else if(mu(v))if($c)w=Nm;else{w=wm;var b=km}else(g=v.nodeName)&&g.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(w=bm);if(w&&(w=w(e,c))){Bc(h,w,n,p);break e}b&&b(e,v,c),e==="focusout"&&(b=v._wrapperState)&&b.controlled&&v.type==="number"&&zi(v,"number",v.value)}switch(b=c?zn(c):window,e){case"focusin":(mu(b)||b.contentEditable==="true")&&(Cn=b,ji=c,Sr=null);break;case"focusout":Sr=ji=Cn=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,yu(h,n,p);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":yu(h,n,p)}var E;if(Ml)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else En?Fc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ac&&n.locale!=="ko"&&(En||T!=="onCompositionStart"?T==="onCompositionEnd"&&En&&(E=Dc()):(It=p,Sl="value"in It?It.value:It.textContent,En=!0)),b=Qo(c,T),0<b.length&&(T=new cu(T,e,null,n,p),h.push({event:T,listeners:b}),E?T.data=E:(E=Ic(n),E!==null&&(T.data=E)))),(E=mm?hm(e,n):vm(e,n))&&(c=Qo(c,"onBeforeInput"),0<c.length&&(p=new cu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=E))}qc(h,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Lr(e,n),i!=null&&r.unshift($r(e,i,o)),i=Lr(e,t),i!=null&&r.push($r(e,i,o))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=Lr(n,i),u!=null&&l.unshift($r(n,u,s))):o||(u=Lr(n,i),u!=null&&l.push($r(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zm=/\r\n?/g,_m=/\u0000|\uFFFD/g;function Su(e){return(typeof e=="string"?e:""+e).replace(zm,`
`).replace(_m,"")}function zo(e,t,n){if(t=Su(t),Su(e)!==t&&n)throw Error(C(425))}function Zo(){}var Wi=null,Hi=null;function Ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,Tm=typeof clearTimeout=="function"?clearTimeout:void 0,Eu=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof Eu<"u"?function(e){return Eu.resolve(null).then(e).catch(Pm)}:Vi;function Pm(e){setTimeout(function(){throw e})}function di(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ar(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Xn,Or="__reactProps$"+Xn,wt="__reactContainer$"+Xn,Ki="__reactEvents$"+Xn,Dm="__reactListeners$"+Xn,Am="__reactHandles$"+Xn;function nn(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cu(e);e!==null;){if(n=e[ut])return n;e=Cu(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[ut]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ya(e){return e[Or]||null}var Gi=[],_n=-1;function Xt(e){return{current:e}}function Z(e){0>_n||(e.current=Gi[_n],Gi[_n]=null,_n--)}function X(e,t){_n++,Gi[_n]=e.current,e.current=t}var Gt={},Ee=Xt(Gt),De=Xt(!1),sn=Gt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Ro(){Z(De),Z(Ee)}function Mu(e,t,n){if(Ee.current!==Gt)throw Error(C(168));X(Ee,t),X(De,n)}function Yc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,kf(e)||"Unknown",o));return ae({},n,r)}function ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,sn=Ee.current,X(Ee,e),X(De,De.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Yc(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,Z(De),Z(Ee),X(Ee,e)):Z(De),X(De,n)}var vt=null,xa=!1,pi=!1;function Qc(e){vt===null?vt=[e]:vt.push(e)}function Fm(e){xa=!0,Qc(e)}function Yt(){if(!pi&&vt!==null){pi=!0;var e=0,t=K;try{var n=vt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,xa=!1}catch(o){throw vt!==null&&(vt=vt.slice(e+1)),bc(kl,Yt),o}finally{K=t,pi=!1}}return null}var Tn=[],Ln=0,ta=null,na=0,Ve=[],Ke=0,un=null,gt=1,yt="";function en(e,t){Tn[Ln++]=na,Tn[Ln++]=ta,ta=e,na=t}function Zc(e,t,n){Ve[Ke++]=gt,Ve[Ke++]=yt,Ve[Ke++]=un,un=e;var r=gt;e=yt;var o=32-rt(r)-1;r&=~(1<<o),n+=1;var i=32-rt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,gt=1<<32-rt(t)+o|n<<o|r,yt=i+e}else gt=1<<i|n<<o|r,yt=e}function _l(e){e.return!==null&&(en(e,1),Zc(e,1,0))}function Tl(e){for(;e===ta;)ta=Tn[--Ln],Tn[Ln]=null,na=Tn[--Ln],Tn[Ln]=null;for(;e===un;)un=Ve[--Ke],Ve[Ke]=null,yt=Ve[--Ke],Ve[Ke]=null,gt=Ve[--Ke],Ve[Ke]=null}var je=null,Oe=null,ee=!1,nt=null;function Rc(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Oe=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Oe=null,!0):!1;default:return!1}}function qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xi(e){if(ee){var t=Oe;if(t){var n=t;if(!_u(e,t)){if(qi(e))throw Error(C(418));t=Ut(n.nextSibling);var r=je;t&&_u(e,t)?Rc(r,n):(e.flags=e.flags&-4097|2,ee=!1,je=e)}}else{if(qi(e))throw Error(C(418));e.flags=e.flags&-4097|2,ee=!1,je=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function _o(e){if(e!==je)return!1;if(!ee)return Tu(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ji(e.type,e.memoizedProps)),t&&(t=Oe)){if(qi(e))throw ed(),Error(C(418));for(;t;)Rc(e,t),t=Ut(t.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=je?Ut(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=Oe;e;)e=Ut(e.nextSibling)}function Hn(){Oe=je=null,ee=!1}function Ll(e){nt===null?nt=[e]:nt.push(e)}var Im=St.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lu(e){var t=e._init;return t(e._payload)}function td(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Vt(f,d),f.index=0,f.sibling=null,f}function i(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,m,x){return d===null||d.tag!==6?(d=xi(m,f.mode,x),d.return=f,d):(d=o(d,m),d.return=f,d)}function u(f,d,m,x){var w=m.type;return w===Sn?p(f,d,m.props.children,x,m.key):d!==null&&(d.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pt&&Lu(w)===d.type)?(x=o(d,m.props),x.ref=pr(f,d,m),x.return=f,x):(x=Ho(m.type,m.key,m.props,null,f.mode,x),x.ref=pr(f,d,m),x.return=f,x)}function c(f,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ki(m,f.mode,x),d.return=f,d):(d=o(d,m.children||[]),d.return=f,d)}function p(f,d,m,x,w){return d===null||d.tag!==7?(d=ln(m,f.mode,x,w),d.return=f,d):(d=o(d,m),d.return=f,d)}function h(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=xi(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ho:return m=Ho(d.type,d.key,d.props,null,f.mode,m),m.ref=pr(f,null,d),m.return=f,m;case Nn:return d=ki(d,f.mode,m),d.return=f,d;case Pt:var x=d._init;return h(f,x(d._payload),m)}if(gr(d)||sr(d))return d=ln(d,f.mode,m,null),d.return=f,d;To(f,d)}return null}function v(f,d,m,x){var w=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(f,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ho:return m.key===w?u(f,d,m,x):null;case Nn:return m.key===w?c(f,d,m,x):null;case Pt:return w=m._init,v(f,d,w(m._payload),x)}if(gr(m)||sr(m))return w!==null?null:p(f,d,m,x,null);To(f,m)}return null}function g(f,d,m,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,s(d,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ho:return f=f.get(x.key===null?m:x.key)||null,u(d,f,x,w);case Nn:return f=f.get(x.key===null?m:x.key)||null,c(d,f,x,w);case Pt:var b=x._init;return g(f,d,m,b(x._payload),w)}if(gr(x)||sr(x))return f=f.get(m)||null,p(d,f,x,w,null);To(d,x)}return null}function k(f,d,m,x){for(var w=null,b=null,E=d,T=d=0,$=null;E!==null&&T<m.length;T++){E.index>T?($=E,E=null):$=E.sibling;var P=v(f,E,m[T],x);if(P===null){E===null&&(E=$);break}e&&E&&P.alternate===null&&t(f,E),d=i(P,d,T),b===null?w=P:b.sibling=P,b=P,E=$}if(T===m.length)return n(f,E),ee&&en(f,T),w;if(E===null){for(;T<m.length;T++)E=h(f,m[T],x),E!==null&&(d=i(E,d,T),b===null?w=E:b.sibling=E,b=E);return ee&&en(f,T),w}for(E=r(f,E);T<m.length;T++)$=g(E,f,T,m[T],x),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?T:$.key),d=i($,d,T),b===null?w=$:b.sibling=$,b=$);return e&&E.forEach(function(A){return t(f,A)}),ee&&en(f,T),w}function y(f,d,m,x){var w=sr(m);if(typeof w!="function")throw Error(C(150));if(m=w.call(m),m==null)throw Error(C(151));for(var b=w=null,E=d,T=d=0,$=null,P=m.next();E!==null&&!P.done;T++,P=m.next()){E.index>T?($=E,E=null):$=E.sibling;var A=v(f,E,P.value,x);if(A===null){E===null&&(E=$);break}e&&E&&A.alternate===null&&t(f,E),d=i(A,d,T),b===null?w=A:b.sibling=A,b=A,E=$}if(P.done)return n(f,E),ee&&en(f,T),w;if(E===null){for(;!P.done;T++,P=m.next())P=h(f,P.value,x),P!==null&&(d=i(P,d,T),b===null?w=P:b.sibling=P,b=P);return ee&&en(f,T),w}for(E=r(f,E);!P.done;T++,P=m.next())P=g(E,f,T,P.value,x),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?T:P.key),d=i(P,d,T),b===null?w=P:b.sibling=P,b=P);return e&&E.forEach(function(j){return t(f,j)}),ee&&en(f,T),w}function N(f,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ho:e:{for(var w=m.key,b=d;b!==null;){if(b.key===w){if(w=m.type,w===Sn){if(b.tag===7){n(f,b.sibling),d=o(b,m.props.children),d.return=f,f=d;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pt&&Lu(w)===b.type){n(f,b.sibling),d=o(b,m.props),d.ref=pr(f,b,m),d.return=f,f=d;break e}n(f,b);break}else t(f,b);b=b.sibling}m.type===Sn?(d=ln(m.props.children,f.mode,x,m.key),d.return=f,f=d):(x=Ho(m.type,m.key,m.props,null,f.mode,x),x.ref=pr(f,d,m),x.return=f,f=x)}return l(f);case Nn:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=o(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ki(m,f.mode,x),d.return=f,f=d}return l(f);case Pt:return b=m._init,N(f,d,b(m._payload),x)}if(gr(m))return k(f,d,m,x);if(sr(m))return y(f,d,m,x);To(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,m),d.return=f,f=d):(n(f,d),d=xi(m,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return N}var Jn=td(!0),nd=td(!1),ra=Xt(null),oa=null,Pn=null,Pl=null;function Dl(){Pl=Pn=oa=null}function Al(e){var t=ra.current;Z(ra),e._currentValue=t}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){oa=e,Pl=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pe=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Pl!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(oa===null)throw Error(C(308));Pn=e,oa.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var rn=null;function Fl(e){rn===null?rn=[e]:rn.push(e)}function rd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Fl(t)):(n.next=o.next,o.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(J&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,bt(e,n)}return o=r.interleaved,o===null?(t.next=t,Fl(r)):(t.next=o.next,o.next=t),r.interleaved=t,bt(e,n)}function Bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wl(e,n)}}function Pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,r){var o=e.updateQueue;Dt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;l=0,p=c=u=null,s=i;do{var v=s.lane,g=s.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,y=s;switch(v=t,g=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){h=k.call(g,h,v);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,v=typeof k=="function"?k.call(g,h,v):k,v==null)break e;h=ae({},h,v);break e;case 2:Dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[s]:v.push(s))}else g={eventTime:g,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=g,u=h):p=p.next=g,l|=v;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;v=s,s=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);dn|=l,e.lanes=l,e.memoizedState=h}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Xr={},dt=Xt(Xr),jr=Xt(Xr),Ur=Xt(Xr);function on(e){if(e===Xr)throw Error(C(174));return e}function Bl(e,t){switch(X(Ur,t),X(jr,e),X(dt,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ti(t,e)}Z(dt),X(dt,t)}function Vn(){Z(dt),Z(jr),Z(Ur)}function ad(e){on(Ur.current);var t=on(dt.current),n=Ti(t,e.type);t!==n&&(X(jr,e),X(dt,n))}function $l(e){jr.current===e&&(Z(dt),Z(jr))}var re=Xt(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fi=[];function Ol(){for(var e=0;e<fi.length;e++)fi[e]._workInProgressVersionPrimary=null;fi.length=0}var $o=St.ReactCurrentDispatcher,mi=St.ReactCurrentBatchConfig,cn=0,oe=null,ce=null,fe=null,la=!1,Er=!1,Wr=0,Bm=0;function be(){throw Error(C(321))}function jl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Ul(e,t,n,r,o,i){if(cn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$o.current=e===null||e.memoizedState===null?Um:Wm,e=n(r,o),Er){i=0;do{if(Er=!1,Wr=0,25<=i)throw Error(C(301));i+=1,fe=ce=null,t.updateQueue=null,$o.current=Hm,e=n(r,o)}while(Er)}if($o.current=sa,t=ce!==null&&ce.next!==null,cn=0,fe=ce=oe=null,la=!1,t)throw Error(C(300));return e}function Wl(){var e=Wr!==0;return Wr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?oe.memoizedState=fe=e:fe=fe.next=e,fe}function Ye(){if(ce===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=fe===null?oe.memoizedState:fe.next;if(t!==null)fe=t,ce=e;else{if(e===null)throw Error(C(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},fe===null?oe.memoizedState=fe=e:fe=fe.next=e}return fe}function Hr(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ce,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,c=i;do{var p=c.lane;if((cn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,l=r):u=u.next=h,oe.lanes|=p,dn|=p}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,at(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,dn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vi(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);at(i,t.memoizedState)||(Pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function id(){}function ld(e,t){var n=oe,r=Ye(),o=t(),i=!at(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,Hl(cd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Jr(9,ud.bind(null,n,r,o,t),void 0,null),me===null)throw Error(C(349));(cn&30)!==0||sd(n,t,o)}return o}function sd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ud(e,t,n,r){t.value=n,t.getSnapshot=r,dd(t)&&pd(e)}function cd(e,t,n){return n(function(){dd(t)&&pd(e)})}function dd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function pd(e){var t=bt(e,1);t!==null&&ot(t,e,1,-1)}function Au(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=jm.bind(null,oe,e),[t.memoizedState,e]}function Jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fd(){return Ye().memoizedState}function Oo(e,t,n,r){var o=st();oe.flags|=e,o.memoizedState=Jr(1|t,n,void 0,r===void 0?null:r)}function ka(e,t,n,r){var o=Ye();r=r===void 0?null:r;var i=void 0;if(ce!==null){var l=ce.memoizedState;if(i=l.destroy,r!==null&&jl(r,l.deps)){o.memoizedState=Jr(t,n,i,r);return}}oe.flags|=e,o.memoizedState=Jr(1|t,n,i,r)}function Fu(e,t){return Oo(8390656,8,e,t)}function Hl(e,t){return ka(2048,8,e,t)}function md(e,t){return ka(4,2,e,t)}function hd(e,t){return ka(4,4,e,t)}function vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,n){return n=n!=null?n.concat([e]):null,ka(4,4,vd.bind(null,t,e),n)}function Jl(){}function yd(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xd(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kd(e,t,n){return(cn&21)===0?(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n):(at(n,t)||(n=Ec(),oe.lanes|=n,dn|=n,e.baseState=!0),t)}function $m(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=mi.transition;mi.transition={};try{e(!1),t()}finally{K=n,mi.transition=r}}function wd(){return Ye().memoizedState}function Om(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bd(e))Nd(t,n);else if(n=rd(e,t,n,r),n!==null){var o=ze();ot(n,e,r,o),Sd(n,t,r)}}function jm(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bd(e))Nd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,at(s,l)){var u=t.interleaved;u===null?(o.next=o,Fl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}n=rd(e,t,o,r),n!==null&&(o=ze(),ot(n,e,r,o),Sd(n,t,r))}}function bd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Nd(e,t){Er=la=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wl(e,n)}}var sa={readContext:Xe,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Um={readContext:Xe,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4194308,4,vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Om.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Au,useDebugValue:Jl,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Au(!1),t=e[0];return e=$m.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=st();if(ee){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),me===null)throw Error(C(349));(cn&30)!==0||sd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Fu(cd.bind(null,r,i,e),[e]),r.flags|=2048,Jr(9,ud.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=st(),t=me.identifierPrefix;if(ee){var n=yt,r=gt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wm={readContext:Xe,useCallback:yd,useContext:Xe,useEffect:Hl,useImperativeHandle:gd,useInsertionEffect:md,useLayoutEffect:hd,useMemo:xd,useReducer:hi,useRef:fd,useState:function(){return hi(Hr)},useDebugValue:Jl,useDeferredValue:function(e){var t=Ye();return kd(t,ce.memoizedState,e)},useTransition:function(){var e=hi(Hr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:wd,unstable_isNewReconciler:!1},Hm={readContext:Xe,useCallback:yd,useContext:Xe,useEffect:Hl,useImperativeHandle:gd,useInsertionEffect:md,useLayoutEffect:hd,useMemo:xd,useReducer:vi,useRef:fd,useState:function(){return vi(Hr)},useDebugValue:Jl,useDeferredValue:function(e){var t=Ye();return ce===null?t.memoizedState=e:kd(t,ce.memoizedState,e)},useTransition:function(){var e=vi(Hr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:wd,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wa={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=Jt(e),i=xt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(ot(t,e,o,r),Bo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=Jt(e),i=xt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(ot(t,e,o,r),Bo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=Jt(e),o=xt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(ot(t,e,r,n),Bo(t,e,r))}};function Iu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(o,i):!0}function Ed(e,t,n){var r=!1,o=Gt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(o=Ae(t)?sn:Ee.current,r=t.contextTypes,i=(r=r!=null)?Wn(e,o):Gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wa.enqueueReplaceState(t,t.state,null)}function Zi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Il(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Xe(i):(i=Ae(t)?sn:Ee.current,o.context=Wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&wa.enqueueReplaceState(o,o.state,null),aa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=xf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jm=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ca||(ca=!0,ul=r),Ri(e,t)},n}function Md(e,t,n){n=xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ri(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ri(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=o0.bind(null,e,t,n),t.then(e,e))}function Ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Vm=St.ReactCurrentOwner,Pe=!1;function Me(e,t,n,r){t.child=e===null?nd(t,null,n,r):Jn(t,e.child,n,r)}function Uu(e,t,n,r,o){n=n.render;var i=t.ref;return On(t,o),r=Ul(e,t,n,r,i,o),n=Wl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(ee&&n&&_l(t),t.flags|=1,Me(e,t,r,o),t.child)}function Wu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Zl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zd(e,t,i,r,o)):(e=Ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(l,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ir(i,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return el(e,t,n,r,o)}function _d(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(An,$e),$e|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(An,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(An,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(An,$e),$e|=r;return Me(e,t,o,n),t.child}function Td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function el(e,t,n,r,o){var i=Ae(n)?sn:Ee.current;return i=Wn(t,i),On(t,o),n=Ul(e,t,n,r,i,o),r=Wl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(ee&&r&&_l(t),t.flags|=1,Me(e,t,n,o),t.child)}function Hu(e,t,n,r,o){if(Ae(n)){var i=!0;ea(t)}else i=!1;if(On(t,o),t.stateNode===null)jo(e,t),Ed(t,n,r),Zi(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=Ae(n)?sn:Ee.current,c=Wn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Bu(t,l,r,c),Dt=!1;var v=t.memoizedState;l.state=v,aa(t,r,l,o),u=t.memoizedState,s!==r||v!==u||De.current||Dt?(typeof p=="function"&&(Qi(t,n,p,r),u=t.memoizedState),(s=Dt||Iu(t,n,s,r,v,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,od(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:et(t.type,s),l.props=c,h=t.pendingProps,v=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xe(u):(u=Ae(n)?sn:Ee.current,u=Wn(t,u));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||v!==u)&&Bu(t,l,r,u),Dt=!1,v=t.memoizedState,l.state=v,aa(t,r,l,o);var k=t.memoizedState;s!==h||v!==k||De.current||Dt?(typeof g=="function"&&(Qi(t,n,g,r),k=t.memoizedState),(c=Dt||Iu(t,n,c,r,v,k,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return tl(e,t,n,r,i,o)}function tl(e,t,n,r,o,i){Td(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&zu(t,n,!1),Nt(e,t,i);r=t.stateNode,Vm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Jn(t,e.child,null,i),t.child=Jn(t,null,s,i)):Me(e,t,s,i),t.memoizedState=r.state,o&&zu(t,n,!0),t.child}function Ld(e){var t=e.stateNode;t.pendingContext?Mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mu(e,t.context,!1),Bl(e,t.containerInfo)}function Ju(e,t,n,r,o){return Hn(),Ll(o),t.flags|=256,Me(e,t,n,r),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pd(e,t,n){var r=t.pendingProps,o=re.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(re,o&1),e===null)return Xi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Sa(l,r,0,null),e=ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=rl(n),t.memoizedState=nl,e):Vl(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Km(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Vt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Vt(s,i):(i=ln(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?rl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=nl,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vl(e,t){return t=Sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&Ll(r),Jn(t,e.child,null,n),e=Vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Km(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=gi(Error(C(422))),Lo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Sa({mode:"visible",children:r.children},o,0,null),i=ln(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Jn(t,e.child,null,l),t.child.memoizedState=rl(l),t.memoizedState=nl,i);if((t.mode&1)===0)return Lo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=gi(i,r,void 0),Lo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Pe||s){if(r=me,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,bt(e,o),ot(r,e,o,-1))}return Ql(),r=gi(Error(C(421))),Lo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=a0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Ut(o.nextSibling),je=t,ee=!0,nt=null,e!==null&&(Ve[Ke++]=gt,Ve[Ke++]=yt,Ve[Ke++]=un,gt=e.id,yt=e.overflow,un=t),t=Vl(t,r.children),t.flags|=4096,t)}function Vu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function yi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Dd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Me(e,t,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vu(e,n,t);else if(e.tag===19)Vu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),yi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ia(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}yi(t,!0,n,null,i);break;case"together":yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gm(e,t,n){switch(t.tag){case 3:Ld(t),Hn();break;case 5:ad(t);break;case 1:Ae(t.type)&&ea(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(ra,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Pd(e,t,n):(X(re,re.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Dd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,n)}return Nt(e,t,n)}var Ad,ol,Fd,Id;Ad=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ol=function(){};Fd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(dt.current);var i=null;switch(n){case"input":o=Ci(e,o),r=Ci(e,r),i=[];break;case"select":o=ae({},o,{value:void 0}),r=ae({},r,{value:void 0}),i=[];break;case"textarea":o=_i(e,o),r=_i(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}Li(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_r.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_r.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Q("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Id=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qm(e,t,n){var r=t.pendingProps;switch(Tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ae(t.type)&&Ro(),Ne(t),null;case 3:return r=t.stateNode,Vn(),Z(De),Z(Ee),Ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nt!==null&&(pl(nt),nt=null))),ol(e,t),Ne(t),null;case 5:$l(t);var o=on(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Fd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ne(t),null}if(e=on(dt.current),_o(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ut]=t,r[Or]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<xr.length;o++)Q(xr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Rs(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":tu(r,i),Q("invalid",r)}Li(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",""+s]):_r.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":vo(r),eu(r,i,!0);break;case"textarea":vo(r),nu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ut]=t,e[Or]=r,Ad(e,t,!1,!1),t.stateNode=e;e:{switch(l=Pi(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<xr.length;o++)Q(xr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Rs(e,r),o=Ci(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ae({},r,{value:void 0}),Q("invalid",e);break;case"textarea":tu(e,r),o=_i(e,r),Q("invalid",e);break;default:o=r}Li(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?fc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tr(e,u):typeof u=="number"&&Tr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_r.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Q("scroll",e):u!=null&&hl(e,i,u,l))}switch(n){case"input":vo(e),eu(e,r,!1);break;case"textarea":vo(e),nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Fn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Id(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=on(Ur.current),on(dt.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return Ne(t),null;case 13:if(Z(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Oe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ed(),Hn(),t.flags|=98560,i=!1;else if(i=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[ut]=t}else Hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else nt!==null&&(pl(nt),nt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(re.current&1)!==0?de===0&&(de=3):Ql())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Vn(),ol(e,t),e===null&&Br(t.stateNode.containerInfo),Ne(t),null;case 10:return Al(t.type._context),Ne(t),null;case 17:return Ae(t.type)&&Ro(),Ne(t),null;case 19:if(Z(re),i=t.memoizedState,i===null)return Ne(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)fr(i,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ia(e),l!==null){for(t.flags|=128,fr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>Gn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ia(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ee)return Ne(t),null}else 2*se()-i.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Yl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?($e&1073741824)!==0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Xm(e,t){switch(Tl(t),t.tag){case 1:return Ae(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),Z(De),Z(Ee),Ol(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return $l(t),null;case 13:if(Z(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(re),null;case 4:return Vn(),null;case 10:return Al(t.type._context),null;case 22:case 23:return Yl(),null;case 24:return null;default:return null}}var Po=!1,Se=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,L=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function al(e,t,n){try{n()}catch(r){le(e,t,r)}}var Ku=!1;function Qm(e,t){if(Wi=Xo,e=Uc(),zl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,p=0,h=e,v=null;t:for(;;){for(var g;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)v=h,h=g;for(;;){if(h===e)break t;if(v===n&&++c===o&&(s=l),v===i&&++p===r&&(u=l),(g=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=g}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hi={focusedElem:e,selectionRange:n},Xo=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,N=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:et(t.type,y),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return k=Ku,Ku=!1,k}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&al(t,n,i)}o=o.next}while(o!==r)}}function ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[Or],delete t[Ki],delete t[Dm],delete t[Am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function Gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}function sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sl(e,t,n),e=e.sibling;e!==null;)sl(e,t,n),e=e.sibling}var ge=null,tt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Od(e,t,n),n=n.sibling}function Od(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(ma,n)}catch{}switch(n.tag){case 5:Se||Dn(n,t);case 6:var r=ge,o=tt;ge=null,Lt(e,t,n),ge=r,tt=o,ge!==null&&(tt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(tt?(e=ge,n=n.stateNode,e.nodeType===8?di(e.parentNode,n):e.nodeType===1&&di(e,n),Ar(e)):di(ge,n.stateNode));break;case 4:r=ge,o=tt,ge=n.stateNode.containerInfo,tt=!0,Lt(e,t,n),ge=r,tt=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&al(n,t,l),o=o.next}while(o!==r)}Lt(e,t,n);break;case 1:if(!Se&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){le(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Lt(e,t,n),Se=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ym),t.forEach(function(r){var o=i0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,tt=!1;break e;case 3:ge=s.stateNode.containerInfo,tt=!0;break e;case 4:ge=s.stateNode.containerInfo,tt=!0;break e}s=s.return}if(ge===null)throw Error(C(160));Od(i,l,o),ge=null,tt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){le(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jd(t,e),t=t.sibling}function jd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),lt(e),r&4){try{Cr(3,e,e.return),ba(3,e)}catch(y){le(e,e.return,y)}try{Cr(5,e,e.return)}catch(y){le(e,e.return,y)}}break;case 1:Re(t,e),lt(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(Re(t,e),lt(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var o=e.stateNode;try{Tr(o,"")}catch(y){le(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&sc(o,i),Pi(s,l);var c=Pi(s,i);for(l=0;l<u.length;l+=2){var p=u[l],h=u[l+1];p==="style"?fc(o,h):p==="dangerouslySetInnerHTML"?dc(o,h):p==="children"?Tr(o,h):hl(o,p,h,c)}switch(s){case"input":Mi(o,i);break;case"textarea":uc(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Fn(o,!!i.multiple,g,!1):v!==!!i.multiple&&(i.defaultValue!=null?Fn(o,!!i.multiple,i.defaultValue,!0):Fn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Or]=i}catch(y){le(e,e.return,y)}}break;case 6:if(Re(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){le(e,e.return,y)}}break;case 3:if(Re(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(t.containerInfo)}catch(y){le(e,e.return,y)}break;case 4:Re(t,e),lt(e);break;case 13:Re(t,e),lt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ql=se())),r&4&&qu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(c=Se)||p,Re(t,e),Se=c):Re(t,e),lt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(L=e,p=e.child;p!==null;){for(h=L=p;L!==null;){switch(v=L,g=v.child,v.tag){case 0:case 11:case 14:case 15:Cr(4,v,v.return);break;case 1:Dn(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){le(r,n,y)}}break;case 5:Dn(v,v.return);break;case 22:if(v.memoizedState!==null){Yu(h);continue}}g!==null?(g.return=v,L=g):Yu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=pc("display",l))}catch(y){le(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){le(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(t,e),lt(e),r&4&&qu(e);break;case 21:break;default:Re(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($d(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Tr(o,""),r.flags&=-33);var i=Gu(e);sl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Gu(e);ll(e,s,l);break;default:throw Error(C(161))}}catch(u){le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zm(e,t,n){L=e,Ud(e,t,n)}function Ud(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Po;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Se;s=Po;var c=Se;if(Po=l,(Se=u)&&!c)for(L=o;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?Qu(o):u!==null?(u.return=l,L=u):Qu(o);for(;i!==null;)L=i,Ud(i,t,n),i=i.sibling;L=o,Po=s,Se=c}Xu(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,L=i):Xu(e,t,n)}}function Xu(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Se||ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Du(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ar(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Se||t.flags&512&&il(t)}catch(v){le(t,t.return,v)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Yu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Qu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ba(4,t)}catch(u){le(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){le(t,o,u)}}var i=t.return;try{il(t)}catch(u){le(t,i,u)}break;case 5:var l=t.return;try{il(t)}catch(u){le(t,l,u)}}}catch(u){le(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var Rm=Math.ceil,ua=St.ReactCurrentDispatcher,Kl=St.ReactCurrentOwner,qe=St.ReactCurrentBatchConfig,J=0,me=null,ue=null,ye=0,$e=0,An=Xt(0),de=0,Vr=null,dn=0,Na=0,Gl=0,Mr=null,Le=null,ql=0,Gn=1/0,ht=null,ca=!1,ul=null,Ht=null,Do=!1,Bt=null,da=0,zr=0,cl=null,Uo=-1,Wo=0;function ze(){return(J&6)!==0?se():Uo!==-1?Uo:Uo=se()}function Jt(e){return(e.mode&1)===0?1:(J&2)!==0&&ye!==0?ye&-ye:Im.transition!==null?(Wo===0&&(Wo=Ec()),Wo):(e=K,e!==0||(e=window.event,e=e===void 0?16:Pc(e.type)),e)}function ot(e,t,n,r){if(50<zr)throw zr=0,cl=null,Error(C(185));Kr(e,n,r),((J&2)===0||e!==me)&&(e===me&&((J&2)===0&&(Na|=n),de===4&&Ft(e,ye)),Fe(e,r),n===1&&J===0&&(t.mode&1)===0&&(Gn=se()+500,xa&&Yt()))}function Fe(e,t){var n=e.callbackNode;$f(e,t);var r=qo(e,e===me?ye:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?Fm(Zu.bind(null,e)):Qc(Zu.bind(null,e)),Lm(function(){(J&6)===0&&Yt()}),n=null;else{switch(Cc(r)){case 1:n=kl;break;case 4:n=Nc;break;case 16:n=Go;break;case 536870912:n=Sc;break;default:n=Go}n=Xd(n,Wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wd(e,t){if(Uo=-1,Wo=0,(J&6)!==0)throw Error(C(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=qo(e,e===me?ye:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=pa(e,r);else{t=r;var o=J;J|=2;var i=Jd();(me!==e||ye!==t)&&(ht=null,Gn=se()+500,an(e,t));do try{n0();break}catch(s){Hd(e,s)}while(!0);Dl(),ua.current=i,J=o,ue!==null?t=0:(me=null,ye=0,t=de)}if(t!==0){if(t===2&&(o=Bi(e),o!==0&&(r=o,t=dl(e,o))),t===1)throw n=Vr,an(e,0),Ft(e,r),Fe(e,se()),n;if(t===6)Ft(e,r);else{if(o=e.current.alternate,(r&30)===0&&!e0(o)&&(t=pa(e,r),t===2&&(i=Bi(e),i!==0&&(r=i,t=dl(e,i))),t===1))throw n=Vr,an(e,0),Ft(e,r),Fe(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:tn(e,Le,ht);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=ql+500-se(),10<t)){if(qo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vi(tn.bind(null,e,Le,ht),t);break}tn(e,Le,ht);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-rt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rm(r/1960))-r,10<r){e.timeoutHandle=Vi(tn.bind(null,e,Le,ht),r);break}tn(e,Le,ht);break;case 5:tn(e,Le,ht);break;default:throw Error(C(329))}}}return Fe(e,se()),e.callbackNode===n?Wd.bind(null,e):null}function dl(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=pa(e,t),e!==2&&(t=Le,Le=n,t!==null&&pl(t)),e}function pl(e){Le===null?Le=e:Le.push.apply(Le,e)}function e0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!at(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Gl,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Zu(e){if((J&6)!==0)throw Error(C(327));jn();var t=qo(e,0);if((t&1)===0)return Fe(e,se()),null;var n=pa(e,t);if(e.tag!==0&&n===2){var r=Bi(e);r!==0&&(t=r,n=dl(e,r))}if(n===1)throw n=Vr,an(e,0),Ft(e,t),Fe(e,se()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Le,ht),Fe(e,se()),null}function Xl(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Gn=se()+500,xa&&Yt())}}function pn(e){Bt!==null&&Bt.tag===0&&(J&6)===0&&jn();var t=J;J|=1;var n=qe.transition,r=K;try{if(qe.transition=null,K=1,e)return e()}finally{K=r,qe.transition=n,J=t,(J&6)===0&&Yt()}}function Yl(){$e=An.current,Z(An)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tm(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Tl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Vn(),Z(De),Z(Ee),Ol();break;case 5:$l(r);break;case 4:Vn();break;case 13:Z(re);break;case 19:Z(re);break;case 10:Al(r.type._context);break;case 22:case 23:Yl()}n=n.return}if(me=e,ue=e=Vt(e.current,null),ye=$e=t,de=0,Vr=null,Gl=Na=dn=0,Le=Mr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}rn=null}return e}function Hd(e,t){do{var n=ue;try{if(Dl(),$o.current=sa,la){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}la=!1}if(cn=0,fe=ce=oe=null,Er=!1,Wr=0,Kl.current=null,n===null||n.return===null){de=1,Vr=t,ue=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=ye,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=s,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Ou(l);if(g!==null){g.flags&=-257,ju(g,l,s,i,t),g.mode&1&&$u(i,c,t),t=g,u=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(u),t.updateQueue=y}else k.add(u);break e}else{if((t&1)===0){$u(i,c,t),Ql();break e}u=Error(C(426))}}else if(ee&&s.mode&1){var N=Ou(l);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),ju(N,l,s,i,t),Ll(Kn(u,s));break e}}i=u=Kn(u,s),de!==4&&(de=2),Mr===null?Mr=[i]:Mr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Cd(i,u,t);Pu(i,f);break e;case 1:s=u;var d=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Md(i,s,t);Pu(i,x);break e}}i=i.return}while(i!==null)}Kd(n)}catch(w){t=w,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Jd(){var e=ua.current;return ua.current=sa,e===null?sa:e}function Ql(){(de===0||de===3||de===2)&&(de=4),me===null||(dn&268435455)===0&&(Na&268435455)===0||Ft(me,ye)}function pa(e,t){var n=J;J|=2;var r=Jd();(me!==e||ye!==t)&&(ht=null,an(e,t));do try{t0();break}catch(o){Hd(e,o)}while(!0);if(Dl(),J=n,ua.current=r,ue!==null)throw Error(C(261));return me=null,ye=0,de}function t0(){for(;ue!==null;)Vd(ue)}function n0(){for(;ue!==null&&!_f();)Vd(ue)}function Vd(e){var t=qd(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Kd(e):ue=t,Kl.current=null}function Kd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=qm(n,t,$e),n!==null){ue=n;return}}else{if(n=Xm(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ue=null;return}}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);de===0&&(de=5)}function tn(e,t,n){var r=K,o=qe.transition;try{qe.transition=null,K=1,r0(e,t,n,r)}finally{qe.transition=o,K=r}return null}function r0(e,t,n,r){do jn();while(Bt!==null);if((J&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Of(e,i),e===me&&(ue=me=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Do||(Do=!0,Xd(Go,function(){return jn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=qe.transition,qe.transition=null;var l=K;K=1;var s=J;J|=4,Kl.current=null,Qm(e,n),jd(n,e),Em(Hi),Xo=!!Wi,Hi=Wi=null,e.current=n,Zm(n,e,o),Tf(),J=s,K=l,qe.transition=i}else e.current=n;if(Do&&(Do=!1,Bt=e,da=o),i=e.pendingLanes,i===0&&(Ht=null),Df(n.stateNode,r),Fe(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ca)throw ca=!1,e=ul,ul=null,e;return(da&1)!==0&&e.tag!==0&&jn(),i=e.pendingLanes,(i&1)!==0?e===cl?zr++:(zr=0,cl=e):zr=0,Yt(),null}function jn(){if(Bt!==null){var e=Cc(da),t=qe.transition,n=K;try{if(qe.transition=null,K=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,da=0,(J&6)!==0)throw Error(C(331));var o=J;for(J|=4,L=e.current;L!==null;){var i=L,l=i.child;if((L.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var p=L;switch(p.tag){case 0:case 11:case 15:Cr(8,p,i)}var h=p.child;if(h!==null)h.return=p,L=h;else for(;L!==null;){p=L;var v=p.sibling,g=p.return;if(Bd(p),p===c){L=null;break}if(v!==null){v.return=g,L=v;break}L=g}}}var k=i.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}L=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Cr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,L=f;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){l=L;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,L=m;else e:for(l=d;L!==null;){if(s=L,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ba(9,s)}}catch(w){le(s,s.return,w)}if(s===l){L=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,L=x;break e}L=s.return}}if(J=o,Yt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(ma,e)}catch{}r=!0}return r}finally{K=n,qe.transition=t}}return!1}function Ru(e,t,n){t=Kn(n,t),t=Cd(e,t,1),e=Wt(e,t,1),t=ze(),e!==null&&(Kr(e,1,t),Fe(e,t))}function le(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Kn(n,e),e=Md(t,e,1),t=Wt(t,e,1),e=ze(),t!==null&&(Kr(t,1,e),Fe(t,e));break}}t=t.return}}function o0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>se()-ql?an(e,0):Gl|=n),Fe(e,t)}function Gd(e,t){t===0&&((e.mode&1)===0?t=1:(t=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var n=ze();e=bt(e,t),e!==null&&(Kr(e,t,n),Fe(e,n))}function a0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gd(e,n)}function i0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Gd(e,n)}var qd;qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Pe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Pe=!1,Gm(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,ee&&(t.flags&1048576)!==0&&Zc(t,na,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jo(e,t),e=t.pendingProps;var o=Wn(t,Ee.current);On(t,n),o=Ul(null,t,r,e,o,n);var i=Wl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(i=!0,ea(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Il(t),o.updater=wa,t.stateNode=o,o._reactInternals=t,Zi(t,r,e,n),t=tl(null,t,r,!0,i,n)):(t.tag=0,ee&&i&&_l(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=s0(r),e=et(r,e),o){case 0:t=el(null,t,r,e,n);break e;case 1:t=Hu(null,t,r,e,n);break e;case 11:t=Uu(null,t,r,e,n);break e;case 14:t=Wu(null,t,r,et(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),el(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Hu(e,t,r,o,n);case 3:e:{if(Ld(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,od(e,t),aa(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Kn(Error(C(423)),t),t=Ju(e,t,r,n,o);break e}else if(r!==o){o=Kn(Error(C(424)),t),t=Ju(e,t,r,n,o);break e}else for(Oe=Ut(t.stateNode.containerInfo.firstChild),je=t,ee=!0,nt=null,n=nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===o){t=Nt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return ad(t),e===null&&Xi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ji(r,o)?l=null:i!==null&&Ji(r,i)&&(t.flags|=32),Td(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&Xi(t),null;case 13:return Pd(e,t,n);case 4:return Bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),Uu(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(ra,r._currentValue),r._currentValue=l,i!==null)if(at(i.value,l)){if(i.children===o.children&&!De.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Yi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Yi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,On(t,n),o=Xe(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=et(r,t.pendingProps),o=et(r.type,o),Wu(e,t,r,o,n);case 15:return zd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:et(r,o),jo(e,t),t.tag=1,Ae(r)?(e=!0,ea(t)):e=!1,On(t,n),Ed(t,r,o),Zi(t,r,o,n),tl(null,t,r,!0,e,n);case 19:return Dd(e,t,n);case 22:return _d(e,t,n)}throw Error(C(156,t.tag))};function Xd(e,t){return bc(e,t)}function l0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new l0(e,t,n,r)}function Zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s0(e){if(typeof e=="function")return Zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gl)return 11;if(e===yl)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Zl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return ln(n.children,o,i,t);case vl:l=8,o|=8;break;case bi:return e=Ge(12,n,t,o|2),e.elementType=bi,e.lanes=i,e;case Ni:return e=Ge(13,n,t,o),e.elementType=Ni,e.lanes=i,e;case Si:return e=Ge(19,n,t,o),e.elementType=Si,e.lanes=i,e;case ac:return Sa(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rc:l=10;break e;case oc:l=9;break e;case gl:l=11;break e;case yl:l=14;break e;case Pt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ge(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function Sa(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=ac,e.lanes=n,e.stateNode={isHidden:!1},e}function xi(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function ki(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Rl(e,t,n,r,o,i,l,s,u){return e=new u0(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(i),e}function c0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yd(e){if(!e)return Gt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Yc(e,n,t)}return t}function Qd(e,t,n,r,o,i,l,s,u){return e=Rl(n,r,!0,e,o,i,l,s,u),e.context=Yd(null),n=e.current,r=ze(),o=Jt(n),i=xt(r,o),i.callback=t??null,Wt(n,i,o),e.current.lanes=o,Kr(e,o,r),Fe(e,r),e}function Ea(e,t,n,r){var o=t.current,i=ze(),l=Jt(o);return n=Yd(n),t.context===null?t.context=n:t.pendingContext=n,t=xt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,l),e!==null&&(ot(e,o,l,i),Bo(e,o,l)),l}function fa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function es(e,t){ec(e,t),(e=e.alternate)&&ec(e,t)}function d0(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ts(e){this._internalRoot=e}Ca.prototype.render=ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ea(e,t,null,null)};Ca.prototype.unmount=ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Ea(null,e,null,null)}),t[wt]=null}};function Ca(e){this._internalRoot=e}Ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=_c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Lc(e)}};function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tc(){}function p0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=fa(l);i.call(c)}}var l=Qd(t,r,e,0,null,!1,!1,"",tc);return e._reactRootContainer=l,e[wt]=l.current,Br(e.nodeType===8?e.parentNode:e),pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=fa(u);s.call(c)}}var u=Rl(e,0,!1,null,null,!1,!1,"",tc);return e._reactRootContainer=u,e[wt]=u.current,Br(e.nodeType===8?e.parentNode:e),pn(function(){Ea(t,u,n,r)}),u}function za(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=fa(l);s.call(u)}}Ea(t,l,e,o)}else l=p0(n,t,e,o,r);return fa(l)}Mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(wl(t,n|1),Fe(t,se()),(J&6)===0&&(Gn=se()+500,Yt()))}break;case 13:pn(function(){var r=bt(e,1);if(r!==null){var o=ze();ot(r,e,1,o)}}),es(e,1)}};bl=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=ze();ot(t,e,134217728,n)}es(e,134217728)}};zc=function(e){if(e.tag===13){var t=Jt(e),n=bt(e,t);if(n!==null){var r=ze();ot(n,e,t,r)}es(e,t)}};_c=function(){return K};Tc=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};Ai=function(e,t,n){switch(t){case"input":if(Mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ya(r);if(!o)throw Error(C(90));lc(r),Mi(r,o)}}}break;case"textarea":uc(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};vc=Xl;gc=pn;var f0={usingClientEntryPoint:!1,Events:[qr,zn,ya,mc,hc,Xl]},mr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m0={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kc(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(hr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!hr.isDisabled&&hr.supportsFiber))try{ma=hr.inject(m0),ct=hr}catch{}var hr;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ns(t))throw Error(C(200));return c0(e,t,null,n)};He.createRoot=function(e,t){if(!ns(e))throw Error(C(299));var n=!1,r="",o=Zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Rl(e,1,!1,null,null,n,!1,r,o),e[wt]=t.current,Br(e.nodeType===8?e.parentNode:e),new ts(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=kc(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return pn(e)};He.hydrate=function(e,t,n){if(!Ma(t))throw Error(C(200));return za(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!ns(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Zd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Qd(t,null,e,1,n??null,o,!1,i,l),e[wt]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ca(t)};He.render=function(e,t,n){if(!Ma(t))throw Error(C(200));return za(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(C(40));return e._reactRootContainer?(pn(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};He.unstable_batchedUpdates=Xl;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return za(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426"});var np=Zt((Oh,tp)=>{"use strict";function ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ep)}catch(e){console.error(e)}}ep(),tp.exports=Rd()});var op=Zt(rs=>{"use strict";var rp=np();rs.createRoot=rp.createRoot,rs.hydrateRoot=rp.hydrateRoot;var jh});var a=Ss(Ha()),zp=Ss(op()),Da=Date.now();function he(){return Da+=1,Da}var Aa=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function Qn(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(o=>o.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function h0(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function O(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function Qe(e){let[t,n]=e.split(":").map(Number);return t*60+n}function Mt(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function zt(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function os(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Fa(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(O(0)))n=0;else if(t.has(O(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,o=n,i=0,l=!0,s=!1;for(;;)if(t.has(O(o)))r++,i++,!l&&i>=7&&(l=!0,i=0),o-=1;else if(l)l=!1,i=0,s=!0,o-=1;else break;return{streak:r,freezeUsed:s}}function as(e){return Fa(e).streak}var v0=[15,30,45,60,90,120],Rr="tasksh.meta.v1";function eo(e){try{let t=Ie(Rr,{});localStorage.setItem(Rr,JSON.stringify({...t,...e}))}catch{}}function g0(e,t=1){let n=Ie(Rr,{});eo({[e]:(n[e]||0)+t})}var ap="tasksh.achievements.v1",ip="tasksh.wallet.v1",Zr=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:e=>e.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:e=>e.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:e=>e.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:e=>e.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:e=>e.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:e=>e.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:e=>e.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:e=>e.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:e=>e.totalHabits>0&&e.doneToday>=e.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:e=>e.totalRoutines>0&&e.routinesDoneToday>=e.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:e=>e.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:e=>e.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:e=>e.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:e=>e.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:e=>e.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:e=>e.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:e=>e.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:e=>e.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:e=>e.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:e=>e.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:e=>e.coins>=1e3}];function _p(e){return Zr.find(t=>t.id===e)}function y0(e,t){let n=new Set(t),r=[];for(let o of Zr){if(n.has(o.id))continue;let i=!1;try{i=!!o.test(e)}catch{i=!1}i&&r.push(o.id)}return r}var x0=e=>20+e*5;function k0(e){let[t,n]=(0,a.useState)(()=>Ie(ap,[])),[r,o]=(0,a.useState)(()=>Ie(ip,{coins:0})),[i,l]=(0,a.useState)([]);(0,a.useEffect)(()=>{try{localStorage.setItem(ap,JSON.stringify(t))}catch{}},[t]),(0,a.useEffect)(()=>{try{localStorage.setItem(ip,JSON.stringify(r))}catch{}},[r]),(0,a.useEffect)(()=>{let c=y0({...e,coins:r.coins},t);if(!c.length)return;n(h=>[...h,...c]),l(h=>[...h,...c]);let p=c.reduce((h,v)=>h+(_p(v)?.coins||0),0);p&&o(h=>({...h,coins:h.coins+p}))},[e,t,r.coins]);let s=(0,a.useCallback)(c=>o(p=>({...p,coins:Math.max(0,p.coins+c)})),[]),u=(0,a.useCallback)(()=>l(c=>c.slice(1)),[]);return{earned:t,wallet:r,coins:r.coins,queue:i,current:i[0]||null,shift:u,addCoins:s}}var Qt={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},lp="tasksh.pet.v1",yn=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:3,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:6,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:10,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:14,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:17,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:20,name:"Aurelis",title:"legendary guardian",scale:1.06}];function La(e){let t=yn[0];for(let n of yn)e>=n.minLevel&&(t=n);return t}function Pa(e){return yn.find(t=>t.minLevel>e)||null}var sp={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},vn=e=>Math.max(0,Math.min(100,Math.round(e)));function up(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let o=i=>r*i;return{...e,happiness:vn(e.happiness-o(.55)),energy:vn(e.energy-o(.75)),friendship:vn(e.friendship-o(.12)),intelligence:e.intelligence,lastTick:t}}var w0={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function is(e,t){let n=w0[t];return n?{...e,happiness:vn(e.happiness+(n.happiness||0)),energy:vn(e.energy+(n.energy||0)),friendship:vn(e.friendship+(n.friendship||0)),intelligence:vn(e.intelligence+(n.intelligence||0))}:e}function ds(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function Tp(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function Et(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function b0(e){let{pet:t,level:n,hour:r,doneToday:o,totalToday:i,streak:l,phase:s}=e,u=ds(t),c=Math.floor(Date.now()/36e5);return t.energy<22?Et(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],c):i>0&&o===i?Et([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],c):l>=7?Et([`${l} days running. that's a habit now, not an effort.`,`${l} in a row. the hard part's behind you.`],c):o===0&&r>=14?Et(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],c):s==="night"&&r>=23?Et(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],c):s==="morning"?Et(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],c):u.key==="joyful"?Et(["good day so far. i can tell.","you're in a rhythm. keep it easy."],c):t.friendship<15?"still getting to know you. tell me something.":Et([`${o} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],c)}function N0(e){let{pet:t,level:n,doneToday:r,totalToday:o,streak:i,routineNow:l,nextRoutine:s}=e,u=ds(t);return[`pet: ${t.name}, ${yn[t.stage].name} form, mood ${u.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${Tp(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${o} habits done today, best streak ${i}`,l?`right now: ${l}`:"no routine running",s?`next up: ${s}`:""].filter(Boolean).join("; ")}function S0(e,t){let[n,r]=(0,a.useState)(()=>{let p=Ie(lp,null),h=p?{...sp,...p}:{...sp,born:Date.now(),lastTick:Date.now()};return up(h,Date.now())}),[o,i]=(0,a.useState)(null);(0,a.useEffect)(()=>{try{localStorage.setItem(lp,JSON.stringify(n))}catch{}},[n]),(0,a.useEffect)(()=>{let p=setInterval(()=>r(h=>up(h,Date.now())),3e5);return()=>clearInterval(p)},[]);let l=(0,a.useMemo)(()=>La(e),[e]);(0,a.useEffect)(()=>{if(l.stage>n.stage){let p=n.stage;i({from:p,to:l.stage}),r(h=>is({...h,stage:l.stage},"levelUp")),B.success()}else l.stage<n.stage&&r(p=>({...p,stage:l.stage}))},[l.stage,n.stage]);let s=(0,a.useCallback)(p=>{r(h=>is(h,p))},[]);(0,a.useEffect)(()=>Qt.on(p=>r(h=>is(h,p))),[]);let u=(0,a.useCallback)(p=>{let h=String(p||"").trim().slice(0,14);h&&r(v=>({...v,name:h}))},[]),c=(0,a.useCallback)((p,h)=>{r(v=>({...v,chats:p==="user"?v.chats+1:v.chats,log:[...v.log||[],{role:p,text:String(h).slice(0,240)}].slice(-8)}))},[]);return{pet:n,form:l,mood:ds(n),evolution:o,clearEvolution:()=>i(null),nudge:s,rename:u,remember:c}}var ss=a.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:o=!0,evolving:i=!1}){let l=Math.max(0,Math.min(6,t)),s=25+l*1.9,u=22-l*.55,c=78+l*.9,p=c-s*.8-u*.62-(l>=3?5:0),h=4.6-l*.3,v=Math.min(6+l*5.2,Math.max(4,p-u-9)),g=9+l*1.1,k=9+l*5.4,y=33+l*5.2,N=l>=3,f=l>=4,d=l>=6,m=l>=5,x=l>=2?Math.min(4,l-1):0,w=n==="sleepy"||n==="tired",b=n==="joyful",E=n==="low"||n==="drained",T=w?.9:h*(b?1.16:1)*2,$=E?`M 56 ${p+9} q 8 -5 16 0`:b?`M 55 ${p+6} q 9 8 18 0`:`M 57 ${p+7} q 7 4 14 0`;return a.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${o?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":yn[l].scale},role:"img","aria-label":`${yn[l].name}, ${n}`},a.default.createElement("defs",null,a.default.createElement("radialGradient",{id:`pg-body-${l}`,cx:"38%",cy:"30%"},a.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),a.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),a.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),a.default.createElement("radialGradient",{id:`pg-aura-${l}`,cx:"50%",cy:"50%"},a.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),a.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),a.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),a.default.createElement("circle",{className:"pet-aura",cx:"64",cy:c-8,r:y,fill:`url(#pg-aura-${l})`}),f&&a.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},a.default.createElement("path",{d:`M ${64-s*.75} ${c-8} q -${16+l*2} -${12+l*2} -${5+l} 8 q 4 9 21 5 Z`}),a.default.createElement("path",{d:`M ${64+s*.75} ${c-8} q ${16+l*2} -${12+l*2} ${5+l} 8 q -4 9 -21 5 Z`})),a.default.createElement("path",{className:"pet-tail",d:`M ${64+s*.85} ${c} q ${k} 2 ${k*.9} -${k*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),l>=3&&a.default.createElement("circle",{cx:64+s*.85+k*.9,cy:c-k*.85,r:2.4+l*.35,fill:"var(--accent2)",className:"pet-tailtip"}),N&&a.default.createElement("rect",{x:"59",y:p+u-5,width:"10",height:Math.max(0,c-s*.7-p-u+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),m&&a.default.createElement("g",{opacity:"0.8"},[0,1,2].map(P=>a.default.createElement("path",{key:P,d:`M ${64-s*.72+P*3} ${c-6-P*7} l -${6+P} -${5+P*2} l ${9+P} ${1+P} Z`,fill:"var(--accent2)"}))),a.default.createElement("g",{className:"pet-body"},a.default.createElement("ellipse",{cx:"64",cy:c,rx:s,ry:s*.86,fill:`url(#pg-body-${l})`}),a.default.createElement("ellipse",{cx:"64",cy:c+2,rx:s*.56,ry:s*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:x}).map((P,A)=>a.default.createElement("circle",{key:A,cx:50+A*14,cy:68+A%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),a.default.createElement("ellipse",{cx:64-s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),a.default.createElement("ellipse",{cx:64+s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),a.default.createElement("g",{className:"pet-head"},a.default.createElement("path",{d:`M ${64-g} ${p-u*.72}
                  q -3 -${v} 3 -${v*1.25}
                  q 5 ${v*.45} 4 ${v*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),a.default.createElement("path",{d:`M ${64+g} ${p-u*.72}
                  q 3 -${v} -3 -${v*1.25}
                  q -5 ${v*.45} -4 ${v*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),d&&a.default.createElement("g",{className:"pet-crown"},a.default.createElement("path",{d:`M 51 ${p-u+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),a.default.createElement("circle",{cx:"64",cy:p-u-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),a.default.createElement("circle",{cx:"64",cy:p,r:u,fill:`url(#pg-body-${l})`}),w?a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:`M ${64-8.5} ${p} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),a.default.createElement("path",{d:`M ${64+.5} ${p} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):a.default.createElement("g",{className:"pet-eyes"},a.default.createElement("ellipse",{cx:64-7.5,cy:p,rx:h,ry:T/2,fill:"var(--bg)"}),a.default.createElement("ellipse",{cx:64+7.5,cy:p,rx:h,ry:T/2,fill:"var(--bg)"}),a.default.createElement("circle",{cx:64-6.2,cy:p-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),a.default.createElement("circle",{cx:64+8.8,cy:p-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),a.default.createElement("path",{d:$,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),b&&a.default.createElement(a.default.Fragment,null,a.default.createElement("ellipse",{cx:49,cy:p+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),a.default.createElement("ellipse",{cx:79,cy:p+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),l>=1&&a.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,l)}).map((P,A)=>a.default.createElement("circle",{key:A,cx:"64",cy:c-8-y,r:1.6+A*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${c-8}px`,transform:`rotate(${A*(360/Math.min(4,l))}deg)`}}))))}),Zn=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],cp=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function dp(e){for(let t of cp)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return cp[2]}function E0(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var pp=a.default.memo(function({theme:t,phase:n,calm:r,scoped:o=!1}){let i=t.ambient.particle,l=o?"amb-layer amb-scoped":"amb-layer",s=(0,a.useMemo)(()=>i==="none"?[]:Array.from({length:i==="aurora"?16:i==="embers"?14:18},(p,h)=>{let v=i==="bubbles"?3+h%4*2:2+h%3;return{left:`${(h*37+11)%100}%`,size:v,delay:`${-(h*2.3)%26}s`,dur:`${(i==="bubbles"?20:30)+h%7*4}s`}}),[i]),u=(0,a.useMemo)(()=>n.stars?Array.from({length:34},(c,p)=>({left:`${(p*29+7)%100}%`,top:`${(p*53+13)%62}%`,delay:`${p%9*.7}s`,dur:`${2.6+p%5*.8}s`})):[],[n.stars]);return a.default.createElement(a.default.Fragment,null,o&&a.default.createElement("div",{className:`${l} amb-blobs`}),a.default.createElement("div",{className:`${l} amb-time`},a.default.createElement("div",{className:"amb-ray"})),u.length>0&&a.default.createElement("div",{className:`${l} amb-stars`},u.map((c,p)=>a.default.createElement("span",{key:p,style:{left:c.left,top:c.top,animationDelay:c.delay,animationDuration:c.dur}}))),s.length>0&&a.default.createElement("div",{className:`${l} amb-dust`},s.map((c,p)=>a.default.createElement("span",{key:p,style:{left:c.left,bottom:"-6vh",width:c.size,height:c.size,animationDelay:c.delay,animationDuration:c.dur}}))),a.default.createElement("div",{className:`${l} amb-grain`}),r&&a.default.createElement("div",{className:"calm-breath"}))}),fp="tasksh.calm.v1";function C0(e){let[t,n]=(0,a.useState)(()=>{try{return localStorage.getItem(mp)||_a}catch{return _a}}),[r,o]=(0,a.useState)(()=>{try{return localStorage.getItem(fp)==="1"}catch{return!1}}),[i,l]=(0,a.useState)(()=>dp(Qn().hour)),s=(0,a.useMemo)(()=>M0(t),[t]);(0,a.useEffect)(()=>{!us(s,e)&&s.id!==_a&&n(_a)},[s,e]),(0,a.useEffect)(()=>{z0(s);try{localStorage.setItem(mp,s.id)}catch{}},[s]),(0,a.useEffect)(()=>{E0(i)},[i]),(0,a.useEffect)(()=>{let c=setInterval(()=>{let p=dp(Qn().hour);l(h=>h.id===p.id?h:p)},12e4);return()=>clearInterval(c)},[]),(0,a.useEffect)(()=>{let c=document.documentElement;c.style.setProperty("--calm",r?"1":"0"),c.style.setProperty("--motion-scale",r?"1.9":"1"),c.classList.toggle("calm-mode",r);try{localStorage.setItem(fp,r?"1":"0")}catch{}},[r]);let u=(0,a.useMemo)(()=>Zn.filter(c=>us(c,e)),[e]);return{theme:s,themeId:t,setThemeId:n,themes:Zn,unlocked:u,phase:i,calm:r,setCalm:o}}var _a="terminal",mp="tasksh.theme.v1";function M0(e){return Zn.find(t=>t.id===e)||Zn[0]}function us(e,t){return t>=e.unlockLevel}function z0(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((o,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${o[0]}, ${o[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var Lp="tasksh.sound.v1",Yr=null;function _0(){if(!Yr){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;Yr=new e}return Yr.state==="suspended"&&Yr.resume(),Yr}function Pp(){try{let e=localStorage.getItem(Lp);return e===null?!0:e==="1"}catch{return!0}}function T0(e){try{localStorage.setItem(Lp,e?"1":"0")}catch{}}function hn(e){if(!Pp())return;let t=_0();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:o=0,dur:i=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),c=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+o),c.gain.setValueAtTime(1e-4,n+o),c.gain.exponentialRampToValueAtTime(s,n+o+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+o+i),u.connect(c),c.connect(t.destination),u.start(n+o),u.stop(n+o+i+.02)})}var B={click:()=>hn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>hn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>hn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>hn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>hn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>hn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function L0(){let[e,t]=(0,a.useState)(Pp());return[e,()=>{let r=!e;t(r),T0(r),r&&hn([{freq:720,dur:.05,gain:.04}])}]}function P0(e,t=550){let[n,r]=(0,a.useState)(e),o=(0,a.useRef)(e),i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let l=o.current,s=e;if(l===s)return;let u=performance.now(),c=h=>1-Math.pow(1-h,3),p=h=>{let v=h-u,g=Math.min(1,v/t),k=c(g);r(Math.round(l+(s-l)*k)),g<1?i.current=requestAnimationFrame(p):o.current=s};return i.current=requestAnimationFrame(p),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function Ct({value:e,className:t,suffix:n=""}){let r=P0(e);return a.default.createElement("span",{className:t},r,n)}function D0({axes:e,size:t=220,maxValue:n}){let[r,o]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let N=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(N)},[]);let i=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),c=n??Math.max(1,...e.map(N=>N.value)),p=N=>Math.PI*2*N/i-Math.PI/2,h=(N,f)=>{let d=p(N);return[l+Math.cos(d)*u*f,s+Math.sin(d)*u*f]},v=i>6?46:22,g=[.25,.5,.75,1],y=e.map((N,f)=>h(f,r?Math.max(.04,N.value/c):.02)).map((N,f)=>`${f===0?"M":"L"}${N[0].toFixed(1)},${N[1].toFixed(1)}`).join(" ")+"Z";return a.default.createElement("svg",{viewBox:`${-v} 0 ${t+v*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},g.map((N,f)=>{let m=e.map((x,w)=>h(w,N)).map((x,w)=>`${w===0?"M":"L"}${x[0].toFixed(1)},${x[1].toFixed(1)}`).join(" ")+"Z";return a.default.createElement("path",{key:f,d:m,className:"radar-ring"})}),e.map((N,f)=>{let d=h(f,1);return a.default.createElement("line",{key:f,x1:l,y1:s,x2:d[0],y2:d[1],className:"radar-spoke"})}),a.default.createElement("path",{d:y,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((N,f)=>{let d=h(f,1.19),m=h(f,r?Math.max(.04,N.value/c):.02),x=Math.cos(p(f)),w=x>.25?"start":x<-.25?"end":"middle";return a.default.createElement("g",{key:N.key||f},a.default.createElement("circle",{cx:m[0],cy:m[1],r:i>6?2.8:3.5,fill:N.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),a.default.createElement("text",{x:d[0],y:d[1],textAnchor:w,dominantBaseline:"middle",className:"radar-label"},N.label))}))}function ps({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:o="#1E2228",label:i,sublabel:l}){let[s,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let y=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(y)},[]);let c=t/2-n,p=2*Math.PI*c,h=Math.max(0,Math.min(100,e)),v=p-(s?h/100:0)*p,g=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return a.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},a.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},a.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:o,strokeWidth:n}),a.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:p,strokeDashoffset:v,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),a.default.createElement("div",{className:"radial-progress-center"},i&&a.default.createElement("span",{className:"radial-progress-label",style:{fontSize:g}},i),l&&a.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function Dp({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:o}){let[i,l]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let v=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(v)},[]);let s=t/2-n/2,u=2*Math.PI*s,c=Math.max(1e-6,e.reduce((v,g)=>v+Math.max(0,g.value),0)),p=0,h=e.map(v=>{let g=Math.max(0,v.value),k=g/c,y=i?k*u:0,N=u-y,f=p/c*360;return p+=g,{...v,dash:y,gap:N,rotation:f,frac:k}});return a.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},a.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},a.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),h.map((v,g)=>a.default.createElement("circle",{key:v.key||g,cx:t/2,cy:t/2,r:s,fill:"none",stroke:v.color,strokeWidth:n,strokeDasharray:`${v.dash} ${v.gap}`,strokeDashoffset:0,transform:`rotate(${v.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:h.length>1?"butt":"round"}))),a.default.createElement("div",{className:"donut-center"},r!==void 0&&a.default.createElement("span",{className:"donut-center-label"},r),o&&a.default.createElement("span",{className:"donut-center-sublabel"},o)))}function A0({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],o=0,i=t*7,l=Array.from({length:i},(p,h)=>o-(i-1-h)),s=Math.max(1,...l.map(p=>e[O(p)]||0)),u=[];for(let p=0;p<t;p++)u.push(l.slice(p*7,p*7+7));let c=p=>{if(!p)return 0;let h=p/s;return h>.75?4:h>.5?3:h>.25?2:1};return a.default.createElement("div",{className:"heatmap-wrap"},a.default.createElement("div",{className:"heatmap-grid"},u.map((p,h)=>a.default.createElement("div",{className:"heatmap-col",key:h},p.map((v,g)=>{let k=O(v),y=e[k]||0,N=c(y);return a.default.createElement("span",{key:g,className:`heatmap-cell ${v===0?"today":""}`,style:{background:r[N],animationDelay:`${(h*7+g)*4}ms`},title:`${k}: ${y} completed`})})))),a.default.createElement("div",{className:"heatmap-legend"},a.default.createElement("span",null,"less"),r.map((p,h)=>a.default.createElement("span",{key:h,className:"heatmap-legend-cell",style:{background:p}})),a.default.createElement("span",null,"more")))}function F0(e){let t=[],n=[];for(let r of e){let o=t.findIndex(i=>r.start>=i);o===-1?(o=t.length,t.push(r.end)):t[o]=r.end,n.push({...r,lane:o})}return{placed:n,laneCount:Math.max(1,t.length)}}function I0({routines:e,nowMinutes:t,doneToday:n=0}){let[r,o]=(0,a.useState)(!1),[i,l]=(0,a.useState)(0),[s,u]=(0,a.useState)(0),c=(0,a.useRef)(null),p=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let z=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(z)},[]),(0,a.useEffect)(()=>{if(!c.current)return;let z=c.current,D=new ResizeObserver(ie=>{for(let Te of ie)l(Te.contentRect.width)});return D.observe(z),l(z.getBoundingClientRect().width),()=>D.disconnect()},[]);let h=1440,v=O(0),g=e.map(z=>{let D=Qe(z.time);return{r:z,start:D,end:D+Math.max(1,z.duration)}}),{placed:k,laneCount:y}=F0(g),f=Math.max(i,24*82),d=f/h,m=f>i+1,x=t*d;(0,a.useEffect)(()=>{if(!c.current||!i||p.current)return;if(!m){p.current=!0;return}let z=c.current,D=Math.max(0,Math.min(x-i/2,f-i));z.scrollTo({left:D,behavior:"auto"}),p.current=!0},[i,x,f,m]),(0,a.useEffect)(()=>{let z=c.current;if(!z)return;let D=0,ie=()=>{D||(D=requestAnimationFrame(()=>{u(z.scrollLeft),D=0}))};return z.addEventListener("scroll",ie,{passive:!0}),u(z.scrollLeft),()=>{z.removeEventListener("scroll",ie),cancelAnimationFrame(D)}},[i]);let w=()=>{let z=c.current;z&&(z.scrollTo({left:Math.max(0,Math.min(x-i/2,f-i)),behavior:"smooth"}),B.click())},b=38,E=6,T=8,$=T*2+y*b+(y-1)*E,P=d*60>=40?1:3,A=[];for(let z=0;z<=24;z+=P)A.push(z);let j=z=>{let D=z%24;return D===0?"12a":D===12?"12p":D>12?`${D-12}p`:`${D}a`},S=e.length,F=S?Math.round(n/S*100):0;return a.default.createElement("div",{className:"timeline-wrap"},a.default.createElement("div",{className:"timeline-head"},a.default.createElement("div",{className:"timeline-head-left"},a.default.createElement("span",{className:"timeline-title"},"today's schedule"),S>0&&a.default.createElement("span",{className:"timeline-count"},n,"/",S," done")),m&&a.default.createElement("button",{className:"timeline-jump",onClick:w,title:"Jump to now"},"now")),S>0&&a.default.createElement("div",{className:"timeline-progress"},a.default.createElement("div",{className:"timeline-progress-fill",style:{width:r?`${F}%`:"0%"}})),a.default.createElement("div",{className:"timeline-scroll",ref:c},a.default.createElement("div",{className:"timeline-inner",style:{width:f}},a.default.createElement("div",{className:"timeline-hours"},A.map(z=>a.default.createElement("div",{key:z,className:"timeline-hour",style:{left:z*60*d}},a.default.createElement("span",null,j(z))))),a.default.createElement("div",{className:"timeline-track",style:{height:$}},a.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*d}}),a.default.createElement("div",{className:"timeline-night",style:{left:1320*d,width:120*d}}),A.map(z=>a.default.createElement("div",{key:z,className:`timeline-gridline ${z%6===0?"major":""}`,style:{left:z*60*d}})),a.default.createElement("div",{className:"timeline-elapsed",style:{width:r?x:0}}),k.map(({r:z,start:D,lane:ie},Te)=>{let H=D*d,R=Math.max(1,z.duration)*d,ve=Math.max(4,Math.min(R,f-H)),pe=(z.history||[]).includes(v),Be=Yn(z.id),ft=Math.max(H,s),mt=Math.min(H+ve,s+i),U=Math.max(0,mt-ft)>38,te=Math.max(0,Math.min(s-H,ve-46)),V=t>=D&&t<D+z.duration;return a.default.createElement("div",{key:z.id,className:`timeline-block ${pe?"done":""} ${V?"active":""}`,style:{left:H,top:T+ie*(b+E),width:r?ve:0,height:b,transitionDelay:`${Math.min(Te*18,260)}ms`,background:pe?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${Be}, ${Be}C4)`,boxShadow:pe?"none":`0 2px 10px ${Be}44`},title:`${z.label} \xB7 ${Mt(D)} \xB7 ${zt(z.duration)}${pe?" \xB7 done":""}`},U&&a.default.createElement("span",{className:"timeline-block-label",style:te>0?{paddingLeft:te+8}:void 0},pe&&a.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),z.label))}),a.default.createElement("div",{className:"timeline-now",style:{left:x}})))),m&&a.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var B0=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[O(-1),O(-2),O(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[O(-1),O(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[O(0),O(-1),O(-2),O(-3),O(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[O(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function fs(){let[e,t]=(0,a.useState)(Qn());return(0,a.useEffect)(()=>{let n=setInterval(()=>t(Qn()),1e3);return()=>clearInterval(n)},[]),e}function ms(e,t){return(0,a.useMemo)(()=>{let n=[...e].sort((i,l)=>Qe(i.time)-Qe(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&Qe(n[i].time)<=t;i++)r=i;let o=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[o].id}},[e,t])}function $0({routine:e,status:t,index:n,onDelete:r,onToggleToday:o,onSave:i}){let l=Qe(e.time),s=l+e.duration,{streak:u,freezeUsed:c}=Fa(e.history),p=(e.history||[]).includes(O(0)),[h,v]=(0,a.useState)(0),g=(0,a.useRef)(!1),k=(0,a.useRef)(0),y=(0,a.useRef)(0),N=(0,a.useRef)(null),f=(0,a.useRef)(!1),[d,m]=(0,a.useState)(!1),[x,w]=(0,a.useState)(!1),[b,E]=(0,a.useState)(e.label),[T,$]=(0,a.useState)(e.time),[P,A]=(0,a.useState)(e.duration),[j,S]=(0,a.useState)(e.alternatives||[]),F=()=>{E(e.label),$(e.time),A(e.duration),S(e.alternatives||[]),w(!0)},z=()=>{let H=b.trim();H&&(i(e.id,{label:H,time:T||e.time,duration:Math.max(5,+P||e.duration),alternatives:j.map(R=>R.trim()).filter(Boolean)}),w(!1))},D=H=>{x||(g.current=!0,f.current=!1,N.current=null,k.current=H.clientX,y.current=H.clientY)},ie=H=>{if(!g.current)return;let R=H.clientX-k.current,ve=H.clientY-y.current;if(N.current===null){if(Math.abs(R)<6&&Math.abs(ve)<6)return;if(N.current=Math.abs(R)>Math.abs(ve)?"x":"y",N.current==="y"){g.current=!1;return}}N.current==="x"&&(Math.abs(R)>4&&(f.current=!0),v(Math.max(-120,Math.min(0,R))))},Te=()=>{g.current&&(g.current=!1,h<-70?(m(!0),setTimeout(()=>r(e.id),200)):(v(0),f.current||F()))};return a.default.createElement("div",{className:`routine-row-wrap ${d?"removing":""}`,style:{animationDelay:`${n*35}ms`}},a.default.createElement("div",{className:"routine-delete-bg"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),a.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${h}px)`,transition:g.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${p?"#2A2F36":Yn(e.id)}`},onPointerDown:D,onPointerMove:ie,onPointerUp:Te,onPointerLeave:Te,onPointerCancel:Te},a.default.createElement("div",{className:"routine-line"},a.default.createElement("span",{className:`routine-node ${p?"quest-done":""}`}),a.default.createElement("span",{className:"routine-connector"})),x?a.default.createElement("div",{className:"routine-edit",onPointerDown:H=>H.stopPropagation()},a.default.createElement("input",{className:"edit-label",value:b,onChange:H=>E(H.target.value),onKeyDown:H=>H.key==="Enter"&&z(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"time",className:"time-input",value:T,onChange:H=>$(H.target.value)}),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:P,onChange:H=>A(H.target.value)}),a.default.createElement("span",{className:"edit-unit"},"min")),a.default.createElement("div",{className:"alt-composer"},a.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),j.map((H,R)=>a.default.createElement("div",{className:"alt-composer-row",key:R},a.default.createElement("input",{type:"text",placeholder:`alternative ${R+1}`,value:H,onChange:ve=>{let pe=[...j];pe[R]=ve.target.value,S(pe)},onKeyDown:ve=>ve.key==="Enter"&&z()}),a.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>S(j.filter((ve,pe)=>pe!==R)),"aria-label":"Remove alternative"},"\xD7"))),a.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>S([...j,""])},"+ another option")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>w(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:z},"save"))):a.default.createElement("div",{className:"routine-main"},a.default.createElement("div",{className:"routine-top"},a.default.createElement("span",{className:"routine-time"},Mt(l)),t==="current"&&a.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&a.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,c&&a.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),a.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&a.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),a.default.createElement("span",{className:"routine-span"},Mt(l)," \u2013 ",Mt(s)," \xB7 ",zt(e.duration)))))}function O0({routines:e,setRoutines:t}){let n=fs(),r=n.hour*60+n.minute,{sorted:o,currentId:i,nextId:l}=ms(e,r),s=o.find(S=>S.id===i),u=o.find(S=>S.id===l),[c,p]=(0,a.useState)(""),[h,v]=(0,a.useState)(()=>os(r)),[g,k]=(0,a.useState)(30),[y,N]=(0,a.useState)(!1),[f,d]=(0,a.useState)([]),[m,x]=(0,a.useState)(!1),w=()=>{let S=c.trim();if(!S){N(!0),setTimeout(()=>N(!1),420),B.error();return}let F=h||os(r),z=f.map(D=>D.trim()).filter(Boolean);t(D=>[...D,{id:he(),time:F,label:S,duration:Math.max(5,+g||30),history:[],alternatives:z}]),p(""),v(os(r)),k(30),d([]),x(!1),B.click()},b=S=>{t(F=>F.filter(z=>z.id!==S)),B.delete()},E=S=>{let F=O(0),z=!(e.find(D=>D.id===S)?.history||[]).includes(F);t(D=>D.map(ie=>{if(ie.id!==S)return ie;let H=(ie.history||[]).includes(F)?ie.history.filter(R=>R!==F):[...ie.history||[],F];return{...ie,history:H.slice(-60)}})),z?(B.success(),Qt.emit("routineDone")):B.click()},T=(S,F)=>t(z=>z.map(D=>D.id===S?{...D,...F}:D)),$=s?Qe(s.time)+s.duration:0,P=u?(Qe(u.time)-r+1440)%1440||1440:0,A=O(0),j=o.filter(S=>(S.history||[]).includes(A)).length;return a.default.createElement("div",{className:"task-list routine-list"},a.default.createElement("div",{className:"hero-card"},a.default.createElement("div",{className:"hero-clock-row"},a.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),a.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),a.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),a.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),a.default.createElement("span",{className:"hero-date"},h0()),a.default.createElement("div",{className:"hero-divider"}),s?a.default.createElement("div",{className:"hero-current"},a.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),a.default.createElement("div",{className:"hero-current-name"},a.default.createElement("span",{className:"pulse-dot"}),s.label),a.default.createElement("span",{className:"hero-sub"},"until ",Mt($)," \xB7 next: ",u?.label," in ",zt(P))):a.default.createElement("span",{className:"hero-sub"},"no routines yet")),a.default.createElement(I0,{routines:o,nowMinutes:r,doneToday:j}),a.default.createElement("div",{className:`composer ${y?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new routine...",value:c,onChange:S=>p(S.target.value),onKeyDown:S=>S.key==="Enter"&&w()}),a.default.createElement("input",{type:"time",className:"time-input",value:h,onChange:S=>v(S.target.value)}),a.default.createElement("button",{type:"button",className:`alt-toggle-btn ${m?"active":""}`,onClick:()=>x(S=>!S),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),a.default.createElement("button",{className:"add-btn",onClick:w,"aria-label":"Add routine"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),m&&a.default.createElement("div",{className:"alt-composer"},a.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),f.map((S,F)=>a.default.createElement("div",{className:"alt-composer-row",key:F},a.default.createElement("input",{type:"text",placeholder:`alternative ${F+1}, e.g. "Drawing"`,value:S,onChange:z=>{let D=[...f];D[F]=z.target.value,d(D)},onKeyDown:z=>z.key==="Enter"&&w()}),a.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>d(f.filter((z,D)=>D!==F)),"aria-label":"Remove alternative"},"\xD7"))),a.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>d([...f,""])},"+ another option")),a.default.createElement("div",{className:"duration-chips"},v0.map(S=>a.default.createElement("button",{key:S,className:g===S?"active":"",onClick:()=>k(S)},zt(S))),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:g,onChange:S=>k(+S.target.value||5)})),o.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):o.map((S,F)=>a.default.createElement($0,{key:S.id,routine:S,index:F,status:S.id===i?"current":S.id===l?"next":"idle",onDelete:b,onToggleToday:E,onSave:T})))}function j0(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,o=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:o,monthLabel:i}}function U0(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function Ap(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(O(r))&&n++;return n}function W0(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(O(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var H0=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[O(0),O(-1),O(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[O(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[O(0)]}],J0=[{id:1,name:"Notion Template",dueDate:O(7),tasks:[{id:he(),text:"Design layout",done:!0},{id:he(),text:"Write docs",done:!1},{id:he(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:O(7),tasks:[{id:he(),text:"Script draft",done:!1},{id:he(),text:"Record",done:!1}]}];function V0({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:o}=j0(),i=new Set(e||[]),l=O(0),s=Array.from({length:r},(u,c)=>c+1);return a.default.createElement("div",{className:"month-grid-wrap"},a.default.createElement("span",{className:"month-grid-label"},o),a.default.createElement("div",{className:"month-grid"},s.map(u=>{let c=U0(t,n,u);return a.default.createElement("span",{key:u,className:`month-cell ${i.has(c)?"filled":""} ${c===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:c})})))}function K0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),{streak:i,freezeUsed:l}=Fa(e.history),s=Ap(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[c,p]=(0,a.useState)(!1),[h,v]=(0,a.useState)(e.icon),[g,k]=(0,a.useState)(e.label),[y,N]=(0,a.useState)(e.weeklyGoal),f=()=>{v(e.icon),k(e.label),N(e.weeklyGoal),p(!0)},d=()=>{let m=g.trim();m&&(r(e.id,{icon:h.trim()||e.icon,label:m,weeklyGoal:Math.max(1,Math.min(7,+y||e.weeklyGoal))}),p(!1))};return c?a.default.createElement("div",{className:"vault-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{className:"duration-input",style:{width:44},value:h,onChange:m=>v(m.target.value),maxLength:2}),a.default.createElement("input",{className:"edit-label",style:{flex:1},value:g,onChange:m=>k(m.target.value),onKeyDown:m=>m.key==="Enter"&&d(),autoFocus:!0})),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:y,onChange:m=>N(m.target.value)}),a.default.createElement("span",{className:"edit-unit"},"x / week")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>p(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:d},"save")))):a.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${Yn(e.id)}`}},a.default.createElement("div",{className:"vault-card-top"},a.default.createElement("span",{className:"vault-card-icon",style:{color:Yn(e.id)}},e.icon),a.default.createElement("div",{className:"vault-card-title"},a.default.createElement("span",{className:"vault-card-label"},e.label),a.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),a.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),a.default.createElement(V0,{history:e.history}),a.default.createElement("div",{className:"vault-card-bottom"},a.default.createElement("div",{className:"vault-card-ring-row"},a.default.createElement(ps,{pct:u,size:34,stroke:3.5,color:Yn(e.id)}),a.default.createElement("span",{className:"vault-card-pct"},u,"% ",a.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&a.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,l&&a.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),a.default.createElement("button",{className:`vault-check ${o?"done":""}`,onClick:()=>t(e.id)},o?"\u2713 completed today":"mark complete today"))}function G0({habits:e,setHabits:t}){let[n,r]=(0,a.useState)(""),[o,i]=(0,a.useState)(7),[l,s]=(0,a.useState)(!1),u=()=>{let v=n.trim();if(!v){s(!0),setTimeout(()=>s(!1),420),B.error();return}t(g=>[...g,{id:he(),icon:"\u25C6",label:v,weeklyGoal:o,history:[]}]),r(""),i(7),B.click()},c=v=>{t(g=>g.filter(k=>k.id!==v)),B.delete()},p=(v,g)=>t(k=>k.map(y=>y.id===v?{...y,...g}:y)),h=v=>{let g=O(0),k=!(e.find(y=>y.id===v)?.history||[]).includes(g);t(y=>y.map(N=>{if(N.id!==v)return N;let d=(N.history||[]).includes(g)?N.history.filter(m=>m!==g):[...N.history||[],g];return{...N,history:d.slice(-370)}})),k?(B.success(),Qt.emit("vaultDone")):B.click()};return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"HABIT-STREAK-TRACKING")),a.default.createElement("div",{className:"vault-grid"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(v=>a.default.createElement(K0,{key:v.id,habit:v,onToggleToday:h,onDelete:c,onSave:p}))),a.default.createElement("div",{className:`composer ${l?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:v=>r(v.target.value),onKeyDown:v=>v.key==="Enter"&&u()}),a.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(v=>a.default.createElement("button",{key:v,className:o===v?"active":"",onClick:()=>i(v)},v,"x/wk"))))}function q0({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:o}){let[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(t.text),c=()=>{let p=s.trim();p&&o(e,t.id,p),l(!1)};return i?a.default.createElement("div",{className:"project-task-row"},a.default.createElement("input",{className:"project-task-edit",value:s,onChange:p=>u(p.target.value),onKeyDown:p=>p.key==="Enter"&&c(),onBlur:c,autoFocus:!0})):a.default.createElement("div",{className:"project-task-row"},a.default.createElement($p,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),a.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),a.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function X0({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:o,onEditTask:i,onSave:l}){let[s,u]=(0,a.useState)(""),c=e.tasks.length,p=e.tasks.filter(b=>b.done).length,h=c?Math.round(p/c*100):0,v=W0(e.dueDate),[g,k]=(0,a.useState)(!1),[y,N]=(0,a.useState)(e.name),[f,d]=(0,a.useState)(e.dueDate||""),m=()=>{let b=s.trim();b&&(n(e.id,b),u(""))},x=()=>{N(e.name),d(e.dueDate||""),k(!0)},w=()=>{let b=y.trim();b&&(l(e.id,{name:b,dueDate:f||null}),k(!1))};return g?a.default.createElement("div",{className:"project-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:y,onChange:b=>N(b.target.value),onKeyDown:b=>b.key==="Enter"&&w(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"date",className:"time-input",value:f,onChange:b=>d(b.target.value)})),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:w},"save")))):a.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${Yn(e.id)}`}},a.default.createElement("div",{className:"project-card-top"},a.default.createElement("span",{className:"project-name"},e.name),a.default.createElement("div",{className:"project-card-actions"},a.default.createElement("button",{className:"vault-card-edit",onClick:x,"aria-label":"Edit project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),v&&a.default.createElement("span",{className:`project-due ${v.overdue?"overdue":""}`},v.text),a.default.createElement("div",{className:"progress-track small"},a.default.createElement("div",{className:"progress-fill",style:{width:`${h}%`}})),a.default.createElement("span",{className:"vault-card-pct"},p,"/",c," tasks \xB7 ",h,"%"),a.default.createElement("div",{className:"project-tasks"},e.tasks.map(b=>a.default.createElement(q0,{key:b.id,projectId:e.id,task:b,onToggle:r,onDelete:o,onEdit:i}))),a.default.createElement("div",{className:"project-add-task"},a.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:b=>u(b.target.value),onKeyDown:b=>b.key==="Enter"&&m()})))}function Y0({projects:e,setProjects:t}){let[n,r]=(0,a.useState)(""),[o,i]=(0,a.useState)(""),[l,s]=(0,a.useState)(!1),u=()=>{let y=n.trim();if(!y){s(!0),setTimeout(()=>s(!1),420),B.error();return}t(N=>[...N,{id:he(),name:y,dueDate:o||null,tasks:[]}]),r(""),i(""),B.click()},c=y=>{t(N=>N.filter(f=>f.id!==y)),B.delete()},p=(y,N)=>t(f=>f.map(d=>d.id===y?{...d,...N}:d)),h=(y,N)=>{t(f=>f.map(d=>d.id===y?{...d,tasks:[...d.tasks,{id:he(),text:N,done:!1}]}:d)),B.click()},v=(y,N)=>{t(f=>f.map(d=>d.id!==y?d:{...d,tasks:d.tasks.map(m=>m.id===N?{...m,done:!m.done}:m)})),B.success()},g=(y,N)=>{t(f=>f.map(d=>d.id!==y?d:{...d,tasks:d.tasks.filter(m=>m.id!==N)})),B.delete()},k=(y,N,f)=>t(d=>d.map(m=>m.id!==y?m:{...m,tasks:m.tasks.map(x=>x.id===N?{...x,text:f}:x)}));return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"PROJECT-MANAGER")),a.default.createElement("div",{className:"vault-grid"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no projects yet")):e.map(y=>a.default.createElement(X0,{key:y.id,project:y,onDelete:c,onAddTask:h,onToggleTask:v,onDeleteTask:g,onEditTask:k,onSave:p}))),a.default.createElement("div",{className:`composer ${l?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:y=>r(y.target.value),onKeyDown:y=>y.key==="Enter"&&u()}),a.default.createElement("input",{type:"date",className:"time-input",value:o,onChange:y=>i(y.target.value)}),a.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function Q0({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement(G0,{habits:e,setHabits:t}),a.default.createElement(Y0,{projects:n,setProjects:r}))}var pt=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],hs=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],to=pt.reduce((e,t)=>(e[t.key]=hs.filter(n=>n.area===t.key),e),{});function hp(e){return hs.find(t=>t.key===e)||null}function Rn(e){if(e.sub&&hp(e.sub)&&hp(e.sub).area===e.area)return e.sub;let t=to[e.area];return t&&t.length?t[0].key:null}function Z0(e,t,n){let r=t.filter(i=>Rn(i)===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0),o=n.filter(i=>Rn(i)===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0);return r-o}var vp=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function Yn(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return vp[Math.abs(t)%vp.length]}var Qr=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function Fp(e,t,n){let r=e.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),o=t.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=n.reduce((l,s)=>l+s.cost*(s.claimed?.length||0),0);return r-o-i}function gn(e){return 12.5*(e-1)*(e+6)}function Ip(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-gn(n),o=gn(n+1)-gn(n);return{level:n,into:r,span:o}}function R0(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[o,i]of t)for(;n>=o;)r+=i,n-=o;return r}function Bp(e){if(e<=Qr.length)return Qr[e-1];let t=e-Qr.length+1;return`${Qr[Qr.length-1]} ${R0(t)}`}var eh=[{id:1,label:"Deep Work",area:"work",xp:40,history:[O(0),O(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[O(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],th=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],nh=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function rh({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),[i,l]=(0,a.useState)(0),s=()=>{o||l(E=>E+1)},{streak:u,freezeUsed:c}=Fa(e.history),p=pt.find(E=>E.key===e.area)||pt[0],[h,v]=(0,a.useState)(!1),[g,k]=(0,a.useState)(e.label),[y,N]=(0,a.useState)(e.area),[f,d]=(0,a.useState)(()=>Rn(e)),[m,x]=(0,a.useState)(e.xp),w=()=>{k(e.label),N(e.area),d(Rn(e)),x(e.xp),v(!0)},b=()=>{let E=g.trim();E&&(r(e.id,{label:E,area:y,sub:f,xp:Math.max(1,+m||e.xp)}),v(!1))};return h?a.default.createElement("div",{className:"quest-habit-card good editing"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:g,onChange:E=>k(E.target.value),onKeyDown:E=>E.key==="Enter"&&b(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},pt.map(E=>a.default.createElement("button",{key:E.key,type:"button",className:`area-chip ${y===E.key?"active":""}`,style:{"--ac":E.color},onClick:()=>{N(E.key);let T=to[E.key]||[];d(T.length?T[0].key:null)}},E.label))),a.default.createElement("div",{className:"edit-row edit-row-subs"},(to[y]||[]).map(E=>a.default.createElement("button",{key:E.key,type:"button",className:`sub-chip ${f===E.key?"active":""}`,onClick:()=>d(E.key)},E.label))),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:m,onChange:E=>x(E.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>v(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:b},"save")))):a.default.createElement("div",{className:`quest-habit-card good ${i?"just-completed":""}`,key:`g${e.id}`},i>0&&a.default.createElement("span",{className:"xp-pop",key:i},"+",e.xp),a.default.createElement("span",{className:"area-dot",style:{background:p.color}}),a.default.createElement("div",{className:"quest-habit-main"},a.default.createElement("span",{className:"quest-habit-label"},e.label),a.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",p.label,u>0?` \xB7 \u{1F525}${u}${c?" \u2744\uFE0F":""}`:"")),a.default.createElement("button",{className:`quest-check ${o?"done":""}`,onClick:()=>{s(),t(e.id)},"aria-label":"Mark done today"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:o?0:24,transition:"stroke-dashoffset 220ms ease"}}))),a.default.createElement("button",{className:"vault-card-edit",onClick:w,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function oh({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),i=pt.find(m=>m.key===e.area)||pt[0],l=Ap(e.history),[s,u]=(0,a.useState)(!1),[c,p]=(0,a.useState)(e.label),[h,v]=(0,a.useState)(e.area),[g,k]=(0,a.useState)(()=>Rn(e)),[y,N]=(0,a.useState)(e.xp),f=()=>{p(e.label),v(e.area),k(Rn(e)),N(e.xp),u(!0)},d=()=>{let m=c.trim();m&&(r(e.id,{label:m,area:h,sub:g,xp:Math.max(1,+y||e.xp)}),u(!1))};return s?a.default.createElement("div",{className:"quest-habit-card bad editing"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:c,onChange:m=>p(m.target.value),onKeyDown:m=>m.key==="Enter"&&d(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},pt.map(m=>a.default.createElement("button",{key:m.key,type:"button",className:`area-chip ${h===m.key?"active":""}`,style:{"--ac":m.color},onClick:()=>{v(m.key);let x=to[m.key]||[];k(x.length?x[0].key:null)}},m.label))),a.default.createElement("div",{className:"edit-row edit-row-subs"},(to[h]||[]).map(m=>a.default.createElement("button",{key:m.key,type:"button",className:`sub-chip ${g===m.key?"active":""}`,onClick:()=>k(m.key)},m.label))),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:y,onChange:m=>N(m.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>u(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:d},"save")))):a.default.createElement("div",{className:"quest-habit-card bad"},a.default.createElement("span",{className:"area-dot",style:{background:i.color}}),a.default.createElement("div",{className:"quest-habit-main"},a.default.createElement("span",{className:"quest-habit-label"},e.label),a.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",i.label," \xB7 ",l,"x this week")),a.default.createElement("button",{className:`quest-check bad-check ${o?"done":""}`,onClick:()=>t(e.id),"aria-label":"Log slip today"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),a.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function ah({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:o}){let[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(e.label),[c,p]=(0,a.useState)(e.cost),h=()=>{u(e.label),p(e.cost),l(!0)},v=()=>{let g=s.trim();g&&(o(e.id,{label:g,cost:Math.max(1,+c||e.cost)}),l(!1))};return i?a.default.createElement("div",{className:"reward-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:s,onChange:g=>u(g.target.value),onKeyDown:g=>g.key==="Enter"&&v(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:c,onChange:g=>p(g.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP cost")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:v},"save")))):a.default.createElement("div",{className:"reward-card"},a.default.createElement("div",{className:"reward-top"},a.default.createElement("span",{className:"reward-label"},e.label),a.default.createElement("div",{className:"project-card-actions"},a.default.createElement("button",{className:"vault-card-edit",onClick:h,"aria-label":"Edit reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),a.default.createElement("span",{className:"reward-cost"},e.cost," XP"),a.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&a.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function ih({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:o,setRewards:i}){let l=(0,a.useMemo)(()=>Fp(e,n,o),[e,n,o]),{level:s,into:u,span:c}=Ip(l),p=Math.round(u/c*100),h=_=>{let U=O(0),te=!(e.find(V=>V.id===_)?.history||[]).includes(U);if(t(V=>V.map(Y=>{if(Y.id!==_)return Y;let nr=(Y.history||[]).includes(U)?Y.history.filter(rr=>rr!==U):[...Y.history||[],U];return{...Y,history:nr.slice(-370)}})),te){B.success(),Qt.emit("habitDone");let V=Qn().hour;V<6&&eo({earlyFinish:!0}),V>=0&&V<4&&eo({lateFinish:!0})}else B.click()},v=_=>{let U=O(0),te=!(n.find(V=>V.id===_)?.history||[]).includes(U);r(V=>V.map(Y=>{if(Y.id!==_)return Y;let nr=(Y.history||[]).includes(U)?Y.history.filter(rr=>rr!==U):[...Y.history||[],U];return{...Y,history:nr.slice(-370)}})),te?B.error():B.click()},g=_=>{t(U=>U.filter(te=>te.id!==_)),B.delete()},k=_=>{r(U=>U.filter(te=>te.id!==_)),B.delete()},y=(_,U)=>t(te=>te.map(V=>V.id===_?{...V,...U}:V)),N=(_,U)=>r(te=>te.map(V=>V.id===_?{...V,...U}:V)),f=_=>{let U=O(0);i(te=>te.map(V=>V.id===_?{...V,claimed:[...V.claimed||[],U]}:V)),B.success(),Qt.emit("rewardClaimed")},d=_=>{i(U=>U.filter(te=>te.id!==_)),B.delete()},m=(_,U)=>i(te=>te.map(V=>V.id===_?{...V,...U}:V)),[x,w]=(0,a.useState)(""),[b,E]=(0,a.useState)("work"),[T,$]=(0,a.useState)(20),[P,A]=(0,a.useState)(""),[j,S]=(0,a.useState)("work"),[F,z]=(0,a.useState)(20),[D,ie]=(0,a.useState)(""),[Te,H]=(0,a.useState)(100),R=()=>{let _=x.trim();_&&(t(U=>[...U,{id:he(),label:_,area:b,xp:+T||10,history:[]}]),w(""),B.click())},ve=()=>{let _=P.trim();_&&(r(U=>[...U,{id:he(),label:_,area:j,xp:+F||10,history:[]}]),A(""),B.click())},pe=()=>{let _=D.trim();_&&(i(U=>[...U,{id:he(),label:_,cost:+Te||50,claimed:[]}]),ie(""),B.click())},Be=hs.map(_=>({key:_.key,label:_.label,color:(pt.find(U=>U.key===_.area)||{}).color,value:Math.max(0,Z0(_.key,e,n))})),ft=e.reduce((_,U)=>_+U.xp*(U.history?.length||0),0),mt=n.reduce((_,U)=>_+U.xp*(U.history?.length||0),0);return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement("div",{className:"hero-card hero-card-viz"},a.default.createElement("div",{className:"hero-viz-row"},a.default.createElement(ps,{pct:p,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${s}`,sublabel:Bp(s)}),a.default.createElement("div",{className:"hero-viz-stats"},a.default.createElement("span",{className:"hero-xp-total"},a.default.createElement(Ct,{value:l})," ",a.default.createElement("small",null,"XP")),a.default.createElement("span",{className:"hero-xp-sub"},u,"/",c," to next level"),a.default.createElement("div",{className:"hero-xp-split"},a.default.createElement("span",{className:"hero-xp-earned"},"+",a.default.createElement(Ct,{value:ft})),a.default.createElement("span",{className:"hero-xp-lost"},"\u2212",a.default.createElement(Ct,{value:mt})))))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"LIFE-AREAS")),a.default.createElement("div",{className:"radar-card"},a.default.createElement(D0,{axes:Be,size:252})),(ft>0||mt>0)&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"XP SOURCE")),a.default.createElement("div",{className:"donut-card"},a.default.createElement(Dp,{size:120,stroke:16,centerLabel:l,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:ft,color:"#5EEAD4"},{key:"lost",label:"Lost",value:mt,color:"#F0576B"}]}),a.default.createElement("div",{className:"donut-legend"},a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),a.default.createElement("span",null,"Earned from good habits"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(Ct,{value:ft}))),a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),a.default.createElement("span",null,"Lost to bad habits"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(Ct,{value:mt})))))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"GOOD-HABITS")),a.default.createElement("div",{className:"quest-habit-list"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no good habits yet")):e.map(_=>a.default.createElement(rh,{key:_.id,habit:_,onToggleToday:h,onDelete:g,onSave:y}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new good habit...",value:x,onChange:_=>w(_.target.value),onKeyDown:_=>_.key==="Enter"&&R()}),a.default.createElement("button",{className:"add-btn",onClick:R,"aria-label":"Add good habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},pt.map(_=>a.default.createElement("button",{key:_.key,className:b===_.key?"active":"",onClick:()=>E(_.key)},_.label)),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:T,onChange:_=>$(+_.target.value||5)})),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"BAD-HABITS")),a.default.createElement("div",{className:"quest-habit-list"},n.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no bad habits tracked")):n.map(_=>a.default.createElement(oh,{key:_.id,habit:_,onToggleToday:v,onDelete:k,onSave:N}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:P,onChange:_=>A(_.target.value),onKeyDown:_=>_.key==="Enter"&&ve()}),a.default.createElement("button",{className:"add-btn",onClick:ve,"aria-label":"Add bad habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},pt.map(_=>a.default.createElement("button",{key:_.key,className:j===_.key?"active":"",onClick:()=>S(_.key)},_.label)),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:F,onChange:_=>z(+_.target.value||5)})),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"REWARD-CENTER")),a.default.createElement("div",{className:"vault-grid"},o.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no rewards set up")):o.map(_=>a.default.createElement(ah,{key:_.id,reward:_,canClaim:l>=_.cost,onClaim:f,onDelete:d,onSave:m}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new reward...",value:D,onChange:_=>ie(_.target.value),onKeyDown:_=>_.key==="Enter"&&pe()}),a.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:Te,onChange:_=>H(+_.target.value||50)}),a.default.createElement("button",{className:"add-btn",onClick:pe,"aria-label":"Add reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var lh=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function sh(e=1e3*30){let[t,n]=(0,a.useState)(Date.now());return(0,a.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function uh(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let o=Math.floor(r/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function $p({checked:e,onChange:t,color:n}){return a.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function ch({task:e,now:t,onToggle:n,onDelete:r,index:o}){let[i,l]=(0,a.useState)(!1),s=Aa.find(c=>c.key===e.priority)||Aa[0],u=()=>{l(!0),setTimeout(()=>r(e.id),220)};return a.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${o*35}ms`}},a.default.createElement($p,{checked:e.done,onChange:()=>n(e.id),color:s.color}),a.default.createElement("div",{className:"task-main"},a.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),a.default.createElement("span",{className:"task-meta"},a.default.createElement("span",{className:"prio-dot",style:{background:s.color}}),a.default.createElement("span",{className:"prio-label"},s.label),a.default.createElement("span",{className:"dot-sep"},"\xB7"),a.default.createElement("span",null,uh(e.createdAt,t)))),a.default.createElement("button",{className:"del-btn",onClick:u,"aria-label":"Delete task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var gp="tasksh.tasks.v1",yp="tasksh.routines.v1",xp="tasksh.vaulthabits.v1",kp="tasksh.projects.v1",wp="tasksh.goodhabits.v1",bp="tasksh.badhabits.v1",Np="tasksh.rewards.v1",Sp="tasksh.deviceid.v1",ls="tasksh.notifyenabled.v1",cs="tasksh.aikey.v1";function dh({id:e,onDone:t}){let n=_p(e);return(0,a.useEffect)(()=>{let r=setTimeout(t,4200);return()=>clearTimeout(r)},[e,t]),n?a.default.createElement("div",{className:"ach-toast",onClick:t},a.default.createElement("span",{className:"ach-toast-icon"},n.icon),a.default.createElement("span",{className:"ach-toast-body"},a.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),a.default.createElement("span",{className:"ach-toast-name"},n.name),a.default.createElement("span",{className:"ach-toast-desc"},n.desc)),a.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins)):null}function ph({level:e,coins:t,unlockedTheme:n,extraThemes:r=0,evolvedTo:o,onDone:i}){let l=Zn.find(u=>u.unlockLevel>e),s=Pa(e);return a.default.createElement("div",{className:"lvl-backdrop",onClick:i},a.default.createElement("div",{className:"screen-pulse"}),a.default.createElement("div",{className:"burst"}),a.default.createElement("div",{className:"lvl-card",onClick:u=>u.stopPropagation()},a.default.createElement("div",{className:"lvl-kicker"},"level up"),a.default.createElement("div",{className:"lvl-num"},e),a.default.createElement("div",{className:"lvl-title"},Bp(e)),a.default.createElement("div",{className:"lvl-rewards"},a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),a.default.createElement("span",{className:"lvl-reward-text"},"+",t," coins")),n&&a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),a.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",a.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),o!=null&&a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),a.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),a.default.createElement("div",{className:"lvl-next"},l?`next theme at level ${l.unlockLevel}`:"all themes unlocked",s?` \xB7 next form at ${s.minLevel}`:""),a.default.createElement("button",{className:"evo-btn",onClick:i},"continue")))}function fh({earned:e,coins:t}){let n=new Set(e),r=Zr.filter(i=>!i.hidden||n.has(i.id)),o=Zr.filter(i=>i.hidden&&!n.has(i.id)).length;return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"ach-head"},a.default.createElement("span",{className:"sheet-title"},"achievements"),a.default.createElement("span",{className:"ach-count"},n.size,"/",Zr.length," \xB7 \u25C9 ",t)),a.default.createElement("div",{className:"ach-grid"},r.map(i=>{let l=n.has(i.id);return a.default.createElement("div",{key:i.id,className:`ach-card ${l?"got":""}`},a.default.createElement("span",{className:"ach-icon"},l?i.icon:"\xB7"),a.default.createElement("span",{className:"ach-name"},i.name),a.default.createElement("span",{className:"ach-desc"},i.desc),a.default.createElement("span",{className:"ach-coins"},"\u25C9 ",i.coins))})),o>0&&a.default.createElement("div",{className:"ach-hidden-note"},o," hidden achievement",o===1?"":"s"," left to discover"))}function mh({ctl:e,level:t,totalXP:n,earned:r=[],coins:o=0,onClose:i}){let l=gn(t+1),s=gn(t);return a.default.createElement("div",{className:"sheet-backdrop",onClick:i},a.default.createElement("div",{className:"sheet",onClick:u=>u.stopPropagation()},a.default.createElement("div",{className:"sheet-head"},a.default.createElement("span",{className:"sheet-title"},"themes"),a.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),a.default.createElement("div",{className:"theme-grid"},e.themes.map(u=>{let c=us(u,t),p=e.themeId===u.id,h=gn(u.unlockLevel),v=gn(Math.max(1,u.unlockLevel-1)),g=c?100:Math.max(0,Math.min(99,Math.round((n-v)/(h-v)*100)));return a.default.createElement("button",{key:u.id,className:`theme-card ${p?"active":""} ${c?"":"locked"}`,onClick:()=>{c?(e.setThemeId(u.id),B.success()):B.error()},disabled:!c},a.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${u.colors.bg} 0%, ${u.colors.panel} 45%, ${u.colors.accent} 100%)`}},!c&&a.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},a.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),p&&a.default.createElement("span",{className:"theme-active-dot"})),a.default.createElement("span",{className:"theme-name"},u.name),c?a.default.createElement("span",{className:"theme-blurb"},u.blurb):a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{className:"theme-req"},"level ",u.unlockLevel),a.default.createElement("span",{className:"theme-bar"},a.default.createElement("span",{className:"theme-bar-fill",style:{width:`${g}%`}})),a.default.createElement("span",{className:"theme-pct"},g,"%")))})),a.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,l-n)," XP to level ",t+1),a.default.createElement("div",{className:"ach-section"},a.default.createElement(fh,{earned:r,coins:o})),a.default.createElement("div",{className:"calm-toggle-row"},a.default.createElement("div",null,a.default.createElement("div",{className:"calm-toggle-label"},"calm mode"),a.default.createElement("div",{className:"calm-toggle-hint"},"slower motion, softer light, a breathing guide")),a.default.createElement("button",{className:`calm-switch ${e.calm?"on":""}`,onClick:()=>{e.calm||(Qt.emit("calmSession"),g0("calmSessions")),e.setCalm(!e.calm),B.click()},"aria-pressed":e.calm},a.default.createElement("span",{className:"calm-knob"}))),a.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",a.default.createElement("b",null,e.phase.label))))}function Ta({label:e,value:t,color:n}){return a.default.createElement("div",{className:"pet-stat"},a.default.createElement("div",{className:"pet-stat-top"},a.default.createElement("span",{className:"pet-stat-label"},e),a.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),a.default.createElement("div",{className:"pet-stat-track"},a.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function hh({from:e,to:t,petName:n,onDone:r}){(0,a.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let o=yn[t];return a.default.createElement("div",{className:"evo-backdrop",onClick:r},a.default.createElement("div",{className:"screen-pulse"}),a.default.createElement("div",{className:"burst"}),a.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},a.default.createElement("div",{className:"evo-kicker"},"evolution"),a.default.createElement("div",{className:"evo-stage-row"},a.default.createElement("div",{className:"evo-old"},a.default.createElement(ss,{stage:e,mood:"content",size:72,animate:!1})),a.default.createElement("span",{className:"evo-arrow"},"\u2192"),a.default.createElement("div",{className:"evo-new"},a.default.createElement(ss,{stage:t,mood:"joyful",size:132,evolving:!0}))),a.default.createElement("div",{className:"evo-name"},n," became ",a.default.createElement("b",null,o.name)),a.default.createElement("div",{className:"evo-title"},o.title),a.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}function vh({petCtl:e,ctx:t,apiKey:n,showDataMsg:r}){let{pet:o,form:i,mood:l,nudge:s,rename:u,remember:c}=e,[p,h]=(0,a.useState)(""),[v,g]=(0,a.useState)(!1),[k,y]=(0,a.useState)(!1),[N,f]=(0,a.useState)(o.name),d=(0,a.useRef)(null),m=(0,a.useMemo)(()=>b0(t),[t]);(0,a.useEffect)(()=>{d.current&&(d.current.scrollTop=d.current.scrollHeight)},[o.log]);let x=async()=>{let w=p.trim();if(!(!w||v)){if(h(""),c("user",w),s("chat"),B.click(),!n){c("pet",Et(["i can hear you, but my words are limited right now. add an ai key in the ai tab and i can really talk.","i'm listening \u2014 though i can only nod until you connect an ai key."],Date.now()/1e3));return}g(!0);try{let b=await Nh(w,N0(t),o.log||[],n);c("pet",b.reply),B.success()}catch(b){c("pet",b instanceof er?"my link to the wider world got rejected. check the key in the ai tab.":"couldn't reach far enough to answer that. try again in a moment."),B.error()}finally{g(!1)}}};return a.default.createElement("div",{className:"task-list pet-scroll"},a.default.createElement("div",{className:"pet-stage"},a.default.createElement(ss,{stage:i.stage,mood:l.key,size:168}),a.default.createElement("div",{className:"pet-id"},k?a.default.createElement("input",{className:"pet-name-input",value:N,autoFocus:!0,maxLength:14,onChange:w=>f(w.target.value),onBlur:()=>{u(N),y(!1)},onKeyDown:w=>{w.key==="Enter"&&(u(N),y(!1))}}):a.default.createElement("button",{className:"pet-name",onClick:()=>{f(o.name),y(!0)}},o.name),a.default.createElement("span",{className:"pet-form"},i.name," \xB7 ",l.label),a.default.createElement("span",{className:"pet-bond"},Tp(o.friendship)))),a.default.createElement("div",{className:"pet-speech"},m),a.default.createElement("div",{className:"pet-stats"},a.default.createElement(Ta,{label:"happiness",value:o.happiness,color:"var(--accent)"}),a.default.createElement(Ta,{label:"energy",value:o.energy,color:"var(--accent2)"}),a.default.createElement(Ta,{label:"friendship",value:o.friendship,color:"var(--accent)"}),a.default.createElement(Ta,{label:"intelligence",value:o.intelligence,color:"var(--accent2)"})),Pa(t.level)&&a.default.createElement("div",{className:"pet-next"},"next form at level ",Pa(t.level).minLevel," \xB7 ",Pa(t.level).name),a.default.createElement("div",{className:"pet-chat",ref:d},(o.log||[]).length===0?a.default.createElement("div",{className:"pet-chat-empty"},"say something \u2014 it remembers."):(o.log||[]).map((w,b)=>a.default.createElement("div",{key:b,className:`pet-msg ${w.role}`},w.text)),v&&a.default.createElement("div",{className:"pet-msg pet thinking"},a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}))),a.default.createElement("div",{className:"pet-composer"},a.default.createElement("input",{className:"pet-input",placeholder:`talk to ${o.name}\u2026`,value:p,onChange:w=>h(w.target.value),onKeyDown:w=>w.key==="Enter"&&x(),disabled:v}),a.default.createElement("button",{className:"pet-send",onClick:x,disabled:v||!p.trim()},"say")))}var tr="https://tasksh-notify.techcraftor.workers.dev",gh="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function yh(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;i++)o[i]=r.charCodeAt(i);return o}function vs(){let e=localStorage.getItem(Sp);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Sp,e)),e}async function xh(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:yh(gh)}));let r=vs();if(!(await fetch(`${tr}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function kh(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=vs();try{await fetch(`${tr}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function Ep(e){let t=vs();try{await fetch(`${tr}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}function Op(){try{return localStorage.getItem(cs)||""}catch{return""}}function jp(e){try{e?localStorage.setItem(cs,e):localStorage.removeItem(cs)}catch{}}function wh(e){return e?e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`:""}var er=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function bh(e){let t=await fetch(`${tr}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function Nh(e,t,n,r){let o=await fetch(`${tr}/pet`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,context:t,log:n,apiKey:r})}),i=null;try{i=await o.json()}catch{}if(!o.ok){let l=i&&i.error;throw l==="no_key"||l==="bad_key"?new er(i&&i.message||"key rejected"):new Error(i&&i.message||`pet request failed (${o.status})`)}return{reply:i&&i.reply||"\u2026"}}async function Sh(e,t,n){let r=await fetch(`${tr}/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e,data:t,apiKey:n})}),o=null;try{o=await r.json()}catch{}if(!r.ok){let i=o&&o.error;throw i==="no_key"||i==="bad_key"?new er(o&&o.message||"Your API key was rejected."):i==="quota"?new Error(o&&o.message||"Daily AI limit reached."):new Error(o&&o.message||o&&o.error||`AI request failed (${r.status}).`)}return{reply:o.reply||"",actions:o.actions||[]}}function Cp(e,t){let n=(r,o)=>(r||[]).find(i=>i.id===o);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Mt(Qe(e.time))} \xB7 ${e.label} (${zt(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),o=[];return e.time!==void 0&&e.time!==r?.time&&o.push(`${Mt(Qe(r?.time||"00:00"))} \u2192 ${Mt(Qe(e.time))}`),e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&o.push(`${zt(r?.duration||0)} \u2192 ${zt(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${o.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),o=[];return e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&o.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${o.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function Eh(e,t,n){let{routines:r,vaultHabits:o,goodHabits:i,badHabits:l,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let c of e)switch(c.op){case"add_routine":r=[...r,{id:he(),time:c.time,label:c.label,duration:c.duration,history:[],...c.alternatives?.length?{alternatives:c.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(p=>p.id===c.id?{...p,...c.time!==void 0?{time:c.time}:{},...c.label!==void 0?{label:c.label}:{},...c.duration!==void 0?{duration:c.duration}:{}}:p),u.add("routines");break;case"delete_routine":r=r.filter(p=>p.id!==c.id),u.add("routines");break;case"add_vault_habit":o=[...o,{id:he(),icon:c.icon,label:c.label,weeklyGoal:c.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":o=o.map(p=>p.id===c.id?{...p,...c.label!==void 0?{label:c.label}:{},...c.weeklyGoal!==void 0?{weeklyGoal:c.weeklyGoal}:{}}:p),u.add("vaultHabits");break;case"delete_vault_habit":o=o.filter(p=>p.id!==c.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:he(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(p=>p.id!==c.id),u.add("goodHabits");break;case"add_bad_habit":l=[...l,{id:he(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":l=l.filter(p=>p.id!==c.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:he(),label:c.label,cost:c.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(p=>p.id!==c.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(o),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(l),u.has("rewards")&&n.setRewards(s)}var Ch=["build me a study preset for exam month","my evenings are too packed \u2014 spread them out","add a gym routine at 6am for an hour","what am I neglecting?"];function Mp({onSaved:e,initialError:t,onCancel:n}){let[r,o]=(0,a.useState)(""),[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(t||null),c=(0,a.useRef)(null);(0,a.useEffect)(()=>{c.current?.focus()},[]);let p=async()=>{let h=r.trim();if(!(!h||i)){l(!0),u(null);try{let v=await bh(h);jp(h),B.success(),e(h,v)}catch(v){u(v.message||"Couldn't verify that key."),B.error()}finally{l(!1)}}};return a.default.createElement("div",{className:"task-list ai-scroll"},a.default.createElement("div",{className:"ai-gate"},a.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),a.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),a.default.createElement("div",{className:"ai-gate-sub"},"the assistant runs on Google's Gemini. it's free \u2014 you just need your own key. takes about a minute."),a.default.createElement("ol",{className:"ai-gate-steps"},a.default.createElement("li",null,"open"," ",a.default.createElement("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noopener noreferrer"},"aistudio.google.com/apikey")),a.default.createElement("li",null,"sign in and hit \u201Ccreate API key\u201D"),a.default.createElement("li",null,"copy it and paste it below")),a.default.createElement("input",{ref:c,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026",value:r,onChange:h=>o(h.target.value),onKeyDown:h=>{h.key==="Enter"&&p()},disabled:i}),s&&a.default.createElement("div",{className:"ai-error ai-gate-error"},s),a.default.createElement("div",{className:"ai-gate-actions"},a.default.createElement("button",{className:"ai-apply",onClick:p,disabled:i||!r.trim()},i?"checking\u2026":"save key"),n&&a.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),a.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function Mh({state:e,setters:t,showDataMsg:n}){let[r,o]=(0,a.useState)(()=>Op()),[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(null),[c,p]=(0,a.useState)(""),[h,v]=(0,a.useState)(!1),[g,k]=(0,a.useState)(null),[y,N]=(0,a.useState)(null),[f,d]=(0,a.useState)(()=>new Set),m=(0,a.useRef)(null),x=(0,a.useRef)(0),[w,b]=(0,a.useState)(0);(0,a.useEffect)(()=>{if(!h){b(0);return}let S=Date.now(),F=setInterval(()=>b((Date.now()-S)/1e3),100);return()=>clearInterval(F)},[h]);let E=async S=>{let F=(S??c).trim();if(!F||h)return;let z=Date.now()-x.current;if(z<3e3){k(`Hold on a moment \u2014 wait ${Math.ceil((3e3-z)/1e3)}s before asking again.`);return}x.current=Date.now(),v(!0),k(null),N(null),d(new Set),B.click();try{let D=await Sh(F,{routines:e.routines,vaultHabits:e.vaultHabits,goodHabits:e.goodHabits,badHabits:e.badHabits,rewards:e.rewards,totalXP:e.totalXP},r);N(D),D.actions.length&&B.success()}catch(D){D instanceof er?(jp(""),o(""),u(D.message)):k(D.message||"Something went wrong."),B.error()}finally{v(!1)}},T=S=>{d(F=>{let z=new Set(F);return z.has(S)?z.delete(S):z.add(S),z})},$=y?y.actions.filter((S,F)=>!f.has(F)):[],P=()=>{$.length&&(Eh($,e,t),B.success(),n("success",`Applied ${$.length} change${$.length===1?"":"s"}`),N(null),p(""),d(new Set))},A=()=>{B.whoosh(),N(null),d(new Set)},j=$.reduce((S,F)=>{let z=Cp(F,e).kind;return S[z]=(S[z]||0)+1,S},{});return r?i?a.default.createElement(Mp,{onCancel:()=>l(!1),onSaved:(S,F)=>{o(S),l(!1),n("success",F||"AI key updated")}}):a.default.createElement("div",{className:"task-list ai-scroll"},a.default.createElement("div",{className:"ai-intro"},a.default.createElement("div",{className:"ai-intro-row"},a.default.createElement("div",{className:"ai-intro-title"},"ask anything"),a.default.createElement("button",{className:"ai-key-btn",onClick:()=>l(!0),title:`Key ${wh(r)} \u2014 tap to change`},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},a.default.createElement("circle",{cx:"8",cy:"15",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M10.85 12.15L19 4M17 6l2 2M14 9l2 2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),a.default.createElement("span",null,"key"))),a.default.createElement("div",{className:"ai-intro-sub"},"it can add, edit or remove routines, vault habits, quests and rewards \u2014 nothing changes until you approve it.")),a.default.createElement("div",{className:"ai-composer"},a.default.createElement("textarea",{ref:m,className:"ai-input",rows:3,placeholder:"e.g. add a 30 min reading routine before bed",value:c,onChange:S=>p(S.target.value),onKeyDown:S=>{S.key==="Enter"&&(S.metaKey||S.ctrlKey)&&(S.preventDefault(),E())},disabled:h}),a.default.createElement("button",{className:"ai-send",onClick:()=>E(),disabled:h||!c.trim()},h?"thinking\u2026":"ask")),!y&&!h&&a.default.createElement("div",{className:"ai-chips"},Ch.map(S=>a.default.createElement("button",{key:S,className:"ai-chip",onClick:()=>{p(S),E(S)}},S))),h&&a.default.createElement("div",{className:"ai-thinking"},a.default.createElement("div",{className:"ai-dots"},a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"})),a.default.createElement("div",{className:"ai-elapsed"},w<1?"thinking\u2026":`thinking\u2026 ${w.toFixed(1)}s`,w>12&&a.default.createElement("span",{className:"ai-slow"}," \xB7 taking longer than usual"))),g&&a.default.createElement("div",{className:"ai-error"},g),y&&a.default.createElement("div",{className:"ai-result"},y.reply&&a.default.createElement("div",{className:"ai-reply"},y.reply),y.actions.length===0?a.default.createElement("div",{className:"ai-noop"},"no changes proposed"):a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"ai-diff-head"},a.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),a.default.createElement("span",{className:"ai-diff-counts"},j.add?a.default.createElement("span",{className:"c-add"},"+",j.add):null,j.edit?a.default.createElement("span",{className:"c-edit"},"~",j.edit):null,j.remove?a.default.createElement("span",{className:"c-remove"},"\u2212",j.remove):null)),a.default.createElement("div",{className:"ai-diff"},y.actions.map((S,F)=>{let z=Cp(S,e),D=f.has(F);return a.default.createElement("button",{key:F,className:`ai-diff-row ${z.kind} ${D?"skipped":""}`,onClick:()=>T(F),title:D?"click to include":"click to skip"},a.default.createElement("span",{className:"ai-sign"},z.kind==="add"?"+":z.kind==="remove"?"\u2212":"~"),a.default.createElement("span",{className:"ai-surface"},z.surface),a.default.createElement("span",{className:"ai-diff-text"},z.text),a.default.createElement("span",{className:"ai-skip-mark"},D?"skipped":""))})),a.default.createElement("div",{className:"ai-actions"},a.default.createElement("button",{className:"ai-apply",onClick:P,disabled:!$.length},"apply ",$.length||""),a.default.createElement("button",{className:"ai-discard",onClick:A},"discard")),a.default.createElement("div",{className:"ai-hint"},"tap any row to skip it")))):a.default.createElement(Mp,{initialError:s,onSaved:(S,F)=>{o(S),u(null),n("success",F||"AI key saved")}})}function Ie(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function zh(e){typeof e=="number"&&Number.isFinite(e)&&e>Da&&(Da=e)}function _h(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(o=>n(o?.id))}),t}function Th({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:o,goodHabits:i,rewards:l,setRewards:s,totalXP:u,setTab:c}){let p=fs(),h=p.hour*60+p.minute,{sorted:v,currentId:g,nextId:k}=ms(e,h),y=v.find(A=>A.id===g),N=v.find(A=>A.id===k),f=O(0),d=A=>{let j=!(e.find(S=>S.id===A)?.history||[]).includes(f);t(S=>S.map(F=>{if(F.id!==A)return F;let D=(F.history||[]).includes(f)?F.history.filter(ie=>ie!==f):[...F.history||[],f];return{...F,history:D.slice(-60)}})),j?(B.error(),Qt.emit("badHabit")):B.click()},m=(0,a.useMemo)(()=>{let A={high:0,mid:1,low:2};return[...n].filter(j=>!j.done).sort((j,S)=>A[j.priority]-A[S.priority])},[n]),x=A=>{r(j=>j.map(S=>S.id===A?{...S,done:!S.done}:S)),B.success()},w=(0,a.useMemo)(()=>l.filter(A=>u>=A.cost),[l,u]),b=A=>{s(j=>j.map(S=>S.id===A?{...S,claimed:[...S.claimed||[],f]}:S)),B.success()},E=(0,a.useMemo)(()=>{let A={},j=S=>{(S||[]).forEach(F=>{A[F]=(A[F]||0)+1})};return e.forEach(S=>j(S.history)),o.forEach(S=>j(S.history)),i.forEach(S=>j(S.history)),A},[e,o,i]),T=y||N,$=!!y,P=T?(T.history||[]).includes(f):!1;return a.default.createElement("div",{className:"task-list today-view"},a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,$?"HAPPENING NOW":"NEXT UP")),T?a.default.createElement("div",{className:"today-card"},a.default.createElement("div",{className:"today-card-row"},a.default.createElement("span",{className:"today-card-time"},Mt(Qe(T.time))),a.default.createElement("span",{className:"today-card-label"},T.label)),a.default.createElement("div",{className:"today-card-sub"},$?`in progress \xB7 ${zt(T.duration)}`:`in ${Math.max(0,Qe(T.time)-h)}m \xB7 ${zt(T.duration)}`),a.default.createElement("button",{className:`today-mark-btn ${P?"done":""}`,onClick:()=>d(T.id)},P?"\u2713 completed today":"mark complete")):a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no routines set up yet")),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"ACTIVITY")),a.default.createElement(A0,{counts:E,weeksBack:12}),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"OPEN TASKS"),m.length>0&&a.default.createElement("button",{className:"today-view-all",onClick:()=>c("tasks")},"view all in tasks \u2192")),m.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):a.default.createElement("div",{className:"today-list"},m.slice(0,5).map((A,j)=>a.default.createElement("div",{key:A.id,className:"today-task-row",style:{animationDelay:`${j*35}ms`}},a.default.createElement("button",{className:"today-task-check",onClick:()=>x(A.id),"aria-label":"Complete task"}),a.default.createElement("span",{className:"today-task-text"},A.text),a.default.createElement("span",{className:`today-prio-dot ${A.priority}`}))),m.length>5&&a.default.createElement("button",{className:"today-more",onClick:()=>c("tasks")},"+",m.length-5," more")),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),a.default.createElement("span",{className:"today-xp-total"},a.default.createElement(Ct,{value:u})," XP")),w.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):a.default.createElement("div",{className:"today-list"},w.map((A,j)=>a.default.createElement("div",{key:A.id,className:"today-task-row",style:{animationDelay:`${j*35}ms`}},a.default.createElement("span",{className:"today-task-text"},A.label),a.default.createElement("span",{className:"today-reward-cost"},A.cost," XP"),a.default.createElement("button",{className:"today-claim-btn",onClick:()=>b(A.id)},"claim")))))}function Lh(){let[e,t]=(0,a.useState)("today"),[n,r]=L0(),o=M=>{M!==e&&B.whoosh(),t(M)},[i,l]=(0,a.useState)(()=>Ie(gp,lh)),[s,u]=(0,a.useState)(()=>Ie(yp,B0)),[c,p]=(0,a.useState)(()=>Ie(xp,H0)),[h,v]=(0,a.useState)(()=>Ie(kp,J0)),[g,k]=(0,a.useState)(()=>Ie(wp,eh)),[y,N]=(0,a.useState)(()=>Ie(bp,th)),[f,d]=(0,a.useState)(()=>Ie(Np,nh)),m=(0,a.useMemo)(()=>Fp(g,y,f),[g,y,f]),x=(0,a.useMemo)(()=>Ip(m).level,[m]),w=C0(x),b=S0(x),E=O(0),T=(0,a.useMemo)(()=>{let M=Ie(Rr,{});return{level:x,tasksDone:i.filter(I=>I.done).length,bestStreak:Math.max(g.reduce((I,G)=>Math.max(I,as(G.history)),0),s.reduce((I,G)=>Math.max(I,as(G.history)),0)),doneToday:g.filter(I=>(I.history||[]).includes(E)).length,totalHabits:g.length,routinesDoneToday:s.filter(I=>(I.history||[]).includes(E)).length,totalRoutines:s.length,vaultCount:c.length,friendship:b.pet.friendship,petStage:b.pet.stage,chats:b.pet.chats,calmSessions:M.calmSessions||0,earlyFinish:!!M.earlyFinish,lateFinish:!!M.lateFinish,returnedAfterGap:!!M.returnedAfterGap}},[x,i,g,s,c,b.pet,E]),$=k0(T),[P,A]=(0,a.useState)(null);(0,a.useEffect)(()=>{let I=Ie(Rr,{}).seenLevel||1;if(x>I){let G=x0(x);$.addCoins(G);let ne=Zn.filter(ke=>ke.unlockLevel>I&&ke.unlockLevel<=x);A({level:x,coins:G,unlockedTheme:ne.length?ne[ne.length-1]:null,extraThemes:ne.length>1?ne.length-1:0,evolvedTo:La(x).stage>La(I).stage?La(x).stage:null}),eo({seenLevel:x})}else x<I&&eo({seenLevel:x})},[x]);let[j,S]=(0,a.useState)(""),[F,z]=(0,a.useState)("mid"),[D,ie]=(0,a.useState)("all"),Te=(0,a.useRef)(null),H=(0,a.useRef)(null),[R,ve]=(0,a.useState)(null),pe=sh(),[Be,ft]=(0,a.useState)(()=>localStorage.getItem(ls)==="1"),[mt,_]=(0,a.useState)(!1),[U,te]=(0,a.useState)(!1);(0,a.useEffect)(()=>{Be&&Ep(s)},[s,Be]);let V=async()=>{if(!mt){_(!0);try{Be?(await kh(),localStorage.setItem(ls,"0"),ft(!1),Y("success","Notifications turned off")):(await xh(),await Ep(s),localStorage.setItem(ls,"1"),ft(!0),Y("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(M){Y("error",M.message||"Couldn't set up notifications")}finally{_(!1)}}},Y=(M,I)=>{ve({type:M,text:I})};(0,a.useEffect)(()=>{if(!R)return;let M=setTimeout(()=>ve(null),3200);return()=>clearTimeout(M)},[R]);let Ia=()=>{try{let M={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:c,projects:h,goodHabits:g,badHabits:y,rewards:f}},I=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),G=URL.createObjectURL(I),ne=O(0),ke=document.createElement("a");ke.href=G,ke.download=`tasks-sh-backup-${ne}.json`,document.body.appendChild(ke),ke.click(),ke.remove(),URL.revokeObjectURL(G),Y("ok","backup exported")}catch{Y("err","export failed")}},nr=()=>H.current?.click(),rr=M=>{let I=M.target.files&&M.target.files[0];if(M.target.value="",!I)return;let G=new FileReader;G.onerror=()=>Y("err","couldn't read that file"),G.onload=()=>{try{let ne=JSON.parse(String(G.result)),ke=ne&&typeof ne=="object"&&ne.data?ne.data:ne;if(!ke||typeof ke!="object")throw new Error("bad shape");let bs={tasks:l,routines:u,vaultHabits:p,projects:v,goodHabits:k,badHabits:N,rewards:d},ao=0;for(let Ba of Object.keys(bs))Array.isArray(ke[Ba])&&(bs[Ba](ke[Ba]),ao++);if(ao===0){Y("err","no recognizable data in that file");return}zh(_h(ke)),Y("ok",`imported ${ao} data set${ao===1?"":"s"}`)}catch{Y("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},G.readAsText(I)},gs=fs(),Up=gs.hour*60+gs.minute,{currentId:xn,sorted:ys}=ms(s,Up),[no,ro]=(0,a.useState)(null),oo=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{if(oo.current===void 0){oo.current=xn;return}if(xn!==oo.current){let M=ys.find(I=>I.id===xn);M&&ro({id:xn,label:M.label,time:M.time}),oo.current=xn}},[xn,ys]),(0,a.useEffect)(()=>{if(!no)return;let M=setTimeout(()=>ro(null),6e3);return()=>clearTimeout(M)},[no]),(0,a.useEffect)(()=>{try{localStorage.setItem(gp,JSON.stringify(i))}catch{}},[i]),(0,a.useEffect)(()=>{try{localStorage.setItem(yp,JSON.stringify(s))}catch{}},[s]),(0,a.useEffect)(()=>{try{localStorage.setItem(xp,JSON.stringify(c))}catch{}},[c]),(0,a.useEffect)(()=>{try{localStorage.setItem(kp,JSON.stringify(h))}catch{}},[h]),(0,a.useEffect)(()=>{try{localStorage.setItem(wp,JSON.stringify(g))}catch{}},[g]),(0,a.useEffect)(()=>{try{localStorage.setItem(bp,JSON.stringify(y))}catch{}},[y]),(0,a.useEffect)(()=>{try{localStorage.setItem(Np,JSON.stringify(f))}catch{}},[f]);let _t=(0,a.useMemo)(()=>{let M=i.length,I=i.filter(ke=>ke.done).length,G=M-I,ne=M===0?0:Math.round(I/M*100);return{total:M,done:I,pending:G,pct:ne}},[i]),xs=(0,a.useMemo)(()=>{let M=i.filter(I=>!I.done);return Aa.map(I=>({key:I.key,label:I.label,color:I.color,value:M.filter(G=>G.priority===I.key).length}))},[i]),ks=(0,a.useMemo)(()=>{let M=i;return D==="active"&&(M=M.filter(I=>!I.done)),D==="done"&&(M=M.filter(I=>I.done)),[...M].sort((I,G)=>{if(I.done!==G.done)return I.done?1:-1;let ne={high:0,mid:1,low:2};return ne[I.priority]-ne[G.priority]})},[i,D]),ws=()=>{let M=j.trim();M&&(l(I=>[...I,{id:he(),text:M,done:!1,priority:F,createdAt:Date.now()}]),S(""),Te.current?.focus(),B.click())},Wp=M=>{let I=!i.find(G=>G.id===M)?.done;l(G=>G.map(ne=>ne.id===M?{...ne,done:!ne.done}:ne)),I?(B.success(),Qt.emit("taskDone")):B.click()},Hp=M=>{l(I=>I.filter(G=>G.id!==M)),B.delete()},Jp=()=>{l(M=>M.filter(I=>!I.done)),B.whoosh()};return a.default.createElement("div",{className:"app-root","data-particle":w.theme.ambient.particle},a.default.createElement(pp,{theme:w.theme,phase:w.phase,calm:w.calm}),$.current&&a.default.createElement(dh,{id:$.current,onDone:$.shift}),P&&a.default.createElement(ph,{level:P.level,coins:P.coins,unlockedTheme:P.unlockedTheme,extraThemes:P.extraThemes,evolvedTo:P.evolvedTo,onDone:()=>A(null)}),b.evolution&&a.default.createElement(hh,{from:b.evolution.from,to:b.evolution.to,petName:b.pet.name,onDone:b.clearEvolution}),U&&a.default.createElement(mh,{ctl:w,level:x,totalXP:m,earned:$.earned,coins:$.coins,onClose:()=>te(!1)}),a.default.createElement("style",null,`
        /* ---- theme variables ----------------------------------------
           Defaults mirror the "terminal" theme so the app renders
           correctly before JS runs (no flash of unstyled colour).
           applyTheme() overwrites these at runtime. The transition makes
           theme switching fade rather than snap. */
        :root {
          --bg: #0B0D10;
          --panel: #14171C;
          --track: #1E2228;
          --border: #23272E;
          --text: #E7EAEE;
          --muted: #6B7280;
          --accent: #5EEAD4;
          --accent2: #F5A623;
          --danger: #F0576B;
          --glow: rgba(94,234,212,0.35);
          --blob1: radial-gradient(38% 42% at 18% 12%, rgba(94,234,212,0.065), transparent 70%);
          --blob2: radial-gradient(42% 38% at 82% 88%, rgba(245,166,35,0.055), transparent 70%);
          --blob3: radial-gradient(35% 40% at 62% 28%, rgba(121,192,255,0.045), transparent 70%);
          --grain-opacity: 0.018;
          --calm: 0;              /* 0 = normal, 1 = calm mode */
          --motion-scale: 1;      /* animations multiply durations by this */
        }

        /* Colour changes fade; the properties themselves can't transition,
           so we transition the things that consume them. */
        .app-root, .panel, .task-row, .hero-card, .timeline-wrap {
          transition: background-color 620ms ease, border-color 620ms ease,
                      color 620ms ease;
        }


        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        html, body, #root { height: 100%; }

        .app-root {
          height: 100vh;
          height: 100dvh;
          width: 100vw;
          background: var(--bg);
          font-family: 'Inter', sans-serif;
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vh 4vw;
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }

        /* Ambient background: three oversized, very low-opacity colour blooms
           drifting on long offset cycles. Sits behind everything via a
           pseudo-element with negative z-index so it can never affect the
           legibility or hit-testing of the panel on top. Opacity is kept
           under 0.07 -- at these values the shift reads as "the room's
           lighting changed", not as an animation demanding attention. */
        .app-root::before {
          content: "";
          position: absolute;
          inset: -25%;
          z-index: -1;
          pointer-events: none;
          background: var(--blob1), var(--blob2), var(--blob3);
          animation: ambientDrift 96s ease-in-out infinite alternate;
          will-change: transform;
        }

        /* Second, slower layer on a different cycle length so the two never
           line up -- keeps the motion from feeling like a loop. */
        .app-root::after {
          content: "";
          position: absolute;
          inset: -25%;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(46% 40% at 78% 18%, rgba(139,156,247,0.042), transparent 72%),
            radial-gradient(40% 44% at 22% 82%, rgba(94,234,212,0.038), transparent 72%);
          animation: ambientDriftAlt 138s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }

        @keyframes ambientDrift {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(2.5%, -2%, 0) scale(1.06); }
          100% { transform: translate3d(-2%, 2.5%, 0) scale(1.02); }
        }

        @keyframes ambientDriftAlt {
          0%   { transform: translate3d(0, 0, 0) scale(1.04); opacity: 0.75; }
          50%  { transform: translate3d(-3%, 2%, 0) scale(1); opacity: 1; }
          100% { transform: translate3d(2%, -2.5%, 0) scale(1.05); opacity: 0.8; }
        }

        .panel {
          position: relative;
          width: 100%;
          max-width: 640px;
          height: 100%;
          max-height: 780px;
          background: var(--panel);
          isolation: isolate;
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
          animation: panelIn 480ms cubic-bezier(.16,1,.3,1);
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 640px) {
          .app-root { padding: 0; }
          .panel {
            max-width: 100%;
            max-height: 100%;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
            border: none;
          }
        }

        @media (max-width: 420px) {
          .composer { flex-wrap: wrap; }
          .composer input[type="text"] { width: 100%; flex-basis: 100%; }
          .prio-select { flex: 1; justify-content: space-between; }
          .add-btn { flex: 0 0 38px; }
          .stats-row { flex-wrap: wrap; gap: 10px 16px; }
        }

        @keyframes panelIn {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-bottom: 1px solid var(--track);
        }

        .titlebar-left { display: flex; align-items: center; gap: 8px; }

        .dots { display: flex; gap: 6px; }
        .dot { width: 9px; height: 9px; border-radius: 50%; }
        .dot.red { background: var(--danger); }
        .dot.amber { background: var(--accent2); }
        .dot.green { background: var(--accent); }

        .titlebar-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .clock {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #4B5563;
        }

        .titlebar-right { display: flex; align-items: center; gap: 10px; }

        .titlebar-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          padding: 0;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: var(--panel);
          color: var(--muted);
          cursor: pointer;
          transition: color 140ms ease, border-color 140ms ease;
        }

        .titlebar-icon-btn:hover { color: var(--accent); border-color: var(--accent); }
        .titlebar-icon-btn.notify-on { color: var(--accent); border-color: var(--accent); background: rgba(94,234,212,0.08); }
        .titlebar-icon-btn:disabled { opacity: 0.5; cursor: default; }

        .data-toast {
          margin: 10px 18px 0;
          padding: 8px 12px;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          text-align: center;
          border: 1px solid var(--border);
          background: var(--panel);
          color: var(--text);
          animation: rowIn 200ms ease backwards;
        }

        .data-toast.ok { border-color: var(--accent); color: var(--accent); }
        .data-toast.err { border-color: var(--danger); color: var(--danger); }

        .tabs {
          display: flex;
          flex-shrink: 0;
          min-height: 42px;
          gap: 2px;
          padding: 10px 14px 0;
          border-bottom: 1px solid var(--track);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .tabs::-webkit-scrollbar { display: none; }

        .tabs button {
          border: none;
          background: transparent;
          color: #7C8591;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 9px 14px;
          white-space: nowrap;
          flex-shrink: 0;
          min-height: 30px;
          cursor: pointer;
          position: relative;
          transition: color 150ms ease;
        }

        .tabs button.active { color: var(--text); }

        .tabs button.active::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: -1px;
          height: 2px;
          background: var(--accent);
          box-shadow: 0 0 8px rgba(94,234,212,0.6);
          animation: tabIn 220ms ease;
        }

        @keyframes tabIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .hero-card {
          margin: 16px 18px;
          padding: 16px 18px;
          background: linear-gradient(160deg, #171B21, var(--panel));
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero-clock-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }

        .hero-clock {
          font-family: 'JetBrains Mono', monospace;
          font-size: 30px;
          font-weight: 700;
          color: var(--text);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.01em;
        }

        .hero-sec { font-size: 16px; color: var(--accent); }
        .hero-ampm {
          font-size: 13px;
          color: var(--muted);
          margin-left: 6px;
        }

        .hero-tz {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--accent);
          letter-spacing: 0.06em;
          background: rgba(94,234,212,0.08);
          border: 1px solid rgba(94,234,212,0.25);
          border-radius: 5px;
          padding: 4px 7px;
        }

        .hero-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          margin-top: 2px;
        }

        .hero-divider {
          height: 1px;
          background: var(--track);
          margin: 12px 0;
        }

        .hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.08em;
        }

        .hero-current-name {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 17px;
          font-weight: 600;
          color: var(--text);
          margin-top: 5px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 0 rgba(94,234,212,0.6);
          animation: pulse 1.8s ease-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(94,234,212,0.55); }
          70% { box-shadow: 0 0 0 9px rgba(94,234,212,0); }
          100% { box-shadow: 0 0 0 0 rgba(94,234,212,0); }
        }

        .hero-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          margin-top: 6px;
        }

        .composer.shake {
          animation: shake 380ms ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(3px); }
        }

        .time-input {
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 9px 10px;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          outline: none;
          color-scheme: dark;
          flex-shrink: 0;
          width: 110px;
          transition: border-color 160ms ease;
        }

        .time-input:focus { border-color: var(--accent); }

        .routine-list { padding-top: 2px; overflow-x: hidden; }

        .routine-row-wrap {
          position: relative;
          animation: rowIn 320ms cubic-bezier(.16,1,.3,1) backwards;
        }

        .routine-row-wrap.removing {
          animation: rowOut 220ms ease forwards;
        }

        .routine-delete-bg {
          position: absolute;
          inset: 0;
          background: var(--danger);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 18px;
        }

        .routine-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 2px 8px;
          background: var(--panel);
          touch-action: pan-y;
          user-select: none;
        }

        .routine-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 12px;
          flex-shrink: 0;
        }

        .routine-node {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #2A2F37;
          border: 2px solid #2A2F37;
          margin-top: 6px;
          flex-shrink: 0;
          transition: all 200ms ease;
        }

        .routine-node.quest-done {
          background: var(--accent2);
          border-color: var(--accent2);
          box-shadow: 0 0 8px rgba(245,166,35,0.6);
        }

        .routine-connector {
          width: 1.5px;
          flex: 1;
          background: var(--track);
          margin-top: 2px;
        }

        .routine-row.current .routine-node {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(94,234,212,0.7);
        }

        .routine-row.next .routine-node {
          border-color: var(--accent2);
        }

        .routine-main {
          flex: 1;
          padding-bottom: 20px;
          min-width: 0;
        }

        .routine-top {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .routine-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
        }

        .live-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--bg);
          background: var(--accent);
          padding: 1.5px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .streak-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--accent2);
        }

        .freeze-tag {
          margin-left: 2px;
          font-size: 10px;
        }

        .routine-label {
          display: block;
          font-size: 13.5px;
          color: var(--text);
          margin-top: 3px;
        }

        .routine-row.idle .routine-label,
        .routine-row.idle .routine-time { color: #4B5563; }

        .routine-alts {
          display: block;
          font-size: 11px;
          color: var(--muted);
          font-style: italic;
          margin-top: 2px;
        }

        .routine-span {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #4B5563;
          margin-top: 3px;
        }

        .quest-check {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 1.5px solid #2A2F37;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 4px;
          transition: background 200ms ease, border-color 200ms ease;
        }

        .quest-check.done {
          background: var(--accent2);
          border-color: var(--accent2);
        }

        /* inline edit form */
        .routine-edit {
          flex: 1;
          padding-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .edit-label {
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 8px 10px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          outline: none;
        }

        .edit-label:focus { border-color: var(--accent); }

        .edit-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .duration-input {
          width: 64px;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 8px 8px;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          outline: none;
        }

        .edit-unit {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
        }

        .edit-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .edit-actions button {
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          cursor: pointer;
        }

        .edit-cancel {
          background: transparent;
          color: var(--muted);
        }

        .edit-save {
          background: var(--accent);
          color: var(--bg);
          font-weight: 700;
        }

        /* quest stats + weekly chart */
        .quest-stats {
          display: flex;
          align-items: center;
          gap: 0;
          margin: 0 18px 14px;
          padding: 14px 16px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
        }

        .quest-stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          position: relative;
        }

        .quest-stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 2px;
          bottom: 2px;
          width: 1px;
          background: var(--track);
        }

        .quest-stat-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
        }

        .quest-stat-value.amber { color: var(--accent2); }

        .quest-stat-of {
          font-size: 12px;
          color: #4B5563;
          font-weight: 500;
        }

        .quest-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: var(--muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .quest-stat-ring {
          position: relative;
        }

        .quest-stat-pct {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          color: var(--accent);
        }

        /* ---- hero radial + xp split ---- */
        .hero-card-viz { gap: 0; }

        .hero-viz-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .hero-viz-stats {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .hero-xp-total {
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          font-weight: 700;
          color: var(--text);
          font-variant-numeric: tabular-nums;
        }

        .hero-xp-total small { font-size: 12px; color: var(--muted); font-weight: 500; }

        .hero-xp-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--muted);
        }

        .hero-xp-split { display: flex; gap: 12px; margin-top: 6px; }

        .hero-xp-earned, .hero-xp-lost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .hero-xp-earned { color: var(--accent); background: rgba(94,234,212,0.08); }
        .hero-xp-lost { color: var(--danger); background: rgba(240,87,107,0.08); }

        .radial-progress-wrap { position: relative; flex-shrink: 0; }

        .radial-progress-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .radial-progress-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
        }

        .radial-progress-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: var(--muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ---- radar chart ---- */
        .radar-card {
          margin: 0 18px 16px;
          padding: 10px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          animation: rowIn 260ms ease backwards;
        }

        .radar-ring { fill: none; stroke: var(--border); stroke-width: 1; }
        .radar-spoke { stroke: var(--track); stroke-width: 1; }
        .radar-fill { fill: rgba(94,234,212,0.16); stroke: var(--accent); stroke-width: 1.5; }
        .radar-label {
          fill: #9CA3AF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          letter-spacing: -0.01em;
        }

        @media (min-width: 900px) {
          .radar-label { font-size: 9px; }
        }

        /* ---- donut chart ---- */
        .donut-card {
          margin: 0 18px 16px;
          padding: 14px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 18px;
          animation: rowIn 300ms ease backwards;
        }

        .donut-wrap { position: relative; flex-shrink: 0; }

        .donut-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .donut-center-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
        }

        .donut-center-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .donut-legend { display: flex; flex-direction: column; gap: 8px; min-width: 0; flex: 1; }

        .donut-legend-row {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          color: #9CA3AF;
        }

        .donut-legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        .donut-legend-val {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text);
        }

        /* ---- calendar heatmap ---- */
        .heatmap-wrap {
          margin: 0 18px 16px;
          padding: 14px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          animation: rowIn 260ms ease backwards;
          overflow-x: auto;
        }

        .heatmap-grid { display: flex; gap: 3px; }

        .heatmap-col { display: flex; flex-direction: column; gap: 3px; }

        .heatmap-cell {
          width: 10px;
          height: 10px;
          border-radius: 2.5px;
          animation: heatmapIn 260ms ease backwards;
        }

        .heatmap-cell.today { box-shadow: 0 0 0 1.5px var(--accent); }

        @keyframes heatmapIn {
          from { opacity: 0; transform: scale(0.4); }
          to { opacity: 1; transform: scale(1); }
        }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: var(--muted);
        }

        .heatmap-legend-cell { width: 9px; height: 9px; border-radius: 2px; }

        /* ---- day timeline ---- */
        .timeline-wrap {
          margin: 0 18px 16px;
          padding: 14px 0 12px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          animation: rowIn 220ms ease backwards;
          overflow: hidden;
        }

        .timeline-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 14px 10px;
        }

        .timeline-head-left {
          display: flex;
          align-items: baseline;
          gap: 9px;
          min-width: 0;
        }

        .timeline-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8B94A0;
        }

        .timeline-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--accent);
          font-variant-numeric: tabular-nums;
        }

        .timeline-jump {
          flex-shrink: 0;
          background: transparent;
          border: 1px solid #2C323A;
          border-radius: 999px;
          color: var(--accent2);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          cursor: pointer;
          transition: border-color 150ms ease, background 150ms ease;
        }

        .timeline-progress {
          height: 2px;
          margin: 0 14px 12px;
          background: var(--track);
          border-radius: 2px;
          overflow: hidden;
        }

        .timeline-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), #79C0FF);
          border-radius: 2px;
          transition: width 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* The scroll window. The track inside is wider than this on phones,
           which is what finally gives blocks enough room to be readable.
           overscroll-behavior-x keeps a sideways swipe from triggering
           browser back-navigation. */
        .timeline-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #2C323A transparent;
          padding: 0 14px;
        }

        .timeline-scroll::-webkit-scrollbar { height: 4px; }
        .timeline-scroll::-webkit-scrollbar-track { background: transparent; }
        .timeline-scroll::-webkit-scrollbar-thumb {
          background: #2C323A;
          border-radius: 2px;
        }

        .timeline-inner { position: relative; }

        .timeline-hours {
          position: relative;
          height: 13px;
          margin-bottom: 5px;
        }

        .timeline-hour {
          position: absolute;
          top: 0;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: #4B5563;
          white-space: nowrap;
        }

        .timeline-track {
          position: relative;
          min-height: 54px;
          background: #191D23;
          border-radius: 8px;
          overflow: hidden;
          transition: height 220ms ease;
        }

        .timeline-night {
          position: absolute;
          top: 0;
          bottom: 0;
          background: rgba(0,0,0,0.30);
        }

        .timeline-gridline {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.04);
        }

        .timeline-gridline.major { background: rgba(255,255,255,0.08); }

        .timeline-elapsed {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          background: rgba(94,234,212,0.045);
          transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .timeline-block {
          position: absolute;
          border-radius: 6px;
          transition: width 500ms cubic-bezier(0.22, 1, 0.36, 1), top 220ms ease;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .timeline-block.active {
          outline: 1.5px solid rgba(255,255,255,0.55);
          outline-offset: -1.5px;
        }

        .timeline-block-label {
          padding: 0 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 600;
          color: var(--bg);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .timeline-block-tick { margin-right: 4px; opacity: 0.85; }
        .timeline-block.done .timeline-block-label { color: #8B94A0; }

        .timeline-now {
          position: absolute;
          top: -4px;
          bottom: -4px;
          width: 2px;
          background: var(--accent2);
          box-shadow: 0 0 8px rgba(245,166,35,0.7);
          z-index: 2;
          pointer-events: none;
        }

        .timeline-now::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent2);
          box-shadow: 0 0 6px rgba(245,166,35,0.9);
        }

        .timeline-hint {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.06em;
          color: #4B5563;
          text-align: center;
          padding: 9px 14px 0;
        }

        @media (hover: hover) and (pointer: fine) {
          .timeline-jump:hover {
            border-color: var(--accent2);
            background: rgba(245,166,35,0.1);
          }
        }

        /* ---- shared micro-interactions ---- */
        button, .vault-check, .today-task-check, .add-btn {
          transition: transform 120ms ease, opacity 120ms ease;
        }
        button:active, .vault-check:active, .today-task-check:active, .add-btn:active {
          transform: scale(0.92);
        }

        .task-list { animation: viewFadeIn 220ms ease; }

        @keyframes viewFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tab-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          animation: tabIn 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes tabIn {
          from { opacity: 0; transform: translateY(10px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .tab-content { animation: none !important; }
        }




        /* ---- microinteractions (v22) ---- */

        /* completion pulse: a one-shot ring that expands and fades. Applied
           via a class the component removes on animationend, so it can
           retrigger. transform/opacity only -- compositor, no layout. */
        @keyframes completePulse {
          0%   { box-shadow: 0 0 0 0 var(--glow); }
          100% { box-shadow: 0 0 0 16px rgba(0,0,0,0); }
        }
        .just-completed { animation: completePulse 620ms ease-out; }

        /* floating +XP */
        .xp-pop {
          position: absolute;
          right: 12px; top: 50%;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; font-weight: 700;
          color: var(--accent);
          text-shadow: 0 0 10px var(--glow);
          pointer-events: none;
          animation: xpFloat 1000ms cubic-bezier(.16,1,.3,1) forwards;
          z-index: 5;
        }
        @keyframes xpFloat {
          0%   { transform: translateY(0) scale(0.85); opacity: 0; }
          22%  { transform: translateY(-8px) scale(1.08); opacity: 1; }
          100% { transform: translateY(-34px) scale(1); opacity: 0; }
        }

        /* light burst, used on theme unlock + level up */
        .burst {
          position: fixed; left: 50%; top: 42%;
          width: 10px; height: 10px; margin: -5px 0 0 -5px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 30px 10px var(--glow);
          pointer-events: none; z-index: 70;
          animation: burstOut 900ms cubic-bezier(.16,1,.3,1) forwards;
        }
        @keyframes burstOut {
          0%   { transform: scale(0.4); opacity: 0.95; }
          100% { transform: scale(26); opacity: 0; }
        }

        /* whole-screen breath on level up */
        .screen-pulse {
          position: fixed; inset: 0; z-index: 65; pointer-events: none;
          background: radial-gradient(circle at 50% 45%, var(--glow), transparent 62%);
          animation: screenPulse 1100ms ease-out forwards;
        }
        @keyframes screenPulse {
          0%   { opacity: 0; }
          28%  { opacity: 0.75; }
          100% { opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .just-completed, .xp-pop, .burst, .screen-pulse { animation: none !important; }
          .xp-pop, .burst, .screen-pulse { display: none !important; }
        }



        /* Scoped ambience: the same layers, rendered INSIDE the panel.
           .panel is opaque, so the fixed layers behind it are invisible --
           on phones the panel is full-bleed and covers the screen entirely.
           These sit at z-index 0 with all real content lifted to 1. */
        .amb-scoped {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
        }

        .amb-scoped.amb-blobs {
          background:
            radial-gradient(58% 42% at 14% 8%,  var(--accent),  transparent 62%),
            radial-gradient(52% 40% at 88% 92%, var(--accent2), transparent 62%),
            radial-gradient(46% 38% at 72% 26%, var(--accent),  transparent 66%),
            radial-gradient(50% 44% at 26% 74%, var(--accent2), transparent 66%);
          /* the gradients use full-strength theme colours and are dimmed
             here, so every theme keeps its own character */
          opacity: 0.14;
          animation: ambientDrift calc(96s * var(--motion-scale)) ease-in-out infinite alternate;
          transform-origin: center;
        }

        /* a second, slower counter-drifting layer stops it reading as a
           static wash */
        .amb-scoped.amb-blobs::after {
          content: "";
          position: absolute;
          inset: -18%;
          background:
            radial-gradient(46% 40% at 78% 18%, var(--accent),  transparent 64%),
            radial-gradient(44% 42% at 20% 84%, var(--accent2), transparent 64%);
          opacity: 0.55;
          animation: ambientDriftAlt calc(138s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        /* the time-of-day wash needs more presence inside the panel too */
        .amb-scoped.amb-time {
          background: radial-gradient(130% 78% at 50% -8%, var(--time-warm), transparent 62%);
          opacity: calc(var(--time-light, 1) * 2.2);
        }

        /* Everything the user actually reads sits above the ambience. */
        .panel > .titlebar,
        .panel > .tabs,
        .panel > .tab-content,
        .panel > .data-msg,
        .panel > .banner { position: relative; z-index: 1; }


        /* ---- achievements + rewards (v24) ---- */
        .ach-toast {
          position: fixed; left: 50%; top: 16px;
          transform: translateX(-50%);
          z-index: 90; width: calc(100% - 32px); max-width: 380px;
          display: flex; align-items: center; gap: 11px;
          padding: 11px 13px; cursor: pointer;
          background: var(--panel);
          border: 1px solid var(--accent);
          border-radius: 12px;
          box-shadow: 0 8px 30px -8px var(--glow);
          animation: achIn 420ms cubic-bezier(.16,1,.3,1);
        }
        @keyframes achIn {
          from { transform: translate(-50%, -20px); opacity: 0; }
          to   { transform: translate(-50%, 0);     opacity: 1; }
        }
        .ach-toast-icon {
          font-size: 20px; color: var(--accent);
          text-shadow: 0 0 12px var(--glow); flex-shrink: 0;
        }
        .ach-toast-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1; }
        .ach-toast-kicker {
          font-family: 'JetBrains Mono', monospace; font-size: 8px;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent);
        }
        .ach-toast-name { font-size: 13px; font-weight: 600; color: var(--text); }
        .ach-toast-desc { font-size: 10px; color: var(--muted); }
        .ach-toast-coins {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          font-weight: 700; color: var(--accent2); flex-shrink: 0;
        }

        /* level reward */
        .lvl-backdrop {
          position: fixed; inset: 0; z-index: 85;
          background: rgba(0,0,0,0.8);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 300ms ease;
        }
        .lvl-card {
          text-align: center; padding: 28px 22px; width: 88%; max-width: 340px;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 18px;
          animation: sheetUp 520ms cubic-bezier(.16,1,.3,1);
        }
        .lvl-kicker {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          letter-spacing: 0.3em; text-transform: uppercase; color: var(--accent2);
        }
        .lvl-num {
          font-family: 'JetBrains Mono', monospace; font-size: 62px; font-weight: 700;
          line-height: 1.05; color: var(--accent);
          text-shadow: 0 0 26px var(--glow); margin: 6px 0 2px;
        }
        .lvl-title { font-size: 13px; color: var(--text); margin-bottom: 18px; }
        .lvl-rewards {
          display: flex; flex-direction: column; gap: 8px;
          padding: 14px 0; border-top: 1px solid var(--track); border-bottom: 1px solid var(--track);
        }
        .lvl-reward { display: flex; align-items: center; gap: 9px; justify-content: center; }
        .lvl-reward-icon { font-size: 14px; color: var(--accent2); }
        .lvl-reward-text { font-size: 12px; color: var(--text); }
        .lvl-reward-text b { color: var(--accent); }
        .lvl-next {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--muted); margin-top: 12px;
        }

        /* gallery */
        .ach-section { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--track); }
        .ach-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px; }
        .ach-count {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px; color: var(--accent2);
        }
        .ach-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 7px; }
        @media (min-width: 520px) { .ach-grid { grid-template-columns: repeat(3, 1fr); } }
        .ach-card {
          display: flex; flex-direction: column; gap: 2px;
          padding: 9px; border-radius: 10px;
          background: var(--bg); border: 1px solid var(--border);
          opacity: 0.5;
        }
        .ach-card.got { opacity: 1; border-color: var(--accent); }
        .ach-icon { font-size: 15px; color: var(--muted); }
        .ach-card.got .ach-icon { color: var(--accent); text-shadow: 0 0 10px var(--glow); }
        .ach-name {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          font-weight: 600; color: var(--text);
        }
        .ach-desc { font-size: 8.5px; color: var(--muted); line-height: 1.35; }
        .ach-coins {
          font-family: 'JetBrains Mono', monospace; font-size: 8.5px;
          color: var(--accent2); margin-top: 2px;
        }
        .ach-hidden-note {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--muted); text-align: center; margin-top: 10px; font-style: italic;
        }

        @media (prefers-reduced-motion: reduce) {
          .ach-toast, .lvl-card { animation: none !important; }
        }

        /* ---- pet (v23) ---- */
        .tabs button.tab-pet { color: var(--accent2); }

        .pet-svg { display: block; overflow: visible; }
        .pet-anim .pet-head   { animation: petBob calc(3.4s * var(--motion-scale)) ease-in-out infinite; transform-origin: 64px 60px; }
        .pet-anim .pet-body   { animation: petBreathe calc(4.2s * var(--motion-scale)) ease-in-out infinite; transform-origin: 64px 84px; }
        .pet-anim .pet-tail   { animation: petTail calc(2.8s * var(--motion-scale)) ease-in-out infinite; transform-origin: 88px 82px; }
        .pet-anim .pet-aura   { animation: petAura calc(5.5s * var(--motion-scale)) ease-in-out infinite; transform-origin: 64px 74px; }
        .pet-anim .pet-orbit  { animation: petOrbit calc(14s * var(--motion-scale)) linear infinite; transform-origin: 64px 74px; }
        .pet-anim .pet-wings  { animation: petWings calc(3s * var(--motion-scale)) ease-in-out infinite; transform-origin: 64px 72px; }
        .pet-anim .pet-eyes   { animation: petBlink 6.5s steps(1, end) infinite; transform-origin: center; }

        @keyframes petBob     { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2.5px); } }
        @keyframes petBreathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.035); } }
        @keyframes petTail    { 0%,100% { transform: rotate(-7deg); } 50% { transform: rotate(9deg); } }
        @keyframes petAura    { 0%,100% { opacity: 0.55; transform: scale(0.97); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes petOrbit   { to { transform: rotate(360deg); } }
        @keyframes petWings   { 0%,100% { transform: scaleY(1) scaleX(1); } 50% { transform: scaleY(0.86) scaleX(1.04); } }
        @keyframes petBlink   { 0%,93%,100% { transform: scaleY(1); } 95% { transform: scaleY(0.08); } }

        .pet-evolving { animation: petEvolve 1500ms cubic-bezier(.16,1,.3,1); }
        @keyframes petEvolve {
          0%   { transform: scale(0.55) rotate(-8deg); opacity: 0; filter: brightness(3); }
          45%  { transform: scale(1.16) rotate(3deg);  opacity: 1; filter: brightness(1.9); }
          100% { transform: scale(1) rotate(0);        opacity: 1; filter: brightness(1); }
        }

        .pet-scroll { padding-top: 6px; }
        .pet-stage {
          display: flex; flex-direction: column; align-items: center;
          padding: 6px 16px 4px;
        }
        .pet-id { display: flex; flex-direction: column; align-items: center; gap: 2px; margin-top: -6px; }
        .pet-name, .pet-name-input {
          font-family: 'JetBrains Mono', monospace; font-size: 17px; font-weight: 700;
          color: var(--text); background: transparent; border: none; cursor: pointer;
          text-align: center; padding: 2px 6px; border-radius: 6px;
        }
        .pet-name-input { border: 1px solid var(--accent); width: 130px; outline: none; }
        .pet-form { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--accent); }
        .pet-bond { font-size: 9.5px; color: var(--muted); }

        .pet-speech {
          margin: 12px 16px 14px; padding: 11px 13px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--accent); border-radius: 10px;
          font-size: 12.5px; line-height: 1.5; color: var(--text);
        }

        .pet-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 9px 14px;
          padding: 0 16px 12px;
        }
        .pet-stat-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; }
        .pet-stat-label {
          font-family: 'JetBrains Mono', monospace; font-size: 8.5px;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted);
        }
        .pet-stat-val { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--text); }
        .pet-stat-track { height: 4px; background: var(--track); border-radius: 3px; overflow: hidden; }
        .pet-stat-fill { height: 100%; border-radius: 3px; transition: width 700ms cubic-bezier(.16,1,.3,1); }

        .pet-next {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          color: var(--muted); text-align: center; padding: 0 16px 12px;
        }

        .pet-chat {
          margin: 0 16px; padding: 10px; max-height: 240px; overflow-y: auto;
          background: var(--bg); border: 1px solid var(--border); border-radius: 10px;
          display: flex; flex-direction: column; gap: 7px;
        }
        .pet-chat-empty { font-size: 10.5px; color: var(--muted); text-align: center; padding: 12px 0; }
        .pet-msg {
          font-size: 12px; line-height: 1.45; padding: 8px 10px;
          border-radius: 9px; max-width: 86%; word-break: break-word;
        }
        .pet-msg.user { align-self: flex-end; background: var(--track); color: var(--text); }
        .pet-msg.pet  { align-self: flex-start; background: var(--panel); border: 1px solid var(--border); color: var(--text); }
        .pet-msg.thinking { display: flex; gap: 4px; align-items: center; }

        .pet-composer { display: flex; gap: 8px; padding: 12px 16px 18px; }
        .pet-input {
          flex: 1; background: var(--bg); border: 1px solid var(--border);
          border-radius: 8px; color: var(--text); font-family: 'Inter', sans-serif;
          font-size: 12.5px; padding: 10px 12px; outline: none;
          transition: border-color 140ms ease;
        }
        .pet-input:focus { border-color: var(--accent); }
        .pet-send {
          background: var(--accent); color: var(--bg); border: none; border-radius: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700;
          letter-spacing: 0.06em; padding: 0 18px; cursor: pointer;
        }
        .pet-send:disabled { opacity: 0.35; cursor: default; }

        /* ---- evolution overlay ---- */
        .evo-backdrop {
          position: fixed; inset: 0; z-index: 80;
          background: rgba(0,0,0,0.78);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 280ms ease;
        }
        .evo-card {
          text-align: center; padding: 26px 22px;
          max-width: 340px; width: 88%;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 18px;
          animation: sheetUp 480ms cubic-bezier(.16,1,.3,1);
        }
        .evo-kicker {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          letter-spacing: 0.28em; text-transform: uppercase; color: var(--accent2);
          margin-bottom: 14px;
        }
        .evo-stage-row { display: flex; align-items: center; justify-content: center; gap: 6px; }
        .evo-old { opacity: 0.42; }
        .evo-arrow { color: var(--muted); font-size: 15px; }
        .evo-name { font-size: 15px; color: var(--text); margin-top: 12px; }
        .evo-name b { color: var(--accent); }
        .evo-title { font-size: 11px; color: var(--muted); margin-top: 3px; }
        .evo-btn {
          margin-top: 20px; width: 100%;
          background: var(--accent); color: var(--bg); border: none;
          border-radius: 9px; padding: 11px 0; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          font-weight: 700; letter-spacing: 0.08em;
        }

        @media (prefers-reduced-motion: reduce) {
          .pet-anim .pet-head, .pet-anim .pet-body, .pet-anim .pet-tail,
          .pet-anim .pet-aura, .pet-anim .pet-orbit, .pet-anim .pet-wings,
          .pet-anim .pet-eyes, .pet-evolving { animation: none !important; }
        }

        /* ---- bottom sheet (themes / settings) ---- */
        .sheet-backdrop {
          position: fixed; inset: 0; z-index: 60;
          background: rgba(0,0,0,0.55);
          display: flex; align-items: flex-end; justify-content: center;
          animation: fadeIn 200ms ease;
        }
        @media (min-width: 900px) { .sheet-backdrop { align-items: center; } }

        .sheet {
          width: 100%; max-width: 520px; max-height: 86vh; overflow-y: auto;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 16px 16px 0 0;
          padding: 16px 16px 22px;
          animation: sheetUp 320ms cubic-bezier(.16,1,.3,1);
        }
        @media (min-width: 900px) { .sheet { border-radius: 16px; } }

        @keyframes sheetUp { from { transform: translateY(22px); opacity: 0; } to { transform: none; opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .sheet-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .sheet-title {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--text);
        }
        .sheet-close {
          background: transparent; border: none; color: var(--muted);
          font-size: 22px; line-height: 1; cursor: pointer; padding: 0 4px;
        }
        .sheet-sub, .sheet-foot {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          color: var(--muted); text-align: center; margin-top: 12px;
        }
        .sheet-foot { margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--track); }

        .theme-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px;
        }
        @media (min-width: 520px) { .theme-grid { grid-template-columns: repeat(3, 1fr); } }

        .theme-card {
          display: flex; flex-direction: column; align-items: flex-start; gap: 4px;
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 11px; padding: 9px; cursor: pointer; text-align: left;
          font-family: inherit; transition: border-color 180ms ease, transform 180ms ease;
        }
        .theme-card.active { border-color: var(--accent); }
        .theme-card.locked { cursor: not-allowed; opacity: 0.72; }
        .theme-card:not(:disabled):active { transform: scale(0.975); }

        .theme-swatch {
          width: 100%; height: 46px; border-radius: 7px; position: relative;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .theme-lock { color: rgba(255,255,255,0.82); }
        .theme-active-dot {
          position: absolute; top: 5px; right: 5px;
          width: 7px; height: 7px; border-radius: 50%;
          background: #fff; box-shadow: 0 0 6px rgba(255,255,255,0.9);
        }
        .theme-name {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          font-weight: 600; color: var(--text); margin-top: 2px;
        }
        .theme-blurb { font-size: 9px; color: var(--muted); line-height: 1.35; }
        .theme-req {
          font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--accent2);
        }
        .theme-bar {
          width: 100%; height: 3px; background: var(--track);
          border-radius: 2px; overflow: hidden; margin-top: 2px;
        }
        .theme-bar-fill {
          display: block; height: 100%; background: var(--accent2);
          border-radius: 2px; transition: width 600ms cubic-bezier(.16,1,.3,1);
        }
        .theme-pct { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--muted); }

        /* ---- calm toggle ---- */
        .calm-toggle-row {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--track);
        }
        .calm-toggle-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--text);
        }
        .calm-toggle-hint { font-size: 9.5px; color: var(--muted); margin-top: 2px; }
        .calm-switch {
          flex-shrink: 0; width: 42px; height: 24px; border-radius: 999px;
          background: var(--track); border: 1px solid var(--border);
          position: relative; cursor: pointer; transition: background 220ms ease, border-color 220ms ease;
        }
        .calm-switch.on { background: var(--accent); border-color: var(--accent); }
        .calm-knob {
          position: absolute; top: 2px; left: 2px;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--muted); transition: transform 220ms cubic-bezier(.16,1,.3,1), background 220ms ease;
        }
        .calm-switch.on .calm-knob { transform: translateX(18px); background: var(--bg); }

        @media (hover: hover) and (pointer: fine) {
          .theme-card:not(:disabled):hover { border-color: var(--accent); }
          .sheet-close:hover { color: var(--text); }
        }

        /* ---- ambient engine (v22) -----------------------------------
           Four stacked layers, all pointer-events:none and behind the
           panel. Layers are pure CSS -- no canvas, no rAF loop -- so the
           cost is compositor-only and the main thread stays free.
             ::before  theme blobs        (drift, 96s)
             ::after   secondary blobs    (drift, 138s)
             .amb-time time-of-day wash + light ray
             .amb-dust particle field     (theme dependent)
        */
        .amb-layer {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          contain: strict;
        }

        .amb-time {
          background:
            radial-gradient(120% 80% at 50% -10%, var(--time-warm), transparent 65%);
          opacity: var(--time-light, 1);
          transition: opacity 2s ease, background 2s ease;
        }

        /* a single soft diagonal shaft, very faint, slowly sweeping */
        .amb-ray {
          position: absolute;
          top: -40%;
          left: -20%;
          width: 55%;
          height: 190%;
          background: linear-gradient(
            105deg, transparent 0%, rgba(255,255,255,0.022) 45%,
            rgba(255,255,255,0.032) 50%, rgba(255,255,255,0.022) 55%, transparent 100%);
          filter: blur(26px);
          transform: rotate(8deg);
          animation: raySweep calc(180s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        @keyframes raySweep {
          0%   { transform: translateX(-12%) rotate(8deg); opacity: 0.55; }
          100% { transform: translateX(115%) rotate(8deg); opacity: 0.95; }
        }

        /* film grain: one tiny repeating SVG, no image request */
        .amb-grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: var(--grain-opacity, 0.018);
          mix-blend-mode: overlay;
        }

        /* ---- particles ---- */
        .amb-dust span {
          position: absolute;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          animation: floatUp linear infinite;
          will-change: transform, opacity;
        }

        @keyframes floatUp {
          0%   { transform: translateY(8vh) scale(0.7); opacity: 0; }
          12%  { opacity: 0.5; }
          88%  { opacity: 0.4; }
          100% { transform: translateY(-102vh) scale(1.05); opacity: 0; }
        }

        /* bubbles rise faster and wobble; embers glow warm and fade early */
        [data-particle="bubbles"] .amb-dust span {
          background: transparent;
          border: 1px solid var(--accent);
        }
        [data-particle="embers"] .amb-dust span {
          background: var(--accent2);
          box-shadow: 0 0 6px var(--glow);
        }
        [data-particle="aurora"] .amb-dust span {
          background: linear-gradient(180deg, var(--accent), var(--accent2));
          filter: blur(1px);
        }

        /* stars only at night, and only as a static field so they don't
           compete with the drifting layers */
        .amb-stars span {
          position: absolute;
          width: 2px; height: 2px;
          border-radius: 50%;
          background: #FFFFFF;
          animation: twinkle ease-in-out infinite alternate;
        }
        @keyframes twinkle {
          from { opacity: 0.12; }
          to   { opacity: 0.6; }
        }

        /* ---- calm mode ----------------------------------------------
           Slows everything (via --motion-scale), lifts blur, dims accents
           and hides secondary chrome. Navigation stays fully usable. */
        .calm-mode .amb-layer { filter: blur(14px) saturate(0.82); }
        .calm-mode .panel {
          filter: saturate(0.85) brightness(0.96);
          transition: filter 900ms ease;
        }
        .calm-mode .amb-grain { opacity: calc(var(--grain-opacity) * 0.4); }

        .calm-breath {
          position: fixed;
          left: 50%; top: 50%;
          width: 220px; height: 220px;
          margin: -110px 0 0 -110px;
          border-radius: 50%;
          border: 1px solid var(--accent);
          background: radial-gradient(circle, var(--glow), transparent 68%);
          opacity: 0.5;
          z-index: -1;
          pointer-events: none;
          animation: breathe 11s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(0.72); opacity: 0.30; }
          42%      { transform: scale(1.16); opacity: 0.62; }
          58%      { transform: scale(1.16); opacity: 0.62; }
        }

        @media (prefers-reduced-motion: reduce) {
          .amb-ray, .amb-dust span, .amb-stars span, .calm-breath {
            animation: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .radar-fill, .timeline-block, .heatmap-cell, .task-list,
          .radial-progress-wrap circle, .donut-wrap circle {
            animation: none !important;
            transition: none !important;
          }
          /* freeze the ambient background -- the gradients stay, only the
             drift stops, so the look is unchanged for these users */
          .app-root::before, .app-root::after {
            animation: none !important;
          }
        }

        .duration-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 0 18px 14px;
        }

        .duration-chips button {
          border: 1px solid var(--border);
          background: #0F1215;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .duration-chips button.active {
          background: rgba(94,234,212,0.12);
          border-color: var(--accent);
          color: var(--accent);
        }

        .duration-custom {
          width: 58px;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 5px 8px;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          outline: none;
        }

        .stats-bar {
          padding: 18px 18px 14px;
          border-bottom: 1px solid var(--track);
        }

        .stats-bar-viz {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stats-row-viz {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #9CA3AF;
        }

        .stats-row-viz b { color: var(--text); font-weight: 700; }

        .stats-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 10px;
        }

        .stats-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .stats-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          font-weight: 700;
          color: var(--accent);
          font-variant-numeric: tabular-nums;
        }

        .progress-track {
          height: 6px;
          background: var(--track);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), #7BF0DD);
          border-radius: 3px;
          transition: width 420ms cubic-bezier(.65,0,.35,1);
          box-shadow: 0 0 12px rgba(94,234,212,0.5);
        }

        .stats-row {
          display: flex;
          gap: 16px;
          margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
        }

        .stats-row b { color: var(--text); font-weight: 600; }

        .composer {
          padding: 16px 18px;
          display: flex;
          gap: 8px;
          border-bottom: 1px solid var(--track);
        }

        .composer input[type="text"] {
          flex: 1;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 12px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .composer input[type="text"]::placeholder { color: #4B5563; }

        .composer input[type="text"]:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(94,234,212,0.12);
        }

        .prio-select {
          display: flex;
          gap: 4px;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 3px;
        }

        .alt-toggle-btn {
          flex-shrink: 0;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0 12px;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .alt-toggle-btn:hover { color: #9CA3AF; border-color: #2C3138; }
        .alt-toggle-btn.active { color: var(--accent); border-color: var(--accent); background: rgba(94,234,212,0.08); }

        .alt-composer {
          margin: 0 18px 14px;
          padding: 10px 12px;
          background: #0F1215;
          border: 1px dashed var(--border);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .alt-composer-hint {
          font-size: 10.5px;
          color: #565D68;
        }

        .alt-composer-row {
          display: flex;
          gap: 6px;
        }

        .alt-composer-row input[type="text"] {
          flex: 1;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 8px 10px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          outline: none;
        }

        .alt-composer-row input[type="text"]:focus { border-color: var(--accent); }

        .alt-remove-btn {
          flex-shrink: 0;
          width: 30px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--muted);
          font-size: 15px;
          cursor: pointer;
        }

        .alt-remove-btn:hover { color: var(--danger); border-color: var(--danger); }

        .alt-add-btn {
          align-self: flex-start;
          background: transparent;
          border: none;
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          padding: 2px 0;
        }

        .alt-add-btn:hover { text-decoration: underline; }

        .routine-edit .alt-composer { margin-left: 0; margin-right: 0; }

        .prio-select button {
          border: none;
          background: transparent;
          padding: 7px 9px;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--muted);
          cursor: pointer;
          transition: all 150ms ease;
          text-transform: uppercase;
        }

        .prio-select button.active {
          background: var(--track);
          color: var(--pc);
        }

        .add-btn {
          background: var(--accent);
          border: none;
          border-radius: 8px;
          width: 38px;
          color: var(--bg);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 120ms ease, background 150ms ease;
          flex-shrink: 0;
        }

        .add-btn:hover { background: #7BF0DD; }
        .add-btn:active { transform: scale(0.92); }

        .filters {
          display: flex;
          gap: 4px;
          padding: 12px 18px;
        }

        .filters button {
          border: none;
          background: transparent;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .filters button.active {
          background: var(--track);
          color: var(--text);
        }

        .filters .spacer { flex: 1; }

        .clear-btn {
          border: none;
          background: transparent;
          color: #4B5563;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          transition: color 150ms ease;
        }
        .clear-btn:hover { color: var(--danger); }

        .task-list {
          padding: 6px 10px 16px;
          flex: 1;
          min-height: 0;
          overflow-y: auto;
        }

        .task-row {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 8px;
          border-radius: 8px;
          animation: rowIn 320ms cubic-bezier(.16,1,.3,1) backwards;
          transition: background 150ms ease;
        }

        .task-row:hover { background: #191D23; }

        .task-row.leaving {
          animation: rowOut 220ms ease forwards;
        }

        @keyframes rowIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes rowOut {
          to { opacity: 0; transform: translateX(12px) scale(0.97); max-height: 0; padding: 0 8px; }
        }

        .checkbox-btn {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          border: 1.5px solid var(--c);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 200ms ease;
        }

        .checkbox-btn[aria-checked="true"] {
          background: var(--c);
        }

        .task-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .task-text {
          font-size: 13.5px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: color 200ms ease;
        }

        .task-text.done {
          color: #4B5563;
          text-decoration: line-through;
        }

        .task-meta {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #4B5563;
        }

        .prio-dot { width: 5px; height: 5px; border-radius: 50%; }
        .prio-label { text-transform: uppercase; letter-spacing: 0.04em; }
        .dot-sep { color: #2A2F37; }

        .del-btn {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 4px;
          display: flex;
          opacity: 0;
          transition: all 150ms ease;
          flex-shrink: 0;
        }

        .task-row:hover .del-btn { opacity: 1; color: var(--muted); }
        .del-btn:hover { color: var(--danger) !important; }

        .empty-state {
          text-align: center;
          padding: 48px 20px;
          color: #4B5563;
        }

        .empty-state .glyph {
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          color: #2A2F37;
          margin-bottom: 8px;
        }

        .empty-state .msg {
          font-size: 12.5px;
        }

        .task-list::-webkit-scrollbar { width: 6px; }
        .task-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
        .task-list::-webkit-scrollbar-track { background: transparent; }

        .today-view { padding-bottom: 24px; }

        .today-section-header {
          padding: 16px 16px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: var(--muted);
        }

        .today-section-header:first-child { padding-top: 14px; }

        .today-view-all {
          border: none;
          background: transparent;
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          cursor: pointer;
          padding: 0;
        }

        .today-xp-total {
          color: var(--accent2);
          font-family: 'JetBrains Mono', monospace;
        }

        .today-card {
          margin: 0 16px;
          padding: 14px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--panel);
          animation: rowIn 220ms ease backwards;
        }

        .today-card-row { display: flex; align-items: baseline; gap: 10px; }

        .today-card-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--accent);
        }

        .today-card-label {
          font-size: 15px;
          font-weight: 500;
          color: var(--text);
        }

        .today-card-sub {
          margin-top: 4px;
          font-size: 11.5px;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
        }

        .today-mark-btn {
          margin-top: 12px;
          width: 100%;
          padding: 9px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: transparent;
          color: #9CA3AF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          cursor: pointer;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .today-mark-btn:hover { border-color: var(--accent); color: var(--accent); }
        .today-mark-btn.done { border-color: var(--accent); color: var(--accent); background: rgba(94,234,212,0.08); }

        .today-list { margin: 0 16px; display: flex; flex-direction: column; gap: 6px; }

        .today-task-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid var(--track);
          border-radius: 8px;
          background: var(--panel);
          animation: rowIn 200ms ease backwards;
        }

        .today-task-check {
          width: 16px;
          height: 16px;
          border-radius: 5px;
          border: 1.5px solid #3A3F47;
          background: transparent;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
        }

        .today-task-check:hover { border-color: var(--accent); }

        .today-task-text {
          flex: 1;
          font-size: 13px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .today-prio-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .today-prio-dot.high { background: var(--accent2); }
        .today-prio-dot.mid { background: var(--accent); }
        .today-prio-dot.low { background: var(--muted); }

        .today-more {
          border: none;
          background: transparent;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-align: left;
          padding: 6px 12px;
          cursor: pointer;
        }

        .today-more:hover { color: var(--accent); }

        .today-reward-cost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent2);
          flex-shrink: 0;
        }

        .today-claim-btn {
          border: 1px solid var(--accent);
          border-radius: 6px;
          background: transparent;
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .today-claim-btn:hover { background: rgba(94,234,212,0.1); }

        @media (prefers-reduced-motion: reduce) {
          .panel, .task-row, .progress-fill { animation: none !important; transition: none !important; }
        }

        .quest-banner {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #171B21;
          border: 1px solid var(--accent);
          box-shadow: 0 8px 24px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(94,234,212,0.15);
          border-radius: 10px;
          padding: 10px 12px;
          cursor: pointer;
          animation: bannerIn 340ms cubic-bezier(.16,1,.3,1);
        }

        @keyframes bannerIn {
          from { opacity: 0; transform: translateY(-14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quest-banner-icon {
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          flex-shrink: 0;
        }

        .quest-banner-text {
          flex: 1;
          font-size: 12.5px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .quest-banner-text b {
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          margin-right: 4px;
        }

        .quest-banner-close {
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          padding: 3px;
          flex-shrink: 0;
          display: flex;
        }

        .quest-banner-close:hover { color: var(--text); }

        /* ---- shared: vault + quest sections ---- */
        .vault-scroll { display: flex; flex-direction: column; }

        .section-header {
          padding: 14px 18px 8px;
        }

        .section-header span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .vault-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          padding: 0 18px 4px;
        }

        @media (min-width: 520px) {
          .vault-grid { grid-template-columns: 1fr 1fr; }
        }

        .progress-track.small { height: 4px; }
        .progress-fill.xp { background: linear-gradient(90deg, #8B9CF7, #B4C0FA); box-shadow: 0 0 12px rgba(139,156,247,0.5); }

        .muted { color: #4B5563; }

        /* ---- vault: habit cards ---- */
        .vault-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vault-card-top {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .vault-card-icon {
          font-size: 13px;
          color: var(--accent);
          line-height: 1.4;
          flex-shrink: 0;
        }

        .vault-card-title {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .vault-card-label {
          font-size: 13px;
          color: var(--text);
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .vault-card-goal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          margin-top: 2px;
        }

        .vault-card-del {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 2px;
          display: flex;
          flex-shrink: 0;
          transition: color 150ms ease;
        }

        .vault-card-del:hover { color: var(--danger); }

        .month-grid-wrap { display: flex; flex-direction: column; gap: 5px; }

        .month-grid-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #4B5563;
          letter-spacing: 0.04em;
        }

        .month-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 3px;
        }

        .month-cell {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 2px;
          background: var(--track);
          animation: heatmapIn 240ms ease backwards;
        }

        .month-cell.filled { background: var(--accent2); }
        .month-cell.today { box-shadow: 0 0 0 1.5px var(--accent); }

        .vault-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .vault-card-ring-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .vault-card-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text);
        }

        .vault-check {
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 8px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .vault-check.done {
          background: rgba(94,234,212,0.1);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ---- vault: projects ---- */
        .project-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }

        .project-due {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--accent2);
          width: fit-content;
        }

        .project-due.overdue { color: var(--danger); }

        .project-tasks {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .project-task-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-task-text {
          flex: 1;
          font-size: 12.5px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .project-task-text.done { color: #4B5563; text-decoration: line-through; }

        .project-add-task input {
          width: 100%;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 7px 9px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          outline: none;
        }

        .project-add-task input:focus { border-color: var(--accent); }

        /* ---- quest: life areas ---- */
        .area-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          padding: 0 18px 4px;
        }

        .area-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .area-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        .area-label {
          flex: 1;
          font-size: 12px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .area-xp {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--muted);
        }

        /* ---- quest: good/bad habit rows ---- */
        .quest-habit-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 0 18px 4px;
        }

        .quest-habit-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 12px;
        }

        .quest-habit-card.bad { border-color: #2A1F22; }

        .quest-habit-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .quest-habit-label {
          font-size: 13px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .quest-habit-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
        }

        .quest-check.bad-check.done {
          background: var(--danger);
          border-color: var(--danger);
        }

        /* ---- quest: reward center ---- */
        .reward-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reward-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .reward-label { font-size: 13px; font-weight: 600; color: var(--text); }

        .reward-cost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent2);
        }

        .reward-claim {
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 8px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .reward-claim:not(:disabled):hover {
          border-color: var(--accent2);
          color: var(--accent2);
        }

        .reward-claim:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .reward-claimed-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: #4B5563;
        }

        /* ---- quest: xp bar in hero card ---- */
        .xp-bar-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .xp-bar-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
        }

        /* ---- editing affordances added across vault + quest cards ---- */
        .vault-card-edit {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 2px;
          display: flex;
          flex-shrink: 0;
          transition: color 150ms ease;
        }

        .vault-card-edit:hover { color: var(--accent); }

        .project-card-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .project-task-text { cursor: pointer; }

        .project-task-edit {
          flex: 1;
          background: #0F1215;
          border: 1px solid var(--accent);
          border-radius: 6px;
          padding: 6px 8px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          outline: none;
        }

        .edit-row-subs { flex-wrap: wrap; gap: 5px; }

        .sub-chip {
          border: 1px solid var(--border);
          background: #0F1215;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.03em;
          padding: 4px 9px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .sub-chip.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(94,234,212,0.1);
        }

        .area-chip {
          border: 1px solid var(--border);
          background: #0F1215;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .area-chip.active {
          background: color-mix(in srgb, var(--ac) 15%, transparent);
          border-color: var(--ac);
          color: var(--ac);
        }

        .quest-habit-card.editing,
        .vault-card:has(.routine-edit),
        .project-card:has(.routine-edit),
        .reward-card:has(.routine-edit) {
          gap: 0;
        }
        /* ============================================================
           DESKTOP / LAPTOP POLISH
           Everything below only changes layout at wider viewports.
           Phones (max-width: 640px) are untouched by these rules.
           ============================================================ */

        .checkbox-btn:hover { border-color: var(--accent); }
        .tabs button:hover { color: #B8C0CC; }
        .tabs button.active:hover { color: var(--text); }
        .routine-row:hover { background: #191D23; }
        .area-card:hover { border-color: #2C3138; }

        @media (hover: hover) and (pointer: fine) {
          .vault-card, .project-card, .reward-card, .quest-habit-card {
            transition: border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease;
          }
          .vault-card:hover, .project-card:hover, .reward-card:hover, .quest-habit-card:hover {
            border-color: #2C3138;
            box-shadow: 0 8px 20px -12px rgba(0,0,0,0.5);
          }
        }

        /* ---- AI tab ---- */
        .ai-scroll { padding-top: 4px; }

        .tabs button.tab-ai { color: var(--accent); position: relative; }
        .tabs button.tab-ai::after {
          content: "";
          position: absolute; top: 7px; right: 6px;
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); box-shadow: 0 0 6px rgba(94,234,212,0.9);
        }
        .tabs button.tab-ai.active::after { display: none; }

        .ai-intro { padding: 4px 16px 12px; }
        .ai-intro-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; margin-bottom: 5px;
        }
        .ai-intro-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px; font-weight: 600; color: var(--text);
          letter-spacing: 0.04em;
        }
        .ai-intro-sub { font-size: 11px; color: var(--muted); line-height: 1.5; }

        .ai-key-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 4px 10px; flex-shrink: 0;
          transition: border-color 140ms ease, color 140ms ease;
        }

        /* ---- key gate ---- */
        .ai-gate { padding: 14px 16px 20px; max-width: 460px; margin: 0 auto; }
        .ai-gate-icon {
          font-size: 20px; color: var(--accent); line-height: 1;
          margin-bottom: 10px;
          text-shadow: 0 0 14px rgba(94,234,212,0.5);
        }
        .ai-gate-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px; font-weight: 600; color: var(--text);
          letter-spacing: 0.04em; margin-bottom: 6px;
        }
        .ai-gate-sub {
          font-size: 11.5px; color: var(--muted); line-height: 1.55;
          margin-bottom: 16px;
        }
        .ai-gate-steps {
          margin: 0 0 16px; padding: 0 0 0 18px;
          display: flex; flex-direction: column; gap: 7px;
        }
        .ai-gate-steps li {
          font-size: 11.5px; color: #9AA3AF; line-height: 1.5;
        }
        .ai-gate-steps li::marker {
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
        }
        .ai-gate-steps a {
          color: var(--accent); text-decoration: none;
          border-bottom: 1px solid var(--glow);
          word-break: break-all;
        }
        .ai-key-input {
          width: 100%; box-sizing: border-box;
          background: #0E1116; border: 1px solid var(--border); border-radius: 8px;
          color: var(--text); font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.06em;
          padding: 11px 12px; outline: none;
          transition: border-color 140ms ease;
        }
        .ai-key-input::placeholder { color: #4B5563; letter-spacing: 0.04em; }
        .ai-key-input:focus { border-color: var(--accent); }
        .ai-key-input:disabled { opacity: 0.55; }
        .ai-gate-error { margin: 10px 0 0; }
        .ai-gate-actions { display: flex; gap: 8px; margin-top: 12px; }
        .ai-gate-note {
          font-size: 10.5px; color: #4B5563; line-height: 1.5;
          margin-top: 14px; padding-top: 12px;
          border-top: 1px solid #1B1F25;
        }

        .ai-composer { display: flex; flex-direction: column; gap: 8px; padding: 0 16px 12px; }
        .ai-input {
          width: 100%; box-sizing: border-box; resize: vertical; min-height: 62px;
          background: #0E1116; border: 1px solid var(--border); border-radius: 8px;
          color: var(--text); font-family: 'Inter', sans-serif;
          font-size: 12.5px; line-height: 1.5; padding: 10px 12px;
          outline: none; transition: border-color 140ms ease;
        }
        .ai-input::placeholder { color: #4B5563; }
        .ai-input:focus { border-color: var(--accent); }
        .ai-input:disabled { opacity: 0.55; }

        .ai-send {
          align-self: flex-end; background: var(--accent); color: #07100E;
          border: none; border-radius: 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          padding: 8px 20px; cursor: pointer;
          transition: opacity 140ms ease, transform 140ms ease;
        }
        .ai-send:disabled { opacity: 0.35; cursor: default; }
        .ai-send:not(:disabled):active { transform: scale(0.97); }

        .ai-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 16px 14px; }
        .ai-chip {
          background: var(--panel); border: 1px solid var(--border); border-radius: 999px;
          color: #9AA3AF; font-size: 10.5px; padding: 6px 12px;
          cursor: pointer; text-align: left;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .ai-thinking {
          display: flex; flex-direction: column; align-items: center;
          gap: 9px; padding: 18px 0 22px;
        }
        .ai-dots { display: flex; gap: 5px; }
        .ai-elapsed {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: var(--muted); letter-spacing: 0.05em;
          font-variant-numeric: tabular-nums;
        }
        .ai-slow { color: var(--accent2); }
        .ai-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); opacity: 0.35;
          animation: aiPulse 1.05s ease-in-out infinite;
        }
        .ai-dot:nth-child(2) { animation-delay: 0.16s; }
        .ai-dot:nth-child(3) { animation-delay: 0.32s; }
        @keyframes aiPulse {
          0%, 100% { opacity: 0.25; transform: translateY(0); }
          50%      { opacity: 1;    transform: translateY(-4px); }
        }

        .ai-error {
          margin: 0 16px 12px; padding: 10px 12px;
          background: rgba(240,87,107,0.08);
          border: 1px solid rgba(240,87,107,0.35);
          border-radius: 8px; color: var(--danger);
          font-size: 11.5px; line-height: 1.45;
        }

        .ai-result { padding: 0 16px 16px; }
        .ai-reply {
          font-size: 12.5px; color: #C9D1D9; line-height: 1.55;
          padding: 11px 13px; margin-bottom: 12px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--accent); border-radius: 8px;
        }
        .ai-noop { font-size: 11px; color: var(--muted); text-align: center; padding: 6px 0 4px; }

        .ai-diff-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 7px;
        }
        .ai-diff-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
        }
        .ai-diff-counts {
          display: flex; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px; font-weight: 600;
        }
        .ai-diff-counts .c-add { color: #7EE787; }
        .ai-diff-counts .c-edit { color: var(--accent2); }
        .ai-diff-counts .c-remove { color: var(--danger); }

        .ai-diff { display: flex; flex-direction: column; gap: 5px; }
        .ai-diff-row {
          display: grid; grid-template-columns: 14px 52px 1fr auto;
          align-items: baseline; gap: 8px;
          width: 100%; text-align: left;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--border); border-radius: 7px;
          padding: 9px 11px; cursor: pointer; font-family: inherit;
          transition: opacity 140ms ease, border-color 140ms ease;
        }
        .ai-diff-row.add    { border-left-color: #7EE787; }
        .ai-diff-row.edit   { border-left-color: var(--accent2); }
        .ai-diff-row.remove { border-left-color: var(--danger); }
        .ai-diff-row.skipped { opacity: 0.38; }
        .ai-diff-row.skipped .ai-diff-text { text-decoration: line-through; }

        .ai-sign { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; line-height: 1; }
        .ai-diff-row.add .ai-sign    { color: #7EE787; }
        .ai-diff-row.edit .ai-sign   { color: var(--accent2); }
        .ai-diff-row.remove .ai-sign { color: var(--danger); }

        .ai-surface {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--muted);
        }
        .ai-diff-text { font-size: 12px; color: var(--text); line-height: 1.4; word-break: break-word; }
        .ai-skip-mark {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--muted);
        }

        .ai-actions { display: flex; gap: 8px; margin-top: 12px; }
        .ai-apply {
          flex: 1; background: var(--accent); color: #07100E; border: none;
          border-radius: 7px; padding: 10px 0; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          transition: opacity 140ms ease, transform 140ms ease;
        }
        .ai-apply:disabled { opacity: 0.35; cursor: default; }
        .ai-apply:not(:disabled):active { transform: scale(0.98); }
        .ai-discard {
          background: transparent; color: #9AA3AF;
          border: 1px solid var(--border); border-radius: 7px;
          padding: 10px 18px; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.06em;
          transition: border-color 140ms ease, color 140ms ease;
        }
        .ai-hint { font-size: 10px; color: #4B5563; text-align: center; margin-top: 8px; }

        @media (hover: hover) and (pointer: fine) {
          .ai-chip:hover { border-color: var(--accent); color: #C9D1D9; }
          .ai-diff-row:hover { border-color: #39414D; }
          .ai-send:not(:disabled):hover,
          .ai-apply:not(:disabled):hover { opacity: 0.88; }
          .ai-discard:hover { border-color: #39414D; color: var(--text); }
          .ai-key-btn:hover { border-color: var(--accent); color: var(--accent); }
          .ai-gate-steps a:hover { border-bottom-color: var(--accent); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-dot { animation: none; opacity: 0.6; }
        }

        @media (min-width: 900px) {
          .app-root {
            padding: 5vh 5vw;
            background:
              radial-gradient(circle at 15% 0%, rgba(94,234,212,0.07), transparent 45%),
              radial-gradient(circle at 85% 100%, rgba(245,166,35,0.06), transparent 45%),
              repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 28px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 28px),
              var(--bg);
          }

          .panel {
            max-width: 1180px;
            max-height: 900px;
            border-radius: 16px;
            box-shadow: 0 40px 90px -24px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02);
          }

          .titlebar { padding: 16px 26px; }
          .titlebar-name { font-size: 13px; }
          .clock { font-size: 13px; }

          .tabs { padding: 12px 26px 0; gap: 6px; }
          .tabs button { font-size: 12px; padding: 10px 20px; }

          /* Reading-oriented views (plain lists) stay a comfortable
             line-length and center within the wider panel. */
          .task-list:not(.vault-scroll) {
            max-width: 840px;
            margin: 0 auto;
            width: 100%;
          }

          /* Card-grid views (vault + quest) get to use the extra width. */
          .vault-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 0 26px 4px; }
          .quest-habit-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            align-content: start;
            padding: 0 26px 4px;
          }
          .radar-card, .donut-card { max-width: 840px; margin-left: auto; margin-right: auto; }

          .task-row { padding: 11px 12px; }
        }

        @media (min-width: 1240px) {
          .panel { max-width: 1320px; }
          .vault-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `),a.default.createElement("div",{className:"panel"},a.default.createElement(pp,{theme:w.theme,phase:w.phase,calm:w.calm,scoped:!0}),no&&a.default.createElement("div",{className:"quest-banner",onClick:()=>ro(null)},a.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),a.default.createElement("span",{className:"quest-banner-text"},a.default.createElement("b",null,"Now:")," ",no.label),a.default.createElement("button",{className:"quest-banner-close",onClick:M=>{M.stopPropagation(),ro(null)},"aria-label":"Dismiss"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),a.default.createElement("div",{className:"titlebar"},a.default.createElement("div",{className:"titlebar-left"},a.default.createElement("div",{className:"dots"},a.default.createElement("span",{className:"dot red"}),a.default.createElement("span",{className:"dot amber"}),a.default.createElement("span",{className:"dot green"})),a.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),a.default.createElement("div",{className:"titlebar-right"},a.default.createElement("input",{type:"file",accept:"application/json",ref:H,onChange:rr,style:{display:"none"}}),a.default.createElement("button",{className:`titlebar-icon-btn ${Be?"notify-on":""}`,onClick:V,disabled:mt,"aria-label":Be?"Turn off notifications":"Turn on notifications",title:Be?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},Be?a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{te(!0),B.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:nr,"aria-label":"Import backup",title:"Import backup"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:Ia,"aria-label":"Export backup",title:"Export backup"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("span",{className:"clock"},new Date(pe).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),R&&a.default.createElement("div",{className:`data-toast ${R.type}`},R.text),a.default.createElement("div",{className:"tabs"},a.default.createElement("button",{className:e==="today"?"active":"",onClick:()=>o("today")},"today"),a.default.createElement("button",{className:e==="tasks"?"active":"",onClick:()=>o("tasks")},"tasks"),a.default.createElement("button",{className:e==="routines"?"active":"",onClick:()=>o("routines")},"routines"),a.default.createElement("button",{className:e==="vault"?"active":"",onClick:()=>o("vault")},"vault"),a.default.createElement("button",{className:e==="quest"?"active":"",onClick:()=>o("quest")},"quest"),a.default.createElement("button",{className:`tab-pet ${e==="pet"?"active":""}`,onClick:()=>o("pet")},"pet"),a.default.createElement("button",{className:`tab-ai ${e==="ai"?"active":""}`,onClick:()=>o("ai")},"ai")),a.default.createElement("div",{key:e,className:"tab-content"},e==="today"?a.default.createElement(Th,{routines:s,setRoutines:u,tasks:i,setTasks:l,vaultHabits:c,goodHabits:g,rewards:f,setRewards:d,totalXP:m,setTab:o}):e==="tasks"?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"stats-bar stats-bar-viz"},a.default.createElement(ps,{pct:_t.pct,size:64,stroke:5.5,label:`${_t.pct}%`}),a.default.createElement("div",{className:"stats-row-viz"},a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Ct,{value:_t.total}))," total"),a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Ct,{value:_t.pending}))," pending"),a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Ct,{value:_t.done}))," done"))),_t.pending>0&&a.default.createElement("div",{className:"donut-card"},a.default.createElement(Dp,{size:96,stroke:14,centerLabel:_t.pending,centerSublabel:"open",segments:xs.map(M=>({key:M.key,value:M.value,color:M.color}))}),a.default.createElement("div",{className:"donut-legend"},xs.map(M=>a.default.createElement("div",{className:"donut-legend-row",key:M.key},a.default.createElement("span",{className:"donut-legend-dot",style:{background:M.color}}),a.default.createElement("span",null,M.label," priority"),a.default.createElement("span",{className:"donut-legend-val"},M.value))))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{ref:Te,type:"text",placeholder:"add a task, press enter...",value:j,onChange:M=>S(M.target.value),onKeyDown:M=>M.key==="Enter"&&ws()}),a.default.createElement("div",{className:"prio-select"},Aa.map(M=>a.default.createElement("button",{key:M.key,className:F===M.key?"active":"",style:{"--pc":M.color},onClick:()=>z(M.key)},M.label))),a.default.createElement("button",{className:"add-btn",onClick:ws,"aria-label":"Add task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"filters"},["all","active","done"].map(M=>a.default.createElement("button",{key:M,className:D===M?"active":"",onClick:()=>ie(M)},M)),a.default.createElement("span",{className:"spacer"}),_t.done>0&&a.default.createElement("button",{className:"clear-btn",onClick:Jp},"clear done")),a.default.createElement("div",{className:"task-list"},ks.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},D==="done"?"nothing completed yet":"queue's empty \u2014 add something")):ks.map((M,I)=>a.default.createElement(ch,{key:M.id,task:M,now:pe,index:I,onToggle:Wp,onDelete:Hp})))):e==="routines"?a.default.createElement(O0,{routines:s,setRoutines:u}):e==="vault"?a.default.createElement(Q0,{vaultHabits:c,setVaultHabits:p,projects:h,setProjects:v}):e==="quest"?a.default.createElement(ih,{goodHabits:g,setGoodHabits:k,badHabits:y,setBadHabits:N,rewards:f,setRewards:d}):e==="pet"?a.default.createElement(vh,{petCtl:b,apiKey:Op(),showDataMsg:Y,ctx:{pet:b.pet,level:x,hour:pe?new Date(pe).getHours():Qn().hour,phase:w.phase.id,doneToday:g.filter(M=>(M.history||[]).includes(O(0))).length,totalToday:g.length,streak:g.reduce((M,I)=>Math.max(M,as(I.history)),0),routineNow:null,nextRoutine:null}}):a.default.createElement(Mh,{state:{routines:s,vaultHabits:c,goodHabits:g,badHabits:y,rewards:f,totalXP:m},setters:{setRoutines:u,setVaultHabits:p,setGoodHabits:k,setBadHabits:N,setRewards:d},showDataMsg:Y}))))}var Ph=zp.default.createRoot(document.getElementById("root"));Ph.render(a.default.createElement(Lh));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
