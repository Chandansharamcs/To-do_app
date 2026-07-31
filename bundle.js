(()=>{var Rc=Object.create;var Xa=Object.defineProperty;var ep=Object.getOwnPropertyDescriptor;var tp=Object.getOwnPropertyNames;var np=Object.getPrototypeOf,rp=Object.prototype.hasOwnProperty;var Xt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var op=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of tp(t))!rp.call(e,o)&&o!==n&&Xa(e,o,{get:()=>t[o],enumerable:!(r=ep(t,o))||r.enumerable});return e};var Ga=(e,t,n)=>(n=e!=null?Rc(np(e)):{},op(t||!e||!e.__esModule?Xa(n,"default",{value:e,enumerable:!0}):n,e));var ls=Xt($=>{"use strict";var Kn=Symbol.for("react.element"),ip=Symbol.for("react.portal"),lp=Symbol.for("react.fragment"),ap=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),up=Symbol.for("react.provider"),dp=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),mp=Symbol.for("react.lazy"),qa=Symbol.iterator;function hp(e){return e===null||typeof e!="object"?null:(e=qa&&e[qa]||e["@@iterator"],typeof e=="function"?e:null)}var Za={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ra=Object.assign,es={};function gn(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||Za}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ts(){}ts.prototype=gn.prototype;function xi(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||Za}var ki=xi.prototype=new ts;ki.constructor=xi;Ra(ki,gn.prototype);ki.isPureReactComponent=!0;var Qa=Array.isArray,ns=Object.prototype.hasOwnProperty,wi={current:null},rs={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ns.call(t,r)&&!rs.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Kn,type:e,key:i,ref:a,props:o,_owner:wi.current}}function gp(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ei(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function vp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ya=/\/+/g;function yi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vp(""+e.key):t.toString(36)}function Hr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Kn:case ip:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+yi(a,0):r,Qa(o)?(n="",e!=null&&(n=e.replace(Ya,"$&/")+"/"),Hr(o,t,n,"",function(d){return d})):o!=null&&(Ei(o)&&(o=gp(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ya,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Qa(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+yi(i,s);a+=Hr(i,t,n,u,o)}else if(u=hp(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+yi(i,s++),a+=Hr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Wr(e,t,n){if(e==null)return e;var r=[],o=0;return Hr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function yp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Vr={transition:null},xp={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:wi};function is(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Wr,forEach:function(e,t,n){Wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wr(e,function(){t++}),t},toArray:function(e){return Wr(e,function(t){return t})||[]},only:function(e){if(!Ei(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=gn;$.Fragment=lp;$.Profiler=sp;$.PureComponent=xi;$.StrictMode=ap;$.Suspense=pp;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;$.act=is;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ra({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=wi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ns.call(t,u)&&!rs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Kn,type:e.type,key:o,ref:i,props:r,_owner:a}};$.createContext=function(e){return e={$$typeof:dp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:up,_context:e},e.Consumer=e};$.createElement=os;$.createFactory=function(e){var t=os.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:cp,render:e}};$.isValidElement=Ei;$.lazy=function(e){return{$$typeof:mp,_payload:{_status:-1,_result:e},_init:yp}};$.memo=function(e,t){return{$$typeof:fp,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=t}};$.unstable_act=is;$.useCallback=function(e,t){return Ne.current.useCallback(e,t)};$.useContext=function(e){return Ne.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ne.current.useEffect(e,t)};$.useId=function(){return Ne.current.useId()};$.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ne.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};$.useRef=function(e){return Ne.current.useRef(e)};$.useState=function(e){return Ne.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ne.current.useTransition()};$.version="18.3.1"});var bi=Xt((z0,as)=>{"use strict";as.exports=ls()});var vs=Xt(K=>{"use strict";function Ai(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Jr(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Ye(e){return e.length===0?null:e[0]}function Xr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var a=2*(r+1)-1,s=e[a],u=a+1,d=e[u];if(0>Jr(s,n))u<o&&0>Jr(d,s)?(e[r]=d,e[u]=n,r=u):(e[r]=s,e[a]=n,r=a);else if(u<o&&0>Jr(d,n))e[r]=d,e[u]=n,r=u;else break e}}return t}function Jr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(ss=performance,K.unstable_now=function(){return ss.now()}):(Ni=Date,us=Ni.now(),K.unstable_now=function(){return Ni.now()-us});var ss,Ni,us,at=[],St=[],kp=1,He=null,xe=3,Gr=!1,Gt=!1,Gn=!1,ps=typeof setTimeout=="function"?setTimeout:null,fs=typeof clearTimeout=="function"?clearTimeout:null,ds=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Mi(e){for(var t=Ye(St);t!==null;){if(t.callback===null)Xr(St);else if(t.startTime<=e)Xr(St),t.sortIndex=t.expirationTime,Ai(at,t);else break;t=Ye(St)}}function Di(e){if(Gn=!1,Mi(e),!Gt)if(Ye(at)!==null)Gt=!0,zi(_i);else{var t=Ye(St);t!==null&&Ti(Di,t.startTime-e)}}function _i(e,t){Gt=!1,Gn&&(Gn=!1,fs(qn),qn=-1),Gr=!0;var n=xe;try{for(Mi(t),He=Ye(at);He!==null&&(!(He.expirationTime>t)||e&&!gs());){var r=He.callback;if(typeof r=="function"){He.callback=null,xe=He.priorityLevel;var o=r(He.expirationTime<=t);t=K.unstable_now(),typeof o=="function"?He.callback=o:He===Ye(at)&&Xr(at),Mi(t)}else Xr(at);He=Ye(at)}if(He!==null)var i=!0;else{var a=Ye(St);a!==null&&Ti(Di,a.startTime-t),i=!1}return i}finally{He=null,xe=n,Gr=!1}}var qr=!1,Kr=null,qn=-1,ms=5,hs=-1;function gs(){return!(K.unstable_now()-hs<ms)}function Si(){if(Kr!==null){var e=K.unstable_now();hs=e;var t=!0;try{t=Kr(!0,e)}finally{t?Xn():(qr=!1,Kr=null)}}else qr=!1}var Xn;typeof ds=="function"?Xn=function(){ds(Si)}:typeof MessageChannel<"u"?(Ci=new MessageChannel,cs=Ci.port2,Ci.port1.onmessage=Si,Xn=function(){cs.postMessage(null)}):Xn=function(){ps(Si,0)};var Ci,cs;function zi(e){Kr=e,qr||(qr=!0,Xn())}function Ti(e,t){qn=ps(function(){e(K.unstable_now())},t)}K.unstable_IdlePriority=5;K.unstable_ImmediatePriority=1;K.unstable_LowPriority=4;K.unstable_NormalPriority=3;K.unstable_Profiling=null;K.unstable_UserBlockingPriority=2;K.unstable_cancelCallback=function(e){e.callback=null};K.unstable_continueExecution=function(){Gt||Gr||(Gt=!0,zi(_i))};K.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ms=0<e?Math.floor(1e3/e):5};K.unstable_getCurrentPriorityLevel=function(){return xe};K.unstable_getFirstCallbackNode=function(){return Ye(at)};K.unstable_next=function(e){switch(xe){case 1:case 2:case 3:var t=3;break;default:t=xe}var n=xe;xe=t;try{return e()}finally{xe=n}};K.unstable_pauseExecution=function(){};K.unstable_requestPaint=function(){};K.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=xe;xe=e;try{return t()}finally{xe=n}};K.unstable_scheduleCallback=function(e,t,n){var r=K.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:kp++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Ai(St,e),Ye(at)===null&&e===Ye(St)&&(Gn?(fs(qn),qn=-1):Gn=!0,Ti(Di,n-r))):(e.sortIndex=o,Ai(at,e),Gt||Gr||(Gt=!0,zi(_i))),e};K.unstable_shouldYield=gs;K.unstable_wrapCallback=function(e){var t=xe;return function(){var n=xe;xe=t;try{return e.apply(this,arguments)}finally{xe=n}}}});var xs=Xt((P0,ys)=>{"use strict";ys.exports=vs()});var bc=Xt(Ue=>{"use strict";var wp=bi(),$e=xs();function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cu=new Set,vr={};function sn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(vr[e]=t,e=0;e<t.length;e++)Cu.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Ep=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ks={},ws={};function bp(e){return tl.call(ws,e)?!0:tl.call(ks,e)?!1:Ep.test(e)?ws[e]=!0:(ks[e]=!0,!1)}function Np(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sp(e,t,n,r){if(t===null||typeof t>"u"||Np(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,Gl);ye[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,Gl);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,Gl);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function ql(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sp(t,n,o,r)&&(n=null),r||o===null?bp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),xn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Ql=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),Mu=Symbol.for("react.context"),Yl=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Du=Symbol.for("react.offscreen"),Es=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Pi;function or(e){if(Pi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pi=t&&t[1]||""}return`
`+Pi+e}var Bi=!1;function Li(e,t){if(!e||Bi)return"";Bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Cp(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case xn:return"Portal";case nl:return"Profiler";case Ql:return"StrictMode";case rl:return"Suspense";case ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mu:return(e.displayName||"Context")+".Consumer";case Au:return(e._context.displayName||"Context")+".Provider";case Yl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zl:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}function Ap(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(t);case 8:return t===Ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mp(e){var t=_u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Mp(e))}function zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_u(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tu(e,t){t=t.checked,t!=null&&ql(e,"checked",t,!1)}function al(e,t){Tu(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&sl(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ns(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sl(e,t,n){(t!=="number"||Co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ss(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(ir(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function Pu(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Lu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dp=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){Dp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function Iu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function Fu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Iu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var _p=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cl(e,t){if(t){if(_p[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fl=null;function Rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,Tn=null,Pn=null;function As(e){if(e=Ir(e)){if(typeof ml!="function")throw Error(b(280));var t=e.stateNode;t&&(t=ei(t),ml(e.stateNode,e.type,t))}}function Ou(e){Tn?Pn?Pn.push(e):Pn=[e]:Tn=e}function $u(){if(Tn){var e=Tn,t=Pn;if(Pn=Tn=null,As(e),t)for(e=0;e<t.length;e++)As(t[e])}}function ju(e,t){return e(t)}function Uu(){}var Ii=!1;function Wu(e,t,n){if(Ii)return e(t,n);Ii=!0;try{return ju(e,t,n)}finally{Ii=!1,(Tn!==null||Pn!==null)&&(Uu(),$u())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=ei(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var hl=!1;if(yt)try{vn={},Object.defineProperty(vn,"passive",{get:function(){hl=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{hl=!1}var vn;function zp(e,t,n,r,o,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var ur=!1,Ao=null,Mo=!1,gl=null,Tp={onError:function(e){ur=!0,Ao=e}};function Pp(e,t,n,r,o,i,a,s,u){ur=!1,Ao=null,zp.apply(Tp,arguments)}function Bp(e,t,n,r,o,i,a,s,u){if(Pp.apply(this,arguments),ur){if(ur){var d=Ao;ur=!1,Ao=null}else throw Error(b(198));Mo||(Mo=!0,gl=d)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ms(e){if(un(e)!==e)throw Error(b(188))}function Lp(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ms(o),e;if(i===r)return Ms(o),t;i=i.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Vu(e){return e=Lp(e),e!==null?Ju(e):null}function Ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ju(e);if(t!==null)return t;e=e.sibling}return null}var Ku=$e.unstable_scheduleCallback,Ds=$e.unstable_cancelCallback,Ip=$e.unstable_shouldYield,Fp=$e.unstable_requestPaint,ie=$e.unstable_now,Op=$e.unstable_getCurrentPriorityLevel,ea=$e.unstable_ImmediatePriority,Xu=$e.unstable_UserBlockingPriority,Do=$e.unstable_NormalPriority,$p=$e.unstable_LowPriority,Gu=$e.unstable_IdlePriority,Qo=null,ct=null;function jp(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Hp,Up=Math.log,Wp=Math.LN2;function Hp(e){return e>>>=0,e===0?32:31-(Up(e)/Wp|0)|0}var Rr=64,eo=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=lr(s):(i&=a,i!==0&&(r=lr(i)))}else a=n&~o,a!==0?r=lr(a):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function Vp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-nt(i),s=1<<a,u=o[a];u===-1?((s&n)===0||(s&r)!==0)&&(o[a]=Vp(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qu(){var e=Rr;return Rr<<=1,(Rr&4194240)===0&&(Rr=64),e}function Fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function Kp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Qu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yu,na,Zu,Ru,ed,yl=!1,to=[],Pt=null,Bt=null,Lt=null,kr=new Map,wr=new Map,Dt=[],Xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(t.pointerId)}}function Yn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ir(t),t!==null&&na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gp(e,t,n,r,o){switch(t){case"focusin":return Pt=Yn(Pt,e,t,n,r,o),!0;case"dragenter":return Bt=Yn(Bt,e,t,n,r,o),!0;case"mouseover":return Lt=Yn(Lt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return kr.set(i,Yn(kr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,wr.set(i,Yn(wr.get(i)||null,e,t,n,r,o)),!0}return!1}function td(e){var t=Yt(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=Hu(n),t!==null){e.blockedOn=t,ed(e.priority,function(){Zu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fl=r,n.target.dispatchEvent(r),fl=null}else return t=Ir(n),t!==null&&na(t),e.blockedOn=n,!1;t.shift()}return!0}function zs(e,t,n){go(e)&&n.delete(t)}function qp(){yl=!1,Pt!==null&&go(Pt)&&(Pt=null),Bt!==null&&go(Bt)&&(Bt=null),Lt!==null&&go(Lt)&&(Lt=null),kr.forEach(zs),wr.forEach(zs)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,yl||(yl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,qp)))}function Er(e){function t(o){return Zn(o,e)}if(0<to.length){Zn(to[0],e);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Zn(Pt,e),Bt!==null&&Zn(Bt,e),Lt!==null&&Zn(Lt,e),kr.forEach(t),wr.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)td(n),n.blockedOn===null&&Dt.shift()}var Bn=Et.ReactCurrentBatchConfig,zo=!0;function Qp(e,t,n,r){var o=H,i=Bn.transition;Bn.transition=null;try{H=1,ra(e,t,n,r)}finally{H=o,Bn.transition=i}}function Yp(e,t,n,r){var o=H,i=Bn.transition;Bn.transition=null;try{H=4,ra(e,t,n,r)}finally{H=o,Bn.transition=i}}function ra(e,t,n,r){if(zo){var o=xl(e,t,n,r);if(o===null)Vi(e,t,r,To,n),_s(e,r);else if(Gp(o,e,t,n,r))r.stopPropagation();else if(_s(e,r),t&4&&-1<Xp.indexOf(e)){for(;o!==null;){var i=Ir(o);if(i!==null&&Yu(i),i=xl(e,t,n,r),i===null&&Vi(e,t,r,To,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Vi(e,t,r,null,n)}}var To=null;function xl(e,t,n,r){if(To=null,e=Rl(r),e=Yt(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return To=e,null}function nd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Op()){case ea:return 1;case Xu:return 4;case Do:case $p:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var zt=null,oa=null,vo=null;function rd(){if(vo)return vo;var e,t=oa,n=t.length,r,o="value"in zt?zt.value:zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return vo=o.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function Ts(){return!1}function je(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?no:Ts,this.isPropagationStopped=Ts,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=je(Vn),Lr=re({},Vn,{view:0,detail:0}),Zp=je(Lr),Oi,$i,Rn,Yo=re({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Oi=e.screenX-Rn.screenX,$i=e.screenY-Rn.screenY):$i=Oi=0,Rn=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),Ps=je(Yo),Rp=re({},Yo,{dataTransfer:0}),ef=je(Rp),tf=re({},Lr,{relatedTarget:0}),ji=je(tf),nf=re({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),rf=je(nf),of=re({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lf=je(of),af=re({},Vn,{data:0}),Bs=je(af),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=df[e])?!!t[e]:!1}function la(){return cf}var pf=re({},Lr,{key:function(e){if(e.key){var t=sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=je(pf),mf=re({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=je(mf),hf=re({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),gf=je(hf),vf=re({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yf=je(vf),xf=re({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=je(xf),wf=[9,13,27,32],aa=yt&&"CompositionEvent"in window,dr=null;yt&&"documentMode"in document&&(dr=document.documentMode);var Ef=yt&&"TextEvent"in window&&!dr,od=yt&&(!aa||dr&&8<dr&&11>=dr),Is=" ",Fs=!1;function id(e,t){switch(e){case"keyup":return wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function bf(e,t){switch(e){case"compositionend":return ld(t);case"keypress":return t.which!==32?null:(Fs=!0,Is);case"textInput":return e=t.data,e===Is&&Fs?null:e;default:return null}}function Nf(e,t){if(wn)return e==="compositionend"||!aa&&id(e,t)?(e=rd(),vo=oa=zt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sf[e.type]:t==="textarea"}function ad(e,t,n,r){Ou(r),t=Po(t,"onChange"),0<t.length&&(n=new ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,br=null;function Cf(e){yd(e,0)}function Zo(e){var t=Nn(e);if(zu(t))return e}function Af(e,t){if(e==="change")return t}var sd=!1;yt&&(yt?(oo="oninput"in document,oo||(Ui=document.createElement("div"),Ui.setAttribute("oninput","return;"),oo=typeof Ui.oninput=="function"),ro=oo):ro=!1,sd=ro&&(!document.documentMode||9<document.documentMode));var ro,oo,Ui;function $s(){cr&&(cr.detachEvent("onpropertychange",ud),br=cr=null)}function ud(e){if(e.propertyName==="value"&&Zo(br)){var t=[];ad(t,br,e,Rl(e)),Wu(Cf,t)}}function Mf(e,t,n){e==="focusin"?($s(),cr=t,br=n,cr.attachEvent("onpropertychange",ud)):e==="focusout"&&$s()}function Df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(br)}function _f(e,t){if(e==="click")return Zo(t)}function zf(e,t){if(e==="input"||e==="change")return Zo(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Tf;function Nr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!tl.call(t,o)||!ot(e[o],t[o]))return!1}return!0}function js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,t){var n=js(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=js(n)}}function dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cd(){for(var e=window,t=Co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Co(e.document)}return t}function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=cd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dd(n.ownerDocument.documentElement,n)){if(r!==null&&sa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Us(n,i);var a=Us(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bf=yt&&"documentMode"in document&&11>=document.documentMode,En=null,kl=null,pr=null,wl=!1;function Ws(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wl||En==null||En!==Co(r)||(r=En,"selectionStart"in r&&sa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Nr(pr,r)||(pr=r,r=Po(kl,"onSelect"),0<r.length&&(t=new ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},Wi={},pd={};yt&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Ro(e){if(Wi[e])return Wi[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pd)return Wi[e]=t[n];return e}var fd=Ro("animationend"),md=Ro("animationiteration"),hd=Ro("animationstart"),gd=Ro("transitionend"),vd=new Map,Hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){vd.set(e,t),sn(t,[e])}for(lo=0;lo<Hs.length;lo++)ao=Hs[lo],Vs=ao.toLowerCase(),Js=ao[0].toUpperCase()+ao.slice(1),Ht(Vs,"on"+Js);var ao,Vs,Js,lo;Ht(fd,"onAnimationEnd");Ht(md,"onAnimationIteration");Ht(hd,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(gd,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Ks(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bp(r,t,void 0,e),e.currentTarget=null}function yd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Ks(o,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Ks(o,s,d),i=u}}}if(Mo)throw e=gl,Mo=!1,gl=null,e}function q(e,t){var n=t[Cl];n===void 0&&(n=t[Cl]=new Set);var r=e+"__bubble";n.has(r)||(xd(t,e,2,!1),n.add(r))}function Hi(e,t,n){var r=0;t&&(r|=4),xd(n,e,r,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[so]){e[so]=!0,Cu.forEach(function(n){n!=="selectionchange"&&(Lf.has(n)||Hi(n,!1,e),Hi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,Hi("selectionchange",!1,t))}}function xd(e,t,n,r){switch(nd(t)){case 1:var o=Qp;break;case 4:o=Yp;break;default:o=ra}n=o.bind(null,t,n,e),o=void 0,!hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Yt(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Wu(function(){var d=i,m=Rl(n),g=[];e:{var h=vd.get(e);if(h!==void 0){var y=ia,k=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":y=ff;break;case"focusin":k="focus",y=ji;break;case"focusout":k="blur",y=ji;break;case"beforeblur":case"afterblur":y=ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gf;break;case fd:case md:case hd:y=rf;break;case gd:y=yf;break;case"scroll":y=Zp;break;case"wheel":y=kf;break;case"copy":case"cut":case"paste":y=lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ls}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var c=d,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=xr(c,p),x!=null&&v.push(Cr(c,x,f)))),w)break;c=c.return}0<v.length&&(h=new y(h,k,null,n,m),g.push({event:h,listeners:v}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==fl&&(k=n.relatedTarget||n.fromElement)&&(Yt(k)||k[xt]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=d,k=k?Yt(k):null,k!==null&&(w=un(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=d),y!==k)){if(v=Ps,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ls,x="onPointerLeave",p="onPointerEnter",c="pointer"),w=y==null?h:Nn(y),f=k==null?h:Nn(k),h=new v(x,c+"leave",y,n,m),h.target=w,h.relatedTarget=f,x=null,Yt(m)===d&&(v=new v(p,c+"enter",k,n,m),v.target=f,v.relatedTarget=w,x=v),w=x,y&&k)t:{for(v=y,p=k,c=0,f=v;f;f=yn(f))c++;for(f=0,x=p;x;x=yn(x))f++;for(;0<c-f;)v=yn(v),c--;for(;0<f-c;)p=yn(p),f--;for(;c--;){if(v===p||p!==null&&v===p.alternate)break t;v=yn(v),p=yn(p)}v=null}else v=null;y!==null&&Xs(g,h,y,v,!1),k!==null&&w!==null&&Xs(g,w,k,v,!0)}}e:{if(h=d?Nn(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var N=Af;else if(Os(h))if(sd)N=zf;else{N=Df;var E=Mf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=_f);if(N&&(N=N(e,d))){ad(g,N,n,m);break e}E&&E(e,h,d),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&sl(h,"number",h.value)}switch(E=d?Nn(d):window,e){case"focusin":(Os(E)||E.contentEditable==="true")&&(En=E,kl=d,pr=null);break;case"focusout":pr=kl=En=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,Ws(g,n,m);break;case"selectionchange":if(Bf)break;case"keydown":case"keyup":Ws(g,n,m)}var _;if(aa)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else wn?id(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(od&&n.locale!=="ko"&&(wn||A!=="onCompositionStart"?A==="onCompositionEnd"&&wn&&(_=rd()):(zt=m,oa="value"in zt?zt.value:zt.textContent,wn=!0)),E=Po(d,A),0<E.length&&(A=new Bs(A,e,null,n,m),g.push({event:A,listeners:E}),_?A.data=_:(_=ld(n),_!==null&&(A.data=_)))),(_=Ef?bf(e,n):Nf(e,n))&&(d=Po(d,"onBeforeInput"),0<d.length&&(m=new Bs("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=_))}yd(g,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Po(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xr(e,n),i!=null&&r.unshift(Cr(e,i,o)),i=xr(e,t),i!=null&&r.push(Cr(e,i,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xs(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=xr(n,i),u!=null&&a.unshift(Cr(n,u,s))):o||(u=xr(n,i),u!=null&&a.push(Cr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var If=/\r\n?/g,Ff=/\u0000|\uFFFD/g;function Gs(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(Ff,"")}function uo(e,t,n){if(t=Gs(t),Gs(e)!==t&&n)throw Error(b(425))}function Bo(){}var El=null,bl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,qs=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof qs<"u"?function(e){return qs.resolve(null).then(e).catch(jf)}:Sl;function jf(e){setTimeout(function(){throw e})}function Ji(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Er(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),dt="__reactFiber$"+Jn,Ar="__reactProps$"+Jn,xt="__reactContainer$"+Jn,Cl="__reactEvents$"+Jn,Uf="__reactListeners$"+Jn,Wf="__reactHandles$"+Jn;function Yt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[dt])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[dt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function ei(e){return e[Ar]||null}var Al=[],Sn=-1;function Vt(e){return{current:e}}function Q(e){0>Sn||(e.current=Al[Sn],Al[Sn]=null,Sn--)}function X(e,t){Sn++,Al[Sn]=e.current,e.current=t}var Wt={},be=Vt(Wt),Te=Vt(!1),nn=Wt;function On(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function Lo(){Q(Te),Q(be)}function Ys(e,t,n){if(be.current!==Wt)throw Error(b(168));X(be,t),X(Te,n)}function kd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,Ap(e)||"Unknown",o));return re({},n,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,nn=be.current,X(be,e),X(Te,Te.current),!0}function Zs(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=kd(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,Q(Te),Q(be),X(be,e)):Q(Te),X(Te,n)}var mt=null,ti=!1,Ki=!1;function wd(e){mt===null?mt=[e]:mt.push(e)}function Hf(e){ti=!0,wd(e)}function Jt(){if(!Ki&&mt!==null){Ki=!0;var e=0,t=H;try{var n=mt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,ti=!1}catch(o){throw mt!==null&&(mt=mt.slice(e+1)),Ku(ea,Jt),o}finally{H=t,Ki=!1}}return null}var Cn=[],An=0,Fo=null,Oo=0,Ve=[],Je=0,rn=null,ht=1,gt="";function qt(e,t){Cn[An++]=Oo,Cn[An++]=Fo,Fo=e,Oo=t}function Ed(e,t,n){Ve[Je++]=ht,Ve[Je++]=gt,Ve[Je++]=rn,rn=e;var r=ht;e=gt;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var i=32-nt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,ht=1<<32-nt(t)+o|n<<o|r,gt=i+e}else ht=1<<i|n<<o|r,gt=e}function ua(e){e.return!==null&&(qt(e,1),Ed(e,1,0))}function da(e){for(;e===Fo;)Fo=Cn[--An],Cn[An]=null,Oo=Cn[--An],Cn[An]=null;for(;e===rn;)rn=Ve[--Je],Ve[Je]=null,gt=Ve[--Je],Ve[Je]=null,ht=Ve[--Je],Ve[Je]=null}var Oe=null,Fe=null,R=!1,tt=null;function bd(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Fe=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:ht,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Fe=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(R){var t=Fe;if(t){var n=t;if(!Rs(e,t)){if(Ml(e))throw Error(b(418));t=It(n.nextSibling);var r=Oe;t&&Rs(e,t)?bd(r,n):(e.flags=e.flags&-4097|2,R=!1,Oe=e)}}else{if(Ml(e))throw Error(b(418));e.flags=e.flags&-4097|2,R=!1,Oe=e}}}function eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function co(e){if(e!==Oe)return!1;if(!R)return eu(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=Fe)){if(Ml(e))throw Nd(),Error(b(418));for(;t;)bd(e,t),t=It(t.nextSibling)}if(eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Oe?It(e.stateNode.nextSibling):null;return!0}function Nd(){for(var e=Fe;e;)e=It(e.nextSibling)}function $n(){Fe=Oe=null,R=!1}function ca(e){tt===null?tt=[e]:tt.push(e)}var Vf=Et.ReactCurrentBatchConfig;function er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tu(e){var t=e._init;return t(e._payload)}function Sd(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=jt(p,c),p.index=0,p.sibling=null,p}function i(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,x){return c===null||c.tag!==6?(c=Ri(f,p.mode,x),c.return=p,c):(c=o(c,f),c.return=p,c)}function u(p,c,f,x){var N=f.type;return N===kn?m(p,c,f.props.children,x,f.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===At&&tu(N)===c.type)?(x=o(c,f.props),x.ref=er(p,c,f),x.return=p,x):(x=So(f.type,f.key,f.props,null,p.mode,x),x.ref=er(p,c,f),x.return=p,x)}function d(p,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=el(f,p.mode,x),c.return=p,c):(c=o(c,f.children||[]),c.return=p,c)}function m(p,c,f,x,N){return c===null||c.tag!==7?(c=tn(f,p.mode,x,N),c.return=p,c):(c=o(c,f),c.return=p,c)}function g(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ri(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return f=So(c.type,c.key,c.props,null,p.mode,f),f.ref=er(p,null,c),f.return=p,f;case xn:return c=el(c,p.mode,f),c.return=p,c;case At:var x=c._init;return g(p,x(c._payload),f)}if(ir(c)||Qn(c))return c=tn(c,p.mode,f,null),c.return=p,c;po(p,c)}return null}function h(p,c,f,x){var N=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:s(p,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:return f.key===N?u(p,c,f,x):null;case xn:return f.key===N?d(p,c,f,x):null;case At:return N=f._init,h(p,c,N(f._payload),x)}if(ir(f)||Qn(f))return N!==null?null:m(p,c,f,x,null);po(p,f)}return null}function y(p,c,f,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,s(c,p,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:return p=p.get(x.key===null?f:x.key)||null,u(c,p,x,N);case xn:return p=p.get(x.key===null?f:x.key)||null,d(c,p,x,N);case At:var E=x._init;return y(p,c,f,E(x._payload),N)}if(ir(x)||Qn(x))return p=p.get(f)||null,m(c,p,x,N,null);po(c,x)}return null}function k(p,c,f,x){for(var N=null,E=null,_=c,A=c=0,I=null;_!==null&&A<f.length;A++){_.index>A?(I=_,_=null):I=_.sibling;var S=h(p,_,f[A],x);if(S===null){_===null&&(_=I);break}e&&_&&S.alternate===null&&t(p,_),c=i(S,c,A),E===null?N=S:E.sibling=S,E=S,_=I}if(A===f.length)return n(p,_),R&&qt(p,A),N;if(_===null){for(;A<f.length;A++)_=g(p,f[A],x),_!==null&&(c=i(_,c,A),E===null?N=_:E.sibling=_,E=_);return R&&qt(p,A),N}for(_=r(p,_);A<f.length;A++)I=y(_,p,A,f[A],x),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?A:I.key),c=i(I,c,A),E===null?N=I:E.sibling=I,E=I);return e&&_.forEach(function(D){return t(p,D)}),R&&qt(p,A),N}function v(p,c,f,x){var N=Qn(f);if(typeof N!="function")throw Error(b(150));if(f=N.call(f),f==null)throw Error(b(151));for(var E=N=null,_=c,A=c=0,I=null,S=f.next();_!==null&&!S.done;A++,S=f.next()){_.index>A?(I=_,_=null):I=_.sibling;var D=h(p,_,S.value,x);if(D===null){_===null&&(_=I);break}e&&_&&D.alternate===null&&t(p,_),c=i(D,c,A),E===null?N=D:E.sibling=D,E=D,_=I}if(S.done)return n(p,_),R&&qt(p,A),N;if(_===null){for(;!S.done;A++,S=f.next())S=g(p,S.value,x),S!==null&&(c=i(S,c,A),E===null?N=S:E.sibling=S,E=S);return R&&qt(p,A),N}for(_=r(p,_);!S.done;A++,S=f.next())S=y(_,p,A,S.value,x),S!==null&&(e&&S.alternate!==null&&_.delete(S.key===null?A:S.key),c=i(S,c,A),E===null?N=S:E.sibling=S,E=S);return e&&_.forEach(function(T){return t(p,T)}),R&&qt(p,A),N}function w(p,c,f,x){if(typeof f=="object"&&f!==null&&f.type===kn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:e:{for(var N=f.key,E=c;E!==null;){if(E.key===N){if(N=f.type,N===kn){if(E.tag===7){n(p,E.sibling),c=o(E,f.props.children),c.return=p,p=c;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===At&&tu(N)===E.type){n(p,E.sibling),c=o(E,f.props),c.ref=er(p,E,f),c.return=p,p=c;break e}n(p,E);break}else t(p,E);E=E.sibling}f.type===kn?(c=tn(f.props.children,p.mode,x,f.key),c.return=p,p=c):(x=So(f.type,f.key,f.props,null,p.mode,x),x.ref=er(p,c,f),x.return=p,p=x)}return a(p);case xn:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=o(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=el(f,p.mode,x),c.return=p,p=c}return a(p);case At:return E=f._init,w(p,c,E(f._payload),x)}if(ir(f))return k(p,c,f,x);if(Qn(f))return v(p,c,f,x);po(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,f),c.return=p,p=c):(n(p,c),c=Ri(f,p.mode,x),c.return=p,p=c),a(p)):n(p,c)}return w}var jn=Sd(!0),Cd=Sd(!1),$o=Vt(null),jo=null,Mn=null,pa=null;function fa(){pa=Mn=jo=null}function ma(e){var t=$o.current;Q($o),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){jo=e,pa=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ze=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(pa!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(jo===null)throw Error(b(308));Mn=e,jo.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var Zt=null;function ha(e){Zt===null?Zt=[e]:Zt.push(e)}function Ad(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ha(t)):(n.next=o.next,o.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(U&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kt(e,n)}return o=r.interleaved,o===null?(t.next=t,ha(r)):(t.next=o.next,o.next=t),r.interleaved=t,kt(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}function nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var o=e.updateQueue;Mt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(i!==null){var g=o.baseState;a=0,m=d=u=null,s=i;do{var h=s.lane,y=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,v=s;switch(h=t,y=n,v.tag){case 1:if(k=v.payload,typeof k=="function"){g=k.call(y,g,h);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,h=typeof k=="function"?k.call(y,g,h):k,h==null)break e;g=re({},g,h);break e;case 2:Mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=y,u=g):m=m.next=y,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(m===null&&(u=g),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ln|=a,e.lanes=a,e.memoizedState=g}}function ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var Fr={},pt=Vt(Fr),Mr=Vt(Fr),Dr=Vt(Fr);function Rt(e){if(e===Fr)throw Error(b(174));return e}function va(e,t){switch(X(Dr,t),X(Mr,e),X(pt,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}Q(pt),X(pt,t)}function Un(){Q(pt),Q(Mr),Q(Dr)}function Dd(e){Rt(Dr.current);var t=Rt(pt.current),n=dl(t,e.type);t!==n&&(X(Mr,e),X(pt,n))}function ya(e){Mr.current===e&&(Q(pt),Q(Mr))}var te=Vt(0);function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xi=[];function xa(){for(var e=0;e<Xi.length;e++)Xi[e]._workInProgressVersionPrimary=null;Xi.length=0}var ko=Et.ReactCurrentDispatcher,Gi=Et.ReactCurrentBatchConfig,on=0,ne=null,se=null,fe=null,Ho=!1,fr=!1,_r=0,Jf=0;function ke(){throw Error(b(321))}function ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function wa(e,t,n,r,o,i){if(on=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?qf:Qf,e=n(r,o),fr){i=0;do{if(fr=!1,_r=0,25<=i)throw Error(b(301));i+=1,fe=se=null,t.updateQueue=null,ko.current=Yf,e=n(r,o)}while(fr)}if(ko.current=Vo,t=se!==null&&se.next!==null,on=0,fe=se=ne=null,Ho=!1,t)throw Error(b(300));return e}function Ea(){var e=_r!==0;return _r=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ne.memoizedState=fe=e:fe=fe.next=e,fe}function qe(){if(se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=fe===null?ne.memoizedState:fe.next;if(t!==null)fe=t,se=e;else{if(e===null)throw Error(b(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},fe===null?ne.memoizedState=fe=e:fe=fe.next=e}return fe}function zr(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=qe(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,d=i;do{var m=d.lane;if((on&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,ne.lanes|=m,ln|=m}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,ot(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,ln|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=qe(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);ot(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _d(){}function zd(e,t){var n=ne,r=qe(),o=t(),i=!ot(r.memoizedState,o);if(i&&(r.memoizedState=o,ze=!0),r=r.queue,ba(Bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Tr(9,Pd.bind(null,n,r,o,t),void 0,null),me===null)throw Error(b(349));(on&30)!==0||Td(n,t,o)}return o}function Td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pd(e,t,n,r){t.value=n,t.getSnapshot=r,Ld(t)&&Id(e)}function Bd(e,t,n){return n(function(){Ld(t)&&Id(e)})}function Ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Id(e){var t=kt(e,1);t!==null&&rt(t,e,1,-1)}function ou(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,ne,e),[t.memoizedState,e]}function Tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fd(){return qe().memoizedState}function wo(e,t,n,r){var o=ut();ne.flags|=e,o.memoizedState=Tr(1|t,n,void 0,r===void 0?null:r)}function ni(e,t,n,r){var o=qe();r=r===void 0?null:r;var i=void 0;if(se!==null){var a=se.memoizedState;if(i=a.destroy,r!==null&&ka(r,a.deps)){o.memoizedState=Tr(t,n,i,r);return}}ne.flags|=e,o.memoizedState=Tr(1|t,n,i,r)}function iu(e,t){return wo(8390656,8,e,t)}function ba(e,t){return ni(2048,8,e,t)}function Od(e,t){return ni(4,2,e,t)}function $d(e,t){return ni(4,4,e,t)}function jd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ud(e,t,n){return n=n!=null?n.concat([e]):null,ni(4,4,jd.bind(null,t,e),n)}function Na(){}function Wd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vd(e,t,n){return(on&21)===0?(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n):(ot(n,t)||(n=qu(),ne.lanes|=n,ln|=n,e.baseState=!0),t)}function Kf(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Gi.transition;Gi.transition={};try{e(!1),t()}finally{H=n,Gi.transition=r}}function Jd(){return qe().memoizedState}function Xf(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kd(e))Xd(t,n);else if(n=Ad(e,t,n,r),n!==null){var o=Ce();rt(n,e,r,o),Gd(n,t,r)}}function Gf(e,t,n){var r=$t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kd(e))Xd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,ot(s,a)){var u=t.interleaved;u===null?(o.next=o,ha(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}n=Ad(e,t,o,r),n!==null&&(o=Ce(),rt(n,e,r,o),Gd(n,t,r))}}function Kd(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Xd(e,t){fr=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}var Vo={readContext:Ge,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},qf={readContext:Ge,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xf.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:ou,useDebugValue:Na,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=ou(!1),t=e[0];return e=Kf.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=ut();if(R){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),me===null)throw Error(b(349));(on&30)!==0||Td(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,iu(Bd.bind(null,r,i,e),[e]),r.flags|=2048,Tr(9,Pd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ut(),t=me.identifierPrefix;if(R){var n=gt,r=ht;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qf={readContext:Ge,useCallback:Wd,useContext:Ge,useEffect:ba,useImperativeHandle:Ud,useInsertionEffect:Od,useLayoutEffect:$d,useMemo:Hd,useReducer:qi,useRef:Fd,useState:function(){return qi(zr)},useDebugValue:Na,useDeferredValue:function(e){var t=qe();return Vd(t,se.memoizedState,e)},useTransition:function(){var e=qi(zr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:_d,useSyncExternalStore:zd,useId:Jd,unstable_isNewReconciler:!1},Yf={readContext:Ge,useCallback:Wd,useContext:Ge,useEffect:ba,useImperativeHandle:Ud,useInsertionEffect:Od,useLayoutEffect:$d,useMemo:Hd,useReducer:Qi,useRef:Fd,useState:function(){return Qi(zr)},useDebugValue:Na,useDeferredValue:function(e){var t=qe();return se===null?t.memoizedState=e:Vd(t,se.memoizedState,e)},useTransition:function(){var e=Qi(zr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:_d,useSyncExternalStore:zd,useId:Jd,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ri={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=$t(e),i=vt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(rt(t,e,o,r),xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=$t(e),i=vt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(rt(t,e,o,r),xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=$t(e),o=vt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(rt(t,e,r,n),xo(t,e,r))}};function lu(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(o,i):!0}function qd(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(o=Pe(t)?nn:be.current,r=t.contextTypes,i=(r=r!=null)?On(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function au(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ri.enqueueReplaceState(t,t.state,null)}function Tl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ga(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ge(i):(i=Pe(t)?nn:be.current,o.context=On(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ri.enqueueReplaceState(o,o.state,null),Uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=Cp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zf=typeof WeakMap=="function"?WeakMap:Map;function Qd(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,Hl=r),Pl(e,t)},n}function Yd(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pl(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function su(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=pm.bind(null,e,t,n),t.then(e,e))}function uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function du(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Rf=Et.ReactCurrentOwner,ze=!1;function Se(e,t,n,r){t.child=e===null?Cd(t,null,n,r):jn(t,e.child,n,r)}function cu(e,t,n,r,o){n=n.render;var i=t.ref;return Ln(t,o),r=wa(e,t,n,r,i,o),n=Ea(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(R&&n&&ua(t),t.flags|=1,Se(e,t,r,o),t.child)}function pu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ta(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Zd(e,t,i,r,o)):(e=So(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(a,r)&&e.ref===t.ref)return wt(e,t,o)}return t.flags|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Zd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Nr(i,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,wt(e,t,o)}return Bl(e,t,n,r,o)}function Rd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(_n,Ie),Ie|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(_n,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(_n,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(_n,Ie),Ie|=r;return Se(e,t,o,n),t.child}function ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bl(e,t,n,r,o){var i=Pe(n)?nn:be.current;return i=On(t,i),Ln(t,o),n=wa(e,t,n,r,i,o),r=Ea(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(R&&r&&ua(t),t.flags|=1,Se(e,t,n,o),t.child)}function fu(e,t,n,r,o){if(Pe(n)){var i=!0;Io(t)}else i=!1;if(Ln(t,o),t.stateNode===null)Eo(e,t),qd(t,n,r),Tl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Pe(n)?nn:be.current,d=On(t,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&au(t,a,r,d),Mt=!1;var h=t.memoizedState;a.state=h,Uo(t,r,a,o),u=t.memoizedState,s!==r||h!==u||Te.current||Mt?(typeof m=="function"&&(zl(t,n,m,r),u=t.memoizedState),(s=Mt||lu(t,n,s,r,h,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Md(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Re(t.type,s),a.props=d,g=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ge(u):(u=Pe(n)?nn:be.current,u=On(t,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||h!==u)&&au(t,a,r,u),Mt=!1,h=t.memoizedState,a.state=h,Uo(t,r,a,o);var k=t.memoizedState;s!==g||h!==k||Te.current||Mt?(typeof y=="function"&&(zl(t,n,y,r),k=t.memoizedState),(d=Mt||lu(t,n,d,r,h,k,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ll(e,t,n,r,i,o)}function Ll(e,t,n,r,o,i){ec(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Zs(t,n,!1),wt(e,t,i);r=t.stateNode,Rf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=jn(t,e.child,null,i),t.child=jn(t,null,s,i)):Se(e,t,s,i),t.memoizedState=r.state,o&&Zs(t,n,!0),t.child}function tc(e){var t=e.stateNode;t.pendingContext?Ys(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ys(e,t.context,!1),va(e,t.containerInfo)}function mu(e,t,n,r,o){return $n(),ca(o),t.flags|=256,Se(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function nc(e,t,n){var r=t.pendingProps,o=te.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(te,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=li(a,r,0,null),e=tn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fl(n),t.memoizedState=Il,e):Sa(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return em(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=jt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=jt(s,i):(i=tn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Fl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return i=e.child,e=i.sibling,r=jt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sa(e,t){return t=li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&ca(r),jn(t,e.child,null,n),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(b(422))),fo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=li({mode:"visible",children:r.children},o,0,null),i=tn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&jn(t,e.child,null,a),t.child.memoizedState=Fl(a),t.memoizedState=Il,i);if((t.mode&1)===0)return fo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(b(419)),r=Yi(i,r,void 0),fo(e,t,a,r)}if(s=(a&e.childLanes)!==0,ze||s){if(r=me,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kt(e,o),rt(r,e,o,-1))}return za(),r=Yi(Error(b(421))),fo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=fm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Fe=It(o.nextSibling),Oe=t,R=!0,tt=null,e!==null&&(Ve[Je++]=ht,Ve[Je++]=gt,Ve[Je++]=rn,ht=e.id,gt=e.overflow,rn=t),t=Sa(t,r.children),t.flags|=4096,t)}function hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function Zi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function rc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hu(e,n,t);else if(e.tag===19)hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Wo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Zi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Wo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Zi(t,!0,n,null,i);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tm(e,t,n){switch(t.tag){case 3:tc(t),$n();break;case 5:Dd(t);break;case 1:Pe(t.type)&&Io(t);break;case 4:va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X($o,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?nc(e,t,n):(X(te,te.current&1),e=wt(e,t,n),e!==null?e.sibling:null);X(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return rc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,Rd(e,t,n)}return wt(e,t,n)}var oc,Ol,ic,lc;oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};ic=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rt(pt.current);var i=null;switch(n){case"input":o=ll(e,o),r=ll(e,r),i=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":o=ul(e,o),r=ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}cl(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(vr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(vr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&q("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function tr(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nm(e,t,n){var r=t.pendingProps;switch(da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Pe(t.type)&&Lo(),we(t),null;case 3:return r=t.stateNode,Un(),Q(Te),Q(be),xa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tt!==null&&(Kl(tt),tt=null))),Ol(e,t),we(t),null;case 5:ya(t);var o=Rt(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return we(t),null}if(e=Rt(pt.current),co(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[dt]=t,r[Ar]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<ar.length;o++)q(ar[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":bs(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":Ss(r,i),q("invalid",r)}cl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&uo(r.textContent,s,e),o=["children",""+s]):vr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&q("scroll",r)}switch(n){case"input":Yr(r),Ns(r,i,!0);break;case"textarea":Yr(r),Cs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[dt]=t,e[Ar]=r,oc(e,t,!1,!1),t.stateNode=e;e:{switch(a=pl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<ar.length;o++)q(ar[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":bs(e,r),o=ll(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),q("invalid",e);break;case"textarea":Ss(e,r),o=ul(e,r),q("invalid",e);break;default:o=r}cl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Fu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Lu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&yr(e,u):typeof u=="number"&&yr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&q("scroll",e):u!=null&&ql(e,i,u,a))}switch(n){case"input":Yr(e),Ns(e,r,!1);break;case"textarea":Yr(e),Cs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)lc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Rt(Dr.current),Rt(pt.current),co(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(i=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return we(t),null;case 13:if(Q(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&Fe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Nd(),$n(),t.flags|=98560,i=!1;else if(i=co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(b(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[dt]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else tt!==null&&(Kl(tt),tt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?ue===0&&(ue=3):za())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Un(),Ol(e,t),e===null&&Sr(t.stateNode.containerInfo),we(t),null;case 10:return ma(t.type._context),we(t),null;case 17:return Pe(t.type)&&Lo(),we(t),null;case 19:if(Q(te),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)tr(i,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Wo(e),a!==null){for(t.flags|=128,tr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>Hn&&(t.flags|=128,r=!0,tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Wo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!R)return we(t),null}else 2*ie()-i.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,tr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=te.current,X(te,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return _a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ie&1073741824)!==0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function rm(e,t){switch(da(t),t.tag){case 1:return Pe(t.type)&&Lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),Q(Te),Q(be),xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ya(t),null;case 13:if(Q(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(te),null;case 4:return Un(),null;case 10:return ma(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var mo=!1,Ee=!1,om=typeof WeakSet=="function"?WeakSet:Set,z=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function $l(e,t,n){try{n()}catch(r){oe(e,t,r)}}var gu=!1;function im(e,t){if(El=zo,e=cd(),sa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,m=0,g=e,h=null;t:for(;;){for(var y;g!==n||o!==0&&g.nodeType!==3||(s=a+o),g!==i||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===e)break t;if(h===n&&++d===o&&(s=a),h===i&&++m===r&&(u=a),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},zo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,w=k.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Re(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){oe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return k=gu,gu=!1,k}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&$l(t,n,i)}o=o.next}while(o!==r)}}function oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function ac(e){var t=e.alternate;t!==null&&(e.alternate=null,ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[Ar],delete t[Cl],delete t[Uf],delete t[Wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return e.tag===5||e.tag===3||e.tag===4}function vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}var ge=null,et=!1;function Ct(e,t,n){for(n=n.child;n!==null;)uc(e,t,n),n=n.sibling}function uc(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:Ee||Dn(n,t);case 6:var r=ge,o=et;ge=null,Ct(e,t,n),ge=r,et=o,ge!==null&&(et?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(et?(e=ge,n=n.stateNode,e.nodeType===8?Ji(e.parentNode,n):e.nodeType===1&&Ji(e,n),Er(e)):Ji(ge,n.stateNode));break;case 4:r=ge,o=et,ge=n.stateNode.containerInfo,et=!0,Ct(e,t,n),ge=r,et=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&$l(n,t,a),o=o.next}while(o!==r)}Ct(e,t,n);break;case 1:if(!Ee&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ct(e,t,n),Ee=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new om),t.forEach(function(r){var o=mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,et=!1;break e;case 3:ge=s.stateNode.containerInfo,et=!0;break e;case 4:ge=s.stateNode.containerInfo,et=!0;break e}s=s.return}if(ge===null)throw Error(b(160));uc(i,a,o),ge=null,et=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){oe(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dc(t,e),t=t.sibling}function dc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),st(e),r&4){try{mr(3,e,e.return),oi(3,e)}catch(v){oe(e,e.return,v)}try{mr(5,e,e.return)}catch(v){oe(e,e.return,v)}}break;case 1:Ze(t,e),st(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(Ze(t,e),st(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var o=e.stateNode;try{yr(o,"")}catch(v){oe(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Tu(o,i),pl(s,a);var d=pl(s,i);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?Fu(o,g):m==="dangerouslySetInnerHTML"?Lu(o,g):m==="children"?yr(o,g):ql(o,m,g,d)}switch(s){case"input":al(o,i);break;case"textarea":Pu(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?zn(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?zn(o,!!i.multiple,i.defaultValue,!0):zn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ar]=i}catch(v){oe(e,e.return,v)}}break;case 6:if(Ze(t,e),st(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){oe(e,e.return,v)}}break;case 3:if(Ze(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(v){oe(e,e.return,v)}break;case 4:Ze(t,e),st(e);break;case 13:Ze(t,e),st(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ma=ie())),r&4&&yu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(d=Ee)||m,Ze(t,e),Ee=d):Ze(t,e),st(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&(e.mode&1)!==0)for(z=e,m=e.child;m!==null;){for(g=z=m;z!==null;){switch(h=z,y=h.child,h.tag){case 0:case 11:case 14:case 15:mr(4,h,h.return);break;case 1:Dn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:Dn(h,h.return);break;case 22:if(h.memoizedState!==null){ku(g);continue}}y!==null?(y.return=h,z=y):ku(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{o=g.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Iu("display",a))}catch(v){oe(e,e.return,v)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(v){oe(e,e.return,v)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ze(t,e),st(e),r&4&&yu(e);break;case 21:break;default:Ze(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sc(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(yr(o,""),r.flags&=-33);var i=vu(e);Wl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=vu(e);Ul(e,s,a);break;default:throw Error(b(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lm(e,t,n){z=e,cc(e,t,n)}function cc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||mo;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Ee;s=mo;var d=Ee;if(mo=a,(Ee=u)&&!d)for(z=o;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?wu(o):u!==null?(u.return=a,z=u):wu(o);for(;i!==null;)z=i,cc(i,t,n),i=i.sibling;z=o,mo=s,Ee=d}xu(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,z=i):xu(e,t,n)}}function xu(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ee||oi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ru(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ru(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Er(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ee||t.flags&512&&jl(t)}catch(h){oe(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function ku(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function wu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oi(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){oe(t,o,u)}}var i=t.return;try{jl(t)}catch(u){oe(t,i,u)}break;case 5:var a=t.return;try{jl(t)}catch(u){oe(t,a,u)}}}catch(u){oe(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var am=Math.ceil,Jo=Et.ReactCurrentDispatcher,Ca=Et.ReactCurrentOwner,Xe=Et.ReactCurrentBatchConfig,U=0,me=null,ae=null,ve=0,Ie=0,_n=Vt(0),ue=0,Pr=null,ln=0,ii=0,Aa=0,hr=null,_e=null,Ma=0,Hn=1/0,ft=null,Ko=!1,Hl=null,Ot=null,ho=!1,Tt=null,Xo=0,gr=0,Vl=null,bo=-1,No=0;function Ce(){return(U&6)!==0?ie():bo!==-1?bo:bo=ie()}function $t(e){return(e.mode&1)===0?1:(U&2)!==0&&ve!==0?ve&-ve:Vf.transition!==null?(No===0&&(No=qu()),No):(e=H,e!==0||(e=window.event,e=e===void 0?16:nd(e.type)),e)}function rt(e,t,n,r){if(50<gr)throw gr=0,Vl=null,Error(b(185));Br(e,n,r),((U&2)===0||e!==me)&&(e===me&&((U&2)===0&&(ii|=n),ue===4&&_t(e,ve)),Be(e,r),n===1&&U===0&&(t.mode&1)===0&&(Hn=ie()+500,ti&&Jt()))}function Be(e,t){var n=e.callbackNode;Jp(e,t);var r=_o(e,e===me?ve:0);if(r===0)n!==null&&Ds(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ds(n),t===1)e.tag===0?Hf(Eu.bind(null,e)):wd(Eu.bind(null,e)),$f(function(){(U&6)===0&&Jt()}),n=null;else{switch(Qu(r)){case 1:n=ea;break;case 4:n=Xu;break;case 16:n=Do;break;case 536870912:n=Gu;break;default:n=Do}n=xc(n,pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pc(e,t){if(bo=-1,No=0,(U&6)!==0)throw Error(b(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=_o(e,e===me?ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Go(e,r);else{t=r;var o=U;U|=2;var i=mc();(me!==e||ve!==t)&&(ft=null,Hn=ie()+500,en(e,t));do try{dm();break}catch(s){fc(e,s)}while(!0);fa(),Jo.current=i,U=o,ae!==null?t=0:(me=null,ve=0,t=ue)}if(t!==0){if(t===2&&(o=vl(e),o!==0&&(r=o,t=Jl(e,o))),t===1)throw n=Pr,en(e,0),_t(e,r),Be(e,ie()),n;if(t===6)_t(e,r);else{if(o=e.current.alternate,(r&30)===0&&!sm(o)&&(t=Go(e,r),t===2&&(i=vl(e),i!==0&&(r=i,t=Jl(e,i))),t===1))throw n=Pr,en(e,0),_t(e,r),Be(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Qt(e,_e,ft);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=Ma+500-ie(),10<t)){if(_o(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(Qt.bind(null,e,_e,ft),t);break}Qt(e,_e,ft);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-nt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*am(r/1960))-r,10<r){e.timeoutHandle=Sl(Qt.bind(null,e,_e,ft),r);break}Qt(e,_e,ft);break;case 5:Qt(e,_e,ft);break;default:throw Error(b(329))}}}return Be(e,ie()),e.callbackNode===n?pc.bind(null,e):null}function Jl(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=Go(e,t),e!==2&&(t=_e,_e=n,t!==null&&Kl(t)),e}function Kl(e){_e===null?_e=e:_e.push.apply(_e,e)}function sm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ot(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~Aa,t&=~ii,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Eu(e){if((U&6)!==0)throw Error(b(327));In();var t=_o(e,0);if((t&1)===0)return Be(e,ie()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=Pr,en(e,0),_t(e,t),Be(e,ie()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,_e,ft),Be(e,ie()),null}function Da(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Hn=ie()+500,ti&&Jt())}}function an(e){Tt!==null&&Tt.tag===0&&(U&6)===0&&In();var t=U;U|=1;var n=Xe.transition,r=H;try{if(Xe.transition=null,H=1,e)return e()}finally{H=r,Xe.transition=n,U=t,(U&6)===0&&Jt()}}function _a(){Ie=_n.current,Q(_n)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Of(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:Un(),Q(Te),Q(be),xa();break;case 5:ya(r);break;case 4:Un();break;case 13:Q(te);break;case 19:Q(te);break;case 10:ma(r.type._context);break;case 22:case 23:_a()}n=n.return}if(me=e,ae=e=jt(e.current,null),ve=Ie=t,ue=0,Pr=null,Aa=ii=ln=0,_e=hr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Zt=null}return e}function fc(e,t){do{var n=ae;try{if(fa(),ko.current=Vo,Ho){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ho=!1}if(on=0,fe=se=ne=null,fr=!1,_r=0,Ca.current=null,n===null||n.return===null){ue=1,Pr=t,ae=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=ve,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,g=m.tag;if((m.mode&1)===0&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=uu(a);if(y!==null){y.flags&=-257,du(y,a,s,i,t),y.mode&1&&su(i,d,t),t=y,u=d;var k=t.updateQueue;if(k===null){var v=new Set;v.add(u),t.updateQueue=v}else k.add(u);break e}else{if((t&1)===0){su(i,d,t),za();break e}u=Error(b(426))}}else if(R&&s.mode&1){var w=uu(a);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),du(w,a,s,i,t),ca(Wn(u,s));break e}}i=u=Wn(u,s),ue!==4&&(ue=2),hr===null?hr=[i]:hr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Qd(i,u,t);nu(i,p);break e;case 1:s=u;var c=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ot===null||!Ot.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Yd(i,s,t);nu(i,x);break e}}i=i.return}while(i!==null)}gc(n)}catch(N){t=N,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function mc(){var e=Jo.current;return Jo.current=Vo,e===null?Vo:e}function za(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||(ln&268435455)===0&&(ii&268435455)===0||_t(me,ve)}function Go(e,t){var n=U;U|=2;var r=mc();(me!==e||ve!==t)&&(ft=null,en(e,t));do try{um();break}catch(o){fc(e,o)}while(!0);if(fa(),U=n,Jo.current=r,ae!==null)throw Error(b(261));return me=null,ve=0,ue}function um(){for(;ae!==null;)hc(ae)}function dm(){for(;ae!==null&&!Ip();)hc(ae)}function hc(e){var t=yc(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?gc(e):ae=t,Ca.current=null}function gc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=nm(n,t,Ie),n!==null){ae=n;return}}else{if(n=rm(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ae=null;return}}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ue===0&&(ue=5)}function Qt(e,t,n){var r=H,o=Xe.transition;try{Xe.transition=null,H=1,cm(e,t,n,r)}finally{Xe.transition=o,H=r}return null}function cm(e,t,n,r){do In();while(Tt!==null);if((U&6)!==0)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Kp(e,i),e===me&&(ae=me=null,ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ho||(ho=!0,xc(Do,function(){return In(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Xe.transition,Xe.transition=null;var a=H;H=1;var s=U;U|=4,Ca.current=null,im(e,n),dc(n,e),Pf(bl),zo=!!El,bl=El=null,e.current=n,lm(n,e,o),Fp(),U=s,H=a,Xe.transition=i}else e.current=n;if(ho&&(ho=!1,Tt=e,Xo=o),i=e.pendingLanes,i===0&&(Ot=null),jp(n.stateNode,r),Be(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ko)throw Ko=!1,e=Hl,Hl=null,e;return(Xo&1)!==0&&e.tag!==0&&In(),i=e.pendingLanes,(i&1)!==0?e===Vl?gr++:(gr=0,Vl=e):gr=0,Jt(),null}function In(){if(Tt!==null){var e=Qu(Xo),t=Xe.transition,n=H;try{if(Xe.transition=null,H=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,Xo=0,(U&6)!==0)throw Error(b(331));var o=U;for(U|=4,z=e.current;z!==null;){var i=z,a=i.child;if((z.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(z=d;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:mr(8,m,i)}var g=m.child;if(g!==null)g.return=m,z=g;else for(;z!==null;){m=z;var h=m.sibling,y=m.return;if(ac(m),m===d){z=null;break}if(h!==null){h.return=y,z=h;break}z=y}}}var k=i.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}z=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,z=p;break e}z=i.return}}var c=e.current;for(z=c;z!==null;){a=z;var f=a.child;if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,z=f;else e:for(a=c;z!==null;){if(s=z,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:oi(9,s)}}catch(N){oe(s,s.return,N)}if(s===a){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(U=o,Jt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Qo,e)}catch{}r=!0}return r}finally{H=n,Xe.transition=t}}return!1}function bu(e,t,n){t=Wn(n,t),t=Qd(e,t,1),e=Ft(e,t,1),t=Ce(),e!==null&&(Br(e,1,t),Be(e,t))}function oe(e,t,n){if(e.tag===3)bu(e,e,n);else for(;t!==null;){if(t.tag===3){bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Wn(n,e),e=Yd(t,e,1),t=Ft(t,e,1),e=Ce(),t!==null&&(Br(t,1,e),Be(t,e));break}}t=t.return}}function pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ve&n)===n&&(ue===4||ue===3&&(ve&130023424)===ve&&500>ie()-Ma?en(e,0):Aa|=n),Be(e,t)}function vc(e,t){t===0&&((e.mode&1)===0?t=1:(t=eo,eo<<=1,(eo&130023424)===0&&(eo=4194304)));var n=Ce();e=kt(e,t),e!==null&&(Br(e,t,n),Be(e,n))}function fm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vc(e,n)}function mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),vc(e,n)}var yc;yc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)ze=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ze=!1,tm(e,t,n);ze=(e.flags&131072)!==0}else ze=!1,R&&(t.flags&1048576)!==0&&Ed(t,Oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Eo(e,t),e=t.pendingProps;var o=On(t,be.current);Ln(t,n),o=wa(null,t,r,e,o,n);var i=Ea();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,Io(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ga(t),o.updater=ri,t.stateNode=o,o._reactInternals=t,Tl(t,r,e,n),t=Ll(null,t,r,!0,i,n)):(t.tag=0,R&&i&&ua(t),Se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=gm(r),e=Re(r,e),o){case 0:t=Bl(null,t,r,e,n);break e;case 1:t=fu(null,t,r,e,n);break e;case 11:t=cu(null,t,r,e,n);break e;case 14:t=pu(null,t,r,Re(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Bl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),fu(e,t,r,o,n);case 3:e:{if(tc(t),e===null)throw Error(b(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Md(e,t),Uo(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Wn(Error(b(423)),t),t=mu(e,t,r,n,o);break e}else if(r!==o){o=Wn(Error(b(424)),t),t=mu(e,t,r,n,o);break e}else for(Fe=It(t.stateNode.containerInfo.firstChild),Oe=t,R=!0,tt=null,n=Cd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===o){t=wt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return Dd(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Nl(r,o)?a=null:i!==null&&Nl(r,i)&&(t.flags|=32),ec(e,t),Se(e,t,a,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return nc(e,t,n);case 4:return va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),cu(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,X($o,r._currentValue),r._currentValue=a,i!==null)if(ot(i.value,a)){if(i.children===o.children&&!Te.current){t=wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=vt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),_l(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(b(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),_l(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ln(t,n),o=Ge(o),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,o=Re(r,t.pendingProps),o=Re(r.type,o),pu(e,t,r,o,n);case 15:return Zd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Eo(e,t),t.tag=1,Pe(r)?(e=!0,Io(t)):e=!1,Ln(t,n),qd(t,r,o),Tl(t,r,o,n),Ll(null,t,r,!0,e,n);case 19:return rc(e,t,n);case 22:return Rd(e,t,n)}throw Error(b(156,t.tag))};function xc(e,t){return Ku(e,t)}function hm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new hm(e,t,n,r)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gm(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yl)return 11;if(e===Zl)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ta(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case kn:return tn(n.children,o,i,t);case Ql:a=8,o|=8;break;case nl:return e=Ke(12,n,t,o|2),e.elementType=nl,e.lanes=i,e;case rl:return e=Ke(13,n,t,o),e.elementType=rl,e.lanes=i,e;case ol:return e=Ke(19,n,t,o),e.elementType=ol,e.lanes=i,e;case Du:return li(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Au:a=10;break e;case Mu:a=9;break e;case Yl:a=11;break e;case Zl:a=14;break e;case At:a=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Ke(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function tn(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function li(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=Du,e.lanes=n,e.stateNode={isHidden:!1},e}function Ri(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function el(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Pa(e,t,n,r,o,i,a,s,u){return e=new vm(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ga(i),e}function ym(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kc(e){if(!e)return Wt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Pe(n))return kd(e,n,t)}return t}function wc(e,t,n,r,o,i,a,s,u){return e=Pa(n,r,!0,e,o,i,a,s,u),e.context=kc(null),n=e.current,r=Ce(),o=$t(n),i=vt(r,o),i.callback=t??null,Ft(n,i,o),e.current.lanes=o,Br(e,o,r),Be(e,r),e}function ai(e,t,n,r){var o=t.current,i=Ce(),a=$t(o);return n=kc(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,a),e!==null&&(rt(e,o,a,i),xo(e,o,a)),a}function qo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ba(e,t){Nu(e,t),(e=e.alternate)&&Nu(e,t)}function xm(){return null}var Ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}si.prototype.render=La.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));ai(e,t,null,null)};si.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){ai(null,e,null,null)}),t[xt]=null}};function si(e){this._internalRoot=e}si.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ru();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&td(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function km(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=qo(a);i.call(d)}}var a=wc(t,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=a,e[xt]=a.current,Sr(e.nodeType===8?e.parentNode:e),an(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=qo(u);s.call(d)}}var u=Pa(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=u,e[xt]=u.current,Sr(e.nodeType===8?e.parentNode:e),an(function(){ai(t,u,n,r)}),u}function di(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=qo(a);s.call(u)}}ai(t,a,e,o)}else a=km(n,t,e,o,r);return qo(a)}Yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(ta(t,n|1),Be(t,ie()),(U&6)===0&&(Hn=ie()+500,Jt()))}break;case 13:an(function(){var r=kt(e,1);if(r!==null){var o=Ce();rt(r,e,1,o)}}),Ba(e,1)}};na=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Ce();rt(t,e,134217728,n)}Ba(e,134217728)}};Zu=function(e){if(e.tag===13){var t=$t(e),n=kt(e,t);if(n!==null){var r=Ce();rt(n,e,t,r)}Ba(e,t)}};Ru=function(){return H};ed=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};ml=function(e,t,n){switch(t){case"input":if(al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ei(r);if(!o)throw Error(b(90));zu(r),al(r,o)}}}break;case"textarea":Pu(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};ju=Da;Uu=an;var wm={usingClientEntryPoint:!1,Events:[Ir,Nn,ei,Ou,$u,Da]},nr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Em={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vu(e),e===null?null:e.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(rr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!rr.isDisabled&&rr.supportsFiber))try{Qo=rr.inject(Em),ct=rr}catch{}var rr;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wm;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(t))throw Error(b(200));return ym(e,t,null,n)};Ue.createRoot=function(e,t){if(!Ia(e))throw Error(b(299));var n=!1,r="",o=Ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Pa(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,Sr(e.nodeType===8?e.parentNode:e),new La(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Vu(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return an(e)};Ue.hydrate=function(e,t,n){if(!ui(t))throw Error(b(200));return di(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!Ia(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Ec;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wc(t,null,e,1,n??null,o,!1,i,a),e[xt]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new si(t)};Ue.render=function(e,t,n){if(!ui(t))throw Error(b(200));return di(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!ui(e))throw Error(b(40));return e._reactRootContainer?(an(function(){di(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Ue.unstable_batchedUpdates=Da;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ui(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return di(e,t,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426"});var Cc=Xt((L0,Sc)=>{"use strict";function Nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nc)}catch(e){console.error(e)}}Nc(),Sc.exports=bc()});var Mc=Xt(Fa=>{"use strict";var Ac=Cc();Fa.createRoot=Ac.createRoot,Fa.hydrateRoot=Ac.hydrateRoot;var I0});var l=Ga(bi()),Wc=Ga(Mc()),ci=Date.now();function he(){return ci+=1,ci}var pi=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function Dc(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(o=>o.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function bm(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function B(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function Nm(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"narrow"}).format(t)}function We(e){let[t,n]=e.split(":").map(Number);return t*60+n}function lt(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function bt(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function Oa(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function mi(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(B(0)))n=0;else if(t.has(B(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,o=n,i=0,a=!0,s=!1;for(;;)if(t.has(B(o)))r++,i++,!a&&i>=7&&(a=!0,i=0),o-=1;else if(a)a=!1,i=0,s=!0,o-=1;else break;return{streak:r,freezeUsed:s}}function Sm(e){return mi(e).streak}var Cm=[15,30,45,60,90,120],Hc="tasksh.sound.v1",Or=null;function Am(){if(!Or){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;Or=new e}return Or.state==="suspended"&&Or.resume(),Or}function Vc(){try{let e=localStorage.getItem(Hc);return e===null?!0:e==="1"}catch{return!0}}function Mm(e){try{localStorage.setItem(Hc,e?"1":"0")}catch{}}function cn(e){if(!Vc())return;let t=Am();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:o=0,dur:i=.08,type:a="sine",gain:s=.05})=>{let u=t.createOscillator(),d=t.createGain();u.type=a,u.frequency.setValueAtTime(r,n+o),d.gain.setValueAtTime(1e-4,n+o),d.gain.exponentialRampToValueAtTime(s,n+o+.008),d.gain.exponentialRampToValueAtTime(1e-4,n+o+i),u.connect(d),d.connect(t.destination),u.start(n+o),u.stop(n+o+i+.02)})}var L={click:()=>cn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>cn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>cn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>cn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>cn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>cn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function Dm(){let[e,t]=(0,l.useState)(Vc());return[e,()=>{let r=!e;t(r),Mm(r),r&&cn([{freq:720,dur:.05,gain:.04}])}]}function _m(e,t=550){let[n,r]=(0,l.useState)(e),o=(0,l.useRef)(e),i=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let a=o.current,s=e;if(a===s)return;let u=performance.now(),d=g=>1-Math.pow(1-g,3),m=g=>{let h=g-u,y=Math.min(1,h/t),k=d(y);r(Math.round(a+(s-a)*k)),y<1?i.current=requestAnimationFrame(m):o.current=s};return i.current=requestAnimationFrame(m),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function it({value:e,className:t,suffix:n=""}){let r=_m(e);return l.default.createElement("span",{className:t},r,n)}function zm({axes:e,size:t=220,maxValue:n}){let[r,o]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let v=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(v)},[]);let i=e.length,a=t/2,s=t/2,u=t/2-34,d=n??Math.max(1,...e.map(v=>v.value)),m=v=>Math.PI*2*v/i-Math.PI/2,g=(v,w)=>{let p=m(v);return[a+Math.cos(p)*u*w,s+Math.sin(p)*u*w]},h=[.25,.5,.75,1],k=e.map((v,w)=>g(w,r?Math.max(.04,v.value/d):.02)).map((v,w)=>`${w===0?"M":"L"}${v[0].toFixed(1)},${v[1].toFixed(1)}`).join(" ")+"Z";return l.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:"100%",height:t,className:"radar-chart"},h.map((v,w)=>{let c=e.map((f,x)=>g(x,v)).map((f,x)=>`${x===0?"M":"L"}${f[0].toFixed(1)},${f[1].toFixed(1)}`).join(" ")+"Z";return l.default.createElement("path",{key:w,d:c,className:"radar-ring"})}),e.map((v,w)=>{let p=g(w,1);return l.default.createElement("line",{key:w,x1:a,y1:s,x2:p[0],y2:p[1],className:"radar-spoke"})}),l.default.createElement("path",{d:k,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((v,w)=>{let p=g(w,1.22),c=g(w,r?Math.max(.04,v.value/d):.02);return l.default.createElement("g",{key:v.key||w},l.default.createElement("circle",{cx:c[0],cy:c[1],r:3.5,fill:v.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),l.default.createElement("text",{x:p[0],y:p[1],textAnchor:"middle",dominantBaseline:"middle",className:"radar-label"},v.label))}))}function hi({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:o="#1E2228",label:i,sublabel:a}){let[s,u]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let v=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(v)},[]);let d=t/2-n,m=2*Math.PI*d,g=Math.max(0,Math.min(100,e)),h=m-(s?g/100:0)*m,y=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return l.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},l.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},l.default.createElement("circle",{cx:t/2,cy:t/2,r:d,fill:"none",stroke:o,strokeWidth:n}),l.default.createElement("circle",{cx:t/2,cy:t/2,r:d,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:m,strokeDashoffset:h,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),l.default.createElement("div",{className:"radial-progress-center"},i&&l.default.createElement("span",{className:"radial-progress-label",style:{fontSize:y}},i),a&&l.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},a)))}function Jc({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:o}){let[i,a]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let h=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(h)},[]);let s=t/2-n/2,u=2*Math.PI*s,d=Math.max(1e-6,e.reduce((h,y)=>h+Math.max(0,y.value),0)),m=0,g=e.map(h=>{let y=Math.max(0,h.value),k=y/d,v=i?k*u:0,w=u-v,p=m/d*360;return m+=y,{...h,dash:v,gap:w,rotation:p,frac:k}});return l.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},l.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},l.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),g.map((h,y)=>l.default.createElement("circle",{key:h.key||y,cx:t/2,cy:t/2,r:s,fill:"none",stroke:h.color,strokeWidth:n,strokeDasharray:`${h.dash} ${h.gap}`,strokeDashoffset:0,transform:`rotate(${h.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:g.length>1?"butt":"round"}))),l.default.createElement("div",{className:"donut-center"},r!==void 0&&l.default.createElement("span",{className:"donut-center-label"},r),o&&l.default.createElement("span",{className:"donut-center-sublabel"},o)))}function Tm({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],o=0,i=t*7,a=Array.from({length:i},(m,g)=>o-(i-1-g)),s=Math.max(1,...a.map(m=>e[B(m)]||0)),u=[];for(let m=0;m<t;m++)u.push(a.slice(m*7,m*7+7));let d=m=>{if(!m)return 0;let g=m/s;return g>.75?4:g>.5?3:g>.25?2:1};return l.default.createElement("div",{className:"heatmap-wrap"},l.default.createElement("div",{className:"heatmap-grid"},u.map((m,g)=>l.default.createElement("div",{className:"heatmap-col",key:g},m.map((h,y)=>{let k=B(h),v=e[k]||0,w=d(v);return l.default.createElement("span",{key:y,className:`heatmap-cell ${h===0?"today":""}`,style:{background:r[w],animationDelay:`${(g*7+y)*4}ms`},title:`${k}: ${v} completed`})})))),l.default.createElement("div",{className:"heatmap-legend"},l.default.createElement("span",null,"less"),r.map((m,g)=>l.default.createElement("span",{key:g,className:"heatmap-legend-cell",style:{background:m}})),l.default.createElement("span",null,"more")))}function Pm(e){let t=[],n=[];for(let r of e){let o=t.findIndex(i=>r.start>=i);o===-1?(o=t.length,t.push(r.end)):t[o]=r.end,n.push({...r,lane:o})}return{placed:n,laneCount:Math.max(1,t.length)}}function Bm({routines:e,nowMinutes:t}){let[n,r]=(0,l.useState)(!1),[o,i]=(0,l.useState)(0),a=(0,l.useRef)(null);(0,l.useEffect)(()=>{let f=requestAnimationFrame(()=>r(!0));return()=>cancelAnimationFrame(f)},[]),(0,l.useEffect)(()=>{if(!a.current)return;let f=a.current,x=new ResizeObserver(N=>{for(let E of N)i(E.contentRect.width)});return x.observe(f),i(f.getBoundingClientRect().width),()=>x.disconnect()},[]);let s=1440,u=t/s*100,d=[0,3,6,9,12,15,18,21,24],m=f=>{let x=f%24;return x===0?"12a":x===12?"12p":x>12?`${x-12}p`:`${x}a`},g=B(0),h=e.map(f=>{let x=We(f.time);return{r:f,start:x,end:x+Math.max(1,f.duration)}}),{placed:y,laneCount:k}=Pm(h),v=30,w=4,p=7,c=p*2+k*v+(k-1)*w;return l.default.createElement("div",{className:"timeline-wrap"},l.default.createElement("div",{className:"timeline-hours"},d.map(f=>l.default.createElement("div",{key:f,className:"timeline-hour",style:{left:`${f/24*100}%`}},l.default.createElement("span",null,m(f))))),l.default.createElement("div",{className:"timeline-track",ref:a,style:{height:c}},l.default.createElement("div",{className:"timeline-night",style:{left:"0%",width:`${6/24*100}%`}}),l.default.createElement("div",{className:"timeline-night",style:{left:`${22/24*100}%`,width:`${2/24*100}%`}}),d.map(f=>l.default.createElement("div",{key:f,className:"timeline-gridline",style:{left:`${f/24*100}%`}})),l.default.createElement("div",{className:"timeline-elapsed",style:{width:n?`${u}%`:"0%"}}),y.map(({r:f,start:x,lane:N},E)=>{let _=x/s*100,A=Math.max(1,f.duration)/s*100,I=Math.max(.8,Math.min(A,100-_)),S=(f.history||[]).includes(g),D=pn(f.id),F=I/100*o>44;return l.default.createElement("div",{key:f.id,className:`timeline-block ${S?"done":""}`,style:{left:`${_}%`,top:p+N*(v+w),width:n?`${I}%`:"0%",height:v,transitionDelay:`${E*20}ms`,background:S?"linear-gradient(180deg, #3A4048, #2A2F36)":`linear-gradient(180deg, ${D}, ${D}CC)`,boxShadow:S?"none":`0 0 10px ${D}55`},title:`${f.label} \xB7 ${lt(x)} \xB7 ${bt(f.duration)}${S?" \xB7 done":""}`},F&&l.default.createElement("span",{className:"timeline-block-label"},f.label))}),l.default.createElement("div",{className:"timeline-now",style:{left:`${u}%`,top:-3,bottom:-3}},l.default.createElement("span",{className:"timeline-now-tag"},lt(t)))),e.length>0&&l.default.createElement("div",{className:"timeline-legend"},e.map(f=>{let x=(f.history||[]).includes(g);return l.default.createElement("span",{key:f.id,className:`timeline-legend-chip ${x?"done":""}`},l.default.createElement("span",{className:"timeline-legend-dot",style:{background:x?"#3A4048":pn(f.id)}}),l.default.createElement("span",{className:"timeline-legend-time"},lt(We(f.time))),l.default.createElement("span",{className:"timeline-legend-label"},f.label))})))}var Lm=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[B(-1),B(-2),B(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[B(-1),B(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[B(0),B(-1),B(-2),B(-3),B(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[B(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function Wa(){let[e,t]=(0,l.useState)(Dc());return(0,l.useEffect)(()=>{let n=setInterval(()=>t(Dc()),1e3);return()=>clearInterval(n)},[]),e}function Ha(e,t){return(0,l.useMemo)(()=>{let n=[...e].sort((i,a)=>We(i.time)-We(a.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&We(n[i].time)<=t;i++)r=i;let o=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[o].id}},[e,t])}function Im({history:e}){let t=new Set(e||[]),n=[-6,-5,-4,-3,-2,-1,0].map(r=>B(r));return l.default.createElement("span",{className:"week-dots"},n.map((r,o)=>l.default.createElement("span",{key:o,className:`week-dot ${t.has(r)?"filled":""}`})))}function Fm({routine:e,status:t,index:n,onDelete:r,onToggleToday:o,onSave:i}){let a=We(e.time),s=a+e.duration,{streak:u,freezeUsed:d}=mi(e.history),m=(e.history||[]).includes(B(0)),[g,h]=(0,l.useState)(0),y=(0,l.useRef)(!1),k=(0,l.useRef)(0),v=(0,l.useRef)(0),w=(0,l.useRef)(null),p=(0,l.useRef)(!1),[c,f]=(0,l.useState)(!1),[x,N]=(0,l.useState)(!1),[E,_]=(0,l.useState)(e.label),[A,I]=(0,l.useState)(e.time),[S,D]=(0,l.useState)(e.duration),[T,F]=(0,l.useState)(e.alternatives||[]),le=()=>{_(e.label),I(e.time),D(e.duration),F(e.alternatives||[]),N(!0)},P=()=>{let W=E.trim();W&&(i(e.id,{label:W,time:A||e.time,duration:Math.max(5,+S||e.duration),alternatives:T.map(J=>J.trim()).filter(Boolean)}),N(!1))},V=W=>{x||(y.current=!0,p.current=!1,w.current=null,k.current=W.clientX,v.current=W.clientY)},ee=W=>{if(!y.current)return;let J=W.clientX-k.current,Me=W.clientY-v.current;if(w.current===null){if(Math.abs(J)<6&&Math.abs(Me)<6)return;if(w.current=Math.abs(J)>Math.abs(Me)?"x":"y",w.current==="y"){y.current=!1;return}}w.current==="x"&&(Math.abs(J)>4&&(p.current=!0),h(Math.max(-120,Math.min(0,J))))},Y=()=>{y.current&&(y.current=!1,g<-70?(f(!0),setTimeout(()=>r(e.id),200)):(h(0),p.current||le()))};return l.default.createElement("div",{className:`routine-row-wrap ${c?"removing":""}`,style:{animationDelay:`${n*35}ms`}},l.default.createElement("div",{className:"routine-delete-bg"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),l.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${g}px)`,transition:y.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${m?"#2A2F36":pn(e.id)}`},onPointerDown:V,onPointerMove:ee,onPointerUp:Y,onPointerLeave:Y,onPointerCancel:Y},l.default.createElement("div",{className:"routine-line"},l.default.createElement("span",{className:`routine-node ${m?"quest-done":""}`}),l.default.createElement("span",{className:"routine-connector"})),x?l.default.createElement("div",{className:"routine-edit",onPointerDown:W=>W.stopPropagation()},l.default.createElement("input",{className:"edit-label",value:E,onChange:W=>_(W.target.value),onKeyDown:W=>W.key==="Enter"&&P(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"time",className:"time-input",value:A,onChange:W=>I(W.target.value)}),l.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:S,onChange:W=>D(W.target.value)}),l.default.createElement("span",{className:"edit-unit"},"min")),l.default.createElement("div",{className:"alt-composer"},l.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),T.map((W,J)=>l.default.createElement("div",{className:"alt-composer-row",key:J},l.default.createElement("input",{type:"text",placeholder:`alternative ${J+1}`,value:W,onChange:Me=>{let Qe=[...T];Qe[J]=Me.target.value,F(Qe)},onKeyDown:Me=>Me.key==="Enter"&&P()}),l.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>F(T.filter((Me,Qe)=>Qe!==J)),"aria-label":"Remove alternative"},"\xD7"))),l.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>F([...T,""])},"+ another option")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>N(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:P},"save"))):l.default.createElement("div",{className:"routine-main"},l.default.createElement("div",{className:"routine-top"},l.default.createElement("span",{className:"routine-time"},lt(a)),t==="current"&&l.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&l.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,d&&l.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),l.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&l.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),l.default.createElement("span",{className:"routine-span"},lt(a)," \u2013 ",lt(s)," \xB7 ",bt(e.duration)),l.default.createElement(Im,{history:e.history}))))}function Om({routines:e}){let t=[-6,-5,-4,-3,-2,-1,0],n=e.length||1,r=t.map(o=>{let i=B(o),a=e.filter(s=>(s.history||[]).includes(i)).length;return{offset:o,pct:Math.round(a/n*100),label:Nm(o)}});return l.default.createElement("div",{className:"week-chart"},r.map((o,i)=>l.default.createElement("div",{className:"week-bar-col",key:i},l.default.createElement("div",{className:"week-bar-track"},l.default.createElement("div",{className:`week-bar-fill ${o.offset===0?"today":""}`,style:{height:`${Math.max(4,o.pct)}%`}})),l.default.createElement("span",{className:"week-bar-label"},o.label))))}function $m({routines:e,setRoutines:t}){let n=Wa(),r=n.hour*60+n.minute,{sorted:o,currentId:i,nextId:a}=Ha(e,r),s=o.find(P=>P.id===i),u=o.find(P=>P.id===a),[d,m]=(0,l.useState)(""),[g,h]=(0,l.useState)(()=>Oa(r)),[y,k]=(0,l.useState)(30),[v,w]=(0,l.useState)(!1),[p,c]=(0,l.useState)([]),[f,x]=(0,l.useState)(!1),N=()=>{let P=d.trim();if(!P){w(!0),setTimeout(()=>w(!1),420),L.error();return}let V=g||Oa(r),ee=p.map(Y=>Y.trim()).filter(Boolean);t(Y=>[...Y,{id:he(),time:V,label:P,duration:Math.max(5,+y||30),history:[],alternatives:ee}]),m(""),h(Oa(r)),k(30),c([]),x(!1),L.click()},E=P=>{t(V=>V.filter(ee=>ee.id!==P)),L.delete()},_=P=>{let V=B(0),ee=!1;t(Y=>Y.map(W=>{if(W.id!==P)return W;let J=(W.history||[]).includes(V);ee=!J;let Me=J?W.history.filter(Qe=>Qe!==V):[...W.history||[],V];return{...W,history:Me.slice(-60)}})),ee?L.success():L.click()},A=(P,V)=>t(ee=>ee.map(Y=>Y.id===P?{...Y,...V}:Y)),I=s?We(s.time)+s.duration:0,S=u?(We(u.time)-r+1440)%1440||1440:0,D=B(0),T=o.filter(P=>(P.history||[]).includes(D)).length,F=o.reduce((P,V)=>Math.max(P,Sm(V.history)),0),le=o.length?Math.round(T/o.length*100):0;return l.default.createElement("div",{className:"task-list routine-list"},l.default.createElement("div",{className:"hero-card"},l.default.createElement("div",{className:"hero-clock-row"},l.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),l.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),l.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),l.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),l.default.createElement("span",{className:"hero-date"},bm()),l.default.createElement("div",{className:"hero-divider"}),s?l.default.createElement("div",{className:"hero-current"},l.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),l.default.createElement("div",{className:"hero-current-name"},l.default.createElement("span",{className:"pulse-dot"}),s.label),l.default.createElement("span",{className:"hero-sub"},"until ",lt(I)," \xB7 next: ",u?.label," in ",bt(S))):l.default.createElement("span",{className:"hero-sub"},"no routines yet")),l.default.createElement("div",{className:"quest-stats"},l.default.createElement("div",{className:"quest-stat-item"},l.default.createElement("span",{className:"quest-stat-value"},l.default.createElement(it,{value:T}),l.default.createElement("span",{className:"quest-stat-of"},"/",o.length)),l.default.createElement("span",{className:"quest-stat-label"},"today")),l.default.createElement("div",{className:"quest-stat-item"},l.default.createElement("span",{className:"quest-stat-value amber"},"\u{1F525}",l.default.createElement(it,{value:F})),l.default.createElement("span",{className:"quest-stat-label"},"best streak")),l.default.createElement("div",{className:"quest-stat-item quest-stat-ring"},l.default.createElement(hi,{pct:le,size:44,stroke:3.5,label:`${le}%`}))),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"TODAY'S SCHEDULE")),l.default.createElement(Bm,{routines:o,nowMinutes:r}),l.default.createElement("div",{className:`composer ${v?"shake":""}`},l.default.createElement("input",{type:"text",placeholder:"new routine...",value:d,onChange:P=>m(P.target.value),onKeyDown:P=>P.key==="Enter"&&N()}),l.default.createElement("input",{type:"time",className:"time-input",value:g,onChange:P=>h(P.target.value)}),l.default.createElement("button",{type:"button",className:`alt-toggle-btn ${f?"active":""}`,onClick:()=>x(P=>!P),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),l.default.createElement("button",{className:"add-btn",onClick:N,"aria-label":"Add routine"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),f&&l.default.createElement("div",{className:"alt-composer"},l.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),p.map((P,V)=>l.default.createElement("div",{className:"alt-composer-row",key:V},l.default.createElement("input",{type:"text",placeholder:`alternative ${V+1}, e.g. "Drawing"`,value:P,onChange:ee=>{let Y=[...p];Y[V]=ee.target.value,c(Y)},onKeyDown:ee=>ee.key==="Enter"&&N()}),l.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>c(p.filter((ee,Y)=>Y!==V)),"aria-label":"Remove alternative"},"\xD7"))),l.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>c([...p,""])},"+ another option")),l.default.createElement("div",{className:"duration-chips"},Cm.map(P=>l.default.createElement("button",{key:P,className:y===P?"active":"",onClick:()=>k(P)},bt(P))),l.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:y,onChange:P=>k(+P.target.value||5)})),o.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):o.map((P,V)=>l.default.createElement(Fm,{key:P.id,routine:P,index:V,status:P.id===i?"current":P.id===a?"next":"idle",onDelete:E,onToggleToday:_,onSave:A})),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"7-DAY COMPLETION")),l.default.createElement(Om,{routines:o}))}function jm(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(a=>a.type==="year").value,r=+t.find(a=>a.type==="month").value,o=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:o,monthLabel:i}}function Um(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function Kc(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(B(r))&&n++;return n}function Wm(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(B(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var Hm=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[B(0),B(-1),B(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[B(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[B(0)]}],Vm=[{id:1,name:"Notion Template",dueDate:B(7),tasks:[{id:he(),text:"Design layout",done:!0},{id:he(),text:"Write docs",done:!1},{id:he(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:B(7),tasks:[{id:he(),text:"Script draft",done:!1},{id:he(),text:"Record",done:!1}]}];function Jm({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:o}=jm(),i=new Set(e||[]),a=B(0),s=Array.from({length:r},(u,d)=>d+1);return l.default.createElement("div",{className:"month-grid-wrap"},l.default.createElement("span",{className:"month-grid-label"},o),l.default.createElement("div",{className:"month-grid"},s.map(u=>{let d=Um(t,n,u);return l.default.createElement("span",{key:u,className:`month-cell ${i.has(d)?"filled":""} ${d===a?"today":""}`,style:{animationDelay:`${u*6}ms`},title:d})})))}function Km({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(B(0)),{streak:i,freezeUsed:a}=mi(e.history),s=Kc(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[d,m]=(0,l.useState)(!1),[g,h]=(0,l.useState)(e.icon),[y,k]=(0,l.useState)(e.label),[v,w]=(0,l.useState)(e.weeklyGoal),p=()=>{h(e.icon),k(e.label),w(e.weeklyGoal),m(!0)},c=()=>{let f=y.trim();f&&(r(e.id,{icon:g.trim()||e.icon,label:f,weeklyGoal:Math.max(1,Math.min(7,+v||e.weeklyGoal))}),m(!1))};return d?l.default.createElement("div",{className:"vault-card"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{className:"duration-input",style:{width:44},value:g,onChange:f=>h(f.target.value),maxLength:2}),l.default.createElement("input",{className:"edit-label",style:{flex:1},value:y,onChange:f=>k(f.target.value),onKeyDown:f=>f.key==="Enter"&&c(),autoFocus:!0})),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:v,onChange:f=>w(f.target.value)}),l.default.createElement("span",{className:"edit-unit"},"x / week")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>m(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:c},"save")))):l.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${pn(e.id)}`}},l.default.createElement("div",{className:"vault-card-top"},l.default.createElement("span",{className:"vault-card-icon",style:{color:pn(e.id)}},e.icon),l.default.createElement("div",{className:"vault-card-title"},l.default.createElement("span",{className:"vault-card-label"},e.label),l.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),l.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),l.default.createElement(Jm,{history:e.history}),l.default.createElement("div",{className:"vault-card-bottom"},l.default.createElement("div",{className:"vault-card-ring-row"},l.default.createElement(hi,{pct:u,size:34,stroke:3.5,color:pn(e.id)}),l.default.createElement("span",{className:"vault-card-pct"},u,"% ",l.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&l.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,a&&l.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),l.default.createElement("button",{className:`vault-check ${o?"done":""}`,onClick:()=>t(e.id)},o?"\u2713 completed today":"mark complete today"))}function Xm({habits:e,setHabits:t}){let[n,r]=(0,l.useState)(""),[o,i]=(0,l.useState)(7),[a,s]=(0,l.useState)(!1),u=()=>{let h=n.trim();if(!h){s(!0),setTimeout(()=>s(!1),420),L.error();return}t(y=>[...y,{id:he(),icon:"\u25C6",label:h,weeklyGoal:o,history:[]}]),r(""),i(7),L.click()},d=h=>{t(y=>y.filter(k=>k.id!==h)),L.delete()},m=(h,y)=>t(k=>k.map(v=>v.id===h?{...v,...y}:v)),g=h=>{let y=B(0),k=!1;t(v=>v.map(w=>{if(w.id!==h)return w;let p=(w.history||[]).includes(y);k=!p;let c=p?w.history.filter(f=>f!==y):[...w.history||[],y];return{...w,history:c.slice(-370)}})),k?L.success():L.click()};return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"HABIT-STREAK-TRACKING")),l.default.createElement("div",{className:"vault-grid"},e.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(h=>l.default.createElement(Km,{key:h.id,habit:h,onToggleToday:g,onDelete:d,onSave:m}))),l.default.createElement("div",{className:`composer ${a?"shake":""}`},l.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:h=>r(h.target.value),onKeyDown:h=>h.key==="Enter"&&u()}),l.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),l.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(h=>l.default.createElement("button",{key:h,className:o===h?"active":"",onClick:()=>i(h)},h,"x/wk"))))}function Gm({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:o}){let[i,a]=(0,l.useState)(!1),[s,u]=(0,l.useState)(t.text),d=()=>{let m=s.trim();m&&o(e,t.id,m),a(!1)};return i?l.default.createElement("div",{className:"project-task-row"},l.default.createElement("input",{className:"project-task-edit",value:s,onChange:m=>u(m.target.value),onKeyDown:m=>m.key==="Enter"&&d(),onBlur:d,autoFocus:!0})):l.default.createElement("div",{className:"project-task-row"},l.default.createElement(Gc,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),l.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>a(!0)},t.text),l.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function qm({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:o,onEditTask:i,onSave:a}){let[s,u]=(0,l.useState)(""),d=e.tasks.length,m=e.tasks.filter(E=>E.done).length,g=d?Math.round(m/d*100):0,h=Wm(e.dueDate),[y,k]=(0,l.useState)(!1),[v,w]=(0,l.useState)(e.name),[p,c]=(0,l.useState)(e.dueDate||""),f=()=>{let E=s.trim();E&&(n(e.id,E),u(""))},x=()=>{w(e.name),c(e.dueDate||""),k(!0)},N=()=>{let E=v.trim();E&&(a(e.id,{name:E,dueDate:p||null}),k(!1))};return y?l.default.createElement("div",{className:"project-card"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("input",{className:"edit-label",value:v,onChange:E=>w(E.target.value),onKeyDown:E=>E.key==="Enter"&&N(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"date",className:"time-input",value:p,onChange:E=>c(E.target.value)})),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:N},"save")))):l.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${pn(e.id)}`}},l.default.createElement("div",{className:"project-card-top"},l.default.createElement("span",{className:"project-name"},e.name),l.default.createElement("div",{className:"project-card-actions"},l.default.createElement("button",{className:"vault-card-edit",onClick:x,"aria-label":"Edit project"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),h&&l.default.createElement("span",{className:`project-due ${h.overdue?"overdue":""}`},h.text),l.default.createElement("div",{className:"progress-track small"},l.default.createElement("div",{className:"progress-fill",style:{width:`${g}%`}})),l.default.createElement("span",{className:"vault-card-pct"},m,"/",d," tasks \xB7 ",g,"%"),l.default.createElement("div",{className:"project-tasks"},e.tasks.map(E=>l.default.createElement(Gm,{key:E.id,projectId:e.id,task:E,onToggle:r,onDelete:o,onEdit:i}))),l.default.createElement("div",{className:"project-add-task"},l.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:E=>u(E.target.value),onKeyDown:E=>E.key==="Enter"&&f()})))}function Qm({projects:e,setProjects:t}){let[n,r]=(0,l.useState)(""),[o,i]=(0,l.useState)(""),[a,s]=(0,l.useState)(!1),u=()=>{let v=n.trim();if(!v){s(!0),setTimeout(()=>s(!1),420),L.error();return}t(w=>[...w,{id:he(),name:v,dueDate:o||null,tasks:[]}]),r(""),i(""),L.click()},d=v=>{t(w=>w.filter(p=>p.id!==v)),L.delete()},m=(v,w)=>t(p=>p.map(c=>c.id===v?{...c,...w}:c)),g=(v,w)=>{t(p=>p.map(c=>c.id===v?{...c,tasks:[...c.tasks,{id:he(),text:w,done:!1}]}:c)),L.click()},h=(v,w)=>{t(p=>p.map(c=>c.id!==v?c:{...c,tasks:c.tasks.map(f=>f.id===w?{...f,done:!f.done}:f)})),L.success()},y=(v,w)=>{t(p=>p.map(c=>c.id!==v?c:{...c,tasks:c.tasks.filter(f=>f.id!==w)})),L.delete()},k=(v,w,p)=>t(c=>c.map(f=>f.id!==v?f:{...f,tasks:f.tasks.map(x=>x.id===w?{...x,text:p}:x)}));return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"PROJECT-MANAGER")),l.default.createElement("div",{className:"vault-grid"},e.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no projects yet")):e.map(v=>l.default.createElement(qm,{key:v.id,project:v,onDelete:d,onAddTask:g,onToggleTask:h,onDeleteTask:y,onEditTask:k,onSave:m}))),l.default.createElement("div",{className:`composer ${a?"shake":""}`},l.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:v=>r(v.target.value),onKeyDown:v=>v.key==="Enter"&&u()}),l.default.createElement("input",{type:"date",className:"time-input",value:o,onChange:v=>i(v.target.value)}),l.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function Ym({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return l.default.createElement("div",{className:"task-list vault-scroll"},l.default.createElement(Xm,{habits:e,setHabits:t}),l.default.createElement(Qm,{projects:n,setProjects:r}))}var Nt=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],_c=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function pn(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return _c[Math.abs(t)%_c.length]}var $r=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function Xc(e,t,n){let r=e.reduce((a,s)=>a+s.xp*(s.history?.length||0),0),o=t.reduce((a,s)=>a+s.xp*(s.history?.length||0),0),i=n.reduce((a,s)=>a+s.cost*(s.claimed?.length||0),0);return r-o-i}function Zm(e,t,n){let r=t.filter(i=>i.area===e).reduce((i,a)=>i+a.xp*(a.history?.length||0),0),o=n.filter(i=>i.area===e).reduce((i,a)=>i+a.xp*(a.history?.length||0),0);return r-o}function $a(e){return 50*e*(e-1)}function Rm(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((50+Math.sqrt(2500+200*t))/100)),r=t-$a(n),o=$a(n+1)-$a(n);return{level:n,into:r,span:o}}function e0(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[o,i]of t)for(;n>=o;)r+=i,n-=o;return r}function t0(e){if(e<=$r.length)return $r[e-1];let t=e-$r.length+1;return`${$r[$r.length-1]} ${e0(t)}`}var n0=[{id:1,label:"Deep Work",area:"work",xp:40,history:[B(0),B(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[B(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],r0=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],o0=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function i0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(B(0)),{streak:i,freezeUsed:a}=mi(e.history),s=Nt.find(c=>c.key===e.area)||Nt[0],[u,d]=(0,l.useState)(!1),[m,g]=(0,l.useState)(e.label),[h,y]=(0,l.useState)(e.area),[k,v]=(0,l.useState)(e.xp),w=()=>{g(e.label),y(e.area),v(e.xp),d(!0)},p=()=>{let c=m.trim();c&&(r(e.id,{label:c,area:h,xp:Math.max(1,+k||e.xp)}),d(!1))};return u?l.default.createElement("div",{className:"quest-habit-card good editing"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("input",{className:"edit-label",value:m,onChange:c=>g(c.target.value),onKeyDown:c=>c.key==="Enter"&&p(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},Nt.map(c=>l.default.createElement("button",{key:c.key,type:"button",className:`area-chip ${h===c.key?"active":""}`,style:{"--ac":c.color},onClick:()=>y(c.key)},c.label))),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:k,onChange:c=>v(c.target.value)}),l.default.createElement("span",{className:"edit-unit"},"XP")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:p},"save")))):l.default.createElement("div",{className:"quest-habit-card good"},l.default.createElement("span",{className:"area-dot",style:{background:s.color}}),l.default.createElement("div",{className:"quest-habit-main"},l.default.createElement("span",{className:"quest-habit-label"},e.label),l.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",s.label,i>0?` \xB7 \u{1F525}${i}${a?" \u2744\uFE0F":""}`:"")),l.default.createElement("button",{className:`quest-check ${o?"done":""}`,onClick:()=>t(e.id),"aria-label":"Mark done today"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:o?0:24,transition:"stroke-dashoffset 220ms ease"}}))),l.default.createElement("button",{className:"vault-card-edit",onClick:w,"aria-label":"Edit habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function l0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(B(0)),i=Nt.find(p=>p.key===e.area)||Nt[0],a=Kc(e.history),[s,u]=(0,l.useState)(!1),[d,m]=(0,l.useState)(e.label),[g,h]=(0,l.useState)(e.area),[y,k]=(0,l.useState)(e.xp),v=()=>{m(e.label),h(e.area),k(e.xp),u(!0)},w=()=>{let p=d.trim();p&&(r(e.id,{label:p,area:g,xp:Math.max(1,+y||e.xp)}),u(!1))};return s?l.default.createElement("div",{className:"quest-habit-card bad editing"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("input",{className:"edit-label",value:d,onChange:p=>m(p.target.value),onKeyDown:p=>p.key==="Enter"&&w(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},Nt.map(p=>l.default.createElement("button",{key:p.key,type:"button",className:`area-chip ${g===p.key?"active":""}`,style:{"--ac":p.color},onClick:()=>h(p.key)},p.label))),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:y,onChange:p=>k(p.target.value)}),l.default.createElement("span",{className:"edit-unit"},"XP")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>u(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:w},"save")))):l.default.createElement("div",{className:"quest-habit-card bad"},l.default.createElement("span",{className:"area-dot",style:{background:i.color}}),l.default.createElement("div",{className:"quest-habit-main"},l.default.createElement("span",{className:"quest-habit-label"},e.label),l.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",i.label," \xB7 ",a,"x this week")),l.default.createElement("button",{className:`quest-check bad-check ${o?"done":""}`,onClick:()=>t(e.id),"aria-label":"Log slip today"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),l.default.createElement("button",{className:"vault-card-edit",onClick:v,"aria-label":"Edit habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function a0({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:o}){let[i,a]=(0,l.useState)(!1),[s,u]=(0,l.useState)(e.label),[d,m]=(0,l.useState)(e.cost),g=()=>{u(e.label),m(e.cost),a(!0)},h=()=>{let y=s.trim();y&&(o(e.id,{label:y,cost:Math.max(1,+d||e.cost)}),a(!1))};return i?l.default.createElement("div",{className:"reward-card"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("input",{className:"edit-label",value:s,onChange:y=>u(y.target.value),onKeyDown:y=>y.key==="Enter"&&h(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:d,onChange:y=>m(y.target.value)}),l.default.createElement("span",{className:"edit-unit"},"XP cost")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>a(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:h},"save")))):l.default.createElement("div",{className:"reward-card"},l.default.createElement("div",{className:"reward-top"},l.default.createElement("span",{className:"reward-label"},e.label),l.default.createElement("div",{className:"project-card-actions"},l.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit reward"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),l.default.createElement("span",{className:"reward-cost"},e.cost," XP"),l.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&l.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function s0({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:o,setRewards:i}){let a=(0,l.useMemo)(()=>Xc(e,n,o),[e,n,o]),{level:s,into:u,span:d}=Rm(a),m=Math.round(u/d*100),g=C=>{let j=B(0),Z=!1;t(G=>G.map(de=>{if(de.id!==C)return de;let De=(de.history||[]).includes(j);Z=!De;let mn=De?de.history.filter(hn=>hn!==j):[...de.history||[],j];return{...de,history:mn.slice(-370)}})),Z?L.success():L.click()},h=C=>{let j=B(0),Z=!1;r(G=>G.map(de=>{if(de.id!==C)return de;let De=(de.history||[]).includes(j);Z=!De;let mn=De?de.history.filter(hn=>hn!==j):[...de.history||[],j];return{...de,history:mn.slice(-370)}})),Z?L.error():L.click()},y=C=>{t(j=>j.filter(Z=>Z.id!==C)),L.delete()},k=C=>{r(j=>j.filter(Z=>Z.id!==C)),L.delete()},v=(C,j)=>t(Z=>Z.map(G=>G.id===C?{...G,...j}:G)),w=(C,j)=>r(Z=>Z.map(G=>G.id===C?{...G,...j}:G)),p=C=>{let j=B(0);i(Z=>Z.map(G=>G.id===C?{...G,claimed:[...G.claimed||[],j]}:G)),L.success()},c=C=>{i(j=>j.filter(Z=>Z.id!==C)),L.delete()},f=(C,j)=>i(Z=>Z.map(G=>G.id===C?{...G,...j}:G)),[x,N]=(0,l.useState)(""),[E,_]=(0,l.useState)("work"),[A,I]=(0,l.useState)(20),[S,D]=(0,l.useState)(""),[T,F]=(0,l.useState)("work"),[le,P]=(0,l.useState)(20),[V,ee]=(0,l.useState)(""),[Y,W]=(0,l.useState)(100),J=()=>{let C=x.trim();C&&(t(j=>[...j,{id:he(),label:C,area:E,xp:+A||10,history:[]}]),N(""),L.click())},Me=()=>{let C=S.trim();C&&(r(j=>[...j,{id:he(),label:C,area:T,xp:+le||10,history:[]}]),D(""),L.click())},Qe=()=>{let C=V.trim();C&&(i(j=>[...j,{id:he(),label:C,cost:+Y||50,claimed:[]}]),ee(""),L.click())},gi=Nt.map(C=>({key:C.key,label:C.label,color:C.color,value:Math.max(0,Zm(C.key,e,n))})),Kt=e.reduce((C,j)=>C+j.xp*(j.history?.length||0),0),fn=n.reduce((C,j)=>C+j.xp*(j.history?.length||0),0);return l.default.createElement("div",{className:"task-list vault-scroll"},l.default.createElement("div",{className:"hero-card hero-card-viz"},l.default.createElement("div",{className:"hero-viz-row"},l.default.createElement(hi,{pct:m,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${s}`,sublabel:t0(s)}),l.default.createElement("div",{className:"hero-viz-stats"},l.default.createElement("span",{className:"hero-xp-total"},l.default.createElement(it,{value:a})," ",l.default.createElement("small",null,"XP")),l.default.createElement("span",{className:"hero-xp-sub"},u,"/",d," to next level"),l.default.createElement("div",{className:"hero-xp-split"},l.default.createElement("span",{className:"hero-xp-earned"},"+",l.default.createElement(it,{value:Kt})),l.default.createElement("span",{className:"hero-xp-lost"},"\u2212",l.default.createElement(it,{value:fn})))))),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"LIFE-AREAS")),l.default.createElement("div",{className:"radar-card"},l.default.createElement(zm,{axes:gi,size:230})),(Kt>0||fn>0)&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"XP SOURCE")),l.default.createElement("div",{className:"donut-card"},l.default.createElement(Jc,{size:120,stroke:16,centerLabel:a,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:Kt,color:"#5EEAD4"},{key:"lost",label:"Lost",value:fn,color:"#F0576B"}]}),l.default.createElement("div",{className:"donut-legend"},l.default.createElement("div",{className:"donut-legend-row"},l.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),l.default.createElement("span",null,"Earned from good habits"),l.default.createElement("span",{className:"donut-legend-val"},l.default.createElement(it,{value:Kt}))),l.default.createElement("div",{className:"donut-legend-row"},l.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),l.default.createElement("span",null,"Lost to bad habits"),l.default.createElement("span",{className:"donut-legend-val"},l.default.createElement(it,{value:fn})))))),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"GOOD-HABITS")),l.default.createElement("div",{className:"quest-habit-list"},e.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no good habits yet")):e.map(C=>l.default.createElement(i0,{key:C.id,habit:C,onToggleToday:g,onDelete:y,onSave:v}))),l.default.createElement("div",{className:"composer"},l.default.createElement("input",{type:"text",placeholder:"new good habit...",value:x,onChange:C=>N(C.target.value),onKeyDown:C=>C.key==="Enter"&&J()}),l.default.createElement("button",{className:"add-btn",onClick:J,"aria-label":"Add good habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),l.default.createElement("div",{className:"duration-chips"},Nt.map(C=>l.default.createElement("button",{key:C.key,className:E===C.key?"active":"",onClick:()=>_(C.key)},C.label)),l.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:A,onChange:C=>I(+C.target.value||5)})),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"BAD-HABITS")),l.default.createElement("div",{className:"quest-habit-list"},n.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no bad habits tracked")):n.map(C=>l.default.createElement(l0,{key:C.id,habit:C,onToggleToday:h,onDelete:k,onSave:w}))),l.default.createElement("div",{className:"composer"},l.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:S,onChange:C=>D(C.target.value),onKeyDown:C=>C.key==="Enter"&&Me()}),l.default.createElement("button",{className:"add-btn",onClick:Me,"aria-label":"Add bad habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),l.default.createElement("div",{className:"duration-chips"},Nt.map(C=>l.default.createElement("button",{key:C.key,className:T===C.key?"active":"",onClick:()=>F(C.key)},C.label)),l.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:le,onChange:C=>P(+C.target.value||5)})),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"REWARD-CENTER")),l.default.createElement("div",{className:"vault-grid"},o.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no rewards set up")):o.map(C=>l.default.createElement(a0,{key:C.id,reward:C,canClaim:a>=C.cost,onClaim:p,onDelete:c,onSave:f}))),l.default.createElement("div",{className:"composer"},l.default.createElement("input",{type:"text",placeholder:"new reward...",value:V,onChange:C=>ee(C.target.value),onKeyDown:C=>C.key==="Enter"&&Qe()}),l.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:Y,onChange:C=>W(+C.target.value||50)}),l.default.createElement("button",{className:"add-btn",onClick:Qe,"aria-label":"Add reward"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var u0=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function d0(e=1e3*30){let[t,n]=(0,l.useState)(Date.now());return(0,l.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function c0(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let o=Math.floor(r/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function Gc({checked:e,onChange:t,color:n}){return l.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function p0({task:e,now:t,onToggle:n,onDelete:r,index:o}){let[i,a]=(0,l.useState)(!1),s=pi.find(d=>d.key===e.priority)||pi[0],u=()=>{a(!0),setTimeout(()=>r(e.id),220)};return l.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${o*35}ms`}},l.default.createElement(Gc,{checked:e.done,onChange:()=>n(e.id),color:s.color}),l.default.createElement("div",{className:"task-main"},l.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),l.default.createElement("span",{className:"task-meta"},l.default.createElement("span",{className:"prio-dot",style:{background:s.color}}),l.default.createElement("span",{className:"prio-label"},s.label),l.default.createElement("span",{className:"dot-sep"},"\xB7"),l.default.createElement("span",null,c0(e.createdAt,t)))),l.default.createElement("button",{className:"del-btn",onClick:u,"aria-label":"Delete task"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var zc="tasksh.tasks.v1",Tc="tasksh.routines.v1",Pc="tasksh.vaulthabits.v1",Bc="tasksh.projects.v1",Lc="tasksh.goodhabits.v1",Ic="tasksh.badhabits.v1",Fc="tasksh.rewards.v1",Oc="tasksh.deviceid.v1",ja="tasksh.notifyenabled.v1",Ua="tasksh.aikey.v1",jr="https://tasksh-notify.techcraftor.workers.dev",f0="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function m0(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;i++)o[i]=r.charCodeAt(i);return o}function Va(){let e=localStorage.getItem(Oc);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Oc,e)),e}async function h0(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:m0(f0)}));let r=Va();if(!(await fetch(`${jr}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function g0(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=Va();try{await fetch(`${jr}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function $c(e){let t=Va();try{await fetch(`${jr}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}function v0(){try{return localStorage.getItem(Ua)||""}catch{return""}}function qc(e){try{e?localStorage.setItem(Ua,e):localStorage.removeItem(Ua)}catch{}}function y0(e){return e?e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`:""}var fi=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function x0(e){let t=await fetch(`${jr}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function k0(e,t,n){let r=await fetch(`${jr}/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e,data:t,apiKey:n})}),o=null;try{o=await r.json()}catch{}if(!r.ok){let i=o&&o.error;throw i==="no_key"||i==="bad_key"?new fi(o&&o.message||"Your API key was rejected."):new Error(o&&o.error||`AI request failed (${r.status}).`)}return{reply:o.reply||"",actions:o.actions||[]}}function jc(e,t){let n=(r,o)=>(r||[]).find(i=>i.id===o);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${lt(We(e.time))} \xB7 ${e.label} (${bt(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),o=[];return e.time!==void 0&&e.time!==r?.time&&o.push(`${lt(We(r?.time||"00:00"))} \u2192 ${lt(We(e.time))}`),e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&o.push(`${bt(r?.duration||0)} \u2192 ${bt(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${o.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),o=[];return e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&o.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${o.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function w0(e,t,n){let{routines:r,vaultHabits:o,goodHabits:i,badHabits:a,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let d of e)switch(d.op){case"add_routine":r=[...r,{id:he(),time:d.time,label:d.label,duration:d.duration,history:[],...d.alternatives?.length?{alternatives:d.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(m=>m.id===d.id?{...m,...d.time!==void 0?{time:d.time}:{},...d.label!==void 0?{label:d.label}:{},...d.duration!==void 0?{duration:d.duration}:{}}:m),u.add("routines");break;case"delete_routine":r=r.filter(m=>m.id!==d.id),u.add("routines");break;case"add_vault_habit":o=[...o,{id:he(),icon:d.icon,label:d.label,weeklyGoal:d.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":o=o.map(m=>m.id===d.id?{...m,...d.label!==void 0?{label:d.label}:{},...d.weeklyGoal!==void 0?{weeklyGoal:d.weeklyGoal}:{}}:m),u.add("vaultHabits");break;case"delete_vault_habit":o=o.filter(m=>m.id!==d.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:he(),label:d.label,area:d.area,xp:d.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(m=>m.id!==d.id),u.add("goodHabits");break;case"add_bad_habit":a=[...a,{id:he(),label:d.label,area:d.area,xp:d.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":a=a.filter(m=>m.id!==d.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:he(),label:d.label,cost:d.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(m=>m.id!==d.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(o),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(a),u.has("rewards")&&n.setRewards(s)}var E0=["build me a study preset for exam month","my evenings are too packed \u2014 spread them out","add a gym routine at 6am for an hour","what am I neglecting?"];function Uc({onSaved:e,initialError:t,onCancel:n}){let[r,o]=(0,l.useState)(""),[i,a]=(0,l.useState)(!1),[s,u]=(0,l.useState)(t||null),d=(0,l.useRef)(null);(0,l.useEffect)(()=>{d.current?.focus()},[]);let m=async()=>{let g=r.trim();if(!(!g||i)){a(!0),u(null);try{let h=await x0(g);qc(g),L.success(),e(g,h)}catch(h){u(h.message||"Couldn't verify that key."),L.error()}finally{a(!1)}}};return l.default.createElement("div",{className:"task-list ai-scroll"},l.default.createElement("div",{className:"ai-gate"},l.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),l.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),l.default.createElement("div",{className:"ai-gate-sub"},"the assistant runs on Google's Gemini. it's free \u2014 you just need your own key. takes about a minute."),l.default.createElement("ol",{className:"ai-gate-steps"},l.default.createElement("li",null,"open"," ",l.default.createElement("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noopener noreferrer"},"aistudio.google.com/apikey")),l.default.createElement("li",null,"sign in and hit \u201Ccreate API key\u201D"),l.default.createElement("li",null,"copy it and paste it below")),l.default.createElement("input",{ref:d,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026",value:r,onChange:g=>o(g.target.value),onKeyDown:g=>{g.key==="Enter"&&m()},disabled:i}),s&&l.default.createElement("div",{className:"ai-error ai-gate-error"},s),l.default.createElement("div",{className:"ai-gate-actions"},l.default.createElement("button",{className:"ai-apply",onClick:m,disabled:i||!r.trim()},i?"checking\u2026":"save key"),n&&l.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),l.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function b0({state:e,setters:t,showDataMsg:n}){let[r,o]=(0,l.useState)(()=>v0()),[i,a]=(0,l.useState)(!1),[s,u]=(0,l.useState)(null),[d,m]=(0,l.useState)(""),[g,h]=(0,l.useState)(!1),[y,k]=(0,l.useState)(null),[v,w]=(0,l.useState)(null),[p,c]=(0,l.useState)(()=>new Set),f=(0,l.useRef)(null),x=async S=>{let D=(S??d).trim();if(!(!D||g)){h(!0),k(null),w(null),c(new Set),L.click();try{let T=await k0(D,{routines:e.routines,vaultHabits:e.vaultHabits,goodHabits:e.goodHabits,badHabits:e.badHabits,rewards:e.rewards,totalXP:e.totalXP},r);w(T),T.actions.length&&L.success()}catch(T){T instanceof fi?(qc(""),o(""),u(T.message)):k(T.message||"Something went wrong."),L.error()}finally{h(!1)}}},N=S=>{c(D=>{let T=new Set(D);return T.has(S)?T.delete(S):T.add(S),T})},E=v?v.actions.filter((S,D)=>!p.has(D)):[],_=()=>{E.length&&(w0(E,e,t),L.success(),n("success",`Applied ${E.length} change${E.length===1?"":"s"}`),w(null),m(""),c(new Set))},A=()=>{L.whoosh(),w(null),c(new Set)},I=E.reduce((S,D)=>{let T=jc(D,e).kind;return S[T]=(S[T]||0)+1,S},{});return r?i?l.default.createElement(Uc,{onCancel:()=>a(!1),onSaved:(S,D)=>{o(S),a(!1),n("success",D||"AI key updated")}}):l.default.createElement("div",{className:"task-list ai-scroll"},l.default.createElement("div",{className:"ai-intro"},l.default.createElement("div",{className:"ai-intro-row"},l.default.createElement("div",{className:"ai-intro-title"},"ask anything"),l.default.createElement("button",{className:"ai-key-btn",onClick:()=>a(!0),title:`Key ${y0(r)} \u2014 tap to change`},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},l.default.createElement("circle",{cx:"8",cy:"15",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),l.default.createElement("path",{d:"M10.85 12.15L19 4M17 6l2 2M14 9l2 2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),l.default.createElement("span",null,"key"))),l.default.createElement("div",{className:"ai-intro-sub"},"it can add, edit or remove routines, vault habits, quests and rewards \u2014 nothing changes until you approve it.")),l.default.createElement("div",{className:"ai-composer"},l.default.createElement("textarea",{ref:f,className:"ai-input",rows:3,placeholder:"e.g. add a 30 min reading routine before bed",value:d,onChange:S=>m(S.target.value),onKeyDown:S=>{S.key==="Enter"&&(S.metaKey||S.ctrlKey)&&(S.preventDefault(),x())},disabled:g}),l.default.createElement("button",{className:"ai-send",onClick:()=>x(),disabled:g||!d.trim()},g?"thinking\u2026":"ask")),!v&&!g&&l.default.createElement("div",{className:"ai-chips"},E0.map(S=>l.default.createElement("button",{key:S,className:"ai-chip",onClick:()=>{m(S),x(S)}},S))),g&&l.default.createElement("div",{className:"ai-thinking"},l.default.createElement("span",{className:"ai-dot"}),l.default.createElement("span",{className:"ai-dot"}),l.default.createElement("span",{className:"ai-dot"})),y&&l.default.createElement("div",{className:"ai-error"},y),v&&l.default.createElement("div",{className:"ai-result"},v.reply&&l.default.createElement("div",{className:"ai-reply"},v.reply),v.actions.length===0?l.default.createElement("div",{className:"ai-noop"},"no changes proposed"):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"ai-diff-head"},l.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),l.default.createElement("span",{className:"ai-diff-counts"},I.add?l.default.createElement("span",{className:"c-add"},"+",I.add):null,I.edit?l.default.createElement("span",{className:"c-edit"},"~",I.edit):null,I.remove?l.default.createElement("span",{className:"c-remove"},"\u2212",I.remove):null)),l.default.createElement("div",{className:"ai-diff"},v.actions.map((S,D)=>{let T=jc(S,e),F=p.has(D);return l.default.createElement("button",{key:D,className:`ai-diff-row ${T.kind} ${F?"skipped":""}`,onClick:()=>N(D),title:F?"click to include":"click to skip"},l.default.createElement("span",{className:"ai-sign"},T.kind==="add"?"+":T.kind==="remove"?"\u2212":"~"),l.default.createElement("span",{className:"ai-surface"},T.surface),l.default.createElement("span",{className:"ai-diff-text"},T.text),l.default.createElement("span",{className:"ai-skip-mark"},F?"skipped":""))})),l.default.createElement("div",{className:"ai-actions"},l.default.createElement("button",{className:"ai-apply",onClick:_,disabled:!E.length},"apply ",E.length||""),l.default.createElement("button",{className:"ai-discard",onClick:A},"discard")),l.default.createElement("div",{className:"ai-hint"},"tap any row to skip it")))):l.default.createElement(Uc,{initialError:s,onSaved:(S,D)=>{o(S),u(null),n("success",D||"AI key saved")}})}function dn(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function N0(e){typeof e=="number"&&Number.isFinite(e)&&e>ci&&(ci=e)}function S0(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(o=>n(o?.id))}),t}function C0({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:o,goodHabits:i,rewards:a,setRewards:s,totalXP:u,setTab:d}){let m=Wa(),g=m.hour*60+m.minute,{sorted:h,currentId:y,nextId:k}=Ha(e,g),v=h.find(D=>D.id===y),w=h.find(D=>D.id===k),p=B(0),c=D=>{let T=!1;t(F=>F.map(le=>{if(le.id!==D)return le;let P=(le.history||[]).includes(p);T=!P;let V=P?le.history.filter(ee=>ee!==p):[...le.history||[],p];return{...le,history:V.slice(-60)}})),T?L.success():L.click()},f=(0,l.useMemo)(()=>{let D={high:0,mid:1,low:2};return[...n].filter(T=>!T.done).sort((T,F)=>D[T.priority]-D[F.priority])},[n]),x=D=>{r(T=>T.map(F=>F.id===D?{...F,done:!F.done}:F)),L.success()},N=(0,l.useMemo)(()=>a.filter(D=>u>=D.cost),[a,u]),E=D=>{s(T=>T.map(F=>F.id===D?{...F,claimed:[...F.claimed||[],p]}:F)),L.success()},_=(0,l.useMemo)(()=>{let D={},T=F=>{(F||[]).forEach(le=>{D[le]=(D[le]||0)+1})};return e.forEach(F=>T(F.history)),o.forEach(F=>T(F.history)),i.forEach(F=>T(F.history)),D},[e,o,i]),A=v||w,I=!!v,S=A?(A.history||[]).includes(p):!1;return l.default.createElement("div",{className:"task-list today-view"},l.default.createElement("div",{className:"filters today-section-header"},l.default.createElement("span",null,I?"HAPPENING NOW":"NEXT UP")),A?l.default.createElement("div",{className:"today-card"},l.default.createElement("div",{className:"today-card-row"},l.default.createElement("span",{className:"today-card-time"},lt(We(A.time))),l.default.createElement("span",{className:"today-card-label"},A.label)),l.default.createElement("div",{className:"today-card-sub"},I?`in progress \xB7 ${bt(A.duration)}`:`in ${Math.max(0,We(A.time)-g)}m \xB7 ${bt(A.duration)}`),l.default.createElement("button",{className:`today-mark-btn ${S?"done":""}`,onClick:()=>c(A.id)},S?"\u2713 completed today":"mark complete")):l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no routines set up yet")),l.default.createElement("div",{className:"filters today-section-header"},l.default.createElement("span",null,"ACTIVITY")),l.default.createElement(Tm,{counts:_,weeksBack:12}),l.default.createElement("div",{className:"filters today-section-header"},l.default.createElement("span",null,"OPEN TASKS"),f.length>0&&l.default.createElement("button",{className:"today-view-all",onClick:()=>d("tasks")},"view all in tasks \u2192")),f.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):l.default.createElement("div",{className:"today-list"},f.slice(0,5).map((D,T)=>l.default.createElement("div",{key:D.id,className:"today-task-row",style:{animationDelay:`${T*35}ms`}},l.default.createElement("button",{className:"today-task-check",onClick:()=>x(D.id),"aria-label":"Complete task"}),l.default.createElement("span",{className:"today-task-text"},D.text),l.default.createElement("span",{className:`today-prio-dot ${D.priority}`}))),f.length>5&&l.default.createElement("button",{className:"today-more",onClick:()=>d("tasks")},"+",f.length-5," more")),l.default.createElement("div",{className:"filters today-section-header"},l.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),l.default.createElement("span",{className:"today-xp-total"},l.default.createElement(it,{value:u})," XP")),N.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):l.default.createElement("div",{className:"today-list"},N.map((D,T)=>l.default.createElement("div",{key:D.id,className:"today-task-row",style:{animationDelay:`${T*35}ms`}},l.default.createElement("span",{className:"today-task-text"},D.label),l.default.createElement("span",{className:"today-reward-cost"},D.cost," XP"),l.default.createElement("button",{className:"today-claim-btn",onClick:()=>E(D.id)},"claim")))))}function A0(){let[e,t]=(0,l.useState)("today"),[n,r]=Dm(),o=M=>{M!==e&&L.whoosh(),t(M)},[i,a]=(0,l.useState)(()=>dn(zc,u0)),[s,u]=(0,l.useState)(()=>dn(Tc,Lm)),[d,m]=(0,l.useState)(()=>dn(Pc,Hm)),[g,h]=(0,l.useState)(()=>dn(Bc,Vm)),[y,k]=(0,l.useState)(()=>dn(Lc,n0)),[v,w]=(0,l.useState)(()=>dn(Ic,r0)),[p,c]=(0,l.useState)(()=>dn(Fc,o0)),f=(0,l.useMemo)(()=>Xc(y,v,p),[y,v,p]),[x,N]=(0,l.useState)(""),[E,_]=(0,l.useState)("mid"),[A,I]=(0,l.useState)("all"),S=(0,l.useRef)(null),D=(0,l.useRef)(null),[T,F]=(0,l.useState)(null),le=d0(),[P,V]=(0,l.useState)(()=>localStorage.getItem(ja)==="1"),[ee,Y]=(0,l.useState)(!1);(0,l.useEffect)(()=>{P&&$c(s)},[s,P]);let W=async()=>{if(!ee){Y(!0);try{P?(await g0(),localStorage.setItem(ja,"0"),V(!1),J("success","Notifications turned off")):(await h0(),await $c(s),localStorage.setItem(ja,"1"),V(!0),J("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(M){J("error",M.message||"Couldn't set up notifications")}finally{Y(!1)}}},J=(M,O)=>{F({type:M,text:O})};(0,l.useEffect)(()=>{if(!T)return;let M=setTimeout(()=>F(null),3200);return()=>clearTimeout(M)},[T]);let Me=()=>{try{let M={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:d,projects:g,goodHabits:y,badHabits:v,rewards:p}},O=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),ce=URL.createObjectURL(O),pe=B(0),Le=document.createElement("a");Le.href=ce,Le.download=`tasks-sh-backup-${pe}.json`,document.body.appendChild(Le),Le.click(),Le.remove(),URL.revokeObjectURL(ce),J("ok","backup exported")}catch{J("err","export failed")}},Qe=()=>D.current?.click(),gi=M=>{let O=M.target.files&&M.target.files[0];if(M.target.value="",!O)return;let ce=new FileReader;ce.onerror=()=>J("err","couldn't read that file"),ce.onload=()=>{try{let pe=JSON.parse(String(ce.result)),Le=pe&&typeof pe=="object"&&pe.data?pe.data:pe;if(!Le||typeof Le!="object")throw new Error("bad shape");let Ka={tasks:a,routines:u,vaultHabits:m,projects:h,goodHabits:k,badHabits:w,rewards:c},Ur=0;for(let vi of Object.keys(Ka))Array.isArray(Le[vi])&&(Ka[vi](Le[vi]),Ur++);if(Ur===0){J("err","no recognizable data in that file");return}N0(S0(Le)),J("ok",`imported ${Ur} data set${Ur===1?"":"s"}`)}catch{J("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},ce.readAsText(O)},Kt=Wa(),fn=Kt.hour*60+Kt.minute,{currentId:C,sorted:j}=Ha(s,fn),[Z,G]=(0,l.useState)(null),de=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{if(de.current===void 0){de.current=C;return}if(C!==de.current){let M=j.find(O=>O.id===C);M&&G({id:C,label:M.label,time:M.time}),de.current=C}},[C,j]),(0,l.useEffect)(()=>{if(!Z)return;let M=setTimeout(()=>G(null),6e3);return()=>clearTimeout(M)},[Z]),(0,l.useEffect)(()=>{try{localStorage.setItem(zc,JSON.stringify(i))}catch{}},[i]),(0,l.useEffect)(()=>{try{localStorage.setItem(Tc,JSON.stringify(s))}catch{}},[s]),(0,l.useEffect)(()=>{try{localStorage.setItem(Pc,JSON.stringify(d))}catch{}},[d]),(0,l.useEffect)(()=>{try{localStorage.setItem(Bc,JSON.stringify(g))}catch{}},[g]),(0,l.useEffect)(()=>{try{localStorage.setItem(Lc,JSON.stringify(y))}catch{}},[y]),(0,l.useEffect)(()=>{try{localStorage.setItem(Ic,JSON.stringify(v))}catch{}},[v]),(0,l.useEffect)(()=>{try{localStorage.setItem(Fc,JSON.stringify(p))}catch{}},[p]);let De=(0,l.useMemo)(()=>{let M=i.length,O=i.filter(Le=>Le.done).length,ce=M-O,pe=M===0?0:Math.round(O/M*100);return{total:M,done:O,pending:ce,pct:pe}},[i]),mn=(0,l.useMemo)(()=>{let M=i.filter(O=>!O.done);return pi.map(O=>({key:O.key,label:O.label,color:O.color,value:M.filter(ce=>ce.priority===O.key).length}))},[i]),hn=(0,l.useMemo)(()=>{let M=i;return A==="active"&&(M=M.filter(O=>!O.done)),A==="done"&&(M=M.filter(O=>O.done)),[...M].sort((O,ce)=>{if(O.done!==ce.done)return O.done?1:-1;let pe={high:0,mid:1,low:2};return pe[O.priority]-pe[ce.priority]})},[i,A]),Ja=()=>{let M=x.trim();M&&(a(O=>[...O,{id:he(),text:M,done:!1,priority:E,createdAt:Date.now()}]),N(""),S.current?.focus(),L.click())},Qc=M=>{let O=!1;a(ce=>ce.map(pe=>pe.id!==M?pe:(O=!pe.done,{...pe,done:!pe.done}))),O?L.success():L.click()},Yc=M=>{a(O=>O.filter(ce=>ce.id!==M)),L.delete()},Zc=()=>{a(M=>M.filter(O=>!O.done)),L.whoosh()};return l.default.createElement("div",{className:"app-root"},l.default.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        html, body, #root { height: 100%; }

        .app-root {
          height: 100vh;
          height: 100dvh;
          width: 100vw;
          background:
            radial-gradient(circle at 15% 0%, rgba(94,234,212,0.06), transparent 45%),
            radial-gradient(circle at 85% 100%, rgba(245,166,35,0.05), transparent 45%),
            #0B0D10;
          font-family: 'Inter', sans-serif;
          color: #E7EAEE;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vh 4vw;
          overflow: hidden;
        }

        .panel {
          position: relative;
          width: 100%;
          max-width: 640px;
          height: 100%;
          max-height: 780px;
          background: #14171C;
          border: 1px solid #23272E;
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
          border-bottom: 1px solid #1E2228;
        }

        .titlebar-left { display: flex; align-items: center; gap: 8px; }

        .dots { display: flex; gap: 6px; }
        .dot { width: 9px; height: 9px; border-radius: 50%; }
        .dot.red { background: #F0576B; }
        .dot.amber { background: #F5A623; }
        .dot.green { background: #5EEAD4; }

        .titlebar-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: #6B7280;
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
          border: 1px solid #23272E;
          border-radius: 6px;
          background: #14171C;
          color: #6B7280;
          cursor: pointer;
          transition: color 140ms ease, border-color 140ms ease;
        }

        .titlebar-icon-btn:hover { color: #5EEAD4; border-color: #5EEAD4; }
        .titlebar-icon-btn.notify-on { color: #5EEAD4; border-color: #5EEAD4; background: rgba(94,234,212,0.08); }
        .titlebar-icon-btn:disabled { opacity: 0.5; cursor: default; }

        .data-toast {
          margin: 10px 18px 0;
          padding: 8px 12px;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          text-align: center;
          border: 1px solid #23272E;
          background: #14171C;
          color: #E7EAEE;
          animation: rowIn 200ms ease backwards;
        }

        .data-toast.ok { border-color: #5EEAD4; color: #5EEAD4; }
        .data-toast.err { border-color: #F0576B; color: #F0576B; }

        .tabs {
          display: flex;
          flex-shrink: 0;
          min-height: 42px;
          gap: 2px;
          padding: 10px 14px 0;
          border-bottom: 1px solid #1E2228;
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

        .tabs button.active { color: #E7EAEE; }

        .tabs button.active::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: -1px;
          height: 2px;
          background: #5EEAD4;
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
          background: linear-gradient(160deg, #171B21, #14171C);
          border: 1px solid #23272E;
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
          color: #E7EAEE;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.01em;
        }

        .hero-sec { font-size: 16px; color: #5EEAD4; }
        .hero-ampm {
          font-size: 13px;
          color: #6B7280;
          margin-left: 6px;
        }

        .hero-tz {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #5EEAD4;
          letter-spacing: 0.06em;
          background: rgba(94,234,212,0.08);
          border: 1px solid rgba(94,234,212,0.25);
          border-radius: 5px;
          padding: 4px 7px;
        }

        .hero-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #6B7280;
          margin-top: 2px;
        }

        .hero-divider {
          height: 1px;
          background: #1E2228;
          margin: 12px 0;
        }

        .hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
          letter-spacing: 0.08em;
        }

        .hero-current-name {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 17px;
          font-weight: 600;
          color: #E7EAEE;
          margin-top: 5px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #5EEAD4;
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
          color: #6B7280;
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
          border: 1px solid #23272E;
          border-radius: 8px;
          padding: 9px 10px;
          color: #E7EAEE;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          outline: none;
          color-scheme: dark;
          flex-shrink: 0;
          width: 110px;
          transition: border-color 160ms ease;
        }

        .time-input:focus { border-color: #5EEAD4; }

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
          background: #F0576B;
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
          background: #14171C;
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
          background: #F5A623;
          border-color: #F5A623;
          box-shadow: 0 0 8px rgba(245,166,35,0.6);
        }

        .routine-connector {
          width: 1.5px;
          flex: 1;
          background: #1E2228;
          margin-top: 2px;
        }

        .routine-row.current .routine-node {
          background: #5EEAD4;
          border-color: #5EEAD4;
          box-shadow: 0 0 10px rgba(94,234,212,0.7);
        }

        .routine-row.next .routine-node {
          border-color: #F5A623;
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
          color: #6B7280;
        }

        .live-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.06em;
          color: #0B0D10;
          background: #5EEAD4;
          padding: 1.5px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .streak-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #F5A623;
        }

        .freeze-tag {
          margin-left: 2px;
          font-size: 10px;
        }

        .routine-label {
          display: block;
          font-size: 13.5px;
          color: #E7EAEE;
          margin-top: 3px;
        }

        .routine-row.idle .routine-label,
        .routine-row.idle .routine-time { color: #4B5563; }

        .routine-alts {
          display: block;
          font-size: 11px;
          color: #6B7280;
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

        .week-dots {
          display: flex;
          gap: 3px;
          margin-top: 6px;
        }

        .week-dot {
          width: 6px;
          height: 6px;
          border-radius: 2px;
          background: #1E2228;
        }

        .week-dot.filled { background: #F5A623; }

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
          background: #F5A623;
          border-color: #F5A623;
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
          border: 1px solid #23272E;
          border-radius: 7px;
          padding: 8px 10px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          outline: none;
        }

        .edit-label:focus { border-color: #5EEAD4; }

        .edit-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .duration-input {
          width: 64px;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 7px;
          padding: 8px 8px;
          color: #E7EAEE;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          outline: none;
        }

        .edit-unit {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
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
          color: #6B7280;
        }

        .edit-save {
          background: #5EEAD4;
          color: #0B0D10;
          font-weight: 700;
        }

        /* quest stats + weekly chart */
        .quest-stats {
          display: flex;
          align-items: center;
          gap: 0;
          margin: 0 18px 14px;
          padding: 14px 16px;
          background: #14171C;
          border: 1px solid #23272E;
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
          background: #1E2228;
        }

        .quest-stat-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 17px;
          font-weight: 700;
          color: #E7EAEE;
        }

        .quest-stat-value.amber { color: #F5A623; }

        .quest-stat-of {
          font-size: 12px;
          color: #4B5563;
          font-weight: 500;
        }

        .quest-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #6B7280;
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
          color: #5EEAD4;
        }

        .week-chart {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          margin: 0 18px 16px;
          padding: 12px 14px 8px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          height: 84px;
        }

        .week-bar-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          gap: 5px;
        }

        .week-bar-track {
          flex: 1;
          width: 100%;
          display: flex;
          align-items: flex-end;
          background: #1E2228;
          border-radius: 3px;
          overflow: hidden;
        }

        .week-bar-fill {
          width: 100%;
          background: linear-gradient(180deg, #5EEAD4, #3FBFA8);
          border-radius: 3px;
          transition: height 400ms cubic-bezier(.65,0,.35,1);
        }

        .week-bar-fill.today {
          background: linear-gradient(180deg, #F5A623, #D98A15);
        }

        .week-bar-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #4B5563;
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
          color: #E7EAEE;
          font-variant-numeric: tabular-nums;
        }

        .hero-xp-total small { font-size: 12px; color: #6B7280; font-weight: 500; }

        .hero-xp-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #6B7280;
        }

        .hero-xp-split { display: flex; gap: 12px; margin-top: 6px; }

        .hero-xp-earned, .hero-xp-lost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .hero-xp-earned { color: #5EEAD4; background: rgba(94,234,212,0.08); }
        .hero-xp-lost { color: #F0576B; background: rgba(240,87,107,0.08); }

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
          color: #E7EAEE;
        }

        .radial-progress-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: #6B7280;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ---- radar chart ---- */
        .radar-card {
          margin: 0 18px 16px;
          padding: 10px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          animation: rowIn 260ms ease backwards;
        }

        .radar-ring { fill: none; stroke: #23272E; stroke-width: 1; }
        .radar-spoke { stroke: #1E2228; stroke-width: 1; }
        .radar-fill { fill: rgba(94,234,212,0.16); stroke: #5EEAD4; stroke-width: 1.5; }
        .radar-label {
          fill: #9CA3AF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
        }

        /* ---- donut chart ---- */
        .donut-card {
          margin: 0 18px 16px;
          padding: 14px;
          background: #14171C;
          border: 1px solid #23272E;
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
          color: #E7EAEE;
        }

        .donut-center-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          color: #6B7280;
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
          color: #E7EAEE;
        }

        /* ---- calendar heatmap ---- */
        .heatmap-wrap {
          margin: 0 18px 16px;
          padding: 14px;
          background: #14171C;
          border: 1px solid #23272E;
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

        .heatmap-cell.today { box-shadow: 0 0 0 1.5px #5EEAD4; }

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
          color: #6B7280;
        }

        .heatmap-legend-cell { width: 9px; height: 9px; border-radius: 2px; }

        /* ---- day timeline ---- */
        .timeline-wrap {
          margin: 0 18px 16px;
          padding: 20px 10px 14px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          animation: rowIn 220ms ease backwards;
        }

        .timeline-track {
          position: relative;
          min-height: 46px;
          background: #191D23;
          border-radius: 8px;
          overflow: hidden;
          transition: height 220ms ease;
        }

        .timeline-night {
          position: absolute;
          top: 0;
          bottom: 0;
          background: rgba(0,0,0,0.28);
        }

        .timeline-gridline {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.05);
        }

        .timeline-elapsed {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          background: rgba(94,234,212,0.05);
          transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .timeline-hours {
          position: relative;
          height: 14px;
          margin-bottom: 4px;
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

        .timeline-hour:first-child { transform: translateX(0); }
        .timeline-hour:last-child { transform: translateX(-100%); }

        .timeline-block {
          position: absolute;
          border-radius: 5px;
          transition: width 500ms cubic-bezier(0.22, 1, 0.36, 1), top 220ms ease;
          min-width: 3px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .timeline-block-label {
          padding: 0 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 600;
          color: #0B0D10;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .timeline-block.done .timeline-block-label { color: #9CA3AF; }

        .timeline-now {
          position: absolute;
          top: -3px;
          bottom: -3px;
          width: 2px;
          background: #F5A623;
          box-shadow: 0 0 6px rgba(245,166,35,0.6);
          z-index: 2;
        }

        .timeline-now-tag {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          color: #F5A623;
          white-space: nowrap;
        }

        .timeline-legend {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px 14px;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid #1E2228;
        }

        @media (min-width: 900px) {
          .timeline-legend { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1240px) {
          .timeline-legend { grid-template-columns: repeat(4, 1fr); }
        }

        .timeline-legend-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #9CA3AF;
        }

        .timeline-legend-chip.done { color: #565D68; }

        .timeline-legend-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .timeline-legend-time {
          flex-shrink: 0;
          color: #6B7280;
          font-variant-numeric: tabular-nums;
        }

        .timeline-legend-chip.done .timeline-legend-time { color: #4B5563; }

        .timeline-legend-label {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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

        @media (prefers-reduced-motion: reduce) {
          .radar-fill, .timeline-block, .heatmap-cell, .task-list,
          .radial-progress-wrap circle, .donut-wrap circle {
            animation: none !important;
            transition: none !important;
          }
        }

        .duration-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 0 18px 14px;
        }

        .duration-chips button {
          border: 1px solid #23272E;
          background: #0F1215;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .duration-chips button.active {
          background: rgba(94,234,212,0.12);
          border-color: #5EEAD4;
          color: #5EEAD4;
        }

        .duration-custom {
          width: 58px;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 6px;
          padding: 5px 8px;
          color: #E7EAEE;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          outline: none;
        }

        .stats-bar {
          padding: 18px 18px 14px;
          border-bottom: 1px solid #1E2228;
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

        .stats-row-viz b { color: #E7EAEE; font-weight: 700; }

        .stats-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 10px;
        }

        .stats-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #6B7280;
          letter-spacing: 0.04em;
        }

        .stats-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          font-weight: 700;
          color: #5EEAD4;
          font-variant-numeric: tabular-nums;
        }

        .progress-track {
          height: 6px;
          background: #1E2228;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #5EEAD4, #7BF0DD);
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
          color: #6B7280;
        }

        .stats-row b { color: #E7EAEE; font-weight: 600; }

        .composer {
          padding: 16px 18px;
          display: flex;
          gap: 8px;
          border-bottom: 1px solid #1E2228;
        }

        .composer input[type="text"] {
          flex: 1;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 8px;
          padding: 10px 12px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .composer input[type="text"]::placeholder { color: #4B5563; }

        .composer input[type="text"]:focus {
          border-color: #5EEAD4;
          box-shadow: 0 0 0 3px rgba(94,234,212,0.12);
        }

        .prio-select {
          display: flex;
          gap: 4px;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 8px;
          padding: 3px;
        }

        .alt-toggle-btn {
          flex-shrink: 0;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 8px;
          padding: 0 12px;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .alt-toggle-btn:hover { color: #9CA3AF; border-color: #2C3138; }
        .alt-toggle-btn.active { color: #5EEAD4; border-color: #5EEAD4; background: rgba(94,234,212,0.08); }

        .alt-composer {
          margin: 0 18px 14px;
          padding: 10px 12px;
          background: #0F1215;
          border: 1px dashed #23272E;
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
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 6px;
          padding: 8px 10px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          outline: none;
        }

        .alt-composer-row input[type="text"]:focus { border-color: #5EEAD4; }

        .alt-remove-btn {
          flex-shrink: 0;
          width: 30px;
          background: transparent;
          border: 1px solid #23272E;
          border-radius: 6px;
          color: #6B7280;
          font-size: 15px;
          cursor: pointer;
        }

        .alt-remove-btn:hover { color: #F0576B; border-color: #F0576B; }

        .alt-add-btn {
          align-self: flex-start;
          background: transparent;
          border: none;
          color: #5EEAD4;
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
          color: #6B7280;
          cursor: pointer;
          transition: all 150ms ease;
          text-transform: uppercase;
        }

        .prio-select button.active {
          background: #1E2228;
          color: var(--pc);
        }

        .add-btn {
          background: #5EEAD4;
          border: none;
          border-radius: 8px;
          width: 38px;
          color: #0B0D10;
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
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .filters button.active {
          background: #1E2228;
          color: #E7EAEE;
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
        .clear-btn:hover { color: #F0576B; }

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
          color: #E7EAEE;
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

        .task-row:hover .del-btn { opacity: 1; color: #6B7280; }
        .del-btn:hover { color: #F0576B !important; }

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
        .task-list::-webkit-scrollbar-thumb { background: #23272E; border-radius: 3px; }
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
          color: #6B7280;
        }

        .today-section-header:first-child { padding-top: 14px; }

        .today-view-all {
          border: none;
          background: transparent;
          color: #5EEAD4;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          cursor: pointer;
          padding: 0;
        }

        .today-xp-total {
          color: #F5A623;
          font-family: 'JetBrains Mono', monospace;
        }

        .today-card {
          margin: 0 16px;
          padding: 14px;
          border: 1px solid #23272E;
          border-radius: 12px;
          background: #14171C;
          animation: rowIn 220ms ease backwards;
        }

        .today-card-row { display: flex; align-items: baseline; gap: 10px; }

        .today-card-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #5EEAD4;
        }

        .today-card-label {
          font-size: 15px;
          font-weight: 500;
          color: #E7EAEE;
        }

        .today-card-sub {
          margin-top: 4px;
          font-size: 11.5px;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
        }

        .today-mark-btn {
          margin-top: 12px;
          width: 100%;
          padding: 9px;
          border: 1px solid #23272E;
          border-radius: 8px;
          background: transparent;
          color: #9CA3AF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          cursor: pointer;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .today-mark-btn:hover { border-color: #5EEAD4; color: #5EEAD4; }
        .today-mark-btn.done { border-color: #5EEAD4; color: #5EEAD4; background: rgba(94,234,212,0.08); }

        .today-list { margin: 0 16px; display: flex; flex-direction: column; gap: 6px; }

        .today-task-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid #1E2228;
          border-radius: 8px;
          background: #14171C;
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

        .today-task-check:hover { border-color: #5EEAD4; }

        .today-task-text {
          flex: 1;
          font-size: 13px;
          color: #E7EAEE;
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

        .today-prio-dot.high { background: #F5A623; }
        .today-prio-dot.mid { background: #5EEAD4; }
        .today-prio-dot.low { background: #6B7280; }

        .today-more {
          border: none;
          background: transparent;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-align: left;
          padding: 6px 12px;
          cursor: pointer;
        }

        .today-more:hover { color: #5EEAD4; }

        .today-reward-cost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #F5A623;
          flex-shrink: 0;
        }

        .today-claim-btn {
          border: 1px solid #5EEAD4;
          border-radius: 6px;
          background: transparent;
          color: #5EEAD4;
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
          border: 1px solid #5EEAD4;
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
          color: #5EEAD4;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          flex-shrink: 0;
        }

        .quest-banner-text {
          flex: 1;
          font-size: 12.5px;
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .quest-banner-text b {
          color: #5EEAD4;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          margin-right: 4px;
        }

        .quest-banner-close {
          border: none;
          background: transparent;
          color: #6B7280;
          cursor: pointer;
          padding: 3px;
          flex-shrink: 0;
          display: flex;
        }

        .quest-banner-close:hover { color: #E7EAEE; }

        /* ---- shared: vault + quest sections ---- */
        .vault-scroll { display: flex; flex-direction: column; }

        .section-header {
          padding: 14px 18px 8px;
        }

        .section-header span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: #6B7280;
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
          background: #14171C;
          border: 1px solid #23272E;
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
          color: #5EEAD4;
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
          color: #E7EAEE;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .vault-card-goal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
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

        .vault-card-del:hover { color: #F0576B; }

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
          background: #1E2228;
          animation: heatmapIn 240ms ease backwards;
        }

        .month-cell.filled { background: #F5A623; }
        .month-cell.today { box-shadow: 0 0 0 1.5px #5EEAD4; }

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
          color: #E7EAEE;
        }

        .vault-check {
          border: 1.5px solid #23272E;
          background: transparent;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 8px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .vault-check.done {
          background: rgba(94,234,212,0.1);
          border-color: #5EEAD4;
          color: #5EEAD4;
        }

        /* ---- vault: projects ---- */
        .project-card {
          background: #14171C;
          border: 1px solid #23272E;
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
          color: #E7EAEE;
        }

        .project-due {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #F5A623;
          width: fit-content;
        }

        .project-due.overdue { color: #F0576B; }

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
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .project-task-text.done { color: #4B5563; text-decoration: line-through; }

        .project-add-task input {
          width: 100%;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 7px;
          padding: 7px 9px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          outline: none;
        }

        .project-add-task input:focus { border-color: #5EEAD4; }

        /* ---- quest: life areas ---- */
        .area-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          padding: 0 18px 4px;
        }

        .area-card {
          background: #14171C;
          border: 1px solid #23272E;
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
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .area-xp {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #6B7280;
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
          background: #14171C;
          border: 1px solid #23272E;
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
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .quest-habit-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
        }

        .quest-check.bad-check.done {
          background: #F0576B;
          border-color: #F0576B;
        }

        /* ---- quest: reward center ---- */
        .reward-card {
          background: #14171C;
          border: 1px solid #23272E;
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

        .reward-label { font-size: 13px; font-weight: 600; color: #E7EAEE; }

        .reward-cost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #F5A623;
        }

        .reward-claim {
          border: 1.5px solid #23272E;
          background: transparent;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 8px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .reward-claim:not(:disabled):hover {
          border-color: #F5A623;
          color: #F5A623;
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
          color: #6B7280;
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

        .vault-card-edit:hover { color: #5EEAD4; }

        .project-card-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .project-task-text { cursor: pointer; }

        .project-task-edit {
          flex: 1;
          background: #0F1215;
          border: 1px solid #5EEAD4;
          border-radius: 6px;
          padding: 6px 8px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          outline: none;
        }

        .area-chip {
          border: 1px solid #23272E;
          background: #0F1215;
          color: #6B7280;
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

        .checkbox-btn:hover { border-color: #5EEAD4; }
        .tabs button:hover { color: #B8C0CC; }
        .tabs button.active:hover { color: #E7EAEE; }
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

        .tabs button.tab-ai { color: #5EEAD4; position: relative; }
        .tabs button.tab-ai::after {
          content: "";
          position: absolute; top: 7px; right: 6px;
          width: 4px; height: 4px; border-radius: 50%;
          background: #5EEAD4; box-shadow: 0 0 6px rgba(94,234,212,0.9);
        }
        .tabs button.tab-ai.active::after { display: none; }

        .ai-intro { padding: 4px 16px 12px; }
        .ai-intro-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; margin-bottom: 5px;
        }
        .ai-intro-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px; font-weight: 600; color: #E7EAEE;
          letter-spacing: 0.04em;
        }
        .ai-intro-sub { font-size: 11px; color: #6B7280; line-height: 1.5; }

        .ai-key-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: transparent; border: 1px solid #23272E;
          border-radius: 999px; color: #6B7280; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 4px 10px; flex-shrink: 0;
          transition: border-color 140ms ease, color 140ms ease;
        }

        /* ---- key gate ---- */
        .ai-gate { padding: 14px 16px 20px; max-width: 460px; margin: 0 auto; }
        .ai-gate-icon {
          font-size: 20px; color: #5EEAD4; line-height: 1;
          margin-bottom: 10px;
          text-shadow: 0 0 14px rgba(94,234,212,0.5);
        }
        .ai-gate-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px; font-weight: 600; color: #E7EAEE;
          letter-spacing: 0.04em; margin-bottom: 6px;
        }
        .ai-gate-sub {
          font-size: 11.5px; color: #6B7280; line-height: 1.55;
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
          color: #5EEAD4;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
        }
        .ai-gate-steps a {
          color: #5EEAD4; text-decoration: none;
          border-bottom: 1px solid rgba(94,234,212,0.35);
          word-break: break-all;
        }
        .ai-key-input {
          width: 100%; box-sizing: border-box;
          background: #0E1116; border: 1px solid #23272E; border-radius: 8px;
          color: #E7EAEE; font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.06em;
          padding: 11px 12px; outline: none;
          transition: border-color 140ms ease;
        }
        .ai-key-input::placeholder { color: #4B5563; letter-spacing: 0.04em; }
        .ai-key-input:focus { border-color: #5EEAD4; }
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
          background: #0E1116; border: 1px solid #23272E; border-radius: 8px;
          color: #E7EAEE; font-family: 'Inter', sans-serif;
          font-size: 12.5px; line-height: 1.5; padding: 10px 12px;
          outline: none; transition: border-color 140ms ease;
        }
        .ai-input::placeholder { color: #4B5563; }
        .ai-input:focus { border-color: #5EEAD4; }
        .ai-input:disabled { opacity: 0.55; }

        .ai-send {
          align-self: flex-end; background: #5EEAD4; color: #07100E;
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
          background: #14171C; border: 1px solid #23272E; border-radius: 999px;
          color: #9AA3AF; font-size: 10.5px; padding: 6px 12px;
          cursor: pointer; text-align: left;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .ai-thinking { display: flex; gap: 5px; justify-content: center; padding: 18px 0 22px; }
        .ai-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #5EEAD4; opacity: 0.35;
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
          border-radius: 8px; color: #F0576B;
          font-size: 11.5px; line-height: 1.45;
        }

        .ai-result { padding: 0 16px 16px; }
        .ai-reply {
          font-size: 12.5px; color: #C9D1D9; line-height: 1.55;
          padding: 11px 13px; margin-bottom: 12px;
          background: #14171C; border: 1px solid #23272E;
          border-left: 3px solid #5EEAD4; border-radius: 8px;
        }
        .ai-noop { font-size: 11px; color: #6B7280; text-align: center; padding: 6px 0 4px; }

        .ai-diff-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 7px;
        }
        .ai-diff-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; letter-spacing: 0.1em;
          text-transform: uppercase; color: #6B7280;
        }
        .ai-diff-counts {
          display: flex; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px; font-weight: 600;
        }
        .ai-diff-counts .c-add { color: #7EE787; }
        .ai-diff-counts .c-edit { color: #F5A623; }
        .ai-diff-counts .c-remove { color: #F0576B; }

        .ai-diff { display: flex; flex-direction: column; gap: 5px; }
        .ai-diff-row {
          display: grid; grid-template-columns: 14px 52px 1fr auto;
          align-items: baseline; gap: 8px;
          width: 100%; text-align: left;
          background: #14171C; border: 1px solid #23272E;
          border-left: 3px solid #23272E; border-radius: 7px;
          padding: 9px 11px; cursor: pointer; font-family: inherit;
          transition: opacity 140ms ease, border-color 140ms ease;
        }
        .ai-diff-row.add    { border-left-color: #7EE787; }
        .ai-diff-row.edit   { border-left-color: #F5A623; }
        .ai-diff-row.remove { border-left-color: #F0576B; }
        .ai-diff-row.skipped { opacity: 0.38; }
        .ai-diff-row.skipped .ai-diff-text { text-decoration: line-through; }

        .ai-sign { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; line-height: 1; }
        .ai-diff-row.add .ai-sign    { color: #7EE787; }
        .ai-diff-row.edit .ai-sign   { color: #F5A623; }
        .ai-diff-row.remove .ai-sign { color: #F0576B; }

        .ai-surface {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.06em;
          text-transform: uppercase; color: #6B7280;
        }
        .ai-diff-text { font-size: 12px; color: #E7EAEE; line-height: 1.4; word-break: break-word; }
        .ai-skip-mark {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px; letter-spacing: 0.08em;
          text-transform: uppercase; color: #6B7280;
        }

        .ai-actions { display: flex; gap: 8px; margin-top: 12px; }
        .ai-apply {
          flex: 1; background: #5EEAD4; color: #07100E; border: none;
          border-radius: 7px; padding: 10px 0; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          transition: opacity 140ms ease, transform 140ms ease;
        }
        .ai-apply:disabled { opacity: 0.35; cursor: default; }
        .ai-apply:not(:disabled):active { transform: scale(0.98); }
        .ai-discard {
          background: transparent; color: #9AA3AF;
          border: 1px solid #23272E; border-radius: 7px;
          padding: 10px 18px; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.06em;
          transition: border-color 140ms ease, color 140ms ease;
        }
        .ai-hint { font-size: 10px; color: #4B5563; text-align: center; margin-top: 8px; }

        @media (hover: hover) and (pointer: fine) {
          .ai-chip:hover { border-color: #5EEAD4; color: #C9D1D9; }
          .ai-diff-row:hover { border-color: #39414D; }
          .ai-send:not(:disabled):hover,
          .ai-apply:not(:disabled):hover { opacity: 0.88; }
          .ai-discard:hover { border-color: #39414D; color: #E7EAEE; }
          .ai-key-btn:hover { border-color: #5EEAD4; color: #5EEAD4; }
          .ai-gate-steps a:hover { border-bottom-color: #5EEAD4; }
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
              #0B0D10;
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
      `),l.default.createElement("div",{className:"panel"},Z&&l.default.createElement("div",{className:"quest-banner",onClick:()=>G(null)},l.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),l.default.createElement("span",{className:"quest-banner-text"},l.default.createElement("b",null,"Now:")," ",Z.label),l.default.createElement("button",{className:"quest-banner-close",onClick:M=>{M.stopPropagation(),G(null)},"aria-label":"Dismiss"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),l.default.createElement("div",{className:"titlebar"},l.default.createElement("div",{className:"titlebar-left"},l.default.createElement("div",{className:"dots"},l.default.createElement("span",{className:"dot red"}),l.default.createElement("span",{className:"dot amber"}),l.default.createElement("span",{className:"dot green"})),l.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),l.default.createElement("div",{className:"titlebar-right"},l.default.createElement("input",{type:"file",accept:"application/json",ref:D,onChange:gi,style:{display:"none"}}),l.default.createElement("button",{className:`titlebar-icon-btn ${P?"notify-on":""}`,onClick:W,disabled:ee,"aria-label":P?"Turn off notifications":"Turn on notifications",title:P?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},P?l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),l.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),l.default.createElement("button",{className:"titlebar-icon-btn",onClick:Qe,"aria-label":"Import backup",title:"Import backup"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"titlebar-icon-btn",onClick:Me,"aria-label":"Export backup",title:"Export backup"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("span",{className:"clock"},new Date(le).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),T&&l.default.createElement("div",{className:`data-toast ${T.type}`},T.text),l.default.createElement("div",{className:"tabs"},l.default.createElement("button",{className:e==="today"?"active":"",onClick:()=>o("today")},"today"),l.default.createElement("button",{className:e==="tasks"?"active":"",onClick:()=>o("tasks")},"tasks"),l.default.createElement("button",{className:e==="routines"?"active":"",onClick:()=>o("routines")},"routines"),l.default.createElement("button",{className:e==="vault"?"active":"",onClick:()=>o("vault")},"vault"),l.default.createElement("button",{className:e==="quest"?"active":"",onClick:()=>o("quest")},"quest"),l.default.createElement("button",{className:`tab-ai ${e==="ai"?"active":""}`,onClick:()=>o("ai")},"ai")),l.default.createElement("div",{key:e,className:"tab-content"},e==="today"?l.default.createElement(C0,{routines:s,setRoutines:u,tasks:i,setTasks:a,vaultHabits:d,goodHabits:y,rewards:p,setRewards:c,totalXP:f,setTab:o}):e==="tasks"?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"stats-bar stats-bar-viz"},l.default.createElement(hi,{pct:De.pct,size:64,stroke:5.5,label:`${De.pct}%`}),l.default.createElement("div",{className:"stats-row-viz"},l.default.createElement("span",null,l.default.createElement("b",null,l.default.createElement(it,{value:De.total}))," total"),l.default.createElement("span",null,l.default.createElement("b",null,l.default.createElement(it,{value:De.pending}))," pending"),l.default.createElement("span",null,l.default.createElement("b",null,l.default.createElement(it,{value:De.done}))," done"))),De.pending>0&&l.default.createElement("div",{className:"donut-card"},l.default.createElement(Jc,{size:96,stroke:14,centerLabel:De.pending,centerSublabel:"open",segments:mn.map(M=>({key:M.key,value:M.value,color:M.color}))}),l.default.createElement("div",{className:"donut-legend"},mn.map(M=>l.default.createElement("div",{className:"donut-legend-row",key:M.key},l.default.createElement("span",{className:"donut-legend-dot",style:{background:M.color}}),l.default.createElement("span",null,M.label," priority"),l.default.createElement("span",{className:"donut-legend-val"},M.value))))),l.default.createElement("div",{className:"composer"},l.default.createElement("input",{ref:S,type:"text",placeholder:"add a task, press enter...",value:x,onChange:M=>N(M.target.value),onKeyDown:M=>M.key==="Enter"&&Ja()}),l.default.createElement("div",{className:"prio-select"},pi.map(M=>l.default.createElement("button",{key:M.key,className:E===M.key?"active":"",style:{"--pc":M.color},onClick:()=>_(M.key)},M.label))),l.default.createElement("button",{className:"add-btn",onClick:Ja,"aria-label":"Add task"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),l.default.createElement("div",{className:"filters"},["all","active","done"].map(M=>l.default.createElement("button",{key:M,className:A===M?"active":"",onClick:()=>I(M)},M)),l.default.createElement("span",{className:"spacer"}),De.done>0&&l.default.createElement("button",{className:"clear-btn",onClick:Zc},"clear done")),l.default.createElement("div",{className:"task-list"},hn.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},A==="done"?"nothing completed yet":"queue's empty \u2014 add something")):hn.map((M,O)=>l.default.createElement(p0,{key:M.id,task:M,now:le,index:O,onToggle:Qc,onDelete:Yc})))):e==="routines"?l.default.createElement($m,{routines:s,setRoutines:u}):e==="vault"?l.default.createElement(Ym,{vaultHabits:d,setVaultHabits:m,projects:g,setProjects:h}):e==="quest"?l.default.createElement(s0,{goodHabits:y,setGoodHabits:k,badHabits:v,setBadHabits:w,rewards:p,setRewards:c}):l.default.createElement(b0,{state:{routines:s,vaultHabits:d,goodHabits:y,badHabits:v,rewards:p,totalXP:f},setters:{setRoutines:u,setVaultHabits:m,setGoodHabits:k,setBadHabits:w,setRewards:c},showDataMsg:J}))))}var M0=Wc.default.createRoot(document.getElementById("root"));M0.render(l.default.createElement(A0));})();
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
