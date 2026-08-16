(()=>{var gf=Object.create;var Us=Object.defineProperty;var vf=Object.getOwnPropertyDescriptor;var yf=Object.getOwnPropertyNames;var xf=Object.getPrototypeOf,kf=Object.prototype.hasOwnProperty;var dn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of yf(t))!kf.call(e,a)&&a!==n&&Us(e,a,{get:()=>t[a],enumerable:!(r=vf(t,a))||r.enumerable});return e};var Ws=(e,t,n)=>(n=e!=null?gf(xf(e)):{},bf(t||!e||!e.__esModule?Us(n,"default",{value:e,enumerable:!0}):n,e));var eu=dn(V=>{"use strict";var yr=Symbol.for("react.element"),wf=Symbol.for("react.portal"),Nf=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),Mf=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),Tf=Symbol.for("react.memo"),Lf=Symbol.for("react.lazy"),Js=Symbol.iterator;function Pf(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var Ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gs=Object.assign,Xs={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=Xs,this.updater=n||Ks}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qs(){}qs.prototype=Bn.prototype;function ri(e,t,n){this.props=e,this.context=t,this.refs=Xs,this.updater=n||Ks}var oi=ri.prototype=new qs;oi.constructor=ri;Gs(oi,Bn.prototype);oi.isPureReactComponent=!0;var Vs=Array.isArray,Ys=Object.prototype.hasOwnProperty,ai={current:null},Qs={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ys.call(t,r)&&!Qs.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:yr,type:e,key:i,ref:l,props:a,_owner:ai.current}}function Df(e,t){return{$$typeof:yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr}function Af(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hs=/\/+/g;function ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Af(""+e.key):t.toString(36)}function wo(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case yr:case wf:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+ni(l,0):r,Vs(a)?(n="",e!=null&&(n=e.replace(Hs,"$&/")+"/"),wo(a,t,n,"",function(c){return c})):a!=null&&(ii(a)&&(a=Df(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Hs,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Vs(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+ni(i,s);l+=wo(i,t,n,u,a)}else if(u=Pf(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+ni(i,s++),l+=wo(i,t,n,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function bo(e,t,n){if(e==null)return e;var r=[],a=0;return wo(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Bf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},No={transition:null},If={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:No,ReactCurrentOwner:ai};function Rs(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:bo,forEach:function(e,t,n){bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bo(e,function(){t++}),t},toArray:function(e){return bo(e,function(t){return t})||[]},only:function(e){if(!ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Bn;V.Fragment=Nf;V.Profiler=Ef;V.PureComponent=ri;V.StrictMode=Sf;V.Suspense=_f;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;V.act=Rs;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gs({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ai.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ys.call(t,u)&&!Qs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:yr,type:e.type,key:a,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Mf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cf,_context:e},e.Consumer=e};V.createElement=Zs;V.createFactory=function(e){var t=Zs.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:zf,render:e}};V.isValidElement=ii;V.lazy=function(e){return{$$typeof:Lf,_payload:{_status:-1,_result:e},_init:Bf}};V.memo=function(e,t){return{$$typeof:Tf,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};V.unstable_act=Rs;V.useCallback=function(e,t){return $e.current.useCallback(e,t)};V.useContext=function(e){return $e.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};V.useEffect=function(e,t){return $e.current.useEffect(e,t)};V.useId=function(){return $e.current.useId()};V.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return $e.current.useMemo(e,t)};V.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};V.useRef=function(e){return $e.current.useRef(e)};V.useState=function(e){return $e.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return $e.current.useTransition()};V.version="18.3.1"});var li=dn((wg,tu)=>{"use strict";tu.exports=eu()});var du=dn(ee=>{"use strict";function di(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<So(a,t))e[r]=t,e[n]=a,n=r;else break e}}function ut(e){return e.length===0?null:e[0]}function Co(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>So(s,n))u<a&&0>So(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<a&&0>So(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function So(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(nu=performance,ee.unstable_now=function(){return nu.now()}):(si=Date,ru=si.now(),ee.unstable_now=function(){return si.now()-ru});var nu,si,ru,yt=[],Ut=[],$f=1,tt=null,Pe=3,Mo=!1,pn=!1,kr=!1,iu=typeof setTimeout=="function"?setTimeout:null,lu=typeof clearTimeout=="function"?clearTimeout:null,ou=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pi(e){for(var t=ut(Ut);t!==null;){if(t.callback===null)Co(Ut);else if(t.startTime<=e)Co(Ut),t.sortIndex=t.expirationTime,di(yt,t);else break;t=ut(Ut)}}function fi(e){if(kr=!1,pi(e),!pn)if(ut(yt)!==null)pn=!0,hi(mi);else{var t=ut(Ut);t!==null&&gi(fi,t.startTime-e)}}function mi(e,t){pn=!1,kr&&(kr=!1,lu(br),br=-1),Mo=!0;var n=Pe;try{for(pi(t),tt=ut(yt);tt!==null&&(!(tt.expirationTime>t)||e&&!cu());){var r=tt.callback;if(typeof r=="function"){tt.callback=null,Pe=tt.priorityLevel;var a=r(tt.expirationTime<=t);t=ee.unstable_now(),typeof a=="function"?tt.callback=a:tt===ut(yt)&&Co(yt),pi(t)}else Co(yt);tt=ut(yt)}if(tt!==null)var i=!0;else{var l=ut(Ut);l!==null&&gi(fi,l.startTime-t),i=!1}return i}finally{tt=null,Pe=n,Mo=!1}}var zo=!1,Eo=null,br=-1,su=5,uu=-1;function cu(){return!(ee.unstable_now()-uu<su)}function ui(){if(Eo!==null){var e=ee.unstable_now();uu=e;var t=!0;try{t=Eo(!0,e)}finally{t?xr():(zo=!1,Eo=null)}}else zo=!1}var xr;typeof ou=="function"?xr=function(){ou(ui)}:typeof MessageChannel<"u"?(ci=new MessageChannel,au=ci.port2,ci.port1.onmessage=ui,xr=function(){au.postMessage(null)}):xr=function(){iu(ui,0)};var ci,au;function hi(e){Eo=e,zo||(zo=!0,xr())}function gi(e,t){br=iu(function(){e(ee.unstable_now())},t)}ee.unstable_IdlePriority=5;ee.unstable_ImmediatePriority=1;ee.unstable_LowPriority=4;ee.unstable_NormalPriority=3;ee.unstable_Profiling=null;ee.unstable_UserBlockingPriority=2;ee.unstable_cancelCallback=function(e){e.callback=null};ee.unstable_continueExecution=function(){pn||Mo||(pn=!0,hi(mi))};ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):su=0<e?Math.floor(1e3/e):5};ee.unstable_getCurrentPriorityLevel=function(){return Pe};ee.unstable_getFirstCallbackNode=function(){return ut(yt)};ee.unstable_next=function(e){switch(Pe){case 1:case 2:case 3:var t=3;break;default:t=Pe}var n=Pe;Pe=t;try{return e()}finally{Pe=n}};ee.unstable_pauseExecution=function(){};ee.unstable_requestPaint=function(){};ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Pe;Pe=e;try{return t()}finally{Pe=n}};ee.unstable_scheduleCallback=function(e,t,n){var r=ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:$f++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>r?(e.sortIndex=n,di(Ut,e),ut(yt)===null&&e===ut(Ut)&&(kr?(lu(br),br=-1):kr=!0,gi(fi,n-r))):(e.sortIndex=a,di(yt,e),pn||Mo||(pn=!0,hi(mi))),e};ee.unstable_shouldYield=cu;ee.unstable_wrapCallback=function(e){var t=Pe;return function(){var n=Pe;Pe=t;try{return e.apply(this,arguments)}finally{Pe=n}}}});var fu=dn((Sg,pu)=>{"use strict";pu.exports=du()});var vp=dn(et=>{"use strict";var Ff=li(),Ze=fu();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kc=new Set,Jr={};function En(e,t){nr(e,t),nr(e+"Capture",t)}function nr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)kc.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oi=Object.prototype.hasOwnProperty,Of=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},hu={};function jf(e){return Oi.call(hu,e)?!0:Oi.call(mu,e)?!1:Of.test(e)?hu[e]=!0:(mu[e]=!0,!1)}function Uf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wf(e,t,n,r){if(t===null||typeof t>"u"||Uf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ll=/[\-:]([a-z])/g;function Pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ll,Pl);_e[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ll,Pl);_e[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ll,Pl);_e[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dl(e,t,n,r){var a=_e.hasOwnProperty(t)?_e[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wf(t,n,a,r)&&(n=null),r||a===null?jf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),Al=Symbol.for("react.strict_mode"),ji=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),Bl=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Wi=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),Nc=Symbol.for("react.offscreen"),gu=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,vi;function Tr(e){if(vi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vi=t&&t[1]||""}return`
`+vi+e}var yi=!1;function xi(e,t){if(!e||yi)return"";yi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{yi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Jf(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=xi(e.type,!1),e;case 11:return e=xi(e.type.render,!1),e;case 1:return e=xi(e.type,!0),e;default:return""}}function Ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Fn:return"Portal";case ji:return"Profiler";case Al:return"StrictMode";case Ui:return"Suspense";case Wi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wc:return(e.displayName||"Context")+".Consumer";case bc:return(e._context.displayName||"Context")+".Provider";case Bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return t=e.displayName||null,t!==null?t:Ji(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return Ji(e(t))}catch{}}return null}function Vf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ji(t);case 8:return t===Al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hf(e){var t=Sc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function To(e){e._valueTracker||(e._valueTracker=Hf(e))}function Ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vi(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cc(e,t){t=t.checked,t!=null&&Dl(e,"checked",t,!1)}function Hi(e,t){Cc(e,t);var n=rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ki(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ki(e,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ki(e,t,n){(t!=="number"||oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function Yn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Gi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Lr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rn(n)}}function Mc(e,t){var n=rn(t.value),r=rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ku(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lo,_c=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kf=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){Kf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function Tc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Lc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Tc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Gf=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,t){if(t){if(Gf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function $l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,Qn=null,Zn=null;function bu(e){if(e=so(e)){if(typeof Zi!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Pa(t),Zi(e.stateNode,e.type,t))}}function Pc(e){Qn?Zn?Zn.push(e):Zn=[e]:Qn=e}function Dc(){if(Qn){var e=Qn,t=Zn;if(Zn=Qn=null,bu(e),t)for(e=0;e<t.length;e++)bu(t[e])}}function Ac(e,t){return e(t)}function Bc(){}var ki=!1;function Ic(e,t,n){if(ki)return e(t,n);ki=!0;try{return Ac(e,t,n)}finally{ki=!1,(Qn!==null||Zn!==null)&&(Bc(),Dc())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Pa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ri=!1;if(Lt)try{In={},Object.defineProperty(In,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Ri=!1}var In;function Xf(e,t,n,r,a,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Br=!1,aa=null,ia=!1,el=null,qf={onError:function(e){Br=!0,aa=e}};function Yf(e,t,n,r,a,i,l,s,u){Br=!1,aa=null,Xf.apply(qf,arguments)}function Qf(e,t,n,r,a,i,l,s,u){if(Yf.apply(this,arguments),Br){if(Br){var c=aa;Br=!1,aa=null}else throw Error(C(198));ia||(ia=!0,el=c)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wu(e){if(Cn(e)!==e)throw Error(C(188))}function Zf(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return wu(a),e;if(i===r)return wu(a),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Fc(e){return e=Zf(e),e!==null?Oc(e):null}function Oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Oc(e);if(t!==null)return t;e=e.sibling}return null}var jc=Ze.unstable_scheduleCallback,Nu=Ze.unstable_cancelCallback,Rf=Ze.unstable_shouldYield,em=Ze.unstable_requestPaint,ve=Ze.unstable_now,tm=Ze.unstable_getCurrentPriorityLevel,Fl=Ze.unstable_ImmediatePriority,Uc=Ze.unstable_UserBlockingPriority,la=Ze.unstable_NormalPriority,nm=Ze.unstable_LowPriority,Wc=Ze.unstable_IdlePriority,za=null,wt=null;function rm(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:im,om=Math.log,am=Math.LN2;function im(e){return e>>>=0,e===0?32:31-(om(e)/am|0)|0}var Po=64,Do=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~a;s!==0?r=Pr(s):(i&=l,i!==0&&(r=Pr(i)))}else l=n&~a,l!==0?r=Pr(l):i!==0&&(r=Pr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),a=1<<n,r|=e[n],t&=~a;return r}function lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-mt(i),s=1<<l,u=a[l];u===-1?((s&n)===0||(s&r)!==0)&&(a[l]=lm(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=Po;return Po<<=1,(Po&4194240)===0&&(Po=64),e}function bi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-mt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Ol(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Y=0;function Vc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Hc,jl,Kc,Gc,Xc,nl=!1,Ao=[],qt=null,Yt=null,Qt=null,Kr=new Map,Gr=new Map,Ht=[],cm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function Nr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=so(t),t!==null&&jl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function dm(e,t,n,r,a){switch(t){case"focusin":return qt=Nr(qt,e,t,n,r,a),!0;case"dragenter":return Yt=Nr(Yt,e,t,n,r,a),!0;case"mouseover":return Qt=Nr(Qt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Kr.set(i,Nr(Kr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Gr.set(i,Nr(Gr.get(i)||null,e,t,n,r,a)),!0}return!1}function qc(e){var t=hn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=$c(n),t!==null){e.blockedOn=t,Xc(e.priority,function(){Kc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qi=r,n.target.dispatchEvent(r),Qi=null}else return t=so(n),t!==null&&jl(t),e.blockedOn=n,!1;t.shift()}return!0}function Eu(e,t,n){Xo(e)&&n.delete(t)}function pm(){nl=!1,qt!==null&&Xo(qt)&&(qt=null),Yt!==null&&Xo(Yt)&&(Yt=null),Qt!==null&&Xo(Qt)&&(Qt=null),Kr.forEach(Eu),Gr.forEach(Eu)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,nl||(nl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,pm)))}function Xr(e){function t(a){return Sr(a,e)}if(0<Ao.length){Sr(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Sr(qt,e),Yt!==null&&Sr(Yt,e),Qt!==null&&Sr(Qt,e),Kr.forEach(t),Gr.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)qc(n),n.blockedOn===null&&Ht.shift()}var Rn=Bt.ReactCurrentBatchConfig,ua=!0;function fm(e,t,n,r){var a=Y,i=Rn.transition;Rn.transition=null;try{Y=1,Ul(e,t,n,r)}finally{Y=a,Rn.transition=i}}function mm(e,t,n,r){var a=Y,i=Rn.transition;Rn.transition=null;try{Y=4,Ul(e,t,n,r)}finally{Y=a,Rn.transition=i}}function Ul(e,t,n,r){if(ua){var a=rl(e,t,n,r);if(a===null)zi(e,t,r,ca,n),Su(e,r);else if(dm(a,e,t,n,r))r.stopPropagation();else if(Su(e,r),t&4&&-1<cm.indexOf(e)){for(;a!==null;){var i=so(a);if(i!==null&&Hc(i),i=rl(e,t,n,r),i===null&&zi(e,t,r,ca,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else zi(e,t,r,null,n)}}var ca=null;function rl(e,t,n,r){if(ca=null,e=$l(r),e=hn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ca=e,null}function Yc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tm()){case Fl:return 1;case Uc:return 4;case la:case nm:return 16;case Wc:return 536870912;default:return 16}default:return 16}}var Gt=null,Wl=null,qo=null;function Qc(){if(qo)return qo;var e,t=Wl,n=t.length,r,a="value"in Gt?Gt.value:Gt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return qo=a.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function Cu(){return!1}function Re(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bo:Cu,this.isPropagationStopped=Cu,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),t}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=Re(ur),lo=pe({},ur,{view:0,detail:0}),hm=Re(lo),wi,Ni,Er,_a=pe({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(wi=e.screenX-Er.screenX,Ni=e.screenY-Er.screenY):Ni=wi=0,Er=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),Mu=Re(_a),gm=pe({},_a,{dataTransfer:0}),vm=Re(gm),ym=pe({},lo,{relatedTarget:0}),Si=Re(ym),xm=pe({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),km=Re(xm),bm=pe({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wm=Re(bm),Nm=pe({},ur,{data:0}),zu=Re(Nm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cm[e])?!!t[e]:!1}function Vl(){return Mm}var zm=pe({},lo,{key:function(e){if(e.key){var t=Sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=Re(zm),Tm=pe({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=Re(Tm),Lm=pe({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),Pm=Re(Lm),Dm=pe({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=Re(Dm),Bm=pe({},_a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=Re(Bm),$m=[9,13,27,32],Hl=Lt&&"CompositionEvent"in window,Ir=null;Lt&&"documentMode"in document&&(Ir=document.documentMode);var Fm=Lt&&"TextEvent"in window&&!Ir,Zc=Lt&&(!Hl||Ir&&8<Ir&&11>=Ir),Tu=" ",Lu=!1;function Rc(e,t){switch(e){case"keyup":return $m.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Om(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Lu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Lu?null:e;default:return null}}function jm(e,t){if(jn)return e==="compositionend"||!Hl&&Rc(e,t)?(e=Qc(),qo=Wl=Gt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zc&&t.locale!=="ko"?null:t.data;default:return null}}var Um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Um[e.type]:t==="textarea"}function td(e,t,n,r){Pc(r),t=da(t,"onChange"),0<t.length&&(n=new Jl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,qr=null;function Wm(e){pd(e,0)}function Ta(e){var t=Jn(e);if(Ec(t))return e}function Jm(e,t){if(e==="change")return t}var nd=!1;Lt&&(Lt?($o="oninput"in document,$o||(Ei=document.createElement("div"),Ei.setAttribute("oninput","return;"),$o=typeof Ei.oninput=="function"),Io=$o):Io=!1,nd=Io&&(!document.documentMode||9<document.documentMode));var Io,$o,Ei;function Du(){$r&&($r.detachEvent("onpropertychange",rd),qr=$r=null)}function rd(e){if(e.propertyName==="value"&&Ta(qr)){var t=[];td(t,qr,e,$l(e)),Ic(Wm,t)}}function Vm(e,t,n){e==="focusin"?(Du(),$r=t,qr=n,$r.attachEvent("onpropertychange",rd)):e==="focusout"&&Du()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(qr)}function Km(e,t){if(e==="click")return Ta(t)}function Gm(e,t){if(e==="input"||e==="change")return Ta(t)}function Xm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Xm;function Yr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Oi.call(t,a)||!gt(e[a],t[a]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,t){var n=Au(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Au(n)}}function od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oa(e.document)}return t}function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qm(e){var t=ad(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&od(n.ownerDocument.documentElement,n)){if(r!==null&&Kl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Bu(n,i);var l=Bu(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ym=Lt&&"documentMode"in document&&11>=document.documentMode,Un=null,ol=null,Fr=null,al=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||Un==null||Un!==oa(r)||(r=Un,"selectionStart"in r&&Kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Yr(Fr,r)||(Fr=r,r=da(ol,"onSelect"),0<r.length&&(t=new Jl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Un)))}function Fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Ci={},id={};Lt&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function La(e){if(Ci[e])return Ci[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in id)return Ci[e]=t[n];return e}var ld=La("animationend"),sd=La("animationiteration"),ud=La("animationstart"),cd=La("transitionend"),dd=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){dd.set(e,t),En(t,[e])}for(Oo=0;Oo<$u.length;Oo++)jo=$u[Oo],Fu=jo.toLowerCase(),Ou=jo[0].toUpperCase()+jo.slice(1),an(Fu,"on"+Ou);var jo,Fu,Ou,Oo;an(ld,"onAnimationEnd");an(sd,"onAnimationIteration");an(ud,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(cd,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function ju(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qf(r,t,void 0,e),e.currentTarget=null}function pd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&a.isPropagationStopped())break e;ju(a,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&a.isPropagationStopped())break e;ju(a,s,c),i=u}}}if(ia)throw e=el,ia=!1,el=null,e}function oe(e,t){var n=t[cl];n===void 0&&(n=t[cl]=new Set);var r=e+"__bubble";n.has(r)||(fd(t,e,2,!1),n.add(r))}function Mi(e,t,n){var r=0;t&&(r|=4),fd(n,e,r,t)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Uo]){e[Uo]=!0,kc.forEach(function(n){n!=="selectionchange"&&(Qm.has(n)||Mi(n,!1,e),Mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uo]||(t[Uo]=!0,Mi("selectionchange",!1,t))}}function fd(e,t,n,r){switch(Yc(t)){case 1:var a=fm;break;case 4:a=mm;break;default:a=Ul}n=a.bind(null,t,n,e),a=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function zi(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;s!==null;){if(l=hn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Ic(function(){var c=i,d=$l(n),p=[];e:{var h=dd.get(e);if(h!==void 0){var v=Jl,k=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":v=_m;break;case"focusin":k="focus",v=Si;break;case"focusout":k="blur",v=Si;break;case"beforeblur":case"afterblur":v=Si;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Pm;break;case ld:case sd:case ud:v=km;break;case cd:v=Am;break;case"scroll":v=hm;break;case"wheel":v=Im;break;case"copy":case"cut":case"paste":v=wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=_u}var y=(t&4)!==0,_=!y&&e==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,f;m!==null;){f=m;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,g!==null&&(x=Hr(m,g),x!=null&&y.push(Zr(m,x,f)))),_)break;m=m.return}0<y.length&&(h=new v(h,k,null,n,d),p.push({event:h,listeners:y}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Qi&&(k=n.relatedTarget||n.fromElement)&&(hn(k)||k[Pt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=c,k=k?hn(k):null,k!==null&&(_=Cn(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(y=Mu,x="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=_u,x="onPointerLeave",g="onPointerEnter",m="pointer"),_=v==null?h:Jn(v),f=k==null?h:Jn(k),h=new y(x,m+"leave",v,n,d),h.target=_,h.relatedTarget=f,x=null,hn(d)===c&&(y=new y(g,m+"enter",k,n,d),y.target=f,y.relatedTarget=_,x=y),_=x,v&&k)t:{for(y=v,g=k,m=0,f=y;f;f=$n(f))m++;for(f=0,x=g;x;x=$n(x))f++;for(;0<m-f;)y=$n(y),m--;for(;0<f-m;)g=$n(g),f--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=$n(y),g=$n(g)}y=null}else y=null;v!==null&&Uu(p,h,v,y,!1),k!==null&&_!==null&&Uu(p,_,k,y,!0)}}e:{if(h=c?Jn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var N=Jm;else if(Pu(h))if(nd)N=Gm;else{N=Hm;var b=Vm}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Km);if(N&&(N=N(e,c))){td(p,N,n,d);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Ki(h,"number",h.value)}switch(b=c?Jn(c):window,e){case"focusin":(Pu(b)||b.contentEditable==="true")&&(Un=b,ol=c,Fr=null);break;case"focusout":Fr=ol=Un=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,Iu(p,n,d);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":Iu(p,n,d)}var M;if(Hl)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else jn?Rc(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Zc&&n.locale!=="ko"&&(jn||w!=="onCompositionStart"?w==="onCompositionEnd"&&jn&&(M=Qc()):(Gt=d,Wl="value"in Gt?Gt.value:Gt.textContent,jn=!0)),b=da(c,w),0<b.length&&(w=new zu(w,e,null,n,d),p.push({event:w,listeners:b}),M?w.data=M:(M=ed(n),M!==null&&(w.data=M)))),(M=Fm?Om(e,n):jm(e,n))&&(c=da(c,"onBeforeInput"),0<c.length&&(d=new zu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=M))}pd(p,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function da(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Hr(e,n),i!=null&&r.unshift(Zr(e,i,a)),i=Hr(e,t),i!=null&&r.push(Zr(e,i,a))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uu(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,a?(u=Hr(n,i),u!=null&&l.unshift(Zr(n,u,s))):a||(u=Hr(n,i),u!=null&&l.push(Zr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zm=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Zm,`
`).replace(Rm,"")}function Wo(e,t,n){if(t=Wu(t),Wu(e)!==t&&n)throw Error(C(425))}function pa(){}var il=null,ll=null;function sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ul=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,Ju=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ju<"u"?function(e){return Ju.resolve(null).then(e).catch(n0)}:ul;function n0(e){setTimeout(function(){throw e})}function _i(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Xr(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),bt="__reactFiber$"+cr,Rr="__reactProps$"+cr,Pt="__reactContainer$"+cr,cl="__reactEvents$"+cr,r0="__reactListeners$"+cr,o0="__reactHandles$"+cr;function hn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vu(e);e!==null;){if(n=e[bt])return n;e=Vu(e)}return t}e=n,n=e.parentNode}return null}function so(e){return e=e[bt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Pa(e){return e[Rr]||null}var dl=[],Vn=-1;function ln(e){return{current:e}}function ae(e){0>Vn||(e.current=dl[Vn],dl[Vn]=null,Vn--)}function te(e,t){Vn++,dl[Vn]=e.current,e.current=t}var on={},Ie=ln(on),Ke=ln(!1),kn=on;function rr(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ge(e){return e=e.childContextTypes,e!=null}function fa(){ae(Ke),ae(Ie)}function Hu(e,t,n){if(Ie.current!==on)throw Error(C(168));te(Ie,t),te(Ke,n)}function md(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(C(108,Vf(e)||"Unknown",a));return pe({},n,r)}function ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,kn=Ie.current,te(Ie,e),te(Ke,Ke.current),!0}function Ku(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=md(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,ae(Ke),ae(Ie),te(Ie,e)):ae(Ke),te(Ke,n)}var Mt=null,Da=!1,Ti=!1;function hd(e){Mt===null?Mt=[e]:Mt.push(e)}function a0(e){Da=!0,hd(e)}function sn(){if(!Ti&&Mt!==null){Ti=!0;var e=0,t=Y;try{var n=Mt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,Da=!1}catch(a){throw Mt!==null&&(Mt=Mt.slice(e+1)),jc(Fl,sn),a}finally{Y=t,Ti=!1}}return null}var Hn=[],Kn=0,ha=null,ga=0,nt=[],rt=0,bn=null,zt=1,_t="";function fn(e,t){Hn[Kn++]=ga,Hn[Kn++]=ha,ha=e,ga=t}function gd(e,t,n){nt[rt++]=zt,nt[rt++]=_t,nt[rt++]=bn,bn=e;var r=zt;e=_t;var a=32-mt(r)-1;r&=~(1<<a),n+=1;var i=32-mt(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,zt=1<<32-mt(t)+a|n<<a|r,_t=i+e}else zt=1<<i|n<<a|r,_t=e}function Gl(e){e.return!==null&&(fn(e,1),gd(e,1,0))}function Xl(e){for(;e===ha;)ha=Hn[--Kn],Hn[Kn]=null,ga=Hn[--Kn],Hn[Kn]=null;for(;e===bn;)bn=nt[--rt],nt[rt]=null,_t=nt[--rt],nt[rt]=null,zt=nt[--rt],nt[rt]=null}var Qe=null,Ye=null,le=!1,ft=null;function vd(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ye=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:zt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ye=null,!0):!1;default:return!1}}function pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fl(e){if(le){var t=Ye;if(t){var n=t;if(!Gu(e,t)){if(pl(e))throw Error(C(418));t=Zt(n.nextSibling);var r=Qe;t&&Gu(e,t)?vd(r,n):(e.flags=e.flags&-4097|2,le=!1,Qe=e)}}else{if(pl(e))throw Error(C(418));e.flags=e.flags&-4097|2,le=!1,Qe=e}}}function Xu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Jo(e){if(e!==Qe)return!1;if(!le)return Xu(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sl(e.type,e.memoizedProps)),t&&(t=Ye)){if(pl(e))throw yd(),Error(C(418));for(;t;)vd(e,t),t=Zt(t.nextSibling)}if(Xu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Qe?Zt(e.stateNode.nextSibling):null;return!0}function yd(){for(var e=Ye;e;)e=Zt(e.nextSibling)}function or(){Ye=Qe=null,le=!1}function ql(e){ft===null?ft=[e]:ft.push(e)}var i0=Bt.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=a.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Vo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qu(e){var t=e._init;return t(e._payload)}function xd(e){function t(g,m){if(e){var f=g.deletions;f===null?(g.deletions=[m],g.flags|=16):f.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function a(g,m){return g=nn(g,m),g.index=0,g.sibling=null,g}function i(g,m,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<m?(g.flags|=2,m):f):(g.flags|=2,m)):(g.flags|=1048576,m)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,f,x){return m===null||m.tag!==6?(m=$i(f,g.mode,x),m.return=g,m):(m=a(m,f),m.return=g,m)}function u(g,m,f,x){var N=f.type;return N===On?d(g,m,f.props.children,x,f.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Jt&&qu(N)===m.type)?(x=a(m,f.props),x.ref=Cr(g,m,f),x.return=g,x):(x=ra(f.type,f.key,f.props,null,g.mode,x),x.ref=Cr(g,m,f),x.return=g,x)}function c(g,m,f,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=Fi(f,g.mode,x),m.return=g,m):(m=a(m,f.children||[]),m.return=g,m)}function d(g,m,f,x,N){return m===null||m.tag!==7?(m=xn(f,g.mode,x,N),m.return=g,m):(m=a(m,f),m.return=g,m)}function p(g,m,f){if(typeof m=="string"&&m!==""||typeof m=="number")return m=$i(""+m,g.mode,f),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _o:return f=ra(m.type,m.key,m.props,null,g.mode,f),f.ref=Cr(g,null,m),f.return=g,f;case Fn:return m=Fi(m,g.mode,f),m.return=g,m;case Jt:var x=m._init;return p(g,x(m._payload),f)}if(Lr(m)||wr(m))return m=xn(m,g.mode,f,null),m.return=g,m;Vo(g,m)}return null}function h(g,m,f,x){var N=m!==null?m.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:s(g,m,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _o:return f.key===N?u(g,m,f,x):null;case Fn:return f.key===N?c(g,m,f,x):null;case Jt:return N=f._init,h(g,m,N(f._payload),x)}if(Lr(f)||wr(f))return N!==null?null:d(g,m,f,x,null);Vo(g,f)}return null}function v(g,m,f,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(f)||null,s(m,g,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _o:return g=g.get(x.key===null?f:x.key)||null,u(m,g,x,N);case Fn:return g=g.get(x.key===null?f:x.key)||null,c(m,g,x,N);case Jt:var b=x._init;return v(g,m,f,b(x._payload),N)}if(Lr(x)||wr(x))return g=g.get(f)||null,d(m,g,x,N,null);Vo(m,x)}return null}function k(g,m,f,x){for(var N=null,b=null,M=m,w=m=0,F=null;M!==null&&w<f.length;w++){M.index>w?(F=M,M=null):F=M.sibling;var T=h(g,M,f[w],x);if(T===null){M===null&&(M=F);break}e&&M&&T.alternate===null&&t(g,M),m=i(T,m,w),b===null?N=T:b.sibling=T,b=T,M=F}if(w===f.length)return n(g,M),le&&fn(g,w),N;if(M===null){for(;w<f.length;w++)M=p(g,f[w],x),M!==null&&(m=i(M,m,w),b===null?N=M:b.sibling=M,b=M);return le&&fn(g,w),N}for(M=r(g,M);w<f.length;w++)F=v(M,g,w,f[w],x),F!==null&&(e&&F.alternate!==null&&M.delete(F.key===null?w:F.key),m=i(F,m,w),b===null?N=F:b.sibling=F,b=F);return e&&M.forEach(function(W){return t(g,W)}),le&&fn(g,w),N}function y(g,m,f,x){var N=wr(f);if(typeof N!="function")throw Error(C(150));if(f=N.call(f),f==null)throw Error(C(151));for(var b=N=null,M=m,w=m=0,F=null,T=f.next();M!==null&&!T.done;w++,T=f.next()){M.index>w?(F=M,M=null):F=M.sibling;var W=h(g,M,T.value,x);if(W===null){M===null&&(M=F);break}e&&M&&W.alternate===null&&t(g,M),m=i(W,m,w),b===null?N=W:b.sibling=W,b=W,M=F}if(T.done)return n(g,M),le&&fn(g,w),N;if(M===null){for(;!T.done;w++,T=f.next())T=p(g,T.value,x),T!==null&&(m=i(T,m,w),b===null?N=T:b.sibling=T,b=T);return le&&fn(g,w),N}for(M=r(g,M);!T.done;w++,T=f.next())T=v(M,g,w,T.value,x),T!==null&&(e&&T.alternate!==null&&M.delete(T.key===null?w:T.key),m=i(T,m,w),b===null?N=T:b.sibling=T,b=T);return e&&M.forEach(function(ne){return t(g,ne)}),le&&fn(g,w),N}function _(g,m,f,x){if(typeof f=="object"&&f!==null&&f.type===On&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _o:e:{for(var N=f.key,b=m;b!==null;){if(b.key===N){if(N=f.type,N===On){if(b.tag===7){n(g,b.sibling),m=a(b,f.props.children),m.return=g,g=m;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Jt&&qu(N)===b.type){n(g,b.sibling),m=a(b,f.props),m.ref=Cr(g,b,f),m.return=g,g=m;break e}n(g,b);break}else t(g,b);b=b.sibling}f.type===On?(m=xn(f.props.children,g.mode,x,f.key),m.return=g,g=m):(x=ra(f.type,f.key,f.props,null,g.mode,x),x.ref=Cr(g,m,f),x.return=g,g=x)}return l(g);case Fn:e:{for(b=f.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){n(g,m.sibling),m=a(m,f.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Fi(f,g.mode,x),m.return=g,g=m}return l(g);case Jt:return b=f._init,_(g,m,b(f._payload),x)}if(Lr(f))return k(g,m,f,x);if(wr(f))return y(g,m,f,x);Vo(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,m!==null&&m.tag===6?(n(g,m.sibling),m=a(m,f),m.return=g,g=m):(n(g,m),m=$i(f,g.mode,x),m.return=g,g=m),l(g)):n(g,m)}return _}var ar=xd(!0),kd=xd(!1),va=ln(null),ya=null,Gn=null,Yl=null;function Ql(){Yl=Gn=ya=null}function Zl(e){var t=va.current;ae(va),e._currentValue=t}function ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){ya=e,Yl=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(He=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Yl!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(ya===null)throw Error(C(308));Gn=e,ya.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var gn=null;function Rl(e){gn===null?gn=[e]:gn.push(e)}function bd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Rl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Dt(e,n)}return a=r.interleaved,a===null?(t.next=t,Rl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Dt(e,n)}function Qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ol(e,n)}}function Yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xa(e,t,n,r){var a=e.updateQueue;Vt=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(i!==null){var p=a.baseState;l=0,d=c=u=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,y=s;switch(h=t,v=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){p=k.call(v,p,h);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,h=typeof k=="function"?k.call(v,p,h):k,h==null)break e;p=pe({},p,h);break e;case 2:Vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,l|=h;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;h=s,s=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(d===null&&(u=p),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Nn|=l,e.lanes=l,e.memoizedState=p}}function Qu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var uo={},Nt=ln(uo),eo=ln(uo),to=ln(uo);function vn(e){if(e===uo)throw Error(C(174));return e}function ts(e,t){switch(te(to,t),te(eo,e),te(Nt,uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xi(t,e)}ae(Nt),te(Nt,t)}function ir(){ae(Nt),ae(eo),ae(to)}function Nd(e){vn(to.current);var t=vn(Nt.current),n=Xi(t,e.type);t!==n&&(te(eo,e),te(Nt,n))}function ns(e){eo.current===e&&(ae(Nt),ae(eo))}var ce=ln(0);function ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Li=[];function rs(){for(var e=0;e<Li.length;e++)Li[e]._workInProgressVersionPrimary=null;Li.length=0}var Zo=Bt.ReactCurrentDispatcher,Pi=Bt.ReactCurrentBatchConfig,wn=0,de=null,ke=null,Se=null,ba=!1,Or=!1,no=0,l0=0;function De(){throw Error(C(321))}function os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function as(e,t,n,r,a,i){if(wn=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?d0:p0,e=n(r,a),Or){i=0;do{if(Or=!1,no=0,25<=i)throw Error(C(301));i+=1,Se=ke=null,t.updateQueue=null,Zo.current=f0,e=n(r,a)}while(Or)}if(Zo.current=wa,t=ke!==null&&ke.next!==null,wn=0,Se=ke=de=null,ba=!1,t)throw Error(C(300));return e}function is(){var e=no!==0;return no=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?de.memoizedState=Se=e:Se=Se.next=e,Se}function lt(){if(ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Se===null?de.memoizedState:Se.next;if(t!==null)Se=t,ke=e;else{if(e===null)throw Error(C(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Se===null?de.memoizedState=Se=e:Se=Se.next=e}return Se}function ro(e,t){return typeof t=="function"?t(e):t}function Di(e){var t=lt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ke,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((wn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,l=r):u=u.next=p,de.lanes|=d,Nn|=d}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,gt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,de.lanes|=i,Nn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ai(e){var t=lt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);gt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sd(){}function Ed(e,t){var n=de,r=lt(),a=t(),i=!gt(r.memoizedState,a);if(i&&(r.memoizedState=a,He=!0),r=r.queue,ls(zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,oo(9,Md.bind(null,n,r,a,t),void 0,null),Ee===null)throw Error(C(349));(wn&30)!==0||Cd(n,t,a)}return a}function Cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Md(e,t,n,r){t.value=n,t.getSnapshot=r,_d(t)&&Td(e)}function zd(e,t,n){return n(function(){_d(t)&&Td(e)})}function _d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Td(e){var t=Dt(e,1);t!==null&&ht(t,e,1,-1)}function Zu(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=c0.bind(null,de,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ld(){return lt().memoizedState}function Ro(e,t,n,r){var a=kt();de.flags|=e,a.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Aa(e,t,n,r){var a=lt();r=r===void 0?null:r;var i=void 0;if(ke!==null){var l=ke.memoizedState;if(i=l.destroy,r!==null&&os(r,l.deps)){a.memoizedState=oo(t,n,i,r);return}}de.flags|=e,a.memoizedState=oo(1|t,n,i,r)}function Ru(e,t){return Ro(8390656,8,e,t)}function ls(e,t){return Aa(2048,8,e,t)}function Pd(e,t){return Aa(4,2,e,t)}function Dd(e,t){return Aa(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bd(e,t,n){return n=n!=null?n.concat([e]):null,Aa(4,4,Ad.bind(null,t,e),n)}function ss(){}function Id(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&os(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $d(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&os(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fd(e,t,n){return(wn&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n):(gt(n,t)||(n=Jc(),de.lanes|=n,Nn|=n,e.baseState=!0),t)}function s0(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Pi.transition;Pi.transition={};try{e(!1),t()}finally{Y=n,Pi.transition=r}}function Od(){return lt().memoizedState}function u0(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jd(e))Ud(t,n);else if(n=bd(e,t,n,r),n!==null){var a=Oe();ht(n,e,r,a),Wd(n,t,r)}}function c0(e,t,n){var r=tn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jd(e))Ud(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(a.hasEagerState=!0,a.eagerState=s,gt(s,l)){var u=t.interleaved;u===null?(a.next=a,Rl(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}n=bd(e,t,a,r),n!==null&&(a=Oe(),ht(n,e,r,a),Wd(n,t,r))}}function jd(e){var t=e.alternate;return e===de||t!==null&&t===de}function Ud(e,t){Or=ba=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ol(e,n)}}var wa={readContext:it,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},d0={readContext:it,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,Ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=u0.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:ss,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=s0.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,a=kt();if(le){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Ee===null)throw Error(C(349));(wn&30)!==0||Cd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ru(zd.bind(null,r,i,e),[e]),r.flags|=2048,oo(9,Md.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=Ee.identifierPrefix;if(le){var n=_t,r=zt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=l0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},p0={readContext:it,useCallback:Id,useContext:it,useEffect:ls,useImperativeHandle:Bd,useInsertionEffect:Pd,useLayoutEffect:Dd,useMemo:$d,useReducer:Di,useRef:Ld,useState:function(){return Di(ro)},useDebugValue:ss,useDeferredValue:function(e){var t=lt();return Fd(t,ke.memoizedState,e)},useTransition:function(){var e=Di(ro)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Sd,useSyncExternalStore:Ed,useId:Od,unstable_isNewReconciler:!1},f0={readContext:it,useCallback:Id,useContext:it,useEffect:ls,useImperativeHandle:Bd,useInsertionEffect:Pd,useLayoutEffect:Dd,useMemo:$d,useReducer:Ai,useRef:Ld,useState:function(){return Ai(ro)},useDebugValue:ss,useDeferredValue:function(e){var t=lt();return ke===null?t.memoizedState=e:Fd(t,ke.memoizedState,e)},useTransition:function(){var e=Ai(ro)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Sd,useSyncExternalStore:Ed,useId:Od,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ba={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),a=tn(e),i=Tt(r,a);i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,a),t!==null&&(ht(t,e,a,r),Qo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),a=tn(e),i=Tt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,a),t!==null&&(ht(t,e,a,r),Qo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=tn(e),a=Tt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Rt(e,a,r),t!==null&&(ht(t,e,r,n),Qo(t,e,r))}};function ec(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(a,i):!0}function Jd(e,t,n){var r=!1,a=on,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(a=Ge(t)?kn:Ie.current,r=t.contextTypes,i=(r=r!=null)?rr(e,a):on),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function gl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},es(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=it(i):(i=Ge(t)?kn:Ie.current,a.context=rr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(hl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ba.enqueueReplaceState(a,a.state,null),xa(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=Jf(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Bi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var m0=typeof WeakMap=="function"?WeakMap:Map;function Vd(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sa||(Sa=!0,Ml=r),vl(e,t)},n}function Hd(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){vl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){vl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function nc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new m0;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=z0.bind(null,e,t,n),t.then(e,e))}function rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oc(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var h0=Bt.ReactCurrentOwner,He=!1;function Fe(e,t,n,r){t.child=e===null?kd(t,null,n,r):ar(t,e.child,n,r)}function ac(e,t,n,r,a){n=n.render;var i=t.ref;return er(t,a),r=as(e,t,n,r,i,a),n=is(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(le&&n&&Gl(t),t.flags|=1,Fe(e,t,r,a),t.child)}function ic(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!gs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Kd(e,t,i,r,a)):(e=ra(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yr,n(l,r)&&e.ref===t.ref)return At(e,t,a)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Yr(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,At(e,t,a)}return yl(e,t,n,r,a)}function Gd(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(qn,qe),qe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(qn,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(qn,qe),qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(qn,qe),qe|=r;return Fe(e,t,a,n),t.child}function Xd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yl(e,t,n,r,a){var i=Ge(n)?kn:Ie.current;return i=rr(t,i),er(t,a),n=as(e,t,n,r,i,a),r=is(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(le&&r&&Gl(t),t.flags|=1,Fe(e,t,n,a),t.child)}function lc(e,t,n,r,a){if(Ge(n)){var i=!0;ma(t)}else i=!1;if(er(t,a),t.stateNode===null)ea(e,t),Jd(t,n,r),gl(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=it(c):(c=Ge(n)?kn:Ie.current,c=rr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&tc(t,l,r,c),Vt=!1;var h=t.memoizedState;l.state=h,xa(t,r,l,a),u=t.memoizedState,s!==r||h!==u||Ke.current||Vt?(typeof d=="function"&&(hl(t,n,d,r),u=t.memoizedState),(s=Vt||ec(t,n,s,r,h,u,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,wd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:dt(t.type,s),l.props=c,p=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=it(u):(u=Ge(n)?kn:Ie.current,u=rr(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||h!==u)&&tc(t,l,r,u),Vt=!1,h=t.memoizedState,l.state=h,xa(t,r,l,a);var k=t.memoizedState;s!==p||h!==k||Ke.current||Vt?(typeof v=="function"&&(hl(t,n,v,r),k=t.memoizedState),(c=Vt||ec(t,n,c,r,h,k,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xl(e,t,n,r,i,a)}function xl(e,t,n,r,a,i){Xd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Ku(t,n,!1),At(e,t,i);r=t.stateNode,h0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ar(t,e.child,null,i),t.child=ar(t,null,s,i)):Fe(e,t,s,i),t.memoizedState=r.state,a&&Ku(t,n,!0),t.child}function qd(e){var t=e.stateNode;t.pendingContext?Hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hu(e,t.context,!1),ts(e,t.containerInfo)}function sc(e,t,n,r,a){return or(),ql(a),t.flags|=256,Fe(e,t,n,r),t.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yd(e,t,n){var r=t.pendingProps,a=ce.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),te(ce,a&1),e===null)return fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Fa(l,r,0,null),e=xn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bl(n),t.memoizedState=kl,e):us(t,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return g0(e,t,l,r,s,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=nn(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=nn(s,i):(i=xn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?bl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=kl,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function us(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ho(e,t,n,r){return r!==null&&ql(r),ar(t,e.child,null,n),e=us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g0(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Bi(Error(C(422))),Ho(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Fa({mode:"visible",children:r.children},a,0,null),i=xn(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&ar(t,e.child,null,l),t.child.memoizedState=bl(l),t.memoizedState=kl,i);if((t.mode&1)===0)return Ho(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=Bi(i,r,void 0),Ho(e,t,l,r)}if(s=(l&e.childLanes)!==0,He||s){if(r=Ee,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Dt(e,a),ht(r,e,a,-1))}return hs(),r=Bi(Error(C(421))),Ho(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=_0.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ye=Zt(a.nextSibling),Qe=t,le=!0,ft=null,e!==null&&(nt[rt++]=zt,nt[rt++]=_t,nt[rt++]=bn,zt=e.id,_t=e.overflow,bn=t),t=us(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ml(e.return,t,n)}function Ii(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Qd(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ii(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ka(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ii(t,!0,n,null,i);break;case"together":Ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function v0(e,t,n){switch(t.tag){case 3:qd(t),or();break;case 5:Nd(t);break;case 1:Ge(t.type)&&ma(t);break;case 4:ts(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;te(va,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ce,ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Yd(e,t,n):(te(ce,ce.current&1),e=At(e,t,n),e!==null?e.sibling:null);te(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Qd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),te(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Gd(e,t,n)}return At(e,t,n)}var Zd,wl,Rd,ep;Zd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wl=function(){};Rd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,vn(Nt.current);var i=null;switch(n){case"input":a=Vi(e,a),r=Vi(e,r),i=[];break;case"select":a=pe({},a,{value:void 0}),r=pe({},r,{value:void 0}),i=[];break;case"textarea":a=Gi(e,a),r=Gi(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pa)}qi(n,r);var l;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=a?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&oe("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};ep=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y0(e,t,n){var r=t.pendingProps;switch(Xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ge(t.type)&&fa(),Ae(t),null;case 3:return r=t.stateNode,ir(),ae(Ke),ae(Ie),rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Tl(ft),ft=null))),wl(e,t),Ae(t),null;case 5:ns(t);var a=vn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)Rd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ae(t),null}if(e=vn(Nt.current),Jo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[bt]=t,r[Rr]=i,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(a=0;a<Dr.length;a++)oe(Dr[a],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":vu(r,i),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},oe("invalid",r);break;case"textarea":xu(r,i),oe("invalid",r)}qi(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Wo(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Wo(r.textContent,s,e),a=["children",""+s]):Jr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&oe("scroll",r)}switch(n){case"input":To(r),yu(r,i,!0);break;case"textarea":To(r),ku(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pa)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[bt]=t,e[Rr]=r,Zd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Yi(n,r),n){case"dialog":oe("cancel",e),oe("close",e),a=r;break;case"iframe":case"object":case"embed":oe("load",e),a=r;break;case"video":case"audio":for(a=0;a<Dr.length;a++)oe(Dr[a],e);a=r;break;case"source":oe("error",e),a=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),a=r;break;case"details":oe("toggle",e),a=r;break;case"input":vu(e,r),a=Vi(e,r),oe("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=pe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":xu(e,r),a=Gi(e,r),oe("invalid",e);break;default:a=r}qi(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Lc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_c(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vr(e,u):typeof u=="number"&&Vr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&oe("scroll",e):u!=null&&Dl(e,i,u,l))}switch(n){case"input":To(e),yu(e,r,!1);break;case"textarea":To(e),ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)ep(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=vn(to.current),vn(Nt.current),Jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Ae(t),null;case 13:if(ae(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)yd(),or(),t.flags|=98560,i=!1;else if(i=Jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[bt]=t}else or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else ft!==null&&(Tl(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ce.current&1)!==0?be===0&&(be=3):hs())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return ir(),wl(e,t),e===null&&Qr(t.stateNode.containerInfo),Ae(t),null;case 10:return Zl(t.type._context),Ae(t),null;case 17:return Ge(t.type)&&fa(),Ae(t),null;case 19:if(ae(ce),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Mr(i,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ka(e),l!==null){for(t.flags|=128,Mr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&ve()>sr&&(t.flags|=128,r=!0,Mr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ka(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return Ae(t),null}else 2*ve()-i.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,Mr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ve(),t.sibling=null,n=ce.current,te(ce,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return ms(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(qe&1073741824)!==0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function x0(e,t){switch(Xl(t),t.tag){case 1:return Ge(t.type)&&fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),ae(Ke),ae(Ie),rs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ns(t),null;case 13:if(ae(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ce),null;case 4:return ir(),null;case 10:return Zl(t.type._context),null;case 22:case 23:return ms(),null;case 24:return null;default:return null}}var Ko=!1,Be=!1,k0=typeof WeakSet=="function"?WeakSet:Set,D=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Nl(e,t,n){try{n()}catch(r){me(e,t,r)}}var cc=!1;function b0(e,t){if(il=ua,e=ad(),Kl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var v;p!==n||a!==0&&p.nodeType!==3||(s=l+a),p!==i||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++c===a&&(s=l),h===i&&++d===r&&(u=l),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ll={focusedElem:e,selectionRange:n},ua=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,_=k.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:dt(t.type,y),_);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){me(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return k=cc,cc=!1,k}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Nl(t,n,i)}a=a.next}while(a!==r)}}function Ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function tp(e){var t=e.alternate;t!==null&&(e.alternate=null,tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Rr],delete t[cl],delete t[r0],delete t[o0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function np(e){return e.tag===5||e.tag===3||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pa));else if(r!==4&&(e=e.child,e!==null))for(El(e,t,n),e=e.sibling;e!==null;)El(e,t,n),e=e.sibling}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}var Me=null,pt=!1;function Wt(e,t,n){for(n=n.child;n!==null;)rp(e,t,n),n=n.sibling}function rp(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 5:Be||Xn(n,t);case 6:var r=Me,a=pt;Me=null,Wt(e,t,n),Me=r,pt=a,Me!==null&&(pt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(pt?(e=Me,n=n.stateNode,e.nodeType===8?_i(e.parentNode,n):e.nodeType===1&&_i(e,n),Xr(e)):_i(Me,n.stateNode));break;case 4:r=Me,a=pt,Me=n.stateNode.containerInfo,pt=!0,Wt(e,t,n),Me=r,pt=a;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Nl(n,t,l),a=a.next}while(a!==r)}Wt(e,t,n);break;case 1:if(!Be&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){me(n,t,s)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Wt(e,t,n),Be=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new k0),t.forEach(function(r){var a=T0.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,pt=!1;break e;case 3:Me=s.stateNode.containerInfo,pt=!0;break e;case 4:Me=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(Me===null)throw Error(C(160));rp(i,l,a),Me=null,pt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){me(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)op(t,e),t=t.sibling}function op(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),xt(e),r&4){try{jr(3,e,e.return),Ia(3,e)}catch(y){me(e,e.return,y)}try{jr(5,e,e.return)}catch(y){me(e,e.return,y)}}break;case 1:ct(t,e),xt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(ct(t,e),xt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var a=e.stateNode;try{Vr(a,"")}catch(y){me(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Cc(a,i),Yi(s,l);var c=Yi(s,i);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];d==="style"?Lc(a,p):d==="dangerouslySetInnerHTML"?_c(a,p):d==="children"?Vr(a,p):Dl(a,d,p,c)}switch(s){case"input":Hi(a,i);break;case"textarea":Mc(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Yn(a,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Yn(a,!!i.multiple,i.defaultValue,!0):Yn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Rr]=i}catch(y){me(e,e.return,y)}}break;case 6:if(ct(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(y){me(e,e.return,y)}}break;case 3:if(ct(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(y){me(e,e.return,y)}break;case 4:ct(t,e),xt(e);break;case 13:ct(t,e),xt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(ps=ve())),r&4&&pc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(c=Be)||d,ct(t,e),Be=c):ct(t,e),xt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(D=e,d=e.child;d!==null;){for(p=D=d;D!==null;){switch(h=D,v=h.child,h.tag){case 0:case 11:case 14:case 15:jr(4,h,h.return);break;case 1:Xn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){me(r,n,y)}}break;case 5:Xn(h,h.return);break;case 22:if(h.memoizedState!==null){mc(p);continue}}v!==null?(v.return=h,D=v):mc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Tc("display",l))}catch(y){me(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){me(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ct(t,e),xt(e),r&4&&pc(e);break;case 21:break;default:ct(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(np(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Vr(a,""),r.flags&=-33);var i=dc(e);Cl(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=dc(e);El(e,s,l);break;default:throw Error(C(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w0(e,t,n){D=e,ap(e,t,n)}function ap(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var a=D,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Ko;if(!l){var s=a.alternate,u=s!==null&&s.memoizedState!==null||Be;s=Ko;var c=Be;if(Ko=l,(Be=u)&&!c)for(D=a;D!==null;)l=D,u=l.child,l.tag===22&&l.memoizedState!==null?hc(a):u!==null?(u.return=l,D=u):hc(a);for(;i!==null;)D=i,ap(i,t,n),i=i.sibling;D=a,Ko=s,Be=c}fc(e,t,n)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,D=i):fc(e,t,n)}}function fc(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||Ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Qu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Xr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Be||t.flags&512&&Sl(t)}catch(h){me(t,t.return,h)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function mc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function hc(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ia(4,t)}catch(u){me(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){me(t,a,u)}}var i=t.return;try{Sl(t)}catch(u){me(t,i,u)}break;case 5:var l=t.return;try{Sl(t)}catch(u){me(t,l,u)}}}catch(u){me(t,t.return,u)}if(t===e){D=null;break}var s=t.sibling;if(s!==null){s.return=t.return,D=s;break}D=t.return}}var N0=Math.ceil,Na=Bt.ReactCurrentDispatcher,cs=Bt.ReactCurrentOwner,at=Bt.ReactCurrentBatchConfig,G=0,Ee=null,xe=null,ze=0,qe=0,qn=ln(0),be=0,ao=null,Nn=0,$a=0,ds=0,Ur=null,Ve=null,ps=0,sr=1/0,Ct=null,Sa=!1,Ml=null,en=null,Go=!1,Xt=null,Ea=0,Wr=0,zl=null,ta=-1,na=0;function Oe(){return(G&6)!==0?ve():ta!==-1?ta:ta=ve()}function tn(e){return(e.mode&1)===0?1:(G&2)!==0&&ze!==0?ze&-ze:i0.transition!==null?(na===0&&(na=Jc()),na):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Yc(e.type)),e)}function ht(e,t,n,r){if(50<Wr)throw Wr=0,zl=null,Error(C(185));io(e,n,r),((G&2)===0||e!==Ee)&&(e===Ee&&((G&2)===0&&($a|=n),be===4&&Kt(e,ze)),Xe(e,r),n===1&&G===0&&(t.mode&1)===0&&(sr=ve()+500,Da&&sn()))}function Xe(e,t){var n=e.callbackNode;sm(e,t);var r=sa(e,e===Ee?ze:0);if(r===0)n!==null&&Nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nu(n),t===1)e.tag===0?a0(gc.bind(null,e)):hd(gc.bind(null,e)),t0(function(){(G&6)===0&&sn()}),n=null;else{switch(Vc(r)){case 1:n=Fl;break;case 4:n=Uc;break;case 16:n=la;break;case 536870912:n=Wc;break;default:n=la}n=fp(n,ip.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ip(e,t){if(ta=-1,na=0,(G&6)!==0)throw Error(C(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=sa(e,e===Ee?ze:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ca(e,r);else{t=r;var a=G;G|=2;var i=sp();(Ee!==e||ze!==t)&&(Ct=null,sr=ve()+500,yn(e,t));do try{C0();break}catch(s){lp(e,s)}while(!0);Ql(),Na.current=i,G=a,xe!==null?t=0:(Ee=null,ze=0,t=be)}if(t!==0){if(t===2&&(a=tl(e),a!==0&&(r=a,t=_l(e,a))),t===1)throw n=ao,yn(e,0),Kt(e,r),Xe(e,ve()),n;if(t===6)Kt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!S0(a)&&(t=Ca(e,r),t===2&&(i=tl(e),i!==0&&(r=i,t=_l(e,i))),t===1))throw n=ao,yn(e,0),Kt(e,r),Xe(e,ve()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:mn(e,Ve,Ct);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=ps+500-ve(),10<t)){if(sa(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ul(mn.bind(null,e,Ve,Ct),t);break}mn(e,Ve,Ct);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-mt(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N0(r/1960))-r,10<r){e.timeoutHandle=ul(mn.bind(null,e,Ve,Ct),r);break}mn(e,Ve,Ct);break;case 5:mn(e,Ve,Ct);break;default:throw Error(C(329))}}}return Xe(e,ve()),e.callbackNode===n?ip.bind(null,e):null}function _l(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Tl(t)),e}function Tl(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function S0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!gt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~ds,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function gc(e){if((G&6)!==0)throw Error(C(327));tr();var t=sa(e,0);if((t&1)===0)return Xe(e,ve()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=tl(e);r!==0&&(t=r,n=_l(e,r))}if(n===1)throw n=ao,yn(e,0),Kt(e,t),Xe(e,ve()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Ve,Ct),Xe(e,ve()),null}function fs(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(sr=ve()+500,Da&&sn())}}function Sn(e){Xt!==null&&Xt.tag===0&&(G&6)===0&&tr();var t=G;G|=1;var n=at.transition,r=Y;try{if(at.transition=null,Y=1,e)return e()}finally{Y=r,at.transition=n,G=t,(G&6)===0&&sn()}}function ms(){qe=qn.current,ae(qn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e0(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Xl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fa();break;case 3:ir(),ae(Ke),ae(Ie),rs();break;case 5:ns(r);break;case 4:ir();break;case 13:ae(ce);break;case 19:ae(ce);break;case 10:Zl(r.type._context);break;case 22:case 23:ms()}n=n.return}if(Ee=e,xe=e=nn(e.current,null),ze=qe=t,be=0,ao=null,ds=$a=Nn=0,Ve=Ur=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}gn=null}return e}function lp(e,t){do{var n=xe;try{if(Ql(),Zo.current=wa,ba){for(var r=de.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ba=!1}if(wn=0,Se=ke=de=null,Or=!1,no=0,cs.current=null,n===null||n.return===null){be=1,ao=t,xe=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=ze,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=rc(l);if(v!==null){v.flags&=-257,oc(v,l,s,i,t),v.mode&1&&nc(i,c,t),t=v,u=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(u),t.updateQueue=y}else k.add(u);break e}else{if((t&1)===0){nc(i,c,t),hs();break e}u=Error(C(426))}}else if(le&&s.mode&1){var _=rc(l);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),oc(_,l,s,i,t),ql(lr(u,s));break e}}i=u=lr(u,s),be!==4&&(be=2),Ur===null?Ur=[i]:Ur.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Vd(i,u,t);Yu(i,g);break e;case 1:s=u;var m=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(en===null||!en.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Hd(i,s,t);Yu(i,x);break e}}i=i.return}while(i!==null)}cp(n)}catch(N){t=N,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function sp(){var e=Na.current;return Na.current=wa,e===null?wa:e}function hs(){(be===0||be===3||be===2)&&(be=4),Ee===null||(Nn&268435455)===0&&($a&268435455)===0||Kt(Ee,ze)}function Ca(e,t){var n=G;G|=2;var r=sp();(Ee!==e||ze!==t)&&(Ct=null,yn(e,t));do try{E0();break}catch(a){lp(e,a)}while(!0);if(Ql(),G=n,Na.current=r,xe!==null)throw Error(C(261));return Ee=null,ze=0,be}function E0(){for(;xe!==null;)up(xe)}function C0(){for(;xe!==null&&!Rf();)up(xe)}function up(e){var t=pp(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?cp(e):xe=t,cs.current=null}function cp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=y0(n,t,qe),n!==null){xe=n;return}}else{if(n=x0(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,xe=null;return}}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);be===0&&(be=5)}function mn(e,t,n){var r=Y,a=at.transition;try{at.transition=null,Y=1,M0(e,t,n,r)}finally{at.transition=a,Y=r}return null}function M0(e,t,n,r){do tr();while(Xt!==null);if((G&6)!==0)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(um(e,i),e===Ee&&(xe=Ee=null,ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Go||(Go=!0,fp(la,function(){return tr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=at.transition,at.transition=null;var l=Y;Y=1;var s=G;G|=4,cs.current=null,b0(e,n),op(n,e),qm(ll),ua=!!il,ll=il=null,e.current=n,w0(n,e,a),em(),G=s,Y=l,at.transition=i}else e.current=n;if(Go&&(Go=!1,Xt=e,Ea=a),i=e.pendingLanes,i===0&&(en=null),rm(n.stateNode,r),Xe(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Sa)throw Sa=!1,e=Ml,Ml=null,e;return(Ea&1)!==0&&e.tag!==0&&tr(),i=e.pendingLanes,(i&1)!==0?e===zl?Wr++:(Wr=0,zl=e):Wr=0,sn(),null}function tr(){if(Xt!==null){var e=Vc(Ea),t=at.transition,n=Y;try{if(at.transition=null,Y=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Ea=0,(G&6)!==0)throw Error(C(331));var a=G;for(G|=4,D=e.current;D!==null;){var i=D,l=i.child;if((D.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:jr(8,d,i)}var p=d.child;if(p!==null)p.return=d,D=p;else for(;D!==null;){d=D;var h=d.sibling,v=d.return;if(tp(d),d===c){D=null;break}if(h!==null){h.return=v,D=h;break}D=v}}}var k=i.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}D=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:jr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,D=g;break e}D=i.return}}var m=e.current;for(D=m;D!==null;){l=D;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,D=f;else e:for(l=m;D!==null;){if(s=D,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Ia(9,s)}}catch(N){me(s,s.return,N)}if(s===l){D=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,D=x;break e}D=s.return}}if(G=a,sn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(za,e)}catch{}r=!0}return r}finally{Y=n,at.transition=t}}return!1}function vc(e,t,n){t=lr(n,t),t=Vd(e,t,1),e=Rt(e,t,1),t=Oe(),e!==null&&(io(e,1,t),Xe(e,t))}function me(e,t,n){if(e.tag===3)vc(e,e,n);else for(;t!==null;){if(t.tag===3){vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=lr(n,e),e=Hd(t,e,1),t=Rt(t,e,1),e=Oe(),t!==null&&(io(t,1,e),Xe(t,e));break}}t=t.return}}function z0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(ze&n)===n&&(be===4||be===3&&(ze&130023424)===ze&&500>ve()-ps?yn(e,0):ds|=n),Xe(e,t)}function dp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Do,Do<<=1,(Do&130023424)===0&&(Do=4194304)));var n=Oe();e=Dt(e,t),e!==null&&(io(e,t,n),Xe(e,n))}function _0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dp(e,n)}function T0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),dp(e,n)}var pp;pp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)He=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return He=!1,v0(e,t,n);He=(e.flags&131072)!==0}else He=!1,le&&(t.flags&1048576)!==0&&gd(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ea(e,t),e=t.pendingProps;var a=rr(t,Ie.current);er(t,n),a=as(null,t,r,e,a,n);var i=is();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(i=!0,ma(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,es(t),a.updater=Ba,t.stateNode=a,a._reactInternals=t,gl(t,r,e,n),t=xl(null,t,r,!0,i,n)):(t.tag=0,le&&i&&Gl(t),Fe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ea(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=P0(r),e=dt(r,e),a){case 0:t=yl(null,t,r,e,n);break e;case 1:t=lc(null,t,r,e,n);break e;case 11:t=ac(null,t,r,e,n);break e;case 14:t=ic(null,t,r,dt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),yl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),lc(e,t,r,a,n);case 3:e:{if(qd(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,a=i.element,wd(e,t),xa(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=lr(Error(C(423)),t),t=sc(e,t,r,n,a);break e}else if(r!==a){a=lr(Error(C(424)),t),t=sc(e,t,r,n,a);break e}else for(Ye=Zt(t.stateNode.containerInfo.firstChild),Qe=t,le=!0,ft=null,n=kd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===a){t=At(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Nd(t),e===null&&fl(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,sl(r,a)?l=null:i!==null&&sl(r,i)&&(t.flags|=32),Xd(e,t),Fe(e,t,l,n),t.child;case 6:return e===null&&fl(t),null;case 13:return Yd(e,t,n);case 4:return ts(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ar(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),ac(e,t,r,a,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,te(va,r._currentValue),r._currentValue=l,i!==null)if(gt(i.value,l)){if(i.children===a.children&&!Ke.current){t=At(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Tt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ml(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ml(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Fe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,er(t,n),a=it(a),r=r(a),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,a=dt(r,t.pendingProps),a=dt(r.type,a),ic(e,t,r,a,n);case 15:return Kd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),ea(e,t),t.tag=1,Ge(r)?(e=!0,ma(t)):e=!1,er(t,n),Jd(t,r,a),gl(t,r,a,n),xl(null,t,r,!0,e,n);case 19:return Qd(e,t,n);case 22:return Gd(e,t,n)}throw Error(C(156,t.tag))};function fp(e,t){return jc(e,t)}function L0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new L0(e,t,n,r)}function gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P0(e){if(typeof e=="function")return gs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bl)return 11;if(e===Il)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ra(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")gs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case On:return xn(n.children,a,i,t);case Al:l=8,a|=8;break;case ji:return e=ot(12,n,t,a|2),e.elementType=ji,e.lanes=i,e;case Ui:return e=ot(13,n,t,a),e.elementType=Ui,e.lanes=i,e;case Wi:return e=ot(19,n,t,a),e.elementType=Wi,e.lanes=i,e;case Nc:return Fa(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bc:l=10;break e;case wc:l=9;break e;case Bl:l=11;break e;case Il:l=14;break e;case Jt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=ot(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function xn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Fa(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Nc,e.lanes=n,e.stateNode={isHidden:!1},e}function $i(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Fi(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function D0(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function vs(e,t,n,r,a,i,l,s,u){return e=new D0(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},es(i),e}function A0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mp(e){if(!e)return on;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ge(n))return md(e,n,t)}return t}function hp(e,t,n,r,a,i,l,s,u){return e=vs(n,r,!0,e,a,i,l,s,u),e.context=mp(null),n=e.current,r=Oe(),a=tn(n),i=Tt(r,a),i.callback=t??null,Rt(n,i,a),e.current.lanes=a,io(e,a,r),Xe(e,r),e}function Oa(e,t,n,r){var a=t.current,i=Oe(),l=tn(a);return n=mp(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(a,t,l),e!==null&&(ht(e,a,l,i),Qo(e,a,l)),l}function Ma(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function yc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ys(e,t){yc(e,t),(e=e.alternate)&&yc(e,t)}function B0(){return null}var gp=typeof reportError=="function"?reportError:function(e){console.error(e)};function xs(e){this._internalRoot=e}ja.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Oa(e,t,null,null)};ja.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){Oa(null,e,null,null)}),t[Pt]=null}};function ja(e){this._internalRoot=e}ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&qc(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function I0(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=Ma(l);i.call(c)}}var l=hp(t,r,e,0,null,!1,!1,"",xc);return e._reactRootContainer=l,e[Pt]=l.current,Qr(e.nodeType===8?e.parentNode:e),Sn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var c=Ma(u);s.call(c)}}var u=vs(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=u,e[Pt]=u.current,Qr(e.nodeType===8?e.parentNode:e),Sn(function(){Oa(t,u,n,r)}),u}function Wa(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var u=Ma(l);s.call(u)}}Oa(t,l,e,a)}else l=I0(n,t,e,a,r);return Ma(l)}Hc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(Ol(t,n|1),Xe(t,ve()),(G&6)===0&&(sr=ve()+500,sn()))}break;case 13:Sn(function(){var r=Dt(e,1);if(r!==null){var a=Oe();ht(r,e,1,a)}}),ys(e,1)}};jl=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Oe();ht(t,e,134217728,n)}ys(e,134217728)}};Kc=function(e){if(e.tag===13){var t=tn(e),n=Dt(e,t);if(n!==null){var r=Oe();ht(n,e,t,r)}ys(e,t)}};Gc=function(){return Y};Xc=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};Zi=function(e,t,n){switch(t){case"input":if(Hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Pa(r);if(!a)throw Error(C(90));Ec(r),Hi(r,a)}}}break;case"textarea":Mc(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}};Ac=fs;Bc=Sn;var $0={usingClientEntryPoint:!1,Events:[so,Jn,Pa,Pc,Dc,fs]},zr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F0={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fc(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||B0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(_r=__REACT_DEVTOOLS_GLOBAL_HOOK__,!_r.isDisabled&&_r.supportsFiber))try{za=_r.inject(F0),wt=_r}catch{}var _r;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(t))throw Error(C(200));return A0(e,t,null,n)};et.createRoot=function(e,t){if(!ks(e))throw Error(C(299));var n=!1,r="",a=gp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=vs(e,1,!1,null,null,n,!1,r,a),e[Pt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new xs(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Fc(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Sn(e)};et.hydrate=function(e,t,n){if(!Ua(t))throw Error(C(200));return Wa(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!ks(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=gp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=hp(t,null,e,1,n??null,a,!1,i,l),e[Pt]=t.current,Qr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ja(t)};et.render=function(e,t,n){if(!Ua(t))throw Error(C(200));return Wa(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(C(40));return e._reactRootContainer?(Sn(function(){Wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};et.unstable_batchedUpdates=fs;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ua(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Wa(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426"});var kp=dn((Cg,xp)=>{"use strict";function yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yp)}catch(e){console.error(e)}}yp(),xp.exports=vp()});var wp=dn(bs=>{"use strict";var bp=kp();bs.createRoot=bp.createRoot,bs.hydrateRoot=bp.hydrateRoot;var Mg});var o=Ws(li()),qp=Ws(wp()),Ka=Date.now();function we(){return Ka+=1,Ka}var Ga=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function pr(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(a=>a.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function O0(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function U(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function st(e){let[t,n]=e.split(":").map(Number);return t*60+n}function St(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function It(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function ws(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Qa(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(U(0)))n=0;else if(t.has(U(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,a=n,i=0,l=!0,s=!1;for(;;)if(t.has(U(a)))r++,i++,!l&&i>=7&&(l=!0,i=0),a-=1;else if(l)l=!1,i=0,s=!0,a-=1;else break;return{streak:r,freezeUsed:s}}function Ns(e){return Qa(e).streak}var j0=[15,30,45,60,90,120],Za={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},open(e){this.fn&&this.fn(e)}},go={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},propagate(e,t,n){this.fn&&this.fn(e,t,n)}},Np="tasksh.links.v1",Yp={routine:{label:"routine",plural:"routines"},good:{label:"quest",plural:"quest habits"},vault:{label:"vault",plural:"vault habits"}},Tn=(e,t)=>`${e}:${t}`,Qp=e=>{let t=String(e).indexOf(":");return{kind:String(e).slice(0,t),id:Number(String(e).slice(t+1))}};function Zp(e,t){let n=[];for(let[r,a]of e)r===t?n.push(a):a===t&&n.push(r);return n}function U0(e,t,n){return e.some(([r,a])=>r===t&&a===n||r===n&&a===t)}function W0(e,t,n){return t===n||U0(e,t,n)?e:[...e,[t,n]]}function J0(e,t,n){return e.filter(([r,a])=>!(r===t&&a===n||r===n&&a===t))}function Sp(e,t){let{kind:n,id:r}=Qp(e),a=n==="routine"?t.routines:n==="good"?t.goodHabits:n==="vault"?t.vaultHabits:null;if(!a)return null;let i=a.find(l=>l.id===r);return i?{kind:n,id:r,label:i.label,meta:Yp[n]?.label||n}:null}function V0(e,t,n,r,a){let i=Zp(n,e);if(!i.length)return 0;let l=(u,c)=>u.map(d=>{if(d.id!==c)return d;let p=d.history||[],h=p.includes(a);return t===h?d:{...d,history:t?[...p,a]:p.filter(v=>v!==a)}}),s={routine:[],good:[],vault:[]};for(let u of i){let{kind:c,id:d}=Qp(u);s[c]&&s[c].push(d)}return s.routine.length&&r.setRoutines&&r.setRoutines(u=>s.routine.reduce((c,d)=>l(c,d),u)),s.good.length&&r.setGoodHabits&&r.setGoodHabits(u=>s.good.reduce((c,d)=>l(c,d),u)),s.vault.length&&r.setVaultHabits&&r.setVaultHabits(u=>s.vault.reduce((c,d)=>l(c,d),u)),i.length}function H0(){let[e,t]=(0,o.useState)(()=>Te(Np,[]));return(0,o.useEffect)(()=>{try{localStorage.setItem(Np,JSON.stringify(e))}catch{}},[e]),{links:e,setLinks:t}}var Xa="tasksh.meta.v1";function mo(e){try{let t=Te(Xa,{});localStorage.setItem(Xa,JSON.stringify({...t,...e}))}catch{}}var Ep="tasksh.achievements.v1",Cp="tasksh.wallet.v1",ho=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:e=>e.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:e=>e.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:e=>e.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:e=>e.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:e=>e.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:e=>e.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:e=>e.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:e=>e.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:e=>e.totalHabits>0&&e.doneToday>=e.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:e=>e.totalRoutines>0&&e.routinesDoneToday>=e.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:e=>e.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:e=>e.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:e=>e.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:e=>e.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:e=>e.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:e=>e.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:e=>e.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:e=>e.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:e=>e.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:e=>e.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:e=>e.coins>=1e3}];function Rp(e){return ho.find(t=>t.id===e)}function K0(e,t){let n=new Set(t),r=[];for(let a of ho){if(n.has(a.id))continue;let i=!1;try{i=!!a.test(e)}catch{i=!1}i&&r.push(a.id)}return r}var G0=e=>20+e*5;function X0(e){let[t,n]=(0,o.useState)(()=>Te(Ep,[])),[r,a]=(0,o.useState)(()=>Te(Cp,{coins:0})),[i,l]=(0,o.useState)([]);(0,o.useEffect)(()=>{try{localStorage.setItem(Ep,JSON.stringify(t))}catch{}},[t]),(0,o.useEffect)(()=>{try{localStorage.setItem(Cp,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let c=K0({...e,coins:r.coins},t);if(!c.length)return;n(p=>[...p,...c]),l(p=>[...p,...c]);let d=c.reduce((p,h)=>p+(Rp(h)?.coins||0),0);d&&a(p=>({...p,coins:p.coins+d}))},[e,t,r.coins]);let s=(0,o.useCallback)(c=>a(d=>({...d,coins:Math.max(0,d.coins+c)})),[]),u=(0,o.useCallback)(()=>l(c=>c.slice(1)),[]);return{earned:t,wallet:r,coins:r.coins,queue:i,current:i[0]||null,shift:u,addCoins:s}}var cn={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},Ss="tasksh.pet.v1",Pn=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:3,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:6,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:10,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:14,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:17,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:20,name:"Aurelis",title:"legendary guardian",scale:1.06}];function Ha(e){let t=Pn[0];for(let n of Pn)e>=n.minLevel&&(t=n);return t}function Ms(e){return Pn.find(t=>t.minLevel>e)||null}var Mp={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},zn=e=>Math.max(0,Math.min(100,Math.round(e)));function zp(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let a=i=>r*i;return{...e,happiness:zn(e.happiness-a(.55)),energy:zn(e.energy-a(.75)),friendship:zn(e.friendship-a(.12)),intelligence:e.intelligence,lastTick:t}}var q0={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function Es(e,t){let n=q0[t];return n?{...e,happiness:zn(e.happiness+(n.happiness||0)),energy:zn(e.energy+(n.energy||0)),friendship:zn(e.friendship+(n.friendship||0)),intelligence:zn(e.intelligence+(n.intelligence||0))}:e}function Ls(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function ef(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function un(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function Y0(e){let{pet:t,level:n,hour:r,doneToday:a,totalToday:i,streak:l,phase:s}=e,u=Ls(t),c=Math.floor(Date.now()/36e5);return t.energy<22?un(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],c):i>0&&a===i?un([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],c):l>=7?un([`${l} days running. that's a habit now, not an effort.`,`${l} in a row. the hard part's behind you.`],c):a===0&&r>=14?un(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],c):s==="night"&&r>=23?un(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],c):s==="morning"?un(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],c):u.key==="joyful"?un(["good day so far. i can tell.","you're in a rhythm. keep it easy."],c):t.friendship<15?"still getting to know you. tell me something.":un([`${a} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],c)}function Q0(e){let{pet:t,level:n,doneToday:r,totalToday:a,streak:i,routineNow:l,nextRoutine:s}=e,u=Ls(t);return[`pet: ${t.name}, ${Pn[t.stage].name} form, mood ${u.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${ef(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${a} habits done today, best streak ${i}`,l?`right now: ${l}`:"no routine running",s?`next up: ${s}`:""].filter(Boolean).join("; ")}function Z0(e,t){let n=(0,o.useRef)(Te(Ss,null)===null),[r,a]=(0,o.useState)(()=>{let p=Te(Ss,null),h=p?{...Mp,...p}:{...Mp,born:Date.now(),lastTick:Date.now()};return zp(h,Date.now())}),[i,l]=(0,o.useState)(null);(0,o.useEffect)(()=>{try{localStorage.setItem(Ss,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let p=setInterval(()=>a(h=>zp(h,Date.now())),3e5);return()=>clearInterval(p)},[]);let s=(0,o.useMemo)(()=>Ha(e),[e]);(0,o.useEffect)(()=>{if(n.current){n.current=!1,s.stage!==r.stage&&a(p=>({...p,stage:s.stage}));return}if(s.stage>r.stage){let p=r.stage;l({from:p,to:s.stage}),a(h=>Es({...h,stage:s.stage},"levelUp")),P.success()}else s.stage<r.stage&&a(p=>({...p,stage:s.stage}))},[s.stage,r.stage]);let u=(0,o.useCallback)(p=>{a(h=>Es(h,p))},[]);(0,o.useEffect)(()=>cn.on(p=>a(h=>Es(h,p))),[]);let c=(0,o.useCallback)(p=>{let h=String(p||"").trim().slice(0,14);h&&a(v=>({...v,name:h}))},[]),d=(0,o.useCallback)((p,h)=>{a(v=>({...v,chats:p==="user"?v.chats+1:v.chats,log:[...v.log||[],{role:p,text:String(h).slice(0,240)}].slice(-8)}))},[]);return{pet:r,form:s,mood:Ls(r),evolution:i,clearEvolution:()=>l(null),nudge:u,rename:c,remember:d}}var zs=o.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:a=!0,evolving:i=!1}){let l=Math.max(0,Math.min(6,t)),s=25+l*1.9,u=22-l*.55,c=78+l*.9,d=c-s*.8-u*.62-(l>=3?5:0),p=4.6-l*.3,h=Math.min(6+l*5.2,Math.max(4,d-u-9)),v=9+l*1.1,k=9+l*5.4,y=33+l*5.2,_=l>=3,g=l>=4,m=l>=6,f=l>=5,x=l>=2?Math.min(4,l-1):0,N=n==="sleepy"||n==="tired",b=n==="joyful",M=n==="low"||n==="drained",w=N?.9:p*(b?1.16:1)*2,F=M?`M 56 ${d+9} q 8 -5 16 0`:b?`M 55 ${d+6} q 9 8 18 0`:`M 57 ${d+7} q 7 4 14 0`;return o.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${a?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":Pn[l].scale},role:"img","aria-label":`${Pn[l].name}, ${n}`},o.default.createElement("defs",null,o.default.createElement("radialGradient",{id:`pg-body-${l}`,cx:"38%",cy:"30%"},o.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),o.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),o.default.createElement("radialGradient",{id:`pg-aura-${l}`,cx:"50%",cy:"50%"},o.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),o.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),o.default.createElement("circle",{className:"pet-aura",cx:"64",cy:c-8,r:y,fill:`url(#pg-aura-${l})`}),g&&o.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},o.default.createElement("path",{d:`M ${64-s*.75} ${c-8} q -${16+l*2} -${12+l*2} -${5+l} 8 q 4 9 21 5 Z`}),o.default.createElement("path",{d:`M ${64+s*.75} ${c-8} q ${16+l*2} -${12+l*2} ${5+l} 8 q -4 9 -21 5 Z`})),o.default.createElement("path",{className:"pet-tail",d:`M ${64+s*.85} ${c} q ${k} 2 ${k*.9} -${k*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),l>=3&&o.default.createElement("circle",{cx:64+s*.85+k*.9,cy:c-k*.85,r:2.4+l*.35,fill:"var(--accent2)",className:"pet-tailtip"}),_&&o.default.createElement("rect",{x:"59",y:d+u-5,width:"10",height:Math.max(0,c-s*.7-d-u+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),f&&o.default.createElement("g",{opacity:"0.8"},[0,1,2].map(T=>o.default.createElement("path",{key:T,d:`M ${64-s*.72+T*3} ${c-6-T*7} l -${6+T} -${5+T*2} l ${9+T} ${1+T} Z`,fill:"var(--accent2)"}))),o.default.createElement("g",{className:"pet-body"},o.default.createElement("ellipse",{cx:"64",cy:c,rx:s,ry:s*.86,fill:`url(#pg-body-${l})`}),o.default.createElement("ellipse",{cx:"64",cy:c+2,rx:s*.56,ry:s*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:x}).map((T,W)=>o.default.createElement("circle",{key:W,cx:50+W*14,cy:68+W%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),o.default.createElement("ellipse",{cx:64-s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("ellipse",{cx:64+s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("g",{className:"pet-head"},o.default.createElement("path",{d:`M ${64-v} ${d-u*.72}
                  q -3 -${h} 3 -${h*1.25}
                  q 5 ${h*.45} 4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),o.default.createElement("path",{d:`M ${64+v} ${d-u*.72}
                  q 3 -${h} -3 -${h*1.25}
                  q -5 ${h*.45} -4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),m&&o.default.createElement("g",{className:"pet-crown"},o.default.createElement("path",{d:`M 51 ${d-u+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),o.default.createElement("circle",{cx:"64",cy:d-u-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),o.default.createElement("circle",{cx:"64",cy:d,r:u,fill:`url(#pg-body-${l})`}),N?o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:`M ${64-8.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),o.default.createElement("path",{d:`M ${64+.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):o.default.createElement("g",{className:"pet-eyes"},o.default.createElement("ellipse",{cx:64-7.5,cy:d,rx:p,ry:w/2,fill:"var(--bg)"}),o.default.createElement("ellipse",{cx:64+7.5,cy:d,rx:p,ry:w/2,fill:"var(--bg)"}),o.default.createElement("circle",{cx:64-6.2,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),o.default.createElement("circle",{cx:64+8.8,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),o.default.createElement("path",{d:F,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),b&&o.default.createElement(o.default.Fragment,null,o.default.createElement("ellipse",{cx:49,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),o.default.createElement("ellipse",{cx:79,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),l>=1&&o.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,l)}).map((T,W)=>o.default.createElement("circle",{key:W,cx:"64",cy:c-8-y,r:1.6+W*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${c-8}px`,transform:`rotate(${W*(360/Math.min(4,l))}deg)`}}))))}),fr=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],_p=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function Tp(e){for(let t of _p)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return _p[2]}function R0(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var eh=o.default.memo(function({theme:t,phase:n,calm:r,scoped:a=!1}){let i=t.ambient.particle,l=a?"amb-layer amb-scoped":"amb-layer",s=(0,o.useMemo)(()=>i==="none"?[]:Array.from({length:i==="aurora"?16:i==="embers"?14:18},(d,p)=>{let h=i==="bubbles"?3+p%4*2:2+p%3;return{left:`${(p*37+11)%100}%`,size:h,delay:`${-(p*2.3)%26}s`,dur:`${(i==="bubbles"?20:30)+p%7*4}s`}}),[i]),u=(0,o.useMemo)(()=>n.stars?Array.from({length:34},(c,d)=>({left:`${(d*29+7)%100}%`,top:`${(d*53+13)%62}%`,op:.2+d*37%60/100})):[],[n.stars]);return o.default.createElement(o.default.Fragment,null,a&&o.default.createElement("div",{className:`${l} amb-blobs`}),o.default.createElement("div",{className:`${l} amb-time`},o.default.createElement("div",{className:"amb-ray"})),u.length>0&&o.default.createElement("div",{className:`${l} amb-stars`},u.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,top:c.top,opacity:c.op}}))),s.length>0&&o.default.createElement("div",{className:`${l} amb-dust`},s.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,bottom:"-6vh",width:c.size,height:c.size,animationDelay:c.delay,animationDuration:c.dur}}))),o.default.createElement("div",{className:`${l} amb-grain`}),r&&o.default.createElement("div",{className:"calm-breath"}))}),Lp="tasksh.calm.v1",Pp="tasksh.ambience.v1";function th(e){let[t,n]=(0,o.useState)(()=>{try{return localStorage.getItem(Dp)||Ja}catch{return Ja}}),[r,a]=(0,o.useState)(()=>{try{return localStorage.getItem(Lp)==="1"}catch{return!1}}),[i,l]=(0,o.useState)(()=>{try{return localStorage.getItem(Pp)!=="0"}catch{return!0}}),[s,u]=(0,o.useState)(()=>Tp(pr().hour)),c=(0,o.useMemo)(()=>nh(t),[t]);(0,o.useEffect)(()=>{!_s(c,e)&&c.id!==Ja&&n(Ja)},[c,e]),(0,o.useEffect)(()=>{rh(c);try{localStorage.setItem(Dp,c.id)}catch{}},[c]),(0,o.useEffect)(()=>{R0(s)},[s]),(0,o.useEffect)(()=>{let p=setInterval(()=>{let h=Tp(pr().hour);u(v=>v.id===h.id?v:h)},12e4);return()=>clearInterval(p)},[]),(0,o.useEffect)(()=>{let p=document.documentElement;p.style.setProperty("--calm",r?"1":"0"),p.style.setProperty("--motion-scale",r?"1.9":"1"),p.classList.toggle("calm-mode",r);try{localStorage.setItem(Lp,r?"1":"0")}catch{}},[r]);let d=(0,o.useMemo)(()=>fr.filter(p=>_s(p,e)),[e]);return(0,o.useEffect)(()=>{document.documentElement.classList.toggle("no-ambience",!i);try{localStorage.setItem(Pp,i?"1":"0")}catch{}},[i]),{theme:c,themeId:t,setThemeId:n,themes:fr,unlocked:d,phase:s,calm:r,setCalm:a,ambience:i,setAmbience:l}}var Ja="terminal",Dp="tasksh.theme.v1";function nh(e){return fr.find(t=>t.id===e)||fr[0]}function _s(e,t){return t>=e.unlockLevel}function rh(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((a,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${a[0]}, ${a[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var tf="tasksh.sound.v1",co=null;function oh(){if(!co){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;co=new e}return co.state==="suspended"&&co.resume(),co}function nf(){try{let e=localStorage.getItem(tf);return e===null?!0:e==="1"}catch{return!0}}function ah(e){try{localStorage.setItem(tf,e?"1":"0")}catch{}}function Mn(e){if(!nf())return;let t=oh();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:a=0,dur:i=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),c=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+a),c.gain.setValueAtTime(1e-4,n+a),c.gain.exponentialRampToValueAtTime(s,n+a+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+a+i),u.connect(c),c.connect(t.destination),u.start(n+a),u.stop(n+a+i+.02)})}var P={click:()=>Mn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>Mn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>Mn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>Mn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>Mn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>Mn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function ih(){let[e,t]=(0,o.useState)(nf());return[e,()=>{let r=!e;t(r),ah(r),r&&Mn([{freq:720,dur:.05,gain:.04}])}]}function lh(e,t=550){let[n,r]=(0,o.useState)(e),a=(0,o.useRef)(e),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let l=a.current,s=e;if(l===s)return;let u=performance.now(),c=p=>1-Math.pow(1-p,3),d=p=>{let h=p-u,v=Math.min(1,h/t),k=c(v);r(Math.round(l+(s-l)*k)),v<1?i.current=requestAnimationFrame(d):a.current=s};return i.current=requestAnimationFrame(d),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function vt({value:e,className:t,suffix:n=""}){let r=lh(e);return o.default.createElement("span",{className:t},r,n)}function sh({axes:e,size:t=220,maxValue:n}){let[r,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let f=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(f)},[]);let i=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),c=n??Math.max(1,...e.map(f=>f.value)),d=f=>Math.PI*2*f/i-Math.PI/2,p=.16,h=Math.min(0,...e.map(f=>f.value)),v=f=>f>0?p+(1-p)*Math.min(1,f/c):f===0||!h?p:p*(1-.8*Math.min(1,f/h)),k=(f,x)=>{let N=d(f);return[l+Math.cos(N)*u*x,s+Math.sin(N)*u*x]},y=i>6?46:22,_=[.25,.5,.75,1],m=e.map((f,x)=>k(x,r?v(f.value):.02)).map((f,x)=>`${x===0?"M":"L"}${f[0].toFixed(1)},${f[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("svg",{viewBox:`${-y} 0 ${t+y*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},_.map((f,x)=>{let b=e.map((M,w)=>k(w,p+(1-p)*f)).map((M,w)=>`${w===0?"M":"L"}${M[0].toFixed(1)},${M[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("path",{key:x,d:b,className:"radar-ring"})}),o.default.createElement("path",{d:e.map((f,x)=>{let N=k(x,p);return`${x===0?"M":"L"}${N[0].toFixed(1)},${N[1].toFixed(1)}`}).join(" ")+"Z",className:"radar-zero"}),e.map((f,x)=>{let N=k(x,1);return o.default.createElement("line",{key:x,x1:l,y1:s,x2:N[0],y2:N[1],className:"radar-spoke"})}),o.default.createElement("path",{d:m,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((f,x)=>{let N=k(x,1.19),b=k(x,r?v(f.value):.02),M=f.value<0,w=Math.cos(d(x)),F=w>.25?"start":w<-.25?"end":"middle";return o.default.createElement("g",{key:f.key||x},o.default.createElement("circle",{cx:b[0],cy:b[1],r:i>6?2.8:3.5,fill:M?"none":f.color||"#5EEAD4",stroke:M?"var(--danger)":"none",strokeWidth:M?1.4:0,style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),o.default.createElement("text",{x:N[0],y:N[1],textAnchor:F,dominantBaseline:"middle",className:`radar-label ${M?"radar-label-neg":""}`},M?`${f.label} \u2193`:f.label))}))}function Ps({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:a="#1E2228",label:i,sublabel:l}){let[s,u]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let y=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(y)},[]);let c=t/2-n,d=2*Math.PI*c,p=Math.max(0,Math.min(100,e)),h=d-(s?p/100:0)*d,v=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return o.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:a,strokeWidth:n}),o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:d,strokeDashoffset:h,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),o.default.createElement("div",{className:"radial-progress-center"},i&&o.default.createElement("span",{className:"radial-progress-label",style:{fontSize:v}},i),l&&o.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function rf({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:a}){let[i,l]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let h=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(h)},[]);let s=t/2-n/2,u=2*Math.PI*s,c=Math.max(1e-6,e.reduce((h,v)=>h+Math.max(0,v.value),0)),d=0,p=e.map(h=>{let v=Math.max(0,h.value),k=v/c,y=i?k*u:0,_=u-y,g=d/c*360;return d+=v,{...h,dash:y,gap:_,rotation:g,frac:k}});return o.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),p.map((h,v)=>o.default.createElement("circle",{key:h.key||v,cx:t/2,cy:t/2,r:s,fill:"none",stroke:h.color,strokeWidth:n,strokeDasharray:`${h.dash} ${h.gap}`,strokeDashoffset:0,transform:`rotate(${h.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:p.length>1?"butt":"round"}))),o.default.createElement("div",{className:"donut-center"},r!==void 0&&o.default.createElement("span",{className:"donut-center-label"},r),a&&o.default.createElement("span",{className:"donut-center-sublabel"},a)))}function uh({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],a=0,i=t*7,l=Array.from({length:i},(d,p)=>a-(i-1-p)),s=Math.max(1,...l.map(d=>e[U(d)]||0)),u=[];for(let d=0;d<t;d++)u.push(l.slice(d*7,d*7+7));let c=d=>{if(!d)return 0;let p=d/s;return p>.75?4:p>.5?3:p>.25?2:1};return o.default.createElement("div",{className:"heatmap-wrap"},o.default.createElement("div",{className:"heatmap-grid"},u.map((d,p)=>o.default.createElement("div",{className:"heatmap-col",key:p},d.map((h,v)=>{let k=U(h),y=e[k]||0,_=c(y);return o.default.createElement("span",{key:v,className:`heatmap-cell ${h===0?"today":""}`,style:{background:r[_],animationDelay:`${(p*7+v)*4}ms`},title:`${k}: ${y} completed`})})))),o.default.createElement("div",{className:"heatmap-legend"},o.default.createElement("span",null,"less"),r.map((d,p)=>o.default.createElement("span",{key:p,className:"heatmap-legend-cell",style:{background:d}})),o.default.createElement("span",null,"more")))}function ch(e){let t=[],n=[];for(let r of e){let a=t.findIndex(i=>r.start>=i);a===-1?(a=t.length,t.push(r.end)):t[a]=r.end,n.push({...r,lane:a})}return{placed:n,laneCount:Math.max(1,t.length)}}function dh({routines:e,nowMinutes:t,doneToday:n=0,onToggleToday:r}){let[a,i]=(0,o.useState)(!1),[l,s]=(0,o.useState)(0),[u,c]=(0,o.useState)(0),d=(0,o.useRef)(null),p=(0,o.useRef)(!1),h=(0,o.useRef)({id:null,at:0,x:0,y:0,moved:!1}),[v,k]=(0,o.useState)(null),y=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{y.current&&clearTimeout(y.current)},[]);let _=L=>{r?.(L),k(L),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{k(null),y.current=null},420)},g=(L,J)=>{h.current.x=L.clientX,h.current.y=L.clientY,h.current.moved=!1},m=()=>{h.current.moved=!0},f=(L,J)=>{let se=h.current;if(Math.abs(L.clientX-se.x)>8||Math.abs(L.clientY-se.y)>8){se.id=null;return}let fe=Date.now();se.id===J&&fe-se.at<400?(_(J),se.id=null,se.at=0):(se.id=J,se.at=fe)};(0,o.useEffect)(()=>{let L=requestAnimationFrame(()=>i(!0));return()=>cancelAnimationFrame(L)},[]),(0,o.useEffect)(()=>{if(!d.current)return;let L=d.current,J=new ResizeObserver(se=>{for(let fe of se)s(fe.contentRect.width)});return J.observe(L),s(L.getBoundingClientRect().width),()=>J.disconnect()},[]);let x=1440,N=U(0),b=e.map(L=>{let J=st(L.time);return{r:L,start:J,end:J+Math.max(1,L.duration)}}),{placed:M,laneCount:w}=ch(b),T=Math.max(l,24*82),W=T/x,ne=T>l+1,z=t*W;(0,o.useEffect)(()=>{if(!d.current||!l||p.current)return;if(!ne){p.current=!0;return}let L=d.current,J=Math.max(0,Math.min(z-l/2,T-l));L.scrollTo({left:J,behavior:"auto"}),p.current=!0},[l,z,T,ne]),(0,o.useEffect)(()=>{let L=d.current;if(!L)return;let J=0,se=()=>{J||(J=requestAnimationFrame(()=>{c(L.scrollLeft),J=0}))};return L.addEventListener("scroll",se,{passive:!0}),c(L.scrollLeft),()=>{L.removeEventListener("scroll",se),cancelAnimationFrame(J)}},[l]);let I=()=>{let L=d.current;L&&(L.scrollTo({left:Math.max(0,Math.min(z-l/2,T-l)),behavior:"smooth"}),P.click())},$=38,O=6,re=8,We=re*2+w*$+(w-1)*O,ye=W*60>=40?1:3,H=[];for(let L=0;L<=24;L+=ye)H.push(L);let he=L=>{let J=L%24;return J===0?"12a":J===12?"12p":J>12?`${J-12}p`:`${J}a`},ge=e.length,Ce=ge?Math.round(n/ge*100):0;return o.default.createElement("div",{className:"timeline-wrap"},o.default.createElement("div",{className:"timeline-head"},o.default.createElement("div",{className:"timeline-head-left"},o.default.createElement("span",{className:"timeline-title"},"today's schedule"),ge>0&&o.default.createElement("span",{className:"timeline-count"},n,"/",ge," done")),ne&&o.default.createElement("button",{className:"timeline-jump",onClick:I,title:"Jump to now"},"now")),ge>0&&o.default.createElement("div",{className:"timeline-progress"},o.default.createElement("div",{className:"timeline-progress-fill",style:{width:a?`${Ce}%`:"0%"}})),o.default.createElement("div",{className:"timeline-scroll",ref:d},o.default.createElement("div",{className:"timeline-inner",style:{width:T}},o.default.createElement("div",{className:"timeline-hours"},H.map(L=>o.default.createElement("div",{key:L,className:"timeline-hour",style:{left:L*60*W}},o.default.createElement("span",null,he(L))))),o.default.createElement("div",{className:"timeline-track",style:{height:We}},o.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*W}}),o.default.createElement("div",{className:"timeline-night",style:{left:1320*W,width:120*W}}),H.map(L=>o.default.createElement("div",{key:L,className:`timeline-gridline ${L%6===0?"major":""}`,style:{left:L*60*W}})),o.default.createElement("div",{className:"timeline-elapsed",style:{width:a?z:0}}),M.map(({r:L,start:J,lane:se},fe)=>{let j=J*W,Z=Math.max(1,L.duration)*W,X=Math.max(4,Math.min(Z,T-j)),ie=(L.history||[]).includes(N),Et=dr(L.id),Dn=Math.max(j,u),vr=Math.min(j+X,u+l),Ft=Math.max(0,vr-Dn)>38,Ne=Math.max(0,Math.min(u-j,X-46)),S=t>=J&&t<J+L.duration;return o.default.createElement("div",{key:L.id,role:r?"button":void 0,tabIndex:r?0:void 0,"aria-pressed":r?ie:void 0,"aria-label":r?`${L.label}, ${St(J)}${ie?", done":""}. Double-tap to toggle.`:void 0,onPointerDown:r?B=>g(B,L.id):void 0,onPointerUp:r?B=>f(B,L.id):void 0,onPointerCancel:r?m:void 0,onKeyDown:r?B=>{(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),_(L.id))}:void 0,className:`timeline-block ${ie?"done":""} ${S?"active":""} ${r?"tappable":""} ${v===L.id?"pulse":""}`,style:{left:j,top:re+se*($+O),width:a?X:0,height:$,transitionDelay:`${Math.min(fe*18,260)}ms`,background:ie?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${Et}, ${Et}C4)`,boxShadow:ie?"none":`0 2px 10px ${Et}44`},title:`${L.label} \xB7 ${St(J)} \xB7 ${It(L.duration)}${ie?" \xB7 done":""}`},Ft&&o.default.createElement("span",{className:"timeline-block-label",style:Ne>0?{paddingLeft:Ne+8}:void 0},ie&&o.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),L.label))}),o.default.createElement("div",{className:"timeline-now",style:{left:z}})))),ne&&o.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var ph=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[U(-1),U(-2),U(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[U(-1),U(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[U(0),U(-1),U(-2),U(-3),U(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[U(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function fh(){let[e,t]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let n=!1,r=async()=>{try{if(typeof caches>"u"||!caches.keys)return;let l=(await caches.keys()).filter(s=>/^tasksh-v\d+$/.test(s)).sort((s,u)=>parseInt(u.slice(8),10)-parseInt(s.slice(8),10))[0];!n&&l&&t(l.replace("tasksh-",""))}catch{}};r();let a=navigator.serviceWorker;return a?.addEventListener?.("controllerchange",r),()=>{n=!0,a?.removeEventListener?.("controllerchange",r)}},[]),e}function mh(){let e=fh();return e?o.default.createElement("span",{className:"version-badge",title:`running build ${e}`},e):null}function Ra(e=420){let[t,n]=(0,o.useState)(!1),r=(0,o.useRef)(null),a=(0,o.useCallback)(()=>{r.current&&clearTimeout(r.current),n(!0),r.current=setTimeout(()=>{n(!1),r.current=null},e)},[e]);return(0,o.useEffect)(()=>()=>{r.current&&clearTimeout(r.current)},[]),[t,a]}function Ds(){let[e,t]=(0,o.useState)(pr());return(0,o.useEffect)(()=>{let n=setInterval(()=>t(pr()),1e3);return()=>clearInterval(n)},[]),e}function As(e,t){return(0,o.useMemo)(()=>{let n=[...e].sort((i,l)=>st(i.time)-st(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&st(n[i].time)<=t;i++)r=i;let a=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[a].id}},[e,t])}function hh({routine:e,status:t,index:n,onDelete:r,onToggleToday:a,onSave:i}){let l=st(e.time),s=l+e.duration,{streak:u,freezeUsed:c}=Qa(e.history),d=(e.history||[]).includes(U(0)),[p,h]=(0,o.useState)(0),v=(0,o.useRef)(!1),k=(0,o.useRef)(0),y=(0,o.useRef)(0),_=(0,o.useRef)(null),g=(0,o.useRef)(!1),[m,f]=(0,o.useState)(!1),x=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{x.current&&clearTimeout(x.current)},[]);let[N,b]=(0,o.useState)(!1),[M,w]=(0,o.useState)(e.label),[F,T]=(0,o.useState)(e.time),[W,ne]=(0,o.useState)(e.duration),[z,I]=(0,o.useState)(e.alternatives||[]),$=()=>{w(e.label),T(e.time),ne(e.duration),I(e.alternatives||[]),b(!0)},O=()=>{let H=M.trim();H&&(i(e.id,{label:H,time:F||e.time,duration:Math.max(5,+W||e.duration),alternatives:z.map(he=>he.trim()).filter(Boolean)}),b(!1))},re=H=>{N||(v.current=!0,g.current=!1,_.current=null,k.current=H.clientX,y.current=H.clientY)},We=H=>{if(!v.current)return;let he=H.clientX-k.current,ge=H.clientY-y.current;if(_.current===null){if(Math.abs(he)<6&&Math.abs(ge)<6)return;if(_.current=Math.abs(he)>Math.abs(ge)?"x":"y",_.current==="y"){v.current=!1;return}}_.current==="x"&&(Math.abs(he)>4&&(g.current=!0),h(Math.max(-120,Math.min(0,he))))},ye=()=>{v.current&&(v.current=!1,p<-70?(f(!0),x.current||(x.current=setTimeout(()=>r(e.id),200))):(h(0),g.current||$()))};return o.default.createElement("div",{className:`routine-row-wrap ${m?"removing":""}`,style:{animationDelay:`${n*35}ms`}},o.default.createElement("div",{className:"routine-delete-bg"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),o.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${p}px)`,transition:v.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${d?"#2A2F36":dr(e.id)}`},onPointerDown:re,onPointerMove:We,onPointerUp:ye,onPointerLeave:ye,onPointerCancel:ye},o.default.createElement("div",{className:"routine-line"},o.default.createElement("span",{className:`routine-node ${d?"quest-done":""}`}),o.default.createElement("span",{className:"routine-connector"})),N?o.default.createElement("div",{className:"routine-edit",onPointerDown:H=>H.stopPropagation()},o.default.createElement("input",{className:"edit-label",value:M,onChange:H=>w(H.target.value),onKeyDown:H=>H.key==="Enter"&&O(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"time",className:"time-input",value:F,onChange:H=>T(H.target.value)}),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:W,onChange:H=>ne(H.target.value)}),o.default.createElement("span",{className:"edit-unit"},"min")),o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),z.map((H,he)=>o.default.createElement("div",{className:"alt-composer-row",key:he},o.default.createElement("input",{type:"text",placeholder:`alternative ${he+1}`,value:H,onChange:ge=>{let Ce=[...z];Ce[he]=ge.target.value,I(Ce)},onKeyDown:ge=>ge.key==="Enter"&&O()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>I(z.filter((ge,Ce)=>Ce!==he)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>I([...z,""])},"+ another option")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>b(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:O},"save"))):o.default.createElement("div",{className:"routine-main"},o.default.createElement("div",{className:"routine-top"},o.default.createElement("span",{className:"routine-time"},St(l)),t==="current"&&o.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,c&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&o.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),o.default.createElement("span",{className:"routine-span"},St(l)," \u2013 ",St(s)," \xB7 ",It(e.duration))),!N&&o.default.createElement("button",{className:"link-btn routine-link",onClick:H=>{H.stopPropagation(),Za.open(Tn("routine",e.id)),P.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))}function gh({routines:e,setRoutines:t}){let n=Ds(),r=n.hour*60+n.minute,{sorted:a,currentId:i,nextId:l}=As(e,r),s=a.find(z=>z.id===i),u=a.find(z=>z.id===l),[c,d]=(0,o.useState)(""),[p,h]=(0,o.useState)(()=>ws(r)),[v,k]=(0,o.useState)(30),[y,_]=Ra(),[g,m]=(0,o.useState)([]),[f,x]=(0,o.useState)(!1),N=()=>{let z=c.trim();if(!z){_(),P.error();return}let I=p||ws(r),$=g.map(O=>O.trim()).filter(Boolean);t(O=>[...O,{id:we(),time:I,label:z,duration:Math.max(5,+v||30),history:[],alternatives:$}]),d(""),h(ws(r)),k(30),m([]),x(!1),P.click()},b=z=>{t(I=>I.filter($=>$.id!==z)),P.delete()},M=z=>{let I=U(0),$=!(e.find(O=>O.id===z)?.history||[]).includes(I);t(O=>O.map(re=>{if(re.id!==z)return re;let ye=(re.history||[]).includes(I)?re.history.filter(H=>H!==I):[...re.history||[],I];return{...re,history:ye.slice(-60)}})),go.propagate("routine",z,$),$?(P.success(),cn.emit("routineDone")):P.click()},w=(z,I)=>t($=>$.map(O=>O.id===z?{...O,...I}:O)),F=s?st(s.time)+s.duration:0,T=u?(st(u.time)-r+1440)%1440||1440:0,W=U(0),ne=a.filter(z=>(z.history||[]).includes(W)).length;return o.default.createElement("div",{className:"task-list routine-list"},o.default.createElement("div",{className:"hero-card"},o.default.createElement("div",{className:"hero-clock-row"},o.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),o.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),o.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),o.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),o.default.createElement("span",{className:"hero-date"},O0()),o.default.createElement("div",{className:"hero-divider"}),s?o.default.createElement("div",{className:"hero-current"},o.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),o.default.createElement("div",{className:"hero-current-name"},o.default.createElement("span",{className:"pulse-dot"}),s.label),o.default.createElement("span",{className:"hero-sub"},"until ",St(F)," \xB7 next: ",u?.label," in ",It(T))):o.default.createElement("span",{className:"hero-sub"},"no routines yet")),o.default.createElement(dh,{routines:a,nowMinutes:r,doneToday:ne,onToggleToday:M}),o.default.createElement("div",{className:`composer ${y?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new routine...",value:c,onChange:z=>d(z.target.value),onKeyDown:z=>z.key==="Enter"&&N()}),o.default.createElement("input",{type:"time",className:"time-input",value:p,onChange:z=>h(z.target.value)}),o.default.createElement("button",{type:"button",className:`alt-toggle-btn ${f?"active":""}`,onClick:()=>x(z=>!z),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),o.default.createElement("button",{className:"add-btn",onClick:N,"aria-label":"Add routine"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),f&&o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),g.map((z,I)=>o.default.createElement("div",{className:"alt-composer-row",key:I},o.default.createElement("input",{type:"text",placeholder:`alternative ${I+1}, e.g. "Drawing"`,value:z,onChange:$=>{let O=[...g];O[I]=$.target.value,m(O)},onKeyDown:$=>$.key==="Enter"&&N()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>m(g.filter(($,O)=>O!==I)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>m([...g,""])},"+ another option")),o.default.createElement("div",{className:"duration-chips"},j0.map(z=>o.default.createElement("button",{key:z,className:v===z?"active":"",onClick:()=>k(z)},It(z))),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:v,onChange:z=>k(+z.target.value||5)})),a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):a.map((z,I)=>o.default.createElement(hh,{key:z.id,routine:z,index:I,status:z.id===i?"current":z.id===l?"next":"idle",onDelete:b,onToggleToday:M,onSave:w})))}function vh(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,a=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:a,monthLabel:i}}function yh(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function of(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(U(r))&&n++;return n}function xh(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(U(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var kh=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[U(0),U(-1),U(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[U(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[U(0)]}],bh=[{id:1,name:"Notion Template",dueDate:U(7),tasks:[{id:we(),text:"Design layout",done:!0},{id:we(),text:"Write docs",done:!1},{id:we(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:U(7),tasks:[{id:we(),text:"Script draft",done:!1},{id:we(),text:"Record",done:!1}]}];function wh({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:a}=vh(),i=new Set(e||[]),l=U(0),s=Array.from({length:r},(u,c)=>c+1);return o.default.createElement("div",{className:"month-grid-wrap"},o.default.createElement("span",{className:"month-grid-label"},a),o.default.createElement("div",{className:"month-grid"},s.map(u=>{let c=yh(t,n,u);return o.default.createElement("span",{key:u,className:`month-cell ${i.has(c)?"filled":""} ${c===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:c})})))}function Nh({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let a=(e.history||[]).includes(U(0)),{streak:i,freezeUsed:l}=Qa(e.history),s=of(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[c,d]=(0,o.useState)(!1),[p,h]=(0,o.useState)(e.icon),[v,k]=(0,o.useState)(e.label),[y,_]=(0,o.useState)(e.weeklyGoal),g=()=>{h(e.icon),k(e.label),_(e.weeklyGoal),d(!0)},m=()=>{let f=v.trim();f&&(r(e.id,{icon:p.trim()||e.icon,label:f,weeklyGoal:Math.max(1,Math.min(7,+y||e.weeklyGoal))}),d(!1))};return c?o.default.createElement("div",{className:"vault-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{className:"duration-input",style:{width:44},value:p,onChange:f=>h(f.target.value),maxLength:2}),o.default.createElement("input",{className:"edit-label",style:{flex:1},value:v,onChange:f=>k(f.target.value),onKeyDown:f=>f.key==="Enter"&&m(),autoFocus:!0})),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:y,onChange:f=>_(f.target.value)}),o.default.createElement("span",{className:"edit-unit"},"x / week")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:m},"save")))):o.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${dr(e.id)}`}},o.default.createElement("div",{className:"vault-card-top"},o.default.createElement("span",{className:"vault-card-icon",style:{color:dr(e.id)}},e.icon),o.default.createElement("div",{className:"vault-card-title"},o.default.createElement("span",{className:"vault-card-label"},e.label),o.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),o.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),o.default.createElement(wh,{history:e.history}),o.default.createElement("div",{className:"vault-card-bottom"},o.default.createElement("div",{className:"vault-card-ring-row"},o.default.createElement(Ps,{pct:u,size:34,stroke:3.5,color:dr(e.id)}),o.default.createElement("span",{className:"vault-card-pct"},u,"% ",o.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,l&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("button",{className:"link-btn",onClick:f=>{f.stopPropagation(),Za.open(Tn("vault",e.id)),P.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`vault-check ${a?"done":""}`,onClick:()=>t(e.id)},a?"\u2713 completed today":"mark complete today"))}function Sh({habits:e,setHabits:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(7),[l,s]=Ra(),u=()=>{let h=n.trim();if(!h){s(),P.error();return}t(v=>[...v,{id:we(),icon:"\u25C6",label:h,weeklyGoal:a,history:[]}]),r(""),i(7),P.click()},c=h=>{t(v=>v.filter(k=>k.id!==h)),P.delete()},d=(h,v)=>t(k=>k.map(y=>y.id===h?{...y,...v}:y)),p=h=>{let v=U(0),k=!(e.find(y=>y.id===h)?.history||[]).includes(v);t(y=>y.map(_=>{if(_.id!==h)return _;let m=(_.history||[]).includes(v)?_.history.filter(f=>f!==v):[..._.history||[],v];return{..._,history:m.slice(-370)}})),go.propagate("vault",h,k),k?(P.success(),cn.emit("vaultDone")):P.click()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"HABIT-STREAK-TRACKING")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(h=>o.default.createElement(Nh,{key:h.id,habit:h,onToggleToday:p,onDelete:c,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:h=>r(h.target.value),onKeyDown:h=>h.key==="Enter"&&u()}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(h=>o.default.createElement("button",{key:h,className:a===h?"active":"",onClick:()=>i(h)},h,"x/wk"))))}function Eh({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(t.text),c=()=>{let d=s.trim();d&&a(e,t.id,d),l(!1)};return i?o.default.createElement("div",{className:"project-task-row"},o.default.createElement("input",{className:"project-task-edit",value:s,onChange:d=>u(d.target.value),onKeyDown:d=>d.key==="Enter"&&c(),onBlur:c,autoFocus:!0})):o.default.createElement("div",{className:"project-task-row"},o.default.createElement(df,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),o.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Ch({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:a,onEditTask:i,onSave:l}){let[s,u]=(0,o.useState)(""),c=e.tasks.length,d=e.tasks.filter(b=>b.done).length,p=c?Math.round(d/c*100):0,h=xh(e.dueDate),[v,k]=(0,o.useState)(!1),[y,_]=(0,o.useState)(e.name),[g,m]=(0,o.useState)(e.dueDate||""),f=()=>{let b=s.trim();b&&(n(e.id,b),u(""))},x=()=>{_(e.name),m(e.dueDate||""),k(!0)},N=()=>{let b=y.trim();b&&(l(e.id,{name:b,dueDate:g||null}),k(!1))};return v?o.default.createElement("div",{className:"project-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:y,onChange:b=>_(b.target.value),onKeyDown:b=>b.key==="Enter"&&N(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"date",className:"time-input",value:g,onChange:b=>m(b.target.value)})),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:N},"save")))):o.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${dr(e.id)}`}},o.default.createElement("div",{className:"project-card-top"},o.default.createElement("span",{className:"project-name"},e.name),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:x,"aria-label":"Edit project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),h&&o.default.createElement("span",{className:`project-due ${h.overdue?"overdue":""}`},h.text),o.default.createElement("div",{className:"progress-track small"},o.default.createElement("div",{className:"progress-fill",style:{width:`${p}%`}})),o.default.createElement("span",{className:"vault-card-pct"},d,"/",c," tasks \xB7 ",p,"%"),o.default.createElement("div",{className:"project-tasks"},e.tasks.map(b=>o.default.createElement(Eh,{key:b.id,projectId:e.id,task:b,onToggle:r,onDelete:a,onEdit:i}))),o.default.createElement("div",{className:"project-add-task"},o.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:b=>u(b.target.value),onKeyDown:b=>b.key==="Enter"&&f()})))}function Mh({projects:e,setProjects:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),[l,s]=Ra(),u=()=>{let y=n.trim();if(!y){s(),P.error();return}t(_=>[..._,{id:we(),name:y,dueDate:a||null,tasks:[]}]),r(""),i(""),P.click()},c=y=>{t(_=>_.filter(g=>g.id!==y)),P.delete()},d=(y,_)=>t(g=>g.map(m=>m.id===y?{...m,..._}:m)),p=(y,_)=>{t(g=>g.map(m=>m.id===y?{...m,tasks:[...m.tasks,{id:we(),text:_,done:!1}]}:m)),P.click()},h=(y,_)=>{t(g=>g.map(m=>m.id!==y?m:{...m,tasks:m.tasks.map(f=>f.id===_?{...f,done:!f.done}:f)})),P.success()},v=(y,_)=>{t(g=>g.map(m=>m.id!==y?m:{...m,tasks:m.tasks.filter(f=>f.id!==_)})),P.delete()},k=(y,_,g)=>t(m=>m.map(f=>f.id!==y?f:{...f,tasks:f.tasks.map(x=>x.id===_?{...x,text:g}:x)}));return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"PROJECT-MANAGER")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no projects yet")):e.map(y=>o.default.createElement(Ch,{key:y.id,project:y,onDelete:c,onAddTask:p,onToggleTask:h,onDeleteTask:v,onEditTask:k,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:y=>r(y.target.value),onKeyDown:y=>y.key==="Enter"&&u()}),o.default.createElement("input",{type:"date",className:"time-input",value:a,onChange:y=>i(y.target.value)}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var Ap="tasksh.notes.v1",zh=[{id:1,title:"ideas.md",body:`things to build next:
- undo toast on delete
- keyboard shortcuts (ctrl+k)
- xp sparkline over time`,updated:Date.now()}];function _h(e){if(!e)return"";let t=Math.floor((Date.now()-e)/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);if(n<24)return`${n}h ago`;let r=Math.floor(n/24);return r<30?`${r}d ago`:`${Math.floor(r/30)}mo ago`}function Th({note:e,onSave:t,onDelete:n}){let[r,a]=(0,o.useState)(!1),[i,l]=(0,o.useState)(e.title),[s,u]=(0,o.useState)(e.body),c=(0,o.useRef)(null),d=(0,o.useCallback)(()=>{let v=c.current;v&&(v.style.height="auto",v.style.height=`${v.scrollHeight}px`)},[]);(0,o.useEffect)(()=>{r&&d()},[r,d]);let p=()=>{let v=i.trim()||"untitled";t(e.id,{title:v,body:s,updated:Date.now()}),a(!1),P.click()},h=()=>{l(e.title),u(e.body),a(!1)};return r?o.default.createElement("div",{className:"note-card editing"},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/notes/"),o.default.createElement("input",{className:"note-title-input",value:i,onChange:v=>l(v.target.value),placeholder:"filename","aria-label":"Note title",autoFocus:!0})),o.default.createElement("textarea",{ref:c,className:"note-body-input",value:s,onChange:v=>{u(v.target.value),d()},onKeyDown:v=>{v.key==="Escape"&&h(),v.key==="Enter"&&(v.metaKey||v.ctrlKey)&&p()},placeholder:"type here...",rows:3,"aria-label":"Note body"}),o.default.createElement("div",{className:"note-actions"},o.default.createElement("button",{className:"note-btn save",onClick:p},"save"),o.default.createElement("button",{className:"note-btn",onClick:h},"cancel"),o.default.createElement("button",{className:"note-btn danger",onClick:()=>n(e.id)},"delete"))):o.default.createElement("div",{className:"note-card",onClick:()=>a(!0),role:"button",tabIndex:0,onKeyDown:v=>{v.key==="Enter"&&a(!0)},"aria-label":`Edit note ${e.title}`},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/notes/"),o.default.createElement("span",{className:"note-title"},e.title),o.default.createElement("span",{className:"note-when"},_h(e.updated))),e.body.trim()?o.default.createElement("pre",{className:"note-body"},e.body):o.default.createElement("pre",{className:"note-body empty"},"empty",o.default.createElement("span",{className:"note-caret"})))}function Lh({notes:e,setNotes:t}){let[n,r]=(0,o.useState)(""),[a,i]=Ra(),l=()=>{let c=n.trim();if(!c){i(),P.error();return}let[d,...p]=c.split(`
`);t(h=>[{id:we(),title:d.slice(0,40),body:p.join(`
`),updated:Date.now()},...h]),r(""),P.click()},s=(c,d)=>t(p=>p.map(h=>h.id===c?{...h,...d}:h)),u=c=>{t(d=>d.filter(p=>p.id!==c)),P.delete()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"NOTES")),o.default.createElement("div",{className:`composer ${a?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new note...",value:n,onChange:c=>r(c.target.value),onKeyDown:c=>c.key==="Enter"&&l(),"aria-label":"New note"}),o.default.createElement("button",{onClick:l,"aria-label":"Add note"},"+")),e.length===0?o.default.createElement("div",{className:"note-empty"},o.default.createElement("span",{className:"note-prompt"},"~/notes/")," is empty",o.default.createElement("span",{className:"note-caret"})):o.default.createElement("div",{className:"note-list"},e.map(c=>o.default.createElement(Th,{key:c.id,note:c,onSave:s,onDelete:u}))))}function Ph(){let[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{a.current&&clearTimeout(a.current)},[]);let i=`${gr}/next?id=${ei()}`;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"WIDGET-FEED")),o.default.createElement("div",{className:"note-card widget-feed"},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/next"),o.default.createElement("span",{className:"note-when"},"home screen widget")),e?o.default.createElement("pre",{className:"note-body widget-url"},i):o.default.createElement("pre",{className:"note-body"},"tap reveal to see this device's feed URL"),o.default.createElement("div",{className:"note-actions"},o.default.createElement("button",{className:"note-btn",onClick:()=>{t(s=>!s),P.click()}},e?"hide":"reveal"),o.default.createElement("button",{className:"note-btn save",onClick:async()=>{try{await navigator.clipboard.writeText(i),r(!0),P.click(),a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{r(!1),a.current=null},2e3)}catch{t(!0)}}},n?"copied":"copy url"))))}function Dh({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r,notes:a,setNotes:i}){return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement(Sh,{habits:e,setHabits:t}),o.default.createElement(Mh,{projects:n,setProjects:r}),o.default.createElement(Lh,{notes:a,setNotes:i}),o.default.createElement(Ph,null))}var Ue=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],vo=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],_g=Ue.reduce((e,t)=>(e[t.key]=vo.filter(n=>n.area===t.key),e),{});var af="tasksh.subareas.v1",Bp="tasksh.radarmode.v1";function Ah(){let e=Te(af,null);return!Array.isArray(e)||!e.length?vo:e.filter(t=>t&&t.key&&t.area&&Ue.some(n=>n.key===t.area))}function mr(e,t){return e.filter(n=>n.area===t)}function hr(e,t){if(t.sub&&e.some(r=>r.key===t.sub&&r.area===t.area))return t.sub;let n=e.find(r=>r.area===t.area);return n?n.key:null}function Ip(e,t,n,r){let a=n.filter(l=>hr(e,l)===t).reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=r.filter(l=>hr(e,l)===t).reduce((l,s)=>l+s.xp*(s.history?.length||0),0);return a-i}function Bh(){let[e,t]=(0,o.useState)(Ah),[n,r]=(0,o.useState)(()=>{try{return localStorage.getItem(Bp)||"subs"}catch{return"subs"}});(0,o.useEffect)(()=>{try{localStorage.setItem(af,JSON.stringify(e))}catch{}},[e]),(0,o.useEffect)(()=>{try{localStorage.setItem(Bp,n)}catch{}},[n]);let a=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(p=>p.map(h=>h.key===u?{...h,label:d}:h))},[]),i=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(p=>{let h=d.toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,12)||"tag",v=h,k=2;for(;p.some(y=>y.key===v);)v=`${h}${k++}`;return[...p,{key:v,area:u,label:d}]})},[]),l=(0,o.useCallback)(u=>{t(c=>{let d=c.find(p=>p.key===u);return!d||mr(c,d.area).length<=1?c:c.filter(p=>p.key!==u)})},[]),s=(0,o.useCallback)(()=>t(vo),[]);return{subs:e,radarMode:n,setRadarMode:r,renameSub:a,addSub:i,removeSub:l,resetSubs:s}}var $p=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function dr(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return $p[Math.abs(t)%$p.length]}var po=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function lf(e,t){let n=e.reduce((a,i)=>a+i.xp*(i.history?.length||0),0),r=t.reduce((a,i)=>a+i.xp*(i.history?.length||0),0);return Math.max(0,n-r)}function sf(e,t,n){let r=e.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),a=t.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=n.reduce((l,s)=>l+s.cost*(s.claimed?.length||0),0);return Math.max(0,r-a-i)}function Fp(e,t,n){let r=t.filter(i=>i.area===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0),a=n.filter(i=>i.area===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0);return r-a}function _n(e){return 12.5*(e-1)*(e+6)}function uf(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-_n(n),a=_n(n+1)-_n(n);return{level:n,into:r,span:a}}function Ih(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[a,i]of t)for(;n>=a;)r+=i,n-=a;return r}function cf(e){if(e<=po.length)return po[e-1];let t=e-po.length+1;return`${po[po.length-1]} ${Ih(t)}`}var $h=[{id:1,label:"Deep Work",area:"work",xp:40,history:[U(0),U(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[U(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],Fh=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],Oh=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function jh({habit:e,subs:t=vo,onToggleToday:n,onDelete:r,onSave:a}){let i=(e.history||[]).includes(U(0)),[l,s]=(0,o.useState)(0),u=()=>{i||s(w=>w+1)},{streak:c,freezeUsed:d}=Qa(e.history),p=Ue.find(w=>w.key===e.area)||Ue[0],[h,v]=(0,o.useState)(!1),[k,y]=(0,o.useState)(e.label),[_,g]=(0,o.useState)(e.area),[m,f]=(0,o.useState)(()=>hr(t,e)),[x,N]=(0,o.useState)(e.xp),b=()=>{y(e.label),g(e.area),f(hr(t,e)),N(e.xp),v(!0)},M=()=>{let w=k.trim();w&&(a(e.id,{label:w,area:_,sub:m,xp:Math.max(1,+x||e.xp)}),v(!1))};return h?o.default.createElement("div",{className:"quest-habit-card good editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:k,onChange:w=>y(w.target.value),onKeyDown:w=>w.key==="Enter"&&M(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},Ue.map(w=>o.default.createElement("button",{key:w.key,type:"button",className:`area-chip ${_===w.key?"active":""}`,style:{"--ac":w.color},onClick:()=>{g(w.key);let F=mr(t,w.key);f(F.length?F[0].key:null)}},w.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},mr(t,_).map(w=>o.default.createElement("button",{key:w.key,type:"button",className:`sub-chip ${m===w.key?"active":""}`,onClick:()=>f(w.key)},w.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:x,onChange:w=>N(w.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>v(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:M},"save")))):o.default.createElement("div",{className:`quest-habit-card good ${l?"just-completed":""}`,key:`g${e.id}`},l>0&&o.default.createElement("span",{className:"xp-pop",key:l},"+",e.xp),o.default.createElement("span",{className:"area-dot",style:{background:p.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",p.label,c>0?` \xB7 \u{1F525}${c}${d?" \u2744\uFE0F":""}`:"")),o.default.createElement("button",{className:"link-btn",onClick:w=>{w.stopPropagation(),Za.open(Tn("good",e.id)),P.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`quest-check ${i?"done":""}`,onClick:()=>{u(),n(e.id)},"aria-label":"Mark done today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:i?0:24,transition:"stroke-dashoffset 220ms ease"}}))),o.default.createElement("button",{className:"vault-card-edit",onClick:b,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Uh({habit:e,subs:t=vo,onToggleToday:n,onDelete:r,onSave:a}){let i=(e.history||[]).includes(U(0)),l=Ue.find(x=>x.key===e.area)||Ue[0],s=of(e.history),[u,c]=(0,o.useState)(!1),[d,p]=(0,o.useState)(e.label),[h,v]=(0,o.useState)(e.area),[k,y]=(0,o.useState)(()=>hr(t,e)),[_,g]=(0,o.useState)(e.xp),m=()=>{p(e.label),v(e.area),y(hr(t,e)),g(e.xp),c(!0)},f=()=>{let x=d.trim();x&&(a(e.id,{label:x,area:h,sub:k,xp:Math.max(1,+_||e.xp)}),c(!1))};return u?o.default.createElement("div",{className:"quest-habit-card bad editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:d,onChange:x=>p(x.target.value),onKeyDown:x=>x.key==="Enter"&&f(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},Ue.map(x=>o.default.createElement("button",{key:x.key,type:"button",className:`area-chip ${h===x.key?"active":""}`,style:{"--ac":x.color},onClick:()=>{v(x.key);let N=mr(t,x.key);y(N.length?N[0].key:null)}},x.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},mr(t,h).map(x=>o.default.createElement("button",{key:x.key,type:"button",className:`sub-chip ${k===x.key?"active":""}`,onClick:()=>y(x.key)},x.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:_,onChange:x=>g(x.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>c(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:f},"save")))):o.default.createElement("div",{className:"quest-habit-card bad"},o.default.createElement("span",{className:"area-dot",style:{background:l.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",l.label," \xB7 ",s,"x this week")),o.default.createElement("button",{className:`quest-check bad-check ${i?"done":""}`,onClick:()=>n(e.id),"aria-label":"Log slip today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),o.default.createElement("button",{className:"vault-card-edit",onClick:m,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Wh({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(e.label),[c,d]=(0,o.useState)(e.cost),p=()=>{u(e.label),d(e.cost),l(!0)},h=()=>{let v=s.trim();v&&(a(e.id,{label:v,cost:Math.max(1,+c||e.cost)}),l(!1))};return i?o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:s,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&h(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:c,onChange:v=>d(v.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP cost")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:h},"save")))):o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"reward-top"},o.default.createElement("span",{className:"reward-label"},e.label),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),o.default.createElement("span",{className:"reward-cost"},e.cost," XP"),o.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&o.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function Jh({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:a,setRewards:i,tagCtl:l}){let[s,u]=(0,o.useState)("all"),[c,d]=(0,o.useState)(!1),p=l.subs,h=(0,o.useMemo)(()=>lf(e,n),[e,n]),v=(0,o.useMemo)(()=>sf(e,n,a),[e,n,a]),{level:k,into:y,span:_}=uf(h),g=Math.round(y/_*100),m=S=>{let B=U(0),R=!(e.find(K=>K.id===S)?.history||[]).includes(B);if(t(K=>K.map(Q=>{if(Q.id!==S)return Q;let An=(Q.history||[]).includes(B)?Q.history.filter(Ot=>Ot!==B):[...Q.history||[],B];return{...Q,history:An.slice(-370)}})),go.propagate("good",S,R),R){P.success(),cn.emit("habitDone");let K=pr().hour;K<6&&mo({earlyFinish:!0}),K>=0&&K<4&&mo({lateFinish:!0})}else P.click()},f=S=>{let B=U(0),R=!(n.find(K=>K.id===S)?.history||[]).includes(B);r(K=>K.map(Q=>{if(Q.id!==S)return Q;let An=(Q.history||[]).includes(B)?Q.history.filter(Ot=>Ot!==B):[...Q.history||[],B];return{...Q,history:An.slice(-370)}})),R?(P.error(),cn.emit("badHabit")):P.click()},x=S=>{t(B=>B.filter(R=>R.id!==S)),P.delete()},N=S=>{r(B=>B.filter(R=>R.id!==S)),P.delete()},b=(S,B)=>t(R=>R.map(K=>K.id===S?{...K,...B}:K)),M=(S,B)=>r(R=>R.map(K=>K.id===S?{...K,...B}:K)),w=S=>{let B=U(0);i(R=>R.map(K=>K.id===S?{...K,claimed:[...K.claimed||[],B]}:K)),P.success(),cn.emit("rewardClaimed")},F=S=>{i(B=>B.filter(R=>R.id!==S)),P.delete()},T=(S,B)=>i(R=>R.map(K=>K.id===S?{...K,...B}:K)),[W,ne]=(0,o.useState)(""),[z,I]=(0,o.useState)("work"),[$,O]=(0,o.useState)(20),[re,We]=(0,o.useState)(""),[ye,H]=(0,o.useState)("work"),[he,ge]=(0,o.useState)(20),[Ce,L]=(0,o.useState)(""),[J,se]=(0,o.useState)(100),fe=()=>{let S=W.trim();S&&(t(B=>[...B,{id:we(),label:S,area:z,xp:+$||10,history:[]}]),ne(""),P.click())},j=()=>{let S=re.trim();S&&(r(B=>[...B,{id:we(),label:S,area:ye,xp:+he||10,history:[]}]),We(""),P.click())},Z=()=>{let S=Ce.trim();S&&(i(B=>[...B,{id:we(),label:S,cost:+J||50,claimed:[]}]),L(""),P.click())},X=(0,o.useMemo)(()=>l.radarMode==="areas"?Ue.map(S=>({key:S.key,label:S.label,color:S.color,value:Fp(S.key,e,n)})):p.map(S=>({key:S.key,label:S.label,color:(Ue.find(B=>B.key===S.area)||{}).color,value:Ip(p,S.key,e,n)})),[l.radarMode,p,e,n]),ie=(0,o.useMemo)(()=>{let S=Math.max(...Ue.map(Q=>Fp(Q.key,e,n)),0),B=Math.max(...p.map(Q=>Ip(p,Q.key,e,n)),0),R=Math.max(S,B,1),K=R<=100?25:R<=500?50:100;return Math.ceil(R/K)*K},[p,e,n]),Et=(0,o.useMemo)(()=>{if(l.radarMode==="areas")return 0;let S=new Set(p.map(Q=>Q.key)),B=Q=>!Q.sub||!S.has(Q.sub),R=e.filter(B).reduce((Q,Je)=>Q+Je.xp*(Je.history?.length||0),0),K=n.filter(B).reduce((Q,Je)=>Q+Je.xp*(Je.history?.length||0),0);return R+K},[l.radarMode,p,e,n]),Dn=s==="all"?e:e.filter(S=>S.area===s),vr=s==="all"?n:n.filter(S=>S.area===s),$t=e.reduce((S,B)=>S+B.xp*(B.history?.length||0),0),Ft=n.reduce((S,B)=>S+B.xp*(B.history?.length||0),0),Ne=a.reduce((S,B)=>S+B.cost*(B.claimed?.length||0),0);return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"hero-card hero-card-viz"},o.default.createElement("div",{className:"hero-viz-row"},o.default.createElement(Ps,{pct:g,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${k}`,sublabel:cf(k)}),o.default.createElement("div",{className:"hero-viz-stats"},o.default.createElement("span",{className:"hero-xp-total"},o.default.createElement(vt,{value:h})," ",o.default.createElement("small",null,"XP")),Ne>0&&o.default.createElement("span",{className:"hero-xp-spend"},"\u25C9 ",v," to spend"),o.default.createElement("span",{className:"hero-xp-sub"},y,"/",_," to next level"),o.default.createElement("div",{className:"hero-xp-split"},o.default.createElement("span",{className:"hero-xp-earned"},"+",o.default.createElement(vt,{value:$t})),o.default.createElement("span",{className:"hero-xp-lost"},"\u2212",o.default.createElement(vt,{value:Ft})))))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"LIFE-AREAS")),o.default.createElement("div",{className:"radar-card"},o.default.createElement("div",{className:"radar-controls"},o.default.createElement("div",{className:"radar-mode"},o.default.createElement("button",{className:l.radarMode==="areas"?"active":"",onClick:()=>{l.setRadarMode("areas"),P.click()}},"4 areas"),o.default.createElement("button",{className:l.radarMode==="subs"?"active":"",onClick:()=>{l.setRadarMode("subs"),P.click()}},p.length," tags")),o.default.createElement("button",{className:"radar-edit",onClick:()=>d(!0)},"edit tags")),o.default.createElement(sh,{axes:X,size:252,maxValue:ie}),Et>0&&o.default.createElement("div",{className:"radar-note"},Et," XP from untagged habits isn't plotted \u2014 tag them to include it")),($t>0||Ft>0||Ne>0)&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"XP SOURCE")),o.default.createElement("div",{className:"donut-card"},o.default.createElement(rf,{size:120,stroke:16,centerLabel:v,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:$t,color:"#5EEAD4"},{key:"lost",label:"Lost",value:Ft,color:"#F0576B"},{key:"spent",label:"Spent",value:Ne,color:"#F5A623"}]}),o.default.createElement("div",{className:"donut-legend"},o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),o.default.createElement("span",null,"Earned from good habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(vt,{value:$t}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),o.default.createElement("span",null,"Lost to bad habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(vt,{value:Ft}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F5A623"}}),o.default.createElement("span",null,"Spent on rewards"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(vt,{value:Ne}))),o.default.createElement("div",{className:"donut-legend-row donut-legend-total"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"transparent"}}),o.default.createElement("span",null,"Level progress (spending doesn't count)"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(vt,{value:h})))))),o.default.createElement("div",{className:"area-filter"},o.default.createElement("button",{className:s==="all"?"active":"",onClick:()=>u("all")},"all"),Ue.map(S=>o.default.createElement("button",{key:S.key,className:s===S.key?"active":"",style:{"--ac":S.color},onClick:()=>{u(S.key),P.click()}},S.label))),c&&o.default.createElement(Xh,{tagCtl:l,onClose:()=>d(!1)}),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"GOOD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no good habits yet")):Dn.map(S=>o.default.createElement(jh,{key:S.id,habit:S,subs:p,onToggleToday:m,onDelete:x,onSave:b}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new good habit...",value:W,onChange:S=>ne(S.target.value),onKeyDown:S=>S.key==="Enter"&&fe()}),o.default.createElement("button",{className:"add-btn",onClick:fe,"aria-label":"Add good habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},Ue.map(S=>o.default.createElement("button",{key:S.key,className:z===S.key?"active":"",onClick:()=>I(S.key)},S.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:$,onChange:S=>O(+S.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"BAD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},n.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no bad habits tracked")):vr.map(S=>o.default.createElement(Uh,{key:S.id,habit:S,subs:p,onToggleToday:f,onDelete:N,onSave:M}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:re,onChange:S=>We(S.target.value),onKeyDown:S=>S.key==="Enter"&&j()}),o.default.createElement("button",{className:"add-btn",onClick:j,"aria-label":"Add bad habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},Ue.map(S=>o.default.createElement("button",{key:S.key,className:ye===S.key?"active":"",onClick:()=>H(S.key)},S.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:he,onChange:S=>ge(+S.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"REWARD-CENTER")),o.default.createElement("div",{className:"vault-grid"},a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no rewards set up")):a.map(S=>o.default.createElement(Wh,{key:S.id,reward:S,canClaim:v>=S.cost,onClaim:w,onDelete:F,onSave:T}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new reward...",value:Ce,onChange:S=>L(S.target.value),onKeyDown:S=>S.key==="Enter"&&Z()}),o.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:J,onChange:S=>se(+S.target.value||50)}),o.default.createElement("button",{className:"add-btn",onClick:Z,"aria-label":"Add reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var Vh=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function Hh(e=1e3*30){let[t,n]=(0,o.useState)(Date.now());return(0,o.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function Kh(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let a=Math.floor(r/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function df({checked:e,onChange:t,color:n}){return o.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function Gh({task:e,now:t,onToggle:n,onDelete:r,index:a}){let[i,l]=(0,o.useState)(!1),s=(0,o.useRef)(null),u=Ga.find(d=>d.key===e.priority)||Ga[0];(0,o.useEffect)(()=>()=>{s.current&&clearTimeout(s.current)},[]);let c=()=>{s.current||(l(!0),s.current=setTimeout(()=>r(e.id),220))};return o.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${a*35}ms`}},o.default.createElement(df,{checked:e.done,onChange:()=>n(e.id),color:u.color}),o.default.createElement("div",{className:"task-main"},o.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),o.default.createElement("span",{className:"task-meta"},o.default.createElement("span",{className:"prio-dot",style:{background:u.color}}),o.default.createElement("span",{className:"prio-label"},u.label),o.default.createElement("span",{className:"dot-sep"},"\xB7"),o.default.createElement("span",null,Kh(e.createdAt,t)))),o.default.createElement("button",{className:"del-btn",onClick:c,"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var Op="tasksh.tasks.v1",jp="tasksh.routines.v1",Up="tasksh.vaulthabits.v1",Wp="tasksh.projects.v1",Jp="tasksh.goodhabits.v1",Vp="tasksh.badhabits.v1",Hp="tasksh.rewards.v1",Kp="tasksh.deviceid.v1",Cs="tasksh.notifyenabled.v1",Ts="tasksh.aikey.v1";function Xh({tagCtl:e,onClose:t}){let[n,r]=(0,o.useState)(null),[a,i]=(0,o.useState)(""),l=s=>{a.trim()&&(e.addSub(s,a),P.success()),i(""),r(null)};return o.default.createElement("div",{className:"sheet-backdrop",onClick:t},o.default.createElement("div",{className:"sheet",onClick:s=>s.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"edit tags"),o.default.createElement("button",{className:"sheet-close",onClick:t,"aria-label":"Close"},"\xD7")),Ue.map(s=>{let u=mr(e.subs,s.key);return o.default.createElement("div",{key:s.key,className:"tag-group"},o.default.createElement("div",{className:"tag-group-head"},o.default.createElement("span",{className:"tag-dot",style:{background:s.color}}),o.default.createElement("span",{className:"tag-group-name"},s.label)),u.map(c=>o.default.createElement("div",{key:c.key,className:"tag-row"},o.default.createElement("input",{className:"tag-input",defaultValue:c.label,maxLength:18,onBlur:d=>e.renameSub(c.key,d.target.value),onKeyDown:d=>{d.key==="Enter"&&d.target.blur()}}),o.default.createElement("button",{className:"tag-del",disabled:u.length<=1,title:u.length<=1?"each area needs at least one tag":"remove",onClick:()=>{e.removeSub(c.key),P.delete()}},"\xD7"))),n===s.key?o.default.createElement("div",{className:"tag-row"},o.default.createElement("input",{className:"tag-input",autoFocus:!0,placeholder:"new tag\u2026",maxLength:18,value:a,onChange:c=>i(c.target.value),onBlur:()=>l(s.key),onKeyDown:c=>{c.key==="Enter"&&l(s.key),c.key==="Escape"&&(i(""),r(null))}})):o.default.createElement("button",{className:"tag-add",onClick:()=>{i(""),r(s.key)}},"+ add tag"))}),o.default.createElement("div",{className:"sheet-foot"},"habits keep their tag when you rename it",o.default.createElement("button",{className:"tag-reset",onClick:()=>{e.resetSubs(),P.click()}},"reset to defaults"))))}function qh({selfRef:e,data:t,links:n,setLinks:r,onClose:a}){let[i,l]=(0,o.useState)(!1),s=Sp(e,t),u=Zp(n,e),c=(0,o.useMemo)(()=>[...t.routines.map(p=>({ref:Tn("routine",p.id),label:p.label,kind:"routine"})),...t.goodHabits.map(p=>({ref:Tn("good",p.id),label:p.label,kind:"good"})),...t.vaultHabits.map(p=>({ref:Tn("vault",p.id),label:p.label,kind:"vault"}))].filter(p=>p.ref!==e&&!u.includes(p.ref)),[t,e,u]);return o.default.createElement("div",{className:"sheet-backdrop",onClick:a},o.default.createElement("div",{className:"sheet",onClick:d=>d.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"links \xB7 ",s?.label||"item"),o.default.createElement("button",{className:"sheet-close",onClick:a,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"link-intro"},"ticking any of these completes all of them, both ways."),u.length===0?o.default.createElement("div",{className:"link-empty"},"not linked to anything yet"):o.default.createElement("div",{className:"link-list"},u.map(d=>{let p=Sp(d,t);return o.default.createElement("div",{key:d,className:`link-row ${p?"":"stale"}`},o.default.createElement("span",{className:"link-kind"},p?p.meta:"missing"),o.default.createElement("span",{className:"link-label"},p?p.label:"deleted item"),o.default.createElement("button",{className:"link-remove",onClick:()=>{r(h=>J0(h,e,d)),P.delete()}},"unlink"))})),i?o.default.createElement("div",{className:"link-picker"},c.length===0?o.default.createElement("div",{className:"link-empty"},"nothing else to link to"):c.map(d=>o.default.createElement("button",{key:d.ref,className:"link-candidate",onClick:()=>{r(p=>W0(p,e,d.ref)),l(!1),P.success()}},o.default.createElement("span",{className:"link-kind"},Yp[d.kind].label),o.default.createElement("span",{className:"link-label"},d.label),o.default.createElement("span",{className:"link-plus"},"+")))):o.default.createElement("button",{className:"link-add-btn",onClick:()=>l(!0)},"+ link to something")))}function Yh({id:e,onDone:t}){let n=Rp(e);return(0,o.useEffect)(()=>{let r=setTimeout(t,4200);return()=>clearTimeout(r)},[e,t]),n?o.default.createElement("div",{className:"ach-toast",onClick:t},o.default.createElement("span",{className:"ach-toast-icon"},n.icon),o.default.createElement("span",{className:"ach-toast-body"},o.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),o.default.createElement("span",{className:"ach-toast-name"},n.name),o.default.createElement("span",{className:"ach-toast-desc"},n.desc)),o.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins)):null}function Qh({level:e,coins:t,unlockedTheme:n,extraThemes:r=0,evolvedTo:a,onDone:i}){let l=fr.find(u=>u.unlockLevel>e),s=Ms(e);return o.default.createElement("div",{className:"lvl-backdrop",onClick:i},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"lvl-card",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"lvl-kicker"},"level up"),o.default.createElement("div",{className:"lvl-num"},e),o.default.createElement("div",{className:"lvl-title"},cf(e)),o.default.createElement("div",{className:"lvl-rewards"},o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),o.default.createElement("span",{className:"lvl-reward-text"},"+",t," coins")),n&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),o.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",o.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),a!=null&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),o.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),o.default.createElement("div",{className:"lvl-next"},l?`next theme at level ${l.unlockLevel}`:"all themes unlocked",s?` \xB7 next form at ${s.minLevel}`:""),o.default.createElement("button",{className:"evo-btn",onClick:i},"continue")))}function Zh({earned:e,coins:t}){let n=new Set(e),r=ho.filter(i=>!i.hidden||n.has(i.id)),a=ho.filter(i=>i.hidden&&!n.has(i.id)).length;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"ach-head"},o.default.createElement("span",{className:"sheet-title"},"achievements"),o.default.createElement("span",{className:"ach-count"},n.size,"/",ho.length," \xB7 \u25C9 ",t)),o.default.createElement("div",{className:"ach-grid"},r.map(i=>{let l=n.has(i.id);return o.default.createElement("div",{key:i.id,className:`ach-card ${l?"got":""}`},o.default.createElement("span",{className:"ach-icon"},l?i.icon:"\xB7"),o.default.createElement("span",{className:"ach-name"},i.name),o.default.createElement("span",{className:"ach-desc"},i.desc),o.default.createElement("span",{className:"ach-coins"},"\u25C9 ",i.coins))})),a>0&&o.default.createElement("div",{className:"ach-hidden-note"},a," hidden achievement",a===1?"":"s"," left to discover"))}function Rh({ctl:e,level:t,totalXP:n,earned:r=[],coins:a=0,onClose:i}){let l=_n(t+1),s=_n(t);return o.default.createElement("div",{className:"sheet-backdrop",onClick:i},o.default.createElement("div",{className:"sheet",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"themes"),o.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"theme-grid"},e.themes.map(u=>{let c=_s(u,t),d=e.themeId===u.id,p=_n(u.unlockLevel),h=_n(Math.max(1,u.unlockLevel-1)),v=c?100:Math.max(0,Math.min(99,Math.round((n-h)/(p-h)*100)));return o.default.createElement("button",{key:u.id,className:`theme-card ${d?"active":""} ${c?"":"locked"}`,onClick:()=>{c?(e.setThemeId(u.id),P.success()):P.error()},disabled:!c},o.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${u.colors.bg} 0%, ${u.colors.panel} 45%, ${u.colors.accent} 100%)`}},!c&&o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},o.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),d&&o.default.createElement("span",{className:"theme-active-dot"})),o.default.createElement("span",{className:"theme-name"},u.name),c?o.default.createElement("span",{className:"theme-blurb"},u.blurb):o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{className:"theme-req"},"level ",u.unlockLevel),o.default.createElement("span",{className:"theme-bar"},o.default.createElement("span",{className:"theme-bar-fill",style:{width:`${v}%`}})),o.default.createElement("span",{className:"theme-pct"},v,"%")))})),o.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,l-n)," XP to level ",t+1),o.default.createElement("div",{className:"ach-section"},o.default.createElement(Zh,{earned:r,coins:a})),o.default.createElement("div",{className:"calm-toggle-row"},o.default.createElement("div",null,o.default.createElement("div",{className:"calm-toggle-label"},"ambient background"),o.default.createElement("div",{className:"calm-toggle-hint"},e.ambience?"drifting gradients and particles":"flat black, like the old build")),o.default.createElement("button",{className:`calm-switch ${e.ambience?"on":""}`,onClick:()=>{e.setAmbience(!e.ambience),P.click()},"aria-pressed":e.ambience},o.default.createElement("span",{className:"calm-knob"}))),o.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",o.default.createElement("b",null,e.phase.label))))}function Va({label:e,value:t,color:n}){return o.default.createElement("div",{className:"pet-stat"},o.default.createElement("div",{className:"pet-stat-top"},o.default.createElement("span",{className:"pet-stat-label"},e),o.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),o.default.createElement("div",{className:"pet-stat-track"},o.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function eg({from:e,to:t,petName:n,onDone:r}){(0,o.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let a=Pn[t];return o.default.createElement("div",{className:"evo-backdrop",onClick:r},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},o.default.createElement("div",{className:"evo-kicker"},"evolution"),o.default.createElement("div",{className:"evo-stage-row"},o.default.createElement("div",{className:"evo-old"},o.default.createElement(zs,{stage:e,mood:"content",size:72,animate:!1})),o.default.createElement("span",{className:"evo-arrow"},"\u2192"),o.default.createElement("div",{className:"evo-new"},o.default.createElement(zs,{stage:t,mood:"joyful",size:132,evolving:!0}))),o.default.createElement("div",{className:"evo-name"},n," became ",o.default.createElement("b",null,a.name)),o.default.createElement("div",{className:"evo-title"},a.title),o.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}var gr="https://tasksh-notify.techcraftor.workers.dev",tg="BO6-Y8l-bh_WOLy4A7zYXX_8cAPCYiY2gzlkn7kuWqMlvK921aU5IebajkHiQlRuQaoOQxSjfIAFj--bO_Vvyi0";function ng(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let i=0;i<r.length;i++)a[i]=r.charCodeAt(i);return a}function ei(){let e=localStorage.getItem(Kp);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Kp,e)),e}async function rg(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ng(tg)}));let r=ei();if(!(await fetch(`${gr}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function og(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=ei();try{await fetch(`${gr}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function Gp(e){let t=ei();try{await fetch(`${gr}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label,duration:n.duration}))})})}catch{}}var qa=[{id:"gemini",label:"Gemini",test:e=>/^(AIza|AQ\.)/.test(e),where:"aistudio.google.com/apikey",free:"~1000 req/day",shared:!0},{id:"groq",label:"Groq",test:e=>/^gsk_/.test(e),where:"console.groq.com",free:"~1000 req/day, fastest"},{id:"cerebras",label:"Cerebras",test:e=>/^csk-/.test(e),where:"cloud.cerebras.ai",free:"1M tokens/day"},{id:"nvidia",label:"NVIDIA NIM",test:e=>/^nvapi-/.test(e),where:"build.nvidia.com",free:"40 req/min, 1000 credits"},{id:"mistral",label:"Mistral",test:()=>!1,prefixed:!0,where:"console.mistral.ai",free:"paste as mistral:YOUR_KEY"},{id:"openrouter",label:"OpenRouter",test:e=>/^sk-or-/.test(e),where:"openrouter.ai/keys",free:"50 req/day"},{id:"openai",label:"OpenAI",test:e=>/^sk-/.test(e),where:"platform.openai.com"}];function fo(e){let t=String(e||"").trim(),n=t.match(/^([a-z][a-z0-9]*):(.+)$/i);if(n){let r=qa.find(a=>a.id===n[1].toLowerCase());if(r)return r}return qa.find(r=>r.test(t))||null}var pf="tasksh.aikeys.v1";function Ln(){try{let e=JSON.parse(localStorage.getItem(pf)||"null");if(Array.isArray(e)&&e.length)return e.filter(Boolean);let t=localStorage.getItem(Ts);return t?[t]:[]}catch{return[]}}function Bs(e){let t=[...new Set(e.map(n=>String(n).trim()).filter(Boolean))].slice(0,10);try{localStorage.setItem(pf,JSON.stringify(t)),t.length?localStorage.setItem(Ts,t[0]):localStorage.removeItem(Ts)}catch{}}function ag(e){let t=String(e||"").trim();if(!t)return Ln();let n=[...Ln(),t];return Bs(n),Ln()}function ig(e){let t=Ln().filter(n=>n!==e);return Bs(t),t}function lg(){return Ln()[0]||""}function sg(e){Bs(e?[e]:[])}function Is(e){if(!e)return"";let t=String(e).match(/^([a-z][a-z0-9]*:)(.+)$/i);return t&&qa.some(n=>n.id===t[1].slice(0,-1).toLowerCase())?t[1]+Is(t[2]):e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`}var Ya=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function ug(e){let t=await fetch(`${gr}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function cg(e,t,n,r,a){let i=await fetch(`${gr}/companion`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,data:t,context:n,log:r,apiKey:a,apiKeys:Ln()})}),l=null;try{l=await i.json()}catch{}if(!i.ok){let s=l&&l.error;throw s==="no_key"||s==="bad_key"?new Ya(l&&l.message||"key rejected"):new Error(l&&l.message||`request failed (${i.status})`)}return{reply:l&&l.reply||"\u2026",actions:l&&l.actions||[]}}var dg=["how am I doing?","add a 30 min reading routine before bed","what am I neglecting?","my evenings are too packed"];function Xp(e,t){let n=(r,a)=>(r||[]).find(i=>i.id===a);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${St(st(e.time))} \xB7 ${e.label} (${It(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),a=[];return e.time!==void 0&&e.time!==r?.time&&a.push(`${St(st(r?.time||"00:00"))} \u2192 ${St(st(e.time))}`),e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&a.push(`${It(r?.duration||0)} \u2192 ${It(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${a.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),a=[];return e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&a.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${a.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function pg(e,t,n){let{routines:r,vaultHabits:a,goodHabits:i,badHabits:l,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let c of e)switch(c.op){case"add_routine":r=[...r,{id:we(),time:c.time,label:c.label,duration:c.duration,history:[],...c.alternatives?.length?{alternatives:c.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(d=>d.id===c.id?{...d,...c.time!==void 0?{time:c.time}:{},...c.label!==void 0?{label:c.label}:{},...c.duration!==void 0?{duration:c.duration}:{}}:d),u.add("routines");break;case"delete_routine":r=r.filter(d=>d.id!==c.id),u.add("routines");break;case"add_vault_habit":a=[...a,{id:we(),icon:c.icon,label:c.label,weeklyGoal:c.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":a=a.map(d=>d.id===c.id?{...d,...c.label!==void 0?{label:c.label}:{},...c.weeklyGoal!==void 0?{weeklyGoal:c.weeklyGoal}:{}}:d),u.add("vaultHabits");break;case"delete_vault_habit":a=a.filter(d=>d.id!==c.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:we(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(d=>d.id!==c.id),u.add("goodHabits");break;case"add_bad_habit":l=[...l,{id:we(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":l=l.filter(d=>d.id!==c.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:we(),label:c.label,cost:c.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(d=>d.id!==c.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(a),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(l),u.has("rewards")&&n.setRewards(s)}function fg({petCtl:e,state:t,setters:n,ctx:r,showDataMsg:a}){let{pet:i,form:l,mood:s,nudge:u,remember:c,rename:d}=e,[p,h]=(0,o.useState)(()=>lg()),[v,k]=(0,o.useState)(!1),[y,_]=(0,o.useState)(null),[g,m]=(0,o.useState)(""),[f,x]=(0,o.useState)(!1),[N,b]=(0,o.useState)(0),[M,w]=(0,o.useState)(null),[F,T]=(0,o.useState)(null),[W,ne]=(0,o.useState)(()=>new Set),[z,I]=(0,o.useState)(!1),[$,O]=(0,o.useState)(i.name),[re,We]=(0,o.useState)(!0),ye=(0,o.useRef)(null),H=(0,o.useRef)(0),he=(0,o.useMemo)(()=>Y0(r),[r]);(0,o.useEffect)(()=>{if(!f){b(0);return}let j=Date.now(),Z=setInterval(()=>b((Date.now()-j)/1e3),100);return()=>clearInterval(Z)},[f]),(0,o.useEffect)(()=>{ye.current&&(ye.current.scrollTop=ye.current.scrollHeight)},[i.log,F,f]);let ge=async j=>{let Z=(j??g).trim();if(!Z||f)return;let X=Date.now()-H.current;if(X<3e3){w(`give me a second \u2014 ${Math.ceil((3e3-X)/1e3)}s`);return}if(m(""),c("user",Z),u("chat"),P.click(),!p){c("pet","i can hear you, but i can't say much yet. connect an ai key and i can really talk \u2014 and change things for you."),k(!0);return}H.current=Date.now(),x(!0),w(null),T(null),ne(new Set);try{let ie=await cg(Z,{routines:t.routines,vaultHabits:t.vaultHabits,goodHabits:t.goodHabits,badHabits:t.badHabits,rewards:t.rewards,totalXP:t.totalXP},Q0(r),i.log||[],p);c("pet",ie.reply),ie.actions.length&&(T(ie),P.success())}catch(ie){ie instanceof Ya?(sg(""),h(""),_(ie.message),k(!0),c("pet","my link to the wider world got rejected. mind checking the key?")):(c("pet","couldn't reach far enough to answer that. try again in a moment."),w(ie.message||null)),P.error()}finally{x(!1)}},Ce=j=>ne(Z=>{let X=new Set(Z);return X.has(j)?X.delete(j):X.add(j),X}),L=F?F.actions.filter((j,Z)=>!W.has(Z)):[],J=()=>{L.length&&(pg(L,t,n),P.success(),u("chat"),a("success",`applied ${L.length} change${L.length===1?"":"s"}`),c("pet",`done \u2014 ${L.length} change${L.length===1?"":"s"} applied.`),T(null),ne(new Set))},se=()=>{P.whoosh(),c("pet","left it as it was."),T(null),ne(new Set)};if(v)return o.default.createElement(mg,{initialError:y,onCancel:()=>k(!1),onSaved:(j,Z,X={})=>{h(j),_(null),X.keepOpen||k(!1),a("success",Z||"connected")}});let fe=L.reduce((j,Z)=>{let X=Xp(Z,t).kind;return j[X]=(j[X]||0)+1,j},{});return o.default.createElement("div",{className:"task-list companion-scroll"},o.default.createElement("div",{className:"cmp-hero"},o.default.createElement(zs,{stage:l.stage,mood:s.key,size:132}),o.default.createElement("div",{className:"cmp-id"},z?o.default.createElement("input",{className:"pet-name-input",value:$,autoFocus:!0,maxLength:14,onChange:j=>O(j.target.value),onBlur:()=>{d($),I(!1)},onKeyDown:j=>{j.key==="Enter"&&(d($),I(!1))}}):o.default.createElement("button",{className:"pet-name",onClick:()=>{O(i.name),I(!0)}},i.name),o.default.createElement("span",{className:"pet-form"},l.name," \xB7 ",s.label)),o.default.createElement("button",{className:"cmp-stats-toggle",onClick:()=>We(j=>!j)},re?"stats":"hide")),!re&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"pet-stats"},o.default.createElement(Va,{label:"happiness",value:i.happiness,color:"var(--accent)"}),o.default.createElement(Va,{label:"energy",value:i.energy,color:"var(--accent2)"}),o.default.createElement(Va,{label:"friendship",value:i.friendship,color:"var(--accent)"}),o.default.createElement(Va,{label:"intelligence",value:i.intelligence,color:"var(--accent2)"})),o.default.createElement("div",{className:"pet-next"},ef(i.friendship),Ms(r.level)?` \xB7 next form at level ${Ms(r.level).minLevel}`:" \xB7 final form")),o.default.createElement("div",{className:"cmp-chat",ref:ye},o.default.createElement("div",{className:"pet-msg pet cmp-greeting"},he),(i.log||[]).map((j,Z)=>o.default.createElement("div",{key:Z,className:`pet-msg ${j.role}`},j.text)),f&&o.default.createElement("div",{className:"pet-msg pet thinking"},o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),N>=1&&o.default.createElement("span",{className:"cmp-elapsed"},N.toFixed(1),"s")),F&&F.actions.length>0&&o.default.createElement("div",{className:"cmp-diff-wrap"},o.default.createElement("div",{className:"ai-diff-head"},o.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),o.default.createElement("span",{className:"ai-diff-counts"},fe.add?o.default.createElement("span",{className:"c-add"},"+",fe.add):null,fe.edit?o.default.createElement("span",{className:"c-edit"},"~",fe.edit):null,fe.remove?o.default.createElement("span",{className:"c-remove"},"\u2212",fe.remove):null)),o.default.createElement("div",{className:"ai-diff"},F.actions.map((j,Z)=>{let X=Xp(j,t),ie=W.has(Z);return o.default.createElement("button",{key:Z,className:`ai-diff-row ${X.kind} ${ie?"skipped":""}`,onClick:()=>Ce(Z),title:ie?"click to include":"click to skip"},o.default.createElement("span",{className:"ai-sign"},X.kind==="add"?"+":X.kind==="remove"?"\u2212":"~"),o.default.createElement("span",{className:"ai-surface"},X.surface),o.default.createElement("span",{className:"ai-diff-text"},X.text),o.default.createElement("span",{className:"ai-skip-mark"},ie?"skipped":""))})),o.default.createElement("div",{className:"ai-actions"},o.default.createElement("button",{className:"ai-apply",onClick:J,disabled:!L.length},"apply ",L.length||""),o.default.createElement("button",{className:"ai-discard",onClick:se},"discard")),o.default.createElement("div",{className:"ai-hint"},"tap any row to skip it"))),M&&o.default.createElement("div",{className:"ai-error cmp-error"},M),(i.log||[]).length===0&&!f&&o.default.createElement("div",{className:"ai-chips cmp-chips"},dg.map(j=>o.default.createElement("button",{key:j,className:"ai-chip",onClick:()=>ge(j)},j))),o.default.createElement("div",{className:"pet-composer"},o.default.createElement("input",{className:"pet-input",placeholder:p?`talk to ${i.name}\u2026`:`say hello to ${i.name}\u2026`,value:g,onChange:j=>m(j.target.value),onKeyDown:j=>j.key==="Enter"&&ge(),disabled:f}),o.default.createElement("button",{className:"pet-send",onClick:()=>ge(),disabled:f||!g.trim()},"say")),o.default.createElement("button",{className:"cmp-key-link",onClick:()=>k(!0)},p?`key ${Is(p)}`:"connect an ai key"))}function mg({onSaved:e,initialError:t,onCancel:n}){let[r,a]=(0,o.useState)(""),[i,l]=(0,o.useState)(()=>Ln()),[s,u]=(0,o.useState)(!1),[c,d]=(0,o.useState)(t||null),p=(0,o.useRef)(null);(0,o.useEffect)(()=>{p.current?.focus()},[]);let h=async()=>{let v=r.trim();if(!(!v||s)){u(!0),d(null);try{let k=await ug(v),y=ag(v);l(y),a(""),P.success(),e(v,k||(y.length>1?`${y.length} keys connected`:null),{keepOpen:y.length>1})}catch(k){d(k.message||"Couldn't verify that key."),P.error()}finally{u(!1)}}};return o.default.createElement("div",{className:"task-list ai-scroll"},o.default.createElement("div",{className:"ai-gate"},o.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),o.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),o.default.createElement("div",{className:"ai-gate-sub"},"the assistant needs an AI key. all of these have a free tier \u2014 pick whichever you like, or add several so it keeps working when one runs out."),o.default.createElement("div",{className:"prov-list"},qa.filter(v=>v.free).map(v=>o.default.createElement("a",{key:v.id,className:"prov-chip",href:`https://${v.where}`,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("span",{className:"prov-chip-main"},o.default.createElement("span",{className:"prov-name"},v.label),o.default.createElement("span",{className:"prov-where"},v.where)),o.default.createElement("span",{className:"prov-free"},v.free)))),o.default.createElement("div",{className:"ai-gate-steps-note"},"sign in, create a key, paste it below. no card needed for any of them. adding two from ",o.default.createElement("i",null,"different")," providers is what actually buys you headroom."),o.default.createElement("input",{ref:p,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AQ.\u2026 \xB7 AIza\u2026 \xB7 gsk_\u2026 \xB7 csk-\u2026 \xB7 nvapi-\u2026",value:r,onChange:v=>a(v.target.value),onKeyDown:v=>{v.key==="Enter"&&h()},disabled:s}),(()=>{let v=fo(r);return r.trim()?v?o.default.createElement("div",{className:"prov-detected"},"detected: ",v.label,v.note?` \u2014 ${v.note}`:""):o.default.createElement("div",{className:"prov-detected prov-detected-warn"},"unknown prefix \u2014 if it's a Mistral key, paste it as mistral:YOUR_KEY"):null})(),c&&o.default.createElement("div",{className:"ai-error ai-gate-error"},c),o.default.createElement("div",{className:"ai-gate-actions"},o.default.createElement("button",{className:"ai-apply",onClick:h,disabled:s||!r.trim()},s?"checking\u2026":i.length?"add key":"save key"),n&&o.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),i.length>0&&o.default.createElement("div",{className:"keypool"},o.default.createElement("div",{className:"keypool-head"},o.default.createElement("span",null,i.length," key",i.length===1?"":"s"," connected"),o.default.createElement("span",{className:"keypool-hint"},"tried in order")),i.map((v,k)=>{let y=fo(v);return o.default.createElement("div",{className:"keypool-row",key:v},o.default.createElement("span",{className:"keypool-num"},k+1),o.default.createElement("span",{className:"keypool-prov"},y?y.label:"?"),o.default.createElement("span",{className:"keypool-val"},Is(v)),o.default.createElement("button",{className:"keypool-del",onClick:()=>{l(ig(v)),P.delete()}},"remove"))}),o.default.createElement("div",{className:"keypool-note"},"tried top to bottom; a rate-limited key is skipped automatically.",i.filter(v=>fo(v)?.id==="gemini").length>1&&o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," several Gemini keys from the same google account share one quota and add no capacity \u2014 mix in a different provider instead."),(()=>{let v=new Set(i.map(k=>fo(k)?.id).filter(Boolean));return i.length<2||v.size!==1||v.has("gemini")?null:o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," every key is ",fo(i[0]).label," \u2014 one outage takes the assistant down. add a second provider.")})())),o.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function Te(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function hg(e){typeof e=="number"&&Number.isFinite(e)&&e>Ka&&(Ka=e)}function gg(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(a=>n(a?.id))}),t}function vg({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:a,goodHabits:i,badHabits:l,rewards:s,setRewards:u,totalXP:c,setTab:d}){let p=(0,o.useMemo)(()=>sf(i,l||[],s),[i,l,s]),h=Ds(),v=h.hour*60+h.minute,{sorted:k,currentId:y,nextId:_}=As(e,v),g=k.find(z=>z.id===y),m=k.find(z=>z.id===_),f=U(0),x=z=>{let I=!(e.find($=>$.id===z)?.history||[]).includes(f);t($=>$.map(O=>{if(O.id!==z)return O;let We=(O.history||[]).includes(f)?O.history.filter(ye=>ye!==f):[...O.history||[],f];return{...O,history:We.slice(-60)}})),go.propagate("routine",z,I),I?(P.success(),cn.emit("routineDone")):P.click()},N=(0,o.useMemo)(()=>{let z={high:0,mid:1,low:2};return[...n].filter(I=>!I.done).sort((I,$)=>z[I.priority]-z[$.priority])},[n]),b=z=>{r(I=>I.map($=>$.id===z?{...$,done:!$.done}:$)),P.success()},M=(0,o.useMemo)(()=>s.filter(z=>p>=z.cost),[s,p]),w=z=>{u(I=>I.map($=>$.id===z?{...$,claimed:[...$.claimed||[],f]}:$)),P.success()},F=(0,o.useMemo)(()=>{let z={},I=$=>{($||[]).forEach(O=>{z[O]=(z[O]||0)+1})};return e.forEach($=>I($.history)),a.forEach($=>I($.history)),i.forEach($=>I($.history)),z},[e,a,i]),T=g||m,W=!!g,ne=T?(T.history||[]).includes(f):!1;return o.default.createElement("div",{className:"task-list today-view"},o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,W?"HAPPENING NOW":"NEXT UP")),T?o.default.createElement("div",{className:"today-card"},o.default.createElement("div",{className:"today-card-row"},o.default.createElement("span",{className:"today-card-time"},St(st(T.time))),o.default.createElement("span",{className:"today-card-label"},T.label)),o.default.createElement("div",{className:"today-card-sub"},W?`in progress \xB7 ${It(T.duration)}`:`in ${Math.max(0,st(T.time)-v)}m \xB7 ${It(T.duration)}`),o.default.createElement("button",{className:`today-mark-btn ${ne?"done":""}`,onClick:()=>x(T.id)},ne?"\u2713 completed today":"mark complete")):o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no routines set up yet")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"ACTIVITY")),o.default.createElement(uh,{counts:F,weeksBack:12}),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"OPEN TASKS"),N.length>0&&o.default.createElement("button",{className:"today-view-all",onClick:()=>d("tasks")},"view all in tasks \u2192")),N.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):o.default.createElement("div",{className:"today-list"},N.slice(0,5).map((z,I)=>o.default.createElement("div",{key:z.id,className:"today-task-row",style:{animationDelay:`${I*35}ms`}},o.default.createElement("button",{className:"today-task-check",onClick:()=>b(z.id),"aria-label":"Complete task"}),o.default.createElement("span",{className:"today-task-text"},z.text),o.default.createElement("span",{className:`today-prio-dot ${z.priority}`}))),N.length>5&&o.default.createElement("button",{className:"today-more",onClick:()=>d("tasks")},"+",N.length-5," more")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),o.default.createElement("span",{className:"today-xp-total"},o.default.createElement(vt,{value:c})," XP")),M.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):o.default.createElement("div",{className:"today-list"},M.map((z,I)=>o.default.createElement("div",{key:z.id,className:"today-task-row",style:{animationDelay:`${I*35}ms`}},o.default.createElement("span",{className:"today-task-text"},z.label),o.default.createElement("span",{className:"today-reward-cost"},z.cost," XP"),o.default.createElement("button",{className:"today-claim-btn",onClick:()=>w(z.id)},"claim")))))}function yg(){let[e,t]=(0,o.useState)("today"),[n,r]=ih(),a=E=>{E!==e&&P.whoosh(),t(E)},[i,l]=(0,o.useState)(()=>Te(Op,Vh)),[s,u]=(0,o.useState)(()=>Te(jp,ph)),[c,d]=(0,o.useState)(()=>Te(Up,kh)),[p,h]=(0,o.useState)(()=>Te(Wp,bh)),[v,k]=(0,o.useState)(()=>Te(Ap,zh)),[y,_]=(0,o.useState)(()=>Te(Jp,$h)),[g,m]=(0,o.useState)(()=>Te(Vp,Fh)),[f,x]=(0,o.useState)(()=>Te(Hp,Oh)),N=(0,o.useMemo)(()=>lf(y,g),[y,g,f]),b=(0,o.useMemo)(()=>uf(N).level,[N]),M=th(b),w=Z0(b),{links:F,setLinks:T}=H0(),W=Bh(),[ne,z]=(0,o.useState)(null);(0,o.useEffect)(()=>Za.register(E=>z(E)),[]),(0,o.useEffect)(()=>go.register((E,A,q)=>{V0(Tn(E,A),q,F,{setRoutines:u,setVaultHabits:d,setGoodHabits:_},U(0))}),[F]);let I=U(0),$=(0,o.useMemo)(()=>{let E=Te(Xa,{});return{level:b,tasksDone:i.filter(A=>A.done).length,bestStreak:Math.max(y.reduce((A,q)=>Math.max(A,Ns(q.history)),0),s.reduce((A,q)=>Math.max(A,Ns(q.history)),0)),doneToday:y.filter(A=>(A.history||[]).includes(I)).length,totalHabits:y.length,routinesDoneToday:s.filter(A=>(A.history||[]).includes(I)).length,totalRoutines:s.length,vaultCount:c.length,friendship:w.pet.friendship,petStage:w.pet.stage,chats:w.pet.chats,calmSessions:E.calmSessions||0,earlyFinish:!!E.earlyFinish,lateFinish:!!E.lateFinish,returnedAfterGap:!!E.returnedAfterGap}},[b,i,y,s,c,w.pet,I]),O=X0($),[re,We]=(0,o.useState)(null);(0,o.useEffect)(()=>{let E=Te(Xa,null);if(!E||E.seenLevel===void 0){mo({seenLevel:b});return}let A=E.seenLevel;if(b>A){let q=G0(b);O.addCoins(q);let ue=fr.filter(Le=>Le.unlockLevel>A&&Le.unlockLevel<=b);We({level:b,coins:q,unlockedTheme:ue.length?ue[ue.length-1]:null,extraThemes:ue.length>1?ue.length-1:0,evolvedTo:Ha(b).stage>Ha(A).stage?Ha(b).stage:null}),mo({seenLevel:b})}else b<A&&mo({seenLevel:b})},[b]);let[ye,H]=(0,o.useState)(""),[he,ge]=(0,o.useState)("mid"),[Ce,L]=(0,o.useState)("all"),J=(0,o.useRef)(null),se=(0,o.useRef)(null),[fe,j]=(0,o.useState)(null),Z=Hh(),[X,ie]=(0,o.useState)(()=>localStorage.getItem(Cs)==="1"),[Et,Dn]=(0,o.useState)(!1),[vr,$t]=(0,o.useState)(!1);(0,o.useEffect)(()=>{Gp(s)},[s]);let Ft=async()=>{if(!Et){Dn(!0);try{X?(await og(),localStorage.setItem(Cs,"0"),ie(!1),Ne("success","Notifications turned off")):(await rg(),await Gp(s),localStorage.setItem(Cs,"1"),ie(!0),Ne("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(E){Ne("error",E.message||"Couldn't set up notifications")}finally{Dn(!1)}}},Ne=(E,A)=>{j({type:E,text:A})};(0,o.useEffect)(()=>{if(!fe)return;let E=setTimeout(()=>j(null),3200);return()=>clearTimeout(E)},[fe]);let S=()=>{try{let E={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:c,projects:p,notes:v,goodHabits:y,badHabits:g,rewards:f}},A=new Blob([JSON.stringify(E,null,2)],{type:"application/json"}),q=URL.createObjectURL(A),ue=U(0),Le=document.createElement("a");Le.href=q,Le.download=`tasks-sh-backup-${ue}.json`,document.body.appendChild(Le),Le.click(),Le.remove(),URL.revokeObjectURL(q),Ne("ok","backup exported")}catch{Ne("err","export failed")}},B=()=>se.current?.click(),R=E=>{let A=E.target.files&&E.target.files[0];if(E.target.value="",!A)return;let q=new FileReader;q.onerror=()=>Ne("err","couldn't read that file"),q.onload=()=>{try{let ue=JSON.parse(String(q.result)),Le=ue&&typeof ue=="object"&&ue.data?ue.data:ue;if(!Le||typeof Le!="object")throw new Error("bad shape");let js={tasks:l,routines:u,vaultHabits:d,projects:h,notes:k,goodHabits:_,badHabits:m,rewards:x},ko=0;for(let ti of Object.keys(js))Array.isArray(Le[ti])&&(js[ti](Le[ti]),ko++);if(ko===0){Ne("err","no recognizable data in that file");return}hg(gg(Le)),Ne("ok",`imported ${ko} data set${ko===1?"":"s"}`)}catch{Ne("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},q.readAsText(A)},K=Ds(),Q=K.hour*60+K.minute,{currentId:Je,sorted:An}=As(s,Q),[Ot,yo]=(0,o.useState)(null),xo=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{if(xo.current===void 0){xo.current=Je;return}if(Je!==xo.current){let E=An.find(A=>A.id===Je);E&&yo({id:Je,label:E.label,time:E.time}),xo.current=Je}},[Je,An]),(0,o.useEffect)(()=>{if(!Ot)return;let E=setTimeout(()=>yo(null),6e3);return()=>clearTimeout(E)},[Ot]),(0,o.useEffect)(()=>{try{localStorage.setItem(Op,JSON.stringify(i))}catch{}},[i]),(0,o.useEffect)(()=>{try{localStorage.setItem(jp,JSON.stringify(s))}catch{}},[s]),(0,o.useEffect)(()=>{try{localStorage.setItem(Up,JSON.stringify(c))}catch{}},[c]),(0,o.useEffect)(()=>{try{localStorage.setItem(Wp,JSON.stringify(p))}catch{}},[p]),(0,o.useEffect)(()=>{try{localStorage.setItem(Ap,JSON.stringify(v))}catch{}},[v]),(0,o.useEffect)(()=>{try{localStorage.setItem(Jp,JSON.stringify(y))}catch{}},[y]),(0,o.useEffect)(()=>{try{localStorage.setItem(Vp,JSON.stringify(g))}catch{}},[g]),(0,o.useEffect)(()=>{try{localStorage.setItem(Hp,JSON.stringify(f))}catch{}},[f]);let jt=(0,o.useMemo)(()=>{let E=i.length,A=i.filter(Le=>Le.done).length,q=E-A,ue=E===0?0:Math.round(A/E*100);return{total:E,done:A,pending:q,pct:ue}},[i]),$s=(0,o.useMemo)(()=>{let E=i.filter(A=>!A.done);return Ga.map(A=>({key:A.key,label:A.label,color:A.color,value:E.filter(q=>q.priority===A.key).length}))},[i]),Fs=(0,o.useMemo)(()=>{let E=i;return Ce==="active"&&(E=E.filter(A=>!A.done)),Ce==="done"&&(E=E.filter(A=>A.done)),[...E].sort((A,q)=>{if(A.done!==q.done)return A.done?1:-1;let ue={high:0,mid:1,low:2};return ue[A.priority]-ue[q.priority]})},[i,Ce]),Os=()=>{let E=ye.trim();E&&(l(A=>[...A,{id:we(),text:E,done:!1,priority:he,createdAt:Date.now()}]),H(""),J.current?.focus(),P.click())},ff=E=>{let A=!i.find(q=>q.id===E)?.done;l(q=>q.map(ue=>ue.id===E?{...ue,done:!ue.done}:ue)),A?(P.success(),cn.emit("taskDone")):P.click()},mf=E=>{l(A=>A.filter(q=>q.id!==E)),P.delete()},hf=()=>{l(E=>E.filter(A=>!A.done)),P.whoosh()};return o.default.createElement("div",{className:"app-root","data-particle":M.theme.ambient.particle},O.current&&o.default.createElement(Yh,{id:O.current,onDone:O.shift}),re&&o.default.createElement(Qh,{level:re.level,coins:re.coins,unlockedTheme:re.unlockedTheme,extraThemes:re.extraThemes,evolvedTo:re.evolvedTo,onDone:()=>We(null)}),w.evolution&&o.default.createElement(eg,{from:w.evolution.from,to:w.evolution.to,petName:w.pet.name,onDone:w.clearEvolution}),ne&&o.default.createElement(qh,{selfRef:ne,data:{routines:s,goodHabits:y,vaultHabits:c},links:F,setLinks:T,onClose:()=>z(null)}),vr&&o.default.createElement(Rh,{ctl:M,level:b,totalXP:N,earned:O.earned,coins:O.coins,onClose:()=>$t(!1)}),o.default.createElement("style",null,`
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
        /* v25: the animated ambience now lives INSIDE the panel, where it
           is actually visible. This is a single static gradient for the
           margin area on wide screens -- no animation, no layer, no cost. */
        .app-root::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: var(--blob1), var(--blob2);
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

        /* Which build is actually running. Deliberately quiet -- it is a
           diagnostic, not a feature, and should never compete with the tabs. */
        .version-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--muted);
          border: 1px solid var(--track);
          border-radius: 3px;
          padding: 1px 4px;
          opacity: 0.75;
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
          /* Column, not row: this card stacks a control strip ABOVE the chart.
             As a row the controls became a narrow squeezed sidebar overlapping
             the plot, and .radar-controls' space-between had no width to work
             with. */
          display: flex;
          flex-direction: column;
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

        /* A net-negative area is a signal, not a blank. */
        .radar-label-neg { fill: var(--danger); }
        .radar-zero {
          fill: none; stroke: var(--muted); stroke-width: 1;
          stroke-dasharray: 2 3; opacity: 0.55;
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

        /* double-tap target: the block itself must not swallow the horizontal
           scroll gesture, so only vertical panning is claimed */
        .timeline-block.tappable { cursor: pointer; touch-action: pan-x; }
        .timeline-block.tappable:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 1px;
        }

        /* confirmation that a double-tap registered */
        .timeline-block.pulse { animation: blockPulse 420ms ease; }
        @keyframes blockPulse {
          0%   { transform: scale(1); filter: brightness(1); }
          35%  { transform: scale(1.06); filter: brightness(1.45); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .timeline-block.pulse { animation: none; }
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
          /* promote each layer so the slow drift is a GPU transform instead
             of a full-surface repaint of the panel every frame */
          will-change: transform;
          transform: translateZ(0);
        }

        .amb-scoped.amb-blobs {
          /* Painted at a third of the panel's resolution and scaled up.
             Radial gradients have no high-frequency detail, so the upscale
             is invisible, but the rasterised surface shrinks ~9x -- this is
             what took a 1229px-wide panel from 19fps back to 60. */
          width: 34.5%;
          height: 34.5%;
          inset: 0 auto auto 0;
          transform-origin: 0 0;
          transform: scale(3) translateZ(0);
          background:
            radial-gradient(58% 42% at 14% 8%,  var(--accent),  transparent 62%),
            radial-gradient(52% 40% at 88% 92%, var(--accent2), transparent 62%),
            radial-gradient(46% 38% at 72% 26%, var(--accent),  transparent 66%),
            radial-gradient(50% 44% at 26% 74%, var(--accent2), transparent 66%),
            radial-gradient(40% 36% at 50% 50%, var(--accent),  transparent 70%);
          /* the gradients use full-strength theme colours and are dimmed
             here, so every theme keeps its own character */
          opacity: 0.14;
          animation: ambientDriftScaled calc(96s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        /* drift keyframes for the downscaled layer: the parent already has
           scale:3, so these only translate */
        @keyframes ambientDriftScaled {
          0%   { transform: scale(3) translate(0, 0); }
          25%  { transform: scale(3) translate(1.8%, -1.4%); }
          50%  { transform: scale(3) translate(2.6%, 1.2%); }
          75%  { transform: scale(3) translate(-1.2%, 2.2%); }
          100% { transform: scale(3) translate(-2%, -0.8%); }
        }

        /* Deliberately NO ::after here. A pseudo-element can't get its own
           compositor layer, so animating one forces a full repaint of the
           parent every frame -- measured at 17fps on a 1366px panel. The
           extra gradients are folded into the parent's background instead. */

        /* the time-of-day wash needs more presence inside the panel too */
        .amb-scoped.amb-time {
          /* same 1/3-resolution trick as the blobs: pure gradient, so the
             upscale is free but the rasterised area drops ~9x */
          width: 34.5%;
          height: 34.5%;
          inset: 0 auto auto 0;
          transform-origin: 0 0;
          transform: scale(3) translateZ(0);
          background: radial-gradient(130% 78% at 50% -8%, var(--time-warm), transparent 62%);
          opacity: calc(var(--time-light, 1) * 2.2);
        }

        /* Large panels: the ambience costs fill-rate proportional to area,
           and the subtlest layers are the least visible on a big screen.
           Shed them above 900px rather than dropping frames for effects
           nobody can see. Phones keep the full stack. */
        /* Large panels: collapse the stack to a single layer.
           Four overlapping translucent surfaces have to be composited
           together every frame; at 1320px that measured 25fps, while ONE
           animated gradient of the same size runs at 60. The blobs layer
           carries the theme colour, so it is the one we keep. Phones are
           small enough to afford the full stack and keep it. */
        @media (min-width: 900px) {
          .amb-scoped.amb-grain,
          .amb-scoped.amb-time,
          .amb-scoped.amb-dust { display: none; }
          .amb-scoped.amb-blobs { opacity: 0.11; }
        }

        /* Widest layout: keep the colour, drop the motion entirely. A ~2%
           drift across a 1320px panel cannot be seen; compositing it every
           frame can be felt. */
        @media (min-width: 1240px) {
          .amb-scoped.amb-blobs { animation: none; will-change: auto; }
          .amb-ray { animation: none; }
        }

        /* Everything the user actually reads sits above the ambience. */
        .panel > .titlebar,
        .panel > .tabs,
        .panel > .tab-content,
        .panel > .data-msg,
        .panel > .banner { position: relative; z-index: 1; }



        /* Ambience off: back to flat black. Hides every animated surface
           rather than just dimming, so there is genuinely nothing painting. */
        .no-ambience .amb-layer,
        .no-ambience .calm-breath { display: none !important; }
        .no-ambience .app-root::before { background: none !important; }


        .hero-xp-spend {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: var(--accent2); margin-left: 10px;
        }
        .donut-legend-total {
          margin-top: 4px; padding-top: 6px;
          border-top: 1px solid var(--track);
          color: var(--muted);
        }

        .keypool-prov {
          font-family: 'JetBrains Mono', monospace; font-size: 8.5px;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--accent); flex-shrink: 0; width: 76px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .prov-list { display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px; }
        .prov-chip {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          padding: 8px 11px; border-radius: 9px; text-decoration: none;
          background: var(--bg); border: 1px solid var(--border);
          transition: border-color 150ms ease;
        }
        .prov-chip-main { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .prov-name {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          font-weight: 600; color: var(--accent);
        }
        .prov-where {
          font-size: 9.5px; color: var(--muted);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .prov-free {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--accent2); text-align: right; flex-shrink: 0; max-width: 44%;
          line-height: 1.35;
        }
        .prov-detected {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          color: var(--accent); margin: 6px 0 0; letter-spacing: 0.04em;
        }
        .prov-detected-warn { color: var(--accent2); letter-spacing: 0; line-height: 1.5; }
        .ai-gate-steps-note { font-size: 10.5px; color: var(--muted); margin-bottom: 14px; line-height: 1.55; }
        .ai-gate-steps-note i { color: var(--text); font-style: normal; text-decoration: underline; }

        @media (hover: hover) and (pointer: fine) {
          .prov-chip:hover { border-color: var(--accent); }
        }

        /* ---- api key pool (v27) ---- */
        .keypool { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--track); }
        .keypool-head {
          display: flex; justify-content: space-between; align-items: baseline;
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          color: var(--text); margin-bottom: 8px;
        }
        .keypool-hint { color: var(--muted); font-size: 8.5px; }
        .keypool-row {
          display: flex; align-items: center; gap: 9px;
          padding: 7px 10px; margin-bottom: 5px;
          background: var(--bg); border: 1px solid var(--border); border-radius: 8px;
        }
        .keypool-num {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--accent); width: 12px; flex-shrink: 0;
        }
        .keypool-val {
          flex: 1; font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px; color: var(--muted); letter-spacing: 0.04em;
        }
        .keypool-del {
          background: transparent; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--danger); flex-shrink: 0;
        }
        .keypool-note {
          font-size: 9.5px; color: var(--muted); line-height: 1.5; margin-top: 9px;
        }
        .keypool-note b { color: var(--accent2); }

        /* ---- links + tags (v26) ---- */
        .link-btn {
          background: transparent; border: none; cursor: pointer;
          color: var(--muted); padding: 4px; border-radius: 6px;
          flex-shrink: 0; line-height: 0;
          transition: color 150ms ease, background 150ms ease;
        }
        .routine-link { position: absolute; top: 8px; right: 8px; }

        .link-intro { font-size: 11px; color: var(--muted); line-height: 1.5; margin-bottom: 12px; }
        .link-empty {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: var(--muted); text-align: center; padding: 14px 0;
        }
        .link-list { display: flex; flex-direction: column; gap: 6px; }
        .link-row, .link-candidate {
          display: flex; align-items: center; gap: 9px;
          padding: 9px 11px; border-radius: 9px;
          background: var(--bg); border: 1px solid var(--border);
          width: 100%; text-align: left; font-family: inherit;
        }
        .link-candidate { cursor: pointer; transition: border-color 150ms ease; }
        .link-row.stale { opacity: 0.5; }
        .link-kind {
          font-family: 'JetBrains Mono', monospace; font-size: 8.5px;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent); flex-shrink: 0; min-width: 46px;
        }
        .link-label { font-size: 12px; color: var(--text); flex: 1; min-width: 0;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .link-remove {
          background: transparent; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--danger); letter-spacing: 0.06em; flex-shrink: 0;
        }
        .link-plus { color: var(--accent); font-size: 14px; flex-shrink: 0; }
        .link-picker { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; max-height: 300px; overflow-y: auto; }
        .link-add-btn {
          width: 100%; margin-top: 12px; padding: 11px 0;
          background: transparent; border: 1px dashed var(--border);
          border-radius: 9px; color: var(--accent); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
        }

        /* tag editor */
        .tag-group { margin-bottom: 16px; }
        .tag-group-head { display: flex; align-items: center; gap: 7px; margin-bottom: 7px; }
        .tag-dot { width: 8px; height: 8px; border-radius: 50%; }
        .tag-group-name {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text);
        }
        .tag-row { display: flex; gap: 6px; margin-bottom: 5px; }
        .tag-input {
          flex: 1; background: var(--bg); border: 1px solid var(--border);
          border-radius: 7px; color: var(--text); font-size: 12px;
          padding: 8px 10px; outline: none; font-family: 'Inter', sans-serif;
        }
        .tag-input:focus { border-color: var(--accent); }
        .tag-del {
          width: 32px; background: transparent; border: 1px solid var(--border);
          border-radius: 7px; color: var(--danger); cursor: pointer; font-size: 15px;
        }
        .tag-del:disabled { opacity: 0.3; cursor: not-allowed; }
        .tag-add {
          background: transparent; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: var(--accent); padding: 4px 0;
        }
        .tag-reset {
          display: block; margin: 8px auto 0; background: transparent;
          border: 1px solid var(--border); border-radius: 999px;
          color: var(--muted); cursor: pointer; padding: 5px 12px;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
        }

        /* radar controls + area filter */
        .radar-controls {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; padding: 0 4px 10px;
        }
        .radar-note {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          line-height: 1.5;
          color: var(--muted);
          text-align: center;
          padding: 8px 6px 2px;
        }

        .radar-mode { display: flex; gap: 4px; }
        .radar-mode button, .radar-edit {
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.06em; padding: 5px 11px;
          transition: all 150ms ease;
        }
        .radar-mode button.active {
          border-color: var(--accent); color: var(--accent);
          background: rgba(94,234,212,0.08);
        }
        .radar-edit { color: var(--accent2); }

        .area-filter {
          display: flex; flex-wrap: wrap; gap: 5px;
          padding: 4px 18px 10px;
        }
        .area-filter button {
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          padding: 5px 12px; transition: all 150ms ease;
        }
        .area-filter button.active {
          border-color: var(--ac, var(--accent));
          color: var(--ac, var(--accent));
          background: color-mix(in srgb, var(--ac, var(--accent)) 10%, transparent);
        }

        @media (hover: hover) and (pointer: fine) {
          .link-btn:hover { color: var(--accent); background: var(--track); }
          .link-candidate:hover { border-color: var(--accent); }
          .radar-mode button:hover, .radar-edit:hover { border-color: var(--accent); }
          .area-filter button:hover { border-color: var(--ac, var(--accent)); }
        }

        /* ---- merged companion (v25) ---- */
        .companion-scroll { padding-top: 4px; display: flex; flex-direction: column; }

        .cmp-hero {
          display: flex; align-items: center; gap: 12px;
          padding: 4px 16px 8px; position: relative;
        }
        .cmp-hero .pet-svg { flex-shrink: 0; margin: -14px 0; }
        .cmp-id { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1; }
        .cmp-stats-toggle {
          flex-shrink: 0; align-self: flex-start; margin-top: 6px;
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px;
          transition: border-color 150ms ease, color 150ms ease;
        }

        .cmp-chat {
          flex: 1; min-height: 160px;
          margin: 4px 16px 0; padding: 11px;
          background: var(--bg); border: 1px solid var(--border); border-radius: 11px;
          display: flex; flex-direction: column; gap: 8px;
          overflow-y: auto;
        }
        .cmp-greeting { opacity: 0.9; font-style: italic; }
        .cmp-elapsed {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--muted); margin-left: 6px; font-variant-numeric: tabular-nums;
        }

        /* the diff sits inside the conversation, as if handed over */
        .cmp-diff-wrap {
          align-self: stretch; margin-top: 2px; padding: 11px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--accent); border-radius: 10px;
        }
        .cmp-error { margin: 10px 16px 0; }
        .cmp-chips { padding: 12px 16px 0; }

        .cmp-key-link {
          background: transparent; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.06em; color: var(--muted);
          padding: 0 16px 16px; text-align: center; width: 100%;
        }

        @media (hover: hover) and (pointer: fine) {
          .cmp-stats-toggle:hover { border-color: var(--accent); color: var(--accent); }
          .cmp-key-link:hover { color: var(--accent); }
        }

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
        .tabs button.tab-pet { color: var(--accent2); position: relative; }
        .tabs button.tab-pet::after {
          content: "";
          position: absolute; top: 7px; right: 2px;
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent2);
          box-shadow: 0 0 6px var(--glow);
        }
        .tabs button.tab-pet.active::after { display: none; }

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
          transform: translateZ(0);
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
          filter: blur(18px);
          transform: rotate(8deg) translateZ(0);
          animation: raySweep calc(180s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        @keyframes raySweep {
          0%   { transform: translateX(-12%) rotate(8deg); opacity: 0.55; }
          100% { transform: translateX(115%) rotate(8deg); opacity: 0.95; }
        }

        /* film grain: one tiny repeating SVG, no image request */
        .amb-grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          /* no mix-blend-mode: blending forces the compositor to re-read the
             backdrop every frame, which cost ~6fps on a large panel for an
             effect that is nearly invisible at this opacity anyway */
          opacity: var(--grain-opacity, 0.018);
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
        /* One animation on the container rather than 34 on the children.
           Animating opacity per-span forced ~34 repaints every frame (measured
           at ~24fps on a 1920 panel); the field reads the same when the whole
           layer breathes and the stars differ only in static opacity. */
        .amb-stars {
          animation: twinkle 4.5s ease-in-out infinite alternate;
          will-change: opacity;
        }
        .amb-stars span {
          position: absolute;
          width: 2px; height: 2px;
          border-radius: 50%;
          background: #FFFFFF;
        }
        @keyframes twinkle {
          from { opacity: 0.45; }
          to   { opacity: 1; }
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
        /* ---- notes: a terminal buffer, not a card ---- */
        .note-list { display: flex; flex-direction: column; gap: 10px; padding: 0 18px 8px; }

        .note-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-left: 2px solid var(--accent);
          border-radius: 6px;
          padding: 10px 12px;
          cursor: pointer;
          transition: border-color 140ms ease;
        }
        .note-card:hover { border-color: var(--accent); }
        .note-card:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
        .note-card.editing { cursor: default; border-left-color: var(--accent2); }

        .note-head {
          display: flex; align-items: baseline; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          margin-bottom: 6px;
        }
        .note-prompt { color: var(--accent); opacity: 0.75; }
        .note-title { color: var(--text); font-weight: 600; }
        .note-when { margin-left: auto; color: var(--muted); font-size: 9px; }

        /* pre, not div: a note is text the user typed, and their line breaks
           and indentation are part of what they meant */
        .note-body {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; line-height: 1.65; color: var(--muted);
          white-space: pre-wrap; word-break: break-word;
          margin: 0; max-height: 220px; overflow: hidden;
        }
        .note-body.empty { opacity: 0.5; }

        .note-caret {
          display: inline-block; width: 6px; height: 11px;
          background: var(--accent); margin-left: 3px;
          vertical-align: text-bottom; animation: noteBlink 1.1s steps(1) infinite;
        }
        @keyframes noteBlink { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .note-caret { animation: none; }
        }

        .note-title-input, .note-body-input {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 4px; color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          outline: none; width: 100%;
        }
        .note-title-input { font-size: 10px; padding: 3px 6px; font-weight: 600; }
        .note-body-input {
          font-size: 11px; line-height: 1.65; padding: 8px;
          resize: none; overflow: hidden; min-height: 60px;
        }
        .note-title-input:focus, .note-body-input:focus { border-color: var(--accent); }

        .note-actions { display: flex; gap: 6px; margin-top: 8px; }
        .note-btn {
          background: transparent; border: 1px solid var(--border);
          border-radius: 4px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.06em; padding: 4px 10px;
          transition: all 140ms ease;
        }
        .note-btn:hover { border-color: var(--accent); color: var(--accent); }
        .note-btn.save { border-color: var(--accent); color: var(--accent); }
        .note-btn.danger:hover { border-color: var(--danger); color: var(--danger); }

        .widget-feed { border-left-color: var(--accent2); }
        .widget-url { word-break: break-all; white-space: pre-wrap; color: var(--accent); font-size: 10px; }

        .note-empty {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: var(--muted); padding: 10px 18px 14px;
        }

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
      `),o.default.createElement("div",{className:"panel"},o.default.createElement(eh,{theme:M.theme,phase:M.phase,calm:M.calm,scoped:!0}),Ot&&o.default.createElement("div",{className:"quest-banner",onClick:()=>yo(null)},o.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),o.default.createElement("span",{className:"quest-banner-text"},o.default.createElement("b",null,"Now:")," ",Ot.label),o.default.createElement("button",{className:"quest-banner-close",onClick:E=>{E.stopPropagation(),yo(null)},"aria-label":"Dismiss"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),o.default.createElement("div",{className:"titlebar"},o.default.createElement("div",{className:"titlebar-left"},o.default.createElement("div",{className:"dots"},o.default.createElement("span",{className:"dot red"}),o.default.createElement("span",{className:"dot amber"}),o.default.createElement("span",{className:"dot green"})),o.default.createElement("span",{className:"titlebar-name"},"tasks.sh"),o.default.createElement(mh,null)),o.default.createElement("div",{className:"titlebar-right"},o.default.createElement("input",{type:"file",accept:"application/json",ref:se,onChange:R,style:{display:"none"}}),o.default.createElement("button",{className:`titlebar-icon-btn ${X?"notify-on":""}`,onClick:Ft,disabled:Et,"aria-label":X?"Turn off notifications":"Turn on notifications",title:X?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},X?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{$t(!0),P.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:B,"aria-label":"Import backup",title:"Import backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:S,"aria-label":"Export backup",title:"Export backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("span",{className:"clock"},new Date(Z).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),fe&&o.default.createElement("div",{className:`data-toast ${fe.type}`},fe.text),o.default.createElement("div",{className:"tabs",role:"tablist","aria-label":"Sections"},[["today","today"],["tasks","tasks"],["routines","routines"],["vault","vault"],["quest","quest"],["pet",w.pet.name.toLowerCase()]].map(([E,A])=>o.default.createElement("button",{key:E,role:"tab",id:`tab-${E}`,"aria-selected":e===E,"aria-controls":"tab-panel",className:`${E==="pet"?"tab-pet ":""}${e===E?"active":""}`.trim(),onClick:()=>a(E)},A))),o.default.createElement("div",{key:e,className:"tab-content",id:"tab-panel",role:"tabpanel","aria-labelledby":`tab-${e}`},e==="today"?o.default.createElement(vg,{routines:s,setRoutines:u,tasks:i,setTasks:l,vaultHabits:c,goodHabits:y,badHabits:g,rewards:f,setRewards:x,totalXP:N,setTab:a}):e==="tasks"?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"stats-bar stats-bar-viz"},o.default.createElement(Ps,{pct:jt.pct,size:64,stroke:5.5,label:`${jt.pct}%`}),o.default.createElement("div",{className:"stats-row-viz"},o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(vt,{value:jt.total}))," total"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(vt,{value:jt.pending}))," pending"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(vt,{value:jt.done}))," done"))),jt.pending>0&&o.default.createElement("div",{className:"donut-card"},o.default.createElement(rf,{size:96,stroke:14,centerLabel:jt.pending,centerSublabel:"open",segments:$s.map(E=>({key:E.key,value:E.value,color:E.color}))}),o.default.createElement("div",{className:"donut-legend"},$s.map(E=>o.default.createElement("div",{className:"donut-legend-row",key:E.key},o.default.createElement("span",{className:"donut-legend-dot",style:{background:E.color}}),o.default.createElement("span",null,E.label," priority"),o.default.createElement("span",{className:"donut-legend-val"},E.value))))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{ref:J,type:"text",placeholder:"add a task, press enter...",value:ye,onChange:E=>H(E.target.value),onKeyDown:E=>E.key==="Enter"&&Os()}),o.default.createElement("div",{className:"prio-select"},Ga.map(E=>o.default.createElement("button",{key:E.key,className:he===E.key?"active":"",style:{"--pc":E.color},onClick:()=>ge(E.key)},E.label))),o.default.createElement("button",{className:"add-btn",onClick:Os,"aria-label":"Add task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"filters"},["all","active","done"].map(E=>o.default.createElement("button",{key:E,className:Ce===E?"active":"",onClick:()=>L(E)},E)),o.default.createElement("span",{className:"spacer"}),jt.done>0&&o.default.createElement("button",{className:"clear-btn",onClick:hf},"clear done")),o.default.createElement("div",{className:"task-list"},Fs.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},Ce==="done"?"nothing completed yet":"queue's empty \u2014 add something")):Fs.map((E,A)=>o.default.createElement(Gh,{key:E.id,task:E,now:Z,index:A,onToggle:ff,onDelete:mf})))):e==="routines"?o.default.createElement(gh,{routines:s,setRoutines:u}):e==="vault"?o.default.createElement(Dh,{vaultHabits:c,setVaultHabits:d,projects:p,setProjects:h,notes:v,setNotes:k}):e==="quest"?o.default.createElement(Jh,{tagCtl:W,goodHabits:y,setGoodHabits:_,badHabits:g,setBadHabits:m,rewards:f,setRewards:x}):o.default.createElement(fg,{petCtl:w,state:{routines:s,vaultHabits:c,goodHabits:y,badHabits:g,rewards:f,totalXP:N},setters:{setRoutines:u,setVaultHabits:d,setGoodHabits:_,setBadHabits:m,setRewards:x},showDataMsg:Ne,ctx:{pet:w.pet,level:b,hour:pr().hour,phase:M.phase.id,doneToday:y.filter(E=>(E.history||[]).includes(U(0))).length,totalToday:y.length,streak:y.reduce((E,A)=>Math.max(E,Ns(A.history)),0),routineNow:null,nextRoutine:null}}))))}var xg=qp.default.createRoot(document.getElementById("root"));xg.render(o.default.createElement(yg));})();
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
