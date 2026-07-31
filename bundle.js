(()=>{var rp=Object.create;var qa=Object.defineProperty;var op=Object.getOwnPropertyDescriptor;var ip=Object.getOwnPropertyNames;var lp=Object.getPrototypeOf,ap=Object.prototype.hasOwnProperty;var Qt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var sp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ip(t))!ap.call(e,o)&&o!==n&&qa(e,o,{get:()=>t[o],enumerable:!(r=op(t,o))||r.enumerable});return e};var Ya=(e,t,n)=>(n=e!=null?rp(lp(e)):{},sp(t||!e||!e.__esModule?qa(n,"default",{value:e,enumerable:!0}):n,e));var us=Qt(W=>{"use strict";var Gn=Symbol.for("react.element"),up=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),fp=Symbol.for("react.provider"),mp=Symbol.for("react.context"),hp=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),vp=Symbol.for("react.memo"),yp=Symbol.for("react.lazy"),Za=Symbol.iterator;function xp(e){return e===null||typeof e!="object"?null:(e=Za&&e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var ts={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ns=Object.assign,rs={};function gn(e,t,n){this.props=e,this.context=t,this.refs=rs,this.updater=n||ts}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function os(){}os.prototype=gn.prototype;function xi(e,t,n){this.props=e,this.context=t,this.refs=rs,this.updater=n||ts}var ki=xi.prototype=new os;ki.constructor=xi;ns(ki,gn.prototype);ki.isPureReactComponent=!0;var Ra=Array.isArray,is=Object.prototype.hasOwnProperty,wi={current:null},ls={key:!0,ref:!0,__self:!0,__source:!0};function as(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)is.call(t,r)&&!ls.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Gn,type:e,key:i,ref:a,props:o,_owner:wi.current}}function kp(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ei(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function wp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var es=/\/+/g;function yi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wp(""+e.key):t.toString(36)}function Kr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gn:case up:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+yi(a,0):r,Ra(o)?(n="",e!=null&&(n=e.replace(es,"$&/")+"/"),Kr(o,t,n,"",function(d){return d})):o!=null&&(Ei(o)&&(o=kp(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(es,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Ra(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+yi(i,s);a+=Kr(i,t,n,u,o)}else if(u=xp(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+yi(i,s++),a+=Kr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Jr(e,t,n){if(e==null)return e;var r=[],o=0;return Kr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Xr={transition:null},bp={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Xr,ReactCurrentOwner:wi};function ss(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Jr,forEach:function(e,t,n){Jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jr(e,function(){t++}),t},toArray:function(e){return Jr(e,function(t){return t})||[]},only:function(e){if(!Ei(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=gn;W.Fragment=dp;W.Profiler=pp;W.PureComponent=xi;W.StrictMode=cp;W.Suspense=gp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;W.act=ss;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ns({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=wi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)is.call(t,u)&&!ls.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Gn,type:e.type,key:o,ref:i,props:r,_owner:a}};W.createContext=function(e){return e={$$typeof:mp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fp,_context:e},e.Consumer=e};W.createElement=as;W.createFactory=function(e){var t=as.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:hp,render:e}};W.isValidElement=Ei;W.lazy=function(e){return{$$typeof:yp,_payload:{_status:-1,_result:e},_init:Ep}};W.memo=function(e,t){return{$$typeof:vp,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Xr.transition;Xr.transition={};try{e()}finally{Xr.transition=t}};W.unstable_act=ss;W.useCallback=function(e,t){return Ce.current.useCallback(e,t)};W.useContext=function(e){return Ce.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ce.current.useEffect(e,t)};W.useId=function(){return Ce.current.useId()};W.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ce.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};W.useRef=function(e){return Ce.current.useRef(e)};W.useState=function(e){return Ce.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ce.current.useTransition()};W.version="18.3.1"});var bi=Qt((z0,ds)=>{"use strict";ds.exports=us()});var ks=Qt(Q=>{"use strict";function Ai(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Gr(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Ye(e){return e.length===0?null:e[0]}function qr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var a=2*(r+1)-1,s=e[a],u=a+1,d=e[u];if(0>Gr(s,n))u<o&&0>Gr(d,s)?(e[r]=d,e[u]=n,r=u):(e[r]=s,e[a]=n,r=a);else if(u<o&&0>Gr(d,n))e[r]=d,e[u]=n,r=u;else break e}}return t}function Gr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(cs=performance,Q.unstable_now=function(){return cs.now()}):(Ni=Date,ps=Ni.now(),Q.unstable_now=function(){return Ni.now()-ps});var cs,Ni,ps,it=[],At=[],Np=1,He=null,ke=3,Yr=!1,qt=!1,qn=!1,hs=typeof setTimeout=="function"?setTimeout:null,gs=typeof clearTimeout=="function"?clearTimeout:null,fs=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Mi(e){for(var t=Ye(At);t!==null;){if(t.callback===null)qr(At);else if(t.startTime<=e)qr(At),t.sortIndex=t.expirationTime,Ai(it,t);else break;t=Ye(At)}}function Di(e){if(qn=!1,Mi(e),!qt)if(Ye(it)!==null)qt=!0,zi(_i);else{var t=Ye(At);t!==null&&Ti(Di,t.startTime-e)}}function _i(e,t){qt=!1,qn&&(qn=!1,gs(Yn),Yn=-1),Yr=!0;var n=ke;try{for(Mi(t),He=Ye(it);He!==null&&(!(He.expirationTime>t)||e&&!xs());){var r=He.callback;if(typeof r=="function"){He.callback=null,ke=He.priorityLevel;var o=r(He.expirationTime<=t);t=Q.unstable_now(),typeof o=="function"?He.callback=o:He===Ye(it)&&qr(it),Mi(t)}else qr(it);He=Ye(it)}if(He!==null)var i=!0;else{var a=Ye(At);a!==null&&Ti(Di,a.startTime-t),i=!1}return i}finally{He=null,ke=n,Yr=!1}}var Zr=!1,Qr=null,Yn=-1,vs=5,ys=-1;function xs(){return!(Q.unstable_now()-ys<vs)}function Si(){if(Qr!==null){var e=Q.unstable_now();ys=e;var t=!0;try{t=Qr(!0,e)}finally{t?Qn():(Zr=!1,Qr=null)}}else Zr=!1}var Qn;typeof fs=="function"?Qn=function(){fs(Si)}:typeof MessageChannel<"u"?(Ci=new MessageChannel,ms=Ci.port2,Ci.port1.onmessage=Si,Qn=function(){ms.postMessage(null)}):Qn=function(){hs(Si,0)};var Ci,ms;function zi(e){Qr=e,Zr||(Zr=!0,Qn())}function Ti(e,t){Yn=hs(function(){e(Q.unstable_now())},t)}Q.unstable_IdlePriority=5;Q.unstable_ImmediatePriority=1;Q.unstable_LowPriority=4;Q.unstable_NormalPriority=3;Q.unstable_Profiling=null;Q.unstable_UserBlockingPriority=2;Q.unstable_cancelCallback=function(e){e.callback=null};Q.unstable_continueExecution=function(){qt||Yr||(qt=!0,zi(_i))};Q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vs=0<e?Math.floor(1e3/e):5};Q.unstable_getCurrentPriorityLevel=function(){return ke};Q.unstable_getFirstCallbackNode=function(){return Ye(it)};Q.unstable_next=function(e){switch(ke){case 1:case 2:case 3:var t=3;break;default:t=ke}var n=ke;ke=t;try{return e()}finally{ke=n}};Q.unstable_pauseExecution=function(){};Q.unstable_requestPaint=function(){};Q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ke;ke=e;try{return t()}finally{ke=n}};Q.unstable_scheduleCallback=function(e,t,n){var r=Q.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Np++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Ai(At,e),Ye(it)===null&&e===Ye(At)&&(qn?(gs(Yn),Yn=-1):qn=!0,Ti(Di,n-r))):(e.sortIndex=o,Ai(it,e),qt||Yr||(qt=!0,zi(_i))),e};Q.unstable_shouldYield=xs;Q.unstable_wrapCallback=function(e){var t=ke;return function(){var n=ke;ke=t;try{return e.apply(this,arguments)}finally{ke=n}}}});var Es=Qt((B0,ws)=>{"use strict";ws.exports=ks()});var Cc=Qt(We=>{"use strict";var Sp=bi(),$e=Es();function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Du=new Set,xr={};function dn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(xr[e]=t,e=0;e<t.length;e++)Du.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Ns={};function Ap(e){return tl.call(Ns,e)?!0:tl.call(bs,e)?!1:Cp.test(e)?Ns[e]=!0:(bs[e]=!0,!1)}function Mp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dp(e,t,n,r){if(t===null||typeof t>"u"||Mp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,Gl);ve[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,Gl);ve[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,Gl);ve[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dp(t,n,o,r)&&(n=null),r||o===null?Ap(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rr=Symbol.for("react.element"),xn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),ql=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),zu=Symbol.for("react.context"),Yl=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Tu=Symbol.for("react.offscreen"),Ss=Symbol.iterator;function Zn(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Bi;function lr(e){if(Bi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bi=t&&t[1]||""}return`
`+Bi+e}var Pi=!1;function Li(e,t){if(!e||Pi)return"";Pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function _p(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case xn:return"Portal";case nl:return"Profiler";case ql:return"StrictMode";case rl:return"Suspense";case ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zu:return(e.displayName||"Context")+".Consumer";case _u:return(e._context.displayName||"Context")+".Provider";case Yl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zl:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}function zp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(t);case 8:return t===ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tp(e){var t=Bu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=Tp(e))}function Pu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Do(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lu(e,t){t=t.checked,t!=null&&Ql(e,"checked",t,!1)}function al(e,t){Lu(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&sl(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function As(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sl(e,t,n){(t!=="number"||Do(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(ar(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Iu(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,Ou=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bp=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){Bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function $u(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cl(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fl=null;function Rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,Tn=null,Bn=null;function _s(e){if(e=Or(e)){if(typeof ml!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ri(t),ml(e.stateNode,e.type,t))}}function Uu(e){Tn?Bn?Bn.push(e):Bn=[e]:Tn=e}function Wu(){if(Tn){var e=Tn,t=Bn;if(Bn=Tn=null,_s(e),t)for(e=0;e<t.length;e++)_s(t[e])}}function Hu(e,t){return e(t)}function Vu(){}var Ii=!1;function Ju(e,t,n){if(Ii)return e(t,n);Ii=!0;try{return Hu(e,t,n)}finally{Ii=!1,(Tn!==null||Bn!==null)&&(Vu(),Wu())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var hl=!1;if(yt)try{vn={},Object.defineProperty(vn,"passive",{get:function(){hl=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{hl=!1}var vn;function Lp(e,t,n,r,o,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var cr=!1,_o=null,zo=!1,gl=null,Ip={onError:function(e){cr=!0,_o=e}};function Fp(e,t,n,r,o,i,a,s,u){cr=!1,_o=null,Lp.apply(Ip,arguments)}function Op(e,t,n,r,o,i,a,s,u){if(Fp.apply(this,arguments),cr){if(cr){var d=_o;cr=!1,_o=null}else throw Error(S(198));zo||(zo=!0,gl=d)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zs(e){if(cn(e)!==e)throw Error(S(188))}function jp(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return zs(o),e;if(i===r)return zs(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Xu(e){return e=jp(e),e!==null?Gu(e):null}function Gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gu(e);if(t!==null)return t;e=e.sibling}return null}var Qu=$e.unstable_scheduleCallback,Ts=$e.unstable_cancelCallback,$p=$e.unstable_shouldYield,Up=$e.unstable_requestPaint,ie=$e.unstable_now,Wp=$e.unstable_getCurrentPriorityLevel,ea=$e.unstable_ImmediatePriority,qu=$e.unstable_UserBlockingPriority,To=$e.unstable_NormalPriority,Hp=$e.unstable_LowPriority,Yu=$e.unstable_IdlePriority,Ro=null,ut=null;function Vp(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Xp,Jp=Math.log,Kp=Math.LN2;function Xp(e){return e>>>=0,e===0?32:31-(Jp(e)/Kp|0)|0}var no=64,ro=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=sr(s):(i&=a,i!==0&&(r=sr(i)))}else a=n&~o,a!==0?r=sr(a):i!==0&&(r=sr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function Gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-nt(i),s=1<<a,u=o[a];u===-1?((s&n)===0||(s&r)!==0)&&(o[a]=Gp(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zu(){var e=no;return no<<=1,(no&4194240)===0&&(no=64),e}function Fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function qp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function Ru(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ed,na,td,nd,rd,yl=!1,oo=[],Lt=null,It=null,Ft=null,Er=new Map,br=new Map,zt=[],Yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bs(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function Rn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Or(t),t!==null&&na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zp(e,t,n,r,o){switch(t){case"focusin":return Lt=Rn(Lt,e,t,n,r,o),!0;case"dragenter":return It=Rn(It,e,t,n,r,o),!0;case"mouseover":return Ft=Rn(Ft,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Er.set(i,Rn(Er.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,br.set(i,Rn(br.get(i)||null,e,t,n,r,o)),!0}return!1}function od(e){var t=Rt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ku(n),t!==null){e.blockedOn=t,rd(e.priority,function(){td(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fl=r,n.target.dispatchEvent(r),fl=null}else return t=Or(n),t!==null&&na(t),e.blockedOn=n,!1;t.shift()}return!0}function Ps(e,t,n){xo(e)&&n.delete(t)}function Rp(){yl=!1,Lt!==null&&xo(Lt)&&(Lt=null),It!==null&&xo(It)&&(It=null),Ft!==null&&xo(Ft)&&(Ft=null),Er.forEach(Ps),br.forEach(Ps)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,yl||(yl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Rp)))}function Nr(e){function t(o){return er(o,e)}if(0<oo.length){er(oo[0],e);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&er(Lt,e),It!==null&&er(It,e),Ft!==null&&er(Ft,e),Er.forEach(t),br.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)od(n),n.blockedOn===null&&zt.shift()}var Pn=Et.ReactCurrentBatchConfig,Po=!0;function ef(e,t,n,r){var o=K,i=Pn.transition;Pn.transition=null;try{K=1,ra(e,t,n,r)}finally{K=o,Pn.transition=i}}function tf(e,t,n,r){var o=K,i=Pn.transition;Pn.transition=null;try{K=4,ra(e,t,n,r)}finally{K=o,Pn.transition=i}}function ra(e,t,n,r){if(Po){var o=xl(e,t,n,r);if(o===null)Vi(e,t,r,Lo,n),Bs(e,r);else if(Zp(o,e,t,n,r))r.stopPropagation();else if(Bs(e,r),t&4&&-1<Yp.indexOf(e)){for(;o!==null;){var i=Or(o);if(i!==null&&ed(i),i=xl(e,t,n,r),i===null&&Vi(e,t,r,Lo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Vi(e,t,r,null,n)}}var Lo=null;function xl(e,t,n,r){if(Lo=null,e=Rl(r),e=Rt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ku(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wp()){case ea:return 1;case qu:return 4;case To:case Hp:return 16;case Yu:return 536870912;default:return 16}default:return 16}}var Bt=null,oa=null,ko=null;function ld(){if(ko)return ko;var e,t=oa,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ko=o.slice(e,1<r?1-r:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function Ls(){return!1}function Ue(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?io:Ls,this.isPropagationStopped=Ls,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Ue(Vn),Fr=re({},Vn,{view:0,detail:0}),nf=Ue(Fr),Oi,ji,tr,ei=re({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Oi=e.screenX-tr.screenX,ji=e.screenY-tr.screenY):ji=Oi=0,tr=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:ji}}),Is=Ue(ei),rf=re({},ei,{dataTransfer:0}),of=Ue(rf),lf=re({},Fr,{relatedTarget:0}),$i=Ue(lf),af=re({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=Ue(af),uf=re({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=Ue(uf),cf=re({},Vn,{data:0}),Fs=Ue(cf),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mf[e])?!!t[e]:!1}function la(){return hf}var gf=re({},Fr,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=Ue(gf),yf=re({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Os=Ue(yf),xf=re({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),kf=Ue(xf),wf=re({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=Ue(wf),bf=re({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=Ue(bf),Sf=[9,13,27,32],aa=yt&&"CompositionEvent"in window,pr=null;yt&&"documentMode"in document&&(pr=document.documentMode);var Cf=yt&&"TextEvent"in window&&!pr,ad=yt&&(!aa||pr&&8<pr&&11>=pr),js=" ",$s=!1;function sd(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Af(e,t){switch(e){case"compositionend":return ud(t);case"keypress":return t.which!==32?null:($s=!0,js);case"textInput":return e=t.data,e===js&&$s?null:e;default:return null}}function Mf(e,t){if(wn)return e==="compositionend"||!aa&&sd(e,t)?(e=ld(),ko=oa=Bt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ad&&t.locale!=="ko"?null:t.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Df[e.type]:t==="textarea"}function dd(e,t,n,r){Uu(r),t=Io(t,"onChange"),0<t.length&&(n=new ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Sr=null;function _f(e){wd(e,0)}function ti(e){var t=Nn(e);if(Pu(t))return e}function zf(e,t){if(e==="change")return t}var cd=!1;yt&&(yt?(ao="oninput"in document,ao||(Ui=document.createElement("div"),Ui.setAttribute("oninput","return;"),ao=typeof Ui.oninput=="function"),lo=ao):lo=!1,cd=lo&&(!document.documentMode||9<document.documentMode));var lo,ao,Ui;function Ws(){fr&&(fr.detachEvent("onpropertychange",pd),Sr=fr=null)}function pd(e){if(e.propertyName==="value"&&ti(Sr)){var t=[];dd(t,Sr,e,Rl(e)),Ju(_f,t)}}function Tf(e,t,n){e==="focusin"?(Ws(),fr=t,Sr=n,fr.attachEvent("onpropertychange",pd)):e==="focusout"&&Ws()}function Bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(Sr)}function Pf(e,t){if(e==="click")return ti(t)}function Lf(e,t){if(e==="input"||e==="change")return ti(t)}function If(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:If;function Cr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!tl.call(t,o)||!ot(e[o],t[o]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vs(e,t){var n=Hs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hs(n)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function md(){for(var e=window,t=Do();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Do(e.document)}return t}function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=md(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fd(n.ownerDocument.documentElement,n)){if(r!==null&&sa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Vs(n,i);var a=Vs(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Of=yt&&"documentMode"in document&&11>=document.documentMode,En=null,kl=null,mr=null,wl=!1;function Js(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wl||En==null||En!==Do(r)||(r=En,"selectionStart"in r&&sa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&Cr(mr,r)||(mr=r,r=Io(kl,"onSelect"),0<r.length&&(t=new ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Wi={},hd={};yt&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function ni(e){if(Wi[e])return Wi[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hd)return Wi[e]=t[n];return e}var gd=ni("animationend"),vd=ni("animationiteration"),yd=ni("animationstart"),xd=ni("transitionend"),kd=new Map,Ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){kd.set(e,t),dn(t,[e])}for(uo=0;uo<Ks.length;uo++)co=Ks[uo],Xs=co.toLowerCase(),Gs=co[0].toUpperCase()+co.slice(1),Jt(Xs,"on"+Gs);var co,Xs,Gs,uo;Jt(gd,"onAnimationEnd");Jt(vd,"onAnimationIteration");Jt(yd,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(xd,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Op(r,t,void 0,e),e.currentTarget=null}function wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Qs(o,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Qs(o,s,d),i=u}}}if(zo)throw e=gl,zo=!1,gl=null,e}function Y(e,t){var n=t[Cl];n===void 0&&(n=t[Cl]=new Set);var r=e+"__bubble";n.has(r)||(Ed(t,e,2,!1),n.add(r))}function Hi(e,t,n){var r=0;t&&(r|=4),Ed(n,e,r,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[po]){e[po]=!0,Du.forEach(function(n){n!=="selectionchange"&&(jf.has(n)||Hi(n,!1,e),Hi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,Hi("selectionchange",!1,t))}}function Ed(e,t,n,r){switch(id(t)){case 1:var o=ef;break;case 4:o=tf;break;default:o=ra}n=o.bind(null,t,n,e),o=void 0,!hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Rt(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Ju(function(){var d=i,m=Rl(n),g=[];e:{var h=kd.get(e);if(h!==void 0){var y=ia,k=e;switch(e){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":y=vf;break;case"focusin":k="focus",y=$i;break;case"focusout":k="blur",y=$i;break;case"beforeblur":case"afterblur":y=$i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=kf;break;case gd:case vd:case yd:y=sf;break;case xd:y=Ef;break;case"scroll":y=nf;break;case"wheel":y=Nf;break;case"copy":case"cut":case"paste":y=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Os}var x=(t&4)!==0,E=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var c=d,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=wr(c,p),v!=null&&x.push(Mr(c,v,f)))),E)break;c=c.return}0<x.length&&(h=new y(h,k,null,n,m),g.push({event:h,listeners:x}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==fl&&(k=n.relatedTarget||n.fromElement)&&(Rt(k)||k[xt]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=d,k=k?Rt(k):null,k!==null&&(E=cn(k),k!==E||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=d),y!==k)){if(x=Is,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=Os,v="onPointerLeave",p="onPointerEnter",c="pointer"),E=y==null?h:Nn(y),f=k==null?h:Nn(k),h=new x(v,c+"leave",y,n,m),h.target=E,h.relatedTarget=f,v=null,Rt(m)===d&&(x=new x(p,c+"enter",k,n,m),x.target=f,x.relatedTarget=E,v=x),E=v,y&&k)t:{for(x=y,p=k,c=0,f=x;f;f=yn(f))c++;for(f=0,v=p;v;v=yn(v))f++;for(;0<c-f;)x=yn(x),c--;for(;0<f-c;)p=yn(p),f--;for(;c--;){if(x===p||p!==null&&x===p.alternate)break t;x=yn(x),p=yn(p)}x=null}else x=null;y!==null&&qs(g,h,y,x,!1),k!==null&&E!==null&&qs(g,E,k,x,!0)}}e:{if(h=d?Nn(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var b=zf;else if(Us(h))if(cd)b=Lf;else{b=Bf;var N=Tf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Pf);if(b&&(b=b(e,d))){dd(g,b,n,m);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&sl(h,"number",h.value)}switch(N=d?Nn(d):window,e){case"focusin":(Us(N)||N.contentEditable==="true")&&(En=N,kl=d,mr=null);break;case"focusout":mr=kl=En=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,Js(g,n,m);break;case"selectionchange":if(Of)break;case"keydown":case"keyup":Js(g,n,m)}var _;if(aa)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else wn?sd(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ad&&n.locale!=="ko"&&(wn||M!=="onCompositionStart"?M==="onCompositionEnd"&&wn&&(_=ld()):(Bt=m,oa="value"in Bt?Bt.value:Bt.textContent,wn=!0)),N=Io(d,M),0<N.length&&(M=new Fs(M,e,null,n,m),g.push({event:M,listeners:N}),_?M.data=_:(_=ud(n),_!==null&&(M.data=_)))),(_=Cf?Af(e,n):Mf(e,n))&&(d=Io(d,"onBeforeInput"),0<d.length&&(m=new Fs("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=_))}wd(g,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Io(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=wr(e,n),i!=null&&r.unshift(Mr(e,i,o)),i=wr(e,t),i!=null&&r.push(Mr(e,i,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=wr(n,i),u!=null&&a.unshift(Mr(n,u,s))):o||(u=wr(n,i),u!=null&&a.push(Mr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $f=/\r\n?/g,Uf=/\u0000|\uFFFD/g;function Ys(e){return(typeof e=="string"?e:""+e).replace($f,`
`).replace(Uf,"")}function fo(e,t,n){if(t=Ys(t),Ys(e)!==t&&n)throw Error(S(425))}function Fo(){}var El=null,bl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Wf=typeof clearTimeout=="function"?clearTimeout:void 0,Zs=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Zs<"u"?function(e){return Zs.resolve(null).then(e).catch(Vf)}:Sl;function Vf(e){setTimeout(function(){throw e})}function Ji(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Nr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),st="__reactFiber$"+Jn,Dr="__reactProps$"+Jn,xt="__reactContainer$"+Jn,Cl="__reactEvents$"+Jn,Jf="__reactListeners$"+Jn,Kf="__reactHandles$"+Jn;function Rt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rs(e);e!==null;){if(n=e[st])return n;e=Rs(e)}return t}e=n,n=e.parentNode}return null}function Or(e){return e=e[st]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ri(e){return e[Dr]||null}var Al=[],Sn=-1;function Kt(e){return{current:e}}function Z(e){0>Sn||(e.current=Al[Sn],Al[Sn]=null,Sn--)}function q(e,t){Sn++,Al[Sn]=e.current,e.current=t}var Vt={},Ne=Kt(Vt),Be=Kt(!1),on=Vt;function On(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function Oo(){Z(Be),Z(Ne)}function eu(e,t,n){if(Ne.current!==Vt)throw Error(S(168));q(Ne,t),q(Be,n)}function bd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,zp(e)||"Unknown",o));return re({},n,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,on=Ne.current,q(Ne,e),q(Be,Be.current),!0}function tu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=bd(e,t,on),r.__reactInternalMemoizedMergedChildContext=e,Z(Be),Z(Ne),q(Ne,e)):Z(Be),q(Be,n)}var mt=null,oi=!1,Ki=!1;function Nd(e){mt===null?mt=[e]:mt.push(e)}function Xf(e){oi=!0,Nd(e)}function Xt(){if(!Ki&&mt!==null){Ki=!0;var e=0,t=K;try{var n=mt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,oi=!1}catch(o){throw mt!==null&&(mt=mt.slice(e+1)),Qu(ea,Xt),o}finally{K=t,Ki=!1}}return null}var Cn=[],An=0,$o=null,Uo=0,Ve=[],Je=0,ln=null,ht=1,gt="";function Yt(e,t){Cn[An++]=Uo,Cn[An++]=$o,$o=e,Uo=t}function Sd(e,t,n){Ve[Je++]=ht,Ve[Je++]=gt,Ve[Je++]=ln,ln=e;var r=ht;e=gt;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var i=32-nt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,ht=1<<32-nt(t)+o|n<<o|r,gt=i+e}else ht=1<<i|n<<o|r,gt=e}function ua(e){e.return!==null&&(Yt(e,1),Sd(e,1,0))}function da(e){for(;e===$o;)$o=Cn[--An],Cn[An]=null,Uo=Cn[--An],Cn[An]=null;for(;e===ln;)ln=Ve[--Je],Ve[Je]=null,gt=Ve[--Je],Ve[Je]=null,ht=Ve[--Je],Ve[Je]=null}var je=null,Oe=null,R=!1,tt=null;function Cd(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Oe=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:ht,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Oe=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(R){var t=Oe;if(t){var n=t;if(!nu(e,t)){if(Ml(e))throw Error(S(418));t=Ot(n.nextSibling);var r=je;t&&nu(e,t)?Cd(r,n):(e.flags=e.flags&-4097|2,R=!1,je=e)}}else{if(Ml(e))throw Error(S(418));e.flags=e.flags&-4097|2,R=!1,je=e}}}function ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function mo(e){if(e!==je)return!1;if(!R)return ru(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=Oe)){if(Ml(e))throw Ad(),Error(S(418));for(;t;)Cd(e,t),t=Ot(t.nextSibling)}if(ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=je?Ot(e.stateNode.nextSibling):null;return!0}function Ad(){for(var e=Oe;e;)e=Ot(e.nextSibling)}function jn(){Oe=je=null,R=!1}function ca(e){tt===null?tt=[e]:tt.push(e)}var Gf=Et.ReactCurrentBatchConfig;function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ou(e){var t=e._init;return t(e._payload)}function Md(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=Wt(p,c),p.index=0,p.sibling=null,p}function i(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,v){return c===null||c.tag!==6?(c=Ri(f,p.mode,v),c.return=p,c):(c=o(c,f),c.return=p,c)}function u(p,c,f,v){var b=f.type;return b===kn?m(p,c,f.props.children,v,f.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Dt&&ou(b)===c.type)?(v=o(c,f.props),v.ref=nr(p,c,f),v.return=p,v):(v=Mo(f.type,f.key,f.props,null,p.mode,v),v.ref=nr(p,c,f),v.return=p,v)}function d(p,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=el(f,p.mode,v),c.return=p,c):(c=o(c,f.children||[]),c.return=p,c)}function m(p,c,f,v,b){return c===null||c.tag!==7?(c=rn(f,p.mode,v,b),c.return=p,c):(c=o(c,f),c.return=p,c)}function g(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ri(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Rr:return f=Mo(c.type,c.key,c.props,null,p.mode,f),f.ref=nr(p,null,c),f.return=p,f;case xn:return c=el(c,p.mode,f),c.return=p,c;case Dt:var v=c._init;return g(p,v(c._payload),f)}if(ar(c)||Zn(c))return c=rn(c,p.mode,f,null),c.return=p,c;ho(p,c)}return null}function h(p,c,f,v){var b=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:s(p,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Rr:return f.key===b?u(p,c,f,v):null;case xn:return f.key===b?d(p,c,f,v):null;case Dt:return b=f._init,h(p,c,b(f._payload),v)}if(ar(f)||Zn(f))return b!==null?null:m(p,c,f,v,null);ho(p,f)}return null}function y(p,c,f,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,s(c,p,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rr:return p=p.get(v.key===null?f:v.key)||null,u(c,p,v,b);case xn:return p=p.get(v.key===null?f:v.key)||null,d(c,p,v,b);case Dt:var N=v._init;return y(p,c,f,N(v._payload),b)}if(ar(v)||Zn(v))return p=p.get(f)||null,m(c,p,v,b,null);ho(c,v)}return null}function k(p,c,f,v){for(var b=null,N=null,_=c,M=c=0,j=null;_!==null&&M<f.length;M++){_.index>M?(j=_,_=null):j=_.sibling;var L=h(p,_,f[M],v);if(L===null){_===null&&(_=j);break}e&&_&&L.alternate===null&&t(p,_),c=i(L,c,M),N===null?b=L:N.sibling=L,N=L,_=j}if(M===f.length)return n(p,_),R&&Yt(p,M),b;if(_===null){for(;M<f.length;M++)_=g(p,f[M],v),_!==null&&(c=i(_,c,M),N===null?b=_:N.sibling=_,N=_);return R&&Yt(p,M),b}for(_=r(p,_);M<f.length;M++)j=y(_,p,M,f[M],v),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?M:j.key),c=i(j,c,M),N===null?b=j:N.sibling=j,N=j);return e&&_.forEach(function(P){return t(p,P)}),R&&Yt(p,M),b}function x(p,c,f,v){var b=Zn(f);if(typeof b!="function")throw Error(S(150));if(f=b.call(f),f==null)throw Error(S(151));for(var N=b=null,_=c,M=c=0,j=null,L=f.next();_!==null&&!L.done;M++,L=f.next()){_.index>M?(j=_,_=null):j=_.sibling;var P=h(p,_,L.value,v);if(P===null){_===null&&(_=j);break}e&&_&&P.alternate===null&&t(p,_),c=i(P,c,M),N===null?b=P:N.sibling=P,N=P,_=j}if(L.done)return n(p,_),R&&Yt(p,M),b;if(_===null){for(;!L.done;M++,L=f.next())L=g(p,L.value,v),L!==null&&(c=i(L,c,M),N===null?b=L:N.sibling=L,N=L);return R&&Yt(p,M),b}for(_=r(p,_);!L.done;M++,L=f.next())L=y(_,p,M,L.value,v),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?M:L.key),c=i(L,c,M),N===null?b=L:N.sibling=L,N=L);return e&&_.forEach(function(I){return t(p,I)}),R&&Yt(p,M),b}function E(p,c,f,v){if(typeof f=="object"&&f!==null&&f.type===kn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Rr:e:{for(var b=f.key,N=c;N!==null;){if(N.key===b){if(b=f.type,b===kn){if(N.tag===7){n(p,N.sibling),c=o(N,f.props.children),c.return=p,p=c;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Dt&&ou(b)===N.type){n(p,N.sibling),c=o(N,f.props),c.ref=nr(p,N,f),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===kn?(c=rn(f.props.children,p.mode,v,f.key),c.return=p,p=c):(v=Mo(f.type,f.key,f.props,null,p.mode,v),v.ref=nr(p,c,f),v.return=p,p=v)}return a(p);case xn:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=o(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=el(f,p.mode,v),c.return=p,p=c}return a(p);case Dt:return N=f._init,E(p,c,N(f._payload),v)}if(ar(f))return k(p,c,f,v);if(Zn(f))return x(p,c,f,v);ho(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,f),c.return=p,p=c):(n(p,c),c=Ri(f,p.mode,v),c.return=p,p=c),a(p)):n(p,c)}return E}var $n=Md(!0),Dd=Md(!1),Wo=Kt(null),Ho=null,Mn=null,pa=null;function fa(){pa=Mn=Ho=null}function ma(e){var t=Wo.current;Z(Wo),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Ho=e,pa=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Te=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(pa!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(Ho===null)throw Error(S(308));Mn=e,Ho.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var en=null;function ha(e){en===null?en=[e]:en.push(e)}function _d(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ha(t)):(n.next=o.next,o.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kt(e,n)}return o=r.interleaved,o===null?(t.next=t,ha(r)):(t.next=o.next,o.next=t),r.interleaved=t,kt(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}function iu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vo(e,t,n,r){var o=e.updateQueue;_t=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(i!==null){var g=o.baseState;a=0,m=d=u=null,s=i;do{var h=s.lane,y=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,x=s;switch(h=t,y=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){g=k.call(y,g,h);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(y,g,h):k,h==null)break e;g=re({},g,h);break e;case 2:_t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=y,u=g):m=m.next=y,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(m===null&&(u=g),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);sn|=a,e.lanes=a,e.memoizedState=g}}function lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var jr={},dt=Kt(jr),_r=Kt(jr),zr=Kt(jr);function tn(e){if(e===jr)throw Error(S(174));return e}function va(e,t){switch(q(zr,t),q(_r,e),q(dt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}Z(dt),q(dt,t)}function Un(){Z(dt),Z(_r),Z(zr)}function Td(e){tn(zr.current);var t=tn(dt.current),n=dl(t,e.type);t!==n&&(q(_r,e),q(dt,n))}function ya(e){_r.current===e&&(Z(dt),Z(_r))}var te=Kt(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xi=[];function xa(){for(var e=0;e<Xi.length;e++)Xi[e]._workInProgressVersionPrimary=null;Xi.length=0}var bo=Et.ReactCurrentDispatcher,Gi=Et.ReactCurrentBatchConfig,an=0,ne=null,ae=null,pe=null,Ko=!1,hr=!1,Tr=0,Qf=0;function we(){throw Error(S(321))}function ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function wa(e,t,n,r,o,i){if(an=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bo.current=e===null||e.memoizedState===null?Rf:em,e=n(r,o),hr){i=0;do{if(hr=!1,Tr=0,25<=i)throw Error(S(301));i+=1,pe=ae=null,t.updateQueue=null,bo.current=tm,e=n(r,o)}while(hr)}if(bo.current=Xo,t=ae!==null&&ae.next!==null,an=0,pe=ae=ne=null,Ko=!1,t)throw Error(S(300));return e}function Ea(){var e=Tr!==0;return Tr=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=e:pe=pe.next=e,pe}function Qe(){if(ae===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=pe===null?ne.memoizedState:pe.next;if(t!==null)pe=t,ae=e;else{if(e===null)throw Error(S(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},pe===null?ne.memoizedState=pe=e:pe=pe.next=e}return pe}function Br(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=Qe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,d=i;do{var m=d.lane;if((an&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,ne.lanes|=m,sn|=m}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,ot(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,sn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qi(e){var t=Qe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);ot(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bd(){}function Pd(e,t){var n=ne,r=Qe(),o=t(),i=!ot(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,ba(Fd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Pr(9,Id.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(S(349));(an&30)!==0||Ld(n,t,o)}return o}function Ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Id(e,t,n,r){t.value=n,t.getSnapshot=r,Od(t)&&jd(e)}function Fd(e,t,n){return n(function(){Od(t)&&jd(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function jd(e){var t=kt(e,1);t!==null&&rt(t,e,1,-1)}function au(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Zf.bind(null,ne,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $d(){return Qe().memoizedState}function No(e,t,n,r){var o=at();ne.flags|=e,o.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function ii(e,t,n,r){var o=Qe();r=r===void 0?null:r;var i=void 0;if(ae!==null){var a=ae.memoizedState;if(i=a.destroy,r!==null&&ka(r,a.deps)){o.memoizedState=Pr(t,n,i,r);return}}ne.flags|=e,o.memoizedState=Pr(1|t,n,i,r)}function su(e,t){return No(8390656,8,e,t)}function ba(e,t){return ii(2048,8,e,t)}function Ud(e,t){return ii(4,2,e,t)}function Wd(e,t){return ii(4,4,e,t)}function Hd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vd(e,t,n){return n=n!=null?n.concat([e]):null,ii(4,4,Hd.bind(null,t,e),n)}function Na(){}function Jd(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kd(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xd(e,t,n){return(an&21)===0?(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n):(ot(n,t)||(n=Zu(),ne.lanes|=n,sn|=n,e.baseState=!0),t)}function qf(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Gi.transition;Gi.transition={};try{e(!1),t()}finally{K=n,Gi.transition=r}}function Gd(){return Qe().memoizedState}function Yf(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qd(e))qd(t,n);else if(n=_d(e,t,n,r),n!==null){var o=Me();rt(n,e,r,o),Yd(n,t,r)}}function Zf(e,t,n){var r=Ut(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qd(e))qd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,ot(s,a)){var u=t.interleaved;u===null?(o.next=o,ha(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}n=_d(e,t,o,r),n!==null&&(o=Me(),rt(n,e,r,o),Yd(n,t,r))}}function Qd(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function qd(e,t){hr=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}var Xo={readContext:Ge,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Rf={readContext:Ge,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,No(4194308,4,Hd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yf.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:au,useDebugValue:Na,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=au(!1),t=e[0];return e=qf.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=at();if(R){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),fe===null)throw Error(S(349));(an&30)!==0||Ld(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,su(Fd.bind(null,r,i,e),[e]),r.flags|=2048,Pr(9,Id.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=at(),t=fe.identifierPrefix;if(R){var n=gt,r=ht;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},em={readContext:Ge,useCallback:Jd,useContext:Ge,useEffect:ba,useImperativeHandle:Vd,useInsertionEffect:Ud,useLayoutEffect:Wd,useMemo:Kd,useReducer:Qi,useRef:$d,useState:function(){return Qi(Br)},useDebugValue:Na,useDeferredValue:function(e){var t=Qe();return Xd(t,ae.memoizedState,e)},useTransition:function(){var e=Qi(Br)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Bd,useSyncExternalStore:Pd,useId:Gd,unstable_isNewReconciler:!1},tm={readContext:Ge,useCallback:Jd,useContext:Ge,useEffect:ba,useImperativeHandle:Vd,useInsertionEffect:Ud,useLayoutEffect:Wd,useMemo:Kd,useReducer:qi,useRef:$d,useState:function(){return qi(Br)},useDebugValue:Na,useDeferredValue:function(e){var t=Qe();return ae===null?t.memoizedState=e:Xd(t,ae.memoizedState,e)},useTransition:function(){var e=qi(Br)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Bd,useSyncExternalStore:Pd,useId:Gd,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=Ut(e),i=vt(r,o);i.payload=t,n!=null&&(i.callback=n),t=jt(e,i,o),t!==null&&(rt(t,e,o,r),Eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=Ut(e),i=vt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=jt(e,i,o),t!==null&&(rt(t,e,o,r),Eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=Ut(e),o=vt(n,r);o.tag=2,t!=null&&(o.callback=t),t=jt(e,o,r),t!==null&&(rt(t,e,r,n),Eo(t,e,r))}};function uu(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(o,i):!0}function Zd(e,t,n){var r=!1,o=Vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(o=Pe(t)?on:Ne.current,r=t.contextTypes,i=(r=r!=null)?On(e,o):Vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function Tl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ga(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ge(i):(i=Pe(t)?on:Ne.current,o.context=On(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&li.enqueueReplaceState(o,o.state,null),Vo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=_p(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nm=typeof WeakMap=="function"?WeakMap:Map;function Rd(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qo||(Qo=!0,Hl=r),Bl(e,t)},n}function ec(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=gm.bind(null,e,t,n),t.then(e,e))}function pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var rm=Et.ReactCurrentOwner,Te=!1;function Ae(e,t,n,r){t.child=e===null?Dd(t,null,n,r):$n(t,e.child,n,r)}function mu(e,t,n,r,o){n=n.render;var i=t.ref;return Ln(t,o),r=wa(e,t,n,r,i,o),n=Ea(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(R&&n&&ua(t),t.flags|=1,Ae(e,t,r,o),t.child)}function hu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ta(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,tc(e,t,i,r,o)):(e=Mo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(a,r)&&e.ref===t.ref)return wt(e,t,o)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Cr(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Te=!0);else return t.lanes=e.lanes,wt(e,t,o)}return Pl(e,t,n,r,o)}function nc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(_n,Fe),Fe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(_n,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(_n,Fe),Fe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(_n,Fe),Fe|=r;return Ae(e,t,o,n),t.child}function rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,n,r,o){var i=Pe(n)?on:Ne.current;return i=On(t,i),Ln(t,o),n=wa(e,t,n,r,i,o),r=Ea(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(R&&r&&ua(t),t.flags|=1,Ae(e,t,n,o),t.child)}function gu(e,t,n,r,o){if(Pe(n)){var i=!0;jo(t)}else i=!1;if(Ln(t,o),t.stateNode===null)So(e,t),Zd(t,n,r),Tl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Pe(n)?on:Ne.current,d=On(t,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&du(t,a,r,d),_t=!1;var h=t.memoizedState;a.state=h,Vo(t,r,a,o),u=t.memoizedState,s!==r||h!==u||Be.current||_t?(typeof m=="function"&&(zl(t,n,m,r),u=t.memoizedState),(s=_t||uu(t,n,s,r,h,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,zd(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Re(t.type,s),a.props=d,g=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ge(u):(u=Pe(n)?on:Ne.current,u=On(t,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||h!==u)&&du(t,a,r,u),_t=!1,h=t.memoizedState,a.state=h,Vo(t,r,a,o);var k=t.memoizedState;s!==g||h!==k||Be.current||_t?(typeof y=="function"&&(zl(t,n,y,r),k=t.memoizedState),(d=_t||uu(t,n,d,r,h,k,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ll(e,t,n,r,i,o)}function Ll(e,t,n,r,o,i){rc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&tu(t,n,!1),wt(e,t,i);r=t.stateNode,rm.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=$n(t,e.child,null,i),t.child=$n(t,null,s,i)):Ae(e,t,s,i),t.memoizedState=r.state,o&&tu(t,n,!0),t.child}function oc(e){var t=e.stateNode;t.pendingContext?eu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eu(e,t.context,!1),va(e,t.containerInfo)}function vu(e,t,n,r,o){return jn(),ca(o),t.flags|=256,Ae(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ic(e,t,n){var r=t.pendingProps,o=te.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(te,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ui(a,r,0,null),e=rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fl(n),t.memoizedState=Il,e):Sa(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return om(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Wt(s,i):(i=rn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Fl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sa(e,t){return t=ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function go(e,t,n,r){return r!==null&&ca(r),$n(t,e.child,null,n),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function om(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(S(422))),go(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ui({mode:"visible",children:r.children},o,0,null),i=rn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&$n(t,e.child,null,a),t.child.memoizedState=Fl(a),t.memoizedState=Il,i);if((t.mode&1)===0)return go(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=Yi(i,r,void 0),go(e,t,a,r)}if(s=(a&e.childLanes)!==0,Te||s){if(r=fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kt(e,o),rt(r,e,o,-1))}return za(),r=Yi(Error(S(421))),go(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=vm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Ot(o.nextSibling),je=t,R=!0,tt=null,e!==null&&(Ve[Je++]=ht,Ve[Je++]=gt,Ve[Je++]=ln,ht=e.id,gt=e.overflow,ln=t),t=Sa(t,r.children),t.flags|=4096,t)}function yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function Zi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function lc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ae(e,t,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yu(e,n,t);else if(e.tag===19)yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Zi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Zi(t,!0,n,null,i);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function im(e,t,n){switch(t.tag){case 3:oc(t),jn();break;case 5:Td(t);break;case 1:Pe(t.type)&&jo(t);break;case 4:va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(Wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ic(e,t,n):(q(te,te.current&1),e=wt(e,t,n),e!==null?e.sibling:null);q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return lc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,n)}return wt(e,t,n)}var ac,Ol,sc,uc;ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};sc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(dt.current);var i=null;switch(n){case"input":o=ll(e,o),r=ll(e,r),i=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":o=ul(e,o),r=ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fo)}cl(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(xr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(xr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Y("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lm(e,t,n){var r=t.pendingProps;switch(da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Pe(t.type)&&Oo(),Ee(t),null;case 3:return r=t.stateNode,Un(),Z(Be),Z(Ne),xa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tt!==null&&(Kl(tt),tt=null))),Ol(e,t),Ee(t),null;case 5:ya(t);var o=tn(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ee(t),null}if(e=tn(dt.current),mo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[st]=t,r[Dr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<ur.length;o++)Y(ur[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Cs(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Ms(r,i),Y("invalid",r)}cl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",""+s]):xr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Y("scroll",r)}switch(n){case"input":eo(r),As(r,i,!0);break;case"textarea":eo(r),Ds(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[st]=t,e[Dr]=r,ac(e,t,!1,!1),t.stateNode=e;e:{switch(a=pl(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<ur.length;o++)Y(ur[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":Cs(e,r),o=ll(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Ms(e,r),o=ul(e,r),Y("invalid",e);break;default:o=r}cl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?$u(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ou(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&kr(e,u):typeof u=="number"&&kr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Y("scroll",e):u!=null&&Ql(e,i,u,a))}switch(n){case"input":eo(e),As(e,r,!1);break;case"textarea":eo(e),Ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=tn(zr.current),tn(dt.current),mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return Ee(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&Oe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ad(),jn(),t.flags|=98560,i=!1;else if(i=mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[st]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else tt!==null&&(Kl(tt),tt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?se===0&&(se=3):za())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Un(),Ol(e,t),e===null&&Ar(t.stateNode.containerInfo),Ee(t),null;case 10:return ma(t.type._context),Ee(t),null;case 17:return Pe(t.type)&&Oo(),Ee(t),null;case 19:if(Z(te),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)rr(i,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Jo(e),a!==null){for(t.flags|=128,rr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>Hn&&(t.flags|=128,r=!0,rr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!R)return Ee(t),null}else 2*ie()-i.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,rr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=te.current,q(te,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return _a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Fe&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function am(e,t){switch(da(t),t.tag){case 1:return Pe(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),Z(Be),Z(Ne),xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ya(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return Un(),null;case 10:return ma(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var vo=!1,be=!1,sm=typeof WeakSet=="function"?WeakSet:Set,z=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function jl(e,t,n){try{n()}catch(r){oe(e,t,r)}}var xu=!1;function um(e,t){if(El=Po,e=md(),sa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,m=0,g=e,h=null;t:for(;;){for(var y;g!==n||o!==0&&g.nodeType!==3||(s=a+o),g!==i||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===e)break t;if(h===n&&++d===o&&(s=a),h===i&&++m===r&&(u=a),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},Po=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,E=k.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Re(t.type,x),E);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){oe(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return k=xu,xu=!1,k}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&jl(t,n,i)}o=o.next}while(o!==r)}}function ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $l(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function dc(e){var t=e.alternate;t!==null&&(e.alternate=null,dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Dr],delete t[Cl],delete t[Jf],delete t[Kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cc(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}var he=null,et=!1;function Mt(e,t,n){for(n=n.child;n!==null;)pc(e,t,n),n=n.sibling}function pc(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 5:be||Dn(n,t);case 6:var r=he,o=et;he=null,Mt(e,t,n),he=r,et=o,he!==null&&(et?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(et?(e=he,n=n.stateNode,e.nodeType===8?Ji(e.parentNode,n):e.nodeType===1&&Ji(e,n),Nr(e)):Ji(he,n.stateNode));break;case 4:r=he,o=et,he=n.stateNode.containerInfo,et=!0,Mt(e,t,n),he=r,et=o;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&jl(n,t,a),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!be&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Mt(e,t,n),be=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sm),t.forEach(function(r){var o=ym.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,et=!1;break e;case 3:he=s.stateNode.containerInfo,et=!0;break e;case 4:he=s.stateNode.containerInfo,et=!0;break e}s=s.return}if(he===null)throw Error(S(160));pc(i,a,o),he=null,et=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){oe(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),lt(e),r&4){try{gr(3,e,e.return),ai(3,e)}catch(x){oe(e,e.return,x)}try{gr(5,e,e.return)}catch(x){oe(e,e.return,x)}}break;case 1:Ze(t,e),lt(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(Ze(t,e),lt(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var o=e.stateNode;try{kr(o,"")}catch(x){oe(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Lu(o,i),pl(s,a);var d=pl(s,i);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?$u(o,g):m==="dangerouslySetInnerHTML"?Ou(o,g):m==="children"?kr(o,g):Ql(o,m,g,d)}switch(s){case"input":al(o,i);break;case"textarea":Iu(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?zn(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?zn(o,!!i.multiple,i.defaultValue,!0):zn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Dr]=i}catch(x){oe(e,e.return,x)}}break;case 6:if(Ze(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){oe(e,e.return,x)}}break;case 3:if(Ze(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(x){oe(e,e.return,x)}break;case 4:Ze(t,e),lt(e);break;case 13:Ze(t,e),lt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ma=ie())),r&4&&wu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(be=(d=be)||m,Ze(t,e),be=d):Ze(t,e),lt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&(e.mode&1)!==0)for(z=e,m=e.child;m!==null;){for(g=z=m;z!==null;){switch(h=z,y=h.child,h.tag){case 0:case 11:case 14:case 15:gr(4,h,h.return);break;case 1:Dn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){oe(r,n,x)}}break;case 5:Dn(h,h.return);break;case 22:if(h.memoizedState!==null){bu(g);continue}}y!==null?(y.return=h,z=y):bu(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{o=g.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ju("display",a))}catch(x){oe(e,e.return,x)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(x){oe(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ze(t,e),lt(e),r&4&&wu(e);break;case 21:break;default:Ze(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(kr(o,""),r.flags&=-33);var i=ku(e);Wl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ku(e);Ul(e,s,a);break;default:throw Error(S(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dm(e,t,n){z=e,mc(e,t,n)}function mc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||vo;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||be;s=vo;var d=be;if(vo=a,(be=u)&&!d)for(z=o;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?Nu(o):u!==null?(u.return=a,z=u):Nu(o);for(;i!==null;)z=i,mc(i,t,n),i=i.sibling;z=o,vo=s,be=d}Eu(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,z=i):Eu(e,t,n)}}function Eu(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:be||ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&lu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lu(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Nr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}be||t.flags&512&&$l(t)}catch(h){oe(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function bu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Nu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ai(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){oe(t,o,u)}}var i=t.return;try{$l(t)}catch(u){oe(t,i,u)}break;case 5:var a=t.return;try{$l(t)}catch(u){oe(t,a,u)}}}catch(u){oe(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var cm=Math.ceil,Go=Et.ReactCurrentDispatcher,Ca=Et.ReactCurrentOwner,Xe=Et.ReactCurrentBatchConfig,H=0,fe=null,le=null,ge=0,Fe=0,_n=Kt(0),se=0,Lr=null,sn=0,si=0,Aa=0,vr=null,ze=null,Ma=0,Hn=1/0,ft=null,Qo=!1,Hl=null,$t=null,yo=!1,Pt=null,qo=0,yr=0,Vl=null,Co=-1,Ao=0;function Me(){return(H&6)!==0?ie():Co!==-1?Co:Co=ie()}function Ut(e){return(e.mode&1)===0?1:(H&2)!==0&&ge!==0?ge&-ge:Gf.transition!==null?(Ao===0&&(Ao=Zu()),Ao):(e=K,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e)}function rt(e,t,n,r){if(50<yr)throw yr=0,Vl=null,Error(S(185));Ir(e,n,r),((H&2)===0||e!==fe)&&(e===fe&&((H&2)===0&&(si|=n),se===4&&Tt(e,ge)),Le(e,r),n===1&&H===0&&(t.mode&1)===0&&(Hn=ie()+500,oi&&Xt()))}function Le(e,t){var n=e.callbackNode;Qp(e,t);var r=Bo(e,e===fe?ge:0);if(r===0)n!==null&&Ts(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ts(n),t===1)e.tag===0?Xf(Su.bind(null,e)):Nd(Su.bind(null,e)),Hf(function(){(H&6)===0&&Xt()}),n=null;else{switch(Ru(r)){case 1:n=ea;break;case 4:n=qu;break;case 16:n=To;break;case 536870912:n=Yu;break;default:n=To}n=Ec(n,hc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hc(e,t){if(Co=-1,Ao=0,(H&6)!==0)throw Error(S(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=Bo(e,e===fe?ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Yo(e,r);else{t=r;var o=H;H|=2;var i=vc();(fe!==e||ge!==t)&&(ft=null,Hn=ie()+500,nn(e,t));do try{mm();break}catch(s){gc(e,s)}while(!0);fa(),Go.current=i,H=o,le!==null?t=0:(fe=null,ge=0,t=se)}if(t!==0){if(t===2&&(o=vl(e),o!==0&&(r=o,t=Jl(e,o))),t===1)throw n=Lr,nn(e,0),Tt(e,r),Le(e,ie()),n;if(t===6)Tt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!pm(o)&&(t=Yo(e,r),t===2&&(i=vl(e),i!==0&&(r=i,t=Jl(e,i))),t===1))throw n=Lr,nn(e,0),Tt(e,r),Le(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Zt(e,ze,ft);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=Ma+500-ie(),10<t)){if(Bo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(Zt.bind(null,e,ze,ft),t);break}Zt(e,ze,ft);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-nt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cm(r/1960))-r,10<r){e.timeoutHandle=Sl(Zt.bind(null,e,ze,ft),r);break}Zt(e,ze,ft);break;case 5:Zt(e,ze,ft);break;default:throw Error(S(329))}}}return Le(e,ie()),e.callbackNode===n?hc.bind(null,e):null}function Jl(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=ze,ze=n,t!==null&&Kl(t)),e}function Kl(e){ze===null?ze=e:ze.push.apply(ze,e)}function pm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ot(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Aa,t&=~si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Su(e){if((H&6)!==0)throw Error(S(327));In();var t=Bo(e,0);if((t&1)===0)return Le(e,ie()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=Lr,nn(e,0),Tt(e,t),Le(e,ie()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,ze,ft),Le(e,ie()),null}function Da(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Hn=ie()+500,oi&&Xt())}}function un(e){Pt!==null&&Pt.tag===0&&(H&6)===0&&In();var t=H;H|=1;var n=Xe.transition,r=K;try{if(Xe.transition=null,K=1,e)return e()}finally{K=r,Xe.transition=n,H=t,(H&6)===0&&Xt()}}function _a(){Fe=_n.current,Z(_n)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wf(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Un(),Z(Be),Z(Ne),xa();break;case 5:ya(r);break;case 4:Un();break;case 13:Z(te);break;case 19:Z(te);break;case 10:ma(r.type._context);break;case 22:case 23:_a()}n=n.return}if(fe=e,le=e=Wt(e.current,null),ge=Fe=t,se=0,Lr=null,Aa=si=sn=0,ze=vr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}en=null}return e}function gc(e,t){do{var n=le;try{if(fa(),bo.current=Xo,Ko){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ko=!1}if(an=0,pe=ae=ne=null,hr=!1,Tr=0,Ca.current=null,n===null||n.return===null){se=1,Lr=t,le=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=ge,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,g=m.tag;if((m.mode&1)===0&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=pu(a);if(y!==null){y.flags&=-257,fu(y,a,s,i,t),y.mode&1&&cu(i,d,t),t=y,u=d;var k=t.updateQueue;if(k===null){var x=new Set;x.add(u),t.updateQueue=x}else k.add(u);break e}else{if((t&1)===0){cu(i,d,t),za();break e}u=Error(S(426))}}else if(R&&s.mode&1){var E=pu(a);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),fu(E,a,s,i,t),ca(Wn(u,s));break e}}i=u=Wn(u,s),se!==4&&(se=2),vr===null?vr=[i]:vr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Rd(i,u,t);iu(i,p);break e;case 1:s=u;var c=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($t===null||!$t.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=ec(i,s,t);iu(i,v);break e}}i=i.return}while(i!==null)}xc(n)}catch(b){t=b,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function vc(){var e=Go.current;return Go.current=Xo,e===null?Xo:e}function za(){(se===0||se===3||se===2)&&(se=4),fe===null||(sn&268435455)===0&&(si&268435455)===0||Tt(fe,ge)}function Yo(e,t){var n=H;H|=2;var r=vc();(fe!==e||ge!==t)&&(ft=null,nn(e,t));do try{fm();break}catch(o){gc(e,o)}while(!0);if(fa(),H=n,Go.current=r,le!==null)throw Error(S(261));return fe=null,ge=0,se}function fm(){for(;le!==null;)yc(le)}function mm(){for(;le!==null&&!$p();)yc(le)}function yc(e){var t=wc(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?xc(e):le=t,Ca.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=lm(n,t,Fe),n!==null){le=n;return}}else{if(n=am(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,le=null;return}}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);se===0&&(se=5)}function Zt(e,t,n){var r=K,o=Xe.transition;try{Xe.transition=null,K=1,hm(e,t,n,r)}finally{Xe.transition=o,K=r}return null}function hm(e,t,n,r){do In();while(Pt!==null);if((H&6)!==0)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(qp(e,i),e===fe&&(le=fe=null,ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yo||(yo=!0,Ec(To,function(){return In(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Xe.transition,Xe.transition=null;var a=K;K=1;var s=H;H|=4,Ca.current=null,um(e,n),fc(n,e),Ff(bl),Po=!!El,bl=El=null,e.current=n,dm(n,e,o),Up(),H=s,K=a,Xe.transition=i}else e.current=n;if(yo&&(yo=!1,Pt=e,qo=o),i=e.pendingLanes,i===0&&($t=null),Vp(n.stateNode,r),Le(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qo)throw Qo=!1,e=Hl,Hl=null,e;return(qo&1)!==0&&e.tag!==0&&In(),i=e.pendingLanes,(i&1)!==0?e===Vl?yr++:(yr=0,Vl=e):yr=0,Xt(),null}function In(){if(Pt!==null){var e=Ru(qo),t=Xe.transition,n=K;try{if(Xe.transition=null,K=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,qo=0,(H&6)!==0)throw Error(S(331));var o=H;for(H|=4,z=e.current;z!==null;){var i=z,a=i.child;if((z.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(z=d;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:gr(8,m,i)}var g=m.child;if(g!==null)g.return=m,z=g;else for(;z!==null;){m=z;var h=m.sibling,y=m.return;if(dc(m),m===d){z=null;break}if(h!==null){h.return=y,z=h;break}z=y}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}z=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:gr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,z=p;break e}z=i.return}}var c=e.current;for(z=c;z!==null;){a=z;var f=a.child;if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,z=f;else e:for(a=c;z!==null;){if(s=z,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ai(9,s)}}catch(b){oe(s,s.return,b)}if(s===a){z=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}if(H=o,Xt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Ro,e)}catch{}r=!0}return r}finally{K=n,Xe.transition=t}}return!1}function Cu(e,t,n){t=Wn(n,t),t=Rd(e,t,1),e=jt(e,t,1),t=Me(),e!==null&&(Ir(e,1,t),Le(e,t))}function oe(e,t,n){if(e.tag===3)Cu(e,e,n);else for(;t!==null;){if(t.tag===3){Cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Wn(n,e),e=ec(t,e,1),t=jt(t,e,1),e=Me(),t!==null&&(Ir(t,1,e),Le(t,e));break}}t=t.return}}function gm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(se===4||se===3&&(ge&130023424)===ge&&500>ie()-Ma?nn(e,0):Aa|=n),Le(e,t)}function kc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ro,ro<<=1,(ro&130023424)===0&&(ro=4194304)));var n=Me();e=kt(e,t),e!==null&&(Ir(e,t,n),Le(e,n))}function vm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kc(e,n)}function ym(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),kc(e,n)}var wc;wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Te=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Te=!1,im(e,t,n);Te=(e.flags&131072)!==0}else Te=!1,R&&(t.flags&1048576)!==0&&Sd(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var o=On(t,Ne.current);Ln(t,n),o=wa(null,t,r,e,o,n);var i=Ea();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,jo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ga(t),o.updater=li,t.stateNode=o,o._reactInternals=t,Tl(t,r,e,n),t=Ll(null,t,r,!0,i,n)):(t.tag=0,R&&i&&ua(t),Ae(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=km(r),e=Re(r,e),o){case 0:t=Pl(null,t,r,e,n);break e;case 1:t=gu(null,t,r,e,n);break e;case 11:t=mu(null,t,r,e,n);break e;case 14:t=hu(null,t,r,Re(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Pl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),gu(e,t,r,o,n);case 3:e:{if(oc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,zd(e,t),Vo(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Wn(Error(S(423)),t),t=vu(e,t,r,n,o);break e}else if(r!==o){o=Wn(Error(S(424)),t),t=vu(e,t,r,n,o);break e}else for(Oe=Ot(t.stateNode.containerInfo.firstChild),je=t,R=!0,tt=null,n=Dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===o){t=wt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return Td(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Nl(r,o)?a=null:i!==null&&Nl(r,i)&&(t.flags|=32),rc(e,t),Ae(e,t,a,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return ic(e,t,n);case 4:return va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$n(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),mu(e,t,r,o,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,q(Wo,r._currentValue),r._currentValue=a,i!==null)if(ot(i.value,a)){if(i.children===o.children&&!Be.current){t=wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=vt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),_l(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),_l(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ae(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ln(t,n),o=Ge(o),r=r(o),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,o=Re(r,t.pendingProps),o=Re(r.type,o),hu(e,t,r,o,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),So(e,t),t.tag=1,Pe(r)?(e=!0,jo(t)):e=!1,Ln(t,n),Zd(t,r,o),Tl(t,r,o,n),Ll(null,t,r,!0,e,n);case 19:return lc(e,t,n);case 22:return nc(e,t,n)}throw Error(S(156,t.tag))};function Ec(e,t){return Qu(e,t)}function xm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new xm(e,t,n,r)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function km(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yl)return 11;if(e===Zl)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mo(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ta(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case kn:return rn(n.children,o,i,t);case ql:a=8,o|=8;break;case nl:return e=Ke(12,n,t,o|2),e.elementType=nl,e.lanes=i,e;case rl:return e=Ke(13,n,t,o),e.elementType=rl,e.lanes=i,e;case ol:return e=Ke(19,n,t,o),e.elementType=ol,e.lanes=i,e;case Tu:return ui(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _u:a=10;break e;case zu:a=9;break e;case Yl:a=11;break e;case Zl:a=14;break e;case Dt:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ke(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function rn(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function ui(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=Tu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ri(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function el(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ba(e,t,n,r,o,i,a,s,u){return e=new wm(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ga(i),e}function Em(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bc(e){if(!e)return Vt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Pe(n))return bd(e,n,t)}return t}function Nc(e,t,n,r,o,i,a,s,u){return e=Ba(n,r,!0,e,o,i,a,s,u),e.context=bc(null),n=e.current,r=Me(),o=Ut(n),i=vt(r,o),i.callback=t??null,jt(n,i,o),e.current.lanes=o,Ir(e,o,r),Le(e,r),e}function di(e,t,n,r){var o=t.current,i=Me(),a=Ut(o);return n=bc(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(o,t,a),e!==null&&(rt(e,o,a,i),Eo(e,o,a)),a}function Zo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pa(e,t){Au(e,t),(e=e.alternate)&&Au(e,t)}function bm(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}ci.prototype.render=La.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));di(e,t,null,null)};ci.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){di(null,e,null,null)}),t[xt]=null}};function ci(e){this._internalRoot=e}ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=nd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&od(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function Nm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Zo(a);i.call(d)}}var a=Nc(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=a,e[xt]=a.current,Ar(e.nodeType===8?e.parentNode:e),un(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Zo(u);s.call(d)}}var u=Ba(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=u,e[xt]=u.current,Ar(e.nodeType===8?e.parentNode:e),un(function(){di(t,u,n,r)}),u}function fi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=Zo(a);s.call(u)}}di(t,a,e,o)}else a=Nm(n,t,e,o,r);return Zo(a)}ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(ta(t,n|1),Le(t,ie()),(H&6)===0&&(Hn=ie()+500,Xt()))}break;case 13:un(function(){var r=kt(e,1);if(r!==null){var o=Me();rt(r,e,1,o)}}),Pa(e,1)}};na=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Me();rt(t,e,134217728,n)}Pa(e,134217728)}};td=function(e){if(e.tag===13){var t=Ut(e),n=kt(e,t);if(n!==null){var r=Me();rt(n,e,t,r)}Pa(e,t)}};nd=function(){return K};rd=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};ml=function(e,t,n){switch(t){case"input":if(al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ri(r);if(!o)throw Error(S(90));Pu(r),al(r,o)}}}break;case"textarea":Iu(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};Hu=Da;Vu=un;var Sm={usingClientEntryPoint:!1,Events:[Or,Nn,ri,Uu,Wu,Da]},or={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cm={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xu(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ir=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ir.isDisabled&&ir.supportsFiber))try{Ro=ir.inject(Cm),ut=ir}catch{}var ir;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(t))throw Error(S(200));return Em(e,t,null,n)};We.createRoot=function(e,t){if(!Ia(e))throw Error(S(299));var n=!1,r="",o=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ba(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,Ar(e.nodeType===8?e.parentNode:e),new La(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Xu(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return un(e)};We.hydrate=function(e,t,n){if(!pi(t))throw Error(S(200));return fi(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Ia(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Nc(t,null,e,1,n??null,o,!1,i,a),e[xt]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ci(t)};We.render=function(e,t,n){if(!pi(t))throw Error(S(200));return fi(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!pi(e))throw Error(S(40));return e._reactRootContainer?(un(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};We.unstable_batchedUpdates=Da;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pi(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return fi(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426"});var Dc=Qt((L0,Mc)=>{"use strict";function Ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac)}catch(e){console.error(e)}}Ac(),Mc.exports=Cc()});var zc=Qt(Fa=>{"use strict";var _c=Dc();Fa.createRoot=_c.createRoot,Fa.hydrateRoot=_c.hydrateRoot;var I0});var l=Ya(bi()),Kc=Ya(zc()),mi=Date.now();function me(){return mi+=1,mi}var hi=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function Tc(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(o=>o.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function Am(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function O(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function qe(e){let[t,n]=e.split(":").map(Number);return t*60+n}function Nt(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function St(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function Oa(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Wa(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(O(0)))n=0;else if(t.has(O(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,o=n,i=0,a=!0,s=!1;for(;;)if(t.has(O(o)))r++,i++,!a&&i>=7&&(a=!0,i=0),o-=1;else if(a)a=!1,i=0,s=!0,o-=1;else break;return{streak:r,freezeUsed:s}}var Mm=[15,30,45,60,90,120],Xc="tasksh.sound.v1",$r=null;function Dm(){if(!$r){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;$r=new e}return $r.state==="suspended"&&$r.resume(),$r}function Gc(){try{let e=localStorage.getItem(Xc);return e===null?!0:e==="1"}catch{return!0}}function _m(e){try{localStorage.setItem(Xc,e?"1":"0")}catch{}}function fn(e){if(!Gc())return;let t=Dm();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:o=0,dur:i=.08,type:a="sine",gain:s=.05})=>{let u=t.createOscillator(),d=t.createGain();u.type=a,u.frequency.setValueAtTime(r,n+o),d.gain.setValueAtTime(1e-4,n+o),d.gain.exponentialRampToValueAtTime(s,n+o+.008),d.gain.exponentialRampToValueAtTime(1e-4,n+o+i),u.connect(d),d.connect(t.destination),u.start(n+o),u.stop(n+o+i+.02)})}var F={click:()=>fn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>fn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>fn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>fn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>fn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>fn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function zm(){let[e,t]=(0,l.useState)(Gc());return[e,()=>{let r=!e;t(r),_m(r),r&&fn([{freq:720,dur:.05,gain:.04}])}]}function Tm(e,t=550){let[n,r]=(0,l.useState)(e),o=(0,l.useRef)(e),i=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let a=o.current,s=e;if(a===s)return;let u=performance.now(),d=g=>1-Math.pow(1-g,3),m=g=>{let h=g-u,y=Math.min(1,h/t),k=d(y);r(Math.round(a+(s-a)*k)),y<1?i.current=requestAnimationFrame(m):o.current=s};return i.current=requestAnimationFrame(m),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function bt({value:e,className:t,suffix:n=""}){let r=Tm(e);return l.default.createElement("span",{className:t},r,n)}function Bm({axes:e,size:t=220,maxValue:n}){let[r,o]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let E=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(E)},[]);let i=e.length,a=t/2,s=t/2,u=t/2-(e.length>6?46:34),d=n??Math.max(1,...e.map(E=>E.value)),m=E=>Math.PI*2*E/i-Math.PI/2,g=(E,p)=>{let c=m(E);return[a+Math.cos(c)*u*p,s+Math.sin(c)*u*p]},h=i>6?46:22,y=[.25,.5,.75,1],x=e.map((E,p)=>g(p,r?Math.max(.04,E.value/d):.02)).map((E,p)=>`${p===0?"M":"L"}${E[0].toFixed(1)},${E[1].toFixed(1)}`).join(" ")+"Z";return l.default.createElement("svg",{viewBox:`${-h} 0 ${t+h*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},y.map((E,p)=>{let f=e.map((v,b)=>g(b,E)).map((v,b)=>`${b===0?"M":"L"}${v[0].toFixed(1)},${v[1].toFixed(1)}`).join(" ")+"Z";return l.default.createElement("path",{key:p,d:f,className:"radar-ring"})}),e.map((E,p)=>{let c=g(p,1);return l.default.createElement("line",{key:p,x1:a,y1:s,x2:c[0],y2:c[1],className:"radar-spoke"})}),l.default.createElement("path",{d:x,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((E,p)=>{let c=g(p,1.19),f=g(p,r?Math.max(.04,E.value/d):.02),v=Math.cos(m(p)),b=v>.25?"start":v<-.25?"end":"middle";return l.default.createElement("g",{key:E.key||p},l.default.createElement("circle",{cx:f[0],cy:f[1],r:i>6?2.8:3.5,fill:E.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),l.default.createElement("text",{x:c[0],y:c[1],textAnchor:b,dominantBaseline:"middle",className:"radar-label"},E.label))}))}function Ha({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:o="#1E2228",label:i,sublabel:a}){let[s,u]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let x=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(x)},[]);let d=t/2-n,m=2*Math.PI*d,g=Math.max(0,Math.min(100,e)),h=m-(s?g/100:0)*m,y=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return l.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},l.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},l.default.createElement("circle",{cx:t/2,cy:t/2,r:d,fill:"none",stroke:o,strokeWidth:n}),l.default.createElement("circle",{cx:t/2,cy:t/2,r:d,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:m,strokeDashoffset:h,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),l.default.createElement("div",{className:"radial-progress-center"},i&&l.default.createElement("span",{className:"radial-progress-label",style:{fontSize:y}},i),a&&l.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},a)))}function Qc({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:o}){let[i,a]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let h=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(h)},[]);let s=t/2-n/2,u=2*Math.PI*s,d=Math.max(1e-6,e.reduce((h,y)=>h+Math.max(0,y.value),0)),m=0,g=e.map(h=>{let y=Math.max(0,h.value),k=y/d,x=i?k*u:0,E=u-x,p=m/d*360;return m+=y,{...h,dash:x,gap:E,rotation:p,frac:k}});return l.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},l.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},l.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),g.map((h,y)=>l.default.createElement("circle",{key:h.key||y,cx:t/2,cy:t/2,r:s,fill:"none",stroke:h.color,strokeWidth:n,strokeDasharray:`${h.dash} ${h.gap}`,strokeDashoffset:0,transform:`rotate(${h.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:g.length>1?"butt":"round"}))),l.default.createElement("div",{className:"donut-center"},r!==void 0&&l.default.createElement("span",{className:"donut-center-label"},r),o&&l.default.createElement("span",{className:"donut-center-sublabel"},o)))}function Pm({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],o=0,i=t*7,a=Array.from({length:i},(m,g)=>o-(i-1-g)),s=Math.max(1,...a.map(m=>e[O(m)]||0)),u=[];for(let m=0;m<t;m++)u.push(a.slice(m*7,m*7+7));let d=m=>{if(!m)return 0;let g=m/s;return g>.75?4:g>.5?3:g>.25?2:1};return l.default.createElement("div",{className:"heatmap-wrap"},l.default.createElement("div",{className:"heatmap-grid"},u.map((m,g)=>l.default.createElement("div",{className:"heatmap-col",key:g},m.map((h,y)=>{let k=O(h),x=e[k]||0,E=d(x);return l.default.createElement("span",{key:y,className:`heatmap-cell ${h===0?"today":""}`,style:{background:r[E],animationDelay:`${(g*7+y)*4}ms`},title:`${k}: ${x} completed`})})))),l.default.createElement("div",{className:"heatmap-legend"},l.default.createElement("span",null,"less"),r.map((m,g)=>l.default.createElement("span",{key:g,className:"heatmap-legend-cell",style:{background:m}})),l.default.createElement("span",null,"more")))}function Lm(e){let t=[],n=[];for(let r of e){let o=t.findIndex(i=>r.start>=i);o===-1?(o=t.length,t.push(r.end)):t[o]=r.end,n.push({...r,lane:o})}return{placed:n,laneCount:Math.max(1,t.length)}}function Im({routines:e,nowMinutes:t,doneToday:n=0}){let[r,o]=(0,l.useState)(!1),[i,a]=(0,l.useState)(0),[s,u]=(0,l.useState)(0),d=(0,l.useRef)(null),m=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let C=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(C)},[]),(0,l.useEffect)(()=>{if(!d.current)return;let C=d.current,T=new ResizeObserver(ee=>{for(let ye of ee)a(ye.contentRect.width)});return T.observe(C),a(C.getBoundingClientRect().width),()=>T.disconnect()},[]);let g=1440,h=O(0),y=e.map(C=>{let T=qe(C.time);return{r:C,start:T,end:T+Math.max(1,C.duration)}}),{placed:k,laneCount:x}=Lm(y),p=Math.max(i,24*82),c=p/g,f=p>i+1,v=t*c;(0,l.useEffect)(()=>{if(!d.current||!i||m.current)return;if(!f){m.current=!0;return}let C=d.current,T=Math.max(0,Math.min(v-i/2,p-i));C.scrollTo({left:T,behavior:"auto"}),m.current=!0},[i,v,p,f]),(0,l.useEffect)(()=>{let C=d.current;if(!C)return;let T=0,ee=()=>{T||(T=requestAnimationFrame(()=>{u(C.scrollLeft),T=0}))};return C.addEventListener("scroll",ee,{passive:!0}),u(C.scrollLeft),()=>{C.removeEventListener("scroll",ee),cancelAnimationFrame(T)}},[i]);let b=()=>{let C=d.current;C&&(C.scrollTo({left:Math.max(0,Math.min(v-i/2,p-i)),behavior:"smooth"}),F.click())},N=38,_=6,M=8,j=M*2+x*N+(x-1)*_,L=c*60>=40?1:3,P=[];for(let C=0;C<=24;C+=L)P.push(C);let I=C=>{let T=C%24;return T===0?"12a":T===12?"12p":T>12?`${T-12}p`:`${T}a`},w=e.length,B=w?Math.round(n/w*100):0;return l.default.createElement("div",{className:"timeline-wrap"},l.default.createElement("div",{className:"timeline-head"},l.default.createElement("div",{className:"timeline-head-left"},l.default.createElement("span",{className:"timeline-title"},"today's schedule"),w>0&&l.default.createElement("span",{className:"timeline-count"},n,"/",w," done")),f&&l.default.createElement("button",{className:"timeline-jump",onClick:b,title:"Jump to now"},"now")),w>0&&l.default.createElement("div",{className:"timeline-progress"},l.default.createElement("div",{className:"timeline-progress-fill",style:{width:r?`${B}%`:"0%"}})),l.default.createElement("div",{className:"timeline-scroll",ref:d},l.default.createElement("div",{className:"timeline-inner",style:{width:p}},l.default.createElement("div",{className:"timeline-hours"},P.map(C=>l.default.createElement("div",{key:C,className:"timeline-hour",style:{left:C*60*c}},l.default.createElement("span",null,I(C))))),l.default.createElement("div",{className:"timeline-track",style:{height:j}},l.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*c}}),l.default.createElement("div",{className:"timeline-night",style:{left:1320*c,width:120*c}}),P.map(C=>l.default.createElement("div",{key:C,className:`timeline-gridline ${C%6===0?"major":""}`,style:{left:C*60*c}})),l.default.createElement("div",{className:"timeline-elapsed",style:{width:r?v:0}}),k.map(({r:C,start:T,lane:ee},ye)=>{let V=T*c,J=Math.max(1,C.duration)*c,xe=Math.max(4,Math.min(J,p-V)),Se=(C.history||[]).includes(h),Gt=Kn(C.id),pt=Math.max(V,s),Ct=Math.min(V+xe,s+i),$=Math.max(0,Ct-pt)>38,X=Math.max(0,Math.min(s-V,xe-46)),G=t>=T&&t<T+C.duration;return l.default.createElement("div",{key:C.id,className:`timeline-block ${Se?"done":""} ${G?"active":""}`,style:{left:V,top:M+ee*(N+_),width:r?xe:0,height:N,transitionDelay:`${Math.min(ye*18,260)}ms`,background:Se?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${Gt}, ${Gt}C4)`,boxShadow:Se?"none":`0 2px 10px ${Gt}44`},title:`${C.label} \xB7 ${Nt(T)} \xB7 ${St(C.duration)}${Se?" \xB7 done":""}`},$&&l.default.createElement("span",{className:"timeline-block-label",style:X>0?{paddingLeft:X+8}:void 0},Se&&l.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),C.label))}),l.default.createElement("div",{className:"timeline-now",style:{left:v}})))),f&&l.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var Fm=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[O(-1),O(-2),O(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[O(-1),O(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[O(0),O(-1),O(-2),O(-3),O(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[O(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function Va(){let[e,t]=(0,l.useState)(Tc());return(0,l.useEffect)(()=>{let n=setInterval(()=>t(Tc()),1e3);return()=>clearInterval(n)},[]),e}function Ja(e,t){return(0,l.useMemo)(()=>{let n=[...e].sort((i,a)=>qe(i.time)-qe(a.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&qe(n[i].time)<=t;i++)r=i;let o=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[o].id}},[e,t])}function Om({routine:e,status:t,index:n,onDelete:r,onToggleToday:o,onSave:i}){let a=qe(e.time),s=a+e.duration,{streak:u,freezeUsed:d}=Wa(e.history),m=(e.history||[]).includes(O(0)),[g,h]=(0,l.useState)(0),y=(0,l.useRef)(!1),k=(0,l.useRef)(0),x=(0,l.useRef)(0),E=(0,l.useRef)(null),p=(0,l.useRef)(!1),[c,f]=(0,l.useState)(!1),[v,b]=(0,l.useState)(!1),[N,_]=(0,l.useState)(e.label),[M,j]=(0,l.useState)(e.time),[L,P]=(0,l.useState)(e.duration),[I,w]=(0,l.useState)(e.alternatives||[]),B=()=>{_(e.label),j(e.time),P(e.duration),w(e.alternatives||[]),b(!0)},C=()=>{let V=N.trim();V&&(i(e.id,{label:V,time:M||e.time,duration:Math.max(5,+L||e.duration),alternatives:I.map(J=>J.trim()).filter(Boolean)}),b(!1))},T=V=>{v||(y.current=!0,p.current=!1,E.current=null,k.current=V.clientX,x.current=V.clientY)},ee=V=>{if(!y.current)return;let J=V.clientX-k.current,xe=V.clientY-x.current;if(E.current===null){if(Math.abs(J)<6&&Math.abs(xe)<6)return;if(E.current=Math.abs(J)>Math.abs(xe)?"x":"y",E.current==="y"){y.current=!1;return}}E.current==="x"&&(Math.abs(J)>4&&(p.current=!0),h(Math.max(-120,Math.min(0,J))))},ye=()=>{y.current&&(y.current=!1,g<-70?(f(!0),setTimeout(()=>r(e.id),200)):(h(0),p.current||B()))};return l.default.createElement("div",{className:`routine-row-wrap ${c?"removing":""}`,style:{animationDelay:`${n*35}ms`}},l.default.createElement("div",{className:"routine-delete-bg"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),l.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${g}px)`,transition:y.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${m?"#2A2F36":Kn(e.id)}`},onPointerDown:T,onPointerMove:ee,onPointerUp:ye,onPointerLeave:ye,onPointerCancel:ye},l.default.createElement("div",{className:"routine-line"},l.default.createElement("span",{className:`routine-node ${m?"quest-done":""}`}),l.default.createElement("span",{className:"routine-connector"})),v?l.default.createElement("div",{className:"routine-edit",onPointerDown:V=>V.stopPropagation()},l.default.createElement("input",{className:"edit-label",value:N,onChange:V=>_(V.target.value),onKeyDown:V=>V.key==="Enter"&&C(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"time",className:"time-input",value:M,onChange:V=>j(V.target.value)}),l.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:L,onChange:V=>P(V.target.value)}),l.default.createElement("span",{className:"edit-unit"},"min")),l.default.createElement("div",{className:"alt-composer"},l.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),I.map((V,J)=>l.default.createElement("div",{className:"alt-composer-row",key:J},l.default.createElement("input",{type:"text",placeholder:`alternative ${J+1}`,value:V,onChange:xe=>{let Se=[...I];Se[J]=xe.target.value,w(Se)},onKeyDown:xe=>xe.key==="Enter"&&C()}),l.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>w(I.filter((xe,Se)=>Se!==J)),"aria-label":"Remove alternative"},"\xD7"))),l.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>w([...I,""])},"+ another option")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>b(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:C},"save"))):l.default.createElement("div",{className:"routine-main"},l.default.createElement("div",{className:"routine-top"},l.default.createElement("span",{className:"routine-time"},Nt(a)),t==="current"&&l.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&l.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,d&&l.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),l.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&l.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),l.default.createElement("span",{className:"routine-span"},Nt(a)," \u2013 ",Nt(s)," \xB7 ",St(e.duration)))))}function jm({routines:e,setRoutines:t}){let n=Va(),r=n.hour*60+n.minute,{sorted:o,currentId:i,nextId:a}=Ja(e,r),s=o.find(w=>w.id===i),u=o.find(w=>w.id===a),[d,m]=(0,l.useState)(""),[g,h]=(0,l.useState)(()=>Oa(r)),[y,k]=(0,l.useState)(30),[x,E]=(0,l.useState)(!1),[p,c]=(0,l.useState)([]),[f,v]=(0,l.useState)(!1),b=()=>{let w=d.trim();if(!w){E(!0),setTimeout(()=>E(!1),420),F.error();return}let B=g||Oa(r),C=p.map(T=>T.trim()).filter(Boolean);t(T=>[...T,{id:me(),time:B,label:w,duration:Math.max(5,+y||30),history:[],alternatives:C}]),m(""),h(Oa(r)),k(30),c([]),v(!1),F.click()},N=w=>{t(B=>B.filter(C=>C.id!==w)),F.delete()},_=w=>{let B=O(0),C=!1;t(T=>T.map(ee=>{if(ee.id!==w)return ee;let ye=(ee.history||[]).includes(B);C=!ye;let V=ye?ee.history.filter(J=>J!==B):[...ee.history||[],B];return{...ee,history:V.slice(-60)}})),C?F.success():F.click()},M=(w,B)=>t(C=>C.map(T=>T.id===w?{...T,...B}:T)),j=s?qe(s.time)+s.duration:0,L=u?(qe(u.time)-r+1440)%1440||1440:0,P=O(0),I=o.filter(w=>(w.history||[]).includes(P)).length;return l.default.createElement("div",{className:"task-list routine-list"},l.default.createElement("div",{className:"hero-card"},l.default.createElement("div",{className:"hero-clock-row"},l.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),l.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),l.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),l.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),l.default.createElement("span",{className:"hero-date"},Am()),l.default.createElement("div",{className:"hero-divider"}),s?l.default.createElement("div",{className:"hero-current"},l.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),l.default.createElement("div",{className:"hero-current-name"},l.default.createElement("span",{className:"pulse-dot"}),s.label),l.default.createElement("span",{className:"hero-sub"},"until ",Nt(j)," \xB7 next: ",u?.label," in ",St(L))):l.default.createElement("span",{className:"hero-sub"},"no routines yet")),l.default.createElement(Im,{routines:o,nowMinutes:r,doneToday:I}),l.default.createElement("div",{className:`composer ${x?"shake":""}`},l.default.createElement("input",{type:"text",placeholder:"new routine...",value:d,onChange:w=>m(w.target.value),onKeyDown:w=>w.key==="Enter"&&b()}),l.default.createElement("input",{type:"time",className:"time-input",value:g,onChange:w=>h(w.target.value)}),l.default.createElement("button",{type:"button",className:`alt-toggle-btn ${f?"active":""}`,onClick:()=>v(w=>!w),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),l.default.createElement("button",{className:"add-btn",onClick:b,"aria-label":"Add routine"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),f&&l.default.createElement("div",{className:"alt-composer"},l.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),p.map((w,B)=>l.default.createElement("div",{className:"alt-composer-row",key:B},l.default.createElement("input",{type:"text",placeholder:`alternative ${B+1}, e.g. "Drawing"`,value:w,onChange:C=>{let T=[...p];T[B]=C.target.value,c(T)},onKeyDown:C=>C.key==="Enter"&&b()}),l.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>c(p.filter((C,T)=>T!==B)),"aria-label":"Remove alternative"},"\xD7"))),l.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>c([...p,""])},"+ another option")),l.default.createElement("div",{className:"duration-chips"},Mm.map(w=>l.default.createElement("button",{key:w,className:y===w?"active":"",onClick:()=>k(w)},St(w))),l.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:y,onChange:w=>k(+w.target.value||5)})),o.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):o.map((w,B)=>l.default.createElement(Om,{key:w.id,routine:w,index:B,status:w.id===i?"current":w.id===a?"next":"idle",onDelete:N,onToggleToday:_,onSave:M})))}function $m(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(a=>a.type==="year").value,r=+t.find(a=>a.type==="month").value,o=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:o,monthLabel:i}}function Um(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function qc(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(O(r))&&n++;return n}function Wm(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(O(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var Hm=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[O(0),O(-1),O(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[O(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[O(0)]}],Vm=[{id:1,name:"Notion Template",dueDate:O(7),tasks:[{id:me(),text:"Design layout",done:!0},{id:me(),text:"Write docs",done:!1},{id:me(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:O(7),tasks:[{id:me(),text:"Script draft",done:!1},{id:me(),text:"Record",done:!1}]}];function Jm({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:o}=$m(),i=new Set(e||[]),a=O(0),s=Array.from({length:r},(u,d)=>d+1);return l.default.createElement("div",{className:"month-grid-wrap"},l.default.createElement("span",{className:"month-grid-label"},o),l.default.createElement("div",{className:"month-grid"},s.map(u=>{let d=Um(t,n,u);return l.default.createElement("span",{key:u,className:`month-cell ${i.has(d)?"filled":""} ${d===a?"today":""}`,style:{animationDelay:`${u*6}ms`},title:d})})))}function Km({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),{streak:i,freezeUsed:a}=Wa(e.history),s=qc(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[d,m]=(0,l.useState)(!1),[g,h]=(0,l.useState)(e.icon),[y,k]=(0,l.useState)(e.label),[x,E]=(0,l.useState)(e.weeklyGoal),p=()=>{h(e.icon),k(e.label),E(e.weeklyGoal),m(!0)},c=()=>{let f=y.trim();f&&(r(e.id,{icon:g.trim()||e.icon,label:f,weeklyGoal:Math.max(1,Math.min(7,+x||e.weeklyGoal))}),m(!1))};return d?l.default.createElement("div",{className:"vault-card"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{className:"duration-input",style:{width:44},value:g,onChange:f=>h(f.target.value),maxLength:2}),l.default.createElement("input",{className:"edit-label",style:{flex:1},value:y,onChange:f=>k(f.target.value),onKeyDown:f=>f.key==="Enter"&&c(),autoFocus:!0})),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:x,onChange:f=>E(f.target.value)}),l.default.createElement("span",{className:"edit-unit"},"x / week")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>m(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:c},"save")))):l.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${Kn(e.id)}`}},l.default.createElement("div",{className:"vault-card-top"},l.default.createElement("span",{className:"vault-card-icon",style:{color:Kn(e.id)}},e.icon),l.default.createElement("div",{className:"vault-card-title"},l.default.createElement("span",{className:"vault-card-label"},e.label),l.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),l.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),l.default.createElement(Jm,{history:e.history}),l.default.createElement("div",{className:"vault-card-bottom"},l.default.createElement("div",{className:"vault-card-ring-row"},l.default.createElement(Ha,{pct:u,size:34,stroke:3.5,color:Kn(e.id)}),l.default.createElement("span",{className:"vault-card-pct"},u,"% ",l.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&l.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,a&&l.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),l.default.createElement("button",{className:`vault-check ${o?"done":""}`,onClick:()=>t(e.id)},o?"\u2713 completed today":"mark complete today"))}function Xm({habits:e,setHabits:t}){let[n,r]=(0,l.useState)(""),[o,i]=(0,l.useState)(7),[a,s]=(0,l.useState)(!1),u=()=>{let h=n.trim();if(!h){s(!0),setTimeout(()=>s(!1),420),F.error();return}t(y=>[...y,{id:me(),icon:"\u25C6",label:h,weeklyGoal:o,history:[]}]),r(""),i(7),F.click()},d=h=>{t(y=>y.filter(k=>k.id!==h)),F.delete()},m=(h,y)=>t(k=>k.map(x=>x.id===h?{...x,...y}:x)),g=h=>{let y=O(0),k=!1;t(x=>x.map(E=>{if(E.id!==h)return E;let p=(E.history||[]).includes(y);k=!p;let c=p?E.history.filter(f=>f!==y):[...E.history||[],y];return{...E,history:c.slice(-370)}})),k?F.success():F.click()};return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"HABIT-STREAK-TRACKING")),l.default.createElement("div",{className:"vault-grid"},e.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(h=>l.default.createElement(Km,{key:h.id,habit:h,onToggleToday:g,onDelete:d,onSave:m}))),l.default.createElement("div",{className:`composer ${a?"shake":""}`},l.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:h=>r(h.target.value),onKeyDown:h=>h.key==="Enter"&&u()}),l.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),l.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(h=>l.default.createElement("button",{key:h,className:o===h?"active":"",onClick:()=>i(h)},h,"x/wk"))))}function Gm({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:o}){let[i,a]=(0,l.useState)(!1),[s,u]=(0,l.useState)(t.text),d=()=>{let m=s.trim();m&&o(e,t.id,m),a(!1)};return i?l.default.createElement("div",{className:"project-task-row"},l.default.createElement("input",{className:"project-task-edit",value:s,onChange:m=>u(m.target.value),onKeyDown:m=>m.key==="Enter"&&d(),onBlur:d,autoFocus:!0})):l.default.createElement("div",{className:"project-task-row"},l.default.createElement(Zc,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),l.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>a(!0)},t.text),l.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Qm({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:o,onEditTask:i,onSave:a}){let[s,u]=(0,l.useState)(""),d=e.tasks.length,m=e.tasks.filter(N=>N.done).length,g=d?Math.round(m/d*100):0,h=Wm(e.dueDate),[y,k]=(0,l.useState)(!1),[x,E]=(0,l.useState)(e.name),[p,c]=(0,l.useState)(e.dueDate||""),f=()=>{let N=s.trim();N&&(n(e.id,N),u(""))},v=()=>{E(e.name),c(e.dueDate||""),k(!0)},b=()=>{let N=x.trim();N&&(a(e.id,{name:N,dueDate:p||null}),k(!1))};return y?l.default.createElement("div",{className:"project-card"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("input",{className:"edit-label",value:x,onChange:N=>E(N.target.value),onKeyDown:N=>N.key==="Enter"&&b(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"date",className:"time-input",value:p,onChange:N=>c(N.target.value)})),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:b},"save")))):l.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${Kn(e.id)}`}},l.default.createElement("div",{className:"project-card-top"},l.default.createElement("span",{className:"project-name"},e.name),l.default.createElement("div",{className:"project-card-actions"},l.default.createElement("button",{className:"vault-card-edit",onClick:v,"aria-label":"Edit project"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),h&&l.default.createElement("span",{className:`project-due ${h.overdue?"overdue":""}`},h.text),l.default.createElement("div",{className:"progress-track small"},l.default.createElement("div",{className:"progress-fill",style:{width:`${g}%`}})),l.default.createElement("span",{className:"vault-card-pct"},m,"/",d," tasks \xB7 ",g,"%"),l.default.createElement("div",{className:"project-tasks"},e.tasks.map(N=>l.default.createElement(Gm,{key:N.id,projectId:e.id,task:N,onToggle:r,onDelete:o,onEdit:i}))),l.default.createElement("div",{className:"project-add-task"},l.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:N=>u(N.target.value),onKeyDown:N=>N.key==="Enter"&&f()})))}function qm({projects:e,setProjects:t}){let[n,r]=(0,l.useState)(""),[o,i]=(0,l.useState)(""),[a,s]=(0,l.useState)(!1),u=()=>{let x=n.trim();if(!x){s(!0),setTimeout(()=>s(!1),420),F.error();return}t(E=>[...E,{id:me(),name:x,dueDate:o||null,tasks:[]}]),r(""),i(""),F.click()},d=x=>{t(E=>E.filter(p=>p.id!==x)),F.delete()},m=(x,E)=>t(p=>p.map(c=>c.id===x?{...c,...E}:c)),g=(x,E)=>{t(p=>p.map(c=>c.id===x?{...c,tasks:[...c.tasks,{id:me(),text:E,done:!1}]}:c)),F.click()},h=(x,E)=>{t(p=>p.map(c=>c.id!==x?c:{...c,tasks:c.tasks.map(f=>f.id===E?{...f,done:!f.done}:f)})),F.success()},y=(x,E)=>{t(p=>p.map(c=>c.id!==x?c:{...c,tasks:c.tasks.filter(f=>f.id!==E)})),F.delete()},k=(x,E,p)=>t(c=>c.map(f=>f.id!==x?f:{...f,tasks:f.tasks.map(v=>v.id===E?{...v,text:p}:v)}));return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"PROJECT-MANAGER")),l.default.createElement("div",{className:"vault-grid"},e.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no projects yet")):e.map(x=>l.default.createElement(Qm,{key:x.id,project:x,onDelete:d,onAddTask:g,onToggleTask:h,onDeleteTask:y,onEditTask:k,onSave:m}))),l.default.createElement("div",{className:`composer ${a?"shake":""}`},l.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:x=>r(x.target.value),onKeyDown:x=>x.key==="Enter"&&u()}),l.default.createElement("input",{type:"date",className:"time-input",value:o,onChange:x=>i(x.target.value)}),l.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function Ym({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return l.default.createElement("div",{className:"task-list vault-scroll"},l.default.createElement(Xm,{habits:e,setHabits:t}),l.default.createElement(qm,{projects:n,setProjects:r}))}var ct=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],Ka=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],Wr=ct.reduce((e,t)=>(e[t.key]=Ka.filter(n=>n.area===t.key),e),{});function Bc(e){return Ka.find(t=>t.key===e)||null}function Xn(e){if(e.sub&&Bc(e.sub)&&Bc(e.sub).area===e.area)return e.sub;let t=Wr[e.area];return t&&t.length?t[0].key:null}function Zm(e,t,n){let r=t.filter(i=>Xn(i)===e).reduce((i,a)=>i+a.xp*(a.history?.length||0),0),o=n.filter(i=>Xn(i)===e).reduce((i,a)=>i+a.xp*(a.history?.length||0),0);return r-o}var Pc=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function Kn(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return Pc[Math.abs(t)%Pc.length]}var Ur=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function Yc(e,t,n){let r=e.reduce((a,s)=>a+s.xp*(s.history?.length||0),0),o=t.reduce((a,s)=>a+s.xp*(s.history?.length||0),0),i=n.reduce((a,s)=>a+s.cost*(s.claimed?.length||0),0);return r-o-i}function ja(e){return 50*e*(e-1)}function Rm(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((50+Math.sqrt(2500+200*t))/100)),r=t-ja(n),o=ja(n+1)-ja(n);return{level:n,into:r,span:o}}function e0(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[o,i]of t)for(;n>=o;)r+=i,n-=o;return r}function t0(e){if(e<=Ur.length)return Ur[e-1];let t=e-Ur.length+1;return`${Ur[Ur.length-1]} ${e0(t)}`}var n0=[{id:1,label:"Deep Work",area:"work",xp:40,history:[O(0),O(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[O(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],r0=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],o0=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function i0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),{streak:i,freezeUsed:a}=Wa(e.history),s=ct.find(v=>v.key===e.area)||ct[0],[u,d]=(0,l.useState)(!1),[m,g]=(0,l.useState)(e.label),[h,y]=(0,l.useState)(e.area),[k,x]=(0,l.useState)(()=>Xn(e)),[E,p]=(0,l.useState)(e.xp),c=()=>{g(e.label),y(e.area),x(Xn(e)),p(e.xp),d(!0)},f=()=>{let v=m.trim();v&&(r(e.id,{label:v,area:h,sub:k,xp:Math.max(1,+E||e.xp)}),d(!1))};return u?l.default.createElement("div",{className:"quest-habit-card good editing"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("input",{className:"edit-label",value:m,onChange:v=>g(v.target.value),onKeyDown:v=>v.key==="Enter"&&f(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},ct.map(v=>l.default.createElement("button",{key:v.key,type:"button",className:`area-chip ${h===v.key?"active":""}`,style:{"--ac":v.color},onClick:()=>{y(v.key);let b=Wr[v.key]||[];x(b.length?b[0].key:null)}},v.label))),l.default.createElement("div",{className:"edit-row edit-row-subs"},(Wr[h]||[]).map(v=>l.default.createElement("button",{key:v.key,type:"button",className:`sub-chip ${k===v.key?"active":""}`,onClick:()=>x(v.key)},v.label))),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:E,onChange:v=>p(v.target.value)}),l.default.createElement("span",{className:"edit-unit"},"XP")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:f},"save")))):l.default.createElement("div",{className:"quest-habit-card good"},l.default.createElement("span",{className:"area-dot",style:{background:s.color}}),l.default.createElement("div",{className:"quest-habit-main"},l.default.createElement("span",{className:"quest-habit-label"},e.label),l.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",s.label,i>0?` \xB7 \u{1F525}${i}${a?" \u2744\uFE0F":""}`:"")),l.default.createElement("button",{className:`quest-check ${o?"done":""}`,onClick:()=>t(e.id),"aria-label":"Mark done today"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:o?0:24,transition:"stroke-dashoffset 220ms ease"}}))),l.default.createElement("button",{className:"vault-card-edit",onClick:c,"aria-label":"Edit habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function l0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),i=ct.find(f=>f.key===e.area)||ct[0],a=qc(e.history),[s,u]=(0,l.useState)(!1),[d,m]=(0,l.useState)(e.label),[g,h]=(0,l.useState)(e.area),[y,k]=(0,l.useState)(()=>Xn(e)),[x,E]=(0,l.useState)(e.xp),p=()=>{m(e.label),h(e.area),k(Xn(e)),E(e.xp),u(!0)},c=()=>{let f=d.trim();f&&(r(e.id,{label:f,area:g,sub:y,xp:Math.max(1,+x||e.xp)}),u(!1))};return s?l.default.createElement("div",{className:"quest-habit-card bad editing"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("input",{className:"edit-label",value:d,onChange:f=>m(f.target.value),onKeyDown:f=>f.key==="Enter"&&c(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},ct.map(f=>l.default.createElement("button",{key:f.key,type:"button",className:`area-chip ${g===f.key?"active":""}`,style:{"--ac":f.color},onClick:()=>{h(f.key);let v=Wr[f.key]||[];k(v.length?v[0].key:null)}},f.label))),l.default.createElement("div",{className:"edit-row edit-row-subs"},(Wr[g]||[]).map(f=>l.default.createElement("button",{key:f.key,type:"button",className:`sub-chip ${y===f.key?"active":""}`,onClick:()=>k(f.key)},f.label))),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:x,onChange:f=>E(f.target.value)}),l.default.createElement("span",{className:"edit-unit"},"XP")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>u(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:c},"save")))):l.default.createElement("div",{className:"quest-habit-card bad"},l.default.createElement("span",{className:"area-dot",style:{background:i.color}}),l.default.createElement("div",{className:"quest-habit-main"},l.default.createElement("span",{className:"quest-habit-label"},e.label),l.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",i.label," \xB7 ",a,"x this week")),l.default.createElement("button",{className:`quest-check bad-check ${o?"done":""}`,onClick:()=>t(e.id),"aria-label":"Log slip today"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),l.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function a0({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:o}){let[i,a]=(0,l.useState)(!1),[s,u]=(0,l.useState)(e.label),[d,m]=(0,l.useState)(e.cost),g=()=>{u(e.label),m(e.cost),a(!0)},h=()=>{let y=s.trim();y&&(o(e.id,{label:y,cost:Math.max(1,+d||e.cost)}),a(!1))};return i?l.default.createElement("div",{className:"reward-card"},l.default.createElement("div",{className:"routine-edit"},l.default.createElement("input",{className:"edit-label",value:s,onChange:y=>u(y.target.value),onKeyDown:y=>y.key==="Enter"&&h(),autoFocus:!0}),l.default.createElement("div",{className:"edit-row"},l.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:d,onChange:y=>m(y.target.value)}),l.default.createElement("span",{className:"edit-unit"},"XP cost")),l.default.createElement("div",{className:"edit-actions"},l.default.createElement("button",{className:"edit-cancel",onClick:()=>a(!1)},"cancel"),l.default.createElement("button",{className:"edit-save",onClick:h},"save")))):l.default.createElement("div",{className:"reward-card"},l.default.createElement("div",{className:"reward-top"},l.default.createElement("span",{className:"reward-label"},e.label),l.default.createElement("div",{className:"project-card-actions"},l.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit reward"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),l.default.createElement("span",{className:"reward-cost"},e.cost," XP"),l.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&l.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function s0({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:o,setRewards:i}){let a=(0,l.useMemo)(()=>Yc(e,n,o),[e,n,o]),{level:s,into:u,span:d}=Rm(a),m=Math.round(u/d*100),g=A=>{let $=O(0),X=!1;t(G=>G.map(ue=>{if(ue.id!==A)return ue;let _e=(ue.history||[]).includes($);X=!_e;let mn=_e?ue.history.filter(hn=>hn!==$):[...ue.history||[],$];return{...ue,history:mn.slice(-370)}})),X?F.success():F.click()},h=A=>{let $=O(0),X=!1;r(G=>G.map(ue=>{if(ue.id!==A)return ue;let _e=(ue.history||[]).includes($);X=!_e;let mn=_e?ue.history.filter(hn=>hn!==$):[...ue.history||[],$];return{...ue,history:mn.slice(-370)}})),X?F.error():F.click()},y=A=>{t($=>$.filter(X=>X.id!==A)),F.delete()},k=A=>{r($=>$.filter(X=>X.id!==A)),F.delete()},x=(A,$)=>t(X=>X.map(G=>G.id===A?{...G,...$}:G)),E=(A,$)=>r(X=>X.map(G=>G.id===A?{...G,...$}:G)),p=A=>{let $=O(0);i(X=>X.map(G=>G.id===A?{...G,claimed:[...G.claimed||[],$]}:G)),F.success()},c=A=>{i($=>$.filter(X=>X.id!==A)),F.delete()},f=(A,$)=>i(X=>X.map(G=>G.id===A?{...G,...$}:G)),[v,b]=(0,l.useState)(""),[N,_]=(0,l.useState)("work"),[M,j]=(0,l.useState)(20),[L,P]=(0,l.useState)(""),[I,w]=(0,l.useState)("work"),[B,C]=(0,l.useState)(20),[T,ee]=(0,l.useState)(""),[ye,V]=(0,l.useState)(100),J=()=>{let A=v.trim();A&&(t($=>[...$,{id:me(),label:A,area:N,xp:+M||10,history:[]}]),b(""),F.click())},xe=()=>{let A=L.trim();A&&(r($=>[...$,{id:me(),label:A,area:I,xp:+B||10,history:[]}]),P(""),F.click())},Se=()=>{let A=T.trim();A&&(i($=>[...$,{id:me(),label:A,cost:+ye||50,claimed:[]}]),ee(""),F.click())},Gt=Ka.map(A=>({key:A.key,label:A.label,color:(ct.find($=>$.key===A.area)||{}).color,value:Math.max(0,Zm(A.key,e,n))})),pt=e.reduce((A,$)=>A+$.xp*($.history?.length||0),0),Ct=n.reduce((A,$)=>A+$.xp*($.history?.length||0),0);return l.default.createElement("div",{className:"task-list vault-scroll"},l.default.createElement("div",{className:"hero-card hero-card-viz"},l.default.createElement("div",{className:"hero-viz-row"},l.default.createElement(Ha,{pct:m,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${s}`,sublabel:t0(s)}),l.default.createElement("div",{className:"hero-viz-stats"},l.default.createElement("span",{className:"hero-xp-total"},l.default.createElement(bt,{value:a})," ",l.default.createElement("small",null,"XP")),l.default.createElement("span",{className:"hero-xp-sub"},u,"/",d," to next level"),l.default.createElement("div",{className:"hero-xp-split"},l.default.createElement("span",{className:"hero-xp-earned"},"+",l.default.createElement(bt,{value:pt})),l.default.createElement("span",{className:"hero-xp-lost"},"\u2212",l.default.createElement(bt,{value:Ct})))))),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"LIFE-AREAS")),l.default.createElement("div",{className:"radar-card"},l.default.createElement(Bm,{axes:Gt,size:252})),(pt>0||Ct>0)&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"XP SOURCE")),l.default.createElement("div",{className:"donut-card"},l.default.createElement(Qc,{size:120,stroke:16,centerLabel:a,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:pt,color:"#5EEAD4"},{key:"lost",label:"Lost",value:Ct,color:"#F0576B"}]}),l.default.createElement("div",{className:"donut-legend"},l.default.createElement("div",{className:"donut-legend-row"},l.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),l.default.createElement("span",null,"Earned from good habits"),l.default.createElement("span",{className:"donut-legend-val"},l.default.createElement(bt,{value:pt}))),l.default.createElement("div",{className:"donut-legend-row"},l.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),l.default.createElement("span",null,"Lost to bad habits"),l.default.createElement("span",{className:"donut-legend-val"},l.default.createElement(bt,{value:Ct})))))),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"GOOD-HABITS")),l.default.createElement("div",{className:"quest-habit-list"},e.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no good habits yet")):e.map(A=>l.default.createElement(i0,{key:A.id,habit:A,onToggleToday:g,onDelete:y,onSave:x}))),l.default.createElement("div",{className:"composer"},l.default.createElement("input",{type:"text",placeholder:"new good habit...",value:v,onChange:A=>b(A.target.value),onKeyDown:A=>A.key==="Enter"&&J()}),l.default.createElement("button",{className:"add-btn",onClick:J,"aria-label":"Add good habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),l.default.createElement("div",{className:"duration-chips"},ct.map(A=>l.default.createElement("button",{key:A.key,className:N===A.key?"active":"",onClick:()=>_(A.key)},A.label)),l.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:M,onChange:A=>j(+A.target.value||5)})),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"BAD-HABITS")),l.default.createElement("div",{className:"quest-habit-list"},n.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no bad habits tracked")):n.map(A=>l.default.createElement(l0,{key:A.id,habit:A,onToggleToday:h,onDelete:k,onSave:E}))),l.default.createElement("div",{className:"composer"},l.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:L,onChange:A=>P(A.target.value),onKeyDown:A=>A.key==="Enter"&&xe()}),l.default.createElement("button",{className:"add-btn",onClick:xe,"aria-label":"Add bad habit"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),l.default.createElement("div",{className:"duration-chips"},ct.map(A=>l.default.createElement("button",{key:A.key,className:I===A.key?"active":"",onClick:()=>w(A.key)},A.label)),l.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:B,onChange:A=>C(+A.target.value||5)})),l.default.createElement("div",{className:"section-header"},l.default.createElement("span",null,"REWARD-CENTER")),l.default.createElement("div",{className:"vault-grid"},o.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no rewards set up")):o.map(A=>l.default.createElement(a0,{key:A.id,reward:A,canClaim:a>=A.cost,onClaim:p,onDelete:c,onSave:f}))),l.default.createElement("div",{className:"composer"},l.default.createElement("input",{type:"text",placeholder:"new reward...",value:T,onChange:A=>ee(A.target.value),onKeyDown:A=>A.key==="Enter"&&Se()}),l.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:ye,onChange:A=>V(+A.target.value||50)}),l.default.createElement("button",{className:"add-btn",onClick:Se,"aria-label":"Add reward"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var u0=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function d0(e=1e3*30){let[t,n]=(0,l.useState)(Date.now());return(0,l.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function c0(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let o=Math.floor(r/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function Zc({checked:e,onChange:t,color:n}){return l.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function p0({task:e,now:t,onToggle:n,onDelete:r,index:o}){let[i,a]=(0,l.useState)(!1),s=hi.find(d=>d.key===e.priority)||hi[0],u=()=>{a(!0),setTimeout(()=>r(e.id),220)};return l.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${o*35}ms`}},l.default.createElement(Zc,{checked:e.done,onChange:()=>n(e.id),color:s.color}),l.default.createElement("div",{className:"task-main"},l.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),l.default.createElement("span",{className:"task-meta"},l.default.createElement("span",{className:"prio-dot",style:{background:s.color}}),l.default.createElement("span",{className:"prio-label"},s.label),l.default.createElement("span",{className:"dot-sep"},"\xB7"),l.default.createElement("span",null,c0(e.createdAt,t)))),l.default.createElement("button",{className:"del-btn",onClick:u,"aria-label":"Delete task"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var Lc="tasksh.tasks.v1",Ic="tasksh.routines.v1",Fc="tasksh.vaulthabits.v1",Oc="tasksh.projects.v1",jc="tasksh.goodhabits.v1",$c="tasksh.badhabits.v1",Uc="tasksh.rewards.v1",Wc="tasksh.deviceid.v1",$a="tasksh.notifyenabled.v1",Ua="tasksh.aikey.v1",Hr="https://tasksh-notify.techcraftor.workers.dev",f0="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function m0(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;i++)o[i]=r.charCodeAt(i);return o}function Xa(){let e=localStorage.getItem(Wc);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Wc,e)),e}async function h0(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:m0(f0)}));let r=Xa();if(!(await fetch(`${Hr}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function g0(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=Xa();try{await fetch(`${Hr}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function Hc(e){let t=Xa();try{await fetch(`${Hr}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}function v0(){try{return localStorage.getItem(Ua)||""}catch{return""}}function Rc(e){try{e?localStorage.setItem(Ua,e):localStorage.removeItem(Ua)}catch{}}function y0(e){return e?e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`:""}var gi=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function x0(e){let t=await fetch(`${Hr}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function k0(e,t,n){let r=await fetch(`${Hr}/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e,data:t,apiKey:n})}),o=null;try{o=await r.json()}catch{}if(!r.ok){let i=o&&o.error;throw i==="no_key"||i==="bad_key"?new gi(o&&o.message||"Your API key was rejected."):i==="quota"?new Error(o&&o.message||"Daily AI limit reached."):new Error(o&&o.message||o&&o.error||`AI request failed (${r.status}).`)}return{reply:o.reply||"",actions:o.actions||[]}}function Vc(e,t){let n=(r,o)=>(r||[]).find(i=>i.id===o);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Nt(qe(e.time))} \xB7 ${e.label} (${St(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),o=[];return e.time!==void 0&&e.time!==r?.time&&o.push(`${Nt(qe(r?.time||"00:00"))} \u2192 ${Nt(qe(e.time))}`),e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&o.push(`${St(r?.duration||0)} \u2192 ${St(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${o.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),o=[];return e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&o.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${o.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function w0(e,t,n){let{routines:r,vaultHabits:o,goodHabits:i,badHabits:a,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let d of e)switch(d.op){case"add_routine":r=[...r,{id:me(),time:d.time,label:d.label,duration:d.duration,history:[],...d.alternatives?.length?{alternatives:d.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(m=>m.id===d.id?{...m,...d.time!==void 0?{time:d.time}:{},...d.label!==void 0?{label:d.label}:{},...d.duration!==void 0?{duration:d.duration}:{}}:m),u.add("routines");break;case"delete_routine":r=r.filter(m=>m.id!==d.id),u.add("routines");break;case"add_vault_habit":o=[...o,{id:me(),icon:d.icon,label:d.label,weeklyGoal:d.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":o=o.map(m=>m.id===d.id?{...m,...d.label!==void 0?{label:d.label}:{},...d.weeklyGoal!==void 0?{weeklyGoal:d.weeklyGoal}:{}}:m),u.add("vaultHabits");break;case"delete_vault_habit":o=o.filter(m=>m.id!==d.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:me(),label:d.label,area:d.area,...d.sub?{sub:d.sub}:{},xp:d.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(m=>m.id!==d.id),u.add("goodHabits");break;case"add_bad_habit":a=[...a,{id:me(),label:d.label,area:d.area,...d.sub?{sub:d.sub}:{},xp:d.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":a=a.filter(m=>m.id!==d.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:me(),label:d.label,cost:d.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(m=>m.id!==d.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(o),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(a),u.has("rewards")&&n.setRewards(s)}var E0=["build me a study preset for exam month","my evenings are too packed \u2014 spread them out","add a gym routine at 6am for an hour","what am I neglecting?"];function Jc({onSaved:e,initialError:t,onCancel:n}){let[r,o]=(0,l.useState)(""),[i,a]=(0,l.useState)(!1),[s,u]=(0,l.useState)(t||null),d=(0,l.useRef)(null);(0,l.useEffect)(()=>{d.current?.focus()},[]);let m=async()=>{let g=r.trim();if(!(!g||i)){a(!0),u(null);try{let h=await x0(g);Rc(g),F.success(),e(g,h)}catch(h){u(h.message||"Couldn't verify that key."),F.error()}finally{a(!1)}}};return l.default.createElement("div",{className:"task-list ai-scroll"},l.default.createElement("div",{className:"ai-gate"},l.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),l.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),l.default.createElement("div",{className:"ai-gate-sub"},"the assistant runs on Google's Gemini. it's free \u2014 you just need your own key. takes about a minute."),l.default.createElement("ol",{className:"ai-gate-steps"},l.default.createElement("li",null,"open"," ",l.default.createElement("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noopener noreferrer"},"aistudio.google.com/apikey")),l.default.createElement("li",null,"sign in and hit \u201Ccreate API key\u201D"),l.default.createElement("li",null,"copy it and paste it below")),l.default.createElement("input",{ref:d,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026",value:r,onChange:g=>o(g.target.value),onKeyDown:g=>{g.key==="Enter"&&m()},disabled:i}),s&&l.default.createElement("div",{className:"ai-error ai-gate-error"},s),l.default.createElement("div",{className:"ai-gate-actions"},l.default.createElement("button",{className:"ai-apply",onClick:m,disabled:i||!r.trim()},i?"checking\u2026":"save key"),n&&l.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),l.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function b0({state:e,setters:t,showDataMsg:n}){let[r,o]=(0,l.useState)(()=>v0()),[i,a]=(0,l.useState)(!1),[s,u]=(0,l.useState)(null),[d,m]=(0,l.useState)(""),[g,h]=(0,l.useState)(!1),[y,k]=(0,l.useState)(null),[x,E]=(0,l.useState)(null),[p,c]=(0,l.useState)(()=>new Set),f=(0,l.useRef)(null),v=(0,l.useRef)(0),[b,N]=(0,l.useState)(0);(0,l.useEffect)(()=>{if(!g){N(0);return}let w=Date.now(),B=setInterval(()=>N((Date.now()-w)/1e3),100);return()=>clearInterval(B)},[g]);let _=async w=>{let B=(w??d).trim();if(!B||g)return;let C=Date.now()-v.current;if(C<3e3){k(`Hold on a moment \u2014 wait ${Math.ceil((3e3-C)/1e3)}s before asking again.`);return}v.current=Date.now(),h(!0),k(null),E(null),c(new Set),F.click();try{let T=await k0(B,{routines:e.routines,vaultHabits:e.vaultHabits,goodHabits:e.goodHabits,badHabits:e.badHabits,rewards:e.rewards,totalXP:e.totalXP},r);E(T),T.actions.length&&F.success()}catch(T){T instanceof gi?(Rc(""),o(""),u(T.message)):k(T.message||"Something went wrong."),F.error()}finally{h(!1)}},M=w=>{c(B=>{let C=new Set(B);return C.has(w)?C.delete(w):C.add(w),C})},j=x?x.actions.filter((w,B)=>!p.has(B)):[],L=()=>{j.length&&(w0(j,e,t),F.success(),n("success",`Applied ${j.length} change${j.length===1?"":"s"}`),E(null),m(""),c(new Set))},P=()=>{F.whoosh(),E(null),c(new Set)},I=j.reduce((w,B)=>{let C=Vc(B,e).kind;return w[C]=(w[C]||0)+1,w},{});return r?i?l.default.createElement(Jc,{onCancel:()=>a(!1),onSaved:(w,B)=>{o(w),a(!1),n("success",B||"AI key updated")}}):l.default.createElement("div",{className:"task-list ai-scroll"},l.default.createElement("div",{className:"ai-intro"},l.default.createElement("div",{className:"ai-intro-row"},l.default.createElement("div",{className:"ai-intro-title"},"ask anything"),l.default.createElement("button",{className:"ai-key-btn",onClick:()=>a(!0),title:`Key ${y0(r)} \u2014 tap to change`},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},l.default.createElement("circle",{cx:"8",cy:"15",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),l.default.createElement("path",{d:"M10.85 12.15L19 4M17 6l2 2M14 9l2 2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),l.default.createElement("span",null,"key"))),l.default.createElement("div",{className:"ai-intro-sub"},"it can add, edit or remove routines, vault habits, quests and rewards \u2014 nothing changes until you approve it.")),l.default.createElement("div",{className:"ai-composer"},l.default.createElement("textarea",{ref:f,className:"ai-input",rows:3,placeholder:"e.g. add a 30 min reading routine before bed",value:d,onChange:w=>m(w.target.value),onKeyDown:w=>{w.key==="Enter"&&(w.metaKey||w.ctrlKey)&&(w.preventDefault(),_())},disabled:g}),l.default.createElement("button",{className:"ai-send",onClick:()=>_(),disabled:g||!d.trim()},g?"thinking\u2026":"ask")),!x&&!g&&l.default.createElement("div",{className:"ai-chips"},E0.map(w=>l.default.createElement("button",{key:w,className:"ai-chip",onClick:()=>{m(w),_(w)}},w))),g&&l.default.createElement("div",{className:"ai-thinking"},l.default.createElement("div",{className:"ai-dots"},l.default.createElement("span",{className:"ai-dot"}),l.default.createElement("span",{className:"ai-dot"}),l.default.createElement("span",{className:"ai-dot"})),l.default.createElement("div",{className:"ai-elapsed"},b<1?"thinking\u2026":`thinking\u2026 ${b.toFixed(1)}s`,b>12&&l.default.createElement("span",{className:"ai-slow"}," \xB7 taking longer than usual"))),y&&l.default.createElement("div",{className:"ai-error"},y),x&&l.default.createElement("div",{className:"ai-result"},x.reply&&l.default.createElement("div",{className:"ai-reply"},x.reply),x.actions.length===0?l.default.createElement("div",{className:"ai-noop"},"no changes proposed"):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"ai-diff-head"},l.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),l.default.createElement("span",{className:"ai-diff-counts"},I.add?l.default.createElement("span",{className:"c-add"},"+",I.add):null,I.edit?l.default.createElement("span",{className:"c-edit"},"~",I.edit):null,I.remove?l.default.createElement("span",{className:"c-remove"},"\u2212",I.remove):null)),l.default.createElement("div",{className:"ai-diff"},x.actions.map((w,B)=>{let C=Vc(w,e),T=p.has(B);return l.default.createElement("button",{key:B,className:`ai-diff-row ${C.kind} ${T?"skipped":""}`,onClick:()=>M(B),title:T?"click to include":"click to skip"},l.default.createElement("span",{className:"ai-sign"},C.kind==="add"?"+":C.kind==="remove"?"\u2212":"~"),l.default.createElement("span",{className:"ai-surface"},C.surface),l.default.createElement("span",{className:"ai-diff-text"},C.text),l.default.createElement("span",{className:"ai-skip-mark"},T?"skipped":""))})),l.default.createElement("div",{className:"ai-actions"},l.default.createElement("button",{className:"ai-apply",onClick:L,disabled:!j.length},"apply ",j.length||""),l.default.createElement("button",{className:"ai-discard",onClick:P},"discard")),l.default.createElement("div",{className:"ai-hint"},"tap any row to skip it")))):l.default.createElement(Jc,{initialError:s,onSaved:(w,B)=>{o(w),u(null),n("success",B||"AI key saved")}})}function pn(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function N0(e){typeof e=="number"&&Number.isFinite(e)&&e>mi&&(mi=e)}function S0(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(o=>n(o?.id))}),t}function C0({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:o,goodHabits:i,rewards:a,setRewards:s,totalXP:u,setTab:d}){let m=Va(),g=m.hour*60+m.minute,{sorted:h,currentId:y,nextId:k}=Ja(e,g),x=h.find(P=>P.id===y),E=h.find(P=>P.id===k),p=O(0),c=P=>{let I=!1;t(w=>w.map(B=>{if(B.id!==P)return B;let C=(B.history||[]).includes(p);I=!C;let T=C?B.history.filter(ee=>ee!==p):[...B.history||[],p];return{...B,history:T.slice(-60)}})),I?F.success():F.click()},f=(0,l.useMemo)(()=>{let P={high:0,mid:1,low:2};return[...n].filter(I=>!I.done).sort((I,w)=>P[I.priority]-P[w.priority])},[n]),v=P=>{r(I=>I.map(w=>w.id===P?{...w,done:!w.done}:w)),F.success()},b=(0,l.useMemo)(()=>a.filter(P=>u>=P.cost),[a,u]),N=P=>{s(I=>I.map(w=>w.id===P?{...w,claimed:[...w.claimed||[],p]}:w)),F.success()},_=(0,l.useMemo)(()=>{let P={},I=w=>{(w||[]).forEach(B=>{P[B]=(P[B]||0)+1})};return e.forEach(w=>I(w.history)),o.forEach(w=>I(w.history)),i.forEach(w=>I(w.history)),P},[e,o,i]),M=x||E,j=!!x,L=M?(M.history||[]).includes(p):!1;return l.default.createElement("div",{className:"task-list today-view"},l.default.createElement("div",{className:"filters today-section-header"},l.default.createElement("span",null,j?"HAPPENING NOW":"NEXT UP")),M?l.default.createElement("div",{className:"today-card"},l.default.createElement("div",{className:"today-card-row"},l.default.createElement("span",{className:"today-card-time"},Nt(qe(M.time))),l.default.createElement("span",{className:"today-card-label"},M.label)),l.default.createElement("div",{className:"today-card-sub"},j?`in progress \xB7 ${St(M.duration)}`:`in ${Math.max(0,qe(M.time)-g)}m \xB7 ${St(M.duration)}`),l.default.createElement("button",{className:`today-mark-btn ${L?"done":""}`,onClick:()=>c(M.id)},L?"\u2713 completed today":"mark complete")):l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"no routines set up yet")),l.default.createElement("div",{className:"filters today-section-header"},l.default.createElement("span",null,"ACTIVITY")),l.default.createElement(Pm,{counts:_,weeksBack:12}),l.default.createElement("div",{className:"filters today-section-header"},l.default.createElement("span",null,"OPEN TASKS"),f.length>0&&l.default.createElement("button",{className:"today-view-all",onClick:()=>d("tasks")},"view all in tasks \u2192")),f.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):l.default.createElement("div",{className:"today-list"},f.slice(0,5).map((P,I)=>l.default.createElement("div",{key:P.id,className:"today-task-row",style:{animationDelay:`${I*35}ms`}},l.default.createElement("button",{className:"today-task-check",onClick:()=>v(P.id),"aria-label":"Complete task"}),l.default.createElement("span",{className:"today-task-text"},P.text),l.default.createElement("span",{className:`today-prio-dot ${P.priority}`}))),f.length>5&&l.default.createElement("button",{className:"today-more",onClick:()=>d("tasks")},"+",f.length-5," more")),l.default.createElement("div",{className:"filters today-section-header"},l.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),l.default.createElement("span",{className:"today-xp-total"},l.default.createElement(bt,{value:u})," XP")),b.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):l.default.createElement("div",{className:"today-list"},b.map((P,I)=>l.default.createElement("div",{key:P.id,className:"today-task-row",style:{animationDelay:`${I*35}ms`}},l.default.createElement("span",{className:"today-task-text"},P.label),l.default.createElement("span",{className:"today-reward-cost"},P.cost," XP"),l.default.createElement("button",{className:"today-claim-btn",onClick:()=>N(P.id)},"claim")))))}function A0(){let[e,t]=(0,l.useState)("today"),[n,r]=zm(),o=D=>{D!==e&&F.whoosh(),t(D)},[i,a]=(0,l.useState)(()=>pn(Lc,u0)),[s,u]=(0,l.useState)(()=>pn(Ic,Fm)),[d,m]=(0,l.useState)(()=>pn(Fc,Hm)),[g,h]=(0,l.useState)(()=>pn(Oc,Vm)),[y,k]=(0,l.useState)(()=>pn(jc,n0)),[x,E]=(0,l.useState)(()=>pn($c,r0)),[p,c]=(0,l.useState)(()=>pn(Uc,o0)),f=(0,l.useMemo)(()=>Yc(y,x,p),[y,x,p]),[v,b]=(0,l.useState)(""),[N,_]=(0,l.useState)("mid"),[M,j]=(0,l.useState)("all"),L=(0,l.useRef)(null),P=(0,l.useRef)(null),[I,w]=(0,l.useState)(null),B=d0(),[C,T]=(0,l.useState)(()=>localStorage.getItem($a)==="1"),[ee,ye]=(0,l.useState)(!1);(0,l.useEffect)(()=>{C&&Hc(s)},[s,C]);let V=async()=>{if(!ee){ye(!0);try{C?(await g0(),localStorage.setItem($a,"0"),T(!1),J("success","Notifications turned off")):(await h0(),await Hc(s),localStorage.setItem($a,"1"),T(!0),J("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(D){J("error",D.message||"Couldn't set up notifications")}finally{ye(!1)}}},J=(D,U)=>{w({type:D,text:U})};(0,l.useEffect)(()=>{if(!I)return;let D=setTimeout(()=>w(null),3200);return()=>clearTimeout(D)},[I]);let xe=()=>{try{let D={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:d,projects:g,goodHabits:y,badHabits:x,rewards:p}},U=new Blob([JSON.stringify(D,null,2)],{type:"application/json"}),de=URL.createObjectURL(U),ce=O(0),Ie=document.createElement("a");Ie.href=de,Ie.download=`tasks-sh-backup-${ce}.json`,document.body.appendChild(Ie),Ie.click(),Ie.remove(),URL.revokeObjectURL(de),J("ok","backup exported")}catch{J("err","export failed")}},Se=()=>P.current?.click(),Gt=D=>{let U=D.target.files&&D.target.files[0];if(D.target.value="",!U)return;let de=new FileReader;de.onerror=()=>J("err","couldn't read that file"),de.onload=()=>{try{let ce=JSON.parse(String(de.result)),Ie=ce&&typeof ce=="object"&&ce.data?ce.data:ce;if(!Ie||typeof Ie!="object")throw new Error("bad shape");let Qa={tasks:a,routines:u,vaultHabits:m,projects:h,goodHabits:k,badHabits:E,rewards:c},Vr=0;for(let vi of Object.keys(Qa))Array.isArray(Ie[vi])&&(Qa[vi](Ie[vi]),Vr++);if(Vr===0){J("err","no recognizable data in that file");return}N0(S0(Ie)),J("ok",`imported ${Vr} data set${Vr===1?"":"s"}`)}catch{J("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},de.readAsText(U)},pt=Va(),Ct=pt.hour*60+pt.minute,{currentId:A,sorted:$}=Ja(s,Ct),[X,G]=(0,l.useState)(null),ue=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{if(ue.current===void 0){ue.current=A;return}if(A!==ue.current){let D=$.find(U=>U.id===A);D&&G({id:A,label:D.label,time:D.time}),ue.current=A}},[A,$]),(0,l.useEffect)(()=>{if(!X)return;let D=setTimeout(()=>G(null),6e3);return()=>clearTimeout(D)},[X]),(0,l.useEffect)(()=>{try{localStorage.setItem(Lc,JSON.stringify(i))}catch{}},[i]),(0,l.useEffect)(()=>{try{localStorage.setItem(Ic,JSON.stringify(s))}catch{}},[s]),(0,l.useEffect)(()=>{try{localStorage.setItem(Fc,JSON.stringify(d))}catch{}},[d]),(0,l.useEffect)(()=>{try{localStorage.setItem(Oc,JSON.stringify(g))}catch{}},[g]),(0,l.useEffect)(()=>{try{localStorage.setItem(jc,JSON.stringify(y))}catch{}},[y]),(0,l.useEffect)(()=>{try{localStorage.setItem($c,JSON.stringify(x))}catch{}},[x]),(0,l.useEffect)(()=>{try{localStorage.setItem(Uc,JSON.stringify(p))}catch{}},[p]);let _e=(0,l.useMemo)(()=>{let D=i.length,U=i.filter(Ie=>Ie.done).length,de=D-U,ce=D===0?0:Math.round(U/D*100);return{total:D,done:U,pending:de,pct:ce}},[i]),mn=(0,l.useMemo)(()=>{let D=i.filter(U=>!U.done);return hi.map(U=>({key:U.key,label:U.label,color:U.color,value:D.filter(de=>de.priority===U.key).length}))},[i]),hn=(0,l.useMemo)(()=>{let D=i;return M==="active"&&(D=D.filter(U=>!U.done)),M==="done"&&(D=D.filter(U=>U.done)),[...D].sort((U,de)=>{if(U.done!==de.done)return U.done?1:-1;let ce={high:0,mid:1,low:2};return ce[U.priority]-ce[de.priority]})},[i,M]),Ga=()=>{let D=v.trim();D&&(a(U=>[...U,{id:me(),text:D,done:!1,priority:N,createdAt:Date.now()}]),b(""),L.current?.focus(),F.click())},ep=D=>{let U=!1;a(de=>de.map(ce=>ce.id!==D?ce:(U=!ce.done,{...ce,done:!ce.done}))),U?F.success():F.click()},tp=D=>{a(U=>U.filter(de=>de.id!==D)),F.delete()},np=()=>{a(D=>D.filter(U=>!U.done)),F.whoosh()};return l.default.createElement("div",{className:"app-root"},l.default.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        html, body, #root { height: 100%; }

        .app-root {
          height: 100vh;
          height: 100dvh;
          width: 100vw;
          background: #0B0D10;
          font-family: 'Inter', sans-serif;
          color: #E7EAEE;
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
          background:
            radial-gradient(38% 42% at 18% 12%, rgba(94,234,212,0.065), transparent 70%),
            radial-gradient(42% 38% at 82% 88%, rgba(245,166,35,0.055), transparent 70%),
            radial-gradient(35% 40% at 62% 28%, rgba(121,192,255,0.045), transparent 70%);
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
          padding: 14px 0 12px;
          background: #14171C;
          border: 1px solid #23272E;
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
          color: #5EEAD4;
          font-variant-numeric: tabular-nums;
        }

        .timeline-jump {
          flex-shrink: 0;
          background: transparent;
          border: 1px solid #2C323A;
          border-radius: 999px;
          color: #F5A623;
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
          background: #1E2228;
          border-radius: 2px;
          overflow: hidden;
        }

        .timeline-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #5EEAD4, #79C0FF);
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
          color: #0B0D10;
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
          background: #F5A623;
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
          background: #F5A623;
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
            border-color: #F5A623;
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

        .edit-row-subs { flex-wrap: wrap; gap: 5px; }

        .sub-chip {
          border: 1px solid #23272E;
          background: #0F1215;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.03em;
          padding: 4px 9px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .sub-chip.active {
          border-color: #5EEAD4;
          color: #5EEAD4;
          background: rgba(94,234,212,0.1);
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

        .ai-thinking {
          display: flex; flex-direction: column; align-items: center;
          gap: 9px; padding: 18px 0 22px;
        }
        .ai-dots { display: flex; gap: 5px; }
        .ai-elapsed {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: #6B7280; letter-spacing: 0.05em;
          font-variant-numeric: tabular-nums;
        }
        .ai-slow { color: #F5A623; }
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
      `),l.default.createElement("div",{className:"panel"},X&&l.default.createElement("div",{className:"quest-banner",onClick:()=>G(null)},l.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),l.default.createElement("span",{className:"quest-banner-text"},l.default.createElement("b",null,"Now:")," ",X.label),l.default.createElement("button",{className:"quest-banner-close",onClick:D=>{D.stopPropagation(),G(null)},"aria-label":"Dismiss"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),l.default.createElement("div",{className:"titlebar"},l.default.createElement("div",{className:"titlebar-left"},l.default.createElement("div",{className:"dots"},l.default.createElement("span",{className:"dot red"}),l.default.createElement("span",{className:"dot amber"}),l.default.createElement("span",{className:"dot green"})),l.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),l.default.createElement("div",{className:"titlebar-right"},l.default.createElement("input",{type:"file",accept:"application/json",ref:P,onChange:Gt,style:{display:"none"}}),l.default.createElement("button",{className:`titlebar-icon-btn ${C?"notify-on":""}`,onClick:V,disabled:ee,"aria-label":C?"Turn off notifications":"Turn on notifications",title:C?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},C?l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),l.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),l.default.createElement("button",{className:"titlebar-icon-btn",onClick:Se,"aria-label":"Import backup",title:"Import backup"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("button",{className:"titlebar-icon-btn",onClick:xe,"aria-label":"Export backup",title:"Export backup"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},l.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),l.default.createElement("span",{className:"clock"},new Date(B).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),I&&l.default.createElement("div",{className:`data-toast ${I.type}`},I.text),l.default.createElement("div",{className:"tabs"},l.default.createElement("button",{className:e==="today"?"active":"",onClick:()=>o("today")},"today"),l.default.createElement("button",{className:e==="tasks"?"active":"",onClick:()=>o("tasks")},"tasks"),l.default.createElement("button",{className:e==="routines"?"active":"",onClick:()=>o("routines")},"routines"),l.default.createElement("button",{className:e==="vault"?"active":"",onClick:()=>o("vault")},"vault"),l.default.createElement("button",{className:e==="quest"?"active":"",onClick:()=>o("quest")},"quest"),l.default.createElement("button",{className:`tab-ai ${e==="ai"?"active":""}`,onClick:()=>o("ai")},"ai")),l.default.createElement("div",{key:e,className:"tab-content"},e==="today"?l.default.createElement(C0,{routines:s,setRoutines:u,tasks:i,setTasks:a,vaultHabits:d,goodHabits:y,rewards:p,setRewards:c,totalXP:f,setTab:o}):e==="tasks"?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"stats-bar stats-bar-viz"},l.default.createElement(Ha,{pct:_e.pct,size:64,stroke:5.5,label:`${_e.pct}%`}),l.default.createElement("div",{className:"stats-row-viz"},l.default.createElement("span",null,l.default.createElement("b",null,l.default.createElement(bt,{value:_e.total}))," total"),l.default.createElement("span",null,l.default.createElement("b",null,l.default.createElement(bt,{value:_e.pending}))," pending"),l.default.createElement("span",null,l.default.createElement("b",null,l.default.createElement(bt,{value:_e.done}))," done"))),_e.pending>0&&l.default.createElement("div",{className:"donut-card"},l.default.createElement(Qc,{size:96,stroke:14,centerLabel:_e.pending,centerSublabel:"open",segments:mn.map(D=>({key:D.key,value:D.value,color:D.color}))}),l.default.createElement("div",{className:"donut-legend"},mn.map(D=>l.default.createElement("div",{className:"donut-legend-row",key:D.key},l.default.createElement("span",{className:"donut-legend-dot",style:{background:D.color}}),l.default.createElement("span",null,D.label," priority"),l.default.createElement("span",{className:"donut-legend-val"},D.value))))),l.default.createElement("div",{className:"composer"},l.default.createElement("input",{ref:L,type:"text",placeholder:"add a task, press enter...",value:v,onChange:D=>b(D.target.value),onKeyDown:D=>D.key==="Enter"&&Ga()}),l.default.createElement("div",{className:"prio-select"},hi.map(D=>l.default.createElement("button",{key:D.key,className:N===D.key?"active":"",style:{"--pc":D.color},onClick:()=>_(D.key)},D.label))),l.default.createElement("button",{className:"add-btn",onClick:Ga,"aria-label":"Add task"},l.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},l.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),l.default.createElement("div",{className:"filters"},["all","active","done"].map(D=>l.default.createElement("button",{key:D,className:M===D?"active":"",onClick:()=>j(D)},D)),l.default.createElement("span",{className:"spacer"}),_e.done>0&&l.default.createElement("button",{className:"clear-btn",onClick:np},"clear done")),l.default.createElement("div",{className:"task-list"},hn.length===0?l.default.createElement("div",{className:"empty-state"},l.default.createElement("div",{className:"glyph"},"{ }"),l.default.createElement("div",{className:"msg"},M==="done"?"nothing completed yet":"queue's empty \u2014 add something")):hn.map((D,U)=>l.default.createElement(p0,{key:D.id,task:D,now:B,index:U,onToggle:ep,onDelete:tp})))):e==="routines"?l.default.createElement(jm,{routines:s,setRoutines:u}):e==="vault"?l.default.createElement(Ym,{vaultHabits:d,setVaultHabits:m,projects:g,setProjects:h}):e==="quest"?l.default.createElement(s0,{goodHabits:y,setGoodHabits:k,badHabits:x,setBadHabits:E,rewards:p,setRewards:c}):l.default.createElement(b0,{state:{routines:s,vaultHabits:d,goodHabits:y,badHabits:x,rewards:p,totalXP:f},setters:{setRoutines:u,setVaultHabits:m,setGoodHabits:k,setBadHabits:E,setRewards:c},showDataMsg:J}))))}var M0=Kc.default.createRoot(document.getElementById("root"));M0.render(l.default.createElement(A0));})();
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
