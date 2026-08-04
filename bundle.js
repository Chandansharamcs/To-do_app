(()=>{var ff=Object.create;var Os=Object.defineProperty;var mf=Object.getOwnPropertyDescriptor;var hf=Object.getOwnPropertyNames;var gf=Object.getPrototypeOf,vf=Object.prototype.hasOwnProperty;var un=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var yf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of hf(t))!vf.call(e,a)&&a!==n&&Os(e,a,{get:()=>t[a],enumerable:!(r=mf(t,a))||r.enumerable});return e};var js=(e,t,n)=>(n=e!=null?ff(gf(e)):{},yf(t||!e||!e.__esModule?Os(n,"default",{value:e,enumerable:!0}):n,e));var Zs=un(J=>{"use strict";var mr=Symbol.for("react.element"),xf=Symbol.for("react.portal"),kf=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Mf=Symbol.for("react.memo"),zf=Symbol.for("react.lazy"),Us=Symbol.iterator;function _f(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var Vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hs=Object.assign,Ks={};function An(e,t,n){this.props=e,this.context=t,this.refs=Ks,this.updater=n||Vs}An.prototype.isReactComponent={};An.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};An.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gs(){}Gs.prototype=An.prototype;function Ra(e,t,n){this.props=e,this.context=t,this.refs=Ks,this.updater=n||Vs}var ei=Ra.prototype=new Gs;ei.constructor=Ra;Hs(ei,An.prototype);ei.isPureReactComponent=!0;var Ws=Array.isArray,qs=Object.prototype.hasOwnProperty,ti={current:null},Xs={key:!0,ref:!0,__self:!0,__source:!0};function Ys(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)qs.call(t,r)&&!Xs.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:mr,type:e,key:i,ref:l,props:a,_owner:ti.current}}function Tf(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function Lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Js=/\/+/g;function Za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lf(""+e.key):t.toString(36)}function xo(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case mr:case xf:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Za(l,0):r,Ws(a)?(n="",e!=null&&(n=e.replace(Js,"$&/")+"/"),xo(a,t,n,"",function(c){return c})):a!=null&&(ni(a)&&(a=Tf(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Js,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Ws(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Za(i,s);l+=xo(i,t,n,u,a)}else if(u=_f(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Za(i,s++),l+=xo(i,t,n,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function yo(e,t,n){if(e==null)return e;var r=[],a=0;return xo(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Pf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},ko={transition:null},Af={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ko,ReactCurrentOwner:ti};function Qs(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=An;J.Fragment=kf;J.Profiler=wf;J.PureComponent=Ra;J.StrictMode=bf;J.Suspense=Cf;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;J.act=Qs;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hs({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ti.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)qs.call(t,u)&&!Xs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:mr,type:e.type,key:a,ref:i,props:r,_owner:l}};J.createContext=function(e){return e={$$typeof:Sf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nf,_context:e},e.Consumer=e};J.createElement=Ys;J.createFactory=function(e){var t=Ys.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Ef,render:e}};J.isValidElement=ni;J.lazy=function(e){return{$$typeof:zf,_payload:{_status:-1,_result:e},_init:Pf}};J.memo=function(e,t){return{$$typeof:Mf,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};J.unstable_act=Qs;J.useCallback=function(e,t){return Be.current.useCallback(e,t)};J.useContext=function(e){return Be.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};J.useEffect=function(e,t){return Be.current.useEffect(e,t)};J.useId=function(){return Be.current.useId()};J.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Be.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};J.useRef=function(e){return Be.current.useRef(e)};J.useState=function(e){return Be.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Be.current.useTransition()};J.version="18.3.1"});var ri=un((mg,Rs)=>{"use strict";Rs.exports=Zs()});var uu=un(Z=>{"use strict";function li(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<bo(a,t))e[r]=t,e[n]=a,n=r;else break e}}function st(e){return e.length===0?null:e[0]}function No(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>bo(s,n))u<a&&0>bo(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<a&&0>bo(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function bo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(eu=performance,Z.unstable_now=function(){return eu.now()}):(oi=Date,tu=oi.now(),Z.unstable_now=function(){return oi.now()-tu});var eu,oi,tu,vt=[],$t=[],Df=1,et=null,ze=3,So=!1,cn=!1,gr=!1,ou=typeof setTimeout=="function"?setTimeout:null,au=typeof clearTimeout=="function"?clearTimeout:null,nu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function si(e){for(var t=st($t);t!==null;){if(t.callback===null)No($t);else if(t.startTime<=e)No($t),t.sortIndex=t.expirationTime,li(vt,t);else break;t=st($t)}}function ui(e){if(gr=!1,si(e),!cn)if(st(vt)!==null)cn=!0,di(ci);else{var t=st($t);t!==null&&pi(ui,t.startTime-e)}}function ci(e,t){cn=!1,gr&&(gr=!1,au(vr),vr=-1),So=!0;var n=ze;try{for(si(t),et=st(vt);et!==null&&(!(et.expirationTime>t)||e&&!su());){var r=et.callback;if(typeof r=="function"){et.callback=null,ze=et.priorityLevel;var a=r(et.expirationTime<=t);t=Z.unstable_now(),typeof a=="function"?et.callback=a:et===st(vt)&&No(vt),si(t)}else No(vt);et=st(vt)}if(et!==null)var i=!0;else{var l=st($t);l!==null&&pi(ui,l.startTime-t),i=!1}return i}finally{et=null,ze=n,So=!1}}var Eo=!1,wo=null,vr=-1,iu=5,lu=-1;function su(){return!(Z.unstable_now()-lu<iu)}function ai(){if(wo!==null){var e=Z.unstable_now();lu=e;var t=!0;try{t=wo(!0,e)}finally{t?hr():(Eo=!1,wo=null)}}else Eo=!1}var hr;typeof nu=="function"?hr=function(){nu(ai)}:typeof MessageChannel<"u"?(ii=new MessageChannel,ru=ii.port2,ii.port1.onmessage=ai,hr=function(){ru.postMessage(null)}):hr=function(){ou(ai,0)};var ii,ru;function di(e){wo=e,Eo||(Eo=!0,hr())}function pi(e,t){vr=ou(function(){e(Z.unstable_now())},t)}Z.unstable_IdlePriority=5;Z.unstable_ImmediatePriority=1;Z.unstable_LowPriority=4;Z.unstable_NormalPriority=3;Z.unstable_Profiling=null;Z.unstable_UserBlockingPriority=2;Z.unstable_cancelCallback=function(e){e.callback=null};Z.unstable_continueExecution=function(){cn||So||(cn=!0,di(ci))};Z.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):iu=0<e?Math.floor(1e3/e):5};Z.unstable_getCurrentPriorityLevel=function(){return ze};Z.unstable_getFirstCallbackNode=function(){return st(vt)};Z.unstable_next=function(e){switch(ze){case 1:case 2:case 3:var t=3;break;default:t=ze}var n=ze;ze=t;try{return e()}finally{ze=n}};Z.unstable_pauseExecution=function(){};Z.unstable_requestPaint=function(){};Z.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ze;ze=e;try{return t()}finally{ze=n}};Z.unstable_scheduleCallback=function(e,t,n){var r=Z.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:Df++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>r?(e.sortIndex=n,li($t,e),st(vt)===null&&e===st($t)&&(gr?(au(vr),vr=-1):gr=!0,pi(ui,n-r))):(e.sortIndex=a,li(vt,e),cn||So||(cn=!0,di(ci))),e};Z.unstable_shouldYield=su;Z.unstable_wrapCallback=function(e){var t=ze;return function(){var n=ze;ze=t;try{return e.apply(this,arguments)}finally{ze=n}}}});var du=un((gg,cu)=>{"use strict";cu.exports=uu()});var hp=un(Qe=>{"use strict";var Bf=ri(),Xe=du();function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yc=new Set,Or={};function Nn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Or[e]=t,e=0;e<t.length;e++)yc.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=Object.prototype.hasOwnProperty,If=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},fu={};function Ff(e){return Bi.call(fu,e)?!0:Bi.call(pu,e)?!1:If.test(e)?fu[e]=!0:(pu[e]=!0,!1)}function $f(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,t,n,r){if(t===null||typeof t>"u"||$f(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function zl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ml,zl);Ne[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ml,zl);Ne[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ml,zl);Ne[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function _l(e,t,n,r){var a=Ne.hasOwnProperty(t)?Ne[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Of(t,n,a,r)&&(n=null),r||a===null?Ff(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),In=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),Ii=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Ll=Symbol.for("react.forward_ref"),Fi=Symbol.for("react.suspense"),$i=Symbol.for("react.suspense_list"),Pl=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),bc=Symbol.for("react.offscreen"),mu=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,fi;function Cr(e){if(fi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fi=t&&t[1]||""}return`
`+fi+e}var mi=!1;function hi(e,t){if(!e||mi)return"";mi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{mi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function jf(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=hi(e.type,!1),e;case 11:return e=hi(e.type.render,!1),e;case 1:return e=hi(e.type,!0),e;default:return""}}function Oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case In:return"Portal";case Ii:return"Profiler";case Tl:return"StrictMode";case Fi:return"Suspense";case $i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kc:return(e.displayName||"Context")+".Consumer";case xc:return(e._context.displayName||"Context")+".Provider";case Ll:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pl:return t=e.displayName||null,t!==null?t:Oi(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Oi(e(t))}catch{}}return null}function Uf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oi(t);case 8:return t===Tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wf(e){var t=wc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mo(e){e._valueTracker||(e._valueTracker=Wf(e))}function Nc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ji(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sc(e,t){t=t.checked,t!=null&&_l(e,"checked",t,!1)}function Ui(e,t){Sc(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wi(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wi(e,t,n){(t!=="number"||ta(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Mr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Ec(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zo,Mc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jf=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){Jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function _c(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Vf=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hi(e,t){if(t){if(Vf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,Xn=null,Yn=null;function xu(e){if(e=oo(e)){if(typeof qi!="function")throw Error(M(280));var t=e.stateNode;t&&(t=_a(t),qi(e.stateNode,e.type,t))}}function Tc(e){Xn?Yn?Yn.push(e):Yn=[e]:Xn=e}function Lc(){if(Xn){var e=Xn,t=Yn;if(Yn=Xn=null,xu(e),t)for(e=0;e<t.length;e++)xu(t[e])}}function Pc(e,t){return e(t)}function Ac(){}var gi=!1;function Dc(e,t,n){if(gi)return e(t,n);gi=!0;try{return Pc(e,t,n)}finally{gi=!1,(Xn!==null||Yn!==null)&&(Ac(),Lc())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=_a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Xi=!1;if(zt)try{Dn={},Object.defineProperty(Dn,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Xi=!1}var Dn;function Hf(e,t,n,r,a,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Lr=!1,na=null,ra=!1,Yi=null,Kf={onError:function(e){Lr=!0,na=e}};function Gf(e,t,n,r,a,i,l,s,u){Lr=!1,na=null,Hf.apply(Kf,arguments)}function qf(e,t,n,r,a,i,l,s,u){if(Gf.apply(this,arguments),Lr){if(Lr){var c=na;Lr=!1,na=null}else throw Error(M(198));ra||(ra=!0,Yi=c)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ku(e){if(Sn(e)!==e)throw Error(M(188))}function Xf(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return ku(a),e;if(i===r)return ku(a),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Ic(e){return e=Xf(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var $c=Xe.unstable_scheduleCallback,bu=Xe.unstable_cancelCallback,Yf=Xe.unstable_shouldYield,Qf=Xe.unstable_requestPaint,fe=Xe.unstable_now,Zf=Xe.unstable_getCurrentPriorityLevel,Dl=Xe.unstable_ImmediatePriority,Oc=Xe.unstable_UserBlockingPriority,oa=Xe.unstable_NormalPriority,Rf=Xe.unstable_LowPriority,jc=Xe.unstable_IdlePriority,Ea=null,bt=null;function em(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:rm,tm=Math.log,nm=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(tm(e)/nm|0)|0}var _o=64,To=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~a;s!==0?r=zr(s):(i&=l,i!==0&&(r=zr(i)))}else l=n&~a,l!==0?r=zr(l):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),a=1<<n,r|=e[n],t&=~a;return r}function om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ft(i),s=1<<l,u=a[l];u===-1?((s&n)===0||(s&r)!==0)&&(a[l]=om(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=_o;return _o<<=1,(_o&4194240)===0&&(_o=64),e}function vi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function im(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ft(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var q=0;function Wc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Jc,Il,Vc,Hc,Kc,Zi=!1,Lo=[],Kt=null,Gt=null,qt=null,Wr=new Map,Jr=new Map,Wt=[],lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function xr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=oo(t),t!==null&&Il(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function sm(e,t,n,r,a){switch(t){case"focusin":return Kt=xr(Kt,e,t,n,r,a),!0;case"dragenter":return Gt=xr(Gt,e,t,n,r,a),!0;case"mouseover":return qt=xr(qt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Wr.set(i,xr(Wr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Jr.set(i,xr(Jr.get(i)||null,e,t,n,r,a)),!0}return!1}function Gc(e){var t=fn(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Bc(n),t!==null){e.blockedOn=t,Kc(e.priority,function(){Vc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ri(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gi=r,n.target.dispatchEvent(r),Gi=null}else return t=oo(n),t!==null&&Il(t),e.blockedOn=n,!1;t.shift()}return!0}function Nu(e,t,n){Ho(e)&&n.delete(t)}function um(){Zi=!1,Kt!==null&&Ho(Kt)&&(Kt=null),Gt!==null&&Ho(Gt)&&(Gt=null),qt!==null&&Ho(qt)&&(qt=null),Wr.forEach(Nu),Jr.forEach(Nu)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zi||(Zi=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,um)))}function Vr(e){function t(a){return kr(a,e)}if(0<Lo.length){kr(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&kr(Kt,e),Gt!==null&&kr(Gt,e),qt!==null&&kr(qt,e),Wr.forEach(t),Jr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)Gc(n),n.blockedOn===null&&Wt.shift()}var Qn=Pt.ReactCurrentBatchConfig,ia=!0;function cm(e,t,n,r){var a=q,i=Qn.transition;Qn.transition=null;try{q=1,Fl(e,t,n,r)}finally{q=a,Qn.transition=i}}function dm(e,t,n,r){var a=q,i=Qn.transition;Qn.transition=null;try{q=4,Fl(e,t,n,r)}finally{q=a,Qn.transition=i}}function Fl(e,t,n,r){if(ia){var a=Ri(e,t,n,r);if(a===null)Si(e,t,r,la,n),wu(e,r);else if(sm(a,e,t,n,r))r.stopPropagation();else if(wu(e,r),t&4&&-1<lm.indexOf(e)){for(;a!==null;){var i=oo(a);if(i!==null&&Jc(i),i=Ri(e,t,n,r),i===null&&Si(e,t,r,la,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Si(e,t,r,null,n)}}var la=null;function Ri(e,t,n,r){if(la=null,e=Al(r),e=fn(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return la=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zf()){case Dl:return 1;case Oc:return 4;case oa:case Rf:return 16;case jc:return 536870912;default:return 16}default:return 16}}var Vt=null,$l=null,Ko=null;function Xc(){if(Ko)return Ko;var e,t=$l,n=t.length,r,a="value"in Vt?Vt.value:Vt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Ko=a.slice(e,1<r?1-r:void 0)}function Go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function Su(){return!1}function Ye(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:Su,this.isPropagationStopped=Su,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Ye(lr),ro=ce({},lr,{view:0,detail:0}),pm=Ye(ro),yi,xi,br,Ca=ce({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(yi=e.screenX-br.screenX,xi=e.screenY-br.screenY):xi=yi=0,br=e),yi)},movementY:function(e){return"movementY"in e?e.movementY:xi}}),Eu=Ye(Ca),fm=ce({},Ca,{dataTransfer:0}),mm=Ye(fm),hm=ce({},ro,{relatedTarget:0}),ki=Ye(hm),gm=ce({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=Ye(gm),ym=ce({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xm=Ye(ym),km=ce({},lr,{data:0}),Cu=Ye(km),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nm[e])?!!t[e]:!1}function jl(){return Sm}var Em=ce({},ro,{key:function(e){if(e.key){var t=bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cm=Ye(Em),Mm=ce({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Ye(Mm),zm=ce({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),_m=Ye(zm),Tm=ce({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lm=Ye(Tm),Pm=ce({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Am=Ye(Pm),Dm=[9,13,27,32],Ul=zt&&"CompositionEvent"in window,Pr=null;zt&&"documentMode"in document&&(Pr=document.documentMode);var Bm=zt&&"TextEvent"in window&&!Pr,Yc=zt&&(!Ul||Pr&&8<Pr&&11>=Pr),zu=" ",_u=!1;function Qc(e,t){switch(e){case"keyup":return Dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Im(e,t){switch(e){case"compositionend":return Zc(t);case"keypress":return t.which!==32?null:(_u=!0,zu);case"textInput":return e=t.data,e===zu&&_u?null:e;default:return null}}function Fm(e,t){if($n)return e==="compositionend"||!Ul&&Qc(e,t)?(e=Xc(),Ko=$l=Vt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yc&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function Rc(e,t,n,r){Tc(r),t=sa(t,"onChange"),0<t.length&&(n=new Ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Hr=null;function Om(e){cd(e,0)}function Ma(e){var t=Un(e);if(Nc(t))return e}function jm(e,t){if(e==="change")return t}var ed=!1;zt&&(zt?(Do="oninput"in document,Do||(bi=document.createElement("div"),bi.setAttribute("oninput","return;"),Do=typeof bi.oninput=="function"),Ao=Do):Ao=!1,ed=Ao&&(!document.documentMode||9<document.documentMode));var Ao,Do,bi;function Lu(){Ar&&(Ar.detachEvent("onpropertychange",td),Hr=Ar=null)}function td(e){if(e.propertyName==="value"&&Ma(Hr)){var t=[];Rc(t,Hr,e,Al(e)),Dc(Om,t)}}function Um(e,t,n){e==="focusin"?(Lu(),Ar=t,Hr=n,Ar.attachEvent("onpropertychange",td)):e==="focusout"&&Lu()}function Wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Hr)}function Jm(e,t){if(e==="click")return Ma(t)}function Vm(e,t){if(e==="input"||e==="change")return Ma(t)}function Hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Hm;function Kr(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Bi.call(t,a)||!ht(e[a],t[a]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var n=Pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rd(){for(var e=window,t=ta();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ta(e.document)}return t}function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Km(e){var t=rd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nd(n.ownerDocument.documentElement,n)){if(r!==null&&Wl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Au(n,i);var l=Au(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gm=zt&&"documentMode"in document&&11>=document.documentMode,On=null,el=null,Dr=null,tl=!1;function Du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||On==null||On!==ta(r)||(r=On,"selectionStart"in r&&Wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Kr(Dr,r)||(Dr=r,r=sa(el,"onSelect"),0<r.length&&(t=new Ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function Bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},wi={},od={};zt&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function za(e){if(wi[e])return wi[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in od)return wi[e]=t[n];return e}var ad=za("animationend"),id=za("animationiteration"),ld=za("animationstart"),sd=za("transitionend"),ud=new Map,Bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){ud.set(e,t),Nn(t,[e])}for(Io=0;Io<Bu.length;Io++)Fo=Bu[Io],Iu=Fo.toLowerCase(),Fu=Fo[0].toUpperCase()+Fo.slice(1),nn(Iu,"on"+Fu);var Fo,Iu,Fu,Io;nn(ad,"onAnimationEnd");nn(id,"onAnimationIteration");nn(ld,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(sd,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function $u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qf(r,t,void 0,e),e.currentTarget=null}function cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&a.isPropagationStopped())break e;$u(a,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&a.isPropagationStopped())break e;$u(a,s,c),i=u}}}if(ra)throw e=Yi,ra=!1,Yi=null,e}function te(e,t){var n=t[il];n===void 0&&(n=t[il]=new Set);var r=e+"__bubble";n.has(r)||(dd(t,e,2,!1),n.add(r))}function Ni(e,t,n){var r=0;t&&(r|=4),dd(n,e,r,t)}var $o="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[$o]){e[$o]=!0,yc.forEach(function(n){n!=="selectionchange"&&(qm.has(n)||Ni(n,!1,e),Ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$o]||(t[$o]=!0,Ni("selectionchange",!1,t))}}function dd(e,t,n,r){switch(qc(t)){case 1:var a=cm;break;case 4:a=dm;break;default:a=Fl}n=a.bind(null,t,n,e),a=void 0,!Xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Si(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;s!==null;){if(l=fn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Dc(function(){var c=i,d=Al(n),p=[];e:{var h=ud.get(e);if(h!==void 0){var v=Ol,k=e;switch(e){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":v=Cm;break;case"focusin":k="focus",v=ki;break;case"focusout":k="blur",v=ki;break;case"beforeblur":case"afterblur":v=ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_m;break;case ad:case id:case ld:v=vm;break;case sd:v=Lm;break;case"scroll":v=pm;break;case"wheel":v=Am;break;case"copy":case"cut":case"paste":v=xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Mu}var x=(t&4)!==0,T=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var f=c,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,g!==null&&(y=Ur(f,g),y!=null&&x.push(qr(f,y,m)))),T)break;f=f.return}0<x.length&&(h=new v(h,k,null,n,d),p.push({event:h,listeners:x}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Gi&&(k=n.relatedTarget||n.fromElement)&&(fn(k)||k[_t]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=c,k=k?fn(k):null,k!==null&&(T=Sn(k),k!==T||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(x=Eu,y="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Mu,y="onPointerLeave",g="onPointerEnter",f="pointer"),T=v==null?h:Un(v),m=k==null?h:Un(k),h=new x(y,f+"leave",v,n,d),h.target=T,h.relatedTarget=m,y=null,fn(d)===c&&(x=new x(g,f+"enter",k,n,d),x.target=m,x.relatedTarget=T,y=x),T=y,v&&k)t:{for(x=v,g=k,f=0,m=x;m;m=Bn(m))f++;for(m=0,y=g;y;y=Bn(y))m++;for(;0<f-m;)x=Bn(x),f--;for(;0<m-f;)g=Bn(g),m--;for(;f--;){if(x===g||g!==null&&x===g.alternate)break t;x=Bn(x),g=Bn(g)}x=null}else x=null;v!==null&&Ou(p,h,v,x,!1),k!==null&&T!==null&&Ou(p,T,k,x,!0)}}e:{if(h=c?Un(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var w=jm;else if(Tu(h))if(ed)w=Vm;else{w=Wm;var b=Um}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=Jm);if(w&&(w=w(e,c))){Rc(p,w,n,d);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Wi(h,"number",h.value)}switch(b=c?Un(c):window,e){case"focusin":(Tu(b)||b.contentEditable==="true")&&(On=b,el=c,Dr=null);break;case"focusout":Dr=el=On=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,Du(p,n,d);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":Du(p,n,d)}var _;if(Ul)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $n?Qc(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Yc&&n.locale!=="ko"&&($n||N!=="onCompositionStart"?N==="onCompositionEnd"&&$n&&(_=Xc()):(Vt=d,$l="value"in Vt?Vt.value:Vt.textContent,$n=!0)),b=sa(c,N),0<b.length&&(N=new Cu(N,e,null,n,d),p.push({event:N,listeners:b}),_?N.data=_:(_=Zc(n),_!==null&&(N.data=_)))),(_=Bm?Im(e,n):Fm(e,n))&&(c=sa(c,"onBeforeInput"),0<c.length&&(d=new Cu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=_))}cd(p,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sa(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ur(e,n),i!=null&&r.unshift(qr(e,i,a)),i=Ur(e,t),i!=null&&r.push(qr(e,i,a))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,a?(u=Ur(n,i),u!=null&&l.unshift(qr(n,u,s))):a||(u=Ur(n,i),u!=null&&l.push(qr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Xm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(Xm,`
`).replace(Ym,"")}function Oo(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(M(425))}function ua(){}var nl=null,rl=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,Qm=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,Zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu<"u"?function(e){return Uu.resolve(null).then(e).catch(Rm)}:al;function Rm(e){setTimeout(function(){throw e})}function Ei(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Vr(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),kt="__reactFiber$"+sr,Xr="__reactProps$"+sr,_t="__reactContainer$"+sr,il="__reactEvents$"+sr,e0="__reactListeners$"+sr,t0="__reactHandles$"+sr;function fn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wu(e);e!==null;){if(n=e[kt])return n;e=Wu(e)}return t}e=n,n=e.parentNode}return null}function oo(e){return e=e[kt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function _a(e){return e[Xr]||null}var ll=[],Wn=-1;function rn(e){return{current:e}}function ne(e){0>Wn||(e.current=ll[Wn],ll[Wn]=null,Wn--)}function R(e,t){Wn++,ll[Wn]=e.current,e.current=t}var tn={},Pe=rn(tn),Je=rn(!1),yn=tn;function tr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ve(e){return e=e.childContextTypes,e!=null}function ca(){ne(Je),ne(Pe)}function Ju(e,t,n){if(Pe.current!==tn)throw Error(M(168));R(Pe,t),R(Je,n)}function pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(M(108,Uf(e)||"Unknown",a));return ce({},n,r)}function da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,yn=Pe.current,R(Pe,e),R(Je,Je.current),!0}function Vu(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=pd(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,ne(Je),ne(Pe),R(Pe,e)):ne(Je),R(Je,n)}var St=null,Ta=!1,Ci=!1;function fd(e){St===null?St=[e]:St.push(e)}function n0(e){Ta=!0,fd(e)}function on(){if(!Ci&&St!==null){Ci=!0;var e=0,t=q;try{var n=St;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Ta=!1}catch(a){throw St!==null&&(St=St.slice(e+1)),$c(Dl,on),a}finally{q=t,Ci=!1}}return null}var Jn=[],Vn=0,pa=null,fa=0,tt=[],nt=0,xn=null,Et=1,Ct="";function dn(e,t){Jn[Vn++]=fa,Jn[Vn++]=pa,pa=e,fa=t}function md(e,t,n){tt[nt++]=Et,tt[nt++]=Ct,tt[nt++]=xn,xn=e;var r=Et;e=Ct;var a=32-ft(r)-1;r&=~(1<<a),n+=1;var i=32-ft(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Et=1<<32-ft(t)+a|n<<a|r,Ct=i+e}else Et=1<<i|n<<a|r,Ct=e}function Jl(e){e.return!==null&&(dn(e,1),md(e,1,0))}function Vl(e){for(;e===pa;)pa=Jn[--Vn],Jn[Vn]=null,fa=Jn[--Vn],Jn[Vn]=null;for(;e===xn;)xn=tt[--nt],tt[nt]=null,Ct=tt[--nt],tt[nt]=null,Et=tt[--nt],tt[nt]=null}var qe=null,Ge=null,oe=!1,pt=null;function hd(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ge=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ge=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(oe){var t=Ge;if(t){var n=t;if(!Hu(e,t)){if(sl(e))throw Error(M(418));t=Xt(n.nextSibling);var r=qe;t&&Hu(e,t)?hd(r,n):(e.flags=e.flags&-4097|2,oe=!1,qe=e)}}else{if(sl(e))throw Error(M(418));e.flags=e.flags&-4097|2,oe=!1,qe=e}}}function Ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function jo(e){if(e!==qe)return!1;if(!oe)return Ku(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=Ge)){if(sl(e))throw gd(),Error(M(418));for(;t;)hd(e,t),t=Xt(t.nextSibling)}if(Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=qe?Xt(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=Ge;e;)e=Xt(e.nextSibling)}function nr(){Ge=qe=null,oe=!1}function Hl(e){pt===null?pt=[e]:pt.push(e)}var r0=Pt.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=a.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gu(e){var t=e._init;return t(e._payload)}function vd(e){function t(g,f){if(e){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(g,f){return g=Rt(g,f),g.index=0,g.sibling=null,g}function i(g,f,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=2,f):m):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,m,y){return f===null||f.tag!==6?(f=Ai(m,g.mode,y),f.return=g,f):(f=a(f,m),f.return=g,f)}function u(g,f,m,y){var w=m.type;return w===Fn?d(g,f,m.props.children,y,m.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===jt&&Gu(w)===f.type)?(y=a(f,m.props),y.ref=wr(g,f,m),y.return=g,y):(y=ea(m.type,m.key,m.props,null,g.mode,y),y.ref=wr(g,f,m),y.return=g,y)}function c(g,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Di(m,g.mode,y),f.return=g,f):(f=a(f,m.children||[]),f.return=g,f)}function d(g,f,m,y,w){return f===null||f.tag!==7?(f=vn(m,g.mode,y,w),f.return=g,f):(f=a(f,m),f.return=g,f)}function p(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ai(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Co:return m=ea(f.type,f.key,f.props,null,g.mode,m),m.ref=wr(g,null,f),m.return=g,m;case In:return f=Di(f,g.mode,m),f.return=g,f;case jt:var y=f._init;return p(g,y(f._payload),m)}if(Mr(f)||yr(f))return f=vn(f,g.mode,m,null),f.return=g,f;Uo(g,f)}return null}function h(g,f,m,y){var w=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(g,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Co:return m.key===w?u(g,f,m,y):null;case In:return m.key===w?c(g,f,m,y):null;case jt:return w=m._init,h(g,f,w(m._payload),y)}if(Mr(m)||yr(m))return w!==null?null:d(g,f,m,y,null);Uo(g,m)}return null}function v(g,f,m,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(m)||null,s(f,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Co:return g=g.get(y.key===null?m:y.key)||null,u(f,g,y,w);case In:return g=g.get(y.key===null?m:y.key)||null,c(f,g,y,w);case jt:var b=y._init;return v(g,f,m,b(y._payload),w)}if(Mr(y)||yr(y))return g=g.get(m)||null,d(f,g,y,w,null);Uo(f,y)}return null}function k(g,f,m,y){for(var w=null,b=null,_=f,N=f=0,O=null;_!==null&&N<m.length;N++){_.index>N?(O=_,_=null):O=_.sibling;var L=h(g,_,m[N],y);if(L===null){_===null&&(_=O);break}e&&_&&L.alternate===null&&t(g,_),f=i(L,f,N),b===null?w=L:b.sibling=L,b=L,_=O}if(N===m.length)return n(g,_),oe&&dn(g,N),w;if(_===null){for(;N<m.length;N++)_=p(g,m[N],y),_!==null&&(f=i(_,f,N),b===null?w=_:b.sibling=_,b=_);return oe&&dn(g,N),w}for(_=r(g,_);N<m.length;N++)O=v(_,g,N,m[N],y),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?N:O.key),f=i(O,f,N),b===null?w=O:b.sibling=O,b=O);return e&&_.forEach(function(W){return t(g,W)}),oe&&dn(g,N),w}function x(g,f,m,y){var w=yr(m);if(typeof w!="function")throw Error(M(150));if(m=w.call(m),m==null)throw Error(M(151));for(var b=w=null,_=f,N=f=0,O=null,L=m.next();_!==null&&!L.done;N++,L=m.next()){_.index>N?(O=_,_=null):O=_.sibling;var W=h(g,_,L.value,y);if(W===null){_===null&&(_=O);break}e&&_&&W.alternate===null&&t(g,_),f=i(W,f,N),b===null?w=W:b.sibling=W,b=W,_=O}if(L.done)return n(g,_),oe&&dn(g,N),w;if(_===null){for(;!L.done;N++,L=m.next())L=p(g,L.value,y),L!==null&&(f=i(L,f,N),b===null?w=L:b.sibling=L,b=L);return oe&&dn(g,N),w}for(_=r(g,_);!L.done;N++,L=m.next())L=v(_,g,N,L.value,y),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?N:L.key),f=i(L,f,N),b===null?w=L:b.sibling=L,b=L);return e&&_.forEach(function(ae){return t(g,ae)}),oe&&dn(g,N),w}function T(g,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Fn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Co:e:{for(var w=m.key,b=f;b!==null;){if(b.key===w){if(w=m.type,w===Fn){if(b.tag===7){n(g,b.sibling),f=a(b,m.props.children),f.return=g,g=f;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===jt&&Gu(w)===b.type){n(g,b.sibling),f=a(b,m.props),f.ref=wr(g,b,m),f.return=g,g=f;break e}n(g,b);break}else t(g,b);b=b.sibling}m.type===Fn?(f=vn(m.props.children,g.mode,y,m.key),f.return=g,g=f):(y=ea(m.type,m.key,m.props,null,g.mode,y),y.ref=wr(g,f,m),y.return=g,g=y)}return l(g);case In:e:{for(b=m.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(g,f.sibling),f=a(f,m.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Di(m,g.mode,y),f.return=g,g=f}return l(g);case jt:return b=m._init,T(g,f,b(m._payload),y)}if(Mr(m))return k(g,f,m,y);if(yr(m))return x(g,f,m,y);Uo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(g,f.sibling),f=a(f,m),f.return=g,g=f):(n(g,f),f=Ai(m,g.mode,y),f.return=g,g=f),l(g)):n(g,f)}return T}var rr=vd(!0),yd=vd(!1),ma=rn(null),ha=null,Hn=null,Kl=null;function Gl(){Kl=Hn=ha=null}function ql(e){var t=ma.current;ne(ma),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){ha=e,Kl=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(ha===null)throw Error(M(308));Hn=e,ha.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var mn=null;function Xl(e){mn===null?mn=[e]:mn.push(e)}function xd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Xl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Tt(e,n)}return a=r.interleaved,a===null?(t.next=t,Xl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Tt(e,n)}function qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}function qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ga(e,t,n,r){var a=e.updateQueue;Ut=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(i!==null){var p=a.baseState;l=0,d=c=u=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,x=s;switch(h=t,v=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(v,p,h);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(v,p,h):k,h==null)break e;p=ce({},p,h);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,l|=h;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;h=s,s=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(d===null&&(u=p),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);bn|=l,e.lanes=l,e.memoizedState=p}}function Xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(M(191,a));a.call(r)}}}var ao={},wt=rn(ao),Yr=rn(ao),Qr=rn(ao);function hn(e){if(e===ao)throw Error(M(174));return e}function Ql(e,t){switch(R(Qr,t),R(Yr,e),R(wt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vi(t,e)}ne(wt),R(wt,t)}function or(){ne(wt),ne(Yr),ne(Qr)}function bd(e){hn(Qr.current);var t=hn(wt.current),n=Vi(t,e.type);t!==n&&(R(Yr,e),R(wt,n))}function Zl(e){Yr.current===e&&(ne(wt),ne(Yr))}var se=rn(0);function va(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mi=[];function Rl(){for(var e=0;e<Mi.length;e++)Mi[e]._workInProgressVersionPrimary=null;Mi.length=0}var Xo=Pt.ReactCurrentDispatcher,zi=Pt.ReactCurrentBatchConfig,kn=0,ue=null,he=null,ve=null,ya=!1,Br=!1,Zr=0,o0=0;function _e(){throw Error(M(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,a,i){if(kn=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?s0:u0,e=n(r,a),Br){i=0;do{if(Br=!1,Zr=0,25<=i)throw Error(M(301));i+=1,ve=he=null,t.updateQueue=null,Xo.current=c0,e=n(r,a)}while(Br)}if(Xo.current=xa,t=he!==null&&he.next!==null,kn=0,ve=he=ue=null,ya=!1,t)throw Error(M(300));return e}function ns(){var e=Zr!==0;return Zr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ue.memoizedState=ve=e:ve=ve.next=e,ve}function it(){if(he===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ue.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(M(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ue.memoizedState=ve=e:ve=ve.next=e}return ve}function Rr(e,t){return typeof t=="function"?t(e):t}function _i(e){var t=it(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=he,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((kn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,l=r):u=u.next=p,ue.lanes|=d,bn|=d}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,ht(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ue.lanes|=i,bn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ti(e){var t=it(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);ht(i,t.memoizedState)||(We=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wd(){}function Nd(e,t){var n=ue,r=it(),a=t(),i=!ht(r.memoizedState,a);if(i&&(r.memoizedState=a,We=!0),r=r.queue,rs(Cd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,eo(9,Ed.bind(null,n,r,a,t),void 0,null),ye===null)throw Error(M(349));(kn&30)!==0||Sd(n,t,a)}return a}function Sd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,r){t.value=n,t.getSnapshot=r,Md(t)&&zd(e)}function Cd(e,t,n){return n(function(){Md(t)&&zd(e)})}function Md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function zd(e){var t=Tt(e,1);t!==null&&mt(t,e,1,-1)}function Yu(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=l0.bind(null,ue,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _d(){return it().memoizedState}function Yo(e,t,n,r){var a=xt();ue.flags|=e,a.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function La(e,t,n,r){var a=it();r=r===void 0?null:r;var i=void 0;if(he!==null){var l=he.memoizedState;if(i=l.destroy,r!==null&&es(r,l.deps)){a.memoizedState=eo(t,n,i,r);return}}ue.flags|=e,a.memoizedState=eo(1|t,n,i,r)}function Qu(e,t){return Yo(8390656,8,e,t)}function rs(e,t){return La(2048,8,e,t)}function Td(e,t){return La(4,2,e,t)}function Ld(e,t){return La(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,n){return n=n!=null?n.concat([e]):null,La(4,4,Pd.bind(null,t,e),n)}function os(){}function Dd(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bd(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Id(e,t,n){return(kn&21)===0?(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n):(ht(n,t)||(n=Uc(),ue.lanes|=n,bn|=n,e.baseState=!0),t)}function a0(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=zi.transition;zi.transition={};try{e(!1),t()}finally{q=n,zi.transition=r}}function Fd(){return it().memoizedState}function i0(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$d(e))Od(t,n);else if(n=xd(e,t,n,r),n!==null){var a=Fe();mt(n,e,r,a),jd(n,t,r)}}function l0(e,t,n){var r=Zt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($d(e))Od(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(a.hasEagerState=!0,a.eagerState=s,ht(s,l)){var u=t.interleaved;u===null?(a.next=a,Xl(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}n=xd(e,t,a,r),n!==null&&(a=Fe(),mt(n,e,r,a),jd(n,t,r))}}function $d(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Od(e,t){Br=ya=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}var xa={readContext:at,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},s0={readContext:at,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Qu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4194308,4,Pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i0.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Yu,useDebugValue:os,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Yu(!1),t=e[0];return e=a0.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,a=xt();if(oe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),ye===null)throw Error(M(349));(kn&30)!==0||Sd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Qu(Cd.bind(null,r,i,e),[e]),r.flags|=2048,eo(9,Ed.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=xt(),t=ye.identifierPrefix;if(oe){var n=Ct,r=Et;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=o0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u0={readContext:at,useCallback:Dd,useContext:at,useEffect:rs,useImperativeHandle:Ad,useInsertionEffect:Td,useLayoutEffect:Ld,useMemo:Bd,useReducer:_i,useRef:_d,useState:function(){return _i(Rr)},useDebugValue:os,useDeferredValue:function(e){var t=it();return Id(t,he.memoizedState,e)},useTransition:function(){var e=_i(Rr)[0],t=it().memoizedState;return[e,t]},useMutableSource:wd,useSyncExternalStore:Nd,useId:Fd,unstable_isNewReconciler:!1},c0={readContext:at,useCallback:Dd,useContext:at,useEffect:rs,useImperativeHandle:Ad,useInsertionEffect:Td,useLayoutEffect:Ld,useMemo:Bd,useReducer:Ti,useRef:_d,useState:function(){return Ti(Rr)},useDebugValue:os,useDeferredValue:function(e){var t=it();return he===null?t.memoizedState=e:Id(t,he.memoizedState,e)},useTransition:function(){var e=Ti(Rr)[0],t=it().memoizedState;return[e,t]},useMutableSource:wd,useSyncExternalStore:Nd,useId:Fd,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pa={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),a=Zt(e),i=Mt(r,a);i.payload=t,n!=null&&(i.callback=n),t=Yt(e,i,a),t!==null&&(mt(t,e,a,r),qo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),a=Zt(e),i=Mt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Yt(e,i,a),t!==null&&(mt(t,e,a,r),qo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Zt(e),a=Mt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Yt(e,a,r),t!==null&&(mt(t,e,r,n),qo(t,e,r))}};function Zu(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(a,i):!0}function Ud(e,t,n){var r=!1,a=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(a=Ve(t)?yn:Pe.current,r=t.contextTypes,i=(r=r!=null)?tr(e,a):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ru(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pa.enqueueReplaceState(t,t.state,null)}function pl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Yl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=at(i):(i=Ve(t)?yn:Pe.current,a.context=tr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(dl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Pa.enqueueReplaceState(a,a.state,null),ga(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=jf(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function Wd(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ba||(ba=!0,Nl=r),fl(e,t)},n}function Jd(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fl(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ec(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d0;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=E0.bind(null,e,t,n),t.then(e,e))}function tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nc(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var p0=Pt.ReactCurrentOwner,We=!1;function Ie(e,t,n,r){t.child=e===null?yd(t,null,n,r):rr(t,e.child,n,r)}function rc(e,t,n,r,a){n=n.render;var i=t.ref;return Zn(t,a),r=ts(e,t,n,r,i,a),n=ns(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Lt(e,t,a)):(oe&&n&&Jl(t),t.flags|=1,Ie(e,t,r,a),t.child)}function oc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!ps(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Vd(e,t,i,r,a)):(e=ea(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(l,r)&&e.ref===t.ref)return Lt(e,t,a)}return t.flags|=1,e=Rt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Vd(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Kr(i,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,Lt(e,t,a)}return ml(e,t,n,r,a)}function Hd(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Gn,Ke),Ke|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Gn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,R(Gn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,R(Gn,Ke),Ke|=r;return Ie(e,t,a,n),t.child}function Kd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ml(e,t,n,r,a){var i=Ve(n)?yn:Pe.current;return i=tr(t,i),Zn(t,a),n=ts(e,t,n,r,i,a),r=ns(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Lt(e,t,a)):(oe&&r&&Jl(t),t.flags|=1,Ie(e,t,n,a),t.child)}function ac(e,t,n,r,a){if(Ve(n)){var i=!0;da(t)}else i=!1;if(Zn(t,a),t.stateNode===null)Qo(e,t),Ud(t,n,r),pl(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=at(c):(c=Ve(n)?yn:Pe.current,c=tr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Ru(t,l,r,c),Ut=!1;var h=t.memoizedState;l.state=h,ga(t,r,l,a),u=t.memoizedState,s!==r||h!==u||Je.current||Ut?(typeof d=="function"&&(dl(t,n,d,r),u=t.memoizedState),(s=Ut||Zu(t,n,s,r,h,u,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,kd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ct(t.type,s),l.props=c,p=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Ve(n)?yn:Pe.current,u=tr(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||h!==u)&&Ru(t,l,r,u),Ut=!1,h=t.memoizedState,l.state=h,ga(t,r,l,a);var k=t.memoizedState;s!==p||h!==k||Je.current||Ut?(typeof v=="function"&&(dl(t,n,v,r),k=t.memoizedState),(c=Ut||Zu(t,n,c,r,h,k,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return hl(e,t,n,r,i,a)}function hl(e,t,n,r,a,i){Kd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Vu(t,n,!1),Lt(e,t,i);r=t.stateNode,p0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,i),t.child=rr(t,null,s,i)):Ie(e,t,s,i),t.memoizedState=r.state,a&&Vu(t,n,!0),t.child}function Gd(e){var t=e.stateNode;t.pendingContext?Ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ju(e,t.context,!1),Ql(e,t.containerInfo)}function ic(e,t,n,r,a){return nr(),Hl(a),t.flags|=256,Ie(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qd(e,t,n){var r=t.pendingProps,a=se.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),R(se,a&1),e===null)return ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ba(l,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=vl(n),t.memoizedState=gl,e):as(t,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return f0(e,t,l,r,s,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Rt(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Rt(s,i):(i=vn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?vl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return i=e.child,e=i.sibling,r=Rt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function as(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&Hl(r),rr(t,e.child,null,n),e=as(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function f0(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Li(Error(M(422))),Wo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ba({mode:"visible",children:r.children},a,0,null),i=vn(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&rr(t,e.child,null,l),t.child.memoizedState=vl(l),t.memoizedState=gl,i);if((t.mode&1)===0)return Wo(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(M(419)),r=Li(i,r,void 0),Wo(e,t,l,r)}if(s=(l&e.childLanes)!==0,We||s){if(r=ye,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Tt(e,a),mt(r,e,a,-1))}return ds(),r=Li(Error(M(421))),Wo(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=C0.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ge=Xt(a.nextSibling),qe=t,oe=!0,pt=null,e!==null&&(tt[nt++]=Et,tt[nt++]=Ct,tt[nt++]=xn,Et=e.id,Ct=e.overflow,xn=t),t=as(t,r.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function Pi(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Xd(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Ie(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&va(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Pi(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&va(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Pi(t,!0,n,null,i);break;case"together":Pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function m0(e,t,n){switch(t.tag){case 3:Gd(t),nr();break;case 5:bd(t);break;case 1:Ve(t.type)&&da(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;R(ma,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qd(e,t,n):(R(se,se.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);R(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),R(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Hd(e,t,n)}return Lt(e,t,n)}var Yd,yl,Qd,Zd;Yd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};Qd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,hn(wt.current);var i=null;switch(n){case"input":a=ji(e,a),r=ji(e,r),i=[];break;case"select":a=ce({},a,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":a=Ji(e,a),r=Ji(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ua)}Hi(n,r);var l;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Or.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=a?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Or.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&te("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Zd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h0(e,t,n){var r=t.pendingProps;switch(Vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ve(t.type)&&ca(),Te(t),null;case 3:return r=t.stateNode,or(),ne(Je),ne(Pe),Rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(Cl(pt),pt=null))),yl(e,t),Te(t),null;case 5:Zl(t);var a=hn(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Qd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Te(t),null}if(e=hn(wt.current),jo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kt]=t,r[Xr]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(a=0;a<_r.length;a++)te(_r[a],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":hu(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":vu(r,i),te("invalid",r)}Hi(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Oo(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Oo(r.textContent,s,e),a=["children",""+s]):Or.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Mo(r),gu(r,i,!0);break;case"textarea":Mo(r),yu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ua)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[Xr]=r,Yd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ki(n,r),n){case"dialog":te("cancel",e),te("close",e),a=r;break;case"iframe":case"object":case"embed":te("load",e),a=r;break;case"video":case"audio":for(a=0;a<_r.length;a++)te(_r[a],e);a=r;break;case"source":te("error",e),a=r;break;case"img":case"image":case"link":te("error",e),te("load",e),a=r;break;case"details":te("toggle",e),a=r;break;case"input":hu(e,r),a=ji(e,r),te("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ce({},r,{value:void 0}),te("invalid",e);break;case"textarea":vu(e,r),a=Ji(e,r),te("invalid",e);break;default:a=r}Hi(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?_c(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jr(e,u):typeof u=="number"&&jr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Or.hasOwnProperty(i)?u!=null&&i==="onScroll"&&te("scroll",e):u!=null&&_l(e,i,u,l))}switch(n){case"input":Mo(e),gu(e,r,!1);break;case"textarea":Mo(e),yu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Zd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=hn(Qr.current),hn(wt.current),jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gd(),nr(),t.flags|=98560,i=!1;else if(i=jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[kt]=t}else nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else pt!==null&&(Cl(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?ge===0&&(ge=3):ds())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return or(),yl(e,t),e===null&&Gr(t.stateNode.containerInfo),Te(t),null;case 10:return ql(t.type._context),Te(t),null;case 17:return Ve(t.type)&&ca(),Te(t),null;case 19:if(ne(se),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Nr(i,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=va(e),l!==null){for(t.flags|=128,Nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&fe()>ir&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=va(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!oe)return Te(t),null}else 2*fe()-i.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=fe(),t.sibling=null,n=se.current,R(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return cs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ke&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function g0(e,t){switch(Vl(t),t.tag){case 1:return Ve(t.type)&&ca(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),ne(Je),ne(Pe),Rl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Zl(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return or(),null;case 10:return ql(t.type._context),null;case 22:case 23:return cs(),null;case 24:return null;default:return null}}var Jo=!1,Le=!1,v0=typeof WeakSet=="function"?WeakSet:Set,P=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){de(e,t,r)}}var sc=!1;function y0(e,t){if(nl=ia,e=rd(),Wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var v;p!==n||a!==0&&p.nodeType!==3||(s=l+a),p!==i||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++c===a&&(s=l),h===i&&++d===r&&(u=l),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},ia=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,T=k.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:ct(t.type,x),T);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(y){de(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return k=sc,sc=!1,k}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&xl(t,n,i)}a=a.next}while(a!==r)}}function Aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Xr],delete t[il],delete t[e0],delete t[t0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ua));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wl(e,t,n),e=e.sibling;e!==null;)wl(e,t,n),e=e.sibling}var be=null,dt=!1;function Ot(e,t,n){for(n=n.child;n!==null;)tp(e,t,n),n=n.sibling}function tp(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 5:Le||Kn(n,t);case 6:var r=be,a=dt;be=null,Ot(e,t,n),be=r,dt=a,be!==null&&(dt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(dt?(e=be,n=n.stateNode,e.nodeType===8?Ei(e.parentNode,n):e.nodeType===1&&Ei(e,n),Vr(e)):Ei(be,n.stateNode));break;case 4:r=be,a=dt,be=n.stateNode.containerInfo,dt=!0,Ot(e,t,n),be=r,dt=a;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&xl(n,t,l),a=a.next}while(a!==r)}Ot(e,t,n);break;case 1:if(!Le&&(Kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Ot(e,t,n),Le=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v0),t.forEach(function(r){var a=M0.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,dt=!1;break e;case 3:be=s.stateNode.containerInfo,dt=!0;break e;case 4:be=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(be===null)throw Error(M(160));tp(i,l,a),be=null,dt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){de(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)np(t,e),t=t.sibling}function np(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),yt(e),r&4){try{Ir(3,e,e.return),Aa(3,e)}catch(x){de(e,e.return,x)}try{Ir(5,e,e.return)}catch(x){de(e,e.return,x)}}break;case 1:ut(t,e),yt(e),r&512&&n!==null&&Kn(n,n.return);break;case 5:if(ut(t,e),yt(e),r&512&&n!==null&&Kn(n,n.return),e.flags&32){var a=e.stateNode;try{jr(a,"")}catch(x){de(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Sc(a,i),Ki(s,l);var c=Ki(s,i);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];d==="style"?_c(a,p):d==="dangerouslySetInnerHTML"?Mc(a,p):d==="children"?jr(a,p):_l(a,d,p,c)}switch(s){case"input":Ui(a,i);break;case"textarea":Ec(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?qn(a,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?qn(a,!!i.multiple,i.defaultValue,!0):qn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Xr]=i}catch(x){de(e,e.return,x)}}break;case 6:if(ut(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(M(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){de(e,e.return,x)}}break;case 3:if(ut(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(x){de(e,e.return,x)}break;case 4:ut(t,e),yt(e);break;case 13:ut(t,e),yt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(ss=fe())),r&4&&cc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(c=Le)||d,ut(t,e),Le=c):ut(t,e),yt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(P=e,d=e.child;d!==null;){for(p=P=d;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ir(4,h,h.return);break;case 1:Kn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){de(r,n,x)}}break;case 5:Kn(h,h.return);break;case 22:if(h.memoizedState!==null){pc(p);continue}}v!==null?(v.return=h,P=v):pc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=zc("display",l))}catch(x){de(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){de(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ut(t,e),yt(e),r&4&&cc(e);break;case 21:break;default:ut(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ep(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(jr(a,""),r.flags&=-33);var i=uc(e);wl(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=uc(e);bl(e,s,l);break;default:throw Error(M(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x0(e,t,n){P=e,rp(e,t,n)}function rp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Jo;if(!l){var s=a.alternate,u=s!==null&&s.memoizedState!==null||Le;s=Jo;var c=Le;if(Jo=l,(Le=u)&&!c)for(P=a;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?fc(a):u!==null?(u.return=l,P=u):fc(a);for(;i!==null;)P=i,rp(i,t,n),i=i.sibling;P=a,Jo=s,Le=c}dc(e,t,n)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,P=i):dc(e,t,n)}}function dc(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Le||Aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Vr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Le||t.flags&512&&kl(t)}catch(h){de(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function pc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function fc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Aa(4,t)}catch(u){de(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){de(t,a,u)}}var i=t.return;try{kl(t)}catch(u){de(t,i,u)}break;case 5:var l=t.return;try{kl(t)}catch(u){de(t,l,u)}}}catch(u){de(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var k0=Math.ceil,ka=Pt.ReactCurrentDispatcher,is=Pt.ReactCurrentOwner,ot=Pt.ReactCurrentBatchConfig,H=0,ye=null,me=null,we=0,Ke=0,Gn=rn(0),ge=0,to=null,bn=0,Da=0,ls=0,Fr=null,Ue=null,ss=0,ir=1/0,Nt=null,ba=!1,Nl=null,Qt=null,Vo=!1,Ht=null,wa=0,$r=0,Sl=null,Zo=-1,Ro=0;function Fe(){return(H&6)!==0?fe():Zo!==-1?Zo:Zo=fe()}function Zt(e){return(e.mode&1)===0?1:(H&2)!==0&&we!==0?we&-we:r0.transition!==null?(Ro===0&&(Ro=Uc()),Ro):(e=q,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e)}function mt(e,t,n,r){if(50<$r)throw $r=0,Sl=null,Error(M(185));no(e,n,r),((H&2)===0||e!==ye)&&(e===ye&&((H&2)===0&&(Da|=n),ge===4&&Jt(e,we)),He(e,r),n===1&&H===0&&(t.mode&1)===0&&(ir=fe()+500,Ta&&on()))}function He(e,t){var n=e.callbackNode;am(e,t);var r=aa(e,e===ye?we:0);if(r===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?n0(mc.bind(null,e)):fd(mc.bind(null,e)),Zm(function(){(H&6)===0&&on()}),n=null;else{switch(Wc(r)){case 1:n=Dl;break;case 4:n=Oc;break;case 16:n=oa;break;case 536870912:n=jc;break;default:n=oa}n=dp(n,op.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function op(e,t){if(Zo=-1,Ro=0,(H&6)!==0)throw Error(M(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=aa(e,e===ye?we:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Na(e,r);else{t=r;var a=H;H|=2;var i=ip();(ye!==e||we!==t)&&(Nt=null,ir=fe()+500,gn(e,t));do try{N0();break}catch(s){ap(e,s)}while(!0);Gl(),ka.current=i,H=a,me!==null?t=0:(ye=null,we=0,t=ge)}if(t!==0){if(t===2&&(a=Qi(e),a!==0&&(r=a,t=El(e,a))),t===1)throw n=to,gn(e,0),Jt(e,r),He(e,fe()),n;if(t===6)Jt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!b0(a)&&(t=Na(e,r),t===2&&(i=Qi(e),i!==0&&(r=i,t=El(e,i))),t===1))throw n=to,gn(e,0),Jt(e,r),He(e,fe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:pn(e,Ue,Nt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=ss+500-fe(),10<t)){if(aa(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=al(pn.bind(null,e,Ue,Nt),t);break}pn(e,Ue,Nt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ft(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k0(r/1960))-r,10<r){e.timeoutHandle=al(pn.bind(null,e,Ue,Nt),r);break}pn(e,Ue,Nt);break;case 5:pn(e,Ue,Nt);break;default:throw Error(M(329))}}}return He(e,fe()),e.callbackNode===n?op.bind(null,e):null}function El(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Na(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Cl(t)),e}function Cl(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function b0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!ht(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~ls,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function mc(e){if((H&6)!==0)throw Error(M(327));Rn();var t=aa(e,0);if((t&1)===0)return He(e,fe()),null;var n=Na(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=El(e,r))}if(n===1)throw n=to,gn(e,0),Jt(e,t),He(e,fe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Ue,Nt),He(e,fe()),null}function us(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(ir=fe()+500,Ta&&on())}}function wn(e){Ht!==null&&Ht.tag===0&&(H&6)===0&&Rn();var t=H;H|=1;var n=ot.transition,r=q;try{if(ot.transition=null,q=1,e)return e()}finally{q=r,ot.transition=n,H=t,(H&6)===0&&on()}}function cs(){Ke=Gn.current,ne(Gn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qm(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ca();break;case 3:or(),ne(Je),ne(Pe),Rl();break;case 5:Zl(r);break;case 4:or();break;case 13:ne(se);break;case 19:ne(se);break;case 10:ql(r.type._context);break;case 22:case 23:cs()}n=n.return}if(ye=e,me=e=Rt(e.current,null),we=Ke=t,ge=0,to=null,ls=Da=bn=0,Ue=Fr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}mn=null}return e}function ap(e,t){do{var n=me;try{if(Gl(),Xo.current=xa,ya){for(var r=ue.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ya=!1}if(kn=0,ve=he=ue=null,Br=!1,Zr=0,is.current=null,n===null||n.return===null){ge=1,to=t,me=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=we,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=tc(l);if(v!==null){v.flags&=-257,nc(v,l,s,i,t),v.mode&1&&ec(i,c,t),t=v,u=c;var k=t.updateQueue;if(k===null){var x=new Set;x.add(u),t.updateQueue=x}else k.add(u);break e}else{if((t&1)===0){ec(i,c,t),ds();break e}u=Error(M(426))}}else if(oe&&s.mode&1){var T=tc(l);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),nc(T,l,s,i,t),Hl(ar(u,s));break e}}i=u=ar(u,s),ge!==4&&(ge=2),Fr===null?Fr=[i]:Fr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Wd(i,u,t);qu(i,g);break e;case 1:s=u;var f=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qt===null||!Qt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Jd(i,s,t);qu(i,y);break e}}i=i.return}while(i!==null)}sp(n)}catch(w){t=w,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function ip(){var e=ka.current;return ka.current=xa,e===null?xa:e}function ds(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||(bn&268435455)===0&&(Da&268435455)===0||Jt(ye,we)}function Na(e,t){var n=H;H|=2;var r=ip();(ye!==e||we!==t)&&(Nt=null,gn(e,t));do try{w0();break}catch(a){ap(e,a)}while(!0);if(Gl(),H=n,ka.current=r,me!==null)throw Error(M(261));return ye=null,we=0,ge}function w0(){for(;me!==null;)lp(me)}function N0(){for(;me!==null&&!Yf();)lp(me)}function lp(e){var t=cp(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?sp(e):me=t,is.current=null}function sp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=h0(n,t,Ke),n!==null){me=n;return}}else{if(n=g0(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,me=null;return}}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ge===0&&(ge=5)}function pn(e,t,n){var r=q,a=ot.transition;try{ot.transition=null,q=1,S0(e,t,n,r)}finally{ot.transition=a,q=r}return null}function S0(e,t,n,r){do Rn();while(Ht!==null);if((H&6)!==0)throw Error(M(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(im(e,i),e===ye&&(me=ye=null,we=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Vo||(Vo=!0,dp(oa,function(){return Rn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ot.transition,ot.transition=null;var l=q;q=1;var s=H;H|=4,is.current=null,y0(e,n),np(n,e),Km(rl),ia=!!nl,rl=nl=null,e.current=n,x0(n,e,a),Qf(),H=s,q=l,ot.transition=i}else e.current=n;if(Vo&&(Vo=!1,Ht=e,wa=a),i=e.pendingLanes,i===0&&(Qt=null),em(n.stateNode,r),He(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ba)throw ba=!1,e=Nl,Nl=null,e;return(wa&1)!==0&&e.tag!==0&&Rn(),i=e.pendingLanes,(i&1)!==0?e===Sl?$r++:($r=0,Sl=e):$r=0,on(),null}function Rn(){if(Ht!==null){var e=Wc(wa),t=ot.transition,n=q;try{if(ot.transition=null,q=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,wa=0,(H&6)!==0)throw Error(M(331));var a=H;for(H|=4,P=e.current;P!==null;){var i=P,l=i.child;if((P.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Ir(8,d,i)}var p=d.child;if(p!==null)p.return=d,P=p;else for(;P!==null;){d=P;var h=d.sibling,v=d.return;if(Rd(d),d===c){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}P=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Ir(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,P=g;break e}P=i.return}}var f=e.current;for(P=f;P!==null;){l=P;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,P=m;else e:for(l=f;P!==null;){if(s=P,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Aa(9,s)}}catch(w){de(s,s.return,w)}if(s===l){P=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,P=y;break e}P=s.return}}if(H=a,on(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Ea,e)}catch{}r=!0}return r}finally{q=n,ot.transition=t}}return!1}function hc(e,t,n){t=ar(n,t),t=Wd(e,t,1),e=Yt(e,t,1),t=Fe(),e!==null&&(no(e,1,t),He(e,t))}function de(e,t,n){if(e.tag===3)hc(e,e,n);else for(;t!==null;){if(t.tag===3){hc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=ar(n,e),e=Jd(t,e,1),t=Yt(t,e,1),e=Fe(),t!==null&&(no(t,1,e),He(t,e));break}}t=t.return}}function E0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(we&n)===n&&(ge===4||ge===3&&(we&130023424)===we&&500>fe()-ss?gn(e,0):ls|=n),He(e,t)}function up(e,t){t===0&&((e.mode&1)===0?t=1:(t=To,To<<=1,(To&130023424)===0&&(To=4194304)));var n=Fe();e=Tt(e,t),e!==null&&(no(e,t,n),He(e,n))}function C0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),up(e,n)}function M0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),up(e,n)}var cp;cp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)We=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return We=!1,m0(e,t,n);We=(e.flags&131072)!==0}else We=!1,oe&&(t.flags&1048576)!==0&&md(t,fa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qo(e,t),e=t.pendingProps;var a=tr(t,Pe.current);Zn(t,n),a=ts(null,t,r,e,a,n);var i=ns();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,da(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Yl(t),a.updater=Pa,t.stateNode=a,a._reactInternals=t,pl(t,r,e,n),t=hl(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&Jl(t),Ie(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qo(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=_0(r),e=ct(r,e),a){case 0:t=ml(null,t,r,e,n);break e;case 1:t=ac(null,t,r,e,n);break e;case 11:t=rc(null,t,r,e,n);break e;case 14:t=oc(null,t,r,ct(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ct(r,a),ml(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ct(r,a),ac(e,t,r,a,n);case 3:e:{if(Gd(t),e===null)throw Error(M(387));r=t.pendingProps,i=t.memoizedState,a=i.element,kd(e,t),ga(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=ar(Error(M(423)),t),t=ic(e,t,r,n,a);break e}else if(r!==a){a=ar(Error(M(424)),t),t=ic(e,t,r,n,a);break e}else for(Ge=Xt(t.stateNode.containerInfo.firstChild),qe=t,oe=!0,pt=null,n=yd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===a){t=Lt(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return bd(t),e===null&&ul(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,ol(r,a)?l=null:i!==null&&ol(r,i)&&(t.flags|=32),Kd(e,t),Ie(e,t,l,n),t.child;case 6:return e===null&&ul(t),null;case 13:return qd(e,t,n);case 4:return Ql(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ct(r,a),rc(e,t,r,a,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,R(ma,r._currentValue),r._currentValue=l,i!==null)if(ht(i.value,l)){if(i.children===a.children&&!Je.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Mt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),cl(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(M(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),cl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ie(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Zn(t,n),a=at(a),r=r(a),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,a=ct(r,t.pendingProps),a=ct(r.type,a),oc(e,t,r,a,n);case 15:return Vd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ct(r,a),Qo(e,t),t.tag=1,Ve(r)?(e=!0,da(t)):e=!1,Zn(t,n),Ud(t,r,a),pl(t,r,a,n),hl(null,t,r,!0,e,n);case 19:return Xd(e,t,n);case 22:return Hd(e,t,n)}throw Error(M(156,t.tag))};function dp(e,t){return $c(e,t)}function z0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new z0(e,t,n,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _0(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ll)return 11;if(e===Pl)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ea(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")ps(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Fn:return vn(n.children,a,i,t);case Tl:l=8,a|=8;break;case Ii:return e=rt(12,n,t,a|2),e.elementType=Ii,e.lanes=i,e;case Fi:return e=rt(13,n,t,a),e.elementType=Fi,e.lanes=i,e;case $i:return e=rt(19,n,t,a),e.elementType=$i,e.lanes=i,e;case bc:return Ba(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xc:l=10;break e;case kc:l=9;break e;case Ll:l=11;break e;case Pl:l=14;break e;case jt:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=rt(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=rt(22,e,r,t),e.elementType=bc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ai(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Di(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function T0(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function fs(e,t,n,r,a,i,l,s,u){return e=new T0(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yl(i),e}function L0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pp(e){if(!e)return tn;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ve(n))return pd(e,n,t)}return t}function fp(e,t,n,r,a,i,l,s,u){return e=fs(n,r,!0,e,a,i,l,s,u),e.context=pp(null),n=e.current,r=Fe(),a=Zt(n),i=Mt(r,a),i.callback=t??null,Yt(n,i,a),e.current.lanes=a,no(e,a,r),He(e,r),e}function Ia(e,t,n,r){var a=t.current,i=Fe(),l=Zt(a);return n=pp(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(a,t,l),e!==null&&(mt(e,a,l,i),qo(e,a,l)),l}function Sa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ms(e,t){gc(e,t),(e=e.alternate)&&gc(e,t)}function P0(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}Fa.prototype.render=hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ia(e,t,null,null)};Fa.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Ia(null,e,null,null)}),t[_t]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&Gc(e)}};function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vc(){}function A0(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=Sa(l);i.call(c)}}var l=fp(t,r,e,0,null,!1,!1,"",vc);return e._reactRootContainer=l,e[_t]=l.current,Gr(e.nodeType===8?e.parentNode:e),wn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var c=Sa(u);s.call(c)}}var u=fs(e,0,!1,null,null,!1,!1,"",vc);return e._reactRootContainer=u,e[_t]=u.current,Gr(e.nodeType===8?e.parentNode:e),wn(function(){Ia(t,u,n,r)}),u}function Oa(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var u=Sa(l);s.call(u)}}Ia(t,l,e,a)}else l=A0(n,t,e,a,r);return Sa(l)}Jc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(Bl(t,n|1),He(t,fe()),(H&6)===0&&(ir=fe()+500,on()))}break;case 13:wn(function(){var r=Tt(e,1);if(r!==null){var a=Fe();mt(r,e,1,a)}}),ms(e,1)}};Il=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Fe();mt(t,e,134217728,n)}ms(e,134217728)}};Vc=function(e){if(e.tag===13){var t=Zt(e),n=Tt(e,t);if(n!==null){var r=Fe();mt(n,e,t,r)}ms(e,t)}};Hc=function(){return q};Kc=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};qi=function(e,t,n){switch(t){case"input":if(Ui(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=_a(r);if(!a)throw Error(M(90));Nc(r),Ui(r,a)}}}break;case"textarea":Ec(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};Pc=us;Ac=wn;var D0={usingClientEntryPoint:!1,Events:[oo,Un,_a,Tc,Lc,us]},Sr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ic(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||P0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Er=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Er.isDisabled&&Er.supportsFiber))try{Ea=Er.inject(B0),bt=Er}catch{}var Er;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gs(t))throw Error(M(200));return L0(e,t,null,n)};Qe.createRoot=function(e,t){if(!gs(e))throw Error(M(299));var n=!1,r="",a=mp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=fs(e,1,!1,null,null,n,!1,r,a),e[_t]=t.current,Gr(e.nodeType===8?e.parentNode:e),new hs(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Ic(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return wn(e)};Qe.hydrate=function(e,t,n){if(!$a(t))throw Error(M(200));return Oa(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!gs(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=mp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=fp(t,null,e,1,n??null,a,!1,i,l),e[_t]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Fa(t)};Qe.render=function(e,t,n){if(!$a(t))throw Error(M(200));return Oa(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!$a(e))throw Error(M(40));return e._reactRootContainer?(wn(function(){Oa(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Qe.unstable_batchedUpdates=us;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$a(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Oa(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426"});var yp=un((yg,vp)=>{"use strict";function gp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gp)}catch(e){console.error(e)}}gp(),vp.exports=hp()});var kp=un(vs=>{"use strict";var xp=yp();vs.createRoot=xp.createRoot,vs.hydrateRoot=xp.hydrateRoot;var xg});var o=js(ri()),Kp=js(kp()),Ja=Date.now();function xe(){return Ja+=1,Ja}var Va=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function cr(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(a=>a.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function I0(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function j(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function lt(e){let[t,n]=e.split(":").map(Number);return t*60+n}function At(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function Dt(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function ys(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function qa(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(j(0)))n=0;else if(t.has(j(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,a=n,i=0,l=!0,s=!1;for(;;)if(t.has(j(a)))r++,i++,!l&&i>=7&&(l=!0,i=0),a-=1;else if(l)l=!1,i=0,s=!0,a-=1;else break;return{streak:r,freezeUsed:s}}function xs(e){return qa(e).streak}var F0=[15,30,45,60,90,120],Xa={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},open(e){this.fn&&this.fn(e)}},po={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},propagate(e,t,n){this.fn&&this.fn(e,t,n)}},bp="tasksh.links.v1",Gp={routine:{label:"routine",plural:"routines"},good:{label:"quest",plural:"quest habits"},vault:{label:"vault",plural:"vault habits"}},zn=(e,t)=>`${e}:${t}`,qp=e=>{let t=String(e).indexOf(":");return{kind:String(e).slice(0,t),id:Number(String(e).slice(t+1))}};function Xp(e,t){let n=[];for(let[r,a]of e)r===t?n.push(a):a===t&&n.push(r);return n}function $0(e,t,n){return e.some(([r,a])=>r===t&&a===n||r===n&&a===t)}function O0(e,t,n){return t===n||$0(e,t,n)?e:[...e,[t,n]]}function j0(e,t,n){return e.filter(([r,a])=>!(r===t&&a===n||r===n&&a===t))}function wp(e,t){let{kind:n,id:r}=qp(e),a=n==="routine"?t.routines:n==="good"?t.goodHabits:n==="vault"?t.vaultHabits:null;if(!a)return null;let i=a.find(l=>l.id===r);return i?{kind:n,id:r,label:i.label,meta:Gp[n]?.label||n}:null}function U0(e,t,n,r,a){let i=Xp(n,e);if(!i.length)return 0;let l=(u,c)=>u.map(d=>{if(d.id!==c)return d;let p=d.history||[],h=p.includes(a);return t===h?d:{...d,history:t?[...p,a]:p.filter(v=>v!==a)}}),s={routine:[],good:[],vault:[]};for(let u of i){let{kind:c,id:d}=qp(u);s[c]&&s[c].push(d)}return s.routine.length&&r.setRoutines&&r.setRoutines(u=>s.routine.reduce((c,d)=>l(c,d),u)),s.good.length&&r.setGoodHabits&&r.setGoodHabits(u=>s.good.reduce((c,d)=>l(c,d),u)),s.vault.length&&r.setVaultHabits&&r.setVaultHabits(u=>s.vault.reduce((c,d)=>l(c,d),u)),i.length}function W0(){let[e,t]=(0,o.useState)(()=>Ae(bp,[]));return(0,o.useEffect)(()=>{try{localStorage.setItem(bp,JSON.stringify(e))}catch{}},[e]),{links:e,setLinks:t}}var Ha="tasksh.meta.v1";function uo(e){try{let t=Ae(Ha,{});localStorage.setItem(Ha,JSON.stringify({...t,...e}))}catch{}}var Np="tasksh.achievements.v1",Sp="tasksh.wallet.v1",co=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:e=>e.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:e=>e.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:e=>e.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:e=>e.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:e=>e.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:e=>e.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:e=>e.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:e=>e.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:e=>e.totalHabits>0&&e.doneToday>=e.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:e=>e.totalRoutines>0&&e.routinesDoneToday>=e.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:e=>e.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:e=>e.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:e=>e.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:e=>e.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:e=>e.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:e=>e.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:e=>e.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:e=>e.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:e=>e.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:e=>e.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:e=>e.coins>=1e3}];function Yp(e){return co.find(t=>t.id===e)}function J0(e,t){let n=new Set(t),r=[];for(let a of co){if(n.has(a.id))continue;let i=!1;try{i=!!a.test(e)}catch{i=!1}i&&r.push(a.id)}return r}var V0=e=>20+e*5;function H0(e){let[t,n]=(0,o.useState)(()=>Ae(Np,[])),[r,a]=(0,o.useState)(()=>Ae(Sp,{coins:0})),[i,l]=(0,o.useState)([]);(0,o.useEffect)(()=>{try{localStorage.setItem(Np,JSON.stringify(t))}catch{}},[t]),(0,o.useEffect)(()=>{try{localStorage.setItem(Sp,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let c=J0({...e,coins:r.coins},t);if(!c.length)return;n(p=>[...p,...c]),l(p=>[...p,...c]);let d=c.reduce((p,h)=>p+(Yp(h)?.coins||0),0);d&&a(p=>({...p,coins:p.coins+d}))},[e,t,r.coins]);let s=(0,o.useCallback)(c=>a(d=>({...d,coins:Math.max(0,d.coins+c)})),[]),u=(0,o.useCallback)(()=>l(c=>c.slice(1)),[]);return{earned:t,wallet:r,coins:r.coins,queue:i,current:i[0]||null,shift:u,addCoins:s}}var ln={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},ks="tasksh.pet.v1",Tn=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:3,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:6,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:10,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:14,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:17,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:20,name:"Aurelis",title:"legendary guardian",scale:1.06}];function Wa(e){let t=Tn[0];for(let n of Tn)e>=n.minLevel&&(t=n);return t}function Ns(e){return Tn.find(t=>t.minLevel>e)||null}var Ep={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},Cn=e=>Math.max(0,Math.min(100,Math.round(e)));function Cp(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let a=i=>r*i;return{...e,happiness:Cn(e.happiness-a(.55)),energy:Cn(e.energy-a(.75)),friendship:Cn(e.friendship-a(.12)),intelligence:e.intelligence,lastTick:t}}var K0={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function bs(e,t){let n=K0[t];return n?{...e,happiness:Cn(e.happiness+(n.happiness||0)),energy:Cn(e.energy+(n.energy||0)),friendship:Cn(e.friendship+(n.friendship||0)),intelligence:Cn(e.intelligence+(n.intelligence||0))}:e}function Ms(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function Qp(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function an(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function G0(e){let{pet:t,level:n,hour:r,doneToday:a,totalToday:i,streak:l,phase:s}=e,u=Ms(t),c=Math.floor(Date.now()/36e5);return t.energy<22?an(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],c):i>0&&a===i?an([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],c):l>=7?an([`${l} days running. that's a habit now, not an effort.`,`${l} in a row. the hard part's behind you.`],c):a===0&&r>=14?an(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],c):s==="night"&&r>=23?an(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],c):s==="morning"?an(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],c):u.key==="joyful"?an(["good day so far. i can tell.","you're in a rhythm. keep it easy."],c):t.friendship<15?"still getting to know you. tell me something.":an([`${a} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],c)}function q0(e){let{pet:t,level:n,doneToday:r,totalToday:a,streak:i,routineNow:l,nextRoutine:s}=e,u=Ms(t);return[`pet: ${t.name}, ${Tn[t.stage].name} form, mood ${u.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${Qp(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${a} habits done today, best streak ${i}`,l?`right now: ${l}`:"no routine running",s?`next up: ${s}`:""].filter(Boolean).join("; ")}function X0(e,t){let n=(0,o.useRef)(Ae(ks,null)===null),[r,a]=(0,o.useState)(()=>{let p=Ae(ks,null),h=p?{...Ep,...p}:{...Ep,born:Date.now(),lastTick:Date.now()};return Cp(h,Date.now())}),[i,l]=(0,o.useState)(null);(0,o.useEffect)(()=>{try{localStorage.setItem(ks,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let p=setInterval(()=>a(h=>Cp(h,Date.now())),3e5);return()=>clearInterval(p)},[]);let s=(0,o.useMemo)(()=>Wa(e),[e]);(0,o.useEffect)(()=>{if(n.current){n.current=!1,s.stage!==r.stage&&a(p=>({...p,stage:s.stage}));return}if(s.stage>r.stage){let p=r.stage;l({from:p,to:s.stage}),a(h=>bs({...h,stage:s.stage},"levelUp")),D.success()}else s.stage<r.stage&&a(p=>({...p,stage:s.stage}))},[s.stage,r.stage]);let u=(0,o.useCallback)(p=>{a(h=>bs(h,p))},[]);(0,o.useEffect)(()=>ln.on(p=>a(h=>bs(h,p))),[]);let c=(0,o.useCallback)(p=>{let h=String(p||"").trim().slice(0,14);h&&a(v=>({...v,name:h}))},[]),d=(0,o.useCallback)((p,h)=>{a(v=>({...v,chats:p==="user"?v.chats+1:v.chats,log:[...v.log||[],{role:p,text:String(h).slice(0,240)}].slice(-8)}))},[]);return{pet:r,form:s,mood:Ms(r),evolution:i,clearEvolution:()=>l(null),nudge:u,rename:c,remember:d}}var Ss=o.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:a=!0,evolving:i=!1}){let l=Math.max(0,Math.min(6,t)),s=25+l*1.9,u=22-l*.55,c=78+l*.9,d=c-s*.8-u*.62-(l>=3?5:0),p=4.6-l*.3,h=Math.min(6+l*5.2,Math.max(4,d-u-9)),v=9+l*1.1,k=9+l*5.4,x=33+l*5.2,T=l>=3,g=l>=4,f=l>=6,m=l>=5,y=l>=2?Math.min(4,l-1):0,w=n==="sleepy"||n==="tired",b=n==="joyful",_=n==="low"||n==="drained",N=w?.9:p*(b?1.16:1)*2,O=_?`M 56 ${d+9} q 8 -5 16 0`:b?`M 55 ${d+6} q 9 8 18 0`:`M 57 ${d+7} q 7 4 14 0`;return o.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${a?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":Tn[l].scale},role:"img","aria-label":`${Tn[l].name}, ${n}`},o.default.createElement("defs",null,o.default.createElement("radialGradient",{id:`pg-body-${l}`,cx:"38%",cy:"30%"},o.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),o.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),o.default.createElement("radialGradient",{id:`pg-aura-${l}`,cx:"50%",cy:"50%"},o.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),o.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),o.default.createElement("circle",{className:"pet-aura",cx:"64",cy:c-8,r:x,fill:`url(#pg-aura-${l})`}),g&&o.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},o.default.createElement("path",{d:`M ${64-s*.75} ${c-8} q -${16+l*2} -${12+l*2} -${5+l} 8 q 4 9 21 5 Z`}),o.default.createElement("path",{d:`M ${64+s*.75} ${c-8} q ${16+l*2} -${12+l*2} ${5+l} 8 q -4 9 -21 5 Z`})),o.default.createElement("path",{className:"pet-tail",d:`M ${64+s*.85} ${c} q ${k} 2 ${k*.9} -${k*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),l>=3&&o.default.createElement("circle",{cx:64+s*.85+k*.9,cy:c-k*.85,r:2.4+l*.35,fill:"var(--accent2)",className:"pet-tailtip"}),T&&o.default.createElement("rect",{x:"59",y:d+u-5,width:"10",height:Math.max(0,c-s*.7-d-u+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),m&&o.default.createElement("g",{opacity:"0.8"},[0,1,2].map(L=>o.default.createElement("path",{key:L,d:`M ${64-s*.72+L*3} ${c-6-L*7} l -${6+L} -${5+L*2} l ${9+L} ${1+L} Z`,fill:"var(--accent2)"}))),o.default.createElement("g",{className:"pet-body"},o.default.createElement("ellipse",{cx:"64",cy:c,rx:s,ry:s*.86,fill:`url(#pg-body-${l})`}),o.default.createElement("ellipse",{cx:"64",cy:c+2,rx:s*.56,ry:s*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:y}).map((L,W)=>o.default.createElement("circle",{key:W,cx:50+W*14,cy:68+W%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),o.default.createElement("ellipse",{cx:64-s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("ellipse",{cx:64+s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("g",{className:"pet-head"},o.default.createElement("path",{d:`M ${64-v} ${d-u*.72}
                  q -3 -${h} 3 -${h*1.25}
                  q 5 ${h*.45} 4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),o.default.createElement("path",{d:`M ${64+v} ${d-u*.72}
                  q 3 -${h} -3 -${h*1.25}
                  q -5 ${h*.45} -4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),f&&o.default.createElement("g",{className:"pet-crown"},o.default.createElement("path",{d:`M 51 ${d-u+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),o.default.createElement("circle",{cx:"64",cy:d-u-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),o.default.createElement("circle",{cx:"64",cy:d,r:u,fill:`url(#pg-body-${l})`}),w?o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:`M ${64-8.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),o.default.createElement("path",{d:`M ${64+.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):o.default.createElement("g",{className:"pet-eyes"},o.default.createElement("ellipse",{cx:64-7.5,cy:d,rx:p,ry:N/2,fill:"var(--bg)"}),o.default.createElement("ellipse",{cx:64+7.5,cy:d,rx:p,ry:N/2,fill:"var(--bg)"}),o.default.createElement("circle",{cx:64-6.2,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),o.default.createElement("circle",{cx:64+8.8,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),o.default.createElement("path",{d:O,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),b&&o.default.createElement(o.default.Fragment,null,o.default.createElement("ellipse",{cx:49,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),o.default.createElement("ellipse",{cx:79,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),l>=1&&o.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,l)}).map((L,W)=>o.default.createElement("circle",{key:W,cx:"64",cy:c-8-x,r:1.6+W*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${c-8}px`,transform:`rotate(${W*(360/Math.min(4,l))}deg)`}}))))}),dr=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],Mp=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function zp(e){for(let t of Mp)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return Mp[2]}function Y0(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var Q0=o.default.memo(function({theme:t,phase:n,calm:r,scoped:a=!1}){let i=t.ambient.particle,l=a?"amb-layer amb-scoped":"amb-layer",s=(0,o.useMemo)(()=>i==="none"?[]:Array.from({length:i==="aurora"?16:i==="embers"?14:18},(d,p)=>{let h=i==="bubbles"?3+p%4*2:2+p%3;return{left:`${(p*37+11)%100}%`,size:h,delay:`${-(p*2.3)%26}s`,dur:`${(i==="bubbles"?20:30)+p%7*4}s`}}),[i]),u=(0,o.useMemo)(()=>n.stars?Array.from({length:34},(c,d)=>({left:`${(d*29+7)%100}%`,top:`${(d*53+13)%62}%`,op:.2+d*37%60/100})):[],[n.stars]);return o.default.createElement(o.default.Fragment,null,a&&o.default.createElement("div",{className:`${l} amb-blobs`}),o.default.createElement("div",{className:`${l} amb-time`},o.default.createElement("div",{className:"amb-ray"})),u.length>0&&o.default.createElement("div",{className:`${l} amb-stars`},u.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,top:c.top,opacity:c.op}}))),s.length>0&&o.default.createElement("div",{className:`${l} amb-dust`},s.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,bottom:"-6vh",width:c.size,height:c.size,animationDelay:c.delay,animationDuration:c.dur}}))),o.default.createElement("div",{className:`${l} amb-grain`}),r&&o.default.createElement("div",{className:"calm-breath"}))}),_p="tasksh.calm.v1",Tp="tasksh.ambience.v1";function Z0(e){let[t,n]=(0,o.useState)(()=>{try{return localStorage.getItem(Lp)||ja}catch{return ja}}),[r,a]=(0,o.useState)(()=>{try{return localStorage.getItem(_p)==="1"}catch{return!1}}),[i,l]=(0,o.useState)(()=>{try{return localStorage.getItem(Tp)!=="0"}catch{return!0}}),[s,u]=(0,o.useState)(()=>zp(cr().hour)),c=(0,o.useMemo)(()=>R0(t),[t]);(0,o.useEffect)(()=>{!Es(c,e)&&c.id!==ja&&n(ja)},[c,e]),(0,o.useEffect)(()=>{eh(c);try{localStorage.setItem(Lp,c.id)}catch{}},[c]),(0,o.useEffect)(()=>{Y0(s)},[s]),(0,o.useEffect)(()=>{let p=setInterval(()=>{let h=zp(cr().hour);u(v=>v.id===h.id?v:h)},12e4);return()=>clearInterval(p)},[]),(0,o.useEffect)(()=>{let p=document.documentElement;p.style.setProperty("--calm",r?"1":"0"),p.style.setProperty("--motion-scale",r?"1.9":"1"),p.classList.toggle("calm-mode",r);try{localStorage.setItem(_p,r?"1":"0")}catch{}},[r]);let d=(0,o.useMemo)(()=>dr.filter(p=>Es(p,e)),[e]);return(0,o.useEffect)(()=>{document.documentElement.classList.toggle("no-ambience",!i);try{localStorage.setItem(Tp,i?"1":"0")}catch{}},[i]),{theme:c,themeId:t,setThemeId:n,themes:dr,unlocked:d,phase:s,calm:r,setCalm:a,ambience:i,setAmbience:l}}var ja="terminal",Lp="tasksh.theme.v1";function R0(e){return dr.find(t=>t.id===e)||dr[0]}function Es(e,t){return t>=e.unlockLevel}function eh(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((a,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${a[0]}, ${a[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var Zp="tasksh.sound.v1",io=null;function th(){if(!io){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;io=new e}return io.state==="suspended"&&io.resume(),io}function Rp(){try{let e=localStorage.getItem(Zp);return e===null?!0:e==="1"}catch{return!0}}function nh(e){try{localStorage.setItem(Zp,e?"1":"0")}catch{}}function En(e){if(!Rp())return;let t=th();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:a=0,dur:i=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),c=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+a),c.gain.setValueAtTime(1e-4,n+a),c.gain.exponentialRampToValueAtTime(s,n+a+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+a+i),u.connect(c),c.connect(t.destination),u.start(n+a),u.stop(n+a+i+.02)})}var D={click:()=>En([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>En([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>En([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>En([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>En([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>En([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function rh(){let[e,t]=(0,o.useState)(Rp());return[e,()=>{let r=!e;t(r),nh(r),r&&En([{freq:720,dur:.05,gain:.04}])}]}function oh(e,t=550){let[n,r]=(0,o.useState)(e),a=(0,o.useRef)(e),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let l=a.current,s=e;if(l===s)return;let u=performance.now(),c=p=>1-Math.pow(1-p,3),d=p=>{let h=p-u,v=Math.min(1,h/t),k=c(v);r(Math.round(l+(s-l)*k)),v<1?i.current=requestAnimationFrame(d):a.current=s};return i.current=requestAnimationFrame(d),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function gt({value:e,className:t,suffix:n=""}){let r=oh(e);return o.default.createElement("span",{className:t},r,n)}function ah({axes:e,size:t=220,maxValue:n}){let[r,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let m=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(m)},[]);let i=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),c=n??Math.max(1,...e.map(m=>m.value)),d=m=>Math.PI*2*m/i-Math.PI/2,p=.16,h=Math.min(0,...e.map(m=>m.value)),v=m=>m>0?p+(1-p)*Math.min(1,m/c):m===0||!h?p:p*(1-.8*Math.min(1,m/h)),k=(m,y)=>{let w=d(m);return[l+Math.cos(w)*u*y,s+Math.sin(w)*u*y]},x=i>6?46:22,T=[.25,.5,.75,1],f=e.map((m,y)=>k(y,r?v(m.value):.02)).map((m,y)=>`${y===0?"M":"L"}${m[0].toFixed(1)},${m[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("svg",{viewBox:`${-x} 0 ${t+x*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},T.map((m,y)=>{let b=e.map((_,N)=>k(N,p+(1-p)*m)).map((_,N)=>`${N===0?"M":"L"}${_[0].toFixed(1)},${_[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("path",{key:y,d:b,className:"radar-ring"})}),o.default.createElement("path",{d:e.map((m,y)=>{let w=k(y,p);return`${y===0?"M":"L"}${w[0].toFixed(1)},${w[1].toFixed(1)}`}).join(" ")+"Z",className:"radar-zero"}),e.map((m,y)=>{let w=k(y,1);return o.default.createElement("line",{key:y,x1:l,y1:s,x2:w[0],y2:w[1],className:"radar-spoke"})}),o.default.createElement("path",{d:f,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((m,y)=>{let w=k(y,1.19),b=k(y,r?v(m.value):.02),_=m.value<0,N=Math.cos(d(y)),O=N>.25?"start":N<-.25?"end":"middle";return o.default.createElement("g",{key:m.key||y},o.default.createElement("circle",{cx:b[0],cy:b[1],r:i>6?2.8:3.5,fill:_?"none":m.color||"#5EEAD4",stroke:_?"var(--danger)":"none",strokeWidth:_?1.4:0,style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),o.default.createElement("text",{x:w[0],y:w[1],textAnchor:O,dominantBaseline:"middle",className:`radar-label ${_?"radar-label-neg":""}`},_?`${m.label} \u2193`:m.label))}))}function zs({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:a="#1E2228",label:i,sublabel:l}){let[s,u]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let x=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(x)},[]);let c=t/2-n,d=2*Math.PI*c,p=Math.max(0,Math.min(100,e)),h=d-(s?p/100:0)*d,v=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return o.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:a,strokeWidth:n}),o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:d,strokeDashoffset:h,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),o.default.createElement("div",{className:"radial-progress-center"},i&&o.default.createElement("span",{className:"radial-progress-label",style:{fontSize:v}},i),l&&o.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function ef({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:a}){let[i,l]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let h=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(h)},[]);let s=t/2-n/2,u=2*Math.PI*s,c=Math.max(1e-6,e.reduce((h,v)=>h+Math.max(0,v.value),0)),d=0,p=e.map(h=>{let v=Math.max(0,h.value),k=v/c,x=i?k*u:0,T=u-x,g=d/c*360;return d+=v,{...h,dash:x,gap:T,rotation:g,frac:k}});return o.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),p.map((h,v)=>o.default.createElement("circle",{key:h.key||v,cx:t/2,cy:t/2,r:s,fill:"none",stroke:h.color,strokeWidth:n,strokeDasharray:`${h.dash} ${h.gap}`,strokeDashoffset:0,transform:`rotate(${h.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:p.length>1?"butt":"round"}))),o.default.createElement("div",{className:"donut-center"},r!==void 0&&o.default.createElement("span",{className:"donut-center-label"},r),a&&o.default.createElement("span",{className:"donut-center-sublabel"},a)))}function ih({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],a=0,i=t*7,l=Array.from({length:i},(d,p)=>a-(i-1-p)),s=Math.max(1,...l.map(d=>e[j(d)]||0)),u=[];for(let d=0;d<t;d++)u.push(l.slice(d*7,d*7+7));let c=d=>{if(!d)return 0;let p=d/s;return p>.75?4:p>.5?3:p>.25?2:1};return o.default.createElement("div",{className:"heatmap-wrap"},o.default.createElement("div",{className:"heatmap-grid"},u.map((d,p)=>o.default.createElement("div",{className:"heatmap-col",key:p},d.map((h,v)=>{let k=j(h),x=e[k]||0,T=c(x);return o.default.createElement("span",{key:v,className:`heatmap-cell ${h===0?"today":""}`,style:{background:r[T],animationDelay:`${(p*7+v)*4}ms`},title:`${k}: ${x} completed`})})))),o.default.createElement("div",{className:"heatmap-legend"},o.default.createElement("span",null,"less"),r.map((d,p)=>o.default.createElement("span",{key:p,className:"heatmap-legend-cell",style:{background:d}})),o.default.createElement("span",null,"more")))}function lh(e){let t=[],n=[];for(let r of e){let a=t.findIndex(i=>r.start>=i);a===-1?(a=t.length,t.push(r.end)):t[a]=r.end,n.push({...r,lane:a})}return{placed:n,laneCount:Math.max(1,t.length)}}function sh({routines:e,nowMinutes:t,doneToday:n=0}){let[r,a]=(0,o.useState)(!1),[i,l]=(0,o.useState)(0),[s,u]=(0,o.useState)(0),c=(0,o.useRef)(null),d=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let E=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(E)},[]),(0,o.useEffect)(()=>{if(!c.current)return;let E=c.current,A=new ResizeObserver(ee=>{for(let Se of ee)l(Se.contentRect.width)});return A.observe(E),l(E.getBoundingClientRect().width),()=>A.disconnect()},[]);let p=1440,h=j(0),v=e.map(E=>{let A=lt(E.time);return{r:E,start:A,end:A+Math.max(1,E.duration)}}),{placed:k,laneCount:x}=lh(v),g=Math.max(i,24*82),f=g/p,m=g>i+1,y=t*f;(0,o.useEffect)(()=>{if(!c.current||!i||d.current)return;if(!m){d.current=!0;return}let E=c.current,A=Math.max(0,Math.min(y-i/2,g-i));E.scrollTo({left:A,behavior:"auto"}),d.current=!0},[i,y,g,m]),(0,o.useEffect)(()=>{let E=c.current;if(!E)return;let A=0,ee=()=>{A||(A=requestAnimationFrame(()=>{u(E.scrollLeft),A=0}))};return E.addEventListener("scroll",ee,{passive:!0}),u(E.scrollLeft),()=>{E.removeEventListener("scroll",ee),cancelAnimationFrame(A)}},[i]);let w=()=>{let E=c.current;E&&(E.scrollTo({left:Math.max(0,Math.min(y-i/2,g-i)),behavior:"smooth"}),D.click())},b=38,_=6,N=8,O=N*2+x*b+(x-1)*_,L=f*60>=40?1:3,W=[];for(let E=0;E<=24;E+=L)W.push(E);let ae=E=>{let A=E%24;return A===0?"12a":A===12?"12p":A>12?`${A-12}p`:`${A}a`},z=e.length,I=z?Math.round(n/z*100):0;return o.default.createElement("div",{className:"timeline-wrap"},o.default.createElement("div",{className:"timeline-head"},o.default.createElement("div",{className:"timeline-head-left"},o.default.createElement("span",{className:"timeline-title"},"today's schedule"),z>0&&o.default.createElement("span",{className:"timeline-count"},n,"/",z," done")),m&&o.default.createElement("button",{className:"timeline-jump",onClick:w,title:"Jump to now"},"now")),z>0&&o.default.createElement("div",{className:"timeline-progress"},o.default.createElement("div",{className:"timeline-progress-fill",style:{width:r?`${I}%`:"0%"}})),o.default.createElement("div",{className:"timeline-scroll",ref:c},o.default.createElement("div",{className:"timeline-inner",style:{width:g}},o.default.createElement("div",{className:"timeline-hours"},W.map(E=>o.default.createElement("div",{key:E,className:"timeline-hour",style:{left:E*60*f}},o.default.createElement("span",null,ae(E))))),o.default.createElement("div",{className:"timeline-track",style:{height:O}},o.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*f}}),o.default.createElement("div",{className:"timeline-night",style:{left:1320*f,width:120*f}}),W.map(E=>o.default.createElement("div",{key:E,className:`timeline-gridline ${E%6===0?"major":""}`,style:{left:E*60*f}})),o.default.createElement("div",{className:"timeline-elapsed",style:{width:r?y:0}}),k.map(({r:E,start:A,lane:ee},Se)=>{let re=A*f,V=Math.max(1,E.duration)*f,Y=Math.max(4,Math.min(V,g-re)),pe=(E.history||[]).includes(h),Ee=ur(E.id),ke=Math.max(re,s),Ze=Math.min(re+Y,s+i),je=Math.max(0,Ze-ke)>38,$=Math.max(0,Math.min(s-re,Y-46)),X=t>=A&&t<A+E.duration;return o.default.createElement("div",{key:E.id,className:`timeline-block ${pe?"done":""} ${X?"active":""}`,style:{left:re,top:N+ee*(b+_),width:r?Y:0,height:b,transitionDelay:`${Math.min(Se*18,260)}ms`,background:pe?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${Ee}, ${Ee}C4)`,boxShadow:pe?"none":`0 2px 10px ${Ee}44`},title:`${E.label} \xB7 ${At(A)} \xB7 ${Dt(E.duration)}${pe?" \xB7 done":""}`},je&&o.default.createElement("span",{className:"timeline-block-label",style:$>0?{paddingLeft:$+8}:void 0},pe&&o.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),E.label))}),o.default.createElement("div",{className:"timeline-now",style:{left:y}})))),m&&o.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var uh=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[j(-1),j(-2),j(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[j(-1),j(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[j(0),j(-1),j(-2),j(-3),j(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[j(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function ch(){let[e,t]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let n=!1,r=async()=>{try{if(typeof caches>"u"||!caches.keys)return;let l=(await caches.keys()).filter(s=>/^tasksh-v\d+$/.test(s)).sort((s,u)=>parseInt(u.slice(8),10)-parseInt(s.slice(8),10))[0];!n&&l&&t(l.replace("tasksh-",""))}catch{}};r();let a=navigator.serviceWorker;return a?.addEventListener?.("controllerchange",r),()=>{n=!0,a?.removeEventListener?.("controllerchange",r)}},[]),e}function dh(){let e=ch();return e?o.default.createElement("span",{className:"version-badge",title:`running build ${e}`},e):null}function _s(e=420){let[t,n]=(0,o.useState)(!1),r=(0,o.useRef)(null),a=(0,o.useCallback)(()=>{r.current&&clearTimeout(r.current),n(!0),r.current=setTimeout(()=>{n(!1),r.current=null},e)},[e]);return(0,o.useEffect)(()=>()=>{r.current&&clearTimeout(r.current)},[]),[t,a]}function Ts(){let[e,t]=(0,o.useState)(cr());return(0,o.useEffect)(()=>{let n=setInterval(()=>t(cr()),1e3);return()=>clearInterval(n)},[]),e}function Ls(e,t){return(0,o.useMemo)(()=>{let n=[...e].sort((i,l)=>lt(i.time)-lt(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&lt(n[i].time)<=t;i++)r=i;let a=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[a].id}},[e,t])}function ph({routine:e,status:t,index:n,onDelete:r,onToggleToday:a,onSave:i}){let l=lt(e.time),s=l+e.duration,{streak:u,freezeUsed:c}=qa(e.history),d=(e.history||[]).includes(j(0)),[p,h]=(0,o.useState)(0),v=(0,o.useRef)(!1),k=(0,o.useRef)(0),x=(0,o.useRef)(0),T=(0,o.useRef)(null),g=(0,o.useRef)(!1),[f,m]=(0,o.useState)(!1),y=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{y.current&&clearTimeout(y.current)},[]);let[w,b]=(0,o.useState)(!1),[_,N]=(0,o.useState)(e.label),[O,L]=(0,o.useState)(e.time),[W,ae]=(0,o.useState)(e.duration),[z,I]=(0,o.useState)(e.alternatives||[]),E=()=>{N(e.label),L(e.time),ae(e.duration),I(e.alternatives||[]),b(!0)},A=()=>{let V=_.trim();V&&(i(e.id,{label:V,time:O||e.time,duration:Math.max(5,+W||e.duration),alternatives:z.map(Y=>Y.trim()).filter(Boolean)}),b(!1))},ee=V=>{w||(v.current=!0,g.current=!1,T.current=null,k.current=V.clientX,x.current=V.clientY)},Se=V=>{if(!v.current)return;let Y=V.clientX-k.current,pe=V.clientY-x.current;if(T.current===null){if(Math.abs(Y)<6&&Math.abs(pe)<6)return;if(T.current=Math.abs(Y)>Math.abs(pe)?"x":"y",T.current==="y"){v.current=!1;return}}T.current==="x"&&(Math.abs(Y)>4&&(g.current=!0),h(Math.max(-120,Math.min(0,Y))))},re=()=>{v.current&&(v.current=!1,p<-70?(m(!0),y.current||(y.current=setTimeout(()=>r(e.id),200))):(h(0),g.current||E()))};return o.default.createElement("div",{className:`routine-row-wrap ${f?"removing":""}`,style:{animationDelay:`${n*35}ms`}},o.default.createElement("div",{className:"routine-delete-bg"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),o.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${p}px)`,transition:v.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${d?"#2A2F36":ur(e.id)}`},onPointerDown:ee,onPointerMove:Se,onPointerUp:re,onPointerLeave:re,onPointerCancel:re},o.default.createElement("div",{className:"routine-line"},o.default.createElement("span",{className:`routine-node ${d?"quest-done":""}`}),o.default.createElement("span",{className:"routine-connector"})),w?o.default.createElement("div",{className:"routine-edit",onPointerDown:V=>V.stopPropagation()},o.default.createElement("input",{className:"edit-label",value:_,onChange:V=>N(V.target.value),onKeyDown:V=>V.key==="Enter"&&A(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"time",className:"time-input",value:O,onChange:V=>L(V.target.value)}),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:W,onChange:V=>ae(V.target.value)}),o.default.createElement("span",{className:"edit-unit"},"min")),o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),z.map((V,Y)=>o.default.createElement("div",{className:"alt-composer-row",key:Y},o.default.createElement("input",{type:"text",placeholder:`alternative ${Y+1}`,value:V,onChange:pe=>{let Ee=[...z];Ee[Y]=pe.target.value,I(Ee)},onKeyDown:pe=>pe.key==="Enter"&&A()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>I(z.filter((pe,Ee)=>Ee!==Y)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>I([...z,""])},"+ another option")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>b(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:A},"save"))):o.default.createElement("div",{className:"routine-main"},o.default.createElement("div",{className:"routine-top"},o.default.createElement("span",{className:"routine-time"},At(l)),t==="current"&&o.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,c&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&o.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),o.default.createElement("span",{className:"routine-span"},At(l)," \u2013 ",At(s)," \xB7 ",Dt(e.duration))),!w&&o.default.createElement("button",{className:"link-btn routine-link",onClick:V=>{V.stopPropagation(),Xa.open(zn("routine",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))}function fh({routines:e,setRoutines:t}){let n=Ts(),r=n.hour*60+n.minute,{sorted:a,currentId:i,nextId:l}=Ls(e,r),s=a.find(z=>z.id===i),u=a.find(z=>z.id===l),[c,d]=(0,o.useState)(""),[p,h]=(0,o.useState)(()=>ys(r)),[v,k]=(0,o.useState)(30),[x,T]=_s(),[g,f]=(0,o.useState)([]),[m,y]=(0,o.useState)(!1),w=()=>{let z=c.trim();if(!z){T(),D.error();return}let I=p||ys(r),E=g.map(A=>A.trim()).filter(Boolean);t(A=>[...A,{id:xe(),time:I,label:z,duration:Math.max(5,+v||30),history:[],alternatives:E}]),d(""),h(ys(r)),k(30),f([]),y(!1),D.click()},b=z=>{t(I=>I.filter(E=>E.id!==z)),D.delete()},_=z=>{let I=j(0),E=!(e.find(A=>A.id===z)?.history||[]).includes(I);t(A=>A.map(ee=>{if(ee.id!==z)return ee;let re=(ee.history||[]).includes(I)?ee.history.filter(V=>V!==I):[...ee.history||[],I];return{...ee,history:re.slice(-60)}})),po.propagate("routine",z,E),E?(D.success(),ln.emit("routineDone")):D.click()},N=(z,I)=>t(E=>E.map(A=>A.id===z?{...A,...I}:A)),O=s?lt(s.time)+s.duration:0,L=u?(lt(u.time)-r+1440)%1440||1440:0,W=j(0),ae=a.filter(z=>(z.history||[]).includes(W)).length;return o.default.createElement("div",{className:"task-list routine-list"},o.default.createElement("div",{className:"hero-card"},o.default.createElement("div",{className:"hero-clock-row"},o.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),o.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),o.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),o.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),o.default.createElement("span",{className:"hero-date"},I0()),o.default.createElement("div",{className:"hero-divider"}),s?o.default.createElement("div",{className:"hero-current"},o.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),o.default.createElement("div",{className:"hero-current-name"},o.default.createElement("span",{className:"pulse-dot"}),s.label),o.default.createElement("span",{className:"hero-sub"},"until ",At(O)," \xB7 next: ",u?.label," in ",Dt(L))):o.default.createElement("span",{className:"hero-sub"},"no routines yet")),o.default.createElement(sh,{routines:a,nowMinutes:r,doneToday:ae}),o.default.createElement("div",{className:`composer ${x?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new routine...",value:c,onChange:z=>d(z.target.value),onKeyDown:z=>z.key==="Enter"&&w()}),o.default.createElement("input",{type:"time",className:"time-input",value:p,onChange:z=>h(z.target.value)}),o.default.createElement("button",{type:"button",className:`alt-toggle-btn ${m?"active":""}`,onClick:()=>y(z=>!z),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),o.default.createElement("button",{className:"add-btn",onClick:w,"aria-label":"Add routine"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),m&&o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),g.map((z,I)=>o.default.createElement("div",{className:"alt-composer-row",key:I},o.default.createElement("input",{type:"text",placeholder:`alternative ${I+1}, e.g. "Drawing"`,value:z,onChange:E=>{let A=[...g];A[I]=E.target.value,f(A)},onKeyDown:E=>E.key==="Enter"&&w()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>f(g.filter((E,A)=>A!==I)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>f([...g,""])},"+ another option")),o.default.createElement("div",{className:"duration-chips"},F0.map(z=>o.default.createElement("button",{key:z,className:v===z?"active":"",onClick:()=>k(z)},Dt(z))),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:v,onChange:z=>k(+z.target.value||5)})),a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):a.map((z,I)=>o.default.createElement(ph,{key:z.id,routine:z,index:I,status:z.id===i?"current":z.id===l?"next":"idle",onDelete:b,onToggleToday:_,onSave:N})))}function mh(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,a=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:a,monthLabel:i}}function hh(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function tf(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(j(r))&&n++;return n}function gh(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(j(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var vh=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[j(0),j(-1),j(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[j(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[j(0)]}],yh=[{id:1,name:"Notion Template",dueDate:j(7),tasks:[{id:xe(),text:"Design layout",done:!0},{id:xe(),text:"Write docs",done:!1},{id:xe(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:j(7),tasks:[{id:xe(),text:"Script draft",done:!1},{id:xe(),text:"Record",done:!1}]}];function xh({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:a}=mh(),i=new Set(e||[]),l=j(0),s=Array.from({length:r},(u,c)=>c+1);return o.default.createElement("div",{className:"month-grid-wrap"},o.default.createElement("span",{className:"month-grid-label"},a),o.default.createElement("div",{className:"month-grid"},s.map(u=>{let c=hh(t,n,u);return o.default.createElement("span",{key:u,className:`month-cell ${i.has(c)?"filled":""} ${c===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:c})})))}function kh({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let a=(e.history||[]).includes(j(0)),{streak:i,freezeUsed:l}=qa(e.history),s=tf(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[c,d]=(0,o.useState)(!1),[p,h]=(0,o.useState)(e.icon),[v,k]=(0,o.useState)(e.label),[x,T]=(0,o.useState)(e.weeklyGoal),g=()=>{h(e.icon),k(e.label),T(e.weeklyGoal),d(!0)},f=()=>{let m=v.trim();m&&(r(e.id,{icon:p.trim()||e.icon,label:m,weeklyGoal:Math.max(1,Math.min(7,+x||e.weeklyGoal))}),d(!1))};return c?o.default.createElement("div",{className:"vault-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{className:"duration-input",style:{width:44},value:p,onChange:m=>h(m.target.value),maxLength:2}),o.default.createElement("input",{className:"edit-label",style:{flex:1},value:v,onChange:m=>k(m.target.value),onKeyDown:m=>m.key==="Enter"&&f(),autoFocus:!0})),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:x,onChange:m=>T(m.target.value)}),o.default.createElement("span",{className:"edit-unit"},"x / week")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:f},"save")))):o.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${ur(e.id)}`}},o.default.createElement("div",{className:"vault-card-top"},o.default.createElement("span",{className:"vault-card-icon",style:{color:ur(e.id)}},e.icon),o.default.createElement("div",{className:"vault-card-title"},o.default.createElement("span",{className:"vault-card-label"},e.label),o.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),o.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),o.default.createElement(xh,{history:e.history}),o.default.createElement("div",{className:"vault-card-bottom"},o.default.createElement("div",{className:"vault-card-ring-row"},o.default.createElement(zs,{pct:u,size:34,stroke:3.5,color:ur(e.id)}),o.default.createElement("span",{className:"vault-card-pct"},u,"% ",o.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,l&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("button",{className:"link-btn",onClick:m=>{m.stopPropagation(),Xa.open(zn("vault",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`vault-check ${a?"done":""}`,onClick:()=>t(e.id)},a?"\u2713 completed today":"mark complete today"))}function bh({habits:e,setHabits:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(7),[l,s]=_s(),u=()=>{let h=n.trim();if(!h){s(),D.error();return}t(v=>[...v,{id:xe(),icon:"\u25C6",label:h,weeklyGoal:a,history:[]}]),r(""),i(7),D.click()},c=h=>{t(v=>v.filter(k=>k.id!==h)),D.delete()},d=(h,v)=>t(k=>k.map(x=>x.id===h?{...x,...v}:x)),p=h=>{let v=j(0),k=!(e.find(x=>x.id===h)?.history||[]).includes(v);t(x=>x.map(T=>{if(T.id!==h)return T;let f=(T.history||[]).includes(v)?T.history.filter(m=>m!==v):[...T.history||[],v];return{...T,history:f.slice(-370)}})),po.propagate("vault",h,k),k?(D.success(),ln.emit("vaultDone")):D.click()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"HABIT-STREAK-TRACKING")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(h=>o.default.createElement(kh,{key:h.id,habit:h,onToggleToday:p,onDelete:c,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:h=>r(h.target.value),onKeyDown:h=>h.key==="Enter"&&u()}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(h=>o.default.createElement("button",{key:h,className:a===h?"active":"",onClick:()=>i(h)},h,"x/wk"))))}function wh({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(t.text),c=()=>{let d=s.trim();d&&a(e,t.id,d),l(!1)};return i?o.default.createElement("div",{className:"project-task-row"},o.default.createElement("input",{className:"project-task-edit",value:s,onChange:d=>u(d.target.value),onKeyDown:d=>d.key==="Enter"&&c(),onBlur:c,autoFocus:!0})):o.default.createElement("div",{className:"project-task-row"},o.default.createElement(sf,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),o.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Nh({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:a,onEditTask:i,onSave:l}){let[s,u]=(0,o.useState)(""),c=e.tasks.length,d=e.tasks.filter(b=>b.done).length,p=c?Math.round(d/c*100):0,h=gh(e.dueDate),[v,k]=(0,o.useState)(!1),[x,T]=(0,o.useState)(e.name),[g,f]=(0,o.useState)(e.dueDate||""),m=()=>{let b=s.trim();b&&(n(e.id,b),u(""))},y=()=>{T(e.name),f(e.dueDate||""),k(!0)},w=()=>{let b=x.trim();b&&(l(e.id,{name:b,dueDate:g||null}),k(!1))};return v?o.default.createElement("div",{className:"project-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:x,onChange:b=>T(b.target.value),onKeyDown:b=>b.key==="Enter"&&w(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"date",className:"time-input",value:g,onChange:b=>f(b.target.value)})),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:w},"save")))):o.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${ur(e.id)}`}},o.default.createElement("div",{className:"project-card-top"},o.default.createElement("span",{className:"project-name"},e.name),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:y,"aria-label":"Edit project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),h&&o.default.createElement("span",{className:`project-due ${h.overdue?"overdue":""}`},h.text),o.default.createElement("div",{className:"progress-track small"},o.default.createElement("div",{className:"progress-fill",style:{width:`${p}%`}})),o.default.createElement("span",{className:"vault-card-pct"},d,"/",c," tasks \xB7 ",p,"%"),o.default.createElement("div",{className:"project-tasks"},e.tasks.map(b=>o.default.createElement(wh,{key:b.id,projectId:e.id,task:b,onToggle:r,onDelete:a,onEdit:i}))),o.default.createElement("div",{className:"project-add-task"},o.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:b=>u(b.target.value),onKeyDown:b=>b.key==="Enter"&&m()})))}function Sh({projects:e,setProjects:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),[l,s]=_s(),u=()=>{let x=n.trim();if(!x){s(),D.error();return}t(T=>[...T,{id:xe(),name:x,dueDate:a||null,tasks:[]}]),r(""),i(""),D.click()},c=x=>{t(T=>T.filter(g=>g.id!==x)),D.delete()},d=(x,T)=>t(g=>g.map(f=>f.id===x?{...f,...T}:f)),p=(x,T)=>{t(g=>g.map(f=>f.id===x?{...f,tasks:[...f.tasks,{id:xe(),text:T,done:!1}]}:f)),D.click()},h=(x,T)=>{t(g=>g.map(f=>f.id!==x?f:{...f,tasks:f.tasks.map(m=>m.id===T?{...m,done:!m.done}:m)})),D.success()},v=(x,T)=>{t(g=>g.map(f=>f.id!==x?f:{...f,tasks:f.tasks.filter(m=>m.id!==T)})),D.delete()},k=(x,T,g)=>t(f=>f.map(m=>m.id!==x?m:{...m,tasks:m.tasks.map(y=>y.id===T?{...y,text:g}:y)}));return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"PROJECT-MANAGER")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no projects yet")):e.map(x=>o.default.createElement(Nh,{key:x.id,project:x,onDelete:c,onAddTask:p,onToggleTask:h,onDeleteTask:v,onEditTask:k,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:x=>r(x.target.value),onKeyDown:x=>x.key==="Enter"&&u()}),o.default.createElement("input",{type:"date",className:"time-input",value:a,onChange:x=>i(x.target.value)}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function Eh({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement(bh,{habits:e,setHabits:t}),o.default.createElement(Sh,{projects:n,setProjects:r}))}var Oe=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],fo=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],bg=Oe.reduce((e,t)=>(e[t.key]=fo.filter(n=>n.area===t.key),e),{});var nf="tasksh.subareas.v1",Pp="tasksh.radarmode.v1";function Ch(){let e=Ae(nf,null);return!Array.isArray(e)||!e.length?fo:e.filter(t=>t&&t.key&&t.area&&Oe.some(n=>n.key===t.area))}function pr(e,t){return e.filter(n=>n.area===t)}function fr(e,t){if(t.sub&&e.some(r=>r.key===t.sub&&r.area===t.area))return t.sub;let n=e.find(r=>r.area===t.area);return n?n.key:null}function Ap(e,t,n,r){let a=n.filter(l=>fr(e,l)===t).reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=r.filter(l=>fr(e,l)===t).reduce((l,s)=>l+s.xp*(s.history?.length||0),0);return a-i}function Mh(){let[e,t]=(0,o.useState)(Ch),[n,r]=(0,o.useState)(()=>{try{return localStorage.getItem(Pp)||"subs"}catch{return"subs"}});(0,o.useEffect)(()=>{try{localStorage.setItem(nf,JSON.stringify(e))}catch{}},[e]),(0,o.useEffect)(()=>{try{localStorage.setItem(Pp,n)}catch{}},[n]);let a=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(p=>p.map(h=>h.key===u?{...h,label:d}:h))},[]),i=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(p=>{let h=d.toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,12)||"tag",v=h,k=2;for(;p.some(x=>x.key===v);)v=`${h}${k++}`;return[...p,{key:v,area:u,label:d}]})},[]),l=(0,o.useCallback)(u=>{t(c=>{let d=c.find(p=>p.key===u);return!d||pr(c,d.area).length<=1?c:c.filter(p=>p.key!==u)})},[]),s=(0,o.useCallback)(()=>t(fo),[]);return{subs:e,radarMode:n,setRadarMode:r,renameSub:a,addSub:i,removeSub:l,resetSubs:s}}var Dp=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function ur(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return Dp[Math.abs(t)%Dp.length]}var lo=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function rf(e,t){let n=e.reduce((a,i)=>a+i.xp*(i.history?.length||0),0),r=t.reduce((a,i)=>a+i.xp*(i.history?.length||0),0);return Math.max(0,n-r)}function of(e,t,n){let r=e.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),a=t.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=n.reduce((l,s)=>l+s.cost*(s.claimed?.length||0),0);return Math.max(0,r-a-i)}function Bp(e,t,n){let r=t.filter(i=>i.area===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0),a=n.filter(i=>i.area===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0);return r-a}function Mn(e){return 12.5*(e-1)*(e+6)}function af(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-Mn(n),a=Mn(n+1)-Mn(n);return{level:n,into:r,span:a}}function zh(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[a,i]of t)for(;n>=a;)r+=i,n-=a;return r}function lf(e){if(e<=lo.length)return lo[e-1];let t=e-lo.length+1;return`${lo[lo.length-1]} ${zh(t)}`}var _h=[{id:1,label:"Deep Work",area:"work",xp:40,history:[j(0),j(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[j(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],Th=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],Lh=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function Ph({habit:e,subs:t=fo,onToggleToday:n,onDelete:r,onSave:a}){let i=(e.history||[]).includes(j(0)),[l,s]=(0,o.useState)(0),u=()=>{i||s(N=>N+1)},{streak:c,freezeUsed:d}=qa(e.history),p=Oe.find(N=>N.key===e.area)||Oe[0],[h,v]=(0,o.useState)(!1),[k,x]=(0,o.useState)(e.label),[T,g]=(0,o.useState)(e.area),[f,m]=(0,o.useState)(()=>fr(t,e)),[y,w]=(0,o.useState)(e.xp),b=()=>{x(e.label),g(e.area),m(fr(t,e)),w(e.xp),v(!0)},_=()=>{let N=k.trim();N&&(a(e.id,{label:N,area:T,sub:f,xp:Math.max(1,+y||e.xp)}),v(!1))};return h?o.default.createElement("div",{className:"quest-habit-card good editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:k,onChange:N=>x(N.target.value),onKeyDown:N=>N.key==="Enter"&&_(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},Oe.map(N=>o.default.createElement("button",{key:N.key,type:"button",className:`area-chip ${T===N.key?"active":""}`,style:{"--ac":N.color},onClick:()=>{g(N.key);let O=pr(t,N.key);m(O.length?O[0].key:null)}},N.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},pr(t,T).map(N=>o.default.createElement("button",{key:N.key,type:"button",className:`sub-chip ${f===N.key?"active":""}`,onClick:()=>m(N.key)},N.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:y,onChange:N=>w(N.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>v(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:_},"save")))):o.default.createElement("div",{className:`quest-habit-card good ${l?"just-completed":""}`,key:`g${e.id}`},l>0&&o.default.createElement("span",{className:"xp-pop",key:l},"+",e.xp),o.default.createElement("span",{className:"area-dot",style:{background:p.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",p.label,c>0?` \xB7 \u{1F525}${c}${d?" \u2744\uFE0F":""}`:"")),o.default.createElement("button",{className:"link-btn",onClick:N=>{N.stopPropagation(),Xa.open(zn("good",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`quest-check ${i?"done":""}`,onClick:()=>{u(),n(e.id)},"aria-label":"Mark done today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:i?0:24,transition:"stroke-dashoffset 220ms ease"}}))),o.default.createElement("button",{className:"vault-card-edit",onClick:b,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Ah({habit:e,subs:t=fo,onToggleToday:n,onDelete:r,onSave:a}){let i=(e.history||[]).includes(j(0)),l=Oe.find(y=>y.key===e.area)||Oe[0],s=tf(e.history),[u,c]=(0,o.useState)(!1),[d,p]=(0,o.useState)(e.label),[h,v]=(0,o.useState)(e.area),[k,x]=(0,o.useState)(()=>fr(t,e)),[T,g]=(0,o.useState)(e.xp),f=()=>{p(e.label),v(e.area),x(fr(t,e)),g(e.xp),c(!0)},m=()=>{let y=d.trim();y&&(a(e.id,{label:y,area:h,sub:k,xp:Math.max(1,+T||e.xp)}),c(!1))};return u?o.default.createElement("div",{className:"quest-habit-card bad editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:d,onChange:y=>p(y.target.value),onKeyDown:y=>y.key==="Enter"&&m(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},Oe.map(y=>o.default.createElement("button",{key:y.key,type:"button",className:`area-chip ${h===y.key?"active":""}`,style:{"--ac":y.color},onClick:()=>{v(y.key);let w=pr(t,y.key);x(w.length?w[0].key:null)}},y.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},pr(t,h).map(y=>o.default.createElement("button",{key:y.key,type:"button",className:`sub-chip ${k===y.key?"active":""}`,onClick:()=>x(y.key)},y.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:T,onChange:y=>g(y.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>c(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:m},"save")))):o.default.createElement("div",{className:"quest-habit-card bad"},o.default.createElement("span",{className:"area-dot",style:{background:l.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",l.label," \xB7 ",s,"x this week")),o.default.createElement("button",{className:`quest-check bad-check ${i?"done":""}`,onClick:()=>n(e.id),"aria-label":"Log slip today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),o.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Dh({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(e.label),[c,d]=(0,o.useState)(e.cost),p=()=>{u(e.label),d(e.cost),l(!0)},h=()=>{let v=s.trim();v&&(a(e.id,{label:v,cost:Math.max(1,+c||e.cost)}),l(!1))};return i?o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:s,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&h(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:c,onChange:v=>d(v.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP cost")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:h},"save")))):o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"reward-top"},o.default.createElement("span",{className:"reward-label"},e.label),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),o.default.createElement("span",{className:"reward-cost"},e.cost," XP"),o.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&o.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function Bh({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:a,setRewards:i,tagCtl:l}){let[s,u]=(0,o.useState)("all"),[c,d]=(0,o.useState)(!1),p=l.subs,h=(0,o.useMemo)(()=>rf(e,n),[e,n]),v=(0,o.useMemo)(()=>of(e,n,a),[e,n,a]),{level:k,into:x,span:T}=af(h),g=Math.round(x/T*100),f=S=>{let F=j(0),Q=!(e.find(U=>U.id===S)?.history||[]).includes(F);if(t(U=>U.map(K=>{if(K.id!==S)return K;let Bt=(K.history||[]).includes(F)?K.history.filter(It=>It!==F):[...K.history||[],F];return{...K,history:Bt.slice(-370)}})),po.propagate("good",S,Q),Q){D.success(),ln.emit("habitDone");let U=cr().hour;U<6&&uo({earlyFinish:!0}),U>=0&&U<4&&uo({lateFinish:!0})}else D.click()},m=S=>{let F=j(0),Q=!(n.find(U=>U.id===S)?.history||[]).includes(F);r(U=>U.map(K=>{if(K.id!==S)return K;let Bt=(K.history||[]).includes(F)?K.history.filter(It=>It!==F):[...K.history||[],F];return{...K,history:Bt.slice(-370)}})),Q?(D.error(),ln.emit("badHabit")):D.click()},y=S=>{t(F=>F.filter(Q=>Q.id!==S)),D.delete()},w=S=>{r(F=>F.filter(Q=>Q.id!==S)),D.delete()},b=(S,F)=>t(Q=>Q.map(U=>U.id===S?{...U,...F}:U)),_=(S,F)=>r(Q=>Q.map(U=>U.id===S?{...U,...F}:U)),N=S=>{let F=j(0);i(Q=>Q.map(U=>U.id===S?{...U,claimed:[...U.claimed||[],F]}:U)),D.success(),ln.emit("rewardClaimed")},O=S=>{i(F=>F.filter(Q=>Q.id!==S)),D.delete()},L=(S,F)=>i(Q=>Q.map(U=>U.id===S?{...U,...F}:U)),[W,ae]=(0,o.useState)(""),[z,I]=(0,o.useState)("work"),[E,A]=(0,o.useState)(20),[ee,Se]=(0,o.useState)(""),[re,V]=(0,o.useState)("work"),[Y,pe]=(0,o.useState)(20),[Ee,ke]=(0,o.useState)(""),[Ze,sn]=(0,o.useState)(100),je=()=>{let S=W.trim();S&&(t(F=>[...F,{id:xe(),label:S,area:z,xp:+E||10,history:[]}]),ae(""),D.click())},$=()=>{let S=ee.trim();S&&(r(F=>[...F,{id:xe(),label:S,area:re,xp:+Y||10,history:[]}]),Se(""),D.click())},X=()=>{let S=Ee.trim();S&&(i(F=>[...F,{id:xe(),label:S,cost:+Ze||50,claimed:[]}]),ke(""),D.click())},ie=(0,o.useMemo)(()=>l.radarMode==="areas"?Oe.map(S=>({key:S.key,label:S.label,color:S.color,value:Bp(S.key,e,n)})):p.map(S=>({key:S.key,label:S.label,color:(Oe.find(F=>F.key===S.area)||{}).color,value:Ap(p,S.key,e,n)})),[l.radarMode,p,e,n]),Ce=(0,o.useMemo)(()=>{let S=Math.max(...Oe.map(K=>Bp(K.key,e,n)),0),F=Math.max(...p.map(K=>Ap(p,K.key,e,n)),0),Q=Math.max(S,F,1),U=Q<=100?25:Q<=500?50:100;return Math.ceil(Q/U)*U},[p,e,n]),ho=(0,o.useMemo)(()=>{if(l.radarMode==="areas")return 0;let S=new Set(p.map(K=>K.key)),F=K=>!K.sub||!S.has(K.sub),Q=e.filter(F).reduce((K,Re)=>K+Re.xp*(Re.history?.length||0),0),U=n.filter(F).reduce((K,Re)=>K+Re.xp*(Re.history?.length||0),0);return Q+U},[l.radarMode,p,e,n]),go=s==="all"?e:e.filter(S=>S.area===s),Ya=s==="all"?n:n.filter(S=>S.area===s),De=e.reduce((S,F)=>S+F.xp*(F.history?.length||0),0),Ln=n.reduce((S,F)=>S+F.xp*(F.history?.length||0),0),Pn=a.reduce((S,F)=>S+F.cost*(F.claimed?.length||0),0);return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"hero-card hero-card-viz"},o.default.createElement("div",{className:"hero-viz-row"},o.default.createElement(zs,{pct:g,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${k}`,sublabel:lf(k)}),o.default.createElement("div",{className:"hero-viz-stats"},o.default.createElement("span",{className:"hero-xp-total"},o.default.createElement(gt,{value:h})," ",o.default.createElement("small",null,"XP")),Pn>0&&o.default.createElement("span",{className:"hero-xp-spend"},"\u25C9 ",v," to spend"),o.default.createElement("span",{className:"hero-xp-sub"},x,"/",T," to next level"),o.default.createElement("div",{className:"hero-xp-split"},o.default.createElement("span",{className:"hero-xp-earned"},"+",o.default.createElement(gt,{value:De})),o.default.createElement("span",{className:"hero-xp-lost"},"\u2212",o.default.createElement(gt,{value:Ln})))))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"LIFE-AREAS")),o.default.createElement("div",{className:"radar-card"},o.default.createElement("div",{className:"radar-controls"},o.default.createElement("div",{className:"radar-mode"},o.default.createElement("button",{className:l.radarMode==="areas"?"active":"",onClick:()=>{l.setRadarMode("areas"),D.click()}},"4 areas"),o.default.createElement("button",{className:l.radarMode==="subs"?"active":"",onClick:()=>{l.setRadarMode("subs"),D.click()}},p.length," tags")),o.default.createElement("button",{className:"radar-edit",onClick:()=>d(!0)},"edit tags")),o.default.createElement(ah,{axes:ie,size:252,maxValue:Ce}),ho>0&&o.default.createElement("div",{className:"radar-note"},ho," XP from untagged habits isn't plotted \u2014 tag them to include it")),(De>0||Ln>0||Pn>0)&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"XP SOURCE")),o.default.createElement("div",{className:"donut-card"},o.default.createElement(ef,{size:120,stroke:16,centerLabel:v,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:De,color:"#5EEAD4"},{key:"lost",label:"Lost",value:Ln,color:"#F0576B"},{key:"spent",label:"Spent",value:Pn,color:"#F5A623"}]}),o.default.createElement("div",{className:"donut-legend"},o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),o.default.createElement("span",null,"Earned from good habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(gt,{value:De}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),o.default.createElement("span",null,"Lost to bad habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(gt,{value:Ln}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F5A623"}}),o.default.createElement("span",null,"Spent on rewards"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(gt,{value:Pn}))),o.default.createElement("div",{className:"donut-legend-row donut-legend-total"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"transparent"}}),o.default.createElement("span",null,"Level progress (spending doesn't count)"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(gt,{value:h})))))),o.default.createElement("div",{className:"area-filter"},o.default.createElement("button",{className:s==="all"?"active":"",onClick:()=>u("all")},"all"),Oe.map(S=>o.default.createElement("button",{key:S.key,className:s===S.key?"active":"",style:{"--ac":S.color},onClick:()=>{u(S.key),D.click()}},S.label))),c&&o.default.createElement(jh,{tagCtl:l,onClose:()=>d(!1)}),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"GOOD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no good habits yet")):go.map(S=>o.default.createElement(Ph,{key:S.id,habit:S,subs:p,onToggleToday:f,onDelete:y,onSave:b}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new good habit...",value:W,onChange:S=>ae(S.target.value),onKeyDown:S=>S.key==="Enter"&&je()}),o.default.createElement("button",{className:"add-btn",onClick:je,"aria-label":"Add good habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},Oe.map(S=>o.default.createElement("button",{key:S.key,className:z===S.key?"active":"",onClick:()=>I(S.key)},S.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:E,onChange:S=>A(+S.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"BAD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},n.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no bad habits tracked")):Ya.map(S=>o.default.createElement(Ah,{key:S.id,habit:S,subs:p,onToggleToday:m,onDelete:w,onSave:_}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:ee,onChange:S=>Se(S.target.value),onKeyDown:S=>S.key==="Enter"&&$()}),o.default.createElement("button",{className:"add-btn",onClick:$,"aria-label":"Add bad habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},Oe.map(S=>o.default.createElement("button",{key:S.key,className:re===S.key?"active":"",onClick:()=>V(S.key)},S.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:Y,onChange:S=>pe(+S.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"REWARD-CENTER")),o.default.createElement("div",{className:"vault-grid"},a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no rewards set up")):a.map(S=>o.default.createElement(Dh,{key:S.id,reward:S,canClaim:v>=S.cost,onClaim:N,onDelete:O,onSave:L}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new reward...",value:Ee,onChange:S=>ke(S.target.value),onKeyDown:S=>S.key==="Enter"&&X()}),o.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:Ze,onChange:S=>sn(+S.target.value||50)}),o.default.createElement("button",{className:"add-btn",onClick:X,"aria-label":"Add reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var Ih=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function Fh(e=1e3*30){let[t,n]=(0,o.useState)(Date.now());return(0,o.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function $h(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let a=Math.floor(r/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function sf({checked:e,onChange:t,color:n}){return o.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function Oh({task:e,now:t,onToggle:n,onDelete:r,index:a}){let[i,l]=(0,o.useState)(!1),s=(0,o.useRef)(null),u=Va.find(d=>d.key===e.priority)||Va[0];(0,o.useEffect)(()=>()=>{s.current&&clearTimeout(s.current)},[]);let c=()=>{s.current||(l(!0),s.current=setTimeout(()=>r(e.id),220))};return o.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${a*35}ms`}},o.default.createElement(sf,{checked:e.done,onChange:()=>n(e.id),color:u.color}),o.default.createElement("div",{className:"task-main"},o.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),o.default.createElement("span",{className:"task-meta"},o.default.createElement("span",{className:"prio-dot",style:{background:u.color}}),o.default.createElement("span",{className:"prio-label"},u.label),o.default.createElement("span",{className:"dot-sep"},"\xB7"),o.default.createElement("span",null,$h(e.createdAt,t)))),o.default.createElement("button",{className:"del-btn",onClick:c,"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var Ip="tasksh.tasks.v1",Fp="tasksh.routines.v1",$p="tasksh.vaulthabits.v1",Op="tasksh.projects.v1",jp="tasksh.goodhabits.v1",Up="tasksh.badhabits.v1",Wp="tasksh.rewards.v1",Jp="tasksh.deviceid.v1",ws="tasksh.notifyenabled.v1",Cs="tasksh.aikey.v1";function jh({tagCtl:e,onClose:t}){let[n,r]=(0,o.useState)(null),[a,i]=(0,o.useState)(""),l=s=>{a.trim()&&(e.addSub(s,a),D.success()),i(""),r(null)};return o.default.createElement("div",{className:"sheet-backdrop",onClick:t},o.default.createElement("div",{className:"sheet",onClick:s=>s.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"edit tags"),o.default.createElement("button",{className:"sheet-close",onClick:t,"aria-label":"Close"},"\xD7")),Oe.map(s=>{let u=pr(e.subs,s.key);return o.default.createElement("div",{key:s.key,className:"tag-group"},o.default.createElement("div",{className:"tag-group-head"},o.default.createElement("span",{className:"tag-dot",style:{background:s.color}}),o.default.createElement("span",{className:"tag-group-name"},s.label)),u.map(c=>o.default.createElement("div",{key:c.key,className:"tag-row"},o.default.createElement("input",{className:"tag-input",defaultValue:c.label,maxLength:18,onBlur:d=>e.renameSub(c.key,d.target.value),onKeyDown:d=>{d.key==="Enter"&&d.target.blur()}}),o.default.createElement("button",{className:"tag-del",disabled:u.length<=1,title:u.length<=1?"each area needs at least one tag":"remove",onClick:()=>{e.removeSub(c.key),D.delete()}},"\xD7"))),n===s.key?o.default.createElement("div",{className:"tag-row"},o.default.createElement("input",{className:"tag-input",autoFocus:!0,placeholder:"new tag\u2026",maxLength:18,value:a,onChange:c=>i(c.target.value),onBlur:()=>l(s.key),onKeyDown:c=>{c.key==="Enter"&&l(s.key),c.key==="Escape"&&(i(""),r(null))}})):o.default.createElement("button",{className:"tag-add",onClick:()=>{i(""),r(s.key)}},"+ add tag"))}),o.default.createElement("div",{className:"sheet-foot"},"habits keep their tag when you rename it",o.default.createElement("button",{className:"tag-reset",onClick:()=>{e.resetSubs(),D.click()}},"reset to defaults"))))}function Uh({selfRef:e,data:t,links:n,setLinks:r,onClose:a}){let[i,l]=(0,o.useState)(!1),s=wp(e,t),u=Xp(n,e),c=(0,o.useMemo)(()=>[...t.routines.map(p=>({ref:zn("routine",p.id),label:p.label,kind:"routine"})),...t.goodHabits.map(p=>({ref:zn("good",p.id),label:p.label,kind:"good"})),...t.vaultHabits.map(p=>({ref:zn("vault",p.id),label:p.label,kind:"vault"}))].filter(p=>p.ref!==e&&!u.includes(p.ref)),[t,e,u]);return o.default.createElement("div",{className:"sheet-backdrop",onClick:a},o.default.createElement("div",{className:"sheet",onClick:d=>d.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"links \xB7 ",s?.label||"item"),o.default.createElement("button",{className:"sheet-close",onClick:a,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"link-intro"},"ticking any of these completes all of them, both ways."),u.length===0?o.default.createElement("div",{className:"link-empty"},"not linked to anything yet"):o.default.createElement("div",{className:"link-list"},u.map(d=>{let p=wp(d,t);return o.default.createElement("div",{key:d,className:`link-row ${p?"":"stale"}`},o.default.createElement("span",{className:"link-kind"},p?p.meta:"missing"),o.default.createElement("span",{className:"link-label"},p?p.label:"deleted item"),o.default.createElement("button",{className:"link-remove",onClick:()=>{r(h=>j0(h,e,d)),D.delete()}},"unlink"))})),i?o.default.createElement("div",{className:"link-picker"},c.length===0?o.default.createElement("div",{className:"link-empty"},"nothing else to link to"):c.map(d=>o.default.createElement("button",{key:d.ref,className:"link-candidate",onClick:()=>{r(p=>O0(p,e,d.ref)),l(!1),D.success()}},o.default.createElement("span",{className:"link-kind"},Gp[d.kind].label),o.default.createElement("span",{className:"link-label"},d.label),o.default.createElement("span",{className:"link-plus"},"+")))):o.default.createElement("button",{className:"link-add-btn",onClick:()=>l(!0)},"+ link to something")))}function Wh({id:e,onDone:t}){let n=Yp(e);return(0,o.useEffect)(()=>{let r=setTimeout(t,4200);return()=>clearTimeout(r)},[e,t]),n?o.default.createElement("div",{className:"ach-toast",onClick:t},o.default.createElement("span",{className:"ach-toast-icon"},n.icon),o.default.createElement("span",{className:"ach-toast-body"},o.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),o.default.createElement("span",{className:"ach-toast-name"},n.name),o.default.createElement("span",{className:"ach-toast-desc"},n.desc)),o.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins)):null}function Jh({level:e,coins:t,unlockedTheme:n,extraThemes:r=0,evolvedTo:a,onDone:i}){let l=dr.find(u=>u.unlockLevel>e),s=Ns(e);return o.default.createElement("div",{className:"lvl-backdrop",onClick:i},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"lvl-card",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"lvl-kicker"},"level up"),o.default.createElement("div",{className:"lvl-num"},e),o.default.createElement("div",{className:"lvl-title"},lf(e)),o.default.createElement("div",{className:"lvl-rewards"},o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),o.default.createElement("span",{className:"lvl-reward-text"},"+",t," coins")),n&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),o.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",o.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),a!=null&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),o.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),o.default.createElement("div",{className:"lvl-next"},l?`next theme at level ${l.unlockLevel}`:"all themes unlocked",s?` \xB7 next form at ${s.minLevel}`:""),o.default.createElement("button",{className:"evo-btn",onClick:i},"continue")))}function Vh({earned:e,coins:t}){let n=new Set(e),r=co.filter(i=>!i.hidden||n.has(i.id)),a=co.filter(i=>i.hidden&&!n.has(i.id)).length;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"ach-head"},o.default.createElement("span",{className:"sheet-title"},"achievements"),o.default.createElement("span",{className:"ach-count"},n.size,"/",co.length," \xB7 \u25C9 ",t)),o.default.createElement("div",{className:"ach-grid"},r.map(i=>{let l=n.has(i.id);return o.default.createElement("div",{key:i.id,className:`ach-card ${l?"got":""}`},o.default.createElement("span",{className:"ach-icon"},l?i.icon:"\xB7"),o.default.createElement("span",{className:"ach-name"},i.name),o.default.createElement("span",{className:"ach-desc"},i.desc),o.default.createElement("span",{className:"ach-coins"},"\u25C9 ",i.coins))})),a>0&&o.default.createElement("div",{className:"ach-hidden-note"},a," hidden achievement",a===1?"":"s"," left to discover"))}function Hh({ctl:e,level:t,totalXP:n,earned:r=[],coins:a=0,onClose:i}){let l=Mn(t+1),s=Mn(t);return o.default.createElement("div",{className:"sheet-backdrop",onClick:i},o.default.createElement("div",{className:"sheet",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"themes"),o.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"theme-grid"},e.themes.map(u=>{let c=Es(u,t),d=e.themeId===u.id,p=Mn(u.unlockLevel),h=Mn(Math.max(1,u.unlockLevel-1)),v=c?100:Math.max(0,Math.min(99,Math.round((n-h)/(p-h)*100)));return o.default.createElement("button",{key:u.id,className:`theme-card ${d?"active":""} ${c?"":"locked"}`,onClick:()=>{c?(e.setThemeId(u.id),D.success()):D.error()},disabled:!c},o.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${u.colors.bg} 0%, ${u.colors.panel} 45%, ${u.colors.accent} 100%)`}},!c&&o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},o.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),d&&o.default.createElement("span",{className:"theme-active-dot"})),o.default.createElement("span",{className:"theme-name"},u.name),c?o.default.createElement("span",{className:"theme-blurb"},u.blurb):o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{className:"theme-req"},"level ",u.unlockLevel),o.default.createElement("span",{className:"theme-bar"},o.default.createElement("span",{className:"theme-bar-fill",style:{width:`${v}%`}})),o.default.createElement("span",{className:"theme-pct"},v,"%")))})),o.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,l-n)," XP to level ",t+1),o.default.createElement("div",{className:"ach-section"},o.default.createElement(Vh,{earned:r,coins:a})),o.default.createElement("div",{className:"calm-toggle-row"},o.default.createElement("div",null,o.default.createElement("div",{className:"calm-toggle-label"},"ambient background"),o.default.createElement("div",{className:"calm-toggle-hint"},e.ambience?"drifting gradients and particles":"flat black, like the old build")),o.default.createElement("button",{className:`calm-switch ${e.ambience?"on":""}`,onClick:()=>{e.setAmbience(!e.ambience),D.click()},"aria-pressed":e.ambience},o.default.createElement("span",{className:"calm-knob"}))),o.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",o.default.createElement("b",null,e.phase.label))))}function Ua({label:e,value:t,color:n}){return o.default.createElement("div",{className:"pet-stat"},o.default.createElement("div",{className:"pet-stat-top"},o.default.createElement("span",{className:"pet-stat-label"},e),o.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),o.default.createElement("div",{className:"pet-stat-track"},o.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function Kh({from:e,to:t,petName:n,onDone:r}){(0,o.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let a=Tn[t];return o.default.createElement("div",{className:"evo-backdrop",onClick:r},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},o.default.createElement("div",{className:"evo-kicker"},"evolution"),o.default.createElement("div",{className:"evo-stage-row"},o.default.createElement("div",{className:"evo-old"},o.default.createElement(Ss,{stage:e,mood:"content",size:72,animate:!1})),o.default.createElement("span",{className:"evo-arrow"},"\u2192"),o.default.createElement("div",{className:"evo-new"},o.default.createElement(Ss,{stage:t,mood:"joyful",size:132,evolving:!0}))),o.default.createElement("div",{className:"evo-name"},n," became ",o.default.createElement("b",null,a.name)),o.default.createElement("div",{className:"evo-title"},a.title),o.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}var mo="https://tasksh-notify.techcraftor.workers.dev",Gh="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function qh(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let i=0;i<r.length;i++)a[i]=r.charCodeAt(i);return a}function Ps(){let e=localStorage.getItem(Jp);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Jp,e)),e}async function Xh(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qh(Gh)}));let r=Ps();if(!(await fetch(`${mo}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function Yh(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=Ps();try{await fetch(`${mo}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function Vp(e){let t=Ps();try{await fetch(`${mo}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}var Ka=[{id:"gemini",label:"Gemini",test:e=>/^AIza/.test(e),where:"aistudio.google.com/apikey",free:"~1000 req/day",shared:!0},{id:"groq",label:"Groq",test:e=>/^gsk_/.test(e),where:"console.groq.com",free:"~1000 req/day, fastest"},{id:"cerebras",label:"Cerebras",test:e=>/^csk-/.test(e),where:"cloud.cerebras.ai",free:"1M tokens/day"},{id:"nvidia",label:"NVIDIA NIM",test:e=>/^nvapi-/.test(e),where:"build.nvidia.com",free:"40 req/min, 1000 credits"},{id:"mistral",label:"Mistral",test:()=>!1,prefixed:!0,where:"console.mistral.ai",free:"paste as mistral:YOUR_KEY"},{id:"openrouter",label:"OpenRouter",test:e=>/^sk-or-/.test(e),where:"openrouter.ai/keys",free:"50 req/day"},{id:"openai",label:"OpenAI",test:e=>/^sk-/.test(e),where:"platform.openai.com"}];function so(e){let t=String(e||"").trim(),n=t.match(/^([a-z][a-z0-9]*):(.+)$/i);if(n){let r=Ka.find(a=>a.id===n[1].toLowerCase());if(r)return r}return Ka.find(r=>r.test(t))||null}var uf="tasksh.aikeys.v1";function _n(){try{let e=JSON.parse(localStorage.getItem(uf)||"null");if(Array.isArray(e)&&e.length)return e.filter(Boolean);let t=localStorage.getItem(Cs);return t?[t]:[]}catch{return[]}}function As(e){let t=[...new Set(e.map(n=>String(n).trim()).filter(Boolean))].slice(0,10);try{localStorage.setItem(uf,JSON.stringify(t)),t.length?localStorage.setItem(Cs,t[0]):localStorage.removeItem(Cs)}catch{}}function Qh(e){let t=String(e||"").trim();if(!t)return _n();let n=[..._n(),t];return As(n),_n()}function Zh(e){let t=_n().filter(n=>n!==e);return As(t),t}function Rh(){return _n()[0]||""}function eg(e){As(e?[e]:[])}function Ds(e){if(!e)return"";let t=String(e).match(/^([a-z][a-z0-9]*:)(.+)$/i);return t&&Ka.some(n=>n.id===t[1].slice(0,-1).toLowerCase())?t[1]+Ds(t[2]):e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`}var Ga=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function tg(e){let t=await fetch(`${mo}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function ng(e,t,n,r,a){let i=await fetch(`${mo}/companion`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,data:t,context:n,log:r,apiKey:a,apiKeys:_n()})}),l=null;try{l=await i.json()}catch{}if(!i.ok){let s=l&&l.error;throw s==="no_key"||s==="bad_key"?new Ga(l&&l.message||"key rejected"):new Error(l&&l.message||`request failed (${i.status})`)}return{reply:l&&l.reply||"\u2026",actions:l&&l.actions||[]}}var rg=["how am I doing?","add a 30 min reading routine before bed","what am I neglecting?","my evenings are too packed"];function Hp(e,t){let n=(r,a)=>(r||[]).find(i=>i.id===a);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${At(lt(e.time))} \xB7 ${e.label} (${Dt(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),a=[];return e.time!==void 0&&e.time!==r?.time&&a.push(`${At(lt(r?.time||"00:00"))} \u2192 ${At(lt(e.time))}`),e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&a.push(`${Dt(r?.duration||0)} \u2192 ${Dt(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${a.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),a=[];return e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&a.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${a.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function og(e,t,n){let{routines:r,vaultHabits:a,goodHabits:i,badHabits:l,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let c of e)switch(c.op){case"add_routine":r=[...r,{id:xe(),time:c.time,label:c.label,duration:c.duration,history:[],...c.alternatives?.length?{alternatives:c.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(d=>d.id===c.id?{...d,...c.time!==void 0?{time:c.time}:{},...c.label!==void 0?{label:c.label}:{},...c.duration!==void 0?{duration:c.duration}:{}}:d),u.add("routines");break;case"delete_routine":r=r.filter(d=>d.id!==c.id),u.add("routines");break;case"add_vault_habit":a=[...a,{id:xe(),icon:c.icon,label:c.label,weeklyGoal:c.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":a=a.map(d=>d.id===c.id?{...d,...c.label!==void 0?{label:c.label}:{},...c.weeklyGoal!==void 0?{weeklyGoal:c.weeklyGoal}:{}}:d),u.add("vaultHabits");break;case"delete_vault_habit":a=a.filter(d=>d.id!==c.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:xe(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(d=>d.id!==c.id),u.add("goodHabits");break;case"add_bad_habit":l=[...l,{id:xe(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":l=l.filter(d=>d.id!==c.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:xe(),label:c.label,cost:c.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(d=>d.id!==c.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(a),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(l),u.has("rewards")&&n.setRewards(s)}function ag({petCtl:e,state:t,setters:n,ctx:r,showDataMsg:a}){let{pet:i,form:l,mood:s,nudge:u,remember:c,rename:d}=e,[p,h]=(0,o.useState)(()=>Rh()),[v,k]=(0,o.useState)(!1),[x,T]=(0,o.useState)(null),[g,f]=(0,o.useState)(""),[m,y]=(0,o.useState)(!1),[w,b]=(0,o.useState)(0),[_,N]=(0,o.useState)(null),[O,L]=(0,o.useState)(null),[W,ae]=(0,o.useState)(()=>new Set),[z,I]=(0,o.useState)(!1),[E,A]=(0,o.useState)(i.name),[ee,Se]=(0,o.useState)(!0),re=(0,o.useRef)(null),V=(0,o.useRef)(0),Y=(0,o.useMemo)(()=>G0(r),[r]);(0,o.useEffect)(()=>{if(!m){b(0);return}let $=Date.now(),X=setInterval(()=>b((Date.now()-$)/1e3),100);return()=>clearInterval(X)},[m]),(0,o.useEffect)(()=>{re.current&&(re.current.scrollTop=re.current.scrollHeight)},[i.log,O,m]);let pe=async $=>{let X=($??g).trim();if(!X||m)return;let ie=Date.now()-V.current;if(ie<3e3){N(`give me a second \u2014 ${Math.ceil((3e3-ie)/1e3)}s`);return}if(f(""),c("user",X),u("chat"),D.click(),!p){c("pet","i can hear you, but i can't say much yet. connect an ai key and i can really talk \u2014 and change things for you."),k(!0);return}V.current=Date.now(),y(!0),N(null),L(null),ae(new Set);try{let Ce=await ng(X,{routines:t.routines,vaultHabits:t.vaultHabits,goodHabits:t.goodHabits,badHabits:t.badHabits,rewards:t.rewards,totalXP:t.totalXP},q0(r),i.log||[],p);c("pet",Ce.reply),Ce.actions.length&&(L(Ce),D.success())}catch(Ce){Ce instanceof Ga?(eg(""),h(""),T(Ce.message),k(!0),c("pet","my link to the wider world got rejected. mind checking the key?")):(c("pet","couldn't reach far enough to answer that. try again in a moment."),N(Ce.message||null)),D.error()}finally{y(!1)}},Ee=$=>ae(X=>{let ie=new Set(X);return ie.has($)?ie.delete($):ie.add($),ie}),ke=O?O.actions.filter(($,X)=>!W.has(X)):[],Ze=()=>{ke.length&&(og(ke,t,n),D.success(),u("chat"),a("success",`applied ${ke.length} change${ke.length===1?"":"s"}`),c("pet",`done \u2014 ${ke.length} change${ke.length===1?"":"s"} applied.`),L(null),ae(new Set))},sn=()=>{D.whoosh(),c("pet","left it as it was."),L(null),ae(new Set)};if(v)return o.default.createElement(ig,{initialError:x,onCancel:()=>k(!1),onSaved:($,X,ie={})=>{h($),T(null),ie.keepOpen||k(!1),a("success",X||"connected")}});let je=ke.reduce(($,X)=>{let ie=Hp(X,t).kind;return $[ie]=($[ie]||0)+1,$},{});return o.default.createElement("div",{className:"task-list companion-scroll"},o.default.createElement("div",{className:"cmp-hero"},o.default.createElement(Ss,{stage:l.stage,mood:s.key,size:132}),o.default.createElement("div",{className:"cmp-id"},z?o.default.createElement("input",{className:"pet-name-input",value:E,autoFocus:!0,maxLength:14,onChange:$=>A($.target.value),onBlur:()=>{d(E),I(!1)},onKeyDown:$=>{$.key==="Enter"&&(d(E),I(!1))}}):o.default.createElement("button",{className:"pet-name",onClick:()=>{A(i.name),I(!0)}},i.name),o.default.createElement("span",{className:"pet-form"},l.name," \xB7 ",s.label)),o.default.createElement("button",{className:"cmp-stats-toggle",onClick:()=>Se($=>!$)},ee?"stats":"hide")),!ee&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"pet-stats"},o.default.createElement(Ua,{label:"happiness",value:i.happiness,color:"var(--accent)"}),o.default.createElement(Ua,{label:"energy",value:i.energy,color:"var(--accent2)"}),o.default.createElement(Ua,{label:"friendship",value:i.friendship,color:"var(--accent)"}),o.default.createElement(Ua,{label:"intelligence",value:i.intelligence,color:"var(--accent2)"})),o.default.createElement("div",{className:"pet-next"},Qp(i.friendship),Ns(r.level)?` \xB7 next form at level ${Ns(r.level).minLevel}`:" \xB7 final form")),o.default.createElement("div",{className:"cmp-chat",ref:re},o.default.createElement("div",{className:"pet-msg pet cmp-greeting"},Y),(i.log||[]).map(($,X)=>o.default.createElement("div",{key:X,className:`pet-msg ${$.role}`},$.text)),m&&o.default.createElement("div",{className:"pet-msg pet thinking"},o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),w>=1&&o.default.createElement("span",{className:"cmp-elapsed"},w.toFixed(1),"s")),O&&O.actions.length>0&&o.default.createElement("div",{className:"cmp-diff-wrap"},o.default.createElement("div",{className:"ai-diff-head"},o.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),o.default.createElement("span",{className:"ai-diff-counts"},je.add?o.default.createElement("span",{className:"c-add"},"+",je.add):null,je.edit?o.default.createElement("span",{className:"c-edit"},"~",je.edit):null,je.remove?o.default.createElement("span",{className:"c-remove"},"\u2212",je.remove):null)),o.default.createElement("div",{className:"ai-diff"},O.actions.map(($,X)=>{let ie=Hp($,t),Ce=W.has(X);return o.default.createElement("button",{key:X,className:`ai-diff-row ${ie.kind} ${Ce?"skipped":""}`,onClick:()=>Ee(X),title:Ce?"click to include":"click to skip"},o.default.createElement("span",{className:"ai-sign"},ie.kind==="add"?"+":ie.kind==="remove"?"\u2212":"~"),o.default.createElement("span",{className:"ai-surface"},ie.surface),o.default.createElement("span",{className:"ai-diff-text"},ie.text),o.default.createElement("span",{className:"ai-skip-mark"},Ce?"skipped":""))})),o.default.createElement("div",{className:"ai-actions"},o.default.createElement("button",{className:"ai-apply",onClick:Ze,disabled:!ke.length},"apply ",ke.length||""),o.default.createElement("button",{className:"ai-discard",onClick:sn},"discard")),o.default.createElement("div",{className:"ai-hint"},"tap any row to skip it"))),_&&o.default.createElement("div",{className:"ai-error cmp-error"},_),(i.log||[]).length===0&&!m&&o.default.createElement("div",{className:"ai-chips cmp-chips"},rg.map($=>o.default.createElement("button",{key:$,className:"ai-chip",onClick:()=>pe($)},$))),o.default.createElement("div",{className:"pet-composer"},o.default.createElement("input",{className:"pet-input",placeholder:p?`talk to ${i.name}\u2026`:`say hello to ${i.name}\u2026`,value:g,onChange:$=>f($.target.value),onKeyDown:$=>$.key==="Enter"&&pe(),disabled:m}),o.default.createElement("button",{className:"pet-send",onClick:()=>pe(),disabled:m||!g.trim()},"say")),o.default.createElement("button",{className:"cmp-key-link",onClick:()=>k(!0)},p?`key ${Ds(p)}`:"connect an ai key"))}function ig({onSaved:e,initialError:t,onCancel:n}){let[r,a]=(0,o.useState)(""),[i,l]=(0,o.useState)(()=>_n()),[s,u]=(0,o.useState)(!1),[c,d]=(0,o.useState)(t||null),p=(0,o.useRef)(null);(0,o.useEffect)(()=>{p.current?.focus()},[]);let h=async()=>{let v=r.trim();if(!(!v||s)){u(!0),d(null);try{let k=await tg(v),x=Qh(v);l(x),a(""),D.success(),e(v,k||(x.length>1?`${x.length} keys connected`:null),{keepOpen:x.length>1})}catch(k){d(k.message||"Couldn't verify that key."),D.error()}finally{u(!1)}}};return o.default.createElement("div",{className:"task-list ai-scroll"},o.default.createElement("div",{className:"ai-gate"},o.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),o.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),o.default.createElement("div",{className:"ai-gate-sub"},"the assistant needs an AI key. all of these have a free tier \u2014 pick whichever you like, or add several so it keeps working when one runs out."),o.default.createElement("div",{className:"prov-list"},Ka.filter(v=>v.free).map(v=>o.default.createElement("a",{key:v.id,className:"prov-chip",href:`https://${v.where}`,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("span",{className:"prov-chip-main"},o.default.createElement("span",{className:"prov-name"},v.label),o.default.createElement("span",{className:"prov-where"},v.where)),o.default.createElement("span",{className:"prov-free"},v.free)))),o.default.createElement("div",{className:"ai-gate-steps-note"},"sign in, create a key, paste it below. no card needed for any of them. adding two from ",o.default.createElement("i",null,"different")," providers is what actually buys you headroom."),o.default.createElement("input",{ref:p,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026 \xB7 gsk_\u2026 \xB7 csk-\u2026 \xB7 nvapi-\u2026",value:r,onChange:v=>a(v.target.value),onKeyDown:v=>{v.key==="Enter"&&h()},disabled:s}),(()=>{let v=so(r);return r.trim()?v?o.default.createElement("div",{className:"prov-detected"},"detected: ",v.label,v.note?` \u2014 ${v.note}`:""):o.default.createElement("div",{className:"prov-detected prov-detected-warn"},"unknown prefix \u2014 if it's a Mistral key, paste it as mistral:YOUR_KEY"):null})(),c&&o.default.createElement("div",{className:"ai-error ai-gate-error"},c),o.default.createElement("div",{className:"ai-gate-actions"},o.default.createElement("button",{className:"ai-apply",onClick:h,disabled:s||!r.trim()},s?"checking\u2026":i.length?"add key":"save key"),n&&o.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),i.length>0&&o.default.createElement("div",{className:"keypool"},o.default.createElement("div",{className:"keypool-head"},o.default.createElement("span",null,i.length," key",i.length===1?"":"s"," connected"),o.default.createElement("span",{className:"keypool-hint"},"tried in order")),i.map((v,k)=>{let x=so(v);return o.default.createElement("div",{className:"keypool-row",key:v},o.default.createElement("span",{className:"keypool-num"},k+1),o.default.createElement("span",{className:"keypool-prov"},x?x.label:"?"),o.default.createElement("span",{className:"keypool-val"},Ds(v)),o.default.createElement("button",{className:"keypool-del",onClick:()=>{l(Zh(v)),D.delete()}},"remove"))}),o.default.createElement("div",{className:"keypool-note"},"tried top to bottom; a rate-limited key is skipped automatically.",i.filter(v=>so(v)?.id==="gemini").length>1&&o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," several Gemini keys from the same google account share one quota and add no capacity \u2014 mix in a different provider instead."),(()=>{let v=new Set(i.map(k=>so(k)?.id).filter(Boolean));return i.length<2||v.size!==1||v.has("gemini")?null:o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," every key is ",so(i[0]).label," \u2014 one outage takes the assistant down. add a second provider.")})())),o.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function Ae(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function lg(e){typeof e=="number"&&Number.isFinite(e)&&e>Ja&&(Ja=e)}function sg(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(a=>n(a?.id))}),t}function ug({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:a,goodHabits:i,badHabits:l,rewards:s,setRewards:u,totalXP:c,setTab:d}){let p=(0,o.useMemo)(()=>of(i,l||[],s),[i,l,s]),h=Ts(),v=h.hour*60+h.minute,{sorted:k,currentId:x,nextId:T}=Ls(e,v),g=k.find(z=>z.id===x),f=k.find(z=>z.id===T),m=j(0),y=z=>{let I=!(e.find(E=>E.id===z)?.history||[]).includes(m);t(E=>E.map(A=>{if(A.id!==z)return A;let Se=(A.history||[]).includes(m)?A.history.filter(re=>re!==m):[...A.history||[],m];return{...A,history:Se.slice(-60)}})),po.propagate("routine",z,I),I?(D.success(),ln.emit("routineDone")):D.click()},w=(0,o.useMemo)(()=>{let z={high:0,mid:1,low:2};return[...n].filter(I=>!I.done).sort((I,E)=>z[I.priority]-z[E.priority])},[n]),b=z=>{r(I=>I.map(E=>E.id===z?{...E,done:!E.done}:E)),D.success()},_=(0,o.useMemo)(()=>s.filter(z=>p>=z.cost),[s,p]),N=z=>{u(I=>I.map(E=>E.id===z?{...E,claimed:[...E.claimed||[],m]}:E)),D.success()},O=(0,o.useMemo)(()=>{let z={},I=E=>{(E||[]).forEach(A=>{z[A]=(z[A]||0)+1})};return e.forEach(E=>I(E.history)),a.forEach(E=>I(E.history)),i.forEach(E=>I(E.history)),z},[e,a,i]),L=g||f,W=!!g,ae=L?(L.history||[]).includes(m):!1;return o.default.createElement("div",{className:"task-list today-view"},o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,W?"HAPPENING NOW":"NEXT UP")),L?o.default.createElement("div",{className:"today-card"},o.default.createElement("div",{className:"today-card-row"},o.default.createElement("span",{className:"today-card-time"},At(lt(L.time))),o.default.createElement("span",{className:"today-card-label"},L.label)),o.default.createElement("div",{className:"today-card-sub"},W?`in progress \xB7 ${Dt(L.duration)}`:`in ${Math.max(0,lt(L.time)-v)}m \xB7 ${Dt(L.duration)}`),o.default.createElement("button",{className:`today-mark-btn ${ae?"done":""}`,onClick:()=>y(L.id)},ae?"\u2713 completed today":"mark complete")):o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no routines set up yet")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"ACTIVITY")),o.default.createElement(ih,{counts:O,weeksBack:12}),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"OPEN TASKS"),w.length>0&&o.default.createElement("button",{className:"today-view-all",onClick:()=>d("tasks")},"view all in tasks \u2192")),w.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):o.default.createElement("div",{className:"today-list"},w.slice(0,5).map((z,I)=>o.default.createElement("div",{key:z.id,className:"today-task-row",style:{animationDelay:`${I*35}ms`}},o.default.createElement("button",{className:"today-task-check",onClick:()=>b(z.id),"aria-label":"Complete task"}),o.default.createElement("span",{className:"today-task-text"},z.text),o.default.createElement("span",{className:`today-prio-dot ${z.priority}`}))),w.length>5&&o.default.createElement("button",{className:"today-more",onClick:()=>d("tasks")},"+",w.length-5," more")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),o.default.createElement("span",{className:"today-xp-total"},o.default.createElement(gt,{value:c})," XP")),_.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):o.default.createElement("div",{className:"today-list"},_.map((z,I)=>o.default.createElement("div",{key:z.id,className:"today-task-row",style:{animationDelay:`${I*35}ms`}},o.default.createElement("span",{className:"today-task-text"},z.label),o.default.createElement("span",{className:"today-reward-cost"},z.cost," XP"),o.default.createElement("button",{className:"today-claim-btn",onClick:()=>N(z.id)},"claim")))))}function cg(){let[e,t]=(0,o.useState)("today"),[n,r]=rh(),a=C=>{C!==e&&D.whoosh(),t(C)},[i,l]=(0,o.useState)(()=>Ae(Ip,Ih)),[s,u]=(0,o.useState)(()=>Ae(Fp,uh)),[c,d]=(0,o.useState)(()=>Ae($p,vh)),[p,h]=(0,o.useState)(()=>Ae(Op,yh)),[v,k]=(0,o.useState)(()=>Ae(jp,_h)),[x,T]=(0,o.useState)(()=>Ae(Up,Th)),[g,f]=(0,o.useState)(()=>Ae(Wp,Lh)),m=(0,o.useMemo)(()=>rf(v,x),[v,x,g]),y=(0,o.useMemo)(()=>af(m).level,[m]),w=Z0(y),b=X0(y),{links:_,setLinks:N}=W0(),O=Mh(),[L,W]=(0,o.useState)(null);(0,o.useEffect)(()=>Xa.register(C=>W(C)),[]),(0,o.useEffect)(()=>po.register((C,B,G)=>{U0(zn(C,B),G,_,{setRoutines:u,setVaultHabits:d,setGoodHabits:k},j(0))}),[_]);let ae=j(0),z=(0,o.useMemo)(()=>{let C=Ae(Ha,{});return{level:y,tasksDone:i.filter(B=>B.done).length,bestStreak:Math.max(v.reduce((B,G)=>Math.max(B,xs(G.history)),0),s.reduce((B,G)=>Math.max(B,xs(G.history)),0)),doneToday:v.filter(B=>(B.history||[]).includes(ae)).length,totalHabits:v.length,routinesDoneToday:s.filter(B=>(B.history||[]).includes(ae)).length,totalRoutines:s.length,vaultCount:c.length,friendship:b.pet.friendship,petStage:b.pet.stage,chats:b.pet.chats,calmSessions:C.calmSessions||0,earlyFinish:!!C.earlyFinish,lateFinish:!!C.lateFinish,returnedAfterGap:!!C.returnedAfterGap}},[y,i,v,s,c,b.pet,ae]),I=H0(z),[E,A]=(0,o.useState)(null);(0,o.useEffect)(()=>{let C=Ae(Ha,null);if(!C||C.seenLevel===void 0){uo({seenLevel:y});return}let B=C.seenLevel;if(y>B){let G=V0(y);I.addCoins(G);let le=dr.filter(Me=>Me.unlockLevel>B&&Me.unlockLevel<=y);A({level:y,coins:G,unlockedTheme:le.length?le[le.length-1]:null,extraThemes:le.length>1?le.length-1:0,evolvedTo:Wa(y).stage>Wa(B).stage?Wa(y).stage:null}),uo({seenLevel:y})}else y<B&&uo({seenLevel:y})},[y]);let[ee,Se]=(0,o.useState)(""),[re,V]=(0,o.useState)("mid"),[Y,pe]=(0,o.useState)("all"),Ee=(0,o.useRef)(null),ke=(0,o.useRef)(null),[Ze,sn]=(0,o.useState)(null),je=Fh(),[$,X]=(0,o.useState)(()=>localStorage.getItem(ws)==="1"),[ie,Ce]=(0,o.useState)(!1),[ho,go]=(0,o.useState)(!1);(0,o.useEffect)(()=>{$&&Vp(s)},[s,$]);let Ya=async()=>{if(!ie){Ce(!0);try{$?(await Yh(),localStorage.setItem(ws,"0"),X(!1),De("success","Notifications turned off")):(await Xh(),await Vp(s),localStorage.setItem(ws,"1"),X(!0),De("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(C){De("error",C.message||"Couldn't set up notifications")}finally{Ce(!1)}}},De=(C,B)=>{sn({type:C,text:B})};(0,o.useEffect)(()=>{if(!Ze)return;let C=setTimeout(()=>sn(null),3200);return()=>clearTimeout(C)},[Ze]);let Ln=()=>{try{let C={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:c,projects:p,goodHabits:v,badHabits:x,rewards:g}},B=new Blob([JSON.stringify(C,null,2)],{type:"application/json"}),G=URL.createObjectURL(B),le=j(0),Me=document.createElement("a");Me.href=G,Me.download=`tasks-sh-backup-${le}.json`,document.body.appendChild(Me),Me.click(),Me.remove(),URL.revokeObjectURL(G),De("ok","backup exported")}catch{De("err","export failed")}},Pn=()=>ke.current?.click(),S=C=>{let B=C.target.files&&C.target.files[0];if(C.target.value="",!B)return;let G=new FileReader;G.onerror=()=>De("err","couldn't read that file"),G.onload=()=>{try{let le=JSON.parse(String(G.result)),Me=le&&typeof le=="object"&&le.data?le.data:le;if(!Me||typeof Me!="object")throw new Error("bad shape");let $s={tasks:l,routines:u,vaultHabits:d,projects:h,goodHabits:k,badHabits:T,rewards:f},vo=0;for(let Qa of Object.keys($s))Array.isArray(Me[Qa])&&($s[Qa](Me[Qa]),vo++);if(vo===0){De("err","no recognizable data in that file");return}lg(sg(Me)),De("ok",`imported ${vo} data set${vo===1?"":"s"}`)}catch{De("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},G.readAsText(B)},F=Ts(),Q=F.hour*60+F.minute,{currentId:U,sorted:K}=Ls(s,Q),[Re,Bt]=(0,o.useState)(null),It=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{if(It.current===void 0){It.current=U;return}if(U!==It.current){let C=K.find(B=>B.id===U);C&&Bt({id:U,label:C.label,time:C.time}),It.current=U}},[U,K]),(0,o.useEffect)(()=>{if(!Re)return;let C=setTimeout(()=>Bt(null),6e3);return()=>clearTimeout(C)},[Re]),(0,o.useEffect)(()=>{try{localStorage.setItem(Ip,JSON.stringify(i))}catch{}},[i]),(0,o.useEffect)(()=>{try{localStorage.setItem(Fp,JSON.stringify(s))}catch{}},[s]),(0,o.useEffect)(()=>{try{localStorage.setItem($p,JSON.stringify(c))}catch{}},[c]),(0,o.useEffect)(()=>{try{localStorage.setItem(Op,JSON.stringify(p))}catch{}},[p]),(0,o.useEffect)(()=>{try{localStorage.setItem(jp,JSON.stringify(v))}catch{}},[v]),(0,o.useEffect)(()=>{try{localStorage.setItem(Up,JSON.stringify(x))}catch{}},[x]),(0,o.useEffect)(()=>{try{localStorage.setItem(Wp,JSON.stringify(g))}catch{}},[g]);let Ft=(0,o.useMemo)(()=>{let C=i.length,B=i.filter(Me=>Me.done).length,G=C-B,le=C===0?0:Math.round(B/C*100);return{total:C,done:B,pending:G,pct:le}},[i]),Bs=(0,o.useMemo)(()=>{let C=i.filter(B=>!B.done);return Va.map(B=>({key:B.key,label:B.label,color:B.color,value:C.filter(G=>G.priority===B.key).length}))},[i]),Is=(0,o.useMemo)(()=>{let C=i;return Y==="active"&&(C=C.filter(B=>!B.done)),Y==="done"&&(C=C.filter(B=>B.done)),[...C].sort((B,G)=>{if(B.done!==G.done)return B.done?1:-1;let le={high:0,mid:1,low:2};return le[B.priority]-le[G.priority]})},[i,Y]),Fs=()=>{let C=ee.trim();C&&(l(B=>[...B,{id:xe(),text:C,done:!1,priority:re,createdAt:Date.now()}]),Se(""),Ee.current?.focus(),D.click())},cf=C=>{let B=!i.find(G=>G.id===C)?.done;l(G=>G.map(le=>le.id===C?{...le,done:!le.done}:le)),B?(D.success(),ln.emit("taskDone")):D.click()},df=C=>{l(B=>B.filter(G=>G.id!==C)),D.delete()},pf=()=>{l(C=>C.filter(B=>!B.done)),D.whoosh()};return o.default.createElement("div",{className:"app-root","data-particle":w.theme.ambient.particle},I.current&&o.default.createElement(Wh,{id:I.current,onDone:I.shift}),E&&o.default.createElement(Jh,{level:E.level,coins:E.coins,unlockedTheme:E.unlockedTheme,extraThemes:E.extraThemes,evolvedTo:E.evolvedTo,onDone:()=>A(null)}),b.evolution&&o.default.createElement(Kh,{from:b.evolution.from,to:b.evolution.to,petName:b.pet.name,onDone:b.clearEvolution}),L&&o.default.createElement(Uh,{selfRef:L,data:{routines:s,goodHabits:v,vaultHabits:c},links:_,setLinks:N,onClose:()=>W(null)}),ho&&o.default.createElement(Hh,{ctl:w,level:y,totalXP:m,earned:I.earned,coins:I.coins,onClose:()=>go(!1)}),o.default.createElement("style",null,`
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
      `),o.default.createElement("div",{className:"panel"},o.default.createElement(Q0,{theme:w.theme,phase:w.phase,calm:w.calm,scoped:!0}),Re&&o.default.createElement("div",{className:"quest-banner",onClick:()=>Bt(null)},o.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),o.default.createElement("span",{className:"quest-banner-text"},o.default.createElement("b",null,"Now:")," ",Re.label),o.default.createElement("button",{className:"quest-banner-close",onClick:C=>{C.stopPropagation(),Bt(null)},"aria-label":"Dismiss"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),o.default.createElement("div",{className:"titlebar"},o.default.createElement("div",{className:"titlebar-left"},o.default.createElement("div",{className:"dots"},o.default.createElement("span",{className:"dot red"}),o.default.createElement("span",{className:"dot amber"}),o.default.createElement("span",{className:"dot green"})),o.default.createElement("span",{className:"titlebar-name"},"tasks.sh"),o.default.createElement(dh,null)),o.default.createElement("div",{className:"titlebar-right"},o.default.createElement("input",{type:"file",accept:"application/json",ref:ke,onChange:S,style:{display:"none"}}),o.default.createElement("button",{className:`titlebar-icon-btn ${$?"notify-on":""}`,onClick:Ya,disabled:ie,"aria-label":$?"Turn off notifications":"Turn on notifications",title:$?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},$?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{go(!0),D.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:Pn,"aria-label":"Import backup",title:"Import backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:Ln,"aria-label":"Export backup",title:"Export backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("span",{className:"clock"},new Date(je).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),Ze&&o.default.createElement("div",{className:`data-toast ${Ze.type}`},Ze.text),o.default.createElement("div",{className:"tabs",role:"tablist","aria-label":"Sections"},[["today","today"],["tasks","tasks"],["routines","routines"],["vault","vault"],["quest","quest"],["pet",b.pet.name.toLowerCase()]].map(([C,B])=>o.default.createElement("button",{key:C,role:"tab",id:`tab-${C}`,"aria-selected":e===C,"aria-controls":"tab-panel",className:`${C==="pet"?"tab-pet ":""}${e===C?"active":""}`.trim(),onClick:()=>a(C)},B))),o.default.createElement("div",{key:e,className:"tab-content",id:"tab-panel",role:"tabpanel","aria-labelledby":`tab-${e}`},e==="today"?o.default.createElement(ug,{routines:s,setRoutines:u,tasks:i,setTasks:l,vaultHabits:c,goodHabits:v,badHabits:x,rewards:g,setRewards:f,totalXP:m,setTab:a}):e==="tasks"?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"stats-bar stats-bar-viz"},o.default.createElement(zs,{pct:Ft.pct,size:64,stroke:5.5,label:`${Ft.pct}%`}),o.default.createElement("div",{className:"stats-row-viz"},o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(gt,{value:Ft.total}))," total"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(gt,{value:Ft.pending}))," pending"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(gt,{value:Ft.done}))," done"))),Ft.pending>0&&o.default.createElement("div",{className:"donut-card"},o.default.createElement(ef,{size:96,stroke:14,centerLabel:Ft.pending,centerSublabel:"open",segments:Bs.map(C=>({key:C.key,value:C.value,color:C.color}))}),o.default.createElement("div",{className:"donut-legend"},Bs.map(C=>o.default.createElement("div",{className:"donut-legend-row",key:C.key},o.default.createElement("span",{className:"donut-legend-dot",style:{background:C.color}}),o.default.createElement("span",null,C.label," priority"),o.default.createElement("span",{className:"donut-legend-val"},C.value))))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{ref:Ee,type:"text",placeholder:"add a task, press enter...",value:ee,onChange:C=>Se(C.target.value),onKeyDown:C=>C.key==="Enter"&&Fs()}),o.default.createElement("div",{className:"prio-select"},Va.map(C=>o.default.createElement("button",{key:C.key,className:re===C.key?"active":"",style:{"--pc":C.color},onClick:()=>V(C.key)},C.label))),o.default.createElement("button",{className:"add-btn",onClick:Fs,"aria-label":"Add task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"filters"},["all","active","done"].map(C=>o.default.createElement("button",{key:C,className:Y===C?"active":"",onClick:()=>pe(C)},C)),o.default.createElement("span",{className:"spacer"}),Ft.done>0&&o.default.createElement("button",{className:"clear-btn",onClick:pf},"clear done")),o.default.createElement("div",{className:"task-list"},Is.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},Y==="done"?"nothing completed yet":"queue's empty \u2014 add something")):Is.map((C,B)=>o.default.createElement(Oh,{key:C.id,task:C,now:je,index:B,onToggle:cf,onDelete:df})))):e==="routines"?o.default.createElement(fh,{routines:s,setRoutines:u}):e==="vault"?o.default.createElement(Eh,{vaultHabits:c,setVaultHabits:d,projects:p,setProjects:h}):e==="quest"?o.default.createElement(Bh,{tagCtl:O,goodHabits:v,setGoodHabits:k,badHabits:x,setBadHabits:T,rewards:g,setRewards:f}):o.default.createElement(ag,{petCtl:b,state:{routines:s,vaultHabits:c,goodHabits:v,badHabits:x,rewards:g,totalXP:m},setters:{setRoutines:u,setVaultHabits:d,setGoodHabits:k,setBadHabits:T,setRewards:f},showDataMsg:De,ctx:{pet:b.pet,level:y,hour:cr().hour,phase:w.phase.id,doneToday:v.filter(C=>(C.history||[]).includes(j(0))).length,totalToday:v.length,streak:v.reduce((C,B)=>Math.max(C,xs(B.history)),0),routineNow:null,nextRoutine:null}}))))}var dg=Kp.default.createRoot(document.getElementById("root"));dg.render(o.default.createElement(cg));})();
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
